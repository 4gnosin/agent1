# 4gnosin.github.io — Πλατφόρμα Μηχανολογίας ΕΠΑ.Λ.

**Γλώσσα / Language:** Ελληνικά | [English](README.en.md)

[![Site Status](https://img.shields.io/badge/Site-Live-success)](https://4gnosin.github.io)
[![Agent Status](https://img.shields.io/badge/Agent-Under%20Construction-yellow)](#)
[![Stack](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20KaTeX%20%7C%20Python-blue)](#)
[![Zero-Fetch](https://img.shields.io/badge/Zero--Fetch-Offline%20%2F%20file%3A%2F%2F%2F%20Ready-brightgreen)](#)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-orange.svg)](LICENSE.md)

Ολοκληρωμένη εκπαιδευτική πλατφόρμα και αυτοματοποιημένο pipeline επεξεργασίας εκπαιδευτικού περιεχομένου για τα μαθήματα του **Τομέα Μηχανολογίας των Επαγγελματικών Λυκείων (ΕΠΑ.Λ.)**.

Η πλατφόρμα περιλαμβάνει πλήρεις σημειώσεις θεωρίας, διαδραστικές ασκήσεις από την επίσημη **Τράπεζα Θεμάτων του ΙΕΠ**, προσομοιώσεις μηχανολογικών εγκαταστάσεων και **διαδραστικό μαυροπίνακα επίλυσης βήμα-βήμα (Manim-Style)** με γραφή κιμωλίας.

> [!WARNING]
> **Υπό Κατασκευή:** Ο **Agent** (αυτοματοποιημένο pipeline παραγωγής και επεξεργασίας περιεχομένου) βρίσκεται ακόμη **υπό κατασκευή** και ενδέχεται ακόμη να κάνει λάθη σε **εικόνες** ή σε **μαθηματικούς τύπους (μορφή LaTeX)**.

---

## Γρήγορη Εκκίνηση (Quickstart)

### 1. Άνοιγμα της Εφαρμογής (Frontend)
Η εφαρμογή είναι στατική (SPA) και λειτουργεί **χωρίς server ή εγκατάσταση**:
* **Στο διαδίκτυο:** Επισκεφθείτε το [4gnosin.github.io](https://4gnosin.github.io).
* **Τοπικά (Offline / USB):** Ανοίξτε απευθείας το αρχείο `site/index.html` με διπλό κλικ σε οποιονδήποτε browser (Chrome, Edge, Firefox). Υποστηρίζει 100% το πρωτόκολλο `file:///`.

### 2. Εκκίνηση Εργαλείων Αυτοματισμού (Backend CLI / TUI)
Για την επεξεργασία θεμάτων, εξαγωγή εικόνων, συγγραφή θεωρίας και κατασκευή bundles:
```cmd
# Στα Windows:
4gnosin.bat

# Ή απευθείας μέσω Python:
python scripts/menu.py
```

### 3. Αρχικοποίηση Περιβάλλοντος Ανάπτυξης
```bash
# 1. Δημιουργία και ενεργοποίηση virtualenv (.venv χρησιμοποιείται από τα .bat)
python -m venv .venv
# Windows:
.\.venv\Scripts\activate
# Linux/macOS:
source .venv/bin/activate

# 2. Εγκατάσταση εξαρτήσεων
pip install -r requirements.txt

# 3. Εγκατάσταση Chromium για το Playwright (λήψη θεμάτων ΙΕΠ)
playwright install chromium
```

### 4. Επικύρωση & Αυτόματες Δοκιμές (Tests)
```bash
# Εκτέλεση unit tests, tests bundling/validation και ελέγχου συγχρονισμού docs
python -m pytest

# Επικύρωση δομής & KaTeX σε site/exercises, site/content και site/animations
python -m src.cli validate site
```

---

## Ευρετήριο Τεκμηρίωσης (Documentation Index)

Η τεκμηρίωση του συστήματος είναι κατανεμημένη σε εξειδικευμένα έγγραφα στον φάκελο [`docs/`](docs/) (διαθέσιμη και στα Αγγλικά στον φάκελο [`docs/en/`](docs/en/)):

| Έγγραφο Τεκμηρίωσης | Περιεχόμενο & Θεματολογία |
| :--- | :--- |
| **[docs/architecture.md](docs/architecture.md)** | **Αρχιτεκτονική Συστήματος & SPA:** Συνολική ροή δεδομένων, ο κανόνας Zero-Fetch, On-Demand Lazy Loading με subject bundles (`scripts/build_bundles.py`), Hash Routing και δομή φακέλων. |
| **[docs/schemas.md](docs/schemas.md)** | **Προδιαγραφές Δομών Δεδομένων (Data Schemas):** Αυστηρά σχήματα για Θεωρία (`sections` και τα 8 υποστηριζόμενα block types), Ομάδες (`groups.js`), Ασκήσεις και τους 6 τύπους ερωτημάτων (`mc`, `tf`, `calc`, `match`, `blank`, `open`). |
| **[docs/animations.md](docs/animations.md)** | **Διαδραστικός Μαυροπίνακας (Manim-Style):** Η αποσυζευγμένη αρχιτεκτονική (`site/animations/`), σύμβαση animation keys (`item.subq`), δομή βημάτων, player κιμωλίας και υποχρεωτική ανανέωση bundle. |
| **[docs/pipelines.md](docs/pipelines.md)** | **Αυτοματισμοί, Pipelines & CLI:** Εργαλεία άντλησης ΙΕΠ (`trapeza7.py`), PyMuPDF image extractor, βελτιστοποίηση WebP, ακριβής αναφορά εντολών `python -m src.cli` και αυτόνομα εργαλεία (`calc_animator`, `scripts/theory.py`, `build_bundles.py`). |
| **[docs/rules.md](docs/rules.md)** | **Κανόνες Σύνταξης & AI Guidelines:** Κανόνες KaTeX (αποφυγή raw LaTeX σε πεζό κείμενο, delimiters, `{}^{\circ}\text{C}`, `\cdot m`), κανόνας `Θέμα N<sup>ο</sup>`, σύμβαση `thermo`/`b/thermod`, κωδικοποίηση UTF-8 και αποσύνδεση (Decoupling). |

---

## Υποστηριζόμενα Μαθήματα

Η πλατφόρμα περιλαμβάνει τα 14 μαθήματα του Τομέα Μηχανολογίας όπως ορίζονται στον κατάλογο [`site/content/catalog.js`](site/content/catalog.js):

### Β΄ Τάξη ΕΠΑ.Λ.
* **Θερμοδυναμική Θεωρία** (`thermo`, φάκελος δεδομένων: `b/thermod`)
* **Θερμοδυναμική Εργαστήριο** (`thermo-lab`)
* **Αντοχή Υλικών** (`antoxi`)
* **Τεχνολογία Μηχανολογικών Κατασκευών Θεωρία** (`texnologia-michanologikon-kataskevon`)

### Γ΄ Τάξη ΕΠΑ.Λ.
* **Στοιχεία Μηχανών** (`stoixeia-michanon`)
* **Στοιχεία Ψύξης – Κλιματισμού Θεωρία** (`stoixeia-psyxis-klimatismou`)
* **Εγκαταστάσεις Κλιματισμού Θεωρία** (`egkatastaseis-klimatismou`)
* **Συστήματα Ελέγχου, Ρύθμισης και Αυτοματισμού Εγκαταστάσεων Ψύξης και Κλιματισμού Θεωρία** (`systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou`)
* **Μηχανές Εσωτερικής Καύσης ΙΙ Θεωρία** (`michanes-esoterikis-kafsis-2`)
* **Συστήματα Αυτοκινήτου Θεωρία** (`systimata-aftokinitou`)
* **Τεχνολογία Ελέγχου και Διαγνώσεων Θεωρία** (`texnologia-elegxou-diagnoseon`)
* **Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων** (`stoixeia-kentrikon-thermanseon`)
* **Μηχανουργική Τεχνολογία – Εργαλειομηχανές** (`michanourgiki-texnologia`)
* **Στοιχεία Ψύξης – Κλιματισμού (Μηχανολογικών Εγκαταστάσεων)** (`stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon`)

---

## Πνευματικά Δικαιώματα & Άδεια Χρήσης

* Τα θέματα και οι εκφωνήσεις προέρχονται από την επίσημη **Τράπεζα Θεμάτων Διαβαθμισμένης Δυσκολίας (ΙΕΠ)**.
* Τα κείμενα και τα βασικά σχήματα της θεωρίας προέρχονται από τα εγκεκριμένα διδακτικά εγχειρίδια του **ΙΤΥΕ «Διόφαντος»** και του **Υπουργείου Παιδείας**.
* Το πρωτότυπο εκπαιδευτικό υλικό, οι διαδραστικές προσομοιώσεις, τα animations επίλυσης και ο κώδικας της πλατφόρμας διανέμονται υπό την άδεια [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE.md).
* Δείτε αναλυτικά το αρχείο [LICENSE.md](LICENSE.md).
