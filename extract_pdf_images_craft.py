#!/usr/bin/env python3
"""
extract_pdf_images_craft.py — Εξαγωγή & Βελτιστοποίηση Εικόνων από PDF Τράπεζας Θεμάτων
με αποκλειστική χρήση της σουίτας ArtCraft (PdfCraft, PhotoCraft, VectorCraft).

Χωρίς εξωτερικές εξαρτήσεις Python (0 pip install). Βασίζεται στα εγκατεστημένα CLI:
  - PdfCraft   (pdfcraft-cli.exe): επιθεώρηση, ανάκτηση κειμένου, ταχύτατο render σελίδων
  - PhotoCraft (photocraft-cli.exe): μετατροπή σε σύγχρονο WebP, βελτιστοποίηση ανάλυσης
  - VectorCraft(vectorcraft-cli.exe): απευθείας εξαγωγή διανυσματικών σχημάτων σε SVG

Ονοματοδοσία αρχείων (πλήρως συμβατή με το 4gnosin.github.io):
  {grade}_{subject}_ch{NN}_#{bankCode}_fig01.webp  (ή .png)
  {grade}_{subject}_ch{NN}_#{bankCode}_sol01.webp

Παραδείγματα χρήσης:
  python extract_pdf_images_craft.py c_klimatismos_ch02.pdf
  python extract_pdf_images_craft.py b_thermod_ch05.pdf -o site/images/b/thermod/chapter-05 --format webp
  python extract_pdf_images_craft.py document.pdf --vector  (εξαγωγή σε SVG όπου υπάρχουν διανύσματα)
"""

from __future__ import annotations

import argparse
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

# Ασφαλής ρύθμιση encoding για Windows κονσόλα
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

HEADER_CODE_RE = re.compile(r"(?:Θέμα|Λύση|Λυση)\s*#\s*(\d{4,6})", re.IGNORECASE)
ANY_CODE_RE = re.compile(r"#\s*(\d{4,6})")
SOLUTION_MARK_RE = re.compile(r"ΕΝΔΕΙΚΤΙΚΕΣ\s+ΑΠΑΝΤΗΣΕΙΣ|Λύση\s*#|Λυση\s*#", re.IGNORECASE)
FILENAME_RE = re.compile(
    r"^(?P<grade>[bc])[_-]"
    r"(?P<subject>[a-z0-9]+(?:-[a-z0-9]+)*)[_-]"
    r"ch(?:apter)?[_-]?(?P<chapter>\d{1,2})",
    re.IGNORECASE,
)
FIGURE_RE = re.compile(
    r"\bσχημα(?:τα)?\b|\bσχ\.\s*\d|\bδιαγραμμα(?:τα)?\b|\bσχεδιο\b|\beικονα\b|\bεικονα\b|\bfig(?:ure)?\b",
    re.IGNORECASE,
)


def verify_craft_tools() -> None:
    """Ελέγχει αν είναι εγκατεστημένα τα εργαλεία Craft στο σύστημα."""
    missing = []
    if not PDFCRAFT_CLI.is_file():
        missing.append(f"PdfCraft CLI: {PDFCRAFT_CLI}")
    if not PHOTOCRAFT_CLI.is_file():
        missing.append(f"PhotoCraft CLI: {PHOTOCRAFT_CLI}")
    if missing:
        print("Σφάλμα: Δεν βρέθηκαν τα απαραίτητα εκτελέσιμα ArtCraft:", file=sys.stderr)
        for m in missing:
            print(f"  - {m}", file=sys.stderr)
        print("Βεβαιωθείτε ότι η σουίτα ArtCraft είναι εγκατεστημένη στο C:\\Program Files.", file=sys.stderr)
        sys.exit(1)


def normalize_text(text: str) -> str:
    """Αφαιρεί τόνους και μετατρέπει σε πεζά για ασφαλή αναζήτηση λέξεων-κλειδιών."""
    decomposed = unicodedata.normalize("NFD", text)
    stripped = "".join(c for c in decomposed if unicodedata.category(c) != "Mn")
    return stripped.lower()


def parse_meta_from_filename(pdf: Path) -> dict[str, Any]:
    """Εξάγει βαθμίδα, μάθημα, κεφάλαιο από το όνομα αρχείου (π.χ. c_klimatismos_ch02.pdf)."""
    m = FILENAME_RE.match(pdf.stem)
    if not m:
        return {
            "grade": None,
            "subject": None,
            "chapter": None,
            "stem": pdf.stem,
        }
    grade = m.group("grade").lower()
    subject = m.group("subject").lower()
    chapter = int(m.group("chapter"))
    stem = f"{grade}_{subject}_ch{chapter:02d}"
    return {
        "grade": grade,
        "subject": subject,
        "chapter": chapter,
        "stem": stem,
    }


