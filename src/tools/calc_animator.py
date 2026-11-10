import sys
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import os
import re
import json
import time
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

try:
    from pydantic import BaseModel, Field

    class StepTextEnrichment(BaseModel):
        step: int = Field(description="Αριθμός βήματος (1-4)")
        kicker: str = Field(description="Παιδαγωγικός τίτλος του βήματος")
        text: str = Field(description="Αναλυτική παιδαγωγική επεξήγηση για μαθητή ΕΠΑ.Λ.")
        note: str = Field(description="Επισήμανση ή συμβουλή για τις πανελλαδικές εξετάσεις")

    class AnimationEnrichment(BaseModel):
        title: str = Field(description="Παιδαγωγικός τίτλος επίλυσης")
        steps: list[StepTextEnrichment] = Field(description="Λίστα των 4 εμπλουτισμένων βημάτων")

except ImportError:
    StepTextEnrichment = None
    AnimationEnrichment = None

from src.validators.site_validator import SiteValidator
from src.utils.agent_memory import get_agent_memory
from src.utils.latex_sanitizer import sanitize_obj, sanitize_text

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

        grade = rel_parts[0]
        subject = rel_parts[1]
        chapter_dir = rel_parts[2]

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
            {"files": [], "exercises_count": 0, "calc_items_count": 0, "animated_count": 0, "exercises": []},
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
                    "title": ex.get("title"),
                    "file_path": js_path,
                })

    return stats


def print_scan_report(stats: dict[str, Any]) -> None:
    """Εκτυπώνει μια σύνοψη των υπολογιστικών ασκήσεων ανά μάθημα και κεφάλαιο."""
    print("=" * 68)
    print("  4gnosin.github.io - ΣΑΡΩΣΗ ΥΠΟΛΟΓΙΣΤΙΚΩΝ ΑΣΚΗΣΕΩΝ & ANIMATIONS")
    print("=" * 68)
    print(f"Συνολικά αρχεία ασκήσεων: {stats['total_files']}")
    print(f"Συνολικές ασκήσεις: {stats['total_exercises']}")
    print(f"Υπολογιστικά ερωτήματα (calc items): {stats['total_calc_items']}")
    pct = (stats['animated_calc_items'] / stats['total_calc_items'] * 100) if stats['total_calc_items'] > 0 else 0
    print(f"Υπολογιστικά με έτοιμο Animation: {stats['animated_calc_items']} ({pct:.1f}%)\n")

    for s_key, s_data in sorted(stats["subjects"].items()):
        if s_data["total_calc"] == 0:
            continue
        title = SUBJECT_TITLES.get(s_key, s_key)
        s_pct = (s_data["animated_calc"] / s_data["total_calc"] * 100) if s_data["total_calc"] > 0 else 0
        print(f"📚 {title} [{s_key}]: {s_data['animated_calc']}/{s_data['total_calc']} ({s_pct:.1f}%)")
        for c_num, c_data in sorted(s_data["chapters"].items()):
            if c_data["calc_items_count"] == 0:
                continue
            print(f"   • Κεφάλαιο {c_num:02d}: {c_data['calc_items_count']} calc items [{c_data['animated_count']}/{c_data['calc_items_count']} animated]")
    print("=" * 68)


def format_unit_latex(unit: str) -> str:
    """Μετατρέπει μονάδες μέτρησης σε καθαρό, συμβατό KaTeX χωρίς σύμβολα που σπάνε."""
    u = unit.strip()
    if not u:
        return ""
    # π.χ. kJ/(kg·K) ή J/(kg·K) ή kJ/(kg.K)
    m = re.match(r"^([a-zA-Z]+)/\((\w+)[·\.](\w+)\)$", u)
    if m:
        return rf"\text{{{m.group(1)}}}/(\text{{{m.group(2)}}}\cdot\text{{{m.group(3)}}})"
    # π.χ. N·m ή N.m
    m_dot = re.match(r"^([a-zA-Z]+)[·\.](\w+)$", u)
    if m_dot:
        return rf"\text{{{m_dot.group(1)}}}\cdot\text{{{m_dot.group(2)}}}"
    # π.χ. m^3/kg
    m_exp = re.match(r"^([a-zA-Z]+)\^(\d+)/([a-zA-Z]+)$", u)
    if m_exp:
        return rf"\text{{{m_exp.group(1)}}}^{m_exp.group(2)}/\text{{{m_exp.group(3)}}}"
    # π.χ. kN/m^2
    m_exp2 = re.match(r"^([a-zA-Z]+)/([a-zA-Z]+)\^(\d+)$", u)
    if m_exp2:
        return rf"\text{{{m_exp2.group(1)}}}/\text{{{m_exp2.group(2)}}}^{m_exp2.group(3)}"
    # π.χ. kJ/kg
    m_frac = re.match(r"^([a-zA-Z]+)/([a-zA-Z]+)$", u)
    if m_frac:
        return rf"\text{{{m_frac.group(1)}}}/\text{{{m_frac.group(2)}}}"

    if u.startswith(r"\text{") and u.endswith("}"):
        inner = u[6:-1]
        if "·" in inner:
            return inner.replace("·", r"\cdot ")
        return u
    return rf"\text{{{u}}}"


