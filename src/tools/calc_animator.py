import sys
if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
import os
import re
import json
import argparse
from pathlib import Path
from typing import Any
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent.parent.parent / ".env")

try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None
    types = None

from src.validators.site_validator import SiteValidator

SUBJECT_TITLES = {
    "b/thermod": "Β' Τάξη | Στοιχεία Τεχνικής Θερμοδυναμικής – Εφαρμογές",
    "b/antoxi": "Β' Τάξη | Μηχανική - Αντοχή Υλικών",
    "b/texnologia-michanologikon-kataskevon": "Β' Τάξη | Τεχνολογία Μηχανολογικών Κατασκευών",
    "c/stoixeia-michanon": "Γ' Τάξη | Στοιχεία Μηχανών",
    "c/stoixeia-kentrikon-thermanseon": "Γ' Τάξη | Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων",
    "c/stoixeia-psyxis-klimatismou": "Γ' Τάξη | Στοιχεία Ψύξης - Κλιματισμού",
    "c/egkatastaseis-klimatismou": "Γ' Τάξη | Εγκαταστάσεις Κλιματισμού",
    "c/michanes-esoterikis-kafsis-2": "Γ' Τάξη | Μηχανές Εσωτερικής Καύσης ΙΙ",
    "c/michanourgiki-texnologia": "Γ' Τάξη | Μηχανουργική Τεχνολογία",
    "c/systimata-aftokinitou": "Γ' Τάξη | Συστήματα Αυτοκινήτου",
    "c/systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou": "Γ' Τάξη | Συστήματα Ελέγχου Ρύθμισης Αυτοματισμού Ψύξης - Κλιματισμού",
    "c/texnologia-elegxou-diagnoseon": "Γ' Τάξη | Τεχνολογία Ελέγχου και Διαγνώσεων",
}

SUBJECT_ALIASES = {
    "thermo": "b/thermod",
    "thermod": "b/thermod",
    "thermodynamiki": "b/thermod",
    "b_thermo": "b/thermod",
    "b_thermod": "b/thermod",
    "b/thermo": "b/thermod",
    "antoxi": "b/antoxi",
    "kataskevon": "b/texnologia-michanologikon-kataskevon",
    "texnologia": "b/texnologia-michanologikon-kataskevon",
    "texnologia-kataskevon": "b/texnologia-michanologikon-kataskevon",
    "michanon": "c/stoixeia-michanon",
    "thermansi": "c/stoixeia-kentrikon-thermanseon",
    "thermansis": "c/stoixeia-kentrikon-thermanseon",
    "psyxi": "c/stoixeia-psyxis-klimatismou",
    "klimatismos": "c/egkatastaseis-klimatismou",
    "mek": "c/michanes-esoterikis-kafsis-2",
    "mek2": "c/michanes-esoterikis-kafsis-2",
}


def resolve_subject_key(raw_input: str, available_keys: list[str]) -> str | None:
    """
    Αντιστοιχίζει slug ή alias (π.χ. 'thermo', 'antoxi', 'b/thermo')
    στο πραγματικό κλειδί φακέλου ασκήσεων (π.χ. 'b/thermod').
    """
    if not raw_input:
        return None

    cleaned = raw_input.strip().lower()

    if cleaned in available_keys:
        return cleaned

    if cleaned in SUBJECT_ALIASES and SUBJECT_ALIASES[cleaned] in available_keys:
        return SUBJECT_ALIASES[cleaned]

    for prefix in ("b/", "c/"):
        candidate = prefix + cleaned
        if candidate in available_keys:
            return candidate

    for k in available_keys:
        pure_name = k.split("/")[-1]
        if cleaned == pure_name or cleaned in pure_name:
            return k

    return None



