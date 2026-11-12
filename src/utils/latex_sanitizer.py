"""
src/utils/latex_sanitizer.py
Αυτόματος Καθαριστής & Τυποποιητής LaTeX / Unicode / Κειμένου (LaTeX Sanitizer).
Προστατεύει από σφάλματα διαφυγής JSON (control chars), Κυριλλικά ομόγλυφα,
λανθασμένη ελληνική τριγωνομετρία, γυμνά LaTeX, ασύζευκτα/μπερδεμένα delimiters
(\\( ... \\]), ένθετα $, μη ορισμένες εντολές μονάδων KaTeX (\\kJ, \\N, \\bar)
και σπασμένες εκφράσεις \\frac$/$\\dot{Q}$ τόσο στα data .js όσο και στη μνήμη.
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


EXCLUDED_PARTS = frozenset(
    {"js", "simulations", "bundles", ".git", ".venv", "node_modules", "__pycache__", "dist", "vendor"}
)
EXCLUDED_FILENAMES = frozenset({"catalog.js", "links.js", "subject_scripts.js", "scripts_catalog.js"})

# Κλειδιά αντικειμένων που περιέχουν μεταδεδομένα/διαδρομές/κωδικούς και δεν πρέπει να τροποποιούνται
_SKIP_JS_VALUE_KEYS = frozenset(
    {
        "id",
        "slug",
        "group",
        "code",
        "bankCode",
        "src",
        "image",
        "hintImage",
        "href",
        "theory",
        "chapter",
        "layout",
        "kind",
        "type",
        "subq",
        "toleranceMode",
        "solutionImages",
        "images",
        "file",
        "url",
        "path",
        "video",
        "icon",
        "className",
        "color",
        "bg",
        "theme",
    }
)
_MATH_ONLY_KEYS = frozenset({"math", "latex"})
_FORMULA_KEYS = frozenset({"formula"})


# 1. Χάρτης αποκατάστασης ASCII control chars (π.χ. όταν χάθηκε ένα \ κατά το JSON parse)
_CONTROL_CHAR_COLLISIONS: list[tuple[re.Pattern[str], str]] = [
    # \t (tab, 0x09)
    (
        re.compile(
            r"\t(ext(?:bf|it|rm|sf|tt)?|heta|au|imes|an|ilde|frac|riangle|o(?![a-zA-Z\u0370-\u03ff]))"
        ),
        r"\\t\1",
    ),
    # \b (backspace, 0x08 — ΠΡΟΣΟΧΗ: \x08, ΠΟΤΕ \b που στο regex είναι word boundary!)
    (
        re.compile(r"\x08(egin|eta|ar|inom|[Bb]?ig\w*|matrix|ullet|ot|oxed|oldsymbol|mod\b)"),
        r"\\b\1",
    ),
    # \f (formfeed, 0x0c)
    (re.compile(r"\f(rac|orall|lat|ootnote|box)"), r"\\f\1"),
    # \r (carriage return, 0x0d — ΠΟΤΕ όταν ακολουθεί \n)
    (re.compile(r"\r(?!\n)(ho|ad|pm|ight\w*|angle|ceil|floor|m)"), r"\\r\1"),
    # \v (vertical tab, 0x0b)
    (re.compile(r"\x0b(ec|arphi|artheta|arepsilon|dots|dash)"), r"\\v\1"),
    # \a (bell, 0x07)
    (re.compile(r"\x07(lpha|pprox|ngle|rctan|rcsin|rccos|st|ligned)"), r"\\a\1"),
    # \n (newline, 0x0a) μόνο για ασφαλείς εντολές που δεν είναι ελληνικές λέξεις
    (re.compile(r"\n(u(?![a-zA-Z\u0370-\u03ff])|abla\b|eq\b|ewline\b|otin\b)"), r"\\n\1"),
]

# Απενεργοποιημένα ρητά literal ASCII control bytes (<0x20) εκτός \n, \t, \r
_LITERAL_BS_FF_BEL = re.compile(r"[\x07\x08\x0b\x0c]")


# 2. Κυριλλικά ομόγλυφα -> Ελληνικά κεφαλαία/πεζά
_CYRILLIC_TO_GREEK = str.maketrans(
    {
        "А": "Α",
        "а": "α",
        "В": "Β",
        "Г": "Γ",
        "Е": "Ε",
        "е": "ε",
        "І": "Ι",
        "К": "Κ",
        "к": "κ",
        "М": "Μ",
        "Н": "Η",
        "О": "Ο",
        "о": "ο",
        "П": "Π",
        "Р": "Ρ",
        "р": "ρ",
        "С": "Σ",
        "с": "σ",
        "Т": "Τ",
        "т": "τ",
        "Ф": "Φ",
        "Х": "Χ",
        "х": "χ",
    }
)


# 3. Ελληνική τριγωνομετρία & μαθηματικοί συμβολισμοί
_TRIG_REPLACEMENTS: list[tuple[re.Pattern[str], str]] = [
    (re.compile(r"\\sin\b"), r"\\text{ημ}"),
    (re.compile(r"\\cos\b"), r"\\text{συν}"),
    (re.compile(r"\\tan\b"), r"\\text{εφ}"),
    (re.compile(r"\\cot\b"), r"\\text{σφ}"),
    (re.compile(r"\\arcsin\b"), r"\\text{τοξημ}"),
    (re.compile(r"\\arccos\b"), r"\\text{τοξσυν}"),
    (re.compile(r"\\arctan\b"), r"\\text{τοξεφ}"),
]

# Μη ορισμένες εντολές μονάδων/συμβόλων σε KaTeX που πρέπει να γίνουν \text{...}
_UNIT_ALT = (
    r"kcal|cal|kWh|MWh|Wh|kHz|MHz|Hz|kPa|MPa|hPa|Pa|daN|kN|N|"
    r"kJ|MJ|J|kW|MW|mW|W|kV|mV|V|mA|A|kg|mg|km|cm|mm|dm|ms|m|"
    r"rad|rpm|atm|Ohm|ohm|Nm|mL|ml|s|h|K|g"
)
_UNIT_MACRO_RE = re.compile(rf"(?<!\\)\\({_UNIT_ALT})(?![A-Za-z])")
_BAR_UNIT_RE = re.compile(r"(?<!\\)\\bar(?![A-Za-z])(?!\s*(?:\{|[A-Za-z\u0370-\u03ff](?:\b|_|\^)))")
_BARE_UNIT_IN_UNWRAPPED_FRAC_RE = re.compile(rf"(?<![\\_\^A-Za-z])({_UNIT_ALT})\b")

# Γνωστές εντολές/σύμβολα LaTeX που υποδηλώνουν μαθηματική έκφραση σε πεζό κείμενο
_LATEX_COMMANDS = (
    r"\\(?:frac|dfrac|tfrac|sqrt|cdot|times|pm|mp|approx|neq|leq|geq|le|ge|ne|equiv|propto|sim|"
    r"sin|cos|tan|cot|arcsin|arccos|arctan|"
    r"alpha|beta|gamma|delta|epsilon|varepsilon|zeta|eta|theta|vartheta|iota|kappa|"
    r"lambda|mu|nu|xi|pi|varpi|rho|varrho|sigma|varsigma|tau|upsilon|phi|varphi|chi|psi|omega|"
    r"Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega|"
    r"rightarrow|leftarrow|Rightarrow|Leftarrow|implies|iff|to|infty|partial|nabla|"
    r"dot|ddot|vec|hat|bar|circ|dots|cdots|ldots|"
    r"sum|prod|int|oint|lim|log|ln|exp|"
    r"text\{ημ\}|text\{συν\}|text\{εφ\}|text\{σφ\}|"
    r"begin|end|mathbf|mathrm|text|mathit|displaystyle|"
    + _UNIT_ALT
    + r")(?![A-Za-z])"
)

# Regex για γυμνή μαθηματική έκφραση μέσα σε prose (χωρίς να καταπίνει ελληνικές λέξεις)
_MATH_TOKEN_PAT = (
    r"(?:"
    r"\\[A-Za-z]+(?:\{(?:[^{}]|\{[^{}]*\})*\})*|"
    r"\{(?:[^{}]|\{[^{}]*\})*\}|"
    r"(?<![A-Za-z\u0370-\u03ff])[A-Za-z\u0370-\u03ff](?![A-Za-z\u0370-\u03ff])|"
    r"[0-9]+(?:[.,][0-9]+)*|"
    r"[()\[\]_^+\-*/=<>&|%!~]"
    r")"
)
_NAKED_MATH_RE = re.compile(
    rf"(?:{_MATH_TOKEN_PAT}[ \t]*)*" + _LATEX_COMMANDS + rf"(?:[ \t]*{_MATH_TOKEN_PAT})*"
)

# Γυμνές μεταβλητές με δείκτη/εκθέτη ή τελεστή (π.χ. P_2, T_1, C_p, V_\alpha, F_Δ, \dot{m})
_VAR_SUB_RE = re.compile(
    r"(?<![\$\w\\`])(?:"
    r"\\(?:dot|ddot|vec|hat|bar)\{[a-zA-Z\u0370-\u03ff0-9_]+\}|"
    r"[a-zA-Z\u0370-\u03ff](?:_|\^)(?:\{(?:[^{}]*|\\text\{[^{}]*\})*\}|\\[a-zA-Z]+|[0-9]+|[a-zA-Z\u0370-\u03ff])(?!(?:\w|\.[0-9A-Za-z]))"
    r")(?!\$)"
)

# Προστασία inline code, HTML, URLs και ονομάτων αρχείων πριν από wrapping
_PROTECT_PROSE_RE = re.compile(
    r"`[^`]+`|<[^>]+>|(?:https?|file)://[^\s<>\"']+|"
    r"(?:images|content|exercises|animations|assets)/[\w./-]+|"
    r"\b[\w.-]+\.(?:png|webp|jpe?g|svg|gif|pdf|js|css|html)\b"
)

# Tokenizers για delimiters και math splitting
_DELIM_SCAN_RE = re.compile(
    r"\\\\|\\\$|\\\{|\\\}|\\\(|\\\)|\\\[|\\\]|\${3,}|\$\$|\$|\{|\}|\n{2,}"
)
_MATH_TOKEN_RE = re.compile(
    r"(\$\$[\s\S]*?\$\$|"
    r"\$(?:\\.|[^\$\\])+?\$|"
    r"\\\([\s\S]+?\\\)|"
    r"\\\[[\s\S]+?\\\]|"
    r"\\begin\{(?:aligned|align\*?|cases|array|matrix|pmatrix|bmatrix)\}[\s\S]*?"
    r"\\end\{(?:aligned|align\*?|cases|array|matrix|pmatrix|bmatrix)\})"
)


def restore_control_chars(text: str) -> str:
    """Αποκαθιστά ASCII control characters που προήλθαν από ελλιπές escaping (π.χ. \\t -> \\text)."""
    if not text:
        return text
    for pattern, replacement in _CONTROL_CHAR_COLLISIONS:
        text = pattern.sub(replacement, text)
    # Τυχόν εναπομείναντα backspace / formfeed / bell / vertical tab καθαρίζονται
    return _LITERAL_BS_FF_BEL.sub("", text)


def normalize_cyrillic(text: str) -> str:
    """Αντικαθιστά κυριλλικά ομόγλυφα με τα αντίστοιχα ελληνικά γράμματα."""
    if not text:
        return text
    return text.translate(_CYRILLIC_TO_GREEK)


def _strip_unescaped_dollars(text: str) -> str:
    """Αφαιρεί τυχόν ασύμβατα/ένθετα $ (όχι \\$ ή \\\\) μέσα από math expression."""
    if "$" not in text:
        return text
    return re.sub(r"(\\\\)|\\\$|\$+", lambda m: m.group(0) if (m.group(1) or m.group(0) == r"\$") else "", text)


def _find_matching_brace(s: str, open_idx: int) -> int:
    """Βρίσκει το index του αντίστοιχου '}' για '{' στη θέση open_idx (ή -1)."""
    if open_idx < 0 or open_idx >= len(s) or s[open_idx] != "{":
        return -1
    depth = 0
    i = open_idx
    n = len(s)
    while i < n:
        ch = s[i]
        if ch == "\\" and i + 1 < n:
            i += 2
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i
        i += 1
    return -1


def _has_math_delimiter_tokens_ahead(tokens: list[tuple[str, int, int]], start_idx: int, close_tok: str) -> bool:
    """Ελέγχει αν υπάρχει close_tok πριν την επόμενη κενή γραμμή."""
    for j in range(start_idx, len(tokens)):
        t = tokens[j][0]
        if t.startswith("\n"):
            return False
        if t == close_tok or (close_tok == "$$" and t.startswith("$$")):
            return True
    return False


def _is_escaped_right_before(text: str, pos: int) -> bool:
    """True αν ακριβώς πριν το pos βρίσκεται '\\right'."""
    prefix = text[:pos].rstrip()
    return prefix.endswith(r"\right")


def fix_mismatched_delimiters(text: str) -> str:
    """
    Διορθώνει με ασφάλεια ασύμβατα delimiters (π.χ. \\( ... \\], \\( ... \\}, \\[ ... \\))
    χωρίς ποτέ να διασχίζει όρια επόμενης έκφρασης, και καθαρίζει ένθετα $ μέσα σε math.
    """
    if not text or not any(ch in text for ch in ("\\", "$")):
        return text

    tokens = [(m.group(0), m.start(), m.end()) for m in _DELIM_SCAN_RE.finditer(text)]
    if not tokens:
        return text

    out: list[str] = []
    cursor = 0
    mode: str | None = None
    brace_depth = 0

    for idx, (tok, start, end) in enumerate(tokens):
        out.append(text[cursor:start])
        cursor = end

        if tok in (r"\\", r"\$", r"\{"):
            out.append(tok)
            continue

        if tok.startswith("\n"):
            # Κενή γραμμή διακόπτει inline math mode για να μη διαρρέει σε επόμενες παραγράφους
            if mode in (r"\(", "$"):
                mode = None
                brace_depth = 0
            out.append(tok)
            continue

        if tok == "{":
            if mode is not None:
                brace_depth += 1
            out.append(tok)
            continue

        if tok == "}":
            if mode is not None and brace_depth > 0:
                brace_depth -= 1
            out.append(tok)
            continue

        if tok == r"\}":
            if mode == r"\(" and brace_depth == 0 and not _is_escaped_right_before(text, start):
                out.append(r"\)")
                mode = None
            else:
                out.append(tok)
            continue

        if mode is None:
            if tok in (r"\(", r"\["):
                mode = tok
                brace_depth = 0
                out.append(tok)
            elif tok.startswith("$$"):
                mode = "$$"
                brace_depth = 0
                out.append("$$")
            elif tok == "$":
                mode = "$"
                brace_depth = 0
                out.append("$")
            else:
                out.append(tok)
            continue

        if mode == r"\(":
            if tok in (r"\)", r"\]"):
                out.append(r"\)")
                mode = None
                brace_depth = 0
            elif tok.startswith("$"):
                # Ένθετα $ / $$ μέσα σε \( ... \) (π.χ. \( $M_\Sigma$ \]) -> διαγραφή
                pass
            elif tok in (r"\(", r"\["):
                # Νέο άνοιγμα ενώ έλειπε \)
                mode = tok
                brace_depth = 0
                out.append(tok)
            else:
                out.append(tok)
            continue

        if mode == r"\[":
            if tok in (r"\]", r"\)"):
                out.append(r"\]")
                mode = None
                brace_depth = 0
            elif tok.startswith("$"):
                pass
            else:
                out.append(tok)
            continue

        if mode == "$$":
            if tok.startswith("$$"):
                out.append("$$")
                mode = None
                brace_depth = 0
            elif tok == "$":
                if brace_depth > 0 or _has_math_delimiter_tokens_ahead(tokens, idx + 1, "$$"):
                    # Εσωτερικό παρείσακτο $
                    pass
                else:
                    # Ασύζευκτο κλείσιμο $ σε $$ block -> $$
                    out.append("$$")
                    mode = None
                    brace_depth = 0
            else:
                out.append(tok)
            continue

        if mode == "$":
            if tok.startswith("$$"):
                if brace_depth > 0:
                    pass
                else:
                    out.append("$")
                    mode = None
                    brace_depth = 0
            elif tok == "$":
                if brace_depth > 0:
                    # Π.χ. $L = \frac{\lambda \cdot A}{$\dot{Q}$}$ -> διαγραφή εσωτερικού $
                    pass
                else:
                    out.append("$")
                    mode = None
            else:
                out.append(tok)

    out.append(text[cursor:])
    return "".join(out)


def _dollar_parity_at(text: str, pos: int) -> int:
    """Υπολογίζει την ισοτιμία (0 = εκτός, 1 = εντός) μονών/διπλών $ πριν το pos."""
    parity = 0
    i = 0
    while i < pos:
        if text[i] == "\\" and i + 1 < pos:
            i += 2
            continue
        if text[i] == "$":
            if i + 1 < pos and text[i + 1] == "$":
                i += 2
                continue
            parity ^= 1
        i += 1
    return parity


def fix_split_frac_dollars(text: str) -> str:
    """
    Διορθώνει σπασμένα \\frac${$A$}{$B$}, \\frac{A}{$B$}, \\frac{A}{$$B$$} και
    $\\frac{Q_\\alpha}${$V_{\\text{νέο}}$} κλείνοντας σωστά το εξωτερικό $.
    """
    if "$" not in text or "frac" not in text:
        return text

    frac_re = re.compile(r"(?<!\\)\\(?:d|t)?frac\b")
    pos = 0
    while True:
        # Προστασία από \\\\frac (escaped backslash + literal "frac")
        m = frac_re.search(text, pos)
        if not m:
            break
        # Έλεγχος πλήθους backslashes πριν το 'frac'
        bs_count = 0
        k = m.start()
        while k >= 0 and text[k] == "\\":
            # Το m.start() δείχνει στο ίδιο το \ της εντολής
            break
        # Μέτρημα backslashes ακριβώς πριν το m.start()
        j = m.start() - 1
        while j >= 0 and text[j] == "\\":
            bs_count += 1
            j -= 1
        if bs_count % 2 == 1:
            pos = m.end()
            continue

        cur = m.end()
        had_premature_dollar = False

        # Παράλειψη κενών και '$' πριν το 1ο '{'
        p1 = cur
        while p1 < len(text) and text[p1] in " \t\r\n$":
            if text[p1] == "$":
                had_premature_dollar = True
            p1 += 1
        if p1 >= len(text) or text[p1] != "{":
            pos = m.end()
            continue
        e1 = _find_matching_brace(text, p1)
        if e1 < 0:
            pos = m.end()
            continue

        # Παράλειψη κενών και '$' ανάμεσα στο 1ο και 2ο '{'
        p2 = e1 + 1
        while p2 < len(text) and text[p2] in " \t\r\n$":
            if text[p2] == "$":
                had_premature_dollar = True
            p2 += 1
        if p2 >= len(text) or text[p2] != "{":
            pos = e1 + 1
            continue
        e2 = _find_matching_brace(text, p2)
        if e2 < 0:
            pos = p2 + 1
            continue

        in_outer_dollar = _dollar_parity_at(text, m.start()) == 1
        arg1_clean = _strip_unescaped_dollars(text[p1 : e1 + 1])
        arg2_clean = _strip_unescaped_dollars(text[p2 : e2 + 1])

        rebuilt_frac = text[m.start() : cur] + arg1_clean + arg2_clean
        new_text = text[: m.start()] + rebuilt_frac + text[e2 + 1 :]

        new_after_idx = m.start() + len(rebuilt_frac)
        # Αν έκλεισε πρόωρα το εξωτερικό $ μέσα/μεταξύ arg1-arg2 και δεν υπάρχει άλλο $ μετά
        after_rest = new_text[new_after_idx:]
        stripped_after = after_rest.lstrip()
        has_close_ahead = bool(re.match(r"[^$\n]*\$", after_rest))
        if in_outer_dollar and had_premature_dollar and not stripped_after.startswith("$") and not has_close_ahead:
            new_text = new_text[:new_after_idx] + "$" + after_rest
            pos = new_after_idx + 1
        else:
            pos = new_after_idx
        text = new_text

    return text


def clean_celsius_and_units_prose(prose: str) -> str:
    """
    Καθαρίζει βαθμούς Κελσίου και περιττά \\text{} μέσα σε ΠΕΖΟ (prose) κείμενο,
    αφήνοντας καθαρό Unicode '°C' ή '°'.
    """
    if not prose:
        return prose

    # 1. \text{{}^{\circ}\text{C}}, {}^{\circ}\text{C}, ^{\circ}C -> °C σε prose
    prose = re.sub(
        r"\\text\{\s*(?:\{\s*\}\s*\^\{?\s*\\circ\s*\}?|\^\{?\s*\\circ\s*\}?|[°º])\s*(?:\\text\{\s*C\s*\}|C)\s*\}",
        "°C",
        prose,
    )
    prose = re.sub(
        r"(?:\{\s*\}\s*)?\^\{\s*\\circ\s*\}\s*\\text\{\s*C\s*\}",
        "°C",
        prose,
    )
    prose = re.sub(r"(?:\{\s*\}\s*)?\^\\circ\s*\\text\{\s*C\s*\}", "°C", prose)
    prose = re.sub(r"\\text\{\s*\}\s*(?:\{\s*\}\s*)?\^\{?\s*\\circ\s*\}?", "°", prose)
    prose = re.sub(r"(?:\{\s*\}\s*)\^\{\s*\\circ\s*\}", "°", prose)
    prose = re.sub(r"([0-9])\s*(?:\{\s*\}\s*)?\^\{\s*\\circ\s*\}", r"\1°", prose)

    # 2. 20 ° C / 20° C / 20 ºC -> 20°C
    prose = re.sub(r"([0-9])\s*[°º]\s*C\b", r"\1°C", prose)
    prose = re.sub(r"[°º]\s*C\b", "°C", prose)

    # 3. Μεμονωμένες ορφανές εντολές μονάδων σε σκέτο κείμενο χωρίς μαθηματικούς τελεστές
    #    (εκτός αν συνοδεύονται από \cdot, =, ^, _, \frac κ.λπ. που θα τυλιχτούν παρακάτω)
    if not re.search(r"\\(?:frac|dfrac|tfrac|cdot|times|text|sqrt|begin)\b|\^|_", prose):
        prose = _UNIT_MACRO_RE.sub(lambda m: m.group(1), prose)

    return prose


def _unwrap_math_in_text_blocks(math_str: str) -> str:
    """Ξετυλίγει \\text{... \\frac{...}{...} ...} που είναι παράνομο στο KaTeX."""
    if r"\text{" not in math_str:
        return math_str

    pos = 0
    while True:
        idx = math_str.find(r"\text{", pos)
        if idx < 0:
            break
        open_idx = idx + len(r"\text")
        close_idx = _find_matching_brace(math_str, open_idx)
        if close_idx < 0:
            pos = open_idx + 1
            continue
        inner = math_str[open_idx + 1 : close_idx]
        if re.search(r"\\(?:frac|dfrac|tfrac|sqrt|cdot|times|sum|int)\b", inner):
            clean_inner = inner.strip()
            clean_inner = _BARE_UNIT_IN_UNWRAPPED_FRAC_RE.sub(r"\\text{\1}", clean_inner)
            prefix = r"\," if (idx > 0 and math_str[idx - 1].isalnum()) else ""
            math_str = math_str[:idx] + prefix + clean_inner + math_str[close_idx + 1 :]
            pos = idx + len(prefix) + len(clean_inner)
        else:
            pos = close_idx + 1
    return math_str


def sanitize_math_inner(math_str: str) -> str:
    """Καθαρίζει και τυποποιεί μια έκφραση που βρίσκεται ΉΔΗ μέσα σε math mode."""
    if not math_str:
        return math_str

    # 0. Αφαίρεση παρείσακτων/ένθετων $ μέσα σε math mode & αποκατάσταση control chars
    math_str = _strip_unescaped_dollars(math_str)
    math_str = restore_control_chars(math_str)

    # 1. Ξετύλιγμα \text{ \frac{...}{...} }
    math_str = _unwrap_math_in_text_blocks(math_str)

    # 2. Κολλημένα \cdot / \times / \Delta με γράμμα (\cdotm -> \cdot m, \Deltap -> \Delta p)
    math_str = re.sub(r"\\cdot(?!(?:s|p)\b)([A-Za-z\u0370-\u03ff])", r"\\cdot \1", math_str)
    math_str = re.sub(r"\\times([A-Za-z\u0370-\u03ff])", r"\\times \1", math_str)
    math_str = re.sub(r"\\Delta([A-Za-z])", r"\\Delta \1", math_str)

    # 3. Ελληνική τριγωνομετρία
    for pattern, replacement in _TRIG_REPLACEMENTS:
        math_str = pattern.sub(replacement, math_str)

    # 4. Μη ορισμένες εντολές μονάδων KaTeX (\kJ, \kg, \N, \m, \K, \s, \bar κ.λπ.) -> \text{...}
    def _unit_repl(m: re.Match[str]) -> str:
        unit = m.group(1)
        start = m.start()
        prev_ch = math_str[start - 1] if start > 0 else ""
        # Μετά από ψηφίο ή ')' προσθέτουμε κενό μέσα στο \text{ ...} όπως η σύμβαση του site
        lead_space = " " if prev_ch.isdigit() or prev_ch in ")%" else ""
        return f"\\text{{{lead_space}{unit}}}"

    math_str = _UNIT_MACRO_RE.sub(_unit_repl, math_str)
    math_str = _BAR_UNIT_RE.sub(
        lambda m: "\\text{ bar}" if (m.start() > 0 and math_str[m.start() - 1].isdigit()) else "\\text{bar}",
        math_str,
    )
    # Αντικατάσταση ² / ³ αμέσως μετά από } (π.χ. \text{mm}² -> \text{mm}^2)
    math_str = re.sub(r"\}²", r"}^2", math_str)
    math_str = re.sub(r"\}³", r"}^3", math_str)

    # 5. Κανονικοποίηση βαθμών και Κελσίου ΧΩΡΙΣ ποτέ να καταπίνουμε εξωτερικό '}'
    #    π.χ. \text{{}^{\circ}\text{C}} -> {}^{\circ}\text{C}
    math_str = re.sub(
        r"\\text\{\s*(?:\{\s*\}\s*\^\{?\s*\\circ\s*\}?|\^\{?\s*\\circ\s*\}?|[°º])\s*(?:\\text\{\s*C\s*\}|C)\s*\}",
        r"{}^{\\circ}\\text{C}",
        math_str,
    )
    math_str = re.sub(
        r"\\text\{\s*(?:\{\s*\}\s*\^\{?\s*\\circ\s*\}?|\^\{?\s*\\circ\s*\}?|[°º])\s*\}",
        r"{}^{\\circ}",
        math_str,
    )
    math_str = re.sub(r"\\text\{\s*\}\s*(?=(?:\{\s*\}\s*)?\^\{?\s*\\circ)", "", math_str)

    # Κανονικοποίηση stray \{}^{\circ} και {}^\circ -> {}^{\circ}
    math_str = re.sub(
        r"(?:(?<=^)|(?<=[\s=+\-*/(0-9]))\\\{\}\s*\^\s*(?:\{\s*\\circ\s*\}|\\circ(?![A-Za-z]))",
        r"{}^{\\circ}",
        math_str,
    )
    math_str = re.sub(r"\{\s*\}\s*\^\s*(?:\{\s*\\circ\s*\}|\\circ(?![A-Za-z]))", r"{}^{\\circ}", math_str)
    # Γυμνό ^\circ ή ^{\circ} χωρίς βάση (στην αρχή ή μετά από κενό/τελεστή) -> {}^{\circ}
    math_str = re.sub(
        r"(^|(?<=[\s(\[,=+\-*/&~{]))\^\s*(?:\{\s*\\circ\s*\}|\\circ(?![A-Za-z]))",
        r"{}^{\\circ}",
        math_str,
    )

    # Βαθμοί Κελσίου & Unicode °
    math_str = re.sub(r"[°º]\s*C(?![A-Za-z_])", r"{}^{\\circ}\\text{C}", math_str)
    math_str = re.sub(r"[°º]", r"{}^{\\circ}", math_str)
    math_str = re.sub(
        r"(\{\}\^\{\\circ\}|\^\{\s*\\circ\s*\}|\^\\circ)\s*C(?![A-Za-z_])",
        r"\1\\text{C}",
        math_str,
    )
    math_str = re.sub(r"(\{\}\^\{\\circ\}|\^\{\s*\\circ\s*\}|\\circ)\s*\\text\{\s*\}", r"\1", math_str)

    return math_str


def wrap_naked_latex_in_prose(prose: str) -> str:
    """
    Εντοπίζει γυμνές εντολές LaTeX ή μεταβλητές με δείκτη εκτός $...$
    και τις τυλίγει σε $...$, προστατεύοντας κώδικα, HTML, URLs και αρχεία εικόνων.
    """
    if not prose:
        return prose

    protected: list[str] = []

    def _mask(m: re.Match[str]) -> str:
        idx = len(protected)
        protected.append(m.group(0))
        return f"\x00PROT{idx}\x00"

    masked = _PROTECT_PROSE_RE.sub(_mask, prose)

    # 0. Καθαρισμός τυχόν ψευδούς \b που προσαρτήθηκε σε πεζή λέξη (π.χ. \bmodul -> modul, \bmode -> mode)
    masked = re.sub(r"\\b(mod(?:ul\w*|e|el\w*))\b", r"\1", masked, flags=re.IGNORECASE)

    # Α. Ξετύλιγμα ορφανών \text{...} / \textit{...} / \textbf{...} / \emph{...} σε πεζό κείμενο
    def _unwrap_prose_text(m: re.Match[str]) -> str:
        inner = m.group(1)
        if inner.strip() in {"ημ", "συν", "εφ", "σφ", "τοξημ", "τοξσυν", "τοξεφ"}:
            return m.group(0)
        return inner

    masked = re.sub(
        r"(?<![_^=+\-*/\\])\\(?:text|textit|textbf|textrm|textsf|texttt|emph)\{([^{}]+)\}(?![_^=+\-*/\\]|\s*\\(?:cdot|times))",
        _unwrap_prose_text,
        masked,
    )

    # Β. ΠΡΩΤΑ γυμνές εντολές LaTeX (\frac{P_2}{P_1}, \sin(x), \cdot...) για να μη σπάσουν δείκτες εντός τους
    if "\\" in masked:
        def _cmd_replacer(m: re.Match[str]) -> str:
            snippet = m.group(0)
            lead_ws = snippet[: len(snippet) - len(snippet.lstrip())]
            trail_ws = snippet[len(snippet.rstrip()) :]
            core = snippet.strip()
            if not core:
                return snippet
            trail_punct = ""
            if len(core) > 1 and core[-1] in ".,;:":
                trail_punct = core[-1]
                core = core[:-1].rstrip()
            cleaned_math = sanitize_math_inner(core)
            return f"{lead_ws}${cleaned_math}${trail_punct}{trail_ws}"

        masked = _NAKED_MATH_RE.sub(_cmd_replacer, masked)

    # Γ. ΕΠΕΙΤΑ τυλίγουμε τυχόν εναπομείναντες γυμνούς δείκτες/εκθέτες ΜΟΝΟ εκτός $...$
    def _sub_replacer(m: re.Match[str]) -> str:
        return f"${sanitize_math_inner(m.group(0))}$"

    parts = re.split(r"(\$[^\$]+\$)", masked)
    for idx in range(0, len(parts), 2):
        parts[idx] = _VAR_SUB_RE.sub(_sub_replacer, parts[idx])
    masked = "".join(parts)

    # Δ. Συγχώνευση γειτονικών $...$ ενωμένων μόνο με '=' ή '+'
    masked = re.sub(r"\$([^\$]+)\$\s*([=+])\s*\$([^\$]+)\$", r"$\1 \2 \3$", masked)

    if protected:
        masked = re.sub(r"\x00PROT(\d+)\x00", lambda m: protected[int(m.group(1))], masked)
    return masked


def _merge_math_and_celsius_spans(text: str) -> str:
    """Συγχωνεύει $A$ = $B$, $A$ + $B$ και $...^{\\circ}$ C σε ενιαίο καθαρό $...$."""
    # $11{,}5^{\circ}$ C -> $11{,}5{}^{\circ}\text{C}$ και $N/\text{mm}$² -> $N/\text{mm}^2$
    text = re.sub(
        r"\$([^\$]*?)(?:\{\}\^\{\\circ\}|\^\{\\circ\}|\\circ\})\$\s*C\b",
        lambda m: "$" + sanitize_math_inner(m.group(1) + r"{}^{\circ}\text{C}") + "$",
        text,
    )
    text = re.sub(
        r"\$([^\$]+?)\$([²³])",
        lambda m: "$" + m.group(1) + ("^2" if m.group(2) == "²" else "^3") + "$",
        text,
    )
    # Συγχώνευση γειτονικών inline math $A$ = $B$ ή $A =$ $B$
    for _ in range(3):
        updated = re.sub(
            r"\$([^\$]+?)\$\s*([=+])\s*\$([^\$]+?)\$",
            lambda m: "$" + sanitize_math_inner(m.group(1).strip() + " " + m.group(2) + " " + m.group(3).strip()) + "$",
            text,
        )
        updated = re.sub(
            r"\$([^\$]+?)\s*([=+])\s*\$\s*\$([^\$]+?)\$",
            lambda m: "$" + sanitize_math_inner(m.group(1).strip() + " " + m.group(2) + " " + m.group(3).strip()) + "$",
            updated,
        )
        if updated == text:
            break
        text = updated
    return text


def clean_html_tags(text: str) -> str:
    """Αφαιρεί ακατάλληλα HTML tags όπως <i>, <b>, <sub>, <sup>, <br> μετατρέποντάς τα."""
    if "<" not in text:
        return text

    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.IGNORECASE)
    text = re.sub(r"<sub>\s*([^<]+?)\s*</sub>", r"$_{\1}$", text, flags=re.IGNORECASE)
    text = re.sub(r"<sup>\s*([^<]+?)\s*</sup>", r"$^{\1}$", text, flags=re.IGNORECASE)
    text = re.sub(r"</?(?:i|b|em|strong|u)\b[^>]*>", "", text, flags=re.IGNORECASE)
    return text


def sanitize_text(text: str) -> str:
    """Κεντρική συνάρτηση απολύμανσης κειμένου (μικτό κείμενο & LaTeX)."""
    if not isinstance(text, str) or not text:
        return text

    text = restore_control_chars(text)
    text = normalize_cyrillic(text)
    text = clean_html_tags(text)
    # Επιδιόρθωση σπασμένου $\text$it{...} (που προήλθε από παλιό wrapping του \text μέσα στο \textit)
    text = re.sub(r"(?<!\\)\$\\text\$(?:it|bf|rm|sf|tt)\{([^{}]+)\}", r"\1", text)

    # Διόρθωση ασύμβατων delimiters \( ... \] και σπασμένων \frac$/$...$
    text = fix_mismatched_delimiters(text)
    text = fix_split_frac_dollars(text)

    tokens = _MATH_TOKEN_RE.split(text)
    result_tokens: list[str] = []

    for i, part in enumerate(tokens):
        if i % 2 == 1:
            if part.startswith("$$") and part.endswith("$$"):
                inner = part[2:-2]
                cleaned_inner = sanitize_math_inner(inner)
                result_tokens.append(f"$${cleaned_inner}$$")
            elif part.startswith("$") and part.endswith("$"):
                inner = part[1:-1]
                cleaned_inner = sanitize_math_inner(inner)
                result_tokens.append(f"${cleaned_inner}$")
            elif part.startswith(r"\(") and part.endswith(r"\)"):
                inner = part[2:-2]
                cleaned_inner = sanitize_math_inner(inner)
                result_tokens.append(f"\\({cleaned_inner}\\)")
            elif part.startswith(r"\[") and part.endswith(r"\]"):
                inner = part[2:-2]
                cleaned_inner = sanitize_math_inner(inner)
                result_tokens.append(f"\\[{cleaned_inner}\\]")
            else:
                result_tokens.append(sanitize_math_inner(part))
        else:
            cleaned_prose = clean_celsius_and_units_prose(part)
            cleaned_prose = wrap_naked_latex_in_prose(cleaned_prose)
            result_tokens.append(cleaned_prose)

    out = "".join(result_tokens)
    return _merge_math_and_celsius_spans(out)


def sanitize_formula_field(formula: str) -> str:
    """
    Απολύμανση πεδίου `formula` σε ασκήσεις.
    Αν το πεδίο είναι καθαρός μαθηματικός τύπος με κομμένα $...$ (π.χ. 'q = $h_3$ - $h_2$'
    ή 'F = (b $\\cdot s) ...$' ή 'v(t=27°C, $\\phi=20$\\%)'), το ενώνει σε ενιαίο καθαρό $...$.
    Αν περιέχει ελληνικές προτάσεις (π.χ. 'Από πίνακα...' ή '(από χάρτη)'), διατηρεί prose + math.
    """
    if not isinstance(formula, str) or not formula.strip():
        return formula

    cleaned = sanitize_text(formula)
    if "$" not in cleaned:
        return cleaned

    # Ελέγχουμε αν υπάρχουν ελληνικές λέξεις (>= 2 συνεχόμενα ελληνικά γράμματα) ΕΚΤΟΣ \text{...} & math
    non_math_parts = [p for i, p in enumerate(_MATH_TOKEN_RE.split(cleaned)) if i % 2 == 0]
    prose_only = "".join(non_math_parts).strip()
    if not prose_only:
        return cleaned

    # Αν υπάρχει ελληνική λέξη εκτός math, είναι μικτό formula + επεξήγηση -> κράτα το ως έχει
    if re.search(r"[\u0370-\u03ff]{2,}", prose_only):
        return cleaned

    # Ελέγχουμε αν πρόκειται για σπασμένο ενιαίο τύπο (π.χ. "q = $h_3$ - $h_2$", "F = (b $...$", "v(..., $\phi=20$\%)")
    if re.search(r"[=+\-*/()]", prose_only):
        unified_inner = _strip_unescaped_dollars(cleaned).strip()
        unified_inner = sanitize_math_inner(unified_inner)
        return f"${unified_inner}$"

    return cleaned


def sanitize_given_label(label: str) -> str:
    """Ειδική απολύμανση για πεδίο 'label' στα givens."""
    if not isinstance(label, str) or not label.strip():
        return label
    lbl = restore_control_chars(normalize_cyrillic(label)).strip()

    if lbl.startswith("$") and lbl.endswith("$") and lbl.count("$") == 2:
        inner = sanitize_math_inner(lbl[1:-1].strip())
        return f"${inner}$"

    if "\\" in lbl or "_" in lbl or "^" in lbl:
        return f"${sanitize_math_inner(_strip_unescaped_dollars(lbl).strip())}$"

    return lbl


def sanitize_given_value(val: str) -> str:
    """
    Ειδική απολύμανση για πεδίο 'value' στα givens.
    Προστατεύει απλές μονάδες (°C, kg, bar) και επιτρέπει LaTeX όταν χρειάζεται.
    """
    if not isinstance(val, str) or not val.strip():
        return val
    v = restore_control_chars(normalize_cyrillic(val)).strip()

    if "$" not in v and "\\" not in v and "_" not in v and "^" not in v:
        return clean_celsius_and_units_prose(v)

    return sanitize_text(v)


def sanitize_obj(obj: Any) -> Any:
    """Αναδρομική απολύμανση nested δομών (dict, list, str)."""
    if isinstance(obj, str):
        return sanitize_text(obj)
    if isinstance(obj, list):
        return [sanitize_obj(item) for item in obj]
    if isinstance(obj, dict):
        new_dict = {}
        for k, v in obj.items():
            new_key = k
            if k != "pairs" and isinstance(k, str):
                new_key = restore_control_chars(normalize_cyrillic(k))

            if k in _SKIP_JS_VALUE_KEYS:
                new_dict[new_key] = v
            elif k in _MATH_ONLY_KEYS and isinstance(v, str):
                clean_v = v.strip()
                if clean_v.startswith("$") and clean_v.endswith("$") and not clean_v.startswith("$$"):
                    clean_v = clean_v[1:-1].strip()
                new_dict[new_key] = sanitize_math_inner(clean_v)
            elif k in _FORMULA_KEYS and isinstance(v, str):
                new_dict[new_key] = sanitize_formula_field(v)
            elif k == "givens" and isinstance(v, list):
                new_dict[new_key] = [
                    {
                        **sanitize_obj({gk: gv for gk, gv in g.items() if gk not in ("label", "value")}),
                        "label": sanitize_given_label(g.get("label", "")),
                        "value": sanitize_given_value(g.get("value", "")),
                    }
                    if isinstance(g, dict) and "label" in g and "value" in g
                    else sanitize_obj(g)
                    for g in v
                ]
            elif k == "pairs" and isinstance(v, dict):
                # Σε dictionary pairs καθαρίζονται και τα keys και τα values
                new_dict[new_key] = {
                    (sanitize_text(pk) if isinstance(pk, str) else pk): sanitize_obj(pv)
                    for pk, pv in v.items()
                }
            else:
                new_dict[new_key] = sanitize_obj(v)
        return new_dict
    return obj


# ==============================================================================
# Key-Aware JS String-Literal Lexer / Rewriter
# ==============================================================================

_REPAIR_B_RE = re.compile(r"b(?:egin|eta|ar|inom|[Bb]?ig\w*|matrix|ullet|ot|oxed|oldsymbol|mod)\b")
_REPAIR_F_RE = re.compile(r"f(?:rac|orall|lat|ootnote|box)\b")
_REPAIR_R_RE = re.compile(r"r(?:ho|ad|pm|ight\w*|angle|ceil|floor|m)\b")
_REPAIR_T_RE = re.compile(
    r"t(?:ext(?:bf|it|rm|sf|tt)?|heta|au|imes|an|ilde|frac|riangle|o(?![a-zA-Z\u0370-\u03ff])|op)\b"
)
_REPAIR_N_RE = re.compile(r"n(?:u(?![a-zA-Z\u0370-\u03ff])|abla\b|eq\b|ewline\b|otin\b)")


def _repair_js_string_escapes(raw_inner: str) -> str:
    r"""
    Επιδιορθώνει χαμένα \\ μέσα σε JS double-quoted string literal (π.χ. \kJ -> \\kJ,
    \N -> \\N, \bar -> \\bar, \rad -> \\rad, \psi -> \\psi) ΠΡΙΝ το json.loads().
    Δεν πειράζει τα νόμιμα JSON escapes (\", \\, \/, \n, \t, \r, \b, \f, \uXXXX).
    """
    out: list[str] = []
    i = 0
    n = len(raw_inner)
    while i < n:
        ch = raw_inner[i]
        if ch != "\\":
            code = ord(ch)
            if code < 0x20:
                if ch == "\b":
                    out.append(r"\b")
                elif ch == "\f":
                    out.append(r"\f")
                elif ch == "\r":
                    out.append(r"\r")
                elif ch == "\t":
                    out.append(r"\t")
                elif ch == "\n":
                    out.append(r"\n")
                else:
                    out.append(f"\\u{code:04x}")
            else:
                out.append(ch)
            i += 1
            continue

        # Εδώ ch == '\\'
        if i + 1 >= n:
            out.append(r"\\")
            i += 1
            continue

        nxt = raw_inner[i + 1]
        if nxt == "\\":
            # Ήδη διπλό backslash \\
            out.append(r"\\")
            i += 2
            continue
        if nxt in ('"', "/"):
            out.append("\\" + nxt)
            i += 2
            continue
        if nxt == "'":
            out.append("'")
            i += 2
            continue
        if nxt == "u":
            hex_part = raw_inner[i + 2 : i + 6]
            if len(hex_part) == 4 and all(c in "0123456789abcdefABCDEF" for c in hex_part):
                out.append(raw_inner[i : i + 6])
                i += 6
            else:
                out.append(r"\\u")
                i += 2
            continue
        if nxt == "x":
            hex_part = raw_inner[i + 2 : i + 4]
            if len(hex_part) == 2 and all(c in "0123456789abcdefABCDEF" for c in hex_part):
                out.append("\\u00" + hex_part)
                i += 4
            else:
                out.append(r"\\x")
                i += 2
            continue

        rest = raw_inner[i + 1 :]
        if nxt == "b":
            out.append(r"\\b" if _REPAIR_B_RE.match(rest) else r"\b")
            i += 2
        elif nxt == "f":
            out.append(r"\\f" if _REPAIR_F_RE.match(rest) else r"\f")
            i += 2
        elif nxt == "r":
            out.append(r"\\r" if _REPAIR_R_RE.match(rest) else r"\r")
            i += 2
        elif nxt == "t":
            out.append(r"\\t" if _REPAIR_T_RE.match(rest) else r"\t")
            i += 2
        elif nxt == "n":
            out.append(r"\\n" if _REPAIR_N_RE.match(rest) else r"\n")
            i += 2
        else:
            # Οποιοδήποτε άλλο \X (\k, \N, \m, \J, \p, \d, \s, \a, \v, \W...) ήταν χαμένο \
            out.append("\\\\" + nxt)
            i += 2

    return "".join(out)


def _decode_js_string_inner(raw_inner: str) -> tuple[str, bool]:
    """Επιστρέφει (αποκωδικοποιημένο κείμενο Python, αν είχε άκυρο escape στον δίσκο)."""
    repaired = _repair_js_string_escapes(raw_inner)
    had_repair = repaired != raw_inner
    decoded = json.loads('"' + repaired + '"')
    return decoded, had_repair


def _encode_js_string_literal(value: str) -> str:
    """Κωδικοποιεί με 100% ασφάλεια σε double-quoted JS literal (συμβατό και με ES5)."""
    encoded = json.dumps(value, ensure_ascii=False)
    return encoded.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")


def _scan_quoted_literal(src: str, start: int, quote: str) -> int:
    """Σαρώνει από το quote στη θέση start μέχρι το τελικό unescaped quote (+1)."""
    i = start + 1
    n = len(src)
    while i < n:
        ch = src[i]
        if ch == "\\":
            i += 2
            continue
        if ch == quote:
            return i + 1
        i += 1
    return n


def _scan_template_literal(src: str, start: int) -> int:
    """Σαρώνει template literal `...` (συμπεριλαμβανομένων ${...})."""
    i = start + 1
    n = len(src)
    while i < n:
        ch = src[i]
        if ch == "\\":
            i += 2
            continue
        if ch == "`":
            return i + 1
        if ch == "$" and i + 1 < n and src[i + 1] == "{":
            # Προσπέραση ${...} έκφρασης
            depth = 1
            i += 2
            while i < n and depth > 0:
                c = src[i]
                if c in ('"', "'"):
                    i = _scan_quoted_literal(src, i, c)
                    continue
                if c == "`":
                    i = _scan_template_literal(src, i)
                    continue
                if c == "{":
                    depth += 1
                elif c == "}":
                    depth -= 1
                i += 1
            continue
        i += 1
    return n


def _next_non_ws_comment(src: str, pos: int) -> tuple[str, int]:
    """Βρίσκει τον επόμενο σημαντικό χαρακτήρα εκτός κενών και σχολίων JS."""
    n = len(src)
    i = pos
    while i < n:
        ch = src[i]
        if ch.isspace():
            i += 1
            continue
        if ch == "/" and i + 1 < n:
            if src[i + 1] == "/":
                nl = src.find("\n", i + 2)
                i = n if nl < 0 else nl + 1
                continue
            if src[i + 1] == "*":
                end = src.find("*/", i + 2)
                i = n if end < 0 else end + 2
                continue
        return ch, i
    return "", n


def _sanitize_value_by_key(key: str | None, value: str, in_givens: bool) -> str:
    """Επιλέγει τον κατάλληλο απολυμαντή με βάση το όνομα του κλειδιού JS."""
    if key in _SKIP_JS_VALUE_KEYS:
        return value
    if key in _MATH_ONLY_KEYS:
        clean_v = value.strip()
        if clean_v.startswith("$") and clean_v.endswith("$") and not clean_v.startswith("$$"):
            clean_v = clean_v[1:-1].strip()
        return sanitize_math_inner(clean_v)
    if key in _FORMULA_KEYS:
        return sanitize_formula_field(value)
    if in_givens:
        if key == "label":
            return sanitize_given_label(value)
        if key == "value":
            return sanitize_given_value(value)
    return sanitize_text(value)


def sanitize_js_source(source: str) -> str:
    """
    Key-Aware JS String-Literal Rewriter:
    Διασχίζει με ασφάλεια κώδικα JS (.js αρχεία δεδομένων site/content, site/exercises,
    site/animations), αναγνωρίζει κάθε double-quoted string literal εντός αντικειμένων/πινάκων
    (SECTIONS, SUBJECT_DATA, MATH_SECTIONS, EXERCISES, GROUPS, EXERCISE_ANIMATIONS),
    επισκευάζει χαμένα escapes, απολυμαίνει τη συμβολοσειρά ανάλογα με το κλειδί της
    και αφήνει 100% άθικτη όλη τη JS σύνταξη, τα σχόλια και τα μεταδεδομένα.
    """
    if not source or '"' not in source:
        return source

    out: list[str] = []
    # Κάθε frame: [container_type ('obj'|'arr'|'other'), active_key, expect ('key'|'val'|None), in_givens, is_pairs_dict]
    stack: list[list[Any]] = []
    cursor = 0
    i = 0
    n = len(source)
    prev_sig_char = ""

    while i < n:
        ch = source[i]

        # 1. Σχόλια JS
        if ch == "/" and i + 1 < n:
            if source[i + 1] == "/":
                nl = source.find("\n", i + 2)
                i = n if nl < 0 else nl + 1
                continue
            if source[i + 1] == "*":
                end = source.find("*/", i + 2)
                i = n if end < 0 else end + 2
                continue
            # Regex literal heuristics (μετά από = ( [ , : ; ! & | ? ~)
            if prev_sig_char in ("", "=", "(", "[", ",", ":", ";", "!", "&", "|", "?", "~", "{"):
                j = i + 1
                in_cc = False
                while j < n:
                    rc = source[j]
                    if rc == "\\":
                        j += 2
                        continue
                    if rc == "[":
                        in_cc = True
                    elif rc == "]" and in_cc:
                        in_cc = False
                    elif rc == "/" and not in_cc:
                        j += 1
                        while j < n and source[j].isalpha():
                            j += 1
                        break
                    elif rc == "\n":
                        j = i + 1
                        break
                    j += 1
                prev_sig_char = "/"
                i = j
                continue

        # 2. Single-quoted & template strings (αφήνονται ανέγγιχτα)
        if ch == "'":
            i = _scan_quoted_literal(source, i, "'")
            prev_sig_char = "'"
            continue
        if ch == "`":
            i = _scan_template_literal(source, i)
            prev_sig_char = "`"
            continue

        # 3. Δομή στοίβας ({, }, [, ], :, ,)
        if ch == "{":
            parent_key = stack[-1][1] if stack else None
            parent_givens = (stack[-1][3] if stack else False) or (parent_key == "givens")
            stack.append(["obj", None, "key", parent_givens, parent_key == "pairs"])
            prev_sig_char = "{"
            i += 1
            continue
        if ch == "}":
            if stack:
                stack.pop()
            prev_sig_char = "}"
            i += 1
            continue
        if ch == "[":
            # Ξεχωρίζουμε array literal από member bracket expression π.χ. window.SUBJECT_DATA["foo"]
            is_member_subscript = prev_sig_char in ("]", ")", "'", '"') or (
                prev_sig_char.isalnum() or prev_sig_char in ("_", "$")
            )
            parent_key = stack[-1][1] if stack else None
            parent_givens = (stack[-1][3] if stack else False) or (parent_key == "givens")
            if is_member_subscript:
                stack.append(["subscript", None, None, False, False])
            else:
                stack.append(["arr", parent_key, None, parent_givens, False])
            prev_sig_char = "["
            i += 1
            continue
        if ch == "]":
            if stack:
                stack.pop()
            prev_sig_char = "]"
            i += 1
            continue
        if ch == ":":
            if stack and stack[-1][0] == "obj":
                stack[-1][2] = "val"
            prev_sig_char = ":"
            i += 1
            continue
        if ch == ",":
            if stack and stack[-1][0] == "obj":
                stack[-1][1] = None
                stack[-1][2] = "key"
            prev_sig_char = ","
            i += 1
            continue

        # 4. Unquoted property keys σε { key: val }
        if stack and stack[-1][0] == "obj" and stack[-1][2] == "key" and (ch.isalpha() or ch in ("_", "$")):
            j = i + 1
            while j < n and (source[j].isalnum() or source[j] in ("_", "$")):
                j += 1
            ident = source[i:j]
            nxt, _ = _next_non_ws_comment(source, j)
            if nxt == ":":
                stack[-1][1] = ident
            prev_sig_char = source[j - 1]
            i = j
            continue

        # 5. Double-quoted string literal "..."
        if ch == '"':
            end = _scan_quoted_literal(source, i, '"')
            raw_inner = source[i + 1 : end - 1]
            top = stack[-1] if stack else None

            # Ελέγχουμε αν το "..." είναι property key σε object literal ("key": ...)
            nxt_ch, _ = _next_non_ws_comment(source, end)
            if top and top[0] == "obj" and top[2] == "key" and nxt_ch == ":":
                try:
                    key_name, key_repaired = _decode_js_string_inner(raw_inner)
                except Exception:
                    prev_sig_char = '"'
                    i = end
                    continue
                top[1] = key_name
                if top[4]:
                    # Σε dictionary 'pairs', και το κλειδί είναι ορατό περιεχόμενο
                    clean_key = sanitize_text(key_name)
                    if clean_key != key_name or key_repaired:
                        out.append(source[cursor:i])
                        out.append(_encode_js_string_literal(clean_key))
                        cursor = end
                prev_sig_char = '"'
                i = end
                continue

            # Σε member subscript expression (window.EXERCISE_ANIMATIONS["..."]) δεν αλλάζουμε το key
            if top and top[0] == "subscript":
                prev_sig_char = '"'
                i = end
                continue

            # Το string είναι κανονική τιμή (εντός obj value, array στοιχείο ή script string)
            active_key = top[1] if top else None
            in_givens = top[3] if top else False
            if active_key not in _SKIP_JS_VALUE_KEYS:
                try:
                    decoded, had_repair = _decode_js_string_inner(raw_inner)
                except Exception:
                    prev_sig_char = '"'
                    i = end
                    continue
                sanitized = _sanitize_value_by_key(active_key, decoded, in_givens)
                if sanitized != decoded or had_repair:
                    out.append(source[cursor:i])
                    out.append(_encode_js_string_literal(sanitized))
                    cursor = end

            prev_sig_char = '"'
            i = end
            continue

        if not ch.isspace():
            prev_sig_char = ch
        i += 1

    out.append(source[cursor:])
    return "".join(out)


def sanitize_js_file(file_path: Any) -> bool:
    """
    Απολυμαίνει με 100% συντακτική ασφάλεια ένα αρχείο .js περιεχομένου (content, exercises,
    animations) μέσω Key-Aware JS String-Literal Lexer.
    Απορρίπτει αυστηρά αρχεία κώδικα/προσομοιώσεων/ευρετηρίων.
    """
    p = Path(file_path).resolve()
    if not p.is_file():
        return False

    if any(part in p.parts for part in EXCLUDED_PARTS) or p.name in EXCLUDED_FILENAMES:
        return False

    original_content = p.read_text(encoding="utf-8")
    sanitized_content = sanitize_js_source(original_content)

    if sanitized_content != original_content:
        p.write_text(sanitized_content, encoding="utf-8")
        return True
    return False


def sanitize_directory(dir_path: Any, pattern: str = "*.js") -> tuple[int, int]:
    """
    Σαρώνει αναδρομικά έναν φάκελο και απολυμαίνει όλα τα ταιριαστά αρχεία.
    Παραλείπει αυτόματα φακέλους κώδικα και αρχεία catalog/links/subject_scripts.
    Επιστρέφει (τροποποιημένα, σύνολο).
    """
    root = Path(dir_path)
    if not root.exists():
        return 0, 0

    modified = 0
    total = 0

    for file_path in sorted(root.rglob(pattern)):
        if not file_path.is_file():
            continue
        if any(part in file_path.parts for part in EXCLUDED_PARTS) or file_path.name in EXCLUDED_FILENAMES:
            continue
        total += 1
        if sanitize_js_file(file_path):
            modified += 1

    return modified, total


def _maybe_rebuild_site_bundles(targets: list[Path], changed_count: int) -> None:
    """Αν έγιναν αλλαγές σε αρχεία του πραγματικού site/, ανανεώνει αυτόματα τα bundles."""
    if changed_count <= 0:
        return
    repo_root = Path(__file__).resolve().parents[2]
    repo_site = repo_root / "site"
    if not any(t.resolve().is_relative_to(repo_site) for t in targets if t.exists()):
        return
    try:
        import sys

        if str(repo_root) not in sys.path:
            sys.path.insert(0, str(repo_root))
        from scripts.build_bundles import build_bundles

        print("\n📦 Αυτόματη ανανέωση site/bundles και scripts_catalog.js...")
        build_bundles()
    except Exception as exc:
        print(f"⚠️ Αδυναμία αυτόματης ανανέωσης bundles: {exc}")


def run_sanitizer_on_path(target: str, rebuild_bundles: bool = True) -> int:
    """Τρέχει τον καθαριστή σε αρχείο ή φάκελο και επιστρέφει πλήθος τροποποιημένων αρχείων."""
    target_path = Path(target)
    if not target_path.exists():
        print(f"❌ Η διαδρομή δεν βρέθηκε: {target_path}")
        return 0

    if target_path.is_file():
        changed = sanitize_js_file(target_path)
        print(f"{'✅ Διορθώθηκε' if changed else '✨ Ήδη καθαρό'}: {target_path}")
        mod = 1 if changed else 0
    else:
        print(f"🔍 Σάρωση και καθαρισμός LaTeX στον φάκελο: {target_path} ...")
        mod, tot = sanitize_directory(target_path)
        print(f"🏁 Ολοκληρώθηκε! Διορθώθηκαν {mod} από {tot} αρχεία.")

    if rebuild_bundles:
        _maybe_rebuild_site_bundles([target_path], mod)
    return mod


def interactive_menu() -> None:
    """Διαδραστικό μενού για εκτέλεση από .bat ή τερματικό."""
    repo_root = Path(__file__).resolve().parents[2]
    site_dir = repo_root / "site"

    while True:
        print("\n" + "=" * 58)
        print("  🧹 Εργαλείο Καθαρισμού & Διόρθωσης LaTeX / KaTeX")
        print("=" * 58)
        print("  [1] Καθαρισμός Θεωρίας      (site/content)")
        print("  [2] Καθαρισμός Ασκήσεων      (site/exercises)")
        print("  [3] Καθαρισμός Animations    (site/animations)")
        print("  [4] Πλήρης Καθαρισμός Όλων   (site - content/exercises/animations)")
        print("  [5] Καθαρισμός συγκεκριμένου αρχείου / φακέλου")
        print("  [0] Έξοδος")
        choice = input("\nΕπιλογή (0-5): ").strip()

        if choice == "0":
            break
        if choice == "1":
            run_sanitizer_on_path(str(site_dir / "content"))
        elif choice == "2":
            run_sanitizer_on_path(str(site_dir / "exercises"))
        elif choice == "3":
            run_sanitizer_on_path(str(site_dir / "animations"))
        elif choice == "4":
            subs = [site_dir / sub for sub in ("content", "exercises", "animations")]
            total_mod = sum(run_sanitizer_on_path(str(p), rebuild_bundles=False) for p in subs)
            _maybe_rebuild_site_bundles(subs, total_mod)
        elif choice == "5":
            custom = input("Διαδρομή αρχείου ή φακέλου: ").strip().strip('"')
            if custom:
                run_sanitizer_on_path(custom)
        else:
            print("⚠️ Μη έγκυρη επιλογή.")


def main() -> None:
    """Entrypoint για εκτέλεση από command line ή double-click (.bat)."""
    import sys

    args = sys.argv[1:]
    if not args:
        interactive_menu()
        return

    paths = [Path(a) for a in args]
    total_mod = sum(run_sanitizer_on_path(a, rebuild_bundles=False) for a in args)
    _maybe_rebuild_site_bundles(paths, total_mod)


if __name__ == "__main__":
    main()
