# Αρχιτεκτονική Συστήματος — 4gnosin.github.io

**Γλώσσα / Language:** Ελληνικά | [English](en/architecture.md)

Το παρόν έγγραφο αναλύει την τεχνική αρχιτεκτονική, τη ροή δεδομένων και τον μηχανισμό εκτέλεσης της εκπαιδευτικής πλατφόρμας **4gnosin.github.io**.

---

## 1. Συνολική Ροή Δεδομένων (End-to-End Pipeline)

Η πλατφόρμα αποτελείται από δύο διακριτούς κόσμους:
1. **Backend / Generation Pipeline (Python):** Επεξεργασία PDFs, OCR, εξαγωγή διανυσματικών σχημάτων και εικόνων, καθαρισμός μαθηματικών τύπων (LaTeX sanitizer), παραγωγή δομημένων αρχείων JavaScript και αυτόματο bundling ανά μάθημα.
2. **Frontend Client (Vanilla JS Single Page Application):** Στατική εφαρμογή που εκτελείται 100% στον φυλλομετρητή (browser) χωρίς ανάγκη για backend server, βάση δεδομένων ή node.js runtime.

```mermaid
flowchart TD
    subgraph INBOX["1. Εισαγωγή Υλικού"]
        PDF["PDFs Σχολικών Βιβλίων & Τράπεζας Θεμάτων"]
    end

    subgraph PIPELINE["2. Pipeline Επεξεργασίας & Bundling (Python CLI)"]
        EXTRACT["PDF Extractor (fitz / PyMuPDF)"]
        OCR["Συσχετισμός Κειμένου & Bounding Boxes"]
        VEC["Ανίχνευση Διανυσματικών Σχημάτων & Overlays"]
        WEBP["Βελτιστοποίηση Εικόνων σε WebP"]
        LATEX["LaTeX Sanitizer (Καθαρισμός Μαθηματικών)"]
        GEN["Generators (Theory, Exercises, Groups, Animations)"]
        BUNDLER["Subject Bundler (scripts/build_bundles.py)"]
    end

    subgraph STORE["3. Αποθετήριο Περιεχομένου (site/)"]
        CONTENT["site/content/ (Πηγαία Θεωρία ανά Κεφάλαιο)"]
        EXERCISES["site/exercises/ (Πηγαίες Ασκήσεις & Groups)"]
        ANIM["site/animations/ (Πηγαίοι Μαυροπίνακες)"]
        IMAGES["site/images/ (Σχήματα WebP)"]
        BUNDLES["site/bundles/ (Ενιαία Bundles ανά Μάθημα ~300-600 KB)"]
        CATALOG["site/content/scripts_catalog.js (On-Demand Ευρετήριο)"]
    end

    subgraph SPA["4. Frontend Single Page Application"]
        INDEX["site/index.html (Ελαφρύς Client ~2.4 KB)"]
        APP["site/js/app.js (Router, Promise Cache, Hover Prefetch, KaTeX)"]
        DOM["Διαδραστική Προβολή στον Browser (Web ή file:///)"]
    end

    PDF --> EXTRACT
    EXTRACT --> OCR --> VEC --> WEBP --> LATEX --> GEN
    GEN --> CONTENT
    GEN --> EXERCISES
    GEN --> ANIM
    GEN --> IMAGES
    CONTENT & EXERCISES & ANIM --> BUNDLER
    BUNDLER --> BUNDLES
    BUNDLER --> CATALOG

    INDEX --> APP
    CATALOG -.-> APP
    APP -->|1 Request On-Demand / Hover Prefetch| BUNDLES
    APP --> DOM
```

---

## 2. Ο Κανόνας "Zero-Fetch" & Συμβατότητα με `file:///`

### 2.1 Το Πρόβλημα του `fetch()` σε Τοπικό Περιβάλλον
Σε πολλά σχολεία και εργαστήρια ΕΠΑ.Λ., το site διανέμεται σε USB sticks ή ανοίγει τοπικά με διπλό κλικ στο `index.html` (πρωτόκολλο `file:///`) χωρίς σύνδεση στο internet και χωρίς τοπικό HTTP server (`http://localhost`).
* Οι σύγχρονοι browsers (Chrome, Edge, Firefox) **μπλοκάρουν εντολές `fetch()` και `XMLHttpRequest`** όταν εκτελούνται υπό το πρωτόκολλο `file:///` λόγω περιορισμών ασφαλείας CORS (*Cross-Origin Resource Sharing*).

