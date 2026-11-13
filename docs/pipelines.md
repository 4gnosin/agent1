**Γλώσσα / Language:** Ελληνικά | [English](en/pipelines.md)

# Ροές Εργασίας, Αυτοματοποίηση & Εντολές CLI

Η πλατφόρμα **4gnosin** συνδυάζει ενιαίο CLI (`python -m src.cli`) και εξειδικευμένα αυτόνομα εργαλεία (`src/tools/`, `scripts/`) για εξαγωγή κειμένου/εικόνων από PDF, παραγωγή θεωρίας και ασκήσεων, διόρθωση LaTeX, δημιουργία animations και συσκευασία bundles παραγωγής.

---

## 1. Λήψη Σχολικών Βιβλίων & Τράπεζας Θεμάτων

Για τη λήψη και οργάνωση πρωτογενούς υλικού από επίσημες πηγές:

```bash
# Κατάλογος διαθέσιμων βιβλίων & λήψη ανά τάξη ή μάθημα
python scripts/edubooks.py --list
python scripts/edubooks.py --taxi b --subject thermo
python scripts/edubooks.py --all

# Αυτοματοποιημένη συλλογή από την Τράπεζα Θεμάτων (trapeza7)
python scripts/trapeza7.py
```

---

## 2. Εξαγωγή Κειμένου & Εικόνων από PDF

### 2.1 Εξαγωγή κειμένου με `extract-pdf`
```bash
python -m src.cli extract-pdf -p data/pdf/book.pdf -o data/text/ch01.txt --start-page 10 --end-page 25 -t "Κεφάλαιο 1" --ai-clean
```

### 2.2 Εξαγωγή σχημάτων & βελτιστοποίηση WebP
1. **Αποκοπή εικόνων από PDF:**
   ```bash
   python scripts/extract_pdf_images_craft.py data/pdf/book.pdf -o site/images/thermod --dpi 200 --pages 10-25
   ```
2. **Βελτιστοποίηση εικόνων σε WebP:**
   ```bash
   python scripts/optimize_images_to_webp.py
   ```
   Το script μετατρέπει εικόνες σε WebP μέσω Pillow (`quality=85`, `method=6`) και αφαιρεί χαρακτήρες `#` από τα ονόματα αρχείων εικόνων ώστε να μην προκαλούνται σφάλματα φόρτωσης στα URL του frontend.

---

## 3. Παραγωγή Θεωρίας & Ασκήσεων

### 3.1 Παραγωγή θεωρίας (`generate-theory` & `scripts/theory.py`)
```bash
# Μέσω του κεντρικού CLI από εξαγμένο κείμενο/PDF
python -m src.cli generate-theory -i data/text/ch01.txt -g b -s thermo -c 1 -o site

# Αυτόνομο script θεωρίας ανά μάθημα και εύρος σελίδων
python scripts/theory.py --list
python scripts/theory.py -s thermo -c 1 --page-start 1 --page-end 30 -g b
```

### 3.2 Παραγωγή ασκήσεων & πλήρων κεφαλαίων
```bash
# Παραγωγή ασκήσεων από εκφωνήσεις/PDF
python -m src.cli generate-exercises -i data/exercises/input.txt -g b -s thermo -c 1 -o site

# Συνδυασμένη κατασκευή κεφαλαίου (θεωρία + ασκήσεις) ή μαζική επεξεργασία φακέλου
python -m src.cli build-chapter -i data/theory.txt -e data/exercises.txt -g b -s thermo -c 1 --start-page 1 --end-page 20 -o site
python -m src.cli build-batch -i data/theory_dir -e data/exercises_dir -g b -s thermo -o site
```

### 3.3 Αυτοματοποιημένη Επεξεργασία Εισερχομένων (`process-inbox`)
Η εντολή σαρώνει τον φάκελο εισερχομένων (προεπιλογή `data/inbox`) για νέα αρχεία και αναθέτει στον AI pipeline engine να παραγάγει κεφάλαια/ασκήσεις στον φάκελο εξόδου (προεπιλογή `site/`):
```bash
python -m src.cli process-inbox --inbox data/inbox -o site --craft --force
```

