"""
Κοινοί κανόνες σειράς, μεταδεδομένων και τυπογραφίας για το content pipeline.
"""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

CHAPTER_DIR_RE = re.compile(r"chapter[_-]?(\d+)", re.IGNORECASE)
KIND_GROUP_IDS = frozenset({"tf", "mc", "match", "blank", "calc", "units", "types", "safety"})
BANK_CODE_RE = re.compile(r"#\s*(\d+)")
ORDINAL_RE = re.compile(
    r"(Θέμα\s+)(\d{1,2})(?:<sup>\s*[οo°]\s*</sup>|[οo°])",
    re.IGNORECASE,
)


def load_structure_rules(prompts_dir: Path) -> str:
    rules_file = Path(prompts_dir) / "site_structure_rules.md"
    if not rules_file.is_file():
        return ""
    return rules_file.read_text(encoding="utf-8").strip()


def with_structure_rules(base_prompt: str, prompts_dir: Path) -> str:
    rules = load_structure_rules(prompts_dir)
    if not rules:
        return base_prompt
    return f"{base_prompt.rstrip()}\n\n{rules}\n"


def format_greek_ordinals(text: str) -> str:
    """Αποδίδει το 'ο' των 'Θέμα 2ο' ως HTML ανώτερο δείκτη."""
    return ORDINAL_RE.sub(lambda match: f"{match.group(1)}{match.group(2)}<sup>ο</sup>", text)


def apply_greek_ordinals(value: Any) -> Any:
    if isinstance(value, str):
        return format_greek_ordinals(value)
    if isinstance(value, list):
        return [apply_greek_ordinals(item) for item in value]
    if isinstance(value, dict):
        return {key: apply_greek_ordinals(item) for key, item in value.items()}
    return value


def chapter_number_from_path(path: Path | str) -> int:
    target = Path(path)
    for part in (*target.parts, target.stem):
        match = CHAPTER_DIR_RE.search(part)
        if match:
            return int(match.group(1))
    return 10**9


def chapter_stem_sort_key(stem: str) -> tuple[int, str]:
    match = CHAPTER_DIR_RE.search(stem) or re.search(r"(\d+)", stem)
    number = int(match.group(1)) if match else 10**9
    return (number, stem.lower())


def subsection_sort_key(group: dict[str, Any]) -> tuple[Any, ...]:
    blob = f"{group.get('title', '')} {group.get('id', '')}"
    numbers = tuple(int(part) for part in re.findall(r"\d+", blob))
    return (numbers or (10**9,), str(group.get("title", "")).lower())


def bank_code_value(exercise: dict[str, Any]) -> int:
    raw = str(exercise.get("bankCode") or "")
    match = re.search(r"(\d+)", raw) if raw else BANK_CODE_RE.search(str(exercise.get("code") or ""))
    if match:
        return int(match.group(1))
    return 10**9


def sort_theory_files(paths: list[Path]) -> list[Path]:
    return sorted(paths, key=lambda path: (chapter_number_from_path(path), path.name.lower()))


def sort_exercise_files(paths: list[Path]) -> list[Path]:
    def key(path: Path) -> tuple[int, int, str]:
        name_rank = 0 if path.name.lower() == "groups.js" else 1
        return (chapter_number_from_path(path), name_rank, path.name.lower())

    return sorted(paths, key=key)


def extract_bank_code(exercise: dict[str, Any]) -> str | None:
    raw = str(exercise.get("bankCode") or "").strip().lstrip("#")
    if raw.isdigit():
        return raw
    match = BANK_CODE_RE.search(str(exercise.get("code") or ""))
    if match:
        return match.group(1)
    match = BANK_CODE_RE.search(str(exercise.get("title") or ""))
    if match:
        return match.group(1)
    return None


# ---------------------------------------------------------------------------
# Ονόματα αρχείων εισόδου (PDF / MD) → τάξη, μάθημα, κεφάλαιο
# Μορφή:  {grade}_{subject}_ch{NN}.pdf
# Παράδειγμα: b_thermod_ch05.pdf  |  c_antoxi_ch01.md
# ---------------------------------------------------------------------------

