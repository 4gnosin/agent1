# epal-mech-agent

> **AI Agent & Content Pipeline για τα μαθήματα Μηχανολογίας των ΕΠΑ.Λ.**  
> Ειδικά σχεδιασμένος για να υποστηρίξει και να τροφοδοτεί απευθείας τον ιστότοπο **[4gnosin.github.io](https://github.com/4gnosin/4gnosin.github.io)** με θεωρία, ασκήσεις Τράπεζας Θεμάτων και διαδραστική καθοδήγηση μαθητών.

---

## 🎯 Φιλοσοφία & Σύνδεση με το `4gnosin.github.io`

Ο ιστότοπος **4gnosin.github.io** είναι μια ανεξάρτητη εκπαιδευτική πλατφόρμα (pure vanilla HTML/CSS/JavaScript στο GitHub Pages, χωρίς build tools) αφιερωμένη στον Τομέα Μηχανολογίας των ΕΠΑ.Λ.

Το **`epal-mech-agent`** σχεδιάστηκε από την αρχή ώστε να αποτελεί το εργαλείο αυτοματοποιημένης παραγωγής (authoring pipeline) και εκπαιδευτικής επικύρωσης του site:

1. **Αυστηρή Τήρηση Schemas (`window.SECTIONS`, `window.GROUPS`, `window.EXERCISES`):**
   - Παραγωγή αρχείων θεωρίας `0N-<slug>.js` με ειδικά blocks (`p`, `callout` [def/example/remember/tip], `formula`, `h`, `ul`, `table`).
   - Παραγωγή αρχείων ασκήσεων με υποστήριξη όλων των ειδών του site: `mc` (πολλαπλής επιλογής), `tf` (σωστό/λάθος), `match` (αντιστοίχιση), `blank` (συμπλήρωση κενών), και `calc` (υπολογιστικές βήμα-βήμα με ανοχές και επεξηγήσεις).
2. **Σύνδεση με την Τράπεζα Θεμάτων & τα Σχολικά Βιβλία:**
   - Αυτόματη απόδοση κωδικών Τράπεζας Θεμάτων (π.χ. `Θέμα 2ο § 2.1`, `Θέμα 4ο`), μορίων (`units: 9`, `25`), και συνδέσμων θεωρίας (`theory`).
3. **Αυτόματη Παραγωγή `<script>` Tags:**
   - Δημιουργία των έτοιμων αποκομμάτων HTML για απευθείας επικόλληση στο `index.html` του site με τη σωστή σειρά εξαρτήσεων.
4. **Chapter-by-Chapter AI Tutor:**
   - Παράλληλα λειτουργεί και ως διαδραστικός εικονικός καθηγητής ΕΠΑΛ, αυστηρά περιορισμένος στην ύλη του επιλεγμένου κεφαλαίου.

---

## 📂 Δομή Αποθετηρίου (Repository Structure)

```text
epal-mech-agent/
├── data/
│   └── chapters/                     # Αρχεία Markdown ύλης (πηγή για παραγωγή site)
│       └── chapter_01_stoicheia.md   # Πρότυπο: Στοιχεία Μηχανών (Κοχλίες & Ήλοι)
├── prompts/
│   ├── system_prompt.md              # System prompt εικονικού καθηγητή ΕΠΑΛ
│   ├── site_theory_prompt.md         # Generator prompt για window.SECTIONS JS
│   └── site_exercise_prompt.md       # Generator prompt για window.GROUPS & EXERCISES JS
├── src/
│   ├── agent.py                      # Κύριος Agent & Interactive Tutor
│   ├── cli.py                        # Ενιαίο CLI για όλο το content pipeline
│   ├── generators/
│   │   ├── theory_generator.py       # Παραγωγή 0N-<slug>.js
│   │   ├── exercise_generator.py     # Παραγωγή groups.js & <group>.js
│   │   └── script_tags_generator.py  # Παραγωγή <script> tags για index.html
│   └── validators/
│       └── site_validator.py         # Επικυρωτής των schemas του 4gnosin.github.io
├── output/                           # Προεπιλεγμένος φάκελος παραγόμενων αρχείων site
│   ├── content/                      # Έτοιμα αρχεία θεωρίας
│   └── exercises/                    # Έτοιμα αρχεία ασκήσεων
├── requirements.txt                  # google-genai, python-dotenv
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Εγκατάσταση & Ρύθμιση

```bash
# 1. Κλωνοποίηση & μετάβαση
git clone https://github.com/your-username/epal-mech-agent.git
cd epal-mech-agent

# 2. Εικονικό περιβάλλον Python
python -m venv .venv
.venv\Scripts\Activate.ps1   # Σε Windows PowerShell
# source .venv/bin/activate  # Σε Linux/macOS

# 3. Εγκατάσταση εξαρτήσεων
pip install -r requirements.txt

# 4. Ρύθμιση κλειδιού Gemini API
cp .env.example .env
```

Στο αρχείο `.env`:
```env
GEMINI_API_KEY=το_κλειδι_gemini_σας
GEMINI_MODEL=gemini-3.8-flash
```

---

## 🛠️ Οδηγός Χρήσης (CLI Pipeline)

### 1. Εξαγωγή Κεφαλαίου από PDF με Αυτόματη Αποκατάσταση Τύπων σε LaTeX (`--ai-clean`)
Μπορείτε είτε να κάνετε 100% offline εξαγωγή (0 tokens) είτε να προσθέσετε τη σημαία `--ai-clean` ώστε το Gemini να διορθώσει αυτόματα όλους τους σπασμένους τύπους σε άψογο LaTeX:
```bash
python -m src.cli extract-pdf \
  -p "C:\path\to\vivlio_thermodynamikis.pdf" \
  -o data/chapters/b_thermod_ch02.md \
  --start-page 45 \
  --end-page 62 \
  -t "Κεφάλαιο 2: Καταστατική Εξίσωση Αερίων" \
  --ai-clean
```

### 2. Direct Build από PDF (All-in-One με μία εντολή!)
Μπορείτε ακόμα και να δώσετε **απευθείας το PDF** στην εντολή `build-chapter`. Ο agent θα αναλάβει αυτόματα την εξαγωγή, την αποκατάσταση των τύπων και την παραγωγή όλου του JavaScript κώδικα χωρίς να αγγίξετε τίποτα:
```bash
python -m src.cli build-chapter \
  -i "C:\path\to\vivlio_thermodynamikis.pdf" \
  --start-page 45 \
  --end-page 62 \
  -g b \
  -s thermod \
  -c 2
```

### 3. Πλήρης Παραγωγή Κεφαλαίου από έτοιμο Markdown (`build-chapter`)
Παράγει με μία εντολή **όλα** τα αρχεία θεωρίας, το `groups.js`, τα αρχεία ασκήσεων και το snippet με τα `<script>` tags:

```bash
python -m src.cli build-chapter \
  --input data/chapters/chapter_01_stoicheia.md \
  --grade b \
  --subject antoxi \
  --chapter 1 \
  --output output
```

Τα αρχεία αποθηκεύονται απευθείας στη δομή που απαιτεί το `4gnosin.github.io`:
- `output/content/b/antoxi/chapter-01/00-stoxoi.js`
- `output/content/b/antoxi/chapter-01/01-genika.js`
- `output/content/b/antoxi/chapter-01/02-efarmoges.js`
- `output/content/b/antoxi/chapter-01/03-perilipsi.js`
- `output/exercises/b/antoxi/chapter-01/groups.js`
- `output/exercises/b/antoxi/chapter-01/units.js`
- `output/exercises/b/antoxi/chapter-01/calc.js`
- `output/index_tags_antoxi_ch01.html` (έτοιμα script tags για το `index.html`)

### 4. Μαζική Παραγωγή Πολλών Κεφαλαίων (`build-batch`)
Βάλτε τα αρχεία Markdown των κεφαλαίων σε έναν φάκελο. Κάθε όνομα πρέπει να περιέχει τον αριθμό του κεφαλαίου, όπως `chapter_01_stoicheia.md` ή `ch02_thermod.md`. Η τάξη και το μάθημα είναι κοινά για όλα τα αρχεία:

```powershell
python -m src.cli build-batch `
  --input-dir data/chapters `
  --grade b `
  --subject thermod `
  --output site
```

Ο φάκελος που δίνεται στο `--output` πρέπει να είναι το root του υπάρχοντος site και να περιέχει `index.html` και `content/catalog.js`. Μετά την παραγωγή, ο agent προσθέτει στο `index.html` μόνο τα `<script>` tags που λείπουν και συγχρονίζει την καταχώριση του υπάρχοντος μαθήματος στο `content/catalog.js`. Το `thermod` αντιστοιχίζεται αυτόματα στο route `thermo` του site. Δεν δημιουργούνται νέα μαθήματα ή routes.

Αν οι ασκήσεις βρίσκονται σε ξεχωριστά αρχεία, βάλτε τα σε δεύτερο φάκελο με τα ίδια ονόματα και προσθέστε `--exercises-dir data/exercises`. Πριν ξεκινήσει η παραγωγή, ο agent ελέγχει ότι υπάρχουν αρχεία Markdown, ότι αναγνωρίζονται οι αριθμοί των κεφαλαίων, ότι δεν υπάρχουν διπλά κεφάλαια και ότι το μάθημα υπάρχει στο catalog. Για κάθε κεφάλαιο παράγονται οι αντίστοιχοι υποφάκελοι και ξεχωριστό αρχείο με τα script tags.

### 5. Παραγωγή Μόνο Θεωρίας
```bash
python -m src.cli generate-theory -i data/chapters/chapter_01_stoicheia.md -g b -s antoxi -c 1
```

### 6. Παραγωγή Μόνο Ασκήσεων
```bash
python -m src.cli generate-exercises -i data/chapters/chapter_01_stoicheia.md -g b -s antoxi -c 1 -o site
```
Ο generator αναλύει τις υπάρχουσες εκφωνήσεις και λύσεις, τις ταξινομεί στους υποστηριζόμενους τύπους (πολλαπλής επιλογής, σωστό/λάθος, αντιστοίχιση, συμπλήρωση κενού, υπολογιστικές) και παράγει αρχεία μόνο όταν περάσουν την επικύρωση. Όσα ερωτήματα δεν μπορεί να τεκμηριώσει αναφέρονται ως μη μετατραπέντα. Όταν το `--output` είναι το root του site, ενημερώνονται επίσης τα script tags και ο κατάλογος μαθήματος.

### 7. Επικύρωση Schemas (`validate`)
Ελέγχει αν ένα αρχείο ή φάκελος τηρεί τα επίσημα schemas του `4gnosin.github.io`:
```bash
python -m src.cli validate output/
```

### 8. Διαδραστικός Καθηγητής ΕΠΑΛ (`tutor`)
```bash
# Προβολή διαθέσιμων κεφαλαίων
python -m src.cli tutor -l

# Διαδραστική συνομιλία
python -m src.cli tutor -c chapter_01_stoicheia

# Μεμονωμένη ερώτηση
python -m src.cli tutor -c chapter_01_stoicheia -q "Πώς διακρίνονται οι συνδέσεις μηχανολογικών στοιχείων;"
```

---

## 🤝 Συνεισφορά στο `4gnosin.github.io`
1. Προσθέστε το Markdown αρχείο ενός νέου κεφαλαίου στο `data/chapters/`.
2. Για ένα κεφάλαιο, εκτελέστε το `build-chapter` και αντιγράψτε τα παραγόμενα αρχεία από το `output/` στο site. Για πολλά κεφάλαια υπάρχοντος μαθήματος, εκτελέστε `build-batch --input-dir data/chapters --grade b --subject <μάθημα> --output site`. Το `build-batch` γράφει απευθείας στο site και ενημερώνει αυτόματα τα `index.html` και `content/catalog.js`.
