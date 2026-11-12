"""
menu.py - 4gnosin Control Center & Unified Automation Hub
=========================================================
Ενιαίο κέντρο αυτοματισμού και εκτέλεσης εργαλείων για το 4gnosin.github.io.
Παρέχει πλήρη υποστήριξη για:
  1. Κατασκευή Τράπεζας Θεμάτων (Κατέβασμα + Process με Gemini API + WebP)
  2. Διαδραστική Θεωρία (Σχολικά Βιβλία, Σχήματα & Σημειώσεις με AI Agent)
  3. Προσομοιώσεις & Animations (Manim-Style Canvas Animator)
  4. Συνδυασμούς (Και τα 3 ή συνδυασμός επιλογών)
  5. Εργαλεία & Διαχείριση (Server, WebP, Validator, Agent Memory)
"""

from __future__ import annotations

import os
import sys
import subprocess
import webbrowser
import socket
import json
from pathlib import Path

# Εξασφάλιση UTF-8 εξόδου σε περιβάλλον Windows
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = Path(__file__).resolve().parent.parent if Path(__file__).resolve().parent.name == "scripts" else Path(__file__).resolve().parent
SCRIPTS_DIR = BASE_DIR / "scripts" if (BASE_DIR / "scripts").exists() else BASE_DIR


def is_port_in_use(port: int = 8000) -> bool:
    """Ελέγχει αν η συγκεκριμένη θύρα είναι ήδη δεσμευμένη."""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(("localhost", port)) == 0


def clear_screen():
    """Καθαρισμός οθόνης τερματικού."""
    os.system("cls" if os.name == "nt" else "clear")


def print_header(title: str):
    """Εκτύπωση κεφαλίδας ενότητας."""
    print("=" * 72)
    print(f"  {title}")
    print("=" * 72)
    print()


def run_py_command(cmd: list[str], title: str = "") -> int:
    """Βοηθητική συνάρτηση εκτέλεσης υποδιεργασίας Python με ορθό python executable."""
    if title:
        print(f"\n🚀 {title}...")
    resolved_cmd = list(cmd)
    if resolved_cmd and resolved_cmd[0].endswith(".py"):
        cand_scripts = SCRIPTS_DIR / resolved_cmd[0]
        cand_base = BASE_DIR / resolved_cmd[0]
        if cand_scripts.exists():
            resolved_cmd[0] = str(cand_scripts)
        elif cand_base.exists():
            resolved_cmd[0] = str(cand_base)
    full_cmd = [sys.executable] + resolved_cmd
    res = subprocess.run(full_cmd, cwd=str(BASE_DIR))
    return res.returncode


# ==============================================================================
# 1. ΚΑΤΑΣΚΕΥΗ ΤΡΑΠΕΖΑΣ ΘΕΜΑΤΩΝ (ΚΑΤΕΒΑΣΜΑ + PROCESS ME API)
# ==============================================================================

