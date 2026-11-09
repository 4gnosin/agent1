"""
src/tools/exercise_fixer.py
Υβριδικό εργαλείο στοχευμένης διόρθωσης ασκήσεων Τράπεζας Θεμάτων.
Εντοπίζει και διορθώνει ασκήσεις βάσει link ή κωδικού θέματος,
διαβάζοντας αποκλειστικά το αντίστοιχο PDF από τον φάκελο done/.
"""

from __future__ import annotations

import copy
import json
import os
import re
import sys
import urllib.request
from pathlib import Path
from typing import Any

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

import fitz

from src.validators.site_validator import SiteValidator

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None
    types = None


_CYRILLIC_HOMOGLYPHS = str.maketrans({
    "К": "Κ", "к": "κ",
    "А": "Α", "а": "α",
    "В": "Β",
    "Е": "Ε", "е": "ε",
    "Н": "Η",
    "М": "Μ",
    "О": "Ο", "о": "ο",
    "Р": "Ρ", "р": "ρ",
    "С": "Σ", "с": "σ",
    "Т": "Τ",
    "Х": "Χ", "х": "χ",
})


def normalize_cyrillic(text: str) -> str:
    """Μετατρέπει τυχόν κυριλλικά ομόγλυφα σε ελληνικά."""
    if not isinstance(text, str):
        return text
    return text.translate(_CYRILLIC_HOMOGLYPHS)


def clean_prose_latex(text: str) -> str:
    """Καθαρίζει γυμνό LaTeX σε πεζά κείμενα (π.χ. \\text{ }^\\circ\\text{C} -> °C, \\text{g} -> g) και raw HTML tags (<br> -> \\n\\n)."""
    if not isinstance(text, str):
        return text
    # Εάν είναι περικλεισμένο σε $ ... $, δεν το πειράζουμε
    if text.startswith("$") and text.endswith("$") and text.count("$") == 2:
        return text

    # Καθαρισμός βαθμών Κελσίου
    text = re.sub(r"\\text\{\s*\}\s*\^?\\circ\s*\\text\{C\}", "°C", text)
    text = re.sub(r"\^?\\circ\s*\\text\{C\}", "°C", text)
    text = re.sub(r"\\text\{\s*\^?\\circ\s*C\s*\}", "°C", text)
    text = re.sub(r"\\text\{\s*°C\s*\}", "°C", text)

    # Καθαρισμός \\text{μονάδων} σε πεζό κείμενο
    text = re.sub(r"\\text\{([a-zA-Z0-9/³²°%_ -]+)\}", r"\1", text)
    text = re.sub(r"\\text\{\s*\}", " ", text)
    text = re.sub(r"\\text\{([^}]+)\}", r"\1", text)

    # Καθαρισμός raw HTML tags σε strings άσκησης (<br>, <br/> κ.λπ.) σε καθαρά newlines
    text = re.sub(r"<br\s*/?>", "\n\n", text, flags=re.IGNORECASE)

    return text


def clean_obj_strings(obj: Any) -> Any:
    """Καθαρίζει αναδρομικά όλα τα strings ενός dict/list από κυριλλικά και γυμνό LaTeX."""
    if isinstance(obj, str):
        return clean_prose_latex(normalize_cyrillic(obj))
    if isinstance(obj, list):
        return [clean_obj_strings(x) for x in obj]
    if isinstance(obj, dict):
        return {k: clean_obj_strings(v) for k, v in obj.items()}
    return obj


def parse_exercise_target(target_str: str) -> dict[str, Any]:
    """
    Αναλύει το link, URI ή κωδικό που έδωσε ο χρήστης.
    Παραδείγματα:
      file:///C:/.../site/index.html#/thermo/board/ch12-27123
      #/thermo/board/ch12-27123
      ch12-27123
      #27123 ή 27123
    """
    cleaned = target_str.strip().strip("'\"")
    
    # 1. Αναζήτηση κωδικού τράπεζας (5 ψηφία)
    code_match = re.search(r"(?:ch(?P<ch>\d{1,2})-)?(?P<code>\d{5})", cleaned)
    if not code_match:
        raise ValueError(f"Δεν βρέθηκε έγκυρος 5-ψήφιος κωδικός θέματος στο: '{target_str}'")

    bank_code = code_match.group("code")
    chapter_num = int(code_match.group("ch")) if code_match.group("ch") else None

    # 2. Αναζήτηση slug μαθήματος από URL (π.χ. #/thermo/board/...)
    route_match = re.search(r"#/(?P<subject>[^/]+)/board/(?P<id>[^/?#]+)", cleaned)
    subject_hint = route_match.group("subject") if route_match else None
    exercise_id = route_match.group("id") if route_match else (f"ch{chapter_num:02d}-{bank_code}" if chapter_num else None)

    return {
        "bank_code": bank_code,
        "chapter": chapter_num,
        "exercise_id": exercise_id,
        "subject_hint": subject_hint,
        "raw_target": target_str,
    }


def find_exercise_in_site(bank_code: str, site_dir: Path) -> dict[str, Any] | None:
    """
    Αναζητά ταχύτατα στα αρχεία JS του site την άσκηση με τον δεδομένο κωδικό.
    """
    val = SiteValidator()
    exercises_dir = site_dir / "exercises"
    if not exercises_dir.exists():
        return None

    for root, _, files in os.walk(exercises_dir):
        for f in files:
            if f.endswith(".js") and f != "groups.js":
                file_path = Path(root) / f
                try:
                    with open(file_path, "r", encoding="utf-8") as fh:
                        content = fh.read()
                except Exception:
                    continue

                if f'"{bank_code}"' in content or f"#{bank_code}" in content or f"-{bank_code}" in content:
                    extracted = val.extract_json_from_js(content)
                    for ex in extracted:
                        if bank_code in str(ex.get("id", "")) or bank_code in str(ex.get("bankCode", "")):
                            # Εντοπισμός βαθμίδας, μαθήματος, κεφαλαίου από το μονοπάτι
                            rel = file_path.relative_to(exercises_dir)
                            parts = rel.parts
                            grade = parts[0] if len(parts) > 0 else "b"
                            subject = parts[1] if len(parts) > 1 else ""
                            ch_part = parts[2] if len(parts) > 2 else ""
                            ch_m = re.search(r"chapter-(\d+)", ch_part)
                            chapter = int(ch_m.group(1)) if ch_m else 1

                            header_style = "EXERCISES"
                            subject_key = subject
                            if "window.SUBJECT_DATA" in content:
                                header_style = "SUBJECT_DATA"
                                s_match = re.search(r'window\.SUBJECT_DATA\["([^"]+)"\]', content)
                                if s_match:
                                    subject_key = s_match.group(1)

                            return {
                                "file_path": file_path,
                                "grade": grade,
                                "subject": subject,
                                "chapter": chapter,
                                "header_style": header_style,
                                "subject_key": subject_key,
                                "exercise": ex,
                                "full_data": extracted,
                                "content": content,
                            }
    return None


