from __future__ import annotations

import sys
if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

"""

TheoryGenerator - Παραγωγή αρχείων θεωρίας JavaScript (window.SECTIONS) για το 4gnosin.github.io.

"""






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

    from src.utils.structure import catalog_id_for_subject, with_structure_rules

    from src.validators.site_validator import SiteValidator

    try:

        from src.utils.book_extractor import BookExtractor

    except ImportError:

        BookExtractor = None

    try:

        from src.cli import sync_site_index

    except ImportError:

        sync_site_index = None

else:

    from ..utils.structure import catalog_id_for_subject, with_structure_rules

    from ..validators.site_validator import SiteValidator

    try:

        from ..utils.book_extractor import BookExtractor

    except ImportError:

        BookExtractor = None

    try:

        from ..cli import sync_site_index

    except ImportError:

        sync_site_index = None





def normalize_grade(grade: str) -> str:

    """Κανονικοποιεί την τάξη σε latin χαρακτήρες 'a', 'b', 'c'."""

    if not grade:

        return "b"

    mapping = {

        "α": "a", "a": "a", "Α": "a",

        "β": "b", "b": "b", "Β": "b",

        "γ": "c", "c": "c", "Γ": "c",

    }

    return mapping.get(str(grade).strip().lower(), str(grade).strip().lower())