# Κλειδί = όνομα φακέλου στο site (content/b/<subject>/)
# Τιμή = id στο catalog.js / route app.js
SUBJECT_CATALOG_IDS: dict[str, str] = {
    "thermod": "thermo",
    "thermo": "thermo",
    "thermo-lab": "thermo-lab",
    "antoxi": "antoxi",
    "stoixeia-michanon": "stoixeia-michanon",
    "stoixeia-psyxis-klimatismou": "stoixeia-psyxis-klimatismou",
    "egkatastaseis-klimatismou": "egkatastaseis-klimatismou",
    "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou": (
        "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"
    ),
    "michanes-esoterikis-kafsis-2": "michanes-esoterikis-kafsis-2",
    "systimata-aftokinitou": "systimata-aftokinitou",
    "texnologia-elegxou-diagnoseon": "texnologia-elegxou-diagnoseon",
}

# Συνώνυμα / συντομογραφίες → κανονικό όνομα φακέλου subject
SUBJECT_ALIASES: dict[str, str] = {
    "thermo": "thermod",
    "thermod": "thermod",
    "thermodynamics": "thermod",
    "thermotynamiki": "thermod",
    "thermo-lab": "thermo-lab",
    "thermolab": "thermo-lab",
    "antoxi": "antoxi",
    "antoxh": "antoxi",
    "stoixeia-michanon": "stoixeia-michanon",
    "stoixeia": "stoixeia-michanon",
    "michanes": "stoixeia-michanon",
    "stoixeia-psyxis-klimatismou": "stoixeia-psyxis-klimatismou",
    "psyxi": "stoixeia-psyxis-klimatismou",
    "psixi": "stoixeia-psyxis-klimatismou",
    "egkatastaseis-klimatismou": "egkatastaseis-klimatismou",
    "klimatismos": "egkatastaseis-klimatismou",
    "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou": (
        "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"
    ),
    "elegxos": "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou",
    "michanes-esoterikis-kafsis-2": "michanes-esoterikis-kafsis-2",
    "mek": "michanes-esoterikis-kafsis-2",
    "mek2": "michanes-esoterikis-kafsis-2",
    "systimata-aftokinitou": "systimata-aftokinitou",
    "aftokinito": "systimata-aftokinitou",
    "texnologia-elegxou-diagnoseon": "texnologia-elegxou-diagnoseon",
    "diagnoseis": "texnologia-elegxou-diagnoseon",
}

# grade_subject_chNN  ή  grade-subject-chapter-NN  (+ προαιρετικό υπόλοιπο τίτλου)
NAMED_FILE_RE = re.compile(
    r"^(?P<grade>[bc])[_-]"
    r"(?P<subject>[a-z0-9]+(?:-[a-z0-9]+)*)[_-]"
    r"(?:ch(?:apter)?)[_-]?(?P<chapter>\d{1,2})"
    r"(?:[_-].*)?$",
    re.IGNORECASE,
)


def normalize_subject(raw: str) -> str:
    """Κανονικοποιεί συνώνυμο/alias σε όνομα φακέλου site."""
    key = raw.strip().lower().replace("_", "-")
    if key in SUBJECT_ALIASES:
        return SUBJECT_ALIASES[key]
    if key in SUBJECT_CATALOG_IDS:
        return key
    raise ValueError(
        f"Άγνωστο μάθημα '{raw}'. Επιτρεπόμενα: {', '.join(sorted(SUBJECT_CATALOG_IDS))}."
    )


def catalog_id_for_subject(subject: str) -> str:
    subject = normalize_subject(subject)
    return SUBJECT_CATALOG_IDS.get(subject, subject)


def parse_named_chapter_file(path: Path | str) -> tuple[str, str, int]:
    """
    Διαβάζει τάξη, μάθημα και κεφάλαιο από το όνομα αρχείου.

    Αποδεκτά παραδείγματα:
      b_thermod_ch05.pdf
      b-thermod-chapter-05.md
      c_antoxi_ch01_dynameis.pdf
    """
    target = Path(path)
    match = NAMED_FILE_RE.match(target.stem)
    if not match:
        raise ValueError(
            f"Το όνομα '{target.name}' δεν ακολουθεί τη μορφή "
            "{grade}_{subject}_ch{NN}.pdf  (π.χ. b_thermod_ch05.pdf)."
        )
    grade = match.group("grade").lower()
    subject = normalize_subject(match.group("subject"))
    chapter = int(match.group("chapter"))
    return grade, subject, chapter


def standard_chapter_stem(grade: str, subject: str, chapter: int) -> str:
    """Κανονικό stem αρχείου: b_thermod_ch05"""
    return f"{grade.lower()}_{normalize_subject(subject)}_ch{int(chapter):02d}"