def locate_matching_pdf(grade: str, subject: str, chapter: int, bank_code: str, base_dir: Path) -> Path | None:
    """
    Εντοπίζει αποκλειστικά το αντίστοιχο PDF στο data/inbox/done βάσει βαθμίδας/μαθήματος/κεφαλαίου.
    """
    done_dir = base_dir / "data" / "inbox" / "done"
    if not done_dir.exists():
        done_dir = base_dir / "data" / "inbox"

    candidates = list(done_dir.glob("*.pdf"))

    # 1. Αυστηρή αντιστοίχιση: {grade}_{subject}*ch{chapter}*.pdf
    ch_str = f"ch{chapter:02d}"
    ch_str_alt = f"ch{chapter}"
    for cand in candidates:
        name_lower = cand.name.lower()
        if subject.lower() in name_lower and (ch_str in name_lower or ch_str_alt in name_lower):
            return cand

    # 2. Χαλαρή αντιστοίχιση: κεφάλαιο και τμήμα ονόματος μαθήματος
    subj_tokens = [t for t in subject.lower().split("-") if len(t) > 3]
    for cand in candidates:
        name_lower = cand.name.lower()
        if any(tok in name_lower for tok in subj_tokens) and (ch_str in name_lower or ch_str_alt in name_lower):
            return cand

    # 3. Έλεγχος αν περιέχει τον ίδιο τον κωδικό
    for cand in candidates:
        if bank_code in cand.name:
            return cand

    # 4. Fallback: λήψη απευθείας από το site του Ι.Ε.Π.
    iep_url = f"https://subjects.draw.iep.edu.gr/{bank_code}-1?unique_identifier={bank_code}&file_type=1"
    try:
        temp_pdf = done_dir / f"iep_{bank_code}.pdf"
        req = urllib.request.Request(iep_url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req, timeout=12) as resp:
            data = resp.read()
            if len(data) > 1000:
                temp_pdf.write_bytes(data)
                return temp_pdf
    except Exception:
        pass

    return None


def extract_pdf_code_pages(pdf_path: Path, bank_code: str) -> dict[str, Any]:
    """
    Ανακτά ΟΛΕΣ τις σελίδες της εκφώνησης (συμπεριλαμβανομένων σελίδων συνέχειας χωρίς κεφαλίδα)
    και της ενδεικτικής λύσης για το συγκεκριμένο θέμα.
    """
    from src.utils.image_extractor import page_role_and_code

    doc = fitz.open(pdf_path)
    question_pages: list[fitz.Page] = []
    solution_pages: list[fitz.Page] = []

    last_code: str | None = None
    last_role: str = "fig"

    for page in doc:
        code, role, _ = page_role_and_code(page)
        if code:
            last_code = code
            last_role = role
        else:
            code = last_code
            role = last_role

        if code == bank_code:
            if role == "sol":
                solution_pages.append(page)
            else:
                question_pages.append(page)

    # Fallback αν δεν βρέθηκε μέσω page_role_and_code
    if not question_pages and doc.page_count > 0:
        for page in doc:
            text = page.get_text()
            if bank_code in text:
                if "ΕΝΔΕΙΚΤΙΚΕΣ ΑΠΑΝΤΗΣΕΙΣ" in text or "Λύση" in text:
                    solution_pages.append(page)
                else:
                    question_pages.append(page)

    return {
        "doc": doc,
        "question_pages": question_pages,
        "solution_pages": solution_pages,
        "question_page": question_pages[0] if question_pages else None,
        "solution_page": solution_pages[0] if solution_pages else None,
    }


