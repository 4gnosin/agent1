# Data Schema Specifications — 4gnosin.github.io

**Language / Γλώσσα:** [Ελληνικά](../schemas.md) | English

This document defines the strict data schemas (JavaScript objects) used across all platform content, as enforced by `site/js/app.js` and `SiteValidator` (`python -m src.cli validate`).

---

## 1. Initialization Header (Mandatory)

Every new theory, group, and exercise file **must** begin with the standardized global namespace initialization:

```javascript
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["subject-slug"] = window.SUBJECT_DATA["subject-slug"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["subject-slug"].<collection>.push(...
[
  // ... data (where <collection> is sections, groups, or exercises) ...
]
);
```

* `subject-slug` must match the exact course `id` in `site/content/catalog.js` (e.g. `antoxi`, `stoixeia-michanon`, `stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon`).
* **Legacy Exception (`thermo` / `b/thermod/` directory):** Existing 2nd-grade Thermodynamics files use the legacy global arrays `window.SECTIONS`, `window.GROUPS`, and `window.EXERCISES` (`window.SECTIONS.push(...)`, `window.GROUPS.push(...)`, `window.EXERCISES.push(...)`). `site/js/app.js` automatically merges these arrays with `window.SUBJECT_DATA["thermo"]`.

---

## 2. Theory Section Schema (`site/content/{grade}/{subject}/chapter-NN/MM-slug.js`)

Appends objects to the `sections` array (`SUBJECT_DATA[slug].sections` or `window.SECTIONS`).

```javascript
{
  "slug": "genika",                            // Unique URL identifier (hash route)
  "num": "1.1",                                // Section numbering (leading number sets chapter)
  "title": "Γενικά",                           // Section title
  "kicker": "Μηχανολογία ΕΠΑΛ",                // (Optional) Label displayed above title
  "lead": "Εισαγωγική σύνοψη της ενότητας...", // (Optional) Short summary
  "blocks": [                                  // Array of standardized text/media blocks
    // See the 8 supported block types below
  ]
}
```

> **Note:** `site/js/app.js` derives the chapter number from `num` (`String(s.num).split(".")[0]`). `SiteValidator` requires `slug`, `num`, `title`, and `blocks`.

### Supported Theory Block Types (`app.js` & `SiteValidator`):

| Type (`type`) | Fields | Description |
| :--- | :--- | :--- |
| `"p"` | `text` | Plain prose paragraph (supports inline math `$ ... $` / `\( ... \)` and markdown bold `**...**`). |
| `"h"` | `text` | Section subheading (rendered as `<h2>`). |
| `"ul"` | `items: [string]` | Unordered bullet list (`<ul><li>...</li></ul>`). |
| `"formula"` | `html`, `caption` *(optional)* | Standalone mathematical formula / equation with optional caption. |
| `"callout"` | `kind`, `title` *(optional)*, `text` | Highlight box. Allowed `kind` values: `"def"`, `"example"`, `"remember"`, `"tip"`, `"warning"`. |
| `"image"` | `src`, `alt` *(optional)*, `caption` *(optional)* | External WebP image (`images/{grade}/{subject}/...`) with caption. |
| `"table"` | `headers: [string]`, `rows: [[string]]`, `caption` *(optional)* | Data table. |
| `"diagram"` | `id`, `caption` *(optional)* | Built-in SVG diagram resolved by `id` via `diagram()` in `site/js/app.js`. |

---

## 3. Subgroup Schema (`site/exercises/{grade}/{subject}/chapter-NN/groups.js`)

Appends objects to the `groups` array to organize exam topics on the Exercise Board (`Board`).

```javascript
{
  "id": "ch03-02-thermodynamic-processes",     // Unique group ID
  "chapter": "3",                              // Chapter number (mandatory)
  "title": "Καταστατικές Μεταβολές Αερίων",    // Group title (mandatory)
  "blurb": "Ισόθερμη, ισόχωρη, ισοβαρής και αδιαβατική μεταβολή." // Short description (mandatory)
}
```