def default_out_dir(pdf: Path, meta: dict[str, Any]) -> Path:
    """Προεπιλεγμένος φάκελος εξόδου βάσει δομής site."""
    if meta.get("grade") and meta.get("subject") and meta.get("chapter") is not None:
        return (
            Path("data")
            / "extracted_images"
            / meta["grade"]
            / meta["subject"]
            / f"chapter-{int(meta['chapter']):02d}"
        )
    return Path("data") / "extracted_images" / meta["stem"]


def get_pdf_info(pdf_path: Path) -> dict[str, Any]:
    """Εκτελεί το pdfcraft-cli info για ανάκτηση μεταδεδομένων PDF."""
    cmd = [str(PDFCRAFT_CLI), "info", str(pdf_path)]
    res = subprocess.run(cmd, capture_output=True, text=True, check=True)
    return json.loads(res.stdout)


def get_pdf_page_text(pdf_path: Path, page_num: int) -> str:
    """Εξάγει το κείμενο συγκεκριμένης σελίδας μέσω pdfcraft-cli text."""
    cmd = [str(PDFCRAFT_CLI), "text", str(pdf_path), "--page", str(page_num)]
    res = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return res.stdout or ""


def render_page_with_craft(pdf_path: Path, page_num: int, out_png: Path, dpi: int = 200) -> bool:
    """Αποδίδει τη σελίδα σε υψηλή ανάλυση PNG μέσω του headless renderer του PdfCraft."""
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
    """Μετατρέπει/βελτιστοποιεί την εικόνα (π.χ. σε .webp) μέσω του PhotoCraft CLI."""
    cmd = [str(PHOTOCRAFT_CLI), "convert", str(in_img), str(out_img)]
    res = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return res.returncode == 0 and out_img.is_file()


def export_svg_with_vectorcraft(pdf_path: Path, page_num: int, out_svg: Path) -> bool:
    """Εξάγει διανυσματικά μονοπάτια απευθείας σε SVG μέσω VectorCraft."""
    if not VECTORCRAFT_CLI.is_file():
        return False
    cmd = [
        str(VECTORCRAFT_CLI),
        "convert",
        str(pdf_path),
        str(out_svg),
        "--range",
        str(page_num),
        "--decimals",
        "2",
        "--outline-text",
    ]
    res = subprocess.run(cmd, capture_output=True, text=True, check=False)
    return res.returncode == 0 and out_svg.is_file()


def parse_pages(spec: str | None, total: int) -> list[int]:
    """Μετατρέπει εύρος σελίδων (π.χ. '1-3,5') σε λίστα ακεραίων 1-based."""
    if not spec:
        return list(range(1, total + 1))
    selected: set[int] = set()
    for part in spec.split(","):
        part = part.strip()
        if not part:
            continue
        if "-" in part:
            a, b = part.split("-", 1)
            start, end = int(a), int(b)
        else:
            start = end = int(part)
        if start < 1 or end < start:
            raise ValueError(f"Μη έγκυρο εύρος σελίδων: '{part}'")
        selected.update(range(start, min(end, total) + 1))
    return sorted(selected)


