"""
4gnosin.py - 4gnosin Control Center (Unified Entry Point)
=========================================================
Κεντρικό σημείο εκκίνησης για το 4gnosin Control Center.
"""

from __future__ import annotations

import sys
from pathlib import Path

CURRENT_DIR = Path(__file__).resolve().parent
BASE_DIR = CURRENT_DIR.parent if CURRENT_DIR.name == "scripts" else CURRENT_DIR

if str(CURRENT_DIR) not in sys.path:
    sys.path.insert(0, str(CURRENT_DIR))
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

import menu

if __name__ == "__main__":
    menu.main()
