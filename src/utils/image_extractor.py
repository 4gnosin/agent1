#!/usr/bin/env python3
"""
extract_pdf_images.py — τοπική εξαγωγή εικόνων από PDF Τράπεζας Θεμάτων (0 AI tokens).

Ονοματοδοσία:
  {grade}_{subject}_ch{NN}_{bankCode}_fig01.png   ← εκφώνηση / σχήμα
  {grade}_{subject}_ch{NN}_{bankCode}_sol01.png   ← λύση / ενδεικτικές απαντήσεις

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
import io
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    Image = None

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


def stitch_contiguous_slices(candidates: list[dict]) -> list[dict]:
    """
    Εντοπίζει και συνενώνει κατακόρυφα συνεχόμενα τμήματα (slices) της ίδιας εικόνας
    που έχουν διασπαστεί κατά την εξαγωγή από το Word/IEP PDF.
    """
    if len(candidates) <= 1 or Image is None:
        return candidates

    with_bbox = [c for c in candidates if c.get("bbox")]
    without_bbox = [c for c in candidates if not c.get("bbox")]

    if len(with_bbox) <= 1:
        return candidates

    # Ταξινόμηση κατά y0 (κορυφή)
    with_bbox.sort(key=lambda c: (c["bbox"][1], c["bbox"][0]))

    merged_items: list[dict] = []
    used = set()

    for i in range(len(with_bbox)):
        if i in used:
            continue
        chain = [with_bbox[i]]
        used.add(i)

        while True:
            last = chain[-1]
            last_bb = last["bbox"]
            last_w = last["pix"].width

            found_next = None
            for j in range(len(with_bbox)):
                if j in used:
                    continue
                cand = with_bbox[j]
                cand_bb = cand["bbox"]
                cand_w = cand["pix"].width

                # Έλεγχος αν το cand είναι ακριβώς κάτω από το last
                if (
                    abs(last_bb[0] - cand_bb[0]) <= 3.0
                    and abs(last_bb[2] - cand_bb[2]) <= 3.0
                    and abs(last_bb[3] - cand_bb[1]) <= 3.0
                    and abs(last_w - cand_w) <= 2
                ):
                    found_next = j
                    break

            if found_next is not None:
                chain.append(with_bbox[found_next])
                used.add(found_next)
            else:
                break

        if len(chain) == 1:
            merged_items.append(chain[0])
        else:
            try:
                pil_slices = [Image.open(io.BytesIO(c["pix"].tobytes("png"))) for c in chain]
                total_w = pil_slices[0].width
                total_h = sum(im.height for im in pil_slices)
                mode = pil_slices[0].mode
                stitched_im = Image.new(mode, (total_w, total_h))
                y_offset = 0
                for im in pil_slices:
                    stitched_im.paste(im, (0, y_offset))
                    y_offset += im.height

                buf = io.BytesIO()
                stitched_im.save(buf, format="PNG")
                stitched_pix = fitz.Pixmap(buf.getvalue())

                combined_bbox = [
                    min(c["bbox"][0] for c in chain),
                    min(c["bbox"][1] for c in chain),
                    max(c["bbox"][2] for c in chain),
                    max(c["bbox"][3] for c in chain),
                ]

                merged_items.append({
                    "xref": chain[0]["xref"],
                    "smask": chain[0]["smask"],
                    "pix": stitched_pix,
                    "bbox": combined_bbox,
                    "stitched_xrefs": [c["xref"] for c in chain],
                })
            except Exception:
                # Αν αποτύχει η συνένωση, διατήρηση των αρχικών
                merged_items.extend(chain)

    return merged_items + without_bbox


def group_candidates_into_rows(candidates: list[dict], page_num: int) -> list[dict]:
    """
    Ομαδοποιεί εικόνες της ίδιας σελίδας που βρίσκονται στην ίδια οριζόντια γραμμή
    (δίπλα-δίπλα, με κατακόρυφη επικάλυψη > 35% ή κοντινό μέσο ύψος y) και τις
    ταξινομεί αυστηρά από πάνω προς τα κάτω και από αριστερά προς τα δεξιά (x0).
    """
    if not candidates:
        return []

    with_bbox = [c for c in candidates if c.get("bbox")]
    without_bbox = [c for c in candidates if not c.get("bbox")]
    if not with_bbox:
        return candidates

    # Αρχική ταξινόμηση κατά κατακόρυφο κέντρο yc και μετά x0
    with_bbox.sort(key=lambda c: ((c["bbox"][1] + c["bbox"][3]) / 2.0, c["bbox"][0]))

    rows: list[list[dict]] = []
    for cand in with_bbox:
        cb = cand["bbox"]
        c_y0, c_y1 = cb[1], cb[3]
        c_h = max(1.0, c_y1 - c_y0)
        c_yc = (c_y0 + c_y1) / 2.0

        placed = False
        for row in rows:
            r_y0 = min(x["bbox"][1] for x in row)
            r_y1 = max(x["bbox"][3] for x in row)
            r_h = max(1.0, r_y1 - r_y0)
            r_yc = (r_y0 + r_y1) / 2.0
            overlap_h = min(r_y1, c_y1) - max(r_y0, c_y0)
            min_h = min(r_h, c_h)

            if overlap_h > 0.35 * min_h or abs(r_yc - c_yc) <= 30.0:
                row.append(cand)
                placed = True
                break

        if not placed:
            rows.append([cand])

    ordered: list[dict] = []
    for r_idx, row in enumerate(rows, 1):
        # Ταξινόμηση από αριστερά προς τα δεξιά (x0) εντός της ίδιας οριζόντιας γραμμής
        row.sort(key=lambda c: c["bbox"][0])
        row_bbox = [
            round(min(c["bbox"][0] for c in row), 1),
            round(min(c["bbox"][1] for c in row), 1),
            round(max(c["bbox"][2] for c in row), 1),
            round(max(c["bbox"][3] for c in row), 1),
        ]
        row_id = f"p{page_num}_r{r_idx}"
        for idx_in_row, c in enumerate(row):
            c["row_id"] = row_id
            c["row_index"] = idx_in_row
            c["row_size"] = len(row)
            c["row_bbox"] = row_bbox
            ordered.append(c)

    return ordered + without_bbox


def get_image_spatial_context(
    page,
    img_bbox: tuple[float, float, float, float] | list[float] | None,
    fallback_anchor: str | None = None,
) -> dict:
    """
    Αναλύει τη χωρική θέση μιας εικόνας σε σχέση με τα text blocks της σελίδας.
    Επιστρέφει:
      - question_anchor: τον αριθμό ερωτήματος (π.χ. '2.1', '2.2', '4.1') πάνω από την εικόνα (ή κληρονομούμενο)
      - sub_index: τον αριθμό επιμέρους ερωτήματος (π.χ. 1, 2, 3) αν υπάρχει στην ίδια γραμμή ή ακριβώς από πάνω
      - text_before: το τελευταίο κείμενο πριν την εικόνα
      - text_after: το πρώτο κείμενο μετά την εικόνα
      - is_full_page_scan: αν η σελίδα είναι σχεδόν κενή από κείμενο και καταλαμβάνεται από την εικόνα
    """
    if not img_bbox:
        return {
            "bbox": None,
            "question_anchor": fallback_anchor,
            "sub_index": None,
            "text_before": "",
            "text_after": "",
            "is_full_page_scan": False,
        }

    blocks = page.get_text("blocks")
    page_text = page.get_text("text").strip()
    r = page.rect
    page_area = r.width * r.height if r.width * r.height > 0 else 1.0

    w = img_bbox[2] - img_bbox[0]
    h = img_bbox[3] - img_bbox[1]
    is_full_scan = len(page_text) < 40 and ((w * h) / page_area > 0.45)

    sorted_blocks = sorted(blocks, key=lambda b: (b[1], b[0]))
    above_text = []
    below_text = []
    question_anchor = None
    sub_index: int | None = None

    for b in sorted_blocks:
        t = b[4].strip()
        if not t or (b[1] < 35 and "#" in t):
            continue
        # Έλεγχος αν το block είναι ετικέτα αρίθμησης (π.χ. '1.', '2.', '3.') στην ίδια γραμμή βάσης (baseline) με την εικόνα
        m_sub_only = re.match(r"^\s*([1-9])\s*[\.\)]\s*$", t)
        is_baseline_number = bool(m_sub_only and b[1] <= img_bbox[3] + 12 and b[3] >= img_bbox[1] - 20)

        if b[3] <= img_bbox[1] + 15 or is_baseline_number:
            above_text.append(t)
            if b[1] >= 55:
                m = re.findall(r"(?:^|\s)([24]\.[1-9][a-z\u03b1-\u03c9]?)\b", t)
                if m:
                    question_anchor = m[-1]
            # Εντοπισμός επιμέρους αρίθμησης 1., 2., 3. (όχι δεκαδικού 2.1)
            m_sub = re.match(r"^\s*([1-9])\s*[\.\)](?!\d)", t)
            if m_sub:
                sub_index = int(m_sub.group(1))
        elif b[1] >= img_bbox[3] - 15:
            below_text.append(t)

    if not question_anchor and fallback_anchor:
        question_anchor = fallback_anchor

    text_before = above_text[-1].replace("\n", " ") if above_text else ""
    text_after = below_text[0].replace("\n", " ") if below_text else ""

    return {
        "bbox": [round(x, 1) for x in img_bbox],
        "question_anchor": question_anchor,
        "sub_index": sub_index,
        "text_before": text_before[:90],
        "text_after": text_after[:90],
        "is_full_page_scan": is_full_scan,
    }


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
    repeated = set()
    for xref, pgs in pages_per_xref.items():
        if args.repeat_threshold > 0 and len(pgs) >= args.repeat_threshold:
            pix_check = load_pixmap(doc, xref, 0)
            if pix_check is not None and (pix_check.width >= 350 and pix_check.height >= 350):
                continue
            repeated.add(xref)

    stem = meta["stem"]
    counters: dict[tuple[str, str], int] = defaultdict(int)  # (code, role) -> n
    seen_hashes: dict[str, str] = {}
    stats: dict[str, int] = defaultdict(int)
    flat_images: list[dict] = []

    last_code: str | None = None
    last_role: str = "fig"
    last_anchor: str | None = None

    for pno in page_indexes:
        page = doc[pno]
        page_num = pno + 1
        code, role, _ = page_role_and_code(page)
        inherited = False
        if code:
            if code != last_code or role != last_role:
                last_anchor = None
            last_code = code
            last_role = role
        else:
            code = last_code
            role = last_role
            inherited = code is not None

        text = page.get_text("text") or ""
        entries_this_page: list[dict] = []
        smask_by_xref = {img[0]: img[1] for img in page_images[pno]}
        placements: list[tuple[int, int, list[float] | None]] = []
        seen_xrefs_in_info: set[int] = set()
        for info in page.get_image_info(xrefs=True):
            _xr = info.get("xref")
            _bb = info.get("bbox")
            if _xr and _bb:
                placements.append((_xr, smask_by_xref.get(_xr, 0), list(_bb)))
                seen_xrefs_in_info.add(_xr)
        for img in page_images[pno]:
            xref, smask = img[0], img[1]
            if xref not in seen_xrefs_in_info:
                placements.append((xref, smask, None))

        # --- embedded ---
        raw_candidates = []
        for xref, smask, img_bbox in placements:
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
            raw_candidates.append({
                "xref": xref,
                "smask": smask,
                "pix": pix,
                "bbox": list(img_bbox) if img_bbox else None,
            })

        candidates = stitch_contiguous_slices(raw_candidates)
        # Φιλτράρισμα μικρών επιμέρους εικόνων (π.χ. ετικέτες πάνω σε ψυχρομετρικό χάρτη)
        # που περιέχονται χωρικά (>60%) μέσα σε μεγαλύτερη εικόνα της ίδιας σελίδας
        if len(candidates) > 1:
            filtered_cands = []
            for idx_c, c_inner in enumerate(candidates):
                bb_in = c_inner.get("bbox")
                if not bb_in:
                    filtered_cands.append(c_inner)
                    continue
                r_in = fitz.Rect(bb_in)
                area_in = max(1.0, r_in.width * r_in.height)
                contained_in_larger = False
                for idx_o, c_outer in enumerate(candidates):
                    if idx_c == idx_o or not c_outer.get("bbox"):
                        continue
                    r_out = fitz.Rect(c_outer["bbox"])
                    area_out = r_out.width * r_out.height
                    if area_out > area_in * 1.5:
                        inter = r_in & r_out
                        if not inter.is_empty and (inter.width * inter.height) / area_in >= 0.60:
                            contained_in_larger = True
                            c_outer["force_overlay_render"] = True
                            break
                if not contained_in_larger:
                    filtered_cands.append(c_inner)
            candidates = filtered_cands

        candidates = group_candidates_into_rows(candidates, page_num)

        for cand in candidates:
            xref = cand["xref"]
            pix = cand["pix"]
            img_bbox = cand["bbox"]
            if cand.get("stitched_xrefs"):
                stats["stitched_slices"] += len(cand["stitched_xrefs"]) - 1
            w, h = pix.width, pix.height
            digest = hashlib.sha1(pix.samples).hexdigest()
            # Διατήρηση κάθε εμφάνισης σε διαφορετικό ύψος (pos_bucket) ή διαφορετική στήλη (x_bucket)
            pos_bucket = round(img_bbox[1] / 35.0) if img_bbox else 0
            x_bucket = round(img_bbox[0] / 35.0) if img_bbox else 0
            key = f"{code or 'unknown'}:{role}:{pno}:{pos_bucket}:{x_bucket}:{w}x{h}:{digest}"
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
                name = f"{stem}_{code}_{role}{n:02d}.png"
                bank = code
            has_overlays = bool(cand.get("force_overlay_render"))
            if img_bbox:
                r_img = fitz.Rect(img_bbox)
                # Αν η ενσωματωμένη εικόνα είναι απλώς μια μικρή ετικέτα άξονα (π.χ. 'P (bar)' ή 'P')
                # δίπλα σε διανυσματικό διάγραμμα (vector drawings), επεκτείνουμε το bbox ώστε να
                # συμπεριλάβει ολόκληρο το διανυσματικό διάγραμμα και τις ετικέτες των αξόνων του!
                if r_img.width < 120 or r_img.height < 80:
                    page_drawings = [
                        fitz.Rect(d["rect"])
                        for d in page.get_drawings()
                        if d.get("rect") and d["rect"][1] > 70 and (d["rect"][2] - d["rect"][0]) < 480
                    ]
                    if page_drawings:
                        union_r = fitz.Rect(r_img)
                        changed = True
                        while changed:
                            changed = False
                            expanded_search = fitz.Rect(
                                union_r.x0 - 45, union_r.y0 - 45, union_r.x1 + 45, union_r.y1 + 45
                            )
                            for dr in page_drawings:
                                if expanded_search.intersects(dr) and not union_r.contains(dr):
                                    union_r |= dr
                                    changed = True
                        if union_r.width > r_img.width * 1.5 or union_r.height > r_img.height * 1.5:
                            # Συμπερίληψη σύντομων ετικετών αξόνων (π.χ. '0', '5', 'V (L)', 'Α', 'Β') γύρω από το διάγραμμα
                            label_search = fitz.Rect(
                                union_r.x0 - 35, union_r.y0 - 25, union_r.x1 + 40, union_r.y1 + 35
                            )
                            for b in page.get_text("blocks"):
                                bt = b[4].strip()
                                br = fitz.Rect(b[:4])
                                if bt and len(bt) <= 18 and label_search.intersects(br):
                                    union_r |= br
                            pad = 6.0
                            r_img = fitz.Rect(
                                max(0.0, union_r.x0 - pad),
                                max(0.0, union_r.y0 - pad),
                                min(page.rect.width, union_r.x1 + pad),
                                min(page.rect.height, union_r.y1 + pad),
                            )
                            img_bbox = [r_img.x0, r_img.y0, r_img.x1, r_img.y1]
                            has_overlays = True

                for b in page.get_text("blocks"):
                    bt = b[4].strip()
                    if not bt:
                        continue
                    # Αγνόησε ετικέτες αρίθμησης (π.χ. '1.', '2.') που ξεκινούν αριστερά από την εικόνα
                    if b[0] < r_img.x0 - 2 and re.fullmatch(r"\d+[\.\)]?", bt):
                        continue
                    if r_img.intersects(fitz.Rect(b[:4])):
                        has_overlays = True
                        break
                if not has_overlays:
                    for d in page.get_drawings():
                        if r_img.intersects(fitz.Rect(d["rect"])):
                            has_overlays = True
                            break

            if has_overlays and img_bbox:
                clip_rect = fitz.Rect(img_bbox)
                pix = page.get_pixmap(clip=clip_rect, dpi=max(args.dpi, 200), alpha=False)
                w, h = pix.width, pix.height

            pix.save(str(out_dir / name))
            seen_hashes[key] = name
            stats["embedded"] += 1
            spatial_ctx = get_image_spatial_context(page, img_bbox, fallback_anchor=last_anchor if role == "fig" else None)
            if spatial_ctx.get("question_anchor") and role == "fig":
                last_anchor = spatial_ctx["question_anchor"]
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
                "bbox": spatial_ctx["bbox"],
                "row_id": cand.get("row_id"),
                "row_index": cand.get("row_index"),
                "row_size": cand.get("row_size", 1),
                "row_bbox": cand.get("row_bbox"),
                "question_anchor": spatial_ctx["question_anchor"],
                "sub_index": spatial_ctx.get("sub_index"),
                "text_before": spatial_ctx["text_before"],
                "text_after": spatial_ctx["text_after"],
                "is_full_page_scan": spatial_ctx["is_full_page_scan"],
            }
            entries_this_page.append(entry)
            flat_images.append(entry)

        # Ενημέρωση last_anchor αν εμφανίστηκε νέο υποερώτημα (π.χ. 2.2) στη σελίδα (με σειρά ύψους y)
        if role == "fig":
            for b in sorted(page.get_text("blocks"), key=lambda x: (x[1], x[0])):
                if b[1] < 55:
                    continue
                bt = b[4].strip()
                m_anc = re.findall(r"(?:^|\s)([24]\.[1-9][a-z\u03b1-\u03c9]?)\b", bt)
                if m_anc:
                    last_anchor = m_anc[-1]

        # --- page / vector render αν λείπουν μεγάλα embedded αλλά υπάρχει σχήμα/διανυσματικό σχέδιο ---
        render_reason = None
        has_large_embedded = any(e.get("width", 0) >= 160 and e.get("height", 0) >= 160 for e in entries_this_page)
        drawings = page.get_drawings() if hasattr(page, "get_drawings") else []
        page_text = text.strip()

        # Render διανυσματικών σχεδίων ή σαρωμένης σελίδας ΜΟΝΟ αν args.render_empty_pages είναι True
        # και η σελίδα έχει ελάχιστο κείμενο (< 80 χαρακτήρες).
        # ΠΟΤΕ σε κανονικές σελίδες με κείμενο/εκφωνήσεις, όπου τα drawings είναι απλώς πίνακες/κλάσματα!
        if not entries_this_page and args.render_empty_pages and len(page_text) < 80:
            if FIGURE_RE.search(normalize_text(page_text)):
                render_reason = "keyword"
            elif args.vector_threshold > 0 and len(drawings) >= args.vector_threshold:
                render_reason = "vector-drawings"

        if render_reason:
            clip = None
            kind = "render"
            if render_reason == "vector-drawings" and drawings:
                # Φιλτράρισμα: αγνόησε πλαίσια ολόκληρης σελίδας
                r = page.rect
                diag_rects = [
                    d["rect"] for d in drawings
                    if d["rect"].width > 15 and d["rect"].height > 15
                    and d["rect"].width < r.width * 0.85
                    and d["rect"].height < r.height * 0.85
                ]
                if diag_rects:
                    min_x = max(0.0, min(dr.x0 for dr in diag_rects) - 15.0)
                    min_y = max(r.height * 0.08, min(dr.y0 for dr in diag_rects) - 15.0)
                    max_x = min(r.width, max(dr.x1 for dr in diag_rects) + 15.0)
                    max_y = min(r.height * 0.95, max(dr.y1 for dr in diag_rects) + 15.0)
                    candidate_clip = fitz.Rect(min_x, min_y, max_x, max_y)
                    # Αν μέσα στο candidate clip υπάρχει πολύ κείμενο (> 80 χαρακτήρες), πρόκειται για πίνακα ή κείμενο, ΟΧΙ για σχήμα!
                    clip_text = page.get_text("text", clip=candidate_clip).strip()
                    if (max_x - min_x) >= 60 and (max_y - min_y) >= 40 and len(clip_text) < 80:
                        clip = candidate_clip
                        kind = "vector-crop-render"

            # Ολοσέλιδη αποκοπή (crop-render) ΕΠΙΤΡΕΠΕΤΑΙ ΜΟΝΟ αν η σελίδα είναι σχεδόν κενή από κείμενο (< 60 χαρακτήρες)
            # και έχει ζητηθεί ρητά render_empty_pages! ΠΟΤΕ σε σελίδες με κανονικό κείμενο εκφωνήσεων/ασκήσεων!
            if not clip and args.render_empty_pages and len(page_text) < 60 and args.crop:
                r = page.rect
                clip = fitz.Rect(r.x0, r.y0 + r.height * 0.08, r.x1, r.y1 - r.height * 0.05)
                kind = "crop-render"

            if clip is not None:
                if not code:
                    counters[("unknown", role)] += 1
                    n = counters[("unknown", role)]
                    name = f"{stem}_page{page_num:02d}_{role}{n:02d}.png"
                    bank = None
                else:
                    counters[(code, role)] += 1
                    n = counters[(code, role)]
                    name = f"{stem}_{code}_{role}{n:02d}.png"
                    bank = code
                pix = page.get_pixmap(dpi=args.dpi, clip=clip, alpha=False)
                pix.save(str(out_dir / name))
                stats["rendered"] += 1
                spatial_ctx = get_image_spatial_context(page, [clip.x0, clip.y0, clip.x1, clip.y1])
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
                    "bbox": spatial_ctx["bbox"],
                    "question_anchor": spatial_ctx["question_anchor"],
                    "text_before": spatial_ctx["text_before"],
                    "text_after": spatial_ctx["text_after"],
                    "is_full_page_scan": spatial_ctx["is_full_page_scan"],
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
    by_code: dict[str, dict] = defaultdict(lambda: {"fig": [], "sol": [], "images": []})
    for e in flat_images:
        bc = e.get("bank_code")
        if not bc:
            continue
        by_code[bc][e["role"]].append(e["file"])
        by_code[bc]["images"].append(e)
    manifest["by_bank_code"] = {
        code: {"fig": v["fig"], "sol": v["sol"], "images": v["images"]}
        for code, v in sorted(by_code.items())
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
        min_size=40,
        min_area=4000,
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


def normalize_gr(s: str) -> str:
    if not s:
        return ""
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return s.lower()


def clean_words(s: str) -> set[str]:
    s = normalize_gr(s)
    return set(re.findall(r"\b[a-z\u0370-\u03ff]{3,}\b", s))


def match_image_to_item(img_meta: dict, items: list[dict]) -> int | None:
    """
    Αντιστοιχίζει μια εικόνα στο σωστό υποερώτημα (item) μιας άσκησης
    βάσει του question_anchor, των λέξεων περιβάλλοντος (text_before/text_after),
    του τύπου άσκησης (match) και της διάταξης των υποερωτημάτων.
    Επιστρέφει το 0-based index του item ή None αν ανήκει σε όλη την άσκηση.
    """
    if not items or len(items) <= 1:
        return None

    if img_meta.get("is_full_page_scan"):
        return None

    anchor = str(img_meta.get("question_anchor") or "").strip()
    tb = img_meta.get("text_before", "")
    ta = img_meta.get("text_after", "")
    combined_context = normalize_gr(f"{tb} {ta}")
    ctx_words = clean_words(tb) | clean_words(ta)

    # 1. Ρητός κωδικός anchor (π.χ. "2.1", "4.2") απευθείας στο subq, subqPrompt ή prompt του item
    if anchor:
        direct_matches = [
            idx for idx, it in enumerate(items)
            if str(it.get("subq") or "").strip() == anchor
            or str(it.get("subqPrompt") or "").strip().startswith(anchor)
            or str(it.get("code") or "").strip().startswith(anchor)
            or str(it.get("prompt") or "").strip().startswith(anchor)
        ]
        if len(direct_matches) == 1:
            return direct_matches[0]
        elif len(direct_matches) > 1:
            sub_idx = img_meta.get("sub_index")
            if isinstance(sub_idx, int):
                for idx in direct_matches:
                    p_str = str(items[idx].get("prompt") or "").strip()
                    if re.match(rf"^{sub_idx}\s*[\.\)]", p_str):
                        return idx
                if 1 <= sub_idx <= len(direct_matches):
                    return direct_matches[sub_idx - 1]
            match_candidates = [idx for idx in direct_matches if items[idx].get("kind") == "match"]
            if match_candidates:
                return match_candidates[0]
            fig_word_candidates = [
                idx for idx in direct_matches
                if any(w in normalize_gr(str(items[idx].get("prompt") or "")) for w in ["σχημα", "διαγραμμα", "εικονα", "παρακατω", "κατωθι"])
            ]
            if len(fig_word_candidates) == 1:
                return fig_word_candidates[0]
            best_sub = direct_matches[0]
            best_sub_overlap = -1
            for idx in direct_matches:
                it_words = clean_words(str(items[idx].get("prompt") or "") + " " + str(items[idx].get("subqPrompt") or ""))
                overlap = len(ctx_words & it_words)
                if overlap > best_sub_overlap:
                    best_sub_overlap = overlap
                    best_sub = idx
            return best_sub

    # 2. Ειδική ανίχνευση για ασκήσεις αντιστοίχισης (match)
    match_items = [idx for idx, it in enumerate(items) if it.get("kind") == "match"]
    if match_items:
        is_matching_fig = "στηλη" in combined_context or "αντιστοιχ" in combined_context
        if is_matching_fig and len(match_items) == 1:
            return match_items[0]

        for m_idx in match_items:
            m_item = items[m_idx]
            left_ids = {str(x.get("id")) for x in m_item.get("left", []) if isinstance(x, dict)}
            if left_ids and any(
                re.search(rf"\b{re.escape(lid)}\s*[\.\)]", f"{tb} {ta}")
                for lid in left_ids
            ):
                return m_idx

    # 3. Ομαδοποίηση υποερωτημάτων βάσει ελληνικής αρίθμησης (2.1 vs 2.2, κλπ.)
    if anchor:
        m = re.match(r"^[1-4]\.([1-4])$", anchor)
        if m:
            subq_num = int(m.group(1))
            groups: list[list[int]] = []
            current_group: list[int] = []
            for idx, it in enumerate(items):
                p = it.get("prompt", "").strip()
                is_subletter = bool(re.match(r"^[α-ωa-z]\.", p))
                if not is_subletter and current_group:
                    groups.append(current_group)
                    current_group = [idx]
                else:
                    current_group.append(idx)
            if current_group:
                groups.append(current_group)

            if 1 <= subq_num <= len(groups):
                target_group = groups[subq_num - 1]
                if len(target_group) == 1:
                    return target_group[0]
                best_sub = target_group[0]
                best_sub_overlap = -1
                for g_idx in target_group:
                    it_words = clean_words(items[g_idx].get("prompt", ""))
                    overlap = len(ctx_words & it_words)
                    if overlap > best_sub_overlap:
                        best_sub_overlap = overlap
                        best_sub = g_idx
                return best_sub

    # 4. Επικάλυψη λέξεων (text overlap)
    best_idx = None
    best_overlap = 0
    for idx, it in enumerate(items):
        it_text = str(it.get("prompt") or "")
        if "left" in it and isinstance(it["left"], list):
            it_text += " " + " ".join(str(x.get("text", "")) for x in it["left"])
        if "right" in it and isinstance(it["right"], list):
            it_text += " " + " ".join(str(x.get("text", "")) for x in it["right"])
        it_words = clean_words(it_text)
        overlap = len(ctx_words & it_words)
        if overlap > best_overlap:
            best_overlap = overlap
            best_idx = idx

    if best_overlap >= 2 and best_idx is not None:
        return best_idx

    return None


def attach_images_to_js_files(
    js_files: list[Path],
    manifest_path: Path,
    web_prefix: str,
) -> int:
    """
    Προσθέτει image / solutionImages στις ασκήσεις ή στα μεμονωμένα υποερωτήματα (items)
    βάσει bankCode και spatial context του manifest.
    Αν μια εικόνα ανήκει σε συγκεκριμένο υποερώτημα (π.χ. αντιστοίχιση 2.1), τοποθετείται
    στο item.image αντί για την κορυφή ολόκληρης της άσκησης.
    """
    if not manifest_path.is_file():
        return 0
    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    by_code = manifest.get("by_bank_code") or {}
    if not by_code:
        return 0

    images_by_bank: dict[str, list[dict]] = defaultdict(list)
    for img in manifest.get("images", []):
        bc = img.get("bank_code")
        if bc:
            images_by_bank[bc].append(img)

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
            sols = entry.get("sol") or []
            ex_imgs = images_by_bank.get(code, [])
            items = ex.get("items") or []

            touched = False
            fig_imgs = [im for im in ex_imgs if im.get("role") == "fig"]
            root_figs = []

            # Προ-ομαδοποίηση εικόνων ανά subq & οριζόντια γραμμή (row_id) όταν υπάρχουν πολλαπλά items στο ίδιο subq
            handled_files: set[str] = set()
            subq_groups: dict[str, list[int]] = defaultdict(list)
            for idx, it in enumerate(items):
                sq = str(it.get("subq") or "").strip()
                if sq:
                    subq_groups[sq].append(idx)

            for sq, sq_item_idxs in subq_groups.items():
                if len(sq_item_idxs) <= 1:
                    continue
                sq_figs = [im for im in fig_imgs if str(im.get("question_anchor") or "").strip() == sq]
                if not sq_figs:
                    continue
                # Ομαδοποίηση κατά row_id (διατηρώντας τη σειρά εμφάνισης)
                rows_ordered: list[list[dict]] = []
                row_map: dict[str, list[dict]] = {}
                for im in sq_figs:
                    rid = im.get("row_id") or im["file"]
                    if rid not in row_map:
                        row_map[rid] = []
                        rows_ordered.append(row_map[rid])
                    row_map[rid].append(im)

                if len(rows_ordered) == len(sq_item_idxs):
                    for item_idx, row_imgs in zip(sq_item_idxs, rows_ordered, strict=False):
                        row_urls = [f"{web_prefix}/{im['file']}" for im in row_imgs]
                        target_it = items[item_idx]
                        if len(row_urls) > 1:
                            target_it["images"] = row_urls
                            target_it["imageLayout"] = "grid"
                            target_it.pop("image", None)
                        else:
                            target_it["image"] = row_urls[0]
                            target_it.pop("images", None)
                        for im in row_imgs:
                            handled_files.add(im["file"])
                    touched = True

            for fig_meta in fig_imgs:
                fig_file = fig_meta["file"]
                if fig_file in handled_files:
                    continue
                # ΜΗΝ συνδέεις ποτέ ως εικόνες ερωτημάτων αρχεία που είναι scans ολόκληρης σελίδας ή renders εκφωνήσεων
                if fig_meta.get("is_full_page_scan") or fig_meta.get("kind") in ("crop-render", "render"):
                    continue
                fig_url = f"{web_prefix}/{fig_file}"
                matched_item_idx = match_image_to_item(fig_meta, items)

                if matched_item_idx is not None and matched_item_idx < len(items):
                    target_item = items[matched_item_idx]
                    if "images" in target_item:
                        target_item["images"] = [
                            f"{web_prefix}/{img.split('/')[-1]}" if not img.startswith(web_prefix) and "#" in img else img
                            for img in target_item["images"]
                        ]
                        if fig_url not in target_item["images"]:
                            target_item["images"].append(fig_url)
                        target_item.pop("image", None)
                    elif "image" not in target_item:
                        target_item["image"] = fig_url
                    elif target_item["image"] != fig_url:
                        target_item["images"] = [target_item["image"], fig_url]
                        del target_item["image"]
                    touched = True
                else:
                    # Έλεγχος αν υπάρχει άλλο υποερώτημα (item) που αναφέρεται σε σχήμα/εικόνα και δεν έχει ακόμα εικόνα
                    next_item = next((it for it in items if any(w in normalize_gr(str(it.get("prompt") or it.get("subqPrompt") or "")) for w in ["σχημα", "διαγραμμα", "εικονα"]) and "image" not in it and "images" not in it), None)
                    if next_item:
                        next_item["image"] = fig_url
                        touched = True
                    else:
                        root_figs.append(fig_url)

            if root_figs:
                stem_has_fig = any(w in normalize_gr(str(ex.get("stem") or "")) for w in ["σχημα", "διαγραμμα", "εικονα", "κατωθι", "παρακατω"])
                if stem_has_fig or not any("image" in it for it in items):
                    ex["image"] = root_figs[0]
                    if len(root_figs) > 1:
                        ex["images"] = root_figs
                    touched = True
                else:
                    target_it = next((it for it in items if any(w in normalize_gr(str(it.get("prompt") or "")) for w in ["σχημα", "διαγραμμα", "εικονα"])), None)
                    if target_it:
                        if "image" not in target_it and "images" not in target_it:
                            target_it["image"] = root_figs[0]
                        elif "images" in target_it:
                            target_it["images"].extend([f for f in root_figs if f not in target_it["images"]])
                            target_it.pop("image", None)
                        else:
                            target_it["images"] = [target_it["image"]] + [f for f in root_figs if f != target_it["image"]]
                            del target_it["image"]
                        touched = True

            # Αν οποιοδήποτε υποερώτημα έχει δικές του εικόνες, δεν αφήνουμε διπλές εικόνες στην κορυφή της άσκησης
            if any("image" in it or "images" in it for it in items):
                if "image" in ex or "images" in ex:
                    ex.pop("image", None)
                    ex.pop("images", None)
                    touched = True

            for it in items:
                if "images" in it:
                    seen = set()
                    it["images"] = [x for x in it["images"] if not (x in seen or seen.add(x))]
                    if len(it["images"]) > 1 and "image" in it:
                        del it["image"]
                        touched = True
                    elif len(it["images"]) == 1 and "image" not in it:
                        it["image"] = it["images"][0]
                        del it["images"]
                        touched = True

            if sols:
                sol_urls = [f"{web_prefix}/{f}" for f in sols]
                ex["solutionImages"] = sol_urls
                # Αν υπάρχει item με υπόδειξη (hint) ή υπολογισμό από διάγραμμα, σύνδεσε το σχήμα λύσης ως hintImage
                target_hint_it = next((it for it in items if "hint" in it and "hintImage" not in it), None)
                if not target_hint_it and items:
                    target_hint_it = next((it for it in items if any(w in normalize_gr(str(it.get("prompt") or "")) for w in ["διαγραμμα", "σχημα", "παροχη", "υπολογισ"]) and "hintImage" not in it), None)
                if target_hint_it and "hintImage" not in target_hint_it:
                    target_hint_it["hintImage"] = sol_urls[0]
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
    p.add_argument("--min-size", type=int, default=40, help="Ελάχ. πλευρά px")
    p.add_argument("--min-area", type=int, default=4000, help="Ελάχ. εμβαδόν px²")
    p.add_argument(
        "--repeat-threshold",
        type=int,
        default=4,
        help="Αν εικόνα εμφανίζεται σε >=N σελίδες, αγνοείται (λογότυπο)",
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
    p.add_argument(
        "--attach-to-js",
        type=Path,
        default=None,
        help="Φάκελος JS ασκήσεων (π.χ. site/exercises/.../chapter-02) για αυτόματο attachment",
    )
    p.add_argument(
        "--web-prefix",
        default=None,
        help="Web prefix για frontend paths (π.χ. images/c/egkatastaseis-klimatismou/chapter-02)",
    )
    p.add_argument("-v", "--verbose", action="store_true")
    return p


def main() -> None:
    args = build_parser().parse_args()
    try:
        out_dir = extract(args.pdf, args)
        if args.attach_to_js:
            js_dir = Path(args.attach_to_js)
            js_files = list(js_dir.glob("*.js"))
            manifest_path = out_dir / "manifest.json"
            web_prefix = args.web_prefix
            if not web_prefix:
                meta = parse_meta_from_filename(args.pdf)
                if meta.get("grade") and meta.get("subject") and meta.get("chapter"):
                    web_prefix = web_prefix_for(meta["grade"], meta["subject"], meta["chapter"])
                else:
                    web_prefix = f"images/{out_dir.name}"
            count = attach_images_to_js_files(js_files, manifest_path, web_prefix)
            print(f"Ενημερώθηκαν {count} ασκήσεις σε {len(js_files)} JS αρχεία.")
    except Exception as exc:  # noqa: BLE001
        print(f"Σφάλμα: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
