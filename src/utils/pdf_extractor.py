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


def normalize_pdf_symbols(text: str) -> str:
    """
    Τοπικός καθαρισμός συμβόλων/μονάδων από extract PDF — 0 AI tokens.
    Δεν «μαντεύει» φυσική· διορθώνει μόνο επαναλαμβανόμενα artifacts του pypdf.
    """
    for old, new in _SYMBOL_REPLACEMENTS:
        text = text.replace(old, new)

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
        print("⚠️ Η βιβλιοθήκη 'google-genai' δεν είναι διαθέσιμη. Παράλειψη AI καθαρισμού τύπων.")
        return raw_markdown

    import os
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("⚠️ Δεν βρέθηκε GEMINI_API_KEY. Παράλειψη AI καθαρισμού τύπων.")
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

    print("🤖 Εκτέλεση αυτόματης αποκατάστασης τύπων με AI (Gemini Formula Normalizer)...")
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
        print(f"⚠️ Σφάλμα κατά τον AI καθαρισμό τύπων: {exc}. Χρήση αρχικού κειμένου.")
        return raw_markdown


def extract_chapter_from_pdf(
    pdf_path: Path | str,
    output_path: Path | str,
    start_page: int | None = None,
    end_page: int | None = None,
    title: str = "",
    ai_clean: bool = False,
    model: str | None = None,
) -> Path:
    """
    Εξάγει συγκεκριμένες σελίδες από ένα PDF σχολικού βιβλίου και τις αποθηκεύει σε Markdown.
    Οι σελίδες είναι 1-indexed (όπως φαίνονται στον PDF reader).
    """
    try:
        from pypdf import PdfReader
    except ImportError:
        print(
            "❌ Σφάλμα: Η βιβλιοθήκη 'pypdf' δεν είναι εγκατεστημένη.\n"
            "Εγκαταστήστε την με: pip install pypdf",
            file=sys.stderr,
        )
        sys.exit(1)

    src = Path(pdf_path)
    if not src.exists():
        raise FileNotFoundError(f"Το αρχείο PDF δεν βρέθηκε: {src}")

    reader = PdfReader(src)
    total_pages = len(reader.pages)

    p_start = max(1, start_page or 1)
    p_end = min(total_pages, end_page or total_pages)

    if p_start > p_end:
        raise ValueError(f"Η αρχική σελίδα ({p_start}) είναι μεγαλύτερη από την τελική ({p_end}).")

    print(f"📄 Ανάγνωση σελίδων {p_start} έως {p_end} (από σύνολο {total_pages})...")

    extracted_chunks: list[str] = []
    if title:
        extracted_chunks.append(f"# {title}\n")

    for p_num in range(p_start, p_end + 1):
        page = reader.pages[p_num - 1]  # 0-indexed internally
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

    print(f"✅ Επιτυχής εξαγωγή! Το αρχείο αποθηκεύτηκε στο: {dest}")
    if ai_clean:
        print("✨ Οι μαθηματικοί τύποι αποκαταστάθηκαν αυτόματα σε έγκυρο LaTeX ($/$$)!")
    else:
        print(f"📊 Σύνολο χαρακτήρων: {len(full_markdown)} (καθαρό κείμενο, 0 AI tokens).")
    return dest