def format_greek_math(expr: str) -> str:
    """Καθαρίζει και μορφοποιεί μαθηματικά με ελληνική τριγωνομετρία και σωστά σύμβολα."""
    if not expr:
        return ""
    expr = expr.strip().strip("$").strip()
    expr = re.sub(r"\\sin\b", r"\\text{ημ}", expr)
    expr = re.sub(r"\\cos\b", r"\\text{συν}", expr)
    expr = re.sub(r"\\tan\b", r"\\text{εφ}", expr)
    expr = re.sub(r"\\cot\b", r"\\text{σφ}", expr)
    expr = re.sub(r"(^|[\s(\[,;])\^(?:\\circ|\{\\circ\})", r"\1{}^{\\circ}", expr)
    expr = re.sub(r"(\d+)[.,](\d+)", r"\1{,}\2", expr)
    return expr


def is_same_variable(v1: str, v2: str) -> bool:
    """Συγκρίνει δύο ονόματα μεταβλητών αγνοώντας case, backslashes και άγκιστρα (π.χ. \\Delta U == \\Delta u)."""
    s1 = re.sub(r"[\\\{\}\s_]", "", v1).lower()
    s2 = re.sub(r"[\\\{\}\s_]", "", v2).lower()
    return bool(s1 and s2 and s1 == s2)


def extract_target_variable(prompt: str, formula_raw: str, explain_raw: str) -> str:
    """Εξάγει με ακρίβεια το ζητούμενο μέγεθος (π.χ. \\Delta u, C_v, T_1, Q, W)."""
    f_clean = formula_raw.strip().strip("$").strip()
    if "\\Rightarrow" in f_clean or "\\implies" in f_clean:
        last_part = re.split(r"\\(?:Rightarrow|implies)", f_clean)[-1].strip()
        m_last = re.match(r"^([a-zA-Z\\][a-zA-Z0-9_\{\}\\]*(?:\s+[a-zA-Z0-9_\{\}\\]+)?)\s*=", last_part)
        if m_last:
            return m_last.group(1).strip()

    m_form = re.match(r"^([a-zA-Z\\][a-zA-Z0-9_\{\}\\]*(?:\s+[a-zA-Z0-9_\{\}\\]+)?)\s*=", f_clean)
    if m_form:
        return m_form.group(1).strip()

    m_prompt_vars = re.findall(r"\$([a-zA-Z\\][a-zA-Z0-9_\{\}\\]*(?:\s+[a-zA-Z0-9_\{\}\\]+)?)\$", prompt)
    for v in reversed(m_prompt_vars):
        v_clean = v.strip()
        if v_clean in [r"\Delta U", r"\Delta u", "Q", "q", "W", "w", "P", "V", "v", "T", "T_1", "T_2", "C_v", "C_p", "c", "m", r"\sigma", r"\tau", "F"]:
            return v_clean

    p_lower = prompt.lower()
    if "ειδική θερμότητα" in p_lower or "ειδικής θερμότητας" in p_lower:
        if "όγκο" in p_lower:
            return "C_v"
        if "πίεση" in p_lower:
            return "C_p"
        return "c"
    if "εσωτερικ" in p_lower and "ενέργει" in p_lower:
        if "ανά μονάδα μάζας" in p_lower or "ειδική" in p_lower or "\\delta u" in prompt.lower():
            return r"\Delta u"
        return r"\Delta U"
    if "θερμότητ" in p_lower:
        if "ανά μονάδα μάζας" in p_lower or "ειδική" in p_lower:
            return "q"
        return "Q"
    if "έργο" in p_lower:
        if "ανά μονάδα μάζας" in p_lower or "ειδικό" in p_lower:
            return "w"
        return "W"
    if "πίεση" in p_lower:
        return "P"
    if "όγκο" in p_lower:
        return "V"
    if "θερμοκρασί" in p_lower:
        return "T"

    return m_prompt_vars[0].strip() if m_prompt_vars else "A"


