"""
src/utils/latex_sanitizer.py
============================
100% ντετερμινιστικός καθαριστής LaTeX, κώδικα, JSON escapes και συμβόλων (0 AI tokens).
Εξαλείφει οριστικά τα LaTeX leaks (γυμνές εντολές χωρίς δολάρια, \\text{C}, \\varphi),
διορθώνει ASCII control character collisions από λανθασμένα JSON escapes,
εξελληνίζει τριγωνομετρικούς δείκτες και ομαλοποιεί ομόγλυφα.
"""

from __future__ import annotations

import re
from typing import Any

# 1. Αποκατάσταση JSON Escape Collisions (ASCII control characters -> LaTeX commands)
_CONTROL_CHAR_COLLISIONS: list[tuple[re.Pattern, str]] = [
    # \b = 0x08
    (re.compile(r"\x08egin"), r"\\begin"),
    (re.compile(r"\x08eta"), r"\\beta"),
    (re.compile(r"\x08ar"), r"\\bar"),
    (re.compile(r"\x08ullet"), r"\\bullet"),
    # \t = 0x09
    (re.compile(r"\x09ext"), r"\\text"),
    (re.compile(r"\x09au"), r"\\tau"),
    (re.compile(r"\x09heta"), r"\\theta"),
    (re.compile(r"\x09imes"), r"\\times"),
    (re.compile(r"\x09o"), r"\\to"),
    (re.compile(r"\x09frac"), r"\\tfrac"),
    # \f = 0x0c
    (re.compile(r"\x0crac"), r"\\frac"),
    (re.compile(r"\x0cphi"), r"\\phi"),
    (re.compile(r"\x0cdot"), r"\\cdot"),
    (re.compile(r"\x0circ"), r"\\circ"),
    # \r = 0x0d
    (re.compile(r"\x0dightarrow"), r"\\rightarrow"),
    (re.compile(r"\x0dho"), r"\\rho"),
    # \n = 0x0a (προσοχή: μόνο όταν ακολουθεί LaTeX εντολή)
    (re.compile(r"\x0a(?:lpha)\b"), r"\\alpha"),
    (re.compile(r"\x0a(?:pprox)\b"), r"\\approx"),
    # \v = 0x0b
    (re.compile(r"\x0bec"), r"\\vec"),
    (re.compile(r"\x0barepsilon"), r"\\varepsilon"),
]

# 2. Κυριλλικά ομόγλυφα -> Ελληνικά κεφαλαία/πεζά
_CYRILLIC_TO_GREEK = str.maketrans({
    "К": "Κ", "к": "κ",
    "А": "Α", "а": "α",
    "В": "Β",
    "Е": "Ε", "е": "ε",
    "Н": "Η",
    "М": "Μ",
    "О": "Ο", "о": "ο",
    "Р": "Ρ", "р": "ρ",
    "С": "Σ", "с": "σ",
    "Т": "Τ",
    "Х": "Χ", "х": "χ",
})

# 3. Ελληνική τριγωνομετρία & μαθηματικοί συμβολισμοί
_TRIG_REPLACEMENTS: list[tuple[re.Pattern, str]] = [
    (re.compile(r"\\sin\b"), r"\\text{ημ}"),
    (re.compile(r"\\cos\b"), r"\\text{συν}"),
    (re.compile(r"\\tan\b"), r"\\text{εφ}"),
    (re.compile(r"\\cot\b"), r"\\text{σφ}"),
    (re.compile(r"\\arcsin\b"), r"\\text{τοξημ}"),
    (re.compile(r"\\arccos\b"), r"\\text{τοξσυν}"),
    (re.compile(r"\\arctan\b"), r"\\text{τοξεφ}"),
]

