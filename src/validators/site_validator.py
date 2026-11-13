"""
SiteValidator - Επικύρωση αρχείων JavaScript για το 4gnosin.github.io
Ελέγχει αν τα αρχεία τηρούν τα schemas window.SECTIONS, window.GROUPS και window.EXERCISES.
"""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from typing import Any

if __package__ is None or __package__ == "":
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))


class SiteValidator:
    """
    Επικυρωτής δομών δεδομένων για το 4gnosin.github.io.
    """

    SKIP_DIRS = frozenset({"js", "simulations", "math", "bundles"})
    SKIP_FILENAMES = frozenset({"catalog.js", "links.js", "scripts_catalog.js", "math.js"})

    @classmethod
    def collect_site_files(cls, target_path: Path | str) -> list[Path]:
        """Συλλέγει όλα τα αρχεία περιεχομένου (θεωρία, ομάδες, ασκήσεις, animations)."""
        path = Path(target_path)
        if path.is_file():
            return [path]

        files: list[Path] = []
        for f in sorted(path.rglob("*.js")):
            if any(skip in f.parts for skip in cls.SKIP_DIRS):
                continue
            if f.name in cls.SKIP_FILENAMES:
                continue
            if "content" in f.parts and not any(p.startswith("chapter-") for p in f.parts):
                continue
            files.append(f)
        return files

    @classmethod
    def validate_file(cls, file_path: Path | str) -> list[str]:
        """Επικυρώνει ένα αρχείο .js ανάλογα με τον τύπο/διαδρομή του."""
        path = Path(file_path)
        if "animations" in path.parts:
            return cls.validate_animation_file(path)
        if path.name == "groups.js":
            return cls.validate_groups_file(path)
        if "content" in path.parts or ("exercises" not in path.parts and path.name.startswith("0")):
            return cls.validate_section_file(path)
        return cls.validate_exercises_file(path)

    @staticmethod
    def check_katex_syntax(s: Any, context: str, check_parens: bool = False) -> list[str]:
        """Ελέγχει συνήθη σφάλματα σύνταξης KaTeX/LaTeX σε πεδία κειμένου ή μαθηματικών."""
        errors: list[str] = []
        if not isinstance(s, str) or not s:
            return errors
        if r"\triangle" in s:
            errors.append(f"{context}: Απαγορεύεται το '\\triangle'. Χρησιμοποιήστε '\\Delta'.")
        if r"\cdotp" in s:
            errors.append(f"{context}: Απαγορεύεται το '\\cdotp'.")
        if "riangle" in s and not ("triangle" in s.lower()):
            errors.append(f"{context}: Εντοπίστηκε σπασμένο 'riangle' (πιθανό corrupted escape).")
        if r"\text{$" in s:
            errors.append(f"{context}: Απαγορεύονται εμφωλευμένα δολάρια μέσα σε '\\text{{...}}'.")
        if re.search(r"\\text\{[^}]*·", s):
            errors.append(f"{context}: Απαγορεύεται ο χαρακτήρας '·' μέσα σε '\\text{{...}}'. Χρησιμοποιήστε '\\cdot'.")
        if s.count("$") % 2 != 0:
            errors.append(f"{context}: Ασύζευκτα δολάρια ($) σε μαθηματική έκφραση.")
        if re.search(r"\(\$[^$)]+\$\)\)", s):
            errors.append(f"{context}: Εντοπίστηκε διπλή παρένθεση σε μαθηματικό όρο '($...$))'.")
        if check_parens:
            s_check = re.sub(r"^[0-9a-zA-Z\u0370-\u03ff]\)\s*", "", s)
            if s_check.count("(") != s_check.count(")"):
                errors.append(
                    f"{context}: Μη ισοζυγισμένες παρενθέσεις ({s_check.count('(')} ανοίγματα vs {s_check.count(')')} κλεισίματα)."
                )
        return errors

    @classmethod
    def extract_json_from_js(cls, js_code: str) -> list[dict[str, Any]]:
        """
        Εξάγει τα αντικείμενα που γίνονται .push() σε window.SECTIONS / GROUPS / EXERCISES.
        Υποστηρίζει πολλαπλά push ή ένα push με πίνακα/αντικείμενο.
        """
        results: list[dict[str, Any]] = []
        push_pattern = re.compile(r"\.push\s*\(")
        index = 0
        while index < len(js_code):
            char = js_code[index]
            if char in ("'", '"', "`"):
                index = cls._skip_js_string(js_code, index)
                continue
            if js_code.startswith("//", index):
                newline = js_code.find("\n", index + 2)
                index = len(js_code) if newline == -1 else newline + 1
                continue
            if js_code.startswith("/*", index):
                end_comment = js_code.find("*/", index + 2)
                index = len(js_code) if end_comment == -1 else end_comment + 2
                continue

            match = push_pattern.match(js_code, index)
            if not match:
                index += 1
                continue

            opening = match.end() - 1
            raw_arg, closing = cls._read_balanced_js_argument(js_code, opening)
            if raw_arg is not None:
                for argument in cls._split_js_arguments(raw_arg):
                    argument = argument.strip()
                    if argument.startswith("..."):
                        argument = argument[3:].lstrip()
                    try:
                        parsed = json.loads(argument)
                    except json.JSONDecodeError:
                        fixed = cls.strip_trailing_commas(argument)
                        try:
                            parsed = json.loads(fixed.strip())
                        except json.JSONDecodeError:
                            fixed_safe = re.sub(r'(?<!\\)\\(?!["\\/bfnrt]|u[0-9a-fA-F]{4})', r'\\\\', fixed)
                            try:
                                parsed = json.loads(fixed_safe)
                            except json.JSONDecodeError:
                                parsed = None
                    if isinstance(parsed, list):
                        results.extend(item for item in parsed if isinstance(item, dict))
                    elif isinstance(parsed, dict):
                        results.append(parsed)
            index = closing + 1 if closing is not None else match.end()

        return results

    @classmethod
    def _split_js_arguments(cls, source: str) -> list[str]:
        arguments: list[str] = []
        pairs = {"(": ")", "[": "]", "{": "}"}
        stack: list[str] = []
        start = 0
        index = 0
        while index < len(source):
            char = source[index]
            if char in ("'", '"', "`"):
                index = cls._skip_js_string(source, index)
                continue
            if source.startswith("//", index):
                newline = source.find("\n", index + 2)
                index = len(source) if newline == -1 else newline + 1
                continue
            if source.startswith("/*", index):
                end_comment = source.find("*/", index + 2)
                index = len(source) if end_comment == -1 else end_comment + 2
                continue
            if char in pairs:
                stack.append(pairs[char])
            elif char in (")", "]", "}"):
                if stack:
                    stack.pop()
            elif char == "," and not stack:
                arguments.append(source[start:index])
                start = index + 1
            index += 1
        arguments.append(source[start:])
        return [argument for argument in arguments if argument.strip()]

    @staticmethod
    def _skip_js_string(source: str, start: int) -> int:
        quote = source[start]
        index = start + 1
        while index < len(source):
            if source[index] == "\\":
                index += 2
            elif source[index] == quote:
                return index + 1
            else:
                index += 1
        return len(source)

    @staticmethod
    def strip_trailing_commas(source: str) -> str:
        """
        Αφαιρεί ασφαλώς περιττά κόμματα πριν από ] ή } ΜΟΝΟ εκτός strings,
        προστατεύοντας LaTeX εκφράσεις όπως 2{,}5.
        """
        chars = []
        index = 0
        in_quote = None
        escaped = False
        while index < len(source):
            char = source[index]
            if in_quote:
                chars.append(char)
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == in_quote:
                    in_quote = None
                index += 1
                continue

            if char in ('"', "'", "`"):
                in_quote = char
                chars.append(char)
                index += 1
                continue

            if source.startswith("//", index):
                newline = source.find("\n", index)
                end = len(source) if newline == -1 else newline + 1
                chars.append(source[index:end])
                index = end
                continue

            if source.startswith("/*", index):
                end_comment = source.find("*/", index)
                end = len(source) if end_comment == -1 else end_comment + 2
                chars.append(source[index:end])
                index = end
                continue

            if char == ",":
                lookahead = index + 1
                while lookahead < len(source) and source[lookahead] in " \t\r\n":
                    lookahead += 1
                if lookahead < len(source) and source[lookahead] in ("]", "}"):
                    index += 1
                    continue

            chars.append(char)
            index += 1

        return "".join(chars)

    @classmethod
    def _read_balanced_js_argument(cls, source: str, opening: int) -> tuple[str | None, int | None]:
        pairs = {"(": ")", "[": "]", "{": "}"}
        stack = [")"]
        index = opening + 1
        while index < len(source):
            char = source[index]
            if char in ("'", '"', "`"):
                index = cls._skip_js_string(source, index)
                continue
            if source.startswith("//", index):
                newline = source.find("\n", index + 2)
                index = len(source) if newline == -1 else newline + 1
                continue
            if source.startswith("/*", index):
                end_comment = source.find("*/", index + 2)
                index = len(source) if end_comment == -1 else end_comment + 2
                continue
            if char in pairs:
                stack.append(pairs[char])
            elif char in (")", "]", "}"):
                if not stack or char != stack.pop():
                    return None, None
                if not stack:
                    return source[opening + 1:index], index
            index += 1
        return None, None

    @classmethod
    def validate_section_file(cls, file_path: Path | str) -> list[str]:
        """
        Επικυρώνει ένα αρχείο θεωρίας (0N-<slug>.js).
        """
        path = Path(file_path)
        errors: list[str] = []
        if not path.exists():
            return [f"Το αρχείο δεν υπάρχει: {path}"]

        content = path.read_text(encoding="utf-8")
        if "window.SECTIONS" not in content and not re.search(
            r"window\.SUBJECT_DATA(?:\.[A-Za-z_$][\w$]*|\[['\"][^'\"]+['\"]\])\.sections\b",
            content,
        ):
            errors.append("Δεν βρέθηκε αναφορά στο 'window.SECTIONS' ή SUBJECT_DATA.*.sections.")

        items = cls.extract_json_from_js(content)
        if not items:
            errors.append("Δεν ήταν δυνατή η εξαγωγή έγκυρου αντικειμένου Section από το αρχείο.")
            return errors

        for idx, sec in enumerate(items, 1):
            for field in ("slug", "num", "title", "blocks"):
                if field not in sec:
                    errors.append(f"Section #{idx}: Λείπει το υποχρεωτικό πεδίο '{field}'.")

            blocks = sec.get("blocks", [])
            if not isinstance(blocks, list):
                errors.append(f"Section #{idx}: Το 'blocks' πρέπει να είναι λίστα.")
                continue

            for b_idx, block in enumerate(blocks, 1):
                b_type = block.get("type")
                if not b_type:
                    errors.append(f"Section #{idx}, Block #{b_idx}: Λείπει το πεδίο 'type'.")
                elif b_type not in ("p", "callout", "formula", "h", "ul", "table", "diagram", "image"):
                    errors.append(
                        f"Section #{idx}, Block #{b_idx}: Μη έγκυρος τύπος block '{b_type}'."
                    )
                elif b_type == "callout" and block.get("kind") not in ("def", "example", "remember", "tip", "warning"):
                    errors.append(
                        f"Section #{idx}, Block #{b_idx}: Μη έγκυρο callout kind '{block.get('kind')}'."
                    )

                b_ctx = f"Section #{idx}, Block #{b_idx} ({b_type})"

                # Έλεγχος εικόνων
                if b_type == "image":
                    src = block.get("src", "").strip()
                    if not src:
                        errors.append(f"{b_ctx}: Λείπει η διαδρομή εικόνας ('src').")
                    else:
                        img_path = Path("site") / src
                        if not img_path.exists():
                            errors.append(f"{b_ctx}: Η εικόνα δεν υπάρχει στον δίσκο: '{src}'.")
                        elif not src.endswith(".svg") and img_path.stat().st_size < 1500:
                            errors.append(f"{b_ctx}: Ύποπτα μικρό ή κενό αρχείο εικόνας ({img_path.stat().st_size} bytes): '{src}'.")

                # KaTeX & Math Linter για blocks
                def check_math(s: Any, field_name: str):
                    if not isinstance(s, str) or not s:
                        return
                    ctx_f = f"{b_ctx} {field_name}"
                    # Delimiter typos
                    if re.search(r"\\\(+[^)]*?\\\}", s):
                        errors.append(f"{ctx_f}: Λανθασμένο κλείσιμο μαθηματικών \\( ... \\}}.")
                    if re.search(r"\\\[+[^\]]*?\\\)", s):
                        errors.append(f"{ctx_f}: Λανθασμένο κλείσιμο μαθηματικών \\[ ... \\)).")
                    if r"\triangle" in s:
                        errors.append(f"{ctx_f}: Απαγορεύεται το '\\triangle'. Χρησιμοποιήστε '\\Delta'.")
                    if r"\cdotp" in s:
                        errors.append(f"{ctx_f}: Απαγορεύεται το '\\cdotp'.")
                    # Check braces inside math
                    for mb in re.findall(r"(\\\([\s\S]*?\\\)|\s*\\\[[\s\S]*?\\\]|\$[^\$\n]+\$)", s):
                        if mb.count("{") != mb.count("}"):
                            errors.append(f"{ctx_f}: Μη ισοζυγισμένες αγκύλες {{}} στο math block: '{mb}'.")
                        if r"\text{" in mb and mb.count(r"\text{") > mb.count("}"):
                            errors.append(f"{ctx_f}: Ανοικτό \\text{{}} χωρίς κλείσιμο στο: '{mb}'.")

                if b_type in ("p", "h", "callout"):
                    check_math(block.get("text"), "text")
                    if b_type == "callout":
                        check_math(block.get("title"), "title")
                elif b_type == "formula":
                    check_math(block.get("html"), "html")
                    check_math(block.get("caption"), "caption")
                elif b_type == "ul":
                    for it_idx, it in enumerate(block.get("items", []), 1):
                        check_math(it, f"item #{it_idx}")
                elif b_type == "table":
                    for h_idx, h in enumerate(block.get("headers", []), 1):
                        check_math(h, f"header #{h_idx}")
                    for r_idx, row in enumerate(block.get("rows", []), 1):
                        if isinstance(row, list):
                            for c_idx, cell in enumerate(row, 1):
                                check_math(cell, f"row #{r_idx} cell #{c_idx}")
                    check_math(block.get("caption"), "caption")

        return errors

    @classmethod
    def validate_groups_file(cls, file_path: Path | str) -> list[str]:
        """
        Επικυρώνει ένα αρχείο ομάδων (groups.js).
        """
        path = Path(file_path)
        errors: list[str] = []
        if not path.exists():
            return [f"Το αρχείο δεν υπάρχει: {path}"]

        content = path.read_text(encoding="utf-8")
        return cls.validate_groups_code(content)

    @classmethod
    def validate_groups_code(cls, content: str) -> list[str]:
        """Validates generated group JavaScript without requiring a file on disk."""
        if "window.GROUPS" not in content and not re.search(
            r"window\.SUBJECT_DATA(?:\.[A-Za-z_$][\w$]*|\[['\"][^'\"]+['\"]\])\.groups\b",
            content,
        ):
            return ["Δεν βρέθηκε αναφορά στο 'window.GROUPS' ή SUBJECT_DATA.*.groups."]

        groups = cls.extract_json_from_js(content)
        if not groups:
            return ["Δεν ήταν δυνατή η εξαγωγή ομάδων από το groups.js."]

        errors: list[str] = []
        for idx, grp in enumerate(groups, 1):
            for field in ("id", "chapter", "title", "blurb"):
                if field not in grp:
                    errors.append(f"Group #{idx}: Λείπει το υποχρεωτικό πεδίο '{field}'.")

        return errors

    @classmethod
    def validate_animation_file(cls, file_path: Path | str) -> list[str]:
        """Επικυρώνει ένα απομονωμένο αρχείο animation (site/animations/{grade}/{subject}/{exId}.js)."""
        path = Path(file_path)
        if not path.is_file():
            return [f"Το αρχείο δεν υπάρχει: {path}"]
        content = path.read_text(encoding="utf-8")
        return cls.validate_animation_code(content, path.name)

    @classmethod
    def validate_animation_code(cls, content: str, source_label: str = "<animation>") -> list[str]:
        """Επικυρώνει τον κώδικα JavaScript ενός αρχείου animation."""
        errors: list[str] = []
        if "window.EXERCISE_ANIMATIONS" not in content:
            return [f"Δεν βρέθηκε αναφορά στο 'window.EXERCISE_ANIMATIONS' στο {source_label}."]

        m = re.search(r'window\.EXERCISE_ANIMATIONS\[.*?\]\s*=\s*', content)
        if not m:
            return [f"Δεν βρέθηκε ανάθεση αντικειμένου στο window.EXERCISE_ANIMATIONS στο {source_label}."]

        json_str = content[m.end():].strip().rstrip(";").strip()
        try:
            data = json.loads(json_str)
        except Exception as exc:
            return [f"Μη έγκυρο JSON στο animation {source_label}: {exc}"]

        if not isinstance(data, dict):
            return [f"Το animation στο {source_label} πρέπει να είναι JSON αντικείμενο."]

        anims_to_check: list[tuple[str, dict[str, Any]]] = []
        if "steps" in data:
            anims_to_check.append(("default", data))
        else:
            for k, v in data.items():
                if isinstance(v, dict):
                    anims_to_check.append((str(k), v))
                else:
                    errors.append(f"Το κλειδί '{k}' στο {source_label} δεν περιέχει έγκυρο αντικείμενο animation.")

        for subk, anim in anims_to_check:
            anim_ctx = f"{source_label} ({subk})"
            title = anim.get("title")
            if not title:
                errors.append(f"Λείπει το 'title' στο animation ({subk}) του {source_label}.")
            else:
                errors.extend(cls.check_katex_syntax(title, f"{anim_ctx} title", check_parens=False))

            steps = anim.get("steps")
            if not isinstance(steps, list) or len(steps) == 0:
                errors.append(f"Το 'steps' στο animation ({subk}) του {source_label} πρέπει να είναι μη κενή λίστα.")
            else:
                for s_idx, st in enumerate(steps, 1):
                    if not isinstance(st, dict):
                        errors.append(f"Το βήμα #{s_idx} στο animation ({subk}) δεν είναι αντικείμενο.")
                        continue
                    step_ctx = f"{anim_ctx} Βήμα #{s_idx}"
                    text_val = st.get("text") if "text" in st else st.get("description")
                    math_val = st.get("math") if "math" in st else st.get("latex")
                    if "text" not in st and "description" not in st:
                        errors.append(f"Λείπει το 'text' στο βήμα #{s_idx} του animation ({subk}).")
                    else:
                        errors.extend(cls.check_katex_syntax(text_val, f"{step_ctx} text", check_parens=False))

                    if "math" not in st and "latex" not in st:
                        errors.append(f"Λείπει το 'math' στο βήμα #{s_idx} του animation ({subk}).")
                    else:
                        errors.extend(cls.check_katex_syntax(math_val, f"{step_ctx} math", check_parens=True))

                    errors.extend(cls.check_katex_syntax(st.get("kicker"), f"{step_ctx} kicker", check_parens=False))
                    errors.extend(cls.check_katex_syntax(st.get("note"), f"{step_ctx} note", check_parens=False))
                    if isinstance(st.get("highlight"), str):
                        errors.extend(cls.check_katex_syntax(st.get("highlight"), f"{step_ctx} highlight", check_parens=False))

        return errors

    @classmethod
    def validate_exercises_file(cls, file_path: Path | str) -> list[str]:
        """
        Επικυρώνει ένα αρχείο ασκήσεων (<group>.js).
        """
        path = Path(file_path)
        errors: list[str] = []
        if not path.exists():
            return [f"Το αρχείο δεν υπάρχει: {path}"]

        content = path.read_text(encoding="utf-8")
        return cls.validate_exercises_code(content)

    @classmethod
    def validate_exercises_code(cls, content: str) -> list[str]:
        """Validates generated exercise JavaScript without requiring a file on disk."""
        if "window.EXERCISES" not in content and not re.search(
            r"window\.SUBJECT_DATA(?:\.[A-Za-z_$][\w$]*|\[['\"][^'\"]+['\"]\])\.exercises\b",
            content,
        ):
            return ["Δεν βρέθηκε αναφορά στο 'window.EXERCISES' ή SUBJECT_DATA.*.exercises."]

        exercises = cls.extract_json_from_js(content)
        if not exercises:
            return ["Δεν ήταν δυνατή η εξαγωγή ασκήσεων από το αρχείο."]

        errors: list[str] = []
        for idx, ex in enumerate(exercises, 1):
            for field in ("id", "group", "kind", "title", "units", "items"):
                if field not in ex:
                    errors.append(f"Exercise #{idx} (id: {ex.get('id', 'άγνωστο')}): Λείπει το '{field}'.")

            kind = ex.get("kind")
            if kind not in ("mc", "tf", "match", "blank", "calc", "open"):
                errors.append(f"Exercise #{idx}: Μη έγκυρο είδος άσκησης '{kind}'.")

            items = ex.get("items", [])
            if not isinstance(items, list) or len(items) == 0:
                errors.append(f"Exercise #{idx}: Το 'items' πρέπει να είναι μη κενή λίστα.")
                continue

            for i_idx, item in enumerate(items, 1):
                if not isinstance(item, dict):
                    errors.append(f"Exercise #{idx}, Item #{i_idx}: Το ερώτημα πρέπει να είναι αντικείμενο.")
                    continue
                item_kind = item.get("kind")
                if item_kind not in ("mc", "tf", "match", "blank", "calc", "open"):
                    errors.append(f"Exercise #{idx}, Item #{i_idx}: Μη έγκυρο είδος άσκησης '{item_kind}'.")
                    continue
                if "explain" not in item:
                    errors.append(f"Exercise #{idx}, Item #{i_idx}: Συνιστάται πεδίο 'explain'.")

                if item_kind == "mc":
                    if "options" not in item or not isinstance(item["options"], list):
                        errors.append(f"Exercise #{idx}, Item #{i_idx} (mc): Λείπει η λίστα 'options'.")
                    if "answer" not in item:
                        errors.append(f"Exercise #{idx}, Item #{i_idx} (mc): Λείπει το 'answer'.")
                elif item_kind == "tf":
                    if not isinstance(item.get("answer"), bool):
                        errors.append(f"Exercise #{idx}, Item #{i_idx} (tf): Το 'answer' πρέπει να είναι boolean.")
                elif item_kind == "match":
                    if "left" not in item or "right" not in item or "pairs" not in item:
                        errors.append(f"Exercise #{idx}, Item #{i_idx} (match): Απαιτούνται left, right, pairs.")
                elif item_kind == "blank":
                    if "answers" not in item or "bank" not in item:
                        errors.append(f"Exercise #{idx}, Item #{i_idx} (blank): Απαιτούνται answers και bank.")
                elif item_kind == "calc":
                    if "answer" not in item or "unit" not in item:
                        errors.append(f"Exercise #{idx}, Item #{i_idx} (calc): Απαιτούνται answer και unit.")

            # Έλεγχος ύπαρξης εικόνων στον δίσκο
            site_dir = Path("site")
            def check_img(src: str, context: str):
                if not isinstance(src, str):
                    return
                clean = src.lstrip("/")
                if not clean.startswith("images/"):
                    errors.append(f"{context}: Η διαδρομή εικόνας '{src}' πρέπει να ξεκινά με 'images/'.")
                    return
                if "#" in src:
                    errors.append(f"{context}: Η διαδρομή εικόνας '{src}' περιέχει '#' (μη επιτρεπτό σε URL/web). Απαιτείται διαδρομή χωρίς '#'.")
                if site_dir.exists():
                    rel_img = clean[len("images/"):].lstrip("/")
                    full_p = site_dir / "images" / rel_img
                    if not full_p.exists():
                        errors.append(f"{context}: Η εικόνα δεν βρέθηκε στον δίσκο: '{src}' ({full_p})")

            if "image" in ex and ex["image"]:
                check_img(ex["image"], f"Exercise #{idx} (id: {ex.get('id', 'άγνωστο')})")
            if "images" in ex and isinstance(ex["images"], list):
                for img_src in ex["images"]:
                    check_img(img_src, f"Exercise #{idx}")
            if "solutionImages" in ex and isinstance(ex["solutionImages"], list):
                for img_src in ex["solutionImages"]:
                    check_img(img_src, f"Exercise #{idx} solutionImages")

            # KaTeX & Math Linter
            def check_katex_syntax(s: Any, context: str, check_parens: bool = False):
                errors.extend(cls.check_katex_syntax(s, context, check_parens=check_parens))

            check_katex_syntax(ex.get("stem"), f"Exercise #{idx} (id: {ex.get('id', 'άγνωστο')}) stem")

            for i_idx, item in enumerate(items, 1):
                item_ctx = f"Exercise #{idx}, Item #{i_idx}"
                check_katex_syntax(item.get("prompt"), f"{item_ctx} prompt")
                check_katex_syntax(item.get("explain"), f"{item_ctx} explain")
                check_katex_syntax(item.get("hint"), f"{item_ctx} hint")
                check_katex_syntax(item.get("formula"), f"{item_ctx} formula", check_parens=True)

                anim = item.get("animation")
                if isinstance(anim, dict):
                    anim_title = anim.get("title")
                    check_katex_syntax(anim_title, f"{item_ctx} animation.title", check_parens=True)
                    for s_idx, step in enumerate(anim.get("steps", []), 1):
                        step_ctx = f"{item_ctx} Step #{s_idx}"
                        check_katex_syntax(step.get("kicker"), f"{step_ctx} kicker", check_parens=True)
                        check_katex_syntax(step.get("text"), f"{step_ctx} text", check_parens=True)
                        check_katex_syntax(step.get("math"), f"{step_ctx} math", check_parens=True)
                        check_katex_syntax(step.get("note"), f"{step_ctx} note", check_parens=True)

                if "image" in item and item["image"]:
                    check_img(item["image"], f"Exercise #{idx}, Item #{i_idx}")
                if "images" in item and isinstance(item["images"], list):
                    for img_src in item["images"]:
                        check_img(img_src, f"Exercise #{idx}, Item #{i_idx}")
                if "hintImage" in item and item["hintImage"]:
                    check_img(item["hintImage"], f"Exercise #{idx}, Item #{i_idx} hintImage")

        return errors


