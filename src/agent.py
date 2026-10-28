"""
epal-mech-agent - AI Agent Μηχανολογίας ΕΠΑΛ
Χρήση του επίσημου google-genai SDK με αρχιτεκτονική Chapter-by-Chapter Grounded Context.
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path
from typing import Iterator

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


class EpalMechAgent:
    """
    Agent για τα μαθήματα Μηχανολογίας ΕΠΑΛ.
    Συνδυάζει το System Prompt με το συγκεκριμένο κεφάλαιο ύλης (RAG-per-chapter)
    και αποκρίνεται αυστηρά βάσει της διδακτέας ύλης.
    """

    DEFAULT_MODEL = "gemini-3.8-flash"

    def __init__(
        self,
        model: str | None = None,
        api_key: str | None = None,
        base_dir: Path | None = None,
    ) -> None:
        """
        Αρχικοποίηση του Agent και των φακέλων δεδομένων.
        """
        self.base_dir = base_dir or Path(__file__).resolve().parent.parent
        self.prompts_dir = self.base_dir / "prompts"
        self.chapters_dir = self.base_dir / "data" / "chapters"

        if genai is None or types is None:
            raise ImportError(
                "Η επίσημη βιβλιοθήκη 'google-genai' δεν είναι εγκατεστημένη.\n"
                "Εκτελέστε: pip install -r requirements.txt"
            )

        self.api_key = api_key or os.getenv("GEMINI_API_KEY")
        if not self.api_key:
            raise ValueError(
                "Δεν βρέθηκε το GEMINI_API_KEY.\n"
                "Παρακαλούμε ορίστε το στο αρχείο .env ή ως μεταβλητή περιβάλλοντος.\n"
                "Παράδειγμα .env: GEMINI_API_KEY=your_actual_key_here"
            )

        self.model_name = model or os.getenv("GEMINI_MODEL") or self.DEFAULT_MODEL
        self.client = genai.Client(api_key=self.api_key)

    def list_chapters(self) -> list[str]:
        """
        Επιστρέφει τη λίστα με τα ονόματα των διαθέσιμων κεφαλαίων (χωρίς την κατάληξη .md).
        """
        if not self.chapters_dir.exists():
            return []
        def chapter_key(stem: str) -> tuple[int, str]:
            match = re.search(r"(?:chapter|ch)[_-]?(\d+)", stem, re.IGNORECASE) or re.search(
                r"(\d+)", stem
            )
            number = int(match.group(1)) if match else 10**9
            return (number, stem.lower())

        chapters = sorted(
            [f.stem for f in self.chapters_dir.glob("*.md") if f.is_file()],
            key=chapter_key,
        )
        return chapters

    def load_system_prompt(self) -> str:
        """
        Φορτώνει το βασικό system prompt του καθηγητή ΕΠΑΛ από το prompts/system_prompt.md.
        """
        prompt_file = self.prompts_dir / "system_prompt.md"
        if not prompt_file.exists():
            raise FileNotFoundError(
                f"Το αρχείο system prompt δεν βρέθηκε στη διαδρομή: {prompt_file}"
            )
        return prompt_file.read_text(encoding="utf-8")

    def load_chapter(self, chapter_name: str) -> str:
        """
        Φορτώνει το περιεχόμενο ενός κεφαλαίου από το φάκελο data/chapters/.
        Δέχεται είτε το όνομα με κατάληξη .md είτε χωρίς.
        """
        clean_name = chapter_name[:-3] if chapter_name.endswith(".md") else chapter_name
        target_path = self.chapters_dir / f"{clean_name}.md"

        if not target_path.exists():
            available = self.list_chapters()
            available_str = ", ".join(available) if available else "Κανένα κεφάλαιο δεν βρέθηκε."
            raise FileNotFoundError(
                f"Το κεφάλαιο '{chapter_name}' δεν βρέθηκε στο {self.chapters_dir}.\n"
                f"Διαθέσιμα κεφάλαια: {available_str}"
            )

        return target_path.read_text(encoding="utf-8")

    def build_system_instruction(self, chapter_content: str, chapter_name: str) -> str:
        """
        Συνθέτει το τελικό system instruction:
        Βασικό System Prompt + Περιεχόμενο Κεφαλαίου Αναφοράς.
        """
        base_prompt = self.load_system_prompt()
        return (
            f"{base_prompt}\n\n"
            f"===========================================================\n"
            f"ΤΡΕΧΟΝ ΚΕΦΑΛΑΙΟ ΥΛΗΣ ΑΝΑΦΟΡΑΣ: [{chapter_name}]\n"
            f"===========================================================\n"
            f"{chapter_content}\n"
            f"===========================================================\n"
            f"ΤΕΛΟΣ ΚΕΦΑΛΑΙΟΥ ΥΛΗΣ. ΥΠΕΝΘΥΜΙΣΗ: ΑΠΑΝΤΗΣΕ ΑΥΣΤΗΡΑ ΚΑΙ ΜΟΝΟ ΒΑΣΕΙ ΤΩΝ ΠΑΡΑΠΑΝΩ.\n"
        )

    def ask(
        self,
        chapter_name: str,
        question: str,
        stream: bool = True,
    ) -> Iterator[str] | str:
        """
        Υποβάλλει ερώτηση για συγκεκριμένο κεφάλαιο στο Gemini API.
        Αν stream=True, επιστρέφει iterator με τα κομμάτια κειμένου (chunks).
        Αν stream=False, επιστρέφει ολόκληρο το κείμενο της απάντησης.
        """
        chapter_content = self.load_chapter(chapter_name)
        system_instruction = self.build_system_instruction(chapter_content, chapter_name)

        config = types.GenerateContentConfig(
            system_instruction=system_instruction,
            temperature=0.2,  # Χαμηλό temperature για μέγιστη πιστότητα στο κείμενο
        )

        if stream:
            response = self.client.models.generate_content_stream(
                model=self.model_name,
                contents=question,
                config=config,
            )

            def chunk_generator() -> Iterator[str]:
                for chunk in response:
                    if chunk.text:
                        yield chunk.text

            return chunk_generator()
        else:
            response = self.client.models.generate_content(
                model=self.model_name,
                contents=question,
                config=config,
            )
            return response.text or ""

    def interactive_chat(self, chapter_name: str) -> None:
        """
        Εκκινεί διαδραστική συνεδρία απορίες-απαντήσεις για ένα συγκεκριμένο κεφάλαιο.
        """
        chapter_content = self.load_chapter(chapter_name)
        system_instruction = self.build_system_instruction(chapter_content, chapter_name)

        chat = self.client.chats.create(
            model=self.model_name,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.2,
            ),
        )

        print("\n" + "=" * 65)
        print(f"🎓 ΚΑΘΗΓΗΤΗΣ ΜΗΧΑΝΟΛΟΓΙΑΣ ΕΠΑΛ - [Κεφάλαιο: {chapter_name}]")
        print("Μοντέλο:", self.model_name)
        print("Γράψτε την απορία σας ή πληκτρολογήστε 'exit' ή 'quit' για έξοδο.")
        print("=" * 65 + "\n")

        while True:
            try:
                user_input = input("👨‍🎓 Μαθητής: ").strip()
                if not user_input:
                    continue
                if user_input.lower() in ("exit", "quit", "έξοδος"):
                    print("\nΚαλή συνέχεια στη μελέτη! Τα λέμε στο επόμενο μάθημα! 👋\n")
                    break

                print("\n👨‍🏫 Καθηγητής: ", end="", flush=True)
                response = chat.send_message(user_input)
                print(response.text)
                print("\n" + "-" * 65)
            except KeyboardInterrupt:
                print("\n\nΔιακοπή συνεδρίας. Καλή μελέτη! 👋\n")
                break


def main() -> None:
    parser = argparse.ArgumentParser(
        description="epal-mech-agent: AI Agent Μηχανολογίας ΕΠΑΛ (Gemini API)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument(
        "-c",
        "--chapter",
        type=str,
        help="Το όνομα του κεφαλαίου από το data/chapters/ (π.χ. chapter_01_stoicheia)",
    )
    parser.add_argument(
        "-q",
        "--question",
        type=str,
        help="Η ερώτηση/απορία προς τον καθηγητή",
    )
    parser.add_argument(
        "-i",
        "--interactive",
        action="store_true",
        help="Εκκίνηση διαδραστικής συνομιλίας (chat mode) για το επιλεγμένο κεφάλαιο",
    )
    parser.add_argument(
        "-l",
        "--list",
        action="store_true",
        help="Εμφάνιση όλων των διαθέσιμων κεφαλαίων",
    )
    parser.add_argument(
        "-m",
        "--model",
        type=str,
        default=None,
        help="Επιλογή μοντέλου Gemini (προεπιλογή: gemini-3.8-flash)",
    )

    args = parser.parse_args()

    try:
        agent = EpalMechAgent(model=args.model)
    except Exception as exc:
        print(f"❌ Σφάλμα αρχικοποίησης: {exc}", file=sys.stderr)
        sys.exit(1)

    # Λίστα κεφαλαίων
    if args.list:
        chapters = agent.list_chapters()
        print("\n📚 Διαθέσιμα Κεφάλαια Ύλης ΕΠΑΛ:")
        if not chapters:
            print("  (Δεν βρέθηκαν αρχεία .md στον φάκελο data/chapters/)")
        else:
            for idx, ch in enumerate(chapters, 1):
                print(f"  {idx}. {ch}")
        print()
        return

    # Έλεγχος αν δόθηκε κεφάλαιο
    if not args.chapter:
        chapters = agent.list_chapters()
        print("⚠️ Παρακαλούμε δηλώστε ένα κεφάλαιο με την παράμετρο -c / --chapter.")
        if chapters:
            print(f"Διαθέσιμα κεφάλαια: {', '.join(chapters)}")
            print("Παράδειγμα: python src/agent.py -c chapter_01_stoicheia -i")
        return

    # Διαδραστική λειτουργία ή αυτόματη μετάβαση σε chat εάν δεν υπάρχει ερώτηση
    if args.interactive or not args.question:
        agent.interactive_chat(args.chapter)
        return

    # Απευθείας υποβολή ερώτησης
    print(f"\n📖 [Κεφάλαιο: {args.chapter}]")
    print(f"❓ Ερώτηση: {args.question}\n")
    print("👨‍🏫 Καθηγητής: ", end="", flush=True)

    try:
        chunks = agent.ask(chapter_name=args.chapter, question=args.question, stream=True)
        if isinstance(chunks, Iterator):
            for chunk in chunks:
                print(chunk, end="", flush=True)
        else:
            print(chunks)
        print("\n")
    except Exception as exc:
        print(f"\n❌ Σφάλμα εκτέλεσης: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