def check_and_fix_vector_diagrams(
    pdf_info: dict[str, Any],
    bank_code: str,
    grade: str,
    subject: str,
    chapter: int,
    ex: dict[str, Any],
    site_dir: Path,
) -> tuple[list[str], list[dict[str, Any]]]:
    """
    Ελέγχει και επανεξάγει ΟΛΕΣ τις ενσωματωμένες εικόνες (συμπεριλαμβανομένων επαναλαμβανόμενων
    xref στην ίδια σελίδα και ζευγών εικόνων δίπλα-δίπλα) καθώς και διανυσματικά σχήματα
    (vector drawings) σε όλες τις σελίδες του θέματος.
    """
    import hashlib
    from src.utils.image_extractor import (
        get_image_spatial_context,
        group_candidates_into_rows,
        load_pixmap,
        stitch_contiguous_slices,
    )

    fixes: list[str] = []
    doc = pdf_info.get("doc")
    q_pages: list[fitz.Page] = pdf_info.get("question_pages") or (
        [pdf_info["question_page"]] if pdf_info.get("question_page") else []
    )
    if not doc or not q_pages:
        return fixes, []

    img_dir = site_dir / "images" / grade / subject / f"chapter-{chapter:02d}"
    img_dir.mkdir(parents=True, exist_ok=True)
    stem = f"{grade}_{subject}_ch{chapter:02d}"

    # Καθαρισμός τυχόν προσωρινών raw_xref_*.png
    for raw_f in img_dir.glob("raw_xref_*.png"):
        try:
            raw_f.unlink()
        except Exception:
            pass

    # 1. Συλλογή όλων των embedded placements από όλες τις σελίδες εκφώνησης του θέματος
    extracted_figs: list[dict[str, Any]] = []
    seen_hashes: dict[str, str] = {}
    fig_counter = 0
    last_anchor: str | None = None

    for page in q_pages:
        pno = page.number
        page_num = pno + 1
        page_imgs = page.get_images(full=True)
        smask_by_xref = {img[0]: img[1] for img in page_imgs}
        placements: list[tuple[int, int, list[float] | None]] = []
        seen_xrefs: set[int] = set()
        for info in page.get_image_info(xrefs=True):
            _xr = info.get("xref")
            _bb = info.get("bbox")
            if _xr and _bb:
                placements.append((_xr, smask_by_xref.get(_xr, 0), list(_bb)))
                seen_xrefs.add(_xr)
        for img in page_imgs:
            xref, smask = img[0], img[1]
            if xref not in seen_xrefs:
                placements.append((xref, smask, None))

        raw_candidates = []
        for xref, smask, img_bbox in placements:
            pix = load_pixmap(doc, xref, smask)
            if pix is None:
                continue
            w, h = pix.width, pix.height
            if min(w, h) < 40 or w * h < 4000:
                continue
            raw_candidates.append({
                "xref": xref,
                "smask": smask,
                "pix": pix,
                "bbox": list(img_bbox) if img_bbox else None,
            })

        candidates = stitch_contiguous_slices(raw_candidates)
        candidates = group_candidates_into_rows(candidates, page_num)

        for cand in candidates:
            xref = cand["xref"]
            pix = cand["pix"]
            img_bbox = cand["bbox"]
            w, h = pix.width, pix.height
            digest = hashlib.sha1(pix.samples).hexdigest()
            pos_bucket = round(img_bbox[1] / 35.0) if img_bbox else 0
            x_bucket = round(img_bbox[0] / 35.0) if img_bbox else 0
            key = f"{bank_code}:fig:{pno}:{pos_bucket}:{x_bucket}:{w}x{h}:{digest}"
            if key in seen_hashes:
                continue

            fig_counter += 1
            name = f"{stem}_#{bank_code}_fig{fig_counter:02d}.png"
            has_overlays = False
            if img_bbox:
                r_img = fitz.Rect(img_bbox)
                for b in page.get_text("blocks"):
                    bt = b[4].strip()
                    if not bt:
                        continue
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
                pix = page.get_pixmap(clip=fitz.Rect(img_bbox), dpi=160, alpha=False)

            pix.save(str(img_dir / name))
            seen_hashes[key] = name
            spatial_ctx = get_image_spatial_context(page, img_bbox, fallback_anchor=last_anchor)
            if spatial_ctx.get("question_anchor"):
                last_anchor = spatial_ctx["question_anchor"]

            entry = {
                "file": name,
                "bank_code": bank_code,
                "role": "fig",
                "page": page_num,
                "kind": "embedded",
                "width": w,
                "height": h,
                "sha1": digest[:12],
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
            extracted_figs.append(entry)

        for b in sorted(page.get_text("blocks"), key=lambda x: (x[1], x[0])):
            if b[1] < 55:
                continue
            m_anc = re.findall(r"(?:^|\s)([24]\.[1-9][a-z\u03b1-\u03c9]?)\b", b[4].strip())
            if m_anc:
                last_anchor = m_anc[-1]

    # Έλεγχος αν υπήρχαν λιγότερες/διαφορετικές εικόνες στην άσκηση JS
    existing_js_figs: set[str] = set()
    if ex.get("image"):
        existing_js_figs.add(str(ex["image"]).split("/")[-1])
    for im in ex.get("images") or []:
        existing_js_figs.add(str(im).split("/")[-1])
    for it in ex.get("items") or []:
        if it.get("image"):
            existing_js_figs.add(str(it["image"]).split("/")[-1])
        for im in it.get("images") or []:
            existing_js_figs.add(str(im).split("/")[-1])

    extracted_names = [e["file"] for e in extracted_figs]
    if extracted_figs and set(extracted_names) != existing_js_figs:
        fixes.append(
            f"Εξήχθησαν όλες οι εικόνες του θέματος #{bank_code} από το PDF "
            f"({len(extracted_figs)} σχήματα: {', '.join(extracted_names)}, έναντι {len(existing_js_figs)} προηγουμένως)"
        )

    # Ενημέρωση manifest.json αν εξήχθησαν embedded εικόνες
    if extracted_figs:
        m_path = img_dir / "manifest.json"
        if m_path.exists():
            try:
                m_data = json.loads(m_path.read_text(encoding="utf-8"))
                by_bc = m_data.setdefault("by_bank_code", {})
                bc_entry = by_bc.setdefault(bank_code, {"fig": [], "sol": [], "images": []})
                bc_entry["fig"] = extracted_names
                sol_entries = [x for x in bc_entry.get("images", []) if x.get("role") == "sol"]
                bc_entry["images"] = extracted_figs + sol_entries
                # Ενημέρωση και της επίπεδης λίστας images
                other_imgs = [
                    x for x in m_data.get("images", [])
                    if not (str(x.get("bank_code")) == bank_code and x.get("role") == "fig")
                ]
                m_data["images"] = other_imgs + extracted_figs
                m_path.write_text(json.dumps(m_data, ensure_ascii=False, indent=2), encoding="utf-8")
            except Exception:
                pass
        return fixes, extracted_figs

    # 2. Fallback: Έλεγχος αν υπάρχουν διανυσματικά σχέδια (>= 10) όταν δεν υπάρχουν embedded εικόνες
    q_page = q_pages[0]
    drawings = q_page.get_drawings()
    has_vector = len(drawings) >= 10
    diag_rects = [d["rect"] for d in drawings if d["rect"].width > 10 and d["rect"].height > 10]

    if has_vector and diag_rects:
        min_x = max(0.0, min(dr.x0 for dr in diag_rects) - 25.0)
        min_y = max(q_page.rect.height * 0.08, min(dr.y0 for dr in diag_rects) - 20.0)
        max_x = min(q_page.rect.width, max(dr.x1 for dr in diag_rects) + 25.0)
        max_y = min(q_page.rect.height * 0.95, max(dr.y1 for dr in diag_rects) + 20.0)

        fig_file = f"{stem}_#{bank_code}_fig01.png"
        fig_full_path = img_dir / fig_file

        needs_render = False
        if not fig_full_path.exists():
            needs_render = True
        else:
            try:
                im = fitz.open(fig_full_path)
                if im[0].rect.width < 250 or im[0].rect.height < 150:
                    needs_render = True
            except Exception:
                needs_render = True

        if needs_render:
            clip = fitz.Rect(min_x, min_y, max_x, max_y)
            pix = q_page.get_pixmap(clip=clip, dpi=200)
            pix.save(str(fig_full_path))
            fixes.append(f"Εξήχθη διανυσματικό σχήμα σε 200 DPI: {fig_file} ({pix.width}x{pix.height})")

            m_path = img_dir / "manifest.json"
            if m_path.exists():
                try:
                    with open(m_path, "r", encoding="utf-8") as mfh:
                        m_data = json.load(mfh)
                    by_bc = m_data.setdefault("by_bank_code", {})
                    entry = by_bc.setdefault(bank_code, {"fig": [], "sol": [], "images": []})
                    if fig_file not in entry["fig"]:
                        entry["fig"].append(fig_file)
                    with open(m_path, "w", encoding="utf-8") as mfh:
                        json.dump(m_data, mfh, indent=2, ensure_ascii=False)
                except Exception:
                    pass

    return fixes, extracted_figs


def reconstruct_interleaved_multipart_subquestions(
    ex: dict[str, Any],
    q_text: str,
    sol_text: str,
    fig_entries: list[dict[str, Any]],
    web_prefix: str,
) -> list[str]:
    """
    Εντοπίζει αν ένα υποερώτημα του PDF (π.χ. 2.2) περιέχει αριθμημένα επιμέρους ερωτήματα (1., 2., 3.)
    με δικές τους επιλογές πολλαπλής επιλογής (α., β., γ.) και ενδιάμεσα ζεύγη εικόνων δίπλα-δίπλα,
    και αποκαθιστά αυτόματα την ακριβή διάταξη αν είχαν συμπτυχθεί λανθασμένα σε 'match' ή
    είχαν λάθος κατανομή εικόνων/απαντήσεων.
    """
    from src.utils.pdf_extractor import clean_greek_pdf_text

    fixes: list[str] = []
    if not q_text or not ex.get("items"):
        return fixes

    cleaned_q = clean_greek_pdf_text(q_text)
    cleaned_sol = clean_greek_pdf_text(sol_text or "")

    # Εύρεση ενοτήτων υποερωτημάτων (π.χ. 2.1, 2.2, 4.1, 4.2) στην εκφώνηση
    subq_matches = list(re.finditer(r"(?m)^\s*([24]\.[1-9])\s*[\.\)]?\s*", cleaned_q))
    if not subq_matches:
        return fixes

    gr_to_lat = {"α": "a", "β": "b", "γ": "c", "δ": "d", "ε": "e"}
    lat_to_gr = {"a": "α", "b": "β", "c": "γ", "d": "δ", "e": "ε"}

    for idx_sq, sq_m in enumerate(subq_matches):
        subq_code = sq_m.group(1)
        sq_start = sq_m.start()
        sq_end = subq_matches[idx_sq + 1].start() if idx_sq + 1 < len(subq_matches) else len(cleaned_q)
        sq_body = cleaned_q[sq_start:sq_end].strip()
        # Αφαίρεση "Μονάδες ΧΧ" στο τέλος
        sq_body = re.sub(r"(?m)^\s*Μονάδες\s+\d+\s*$", "", sq_body).strip()

        # Αναζήτηση αριθμημένων τμημάτων 1., 2., 3. μέσα στο υποερώτημα (χωρίς να ταιριάζει το 2.2. ή να καταπίνει επόμενη γραμμή)
        part_matches = list(re.finditer(r"(?m)^[ \t]*([1-9])[ \t]*\.(?!\d)[ \t]*(.*)$", sq_body))
        if len(part_matches) < 2:
            continue

        # Έλεγχος ότι τα τμήματα είναι διαδοχικά (1, 2, ...) και το καθένα έχει επιλογές α., β., γ.
        nums = [int(pm.group(1)) for pm in part_matches]
        if nums != list(range(1, len(part_matches) + 1)):
            continue

        subq_intro_raw = sq_body[: part_matches[0].start()].strip()
        # Αφαίρεση τυχόν markdown image tags από το intro
        subq_intro = re.sub(r"!\[[^\]]*\]\([^\)]*\)", "", subq_intro_raw)
        subq_intro = re.sub(r"<!--[^>]*-->", "", subq_intro)
        subq_intro = re.sub(r"\s+", " ", subq_intro).strip()

        parsed_parts: list[dict[str, Any]] = []
        valid_multipart_mc = True

        for p_idx, pm in enumerate(part_matches):
            p_num = pm.group(1)
            p_title = pm.group(2).strip()
            p_start = pm.end()
            p_end = part_matches[p_idx + 1].start() if p_idx + 1 < len(part_matches) else len(sq_body)
            p_chunk = sq_body[p_start:p_end]

            # Αφαίρεση τυχόν markdown image tags και HTML comments από το chunk επιλογών
            p_chunk_clean = re.sub(r"!\[[^\]]*\]\([^\)]*\)", "", p_chunk)
            p_chunk_clean = re.sub(r"<!--[^>]*-->", "", p_chunk_clean)

            opt_matches = list(
                re.finditer(
                    r"(?m)^[ \t]*([αβγδε])[ \t]*[\.\)][ \t]*(.+?)(?=(?:^[ \t]*[αβγδε][ \t]*[\.\)])|\Z)",
                    p_chunk_clean,
                    flags=re.DOTALL | re.MULTILINE,
                )
            )
            if len(opt_matches) < 2:
                valid_multipart_mc = False
                break

            options = []
            for om in opt_matches:
                opt_gr = om.group(1).lower()
                opt_id = gr_to_lat.get(opt_gr, opt_gr)
                opt_txt = re.sub(r"\s+", " ", om.group(2).strip())
                options.append({"id": opt_id, "text": opt_txt})

            parsed_parts.append({
                "num": p_num,
                "title": p_title,
                "options": options,
                "images": [],
            })

        if not valid_multipart_mc:
            continue

        n_parts = len(parsed_parts)

        # Ομαδοποίηση εικόνων του υποερωτήματος σε οριζόντιες γραμμές (ζεύγη δίπλα-δίπλα)
        sq_figs = [f for f in fig_entries if str(f.get("question_anchor") or "").strip() == subq_code]
        if not sq_figs and len(fig_entries) >= n_parts:
            sq_figs = fig_entries

        rows_ordered: list[list[dict[str, Any]]] = []
        row_map: dict[str, list[dict[str, Any]]] = {}
        for im in sq_figs:
            rid = im.get("row_id") or im["file"]
            if rid not in row_map:
                row_map[rid] = []
                rows_ordered.append(row_map[rid])
            row_map[rid].append(im)

        if len(rows_ordered) == n_parts:
            for p_dict, r_imgs in zip(parsed_parts, rows_ordered, strict=False):
                p_dict["images"] = [f"{web_prefix}/{im['file']}" for im in r_imgs]
        elif len(sq_figs) == 2 * n_parts:
            for idx_p, p_dict in enumerate(parsed_parts):
                pair = sq_figs[2 * idx_p : 2 * idx_p + 2]
                p_dict["images"] = [f"{web_prefix}/{im['file']}" for im in pair]
        elif len(sq_figs) == n_parts:
            for idx_p, p_dict in enumerate(parsed_parts):
                p_dict["images"] = [f"{web_prefix}/{sq_figs[idx_p]['file']}"]

        # Εξαγωγή επίσημων απαντήσεων από τη λύση του Ι.Ε.Π. (π.χ. "1-β, 2-γ, 3-α")
        sol_section = cleaned_sol
        m_sol_sq = re.search(rf"(?m)^\s*{re.escape(subq_code)}\s*[\.\)]?", cleaned_sol)
        if m_sol_sq:
            sol_section = cleaned_sol[m_sol_sq.end() :]
            m_next_sq = re.search(r"(?m)^\s*[24]\.[1-9]\s*[\.\)]?", sol_section)
            if m_next_sq:
                sol_section = sol_section[: m_next_sq.start()]

        sol_answers: dict[str, str] = {}
        for m_ans in re.finditer(r"(?P<left>[1-9])\s*[-–—>➔:\.]\s*(?P<right>[α-ωa-eΑ-ΩA-E])", sol_section):
            l_val = m_ans.group("left")
            r_val = m_ans.group("right").lower()
            sol_answers[l_val] = gr_to_lat.get(r_val, r_val)

        # Έλεγχος υπαρχόντων items της άσκησης για το συγκεκριμένο subq
        items = ex.get("items") or []
        target_idxs = [
            i for i, it in enumerate(items)
            if str(it.get("subq") or "").strip() == subq_code
            or str(it.get("subqPrompt") or "").strip().startswith(subq_code)
            or str(it.get("prompt") or "").strip().startswith(subq_code)
        ]
        if not target_idxs:
            # Fallback: αν υπάρχει match item με left IDs 1..n_parts
            target_idxs = [
                i for i, it in enumerate(items)
                if it.get("kind") == "match"
                and [str(x.get("id")) for x in (it.get("left") or []) if isinstance(x, dict)] == [str(k) for k in range(1, n_parts + 1)]
            ]
        if not target_idxs:
            continue

        needs_rebuild = False
        if len(target_idxs) != n_parts:
            needs_rebuild = True
        else:
            for idx_p, (it_idx, p_dict) in enumerate(zip(target_idxs, parsed_parts, strict=False)):
                cur_it = items[it_idx]
                if cur_it.get("kind") != "mc":
                    needs_rebuild = True
                    break
                cur_imgs = cur_it.get("images") or ([cur_it["image"]] if cur_it.get("image") else [])
                if p_dict["images"] and cur_imgs != p_dict["images"]:
                    needs_rebuild = True
                    break
                exp_ans = sol_answers.get(p_dict["num"])
                if exp_ans and cur_it.get("answer") != exp_ans:
                    needs_rebuild = True
                    break
                cur_opts = [str(o.get("text") or "").strip() for o in (cur_it.get("options") or [])]
                exp_opts = [o["text"] for o in p_dict["options"]]
                if cur_opts != exp_opts:
                    needs_rebuild = True
                    break

        if needs_rebuild:
            rebuilt_items: list[dict[str, Any]] = []
            for idx_p, p_dict in enumerate(parsed_parts):
                p_num = p_dict["num"]
                ans_id = sol_answers.get(p_num, "a")
                ans_gr = lat_to_gr.get(ans_id, ans_id)
                correct_txt = next((o["text"] for o in p_dict["options"] if o["id"] == ans_id), "")
                new_it: dict[str, Any] = {
                    "kind": "mc",
                    "subq": subq_code,
                }
                if idx_p == 0 and subq_intro:
                    new_it["subqPrompt"] = subq_intro
                new_it["prompt"] = f"{p_num}." if not p_dict["title"] else f"{p_num}. {p_dict['title']}"
                if len(p_dict["images"]) > 1:
                    new_it["images"] = p_dict["images"]
                    new_it["imageLayout"] = "grid"
                elif len(p_dict["images"]) == 1:
                    new_it["image"] = p_dict["images"][0]
                new_it["options"] = p_dict["options"]
                new_it["answer"] = ans_id
                new_it["explain"] = (
                    f"Σύμφωνα με τις επίσημες ενδεικτικές απαντήσεις του Ι.Ε.Π. ({p_num} – {ans_gr}), "
                    f"για το {p_num}ο ζεύγος δοκών/σχημάτων ισχύει η πρόταση {ans_gr}: «{correct_txt}»"
                )
                rebuilt_items.append(new_it)

            first_pos = target_idxs[0]
            last_pos = target_idxs[-1]
            ex["items"] = items[:first_pos] + rebuilt_items + items[last_pos + 1 :]
            fixes.append(
                f"Αποκαταστάθηκε η αυθεντική διάταξη του υποερωτήματος {subq_code} βάσει PDF: "
                f"{n_parts} διαδοχικά ερωτήματα πολλαπλής επιλογής (1..{n_parts}), "
                f"με τα ζεύγη εικόνων δίπλα-δίπλα (grid) και τις επίσημες απαντήσεις Ι.Ε.Π. "
                f"({', '.join(f'{k}-{lat_to_gr.get(v, v)}' for k, v in sorted(sol_answers.items()))})"
            )

    return fixes


def normalize_exercise_images(ex: dict[str, Any], web_prefix: str) -> list[str]:
    """
    Εξομαλύνει όλα τα μονοπάτια εικόνων της άσκησης και αφαιρεί διπλότυπα.
    """
    fixes: list[str] = []
    items = ex.get("items") or []

    # 1. Διόρθωση μονοπατιών στα items
    for it in items:
        # image
        if "image" in it:
            old = it["image"]
            f_name = old.split("/")[-1]
            it["image"] = f"{web_prefix}/{f_name}"
            if old != it["image"]:
                fixes.append(f"Διορθώθηκε μονοπάτι εικόνας υποερωτήματος: {f_name}")

        # images
        if "images" in it:
            clean_imgs = []
            for img in it["images"]:
                f_name = img.split("/")[-1]
                clean_imgs.append(f"{web_prefix}/{f_name}")
            # deduplicate
            seen = set()
            it["images"] = [x for x in clean_imgs if not (x in seen or seen.add(x))]

            # Αν υπάρχουν πολλαπλές εικόνες, αφαίρεση του μεμονωμένου item.image
            if len(it["images"]) > 1:
                if "image" in it:
                    del it["image"]
                    fixes.append("Αφαιρέθηκε διπλότυπο item.image (υπάρχει ήδη πίνακας images)")
                if "imageLayout" not in it:
                    it["imageLayout"] = "grid"
                    fixes.append("Προστέθηκε imageLayout: grid")
                if it.get("kind") == "match" and "imageLabels" not in it:
                    it["imageLabels"] = [f"{idx+1}. Σχήμα {idx+1}" for idx in range(len(it["images"]))]
                    fixes.append("Προστέθηκαν imageLabels για πολλαπλές εικόνες")
                elif it.get("kind") != "match" and "imageLabels" in it:
                    if all(re.match(r"^\d+\.\s*Σχήμα\s*\d+$", str(x)) for x in it["imageLabels"]):
                        del it["imageLabels"]
            elif len(it["images"]) == 1 and "image" not in it:
                it["image"] = it["images"][0]
                del it["images"]

        # hintImage
        if "hintImage" in it:
            f_name = it["hintImage"].split("/")[-1]
            it["hintImage"] = f"{web_prefix}/{f_name}"

    # 2. Αφαίρεση διπλότυπων από τη ρίζα αν τα items έχουν δικές τους εικόνες
    if any("image" in it or "images" in it for it in items):
        if "image" in ex:
            del ex["image"]
            fixes.append("Αφαιρέθηκε περιττή εικόνα από τη ρίζα της άσκησης (υπάρχει στα items)")
        if "images" in ex:
            del ex["images"]
            fixes.append("Αφαιρέθηκε πίνακας εικόνων από τη ρίζα της άσκησης")
    elif "image" in ex:
        f_name = ex["image"].split("/")[-1]
        ex["image"] = f"{web_prefix}/{f_name}"

    return fixes


def verify_solution_pairs(ex: dict[str, Any], sol_pages: list[fitz.Page] | fitz.Page | None) -> list[str]:
    """
    Ελέγχει τα pairs σε ασκήσεις αντιστοίχισης με βάση τις επίσημες απαντήσεις του PDF.
    """
    fixes: list[str] = []
    if not sol_pages:
        return fixes

    if isinstance(sol_pages, list):
        sol_text = "\n".join(p.get_text() for p in sol_pages)
    else:
        sol_text = sol_pages.get_text()

    items = ex.get("items") or []
    gr_to_lat = {"α": "a", "β": "b", "γ": "c", "δ": "d", "ε": "e"}

    for it in items:
        if it.get("kind") == "match" and "pairs" in it:
            found_pairs = {}
            for m in re.finditer(r"(?P<left>[1-9])\s*[-–—>➔]\s*(?P<right>[α-ωa-eΑ-ΩA-E])", sol_text):
                l_val = m.group("left")
                r_val = m.group("right").lower()
                r_id = gr_to_lat.get(r_val, r_val)
                found_pairs[l_val] = r_id

            if found_pairs:
                current_pairs = it["pairs"]
                changed = False
                for k, v in found_pairs.items():
                    if k in current_pairs and current_pairs[k] != v:
                        fixes.append(f"Διορθώθηκε αντιστοίχιση pair {k}: {current_pairs[k]} ➔ {v} (βάσει Ι.Ε.Π.)")
                        current_pairs[k] = v
                        changed = True
                if changed:
                    it["pairs"] = current_pairs

    return fixes


def fix_exercise_with_gemini(
    ex: dict[str, Any],
    pdf_info: dict[str, Any] | None,
    bank_code: str,
    grade: str,
    subject: str,
    chapter: int,
    user_hint: str = "",
) -> tuple[dict[str, Any], list[str]]:
    """
    Πολυτροπική διόρθωση της άσκησης μέσω Gemini AI (Vision & Reasoning),
    συγκρίνοντας το τρέχον JSON απευθείας με τις σελίδες του πρωτότυπου PDF του ΙΕΠ.
    """
    if genai is None or types is None:
        return ex, ["⚠️ Η βιβλιοθήκη 'google-genai' δεν είναι εγκατεστημένη."]

    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return ex, ["⚠️ Δεν βρέθηκε GEMINI_API_KEY στο .env. Παράλειψη AI ελέγχου."]

    try:
        client = genai.Client(
            api_key=api_key,
            http_options=types.HttpOptions(client_args={"verify": False}) if types else None,
        )
    except Exception as e:
        return ex, [f"⚠️ Αποτυχία αρχικοποίησης Gemini Client: {e}"]

    # 1. Συλλογή εικόνων σελίδων PDF (Εκφώνηση & Λύση)
    multimodal_parts: list[Any] = []
    if pdf_info:
        q_pages = pdf_info.get("question_pages") or []
        s_pages = pdf_info.get("solution_pages") or []
        for idx, p in enumerate(q_pages):
            try:
                pix = p.get_pixmap(dpi=150)
                multimodal_parts.append(types.Part.from_bytes(data=pix.tobytes("png"), mime_type="image/png"))
            except Exception as e:
                print(f"⚠️ Σφάλμα απόδοσης σελίδας εκφώνησης #{idx+1} σε εικόνα: {e}")
        for idx, p in enumerate(s_pages):
            try:
                pix = p.get_pixmap(dpi=150)
                multimodal_parts.append(types.Part.from_bytes(data=pix.tobytes("png"), mime_type="image/png"))
            except Exception as e:
                print(f"⚠️ Σφάλμα απόδοσης σελίδας λύσης #{idx+1} σε εικόνα: {e}")

    # 2. Σύνταξη prompt
    system_instruction = (
        "Είσαι ο εξειδικευμένος Exercise Fixer & ΕΠΑ.Λ. Mechanical Pedagogue του 4gnosin.github.io. "
        "Αποστολή σου είναι η άμεση, τέλεια και ποιοτική διόρθωση ασκήσεων Τράπεζας Θεμάτων "
        "συγκρίνοντας το τρέχον JSON της άσκησης με τις σελίδες του πρωτότυπου εγγράφου του Ι.Ε.Π. (Ground Truth). "
        "Εξαλείφεις γελοίους/άσχετους αντιπερισπασμούς, καθαρίζεις σκουπίδια OCR/HTML (π.χ. [br1], <br2>, br1), "
        "διορθώνεις το LaTeX/Unicode, εξασφαλίζεις ότι τα IDs επιλογών είναι 'a', 'b', 'c', 'd' "
        "και διατηρείς απόλυτη συνέπεια με τη δομή του 4gnosin."
    )

    user_prompt = (
        f"ΕΞΕΤΑΣΗ ΚΑΙ ΔΙΟΡΘΩΣΗ ΑΣΚΗΣΗΣ #{bank_code} ({grade.upper()}' ΕΠΑ.Λ. - {subject}, Κεφάλαιο {chapter})\n\n"
        f"Σου παρατίθενται οι σελίδες της επίσημης εκφώνησης και της ενδεικτικής λύσης του Ι.Ε.Π. (στις συνημμένες εικόνες).\n"
    )
    if user_hint:
        user_prompt += f"\n👉 ΕΙΔΙΚΗ ΠΑΡΑΤΗΡΗΣΗ ΧΡΗΣΤΗ ΓΙΑ ΤΟ ΣΦΑΛΜΑ:\n\"{user_hint}\"\nΔώσε ΑΠΟΛΥΤΗ ΠΡΟΤΕΡΑΙΟΤΗΤΑ στην επίλυση αυτής της παρατήρησης!\n\n"

    user_prompt += (
        f"ΤΡΕΧΟΝ JSON ΑΣΚΗΣΗΣ ΣΤΟ SITE (ΠΡΟΣ ΕΛΕΓΧΟ ΚΑΙ ΔΙΟΡΘΩΣΗ):\n"
        f"{json.dumps(ex, ensure_ascii=False, indent=2)}\n\n"
        f"ΚΑΝΟΝΕΣ ΠΟΙΟΤΗΤΑΣ & ΠΡΟΔΙΑΓΡΑΦΕΣ:\n"
        f"1. ΑΝΤΙΠΕΡΙΣΠΑΣΜΟΙ (DISTRACTORS):\n"
        f"   - Σε ερωτήματα πολλαπλής επιλογής ('mc'), ΟΛΕΣ οι λανθασμένες επιλογές ΠΡΕΠΕΙ να είναι επιστημονικά αληθοφανείς έννοιες του μαθήματος (π.χ. άλλες σχετικές φυσικές/τεχνικές μεταβλητές ή συνηθισμένα μαθητικά λάθη).\n"
        f"   - ΑΠΑΓΟΡΕΥΟΝΤΑΙ ΑΥΣΤΗΡΑ γελοίοι, εξωπραγματικοί ή προφανείς αντιπερισπασμοί (π.χ. 'χρώμα του σώματος', 'μάζα της γης', 'θερμοκρασία στον ήλιο').\n"
        f"   - Τα IDs των επιλογών στα 'options' ΠΡΕΠΕΙ να είναι strictly 'a', 'b', 'c', 'd' (ΠΟΤΕ 'correct', 'wrong1', 'wrong2').\n"
        f"   - Το πεδίο 'answer' ΠΡΕΠΕΙ να περιέχει το id της σωστής επιλογής (π.χ. 'a').\n"
        f"2. ΚΑΘΑΡΙΣΜΟΣ ΚΕΙΜΕΝΟΥ & ΣΚΟΥΠΙΔΙΩΝ:\n"
        f"   - Εξάλειψε τυχόν υπολείμματα OCR ή HTML: [br1], [br2], <br1>, <br2>, br1, br2, άσχετα tokens.\n"
        f"   - Μην αφήνεις γυμνά LaTeX commands (\\text{{}}, \\circ) σε πεζό κείμενο. Χρησιμοποίησε καθαρό Unicode (π.χ. °C, W/(m²·K), m³/kg) ή περίκλεισε αυστηρά σε $ ... $.\n"
        f"3. ΔΙΑΤΑΞΗ & ΣΧΗΜΑΤΑ:\n"
        f"   - Επαλήθευσε ότι όλα τα σχήματα του θέματος περιλαμβάνονται και έχουν σωστά paths.\n"
        f"   - Αν το θέμα έχει διαδοχικά υποερωτήματα με ζεύγη σχημάτων δίπλα-δίπλα, διατήρησε τα ως διαδοχικά items με imageLayout: 'grid'.\n"
        f"4. ΠΙΣΤΟΤΗΤΑ ΣΤΗ ΛΥΣΗ ΤΟΥ Ι.Ε.Π.:\n"
        f"   - Βεβαιώσου ότι η σωστή απάντηση ('answer') και η εξήγηση ('explain' / 'solution') συμφωνούν απόλυτα με την ενδεικτική λύση του Ι.Ε.Π.\n"
        f"   - Διατήρησε αναλλοίωτα τα metadata: id, group, bankCode, code, title, units, theory, sourceOrder.\n\n"
        f"ΕΠΕΣΤΡΕΨΕ ΑΠΟΚΛΕΙΣΤΙΚΑ ΕΓΚΥΡΟ JSON (χωρίς ```json backticks ή συνοδευτικά σχόλια) με τη μορφή:\n"
        f"{{\n"
        f"  \"fixes_summary\": [\n"
        f"    \"Περιγραφή διόρθωσης 1...\",\n"
        f"    \"Περιγραφή διόρθωσης 2...\"\n"
        f"  ],\n"
        f"  \"exercise\": {{ ... το πλήρες διορθωμένο αντικείμενο της άσκησης ... }}\n"
        f"}}"
    )

    multimodal_parts.append(user_prompt)

    # 3. Εκτέλεση με Candidate Fallback Models
    candidate_models = ["gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-3.8-flash"]
    raw_text = None
    last_err = None

    for model_name in candidate_models:
        try:
            print(f"   🤖 Κλήση AI μοντέλου {model_name}...")
            response = client.models.generate_content(
                model=model_name,
                contents=multimodal_parts,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    temperature=0.1,
                ),
            )
            if response and response.text:
                raw_text = response.text
                break
        except Exception as e:
            print(f"   ⚠️ Προσωρινό σφάλμα με {model_name}: {e}. Δοκιμή εναλλακτικού...")
            last_err = e

    if not raw_text:
        return None, [f"⚠️ Αποτυχία AI διόρθωσης με όλα τα διαθέσιμα μοντέλα: {last_err}"]

    # 4. Parsing JSON
    cleaned_json_str = raw_text.strip()
    if cleaned_json_str.startswith("```"):
        cleaned_json_str = re.sub(r"^```(?:json)?\s*", "", cleaned_json_str, flags=re.IGNORECASE)
        cleaned_json_str = re.sub(r"\s*```$", "", cleaned_json_str)

    try:
        parsed = json.loads(cleaned_json_str)
    except Exception as e:
        match = re.search(r"(\{.*\})", cleaned_json_str, re.DOTALL)
        if match:
            try:
                parsed = json.loads(match.group(1))
            except Exception:
                return None, [f"⚠️ Σφάλμα αποκωδικοποίησης JSON από την απάντηση του AI: {e}"]
        else:
            return None, [f"⚠️ Μη έγκυρο JSON από το AI: {e}"]

    fixed_ex = parsed.get("exercise")
    fixes = parsed.get("fixes_summary", [])

    if not fixed_ex or not isinstance(fixed_ex, dict) or "items" not in fixed_ex:
        return None, ["⚠️ Το AI δεν επέστρεψε έγκυρη δομή άσκησης ('exercise' key). Διατήρηση αρχικής."]

    return fixed_ex, fixes