---

## 4. Exercise Schema (`site/exercises/{grade}/{subject}/chapter-NN/chNN-MM-slug.js`)

Appends objects to the `exercises` array.

```javascript
{
  "id": "ch03-23978",                          // Unique exercise ID (chNN-bankCode)
  "group": "ch03-02-thermodynamic-processes",  // Links to the corresponding group.id
  "kind": "calc",                              // Primary type ("mc", "tf", "calc", "match", "blank", "open")
  "layout": "unified",                         // Always "unified"
  "code": "Θέμα 4<sup>ο</sup> · #23978",       // IEP Exam Bank header title (must use <sup>ο</sup>)
  "bankCode": "23978",                         // IEP topic code
  "title": "#23978 — Θέμα 4<sup>ο</sup> (Κύκλος Μεταβολών)", // Exercise title (must use <sup>ο</sup>)
  "units": 25,                                 // Exercise points (typically 25 or 15)
  "theory": "01-thermodynamic-processes",      // Slug of the related theory section
  "sourceOrder": 1,                            // (Optional) Source ordering index
  "stem": "Εκφώνηση θέματος με μαθηματικούς τύπους $P-V$...", // (Optional) Main problem statement
  "image": "images/.../fig01.webp",            // (Optional) Main problem statement figure
  "images": [ ... ],                           // (Optional) Multiple problem statement figures
  "imageLabels": ["Σχήμα α", "Σχήμα β"],       // (Optional) Labels for multiple figures
  "imageLayout": "grid",                       // (Optional) "grid", "row", or "column"
  "solutionImages": [                          // (Optional) Indicative solution figures
    "images/.../sol01.webp"                    // Shown ONLY after clicking "Έλεγχος όλων" (Check all)
  ],
  "givens": [                                  // (Optional) Exercise given quantities
    { "label": "$P_1$", "value": "$1\\text{ bar}$" },
    { "label": "$V_1$", "value": "$0{,}8\\text{ m}^3$" }
  ],
  "items": [
    // Array of sub-questions (see section 5)
  ]
}
```

---

## 5. Specifications of the 6 Sub-question Types (`items`)

Each item may optionally include `"subq"` (e.g. `"2.1"`, `"4.2α"`) and `"subqPrompt"` (introductory prompt for a group of sub-questions).

### 5.1 Multiple Choice (`kind: "mc"`)
```javascript
{
  "kind": "mc",
  "subq": "4.2α",                              // Sub-question numbering
  "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Α – Β:",
  "image": "images/.../fig01.webp",            // (Optional) Sub-question image
  "options": [
    { "id": "a", "text": "Ισόθλιπτη μεταβολή" },
    { "id": "b", "text": "Ισόογκη μεταβολή" },
    { "id": "c", "text": "Ισοθερμοκρασιακή μεταβολή", "image": "images/.../opt_c.webp" },
    { "id": "d", "text": "Αδιαβατική μεταβολή" }
  ],
  "answer": "a",                               // ID of the correct option
  "openEnded": true,                           // (Optional) true if open-ended in the original Exam Bank
  "note": "Σημείωση Τράπεζας Θεμάτων...",       // (Optional) Explanatory note
  "explain": "Η μεταβολή γίνεται υπό σταθερή πίεση, άρα είναι ισόθλιπτη."
}
```

### 5.2 True / False (`kind: "tf"`)
```javascript
{
  "kind": "tf",
  "subq": "2.1α",
  "prompt": "Στην ισοθερμοκρασιακή μεταβολή η θερμοκρασία παραμένει σταθερή.",
  "answer": true,                              // boolean: true or false
  "explain": "Σωστό. Εξ ορισμού η ισοθερμοκρασιακή μεταβολή εκτελείται υπό σταθερή θερμοκρασία ($T = \\text{σταθ.}$)."
}
```