def scan_computational_exercises(base_dir: Path | None = None) -> dict[str, Any]:
    """
    Σαρώνει όλα τα αρχεία ασκήσεων και εντοπίζει ποια μαθήματα και ποια κεφάλαια
    περιέχουν υπολογιστικές ασκήσεις (kind == 'calc').
    """
    base_dir = base_dir or Path.cwd()
    exercises_dir = base_dir / "site" / "exercises"
    val = SiteValidator()

    stats: dict[str, Any] = {
        "total_files": 0,
        "total_exercises": 0,
        "total_calc_items": 0,
        "animated_calc_items": 0,
        "subjects": {},
    }

    if not exercises_dir.exists():
        return stats

    for js_path in sorted(exercises_dir.rglob("*.js")):
        if js_path.name == "groups.js":
            continue

        rel_parts = js_path.relative_to(exercises_dir).parts
        if len(rel_parts) < 3:
            continue

        grade = rel_parts[0]       # b ή c
        subject = rel_parts[1]     # thermod, antoxi, κλπ.
        chapter_dir = rel_parts[2] # chapter-03

        ch_match = re.search(r"chapter-(\d+)", chapter_dir)
        chapter_num = int(ch_match.group(1)) if ch_match else 0

        stats["total_files"] += 1

        try:
            content = js_path.read_text(encoding="utf-8")
            exercises = val.extract_json_from_js(content)
        except Exception:
            continue

        subj_key = f"{grade}/{subject}"
        if subj_key not in stats["subjects"]:
            stats["subjects"][subj_key] = {
                "grade": grade,
                "subject": subject,
                "chapters": {},
                "total_calc": 0,
                "animated_calc": 0,
            }

        ch_dict = stats["subjects"][subj_key]["chapters"].setdefault(
            chapter_num,
            {"files": [], "exercises_count": 0, "calc_items_count": 0, "animated_count": 0, "exercises": []}
        )
        ch_dict["files"].append(js_path)

        for ex in exercises:
            stats["total_exercises"] += 1
            ch_dict["exercises_count"] += 1
            has_calc = False
            for item in ex.get("items", []):
                if item.get("kind") == "calc":
                    has_calc = True
                    stats["total_calc_items"] += 1
                    ch_dict["calc_items_count"] += 1
                    stats["subjects"][subj_key]["total_calc"] += 1
                    if "animation" in item and item["animation"]:
                        stats["animated_calc_items"] += 1
                        ch_dict["animated_count"] += 1
                        stats["subjects"][subj_key]["animated_calc"] += 1
            if has_calc:
                ch_dict["exercises"].append({
                    "id": ex.get("id"),
                    "bankCode": ex.get("bankCode"),
                    "code": ex.get("code"),
                    "title": ex.get("title"),
                    "file_path": js_path,
                })

    return stats


def print_scan_report(stats: dict[str, Any]):
    """Εκτυπώνει μια σύνοψη των υπολογιστικών θεμάτων."""
    print("====================================================================")
    print("  4gnosin - Στατιστικά Υπολογιστικών Ασκήσεων (Calc Items)")
    print("====================================================================")
    print(f"Συνολικά αρχεία ασκήσεων: {stats['total_files']}")
    print(f"Συνολικές ασκήσεις:       {stats['total_exercises']}")
    print(f"Υπολογιστικά υποερωτήματα (calc items): {stats['total_calc_items']}")
    print(f"Ήδη διαθέτουν Animation:  {stats['animated_calc_items']} / {stats['total_calc_items']}")
    print("--------------------------------------------------------------------")
    for subj_key, s_data in sorted(stats["subjects"].items()):
        if s_data["total_calc"] == 0:
            continue
        pct = (s_data["animated_calc"] / s_data["total_calc"] * 100) if s_data["total_calc"] else 0
        print(f"\n📚 {subj_key} ({s_data['total_calc']} calc items, {pct:.0f}% animations)")
        for c_num, c_data in sorted(s_data["chapters"].items()):
            if c_data["calc_items_count"] == 0:
                continue
            print(f"   • Κεφάλαιο {c_num:02d}: {c_data['calc_items_count']} calc items [{c_data['animated_count']}/{c_data['calc_items_count']} animated]")
    print("====================================================================")


def parse_gemini_json(raw_text: str) -> Any:
    """
    Ασφαλής αποκωδικοποίηση JSON που επιστρέφει το Gemini API.
    Αφαιρεί markdown blocks, αφαιρεί περιττά κόμματα (trailing commas)
    και διορθώνει αυτόματα μη-έγκυρους χαρακτήρες διαφυγής LaTeX (π.χ. \\cdot, \\Delta, \\frac).
    """
    if not raw_text:
        return None
    cleaned = raw_text.strip()
    if cleaned.startswith("```"):
        cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
        cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        pass

    # 1. Αφαίρεση trailing commas
    fixed = re.sub(r",\s*([\]}])", r"\1", cleaned)
    try:
        return json.loads(fixed)
    except json.JSONDecodeError:
        pass

    # 2. Αυτόματη διαφυγή LaTeX backslashes (π.χ. \cdot, \Delta, \frac, \text κλπ.)
    # Διατηρούμε μόνο τα έγκυρα JSON escapes: ", \, /, b, f, n, r, t, uXXXX
    fixed_safe = re.sub(r'(?<!\\)\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})', r'\\\\', fixed)
    try:
        return json.loads(fixed_safe)
    except Exception:
        # 3. Ύστατη προσπάθεια: διπλασιασμός κάθε μονού backslash εκτός αν ακολουθείται από "
        last_resort = re.sub(r'(?<!\\)\\(?!")', r'\\\\', fixed)
        try:
            return json.loads(last_resort)
        except Exception:
            return None