def build_animation_locally(item: dict[str, Any], exercise_meta: dict[str, Any]) -> dict[str, Any]:
    """
    Ντετερμινιστικός builder 4-step Manim animation από τα υπάρχοντα πεδία
    της άσκησης (stem, prompt, formula, explain, answer, unit, hint).
    0 tokens, 100% ασφαλές, ακαριαία εκτέλεση.
    """
    stem = exercise_meta.get("stem", "")
    prompt = item.get("prompt", "")
    subq = str(item.get("subq", "")).strip()
    subq_prompt = item.get("subqPrompt", "")
    formula_raw = item.get("formula", "")
    explain_raw = item.get("explain", "")
    hint_raw = item.get("hint", "")
    answer = item.get("answer", "")
    unit = item.get("unit", "")

    # 1. Εξαγωγή ζητούμενου μεγέθους
    target = extract_target_variable(prompt, formula_raw, explain_raw)

    # 2. Βήμα 1: Συλλογή Δεδομένων & Μετατροπές Μονάδων
    givens_lines = []
    all_text = f"{stem} {prompt} {subq_prompt}"
    found_assignments = re.findall(r"\$([a-zA-Z\\][a-zA-Z0-9_\{\}\\]*(?:\s+[a-zA-Z0-9_\{\}\\]+)?)\s*=\s*([^$]+)\$", all_text)

    exp_assignments = re.findall(r"\$([a-zA-Z\\][a-zA-Z0-9_\{\}\\]*(?:\s+[a-zA-Z0-9_\{\}\\]+)?)\s*=\s*([-+]?\d+[^$]*)\$", explain_raw)
    for var, val in exp_assignments:
        v_clean = var.strip()
        if not is_same_variable(v_clean, target) and not any(is_same_variable(v_clean, v) for v, _ in found_assignments):
            # Προσθήκη στα δεδομένα μόνο αν είναι απλή τιμή (π.χ. T_2 = 400 K) και ΟΧΙ υπολογιστική εξίσωση (με \cdot, *, /)
            if not any(op in val for op in [r"\cdot", "*", "/"]) or ("+" in val and "273" in val):
                found_assignments.append((var, val))

    seen_vars = set()
    for var, val in found_assignments:
        var, val = var.strip(), val.strip()
        if not is_same_variable(var, target) and not any(is_same_variable(var, s) for s in seen_vars):
            seen_vars.add(var)
            val_clean = format_greek_math(val)
            if "=" in val_clean:
                val_clean = val_clean.split("=")[0].strip()
            givens_lines.append(f"{var} &= {val_clean}")

    # Αναγνώριση φυσικών συνθηκών
    comb_text = f"{stem} {prompt} {explain_raw} {hint_raw}".lower()
    if ("αδιαβατικ" in comb_text or "μονωμέν" in comb_text) and not any(is_same_variable("Q", s) for s in seen_vars) and not is_same_variable(target, "Q"):
        givens_lines.append(r"Q &= 0\text{ kJ}\quad\text{(αδιαβατική μεταβολή)}")
        seen_vars.add("Q")
    if ("ισόχωρ" in comb_text or "σταθερού όγκου" in comb_text) and not any(is_same_variable("W", s) for s in seen_vars) and not is_same_variable(target, "W"):
        givens_lines.append(r"W &= 0\text{ kJ}\quad\text{(ισόχωρη μεταβολή)}")
        seen_vars.add("W")
    if ("ισόθερμ" in comb_text) and not any(is_same_variable(r"\Delta U", s) for s in seen_vars) and not is_same_variable(target, r"\Delta U"):
        givens_lines.append(r"\Delta U &= 0\text{ kJ}\quad\text{(ισόθερμη μεταβολή)}")
        seen_vars.add(r"\Delta U")

    # Έργο που προσφέρεται (συμπίεση W < 0) ή παράγεται (εκτόνωση W > 0)
    if not any(is_same_variable("W", s) for s in seen_vars) and not is_same_variable(target, "W"):
        m_w_offer = re.search(r"προσφέρεται.*?έργο.*?\$?(\d+)\s*(?:\\text\{)?(kJ|J)|έργο.*?\$?(\d+)\s*(?:\\text\{)?(kJ|J).*?προσφέρ", all_text, re.IGNORECASE)
        if m_w_offer:
            w_val = m_w_offer.group(1) or m_w_offer.group(3)
            w_u = m_w_offer.group(2) or m_w_offer.group(4)
            givens_lines.append(rf"W &= -{w_val}\text{{ {w_u}}}\quad\text{{(προσφερόμενο έργο, συμπίεση)}}")
            seen_vars.add("W")
        else:
            m_w_prod = re.search(r"παράγεται.*?έργο.*?\$?(\d+)\s*(?:\\text\{)?(kJ|J)|έργο.*?\$?(\d+)\s*(?:\\text\{)?(kJ|J).*?παράγ", all_text, re.IGNORECASE)
            if m_w_prod:
                w_val = m_w_prod.group(1) or m_w_prod.group(3)
                w_u = m_w_prod.group(2) or m_w_prod.group(4)
                givens_lines.append(rf"W &= +{w_val}\text{{ {w_u}}}\quad\text{{(παραγόμενο έργο, εκτόνωση)}}")
                seen_vars.add("W")

    # Έλεγχος μονάδων εκτός SI (bar, daN, kp)
    for idx_g, g_line in enumerate(list(givens_lines)):
        if r"\text{bar}" in g_line or " bar" in g_line:
            givens_lines[idx_g] += r" = \text{μετατροπή σε Pa } (1\text{ bar} = 10^5\text{ Pa})"
        elif r"\text{daN}" in g_line:
            givens_lines[idx_g] += r" = \text{μετατροπή σε N } (1\text{ daN} = 10\text{ N})"
        elif r"\text{kp}" in g_line:
            givens_lines[idx_g] += r" = \text{μετατροπή σε N } (1\text{ kp} = 9{,}81\text{ N})"

    if not givens_lines:
        givens_lines.append(r"\text{Δεδομένα από την εκφώνηση}")

    step1_math = "\\begin{aligned}\n" + " \\\\\n".join(givens_lines) + "\n\\end{aligned}"
    step1_text = "Καταγραφή όλων των γνωστών δεδομένων της άσκησης και έλεγχος των μονάδων μέτρησης σε μονάδες SI."

    # 3. Βήμα 2: Επιλογή Βασικού Τύπου & Αλγεβρική Επίλυση
    step2_lines = []
    base_formula = format_greek_math(formula_raw.strip().strip("$").strip())
    exp_math_chunks = re.findall(r"\$([^$]+)\$", explain_raw)
    alg_found = False

    if "\\Rightarrow" in base_formula or "\\implies" in base_formula:
        parts = re.split(r"\\(?:Rightarrow|implies)", base_formula)
        for p in parts:
            p_c = format_greek_math(p.strip())
            if p_c and "=" in p_c:
                lhs, rhs = p_c.split("=", 1)
                step2_lines.append(f"{lhs.strip()} &= {rhs.strip()}")
        alg_found = True

    if not alg_found:
        for chunk in exp_math_chunks:
            if ("\\Rightarrow" in chunk or "\\implies" in chunk) and not re.search(r"\d{2,}", chunk):
                parts = re.split(r"\\(?:Rightarrow|implies)", chunk)
                for p in parts:
                    p_c = format_greek_math(p.strip())
                    if p_c and "=" in p_c:
                        lhs, rhs = p_c.split("=", 1)
                        step2_lines.append(f"{lhs.strip()} &= {rhs.strip()}")
                        alg_found = True
                if alg_found:
                    break

    if not step2_lines:
        if "=" in base_formula:
            lhs, rhs = base_formula.split("=", 1)
            step2_lines.append(f"{lhs.strip()} &= {rhs.strip()}")
        else:
            step2_lines.append(base_formula)

    step2_math = "\\begin{aligned}\n" + " \\\\\n".join(step2_lines) + "\n\\end{aligned}"
    step2_text = f"Επιλογή του βασικού τύπου και αλγεβρική επίλυση ως προς το ζητούμενο μέγεθος (${target}$)."

    # 4. Βήμα 3: Αριθμητική Αντικατάσταση & Σταδιακές Απλοποιήσεις
    step3_lines = []
    
    # Πρώτη προτεραιότητα: chunk που περιέχει το target
    target_chunk = None
    for chunk in exp_math_chunks:
        if "=" in chunk and re.search(r"\d", chunk) and not ("0 = 0" in chunk):
            var_lhs = chunk.split("=")[0]
            if is_same_variable(var_lhs, target) or target in chunk or target.lower() in chunk.lower():
                target_chunk = chunk
                break
                
    candidate_chunks = [target_chunk] if target_chunk else exp_math_chunks
    for chunk in candidate_chunks:
        if not chunk:
            continue
        if "=" in chunk and re.search(r"\d", chunk) and not ("0 = 0" in chunk):
            c_clean = format_greek_math(chunk)
            if "\\Rightarrow" in c_clean or "\\implies" in c_clean:
                sub_parts = re.split(r"\\(?:Rightarrow|implies)", c_clean)
                for sp in sub_parts:
                    if "=" in sp and re.search(r"\d", sp):
                        eq_parts = sp.split("=")
                        step3_lines.append(f"{eq_parts[0].strip()} &= {eq_parts[1].strip()}")
                        for extra in eq_parts[2:]:
                            step3_lines.append(f"&= {extra.strip()}")
            else:
                eq_parts = c_clean.split("=")
                step3_lines.append(f"{eq_parts[0].strip()} &= {eq_parts[1].strip()}")
                for extra in eq_parts[2:]:
                    step3_lines.append(f"&= {extra.strip()}")
            if step3_lines:
                break

    if not step3_lines or len(step3_lines) == 1:
        if is_same_variable(target, r"\Delta U") and any(is_same_variable("W", s) for s in seen_vars):
            ans_num = format_greek_math(str(abs(answer)))
            unit_latex = format_unit_latex(unit)
            sep = r"\ " if unit_latex else ""
            if answer > 0:
                step3_lines = [
                    rf"\Delta U &= -W",
                    rf"&= -(-{ans_num}{sep}{unit_latex})",
                    rf"&= +{ans_num}{sep}{unit_latex}",
                ]
            else:
                step3_lines = [
                    rf"\Delta U &= -W",
                    rf"&= -({ans_num}{sep}{unit_latex})",
                    rf"&= -{ans_num}{sep}{unit_latex}",
                ]
        elif not step3_lines:
            ans_num = format_greek_math(str(answer))
            unit_latex = format_unit_latex(unit)
            sep = r"\ " if unit_latex else ""
            step3_lines.append(f"{target} &= {ans_num}{sep}{unit_latex}")

    step3_math = "\\begin{aligned}\n" + " \\\\\n".join(step3_lines) + "\n\\end{aligned}"
    step3_text = "Αντικατάσταση των αριθμητικών δεδομένων στον επιλυμένο τύπο και σταδιακή εκτέλεση των πράξεων με κατακόρυφη στοίχιση."

    # 5. Βήμα 4: Τελικός Υπολογισμός & Μονάδα Μέτρησης
    sign_str = "+" if (isinstance(answer, (int, float)) and answer > 0) else ""
    ans_clean = format_greek_math(str(answer))
    unit_latex = format_unit_latex(unit)
    sep = r"\ " if unit_latex else ""
    step4_math = f"{target} = {sign_str}{ans_clean}{sep}{unit_latex}"
    step4_note = f"Η αναγραφή της μονάδας μέτρησης ${unit_latex}$ και του ορθού προσήμου είναι υποχρεωτική στις εξετάσεις."

    meaning = ""
    if is_same_variable(target, r"\Delta U"):
        meaning = "Η εσωτερική ενέργεια του συστήματος αυξήθηκε." if answer > 0 else "Η εσωτερική ενέργεια του συστήματος μειώθηκε."
    elif is_same_variable(target, "Q"):
        meaning = "Η θερμότητα προσφέρεται στο σύστημα." if answer > 0 else "Η θερμότητα αποβάλλεται από το σύστημα."
    elif is_same_variable(target, "W"):
        meaning = "Το έργο παράγεται από το σύστημα (εκτόνωση)." if answer > 0 else "Το έργο προσφέρεται στο σύστημα (συμπίεση)."

    step4_text = f"Προσδιορισμός της τελικής τιμής. {meaning}".strip()

    title = f"Υπολογισμός ${target}$"
    if subq:
        title = f"Ερώτημα ({subq}): {title}"

    return {
        "title": title,
        "steps": [
            {
                "step": 1,
                "kicker": "Βήμα 1: Συλλογή Δεδομένων & Μετατροπές",
                "text": step1_text,
                "description": step1_text,
                "math": step1_math,
                "note": "Όλα τα μεγέθη ελέγχονται αν βρίσκονται σε συμβατές μονάδες SI.",
                "highlight": False,
            },
            {
                "step": 2,
                "kicker": "Βήμα 2: Επιλογή Βασικού Τύπου & Επίλυση",
                "text": step2_text,
                "description": step2_text,
                "math": step2_math,
                "note": f"Αλγεβρική απομόνωση του ζητούμενου μεγέθους {target}.",
                "highlight": False,
            },
            {
                "step": 3,
                "kicker": "Βήμα 3: Αντικατάσταση & Απλοποιήσεις",
                "text": step3_text,
                "description": step3_text,
                "math": step3_math,
                "note": "Προσοχή στις πράξεις και στην τήρηση των προτεραιοτήτων.",
                "highlight": False,
            },
            {
                "step": 4,
                "kicker": "Βήμα 4: Τελικό Αποτέλεσμα & Μονάδα Μέτρησης",
                "text": step4_text,
                "description": step4_text,
                "math": step4_math,
                "note": step4_note,
                "highlight": True,
            },
        ],
    }


