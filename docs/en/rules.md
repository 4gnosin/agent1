# Formatting Rules & Technical Constraints (AI Guidelines) — 4gnosin.github.io

**Language / Γλώσσα:** [Ελληνικά](../rules.md) | English

This document specifies the strict quality, mathematical formatting (KaTeX), character encoding, and ergonomic rules that **must be strictly followed** by any AI Agent or developer working on this repository.

---

## 1. Mathematics & KaTeX Rules (Mathematical Formatting)

The rendering engine is based on KaTeX. To prevent visual glitches or raw TeX code appearing on screen:

### 1.1 Strict Delimiter Usage
* **Inline math (within sentences):** Always enclosed in single dollar signs: `$P_1 \cdot V_1 = P_2 \cdot V_2$`.
* **Standalone / Centered formulas (Display mode):** Enclosed in double dollar signs:
  ```latex
  $$\begin{aligned}
  Q &= m \cdot c \cdot \Delta T \\
  &= 2\text{ kg} \cdot 4{,}186\text{ kJ/(kg}\cdot\text{K)} \cdot 20\text{ K} = 167{,}44\text{ kJ}
  \end{aligned}$$
  ```

### 1.2 Zero Raw LaTeX Leakage in Prose (No Raw LaTeX in Prose)
* **FORBIDDEN:** Using bare LaTeX commands (e.g. `\text{C}`, `{}^\circ`, `\cdotm`) outside math delimiters `$ ... $`.
* In prose text, write **clean Unicode**:
  * **Valid:** `Η θερμοκρασία του νερού είναι 20 °C και το πάχος 0,2 m.`
  * **Invalid:** `Η θερμοκρασία του νερού είναι 20 {}^\circ\text{C} και το πάχος 0{,}2m.`
* Inside math mode:
  * **Valid:** `$T = 20~{}^{\\circ}\\text{C}$`
  * **Invalid:** `$T = 20^\circ C$` or `$T = 20°C$`

### 1.3 Syntax Standardization
| Case | Valid Syntax | Invalid Syntax | Rationale |
| :--- | :--- | :--- | :--- |
| **Multiplication** | `\cdot m` or `\cdot A` | `\cdotm` or `\cdotA` | A space is required after `\cdot` so it is not parsed as an unknown TeX command. |
| **Degrees Celsius** | `{}^{\circ}\text{C}` | `^\circ C` or `{}^\circ C` | Consistent superscript with upright typographic Celsius symbol. |
| **Greek Decimal Comma** | `$0{,}2\text{ m}$` | `$0,2\text{ m}$` | A plain comma in TeX is treated as a punctuation separator and adds unwanted spacing (`0, 2`). |
| **Measurement Units** | `10\text{ bar}`, `20\text{ lt}` | `10 bar`, `20 lt` | Units inside math mode must be wrapped in `\text{...}` (upright text, not italic variables). |
| **Step Alignment** | `\begin{aligned} ... \end{aligned}` | Consecutive `$$` blocks | Align on the equals sign (`&=`) with explicit line breaks (`\\`). |

---

## 2. Encoding & Character Integrity (Encoding Invariants)

* **UTF-8 Encoding:** All files (`.js`, `.html`, `.md`, `.json`, `.py`) must be saved strictly in UTF-8 without BOM.
* **No Corrupted / Foreign Characters:**
  * During OCR or AI processing, foreign/corrupted characters (e.g. Vietnamese "từ" instead of "από", Bengali digits, etc.) must never be introduced.
  * Greek technical symbols ($\sigma, \tau, \eta, \lambda, \Delta, \mu$) must be preserved properly either as Unicode in prose or as valid TeX commands (`\sigma`, `\tau`, `\Delta`) in math mode.

---

## 3. Image & Diagram Rules

1. **No Micro-Crops (No Fragmented Images):**
   * Every extracted image must represent a complete technical figure or diagram.
   * Publishing images that are merely cropped words or axis labels (e.g. images under 120x80px containing just "P" or "0") is forbidden. In such cases, extract the entire vector diagram.
2. **Solution Diagrams (`solutionImages`):**
   * Diagrams or figures that reveal the solution (e.g. solved psychrometric charts) must be placed **exclusively** in the exercise's `solutionImages` field.
   * They are shown to the student **only** after clicking **"Check all" ("Έλεγχος όλων")**.
3. **Mapping Accuracy:**
   * In multiple-choice (`mc`) or matching (`match`) items, each image must be attached to the exact sub-question it belongs to (e.g. the first sub-question referencing the figure, not a subsequent one).

---

## 4. Design Ergonomics & Modular Architecture

As a core architectural principle of the project:
1. **Decoupling Principle (Plug & Play):**
   * Any advanced feature (such as the animated blackboard, interactive simulations, or hints) must be designed as a **standalone module** (e.g. `site/animations/`) rather than embedded overhead inside exercise files.
   * Removing or modifying an add-on feature must only require deleting its file, without opening or modifying exercise source code.
2. **Proactive Ergonomic Design:**
   * When designing new capabilities, the AI Agent should proactively propose modular, flexible architectures that minimize maintenance complexity for the user.