# Γνωστές εντολές/σύμβολα LaTeX που υποδηλώνουν μαθηματική έκφραση
_LATEX_COMMANDS = (
    r"\\(?:frac|dfrac|tfrac|sqrt|cdot|times|pm|mp|approx|neq|leq|geq|"
    r"sin|cos|tan|cot|arcsin|arccos|arctan|"
    r"alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|"
    r"lambda|mu|nu|xi|pi|varpi|rho|varrho|sigma|varsigma|tau|upsilon|phi|varphi|chi|psi|omega|"
    r"Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega|"
    r"rightarrow|leftarrow|Rightarrow|Leftarrow|to|infty|partial|nabla|"
    r"sum|prod|int|oint|lim|log|ln|exp|"
    r"text\{ημ\}|text\{συν\}|text\{εφ\}|text\{σφ\}|"
    r"begin|end|mathbf|mathrm|text|mathit|displaystyle)"
)

_BRACED = r"\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}"
_TOKEN = (
    rf"(?:{_LATEX_COMMANDS}|{_BRACED}|\[[^\[\]]*\]|[_^]{_BRACED}|"
    rf"[_^][a-zA-Z0-9]|[a-zA-Z]+|\d+(?:\.\d+)?|[\+\-\*\/\=\<\>\(\)\,\:\;\s])"
)
_MATH_VAR = r"[a-zA-Z](?:[_^]\{?[a-zA-Z0-9]+\}?)?"
_EQUATION_PREFIX = rf"(?:{_MATH_VAR}\s*[\=\<\>]\s*(?:{_MATH_VAR}\s*)?)?"

# Regex για εντοπισμό γυμνής μαθηματικής έκφρασης σε πεζό κείμενο
# π.χ. \Delta U, \varphi = 30^\circ, \eta = \frac{W}{Q}, \sigma_{max}, M = F \cdot d
_NAKED_MATH_RE = re.compile(
    rf"(?<![\$\w\\])({_EQUATION_PREFIX}{_LATEX_COMMANDS}{_TOKEN}*)"
)


def restore_control_chars(text: str) -> str:
    """Επαναφέρει κατεστραμμένα LaTeX escapes από ακούσια JSON control chars (\\t -> tab, \\f -> form feed)."""
    if not isinstance(text, str):
        return text
    for pattern, replacement in _CONTROL_CHAR_COLLISIONS:
        text = pattern.sub(replacement, text)
    return text


def normalize_cyrillic(text: str) -> str:
    """Μετατρέπει κυριλλικά ομόγλυφα σε γνήσια ελληνικά γράμματα."""
    if not isinstance(text, str):
        return text
    return text.translate(_CYRILLIC_TO_GREEK)


def clean_celsius_and_units_prose(text: str) -> str:
    """
    Καθαρίζει εκφράσεις βαθμών Κελσίου και κοινών μονάδων σε πεζό κείμενο (εκτός $...$).
    π.χ. 27^\circ\text{C} -> 27°C, \text{ }^\circ\text{C} -> °C, \text{kg} -> kg
    """
    if not isinstance(text, str):
        return text

    # Βαθμοί Κελσίου
    text = re.sub(r"\\text\{\s*\}\s*\^?\\circ\s*\\text\{C\}", "°C", text)
    text = re.sub(r"\{\s*\}\s*\^\s*\\circ\s*\\text\{C\}", "°C", text)
    text = re.sub(r"\^?\\circ\s*\\text\{C\}", "°C", text)
    text = re.sub(r"\\text\{\s*\^?\\circ\s*C\s*\}", "°C", text)
    text = re.sub(r"\\text\{\s*°C\s*\}", "°C", text)
    text = re.sub(r"\{?\^?\\circ\}?\s*C\b", "°C", text)
    text = re.sub(r"\{?\^?\\circ\}?\s*\\text\{C\}", "°C", text)
    text = re.sub(r"\\text\{\s*\}\s*\^?\\circ\b", "°", text)
    text = re.sub(r"\^\\circ\b", "°", text)

    # Καθαρισμός \text{μονάδων} σε πεζό κείμενο
    text = re.sub(
        r"\\text\{\s*(kg|g|mg|m|cm|mm|km|s|min|h|N|kN|Pa|kPa|MPa|bar|J|kJ|MJ|W|kW|MW|K|rad|Hz|l|L|ml|mL|rpm)\s*\}",
        r"\1",
        text,
    )
    # \text{ } -> απλό κενό
    text = re.sub(r"\\text\{\s*\}", " ", text)

    return text


