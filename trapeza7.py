"""
Τράπεζα Θεμάτων – Agent Μηχανολογίας
=====================================
Προαπαιτούμενα (τρέξε μία φορά):

    pip install playwright pypdf reportlab
    playwright install chromium

Μετά τρέχεις απλά:

    python trapeza_agent.py
"""

import asyncio
import re
import tempfile
from pathlib import Path
from io import BytesIO
from collections import defaultdict

from playwright.async_api import async_playwright
from pypdf import PdfReader, PdfWriter
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# ============================================================
#  ΡΥΘΜΙΣΕΙΣ – ΕΔΩ ΠΡΟΣΘΕΤΕΙΣ / ΑΛΛΑΖΕΙΣ LINKS
# ============================================================

BASE_URL = "https://trapeza.iep.edu.gr"

SUBJECTS = {
    # ---------- Β' ΤΑΞΗ ----------
    "Β": {
        "Στοιχεία τεχνικής θερμοδυναμικής εφαρμογές": "/grades/3/classes/2/subjects/116",
        "Μηχανικη Αντοχή Υλικών": "/grades/3/classes/2/subjects/117",
        "Τεχνολογια Μηχανολογικών κατασκευών – Εφαρμογές": "/grades/3/classes/2/subjects/118",
        "Ναυτική μηχανολογία Εφαρμογές": "/grades/3/classes/2/subjects/119",
    },

    # ---------- Γ' ΤΑΞΗ ----------
    "Γ": {
        # Κύρια Μηχανολογίας
        "Στοιχεία Μηχανών": "/grades/3/classes/3/subjects/176",
        "Μηχανές Εσωτερικής Καύσης ΙΙ": "/grades/3/classes/3/subjects/174",
        "Μηχανουργική Τεχνολογία – Εργαλειομηχανές": "/grades/3/classes/3/subjects/175",
        "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων": "/grades/3/classes/3/subjects/177",
        "Στοιχεία Ψύξης – Κλιματισμού (Ψυκτικών)": "/grades/3/classes/3/subjects/178",
        "Στοιχεία Ψύξης – Κλιματισμού (Μηχανολογικών Εγκ/σεων)": "/grades/3/classes/3/subjects/210",
        "Συστήματα Αυτοκινήτου": "/grades/3/classes/3/subjects/179",
        "Εγκαταστάσεις Κλιματισμού": "/grades/3/classes/3/subjects/172",
        "Συντήρηση και Επισκευή Εγκαταστάσεων Καύσης": "/grades/3/classes/3/subjects/211",

        # Άλλες (Αεροσκάφη / Ναυτιλία)
        "Κινητήρες αεροσκαφών": "/grades/3/classes/3/subjects/215",
        "Διαδικασίες Συντήρησης Αεροσκαφών": "/grades/3/classes/3/subjects/170",
        "Δομή και Συστήματα Αεροσκαφών": "/grades/3/classes/3/subjects/171",
        "Ναυτικές μηχανές": "/grades/3/classes/3/subjects/216",
    },
}

DOWNLOAD_DIR = Path(__file__).resolve().parent / "data" / "inbox"
HEADLESS = False

# Σταθερά ονόματα αρχείων: {τάξη}_{μάθημα}_ch{ΝΝ}.pdf
PDF_SLUGS = {
    "Β": {
        "Στοιχεία τεχνικής θερμοδυναμικής εφαρμογές": "thermod",
        "Θερμοδυναμική Θεωρία": "thermod",
        "Θερμοδυναμική Εργαστήριο": "thermo-lab",
        "Μηχανικη Αντοχή Υλικών": "antoxi",
        "Αντοχή Υλικών": "antoxi",
    },
    "Γ": {
        "Στοιχεία Μηχανών": "stoixeia-michanon",
        "Στοιχεία Ψύξης – Κλιματισμού (Ψυκτικών)": "stoixeia-psyxis-klimatismou",
        "Στοιχεία Ψύξης – Κλιματισμού (Μηχανολογικών Εγκ/σεων)": "stoixeia-psyxis-klimatismou",
        "Εγκαταστάσεις Κλιματισμού": "egkatastaseis-klimatismou",
        "Συστήματα Ελέγχου / Αυτοματισμού Ψύξης–Κλιματισμού": "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou",
        "Μηχανές Εσωτερικής Καύσης ΙΙ": "michanes-esoterikis-kafsis-2",
        "Συστήματα Αυτοκινήτου": "systimata-aftokinitou",
        "Τεχνολογία Ελέγχου & Διαγνώσεων": "texnologia-elegxou-diagnoseon",
    },
}


