**Language / Γλώσσα:** [Ελληνικά](../animations.md) | English

# Interactive Exercise Solution Animations (Chalkboard System)

The **BlackboardAnimation** system provides step-by-step mathematical walkthroughs for calculation (`calc`) exercises, with KaTeX math rendering and playback controls (Play, Pause, Replay, and individual step navigation).

---

## 1. Decoupled Source Architecture & Production Bundles

Animation data is **not embedded** inside exercise files (`site/exercises/`), and instead lives in separate source files under `site/animations/`:

```text
site/
├── exercises/
│   ├── b/thermod/ch05-20954.js            # Exercise problem data (untouched)
│   └── c/stoixeia-michanon/ch14-25806.js
├── animations/
│   ├── b/thermod/ch05-20954.js            # Thermodynamics animation (folder b/thermod -> id: "thermo")
│   └── c/stoixeia-michanon/ch14-25806.js
├── bundles/
│   ├── thermo.bundle.js                   # Packaged production bundle
│   └── stoixeia-michanon.bundle.js
└── content/
    └── scripts_catalog.js                 # Defines window.SUBJECT_SCRIPTS for Lazy Loading
```

> [!IMPORTANT]
> **Production Packaging Rule:** Although source files under `site/exercises/` and `site/animations/` are decoupled, the production site (`site/index.html`) loads from `site/bundles/{subject}.bundle.js` via `site/content/scripts_catalog.js`. Any addition, edit, or deletion under `site/animations/` **does not take effect in production** until you run `python scripts/build_bundles.py`. The `--raw` mode (or `site/index_full.html`) is only for loading unpacked source files.

---

## 2. Registry `window.EXERCISE_ANIMATIONS` & Key Convention

Each animation file registers its walkthrough entries on the global object `window.EXERCISE_ANIMATIONS[exId]`:

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

A real multi-step example with Greek sub-question keys exists in `site/animations/c/stoixeia-michanon/ch14-25806.js`, which uses keys `"α"` and `"β"` (with `"α"` consisting of 6 consecutive steps).

### Canonical Key Convention (`src/tools/calc_animator.py`)

To match each animation reliably to its calculation sub-item (`calc` item):

1. **When the item has a non-empty `subq`:** The key is `str(item["subq"]).strip()` **verbatim** (e.g., `"4.3"`, `"4.2α"`, `"α"`, `"β"`), without stripping prefixes or symbols.
2. **When `subq` is missing/empty and the exercise has multiple items (`len(items) > 1`):** Use the 0-based string index: `"0"`, `"1"`, `"2"`, ...
3. **When `subq` is missing/empty and the exercise has a single item:** Use `"default"`.

### Frontend Lookup Order (`getAnimationForCalcItem` in `site/js/app.js`)

When rendering a calculation item, `site/js/app.js` looks up an animation in this order:

1. `item.animation` *(deprecated legacy inline fallback — avoid in new files)*
2. `exAnims.steps` *(direct object on the exercise entry)*
3. `exAnims[item.subq]` *(primary canonical key)*
4. `exAnims[cleanSubq]`
5. `exAnims[itemIdx]` *(index `"0"`, `"1"`, ...)*
6. `exAnims["default"]`
7. `store[exId + "_" + item.subq]` or `store[exId + "_" + itemIdx]`

---

## 3. Entry & Step Schema (`SiteValidator` vs Chalkboard Design)

According to the validator (`src/validators/site_validator.py`) and renderer (`site/js/app.js`):

| Field | Level | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | Sub-question entry | Yes | Non-empty chalkboard title |
| `steps` | Sub-question entry | Yes | Non-empty array of step objects |
| `text` (or `description`) | Step | Yes | Pedagogical explanation text for the step (in Greek for student UI) |
| `math` (or `latex`) | Step | Yes | LaTeX/KaTeX mathematical expression rendered on the chalkboard |
| `kicker` | Step | No | Short phase label/header (e.g., `"Βήμα 1 — Δεδομένα"`) |
| `note` | Step | No | Concise formula note, unit reminder, or physical insight |
| `highlight` | Step | No | Key intermediate or final result to emphasize |

> [!NOTE]
> **Step Count:** `calc_animator.py` typically generates **4 pedagogical steps** (1. Statement/Given, 2. Physical Law/Formula, 3. Substitution/Calculation, 4. Final Result/Verification), but neither `SiteValidator` nor the frontend enforces a 4-step cap. Complex derivations can have more steps (such as the 6 steps under key `"α"` in `ch14-25806.js`).

---

## 4. Automated Generation (`calc_animator.py`)

The `calc_animator.py` generator runs as a **standalone module** (not via `python -m src.cli`):

```bash
# Scan all exercises for missing animations
python -m src.tools.calc_animator --scan

# Generate animations for a specific subject, chapter, or exercise bank code
python -m src.tools.calc_animator --subject thermo --chapter 5
python -m src.tools.calc_animator --target 25806 --mode hybrid --overwrite
```

### Command-Line Arguments

| Argument | Type / Choices | Description |
| :--- | :--- | :--- |
| `--scan` | flag | Scan `calc` exercises for missing animations |
| `--subject <ID>` | string | Subject catalog ID or alias (e.g., `thermo`, `stoixeia-michanon`) |
| `--chapter <N>` | integer | Filter to a specific chapter number |
| `--target <CODE>` | string | Target a specific exercise by bank code (e.g., `25806`) |
| `--overwrite` | flag | Overwrite existing animation files |
| `--mode <MODE>` | `local`, `hybrid` *(default)*, `ai-pedagogy`, `ai`, `ai-full` | Step generation strategy |

When generating animations, `calc_animator.py` automatically triggers bundle rebuilding as well.

---

## 5. Manual Addition, Deletion & Verification

### 5.1 Adding a New Animation Manually
1. Create `site/animations/{grade}/{subject_dir}/{exId}.js` (for `thermo`, the folder is `b/thermod`).
2. Register `window.EXERCISE_ANIMATIONS["{exId}"]` following the Section 2 key convention (`item.subq`, or `"0"`/`"1"`, or `"default"`), with non-empty `title` and `steps` containing `text` and `math`.
3. Rebuild production bundles (mandatory):
   ```bash
   python scripts/build_bundles.py
   ```
   (`python scripts/build_scripts_catalog.py` acts as a wrapper that also invokes the bundler. Pass `--raw` only when running without bundles.)

### 5.2 Deleting an Animation
1. Delete `site/animations/{grade}/{subject_dir}/{exId}.js`.
2. **Mandatory for production:** Run:
   ```bash
   python scripts/build_bundles.py
   ```
   to rebuild `site/bundles/{subject}.bundle.js` without the deleted animation.
3. The corresponding exercise file in `site/exercises/` stays untouched and continues working normally without the animation button.

### 5.3 Local Verification
* Both `python -m src.cli validate` and `python -m src.validators.site_validator` automatically validate `site/exercises/`, `site/content/`, **and** `site/animations/` (schema structure, required fields, and KaTeX syntax).
* Always verify new or edited animations visually by starting the local server (`python scripts/site_server.py`) and opening the exercise in the browser.
