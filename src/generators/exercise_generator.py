"""
ExerciseGenerator - Παραγωγή αρχείων ασκήσεων JavaScript (window.GROUPS & window.EXERCISES) για το 4gnosin.github.io.
"""

from __future__ import annotations

import json
import os
import re
from pathlib import Path
from typing import Any

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
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


def exercise_js_filename(chapter: int, group_id: str) -> str:
    """Όνομα αρχείου ασκήσεων με αριθμό κεφαλαίου: ch05-first-law.js"""
    slug = group_id.strip()
    if re.match(rf"^ch0*{int(chapter)}[-_]", slug, flags=re.IGNORECASE):
        return f"{slug}.js"
    if re.match(r"^ch\d{1,2}[-_]", slug, flags=re.IGNORECASE):
        return f"{slug}.js"
    return f"ch{int(chapter):02d}-{slug}.js"


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
                "Εκτελέστε: pip install -r requirements.txt"
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
        """Φορτώνει το εξειδικευμένο prompt παραγωγής ασκήσεων."""
        if not self.prompt_file.exists():
            raise FileNotFoundError(f"Δεν βρέθηκε το αρχείο prompt: {self.prompt_file}")
        return with_structure_rules(
            self.prompt_file.read_text(encoding="utf-8"),
            self.prompts_dir,
        )

    @staticmethod
    def clean_js_output(raw_text: str) -> str:
        """Καθαρίζει τυχόν markdown backticks."""
        text = raw_text.strip()
        if text.startswith("```"):
            text = re.sub(r"^```(?:javascript|js)?\s*", "", text, flags=re.IGNORECASE)
            text = re.sub(r"\s*```$", "", text)
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
            f"ΕΞΑΓΩΓΗ: ΜΟΝΟ ο κώδικας JavaScript (window.GROUPS = window.GROUPS || []; window.GROUPS.push(...);)."
        )

        response = self._generate_content(
            model=self.model_name,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.2,
            ),
        )

        js_code = self.clean_js_output(response.text or "")
        errors = SiteValidator.validate_groups_code(js_code)
        if errors:
            raise ValueError("groups.js δεν περνά την επικύρωση: " + "; ".join(errors))

        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "exercises" / grade / subject / f"chapter-{chapter:02d}"
        target_dir.mkdir(parents=True, exist_ok=True)

        target_file = target_dir / "groups.js"
        target_file.write_text(js_code, encoding="utf-8")
        extracted = SiteValidator.extract_json_from_js(js_code)
        return target_file, extracted

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
            f"ΕΞΑΓΩΓΗ: ΜΟΝΟ ο κώδικας JavaScript (window.EXERCISES = window.EXERCISES || []; window.EXERCISES.push(...);)."
        )

        response = self._generate_content(
            model=self.model_name,
            contents=user_prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.2,
            ),
        )

        js_code = self.clean_js_output(response.text or "")
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

    def generate_chapter_exercises(
        self,
        source_markdown_path: Path | str,
        grade: str = "b",
        subject: str = "antoxi",
        chapter: int = 1,
        output_dir: Path | None = None,
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
        print(f"\n📝 Παραγωγή ομάδων & ασκήσεων για το κεφάλαιο '{path.name}'...")

        response = self._generate_content(
            model=self.model_name,
            contents=(
                f"Μετέτρεψε τις ασκήσεις που ΥΠΑΡΧΟΥΝ στο παρακάτω αρχείο σε διαδραστικές ασκήσεις "
                f"για το site. Μην επινοήσεις άσχετες ερωτήσεις.\n"
                f"Μάθημα: {subject}, τάξη: {grade}, κεφάλαιο: {chapter}.\n\n"
                "ΠΗΓΗ ΑΠΟ PDF: Το κείμενο μπορεί να είναι σπασμένο (κλάσματα σε πολλές γραμμές, "
                "παράξενα σύμβολα, κομμένες λέξεις). ΜΗΝ επινοείς φυσική ή αριθμούς που δεν φαίνονται "
                "ρητά στην εκφώνηση ή στην ΕΝΔΕΙΚΤΙΚΗ ΑΠΑΝΤΗΣΗ. Στήριξε calc answers ΜΟΝΟ σε εμφανείς "
                "αριθμούς της λύσης/εκφώνησης. formula και hint σε απλό κείμενο/Unicode (όχι raw LaTeX). "
                "LaTeX ΜΟΝΟ μέσα σε explain με \\( ... \\). Αν ένα μέρος είναι σχέδιο/διάγραμμα, βάλε "
                "την εκφώνηση + ό,τι ελέγχεται αριθμητικά ή με mc — ΜΗΝ παραλείψεις ολόκληρο το θέμα.\n"
                "Διάβασε ΥΠΟΧΡΕΩΤΙΚΑ την πρώτη σελίδα κάθε εκφώνησης: υποενότητα ύλης και κωδικός "
                "Τράπεζας (π.χ. #18622). Ένα θέμα = μία άσκηση με ΟΛΑ τα μέρη στα items, layout unified.\n"
                "Στο code/title γράψε απλά «Θέμα 2ο · #18622» (ΧΩΡΙΣ <sup>).\n"
                "sourceOrder = σειρά στην πηγή. answer/pairs από την ενδεικτική λύση — ποτέ εικασίες.\n"
                "stem: ΜΟΝΟ ουσιαστική εκφώνηση/δεδομένα ΠΡΙΝ τα υποερωτήματα. "
                "ΑΠΑΓΟΡΕΥΕΤΑΙ stem «Θέμα 2ο»/«Θέμα 4ο»/κενό — αυτά είναι ήδη σε code & title· "
                "αν δεν υπάρχει άλλη εκφώνηση, ΜΗΝ βάλεις καθόλου το πεδίο stem.\n"
                "item.prompt = ολόκληρο το υποερώτημα. Κάθε item έχει explain. calc: answer + unit.\n\n"
                "Επέστρεψε αποκλειστικά ένα JSON object με σχήμα:\n"
                '{"groups":[{"id":"ch05-first-law","title":"5.1 Πρώτος Θερμοδυναμικός Νόμος",'
                '"blurb":"..."}],'
                '"exercises":[{"id":"ch05-18622","group":"ch05-first-law","kind":"tf",'
                '"layout":"unified","bankCode":"18622","code":"Θέμα 2ο · #18622",'
                '"title":"#18622 — Θέμα 2ο","units":25,"theory":"...","sourceOrder":1,'
                '"items":[{"kind":"tf","prompt":"...","answer":true,"explain":"..."},'
                '{"kind":"match","prompt":"...","left":[],"right":[],"pairs":{},'
                '"explain":"..."}]}],"omitted":[]}\n\n'
                f"ΠΗΓΗ ΑΣΚΗΣΕΩΝ ΚΑΙ ΛΥΣΕΩΝ:\n{content}"
            ),
            config=types.GenerateContentConfig(
                system_instruction=self.load_system_prompt(),
                response_mime_type="application/json",
                temperature=0.1,
            ),
        )

        raw_result = self.clean_js_output(response.text or "")
        try:
            result = json.loads(raw_result)
        except json.JSONDecodeError as exc:
            raise ValueError("Το Gemini δεν επέστρεψε έγκυρο JSON για τις ασκήσεις.") from exc
        if not isinstance(result, dict):
            raise ValueError("Η απάντηση του Gemini για τις ασκήσεις πρέπει να είναι αντικείμενο JSON.")

        groups = result.get("groups")
        exercises = result.get("exercises")
        omitted = result.get("omitted", [])
        if not isinstance(groups, list) or not groups:
            raise ValueError("Δεν δημιουργήθηκαν έγκυρες ομάδες ασκήσεων.")
        if not isinstance(exercises, list) or not exercises:
            details = f" Μη μετατραπέντα ερωτήματα: {omitted}" if omitted else ""
            raise ValueError(f"Δεν δημιουργήθηκαν έγκυρες ασκήσεις.{details}")

        if any(not isinstance(group, dict) for group in groups):
            raise ValueError("Κάθε ομάδα πρέπει να είναι αντικείμενο JSON.")
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
            allowed_kinds = {"mc", "tf", "match", "blank", "calc"}
            for item in items:
                if not isinstance(item, dict) or item.get("kind") not in allowed_kinds:
                    raise ValueError(
                        f"Η άσκηση '{exercise_id}' περιέχει ερώτημα χωρίς έγκυρο kind."
                    )
                if not item.get("explain"):
                    raise ValueError(f"Η άσκηση '{exercise_id}' περιέχει ερώτημα χωρίς explain.")
            first_kind = items[0].get("kind")
            exercise["kind"] = first_kind if first_kind in allowed_kinds else exercise.get("kind")
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

        ordered_groups = [
            {**group, "chapter": str(chapter)}
            for group in groups
            if exercises_by_group.get(group.get("id"))
        ]
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
            code = (
                _js_push_prefix(route_id, "exercises")
                + json.dumps(group_exercises, ensure_ascii=False, indent=2)
                + "\n);\n"
            )
            errors = SiteValidator.validate_exercises_code(code)
            if errors:
                raise ValueError(
                    f"{group_id}.js δεν περνά την επικύρωση: " + "; ".join(errors)
                )
            exercise_codes[group_id] = code

        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "exercises" / grade / subject / f"chapter-{chapter:02d}"
        target_dir.mkdir(parents=True, exist_ok=True)
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