def get_pdf_slug(taxi: str, subject_name: str) -> str:
    """Επιστρέφει το καθορισμένο slug ή ασφαλές fallback."""
    if subject_name in PDF_SLUGS.get(taxi, {}):
        return PDF_SLUGS[taxi][subject_name]
    # Fallback για μαθήματα που δεν έχουν οριστεί ρητά παραπάνω.
    slug = subject_name.lower().replace("–", "-").replace("—", "-")
    slug = re.sub(r"[^a-z0-9]+", "-", slug).strip("-")
    return slug or "mathima"


def chapter_pdf_name(taxi: str, slug: str, chapter: int) -> str:
    """Όνομα PDF ενός κεφαλαίου, π.χ. b_thermod_ch01.pdf."""
    prefix = "b" if taxi == "Β" else "c"
    return f"{prefix}_{slug}_ch{chapter:02d}.pdf"

# ============================================================
#  ΓΡΑΜΜΑΤΟΣΕΙΡΑ ΜΕ ΕΛΛΗΝΙΚΑ
# ============================================================

FONT_CANDIDATES = [
    r"C:\Windows\Fonts\arial.ttf",
    r"C:\Windows\Fonts\arialuni.ttf",
    r"C:\Windows\Fonts\calibri.ttf",
    r"C:\Windows\Fonts\tahoma.ttf",
    r"C:\Windows\Fonts\segoeui.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
]

FONT_NAME = "GreekFont"
font_registered = False

for font_path in FONT_CANDIDATES:
    if Path(font_path).exists():
        try:
            pdfmetrics.registerFont(TTFont(FONT_NAME, font_path))
            font_registered = True
            print(f"Χρησιμοποιείται γραμματοσειρά: {font_path}")
            break
        except Exception:
            continue

if not font_registered:
    print("ΠΡΟΣΟΧΗ: Δεν βρέθηκε γραμματοσειρά με ελληνικά. Θα χρησιμοποιηθεί Helvetica.")
    FONT_NAME = "Helvetica"

# ============================================================
#  ΒΟΗΘΗΤΙΚΕΣ ΣΥΝΑΡΤΗΣΕΙΣ PDF
# ============================================================

def create_title_page(path: Path, subject_name: str, chapter: int):
    c = canvas.Canvas(str(path), pagesize=A4)
    w, h = A4
    c.setFont(FONT_NAME, 15)
    c.drawCentredString(w / 2, h / 2 + 45, subject_name)
    c.setFont(FONT_NAME, 26)
    if chapter == 999:
        c.drawCentredString(w / 2, h / 2, "Κεφάλαιο 999 (χωρίς αντιστοιχία)")
    else:
        c.drawCentredString(w / 2, h / 2, f"Κεφάλαιο {chapter}")
    c.setFont(FONT_NAME, 14)
    c.drawCentredString(w / 2, h / 2 - 40, "Τράπεζα Θεμάτων")
    c.save()


def create_stamp(text: str, mediabox) -> bytes:
    """Δημιουργεί stamp προσαρμοσμένο δυναμικά στις διαστάσεις της εκάστοτε σελίδας
    (A4, US Letter, landscape κ.λπ.), ώστε η κεφαλίδα να εμφανίζεται πάντα
    εντός των ορίων της σελίδας και να αναγνωρίζεται από τον extractor."""
    x0 = float(mediabox.left)
    y0 = float(mediabox.bottom)
    w = float(mediabox.width)
    h = float(mediabox.height)

    packet = BytesIO()
    c = canvas.Canvas(packet, pagesize=(x0 + w, y0 + h))
    c.setFont(FONT_NAME, 10)
    # Τοποθέτηση: 35pt από αριστερά, 22pt κάτω από το άνω όριο της σελίδας
    c.drawString(x0 + 35, y0 + h - 22, text)
    c.save()
    packet.seek(0)
    return packet.read()