---

## 4. Συντήρηση, Διόρθωση LaTeX & Επικύρωση

### 4.1 Διόρθωση συγκεκριμένης άσκησης & ονοματολογίας (`fix-exercise`, `fix-stems`)
```bash
# Διόρθωση άσκησης από URL, σύνδεσμο ή κωδικό Τράπεζας Θεμάτων
python -m src.cli fix-exercise 27123

# Έλεγχος ή μετονομασία stems αρχείων ασκήσεων
python -m src.cli fix-stems -o site --rename
```

### 4.2 Καθαρισμός LaTeX (`sanitize-latex`)
Για διόρθωση διπλών/κατεστραμμένων backslashes, Unicode συμβόλων και περιβαλλόντων KaTeX:
```bash
python -m src.cli sanitize-latex site/exercises/b/thermod --pattern "*.js"
```
Εναλλακτικά διατίθεται το batch wrapper `scripts\sanitize_latex.bat` (εκτελεί `python -m src.utils.latex_sanitizer %*`).

### 4.3 Επικύρωση (`validate`)
```bash
# Έλεγχος δομής & KaTeX σε site/exercises, site/content και site/animations
python -m src.cli validate site --fix
```
> [!NOTE]
> Τόσο το `python -m src.cli validate` όσο και το `python -m src.validators.site_validator` σαρώνουν αυτόματα τους φακέλους `site/exercises`, `site/content` και `site/animations`.

### 4.4 Αυτόματες Δοκιμές (`pytest`)
```bash
# Εκτέλεση όλων των tests στον φάκελο tests/
python -m pytest
```
Η σουίτα δοκιμών στο `tests/` ελέγχει τον καθαρισμό LaTeX, το `calc_animator`, την αναδόμηση bundles και συγχρονισμό μέσω `sync_site_index`, τη σάρωση `site/animations/` από τον `SiteValidator`, καθώς και τον συγχρονισμό καταλόγου (`catalog.js`), CLI και τεκμηρίωσης.

---

## 5. Animations, Bundles Παραγωγής & Τοπικός Εξυπηρετητής

1. **Παραγωγή step-by-step animations (αυτόνομο εργαλείο):**
   ```bash
   python -m src.tools.calc_animator --scan
   python -m src.tools.calc_animator --subject thermo --chapter 5 --mode hybrid --overwrite
   ```
2. **Συσκευασία Bundles Παραγωγής & Καταλόγου Scripts:**
   ```bash
   python scripts/build_bundles.py
   ```
   Δημιουργεί τα `site/bundles/{subject}.bundle.js` (χαρτογραφώντας τον φάκελο `b/thermod` στο canonical ID `thermo`) και ενημερώνει το `site/content/scripts_catalog.js`. Οι εντολές παραγωγής που εκτελούν συγχρονισμό (`build-batch`, `generate-exercises`, `process-inbox`, `scripts/theory.py`) καλούν επίσης αυτόματα τον bundler μέσω `sync_site_index`. Με τη σημαία `--raw`, το `scripts_catalog.js` δείχνει στα ατομικά source αρχεία αντί για τα bundles. Το `python scripts/build_scripts_catalog.py` αποτελεί compatibility wrapper που καλεί το `build_bundles.py`.
3. **Εκκίνηση Τοπικού Web Server:**
   ```bash
   python scripts/site_server.py
   ```
   Σερβίρει το `site/` τοπικά στη διεύθυνση `http://localhost:8000`.

---

## 6. Πλήρης Αναφορά Εντολών

### 6.1 Υποεντολές του `python -m src.cli`