def op_trapeza_pipeline(step_download: bool = True, step_process: bool = True, step_webp: bool = True):
    """
    Εκτέλεση ροής Τράπεζας Θεμάτων:
    - Κατέβασμα αρχείων από την Τράπεζα (trapeza7.py -> data/inbox)
    - Επεξεργασία Inbox με Gemini API (src.cli process-inbox)
    - Βελτιστοποίηση εικόνων σε WebP
    - Επικύρωση ιστότοπου (SiteValidator)
    """
    clear_screen()
    print_header("ΚΑΤΑΣΚΕΥΗ ΤΡΑΠΕΖΑΣ ΘΕΜΑΤΩΝ (ΑΣΚΗΣΕΙΣ)")
    
    inbox_dir = BASE_DIR / "data" / "inbox"
    inbox_dir.mkdir(parents=True, exist_ok=True)

    # Βήμα 1: Κατέβασμα
    if step_download:
        print("📌 ΒΗΜΑ 1: Κατέβασμα Θεμάτων από Τράπεζα (trapeza7.py)")
        print("   Τα αρχεία PDF θα αποθηκευτούν στον φάκελο data/inbox/\n")
        code = run_py_command(["trapeza7.py"])
        if code != 0:
            print(f"\n⚠️ Η λήψη τερματίστηκε ή παρουσίασε κωδικό εξόδου: {code}")
            if not step_process:
                input("\nΠατήστε Enter για επιστροφή στο μενού...")
                return

    # Βήμα 2: Επεξεργασία Inbox με Gemini API
    if step_process:
        print("\n" + "-" * 72)
        print("📌 ΒΗΜΑ 2: Επεξεργασία Αρχείων Inbox με Gemini API (process-inbox)")
        print("   Ανάγνωση θεμάτων, λύσεις, διαγράμματα & παραγωγή JS αρχείων\n")
        
        # Έλεγχος αν υπάρχουν αρχεία στο inbox
        inbox_files = [f for f in inbox_dir.glob("*.*") if f.is_file() and f.suffix.lower() in [".pdf", ".md", ".txt"]]
        if not inbox_files:
            print("ℹ️ Δεν βρέθηκαν εκκρεμή αρχεία (.pdf, .md) στο data/inbox/.")
            proceed = input("Θέλετε να εκτελεστεί παρ' όλα αυτά η διαδικασία process-inbox; (ν/ο): ").strip().lower()
            if proceed not in ("ν", "y", "yes", "ναι"):
                input("\nΠατήστε Enter για επιστροφή στο μενού...")
                return

        code = run_py_command(["-m", "src.cli", "process-inbox"])
        if code != 0:
            print(f"\n⚠️ Η επεξεργασία παρουσίασε σφάλμα (code: {code}).")

    # Βήμα 3: Βελτιστοποίηση WebP
    if step_webp:
        print("\n" + "-" * 72)
        print("📌 ΒΗΜΑ 3: Αυτόματη Μετατροπή & Βελτιστοποίηση Εικόνων σε WebP")
        run_py_command(["optimize_images_to_webp.py"])

    # Βήμα 4: Έλεγχος Ορθότητας
    print("\n" + "-" * 72)
    print("📌 ΒΗΜΑ 4: Έλεγχος Ορθότητας & Εγκυρότητας Αρχείων (Site Validator)")
    run_py_command(["-m", "src.validators.site_validator"])

    # Βήμα 5: Ενημέρωση Bundles
    print("\n" + "-" * 72)
    print("📌 ΒΗΜΑ 5: Αναδόμηση Bundles Μαθημάτων & On-Demand Catalog")
    run_py_command(["build_bundles.py"])

    print("\n" + "=" * 72)
    print("✨ Η ροή Τράπεζας Θεμάτων ολοκληρώθηκε!")
    print("=" * 72)
    input("\nΠατήστε Enter για επιστροφή στο μενού...")


def menu_trapeza():
    """Υπομενού επιλογών για την Τράπεζα Θεμάτων."""
    while True:
        clear_screen()
        print_header("ΚΑΤΑΣΚΕΥΗ ΤΡΑΠΕΖΑΣ ΘΕΜΑΤΩΝ - ΕΠΙΛΟΓΕΣ")
        print("  [1] Πλήρης Διαδικασία: Κατέβασμα + Επεξεργασία API + WebP + Έλεγχος")
        print("  [2] Μόνο Κατέβασμα Θεμάτων από Τράπεζα (trapeza7.py -> data/inbox)")
        print("  [3] Μόνο Επεξεργασία Εκκρεμών Αρχείων Inbox με Gemini API (process-inbox)")
        print()
        print("  [0] Επιστροφή στο κεντρικό μενού")
        print("=" * 72)
        
        choice = input("👉 Επιλογή [0-3]: ").strip()
        if choice == "1":
            op_trapeza_pipeline(step_download=True, step_process=True, step_webp=True)
            break
        elif choice == "2":
            op_trapeza_pipeline(step_download=True, step_process=False, step_webp=False)
            break
        elif choice == "3":
            op_trapeza_pipeline(step_download=False, step_process=True, step_webp=True)
            break
        elif choice in ("0", "q", "exit"):
            break


# ==============================================================================
# 2. ΔΙΑΔΡΑΣΤΙΚΗ ΘΕΩΡΙΑ (ΒΙΒΛΙΑ, ΣΧΗΜΑΤΑ, ΣΗΜΕΙΩΣΕΙΣ)
# ==============================================================================