_GEMINI_CLIENT = None


def get_gemini_client() -> Any:
    global _GEMINI_CLIENT
    if _GEMINI_CLIENT is not None:
        return _GEMINI_CLIENT
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key or genai is None:
        return None
    _GEMINI_CLIENT = genai.Client(
        api_key=api_key,
        http_options=types.HttpOptions(client_args={"verify": False, "timeout": 15.0}) if types else None,
    )
    return _GEMINI_CLIENT


def sanitize_and_validate_pedagogy(text: str, fallback: str) -> str:
    """
    Καθαρίζει και επικυρώνει αυστηρά παιδαγωγικό κείμενο από LLM.
    Αν αποτύχει οποιοσδήποτε κανόνας ασφαλείας KaTeX, επιστρέφει το ασφαλές fallback.
    """
    if not text:
        return fallback

    s = text.strip()

    # 1. Αυτόματη μετατροπή \triangle σε \Delta και επιδιόρθωση corrupted tabs
    s = re.sub(r"\\triangle\b", r"\\Delta", s)
    s = s.replace("riangle", r"\Delta")

    # 2. Αφαίρεση \text{} γύρω από δολάρια: π.χ. \text{$\Delta U$} -> $\Delta U$
    s = re.sub(r"\\text\{\s*\$([^$]+)\$\s*\}", r"$\1$", s)
    s = re.sub(r"\$\\text\{\s*\\?Delta\s*([a-zA-Z0-9_]*)\s*\}\$", r"$\\Delta \1$", s)
    s = re.sub(r"\\text\{\s*\\?Delta\s*([a-zA-Z0-9_]*)\s*\}", r"$\\Delta \1$", s)

    # 3. Αφαίρεση \text{} γύρω από απλή μεταβλητή (π.χ. \text{T} -> $T$)
    s = re.sub(r"\\text\{([A-Za-z])\}", r"$\1$", s)
    s = re.sub(r"\$\$+", "$", s)

    # 4. Εξάλειψη διπλών παρενθέσεων
    s = re.sub(r"\(\s*(\$[^$]+\$)\s*\)\)", r"(\1)", s)
    s = re.sub(r"\(\s*([^()]+)\s*\)\)", r"(\1)", s)

    # 5. Έλεγχος KaTeX Validity / Red Flags
    if s.count("$") % 2 != 0:
        return fallback

    red_flags = [
        r"\text{$",
        r"\text{)",
        r"\cdotp",
        r"\triangle",
        "riangle",
        "))",
    ]
    for rf in red_flags:
        if rf in s:
            return fallback

    return s


