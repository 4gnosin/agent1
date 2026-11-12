# Υποσυστήματα Παραγωγής Περιεχομένου & Εντολές CLI — 4gnosin.github.io

Το παρόν έγγραφο καταγράφει όλα τα εργαλεία αυτοματισμού, τα pipelines επεξεργασίας υλικού (PDFs, OCR, WebP) και την πλήρη αναφορά των εντολών της γραμμής εντολών (`CLI`).

---

## 1. Κεντρικός Ελεγκτής (`4gnosin.bat` / `scripts/menu.py`)

Για την καθημερινή χρήση υπάρχει διαδραστικό περιβάλλον τερματικού (TUI) που εκκινείται με:
```cmd
4gnosin.bat
# ή: python scripts/menu.py
```
Το μενού παρέχει καθοδηγούμενη εκτέλεση όλων των λειτουργιών (λήψη θεμάτων, εξαγωγή εικόνων, συγγραφή θεωρίας, επικύρωση, τοπική εκκίνηση του site) χωρίς να χρειάζεται απομνημόνευση flags.

---

## 2. Pipeline Τράπεζας Θεμάτων (`trapeza7.py` -> `process-inbox`)

Η ροή επεξεργασίας θεμάτων από την επίσημη Τράπεζα Θεμάτων του ΙΕΠ:

```mermaid
flowchart TD
    IEP["Τράπεζα Θεμάτων ΙΕΠ"] -->|scripts/trapeza7.py (Playwright)| INBOX["data/inbox/ (PDFs Θεμάτων & Λύσεων)"]
    INBOX -->|python -m src.cli process-inbox| PARSER["PDF Extractor & Topic Parser"]
    PARSER --> IMAGES["Εξαγωγή & Βελτιστοποίηση Εικόνων"]
    PARSER --> CODE["Δημιουργία Ασκήσεων (JS)"]
    IMAGES --> SITE_IMG["site/images/{grade}/{subject}/"]
    CODE --> SITE_EX["site/exercises/{grade}/{subject}/"]
    PARSER --> DONE["data/inbox/done/ (Αρχειοθέτηση PDF)"]
```

### Βήματα Εκτέλεσης:
1. **Αυτόματη Λήψη:**
   ```bash
   python scripts/trapeza7.py
   ```
   Χρησιμοποιεί το Playwright (Chromium) για αυτόματη περιήγηση στην πύλη του ΙΕΠ και αποθήκευση των PDFs θεμάτων και ενδεικτικών λύσεων στον φάκελο `data/inbox/`.
2. **Μαζική Επεξεργασία & Μετατροπή:**
   ```bash
   python -m src.cli process-inbox
   ```
   * Εντοπίζει αυτόματα τάξη, μάθημα, κεφάλαιο και κωδικό θέματος.
   * Διαχωρίζει εκφωνήσεις από ενδεικτικές λύσεις.
   * Εξάγει και συνδέει τα αντίστοιχα σχήματα.
   * Μεταφέρει τα ολοκληρωμένα PDFs στο `data/inbox/done/`.

---

## 3. Pipeline Εξαγωγής Τεχνικών Σχημάτων & Βελτιστοποίηση WebP

### 3.1 Εξαγωγή με PyMuPDF (`src/utils/image_extractor.py`)
Ο extractor ενσωματώνει προηγμένους αλγορίθμους αποκατάστασης:
* **Συνένωση κατακόρυφων φετών (`stitch_contiguous_slices`):** Το λογισμικό του ΙΕΠ/Word συχνά τεμαχίζει μία εικόνα σε 5–10 λεπτές οριζόντιες λωρίδες. Ο extractor τις εντοπίζει με βάση τις συντεταγμένες και τις επανασυνδέει σε ενιαία εικόνα.
* **Ανίχνευση & επέκταση διανυσματικών σχεδίων (Vector Diagrams):** Όταν ένα διάγραμμα (π.χ. $P-V$) περιέχει διανυσματικές γραμμές και μόνο οι ετικέτες αξόνων είναι raster (`P (bar)`), ο extractor αναγνωρίζει τα διανυσματικά μονοπάτια και εξάγει ολόκληρο το διάγραμμα με υψηλή ανάλυση (3x DPI).
* **Εξάλειψη αποσπασματικών επικαλύψεων (Chart Overlays):** Σε σύνθετα διαγράμματα (π.χ. ψυχρομετρικοί χάρτες), οι μικρές επικαλύψεις κειμένου ενσωματώνονται απευθείας στον χάρτη, αποτρέποντας την παραγωγή άχρηστων μικρο-εικόνων.