def op_theory_pipeline():
    """
    Διαδραστική ροή δημιουργίας θεωρίας:
    - Λήψη σχολικού βιβλίου αν δεν υπάρχει (edubooks.py)
    - Παραγωγή θεωρίας (theory.py) με εξαγωγή σχημάτων και ελληνική τριγωνομετρία
    - Βελτιστοποίηση εικόνων σε WebP
    - Έλεγχος εγκυρότητας
    """
    clear_screen()
    print_header("ΔΙΑΔΡΑΣΤΙΚΗ ΘΕΩΡΙΑ - ΣΥΓΓΡΑΦΗ ΜΕ AI AGENT")
    print("Η διαδικασία χρησιμοποιεί τα επίσημα βιβλία PDF, εξάγει αυτούσια διαγράμματα,")
    print("εφαρμόζει ελληνική τριγωνομετρία (ημ, συν, εφ) και εμπλουτίζει το 4gnosin.\n")

    run_py_command(["theory.py"])
    
    # Βελτιστοποίηση νέων εικόνων θεωρίας σε WebP
    print("\n" + "-" * 72)
    print("📌 Βελτιστοποίηση εικόνων θεωρίας σε WebP...")
    run_py_command(["optimize_images_to_webp.py"])

    # Έλεγχος ιστότοπου
    print("\n" + "-" * 72)
    print("📌 Έλεγχος συνδέσμων & αρχείων θεωρίας (Site Validator)...")
    run_py_command(["-m", "src.validators.site_validator"])

    # Ενημέρωση bundles
    print("\n" + "-" * 72)
    print("📌 Αναδόμηση Bundles Μαθημάτων & On-Demand Catalog...")
    run_py_command(["build_bundles.py"])

    print("\n✨ Η διαδικασία θεωρίας ολοκληρώθηκε!")
    input("\nΠατήστε Enter για επιστροφή στο μενού...")


def menu_theory():
    """Υπομενού επιλογών για τη Θεωρία."""
    while True:
        clear_screen()
        print_header("ΔΙΑΔΡΑΣΤΙΚΗ ΘΕΩΡΙΑ & ΒΙΒΛΙΑ - ΕΠΙΛΟΓΕΣ")
        print("  [1] Παραγωγή Θεωρίας Κεφαλαίου με AI Agent (theory.py)")
        print("  [2] Λήψη Σχολικών Βιβλίων από ebooks.edu.gr (edubooks.py)")
        print("  [3] Εξαγωγή & Βελτιστοποίηση Σχημάτων από Βιβλίο PDF σε WebP (ArtCraft)")
        print()
        print("  [0] Επιστροφή στο κεντρικό μενού")
        print("=" * 72)

        choice = input("👉 Επιλογή [0-3]: ").strip()
        if choice == "1":
            op_theory_pipeline()
            break
        elif choice == "2":
            clear_screen()
            print_header("ΛΗΨΗ ΣΧΟΛΙΚΩΝ ΒΙΒΛΙΩΝ (ebooks.edu.gr)")
            run_py_command(["edubooks.py"])
            input("\nΠατήστε Enter για συνέχεια...")
            break
        elif choice == "3":
            clear_screen()
            print_header("ΕΞΑΓΩΓΗ ΣΧΗΜΑΤΩΝ ΑΠΟ PDF (ArtCraft Extractor)")
            pdf_path = input("Δώστε τη διαδρομή του PDF (ή σύρετε το αρχείο εδώ): ").strip().strip('"').strip("'")
            if not pdf_path or not os.path.exists(pdf_path):
                print(f"❌ Το αρχείο '{pdf_path}' δεν βρέθηκε!")
            else:
                run_py_command(["extract_pdf_images_craft.py", pdf_path, "--format", "webp", "-v"])
            input("\nΠατήστε Enter για συνέχεια...")
            break
        elif choice in ("0", "q", "exit"):
            break


# ==============================================================================
# 3. ΠΡΟΣΟΜΟΙΩΣΕΙΣ & ANIMATIONS (MANIM-STYLE)
# ==============================================================================

def _prompt_animation_mode(default_choice: str = "1") -> str:
    """Ζητά από τον χρήστη επιλογή μεθόδου παραγωγής animation."""
    mode_map = {"1": "hybrid", "2": "local", "3": "ai-pedagogy", "4": "ai"}
    print("\nΕΠΙΛΟΓΗ ΜΕΘΟΔΟΥ:")
    print(" [1] Hybrid (Προτεινόμενο: Script-First + AI για αναλυτική επίλυση όπου χρειάζεται)")
    print(" [2] Local (100% Python Script, 0 AI tokens)")
    print(" [3] AI-Pedagogy (Script + Παιδαγωγικός Επιθεωρητής Gemini)")
    print(" [4] AI Analytical (Gemini API — Πλήρης 4-βηματική αναλυτική λύση & πράξεις)")
    m_sel = input(f"👉 Μέθοδος [1-4] (προεπιλογή {default_choice}): ").strip() or default_choice
    return mode_map.get(m_sel, mode_map.get(default_choice, "hybrid"))


