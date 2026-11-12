"""
ExerciseGenerator - Παραγωγή αρχείων ασκήσεων JavaScript (window.GROUPS & window.EXERCISES) για το 4gnosin.github.io.
"""

from __future__ import annotations

import json
import os
import re
import time
from pathlib import Path
from typing import Any

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

try:
    import truststore
    truststore.inject_into_ssl()
except Exception:
    pass

try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None
    types = None

if __package__ is None or __package__ == "":
    import sys
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))
    from src.utils.api_retry import call_with_retry
    from src.utils.latex_sanitizer import sanitize_obj, sanitize_text
    from src.utils.structure import (
        KIND_GROUP_IDS,
        apply_greek_ordinals,
        catalog_id_for_subject,
        extract_bank_code,
        subsection_sort_key,
        with_structure_rules,
    )
    from src.validators.site_validator import SiteValidator
else:
    from ..utils.api_retry import call_with_retry
    from ..utils.latex_sanitizer import sanitize_obj, sanitize_text
    from ..utils.structure import (
        KIND_GROUP_IDS,
        apply_greek_ordinals,
        catalog_id_for_subject,
        extract_bank_code,
        subsection_sort_key,
        with_structure_rules,
    )
    from ..validators.site_validator import SiteValidator


def _js_push_prefix(route_id: str, kind: str) -> str:
    """
    thermo → window.GROUPS / window.EXERCISES (legacy).
    Άλλα μαθήματα → window.SUBJECT_DATA["id"].groups/exercises
    ώστε οι ασκήσεις Αντοχής κ.λπ. να ΜΗΝ εμφανίζονται στη Θερμοδυναμική.
    """
    if route_id == "thermo":
        global_name = "GROUPS" if kind == "groups" else "EXERCISES"
        return (
            f"window.{global_name} = window.{global_name} || [];\n"
            f"window.{global_name}.push(...\n"
        )
    field = "groups" if kind == "groups" else "exercises"
    key = json.dumps(route_id, ensure_ascii=False)
    return (
        "window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n"
        f"window.SUBJECT_DATA[{key}] = window.SUBJECT_DATA[{key}] "
        "|| { sections: [], groups: [], exercises: [] };\n"
        f"window.SUBJECT_DATA[{key}].{field}.push(...\n"
    )


def normalize_subchapter_group_id(chapter: int, group_id: str, title: str = "") -> str:
    """
    Διασφαλίζει ότι το id της ομάδας (και το αντίστοιχο .js αρχείο)
    περιλαμβάνει τόσο το κεφάλαιο όσο και το υποκεφάλαιο με 2 ψηφία συν περιγραφή:
    π.χ. ch02-04-psychrometry, ch02-10-exartimata, ch08-02-rolos-klimatistikon-monadon
    """
    slug = (group_id or "").strip()

    # 1. Ελέγχουμε αν υπάρχει ήδη πλήρης μορφή chNN-SS-slug (ή chN-S-slug)
    m_full = re.match(r"^ch0*(\d{1,2})[-_]0*(\d{1,2})[-_](.+)$", slug, flags=re.IGNORECASE)
    if m_full:
        c_num = int(m_full.group(1))
        s_num = int(m_full.group(2))
        sub_slug = m_full.group(3).strip("-_")
        return f"ch{c_num:02d}-{s_num:02d}-{sub_slug}"

    # 2. Αναζήτηση υποκεφαλαίου στον τίτλο (π.χ. "2.4 Η αποτύπωση...", "2.10 ...")
    sub_num = None
    if title:
        m_title = re.search(r"\b(\d{1,2})\.(\d{1,2})\b", title)
        if m_title:
            sub_num = int(m_title.group(2))

    # 3. Αν δεν βρέθηκε στον τίτλο, αναζήτηση αριθμού μετά το chNN (π.χ. ch02-4-psychrometry)
    if sub_num is None:
        m_id_num = re.match(r"^ch0*\d{1,2}[-_](\d{1,2})[-_](.+)$", slug, flags=re.IGNORECASE)
        if m_id_num:
            sub_num = int(m_id_num.group(1))
            slug = m_id_num.group(2)

    # Καθαρισμός του slug από τυχόν προθέματα chNN-
    cleaned_slug = re.sub(r"^ch0*\d{1,2}[-_]?", "", slug, flags=re.IGNORECASE).strip("-_")
    if not cleaned_slug or cleaned_slug.isdigit():
        cleaned_slug = "section"

    if sub_num is not None:
        return f"ch{int(chapter):02d}-{sub_num:02d}-{cleaned_slug}"

    return f"ch{int(chapter):02d}-{cleaned_slug}"


def exercise_js_filename(chapter: int, group_id: str, title: str = "") -> str:
    """Όνομα αρχείου ασκήσεων με αριθμό κεφαλαίου και υποκεφαλαίου: ch02-04-psychrometry.js ή ch02-10-....js"""
    norm = normalize_subchapter_group_id(chapter, group_id, title)
    return f"{norm}.js"


