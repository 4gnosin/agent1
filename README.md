# 4gnosin.github.io — Πλατφόρμα Μηχανολογίας ΕΠΑ.Λ.

🌐 **Γλώσσα / Language:** **Ελληνικά** | [English](README.en.md)

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

## ⚡ Γρήγορη Εκκίνηση (Quickstart)

### 1. Άνοιγμα της Εφαρμογής (Frontend)
Η εφαρμογή είναι στατική (SPA) και λειτουργεί **χωρίς server ή εγκατάσταση**:
* **Στο διαδίκτυο:** Επισκεφθείτε το [4gnosin.github.io](https://4gnosin.github.io).
* **Τοπικά (Offline / USB):** Ανοίξτε απευθείας το αρχείο `site/index.html` με διπλό κλικ σε οποιονδήποτε browser (Chrome, Edge, Firefox). Υποστηρίζει 100% το πρωτόκολλο `file:///`.

### 2. Εκκίνηση Εργαλείων Αυτοματισμού (Backend CLI / TUI)
Για την επεξεργασία θεμάτων, εξαγωγή εικόνων και συγγραφή θεωρίας:
```cmd
# Στα Windows:
4gnosin.bat

# Ή απευθείας μέσω Python:
python scripts/menu.py
```

### 3. Αρχικοποίηση Περιβάλλοντος Ανάπτυξης
```bash
# 1. Δημιουργία και ενεργοποίηση virtualenv
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

# 2. Εγκατάσταση εξαρτήσεων
pip install -r scripts/requirements.txt

# 3. Εγκατάσταση Chromium για το Playwright (λήψη θεμάτων ΙΕΠ)
playwright install chromium
```

---

## 📚 Ευρετήριο Τεκμηρίωσης (Documentation Index)

Η τεκμηρίωση του συστήματος είναι κατανεμημένη σε εξειδικευμένα έγγραφα στον φάκελο [`docs/`](docs/):

| Έγγραφο Τεκμηρίωσης | Περιεχόμενο & Θεματολογία |
| :--- | :--- |
| 🏛️ **[docs/architecture.md](docs/architecture.md)** | **Αρχιτεκτονική Συστήματος & SPA:** Συνολική ροή δεδομένων, ο κανόνας Zero-Fetch, μηχανισμός On-Demand Lazy Loading (`scripts_catalog.js`), Hash Routing και δομή φακέλων. |
| 📋 **[docs/schemas.md](docs/schemas.md)** | **Προδιαγραφές Δομών Δεδομένων (Data Schemas):** Αυστηρά σχήματα για Θεωρία (`sections`), Ομάδες (`groups.js`), Ασκήσεις και αναλυτικές προδιαγραφές των 6 τύπων ερωτημάτων (`mc`, `tf`, `calc`, `match`, `blank`, `open`). |
| 🎬 **[docs/animations.md](docs/animations.md)** | **Διαδραστικός Μαυροπίνακας (Manim-Style):** Η αποσυζευγμένη αρχιτεκτονική **Plug & Play** (`site/animations/`), τα 4 υποχρεωτικά παιδαγωγικά βήματα, ο player κιμωλίας και οδηγίες άμεσης διαγραφής/προσθήκης. |
| ⚙️ **[docs/pipelines.md](docs/pipelines.md)** | **Αυτοματισμοί, Pipelines & CLI:** Εργαλεία άντλησης ΙΕΠ (`trapeza7.py`), PyMuPDF image extractor με αυτόματη ανίχνευση διανυσματικών διαγραμμάτων, βελτιστοποίηση WebP και πλήρης πίνακας εντολών `python -m src.cli`. |
| 📐 **[docs/rules.md](docs/rules.md)** | **Κανόνες Σύνταξης & AI Guidelines:** Απαράβατοι κανόνες KaTeX (αποφυγή raw LaTeX σε πεζό κείμενο, delimiters, `{}^\circ\text{C}`, `\cdot m`), κωδικοποίηση UTF-8, κανόνες σχημάτων λύσης και αρχή της αποσύνδεσης (Decoupling). |

---

## 🗂️ Υποστηριζόμενα Μαθήματα

Η πλατφόρμα υποστηρίζει πλήρως όλα τα πανελλαδικά και εργαστηριακά μαθήματα του Τομέα Μηχανολογίας:

### Β΄ Τάξη ΕΠΑ.Λ.
* **Θερμοδυναμική** (`thermo`)
* **Στοιχεία Τεχνικής Θερμοδυναμικής — Εργαστήριο** (`thermo-lab`)
* **Μηχανική — Αντοχή Υλικών** (`antoxi`)

### Γ΄ Τάξη ΕΠΑ.Λ.
* **Στοιχεία Ψύξης & Κλιματισμού** (`stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon`)
* **Εγκαταστάσεις Κλιματισμού** (`egkatastaseis-klimatismou`)
* **Συστήματα Ελέγχου, Ρύθμισης & Αυτοματισμού Ψυκτικών Εγκαταστάσεων** (`systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou`)
* **Στοιχεία Μηχανών** (`stoixeia-michanon`)
* **Μηχανές Εσωτερικής Καύσης ΙΙ** (`michanes-esoterikis-kafsis-2`)
* **Στοιχεία Κεντρικών Θερμάνσεων** (`stoixeia-kentrikon-thermanseon`)
* **Τεχνολογία Μηχανολογικών Κατασκευών** (`texnologia-michanologikon-kataskevon`)
* **Μηχανουργική Τεχνολογία** (`michanourgiki-texnologia`)
* **Συστήματα Αυτοκινήτου** (`systimata-aftokinitou`)
* **Τεχνολογία Ελέγχου & Διαγνώσεων** (`texnologia-elegxou-diagnoseon`)

---

## 🛡️ Πνευματικά Δικαιώματα & Άδεια Χρήσης

* Τα θέματα και οι εκφωνήσεις προέρχονται από την επίσημη **Τράπεζα Θεμάτων Διαβαθμισμένης Δυσκολίας (ΙΕΠ)**.
* Τα κείμενα και τα βασικά σχήματα της θεωρίας προέρχονται από τα εγκεκριμένα διδακτικά εγχειρίδια του **ΙΤΥΕ «Διόφαντος»** και του **Υπουργείου Παιδείας**.
* Το πρωτότυπο εκπαιδευτικό υλικό, οι διαδραστικές προσομοιώσεις, τα animations επίλυσης και ο κώδικας της πλατφόρμας διανέμονται υπό την άδεια [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](LICENSE.md).
* Δείτε αναλυτικά το αρχείο [LICENSE.md](LICENSE.md).
