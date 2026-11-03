"""
PDF Extractor Utility - Τοπική (offline) εξαγωγή κεφαλαίων από σχολικά PDF σε καθαρό Markdown.
Δεν καταναλώνει κανένα AI token.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path


# Mathematical Italic / bold-italic letters → plain ASCII (pypdf συχνά βγάζει αυτά)
_MATH_ITALIC_MAP = str.maketrans({
    **{0x1D434 + i: ord("A") + i for i in range(26)},  # 𝐴-𝑍
    **{0x1D44E + i: ord("a") + i for i in range(26)},  # 𝑎-𝑧
    **{0x1D468 + i: ord("A") + i for i in range(26)},  # 𝑨-𝒁 (bold italic)
    **{0x1D482 + i: ord("a") + i for i in range(26)},  # 𝒂-𝒛
    **{0x1D400 + i: ord("A") + i for i in range(26)},  # 𝐀-𝐙 bold
    **{0x1D41A + i: ord("a") + i for i in range(26)},  # 𝐚-𝐳
    **{0x1D5D4 + i: ord("A") + i for i in range(26)},  # 𝖪 sans (ενδεικτικά)
    # Greek math variants commonly seen
    0x1D6E2: ord("Α"), 0x1D6E4: ord("Γ"), 0x1D6E5: ord("Δ"),
    0x1D6EC: ord("Λ"), 0x1D6F1: ord("Π"), 0x1D6F4: ord("Σ"),
    0x1D6FC: ord("α"), 0x1D6FE: ord("γ"), 0x1D6FF: ord("δ"),
    0x1D70B: ord("π"), 0x1D70E: ord("σ"), 0x1D70F: ord("τ"),
})

_SYMBOL_REPLACEMENTS = (
    ("\uf0d7", "·"),  # private-use multiply (Word/Symbol)
    ("\uf0b7", "·"),
    ("", "·"),
    ("×", "·"),
    ("⋅", "·"),
    ("⇨", "⇒"),
    ("➔", "⇒"),
    ("\u2212", "-"),  # minus sign
    ("\u00a0", " "),  # nbsp
    ("\u200b", ""),   # zero-width space
)

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


def normalize_pdf_symbols(text: str) -> str:
    """
    Τοπικός καθαρισμός συμβόλων/μονάδων από extract PDF — 0 AI tokens.
    Δεν «μαντεύει» φυσική· διορθώνει μόνο επαναλαμβανόμενα artifacts του pypdf.
    """
    for old, new in _SYMBOL_REPLACEMENTS:
        text = text.replace(old, new)

    text = text.translate(_CYRILLIC_HOMOGLYPHS)
    text = text.translate(_MATH_ITALIC_MAP)

    # Κάθετα κλάσματα μονάδων:  15 \n KJ \n Kg  →  15 KJ/Kg
    unit = r"(?:k?J|KJ|kJ|N|W|Pa|bar|m|mm|cm|kg|Kg|KG|K|°C|kcal)"
    text = re.sub(
        rf"(?P<num>\d+(?:[.,]\d+)?)\s*[\r\n]+\s*(?P<numu>{unit})\s*[\r\n]+\s*(?P<denu>{unit})\b",
        r"\g<num> \g<numu>/\g<denu>",
        text,
        flags=re.IGNORECASE,
    )
    # Μονάδα μόνη σε δύο γραμμές μετά από αριθμό ήδη στην προηγούμενη: 790 \n KJ \n Kg
    text = re.sub(
        rf"(?P<num>\d+(?:[.,]\d+)?)\s+[\r\n]+\s*(?P<numu>{unit})\s*[\r\n]+\s*(?P<denu>{unit})\b",
        r"\g<num> \g<numu>/\g<denu>",
        text,
        flags=re.IGNORECASE,
    )
    #  KJ\nKg  χωρίς αριθμό ακριβώς πριν (μέσα σε τύπο)
    text = re.sub(
        rf"(?<![A-Za-z])(?P<numu>{unit})\s*[\r\n]+\s*(?P<denu>{unit})\b",
        r"\g<numu>/\g<denu>",
        text,
        flags=re.IGNORECASE,
    )

    # h 1 / h 2 → h1, h2 (συχνό στο extract)
    text = re.sub(r"\b([A-Za-zΑ-Ωα-ωΔδ])\s+(\d)\b", r"\1\2", text)

    # Πολλαπλά κενά
    text = re.sub(r"[ \t]{2,}", " ", text)
    return text


def sort_page_blocks_and_images(items: list[dict], page_width: float = 595.0) -> list[dict]:
    """
    Διατάσσει blocks και εικόνες σε φυσική αναγνωστική ροή,
    αναγνωρίζοντας περιοχές δύο στηλών (π.χ. Στήλη Α / Στήλη Β σε πίνακες αντιστοίχισης)
    και διατηρώντας τα στοιχεία κάθε στήλης ενιαία αντί για άναρχο ζιγκ-ζαγκ.
    """
    if not items:
        return []

    mid_x = page_width / 2.0

    for it in items:
        r = it["rect"]
        is_wide = (
            bool(it.get("force_wide"))
            or (r.x1 - r.x0 > page_width * 0.55)
            or (r.x0 < 120 and r.x1 > page_width * 0.65)
        )
        it["is_wide"] = is_wide
        it["col"] = -1 if is_wide else (0 if r.x1 <= mid_x + 35 else 1)

    items_sorted = sorted(items, key=lambda x: x["rect"].y0)

    chunks = []
    current_chunk = []
    chunk_type = None

    for it in items_sorted:
        t = "wide" if it["is_wide"] else "column"
        if t != chunk_type and current_chunk:
            chunks.append((chunk_type, current_chunk))
            current_chunk = []
        chunk_type = t
        current_chunk.append(it)
    if current_chunk:
        chunks.append((chunk_type, current_chunk))

    ordered_items = []
    for c_type, c_items in chunks:
        if c_type == "column":
            has_col0 = any(x["col"] == 0 for x in c_items)
            has_col1 = any(x["col"] == 1 for x in c_items)
            if has_col0 and has_col1:
                # Δίστήλη διάταξη: διαβάζουμε ολόκληρη τη Στήλη Α και μετά τη Στήλη Β
                c_items = sorted(c_items, key=lambda x: (x["col"], x["rect"].y0))
            else:
                c_items = sorted(c_items, key=lambda x: x["rect"].y0)
        else:
            c_items = sorted(c_items, key=lambda x: x["rect"].y0)
        ordered_items.extend(c_items)

    return ordered_items


def clean_greek_pdf_text(text: str) -> str:
    """
    Καθαρίζει το εξαγόμενο κείμενο από το PDF:
    - Ενώνει λέξεις που κόπηκαν με συλλαβισμό στο τέλος γραμμής
    - Σύμβολα / κλάσματα μονάδων (τοπικά, 0 tokens)
    - Εξομαλύνει κενά και αφαιρεί κεφαλίδες σελίδων
    """
    # 1. Ενοποίηση συλλαβισμού στο τέλος γραμμής
    text = re.sub(r"([α-ωΑ-Ωίϊΐόάέύϋΰήώa-zA-Z])-[\r\n]+([α-ωΑ-Ωίϊΐόάέύϋΰήώa-zA-Z])", r"\1\2", text)

    # 2. Τοπική αποκατάσταση συμβόλων / μονάδων (χωρίς AI)
    text = normalize_pdf_symbols(text)

    # 3. Αφαίρεση τυπικών κεφαλίδων/υποσέλιδων σελίδων (π.χ. 'Σελίδα 45')
    text = re.sub(r"(?i)σελίδα\s+\d+", "", text)

    # 4. Περιορισμός πολλαπλών κενών γραμμών σε το πολύ 2
    text = re.sub(r"\n{3,}", "\n\n", text)

    # 5. Αφαίρεση περιττών κενών στην αρχή και στο τέλος κάθε γραμμής
    lines = [line.strip() for line in text.splitlines()]
    return "\n".join(lines).strip()


try:
    from google import genai
    from google.genai import types
except ImportError:
    genai = None
    types = None


def ai_normalize_formulas(raw_markdown: str, model_name: str | None = None) -> str:
    """
    Χρησιμοποιεί το Gemini για αυτόματη ανίχνευση και αποκατάσταση όλων των μαθηματικών
    τύπων από το raw εξαγόμενο κείμενο του PDF σε καθαρό LaTeX ($...$ και $$...$$).
    Διορθώνει σπασμένα κλάσματα, δείκτες, εκθέτες και ελληνικά σύμβολα (σ, τ, Δ, η κλπ.),
    χωρίς να αφαιρεί ή να αλλοιώνει το κείμενο της θεωρίας.
    """
    if genai is None or types is None:
        print("[WARN] Η βιβλιοθήκη 'google-genai' δεν είναι διαθέσιμη. Παράλειψη AI καθαρισμού τύπων.")
        return raw_markdown

    import os
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("[WARN] Δεν βρέθηκε GEMINI_API_KEY. Παράλειψη AI καθαρισμού τύπων.")
        return raw_markdown

    client = genai.Client(api_key=api_key)
    model = model_name or os.getenv("GEMINI_MODEL") or "gemini-3.8-flash"

    system_instruction = (
        "Είσαι εξειδικευμένος επιμελητής μαθηματικών και τεχνικών κειμένων Μηχανολογίας ΕΠΑ.Λ.\n"
        "Σου δίνεται ακατέργαστο κείμενο που εξήχθη αυτόματα από σχολικό βιβλίο PDF.\n"
        "Η ΑΠΟΣΤΟΛΗ ΣΟΥ:\n"
        "1. Εντόπισε όλους τους μαθηματικούς και τεχνικούς τύπους που είναι σπασμένοι (π.χ. κλάσματα σε πολλαπλές γραμμές, "
        "διασκορπισμένοι δείκτες όπως 'σεπ', 'σ επ' -> '\\sigma_{\\varepsilon\\pi}', 'd1' -> 'd_1', 'P . V' -> 'P \\cdot V').\n"
        "2. Μετάτρεψέ τους σε άψογο, ευανάγνωστο LaTeX:\n"
        "   - Αυτόνομοι/κεντρικοί τύποι: σε $$ ... $$\n"
        "   - Σύμβολα και μεταβλητές μέσα σε προτάσεις: σε $ ... $\n"
        "3. Διόρθωσε τυχόν κομμένες λέξεις ή αλλοιωμένα ελληνικά τεχνικά σύμβολα.\n"
        "4. ΔΙΑΤΗΡΗΣΕ 100% ΤΗ ΔΟΜΗ, ΤΙΣ ΕΠΙΚΕΦΑΛΙΔΕΣ ΚΑΙ ΤΟ ΚΕΙΜΕΝΟ ΤΗΣ ΥΛΗΣ ΑΚΡΙΒΩΣ ΟΠΩΣ ΕΙΝΑΙ.\n"
        "5. Επέστρεψε ΜΟΝΟ το διορθωμένο Markdown κείμενο, χωρίς επιπλέον εισαγωγές ή σχόλια."
    )

    print("Εκτέλεση αυτόματης αποκατάστασης τύπων με AI (Gemini Formula Normalizer)...")
    try:
        response = client.models.generate_content(
            model=model,
            contents=f"Αποκατάστησε τους τύπους σε LaTeX για το παρακάτω κείμενο:\n\n{raw_markdown}",
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                temperature=0.1,
            ),
        )
        cleaned_text = response.text or raw_markdown
        # Αφαίρεση τυχόν εξωτερικών backticks αν το μοντέλο έβαλε ```markdown
        cleaned_text = re.sub(r"^```(?:markdown|md)?\s*", "", cleaned_text.strip(), flags=re.IGNORECASE)
        cleaned_text = re.sub(r"\s*```$", "", cleaned_text)
        return cleaned_text.strip()
    except Exception as exc:
        print(f"[WARN] Σφάλμα κατά τον AI καθαρισμό τύπων: {exc}. Χρήση αρχικού κειμένου.")
        return raw_markdown


try:
    import fitz
except ImportError:
    fitz = None


def extract_chapter_from_pdf(
    pdf_path: Path | str,
    output_path: Path | str,
    start_page: int | None = None,
    end_page: int | None = None,
    title: str = "",
    ai_clean: bool = False,
    model: str | None = None,
    manifest_path: Path | str | None = None,
    web_prefix: str = "",
) -> Path:
    """
    Εξάγει συγκεκριμένες σελίδες από ένα PDF σχολικού βιβλίου και τις αποθηκεύει σε Markdown.
    Υποστηρίζει αυτόματη χωρική παρεμβολή εικόνων (spatial image interleaving) και 
    ανίχνευση σαρωμένων θεμάτων πλήρους σελίδας όταν διατίθεται το PyMuPDF (fitz).
    Οι σελίδες είναι 1-indexed (όπως φαίνονται στον PDF reader).
    """
    src = Path(pdf_path)
    if not src.exists():
        raise FileNotFoundError(f"Το αρχείο PDF δεν βρέθηκε: {src}")

    # Φόρτωση εικόνων από manifest.json αν υπάρχει
    images_by_page: dict[int, list[dict]] = {}
    m_path = Path(manifest_path) if manifest_path else None
    if not m_path or not m_path.is_file():
        # Αυτόματη αναζήτηση manifest στον αντίστοιχο φάκελο εικόνων αν δεν δόθηκε ρητά
        candidate = Path("site/images")
        for found in candidate.glob("**/manifest.json"):
            try:
                import json
                m_data = json.loads(found.read_text(encoding="utf-8"))
                if m_data.get("source_pdf") == src.name:
                    m_path = found
                    break
            except Exception:
                pass

    if m_path and m_path.is_file():
        import json
        m_data = json.loads(m_path.read_text(encoding="utf-8"))
        for img in m_data.get("images", []):
            pno = img.get("page")
            if pno:
                images_by_page.setdefault(pno, []).append(img)
        if not web_prefix:
            gr = m_data.get("grade")
            sb = m_data.get("subject")
            ch = m_data.get("chapter")
            if gr and sb and ch:
                web_prefix = f"images/{gr}/{sb}/chapter-{int(ch):02d}"

    extracted_chunks: list[str] = []
    if title:
        extracted_chunks.append(f"# {title}\n")

    # Χρήση PyMuPDF (fitz) για προηγμένη χωρική εξαγωγή κειμένου & εικόνων
    if fitz is not None:
        doc = fitz.open(src)
        total_pages = doc.page_count
        p_start = max(1, start_page or 1)
        p_end = min(total_pages, end_page or total_pages)
        if p_start > p_end:
            raise ValueError(f"Η αρχική σελίδα ({p_start}) είναι μεγαλύτερη από την τελική ({p_end}).")

        print(f"Ανάγνωση σελίδων {p_start} έως {p_end} (από σύνολο {total_pages}) μέσω PyMuPDF...")

        for p_num in range(p_start, p_end + 1):
            page = doc[p_num - 1]
            p_imgs = images_by_page.get(p_num, [])
            page_text = page.get_text("text").strip()
            has_full_scan = any(img.get("is_full_page_scan") for img in p_imgs)

            # Σαρωμένη σελίδα ή ολοσέλιδο διάγραμμα/χάρτης εκφώνησης χωρίς άλλο κείμενο
            if (len(page_text) < 40 and p_imgs) or has_full_scan:
                header_lines = []
                for b in page.get_text("blocks"):
                    bt = b[4].strip()
                    if bt and b[1] < 65 and "#" in bt:
                        prefix = "### " if bt.lower().startswith("λύση") or bt.lower().startswith("λυση") else "## "
                        header_lines.append(prefix + clean_greek_pdf_text(bt))
                img_tags = []
                for img in p_imgs:
                    f_name = img["file"]
                    src_url = f"{web_prefix}/{f_name}" if web_prefix else f_name
                    img_tags.append(f"![{f_name}]({src_url})")
                img_block = "\n\n".join(header_lines + img_tags)
                is_inherited_chart = any(img.get("bank_code_inherited") for img in p_imgs)
                comment_lbl = (
                    f"Σελίδα {p_num}: Διάγραμμα / Χάρτης εκφώνησης θέματος"
                    if is_inherited_chart
                    else f"Σελίδα {p_num}: Σαρωμένη σελίδα θέματος (εικόνα εκφώνησης)"
                )
                extracted_chunks.append(f"<!-- {comment_lbl} -->\n\n{img_block}")
                continue

            blocks = page.get_text("blocks")
            img_rects = [fitz.Rect(img["bbox"]) for img in p_imgs if img.get("bbox")]

            # Ομαδοποίηση εικόνων της ίδιας οριζόντιας γραμμής (ζεύγη δίπλα-δίπλα)
            img_rows: list[tuple[fitz.Rect, list[dict]]] = []
            for img in p_imgs:
                bbox = img.get("bbox") or [0, 0, 0, 0]
                ir = fitz.Rect(bbox)
                placed_in_row = False
                for idx_r, (rr, r_list) in enumerate(img_rows):
                    # Έλεγχος αν έχουν κοινό row_id ή κατακόρυφη επικάλυψη > 35%
                    same_row_id = bool(img.get("row_id") and r_list[0].get("row_id") == img.get("row_id"))
                    overlap_h = min(rr.y1, ir.y1) - max(rr.y0, ir.y0)
                    min_h = max(1.0, min(rr.height, ir.height))
                    if same_row_id or overlap_h > 0.35 * min_h:
                        r_list.append(img)
                        img_rows[idx_r] = (rr | ir, r_list)
                        placed_in_row = True
                        break
                if not placed_in_row:
                    img_rows.append((ir, [img]))

            raw_items = []
            for b in blocks:
                t = b[4].strip()
                if not t:
                    continue
                r = fitz.Rect(b[:4])
                cleaned = clean_greek_pdf_text(t)
                is_item_num = bool(re.fullmatch(r"\d+[\.\)]", cleaned))
                # Καταστολή κειμένων που είναι ήδη overlays μέσα στην εικόνα (εκτός αν είναι εξωτερικός αριθμός ερωτήματος 1., 2., 3.)
                if not is_item_num and any(
                    ir.contains(r) or (ir.intersects(r) and (ir & r).get_area() > 0.5 * r.get_area())
                    for ir in img_rects
                ):
                    continue
                if b[1] < 65 and "#" in cleaned:
                    prefix = "### " if cleaned.lower().startswith("λύση") or cleaned.lower().startswith("λυση") else "## "
                    content = f"{prefix}{cleaned}"
                else:
                    content = cleaned

                force_wide = False
                # Αν είναι αριθμός υποερωτήματος (π.χ. '1.', '2.', '3.') ευθυγραμμισμένος στη βάση μιας γραμμής εικόνων,
                # τοποθέτησέ τον ακριβώς ΠΡΙΝ από το ζεύγος εικόνων ώστε να μη διασπά τη διάταξη
                if is_item_num:
                    for rr, _ in img_rows:
                        if rr.y0 - 15 <= r.y0 <= rr.y1 + 12:
                            r = fitz.Rect(r.x0, rr.y0 - 2.0, page.rect.width, rr.y0 - 0.5)
                            force_wide = True
                            break

                raw_items.append({"rect": r, "type": "text", "content": content, "force_wide": force_wide})

            for rr, r_list in img_rows:
                r_list.sort(key=lambda im: (im.get("bbox") or [0, 0, 0, 0])[0])
                tags = []
                for img in r_list:
                    f_name = img["file"]
                    src_url = f"{web_prefix}/{f_name}" if web_prefix else f_name
                    anchor = f" ({img.get('question_anchor')})" if img.get("question_anchor") else ""
                    tags.append(f"![{f_name}{anchor}]({src_url})")
                if len(tags) > 1:
                    content = f"<!-- Ζεύγος εικόνων δίπλα-δίπλα ({len(tags)} εικόνες) -->\n" + " ".join(tags)
                else:
                    content = tags[0]
                raw_items.append({
                    "rect": rr,
                    "type": "image_row" if len(tags) > 1 else "image",
                    "content": content,
                    "force_wide": len(tags) > 1,
                })

            ordered = sort_page_blocks_and_images(raw_items, page_width=page.rect.width)
            page_content = "\n\n".join(it["content"] for it in ordered if it["content"]).strip()
            if page_content:
                extracted_chunks.append(f"<!-- Σελίδα {p_num} -->\n\n{page_content}")

        doc.close()
    else:
        # Fallback μέσω pypdf
        try:
            from pypdf import PdfReader
        except ImportError:
            print("[ERROR] Σφάλμα: Απαιτείται 'pymupdf' ή 'pypdf'.", file=sys.stderr)
            sys.exit(1)

        reader = PdfReader(src)
        total_pages = len(reader.pages)
        p_start = max(1, start_page or 1)
        p_end = min(total_pages, end_page or total_pages)
        if p_start > p_end:
            raise ValueError(f"Η αρχική σελίδα ({p_start}) είναι μεγαλύτερη από την τελική ({p_end}).")

        print(f"Ανάγνωση σελίδων {p_start} έως {p_end} (από σύνολο {total_pages}) μέσω pypdf...")
        for p_num in range(p_start, p_end + 1):
            page = reader.pages[p_num - 1]
            page_text = page.extract_text() or ""
            cleaned = clean_greek_pdf_text(page_text)
            if cleaned:
                extracted_chunks.append(f"<!-- Σελίδα {p_num} -->\n{cleaned}")

    full_markdown = "\n\n".join(extracted_chunks)

    if ai_clean:
        full_markdown = ai_normalize_formulas(full_markdown, model_name=model)

    dest = Path(output_path)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(full_markdown, encoding="utf-8")

    print(f"Επιτυχής εξαγωγή! Το αρχείο αποθηκεύτηκε στο: {dest}")
    if ai_clean:
        print("Οι μαθηματικοί τύποι αποκαταστάθηκαν αυτόματα σε έγκυρο LaTeX ($/$$)!")
    else:
        print(f"Σύνολο χαρακτήρων: {len(full_markdown)} (καθαρό κείμενο, 0 AI tokens).")
    return dest


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Εξαγωγή κεφαλαίων από PDF σε Markdown με εικόνες & τύπους.")
    parser.add_argument("pdf", help="Διαδρομή του αρχείου PDF")
    parser.add_argument("-o", "--output", required=True, help="Διαδρομή αρχείου εξόδου Markdown (.md)")
    parser.add_argument("--start", type=int, default=None, help="Αρχική σελίδα")
    parser.add_argument("--end", type=int, default=None, help="Τελική σελίδα")
    parser.add_argument("--title", default="", help="Τίτλος κεφαλαίου")
    parser.add_argument("--manifest", default=None, help="Διαδρομή manifest.json εξαγόμενων εικόνων")
    parser.add_argument("--ai-clean", action="store_true", help="Εκτέλεση AI εξομάλυνσης μαθηματικών τύπων")
    args = parser.parse_args()

    extract_chapter_from_pdf(
        args.pdf,
        args.output,
        start_page=args.start,
        end_page=args.end,
        title=args.title,
        manifest_path=args.manifest,
        ai_clean=args.ai_clean,
    )
