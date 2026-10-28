"""
SiteValidator - Επικύρωση αρχείων JavaScript για το 4gnosin.github.io
Ελέγχει αν τα αρχεία τηρούν τα schemas window.SECTIONS, window.GROUPS και window.EXERCISES.
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any


class SiteValidator:
    """
    Επικυρωτής δομών δεδομένων για το 4gnosin.github.io.
    """

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
                        fixed = re.sub(r",\s*([\]}])", r"\1", argument)
                        try:
                            parsed = json.loads(fixed.strip())
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
        if "window.SECTIONS" not in content:
            errors.append("Δεν βρέθηκε αναφορά στο 'window.SECTIONS'.")

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
                elif b_type not in ("p", "callout", "formula", "h", "ul", "table", "diagram"):
                    errors.append(
                        f"Section #{idx}, Block #{b_idx}: Μη έγκυρος τύπος block '{b_type}'."
                    )
                elif b_type == "callout" and block.get("kind") not in ("def", "example", "remember", "tip"):
                    errors.append(
                        f"Section #{idx}, Block #{b_idx}: Μη έγκυρο callout kind '{block.get('kind')}'."
                    )

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
            r"window\.SUBJECT_DATA\.[A-Za-z_$][\w$]*\.groups\b", content
        ):
            return ["Δεν βρέθηκε αναφορά στο 'window.GROUPS'."]

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
            r"window\.SUBJECT_DATA\.[A-Za-z_$][\w$]*\.exercises\b", content
        ):
            return ["Δεν βρέθηκε αναφορά στο 'window.EXERCISES'."]

        exercises = cls.extract_json_from_js(content)
        if not exercises:
            return ["Δεν ήταν δυνατή η εξαγωγή ασκήσεων από το αρχείο."]

        errors: list[str] = []
        for idx, ex in enumerate(exercises, 1):
            for field in ("id", "group", "kind", "title", "units", "items"):
                if field not in ex:
                    errors.append(f"Exercise #{idx} (id: {ex.get('id', 'άγνωστο')}): Λείπει το '{field}'.")

            kind = ex.get("kind")
            if kind not in ("mc", "tf", "match", "blank", "calc"):
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
                if item_kind not in ("mc", "tf", "match", "blank", "calc"):
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

        return errors
