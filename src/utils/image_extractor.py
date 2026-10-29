#!/usr/bin/env python3
"""
extract_pdf_images.py — τοπική εξαγωγή εικόνων από PDF Τράπεζας Θεμάτων (0 AI tokens).

Ονοματοδοσία:
  {grade}_{subject}_ch{NN}_#{bankCode}_fig01.png   ← εκφώνηση / σχήμα
  {grade}_{subject}_ch{NN}_#{bankCode}_sol01.png   ← λύση / ενδεικτικές απαντήσεις

Παράδειγμα:
  python extract_pdf_images.py c_egkatastaseis-klimatismou_ch02.pdf --render-empty-pages
  python extract_pdf_images.py b_thermod_ch05.pdf -o site/images/b/thermod/chapter-05

Απαιτεί: pip install pymupdf
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

try:
    import pymupdf as fitz
except ImportError:
    try:
        import fitz  # type: ignore
    except ImportError:
        print("Σφάλμα: pip install pymupdf", file=sys.stderr)
        sys.exit(2)

# Κεφαλίδα Τράπεζας: «Θέμα  #23849   |   2.1 …»  ή  «Λύση  #23825»
HEADER_CODE_RE = re.compile(
    r"(?:Θέμα|Λύση|Λυση)\s*#\s*(\d{4,6})",
    re.IGNORECASE,
)
ANY_CODE_RE = re.compile(r"#\s*(\d{4,6})")
SOLUTION_MARK_RE = re.compile(
    r"ΕΝΔΕΙΚΤΙΚΕΣ\s+ΑΠΑΝΤΗΣΕΙΣ|Λύση\s*#|Λυση\s*#",
    re.IGNORECASE,
)
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


def normalize_text(text: str) -> str:
    decomposed = unicodedata.normalize("NFD", text)
    stripped = "".join(c for c in decomposed if unicodedata.category(c) != "Mn")
    return stripped.lower()


def parse_meta_from_filename(pdf: Path) -> dict:
    """grade / subject / chapter από όνομα τύπου c_egkatastaseis-klimatismou_ch02.pdf"""
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


def default_out_dir(pdf: Path, meta: dict) -> Path:
    if meta.get("grade") and meta.get("subject") and meta.get("chapter") is not None:
        return (
            Path("data")
            / "extracted_images"
            / meta["grade"]
            / meta["subject"]
            / f"chapter-{int(meta['chapter']):02d}"
        )
    return Path("data") / "extracted_images" / meta["stem"]


def parse_pages(spec: str | None, total: int) -> list[int]:
    if not spec:
        return list(range(total))
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
        selected.update(range(start - 1, min(end, total)))
    return sorted(selected)


def page_role_and_code(page) -> tuple[str | None, str, bool]:
    """
    Επιστρέφει (bank_code, role, inherited_flag_placeholder).
    role: 'fig' | 'sol'
    Προτεραιότητα κωδικού: κεφαλίδα «Θέμα #» / «Λύση #», μετά οποιοδήποτε # στο κείμενο.
    """
    text = page.get_text("text") or ""
    # Κείμενο κοντά στην κορυφή (κεφαλίδα)
    header_bits: list[str] = []
    try:
        d = page.get_text("dict")
        for block in d.get("blocks", []):
            if block.get("type") != 0:
                continue
            for line in block.get("lines", []):
                y = line["bbox"][1]
                if y > 100:
                    continue
                spans = "".join(s["text"] for s in line.get("spans", []))
                if spans.strip():
                    header_bits.append(spans)
    except Exception:  # noqa: BLE001
        pass
    header = "\n".join(header_bits)

    is_sol = bool(SOLUTION_MARK_RE.search(text) or SOLUTION_MARK_RE.search(header))
    role = "sol" if is_sol else "fig"

    code = None
    m = HEADER_CODE_RE.search(header) or HEADER_CODE_RE.search(text)
    if m:
        code = m.group(1)
    else:
        codes = ANY_CODE_RE.findall(text)
        if codes:
            # Σε σελίδα λύσης συχνά ο κωδικός είναι στο τέλος «Λύση #…»
            code = codes[-1] if is_sol else codes[0]

    return code, role, False


def load_pixmap(doc, xref: int, smask: int):
    try:
        pix = fitz.Pixmap(doc, xref)
    except Exception:
        return None
    if smask > 0:
        try:
            mask = fitz.Pixmap(doc, smask)
            pix = fitz.Pixmap(pix, mask)
        except Exception:
            pass
    if pix.n >= 4 and pix.alpha:
        try:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        except Exception:
            pass
    elif pix.n > 3:
        try:
            pix = fitz.Pixmap(fitz.csRGB, pix)
        except Exception:
            pass
    return pix


def image_blocks_on_page(page) -> list[dict]:
    """Λίστα image blocks με bbox (για φίλτρο κεφαλίδας y)."""
    out = []
    try:
        d = page.get_text("dict")
        for block in d.get("blocks", []):
            if block.get("type") == 1:
                out.append(block)
    except Exception:  # noqa: BLE001
        pass
    return out


def extract(pdf_path: Path, args: argparse.Namespace) -> Path:
    if not pdf_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε PDF: {pdf_path}")

    meta = parse_meta_from_filename(pdf_path)
    out_dir = Path(args.out) if args.out else default_out_dir(pdf_path, meta)
    out_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    total = doc.page_count
    page_indexes = parse_pages(args.pages, total)

    # Επαναλαμβανόμενα xref (λογότυπα σε πολλές σελίδες)
    pages_per_xref: dict[int, set[int]] = defaultdict(set)
    page_images: dict[int, list] = {}
    for pno in range(total):
        imgs = doc[pno].get_images(full=True)
        page_images[pno] = imgs
        for img in imgs:
            pages_per_xref[img[0]].add(pno)
    repeated = {
        xref
        for xref, pgs in pages_per_xref.items()
        if args.repeat_threshold > 0 and len(pgs) >= args.repeat_threshold
    }

    stem = meta["stem"]
    counters: dict[tuple[str, str], int] = defaultdict(int)  # (code, role) -> n
    seen_hashes: dict[str, str] = {}
    stats: dict[str, int] = defaultdict(int)
    flat_images: list[dict] = []

    last_code: str | None = None
    last_role: str = "fig"

    for pno in page_indexes:
        page = doc[pno]
        page_num = pno + 1
        code, role, _ = page_role_and_code(page)
        inherited = False
        if code:
            last_code = code
            last_role = role
        else:
            code = last_code
            role = last_role
            inherited = code is not None

        text = page.get_text("text") or ""
        entries_this_page: list[dict] = []

        # --- embedded ---
        for img in page_images[pno]:
            xref, smask = img[0], img[1]
            if xref in repeated:
                stats["skipped_repeated"] += 1
                continue
            pix = load_pixmap(doc, xref, smask)
            if pix is None:
                stats["skipped_error"] += 1
                continue
            w, h = pix.width, pix.height
            if min(w, h) < args.min_size or w * h < args.min_area:
                stats["skipped_small"] += 1
                continue
            digest = hashlib.sha1(pix.samples).hexdigest()
            key = f"{w}x{h}:{digest}"
            if key in seen_hashes:
                stats["skipped_duplicate"] += 1
                continue

            if not code:
                # Χωρίς κωδικό θέματος: προσωρινό όνομα σελίδας
                counters[("unknown", role)] += 1
                n = counters[("unknown", role)]
                name = f"{stem}_page{page_num:02d}_{role}{n:02d}.png"
                bank = None
            else:
                counters[(code, role)] += 1
                n = counters[(code, role)]
                name = f"{stem}_#{code}_{role}{n:02d}.png"
                bank = code

            pix.save(str(out_dir / name))
            seen_hashes[key] = name
            stats["embedded"] += 1
            entry = {
                "file": name,
                "bank_code": bank,
                "role": role,
                "page": page_num,
                "kind": "embedded",
                "width": w,
                "height": h,
                "sha1": digest[:12],
                "bank_code_inherited": inherited,
                "xref": xref,
            }
            entries_this_page.append(entry)
            flat_images.append(entry)

        # --- page render αν λείπουν embedded αλλά υπάρχει σχήμα ---
        render_reason = None
        if not entries_this_page and args.render_empty_pages:
            if FIGURE_RE.search(normalize_text(text)):
                render_reason = "keyword"
            elif args.vector_threshold > 0 and len(page.get_drawings()) >= args.vector_threshold:
                render_reason = "vector-drawings"

        if render_reason:
            if not code:
                counters[("unknown", role)] += 1
                n = counters[("unknown", role)]
                name = f"{stem}_page{page_num:02d}_{role}{n:02d}.png"
                bank = None
            else:
                counters[(code, role)] += 1
                n = counters[(code, role)]
                name = f"{stem}_#{code}_{role}{n:02d}.png"
                bank = code
            clip = None
            kind = "render"
            if args.crop:
                # Κόψε πάνω κεφαλίδα ~8% και κάτω υποσέλιδο ~5%
                r = page.rect
                clip = fitz.Rect(r.x0, r.y0 + r.height * 0.08, r.x1, r.y1 - r.height * 0.05)
                kind = "crop-render"
            pix = page.get_pixmap(dpi=args.dpi, clip=clip, alpha=False)
            pix.save(str(out_dir / name))
            stats["rendered"] += 1
            entry = {
                "file": name,
                "bank_code": bank,
                "role": role,
                "page": page_num,
                "kind": kind,
                "reason": render_reason,
                "width": pix.width,
                "height": pix.height,
                "dpi": args.dpi,
                "bank_code_inherited": inherited,
            }
            entries_this_page.append(entry)
            flat_images.append(entry)

        if args.verbose:
            n_emb = sum(1 for e in entries_this_page if e["kind"] == "embedded")
            extra = f", render ({render_reason})" if render_reason else ""
            code_s = f"#{code}" if code else "—"
            print(f"σελ. {page_num:>3}: {code_s:>8} {role}  emb={n_emb}{extra}")

    doc.close()

    manifest = {
        "source_pdf": pdf_path.name,
        "grade": meta.get("grade"),
        "subject": meta.get("subject"),
        "chapter": meta.get("chapter"),
        "stem": stem,
        "total_pages": total,
        "params": {
            "min_size": args.min_size,
            "min_area": args.min_area,
            "repeat_threshold": args.repeat_threshold,
            "render_empty_pages": args.render_empty_pages,
            "dpi": args.dpi,
            "crop": args.crop,
            "vector_threshold": args.vector_threshold,
        },
        "images": flat_images,
        # Σύνοψη ανά bank_code για εύκολο lookup από τον agent
        "by_bank_code": {},
    }
    by_code: dict[str, dict] = defaultdict(lambda: {"fig": [], "sol": []})
    for e in flat_images:
        bc = e.get("bank_code")
        if not bc:
            continue
        by_code[bc][e["role"]].append(e["file"])
    manifest["by_bank_code"] = {
        code: {"fig": v["fig"], "sol": v["sol"]} for code, v in sorted(by_code.items())
    }

    manifest_path = out_dir / "manifest.json"
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print(f"PDF: {pdf_path.name} ({total} σελίδες, επεξεργάστηκαν {len(page_indexes)})")
    print(f"Έξοδος: {out_dir.resolve()}")
    print(f"Embedded: {stats['embedded']} | Renders: {stats['rendered']}")
    print(
        f"Παράλειψη: small={stats['skipped_small']} repeated={stats['skipped_repeated']} "
        f"dup={stats['skipped_duplicate']}"
    )
    print(f"Θέματα με εικόνα: {len(manifest['by_bank_code'])}")
    print(f"Manifest: {manifest_path}")
    return out_dir



def extract_chapter_images(
    pdf_path: Path,
    site_dir: Path,
    grade: str,
    subject: str,
    chapter: int,
    *,
    render_empty_pages: bool = True,
    crop: bool = True,
    verbose: bool = False,
) -> Path:
    """
    Εξάγει εικόνες στο site/images/{grade}/{subject}/chapter-NN/
    Επιστρέφει path του manifest.json.
    """
    out_dir = site_dir / "images" / grade / subject / f"chapter-{int(chapter):02d}"
    ns = argparse.Namespace(
        out=str(out_dir),
        pages=None,
        min_size=80,
        min_area=15000,
        repeat_threshold=4,
        render_empty_pages=render_empty_pages,
        dpi=160,
        crop=crop,
        vector_threshold=12,
        verbose=verbose,
    )
    extract(Path(pdf_path), ns)
    return out_dir / "manifest.json"


def web_prefix_for(grade: str, subject: str, chapter: int) -> str:
    return f"images/{grade}/{subject}/chapter-{int(chapter):02d}"


def _load_js_array(text: str) -> tuple[str, int, int, list] | None:
    """Βρίσκει το JSON array μετά από .push( ... Επιστρέφει (full_text, start, end, data)."""
    push = text.find("push(")
    if push < 0:
        return None
    arr_start = text.find("[", push)
    if arr_start < 0:
        # single object push({
        return None
    depth = 0
    arr_end = -1
    for i in range(arr_start, len(text)):
        ch = text[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    if arr_end < 0:
        return None
    try:
        data = json.loads(text[arr_start : arr_end + 1])
    except json.JSONDecodeError:
        return None
    if not isinstance(data, list):
        return None
    return text, arr_start, arr_end, data


def attach_images_to_js_files(
    js_files: list[Path],
    manifest_path: Path,
    web_prefix: str,
) -> int:
    """
    Προσθέτει image / solutionImages στις ασκήσεις βάσει bankCode του manifest.
    image = πρώτη fig, solutionImages = όλες οι sol.
    Επιστρέφει πλήθος ασκήσεων που ενημερώθηκαν.
    """
    if not manifest_path.is_file():
        return 0
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    by_code = manifest.get("by_bank_code") or {}
    if not by_code:
        return 0

    updated = 0
    for path in js_files:
        if path.name == "groups.js":
            continue
        original = path.read_text(encoding="utf-8")
        parsed = _load_js_array(original)
        if not parsed:
            continue
        _text, arr_start, arr_end, data = parsed
        changed = False
        for ex in data:
            if not isinstance(ex, dict):
                continue
            code = str(ex.get("bankCode") or "").strip()
            if not code and isinstance(ex.get("code"), str):
                m = re.search(r"#\s*(\d{4,6})", ex["code"])
                if m:
                    code = m.group(1)
            if not code or code not in by_code:
                continue
            entry = by_code[code]
            figs = entry.get("fig") or []
            sols = entry.get("sol") or []
            touched = False
            if figs:
                ex["image"] = f"{web_prefix}/{figs[0]}"
                if len(figs) > 1:
                    ex["images"] = [f"{web_prefix}/{f}" for f in figs]
                touched = True
            if sols:
                ex["solutionImages"] = [f"{web_prefix}/{f}" for f in sols]
                touched = True
            if touched:
                changed = True
                updated += 1
        if changed:
            new_arr = json.dumps(data, ensure_ascii=False, indent=2)
            path.write_text(
                original[:arr_start] + new_arr + original[arr_end + 1 :],
                encoding="utf-8",
            )
    return updated



def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        description="Εξαγωγή εικόνων PDF Τράπεζας με όνομα #{bankCode}_fig/sol"
    )
    p.add_argument("pdf", type=Path, help="Αρχείο PDF")
    p.add_argument(
        "-o",
        "--out",
        default=None,
        help="Φάκελος εξόδου (προεπιλογή: data/extracted_images/{grade}/{subject}/chapter-NN)",
    )
    p.add_argument("--pages", default=None, help="Π.χ. 1-10,15")
    p.add_argument("--min-size", type=int, default=80, help="Ελάχ. πλευρά px")
    p.add_argument("--min-area", type=int, default=15000, help="Ελάχ. εμβαδόν px²")
    p.add_argument(
        "--repeat-threshold",
        type=int,
        default=4,
        help="Αν εικόνα εμφανίζεται σε ≥N σελίδες, αγνοείται (λογότυπο)",
    )
    p.add_argument(
        "--render-empty-pages",
        action="store_true",
        help="Render σελίδας αν δεν υπάρχουν embedded αλλά υπάρχει σχήμα/vectors",
    )
    p.add_argument("--dpi", type=int, default=160)
    p.add_argument(
        "--crop",
        action="store_true",
        help="Στο render κόβει κεφαλίδα/υποσέλιδο",
    )
    p.add_argument(
        "--vector-threshold",
        type=int,
        default=12,
        help="Ελάχ. vector drawings για render χωρίς keyword",
    )
    p.add_argument("-v", "--verbose", action="store_true")
    return p


def main() -> None:
    args = build_parser().parse_args()
    try:
        extract(args.pdf, args)
    except Exception as exc:  # noqa: BLE001
        print(f"Σφάλμα: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