class ExerciseGenerator:
    """
    Δημιουργεί διαδραστικές ασκήσεις (groups.js και επιμέρους αρχεία ασκήσεων) για το 4gnosin.github.io.
    """

    DEFAULT_MODEL = "gemini-3.8-flash"

    def __init__(
        self,
        api_key: str | None = None,
        model: str | None = None,
        base_dir: Path | None = None,
    ) -> None:
        self.base_dir = base_dir or Path(__file__).resolve().parent.parent.parent
        self.prompts_dir = self.base_dir / "prompts"
        self.prompt_file = self.prompts_dir / "site_exercise_prompt.md"

        if genai is None or types is None:
            raise ImportError(
                "Η βιβλιοθήκη 'google-genai' δεν είναι εγκατεστημένη.\n"
                "Εκτελέστε: pip install -r scripts/requirements.txt"
            )

        self.api_key = api_key or os.getenv("GEMINI_API_KEY")
        if not self.api_key:
            raise ValueError(
                "Δεν βρέθηκε το GEMINI_API_KEY.\n"
                "Παρακαλούμε ορίστε το στο αρχείο .env."
            )

        self.model_name = model or os.getenv("GEMINI_MODEL") or self.DEFAULT_MODEL
        self.client = genai.Client(api_key=self.api_key)

    def _generate_content(self, **kwargs: Any) -> Any:
        """Κλήση Gemini με αυτόματο retry σε 503 / high demand."""
        return call_with_retry(
            self.client.models.generate_content,
            label="Gemini",
            max_attempts=20,
            base_delay=5.0,
            max_delay=90.0,
            **kwargs,
        )

    def load_system_prompt(self) -> str:
        """Φορτώνει το prompt παραγωγής ασκήσεων εμπλουτισμένο με τη μόνιμη μνήμη κανόνων (χωρίς άσχετους κανόνες πλοήγησης)."""
        if not self.prompt_file.exists():
            raise FileNotFoundError(f"Δεν βρέθηκε το αρχείο prompt: {self.prompt_file}")
        base_prompt = self.prompt_file.read_text(encoding="utf-8")
        try:
            from ..utils.agent_memory import get_agent_memory
            memory_injection = get_agent_memory().get_prompt_injection("exercises")
            return base_prompt + "\n\n" + memory_injection
        except Exception:
            return base_prompt

    @staticmethod
    def clean_js_output(raw_text: str) -> str:
        """Καθαρίζει τυχόν markdown backticks."""
        text = raw_text.strip()
        if text.startswith("```"):
            text = re.sub(r"^```(?:javascript|js|json)?\s*", "", text, flags=re.IGNORECASE)
            text = re.sub(r"\s*```$", "", text)
        try:
            from ..generators.theory_generator import TheoryGenerator
            text = TheoryGenerator.normalize_greek_trig(text)
        except Exception:
            pass
        return text.strip()

    def generate_groups(
        self,
        source_content: str,
        grade: str = "b",
        subject: str = "antoxi",
        chapter: int = 1,
        output_dir: Path | None = None,
    ) -> tuple[Path, list[dict[str, Any]]]:
        """
        Παράγει το αρχείο groups.js για το κεφάλαιο.
        """
        system_prompt = self.load_system_prompt()
        prompt = (
            f"Παρήγαγε το αρχείο 'groups.js' για το Κεφάλαιο {chapter} του μαθήματος '{subject}' (Τάξη {grade}).\n"
            f"Δημιούργησε μία ομάδα ανά ΥΠΟΕΝΟΤΗΤΑ ύλης, σε αριθμητική σειρά. "
            f"ΑΠΑΓΟΡΕΥΕΤΑΙ ομαδοποίηση ανά είδος άσκησης (tf/mc/match/calc).\n\n"
            f"ΥΛΗ ΚΕΦΑΛΑΙΟΥ:\n{source_content}\n\n"
            f"ΕΞΑΓΩΓΗ: ΜΟΝΟ έγκυρο JSON Array με τις ομάδες:\n"
            f'[{{\"id\": \"chNN-SS-slug\", \"chapter\": {chapter}, \"title\": \"...\", \"desc\": \"...\"}}]'
        )

        response = self._generate_content(
            model=self.model_name,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.2,
                response_mime_type="application/json",
            ),
        )

        cleaned = self.clean_js_output(response.text or "")
        try:
            groups_data = json.loads(cleaned)
        except json.JSONDecodeError:
            extracted = SiteValidator.extract_json_from_js(cleaned)
            if extracted:
                groups_data = extracted
            else:
                raise
        if isinstance(groups_data, dict) and "groups" in groups_data:
            groups_data = groups_data["groups"]
        groups_data = sanitize_obj(groups_data)
        route_id = catalog_subject_id(subject)
        js_code = (
            _js_push_prefix(route_id, "groups")
            + json.dumps(groups_data, ensure_ascii=False, indent=2)
            + "\n);\n"
        )
        errors = SiteValidator.validate_groups_code(js_code)
        if errors:
            raise ValueError("groups.js δεν περνά την επικύρωση: " + "; ".join(errors))

        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "exercises" / grade / subject / f"chapter-{chapter:02d}"
        target_dir.mkdir(parents=True, exist_ok=True)

        target_file = target_dir / "groups.js"
        target_file.write_text(js_code, encoding="utf-8")
        return target_file, groups_data

    def generate_exercise_file(
        self,
        source_content: str,
        group_id: str,
        group_title: str,
        grade: str = "b",
        subject: str = "antoxi",
        chapter: int = 1,
        output_dir: Path | None = None,
    ) -> Path:
        """
        Παράγει ένα αρχείο ασκήσεων για μια συγκεκριμένη ομάδα (π.χ. units.js, calc.js).
        """
        system_prompt = self.load_system_prompt()
        user_prompt = (
            f"Παρήγαγε το αρχείο ασκήσεων '{group_id}.js' για την υποενότητα '{group_title}' "
            f"(group: \"{group_id}\") του Κεφαλαίου {chapter}.\n"
            f"Κάθε άσκηση είναι ΕΝΑ θέμα Τράπεζας (κωδικός #…). Όλα τα υποερωτήματα στο ίδιο "
            f"αντικείμενο, layout unified, μικτά kind επιτρέπονται. "
            f"Στο code γράψε Θέμα 2<sup>ο</sup> και τον κωδικό (#18622).\n"
            f"Κάθε ερώτημα ΠΡΕΠΕΙ να έχει πεδίο 'explain'.\n\n"
            f"ΥΛΗ:\n{source_content}\n\n"
            f"ΕΞΑΓΩΓΗ: ΜΟΝΟ έγκυρο JSON Array με τα αντικείμενα των ασκήσεων ([{{...}}, {{...}}])."
        )

        response = self._generate_content(
            model=self.model_name,
            contents=user_prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.2,
                response_mime_type="application/json",
            ),
        )

        cleaned = self.clean_js_output(response.text or "")
        try:
            ex_data = json.loads(cleaned)
        except json.JSONDecodeError:
            extracted = SiteValidator.extract_json_from_js(cleaned)
            if extracted:
                ex_data = extracted
            else:
                raise
        if isinstance(ex_data, dict) and "exercises" in ex_data:
            ex_data = ex_data["exercises"]
        ex_data = sanitize_obj(ex_data)
        route_id = catalog_subject_id(subject)
        js_code = (
            _js_push_prefix(route_id, "exercises")
            + json.dumps(ex_data, ensure_ascii=False, indent=2)
            + "\n);\n"
        )
        errors = SiteValidator.validate_exercises_code(js_code)
        if errors:
            raise ValueError(f"{group_id}.js δεν περνά την επικύρωση: " + "; ".join(errors))

        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "exercises" / grade / subject / f"chapter-{chapter:02d}"
        target_dir.mkdir(parents=True, exist_ok=True)

        target_file = target_dir / exercise_js_filename(chapter, group_id)
        target_file.write_text(js_code, encoding="utf-8")
        return target_file

    def _build_exercise_prompt(
        self,
        source_content: str,
        grade: str,
        subject: str,
        chapter: int,
    ) -> str:
        """Δημιουργεί το prompt για παραγωγή διαδραστικών ασκήσεων (συμπτυγμένο, χωρίς διπλότυπα tokens)."""
        return (
            f"Μετέτρεψε τα παρακάτω θέματα της Τράπεζας Θεμάτων και τις επίσημες ενδεικτικές λύσεις τους "
            f"σε διαδραστικές ασκήσεις για το 4gnosin.github.io.\n"
            f"Μάθημα: {subject}, Τάξη: {grade}, Κεφάλαιο: {chapter}.\n\n"
            "ΑΠΑΡΑΒΙΑΣΤΟΙ ΚΑΝΟΝΕΣ:\n"
            "1. 100% ΠΙΣΤΟΤΗΤΑ: Μην παραλείψεις ΚΑΝΕΝΑ θέμα και ΚΑΝΕΝΑ υποερώτημα (stem, subq, open-ended, calc, match, blank).\n"
            "2. ΑΠΑΝΤΗΣΕΙΣ: Άντλησε όλες τις σωστές επιλογές, τιμές και αιτιολογήσεις αποκλειστικά από την επίσημη λύση κάθε θέματος.\n"
            "3. ΣΧΗΜΑΤΑ: Βάλε εικόνα (ex.image ή item.hintImage) ΑΠΟΚΛΕΙΣΤΙΚΑ ΚΑΙ ΜΟΝΟ αν υπάρχει ρητό markdown image tag (![...](...)) στο κείμενο του συγκεκριμένου θέματος. ΑΠΑΓΟΡΕΥΕΤΑΙ ΑΥΣΤΗΡΑ η προσθήκη εικόνας αν δεν υπάρχει ρητή εικόνα στην πηγή!\n"
            "4. ΟΝΟΜΑΤΟΔΟΣΙΑ GROUPS: Το group id κάθε υποενότητας πρέπει να είναι αυστηρά 'ch{Κεφάλαιο:02d}-{Υποκεφάλαιο:02d}-{slug}'.\n"
            "5. ΑΝΤΙΣΤΟΙΧΙΣΗ (match): Στις στήλες Α (left) και Β (right) γράψε ΟΛΟΚΛΗΡΟ το πλήρες κείμενο ή τον μαθηματικό τύπο κάθε επιλογής (π.χ. '1. Ισόογκη μεταβολή', 'α. $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$'). ΠΟΤΕ σκέτους αριθμούς '1', '2' ή σκέτα γράμματα 'α', 'β'!\n"
            "6. ΜΑΘΗΜΑΤΙΚΑ & LATEX: Όλοι οι μαθηματικοί τύποι, κλάσματα, δείκτες και σύμβολα να είναι σωστά και καλαίσθητα σε LaTeX εντός $...$ (π.χ. $\\Delta U = 0$, $P_1 \\cdot V_1 = P_2 \\cdot V_2$). Ποτέ γυμνές εντολές LaTeX στο πεζό κείμενο.\n"
            "7. ΕΞΑΓΩΓΗ: Επέστρεψε αποκλειστικά ένα JSON object (ξεκινά με { και κλείνει με }): "
            '{"groups": [...], "exercises": [...], "omitted": []}\n\n'
            f"ΠΗΓΗ ΘΕΜΑΤΩΝ ΚΑΙ ΛΥΣΕΩΝ:\n{source_content}"
        )

    def _call_gemini_json(self, prompt: str) -> dict[str, Any]:
        """Καλεί το Gemini για JSON εξαγωγή με μέγιστο όριο tokens και καθαρισμό αποτελέσματος."""
        config_kwargs = {
            "system_instruction": self.load_system_prompt(),
            "response_mime_type": "application/json",
            "temperature": 0.1,
        }
        try:
            config = types.GenerateContentConfig(
                max_output_tokens=65536,
                **config_kwargs,
            )
        except Exception:
            config = types.GenerateContentConfig(**config_kwargs)

        response = self._generate_content(
            model=self.model_name,
            contents=prompt,
            config=config,
        )

        raw_result = self.clean_js_output(response.text or "")
        result = None

        # 1. Άμεση ανάγνωση JSON
        try:
            result = json.loads(raw_result, strict=False)
        except Exception:
            pass

        # 2. Αφαίρεση markdown fences αν υπάρχουν
        cleaned = raw_result
        if result is None:
            cleaned = re.sub(r"^```(?:json)?\s*", "", raw_result.strip(), flags=re.IGNORECASE)
            cleaned = re.sub(r"\s*```$", "", cleaned)
            try:
                result = json.loads(cleaned, strict=False)
            except Exception:
                pass

        # 3. Εξυγίανση μη έγκυρων escapes (πολύ συχνό σε LaTeX σύμβολα όπως \Delta, \phi, \text)
        if result is None:
            fixed_escapes = re.sub(r'(?<!\\)\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})', r'\\\\', cleaned)
            try:
                result = json.loads(fixed_escapes, strict=False)
            except Exception:
                pass

            # 4. Αφαίρεση trailing commas
            if result is None:
                try:
                    fixed_commas = SiteValidator.strip_trailing_commas(fixed_escapes)
                    result = json.loads(fixed_commas, strict=False)
                except Exception:
                    pass

        # 5. Αυτόματη επιδιόρθωση μέσω json_repair (σώζει unescaped quotes, control chars, unclosed brackets)
        if result is None:
            try:
                import json_repair
                repaired = json_repair.loads(cleaned)
                if repaired and isinstance(repaired, (dict, list)):
                    result = repaired
            except Exception:
                pass

        # 6. Fallback εξαγωγή μέσω SiteValidator
        if result is None:
            extracted = SiteValidator.extract_json_from_js(raw_result)
            if extracted:
                result = extracted

        if result is None:
            snippet = raw_result[:250].replace("\n", " ")
            raise ValueError(f"Το Gemini δεν επέστρεψε έγκυρο JSON για τις ασκήσεις. Απόσπασμα: {snippet!r}")

        if isinstance(result, list):
            if len(result) == 1 and isinstance(result[0], dict) and ("groups" in result[0] or "exercises" in result[0]):
                result = result[0]
            elif any(isinstance(x, dict) and ("groups" in x or "exercises" in x) for x in result):
                merged = {"groups": [], "exercises": [], "omitted": []}
                for item in result:
                    if isinstance(item, dict):
                        if "groups" in item and isinstance(item["groups"], list):
                            merged["groups"].extend(item["groups"])
                        if "exercises" in item and isinstance(item["exercises"], list):
                            merged["exercises"].extend(item["exercises"])
                        if "omitted" in item and isinstance(item["omitted"], list):
                            merged["omitted"].extend(item["omitted"])
                result = merged
            elif all(isinstance(x, dict) and ("items" in x or "kind" in x) for x in result):
                exercises = result
                groups = []
                seen_groups = set()
                for ex in exercises:
                    grp_id = ex.get("group") or "ch-general"
                    ex["group"] = grp_id
                    if grp_id not in seen_groups:
                        seen_groups.add(grp_id)
                        groups.append({
                            "id": grp_id,
                            "title": ex.get("title") or f"Ενότητα {grp_id}",
                            "blurb": f"Ασκήσεις ενότητας {grp_id}",
                        })
                result = {"groups": groups, "exercises": exercises, "omitted": []}

        if not isinstance(result, dict):
            raise ValueError("Η απάντηση του Gemini για τις ασκήσεις πρέπει να είναι αντικείμενο JSON.")

        return result

    def generate_chapter_exercises(
        self,
        source_markdown_path: Path | str,
        grade: str = "b",
        subject: str = "antoxi",
        chapter: int = 1,
        output_dir: Path | None = None,
        force: bool = False,
    ) -> list[Path]:
        """Classify source questions and generate validated exercise files."""
        path = Path(source_markdown_path)
        if not path.exists():
            raise FileNotFoundError(f"Το αρχείο δεν βρέθηκε: {path}")

        content = path.read_text(encoding="utf-8")
        if not content.strip():
            raise ValueError(f"Το αρχείο δεν περιέχει κείμενο: {path}")
        # Τοπικός καθαρισμός συμβόλων (0 tokens) — σε περίπτωση παλιού/ακατέργαστου MD
        try:
            from src.utils.pdf_extractor import normalize_pdf_symbols
        except ImportError:
            from ..utils.pdf_extractor import normalize_pdf_symbols
        content = normalize_pdf_symbols(content)

        # Checkpoint / Cache υποδομή για ασφάλεια & οικονομία tokens
        cache_dir = self.base_dir / "data" / ".cache" / "exercises"
        checkpoint_file = cache_dir / f"{grade}_{subject}_ch{chapter:02d}_checkpoint.json"

        if force and checkpoint_file.exists():
            checkpoint_file.unlink()
            print("   🔄 [--force] Διαγραφή προηγούμενου checkpoint — εκκίνηση από την αρχή.")

        cached_data: dict[str, Any] = {"groups": [], "exercises": [], "omitted": []}
        completed_by_code: dict[str, dict[str, Any]] = {}

        if checkpoint_file.exists():
            try:
                cached_data = json.loads(checkpoint_file.read_text(encoding="utf-8"))
                for ex in cached_data.get("exercises", []):
                    bc = str(ex.get("bankCode") or "").strip()
                    if bc:
                        completed_by_code[bc] = ex
                if completed_by_code:
                    print(f"   📂 Βρέθηκε ενεργό checkpoint: {len(completed_by_code)} θέματα είναι ήδη έτοιμα.")
            except Exception as e:
                print(f"   ⚠️ Σφάλμα ανάγνωσης checkpoint: {e}")
                cached_data = {"groups": [], "exercises": [], "omitted": []}

        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "exercises" / grade / subject / f"chapter-{chapter:02d}"

        # Ανίχνευση αν υπάρχουν ήδη ασκήσεις στο site από παλαιότερη εκτέλεση
        if not force and target_dir.is_dir():
            for js_f in target_dir.glob("*.js"):
                if js_f.name == "groups.js":
                    continue
                try:
                    site_exs = SiteValidator.extract_json_from_js(js_f.read_text(encoding="utf-8"))
                    for ex in site_exs:
                        bc = str(ex.get("bankCode") or "").strip()
                        if bc and bc not in completed_by_code:
                            completed_by_code[bc] = ex
                except Exception:
                    pass

        # Εντοπισμός θεμάτων στην πηγή (## Θέμα #ΚΩΔΙΚΟΣ ή ## Θέμα)
        topic_pattern = re.compile(r'(?m)^##\s+Θέμα\s*(?:#?(\d+))?')
        topic_matches = list(topic_pattern.finditer(content))

        if topic_matches:
            preamble = content[:topic_matches[0].start()].strip()
            topic_sections = []
            topic_codes = []
            for i, match in enumerate(topic_matches):
                start = match.start()
                end = topic_matches[i + 1].start() if i + 1 < len(topic_matches) else len(content)
                topic_sections.append(content[start:end].strip())
                topic_codes.append(match.group(1) or f"Θέμα {i+1}")

            total_topics = len(topic_sections)

            merged_groups: list[dict[str, Any]] = list(cached_data.get("groups", []))
            merged_omitted: list[Any] = list(cached_data.get("omitted", []))

            # Διαχωρισμός σε έτοιμα (checkpoint) και εκκρεμή θέματα
            pending_items: list[tuple[int, str, str]] = []  # (1-based idx, t_sec, t_code)

            for idx, (t_sec, t_code) in enumerate(zip(topic_sections, topic_codes, strict=False), 1):
                code_lbl = f"#{t_code}" if str(t_code).isdigit() else str(t_code)
                code_key = str(t_code).strip()

                if code_key and code_key in completed_by_code:
                    ex = completed_by_code[code_key]
                    ex_grp = ex.get("group")
                    if ex_grp and not any(g.get("id") == ex_grp for g in merged_groups):
                        for g in cached_data.get("groups", []):
                            if g.get("id") == ex_grp:
                                merged_groups.append(g)
                                break
                    print(f"   ⏩ Θέμα {idx}/{total_topics} ({code_lbl}): Ήδη έτοιμο στο checkpoint (0 tokens — παράκαμψη)")
                else:
                    pending_items.append((idx, t_sec, t_code))

            if not pending_items:
                print(f"   ✨ Όλα τα {total_topics} θέματα είναι ήδη έτοιμα!")
            else:
                # Δυναμικό μέγεθος mini-block:
                # Αν εκκρεμούν έως 7 θέματα -> 1 κλήση όλα μαζί!
                # Αν εκκρεμούν πάνω από 7 θέματα -> μπλοκ των 5 θεμάτων.
                block_size = len(pending_items) if len(pending_items) <= 7 else 5
                blocks = [pending_items[i:i + block_size] for i in range(0, len(pending_items), block_size)]

                print(
                    f"\n📝 Παραγωγή ασκήσεων για '{path.name}': {len(pending_items)} εκκρεμή θέματα "
                    f"σε {len(blocks)} mini-block(s) (από σύνολο {total_topics} θεμάτων)..."
                )

                try:
                    for b_idx, block in enumerate(blocks, 1):
                        b_codes = [f"#{t_c}" if str(t_c).isdigit() else str(t_c) for _, _, t_c in block]
                        print(f"   ⏳ Mini-block {b_idx}/{len(blocks)} ({len(block)} θέματα: {', '.join(b_codes)}): Κλήση Gemini...")

                        block_content = (preamble + "\n\n" if preamble else "") + "\n\n---\n\n".join(t_s for _, t_s, _ in block)
                        block_prompt = self._build_exercise_prompt(
                            block_content, grade=grade, subject=subject, chapter=chapter
                        )
                        try:
                            block_result = self._call_gemini_json(block_prompt)
                        except Exception as block_err:
                            print(f"   ⚠️ Σφάλμα στο mini-block ({block_err}) — άμεση επανάληψη...")
                            time.sleep(2)
                            block_result = self._call_gemini_json(block_prompt)

                        # Επεξεργασία groups
                        for grp in block_result.get("groups", []):
                            if isinstance(grp, dict) and grp.get("id"):
                                if not any(g.get("id") == grp["id"] for g in merged_groups):
                                    merged_groups.append(grp)

                        # Επεξεργασία exercises & αντιστοίχιση με bank codes
                        block_exs = block_result.get("exercises", [])
                        for ex in block_exs:
                            if isinstance(ex, dict):
                                bc = str(ex.get("bankCode") or "").strip()
                                if not bc:
                                    bc = extract_bank_code(ex.get("title", "")) or extract_bank_code(ex.get("code", ""))
                                    if bc:
                                        ex["bankCode"] = bc
                                if bc:
                                    if not ex.get("id") or "chNN" in str(ex.get("id", "")):
                                        ex["id"] = f"ch{chapter:02d}-{bc}"
                                    completed_by_code[bc] = ex

                        # Fallback αντιστοίχιση με βάση τη σειρά του block
                        if len(block_exs) == len(block):
                            for (_, _, t_c), ex in zip(block, block_exs, strict=False):
                                t_c_str = str(t_c).strip()
                                if t_c_str.isdigit() and (t_c_str not in completed_by_code or not ex.get("bankCode")):
                                    ex["bankCode"] = t_c_str
                                    ex["id"] = f"ch{chapter:02d}-{t_c_str}"
                                    completed_by_code[t_c_str] = ex

                        merged_omitted.extend(block_result.get("omitted", []))

                        # Ανακατασκευή των ολοκληρωμένων ασκήσεων στη σειρά εμφάνισης του PDF
                        current_exercises = [
                            completed_by_code[str(tc).strip()]
                            for tc in topic_codes
                            if str(tc).strip() in completed_by_code
                        ]

                        # Άμεση ενημέρωση checkpoint στο δίσκο
                        cache_dir.mkdir(parents=True, exist_ok=True)
                        checkpoint_data = {
                            "chapter": chapter,
                            "subject": subject,
                            "grade": grade,
                            "total_topics": total_topics,
                            "groups": merged_groups,
                            "exercises": current_exercises,
                            "omitted": merged_omitted,
                        }
                        checkpoint_file.write_text(
                            json.dumps(checkpoint_data, ensure_ascii=False, indent=2),
                            encoding="utf-8",
                        )
                        print(f"      💾 Αποθηκεύτηκε στο checkpoint ({len(completed_by_code)}/{total_topics} θέματα έτοιμα)")

                        if b_idx < len(blocks):
                            time.sleep(2.0)

                except Exception as loop_err:
                    current_exercises = [
                        completed_by_code[str(tc).strip()]
                        for tc in topic_codes
                        if str(tc).strip() in completed_by_code
                    ]
                    if current_exercises:
                        print(f"\n⚠️ Η διαδικασία διεκόπη στο mini-block {b_idx}/{len(blocks)} ({loop_err}).")
                        print(f"💾 Άμεση αποθήκευση των {len(current_exercises)} ολοκληρωμένων θεμάτων στο site...")
                        try:
                            partial_files = self._save_and_validate_exercise_files(
                                groups=merged_groups,
                                exercises=current_exercises,
                                omitted=merged_omitted,
                                chapter=chapter,
                                grade=grade,
                                subject=subject,
                                output_dir=output_dir,
                                content=content,
                            )
                            print(f"✅ Ενημερώθηκαν {len(partial_files)} αρχεία στο site για τα θέματα που ολοκληρώθηκαν.")
                        except Exception as save_err:
                            print(f"⚠️ Σημείωση μερικής αποθήκευσης: {save_err}")
                    raise

            # Τελική ανακατασκευή ασκήσεων στη σειρά του PDF
            final_exercises = [
                completed_by_code[str(tc).strip()]
                for tc in topic_codes
                if str(tc).strip() in completed_by_code
            ]

            return self._save_and_validate_exercise_files(
                groups=merged_groups,
                exercises=final_exercises,
                omitted=merged_omitted,
                chapter=chapter,
                grade=grade,
                subject=subject,
                output_dir=output_dir,
                content=content,
            )
        else:
            print(f"\n📝 Παραγωγή ομάδων & ασκήσεων για το κεφάλαιο '{path.name}'...")
            prompt = self._build_exercise_prompt(content, grade=grade, subject=subject, chapter=chapter)
            result = sanitize_obj(self._call_gemini_json(prompt))
            return self._save_and_validate_exercise_files(
                groups=result.get("groups", []),
                exercises=result.get("exercises", []),
                omitted=result.get("omitted", []),
                chapter=chapter,
                grade=grade,
                subject=subject,
                output_dir=output_dir,
                content=content,
            )

    def _save_and_validate_exercise_files(
        self,
        groups: list[dict[str, Any]],
        exercises: list[dict[str, Any]],
        omitted: list[Any],
        chapter: int,
        grade: str,
        subject: str,
        output_dir: Path | None,
        content: str,
    ) -> list[Path]:
        groups = sanitize_obj(groups)
        exercises = sanitize_obj(exercises)
        omitted = omitted or []
        if not isinstance(groups, list) or not groups:
            raise ValueError("Δεν δημιουργήθηκαν έγκυρες ομάδες ασκήσεων.")
        if not isinstance(exercises, list) or not exercises:
            details = f" Μη μετατραπέντα ερωτήματα: {omitted}" if omitted else ""
            raise ValueError(f"Δεν δημιουργήθηκαν έγκυρες ασκήσεις.{details}")

        if any(not isinstance(group, dict) for group in groups):
            raise ValueError("Κάθε ομάδα πρέπει να είναι αντικείμενο JSON.")

        # Κανονικοποίηση group ids (π.χ. ch02-04-..., ch02-10-...) και συγχώνευση διπλών ομάδων της ίδιας υποενότητας (π.χ. ch01-02-*)
        id_mapping: dict[str, str] = {}
        canonical_by_subprefix: dict[str, str] = {}
        deduped_groups: list[dict[str, Any]] = []
        seen_group_ids: set[str] = set()

        for group in groups:
            old_id = str(group.get("id") or "").strip()
            title = str(group.get("title") or "").strip()
            new_id = normalize_subchapter_group_id(chapter, old_id, title)
            m_sub = re.match(r"^(ch\d{2}-\d{2})-", new_id)
            if m_sub:
                sub_prefix = m_sub.group(1)
                if sub_prefix in canonical_by_subprefix:
                    canonical_id = canonical_by_subprefix[sub_prefix]
                    id_mapping[old_id] = canonical_id
                    id_mapping[new_id] = canonical_id
                    new_id = canonical_id
                else:
                    canonical_by_subprefix[sub_prefix] = new_id
            group["id"] = new_id
            if old_id and old_id != new_id:
                id_mapping[old_id] = new_id
            if new_id not in seen_group_ids:
                seen_group_ids.add(new_id)
                deduped_groups.append(group)

        groups = deduped_groups

        if id_mapping and isinstance(exercises, list):
            for exercise in exercises:
                if isinstance(exercise, dict):
                    ex_grp = str(exercise.get("group") or "").strip()
                    norm_ex_grp = normalize_subchapter_group_id(chapter, ex_grp, "")
                    if ex_grp in id_mapping:
                        exercise["group"] = id_mapping[ex_grp]
                    elif norm_ex_grp in id_mapping:
                        exercise["group"] = id_mapping[norm_ex_grp]
                    elif norm_ex_grp in seen_group_ids:
                        exercise["group"] = norm_ex_grp

        group_ids = [group.get("id") for group in groups]
        for group_id in group_ids:
            if not isinstance(group_id, str) or not re.fullmatch(r"[a-z0-9][a-z0-9_-]*", group_id):
                raise ValueError(f"Μη έγκυρο id ομάδας: {group_id!r}")
        if len(group_ids) != len(set(group_ids)):
            raise ValueError("Οι ομάδες πρέπει να έχουν μοναδικά ids.")
        if group_ids and set(group_ids) <= KIND_GROUP_IDS:
            raise ValueError(
                "Οι ομάδες πρέπει να είναι υποενότητες ύλης, όχι είδη ασκήσεων (tf/mc/match/calc)."
            )

        groups = apply_greek_ordinals(sorted(groups, key=subsection_sort_key))
        group_ids = [group.get("id") for group in groups]

        exercises_by_group: dict[str, list[dict[str, Any]]] = {
            group_id: [] for group_id in group_ids
        }
        exercise_ids: set[str] = set()
        bank_codes: set[str] = set()
        for index, exercise in enumerate(exercises, 1):
            if not isinstance(exercise, dict):
                raise ValueError(f"Η άσκηση #{index} δεν είναι αντικείμενο JSON.")
            exercise = apply_greek_ordinals(exercise)
            exercise_id = exercise.get("id")
            group_id = exercise.get("group")
            if not isinstance(exercise_id, str) or not exercise_id:
                raise ValueError(f"Η άσκηση #{index} δεν έχει έγκυρο id.")
            if exercise_id in exercise_ids:
                raise ValueError(f"Διπλό id άσκησης: {exercise_id}")
            exercise_ids.add(exercise_id)
            if group_id not in exercises_by_group:
                raise ValueError(f"Η άσκηση '{exercise_id}' αναφέρεται σε άγνωστη ομάδα: {group_id}")
            items = exercise.get("items")
            if not isinstance(items, list) or not items:
                raise ValueError(f"Η άσκηση '{exercise_id}' δεν περιέχει ερωτήματα.")
            allowed_kinds = {"mc", "tf", "match", "blank", "calc", "open"}
            for item in items:
                if not isinstance(item, dict) or item.get("kind") not in allowed_kinds:
                    raise ValueError(
                        f"Η άσκηση '{exercise_id}' περιέχει ερώτημα χωρίς έγκυρο kind."
                    )
                if not item.get("explain"):
                    raise ValueError(f"Η άσκηση '{exercise_id}' περιέχει ερώτημα χωρίς explain.")
                # Καθαρισμός τυχόν αυθαίρετων επεξηγήσεων σε παρένθεση στη Στήλη Α ασκήσεων match (π.χ. 'Γραμμή 1 (καμπύλη)')
                if item.get("kind") == "match" and isinstance(item.get("left"), list):
                    for l in item["left"]:
                        if isinstance(l, dict) and "text" in l:
                            cleaned_txt = re.sub(r"\s*\([^)]*\)$", "", str(l["text"])).strip()
                            if cleaned_txt:
                                l["text"] = cleaned_txt
                # Καθαρισμός και κανονικοποίηση μονάδων μέτρησης (π.χ. ^\circ\text{C} -> °C, \text{kPa} -> kPa)
                if item.get("kind") == "calc" and item.get("unit"):
                    u = str(item["unit"]).strip()
                    if re.search(r"circ.*[cC]|\^\\circ\\text\{[cC]\}", u):
                        item["unit"] = "°C"
                    elif re.search(r"circ.*[fF]|\^\\circ\\text\{[fF]\}", u):
                        item["unit"] = "°F"
                    else:
                        u = re.sub(r"\\+text\{([^}]+)\}", r"\1", u)
                        u = u.replace("$", "").replace("\\", "").strip()
                        u = u.replace("^2", "²").replace("^3", "³")
                        if u.lower() == "kcal":
                            u = "kcal"
                        item["unit"] = u
            first_interactive = next((it.get("kind") for it in items if it.get("kind") != "open"), items[0].get("kind"))
            exercise["kind"] = first_interactive if first_interactive in allowed_kinds else exercise.get("kind")
            exercise["layout"] = "unified"
            # Αφαίρεση περιττού stem: κενό ή μόνο «Θέμα Xο» / «Θέμα X<sup>ο</sup>»
            stem = exercise.get("stem")
            if isinstance(stem, str):
                stem_norm = re.sub(r"\s+", " ", stem.strip())
                if not stem_norm or re.fullmatch(
                    r"θέμα\s+\d{1,2}\s*"
                    r"(?:<sup>\s*[οo°ᵒ]?\s*</sup>|[οo°ᵒ])?"
                    r"(?:\s*[·\-—]\s*#?\d+)?",
                    stem_norm,
                    flags=re.IGNORECASE,
                ):
                    exercise.pop("stem", None)
            bank_code = extract_bank_code(exercise)
            if not bank_code:
                raise ValueError(
                    f"Η άσκηση '{exercise_id}' δεν έχει κωδικό Τράπεζας Θεμάτων (π.χ. #18622)."
                )
            if bank_code in bank_codes:
                raise ValueError(
                    f"Το θέμα #{bank_code} διασπάστηκε σε περισσότερες ασκήσεις. "
                    "Ένα θέμα Τράπεζας πρέπει να είναι ενιαίο."
                )
            bank_codes.add(bank_code)
            exercise["bankCode"] = bank_code
            code = str(exercise.get("code") or "")
            if f"#{bank_code}" not in code:
                exercise["code"] = f"{code} · #{bank_code}".strip(" ·")

            # Αυτόματος ντετερμινιστικός έλεγχος/αποκατάσταση επάλληλων ερωτημάτων με ζεύγη εικόνων δίπλα-δίπλα (π.χ. 1., 2., 3. με α, β, γ)
            try:
                from src.tools.exercise_fixer import reconstruct_interleaved_multipart_subquestions

                m_sec = re.search(
                    rf"(?ms)^##\s+Θέμα\s*#?{re.escape(bank_code)}\b.*?(?=^##\s+Θέμα\b|\Z)",
                    content,
                )
                if m_sec:
                    sec_md = m_sec.group(0)
                    parts_md = re.split(r"(?m)^###\s+Λ[ύυ]ση\b", sec_md, maxsplit=1)
                    q_md = parts_md[0]
                    sol_md = parts_md[1] if len(parts_md) > 1 else ""
                    web_prefix = f"images/{grade}/{subject}/chapter-{int(chapter):02d}"
                    manifest_cand = (
                        (output_dir or self.base_dir / "site")
                        / "images"
                        / grade
                        / subject
                        / f"chapter-{int(chapter):02d}"
                        / "manifest.json"
                    )
                    fig_entries: list[dict[str, Any]] = []
                    if manifest_cand.is_file():
                        m_json = json.loads(manifest_cand.read_text(encoding="utf-8"))
                        fig_entries = [
                            im for im in m_json.get("images", [])
                            if str(im.get("bank_code")) == bank_code and im.get("role") == "fig"
                        ]
                    reconstruct_interleaved_multipart_subquestions(
                        exercise, q_md, sol_md, fig_entries, web_prefix
                    )
            except Exception:
                pass

            # Φόρτωση manifest κεφαλαίου για απόλυτα αυστηρή επαλήθευση εικόνων ανά θέμα
            manifest_cand = (
                (output_dir or self.base_dir / "site")
                / "images"
                / grade
                / subject
                / f"chapter-{int(chapter):02d}"
                / "manifest.json"
            )
            manifest_images_all: set[str] = set()
            manifest_by_bank: dict[str, dict[str, list[str]]] = {}
            if manifest_cand.is_file():
                try:
                    m_data = json.loads(manifest_cand.read_text(encoding="utf-8"))
                    for im in m_data.get("images", []):
                        fn = Path(im.get("file", "")).stem
                        manifest_images_all.add(fn)
                    manifest_by_bank = m_data.get("by_bank_code", {})
                except Exception:
                    pass

            # Αυστηρός έλεγχος εικόνας: πρέπει να υπάρχει στο manifest ΚΑΙ να ανήκει στο bank_code
            site_img_base = self.base_dir / "site"

            def _clean_img_path(img_ref: Any) -> str | None:
                if not img_ref or not isinstance(img_ref, str):
                    return None
                ref_clean = img_ref.lstrip("/\\").replace("\\", "/")
                # Κανονικοποίηση σε .webp αν υπάρχει στον δίσκο
                stem = Path(ref_clean).stem
                if manifest_images_all and stem not in manifest_images_all:
                    return None
                if manifest_by_bank and bank_code not in manifest_by_bank:
                    return None
                full_p = site_img_base / ref_clean
                if full_p.is_file():
                    return ref_clean
                base_no_ext, _ = os.path.splitext(ref_clean)
                for ext in [".webp", ".png", ".jpg"]:
                    if (site_img_base / f"{base_no_ext}{ext}").is_file():
                        return f"{base_no_ext}{ext}"
                return None

            if "image" in exercise:
                cleaned = _clean_img_path(exercise["image"])
                if cleaned:
                    exercise["image"] = cleaned
                else:
                    del exercise["image"]

            if "images" in exercise and isinstance(exercise["images"], list):
                new_imgs = [_clean_img_path(im) for im in exercise["images"]]
                exercise["images"] = [im for im in new_imgs if im]
                if not exercise["images"]:
                    del exercise["images"]

            if "solutionImages" in exercise and isinstance(exercise["solutionImages"], list):
                new_sols = [_clean_img_path(im) for im in exercise["solutionImages"]]
                exercise["solutionImages"] = [im for im in new_sols if im]
                if not exercise["solutionImages"]:
                    del exercise["solutionImages"]

            for it in exercise.get("items", []):
                if isinstance(it, dict):
                    if "image" in it:
                        cleaned = _clean_img_path(it["image"])
                        if cleaned:
                            it["image"] = cleaned
                        else:
                            del it["image"]
                    if "images" in it and isinstance(it["images"], list):
                        new_it_imgs = [_clean_img_path(im) for im in it["images"]]
                        it["images"] = [im for im in new_it_imgs if im]
                        if not it["images"]:
                            del it["images"]
                    if "hintImage" in it:
                        cleaned = _clean_img_path(it["hintImage"])
                        if cleaned:
                            it["hintImage"] = cleaned
                        else:
                            del it["hintImage"]

            exercises_by_group[group_id].append(exercise)

        for group_id, group_exercises in exercises_by_group.items():
            group_exercises.sort(
                key=lambda item: (
                    item.get("sourceOrder")
                    if isinstance(item.get("sourceOrder"), int)
                    else 10**9,
                    int(item.get("bankCode", 10**9)),
                )
            )

        ordered_groups = sanitize_obj([
            {**group, "chapter": str(chapter)}
            for group in groups
            if exercises_by_group.get(group.get("id"))
        ])
        route_id = catalog_id_for_subject(subject)
        groups_code = (
            _js_push_prefix(route_id, "groups")
            + json.dumps(ordered_groups, ensure_ascii=False, indent=2)
            + "\n);\n"
        )
        group_errors = SiteValidator.validate_groups_code(groups_code)
        if group_errors:
            raise ValueError("groups.js δεν περνά την επικύρωση: " + "; ".join(group_errors))

        exercise_codes: dict[str, str] = {}
        for group_id, group_exercises in exercises_by_group.items():
            if not group_exercises:
                continue
            group_exercises = sanitize_obj(group_exercises)
            code = (
                _js_push_prefix(route_id, "exercises")
                + json.dumps(group_exercises, ensure_ascii=False, indent=2)
                + "\n);\n"
            )
            errors = SiteValidator.validate_exercises_code(code)
            if errors:
                print(f"   ℹ️ {group_id}.js (έχει παρατηρήσεις επικύρωσης): {'; '.join(errors)}")
            exercise_codes[group_id] = code

        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "exercises" / grade / subject / f"chapter-{chapter:02d}"
        target_dir.mkdir(parents=True, exist_ok=True)
        # Καθαρισμός τυχόν παλιών/παρωχημένων αρχείων .js στον φάκελο του κεφαλαίου
        expected_filenames = {"groups.js"} | {
            exercise_js_filename(chapter, gid) for gid in exercise_codes
        }
        for existing_js in target_dir.glob("*.js"):
            if existing_js.name not in expected_filenames:
                try:
                    existing_js.unlink()
                except Exception:
                    pass
        groups_file = target_dir / "groups.js"
        groups_file.write_text(groups_code, encoding="utf-8")
        generated_files = [groups_file]
        print(
            f"📌 Route '{route_id}' → "
            f"{'window.GROUPS/EXERCISES' if route_id == 'thermo' else f'SUBJECT_DATA[{route_id!r}]'}"
        )
        for group_id, code in exercise_codes.items():
            exercise_file = target_dir / exercise_js_filename(chapter, group_id)
            exercise_file.write_text(code, encoding="utf-8")
            generated_files.append(exercise_file)

        if omitted:
            print(f"⚠️ Δεν μετατράπηκαν ορισμένα ερωτήματα: {omitted}")
        for exercise_file in generated_files:
            print(f"✅ Επιτυχής παραγωγή & επικύρωση: {exercise_file}")

        return generated_files
