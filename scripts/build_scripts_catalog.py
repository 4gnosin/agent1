"""
scripts/build_scripts_catalog.py
================================
Συμβατό wrapper script: καλεί το build_bundles.py για παραγωγή των bundles
και ενημέρωση του scripts_catalog.js.
"""

from __future__ import annotations
import sys
from pathlib import Path

# Εισαγωγή και εκτέλεση του build_bundles
from build_bundles import build_bundles

if __name__ == "__main__":
    use_raw = "--raw" in sys.argv
    build_bundles(use_raw=use_raw)