### 2.2 Η Αρχιτεκτονική Λύση: Global Namespace Injection
Όλα τα δεδομένα της πλατφόρμας είναι αποθηκευμένα σε αρχεία JavaScript (`.js`), τα οποία φορτώνονται μέσω κανονικών tags:
```html
<script src="path/to/file.js"></script>
```
Τα tags αυτά εκτελούνται ελεύθερα τόσο στο διαδίκτυο (GitHub Pages) όσο και σε τοπικό δίσκο (`file:///`).

Κάθε αρχείο προσαρτά τα δεδομένα του σε καθολικά αντικείμενα του `window`:
* `window.SUBJECT_DATA`: Περιέχει τα δεδομένα θεωρίας, ομάδων και ασκήσεων του ενεργού μαθήματος.
* `window.SUBJECT_SCRIPTS`: Ευρετήριο ενεργών scripts ανά μάθημα (δείχνει στο ενιαίο `bundles/{subject}.bundle.js` για ακαριαία φόρτωση με 1 αίτημα).
* `window.SUBJECT_RAW_SCRIPTS`: Πλήρες ευρετήριο των αρχικών πηγαίων αρχείων ανά μάθημα (χρήσιμο για development / fallback με `--raw`).
* `window.EXERCISE_ANIMATIONS`: Ανεξάρτητο μητρώο για τα βήματα του διαδραστικού μαυροπίνακα (Plug & Play).

---

## 3. Μηχανισμός Φόρτωσης & Επιδόσεων (High-Speed Lazy Loading)

### 3.1 Η Αρχιτεκτονική Εξέλιξη
1. **Φάση 1 (Μονολιθική — `index_full.html`):** Φόρτωνε και τα 650+ αρχεία στην εκκίνηση. Η αρχική σελίδα ήταν αργή.
2. **Φάση 2 (Απλό Lazy Loading με μεμονωμένα αρχεία):** Η αρχική σελίδα έγινε γρήγορη, αλλά η επιλογή ενός μαθήματος απαιτούσε 80–110 ξεχωριστά αιτήματα δικτύου (HTTP requests), προκαλώντας καθυστέρηση 2–4 δευτερολέπτων.
3. **Φάση 3 (Παραγωγή — Subject Bundles + Hover Prefetching):** Η αρχική σελίδα παραμένει αστραπιαία, ενώ κάθε μάθημα συνενώνεται σε **1 μόνο αρχείο bundle** (~300–600 KB).

### 3.2 Πώς Λειτουργεί στην Παραγωγή (`site/index.html` + `site/js/app.js`)
* **Μέγεθος Αρχικής Σελίδας:** ~2.4 KB (μόλις 39 γραμμές).
* **Εκκίνηση:** Φορτώνονται μόνο ο σκελετός HTML, το KaTeX, το CSS, το `catalog.js`, το `scripts_catalog.js` και το `site/js/app.js`. Μηδενική καθυστέρηση στην αρχική.
* **Hover / Pointer Prefetching:** Όταν ο κέρσορας πλησιάσει (ή αγγίξει σε οθόνη αφής) την κάρτα ενός μαθήματος στην αρχική σελίδα, το `app.js` ξεκινά αθόρυβα την προφόρτωση του bundle στο παρασκήνιο. Όταν ο χρήστης πατήσει κλικ, το μάθημα είναι ήδη στη μνήμη (**0ms perceived latency**).
* **Promise Caching:** Η συνάρτηση `ensureSubjectLoaded(subjectId)` διατηρεί Promise cache, αποτρέποντας διπλότυπες εγγραφές tags στο DOM ή race conditions κατά την πλοήγηση.
* **Ανθεκτικότητα Σφαλμάτων:** Ακόμη κι αν κάποιο script αποτύχει, ο event handler `s.onerror` αποτρέπει το πάγωμα της εφαρμογής.

### 3.3 `site/index_full.html` (Η εφεδρική μονολιθική έκδοση — Fallback / Debug)
* **Μέγεθος:** ~65 KB (650+ γραμμές).
* **Ρόλος:** Περιέχει στατικά δηλωμένα `<script>` tags για κάθε αρχείο θεωρίας, άσκησης και animation όλων των μαθημάτων. Παραμένει ως αυτόνομο αντίγραφο ασφαλείας για περιβάλλοντα που δεν υποστηρίζουν δυναμική εισαγωγή scripts.

---

## 4. Δρομολόγηση (Hash Routing)

Το `site/js/app.js` υλοποιεί έναν ελαφρύ SPA Router βασισμένο στο `window.location.hash`:

