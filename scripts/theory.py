"""
theory.py - Διαδραστικό εργαλείο παραγωγής διδακτικής θεωρίας (window.SECTIONS)
από τα επίσημα βιβλία PDF και τη διδακτέα ύλη του ΙΕΠ για το 4gnosin.github.io.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

# Εξασφάλιση UTF-8 εξόδου σε κονσόλα Windows
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

BASE_DIR = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))
try:
    os.chdir(str(BASE_DIR))
except Exception:
    pass

from dotenv import load_dotenv
load_dotenv(BASE_DIR / ".env")

from src.generators.theory_generator import TheoryGenerator
from src.utils.book_extractor import BookExtractor
from src.utils.structure import normalize_subject
from src.cli import sync_site_index


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



# Χάρτης ακριβών σελίδων PDF ανά μάθημα και κεφάλαιο
BOOK_PAGE_MAP: dict[str, dict[int, tuple[int, int]]] = {
    "b_antoxi": {
        0: (20, 39),   # Εισαγωγή (Ε.1 - Ε.6): Μονάδες, SI, Πολλαπλάσια/Υποδιαιρέσεις, Τριγωνομετρία
        1: (40, 52),   # Κεφ 1: Γενικά περί δυνάμεων (1.1, 1.2)
        2: (53, 66),   # Κεφ 2: Ροπές δυνάμεων (2.1, 2.2, 2.3)
        3: (67, 91),   # Κεφ 3: Σύνθεση δυνάμεων (3.1 - 3.5)
        4: (92, 115),  # Κεφ 4: Κέντρο βάρους - Ευστάθεια (4.1 - 4.5)
        5: (116, 137), # Κεφ 5: Βασικές έννοιες αντοχής των υλικών (5.1 - 5.9)
        6: (138, 160), # Κεφ 6: Αξονικός εφελκυσμός και θλίψη (6.1, 6.2)
        8: (175, 215), # Κεφ 8: Φορείς - Φορτίσεις - Στηρίξεις
        9: (216, 248), # Κεφ 9: Διάτμηση
        10: (249, 285),# Κεφ 10: Κάμψη
        11: (286, 318),# Κεφ 11: Στρέψη
        12: (319, 345),# Κεφ 12: Σύνθετες καταστάσεις - Λυγισμός
        14: (375, 410),# Κεφ 14: Τριβή
    },
    "antoxi": {
        0: (20, 39),
        1: (40, 52),
        2: (53, 66),
        3: (67, 91),
        4: (92, 115),
        5: (116, 137),
        6: (138, 160),
        8: (175, 215),
        9: (216, 248),
        10: (249, 285),
        11: (286, 318),
        12: (319, 345),
        14: (375, 410),
    },
    "b_thermo": {
        1: (14, 33),    # Κεφ 1: Βασικές έννοιες (σελ. 1-20)
        2: (34, 47),    # Κεφ 2: Επίλυση θερμοδυναμικών προβλημάτων (σελ. 21-34)
        3: (48, 69),    # Κεφ 3: Σχέσεις που εκφράζουν τις αρχές διατήρησης (σελ. 35-56)
        4: (70, 93),    # Κεφ 4: Μορφές μηχανικού έργου (σελ. 57-80)
        5: (94, 109),   # Κεφ 5: Σχέσεις αρχής διατήρησης της ενέργειας (σελ. 81-96)
        6: (110, 141),  # Κεφ 6: Θερμοδυναμικές μεταβολές τελείων αερίων (σελ. 97-128)
        7: (142, 173),  # Κεφ 7: Ο δεύτερος νόμος της θερμοδυναμικής (σελ. 129-160)
        8: (174, 205),  # Κεφ 8: Μηχανικό έργο από τη θερμότητα (σελ. 161-192)
        9: (206, 249),  # Κεφ 9: Θερμικές κινητήριες μηχανές (σελ. 193-236)
        10: (250, 269), # Κεφ 10: Αντλίες - Συμπιεστές (σελ. 237-256)
        11: (270, 291), # Κεφ 11: Διαστολή των σωμάτων (σελ. 257-278)
        12: (292, 307), # Κεφ 12: Μετάδοση της θερμότητας (σελ. 279-294)
        13: (308, 325), # Κεφ 13: Καύσιμα - Καύση (σελ. 295-312)
    },
    "thermo": {
        1: (14, 33),
        2: (34, 47),
        3: (48, 69),
        4: (70, 93),
        5: (94, 109),
        6: (110, 141),
        7: (142, 173),
        8: (174, 205),
        9: (206, 249),
        10: (250, 269),
        11: (270, 291),
        12: (292, 307),
        13: (308, 325),
    },
    "thermod": {
        1: (14, 33),
        2: (34, 47),
        3: (48, 69),
        4: (70, 93),
        5: (94, 109),
        6: (110, 141),
        7: (142, 173),
        8: (174, 205),
        9: (206, 249),
        10: (250, 269),
        11: (270, 291),
        12: (292, 307),
        13: (308, 325),
    }
}

def load_syllabus() -> dict:
    syl_path = Path("data/syllabus/syllabus_epal_mech.json")
    if not syl_path.exists():
        print(f"[ERROR] Δεν βρέθηκε το αρχείο ύλης: {syl_path}")
        sys.exit(1)
    with open(syl_path, "r", encoding="utf-8") as f:
        return json.load(f)


def list_available_books() -> dict[str, list[Path]]:
    books_dir = Path("data/books")
    found: dict[str, list[Path]] = {}
    if not books_dir.exists():
        return found
    for pdf in books_dir.glob("*/*/*.pdf"):
        subj = pdf.parent.name
        found.setdefault(subj, []).append(pdf)
    return found


def interactive_menu():
    syllabus = load_syllabus()
    available_books = list_available_books()
    subjects = syllabus.get("subjects", {})

    print("=" * 65)
    print("  4gnosin.github.io - Theory Author & Pedagogue CLI")
    print("=" * 65)
    print("Επίσημη Ύλη:", syllabus.get("protocol", "2026-2027"))
    print("-" * 65)

    subj_keys = list(subjects.keys())
    for idx, key in enumerate(subj_keys, 1):
        s_data = subjects[key]
        taxi = s_data.get("taxi", "")
        title = s_data.get("title", "")
        slug = s_data.get("slug", key)
        ch_count = len(s_data.get("chapters", []))
        has_book = "[PDF OK]" if (slug in available_books or key in available_books or "thermo" in available_books) else "[Χωρίς PDF]"
        print(f" [{idx:02d}] {taxi}' Τάξη | {title[:40]:<40} ({ch_count} κεφ.) {has_book}")

    print(" [ 0] Έξοδος")
    print("-" * 65)

    choice = input("Επίλεξε μάθημα (0-{}): ".format(len(subj_keys))).strip()
    if not choice or choice == "0":
        print("Έξοδος.")
        return

    try:
        subj_idx = int(choice) - 1
        if subj_idx < 0 or subj_idx >= len(subj_keys):
            print("Μη έγκυρη επιλογή.")
            return
    except ValueError:
        print("Μη έγκυρος αριθμός.")
        return

    selected_key = subj_keys[subj_idx]
    subj_data = subjects[selected_key]
    taxi = normalize_grade(subj_data.get("taxi", "b"))
    raw_subject_slug = subj_data.get("slug", selected_key)
    subject_slug = normalize_subject(raw_subject_slug)
    chapters = subj_data.get("chapters", [])

    print(f"\nΕπιλέχθηκε: {subj_data.get('title')}")
    print("-" * 65)
    has_intro = (
        0 in BOOK_PAGE_MAP.get(subject_slug, {})
        or 0 in BOOK_PAGE_MAP.get(raw_subject_slug, {})
        or 0 in BOOK_PAGE_MAP.get(selected_key, {})
    )
    if has_intro:
        print(" [00] Εισαγωγή: Συστήματα Μονάδων (SI), Πολλαπλάσια/Υποδιαιρέσεις & Τριγωνομετρία")
    for c_idx, ch in enumerate(chapters, 1):
        c_num = ch.get("chapter", c_idx)
        c_title = ch.get("title", "")
        sec_count = len(ch.get("sections", []))
        print(f" [{c_num:02d}] Κεφάλαιο {c_num}: {c_title} ({sec_count} ενότητες)")
    print(" [ A] Παραγωγή όλων των κεφαλαίων")
    print(" [ 0] Πίσω")
    print("-" * 65)

    c_choice = input("Επίλεξε κεφάλαιο (ή A για όλα): ").strip().upper()
    if not c_choice or c_choice == "0":
        return

    # Εύρεση PDF βιβλίου
    pdf_candidates = (
        available_books.get(subject_slug, [])
        or available_books.get(raw_subject_slug, [])
        or available_books.get(selected_key, [])
    )
    if not pdf_candidates and "thermo" in subject_slug:
        pdf_candidates = available_books.get("thermo", [])

    if not pdf_candidates:
        subj_title = subj_data.get('title', subject_slug)
        print(f"\n[ΠΡΟΕΙΔΟΠΟΙΗΣΗ] Δεν βρέθηκε κατεβασμένο PDF για το μάθημα: {subj_title}")
        dl_choice = input("📥 Θέλετε να γίνει αυτόματη λήψη του βιβλίου από το ebooks.edu.gr τώρα; (Ν/ο / Enter για Ναι): ").strip().lower()
        if dl_choice not in ("o", "n", "όχι", "oxi", "no"):
            try:
                from scripts.edubooks import download_subject_books, BOOKS_CATALOG
                edubooks_taxi = "Β" if taxi == "b" else "Γ"
                cand_slugs = [subject_slug, raw_subject_slug, selected_key]
                if "thermo" in subject_slug:
                    cand_slugs.append("thermo")
                downloaded = False
                for s in cand_slugs:
                    if s in BOOKS_CATALOG.get(edubooks_taxi, {}):
                        print(f"\n🚀 Έναρξη αυτόματης λήψης για '{s}' ({edubooks_taxi}' Τάξη)...")
                        download_subject_books(edubooks_taxi, s)
                        downloaded = True
                        break
                if downloaded:
                    available_books = list_available_books()
                    pdf_candidates = (
                        available_books.get(subject_slug, [])
                        or available_books.get(raw_subject_slug, [])
                        or available_books.get(selected_key, [])
                    )
                    if not pdf_candidates and "thermo" in subject_slug:
                        pdf_candidates = available_books.get("thermo", [])
            except Exception as e_dl:
                print(f"❌ Σφάλμα κατά την αυτόματη λήψη: {e_dl}")

    if not pdf_candidates:
        print("\nΔεν βρέθηκε PDF βιβλίου για να συνεχίσει η παραγωγή.")
        print("Μπορείτε να εκτελέσετε την επιλογή [2] από το μενού Θεωρίας για λήψη βιβλίων.")
        return

    pdf_file = pdf_candidates[0]
    print(f"\nΧρήση βιβλίου: {pdf_file.name}")

    generator = TheoryGenerator()

    if c_choice == "A":
        target_chapters = chapters
    elif c_choice in ("00", "INTRO", "0"):
        target_chapters = [{
            "chapter": 0,
            "title": "Εισαγωγή: Συστήματα Μονάδων (SI), Πολλαπλάσια/Υποδιαιρέσεις & Τριγωνομετρία",
            "sections": [
                {"num": "0.1", "title": "Γενικά, Συστήματα Μονάδων (SI) & Υποδιαιρέσεις"},
                {"num": "0.2", "title": "Εφαρμογές & Υπολογισμοί"}
            ]
        }]
    else:
        try:
            target_num = int(c_choice)
            target_chapters = [ch for ch in chapters if ch.get("chapter") == target_num]
            if not target_chapters:
                print(f"Δεν βρέθηκε το κεφάλαιο {target_num}.")
                return
        except ValueError:
            print("Μη έγκυρη επιλογή.")
            return

    for ch in target_chapters:
        c_num = ch.get("chapter")
        ch_label = "Εισαγωγή" if c_num == 0 else f"Κεφάλαιο {c_num}"
        print(f"\n🚀 Έναρξη παραγωγής για: {ch_label} ({ch.get('title')})...")
        try:
            # Ακριβές εύρος σελίδων από το BOOK_PAGE_MAP
            subj_map = (
                BOOK_PAGE_MAP.get(subject_slug)
                or BOOK_PAGE_MAP.get(raw_subject_slug)
                or BOOK_PAGE_MAP.get(selected_key)
                or {}
            )
            if c_num in subj_map:
                p_start, p_end = subj_map[c_num]
            else:
                print(f"\n⚠️ Δεν βρέθηκε προκαθορισμένο εύρος σελίδων στο BOOK_PAGE_MAP για το {ch_label}.")
                user_pages = input(f"👉 Εισάγετε σελίδες PDF ως 'αρχή,τέλος' (π.χ. 94,109) ή πατήστε Enter για (1, 30): ").strip()
                if user_pages and "," in user_pages:
                    try:
                        p_parts = [int(p.strip()) for p in user_pages.split(",", 1)]
                        p_start, p_end = p_parts[0], p_parts[1]
                    except ValueError:
                        p_start, p_end = (1, 30)
                else:
                    p_start, p_end = (1, 30)
                print(f"📖 Χρήση σελίδων PDF: {p_start} έως {p_end}")
            
            generator.generate_chapter_from_book(
                grade=taxi,
                subject=subject_slug,
                chapter=c_num,
                page_start=p_start,
                page_end=p_end,
                book_pdf_path=pdf_file,
                sync_index=True,
            )
            print(f"[OK] Ολοκληρώθηκε επιτυχώς το Κεφάλαιο {c_num}!")
            try:
                sync_site_index(Path("site"), taxi, subject_slug)
                print(f"🔗 Ενημερώθηκε το index.html και το catalog.js για {taxi}/{subject_slug}!")
            except Exception as e_sync:
                print(f"⚠️ Προσοχή κατά τον συγχρονισμό του index.html: {e_sync}")
        except Exception as e:
            print(f"[ERROR] Σφάλμα στο Κεφάλαιο {c_num}: {e}")

    print("\n✨ Η διαδικασία ολοκληρώθηκε!")


def main():
    parser = argparse.ArgumentParser(description="Theory Author CLI για το 4gnosin.github.io")
    parser.add_argument("--subject", "-s", help="Slug μαθήματος (π.χ. thermo, antoxi)")
    parser.add_argument("--chapter", "-c", type=int, help="Αριθμός κεφαλαίου")
    parser.add_argument("--page-start", type=int, default=1, help="Αρχική σελίδα PDF")
    parser.add_argument("--page-end", type=int, default=30, help="Τελική σελίδα PDF")
    parser.add_argument("--grade", "-g", default="b", help="Τάξη (b ή c)")
    parser.add_argument("--list", "-l", action="store_true", help="Εμφάνιση λίστας μαθημάτων ύλης")

    args = parser.parse_args()

    if args.list:
        syllabus = load_syllabus()
        for k, v in syllabus.get("subjects", {}).items():
            print(f"{k}: {v.get('title')} ({len(v.get('chapters', []))} κεφάλαια)")
        return

    if args.subject and args.chapter:
        gen = TheoryGenerator()
        gen.generate_chapter_from_book(
            grade=normalize_grade(args.grade),
            subject=normalize_subject(args.subject),
            chapter=args.chapter,
            page_start=args.page_start,
            page_end=args.page_end,
            sync_index=True,
        )
        return

    interactive_menu()


if __name__ == "__main__":
    main()