def generate_animation_with_gemini(
    item: dict[str, Any],
    exercise_meta: dict[str, Any],
) -> dict[str, Any] | None:
    """
    Καλεί το Gemini για να συνθέσει ένα εκπαιδευτικό Manim-Style 4-step animation
    για ένα συγκεκριμένο υπολογιστικό υποερώτημα (calc item).
    """
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("   ⚠️ Δεν βρέθηκε GEMINI_API_KEY στο περιβάλλον.")
        return None

    if genai is None:
        print("   ⚠️ Το πακέτο google-genai δεν είναι εγκατεστημένο.")
        return None

    client = genai.Client(
        api_key=api_key,
        http_options=types.HttpOptions(client_args={"verify": False, "timeout": 60.0}) if types else None,
    )

    memory_rules = ""
    try:
        from ..utils.agent_memory import get_agent_memory
        memory_rules = get_agent_memory().get_prompt_injection("animation")
    except Exception:
        pass

    system_instruction = (
        "Είσαι ο εξειδικευμένος καθηγητής Μηχανολογίας και Animator του εκπαιδευτικού portal 4gnosin.github.io.\n"
        "Αποστολή σου είναι να δημιουργήσεις ένα εκπαιδευτικό, βήμα-βήμα σενάριο μαυροπίνακα (Manim-Style Animation)\n"
        "για την επίλυση ενός υπολογιστικού ερωτήματος της Τράπεζας Θεμάτων ΕΠΑ.Λ.\n\n"
        + memory_rules + "\n\n"
        "ΠΑΙΔΑΓΩΓΙΚΗ ΔΟΜΗ ΚΑΙ ΠΡΟΤΥΠΟ (GOLD STANDARD - όπως το πρότυπο #25806):\n"
        "1. Βήμα 1: Συλλογή Δεδομένων & Έλεγχος/Μετατροπή Μονάδων SI.\n"
        "   - Καταγράφονται όλα τα δεδομένα της εκφώνησης (από το stem και το ερώτημα) με τις μονάδες τους.\n"
        "   - Ελέγχεται αν απαιτείται μετατροπή μονάδων (π.χ. bar σε Pa/N/m², kp/daN σε N, cm σε mm, °C σε K) και γίνεται ΑΜΕΣΩΣ.\n"
        "2. Βήμα 2: Επιλογή Βασικού Τύπου & Αλγεβρική Επίλυση.\n"
        "   - Αναγράφεται ο θεμελιώδης φυσικός/μηχανολογικός τύπος.\n"
        "   - Εάν το ζητούμενο μέγεθος δεν είναι απομονωμένο, γίνεται αναλυτική αλγεβρική επίλυση ως προς αυτό ΠΡΙΝ μπουν οι αριθμοί.\n"
        "3. Βήμα 3: Αριθμητική Αντικατάσταση & Σταδιακές Απλοποιήσεις.\n"
        "   - Αντικαθίστανται οι αριθμοί στον επιλυμένο τύπο.\n"
        "   - Οι πράξεις γίνονται βήμα-βήμα, δείχνοντας τις απλοποιήσεις και όχι κατευθείαν το τελικό αποτέλεσμα.\n"
        "4. Βήμα 4: Τελικός Υπολογισμός & Μονάδα Μέτρησης.\n"
        "   - Υπολογίζεται το τελικό αποτέλεσμα και μετατρέπεται στην επιθυμητή μονάδα αν ζητείται.\n"
        "   - Το τελικό βήμα έχει 'highlight': true και υπενθυμίζει ότι η μονάδα μέτρησης είναι υποχρεωτική στις εξετάσεις.\n\n"
        "ΚΑΝΟΝΕΣ ΣΥΝΤΑΞΗΣ & ΜΑΘΗΜΑΤΙΚΩΝ:\n"
        "- Όλα τα μαθηματικά γράφονται σε καθαρό LaTeX/KaTeX ΧΩΡΙΣ εξωτερικά δολάρια.\n"
        "- ΠΟΤΕ γυμνό εκθέτη στην αρχή: γράφουμε {}^{\\circ}\\text{C} και όχι ^\\circ\\text{C}.\n"
        "- ΠΑΙΔΑΓΩΓΙΚΗ ΣΤΟΙΧΙΣΗ ΙΣΩΝ: Σε διαδοχικούς υπολογισμούς (Βήματα 2, 3, 4), το ίσον μπαίνει πάντα από κάτω στη νέα γραμμή με \\begin{aligned} A &= B \\\\ &= C \\end{aligned}.\n"
        "- ΑΠΑΓΟΡΕΥΕΤΑΙ ΡΗΤΑ κάθε αναφορά σε 'ΙΕΠ' ή παρωχημένες ονομασίες.\n"
        "- ΕΠΙΣΤΡΟΦΗ ΑΠΟΚΛΕΙΣΤΙΚΑ ΕΓΚΥΡΟ JSON (Χωρίς markdown fences):\n"
        "{\n"
        "  \"title\": \"Τίτλος επίλυσης\",\n"
        "  \"steps\": [\n"
        "    {\n"
        "      \"kicker\": \"Βήμα 1: Συλλογή Δεδομένων & Μετατροπές\",\n"
        "      \"text\": \"Επεξήγηση...\",\n"
        "      \"math\": \"P = 2\\text{ bar} = 2 \\cdot 10^5\\text{ Pa}, \\quad V = 0{,}5\\text{ m}^3\",\n"
        "      \"note\": \"Σημείωση για τις μονάδες\"\n"
        "    },\n"
        "    {\n"
        "      \"kicker\": \"Βήμα 2: Επιλογή Βασικού Τύπου & Επίλυση\",\n"
        "      \"text\": \"Επεξήγηση...\",\n"
        "      \"math\": \"P \\cdot V = m \\cdot R \\cdot T \\implies m = \\frac{P \\cdot V}{R \\cdot T}\",\n"
        "      \"note\": \"Επεξήγηση συμβόλων και μονάδων\"\n"
        "    },\n"
        "    {\n"
        "      \"kicker\": \"Βήμα 3: Αντικατάσταση & Απλοποιήσεις\",\n"
        "      \"text\": \"Επεξήγηση...\",\n"
        "      \"math\": \"\\begin{aligned} m &= \\frac{2 \\cdot 10^5 \\cdot 0{,}5}{287 \\cdot 300} \\\\ &= 1{,}16\\text{ kg} \\end{aligned}\",\n"
        "      \"note\": \"Σημείωση για πράξεις\"\n"
        "    },\n"
        "    {\n"
        "      \"kicker\": \"Βήμα 4: Τελικό Αποτέλεσμα & Μονάδα Μέτρησης\",\n"
        "      \"text\": \"Ολοκλήρωση...\",\n"
        "      \"math\": \"m = 1{,}16\\text{ kg}\",\n"
        "      \"highlight\": true,\n"
        "      \"note\": \"Η αναγραφή της μονάδας μέτρησης είναι υποχρεωτική στις εξετάσεις.\"\n"
        "    }\n"
        "  ]\n"
        "}\n"
    )

    prompt = (
        f"ΣΤΟΙΧΕΙΑ ΑΣΚΗΣΗΣ:\n"
        f"- Τίτλος: {exercise_meta.get('title')}\n"
        f"- Κωδικός: {exercise_meta.get('code')}\n"
        f"- Εκφώνηση Θέματος (stem): {exercise_meta.get('stem', '')}\n"
        f"- Ερώτημα: {item.get('subq', '')}\n"
        f"- Εισαγωγή Ερωτήματος: {item.get('subqPrompt', '')}\n"
        f"- Εκφώνηση Υποερωτήματος: {item.get('prompt', '')}\n"
        f"- Βασικός Τύπος (formula): {item.get('formula', '')}\n"
        f"- Σωστή Απάντηση: {item.get('answer', '')} {item.get('unit', '')}\n"
        f"- Υπόδειξη (hint): {item.get('hint', '')}\n"
        f"- Εξήγηση/Λύση (explain): {item.get('explain', '')}\n\n"
        f"Σύνθεσε το πλήρες 4-step Manim-Style Animation JSON ακολουθώντας πιστά το χρυσό πρότυπο.\n"
    )

    candidate_models = ["gemini-3.8-flash", "gemini-flash-latest", "gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-3.1-flash-lite"]
    raw_text = None
    last_err = None

    for model_name in candidate_models:
        try:
            resp = client.models.generate_content(
                model=model_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    temperature=0.1,
                ),
            )
            if resp and resp.text:
                raw_text = resp.text
                break
        except Exception as e:
            last_err = e

    if not raw_text:
        print(f"   ⚠️ Αποτυχία κλήσης AI: {last_err}")
        return None

    data = parse_gemini_json(raw_text)
    if isinstance(data, dict) and "steps" in data:
        return data
    elif isinstance(data, dict) and "animation" in data and isinstance(data["animation"], dict):
        return data["animation"]

    print("   ⚠️ Δεν ήταν δυνατή η εξαγωγή έγκυρου αντικειμένου animation από την απάντηση AI.")
    return None