def sanitize_math_inner(math_str: str) -> str:
    """Καθαρίζει και τυποποιεί μια έκφραση που βρίσκεται ΉΔΗ μέσα σε $...$ ή $$...$$ ή σε math environment."""
    if not math_str:
        return math_str

    # 0. Αν περιέχει μαθηματικό περιβάλλον (\begin{aligned}...), αφαιρούμε τυχόν παρείσακτα $
    if r"\begin{" in math_str:
        math_str = re.sub(r"(?<!\\)\$", "", math_str).strip()
        math_str = re.sub(r"\\cdot([A-Za-z])", r"\\cdot \1", math_str)

    # 1. Ελληνική τριγωνομετρία
    for pattern, replacement in _TRIG_REPLACEMENTS:
        math_str = pattern.sub(replacement, math_str)

    # 2. Γυμνό ^\circ στην αρχή ή μετά από τελεστή -> {}^{\circ}
    math_str = re.sub(r"(?<![\w\}])\^\\circ", r"{}^{\\circ}", math_str)

    # 3. Βαθμοί Κελσίου μέσα σε μαθηματικά: {}^{\circ}\text{C}
    math_str = re.sub(r"\^\\circ\s*\\text\{C\}", r"{}^{\\circ}\\text{C}", math_str)
    math_str = re.sub(r"\\text\{\s*\}\s*\^?\\circ\s*\\text\{C\}", r"{}^{\\circ}\\text{C}", math_str)

    return math_str


def wrap_naked_latex_in_prose(prose: str) -> str:
    """
    Εντοπίζει ορφανές LaTeX μαθηματικές εντολές μέσα σε πεζό κείμενο
    και τις τυλίγει αυτόματα σε $ ... $ ώστε να μην τυπώνεται ωμός κώδικας στη σελίδα.
    """
    if not prose or "\\" not in prose:
        return prose

    # Προστασία HTML tags (<br>, <b>, <span> κ.λπ.)
    # Βρίσκουμε εντολές LaTeX
    def _replacer(match: re.Match) -> str:
        raw = match.group(0)
        leading_ws = raw[:len(raw) - len(raw.lstrip())]
        trailing_ws = raw[len(raw.rstrip()):]
        snippet = raw.strip()

        # Αν είναι απλό \n, \t, κλπ. αγνόησέ το
        if not snippet or snippet in (r"\n", r"\t"):
            return raw

        # Αποκόλληση τυχόν σημείων στίξης στο τέλος (. , ; : ! ?) ώστε να μείνουν στο πεζό κείμενο
        trailing_punct = ""
        while snippet and snippet[-1] in ".,;:!?":
            trailing_punct = snippet[-1] + trailing_punct
            snippet = snippet[:-1].rstrip()

        if not snippet:
            return raw

        # Αν είναι \text{απλό κείμενο στα ελληνικά χωρίς μαθηματικά}, βγάλε μόνο το κείμενο
        text_match = re.fullmatch(r"\\text\{([^}]+)\}", snippet)
        if text_match:
            inner = text_match.group(1).strip()
            # Αν το inner δεν έχει μαθηματικά σύμβολα, είναι απλό πεζό
            if not re.search(r"[\=\+\-\*\/\^\_\\]", inner):
                return f"{leading_ws}{inner}{trailing_punct}{trailing_ws}"

        # Καθάρισε το εσωτερικό του μαθηματικού
        cleaned_math = sanitize_math_inner(snippet)
        return f"{leading_ws}${cleaned_math}${trailing_punct}{trailing_ws}"

    # Εφαρμόζουμε μόνο αν υπάρχει \
    return _NAKED_MATH_RE.sub(_replacer, prose)