def inspect_pedagogy_with_ai(
    anim: dict[str, Any],
    item: dict[str, Any],
    exercise_meta: dict[str, Any],
) -> dict[str, Any]:
    """
    Εμπλουτίζει ΜΟΝΟ τα παιδαγωγικά κείμενα (kicker, text, note) του animation μέσω Gemini,
    χρησιμοποιώντας Pydantic Structured Output. Τα μαθηματικά και η δομή παραμένουν
    αυστηρά αυτά που έχτισε ο Python Builder.
    """
    client = get_gemini_client()
    if client is None or AnimationEnrichment is None:
        return anim

    memory_rules = ""
    try:
        memory_rules = get_agent_memory().get_prompt_injection("animation")
    except Exception:
        pass

    prompt = (
        "Είσαι ο παιδαγωγικός επιθεωρητής του εκπαιδευτικού portal 4gnosin.github.io.\n"
        "Σου δίνεται ένα έτοιμο μαθηματικό σενάριο 4 βημάτων για μαθητή ΕΠΑ.Λ.\n"
        "Αποστολή σου είναι να βελτιώσεις ΑΠΟΚΛΕΙΣΤΙΚΑ τις λεκτικές επεξηγήσεις (kicker, text, note),\n"
        "ώστε να είναι απόλυτα σαφείς, διδακτικές και ευθυγραμμισμένες με τις εξετάσεις.\n\n"
        "ΚΡΙΣΙΜΟΙ ΚΑΝΟΝΕΣ ΑΣΦΑΛΕΙΑΣ ΚΑΙ ΠΙΣΤΟΤΗΤΑΣ:\n"
        "1. ΜΗΝ αλλάζεις ΠΟΤΕ αριθμούς, τύπους, υπολογισμούς ή αποτελέσματα.\n"
        "2. Τα πεδία text, kicker, note είναι ΑΠΟΚΛΕΙΣΤΙΚΑ ΠΕΖΟ ΚΕΙΜΕΝΟ. ΜΗΝ εισάγεις εξισώσεις ή τύπους στο text.\n"
        "3. Οποιαδήποτε αναφορά σε μέγεθος μέσα στο text γίνεται ΜΟΝΟ ως απλή μεταβλητή σε μονά δολάρια (π.χ. $Q$, $W$, $\\Delta U$, $C_v$).\n"
        "4. ΑΠΑΓΟΡΕΥΕΤΑΙ ΡΗΤΑ το '\\triangle' (χρησιμοποίησε ΜΟΝΟ '\\Delta').\n"
        "5. ΑΠΑΓΟΡΕΥΟΝΤΑΙ ΡΗΤΑ τα εμφωλευμένα δολάρια μέσα σε '\\text{}' (ΠΟΤΕ '\\text{$...$}').\n"
        "6. Διατήρησε απόλυτη πιστότητα στα μαθηματικά του πεδίου math κάθε βήματος.\n\n"
        f"ΚΑΝΟΝΕΣ ΜΝΗΜΗΣ:\n{memory_rules}\n\n"
        f"ΕΚΦΩΝΗΣΗ: {exercise_meta.get('stem')}\n"
        f"ΕΡΩΤΗΜΑ: {item.get('prompt')}\n"
        f"ΥΠΑΡΧΟΝΤΑ ΒΗΜΑΤΑ (JSON):\n{json.dumps(anim, ensure_ascii=False, indent=2)}\n"
    )

    candidate_models = ["gemini-3.5-flash-lite", "gemini-3.5-flash", os.getenv("GEMINI_MODEL") or "gemini-3.8-flash"]
    for model_name in candidate_models:
        try:
            resp = client.models.generate_content(
                model=model_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    response_schema=AnimationEnrichment,
                    temperature=0.1,
                ),
            )
            if resp and resp.text:
                parsed = json.loads(resp.text)
                if isinstance(parsed, dict) and "steps" in parsed:
                    enriched_steps = parsed["steps"]
                    if len(enriched_steps) == len(anim["steps"]):
                        raw_title = parsed.get("title") or anim["title"]
                        anim["title"] = sanitize_and_validate_pedagogy(raw_title, anim["title"])
                        for i, enr in enumerate(enriched_steps):
                            k = enr.get("kicker") or anim["steps"][i]["kicker"]
                            anim["steps"][i]["kicker"] = sanitize_and_validate_pedagogy(k, anim["steps"][i]["kicker"])

                            new_text = enr.get("text") or anim["steps"][i]["text"]
                            clean_t = sanitize_and_validate_pedagogy(new_text, anim["steps"][i]["text"])
                            anim["steps"][i]["text"] = clean_t
                            anim["steps"][i]["description"] = clean_t

                            nt = enr.get("note") or anim["steps"][i]["note"]
                            anim["steps"][i]["note"] = sanitize_and_validate_pedagogy(nt, anim["steps"][i]["note"])
                        return anim
        except Exception as exc:
            err_str = str(exc)
            if "503" in err_str or "UNAVAILABLE" in err_str:
                # Προσωρινή συμφόρηση του μοντέλου, δοκιμή επόμενου υποψηφίου
                continue
            if "RESOURCE_EXHAUSTED" in err_str or "429" in err_str:
                print(" ⚠️ [Gemini Rate Limit - χρήση τοπικού σεναρίου]", end="", flush=True)
                break
            continue

    return anim