def extract_craft(pdf_path: Path, args: argparse.Namespace) -> Path:
    verify_craft_tools()

    if not pdf_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε το αρχείο PDF: {pdf_path}")

    meta = parse_meta_from_filename(pdf_path)
    out_dir = Path(args.out) if args.out else default_out_dir(pdf_path, meta)
    out_dir.mkdir(parents=True, exist_ok=True)

    info = get_pdf_info(pdf_path)
    total_pages = info.get("pages", 1)
    pages_to_process = parse_pages(args.pages, total_pages)

    stem = meta["stem"]
    target_format = args.format.lower().replace(".", "")
    counters: dict[tuple[str, str], int] = defaultdict(int)
    stats: dict[str, int] = defaultdict(int)
    manifest_entries: list[dict[str, Any]] = []

    last_code: str | None = None
    last_role: str = "fig"

    temp_render_dir = out_dir / ".craft_tmp"
    temp_render_dir.mkdir(parents=True, exist_ok=True)

    print(f"=== Έναρξη εξαγωγής με ArtCraft: {pdf_path.name} ({total_pages} σελίδες) ===")
    print(f"Φάκελος εξόδου: {out_dir.resolve()}")
    print(f"Επιλεγμένο format: .{target_format} | Ανάλυση: {args.dpi} DPI")

    for page_num in pages_to_process:
        text = get_pdf_page_text(pdf_path, page_num)
        norm_text = normalize_text(text)

        # Αναγνώριση ρόλου (fig / sol) και κωδικού θέματος (#23849)
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

        # Έλεγχος αν η σελίδα περιέχει σχήμα ή αν έχει ζητηθεί επεξεργασία όλων
        has_figure = bool(FIGURE_RE.search(norm_text)) or args.all_pages

        if not has_figure:
            if args.verbose:
                print(f"σελ. {page_num:>3}: (κείμενο χωρίς αναφορά σε σχήμα — παράλειψη)")
            stats["skipped_no_figure"] += 1
            continue

        # Ονοματοδοσία αρχείου
        if not code:
            counters[("unknown", role)] += 1
            n = counters[("unknown", role)]
            base_name = f"{stem}_page{page_num:02d}_{role}{n:02d}"
        else:
            counters[(code, role)] += 1
            n = counters[(code, role)]
            base_name = f"{stem}_#{code}_{role}{n:02d}"

        # 1. Δοκιμή VectorCraft για καθαρό SVG (αν ζητήθηκε --vector)
        svg_created = False
        svg_file = out_dir / f"{base_name}.svg"
        if args.vector:
            svg_created = export_svg_with_vectorcraft(pdf_path, page_num, svg_file)
            if svg_created:
                stats["vector_svg"] += 1
                entry = {
                    "file": svg_file.name,
                    "bank_code": code,
                    "role": role,
                    "page": page_num,
                    "engine": "VectorCraft",
                    "kind": "vector_svg",
                    "bank_code_inherited": inherited,
                }
                manifest_entries.append(entry)
                if args.verbose:
                    print(f"σελ. {page_num:>3}: #{code or '—'} -> Εξήχθη διανυσματικό SVG: {svg_file.name}")
                continue

        # 2. Απόδοση σελίδας μέσω PdfCraft
        temp_png = temp_render_dir / f"p{page_num}.png"
        ok_render = render_page_with_craft(pdf_path, page_num, temp_png, dpi=args.dpi)
        if not ok_render:
            stats["render_error"] += 1
            print(f"Σφάλμα απόδοσης σελίδας {page_num} από το PdfCraft", file=sys.stderr)
            continue

        # 3. Μετατροπή & Βελτιστοποίηση μέσω PhotoCraft
        final_file = out_dir / f"{base_name}.{target_format}"
        if target_format == "png":
            # Απλή μετακίνηση του έτοιμου PNG
            temp_png.replace(final_file)
            ok_conv = True
        else:
            # Μετατροπή σε WebP μέσω photocraft-cli
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
                "dpi": args.dpi,
                "size_kb": round(file_size_kb, 1),
                "bank_code_inherited": inherited,
            }
            manifest_entries.append(entry)
            if args.verbose:
                print(f"σελ. {page_num:>3}: #{code or '—'} -> {final_file.name} ({file_size_kb:.1f} KB)")
        else:
            stats["conv_error"] += 1

    # Καθαρισμός προσωρινού φακέλου
    try:
        temp_render_dir.rmdir()
    except Exception:
        pass

    # Εγγραφή manifest.json
    manifest = {
        "source_pdf": pdf_path.name,
        "engine": "ArtCraft Suite (PdfCraft + PhotoCraft + VectorCraft)",
        "grade": meta.get("grade"),
        "subject": meta.get("subject"),
        "chapter": meta.get("chapter"),
        "stem": stem,
        "total_pages": total_pages,
        "params": {
            "dpi": args.dpi,
            "format": target_format,
            "vector": args.vector,
            "all_pages": args.all_pages,
        },
        "stats": dict(stats),
        "images": manifest_entries,
    }
    manifest_path = out_dir / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    print("\n=== Ολοκλήρωση Εξαγωγής ===")
    print(f"Εικόνες που παρήχθησαν: {stats['rendered'] + stats['vector_svg']}")
    print(f"Αρχείο Manifest: {manifest_path.resolve()}")
    return out_dir


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Εξαγωγή και βελτιστοποίηση εικόνων θεμάτων PDF μέσω της σουίτας ArtCraft."
    )
    parser.add_argument("pdf", type=Path, help="Διαδρομή του αρχείου PDF")
    parser.add_argument("-o", "--out", type=Path, help="Φάκελος εξαγωγής εικόνων")
    parser.add_argument(
        "--format",
        choices=["webp", "png"],
        default="webp",
        help="Μορφή αρχείων εξόδου (προεπιλογή: webp για μικρότερο μέγεθος στο site)",
    )
    parser.add_argument("--dpi", type=int, default=200, help="Ανάλυση render σε DPI (προεπιλογή: 200)")
    parser.add_argument("--pages", type=str, help="Εύρος σελίδων (π.χ. '1-5,8')")
    parser.add_argument(
        "--vector",
        action="store_true",
        help="Εξαγωγή διανυσματικών σχημάτων απευθείας σε SVG μέσω VectorCraft όπου είναι εφικτό",
    )
    parser.add_argument(
        "--all-pages",
        action="store_true",
        help="Εξαγωγή όλων των σελίδων ανεξάρτητα από αναφορά λέξεων-κλειδιών (σχήμα, διάγραμμα)",
    )
    parser.add_argument("-v", "--verbose", action="store_true", help="Αναλυτικά μηνύματα προόδου")

    args = parser.parse_args()
    try:
        extract_craft(args.pdf, args)
    except Exception as exc:
        print(f"Σφάλμα: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