| Υποεντολή | Βασικές Επιλογές | Περιγραφή |
| :--- | :--- | :--- |
| `build-chapter` | `-i`, `-e`, `-g`, `-s`, `-c`, `--start-page`, `--end-page`, `-o`, `-m` | Κατασκευή ενός κεφαλαίου (θεωρία και προαιρετικά ασκήσεις) |
| `build-batch` | `-i`/`--input-dir`, `-e`/`--exercises-dir`, `-g`, `-s`, `-o`, `-m` | Μαζική κατασκευή κεφαλαίων από φάκελο εισόδου |
| `generate-theory` | `-i`, `-g`, `-s`, `-c`, `-o`, `-m` | Παραγωγή ενότητας θεωρίας για μάθημα και κεφάλαιο |
| `generate-exercises` | `-i`, `-e`, `-g`, `-s`, `-c`, `-o`, `-m` | Παραγωγή αρχείου ασκήσεων |
| `validate` | `[path]` (προεπ. `site`), `--fix` | Επικύρωση δομής σε `site/exercises`, `site/content` και `site/animations` |
| `tutor` | `-c`, `-q`, `-l`, `-m` | Εκκίνηση διαδραστικού AI βοηθού διδασκαλίας |
| `extract-pdf` | `-p`/`--pdf`, `-o`, `--start-page`, `--end-page`, `-t`, `--ai-clean`, `-m` | Εξαγωγή κειμένου από PDF με προαιρετικό καθαρισμό AI |
| `assistant` | `-m` | Εκκίνηση διαδραστικού βοηθού γραμμής εντολών |
| `process-inbox` | `--inbox`, `-o`, `-m`, `--craft`, `--force` | Επεξεργασία αρχείων από `data/inbox` |
| `fix-stems` | `-o`/`--site`, `--rename` | Έλεγχος και διόρθωση stems ονομάτων αρχείων |
| `fix-exercise` | `target` (positional) | Επιδιόρθωση άσκησης με βάση URL, σύνδεσμο ή κωδικό (π.χ. `27123`) |
| `sanitize-latex` | `[path]`, `--pattern` (προεπ. `*.js`) | Καθαρισμός και τυποποίηση μαθηματικών εκφράσεων LaTeX |

### 6.2 Αυτόνομα Εργαλεία & Scripts

| Εντολή | Βασικές Επιλογές | Περιγραφή |
| :--- | :--- | :--- |
| `python -m src.tools.calc_animator` | `--scan`, `--target`, `--subject`, `--chapter`, `--overwrite`, `--mode` | Σάρωση και παραγωγή animations για ασκήσεις `calc` (`local`, `hybrid`, `ai-pedagogy`, `ai`, `ai-full`) |
| `python scripts/build_bundles.py` | `--raw` | Δημιουργία `site/bundles/*.bundle.js` και `site/content/scripts_catalog.js` |
| `python scripts/build_scripts_catalog.py` | `--raw` | Wrapper συμβατότητας που καλεί το `build_bundles.py` |
| `python scripts/theory.py` | `-s`, `-c`, `--page-start`, `--page-end`, `-g`, `-l` | Αυτόνομη γεννήτρια θεωρίας ανά μάθημα και σελίδες |
| `python scripts/edubooks.py` | `--taxi`, `--subject`, `--all`, `--force`, `--list` | Λήψη σχολικών βιβλίων ΕΠΑΛ |
| `python scripts/trapeza7.py` | — | Συλλογή θεμάτων από την Τράπεζα Θεμάτων |
| `python scripts/extract_pdf_images_craft.py` | `<pdf>`, `-o`/`--out`, `--dpi`, `--pages`, `-v` | Εξαγωγή εικόνων από PDF |
| `python scripts/optimize_images_to_webp.py` | — | Συμπίεση εικόνων σε WebP (`quality=85, method=6`) και αφαίρεση `#` |
| `scripts\sanitize_latex.bat` | `[args]` | Batch εκτέλεση του `python -m src.utils.latex_sanitizer` |
| `python scripts/site_server.py` | — | Τοπικός εξυπηρετητής HTTP (`http://localhost:8000`) για το `site/` |
