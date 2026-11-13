"""
scripts/build_scripts_catalog.py
================================
Συμβατό wrapper script: καλεί το build_bundles.py για παραγωγή των bundles
και ενημέρωση του scripts_catalog.js.
"""

from __future__ import annotations
import sys
from pathlib import Path

# Εισαγωγή και εκτέλεση του build_bundles (υποστηρίζει και import από root και άμεση εκτέλεση)
try:
    from scripts.build_bundles import build_bundles
except ImportError:
    from build_bundles import build_bundles


def build_catalog(use_raw: bool = False, site_dir: Path | str | None = None) -> None:
    """Wrapper συμβατότητας που αναθέτει την κατασκευή στο build_bundles()."""
    build_bundles(use_raw=use_raw, site_dir=site_dir)


if __name__ == "__main__":
    use_raw = "--raw" in sys.argv
    build_bundles(use_raw=use_raw)