def _rewrite_sections_to_subject_data(js_code: str, route_id: str) -> str:

    """Εξασφαλίζει ότι το JS γράφει στο σωστό window.SUBJECT_DATA[route_id].sections."""

    # Διόρθωση τυχόν αναφοράς σε thermod αντί για thermo

    js_code = re.sub(r'window\.SUBJECT_DATA\["(?:thermod|thermo)"\]', f'window.SUBJECT_DATA["{route_id}"]', js_code)

    

    if route_id == "thermo" and "window.SECTIONS.push" in js_code:

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

    CANDIDATE_MODELS = [

        "gemini-3.8-flash",

        "gemini-flash-latest",

        "gemini-3.5-flash-lite",

        "gemini-3.5-flash",

        "gemini-3.1-flash-lite",

    ]



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



    def _generate_with_fallback(

        self,

        contents: Any,

        config: types.GenerateContentConfig,

        timeout_seconds: float = 60.0,

    ) -> str:

        """

        Εκτελεί generate_content με αυτόματη δοκιμή εναλλακτικών μοντέλων.

        Εάν υπάρξει 503/429 ή καθυστέρηση, τερματίζει αυστηρά μετά από timeout_seconds (60s)

        ώστε να παρατεθούν άμεσα όσα έχουν ήδη ολοκληρωθεί.

        """

        import time

        start_time = time.time()

        models = [self.model_name] + [m for m in self.CANDIDATE_MODELS if m != self.model_name]

        last_error = None



        for m in models:

            elapsed = time.time() - start_time

            if elapsed >= timeout_seconds:

                print(f"⏱️ Συμπληρώθηκε το όριο αναμονής ({int(timeout_seconds)}s) λόγω υψηλής ζήτησης του API.")

                break



            try:

                response = self.client.models.generate_content(

                    model=m,

                    contents=contents,

                    config=config,

                )

                if response and response.text:

                    return response.text

            except Exception as e:

                elapsed = time.time() - start_time

                remaining = max(0, int(timeout_seconds - elapsed))

                print(f"⚠️ Προσωρινό σφάλμα με το μοντέλο {m}: {e}. (Απομένουν {remaining}s) Δοκιμή εναλλακτικού...")

                last_error = e

                if remaining > 2:

                    time.sleep(2)



        raise RuntimeError(f"Αδυναμία σύνδεσης μετά από {int(timeout_seconds)}s: {last_error}")



    def load_system_prompt(self) -> str:

        """Φορτώνει το εξειδικευμένο prompt παραγωγής θεωρίας εμπλουτισμένο με τη μόνιμη μνήμη κανόνων."""

        if not self.prompt_file.exists():

            raise FileNotFoundError(f"Δεν βρέθηκε το αρχείο prompt: {self.prompt_file}")

        base_prompt = with_structure_rules(

            self.prompt_file.read_text(encoding="utf-8"),

            self.prompts_dir,

        )

        try:

            from ..utils.agent_memory import get_agent_memory

            memory_injection = get_agent_memory().get_prompt_injection("theory")

            return base_prompt + "\n\n" + memory_injection

        except Exception:

            return base_prompt



    @staticmethod

    def normalize_greek_trig(text: str) -> str:

        """

        Μετατρέπει τις λατινικές τριγωνομετρικές συναρτήσεις (\sin, \cos, \tan κ.λπ.)

        στην επίσημη ελληνική σχολική σημειογραφία (\text{ημ}, \text{συν}, \text{εφ}, \text{σφ}).

        """

        if not text:

            return ""



        # 1. Αντίστροφες τριγωνομετρικές συναρτήσεις (arcsin, arccos, arctan)

        for eng, gr in [("arcsin", "τοξημ"), ("arccos", "τοξσυν"), ("arctan", "τοξεφ")]:

            pat = re.compile(rf"\\+operatorname\{{{eng}\}}|\\+{eng}(?![a-zA-Z])")

            text = pat.sub(lambda m, g=gr: ("\\" if m.group(0).startswith("\\\\") else "\\") + f"text{{{g}}}", text)



        # 2. Βασικές τριγωνομετρικές συναρτήσεις (sin, cos, tan, cot)

        for eng, gr in [("sin", "ημ"), ("cos", "συν"), ("tan", "εφ"), ("cot", "σφ")]:

            # LaTeX (\sin, \operatorname{sin}, \sin, \operatorname{sin})

            pat = re.compile(rf"\\+operatorname\{{{eng}\}}|\\+{eng}(?![a-zA-Z])")

            text = pat.sub(lambda m, g=gr: ("\\" if m.group(0).startswith("\\\\") else "\\") + f"text{{{g}}}", text)

            # Απλές εκφράσεις sin(...), cos(...) χωρίς backslash

            pat_plain = re.compile(rf"(?<=[$\(\+\-*=/\s]){eng}\s*(?=[\(\[\d\\]|[α-ωΑ-Ω])")

            text = pat_plain.sub(lambda m, g=gr: f"\\text{{{g}}} ", text)



        return text



    @staticmethod

    def clean_js_output(raw_text: str) -> str:

        """

        Καθαρίζει την απάντηση από τυχόν markdown backticks (```javascript ... ```),

        συγχωνεύει διαχωρισμένα strings ("..." + "...")

        και εξασφαλίζει αυστηρά ελληνική τριγωνομετρική σημειογραφία.

        """

        text = raw_text.strip()

        if text.startswith("```"):

            text = re.sub(r"^```(?:javascript|js)?\s*", "", text, flags=re.IGNORECASE)

            text = re.sub(r"\s*```$", "", text)

        # Συγχώνευση JS string concatenation ("..." + "...")

        text = re.sub(r'"\s*\+\s*\n?\s*"', '', text)

        text = TheoryGenerator.normalize_greek_trig(text)
        # Αυτόματη διόρθωση παρεκκλίσεων JSON σύνταξης callout από το LLM
        text = re.sub(r'\"callout\"\s*:\s*\"([^\"]+)\"', r'"type": "callout", "kind": "\1"', text)
        text = re.sub(r'\{\s*\"callout\"\s*,', r'{"type": "callout",', text)
        # Αυτόματο unwrap nested callout object: {"callout": {"kind": "...", ...}} -> {"type": "callout", "kind": "...", ...}
        text = re.sub(
            r'\"callout\":\s*\{([\s\S]*?)\}\s*\}',
            lambda m: '"type": "callout",\n      ' + m.group(1).strip() + '\n    }',
            text
        )
        # Εξασφάλιση διπλών backslashes για LaTeX commands σε JS strings
        latex_tokens = (
            "varphi|theta|circ|Sigma|Delta|sqrt|frac|alpha|beta|gamma|lambda|mu|rho|tau|omega|"
            "Phi|neq|approx|cdot|times|pm|mp|leq|geq|left|right|begin|end|aligned|text"
        )
        text = re.sub(rf'(?<!\\)\\(?={latex_tokens}\\b)', r'\\\\', text)

        return text.strip()




    @staticmethod
    def extract_section_source_block(source_text: str, sec_num: str, sec_title: str, max_chars: int = 7000) -> str:
        """
        Εξάγει ένα στοχευμένο block κειμένου από το σχολικό βιβλίο για τη συγκεκριμένη υποενότητα,
        αντί να αποστέλλεται ολόκληρο το κεφάλαιο (π.χ. 30 σελίδες) στο Gemini API.
        """
        if len(source_text) <= max_chars:
            return source_text

        # Αναζήτηση του αριθμού ενότητας (π.χ. "3.1") ή βασικών λέξεων τίτλου
        pattern = re.compile(rf'(?:^|\n)\s*(?:{re.escape(sec_num)}|{re.escape(sec_title[:15])})\b', re.IGNORECASE)
        match = pattern.search(source_text)

        if match:
            start_pos = max(0, match.start() - 300)
            end_pos = min(len(source_text), start_pos + max_chars)
            # Αναζήτηση επόμενου αριθμού ενότητας για καθαρή διακοπή
            next_pattern = re.compile(r'\n\s*\d+\.\d+\s+', re.IGNORECASE)
            next_match = next_pattern.search(source_text, match.end() + 500)
            if next_match and next_match.start() < end_pos:
                end_pos = next_match.start()
            return source_text[start_pos:end_pos].strip()

        # Fallback: πρώτα max_chars
        return source_text[:max_chars].strip()

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

        available_images: list[dict[str, str]] | None = None,

        syllabus_notes: str = "",

        output_dir: Path | None = None,

    ) -> Path:

        """

        Παράγει ένα συγκεκριμένο αρχείο Section (π.χ. 01-genika.js) βάσει του υλικού.

        """

        grade = normalize_grade(grade)

        system_prompt = self.load_system_prompt()

        images_info = ""

        if available_images:

            images_info = (

                "\nΔΙΑΘΕΣΙΜΑ ΣΧΗΜΑΤΑ / ΕΙΚΟΝΕΣ ΑΠΟ ΤΟ ΣΧΟΛΙΚΟ ΒΙΒΛΙΟ:\n"

                + "\n".join(

                    f"- src: \"{img['src']}\", alt: \"{img.get('alt', '')}\", προτεινόμενη λεζάντα: \"{img.get('caption', '')}\""

                    for img in available_images

                )

                + "\n(Εάν κάποια εικόνα ταιριάζει απόλυτα στην ενότητα, ενσωμάτωσέ την ως block type \"image\")\n"

            )



        notes_info = f"\nΕΙΔΙΚΕΣ ΟΔΗΓΙΕΣ ΙΕΠ / ΣΗΜΕΙΩΣΕΙΣ ΥΛΗΣ:\n{syllabus_notes}\n" if syllabus_notes else ""



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

            f"- Lead (αν υπάρχει, αλλιώς συνέταξε): \"{lead}\"\n"

            f"{notes_info}"

            f"{images_info}\n"

            f"ΠΑΙΔΑΓΩΓΙΚΟΣ ΚΑΝΟΝΑΣ ΕΞΙΣΩΣΕΩΝ:\n"

            f"- Όλοι οι υπολογισμοί και η επίλυση τύπων ΠΡΕΠΕΙ να γράφονται κατακόρυφα με aligned, ώστε το σύμβολο του ίσον (=) να μπαίνει από κάτω σε νέα γραμμή:\n"

            f"  \\[ \\begin{{aligned}} A &= B \\\\ &= C \\\\ &= D \\end{{aligned}} \\]\n"

            f"- ΠΟΤΕ μην γράφεις οριζόντιες αλυσίδες εξισώσεων (π.χ. A = B = C = D).\n\n"

            f"ΠΗΓΗ ΥΛΗΣ (ΣΧΟΛΙΚΟ ΒΙΒΛΙΟ / ΣΗΜΕΙΩΣΕΙΣ):\n"

            f"{source_content}\n\n"

            f"ΕΞΑΓΩΓΗ: Μόνο ο καθαρός κώδικας JavaScript (window.SECTIONS = window.SECTIONS || []; ...)."

        )



        raw_text = self._generate_with_fallback(

            contents=user_prompt,

            config=types.GenerateContentConfig(

                system_instruction=system_prompt,

                temperature=0.2,

            ),

        )



        js_code = self.clean_js_output(raw_text or "")

        try:

            route_id = catalog_id_for_subject(subject)

        except ValueError:

            route_id = subject

        js_code = _rewrite_sections_to_subject_data(js_code, route_id)



        # Προορισμός αρχείου

        target_dir = (

            output_dir or self.base_dir / "site"

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



    def generate_errata_section(

        self,

        source_content: str,

        grade: str,

        subject: str,

        chapter: int,

        order: int,

        num: str,

        syllabus_notes: str = "",

        output_dir: Path | None = None,

    ) -> Path:

        """

        Παράγει το ειδικό υποχρεωτικό υποκεφάλαιο sfalmata-kai-dieykriniseis.js

        για λάθη βιβλίου, τυπογραφικά, μονάδες και σημαντικές επισημάνσεις.

        """

        grade = normalize_grade(grade)

        system_prompt = self.load_system_prompt()

        notes_info = f"\nΟΔΗΓΙΕΣ ΥΛΗΣ ΓΙΑ ΤΟ ΚΕΦΑΛΑΙΟ:\n{syllabus_notes}\n" if syllabus_notes else ""



        user_prompt = (

            f"Παρήγαγε το ειδικό αρχείο JavaScript sfalmata-kai-dieykriniseis.js για το Κεφάλαιο {chapter}.\n"

            f"ΣΤΟΙΧΕΙΑ SECTION:\n"

            f"- Τάξη: {grade}\n"

            f"- Μάθημα: {subject}\n"

            f"- Κεφάλαιο: {chapter}\n"

            f"- Αριθμός Section (num): \"{num}\"\n"

            f"- Slug: \"ch{chapter:02d}-sfalmata-kai-dieykriniseis\"\n"

            f"- Τίτλος: \"Βασικά Σημεία Προσοχής & Σύνοψη SOS\"\n"

            f"- Kicker: \"Επισημάνσεις & SOS\"\n"

            f"- Lead: \"Κρίσιμες επισημάνσεις για τη θεωρία, συνηθέστερες παρανοήσεις των μαθητών και πρακτικές συμβουλές επιτυχίας στις εξετάσεις.\"\n"

            f"{notes_info}\n"

            f"ΠΗΓΗ ΥΛΗΣ ΚΕΦΑΛΑΙΟΥ:\n{source_content}\n\n"

            f"ΑΠΑΙΤΗΣΕΙΣ:\n"

            f"1. Εστίασε σε πραγματικά κρίσιμα σημεία προσοχής, συνηθισμένα λάθη των μαθητών (π.χ. μετατροπές μονάδων, πρόσημα, κατεύθυνση δυνάμεων) και πρακτικές συμβουλές.\n"

            f"2. ΑΠΑΓΟΡΕΥΕΤΑΙ ΑΥΣΤΗΡΑ η επινόηση αβάσιμων ή πλασματικών λαθών του σχολικού βιβλίου. Μην ασκείς αβάσιμη κριτική στο σχολικό εγχειρίδιο. ΜΟΝΟ αν υπάρχει ρητό, αντικειμενικό τυπογραφικό λάθος σε αριθμό/τύπο (π.χ. από τις επίσημες οδηγίες) αναφέρεται ως callout warning.\n"

            f"3. ΜΗΝ αναφέρεις πουθενά το όνομα 'ΙΕΠ' στον τίτλο ή στα κείμενα.\n"

            f"4. Όλοι οι μαθηματικοί τύποι και οι υπολογισμοί με περισσότερα από ένα βήματα ΠΡΕΠΕΙ να γράφονται κατακόρυφα με aligned:\n"

            f"   \\[ \\begin{{aligned}} A &= B \\\\ &= C \\end{{aligned}} \\]\n\n"

            f"ΕΞΑΓΩΓΗ: Μόνο ο καθαρός κώδικας JavaScript."

        )



        raw_text = self._generate_with_fallback(

            contents=user_prompt,

            config=types.GenerateContentConfig(

                system_instruction=system_prompt,

                temperature=0.2,

            ),

        )



        js_code = self.clean_js_output(raw_text or "")

        try:

            route_id = catalog_id_for_subject(subject)

        except ValueError:

            route_id = subject

        js_code = _rewrite_sections_to_subject_data(js_code, route_id)



        target_dir = (

            output_dir or self.base_dir / "site"

        ) / "content" / grade / subject / f"chapter-{chapter:02d}"

        target_dir.mkdir(parents=True, exist_ok=True)



        filename = f"{order:02d}-sfalmata-kai-dieykriniseis.js"

        target_file = target_dir / filename

        target_file.write_text(js_code, encoding="utf-8")



        errors = SiteValidator.validate_section_file(target_file)

        if errors:

            print(f"⚠️ Προειδοποιήσεις επικύρωσης για το {filename}:")

            for err in errors:

                print(f"  - {err}")

        else:

            print(f"✅ Επιτυχής παραγωγή & επικύρωση sfalmata: {target_file}")



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

            f"  {{\"order\": 0, \"slug\": \"ch{chapter:02d}-stoxoi\", \"num\": \"{chapter}.0\", \"title\": \"Στόχοι Μαθήματος\", \"kicker\": \"Στόχοι\", \"lead\": \"...\"}},\n"

            f"  {{\"order\": 1, \"slug\": \"genika\", \"num\": \"{chapter}.1\", \"title\": \"...\", \"kicker\": \"...\", \"lead\": \"...\"}}\n"

            f"]"

        )



        raw_text = self._generate_with_fallback(

            contents=plan_prompt,

            config=types.GenerateContentConfig(

                system_instruction=system_prompt,

                response_mime_type="application/json",

                temperature=0.1,

            ),

        )



        plan_text = raw_text or "[]"

        try:

            sections_plan = json.loads(plan_text)

        except Exception:

            # Fallback απλός σχεδιασμός

            sections_plan = [

                {"order": 0, "slug": f"ch{chapter:02d}-stoxoi", "num": f"{chapter}.0", "title": "Στόχοι Κεφαλαίου", "kicker": "Στόχοι"},

                {"order": 1, "slug": "genika", "num": f"{chapter}.1", "title": "Γενικά & Βασικές Έννοιες", "kicker": "Βασικές Έννοιες"},

                {"order": 2, "slug": "efarmoges", "num": f"{chapter}.2", "title": "Εφαρμογές & Υπολογισμοί", "kicker": "Τεχνική Εφαρμογή"},

                {"order": 3, "slug": f"ch{chapter:02d}-perilipsi", "num": f"{chapter}.3", "title": "Σύνοψη & Σημεία Προσοχής", "kicker": "Επανάληψη"},

            ]



        if isinstance(sections_plan, dict):

            sections_plan = sections_plan.get("sections") or sections_plan.get("plan") or []

        if not isinstance(sections_plan, list):

            raise ValueError("Το σχέδιο ενοτήτων θεωρίας πρέπει να είναι λίστα JSON.")

        sections_plan = [

            section for section in sections_plan if isinstance(section, dict)

        ]

        ch_prefix = f"ch{chapter:02d}-"
        for sec in sections_plan:
            slug = sec.get("slug", "sec")
            if not slug.startswith(ch_prefix):
                sec["slug"] = f"{ch_prefix}{slug}"

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



    def generate_chapter_from_book(

        self,

        grade: str,

        subject: str,

        chapter: int,

        page_start: int,

        page_end: int,

        book_pdf_path: Path | str | None = None,

        syllabus_path: Path | str | None = None,

        output_dir: Path | None = None,

        sync_index: bool = True,

    ) -> list[Path]:

        """

        Παράγει ολόκληρο το κεφάλαιο θεωρίας απευθείας από το επίσημο σχολικό βιβλίο PDF

        και την επίσημη διδακτέα ύλη του ΙΕΠ.

        

        Περιλαμβάνει:

        - 00-stoxoi.js

        - Υποενότητες ύλης με το παιδαγωγικό μοντέλο 4 βημάτων και σχήματα

        - perilipsi.js με συγκεντρωτικό τυπολόγιο

        - sfalmata-kai-dieykriniseis.js με εντοπισμό λαθών βιβλίου και οδηγίες ΙΕΠ

        """

        grade = normalize_grade(grade)

        if BookExtractor is None:

            raise ImportError("Το BookExtractor δεν είναι διαθέσιμο. Ελέγξτε το src.utils.book_extractor.")



        # Εύρεση βιβλίου PDF

        if book_pdf_path:

            pdf_file = Path(book_pdf_path)

        else:

            books_dir = self.base_dir / "data" / "books" / grade / subject

            candidates = list(books_dir.glob("*.pdf"))

            if not candidates:

                raise FileNotFoundError(f"Δεν βρέθηκε PDF βιβλίου στο {books_dir}. Εκτελέστε edubooks.bat.")

            pdf_file = candidates[0]



        # Φόρτωση διδακτέας ύλης

        syl_file = Path(syllabus_path) if syllabus_path else (self.base_dir / "data" / "syllabus" / "syllabus_epal_mech.json")

        ch_meta: dict[str, Any] = {}

        if syl_file.exists():

            syl_data = json.loads(syl_file.read_text(encoding="utf-8"))

            subj_key = f"{grade}_{subject}" if f"{grade}_{subject}" in syl_data.get("subjects", {}) else subject

            subj_data = syl_data.get("subjects", {}).get(subj_key, {})

            for ch in subj_data.get("chapters", []):

                if ch.get("chapter") == chapter:

                    ch_meta = ch

                    break



        ch_title = ch_meta.get("title", f"Κεφάλαιο {chapter}")

        sections_meta = ch_meta.get("sections", [])

        ch_notes = ch_meta.get("notes", "")



        try:

            route_id = catalog_id_for_subject(subject)

        except ValueError:

            route_id = subject



        site_root = output_dir or self.base_dir / "site"

        images_dir = site_root / "images" / grade / route_id / f"chapter-{chapter:02d}" / "theory"



        print(f"\n📚 Επεξεργασία Κεφαλαίου {chapter}: '{ch_title}' ({grade.upper()}' ΕΠΑ.Λ. - {subject})")

        print(f"   Βιβλίο: {pdf_file.name} (σελίδες PDF {page_start} έως {page_end})")



        # Εξαγωγή κειμένου και σχημάτων

        with BookExtractor(pdf_file) as extractor:

            # 1-based σε 0-based

            source_text = extractor.get_range_text(page_start - 1, page_end - 1)

            raw_extracted_images: list[Path] = []

            for p in range(page_start - 1, page_end):

                imgs = extractor.extract_images(p, images_dir, prefix=f"ch{chapter:02d}")

                raw_extracted_images.extend(imgs)



        # Μετατροπή των εξαχθέντων εικόνων σε WebP & κατασκευή λίστας available_images

        final_images: list[Path] = []

        for img in raw_extracted_images:

            if img.suffix.lower() == ".webp":

                final_images.append(img)

            else:

                webp_path = img.with_suffix(".webp")

                try:

                    from PIL import Image

                    with Image.open(img) as pil_im:

                        pil_im.save(webp_path, "WEBP", quality=85)

                    try:

                        img.unlink()

                    except Exception:

                        pass

                    final_images.append(webp_path)

                except Exception:

                    final_images.append(img)



        available_images = [

            {

                "src": f"images/{grade}/{route_id}/chapter-{chapter:02d}/theory/{img.name}",

                "caption": f"Σχήμα σχολικού βιβλίου (Κεφ. {chapter})",

                "alt": f"Σχήμα {img.stem}",

            }

            for img in final_images

        ]

        print(f"   🖼️ Εξήχθησαν {len(available_images)} σχήματα/διαγράμματα στο {images_dir}")



        generated_files: list[Path] = []



        interrupted = False
        ch_dir = site_root / "content" / grade / subject / f"chapter-{chapter:02d}"
        ch_dir.mkdir(parents=True, exist_ok=True)

        try:
            # 1. 00-stoxoi.js
            stoxoi_target = ch_dir / f"00-ch{chapter:02d}-stoxoi.js"
            if stoxoi_target.exists() and not SiteValidator.validate_section_file(stoxoi_target):
                print(f"  ⏩ 00-ch{chapter:02d}-stoxoi.js (υπάρχει ήδη και είναι 100% έγκυρο, διατήρηση)")
                generated_files.append(stoxoi_target)
            else:
                print(f"  🎯 Παραγωγή 00-stoxoi.js...")
                stoxoi_file = self.generate_section(
                    source_content=source_text,
                    grade=grade,
                    subject=subject,
                    chapter=chapter,
                    order=0,
                    slug=f"ch{chapter:02d}-stoxoi",
                    num=f"{chapter}.0",
                    title=f"Στόχοι — {ch_title}",
                    kicker="Στόχοι Μαθήματος",
                    lead=f"Τι θα γνωρίζεις και τι θα μπορείς να εφαρμόζεις μετά την ολοκλήρωση του Κεφαλαίου {chapter}.",
                    output_dir=site_root,
                )
                generated_files.append(stoxoi_file)

            # 2. Υποενότητες ύλης
            if not sections_meta:
                sections_meta = [
                    {"num": f"{chapter}.1", "title": "Γενικά & Βασικές Έννοιες"},
                    {"num": f"{chapter}.2", "title": "Εφαρμογές & Υπολογισμοί"},
                ]

            slug_map = {
                "1.1": "genika",
                "1.2": "efarmoges",
                "1.3": "monades",
                "1.4": "systima",
                "1.5": "isorropia",
                "1.6": "epilogi",
            }

            # 2. Υποενότητες ύλης σε Blocks (Chunks)
            THEORY_CHUNK_SIZE = 3
            sec_chunks = [
                sections_meta[i : i + THEORY_CHUNK_SIZE]
                for i in range(0, len(sections_meta), THEORY_CHUNK_SIZE)
            ]
            total_chunks = len(sec_chunks)
            print(f"\n📚 Επεξεργασία {len(sections_meta)} ενοτήτων σε {total_chunks} τμήματα (blocks)...")

            order_counter = 1
            for chunk_idx, chunk in enumerate(sec_chunks, 1):
                chunk_titles = ", ".join(f"#{s.get('num', '')} {s.get('title', '')}" for s in chunk)
                print(f"   ⏳ Τμήμα {chunk_idx}/{total_chunks} ({chunk_titles})...")
                for sec in chunk:
                    sec_num = str(sec.get("num", f"{chapter}.{order_counter}"))
                    sec_title = sec.get("title", f"Ενότητα {sec_num}")
                    sec_notes = sec.get("notes", "")

                    # Δημιουργία καθαρού slug
                    raw_slug = slug_map.get(sec_num)
                    if not raw_slug:
                        raw_slug = re.sub(r"[^a-zA-Z0-9]+", "-", sec_title.lower()).strip("-")
                        if not raw_slug:
                            raw_slug = f"sec-{order_counter:02d}"

                    sec_target = ch_dir / f"{order_counter:02d}-{raw_slug}.js"
                    if sec_target.exists() and not SiteValidator.validate_section_file(sec_target):
                        print(f"  ⏩ {sec_target.name} ({sec_title}) (υπάρχει ήδη και είναι 100% έγκυρο, διατήρηση)")
                        generated_files.append(sec_target)
                        order_counter += 1
                        continue

                    print(f"  ⚙️ Παραγωγή {order_counter:02d}-{raw_slug}.js ({sec_title})...")
                    sec_source = self.extract_section_source_block(source_text, sec_num, sec_title)
                    sec_file = self.generate_section(
                        source_content=sec_source,
                        grade=grade,
                        subject=subject,
                        chapter=chapter,
                        order=order_counter,
                        slug=raw_slug,
                        num=sec_num,
                        title=sec_title,
                        kicker="Μηχανολογία ΕΠΑΛ",
                        available_images=available_images,
                        syllabus_notes=sec_notes,
                        output_dir=site_root,
                    )
                    generated_files.append(sec_file)
                    order_counter += 1

            # 3. perilipsi.js
            perilipsi_target = ch_dir / f"{order_counter:02d}-ch{chapter:02d}-perilipsi.js"
            if perilipsi_target.exists() and not SiteValidator.validate_section_file(perilipsi_target):
                print(f"  ⏩ {perilipsi_target.name} (υπάρχει ήδη και είναι 100% έγκυρο, διατήρηση)")
                generated_files.append(perilipsi_target)
                order_counter += 1
            else:
                print(f"  📝 Παραγωγή {order_counter:02d}-perilipsi.js (Σύνοψη & Τυπολόγιο)...")
                perilipsi_file = self.generate_section(
                    source_content=source_text,
                    grade=grade,
                    subject=subject,
                    chapter=chapter,
                    order=order_counter,
                    slug=f"ch{chapter:02d}-perilipsi",
                    num=f"{chapter}.{order_counter}",
                    title="Σύντομη Περίληψη & Τυπολόγιο",
                    kicker="Επανάληψη",
                    lead="Συνοπτική ανακεφαλαίωση των κρίσιμων σημείων και πλήρης πίνακας τυπολογίου με μονάδες SI.",
                    output_dir=site_root,
                )
                generated_files.append(perilipsi_file)
                order_counter += 1

            # 4. sfalmata-kai-dieykriniseis.js
            sfalmata_target = ch_dir / f"{order_counter:02d}-sfalmata-kai-dieykriniseis.js"
            if sfalmata_target.exists() and not SiteValidator.validate_section_file(sfalmata_target):
                print(f"  ⏩ {sfalmata_target.name} (υπάρχει ήδη και είναι 100% έγκυρο, διατήρηση)")
                generated_files.append(sfalmata_target)
            else:
                print(f"  ⚠️ Παραγωγή {order_counter:02d}-sfalmata-kai-dieykriniseis.js (Λάθη βιβλίου & Επισημάνσεις)...")
                combined_notes = "\n".join(
                    filter(None, [ch_notes] + [s.get("notes", "") for s in sections_meta])
                )
                sfalmata_file = self.generate_errata_section(
                    source_content=source_text,
                    grade=grade,
                    subject=subject,
                    chapter=chapter,
                    order=order_counter,
                    num=f"{chapter}.{order_counter}",
                    syllabus_notes=combined_notes,
                    output_dir=site_root,
                )
                generated_files.append(sfalmata_file)

        except Exception as e_proc:
            interrupted = True
            print(f"\n⚠️ Η παραγωγή διακόπηκε λόγω αδυναμίας επικοινωνίας (timeout): {e_proc}")
            print(f"📦 Διατηρούνται κανονικά τα {len(generated_files)} αρχεία που ολοκληρώθηκαν!")

        # 5. Αυτόματη σύνδεση στο index.html για ό,τι αρχεία παρήχθησαν
        if sync_index and generated_files:
            try:
                from src.cli import sync_site_index as _sync
                _sync(site_root, grade, subject)
                print(f"🔗 Το index.html συγχρονίστηκε επιτυχώς με τα διαθέσιμα αρχεία για {grade}/{subject}!")
            except Exception as e:
                print(f"⚠️ Προειδοποίηση κατά τον συγχρονισμό του index.html: {e}")

        if interrupted:
            print(f"\n📋 Παράθεση διαθέσιμων ενοτήτων Κεφαλαίου {chapter}:")
            for gf in generated_files:
                print(f"   • {gf.name}")
        else:
            print(f"✨ Ολοκληρώθηκε η πλήρης παραγωγή του Κεφαλαίου {chapter}! Παρήχθησαν {len(generated_files)} αρχεία.")

        return generated_files