def add_header_to_pdf(input_path: Path, header_text: str) -> Path:
    reader = PdfReader(str(input_path))
    if not reader.pages:
        return input_path

    writer = PdfWriter()

    for i, page in enumerate(reader.pages):
        if i == 0:
            box = page.cropbox or page.mediabox
            stamp_bytes = create_stamp(header_text, box)
            stamp_reader = PdfReader(BytesIO(stamp_bytes))
            stamp_page = stamp_reader.pages[0]
            page.merge_page(stamp_page, over=True)
        writer.add_page(page)

    out_path = input_path.with_name(input_path.stem + "_stamped.pdf")
    with open(out_path, "wb") as f:
        writer.write(f)
    return out_path


def extract_sections(text: str):
    sections = []
    for m in re.finditer(r"(\d+)\.(\d+)", text):
        sections.append((int(m.group(1)), int(m.group(2))))
    for m in re.finditer(r"ΚΕΦΑΛΑΙΟ\s*(\d+)", text, re.I):
        sections.append((int(m.group(1)), 0))
    return sections


def get_max_chapter(sections):
    return max((s[0] for s in sections), default=0)


def get_subsection_info(yli_text: str, target_chapter: int):
    """Βρίσκει τη μεγαλύτερη υποενότητα (π.χ. 3.4) του κεφαλαίου και την περιγραφή της.
    Δουλεύει και όταν οι τίτλοι είναι κολλημένοι (ΦΟΡΤΙΑ3.3 ...φορτία3.4 ...)
    και όταν χωρίζονται με αλλαγή γραμμής ή tab."""
    if target_chapter == 999:
        return 0, ""

    best_num, best_desc = 0, ""
    for m in re.finditer(rf"(?<!\d){target_chapter}\.(\d+)(?!\d)", yli_text):
        num = int(m.group(1))
        rest = yli_text[m.end():]
        stop = re.search(r"\d+\.\d+|ΚΕΦΑΛΑΙΟ|[\n\r\t+$]", rest, re.I)
        desc = rest[:stop.start()] if stop else rest
        desc = re.sub(r"\s+", " ", desc).strip(" -–—\t")[:80]
        if num >= best_num:
            best_num, best_desc = num, desc
    return best_num, best_desc


# ============================================================
#  ΚΥΡΙΑ ΛΟΓΙΚΗ
# ============================================================