def generate_animations_block(
    batch: list[tuple[dict[str, Any], dict[str, Any]]],
) -> list[dict[str, Any] | None]:
    """
    Παράγει animations για ένα block υπολογιστικών ερωτημάτων (μέγεθος 2-4)
    σε 1 συντονισμένη κλήση στο Gemini API, με αυτόματο fallback ανά ερώτημα
    εάν αποτύχει το block.
    """
    if not batch:
        return []
    if len(batch) == 1:
        return [generate_animation_with_gemini(batch[0][0], batch[0][1])]

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key or genai is None:
        return [generate_animation_with_gemini(item, meta) for item, meta in batch]

    client = genai.Client(
        api_key=api_key,
        http_options=types.HttpOptions(client_args={"verify": False, "timeout": 60.0}) if types else None,
    )

    memory_rules = ""
    try:
        from ..utils.agent_memory import get_agent_memory
        memory_rules = get_agent_memory().get_prompt_injection("animation")
    except Exception:
        pass

    system_instruction = (
        "Είσαι ο εξειδικευμένος καθηγητής Μηχανολογίας και Animator του εκπαιδευτικού portal 4gnosin.github.io.\n"
        "Αποστολή σου είναι να δημιουργήσεις εκπαιδευτικά Manim-Style 4-step animations για ένα BLOCK υπολογιστικών ερωτημάτων.\n\n"
        + memory_rules + "\n\n"
        "ΠΑΙΔΑΓΩΓΙΚΗ ΔΟΜΗ (GOLD STANDARD #25806):\n"
        "1. Βήμα 1: Συλλογή Δεδομένων & Μετατροπές Μονάδων SI.\n"
        "2. Βήμα 2: Επιλογή Βασικού Τύπου & Αλγεβρική Επίλυση.\n"
        "3. Βήμα 3: Αριθμητική Αντικατάσταση & Σταδιακές Απλοποιήσεις.\n"
        "4. Βήμα 4: Τελικό Αποτέλεσμα & Μονάδα Μέτρησης (highlight: true).\n\n"
        "ΚΑΝΟΝΕΣ:\n"
        "- Όλα τα μαθηματικά σε καθαρό LaTeX/KaTeX χωρίς εξωτερικά δολάρια.\n"
        "- Στοίχιση ίσων κατακόρυφα με \\begin{aligned} A &= B \\\\ &= C \\end{aligned}.\n"
        "- ΑΠΑΓΟΡΕΥΕΤΑΙ ΡΗΤΑ κάθε αναφορά σε 'ΙΕΠ'.\n"
        "- ΕΠΙΣΤΡΟΦΗ ΑΠΟΚΛΕΙΣΤΙΚΑ ΕΝΑ ΕΓΚΥΡΟ JSON ARRAY με 1 αντικείμενο για κάθε ερώτημα:\n"
        "[\n"
        "  {\n"
        '    "id": 1,\n'
        '    "animation": {\n'
        '      "title": "Τίτλος επίλυσης",\n'
        '      "steps": [ ... ]\n'
        "    }\n"
        "  }\n"
        "]\n"
    )

    items_prompt = []
    for i, (item, ex_meta) in enumerate(batch, 1):
        items_prompt.append(
            f"=== ΕΡΩΤΗΜΑ {i} (Θέμα #{ex_meta.get('code')}, Ερώτημα: {item.get('subq', '')}) ===\n"
            f"- Τίτλος: {ex_meta.get('title')}\n"
            f"- Εκφώνηση Θέματος: {ex_meta.get('stem', '')}\n"
            f"- Ερώτημα: {item.get('subq', '')}\n"
            f"- Εισαγωγή Ερωτήματος: {item.get('subqPrompt', '')}\n"
            f"- Εκφώνηση Υποερωτήματος: {item.get('prompt', '')}\n"
            f"- Βασικός Τύπος: {item.get('formula', '')}\n"
            f"- Σωστή Απάντηση: {item.get('answer', '')} {item.get('unit', '')}\n"
            f"- Υπόδειξη: {item.get('hint', '')}\n"
            f"- Εξήγηση/Λύση: {item.get('explain', '')}\n"
        )

    full_prompt = (
        f"Παρήγαγε το JSON Array των Manim Animations για τα παρακάτω {len(batch)} ερωτήματα:\n\n"
        + "\n".join(items_prompt)
    )

    candidate_models = ["gemini-3.8-flash", "gemini-flash-latest", "gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-3.1-flash-lite"]
    raw_text = None

    for model_name in candidate_models:
        try:
            resp = client.models.generate_content(
                model=model_name,
                contents=full_prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    temperature=0.1,
                ),
            )
            if resp and resp.text:
                raw_text = resp.text
                break
        except Exception:
            continue

    if raw_text:
        parsed = parse_gemini_json(raw_text)
        if isinstance(parsed, list) and len(parsed) == len(batch):
            results = []
            for entry in parsed:
                anim = entry.get("animation") if isinstance(entry, dict) else None
                if anim and isinstance(anim, dict) and "steps" in anim:
                    results.append(anim)
                elif isinstance(entry, dict) and "steps" in entry:
                    results.append(entry)
                else:
                    results.append(None)
            if all(r is not None for r in results):
                return results

    # Fallback ανά ερώτημα
    print("   ⚠️ Fallback σε μεμονωμένη παραγωγή για το τμήμα...", flush=True)
    return [generate_animation_with_gemini(item, meta) for item, meta in batch]


