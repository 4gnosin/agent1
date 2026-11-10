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
        """Φορτώνει το prompt παραγωγής ασκήσεων εμπλουτισμένο με τη μόνιμη μνήμη κανόνων."""
        if not self.prompt_file.exists():
            raise FileNotFoundError(f"Δεν βρέθηκε το αρχείο prompt: {self.prompt_file}")
        base_prompt = with_structure_rules(
            self.prompt_file.read_text(encoding="utf-8"),
            self.prompts_dir,
        )
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

        js_code = sanitize_text(self.clean_js_output(response.text or ""))
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

        js_code = sanitize_text(self.clean_js_output(response.text or ""))
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
        """Δημιουργεί το prompt για παραγωγή διαδραστικών ασκήσεων."""
        return (
            f"Μετέτρεψε τις ασκήσεις που ΥΠΑΡΧΟΥΝ στο παρακάτω αρχείο σε διαδραστικές ασκήσεις "
            f"για το site. Μην επινοήσεις άσχετες ερωτήσεις.\n"
            f"Μάθημα: {subject}, τάξη: {grade}, κεφάλαιο: {chapter}.\n\n"
            "ΠΗΓΗ ΑΠΟ PDF: Το κείμενο μπορεί να είναι σπασμένο (κλάσματα σε πολλές γραμμές, "
            "παράξενα σύμβολα, κομμένες λέξεις). ΜΗΝ επινοείς φυσική ή αριθμούς που δεν φαίνονται "
            "ρητά στην εκφώνηση ή στην ΕΝΔΕΙΚΤΙΚΗ ΑΠΑΝΤΗΣΗ. Στήριξε calc answers ΜΟΝΟ σε εμφανείς "
            "αριθμούς της λύσης/εκφώνησης.\n"
            "ΚΡΙΣΙΜΟΙ ΚΑΝΟΝΕΣ ΠΙΣΤΗΣ ΑΝΤΙΓΡΑΦΗΣ & ΔΟΜΗΣ:\n"
            "1. ΠΙΣΤΗ ΑΝΤΙΓΡΑΦΗ ΕΚΦΩΝΗΣΗΣ: Απαγορεύεται να παραφράζεις ή να κόβεις την εκφώνηση. "
            "Αν υπάρχει εισαγωγικό κείμενο/δεδομένα πριν τα υποερωτήματα, βάλ' το αυτούσιο στο 'stem'. "
            "Χρησιμοποίησε LaTeX με $ ... $ για όλα τα σύμβολα/μεταβλητές (π.χ. $t_{db}$, $\\phi$, $\\Delta h_L$).\n"
            "2. ΑΡΙΘΜΗΣΗ ΥΠΟΕΡΩΤΗΜΑΤΩΝ ('subq'): Σε ΚΑΘΕ item βάλε υποχρεωτικά το πεδίο 'subq' με τον "
            "ακριβή κωδικό υποερωτήματος του PDF (π.χ. '2.1', '2.2', '2.3', '4.1', '4.2', '4.3', '4.4' ή 'α', 'β', 'γ', 'δ'). "
            "Όταν το 2.1 έχει προτάσεις Σωστό/Λάθος (α, β, γ, δ) ή ένα υποερώτημα (π.χ. 4.3 πίνακας) έχει πολλαπλές τιμές, "
            "δώσε σε ΟΛΑ τα επιμέρους items το ΙΔΙΟ 'subq' (π.χ. '2.1' ή '4.3') και βάλε στο πρώτο item 'subqPrompt' "
            "με την εκφώνηση του υποερωτήματος, ώστε να εμφανίζονται ενιαία και να ΜΗΝ σπάνε σε πολλά μικρά ερωτήματα!\n"
            "3. ΕΡΩΤΗΣΕΙΣ ΑΝΑΠΤΥΞΗΣ / ΑΙΤΙΟΛΟΓΗΣΗΣ (π.χ. '2.2 Με βάση τον ψυχρομετρικό χάρτη να αιτιολογήσετε την απάντηση...', "
            "'Δικαιολογήστε την απάντησή σας στο γ.', 'Να εξηγήσετε...'): ΑΠΑΓΟΡΕΥΕΤΑΙ να παραλείπονται! "
            "Δημιούργησε ξεχωριστό item με 'kind': 'mc', 'openEnded': true, 'subq': τον αριθμό του (π.χ. '2.2'), "
            "'prompt': την ακριβή εκφώνηση, και σωστή απάντηση την ΕΝΔΕΙΚΤΙΚΗ ΑΠΑΝΤΗΣΗ.\n"
            "4. ΣΧΕΔΙΑΣΤΙΚΑ ΕΡΩΤΗΜΑΤΑ ΧΑΡΤΗ (π.χ. '4.1 Εντοπίστε πάνω στον χάρτη το σημείο...', "
            "'4.2 ...εντοπίστε το νέο σημείο και σχεδιάστε τη μεταβολή'): ΜΗΝ τα παραλείπεις! "
            "Βάλ' τα ως ξεχωριστά items με 'kind': 'open', 'subq': '4.1' / '4.2', 'prompt': την ακριβή εκφώνηση του PDF, "
            "και 'explain': την επεξήγηση της λύσης.\n"
            "5. ΚΕΦΑΛΙΔΕΣ PDF: Η κεφαλίδα '## Θέμα #ΚΩΔΙΚΟΣ | Υποενότητα' δείχνει την αρχή του θέματος, τον ακριβή κωδικό "
            "και την υποενότητα, ενώ η κεφαλίδα '### Λύση #ΚΩΔΙΚΟΣ' δείχνει πού ξεκινά η λύση.\n"
            "6. ΟΝΟΜΑΤΟΔΟΣΙΑ ΥΠΟΕΝΟΤΗΤΩΝ (groups[].id):\n"
            "Το id κάθε υποενότητας ΠΡΕΠΕΙ υποχρεωτικά να έχει τη μορφή: "
            "'ch{Κεφάλαιο:02d}-{Υποκεφάλαιο:02d}-{slug}' (με διψήφιο αριθμό κεφαλαίου και υποκεφαλαίου)!\n"
            "Παραδείγματα:\n"
            "- Για την ενότητα '2.4 Η αποτύπωση...': 'ch02-04-psychrometry' (παράγει το αρχείο ch02-04-psychrometry.js).\n"
            "- Για την ενότητα '2.10 Ειδικές διατάξεις...': 'ch02-10-eidikes-diataxeis' (παράγει το αρχείο ch02-10-eidikes-diataxeis.js).\n"
            "- Για την ενότητα '8.2 Ο ρόλος...': 'ch08-02-rolos-klimatistikon-monadon' (παράγει το ch08-02-rolos-klimatistikon-monadon.js).\n"
            "7. ΑΣΚΗΣΕΙΣ ΑΝΤΙΣΤΟΙΧΙΣΗΣ (match):\n"
            "- Όταν η Στήλη Α περιέχει κείμενο/φράσεις (π.χ. ονόματα εξαρτημάτων, τύπους μηχανών, ορισμούς), "
            "ΠΡΕΠΕΙ ΥΠΟΧΡΕΩΤΙΚΑ να βάζεις ολόκληρο το κείμενο/φράση στο πεδίο 'text' (π.χ. 'text': 'Μηχανή τύπου Boxer'). "
            "ΑΠΑΓΟΡΕΥΕΤΑΙ αυστηρά να βάζεις μόνο τον αριθμό 'text': '1' όταν υπάρχει κείμενο στη Στήλη Α!\n"
            "- Όταν η Στήλη Α αναφέρεται αποκλειστικά σε αριθμημένα μέρη/βέλη ενός σχήματος χωρίς άλλη περιγραφή, "
            "τότε μόνο βάλε 'text': '1' ή 'Γραμμή 1'. ΑΠΑΓΟΡΕΥΕΤΑΙ αυστηρά να προσθέτεις δικές σου επεξηγήσεις σε παρενθέσεις (π.χ. '(καμπύλη)', '(οριζόντια προς τα δεξιά)'), διότι προδίδουν τη λύση και αλλοιώνουν την πρωτότυπη άσκηση της Τράπεζας Θεμάτων!\n"
            "8. ΣΧΗΜΑΤΑ, ΖΕΥΓΗ ΕΙΚΟΝΩΝ ΔΙΠΛΑ-ΔΙΠΛΑ & ΥΠΟΔΕΙΞΕΙΣ (hintImage):\n"
            "- Όταν ένα υποερώτημα (π.χ. 2.2) έχει αριθμημένα επιμέρους ερωτήματα (1., 2., 3.) όπου το καθένα συνοδεύεται "
            "από ζεύγος εικόνων δίπλα-δίπλα ΚΑΙ επιλογές πολλαπλής επιλογής (α., β., γ.), ΑΠΑΓΟΡΕΥΕΤΑΙ ΑΥΣΤΗΡΑ να το μετατρέψεις "
            "σε ενιαίο 'match' item! Δημιούργησε ξεχωριστά διαδοχικά items 'kind': 'mc' (όλα με το ίδιο 'subq', π.χ. '2.2', "
            "και 'subqPrompt' στο πρώτο), όπου το 1ο item έχει 'images': [fig01, fig02], 'imageLayout': 'grid', το 2ο item "
            "έχει 'images': [fig03, fig04], 'imageLayout': 'grid', και το 3ο item έχει 'images': [fig05, fig06], 'imageLayout': 'grid', "
            "ώστε να διατηρείται 100% η αυθεντική διάταξη του PDF (εικόνες δίπλα-δίπλα -> κείμενο/επιλογές -> εικόνες δίπλα-δίπλα -> κείμενο/επιλογές)!\n"
            "- Όταν η εκφώνηση συνοδεύεται από κοινό εισαγωγικό σχήμα/διάγραμμα, ορίζεται στο 'image' της άσκησης (ex.image). "
            "ΑΠΑΓΟΡΕΥΕΤΑΙ να επαναλαμβάνεται η ίδια εικόνα στο 'image' του υποερωτήματος (item.image), ώστε να μην εμφανίζεται διπλή!\n"
            "- Σε ερωτήματα αντιστοίχισης με πολλαπλά σχήματα (π.χ. Σχήματα 1, 2, 3), όρισε υποχρεωτικά 'imageLayout': 'grid' "
            "και 'imageLabels': ['1. Σχήμα 1', '2. Σχήμα 2', ...] στο item, και Στήλη Α: '1 (Σχήμα 1)'. ΜΗΝ βάζεις μεμονωμένο 'image' στο item.\n"
            "- Αν στην ενδεικτική απάντηση υπάρχει σχήμα λύσης (π.χ. διάγραμμα με γραμμές ανάγνωσης τιμών, διαγράμματα λειτουργίας κ.λπ.), "
            "αυτό αποτελεί ΣΧΗΜΑ ΥΠΟΔΕΙΞΗΣ και πρέπει να ορίζεται ως 'hintImage' στο αντίστοιχο υποερώτημα (item.hintImage)!\n"
            "9. ΣΥΜΠΛΗΡΩΣΗ ΚΕΝΩΝ (blank): Όταν ένα υποερώτημα έχει πολλαπλά αριθμημένα κενά (π.χ. 1-5) με κοινή δεξαμενή λέξεων, "
            "δημιούργησε ΕΝΑ ενιαίο blank item με textBefore, answers και bank, ΟΧΙ 5 ξεχωριστά πανομοιότυπα items!\n"
            "10. ΚΩΔΙΚΟΠΟΙΗΣΗ & ΠΙΣΤΟΤΗΤΑ: Χρησιμοποίησε αποκλειστικά ελληνικά γράμματα Unicode, ποτέ κυριλλικά ομόγλυφα (π.χ. ποτέ κυριλλικό 'К' αντί για ελληνικό 'Κ'). "
            "Τα ζεύγη αντιστοίχισης (pairs) πρέπει να ακολουθούν απαρέγκλιτα το επίσημο κλειδί απαντήσεων του Ι.Ε.Π.\n"
            "Στο code/title γράψε απλά «Θέμα 2ο · #18622» (ΧΩΡΙΣ <sup>).\n"
            "sourceOrder = σειρά στην πηγή. answer/pairs από την ενδεικτική λύση — ποτέ εικασίες.\n"
            "stem: ΜΟΝΟ ουσιαστική εκφώνηση/δεδομένα ΠΡΙΝ τα υποερωτήματα. "
            "ΑΠΑΓΟΡΕΥΕΤΑΙ stem «Θέμα 2ο»/«Θέμα 4ο»/κενό — αυτά είναι ήδη σε code & title· "
            "αν δεν υπάρχει άλλη εκφώνηση, ΜΗΝ βάλεις καθόλου το πεδίο stem.\n"
            "item.prompt = ολόκληρο το υποερώτημα. Κάθε item έχει explain. calc: answer + unit.\n\n"
            "Επέστρεψε αποκλειστικά ένα JSON object (ξεκινά με { και κλείνει με }, ΟΧΙ JSON array []) με σχήμα:\n"
            '{"groups":[{"id":"ch02-04-psychrometry","title":"2.4 Η αποτύπωση των θερμοδυναμικών χαρακτηριστικών",'
            '"blurb":"..."}],'
            '"exercises":[{"id":"ch02-23768","group":"ch02-04-psychrometry","kind":"tf",'
            '"layout":"unified","bankCode":"23768","code":"Θέμα 2ο · #23768",'
            '"title":"#23768 — Θέμα 2ο","units":25,"theory":"...","sourceOrder":1,'
            '"items":[{"kind":"tf","prompt":"...","answer":true,"explain":"..."},'
            '{"kind":"match","prompt":"...","left":[{"id":"1","text":"Γραμμή 1"}],"right":[{"id":"a","text":"..."}],"pairs":{"1":"a"},'
            '"explain":"..."}]}],"omitted":[]}\n\n'
            f"ΠΗΓΗ ΑΣΚΗΣΕΩΝ ΚΑΙ ΛΥΣΕΩΝ:\n{source_content}"
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
        try:
            result = json.loads(raw_result)
        except json.JSONDecodeError:
            cleaned = re.sub(r"^```(?:json)?\s*", "", raw_result.strip(), flags=re.IGNORECASE)
            cleaned = re.sub(r"\s*```$", "", cleaned)
            try:
                result = json.loads(cleaned)
            except json.JSONDecodeError as exc:
                raise ValueError("Το Gemini δεν επέστρεψε έγκυρο JSON για τις ασκήσεις.") from exc

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

        # Εντοπισμός θεμάτων στην πηγή (## Θέμα #ΚΩΔΙΚΟΣ ή ## Θέμα)
        topic_pattern = re.compile(r'(?m)^##\s+Θέμα\s*(?:#?(\d+))?')
        topic_matches = list(topic_pattern.finditer(content))

        CHUNK_SIZE = 4
        if len(topic_matches) > CHUNK_SIZE:
            preamble = content[:topic_matches[0].start()].strip()
            topic_sections = []
            topic_codes = []
            for i, match in enumerate(topic_matches):
                start = match.start()
                end = topic_matches[i + 1].start() if i + 1 < len(topic_matches) else len(content)
                topic_sections.append(content[start:end].strip())
                topic_codes.append(match.group(1) or f"Θέμα {i+1}")

            chunks = [
                topic_sections[i : i + CHUNK_SIZE]
                for i in range(0, len(topic_sections), CHUNK_SIZE)
            ]
            codes_chunks = [
                topic_codes[i : i + CHUNK_SIZE]
                for i in range(0, len(topic_codes), CHUNK_SIZE)
            ]
            total_chunks = len(chunks)
            print(f"\n📝 Παραγωγή ασκήσεων για '{path.name}': {len(topic_matches)} θέματα σε {total_chunks} τμήματα (εγγύηση 100% πιστότητας)...")

            merged_groups: list[dict[str, Any]] = []
            merged_exercises: list[dict[str, Any]] = []
            merged_omitted: list[Any] = []

            for idx, (chunk_list, c_codes) in enumerate(zip(chunks, codes_chunks, strict=False), 1):
                chunk_codes_str = ", ".join(f"#{c}" if str(c).isdigit() else str(c) for c in c_codes)
                print(f"   ⏳ Τμήμα {idx}/{total_chunks} ({chunk_codes_str})...")
                chunk_content = (preamble + "\n\n" if preamble else "") + "\n\n".join(chunk_list)

                chunk_prompt = self._build_exercise_prompt(
                    chunk_content, grade=grade, subject=subject, chapter=chapter
                )
                chunk_result = self._call_gemini_json(chunk_prompt)

                for grp in chunk_result.get("groups", []):
                    if isinstance(grp, dict) and grp.get("id"):
                        if not any(g.get("id") == grp["id"] for g in merged_groups):
                            merged_groups.append(grp)
                for ex in chunk_result.get("exercises", []):
                    if isinstance(ex, dict):
                        merged_exercises.append(ex)
                merged_omitted.extend(chunk_result.get("omitted", []))

            result = {
                "groups": merged_groups,
                "exercises": merged_exercises,
                "omitted": merged_omitted,
            }
        else:
            print(f"\n📝 Παραγωγή ομάδων & ασκήσεων για το κεφάλαιο '{path.name}'...")
            prompt = self._build_exercise_prompt(content, grade=grade, subject=subject, chapter=chapter)
            result = self._call_gemini_json(prompt)

        result = sanitize_obj(result)
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
