**Γλώσσα / Language:** Ελληνικά | [English](en/animations.md)

# Διαδραστικά Animations Επίλυσης Ασκήσεων (Chalkboard System)

Το σύστημα **BlackboardAnimation** προσφέρει βήμα-προς-βήμα μαθηματική επεξήγηση για ασκήσεις υπολογισμού (`calc`), με μορφοποίηση LaTeX (KaTeX) και χειριστήρια αναπαραγωγής (Play, Παύση, Επανάληψη και εναλλαγή μεμονωμένων βημάτων).

---

## 1. Αποσυνδεδεμένη Αρχιτεκτονική & Production Bundles

Τα δεδομένα των animations **δεν ενσωματώνονται** μέσα στα αρχεία ασκήσεων (`site/exercises/`), αλλά διατηρούνται σε ξεχωριστά πηγαία αρχεία στον φάκελο `site/animations/`:

```text
site/
├── exercises/
│   ├── b/thermod/ch05-20954.js            # Η εκφώνηση της άσκησης (σταθερή)
│   └── c/stoixeia-michanon/ch14-25806.js
├── animations/
│   ├── b/thermod/ch05-20954.js            # Animation Θερμοδυναμικής (φάκελος b/thermod -> id: "thermo")
│   └── c/stoixeia-michanon/ch14-25806.js
├── bundles/
│   ├── thermo.bundle.js                   # Συσκευασμένο bundle παραγωγής
│   └── stoixeia-michanon.bundle.js
└── content/
    └── scripts_catalog.js                 # Ορίζει το window.SUBJECT_SCRIPTS για το Lazy Loading
```

> [!IMPORTANT]
> **Κανόνας Συσκευασίας Παραγωγής:** Παρότι τα πηγαία αρχεία σε `site/exercises/` και `site/animations/` είναι πλήρως αποσυνδεδεμένα, η έκδοση παραγωγής (`site/index.html`) φορτώνει από το `site/bundles/{subject}.bundle.js` μέσω του `site/content/scripts_catalog.js`. Κάθε προσθήκη, τροποποίηση ή διαγραφή αρχείου στον φάκελο `site/animations/` **δεν εμφανίζεται στην παραγωγή** μέχρι να εκτελεστεί ξανά το `python scripts/build_bundles.py`. Η λειτουργία `--raw` (ή το `site/index_full.html`) αφορά μόνο φόρτωση μη συσκευασμένων αρχείων.

---

## 2. Μητρώο `window.EXERCISE_ANIMATIONS` & Σύμβαση Κλειδιών

Κάθε αρχείο animation καταχωρεί τις επεξηγήσεις του στο καθολικό αντικείμενο `window.EXERCISE_ANIMATIONS[exId]`:

```javascript
window.EXERCISE_ANIMATIONS = window.EXERCISE_ANIMATIONS || {};
window.EXERCISE_ANIMATIONS["ch05-20954"] = {
  "4.3": {
    "title": "Ερώτημα (4.3): Υπολογισμός μεταβολής εσωτερικής ενέργειας",
    "steps": [
      {
        "kicker": "Βήμα 1 — Δεδομένα & Ζητούμενο",
        "text": "Εντοπίζουμε τα δεδομένα του θερμοδυναμικού συστήματος και τη ζητούμενη μεταβολή εσωτερικής ενέργειας.",
        "math": "Q = +450\\text{ J}, \\quad W = +150\\text{ J}",
        "note": "Προσοχή στις συμβάσεις προσήμων του Πρώτου Νόμου.",
        "highlight": "\\Delta U = ?"
      },
      {
        "kicker": "Βήμα 2 — Φυσικός Νόμος",
        "text": "Εφαρμόζουμε τον Πρώτο Νόμο της Θερμοδυναμικής για κλειστό σύστημα.",
        "math": "\\Delta U = Q - W",
        "note": "Ισχύει ανεξάρτητα από τη φύση της διεργασίας.",
        "highlight": "\\Delta U = Q - W"
      }
    ]
  }
};
```