| Hash Route Pattern | Σελίδα Προβολής | Περιγραφή |
| :--- | :--- | :--- |
| `#/` | Αρχική Σελίδα (Home) | Λίστα όλων των μαθημάτων Β΄ και Γ΄ Τάξης ΕΠΑ.Λ. |
| `#/{subject}` | Επισκόπηση Μαθήματος | Περιεχόμενα, σύνδεσμοι θεωρίας, ασκήσεων και προσομοιώσεων. |
| `#/{subject}/notes` | Ευρετήριο Σημειώσεων | Συγκεντρωτική λίστα κεφαλαίων θεωρίας. |
| `#/{subject}/notes/{slug}` | Σελίδα Θεωρίας (Section) | Πλήρες κείμενο ενότητας με μαθηματικούς τύπους, εικόνες και επεξηγήσεις. |
| `#/{subject}/board` | Πίνακας Ασκήσεων (Board) | Όλες οι ασκήσεις ανά κεφάλαιο με ενδείξεις προόδου (✓) και badges `🎬 Animation`. |
| `#/{subject}/board/{exId}` | Σελίδα Άσκησης | Διαδραστική επίλυση με άμεσο έλεγχο, υποδείξεις, βήματα μαυροπίνακα και σχήματα λύσης. |
| `#/math` & `#/math/{category}` | Βασικά Μαθηματικά | Οδηγοί αναφοράς (κλάσματα, ταυτότητες, δυνάμεις, παραγοντοποίηση). |

---

## 5. Δομή Φακέλων & Διαχωρισμός Ευθυνών

```text
site/
├── index.html                 # Κύρια σελίδα παραγωγής (High-Speed Lazy Loading)
├── index_full.html            # Εφεδρική μονολιθική σελίδα (Fallback)
├── css/
│   └── style.css              # Ενιαίο responsive design, θέμα μαυροπίνακα & κιμωλίας
├── js/
│   └── app.js                 # SPA Router, Promise Cache, Hover Prefetch, Chalkboard player
├── bundles/                   # Ενιαία bundles ανά μάθημα (1 αρχείο/μάθημα για ακαριαία φόρτωση)
│   └── {subject}.bundle.js    # Συνενωμένη θεωρία, ασκήσεις, ομάδες & animations (~300-600 KB)
├── content/                   # Πηγαία Θεωρία (Sections)
│   ├── catalog.js             # Κατάλογος μαθημάτων, τάξεων και τίτλων
│   ├── scripts_catalog.js     # Χάρτης ενεργών bundles (και raw scripts) ανά μάθημα
│   └── {grade}/{subject}/...  # Πηγαία αρχεία θεωρίας ανά κεφάλαιο (π.χ. 01-sec.js)
├── exercises/                 # Πηγαίες Ασκήσεις Τράπεζας Θεμάτων
│   └── {grade}/{subject}/...
│       ├── groups.js          # Ομαδοποίηση υποενοτήτων ανά κεφάλαιο
│       └── chNN-MM-slug.js    # Ασκήσεις (mc, tf, calc, match, blank, open)
├── animations/                # Διαδραστικοί Μαυροπίνακες (Plug & Play)
│   └── {grade}/{subject}/
│       └── {exId}.js          # Ανεξάρτητο animation ανά άσκηση
└── images/                    # Βελτιστοποιημένα τεχνικά σχήματα & διαγράμματα (WebP)
    └── {grade}/{subject}/...  # {stem}_{code}_figNN.webp / solNN.webp

scripts/
├── build_bundles.py           # Κατασκευή bundles ανά μάθημα & ενημέρωση scripts_catalog.js
├── build_bundles.bat          # Εκτέλεση με διπλό κλικ σε Windows
├── menu.py                    # Control Center (επιλογή [4] στα εργαλεία & αυτόματο bundling)
└── ...                        # Εργαλεία PDF extraction, OCR, WebP, Validator
```

---

## 6. Αυτοματισμός & Συντήρηση

* **Προσθήκη / Επεξεργασία Υλικού:** Ο προγραμματιστής / συντάκτης συνεχίζει να εργάζεται στα καθαρά, επιμέρους αρχεία (`content/`, `exercises/`, `animations/`).
* **Ενημέρωση Παραγωγής:** Κάθε φορά που εκτελείται το pipeline από το `menu.py` (ή απευθείας το `scripts/build_bundles.bat`), τα bundles και το `scripts_catalog.js` ενημερώνονται αυτόματα σε 1-2 δευτερόλεπτα.
* **Έλεγχος Ορθότητας:** Το `site_validator.py` επικυρώνει τα αρχικά πηγαία αρχεία πριν από την παραγωγή των bundles, διασφαλίζοντας 100% ακεραιότητα δεδομένων.