def animate_exercise_file(
    js_path: Path,
    target_bank_code: str | None = None,
    overwrite_existing: bool = False,
) -> tuple[int, list[str]]:
    """
    Επεξεργάζεται ένα αρχείο ασκήσεων, παράγει animations για τα calc items σε blocks,
    και αποθηκεύει το αρχείο επικυρώνοντάς το.
    """
    val = SiteValidator()
    content = js_path.read_text(encoding="utf-8")
    exercises = val.extract_json_from_js(content)
    if not exercises:
        return 0, [f"Δεν ήταν δυνατή η ανάγνωση ασκήσεων από το {js_path.name}"]

    header_style = "SUBJECT_DATA" if "SUBJECT_DATA" in content else "EXERCISES"
    subject_match = re.search(r'SUBJECT_DATA\["([^"]+)"\]', content)
    subject_key = subject_match.group(1) if subject_match else "thermo"

    updated_count = 0
    logs: list[str] = []

    # 1. Συλλογή εκκρεμών υπολογιστικών ερωτημάτων
    pending_items: list[tuple[dict[str, Any], dict[str, Any]]] = []
    for ex in exercises:
        bcode = str(ex.get("bankCode", "")).strip()
        if target_bank_code and bcode != target_bank_code:
            continue
        ex_meta = {
            "title": ex.get("title", ""),
            "code": ex.get("code", ""),
            "theory": ex.get("theory", ""),
            "stem": ex.get("stem", ""),
            "bankCode": bcode,
        }
        for item in ex.get("items", []):
            if item.get("kind") != "calc":
                continue
            if "animation" in item and item["animation"] and not overwrite_existing:
                continue
            pending_items.append((item, ex_meta))

    ANIM_CHUNK_SIZE = 3
    if pending_items:
        chunks = [pending_items[i : i + ANIM_CHUNK_SIZE] for i in range(0, len(pending_items), ANIM_CHUNK_SIZE)]
        total_chunks = len(chunks)
        print(f"\n🎬 Παραγωγή Manim Animations: {len(pending_items)} υπολογιστικά ερωτήματα σε {total_chunks} τμήματα (blocks)...")

        for idx, chunk in enumerate(chunks, 1):
            chunk_codes = ", ".join(f"#{m['bankCode']} ({it.get('subq', '')})" for it, m in chunk)
            print(f"   ⏳ Τμήμα {idx}/{total_chunks} ({chunk_codes})...")
            anim_results = generate_animations_block(chunk)
            for (item, m), anim_data in zip(chunk, anim_results, strict=False):
                if anim_data:
                    item["animation"] = anim_data
                    updated_count += 1
                    logs.append(f"Προστέθηκε animation στο θέμα #{m['bankCode']} ({item.get('subq', '')})")

    if updated_count > 0:
        if header_style == "SUBJECT_DATA":
            header = (
                "window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n"
                f'window.SUBJECT_DATA["{subject_key}"] = window.SUBJECT_DATA["{subject_key}"] || {{ sections: [], groups: [], exercises: [] }};\n'
                f'window.SUBJECT_DATA["{subject_key}"].exercises.push(...\n'
            )
        else:
            header = "window.EXERCISES = window.EXERCISES || [];\nwindow.EXERCISES.push(...\n"

        new_content = header + json.dumps(exercises, ensure_ascii=False, indent=2) + "\n);\n"
        js_path.write_text(new_content, encoding="utf-8")

        val_errs = val.validate_exercises_file(str(js_path))
        if val_errs:
            logs.append(f"⚠️ Προσοχή: Εμφανίστηκαν {len(val_errs)} σφάλματα επικύρωσης στο {js_path.name}")
        else:
            logs.append(f"✅ Επιτυχής επικύρωση (0 σφάλματα) για το {js_path.name}")

    return updated_count, logs