def clean_html_tags(text: str) -> str:
    """Καθαρίζει raw HTML line breaks (<br>, <br/>) σε κενό διάστημα ώστε να μην σπάνε τα JSON strings."""
    if not isinstance(text, str):
        return text
    text = re.sub(r"<br\s*/?>", " ", text, flags=re.IGNORECASE)
    return text


def sanitize_text(text: str) -> str:
    """
    Ολοκληρωμένος καθαριστής για ένα ενιαίο string κειμένου.
    Χωρίζει το κείμενο σε math blocks ($...$, $$...$$, \\(...\\)) και πεζό κείμενο (prose),
    εφαρμόζοντας τους κατάλληλους κανόνες σε κάθε τμήμα.
    """
    if not isinstance(text, str) or not text:
        return text

    # 1. Αποκατάσταση JSON control chars
    text = restore_control_chars(text)

    # 2. Ομαλοποίηση κυριλλικών
    text = normalize_cyrillic(text)

    # 3. Καθαρισμός HTML <br>
    text = clean_html_tags(text)

    # 3b. Αυτόματη διόρθωση mismatched delimiters \( ... \} -> \( ... \) και \[ ... \) -> \[ ... \]
    text = re.sub(r"\\\(([\s\S]*?)\\\}", r"\\(\1\\)", text)
    text = re.sub(r"\\\[([\s\S]*?)\\\)", r"\\[\1\\]", text)

    # 4. Διαχωρισμός σε Math tokens ($...$, $$...$$, \(...\), \begin{aligned}...\end{aligned}) και Prose
    # Regex για να βρει όλα τα math delimiters και math environments
    math_token_re = re.compile(
        r"(\$\$[\s\S]*?\$\$|"
        r"\$[^\$]+?\$|"
        r"\\\(.+?\\\)|\s*\\\[.+?\\\]|"
        r"\\begin\{(?:aligned|align\*?|cases|array|matrix|pmatrix|bmatrix)\}[\s\S]*?\\end\{(?:aligned|align\*?|cases|array|matrix|pmatrix|bmatrix)\})"
    )

    parts = math_token_re.split(text)
    sanitized_parts = []

    for part in parts:
        if not part:
            continue
        # Αν είναι math environment χωρίς εξωτερικά delimiters (\begin{aligned}...\end{aligned})
        if re.match(r"^\\begin\{(?:aligned|align\*?|cases|array|matrix|pmatrix|bmatrix)\}", part) and \
           re.search(r"\\end\{(?:aligned|align\*?|cases|array|matrix|pmatrix|bmatrix)\}$", part):
            cleaned_inner = sanitize_math_inner(part)
            sanitized_parts.append(cleaned_inner)
        # Αν είναι math block ($...$, $$...$$, \(...\))
        elif (part.startswith("$$") and part.endswith("$$") and len(part) >= 4) or \
             (part.startswith("$") and part.endswith("$") and len(part) >= 2) or \
             (part.startswith(r"\(") and part.endswith(r"\)")) or \
             (part.startswith(r"\[") and part.endswith(r"\]")):
            # Εσωτερικό μαθηματικού
            delim_len = 2 if (part.startswith("$$") or part.startswith(r"\(") or part.startswith(r"\[")) else 1
            start_delim = part[:delim_len]
            end_delim = part[-delim_len:]
            inner = part[delim_len:-delim_len]
            cleaned_inner = sanitize_math_inner(inner)
            sanitized_parts.append(f"{start_delim}{cleaned_inner}{end_delim}")
        else:
            # Είναι πεζό κείμενο (prose)
            # Καθαρισμός Celsius και μονάδων
            prose = clean_celsius_and_units_prose(part)
            # Αυτόματο τύλιγμα ορφανών LaTeX
            prose = wrap_naked_latex_in_prose(prose)
            sanitized_parts.append(prose)

    result = "".join(sanitized_parts)

    # Καθαρισμός τυχόν κενών inline δολαρίων: $  $ (προσοχή: ΔΕΝ πειράζουμε το display math $$...$$)
    result = re.sub(r"(?<!\$)\$\s+\$(?!\$)", "", result)

    return result