def main():
    import sys
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")

    print("=" * 68)
    print("  4gnosin.github.io - Πλήρης Έλεγχος Υγείας & Ορθότητας Αρχείων")
    print("=" * 68)

    val = SiteValidator()
    site_dir = Path("site")
    exercises_dir = site_dir / "exercises"
    if not exercises_dir.exists():
        print("❌ Δεν βρέθηκε ο κατάλογος site/exercises.")
        sys.exit(1)

    total_files = 0
    total_errors = 0
    failed_files = 0

    all_files = val.collect_site_files(site_dir)

    do_fix = "--fix" in sys.argv
    if do_fix:
        print("🔧 Ενεργοποιήθηκε η λειτουργία αυτόματης επιδιόρθωσης (--fix)...")
        fixed_files = 0
        try:
            from src.utils.latex_sanitizer import sanitize_js_file
        except ImportError:
            from ..utils.latex_sanitizer import sanitize_js_file

        for js_path in all_files:
            try:
                orig = js_path.read_text(encoding="utf-8")
                new_t = re.sub(r'_#(?=\d+)', '_', orig)
                new_t = SiteValidator.strip_trailing_commas(new_t)
                if new_t != orig:
                    js_path.write_text(new_t, encoding="utf-8")
                    fixed_files += 1

                # Βαθύς καθαρισμός LaTeX, κυριλλικών και μαθηματικών
                if sanitize_js_file(js_path):
                    fixed_files += 1
            except Exception as e:
                print(f"   ⚠️ Σφάλμα επιδιόρθωσης στο {js_path.name}: {e}")
        if fixed_files > 0:
            print(f"✅ Επιδιορθώθηκαν αυτόματα {fixed_files} αρχεία.\n")

    for js_path in all_files:
        total_files += 1
        errs = val.validate_file(js_path)

        if errs:
            failed_files += 1
            total_errors += len(errs)
            print(f"❌ {js_path.relative_to(Path('.'))}: {len(errs)} σφάλματα")
            for e in errs[:3]:
                print(f"   • {e}")
            if len(errs) > 3:
                print(f"   ... και άλλα {len(errs) - 3} σφάλματα")

    print("-" * 68)
    if total_errors == 0:
        print(f"✅ Όλα τα {total_files} αρχεία JavaScript είναι 100% έγκυρα!")
        sys.exit(0)
    else:
        print(f"❌ Βρέθηκαν {total_errors} σφάλματα σε {failed_files} από {total_files} αρχεία.")
        print("=" * 68)
        sys.exit(1)


if __name__ == "__main__":
    main()
