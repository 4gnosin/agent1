"""
tests/test_repo_sync.py
Ελαφρά tests συγχρονισμού ανάμεσα στον κώδικα (catalog.js, src/cli.py,
calc_animator.py, SiteValidator) και την τεκμηρίωση (READMEs, docs/*.md, docs/en/*.md).
"""

from __future__ import annotations

import ast
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

DOC_PATHS = [
    "README.md",
    "README.en.md",
    "site/README.md",
    "docs/architecture.md",
    "docs/en/architecture.md",
    "docs/schemas.md",
    "docs/en/schemas.md",
    "docs/animations.md",
    "docs/en/animations.md",
    "docs/pipelines.md",
    "docs/en/pipelines.md",
    "docs/rules.md",
    "docs/en/rules.md",
]

EMOJI_RE = re.compile(r"[\U0001F300-\U0001FAFF\u2600-\u27BF\u2300-\u23FF\u2B00-\u2BFF\u25A0-\u25FF]")
MD_LINK_RE = re.compile(r"\[[^\]]+\]\(([^)]+)\)")


def _load_catalog_subjects() -> list[str]:
    raw = (ROOT / "site" / "content" / "catalog.js").read_text(encoding="utf-8")
    no_comments = "\n".join(line for line in raw.splitlines() if not line.lstrip().startswith("//"))
    _, json_part = no_comments.split("=", 1)
    catalog = json.loads(json_part.strip().rstrip(";"))
    return [subj["id"] for grade in catalog for subj in grade.get("subjects", [])]


def _extract_cli_subcommands() -> list[str]:
    tree = ast.parse((ROOT / "src" / "cli.py").read_text(encoding="utf-8"))
    commands: list[str] = []
    for node in ast.walk(tree):
        if (
            isinstance(node, ast.Call)
            and isinstance(node.func, ast.Attribute)
            and node.func.attr == "add_parser"
            and node.args
            and isinstance(node.args[0], ast.Constant)
            and isinstance(node.args[0].value, str)
        ):
            commands.append(node.args[0].value)
    return commands


def _extract_calc_animator_cli() -> tuple[list[str], list[str]]:
    tree = ast.parse((ROOT / "src" / "tools" / "calc_animator.py").read_text(encoding="utf-8"))
    flags: list[str] = []
    modes: list[str] = []
    for node in tree.body:
        if isinstance(node, ast.FunctionDef) and node.name == "main":
            for child in ast.walk(node):
                if (
                    isinstance(child, ast.Call)
                    and isinstance(child.func, ast.Attribute)
                    and child.func.attr == "add_argument"
                ):
                    for arg in child.args:
                        if isinstance(arg, ast.Constant) and isinstance(arg.value, str) and arg.value.startswith("--"):
                            flags.append(arg.value)
                    for kw in child.keywords:
                        if kw.arg == "choices" and isinstance(kw.value, ast.List):
                            modes.extend(
                                elt.value
                                for elt in kw.value.elts
                                if isinstance(elt, ast.Constant) and isinstance(elt.value, str)
                            )
    return flags, modes


def _extract_section_block_and_callout_types() -> tuple[tuple[str, ...], tuple[str, ...]]:
    tree = ast.parse((ROOT / "src" / "validators" / "site_validator.py").read_text(encoding="utf-8"))
    block_types: tuple[str, ...] = ()
    callout_kinds: tuple[str, ...] = ()
    for node in ast.walk(tree):
        if isinstance(node, ast.FunctionDef) and node.name == "validate_section_file":
            for child in ast.walk(node):
                if (
                    isinstance(child, ast.Compare)
                    and len(child.ops) == 1
                    and isinstance(child.ops[0], ast.NotIn)
                    and isinstance(child.comparators[0], ast.Tuple)
                ):
                    vals = tuple(
                        elt.value
                        for elt in child.comparators[0].elts
                        if isinstance(elt, ast.Constant) and isinstance(elt.value, str)
                    )
                    if isinstance(child.left, ast.Name) and child.left.id == "b_type":
                        block_types = vals
                    elif isinstance(child.left, ast.Call):
                        callout_kinds = vals
    return block_types, callout_kinds


def test_docs_utf8_no_bom_no_decorative_emojis_and_valid_links():
    for rel in DOC_PATHS:
        doc_path = ROOT / rel
        assert doc_path.is_file(), f"Λείπει αρχείο τεκμηρίωσης: {rel}"

        raw = doc_path.read_bytes()
        assert not raw.startswith(b"\xef\xbb\xbf"), f"Εντοπίστηκε UTF-8 BOM στο {rel}"
        text = raw.decode("utf-8")

        bad_symbols = sorted(set(EMOJI_RE.findall(text)))
        assert not bad_symbols, f"Βρέθηκαν διακοσμητικά σύμβολα/emojis στο {rel}: {bad_symbols}"

        for match in MD_LINK_RE.finditer(text):
            target = match.group(1).strip()
            if target.startswith(("#", "http://", "https://", "mailto:", "file://")):
                continue
            path_part = target.split("#", 1)[0].strip()
            if not path_part:
                continue
            resolved = (doc_path.parent / path_part).resolve()
            assert resolved.exists(), f"Σπασμένος σύνδεσμος στο {rel}: {target} -> {resolved}"


def test_catalog_subjects_synced_with_readmes():
    subject_ids = _load_catalog_subjects()
    assert len(subject_ids) >= 14

    for rel in ("README.md", "README.en.md"):
        text = (ROOT / rel).read_text(encoding="utf-8")
        missing = [sid for sid in subject_ids if f"`{sid}`" not in text]
        assert not missing, f"Το {rel} δεν αναφέρει τα μαθήματα από catalog.js: {missing}"


def test_cli_subcommands_synced_with_pipeline_docs():
    commands = _extract_cli_subcommands()
    assert len(commands) >= 12

    for rel in ("docs/pipelines.md", "docs/en/pipelines.md"):
        text = (ROOT / rel).read_text(encoding="utf-8")
        missing = [cmd for cmd in commands if f"`{cmd}`" not in text]
        assert not missing, f"Το {rel} δεν τεκμηριώνει τις υποεντολές CLI: {missing}"


def test_calc_animator_cli_synced_with_animation_docs():
    flags, modes = _extract_calc_animator_cli()
    assert "--scan" in flags and "--mode" in flags
    assert "hybrid" in modes

    for rel in ("docs/animations.md", "docs/en/animations.md"):
        text = (ROOT / rel).read_text(encoding="utf-8")
        missing_flags = [f for f in flags if f not in text]
        missing_modes = [m for m in modes if f"`{m}`" not in text]
        assert not missing_flags, f"Το {rel} λείπουν σημαίες calc_animator: {missing_flags}"
        assert not missing_modes, f"Το {rel} λείπουν modes calc_animator: {missing_modes}"


def test_theory_blocks_and_callouts_synced_with_schema_docs():
    block_types, callout_kinds = _extract_section_block_and_callout_types()
    assert len(block_types) == 8
    assert len(callout_kinds) == 5

    for rel in ("docs/schemas.md", "docs/en/schemas.md"):
        text = (ROOT / rel).read_text(encoding="utf-8")
        missing_blocks = [bt for bt in block_types if f'"{bt}"' not in text]
        missing_callouts = [ck for ck in callout_kinds if f'"{ck}"' not in text]
        assert not missing_blocks, f"Το {rel} λείπουν block types θεωρίας: {missing_blocks}"
        assert not missing_callouts, f"Το {rel} λείπουν callout kinds: {missing_callouts}"
