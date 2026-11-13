"""
tests/test_site_validator_animations.py
Unit tests για τον έλεγχο των site/animations/ μέσω SiteValidator και cli validate.
"""

from __future__ import annotations

import json
from argparse import Namespace
from pathlib import Path

import pytest

from src.cli import validate_command
from src.validators.site_validator import main as validator_main
from src.validators.site_validator import SiteValidator


def _valid_animation_js(math_expr: str = r"d = \sqrt{\frac{4 \cdot Q}{\pi}}") -> str:
    payload = {
        "α": {
            "title": "Υπολογισμός ($d$)",
            "steps": [
                {
                    "kicker": "Βήμα 1 (Δεδομένα)",
                    "text": r"Εφαρμόζουμε τη σχέση για $\Delta U$.",
                    "math": math_expr,
                    "note": "Προσοχή στις μονάδες.",
                    "highlight": True,
                }
            ],
        }
    }
    return (
        "window.EXERCISE_ANIMATIONS = window.EXERCISE_ANIMATIONS || {};\n"
        f'window.EXERCISE_ANIMATIONS["ch14-99999"] = {json.dumps(payload, ensure_ascii=False, indent=2)};\n'
    )


def _create_site_with_animation(root: Path, anim_filename: str, anim_content: str) -> Path:
    site_dir = root / "site"
    (site_dir / "exercises" / "c" / "stoixeia-michanon" / "chapter-14").mkdir(parents=True, exist_ok=True)
    (site_dir / "content" / "c" / "stoixeia-michanon" / "chapter-14").mkdir(parents=True, exist_ok=True)
    (site_dir / "animations" / "c" / "stoixeia-michanon").mkdir(parents=True, exist_ok=True)
    (site_dir / "bundles").mkdir(parents=True, exist_ok=True)

    (site_dir / "content" / "catalog.js").write_text("window.CATALOG = [];\n", encoding="utf-8")
    (site_dir / "bundles" / "stoixeia-michanon.bundle.js").write_text("// bundle\n", encoding="utf-8")

    (site_dir / "exercises" / "c" / "stoixeia-michanon" / "chapter-14" / "ch14-01-test.js").write_text(
        """window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].exercises.push({
  "id": "ch14-99999",
  "group": "g1",
  "kind": "calc",
  "title": "#99999 — Θέμα 4<sup>ο</sup>",
  "units": 25,
  "items": [{ "kind": "calc", "subq": "α", "answer": 10, "unit": "mm", "explain": "Οκ." }]
});
""",
        encoding="utf-8",
    )
    (site_dir / "content" / "c" / "stoixeia-michanon" / "chapter-14" / "01-intro.js").write_text(
        """window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].sections.push({
  "slug": "intro",
  "num": "14.1",
  "title": "Εισαγωγή",
  "blocks": [{ "type": "p", "text": "Κείμενο." }]
});
""",
        encoding="utf-8",
    )
    (site_dir / "animations" / "c" / "stoixeia-michanon" / anim_filename).write_text(
        anim_content,
        encoding="utf-8",
    )
    return site_dir


def test_collect_site_files_and_zero_prefixed_animation_classification(tmp_path: Path):
    site_dir = _create_site_with_animation(tmp_path, "01-leading-zero-anim.js", _valid_animation_js())

    collected = SiteValidator.collect_site_files(site_dir)
    names = [p.name for p in collected]

    assert "01-leading-zero-anim.js" in names
    assert "ch14-01-test.js" in names
    assert "01-intro.js" in names
    assert "catalog.js" not in names
    assert "stoixeia-michanon.bundle.js" not in names

    anim_file = site_dir / "animations" / "c" / "stoixeia-michanon" / "01-leading-zero-anim.js"
    assert SiteValidator.validate_file(anim_file) == []


def test_validate_animation_code_catches_katex_errors():
    bad_triangle = _valid_animation_js(math_expr=r"\triangle x = 5")
    errs_tri = SiteValidator.validate_animation_code(bad_triangle, "bad_tri.js")
    assert any(r"\triangle" in e for e in errs_tri)

    unbalanced_math = _valid_animation_js(math_expr=r"(a + b = c")
    errs_parens = SiteValidator.validate_animation_code(unbalanced_math, "bad_parens.js")
    assert any("παρενθέσεις" in e for e in errs_parens)


def test_cli_validate_and_site_validator_main_both_scan_animations(tmp_path: Path, monkeypatch):
    bad_anim = _valid_animation_js(math_expr=r"\triangle U = 10")
    site_dir = _create_site_with_animation(tmp_path, "01-broken.js", bad_anim)

    with pytest.raises(SystemExit) as cli_exc:
        validate_command(Namespace(path=str(site_dir), fix=False))
    assert cli_exc.value.code == 1

    monkeypatch.chdir(tmp_path)
    monkeypatch.setattr("sys.argv", ["site_validator.py"])
    with pytest.raises(SystemExit) as mod_exc:
        validator_main()
    assert mod_exc.value.code == 1

    # Αποκατάσταση με έγκυρο animation -> και τα δύο entrypoints περνούν με έξοδο 0
    (site_dir / "animations" / "c" / "stoixeia-michanon" / "01-broken.js").write_text(
        _valid_animation_js(),
        encoding="utf-8",
    )
    validate_command(Namespace(path=str(site_dir), fix=False))
    with pytest.raises(SystemExit) as mod_ok_exc:
        validator_main()
    assert mod_ok_exc.value.code == 0
