"""
Author Assistant - Διαδραστικός AI βοηθός ανάπτυξης για τον διαχειριστή του 4gnosin.github.io.
Εκτελεί εντολές σε φυσική γλώσσα (π.χ. 'φτιάξε τα JS για το κεφάλαιο 2', 'βγάλε ασκήσεις', 'κάνε έλεγχο').
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

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

from .generators.exercise_generator import ExerciseGenerator
from .generators.script_tags_generator import ScriptTagsGenerator
from .generators.theory_generator import TheoryGenerator
from .utils.pdf_extractor import extract_chapter_from_pdf
from .validators.site_validator import SiteValidator


class AuthorAssistant:
    """
    Διαδραστικός βοηθός δημιουργίας περιεχομένου για το 4gnosin.github.io.
    """

    DEFAULT_MODEL = "gemini-3.8-flash"

    def __init__(self, model: str | None = None, api_key: str | None = None) -> None:
        if genai is None or types is None:
            raise ImportError(
                "Η βιβλιοθήκη 'google-genai' δεν είναι εγκατεστημένη.\n"
                "Εκτελέστε: pip install -r requirements.txt"
            )

        self.api_key = api_key or os.getenv("GEMINI_API_KEY")
        if not self.api_key:
            raise ValueError("Δεν βρέθηκε το GEMINI_API_KEY στο αρχείο .env.")

        self.model_name = model or os.getenv("GEMINI_MODEL") or self.DEFAULT_MODEL
        self.client = genai.Client(api_key=self.api_key)
        self.base_dir = Path(__file__).resolve().parent.parent

    def build_chapter_tool(
        self,
        input_file: str,
        grade: str,
        subject: str,
        chapter: int,
        output_dir: str = "output",
    ) -> str:
        """
        Εργαλείο πλήρους παραγωγής κεφαλαίου (Θεωρία + Ασκήσεις + Script tags).
        """
        in_path = self.base_dir / input_file if not Path(input_file).is_absolute() else Path(input_file)
        if not in_path.exists():
            return f"Σφάλμα: Το αρχείο '{input_file}' δεν βρέθηκε."

        out_path = self.base_dir / output_dir if not Path(output_dir).is_absolute() else Path(output_dir)

        t_gen = TheoryGenerator(api_key=self.api_key, model=self.model_name, base_dir=self.base_dir)
        t_files = t_gen.generate_chapter_sections(in_path, grade=grade, subject=subject, chapter=chapter, output_dir=out_path)

        e_gen = ExerciseGenerator(api_key=self.api_key, model=self.model_name, base_dir=self.base_dir)
        e_files = e_gen.generate_chapter_exercises(in_path, grade=grade, subject=subject, chapter=chapter, output_dir=out_path)

        groups_f = next((f for f in e_files if f.name == "groups.js"), None)
        ex_f = [f for f in e_files if f.name != "groups.js"]

        tags = ScriptTagsGenerator.generate_tags(t_files, groups_f, ex_f)
        tags_file = out_path / f"index_tags_{subject}_ch{chapter:02d}.html"
        tags_file.write_text(tags, encoding="utf-8")

        return (
            f"Επιτυχία! Παράχθηκαν {len(t_files)} αρχεία θεωρίας και {len(e_files)} αρχεία ασκήσεων "
            f"στο {out_path}.\nΤα script tags αποθηκεύτηκαν στο: {tags_file}"
        )

    def extract_pdf_tool(
        self,
        pdf_path: str,
        output_path: str,
        start_page: int,
        end_page: int,
        title: str = "",
    ) -> str:
        """
        Εργαλείο τοπικής εξαγωγής σελίδων PDF σε Markdown (0 tokens).
        """
        p_src = self.base_dir / pdf_path if not Path(pdf_path).is_absolute() else Path(pdf_path)
        p_dst = self.base_dir / output_path if not Path(output_path).is_absolute() else Path(output_path)
        try:
            res = extract_chapter_from_pdf(p_src, p_dst, start_page, end_page, title)
            return f"Επιτυχής εξαγωγή PDF στο: {res}"
        except Exception as exc:
            return f"Σφάλμα εξαγωγής PDF: {exc}"

    def list_available_chapters_tool(self) -> str:
        """
        Επιστρέφει τη λίστα με τα διαθέσιμα αρχεία Markdown στον φάκελο data/chapters/.
        """
        ch_dir = self.base_dir / "data" / "chapters"
        if not ch_dir.exists():
            return "Ο φάκελος data/chapters/ δεν υπάρχει."
        files = list(ch_dir.glob("*.md"))
        if not files:
            return "Δεν υπάρχουν αρχεία .md στο data/chapters/."
        return "Διαθέσιμα αρχεία:\n" + "\n".join(f"- {f.name}" for f in files)

    def start_repl(self) -> None:
        """
        Εκκινεί τη διαδραστική κονσόλα δημιουργού/διαχειριστή.
        """
        system_instruction = (
            "Είσαι ο Προσωπικός AI Βοηθός Ανάπτυξης (Co-Pilot) του δημιουργού του 4gnosin.github.io.\n"
            "Αποστολή σου είναι να εξυπηρετείς τον δημιουργό: να δημιουργείς αυτόματα αρχεία JavaScript (θεωρία, "
            "ασκήσεις, script tags), να εξάγεις PDF σε markdown και να ελέγχεις την ορθότητα του site.\n"
            "Όταν ο χρήστης σου ζητά να φτιάξεις/χτίσεις τα JS ενός κεφαλαίου, χρησιμοποίησε το κατάλληλο εργαλείο.\n"
            "Αν λείπει κάποια πληροφορία (π.χ. μάθημα, τάξη, αριθμός κεφαλαίου), ρώτησέ τον με φιλικό και άμεσο τρόπο."
        )

        chat = self.client.chats.create(
            model=self.model_name,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.2,
                tools=[
                    self.build_chapter_tool,
                    self.extract_pdf_tool,
                    self.list_available_chapters_tool,
                ],
            ),
        )

        print("\n" + "=" * 70)
        print("🛠️  4gnosin.github.io — AI CO-PILOT & BUILD ASSISTANT")
        print("Μοντέλο:", self.model_name)
        print("Πες μου τι θέλεις να φτιάξω! (π.χ. 'φτιάξε τα JS για το κεφάλαιο 1', 'τι κεφάλαια έχω;')")
        print("Πληκτρολόγησε 'exit' ή 'quit' για έξοδο.")
        print("=" * 70 + "\n")

        while True:
            try:
                user_msg = input("🧑‍💻 Εσύ: ").strip()
                if not user_msg:
                    continue
                if user_msg.lower() in ("exit", "quit", "έξοδος"):
                    print("\nΑποσύνδεση. Καλή συνέχεια στην ανάπτυξη του 4gnosin! 👋\n")
                    break

                print("\n🤖 Assistant: ", end="", flush=True)
                response = chat.send_message(user_msg)
                print(response.text or "")
                print("\n" + "-" * 70)
            except KeyboardInterrupt:
                print("\n\nΈξοδος. Τα λέμε σύντομα! 👋\n")
                break
            except Exception as exc:
                print(f"\n❌ Σφάλμα: {exc}\n")