### 5.3 Numerical Calculation Input (`kind: "calc"`)
```javascript
{
  "kind": "calc",
  "subq": "4.2β",
  "prompt": "Υπολογίστε τον τελικό όγκο $V_2$ σε $\\text{m}^3$.",
  "formula": "$P_1 \\cdot V_1 = P_2 \\cdot V_2$", // Core mathematical formula
  "answer": 0.08,                              // Numeric value (number, not string)
  "unit": "m³",                                // Measurement unit
  "tolerance": 0.02,                           // Error tolerance (0.02 = ±2%, or absolute if toleranceMode: "abs")
  "hint": "Εφαρμόστε τον νόμο Boyle-Mariotte...", // Hint (revealed on click)
  "explain": "Από τη σχέση $P_1 V_1 = P_2 V_2$ έχουμε:\n$$V_2 = \\frac{1 \\cdot 0{,}8}{10} = 0{,}08\\text{ m}^3$$"
}
```
> **Note on Animations (`item.animation` vs `site/animations/`):** Although `getAnimationForCalcItem()` in `site/js/app.js` still reads inline `item.animation` as a legacy backward-compatibility fallback, **all new animations must be placed exclusively in standalone files** under `site/animations/{grade}/{subject}/{exId}.js` (see [docs/en/animations.md](animations.md)).

### 5.4 Two-Column Matching (`kind: "match"`)
Supports both text and **images** in Column A and Column B:
```javascript
{
  "kind": "match",
  "subq": "2.1",
  "prompt": "Αντιστοιχίστε τα σχήματα της Στήλης Α με τις ονομασίες της Στήλης Β:",
  "left": [
    { "id": "1", "text": "Κατάσταση 1", "image": "images/.../fig01.webp" },
    { "id": "2", "text": "Κατάσταση 2", "image": "images/.../fig02.webp" }
  ],
  "right": [
    { "id": "a", "text": "Υπέρθερμος ατμός" },
    { "id": "b", "text": "Κορεσμένο υγρό" }
  ],
  "pairs": {                                   // Mapping: left id -> right id
    "1": "b",
    "2": "a"
  },
  "explain": "Η κατάσταση 1 αντιστοιχεί στο κορεσμένο υγρό και η 2 στον υπέρθερμο ατμό."
}
```

### 5.5 Fill in the Blanks (`kind: "blank"`)
```javascript
{
  "kind": "blank",
  "subq": "2.1",
  "prompt": "Συμπληρώστε τα κενά επιλέγοντας από τις διαθέσιμες λέξεις:",
  "textBefore": [                              // Text segments between blanks
    "1. Η μετατροπή υγρού σε αέριο ονομάζεται ",
    ".\n2. Ο επιφανειακός σχηματισμός ατμών ονομάζεται ",
    "."
  ],
  "answers": [                                 // Correct words in order
    "ατμοποίηση",
    "εξάτμιση"
  ],
  "bank": [                                    // Word bank (includes distractors)
    "εξάτμιση",
    "ατμοποίηση",
    "βρασμός",
    "υγροποίηση"
  ],
  "explain": "1. Ατμοποίηση είναι η γενική διαδικασία. 2. Εξάτμιση είναι η επιφανειακή εξάτμιση."
}
```

### 5.6 Drawing / Open-Ended (`kind: "open"`)
Used for questions where the student is asked to draw on paper or on a $P-V$ / psychrometric chart:
```javascript
{
  "kind": "open",
  "subq": "4.1",
  "prompt": "Να παραστήσετε τις παραπάνω μεταβολές σε διάγραμμα αξόνων $P-V$.",
  "hintImage": "images/.../sol01.webp",        // (Optional) Diagram inside the hint
  "explain": "Σχεδιάζεται η ισόογκη θέρμανση Α-Β και η ισοθερμοκρασιακή εκτόνωση Β-Γ."
}
```
> **Note:** `open` questions do not require text input. The student clicks **"Check all" ("Έλεγχος όλων")** directly to view the indicative solution and diagram.