def menu_animations():
    """Υπομενού επιλογών για Προσομοιώσεις & Animations."""
    while True:
        clear_screen()
        print_header("ΠΡΟΣΟΜΟΙΩΣΕΙΣ & ANIMATIONS (MANIM WEB ANIMATOR)")
        print("  [1] Σάρωση όλων των υπολογιστικών ασκήσεων (Scan Report)")
        print("  [2] Παραγωγή Animation για συγκεκριμένο κωδικό θέματος (π.χ. 25806)")
        print("  [3] Παραγωγή Animations ανά Μάθημα και Κεφάλαιο")
        print("  [4] Άνοιγμα Πλήρους Διαδραστικού Μενού Animator")
        print()
        print("  [0] Επιστροφή στο κεντρικό μενού")
        print("=" * 72)

        choice = input("👉 Επιλογή [0-4]: ").strip()
        if choice == "1":
            clear_screen()
            print_header("ΣΑΡΩΣΗ ΥΠΟΛΟΓΙΣΤΙΚΩΝ ΑΣΚΗΣΕΩΝ & ANIMATIONS")
            run_py_command(["-m", "src.tools.calc_animator", "--scan"])
            input("\nΠατήστε Enter για συνέχεια...")
        elif choice == "2":
            clear_screen()
            print_header("ΠΑΡΑΓΩΓΗ ANIMATION ΓΙΑ ΣΥΓΚΕΚΡΙΜΕΝΟ ΘΕΜΑ")
            t_id = input("Δώστε τον κωδικό του θέματος (π.χ. 25806): ").strip().replace("#", "")
            if t_id:
                mode_arg = _prompt_animation_mode(default_choice="4")
                ow_sel = input("👉 Επανεγγραφή αν υπάρχει ήδη; [1=Ναι, 2=Όχι] (προεπιλογή 1): ").strip()
                cmd = ["-m", "src.tools.calc_animator", "--target", t_id, "--mode", mode_arg]
                if ow_sel != "2":
                    cmd.append("--overwrite")
                run_py_command(cmd)
            input("\nΠατήστε Enter για συνέχεια...")
        elif choice == "3":
            clear_screen()
            print_header("ΠΑΡΑΓΩΓΗ ANIMATIONS ΑΝΑ ΜΑΘΗΜΑ & ΚΕΦΑΛΑΙΟ")
            print("⏳ Σάρωση διαθέσιμων μαθημάτων με υπολογιστικές ασκήσεις...\n")
            from src.tools.calc_animator import scan_computational_exercises, SUBJECT_TITLES
            stats = scan_computational_exercises()

            active_subjects = [
                (k, v) for k, v in sorted(stats["subjects"].items()) if v.get("total_calc", 0) > 0
            ]

            if not active_subjects:
                print("⚠️ Δεν βρέθηκαν μαθήματα με υπολογιστικές ασκήσεις.")
                input("\nΠατήστε Enter για επιστροφή...")
                continue

            print("Διαθέσιμα Μαθήματα με Υπολογιστικά Θέματα:")
            print("-" * 72)
            for idx, (s_key, s_info) in enumerate(active_subjects, 1):
                title = SUBJECT_TITLES.get(s_key, s_key)
                calc_cnt = s_info["total_calc"]
                anim_cnt = s_info.get("animated_calc", 0)
                print(f" [{idx:02d}] {title}")
                print(f"      (Key: {s_key} | Θέματα Calc: {calc_cnt} | Έτοιμα Animations: {anim_cnt}/{calc_cnt})")
            print(" [ 0] Επιστροφή")
            print("-" * 72)

            sel_str = input("\n👉 Επιλέξτε μάθημα [1-%d] (ή 0): " % len(active_subjects)).strip()
            if not sel_str or sel_str == "0":
                continue

            try:
                sel_num = int(sel_str)
                if not (1 <= sel_num <= len(active_subjects)):
                    print("❌ Μη έγκυρη επιλογή.")
                    input("\nΠατήστε Enter για συνέχεια...")
                    continue
                chosen_key, chosen_info = active_subjects[sel_num - 1]
            except ValueError:
                print("❌ Παρακαλώ εισάγετε αριθμό επιλογής.")
                input("\nΠατήστε Enter για συνέχεια...")
                continue

            clear_screen()
            s_title = SUBJECT_TITLES.get(chosen_key, chosen_key)
            print_header(f"ΕΠΙΛΟΓΗ ΚΕΦΑΛΑΙΟΥ - {s_title}")

            active_chapters = [
                (c_num, c_data) for c_num, c_data in sorted(chosen_info["chapters"].items())
                if c_data.get("calc_items_count", 0) > 0
            ]

            if not active_chapters:
                print("⚠️ Δεν βρέθηκαν κεφάλαια με υπολογιστικά θέματα για αυτό το μάθημα.")
                input("\nΠατήστε Enter για συνέχεια...")
                continue

            print("Διαθέσιμα Κεφάλαια:")
            print("-" * 72)
            for c_num, c_data in active_chapters:
                c_calc = c_data["calc_items_count"]
                c_anim = c_data.get("animated_count", 0)
                print(f" [Κεφάλαιο {c_num:02d}] {c_calc} υπολογιστικά θέματα (Animations: {c_anim}/{c_calc})")
            print("-" * 72)
            print(" [ A] Όλα τα παραπάνω κεφάλαια")
            print(" [ 0] Ακύρωση / Επιστροφή")
            print("-" * 72)

            ch_choice = input("\n👉 Επιλέξτε αριθμό κεφαλαίου (π.χ. 5) ή 'A' για όλα: ").strip().upper()
            if not ch_choice or ch_choice == "0":
                continue

            mode_arg = _prompt_animation_mode(default_choice="1")
            ow_sel = input("👉 Επανεγγραφή υπαρχόντων; [1=Όχι (μόνο νέα), 2=Ναι (όλα)] (προεπιλογή 1): ").strip()
            ow_flag = ["--overwrite"] if ow_sel == "2" else []

            if ch_choice == "A":
                run_py_command(["-m", "src.tools.calc_animator", "--subject", chosen_key, "--mode", mode_arg, *ow_flag])
            else:
                try:
                    c_val = int(ch_choice)
                    run_py_command(["-m", "src.tools.calc_animator", "--subject", chosen_key, "--chapter", str(c_val), "--mode", mode_arg, *ow_flag])
                except ValueError:
                    print("❌ Μη έγκυρη επιλογή.")
            input("\nΠατήστε Enter για συνέχεια...")
        elif choice == "4":
            clear_screen()
            run_py_command(["-m", "src.tools.calc_animator"])
            input("\nΠατήστε Enter για συνέχεια...")
        elif choice in ("0", "q", "exit"):
            break