def run_exercise_fix(
    target_str: str,
    base_dir: Path | None = None,
    user_hint: str = "",
) -> dict[str, Any]:
    """
    Κεντρική εκτέλεση της στοχευμένης διόρθωσης για ένα θέμα.
    """
    base_dir = base_dir or Path.cwd()
    site_dir = base_dir / "site"

    # 1. Ανάλυση στόχου
    target_info = parse_exercise_target(target_str)
    bank_code = target_info["bank_code"]
    print(f"\n🔍 [Target]: Θέμα #{bank_code}")

    # 2. Εντοπισμός αρχείου άσκησης στο site
    ex_info = find_exercise_in_site(bank_code, site_dir)
    if not ex_info:
        return {
            "success": False,
            "bank_code": bank_code,
            "error": f"Το θέμα #{bank_code} δεν βρέθηκε σε κανένα αρχείο ασκήσεων στο site/exercises/",
        }

    js_file = ex_info["file_path"]
    grade = ex_info["grade"]
    subject = ex_info["subject"]
    chapter = ex_info["chapter"]
    ex = ex_info["exercise"]
    full_data = ex_info["full_data"]
    header_style = ex_info["header_style"]
    subject_key = ex_info["subject_key"]
    web_prefix = f"images/{grade}/{subject}/chapter-{chapter:02d}"

    print(f"📄 [Αρχείο JS]: {js_file.relative_to(base_dir)}")
    print(f"📚 [Μάθημα]: {subject} (Τάξη {grade.upper()}, Κεφάλαιο {chapter})")

    # 3. Εντοπισμός PDF στο done/
    pdf_path = locate_matching_pdf(grade, subject, chapter, bank_code, base_dir)
    if pdf_path:
        print(f"📕 [PDF Πηγής]: {pdf_path.name}")
    else:
        print(f"⚠️ [PDF Πηγής]: Δεν βρέθηκε αντίστοιχο PDF στο done/ — θα εκτελεστούν τοπικές βελτιστοποιήσεις.")

    all_fixes: list[str] = []

    # 4. Έλεγχος & διόρθωση σχημάτων και δομής από το PDF
    if pdf_path:
        pdf_pages = extract_pdf_code_pages(pdf_path, bank_code)
        vec_fixes, extracted_figs = check_and_fix_vector_diagrams(
            pdf_pages, bank_code, grade, subject, chapter, ex, site_dir
        )
        all_fixes.extend(vec_fixes)

        q_pages = pdf_pages.get("question_pages") or []
        sol_pages = pdf_pages.get("solution_pages") or []

        # Σύνθεση κειμένου εκφώνησης με αυστηρή κατακόρυφη ταξινόμηση των text blocks ανά σελίδα
        q_blocks_text: list[str] = []
        for qp in q_pages:
            for b in sorted(qp.get_text("blocks"), key=lambda x: (x[1], x[0])):
                if b[6] == 0 and b[4].strip():
                    if b[1] < 35 and "#" in b[4]:
                        continue
                    q_blocks_text.append(b[4].strip())
        q_full_text = "\n\n".join(q_blocks_text)
        sol_full_text = "\n\n".join(sp.get_text() for sp in sol_pages)

        # 4b. Έλεγχος και αποκατάσταση διάταξης επάλληλων ερωτημάτων με ζεύγη εικόνων δίπλα-δίπλα (π.χ. 1., 2., 3. με α, β, γ)
        layout_fixes = reconstruct_interleaved_multipart_subquestions(
            ex, q_full_text, sol_full_text, extracted_figs, web_prefix
        )
        all_fixes.extend(layout_fixes)

        # 5. Έλεγχος pairs βάσει λύσης PDF
        pair_fixes = verify_solution_pairs(ex, sol_pages)
        all_fixes.extend(pair_fixes)

    # 5b. Πολυτροπικός Έλεγχος & Διόρθωση μέσω Gemini Multimodal AI
    print("🤖 [AI Multimodal Fixer]: Σύγκριση τρέχουσας άσκησης με τις σελίδες του PDF...")
    fixed_ai_ex, ai_fixes = fix_exercise_with_gemini(
        ex=copy.deepcopy(ex),
        pdf_info=pdf_pages if pdf_path else None,
        bank_code=bank_code,
        grade=grade,
        subject=subject,
        chapter=chapter,
        user_hint=user_hint,
    )
    if fixed_ai_ex and isinstance(fixed_ai_ex, dict) and fixed_ai_ex is not ex:
        ex.clear()
        ex.update(fixed_ai_ex)
    if ai_fixes:
        all_fixes.extend(ai_fixes)

    if pdf_path and pdf_pages and "doc" in pdf_pages:
        try:
            pdf_pages["doc"].close()
        except Exception:
            pass

    # 6. Εξομάλυνση εικόνων & paths
    img_fixes = normalize_exercise_images(ex, web_prefix)
    all_fixes.extend(img_fixes)

    # 7. Καθαρισμός κυριλλικών ομογλύφων & γυμνού LaTeX
    clean_ex = clean_obj_strings(ex)
    if clean_ex != ex:
        ex.clear()
        ex.update(clean_ex)
        all_fixes.append("Καθαρίστηκαν κυριλλικά ομόγλυφα χαρακτήρων και γυμνό LaTeX σε πεζό κείμενο")

    # 7b. Εξομάλυνση IDs επιλογών πολλαπλής επιλογής (a, b, c, d)
    for it in ex.get("items", []):
        if it.get("kind") == "mc" and "options" in it and isinstance(it["options"], list):
            opts = it["options"]
            needs_remap = any(str(o.get("id", "")).lower() in ("correct", "right", "wrong", "wrong1", "wrong2", "wrong3", "wrong4", "true", "false") for o in opts)
            if needs_remap:
                old_ans = str(it.get("answer", ""))
                letters = ["a", "b", "c", "d", "e"]
                new_ans = None
                for o_idx, opt in enumerate(opts):
                    old_id = str(opt.get("id", ""))
                    new_id = letters[o_idx] if o_idx < len(letters) else f"opt_{o_idx+1}"
                    if old_id == old_ans or (old_ans == "correct" and "correct" in old_id):
                        new_ans = new_id
                    opt["id"] = new_id
                if new_ans:
                    it["answer"] = new_ans
                all_fixes.append(f"Εξομαλύνθηκαν τα IDs των επιλογών σε {', '.join([o['id'] for o in opts])} (αποτροπή εμφάνισης 'correct/wrong' στο UI)")

    # 8. Αποθήκευση πίσω στο JS αρχείο
    for idx, item in enumerate(full_data):
        if item.get("id") == ex.get("id") or item.get("bankCode") == bank_code:
            full_data[idx] = ex
            break

    if header_style == "SUBJECT_DATA":
        header = (
            "window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n"
            f'window.SUBJECT_DATA["{subject_key}"] = window.SUBJECT_DATA["{subject_key}"] || {{ sections: [], groups: [], exercises: [] }};\n'
            f'window.SUBJECT_DATA["{subject_key}"].exercises.push(...\n'
        )
    else:
        header = "window.EXERCISES = window.EXERCISES || [];\nwindow.EXERCISES.push(...\n"

    new_content = header + json.dumps(full_data, ensure_ascii=False, indent=2) + "\n);\n"
    with open(js_file, "w", encoding="utf-8") as fh:
        fh.write(new_content)

    # 9. Επικύρωση με SiteValidator
    val = SiteValidator()
    val_errors = val.validate_exercises_file(str(js_file))

    success = len(val_errors) == 0

    print("\n" + "=" * 50)
    if all_fixes:
        print("✅ Εφαρμόστηκαν οι ακόλουθες διορθώσεις:")
        for fix in all_fixes:
            print(f"  • {fix}")
    else:
        print("ℹ️ Η άσκηση ήταν ήδη πλήρως συνεπής. Επανεπικυρώθηκε επιτυχώς.")

    if success:
        print(f"🎉 Το αρχείο επικυρώθηκε με 0 σφάλματα! (SiteValidator: OK)")
    else:
        print(f"⚠️ Προειδοποιήσεις SiteValidator: {val_errors}")
    print("=" * 50 + "\n")

    return {
        "success": success,
        "bank_code": bank_code,
        "file_path": str(js_file),
        "fixes": all_fixes,
        "validation_errors": val_errors,
    }