### 3.2 Συμπίεση σε WebP (`scripts/optimize_images_to_webp.py`)
Όλες οι εικόνες μετατρέπονται αυτόματα σε σύγχρονο φορμά **WebP**:
```bash
python scripts/optimize_images_to_webp.py
```
* Ποιότητα συμπίεσης: 85–92%.
* Εξοικονόμηση όγκου: **60% έως 80%** σε σχέση με τα αρχικά PNG/JPG, εξασφαλίζοντας ταχύτατη φόρτωση.

---

## 4. Pipeline Συγγραφής Θεωρίας (`edubooks.py` -> `generate-theory`)

1. **Λήψη Σχολικών Βιβλίων:**
   ```bash
   python scripts/edubooks.py
   ```
   Κατεβάζει τα επίσημα εγκεκριμένα σχολικά βιβλία από το ΙΤΥΕ «Διόφαντος».
2. **Εξαγωγή Κεφαλαίου & Παραγωγή Θεωρίας:**
   ```bash
   python -m src.cli extract-pdf "data/books/c_psyxi.pdf" -o "data/theory/ch03.md" --pages 15-45
   python -m src.cli generate-theory "data/theory/ch03.md" --grade c --subject stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon --chapter 3
   ```
   Παράγει τα τυποποιημένα blocks θεωρίας στο `site/content/c/...`.

---

## 5. Εργαλεία Επικύρωσης, Καθαρισμού & Συγχρονισμού

### 5.1 Επικύρωση Schemas (`validate`)
Ελέγχει αυστηρά τη σύνταξη και τη συμβατότητα όλων των αρχείων JavaScript:
```bash
python -m src.cli validate site/exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon
```

### 5.2 Αυτόματος Καθαριστής LaTeX (`sanitize-latex` / `scripts\sanitize_latex.bat`)
Διορθώνει αυτόματα συντακτικά λάθη LaTeX (βαθμούς Κελσίου `°C`, κενά σε `\cdot m`, καθαρισμό περιττών `{}` κ.ά.):
```cmd
scripts\sanitize_latex.bat
# ή από το κεντρικό μενού (4gnosin.bat -> [5] -> [6])
```
* **Με διπλό κλικ:** Ανοίγει διαδραστικό μενού επιλογής φακέλου (Ασκήσεις, Θεωρία, Animations, ή όλο το site).
* **Με Drag & Drop:** Σύρετε οποιοδήποτε αρχείο ή φάκελο πάνω στο `.bat` για άμεσο καθαρισμό.
* **Μέσω CLI:**
```bash
python -m src.cli sanitize-latex site/exercises/b/thermod
```

### 5.3 Ενημέρωση Καταλόγου Lazy Loading (`build_scripts_catalog.py`)
Σαρώνει τα αρχεία θεωρίας, ασκήσεων και animations και αναδομεί το `site/content/scripts_catalog.js`:
```bash
python scripts/build_scripts_catalog.py
```

---

## 6. Πλήρης Πίνακας Αναφοράς Εντολών CLI

| Εντολή CLI | Παράμετροι / Flags | Περιγραφή |
| :--- | :--- | :--- |
| `process-inbox` | `--inbox-dir <DIR>`, `--batch-size <N>` | Μαζική επεξεργασία νέων PDFs από την Τράπεζα Θεμάτων. |
| `validate` | `<PATH_TO_JS_OR_DIR>` | Επικύρωση σχημάτων δεδομένων έναντι των κανόνων του site. |
| `sanitize-latex` | `<PATH_TO_JS_OR_DIR>`, `--dry-run` | Αυτόματη διόρθωση μαθηματικών τύπων και συμβόλων LaTeX. |
| `fix-exercise` | `<FILE.JS>`, `--code <BANK_CODE>` | Αυτόματη αναδόμηση άσκησης, διαχωρισμός ερωτημάτων & σύνδεση εικόνων. |
| `extract-pdf` | `<PDF>`, `-o <OUTPUT.MD>`, `--pages <RANGE>` | Εξαγωγή επιλεγμένων σελίδων PDF σε καθαρό Markdown κείμενο. |
| `generate-theory` | `<MD_FILE>`, `--grade <B\|C>`, `--subject <ID>`, `--chapter <N>` | Μετατροπή Markdown θεωρίας σε blocks JavaScript (`site/content/`). |
| `generate-exercises` | `<MD_FILE>`, `--grade <B\|C>`, `--subject <ID>`, `--chapter <N>` | Παραγωγή αρχείων ασκήσεων από αποδελτιωμένο υλικό. |
| `calc_animator` | `--scan`, `--target <ID>`, `--subject <S>`, `--mode <M>` | Παραγωγή απομονωμένων animations επίλυσης (`site/animations/`). |