Ένα πραγματικό πολυβηματικό παράδειγμα με ελληνικά κλειδιά υποερωτημάτων βρίσκεται στο `site/animations/c/stoixeia-michanon/ch14-25806.js`, όπου χρησιμοποιούνται τα κλειδιά `"α"` και `"β"` (και το `"α"` αποτελείται από 6 διαδοχικά βήματα).

### Ενιαία Σύμβαση Κλειδιών (`src/tools/calc_animator.py`)

Για να συνδέεται με συνέπεια κάθε animation με το σωστό υποερώτημα (`calc` item):

1. **Όταν το item έχει μη κενό `subq`:** Το κλειδί είναι **αυτούσιο** το `str(item["subq"]).strip()` (π.χ. `"4.3"`, `"4.2α"`, `"α"`, `"β"`), χωρίς αφαίρεση προθεμάτων ή μετατροπή χαρακτήρων.
2. **Όταν το `subq` λείπει και η άσκηση έχει πολλαπλά items (`len(items) > 1`):** Χρησιμοποιείται ο δείκτης θέσης ως συμβολοσειρά: `"0"`, `"1"`, `"2"`, ...
3. **Όταν το `subq` λείπει και η άσκηση έχει ένα μόνο item:** Χρησιμοποιείται το κλειδί `"default"`.

### Σειρά Αναζήτησης στο Frontend (`getAnimationForCalcItem` στο `site/js/app.js`)

Κατά την απόδοση ενός ερωτήματος υπολογισμού, το `site/js/app.js` αναζητά animation με την εξής σειρά προτεραιότητας:

1. `item.animation` *(παρωχημένη ενσωματωμένη μορφή fallback — να αποφεύγεται σε νέα αρχεία)*
2. `exAnims.steps` *(απευθείας αντικείμενο στο επίπεδο άσκησης)*
3. `exAnims[item.subq]` *(πρωτεύον κανονικό κλειδί)*
4. `exAnims[cleanSubq]`
5. `exAnims[itemIdx]` *(δείκτης `"0"`, `"1"`, ...)*
6. `exAnims["default"]`
7. `store[exId + "_" + item.subq]` ή `store[exId + "_" + itemIdx]`

---

## 3. Σχήμα Εγγραφής & Πεδία Βήματος

Σύμφωνα με τον validator (`src/validators/site_validator.py`) και τον κώδικα απόδοσης στο `site/js/app.js`:

| Πεδίο | Επίπεδο | Υποχρεωτικό | Περιγραφή |
| :--- | :--- | :--- | :--- |
| `title` | Εγγραφή υποερωτήματος | Ναι | Μη κενός τίτλος μαυροπίνακα |
| `steps` | Εγγραφή υποερωτήματος | Ναι | Μη κενή λίστα αντικειμένων βήματος |
| `text` (ή `description`) | Βήμα | Ναι | Επεξήγηση του σκεπτικού του βήματος στα ελληνικά |
| `math` (ή `latex`) | Βήμα | Ναι | Μαθηματική έκφραση LaTeX/KaTeX για τον μαυροπίνακα |
| `kicker` | Βήμα | Όχι | Σύντομη ετικέτα/επικεφαλίδα φάσης (π.χ. `"Βήμα 1 — Δεδομένα"`) |
| `note` | Βήμα | Όχι | Σημείωση προσοχής, μονάδων μέτρησης ή φυσικής ερμηνείας |
| `highlight` | Βήμα | Όχι | Βασικό ενδιάμεσο ή τελικό αποτέλεσμα προς έμφαση |

> [!NOTE]
> **Πλήθος βημάτων:** Ο `calc_animator.py` παράγει τυπικά **4 παιδαγωγικά βήματα** (1. Δεδομένα/Ζητούμενο, 2. Φυσικός Νόμος/Τύπος, 3. Αντικατάσταση/Πράξεις, 4. Τελικό Αποτέλεσμα/Επιβεβαίωση), όμως ούτε το `SiteValidator` ούτε το frontend επιβάλλουν ανώτατο όριο 4 βημάτων. Σύνθετες αναλύσεις μπορούν να έχουν περισσότερα βήματα (όπως τα 6 βήματα του κλειδιού `"α"` στο `ch14-25806.js`).