def parse_gemini_json(raw_text: str) -> Any:
    """Ασφαλής αποκωδικοποίηση JSON που επιστρέφει το Gemini API."""
    if not raw_text:
        return None
    cleaned = raw_text.strip()
    if cleaned.startswith("```"):
        cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned, flags=re.IGNORECASE)
        cleaned = re.sub(r"\s*```$", "", cleaned)
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        fixed = re.sub(r",\s*([\]}])", r"\1", cleaned)
        try:
            return json.loads(fixed)
        except json.JSONDecodeError:
            fixed_safe = re.sub(r'(?<!\\)\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})', r'\\\\', fixed)
            try:
                return json.loads(fixed_safe)
            except Exception:
                return None


def generate_animation_with_gemini(
    item: dict[str, Any],
    exercise_meta: dict[str, Any],
) -> dict[str, Any] | None:
    """Fallback παραγωγή μέσω Gemini αν λείπουν εντελώς τα δεδομένα."""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key or genai is None:
        return build_animation_locally(item, exercise_meta)

    client = genai.Client(
        api_key=api_key,
        http_options=types.HttpOptions(client_args={"verify": False, "timeout": 45.0}) if types else None,
    )

    system_instruction = (
        "Είσαι ο καθηγητής Μηχανολογίας και Animator του 4gnosin.github.io.\n"
        "Δημιούργησε ένα 4-step Manim Animation JSON (step, kicker, text, math, note, highlight).\n"
        "Μαθηματικά σε καθαρό LaTeX με κατακόρυφη στοίχιση ισοτήτων (aligned).\n"
    )

    prompt = (
        f"Εκφώνηση: {exercise_meta.get('stem')}\n"
        f"Ερώτημα: {item.get('prompt')}\n"
        f"Τύπος: {item.get('formula')}\n"
        f"Απάντηση: {item.get('answer')} {item.get('unit')}\n"
        f"Λύση: {item.get('explain')}\n"
    )

    for m_name in ["gemini-3.5-flash-lite", "gemini-3.8-flash", "gemini-flash-latest"]:
        try:
            resp = client.models.generate_content(
                model=m_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    temperature=0.1,
                ),
            )
            if resp and resp.text:
                data = parse_gemini_json(resp.text)
                if isinstance(data, dict) and "steps" in data:
                    return data
        except Exception:
            continue

    return build_animation_locally(item, exercise_meta)