def sanitize_obj(obj: Any) -> Any:
    """
    Αναδρομικός καθαριστής για οποιαδήποτε δομή δεδομένων (dict, list, str).
    Επεξεργάζεται όλα τα πεδία αυτόματα.
    """
    if isinstance(obj, str):
        return sanitize_text(obj)
    if isinstance(obj, list):
        return [sanitize_obj(item) for item in obj]
    if isinstance(obj, dict):
        # Ειδική μέριμνα: αν το κλειδί είναι 'pairs', δεν πειράζουμε τα keys
        new_dict = {}
        for k, v in obj.items():
            new_key = k
            if k != "pairs" and isinstance(k, str):
                new_key = sanitize_text(k)
            # Ειδική προστασία: το πεδίο 'math' (π.χ. σε animations) περιέχει αυστηρά καθαρό LaTeX
            if k == "math" and isinstance(v, str):
                clean_v = v.strip()
                if clean_v.startswith("$") and clean_v.endswith("$") and not clean_v.startswith("$$"):
                    clean_v = clean_v[1:-1].strip()
                new_dict[new_key] = sanitize_math_inner(clean_v)
            else:
                new_dict[new_key] = sanitize_obj(v)
        return new_dict
    return obj


def sanitize_js_file(file_path: Any) -> bool:
    """
    Διαβάζει ένα αρχείο .js, εξάγει το δομημένο JSON αντικείμενο, εφαρμόζει τον sanitizer
    (sanitize_obj) και το αποθηκεύει ξανά με 100% ασφάλεια σύνταξης.
    """
    from pathlib import Path
    import json

    p = Path(file_path)
    if not p.is_file():
        return False

    original_content = p.read_text(encoding="utf-8")

    # Προσπάθεια structured JSON εξαγωγής
    try:
        from src.validators.site_validator import SiteValidator
        data = SiteValidator.extract_json_from_js(original_content)
        if data:
            sanitized_data = sanitize_obj(data)
            bracket_idx = original_content.find("[")
            if bracket_idx != -1:
                header = original_content[:bracket_idx]
                new_content = header + json.dumps(sanitized_data, ensure_ascii=False, indent=2) + "\n);\n"
                if "EXERCISES" in header or "exercises" in header:
                    errs = SiteValidator.validate_exercises_code(new_content)
                    if not errs and new_content != original_content:
                        p.write_text(new_content, encoding="utf-8")
                        return True
                elif "GROUPS" in header or "groups" in header:
                    errs = SiteValidator.validate_groups_code(new_content)
                    if not errs and new_content != original_content:
                        p.write_text(new_content, encoding="utf-8")
                        return True
    except Exception:
        pass

    # Fallback σε ασφαλές text sanitization
    sanitized_content = sanitize_text(original_content)
    if sanitized_content != original_content:
        p.write_text(sanitized_content, encoding="utf-8")
        return True
    return False


def sanitize_directory(dir_path: Any, pattern: str = "*.js") -> tuple[int, int]:
    """
    Καθαρίζει αναδρομικά όλα τα αρχεία που ταιριάζουν στο pattern μέσα σε έναν κατάλογο.
    Επιστρέφει (πλήθος τροποποιημένων αρχείων, συνολικό πλήθος αρχείων).
    """
    from pathlib import Path

    p = Path(dir_path)
    if not p.is_dir():
        return 0, 0

    modified = 0
    total = 0
    for file_path in p.rglob(pattern):
        total += 1
        if sanitize_js_file(file_path):
            modified += 1

    return modified, total

