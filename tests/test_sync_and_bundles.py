"""
tests/test_sync_and_bundles.py
Ελέγχει τον συγχρονισμό index/catalog/bundles μέσω sync_site_index και scripts/build_bundles.py.
"""

from __future__ import annotations

from pathlib import Path

import pytest

from scripts.build_bundles import build_bundles
from scripts.build_scripts_catalog import build_bundles as compat_build_bundles
from scripts.build_scripts_catalog import build_catalog
from src.cli import sync_site_index


def _create_minimal_site(root: Path, include_thermod_exercises: bool = True) -> Path:
    site_dir = root / "site"
    (site_dir / "js").mkdir(parents=True, exist_ok=True)
    (site_dir / "content" / "b" / "thermod" / "chapter-01").mkdir(parents=True, exist_ok=True)

    (site_dir / "index.html").write_text("<!doctype html><html><body></body></html>\n", encoding="utf-8")
    (site_dir / "index_full.html").write_text(
        '<!doctype html>\n<html>\n<body>\n  <script src="js/app.js"></script>\n</body>\n</html>\n',
        encoding="utf-8",
    )
    (site_dir / "js" / "app.js").write_text(
        'const SUBJECTS = {\n  "thermo": { name: "Θερμοδυναμική" },\n  "antoxi": { name: "Αντοχή Υλικών" }\n};\n',
        encoding="utf-8",
    )
    (site_dir / "content" / "catalog.js").write_text(
        """window.CATALOG = [
  {
    "id": "thermo",
    "status": "soon"
  },
  {
    "id": "antoxi",
    "status": "soon"
  }
];
""",
        encoding="utf-8",
    )

    (site_dir / "content" / "b" / "thermod" / "chapter-01" / "01-genika.js").write_text(
        """window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["thermo"] = window.SUBJECT_DATA["thermo"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["thermo"].sections.push({
  "slug": "genika",
  "num": "1.1",
  "title": "Γενικά",
  "blocks": [{ "type": "p", "text": "Εισαγωγή." }]
});
""",
        encoding="utf-8",
    )

    if include_thermod_exercises:
        (site_dir / "exercises" / "b" / "thermod" / "chapter-01").mkdir(parents=True, exist_ok=True)
        (site_dir / "exercises" / "b" / "thermod" / "chapter-01" / "ch01-01-test.js").write_text(
            """window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["thermo"] = window.SUBJECT_DATA["thermo"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["thermo"].exercises.push({
  "id": "ch01-10001",
  "group": "g1",
  "kind": "tf",
  "layout": "unified",
  "code": "Θέμα 2<sup>ο</sup> · #10001",
  "bankCode": "10001",
  "title": "#10001 — Θέμα 2<sup>ο</sup>",
  "units": 25,
  "theory": "genika",
  "items": [{ "kind": "tf", "prompt": "Σωστό;", "answer": true }]
});
""",
            encoding="utf-8",
        )
        (site_dir / "animations" / "b" / "thermod").mkdir(parents=True, exist_ok=True)
        (site_dir / "animations" / "b" / "thermod" / "ch01-10001.js").write_text(
            'window.EXERCISE_ANIMATIONS = window.EXERCISE_ANIMATIONS || {};\nwindow.EXERCISE_ANIMATIONS["ch01-10001"] = { "default": { "title": "T", "steps": [{ "text": "x", "math": "y=1" }] } };\n',
            encoding="utf-8",
        )

    return site_dir


def test_build_scripts_catalog_imports_and_wrapper(tmp_path: Path):
    assert compat_build_bundles is build_bundles
    site_dir = _create_minimal_site(tmp_path)

    build_catalog(site_dir=site_dir)

    bundle = site_dir / "bundles" / "thermo.bundle.js"
    catalog_scripts = site_dir / "content" / "scripts_catalog.js"
    assert bundle.is_file()
    assert catalog_scripts.is_file()

    bundle_text = bundle.read_text(encoding="utf-8")
    assert "content/b/thermod/chapter-01/01-genika.js" in bundle_text
    assert "exercises/b/thermod/chapter-01/ch01-01-test.js" in bundle_text
    assert "animations/b/thermod/ch01-10001.js" in bundle_text
    assert '"thermo": [\n    "bundles/thermo.bundle.js"\n  ]' in catalog_scripts.read_text(encoding="utf-8")


def test_sync_site_index_rebuilds_bundles_and_catalog(tmp_path: Path):
    site_dir = _create_minimal_site(tmp_path)

    sync_site_index(site_dir, "b", "thermo")

    bundle = site_dir / "bundles" / "thermo.bundle.js"
    scripts_catalog = site_dir / "content" / "scripts_catalog.js"
    catalog_text = (site_dir / "content" / "catalog.js").read_text(encoding="utf-8")
    index_full_text = (site_dir / "index_full.html").read_text(encoding="utf-8")

    assert bundle.is_file()
    assert "ch01-01-test.js" in bundle.read_text(encoding="utf-8")
    assert '"thermo"' in scripts_catalog.read_text(encoding="utf-8")
    assert '"status": "ready"' in catalog_text
    assert '"href": "#/thermo"' in catalog_text
    assert 'content/b/thermod/chapter-01/01-genika.js' in index_full_text
    assert 'exercises/b/thermod/chapter-01/ch01-01-test.js' in index_full_text


def test_sync_site_index_supports_theory_only_subject_and_fails_when_empty(tmp_path: Path):
    site_dir = _create_minimal_site(tmp_path, include_thermod_exercises=False)

    # Μόνο θεωρία (χωρίς φάκελο exercises/) πρέπει να συγχρονίζεται επιτυχώς
    sync_site_index(site_dir, "b", "thermo")
    assert (site_dir / "bundles" / "thermo.bundle.js").is_file()
    assert '"status": "ready"' in (site_dir / "content" / "catalog.js").read_text(encoding="utf-8")

    # Μάθημα χωρίς καθόλου φακέλους θεωρίας ή ασκήσεων πρέπει να αποτυγχάνει ρητά
    with pytest.raises(FileNotFoundError):
        sync_site_index(site_dir, "b", "antoxi")