def animate_exercise_file(
    js_path: Path,
    target_bank_code: str | None = None,
    overwrite_existing: bool = False,
    mode: str = "hybrid",
) -> tuple[int, list[str]]:
    """
    Επεξεργάζεται ένα αρχείο ασκήσεων, παράγει animations για τα calc items
    με βάση το mode ('local', 'hybrid', 'ai-pedagogy'), και αποθηκεύει το αρχείο επικυρώνοντάς το.
    """
    val = SiteValidator()
    mem = get_agent_memory()

    content = js_path.read_text(encoding="utf-8")
    exercises = val.extract_json_from_js(content)
    if not exercises:
        return 0, [f"Δεν ήταν δυνατή η ανάγνωση ασκήσεων από το {js_path.name}"]

    header_style = "SUBJECT_DATA" if "SUBJECT_DATA" in content else "EXERCISES"
    subject_match = re.search(r'SUBJECT_DATA\["([^"]+)"\]', content)
    subject_key = subject_match.group(1) if subject_match else "thermo"

    updated_count = 0
    logs: list[str] = []

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

    if pending_items:
        print(f"\n🎬 Επεξεργασία Manim Animations ({mode.upper()}): {len(pending_items)} υπολογιστικά ερωτήματα...")

        for item, ex_meta in pending_items:
            bcode = ex_meta["bankCode"]
            subq = item.get("subq", "")

            # 1. Παραγωγή βάσης από τον τοπικό builder (πάντα ασφαλής, 0 tokens)
            anim_data = build_animation_locally(item, ex_meta)

            # 2. Εφαρμογή mode
            if mode == "ai-pedagogy":
                print(f"   ⏳ AI Παιδαγωγικός έλεγχος για #{bcode} ({subq})...", end="", flush=True)
                t_ai_0 = time.time()
                anim_data = inspect_pedagogy_with_ai(anim_data, item, ex_meta)
                dt_ai = time.time() - t_ai_0
                print(f" ✓ ({dt_ai:.1f}s)")
                time.sleep(1.0)
            elif mode == "hybrid":
                # Αν λείπουν εντελώς formula και explain, καλούμε το AI
                if not item.get("formula") and not item.get("explain"):
                    print(f"   ⏳ AI Fallback (ελλιπή δεδομένα) για #{bcode} ({subq})...", end="", flush=True)
                    anim_ai = generate_animation_with_gemini(item, ex_meta)
                    if anim_ai:
                        anim_data = anim_ai
                    print(" ✓")
                    time.sleep(1.0)

            # 3. Έλεγχος ποιότητας μέσω AgentMemory
            warns = mem.validate_code_standards(json.dumps(anim_data, ensure_ascii=False))
            if warns:
                for w in warns:
                    logs.append(f"⚠️ [AgentMemory #{bcode} ({subq})]: {w}")

            item["animation"] = sanitize_obj(anim_data)
            updated_count += 1
            logs.append(f"Προστέθηκε animation στο θέμα #{bcode} ({subq})")

    if updated_count > 0:
        if header_style == "SUBJECT_DATA":
            header = (
                "window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n"
                f'window.SUBJECT_DATA["{subject_key}"] = window.SUBJECT_DATA["{subject_key}"] || {{ sections: [], groups: [], exercises: [] }};\n'
                f'window.SUBJECT_DATA["{subject_key}"].exercises.push(...\n'
            )
        else:
            header = "window.EXERCISES = window.EXERCISES || [];\nwindow.EXERCISES.push(...\n"

        sanitized_exercises = sanitize_obj(exercises)
        new_content = header + json.dumps(sanitized_exercises, ensure_ascii=False, indent=2) + "\n);\n"
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
        return

    print("\nΜΕΘΟΔΟΣ ΠΑΡΑΓΩΓΗΣ:")
    print(" [1] Hybrid (Προτεινόμενο: Script-First, ακαριαία εκτέλεση, AI μόνο όπου χρειάζεται)")
    print(" [2] Local (100% Python Script, 0 AI tokens, ακαριαία)")
    print(" [3] AI-Pedagogy (Script + Παιδαγωγικός Επιθεωρητής Gemini)")
    m_choice = input("👉 Επιλογή μεθόδου [1-3] (προεπιλογή 1): ").strip()
    mode_map = {"1": "hybrid", "2": "local", "3": "ai-pedagogy"}
    selected_mode = mode_map.get(m_choice, "hybrid")

    if choice == "3":
        target = input("\nΔώστε κωδικό θέματος (π.χ. 17114 ή 20954): ").strip().replace("#", "")
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

        print(f"\n⏳ Έναρξη παραγωγής animation για το θέμα #{target} ({selected_mode})...")
        count, logs = animate_exercise_file(found_file, target_bank_code=target, overwrite_existing=True, mode=selected_mode)
        for l in logs:
            print(f"  • {l}")
        print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν {count} animations.")

    elif choice == "1":
        subj_list = [k for k, v in stats["subjects"].items() if v["total_calc"] > 0]
        print("\nΔιαθέσιμα μαθήματα με υπολογιστικά θέματα:")
        for idx, k in enumerate(subj_list, 1):
            t_name = SUBJECT_TITLES.get(k, k)
            print(f" [{idx:02d}] {t_name} ({k}) - {stats['subjects'][k]['total_calc']} calc items")

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
            print(f" [{idx:02d}] Κεφάλαιο {c:02d} ({cd['calc_items_count']} calc items)")

        try:
            c_idx = int(input("\nΕπιλέξτε αριθμό κεφαλαίου: ").strip()) - 1
            sel_chapter = ch_list[c_idx]
        except (ValueError, IndexError):
            print("Μη έγκυρη επιλογή.")
            return

        ch_data = stats["subjects"][sel_key]["chapters"][sel_chapter]
        print(f"\n⏳ Έναρξη παραγωγής animations για {sel_key} - Κεφάλαιο {sel_chapter:02d} ({selected_mode})...")
        total_gen = 0
        for f in ch_data["files"]:
            c_count, logs = animate_exercise_file(f, overwrite_existing=False, mode=selected_mode)
            total_gen += c_count
            for l in logs:
                print(f"  • {l}")
        print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations.")

    elif choice == "2":
        subj_list = [k for k, v in stats["subjects"].items() if v["total_calc"] > 0]
        print("\nΔιαθέσιμα μαθήματα:")
        for idx, k in enumerate(subj_list, 1):
            t_name = SUBJECT_TITLES.get(k, k)
            print(f" [{idx:02d}] {t_name} ({k}) - {stats['subjects'][k]['total_calc']} calc items")

        try:
            s_idx = int(input("\nΕπιλέξτε αριθμό μαθήματος: ").strip()) - 1
            sel_key = subj_list[s_idx]
        except (ValueError, IndexError):
            print("Μη έγκυρη επιλογή.")
            return

        print(f"\n⏳ Έναρξη παραγωγής animations για ΟΛΑ τα κεφάλαια του {sel_key} ({selected_mode})...")
        total_gen = 0
        for c, cd in stats["subjects"][sel_key]["chapters"].items():
            for f in cd["files"]:
                c_count, logs = animate_exercise_file(f, overwrite_existing=False, mode=selected_mode)
                total_gen += c_count
                for l in logs:
                    print(f"  • {l}")
        print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations για το μάθημα {sel_key}.")