# ==============================================================================
# 4. ΣΥΝΔΥΑΣΜΟΙ & ALL-IN-ONE PIPELINES
# ==============================================================================

def op_combined_pipeline(run_theory: bool, run_trapeza: bool, run_anims: bool):
    """Εκτέλεση συνδυαστικού pipeline σύμφωνα με τις επιλογές του χρήστη."""
    clear_screen()
    print_header("ΣΥΝΔΥΑΣΤΙΚΗ ΕΚΤΕΛΕΣΗ PIPELINE")
    print(f"  • Διαδραστική Θεωρία: {'ΝΑΙ' if run_theory else 'ΟΧΙ'}")
    print(f"  • Τράπεζα Θεμάτων (Κατέβασμα & API Process): {'ΝΑΙ' if run_trapeza else 'ΟΧΙ'}")
    print(f"  • Προσομοιώσεις & Animations: {'ΝΑΙ' if run_anims else 'ΟΧΙ'}")
    print("=" * 72)
    print()

    confirm = input("Θέλετε να ξεκινήσει η εκτέλεση; (ν/ο): ").strip().lower()
    if confirm not in ("ν", "y", "yes", "ναι"):
        return

    # 1. Θεωρία
    if run_theory:
        print("\n" + "=" * 72)
        print("🚀 [1/3] ΕΝΑΡΞΗ: ΔΙΑΔΡΑΣΤΙΚΗ ΘΕΩΡΙΑ")
        print("=" * 72)
        run_py_command(["theory.py"])

    # 2. Τράπεζα Θεμάτων
    if run_trapeza:
        print("\n" + "=" * 72)
        print("🚀 [2/3] ΕΝΑΡΞΗ: ΚΑΤΑΣΚΕΥΗ ΤΡΑΠΕΖΑΣ ΘΕΜΑΤΩΝ")
        print("=" * 72)
        print("-> Βήμα Α: Λήψη θεμάτων από Τράπεζα...")
        run_py_command(["trapeza7.py"])
        print("\n-> Βήμα Β: Επεξεργασία θεμάτων με Gemini API...")
        run_py_command(["-m", "src.cli", "process-inbox"])

    # 3. Animations
    if run_anims:
        print("\n" + "=" * 72)
        print("🚀 [3/3] ΕΝΑΡΞΗ: ΠΡΟΣΟΜΟΙΩΣΕΙΣ & ANIMATIONS")
        print("=" * 72)
        run_py_command(["-m", "src.tools.calc_animator", "--scan"])
        run_py_command(["-m", "src.tools.calc_animator"])

    # Τελικά Βήματα: WebP και Έλεγχος Υγείας
    print("\n" + "=" * 72)
    print("🧹 ΤΕΛΙΚΗ ΒΕΛΤΙΣΤΟΠΟΙΗΣΗ & ΕΛΕΓΧΟΣ ΥΓΕΙΑΣ")
    print("=" * 72)
    print("-> Μετατροπή εικόνων σε WebP...")
    run_py_command(["optimize_images_to_webp.py"])
    print("\n-> Έλεγχος Ορθότητας & Εγκυρότητας Ιστότοπου...")
    run_py_command(["-m", "src.validators.site_validator"])
    print("\n-> Αναδόμηση Bundles Μαθημάτων & On-Demand Catalog...")
    run_py_command(["build_bundles.py"])

    print("\n" + "=" * 72)
    print("🎉 ΟΛΟΚΛΗΡΩΘΗΚΕ ΕΠΙΤΥΧΩΣ ΤΟ ΣΥΝΔΥΑΣΤΙΚΟ PIPELINE!")
    print("=" * 72)
    
    view_site = input("\nΘέλετε να ανοίξετε τον τοπικό server και την πλατφόρμα στον browser; (ν/ο): ").strip().lower()
    if view_site in ("ν", "y", "yes", "ναι"):
        op_start_server(open_browser_flag=True)
    else:
        input("\nΠατήστε Enter για επιστροφή στο μενού...")


