#!/usr/bin/env python3
"""
craft_image_extractor.py — Module εξαγωγής και βελτιστοποίησης εικόνων
από PDF Τράπεζας Θεμάτων για το pipeline του epal-mech-agent με χρήση ArtCraft.
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Any

# Διαδρομές εγκατεστημένων CLI εργαλείων ArtCraft
PDFCRAFT_CLI = Path(r"C:\Program Files\ArtCraft\PdfCraft\pdfcraft-cli.exe")
PHOTOCRAFT_CLI = Path(r"C:\Program Files\ArtCraft\PhotoCraft\photocraft-cli.exe")
VECTORCRAFT_CLI = Path(r"C:\Program Files\ArtCraft\VectorCraft\vectorcraft-cli.exe")

HEADER_CODE_RE = re.compile(r"(?:Θέμα|Λύση|Λυση)\s*#\s*(\d{4,6})", re.IGNORECASE)
ANY_CODE_RE = re.compile(r"#\s*(\d{4,6})")
SOLUTION_MARK_RE = re.compile(r"ΕΝΔΕΙΚΤΙΚΕΣ\s+ΑΠΑΝΤΗΣΕΙΣ|Λύση\s*#|Λυση\s*#", re.IGNORECASE)
FIGURE_RE = re.compile(
    r"\bσχημα(?:τα)?\b|\bσχ\.\s*\d|\bδιαγραμμα(?:τα)?\b|\bσχεδιο\b|\beικονα\b|\bεικονα\b|\bfig(?:ure)?\b",
    re.IGNORECASE,
)


def normalize_text(text: str) -> str:
    decomposed = unicodedata.normalize("NFD", text)
    stripped = "".join(c for c in decomposed if unicodedata.category(c) != "Mn")
    return stripped.lower()


def get_pdf_info(pdf_path: Path) -> dict[str, Any]:
    cmd = [str(PDFCRAFT_CLI), "info", str(pdf_path)]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return json.loads(res.stdout)


def get_pdf_page_text(pdf_path: Path, page_num: int) -> str:
    cmd = [str(PDFCRAFT_CLI), "text", str(pdf_path), "--page", str(page_num)]
    res = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return res.stdout or ""


def render_page_with_craft(pdf_path: Path, page_num: int, out_png: Path, dpi: int = 200) -> bool:
    cmd = [
        str(PDFCRAFT_CLI),
        "render",
        str(pdf_path),
        "--page",
        str(page_num),
        "--dpi",
        str(dpi),
        "--out",
        str(out_png),
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return res.returncode == 0 and out_png.is_file()


def convert_image_with_photocraft(in_img: Path, out_img: Path) -> bool:
    cmd = [str(PHOTOCRAFT_CLI), "convert", str(in_img), str(out_img)]
    res = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return res.returncode == 0 and out_img.is_file()


def extract_chapter_images_craft(
    pdf_path: Path,
    site_dir: Path,
    grade: str,
    subject: str,
    chapter: int,
    *,
    dpi: int = 200,
    format: str = "webp",
    vector: bool = False,
    all_pages: bool = False,
    verbose: bool = False,
) -> Path:
    """
    Εξάγει εικόνες απευθείας στο site/images/{grade}/{subject}/chapter-NN/
    χρησιμοποιώντας τη σουίτα ArtCraft (PdfCraft + PhotoCraft).
    Επιστρέφει το path του παραγόμενου manifest.json.
    """
    if not PDFCRAFT_CLI.is_file() or not PHOTOCRAFT_CLI.is_file():
        raise RuntimeError("Τα εργαλεία PdfCraft/PhotoCraft δεν βρέθηκαν στο C:\\Program Files\\ArtCraft.")

    out_dir = site_dir / "images" / grade / subject / f"chapter-{int(chapter):02d}"
    out_dir.mkdir(parents=True, exist_ok=True)

    info = get_pdf_info(pdf_path)
    total_pages = info.get("pages", 1)

    stem = f"{grade}_{subject}_ch{int(chapter):02d}"
    target_format = format.lower().replace(".", "")
    counters: dict[tuple[str, str], int] = defaultdict(int)
    stats: dict[str, int] = defaultdict(int)
    manifest_entries: list[dict[str, Any]] = []

    last_code: str | None = None
    last_role: str = "fig"

    temp_render_dir = out_dir / ".craft_tmp"
    temp_render_dir.mkdir(parents=True, exist_ok=True)

    print(f"   [Craft] Έναρξη επεξεργασίας PDF: {pdf_path.name} ({total_pages} σελίδες)")

    for page_num in range(1, total_pages + 1):
        text = get_pdf_page_text(pdf_path, page_num)
        norm_text = normalize_text(text)

        is_sol = bool(SOLUTION_MARK_RE.search(text))
        role = "sol" if is_sol else "fig"

        code = None
        m = HEADER_CODE_RE.search(text)
        if m:
            code = m.group(1)
        else:
            codes = ANY_CODE_RE.findall(text)
            if codes:
                code = codes[-1] if is_sol else codes[0]

        inherited = False
        if code:
            last_code = code
            last_role = role
        else:
            code = last_code
            role = last_role
            inherited = code is not None

        has_figure = bool(FIGURE_RE.search(norm_text)) or all_pages

        if not has_figure:
            stats["skipped_no_figure"] += 1
            continue

        if not code:
            counters[("unknown", role)] += 1
            n = counters[("unknown", role)]
            base_name = f"{stem}_page{page_num:02d}_{role}{n:02d}"
        else:
            counters[(code, role)] += 1
            n = counters[(code, role)]
            base_name = f"{stem}_{code}_{role}{n:02d}"

        temp_png = temp_render_dir / f"p{page_num}.png"
        ok_render = render_page_with_craft(pdf_path, page_num, temp_png, dpi=dpi)
        if not ok_render:
            stats["render_error"] += 1
            continue

        final_file = out_dir / f"{base_name}.{target_format}"
        if target_format == "png":
            temp_png.replace(final_file)
            ok_conv = True
        else:
            ok_conv = convert_image_with_photocraft(temp_png, final_file)
            temp_png.unlink(missing_ok=True)

        if ok_conv:
            file_size_kb = final_file.stat().st_size / 1024
            stats["rendered"] += 1
            entry = {
                "file": final_file.name,
                "bank_code": code,
                "role": role,
                "page": page_num,
                "engine": "PdfCraft + PhotoCraft",
                "kind": f"render_{target_format}",
                "dpi": dpi,
                "size_kb": round(file_size_kb, 1),
                "bank_code_inherited": inherited,
            }
            manifest_entries.append(entry)
            print(f"      [Craft] σελ. {page_num:>2}: #{code or '—'} -> {final_file.name} ({file_size_kb:.1f} KB)")
        else:
            stats["conv_error"] += 1

    try:
        temp_render_dir.rmdir()
    except Exception:
        pass

    manifest = {
        "source_pdf": pdf_path.name,
        "engine": "ArtCraft Suite",
        "grade": grade,
        "subject": subject,
        "chapter": chapter,
        "stem": stem,
        "total_pages": total_pages,
        "params": {
            "dpi": dpi,
            "format": target_format,
        },
        "stats": dict(stats),
        "images": manifest_entries,
    }
    manifest_path = out_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    return manifest_path