def main():
    parser = argparse.ArgumentParser(description="4gnosin Computational Exercise Animator")
    parser.add_argument("--scan", action="store_true", help="Εκτέλεση μόνο σάρωσης και εμφάνιση αναφοράς")
    parser.add_argument("--target", type=str, help="Κωδικός θέματος για μεμονωμένη παραγωγή (π.χ. 18707)")
    parser.add_argument("--subject", type=str, help="Μάθημα (π.χ. thermo, thermod, b/antoxi)")
    parser.add_argument("--chapter", type=int, help="Αριθμός κεφαλαίου (π.χ. 3)")
    parser.add_argument("--overwrite", action="store_true", help="Επανεγγραφή υπαρχόντων animations")
    parser.add_argument(
        "--mode",
        type=str,
        choices=["local", "hybrid", "ai-pedagogy"],
        default="hybrid",
        help="Μέθοδος παραγωγής: 'hybrid' (default, script-first + AI fallback), 'local' (100% script, 0 tokens), 'ai-pedagogy' (script + AI επιμελητής)",
    )

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

        count, logs = animate_exercise_file(
            found_file,
            target_bank_code=target,
            overwrite_existing=args.overwrite,
            mode=args.mode,
        )
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
            print(f"\n⏳ Έναρξη παραγωγής animations για {target_key} - Κεφάλαιο {args.chapter:02d} ({args.mode})...")
            total_gen = 0
            for f in ch_data["files"]:
                count, logs = animate_exercise_file(f, overwrite_existing=args.overwrite, mode=args.mode)
                total_gen += count
                for l in logs:
                    print(f"  • {l}")
            print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations.")
            return
        else:
            print(f"\n⏳ Έναρξη παραγωγής animations για ΟΛΑ τα κεφάλαια του {target_key} ({args.mode})...")
            total_gen = 0
            for c, cd in s_data["chapters"].items():
                for f in cd["files"]:
                    count, logs = animate_exercise_file(f, overwrite_existing=args.overwrite, mode=args.mode)
                    total_gen += count
                    for l in logs:
                        print(f"  • {l}")
            print(f"\n🎉 Ολοκληρώθηκε! Παράχθηκαν συνολικά {total_gen} νέα animations για το μάθημα {target_key}.")
            return

    interactive_menu()


if __name__ == "__main__":
    main()
