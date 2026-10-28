"""
TheoryGenerator - Παραγωγή αρχείων θεωρίας JavaScript (window.SECTIONS) για το 4gnosin.github.io.
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
    from src.utils.structure import catalog_id_for_subject, with_structure_rules
    from src.validators.site_validator import SiteValidator
else:
    from ..utils.structure import catalog_id_for_subject, with_structure_rules
    from ..validators.site_validator import SiteValidator


def _rewrite_sections_to_subject_data(js_code: str, route_id: str) -> str:
    """Αν το AI έβγαλε window.SECTIONS, μετατροπή σε SUBJECT_DATA[route].sections."""
    if route_id == "thermo":
        return js_code
    key = json.dumps(route_id, ensure_ascii=False)
    header = (
        "window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n"
        f"window.SUBJECT_DATA[{key}] = window.SUBJECT_DATA[{key}] "
        "|| { sections: [], groups: [], exercises: [] };\n"
    )
    if re.search(r"window\.SECTIONS\s*=\s*window\.SECTIONS\s*\|\|\s*\[\]\s*;", js_code):
        js_code = re.sub(
            r"window\.SECTIONS\s*=\s*window\.SECTIONS\s*\|\|\s*\[\]\s*;\s*",
            header,
            js_code,
            count=1,
        )
    js_code = re.sub(
        r"window\.SECTIONS\.push\(",
        f"window.SUBJECT_DATA[{key}].sections.push(",
        js_code,
    )
    return js_code


class TheoryGenerator:
    """
    Δημιουργεί αρχεία θεωρίας JavaScript για το 4gnosin.github.io χρησιμοποιώντας το Gemini API.
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
        self.prompt_file = self.prompts_dir / "site_theory_prompt.md"

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

    def load_system_prompt(self) -> str:
        """Φορτώνει το εξειδικευμένο prompt παραγωγής θεωρίας."""
        if not self.prompt_file.exists():
            raise FileNotFoundError(f"Δεν βρέθηκε το αρχείο prompt: {self.prompt_file}")
        return with_structure_rules(
            self.prompt_file.read_text(encoding="utf-8"),
            self.prompts_dir,
        )

    @staticmethod
    def clean_js_output(raw_text: str) -> str:
        """
        Καθαρίζει την απάντηση από τυχόν markdown backticks (```javascript ... ```).
        """
        text = raw_text.strip()
        if text.startswith("```"):
            text = re.sub(r"^```(?:javascript|js)?\s*", "", text, flags=re.IGNORECASE)
            text = re.sub(r"\s*```$", "", text)
        return text.strip()

    def generate_section(
        self,
        source_content: str,
        grade: str,
        subject: str,
        chapter: int,
        order: int,
        slug: str,
        num: str,
        title: str,
        kicker: str = "Βασικές Έννοιες",
        lead: str = "",
        output_dir: Path | None = None,
    ) -> Path:
        """
        Παράγει ένα συγκεκριμένο αρχείο Section (π.χ. 01-genika.js) βάσει του υλικού.
        """
        system_prompt = self.load_system_prompt()
        user_prompt = (
            f"Παρήγαγε ΕΝΑ αρχείο JavaScript για το 4gnosin.github.io σύμφωνα με τις προδιαγραφές.\n\n"
            f"ΣΤΟΙΧΕΙΑ SECTION:\n"
            f"- Τάξη: {grade}\n"
            f"- Μάθημα: {subject}\n"
            f"- Κεφάλαιο: {chapter}\n"
            f"- Αριθμός Section (num): \"{num}\"\n"
            f"- Slug: \"{slug}\"\n"
            f"- Τίτλος: \"{title}\"\n"
            f"- Kicker: \"{kicker}\"\n"
            f"- Lead (αν υπάρχει, αλλιώς συνέταξε): \"{lead}\"\n\n"
            f"ΠΗΓΗ ΥΛΗΣ (MARKDOWN/ΣΗΜΕΙΩΣΕΙΣ):\n"
            f"{source_content}\n\n"
            f"ΕΞΑΓΩΓΗ: Μόνο ο καθαρός κώδικας JavaScript (window.SECTIONS = window.SECTIONS || []; ...)."
        )

        response = self.client.models.generate_content(
            model=self.model_name,
            contents=user_prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                temperature=0.2,
            ),
        )

        js_code = self.clean_js_output(response.text or "")
        try:
            route_id = catalog_id_for_subject(subject)
        except ValueError:
            route_id = subject
        js_code = _rewrite_sections_to_subject_data(js_code, route_id)

        # Προορισμός αρχείου
        target_dir = (
            output_dir or self.base_dir / "output"
        ) / "content" / grade / subject / f"chapter-{chapter:02d}"
        target_dir.mkdir(parents=True, exist_ok=True)

        filename = f"{order:02d}-{slug}.js"
        target_file = target_dir / filename
        target_file.write_text(js_code, encoding="utf-8")

        # Επικύρωση
        errors = SiteValidator.validate_section_file(target_file)
        if errors:
            print(f"⚠️ Προειδοποιήσεις επικύρωσης για το {filename}:")
            for err in errors:
                print(f"  - {err}")
        else:
            print(f"✅ Επιτυχής παραγωγή & επικύρωση: {target_file}")

        return target_file

    def generate_chapter_sections(
        self,
        source_markdown_path: Path | str,
        grade: str = "b",
        subject: str = "antoxi",
        chapter: int = 1,
        output_dir: Path | None = None,
    ) -> list[Path]:
        """
        Αναλύει ένα ολόκληρο αρχείο κεφαλαίου Markdown και παράγει τη σειρά αρχείων θεωρίας:
        00-stoxoi.js, 01-genika.js, 02-kyria.js, 03-perilipsi.js κ.λπ.
        """
        path = Path(source_markdown_path)
        if not path.exists():
            raise FileNotFoundError(f"Το αρχείο δεν βρέθηκε: {path}")

        content = path.read_text(encoding="utf-8")
        print(f"\n📖 Ανάλυση κεφαλαίου '{path.name}' για παραγωγή θεωρίας...")

        system_prompt = self.load_system_prompt()
        plan_prompt = (
            f"Ανάλυσε το παρακάτω κεφάλαιο ύλης ΕΠΑΛ και χώρισέ το σε 3 έως 5 αυτόνομα sections "
            f"για το 4gnosin.github.io. Το 1ο section (order 0) ΠΡΕΠΕΙ να είναι 'stoxoi' (Στόχοι Μαθήματος) "
            f"και το τελευταίο 'perilipsi' (Σύνοψη/Επανάληψη).\n\n"
            f"ΥΛΗ:\n{content}\n\n"
            f"Επέστρεψε ΑΠΟΚΛΕΙΣΤΙΚΑ έναν έγκυρο πίνακα JSON με τα sections σε αυτή τη μορφή:\n"
            f"[\n"
            f"  {{\"order\": 0, \"slug\": \"stoxoi\", \"num\": \"{chapter}.0\", \"title\": \"Στόχοι Μαθήματος\", \"kicker\": \"Στόχοι\", \"lead\": \"...\"}},\n"
            f"  {{\"order\": 1, \"slug\": \"genika\", \"num\": \"{chapter}.1\", \"title\": \"...\", \"kicker\": \"...\", \"lead\": \"...\"}}\n"
            f"]"
        )

        plan_res = self.client.models.generate_content(
            model=self.model_name,
            contents=plan_prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_prompt,
                response_mime_type="application/json",
                temperature=0.1,
            ),
        )

        plan_text = plan_res.text or "[]"
        try:
            sections_plan = json.loads(plan_text)
        except Exception:
            # Fallback απλός σχεδιασμός
            sections_plan = [
                {"order": 0, "slug": "stoxoi", "num": f"{chapter}.0", "title": "Στόχοι Κεφαλαίου", "kicker": "Στόχοι"},
                {"order": 1, "slug": "genika", "num": f"{chapter}.1", "title": "Γενικά & Βασικές Έννοιες", "kicker": "Βασικές Έννοιες"},
                {"order": 2, "slug": "efarmoges", "num": f"{chapter}.2", "title": "Εφαρμογές & Υπολογισμοί", "kicker": "Τεχνική Εφαρμογή"},
                {"order": 3, "slug": "perilipsi", "num": f"{chapter}.3", "title": "Σύνοψη & Σημεία Προσοχής", "kicker": "Επανάληψη"},
            ]

        if isinstance(sections_plan, dict):
            sections_plan = sections_plan.get("sections") or sections_plan.get("plan") or []
        if not isinstance(sections_plan, list):
            raise ValueError("Το σχέδιο ενοτήτων θεωρίας πρέπει να είναι λίστα JSON.")
        sections_plan = [
            section for section in sections_plan if isinstance(section, dict)
        ]
        sections_plan.sort(key=lambda section: (section.get("order", 10**9), str(section.get("num", ""))))

        generated_files: list[Path] = []
        for sec in sections_plan:
            print(f"  ⚙️ Παραγωγή {sec.get('order', 0):02d}-{sec.get('slug', 'sec')}.js ({sec.get('title')})...")
            out_file = self.generate_section(
                source_content=content,
                grade=grade,
                subject=subject,
                chapter=chapter,
                order=sec.get("order", 0),
                slug=sec.get("slug", "section"),
                num=sec.get("num", f"{chapter}.1"),
                title=sec.get("title", "Ενότητα"),
                kicker=sec.get("kicker", "Μηχανολογία ΕΠΑΛ"),
                lead=sec.get("lead", ""),
                output_dir=output_dir,
            )
            generated_files.append(out_file)

        return generated_files