def interactive_menu():
    """Διαδραστικό μενού κονσόλας για επιλογή μαθήματος/κεφαλαίου/άσκησης."""
    print("=" * 68)
    print("  4gnosin.github.io - Computational Exercise Animator (Manim Web)")
    print("=" * 68)

    stats = scan_computational_exercises()
    print_scan_report(stats)

    print("\nΕΠΙΛΟΓΕΣ ΕΚΤΕΛΕΣΗΣ:")
    print(" [1] Παραγωγή Animation για ένα συγκεκριμένο Κεφάλαιο")
    print(" [2] Παραγωγή Animation για ΟΛΑ τα κεφάλαια ενός Μαθήματος")
    print(" [3] Παραγωγή Animation για μία μεμονωμένη Άσκηση (με κωδικό θέματος)")
    print(" [q] Έξοδος\n")

    choice = input("👉 Επιλογή: ").strip().lower()
    if choice in ("q", "quit", "exit"):
        print("Έξοδος.")
        return

    if choice == "3":
        target = input("Δώστε κωδικό θέματος (π.χ. 18707): ").strip().replace("#", "")
        if not target:
            print("Δεν δόθηκε κωδικός.")
            return

        found_file = None
        for s_data in stats["subjects"].values():
            for ch_data in s_data["chapters"].values():
                for ex_info in ch_data["exercises"]:
                    if str(ex_info["bankCode"]) == target:
                        found_file = ex_info["file_path"]
                        break
                if found_file:
                    break
            if found_file:
                break

        if not found_file:
            print(f"❌ Το θέμα #{target} δεν βρέθηκε στις υπολογιστικές ασκήσεις.")
            return

        print(f"\n⏳ Έναρξη παραγωγής animation για το θέμα #{target} στο {found_file.name}...")
        count, logs = animate_exercise_file(found_file, target_bank_code=target, overwrite_existing=True)
        for l in logs:
            print(f"  • {l}")
        print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν {count} animations.")

    elif choice == "1":
        subj_list = [k for k, v in stats["subjects"].items() if v["total_calc"] > 0]
        print("\nΔιαθέσιμα μαθήματα με υπολογιστικά θέματα:")
        for idx, k in enumerate(subj_list, 1):
            print(f" [{idx}] {k} ({stats['subjects'][k]['total_calc']} calc items)")

        try:
            s_idx = int(input("\nΕπιλέξτε αριθμό μαθήματος: ").strip()) - 1
            sel_key = subj_list[s_idx]
        except (ValueError, IndexError):
            print("Μη έγκυρη επιλογή.")
            return

        ch_list = [c for c, cd in stats["subjects"][sel_key]["chapters"].items() if cd["calc_items_count"] > 0]
        print(f"\nΔιαθέσιμα κεφάλαια για {sel_key}:")
        for idx, c in enumerate(ch_list, 1):
            cd = stats["subjects"][sel_key]["chapters"][c]
            print(f" [{idx}] Κεφάλαιο {c:02d} ({cd['calc_items_count']} calc items)")

        try:
            c_idx = int(input("\nΕπιλέξτε αριθμό κεφαλαίου: ").strip()) - 1
            sel_chapter = ch_list[c_idx]
        except (ValueError, IndexError):
            print("Μη έγκυρη επιλογή.")
            return

        ch_data = stats["subjects"][sel_key]["chapters"][sel_chapter]
        print(f"\n⏳ Έναρξη παραγωγής animations για {sel_key} - Κεφάλαιο {sel_chapter:02d}...")
        total_gen = 0
        for f in ch_data["files"]:
            c_count, logs = animate_exercise_file(f, overwrite_existing=False)
            total_gen += c_count
            for l in logs:
                print(f"  • {l}")
        print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations.")

    elif choice == "2":
        subj_list = [k for k, v in stats["subjects"].items() if v["total_calc"] > 0]
        print("\nΔιαθέσιμα μαθήματα:")
        for idx, k in enumerate(subj_list, 1):
            print(f" [{idx}] {k} ({stats['subjects'][k]['total_calc']} calc items)")

        try:
            s_idx = int(input("\nΕπιλέξτε αριθμό μαθήματος: ").strip()) - 1
            sel_key = subj_list[s_idx]
        except (ValueError, IndexError):
            print("Μη έγκυρη επιλογή.")
            return

        print(f"\n⏳ Έναρξη παραγωγής animations για ΟΛΑ τα κεφάλαια του {sel_key}...")
        total_gen = 0
        for c, cd in stats["subjects"][sel_key]["chapters"].items():
            for f in cd["files"]:
                c_count, logs = animate_exercise_file(f, overwrite_existing=False)
                total_gen += c_count
                for l in logs:
                    print(f"  • {l}")
        print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations για το μάθημα {sel_key}.")


