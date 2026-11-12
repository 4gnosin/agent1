# Content Generation Subsystems & CLI Commands — 4gnosin.github.io

**Language / Γλώσσα:** [Ελληνικά](../pipelines.md) | English

This document catalogs all automation tools, material processing pipelines (PDFs, OCR, WebP), and the complete Command-Line Interface (`CLI`) reference.

---

## 1. Central Controller (`4gnosin.bat` / `scripts/menu.py`)

For daily workflows, an interactive Terminal User Interface (TUI) is available via:
```cmd
4gnosin.bat
# or: python scripts/menu.py
```
The menu provides guided execution of all operations (downloading exam topics, extracting images, authoring theory, validation, and starting the site locally) without needing to memorize CLI flags.

---

## 2. Exam Item Bank Pipeline (`trapeza7.py` -> `process-inbox`)

The processing workflow for topics from the official IEP Exam Item Bank:

```mermaid
flowchart TD
    IEP["IEP Exam Item Bank"] -->|scripts/trapeza7.py (Playwright)| INBOX["data/inbox/ (Topic & Solution PDFs)"]
    INBOX -->|python -m src.cli process-inbox| PARSER["PDF Extractor & Topic Parser"]
    PARSER --> IMAGES["Image Extraction & Optimization"]
    PARSER --> CODE["Exercise Generation (JS)"]
    IMAGES --> SITE_IMG["site/images/{grade}/{subject}/"]
    CODE --> SITE_EX["site/exercises/{grade}/{subject}/"]
    PARSER --> DONE["data/inbox/done/ (PDF Archiving)"]
```

### Execution Steps:
1. **Automated Download:**
   ```bash
   python scripts/trapeza7.py
   ```
   Uses Playwright (Chromium) to browse the IEP portal automatically and save topic and indicative solution PDFs into `data/inbox/`.
2. **Batch Processing & Conversion:**
   ```bash
   python -m src.cli process-inbox
   ```
   * Automatically detects grade, subject, chapter, and topic code.
   * Separates problem statements from indicative solutions.
   * Extracts and links the corresponding diagrams.
   * Moves processed PDFs to `data/inbox/done/`.

---

## 3. Technical Diagram Extraction & WebP Optimization Pipeline

### 3.1 Extraction with PyMuPDF (`src/utils/image_extractor.py`)
The extractor includes advanced recovery algorithms:
* **Vertical slice stitching (`stitch_contiguous_slices`):** IEP / Word PDF exports frequently split a single figure into 5–10 thin horizontal strips. The extractor detects them by coordinates and stitches them back into a single unified image.
* **Vector Diagram Detection & Expansion:** When a chart (e.g. $P-V$) contains vector paths and only axis labels are raster (`P (bar)`), the extractor detects the vector paths and renders the full diagram at high resolution (3x DPI).
* **Chart Overlay Consolidation:** In complex charts (e.g. psychrometric charts), small text overlays are embedded directly onto the chart rather than exported as useless micro-images.

### 3.2 WebP Compression (`scripts/optimize_images_to_webp.py`)
All images are automatically converted to the modern **WebP** format:
```bash
python scripts/optimize_images_to_webp.py
```
* Compression quality: 85–92%.
* Storage savings: **60% to 80%** compared to original PNG/JPG files, ensuring fast loading.

---

## 4. Theory Authoring Pipeline (`edubooks.py` -> `generate-theory`)

1. **Downloading School Textbooks:**
   ```bash
   python scripts/edubooks.py
   ```
   Downloads the official approved school textbooks from CTI "Diophantus".
2. **Chapter Extraction & Theory Generation:**
   ```bash
   python -m src.cli extract-pdf "data/books/c_psyxi.pdf" -o "data/theory/ch03.md" --pages 15-45
   python -m src.cli generate-theory "data/theory/ch03.md" --grade c --subject stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon --chapter 3
   ```
   Generates standardized theory blocks inside `site/content/c/...`.

---

## 5. Validation, Sanitization & Synchronization Tools

### 5.1 Schema Validation (`validate`)
Strictly checks the syntax and compatibility of all JavaScript files:
```bash
python -m src.cli validate site/exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon
```

### 5.2 Automated LaTeX Sanitizer (`sanitize-latex` / `scripts\sanitize_latex.bat`)
Automatically fixes LaTeX syntax errors (degrees Celsius `°C`, spacing in `\cdot m`, stripping redundant `{}`, etc.):
```cmd
scripts\sanitize_latex.bat
# or from the main menu (4gnosin.bat -> [5] -> [6])
```
* **Double-click:** Opens an interactive menu to select target directories (Exercises, Theory, Animations, or the entire site).
* **Drag & Drop:** Drag any file or folder onto the `.bat` script for instant sanitization.
* **Via CLI:**
```bash
python -m src.cli sanitize-latex site/exercises/b/thermod
```

### 5.3 Updating the Lazy Loading Catalog (`build_scripts_catalog.py`)
Scans theory, exercise, and animation files and rebuilds `site/content/scripts_catalog.js`:
```bash
python scripts/build_scripts_catalog.py
```

---

## 6. Complete CLI Command Reference

| CLI Command | Arguments / Flags | Description |
| :--- | :--- | :--- |
| `process-inbox` | `--inbox-dir <DIR>`, `--batch-size <N>` | Batch processing of new PDFs from the IEP Exam Item Bank. |
| `validate` | `<PATH_TO_JS_OR_DIR>` | Validates data schemas against site rules. |
| `sanitize-latex` | `<PATH_TO_JS_OR_DIR>`, `--dry-run` | Automatic correction of mathematical formulas and LaTeX symbols. |
| `fix-exercise` | `<FILE.JS>`, `--code <BANK_CODE>` | Automatic exercise restructuring, sub-question splitting & image linking. |
| `extract-pdf` | `<PDF>`, `-o <OUTPUT.MD>`, `--pages <RANGE>` | Extracts selected PDF pages into clean Markdown text. |
| `generate-theory` | `<MD_FILE>`, `--grade <B\|C>`, `--subject <ID>`, `--chapter <N>` | Converts theory Markdown into JavaScript blocks (`site/content/`). |
| `generate-exercises` | `<MD_FILE>`, `--grade <B\|C>`, `--subject <ID>`, `--chapter <N>` | Generates exercise files from structured source material. |
| `calc_animator` | `--scan`, `--target <ID>`, `--subject <S>`, `--mode <M>` | Generates decoupled solution animations (`site/animations/`). |