def menu_combinations():
    """Υπομενού συνδυασμών."""
    while True:
        clear_screen()
        print_header("ΣΥΝΔΥΑΣΜΟΙ & ALL-IN-ONE PIPELINES")
        print("  [1] 🌟 ΚΑΙ ΤΑ ΤΡΙΑ (Θεωρία + Τράπεζα Θεμάτων + Animations)")
        print("  [2] 📚 + 📝 Θεωρία & Τράπεζα Θεμάτων")
        print("  [3] 📝 + 🎬 Τράπεζα Θεμάτων & Animations")
        print("  [4] 📚 + 🎬 Θεωρία & Animations")
        print("  [5] ⚙️ Προσαρμοσμένος Συνδυασμός (Επιλέξτε εσείς)")
        print()
        print("  [0] Επιστροφή στο κεντρικό μενού")
        print("=" * 72)

        choice = input("👉 Επιλογή [0-5]: ").strip()
        if choice == "1":
            op_combined_pipeline(run_theory=True, run_trapeza=True, run_anims=True)
            break
        elif choice == "2":
            op_combined_pipeline(run_theory=True, run_trapeza=True, run_anims=False)
            break
        elif choice == "3":
            op_combined_pipeline(run_theory=False, run_trapeza=True, run_anims=True)
            break
        elif choice == "4":
            op_combined_pipeline(run_theory=True, run_trapeza=False, run_anims=True)
            break
        elif choice == "5":
            clear_screen()
            print_header("ΠΡΟΣΑΡΜΟΣΜΕΝΟΣ ΣΥΝΔΥΑΣΜΟΣ")
            c_th = input("Να συμπεριληφθεί η Θεωρία; (ν/ο): ").strip().lower() in ("ν", "y", "yes", "ναι")
            c_tr = input("Να συμπεριληφθεί η Τράπεζα Θεμάτων; (ν/ο): ").strip().lower() in ("ν", "y", "yes", "ναι")
            c_an = input("Να συμπεριληφθούν τα Animations; (ν/ο): ").strip().lower() in ("ν", "y", "yes", "ναι")
            if c_th or c_tr or c_an:
                op_combined_pipeline(run_theory=c_th, run_trapeza=c_tr, run_anims=c_an)
            else:
                print("Δεν επιλέχθηκε καμία ενέργεια.")
                input("Πατήστε Enter...")
            break
        elif choice in ("0", "q", "exit"):
            break