def get_clipboard_text() -> str:
    """Επιστρέφει το τρέχον κείμενο από το πρόχειρο των Windows (Clipboard)."""
    try:
        import tkinter as tk
        r = tk.Tk()
        r.withdraw()
        txt = r.clipboard_get()
        r.destroy()
        return txt.strip()
    except Exception:
        return ""


def is_candidate_target(txt: str) -> bool:
    """Ελέγχει αν το κείμενο μοιάζει με έγκυρο link ή κωδικό θέματος."""
    if not txt:
        return False
    if any(k in txt for k in ["#/", "file:", "http", "board/", "ch", "subjects.draw"]):
        return True
    if re.search(r"\b\d{4,5}\b", txt):
        return True
    return False


def interactive_cli():
    """Διαδραστική λειτουργία γραμμής εντολών με υποστήριξη ασφαλούς επικόλλησης & προχείρου."""
    print("=" * 64)
    print("  4gnosin - Αυτόματος Διορθωτής Ασκήσεων (Exercise Fixer)")
    print("  Στοχευμένη διόρθωση ασκήσεων & σχημάτων μέσω PDF")
    print("=" * 64)
    print()
    print("Μπορείτε να κάνετε απευθείας επικόλληση (Ctrl+V ή δεξί κλικ) εδώ:")
    print("  • Link browser: file:///.../site/index.html#/thermo/board/ch12-27123")
    print("  • Ή κωδικό θέματος: 27123 (ή #27123)")
    print("  • Πληκτρολογήστε 'q' για έξοδο.\n")

    while True:
        clip = get_clipboard_text()
        has_candidate = is_candidate_target(clip)

        if has_candidate:
            short_clip = clip if len(clip) <= 65 else clip[:62] + "..."
            print(f"📋 Ανιχνεύτηκε στο πρόχειρο (Clipboard): {short_clip}")
            print("   👉 Πατήστε [Enter] για χρήση του παραπάνω, ή επικολλήστε άλλο link:")

        try:
            user_input = input("👉 Link ή Κωδικός: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nΈξοδος.")
            break

        if not user_input:
            if has_candidate:
                user_input = clip
                print(f"   (Χρήση από το πρόχειρο: {user_input})")
            else:
                print("Δεν δόθηκε είσοδος. Πληκτρολογήστε 'q' για έξοδο ή επικολλήστε ένα link.\n")
                continue

        if user_input.lower() in ("q", "quit", "exit", "έξοδος"):
            print("Έξοδος.")
            break

        target = user_input.strip("'\"")

        try:
            user_hint = input("💬 Παρατήρηση/υπόδειξη [προαιρετικά - Enter για αυτόματη ανάλυση]: ").strip()
        except (EOFError, KeyboardInterrupt):
            user_hint = ""

        print("\n⏳ Έναρξη στοχευμένης διόρθωσης...")
        try:
            run_exercise_fix(target, user_hint=user_hint)
        except Exception as e:
            print(f"❌ Σφάλμα κατά τη διόρθωση: {e}")

        print("\n" + "-" * 64)
        print("Επόμενη διόρθωση (επικολλήστε νέο link ή πατήστε Enter αν αντιγράψατε νέο):")


def main():
    if len(sys.argv) > 1:
        target = sys.argv[1].strip().strip("'\"")
        user_hint = " ".join(sys.argv[2:]).strip() if len(sys.argv) > 2 else ""
        res = run_exercise_fix(target, user_hint=user_hint)
        sys.exit(0 if res.get("success") else 1)
    else:
        interactive_cli()
        sys.exit(0)


if __name__ == "__main__":
    main()