def main():
    parser = argparse.ArgumentParser(description="4gnosin Computational Exercise Animator")
    parser.add_argument("--scan", action="store_true", help="Εκτέλεση μόνο σάρωσης και εμφάνιση αναφοράς")
    parser.add_argument("--target", type=str, help="Κωδικός θέματος για μεμονωμένη παραγωγή (π.χ. 18707)")
    parser.add_argument("--subject", type=str, help="Μάθημα (π.χ. thermod ή b/thermod)")
    parser.add_argument("--chapter", type=int, help="Αριθμός κεφαλαίου (π.χ. 3)")
    parser.add_argument("--overwrite", action="store_true", help="Επανεγγραφή υπαρχόντων animations")

    args = parser.parse_args()

    if args.scan:
        stats = scan_computational_exercises()
        print_scan_report(stats)
        return

    if args.target:
        stats = scan_computational_exercises()
        target = args.target.replace("#", "").strip()
        found_file = None
        for s_data in stats["subjects"].values():
            for ch_data in s_data["chapters"].values():
                for ex_info in ch_data["exercises"]:
                    if str(ex_info["bankCode"]) == target:
                        found_file = ex_info["file_path"]
                        break
                if found_file:
                    break
            if found_file:
                break

        if not found_file:
            print(f"❌ Το θέμα #{target} δεν βρέθηκε.")
            return

        count, logs = animate_exercise_file(found_file, target_bank_code=target, overwrite_existing=args.overwrite)
        for l in logs:
            print(f"  • {l}")
        return

    if args.subject:
        stats = scan_computational_exercises()
        available = list(stats["subjects"].keys())
        target_key = resolve_subject_key(args.subject, available)
        if not target_key:
            print(f"❌ Το μάθημα '{args.subject}' δεν βρέθηκε. Διαθέσιμα: {', '.join(available)}")
            return

        s_data = stats["subjects"].get(target_key)
        if not s_data:
            print(f"❌ Δεν βρέθηκαν δεδομένα για το μάθημα {target_key}.")
            return

        if args.chapter is not None:
            if args.chapter not in s_data["chapters"]:
                print(f"❌ Δεν βρέθηκαν υπολογιστικά θέματα για {target_key} - Κεφάλαιο {args.chapter}.")
                return
            ch_data = s_data["chapters"][args.chapter]
            print(f"\n⏳ Έναρξη παραγωγής animations για {target_key} - Κεφάλαιο {args.chapter:02d}...")
            total_gen = 0
            for f in ch_data["files"]:
                count, logs = animate_exercise_file(f, overwrite_existing=args.overwrite)
                total_gen += count
                for l in logs:
                    print(f"  • {l}")
            print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations.")
            return
        else:
            print(f"\n⏳ Έναρξη παραγωγής animations για ΟΛΑ τα κεφάλαια του {target_key}...")
            total_gen = 0
            for c, cd in s_data["chapters"].items():
                for f in cd["files"]:
                    count, logs = animate_exercise_file(f, overwrite_existing=args.overwrite)
                    total_gen += count
                    for l in logs:
                        print(f"  • {l}")
            print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations για το μάθημα {target_key}.")
            return

    interactive_menu()


if __name__ == "__main__":
    main()