# ==============================================================================
# 5. ΒΟΗΘΗΤΙΚΑ ΕΡΓΑΛΕΙΑ, SERVER & AGENT MEMORY
# ==============================================================================

def op_start_server(open_browser_flag: bool = True):
    """Εκκίνηση τοπικού web server (port 8000) και άνοιγμα περιηγητή."""
    clear_screen()
    print_header("ΤΟΠΙΚΟΣ WEB SERVER (localhost:8000)")
    
    if is_port_in_use(8000):
        print("✅ Ο διακομιστής (server) εκτελείται ήδη στη θύρα 8000!")
    else:
        print("⏳ Εκκίνηση multithreaded server (site_server.py)...")
        server_py = str(SCRIPTS_DIR / "site_server.py" if (SCRIPTS_DIR / "site_server.py").exists() else BASE_DIR / "site_server.py")
        if os.name == "nt":
            subprocess.Popen([sys.executable, server_py], creationflags=subprocess.CREATE_NEW_CONSOLE)
        else:
            subprocess.Popen([sys.executable, server_py])
        print("✅ Ο server ξεκίνησε επιτυχώς.")

    url = "http://localhost:8000/index.html"
    if open_browser_flag:
        print(f"🌐 Άνοιγμα της πλατφόρμας στον περιηγητή: {url}")
        webbrowser.open(url)
    print()
    input("Πατήστε Enter για επιστροφή στο μενού...")


def op_view_agent_memory():
    """Προβολή και σύνοψη της ενεργής Μνήμης του Agent."""
    clear_screen()
    print_header("ΜΝΗΜΗ & ΠΡΟΤΥΠΑ AI AGENT (Agent Memory System)")
    
    mem_file = BASE_DIR / "data" / "agent_memory" / "rules_and_standards.json"
    if not mem_file.exists():
        print("⚠️ Το αρχείο μνήμης δεν βρέθηκε στο data/agent_memory/rules_and_standards.json")
        input("\nΠατήστε Enter για συνέχεια...")
        return

    try:
        data = json.loads(mem_file.read_text(encoding="utf-8"))
        print(f"📌 Σύστημα Μνήμης: {data.get('system_name')}")
        print(f"📅 Έκδοση / Τελευταία Ενημέρωση: {data.get('version')} ({data.get('last_updated')})\n")
        
        rules = data.get("rules", {})
        for cat_key, cat_data in rules.items():
            print(f"🔹 {cat_data.get('title', cat_key).upper()}:")
            for item in cat_data.get("standards", []):
                print(f"   • {item}")
            print()
    except Exception as e:
        print(f"Σφάλμα ανάγνωσης μνήμης: {e}")

    print("=" * 72)
    print("💡 Η μνήμη φορτώνεται αυτόματα σε όλα τα prompts (Θεωρία, Ασκήσεις, Animations).")
    input("\nΠατήστε Enter για επιστροφή στο μενού...")