async def main():
    print("=" * 60)
    print("  Τράπεζα Θεμάτων – Agent Μηχανολογίας")
    print("=" * 60)

    # ----- 1. Επιλογή Τάξης -----
    print("\nΕπιλογή Τάξης:")
    print("  1. Β' Τάξη")
    print("  2. Γ' Τάξη")
    t_choice = input("Επιλογή (1/2): ").strip()
    taxi = "Β" if t_choice == "1" else "Γ"

    subjects = SUBJECTS[taxi]
    print(f"\nΜαθήματα {taxi}' Τάξης:")
    subject_list = list(subjects.keys())
    for i, name in enumerate(subject_list, 1):
        print(f"  {i}. {name}")

    s_idx = int(input("\nΕπιλογή μαθήματος: ").strip()) - 1
    selected_name = subject_list[s_idx]
    selected_url = BASE_URL + subjects[selected_name]

    print(f"\n→ Επιλέχθηκε: {selected_name}")
    print(f"  URL: {selected_url}")

    # ----- 2. Επιλογή Κεφαλαίων -----
    print("\nΕπιλογή κεφαλαίων:")
    print("  1. Ένα κεφάλαιο")
    print("  2. Πολλά κεφάλαια (π.χ. 1 2 3  ή  1-4)")
    print("  3. Όλη η τράπεζα (ένα ενιαίο PDF)")
    print("  4. Όλα τα κεφάλαια σε ξεχωριστά PDF")
    c_choice = input("Επιλογή (1/2/3/4): ").strip()

    selected_chapters = set()
    separate_pdfs = False

    if c_choice == "1":
        ch = int(input("Κεφάλαιο: ").strip())
        selected_chapters.add(ch)
        max_allowed = ch
    elif c_choice == "2":
        raw = input("Κεφάλαια: ").strip()
        if "-" in raw:
            a, b = map(int, raw.split("-"))
            selected_chapters = set(range(a, b + 1))
        else:
            selected_chapters = set(map(int, raw.split()))
        max_allowed = max(selected_chapters)
    elif c_choice == "4":
        selected_chapters = None
        max_allowed = 999
        separate_pdfs = True
    else:  # 3
        selected_chapters = None
        max_allowed = 999

    # ----- 3. Playwright + Κατέβασμα -----
    DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
    temp_dir = Path(tempfile.mkdtemp(prefix="trapeza_"))

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=HEADLESS)
        context = await browser.new_context(
            locale="el-GR",
            viewport={"width": 1400, "height": 900},
        )
        page = await context.new_page()

        print("\nΦορτώνω τη σελίδα του μαθήματος...")
        await page.goto(selected_url, wait_until="domcontentloaded", timeout=90000)
        await page.wait_for_selector("table tbody tr", timeout=45000)
        await page.wait_for_timeout(1500)

        # ========== SCROLL για να φορτωθούν ΟΛΑ τα θέματα ==========
        print("Κάνω scroll για να φορτωθούν όλα τα θέματα...")
        previous_count = 0
        for i in range(20):
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(700)
            current_count = len(await page.query_selector_all("table tbody tr"))
            if current_count == previous_count and i > 2:
                break
            previous_count = current_count
            print(f"  Φορτωμένα θέματα: {current_count}")

        await page.wait_for_timeout(1000)
        rows = await page.query_selector_all("table tbody tr")
        print(f"\nΣυνολικά φορτωμένα θέματα: {len(rows)}\n")

        topics = []
        for row in rows:
            text = await row.inner_text()
            id_match = re.search(r"^(\d+)", text.strip())
            if not id_match:
                continue
            topic_id = id_match.group(1)

            # Η ύλη είναι συχνά διπλωμένη (+): το inner_text δεν περιέχει τις υποενότητες,
            # ενώ το text_content περιέχει και το κρυμμένο κείμενο.
            full_text = (await row.text_content()) or ""
            sections = extract_sections(full_text)
            max_chap = get_max_chapter(sections)

            # Εφεδρικά: αν δεν υπάρχει υποενότητα, πάρε τον αριθμό από τον τίτλο ("3 ΘΕΡΜΙΚΑ ...")
            if max_chap == 0:
                title_nums = re.findall(r"(?m)^\s*(\d{1,2})\s+[Α-ΩΆ-Ώ]", text)
                if title_nums:
                    max_chap = max(int(x) for x in title_nums)

            # Αν δεν βρέθηκε κεφάλαιο → chapter 999
            if max_chap == 0:
                max_chap = 999
                print(f"  [999] #{topic_id} – κείμενο ύλης: {text[:200]!r}")

            # Φιλτράρισμα
            if max_chap != 999 and max_chap > max_allowed:
                continue
            if selected_chapters is not None and max_chap not in selected_chapters and max_chap != 999:
                continue

            ek_url = ap_url = None
            links = await row.query_selector_all("a[href*='subjects.draw']")
            for link in links:
                href = await link.get_attribute("href") or ""
                if "file_type=1" in href:
                    ek_url = href
                elif "file_type=2" in href:
                    ap_url = href

            if not ek_url:
                continue

            sub_num, sub_desc = get_subsection_info(full_text, max_chap)

            topics.append({
                "id": topic_id,
                "max_chapter": max_chap,
                "sort_key": sub_num,
                "sub_num": sub_num,
                "sub_desc": sub_desc,
                "ek_url": ek_url,
                "ap_url": ap_url,
            })

        topics.sort(key=lambda t: (t["max_chapter"], t["sort_key"], int(t["id"])))
        print(f"Θα κατέβουν {len(topics)} θέματα\n")

        if not topics:
            print("Δεν βρέθηκαν θέματα με τα κριτήρια που έβαλες.")
            await browser.close()
            return

        for i, t in enumerate(topics, 1):
            tid = t["id"]
            if t["max_chapter"] == 999:
                chap_str = "999"
            elif t["sub_num"]:
                chap_str = f"{t['max_chapter']}.{t['sub_num']}"
            else:
                chap_str = f"{t['max_chapter']}"
            print(f"[{i}/{len(topics)}] #{tid} (Κεφ. {chap_str}) ...", end=" ")

            try:
                resp = await context.request.get(t["ek_url"], timeout=45000)
                if resp.ok:
                    (temp_dir / f"{tid}_ek.pdf").write_bytes(await resp.body())
                else:
                    print(f"HTTP {resp.status}")
                    continue
            except Exception as e:
                print(f"Σφάλμα: {e}")
                continue

            if t["ap_url"]:
                try:
                    resp = await context.request.get(t["ap_url"], timeout=45000)
                    if resp.ok:
                        (temp_dir / f"{tid}_ap.pdf").write_bytes(await resp.body())
                except Exception:
                    pass

            print("OK")

        await browser.close()

    # ----- 4. Δημιουργία PDF -----
    print("\nΔημιουργία PDF...")

    pdf_slug = get_pdf_slug(taxi, selected_name)
    pdf_prefix = "b" if taxi == "Β" else "c"

    def make_header(t):
        header = f"Θέμα  #{t['id']}"
        if t["max_chapter"] == 999:
            header += "   |   (χωρίς αντιστοιχία κεφαλαίου)"
        elif t["sub_num"]:
            header += f"   |   {t['max_chapter']}.{t['sub_num']}"
            if t["sub_desc"]:
                header += f"  {t['sub_desc']}"
        return header

    if separate_pdfs:
        chapters_dict = defaultdict(list)
        for t in topics:
            chapters_dict[t["max_chapter"]].append(t)

        for chap in sorted(chapters_dict.keys()):
            writer = PdfWriter()
            title_path = temp_dir / f"title_{chap}.pdf"
            create_title_page(title_path, selected_name, chap)
            writer.append(str(title_path))

            for t in chapters_dict[chap]:
                tid = t["id"]
                header = make_header(t)

                ek_path = temp_dir / f"{tid}_ek.pdf"
                if ek_path.exists():
                    stamped_ek = add_header_to_pdf(ek_path, header)
                    writer.append(str(stamped_ek))

                ap_path = temp_dir / f"{tid}_ap.pdf"
                if ap_path.exists():
                    stamped_ap = add_header_to_pdf(ap_path, f"Λύση  #{tid}")
                    writer.append(str(stamped_ap))

            out_name = chapter_pdf_name(taxi, pdf_slug, chap)
            out_path = DOWNLOAD_DIR / out_name
            writer.write(str(out_path))
            writer.close()
            print(f"  → Δημιουργήθηκε: {out_name}")

        print(f"\nΟλοκληρώθηκε! Δημιουργήθηκαν {len(chapters_dict)} ξεχωριστά PDF.")

    else:
        writer = PdfWriter()
        current_chapter = None

        for t in topics:
            tid = t["id"]
            chap = t["max_chapter"]
            header = make_header(t)

            if chap != current_chapter:
                current_chapter = chap
                title_path = temp_dir / f"title_{chap}.pdf"
                create_title_page(title_path, selected_name, chap)
                writer.append(str(title_path))

            ek_path = temp_dir / f"{tid}_ek.pdf"
            if ek_path.exists():
                stamped_ek = add_header_to_pdf(ek_path, header)
                writer.append(str(stamped_ek))

            ap_path = temp_dir / f"{tid}_ap.pdf"
            if ap_path.exists():
                stamped_ap = add_header_to_pdf(ap_path, f"Λύση  #{tid}")
                writer.append(str(stamped_ap))

        if selected_chapters is None:
            out_name = f"{pdf_prefix}_{pdf_slug}_chALL.pdf"
        elif len(selected_chapters) == 1:
            ch = list(selected_chapters)[0]
            out_name = chapter_pdf_name(taxi, pdf_slug, ch)
        else:
            chs = sorted(selected_chapters)
            out_name = f"{pdf_prefix}_{pdf_slug}_ch{chs[0]:02d}-{chs[-1]:02d}.pdf"

        out_path = DOWNLOAD_DIR / out_name
        writer.write(str(out_path))
        writer.close()

        print(f"\nΟλοκληρώθηκε!")
        print(f"Αρχείο : {out_path.resolve()}")
        print(f"Θέματα : {len(topics)}")


if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nΑκυρώθηκε από τον χρήστη.")
    except Exception as e:
        print(f"\nΚρίσιμο σφάλμα: {e}")
        raise