---

## 4. Αυτοματοποιημένη Παραγωγή (`calc_animator.py`)

Η γεννήτρια `calc_animator.py` εκτελείται ως **αυτόνομο εργαλείο** (όχι μέσω `python -m src.cli`):

```bash
# Σάρωση όλων των ασκήσεων για ελλείποντα animations
python -m src.tools.calc_animator --scan

# Δημιουργία animation για συγκεκριμένο μάθημα, κεφάλαιο ή κωδικό άσκησης
python -m src.tools.calc_animator --subject thermo --chapter 5
python -m src.tools.calc_animator --target 25806 --mode hybrid --overwrite
```

### Παράμετροι Γραμμής Εντολών

| Παράμετρος | Τύπος / Τιμές | Περιγραφή |
| :--- | :--- | :--- |
| `--scan` | σημαία | Εντοπίζει ασκήσεις `calc` χωρίς αντίστοιχο animation |
| `--subject <ID>` | κείμενο | ID μαθήματος ή alias (π.χ. `thermo`, `stoixeia-michanon`) |
| `--chapter <N>` | ακέραιος | Περιορισμός σε συγκεκριμένο αριθμό κεφαλαίου |
| `--target <CODE>` | κείμενο | Στοχευμένη επεξεργασία άσκησης με βάση τον κωδικό (π.χ. `25806`) |
| `--overwrite` | σημαία | Αντικατάσταση ήδη υπαρχόντων αρχείων animation |
| `--mode <MODE>` | `local`, `hybrid` *(προεπιλογή)*, `ai-pedagogy`, `ai`, `ai-full` | Στρατηγική παραγωγής βημάτων |

Κατά την εκτέλεση δημιουργίας, το `calc_animator.py` ενημερώνει αυτόματα και τα bundles παραγωγής.

---

## 5. Χειροκίνητη Προσθήκη, Διαγραφή & Έλεγχος

### 5.1 Πώς προσθέτω νέο animation χειροκίνητα
1. Δημιουργήστε το αρχείο `site/animations/{grade}/{subject_dir}/{exId}.js` (για `thermo` ο φάκελος είναι `b/thermod`).
2. Καταχωρήστε το `window.EXERCISE_ANIMATIONS["{exId}"]` ακολουθώντας τη σύμβαση κλειδιών της ενότητας 2 (`item.subq`, ή `"0"`/`"1"`, ή `"default"`) με μη κενό `title` και `steps` που περιέχουν `text` και `math`.
3. Εκτελέστε υποχρεωτικά τη συσκευασία παραγωγής:
   ```bash
   python scripts/build_bundles.py
   ```
   (Το `python scripts/build_scripts_catalog.py` λειτουργεί ως wrapper που καλεί επίσης τον bundler. Προσθέστε `--raw` μόνο σε λειτουργία χωρίς bundles.)

### 5.2 Πώς διαγράφω ένα animation
1. Διαγράψτε το αρχείο `site/animations/{grade}/{subject_dir}/{exId}.js`.
2. **Υποχρεωτικό για την παραγωγή:** Εκτελέστε:
   ```bash
   python scripts/build_bundles.py
   ```
   ώστε να ξαναχτιστεί το `site/bundles/{subject}.bundle.js` χωρίς το διαγραμμένο animation.
3. Το αντίστοιχο αρχείο άσκησης στον φάκελο `site/exercises/` παραμένει ανέπαφο και η άσκηση συνεχίζει να λειτουργεί κανονικά χωρίς κουμπί animation.

### 5.3 Τοπικός Έλεγχος
* Τόσο η `python -m src.cli validate` όσο και το `python -m src.validators.site_validator` ελέγχουν αυτόματα τα `site/exercises/`, `site/content/` **και** `site/animations/` (δομή, απαιτούμενα πεδία και σύνταξη KaTeX).
* Ελέγξτε οπτικά κάθε νέο ή τροποποιημένο animation εκκινώντας τον τοπικό εξυπηρετητή (`python scripts/site_server.py`) και ανοίγοντας την άσκηση στον browser.