def menu_tools():
    """Υπομενού εργαλείων και διαχείρισης."""
    while True:
        clear_screen()
        print_header("ΒΟΗΘΗΤΙΚΑ ΕΡΓΑΛΕΙΑ & ΔΙΑΧΕΙΡΙΣΗ")
        print("  [1] Εκκίνηση Τοπικού Server (localhost:8000) & Άνοιγμα Πλατφόρμας")
        print("  [2] Βελτιστοποίηση όλων των εικόνων σε WebP (optimize_images_to_webp.py)")
        print("  [3] Πλήρης Έλεγχος Υγείας & Ορθότητας Αρχείων (Site Validator)")
        print("  [4] Αναδόμηση Bundles Μαθημάτων & On-Demand Catalog (build_bundles.py)")
        print("  [5] Προβολή Ενεργής Μνήμης & Προτύπων AI Agent (Agent Memory)")
        print("  [6] Καθαρισμός & Επιδιόρθωση LaTeX / KaTeX (latex_sanitizer)")
        print()
        print("  [0] Επιστροφή στο κεντρικό μενού")
        print("=" * 72)

        choice = input("👉 Επιλογή [0-6]: ").strip()
        if choice == "1":
            op_start_server(open_browser_flag=True)
            break
        elif choice == "2":
            clear_screen()
            print_header("ΒΕΛΤΙΣΤΟΠΟΙΗΣΗ ΕΙΚΟΝΩΝ ΣΕ WEBP")
            run_py_command(["optimize_images_to_webp.py"])
            input("\nΠατήστε Enter για συνέχεια...")
            break
        elif choice == "3":
            clear_screen()
            print_header("ΕΛΕΓΧΟΣ ΥΓΕΙΑΣ & ΟΡΘΟΤΗΤΑΣ ΑΡΧΕΙΩΝ")
            run_py_command(["-m", "src.validators.site_validator"])
            input("\nΠατήστε Enter για συνέχεια...")
            break
        elif choice == "4":
            clear_screen()
            print_header("ΑΝΑΔΟΜΗΣΗ BUNDLES & ON-DEMAND CATALOG")
            run_py_command(["build_bundles.py"])
            input("\nΠατήστε Enter για συνέχεια...")
            break
        elif choice == "5":
            op_view_agent_memory()
            break
        elif choice == "6":
            clear_screen()
            run_py_command(["-m", "src.utils.latex_sanitizer"])
            input("\nΠατήστε Enter για συνέχεια...")
            break
        elif choice in ("0", "q", "exit"):
            break


# ==============================================================================
# ΚΕΝΤΡΙΚΟ ΜΕΝΟΥ
# ==============================================================================

def print_main_banner():
    """Εμφάνιση κεντρικού μενού επιλογών."""
    print("=" * 72)
    print("                     4GNOSIN.GITHUB.IO")
    print("         Ενιαίο Κέντρο Ελέγχου, Αυτοματισμών & AI Agent")
    print("=" * 72)
    print()
    print("  [1] 📝 ΚΑΤΑΣΚΕΥΗ ΤΡΑΠΕΖΑΣ ΘΕΜΑΤΩΝ")
    print("         (Κατέβασμα θεμάτων & επεξεργασία με Gemini API)")
    print()
    print("  [2] 📚 ΔΙΑΔΡΑΣΤΙΚΗ ΘΕΩΡΙΑ")
    print("         (Σχολικά βιβλία, αυτούσια σχήματα & σημειώσεις θεωρίας)")
    print()
    print("  [3] 🎬 ΠΡΟΣΟΜΟΙΩΣΕΙΣ & ANIMATIONS")
    print("         (Manim-style διαδραστικά animations υπολογιστικών θεμάτων)")
    print()
    print("  [4] 🌟 ΣΥΝΔΥΑΣΜΟΙ & ALL-IN-ONE PIPELINE")
    print("         (Επιλογή: Και τα 3, Θεωρία + Τράπεζα, Τράπεζα + Animations)")
    print()
    print("  [5] 🛠️ ΒΟΗΘΗΤΙΚΑ ΕΡΓΑΛΕΙΑ & ΕΛΕΓΧΟΙ")
    print("         (Server localhost:8000, WebP, Validator, Agent Memory)")
    print()
    print("  [0] 🚪 Έξοδος")
    print("=" * 72)


def main():
    while True:
        clear_screen()
        print_main_banner()
        choice = input("👉 Επιλέξτε ενότητα [0-5]: ").strip()
        
        if choice == "1":
            menu_trapeza()
        elif choice == "2":
            menu_theory()
        elif choice == "3":
            menu_animations()
        elif choice == "4":
            menu_combinations()
        elif choice == "5":
            menu_tools()
        elif choice in ("0", "q", "exit", "quit"):
            clear_screen()
            print("=" * 72)
            print("  Έξοδος από το 4gnosin Control Center. Καλή συνέχεια στο έργο σας!")
            print("=" * 72)
            break
        else:
            print("\n⚠️ Μη έγκυρη επιλογή. Πατήστε Enter...")
            input()


if __name__ == "__main__":
    main()
