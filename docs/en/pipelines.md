**Language / Γλώσσα:** [Ελληνικά](../pipelines.md) | English

# Automation Pipelines & CLI Reference

The **4gnosin** platform combines a central CLI (`python -m src.cli`) with dedicated standalone tools (`src/tools/`, `scripts/`) for PDF text/image extraction, theory and exercise generation, LaTeX sanitization, animation generation, and production bundle packaging.

---

## 1. Textbook & Exam Bank Acquisition

To fetch and organize primary source material:

```bash
# List available textbooks and download by grade or subject
python scripts/edubooks.py --list
python scripts/edubooks.py --taxi b --subject thermo
python scripts/edubooks.py --all

# Automated collection from the National Exam Bank (trapeza7)
python scripts/trapeza7.py
```

---

## 2. PDF Text & Image Extraction

### 2.1 Text Extraction with `extract-pdf`
```bash
python -m src.cli extract-pdf -p data/pdf/book.pdf -o data/text/ch01.txt --start-page 10 --end-page 25 -t "Κεφάλαιο 1" --ai-clean
```

### 2.2 Diagram Extraction & WebP Optimization
1. **Extract images from PDF:**
   ```bash
   python scripts/extract_pdf_images_craft.py data/pdf/book.pdf -o site/images/thermod --dpi 200 --pages 10-25
   ```
2. **Optimize images to WebP:**
   ```bash
   python scripts/optimize_images_to_webp.py
   ```
   This script converts images to WebP via Pillow (`quality=85`, `method=6`) and strips `#` characters from image filenames so URLs do not break during frontend loading.

---

## 3. Theory & Exercise Generation

### 3.1 Theory Generation (`generate-theory` & `scripts/theory.py`)
```bash
# Via central CLI from extracted text/PDF
python -m src.cli generate-theory -i data/text/ch01.txt -g b -s thermo -c 1 -o site

# Standalone theory script by subject and page range
python scripts/theory.py --list
python scripts/theory.py -s thermo -c 1 --page-start 1 --page-end 30 -g b
```

### 3.2 Exercises & Full Chapter Builds
```bash
# Generate exercises from input text/PDF
python -m src.cli generate-exercises -i data/exercises/input.txt -g b -s thermo -c 1 -o site

# Combined chapter build (theory + exercises) or batch folder processing
python -m src.cli build-chapter -i data/theory.txt -e data/exercises.txt -g b -s thermo -c 1 --start-page 1 --end-page 20 -o site
python -m src.cli build-batch -i data/theory_dir -e data/exercises_dir -g b -s thermo -o site
```

### 3.3 Automated Inbox Processing (`process-inbox`)
Scans the inbox folder (default `data/inbox`) for new source files and generates chapters/exercises into the output directory (default `site/`):
```bash
python -m src.cli process-inbox --inbox data/inbox -o site --craft --force
```

---

## 4. Maintenance, LaTeX Sanitization & Validation

### 4.1 Targeted Exercise Fix & Stem Normalization (`fix-exercise`, `fix-stems`)
```bash
# Fix a specific exercise by URL, link, or Exam Bank code
python -m src.cli fix-exercise 27123

# Check or rename exercise file stems
python -m src.cli fix-stems -o site --rename
```

### 4.2 LaTeX Sanitization (`sanitize-latex`)
To fix doubled/broken backslashes, Unicode math symbols, and KaTeX delimiters:
```bash
python -m src.cli sanitize-latex site/exercises/b/thermod --pattern "*.js"
```
A batch wrapper is also available at `scripts\sanitize_latex.bat` (runs `python -m src.utils.latex_sanitizer %*`).

### 4.3 Validation (`validate`)
```bash
# Validate schemas & KaTeX under site/exercises, site/content, and site/animations
python -m src.cli validate site --fix
```
> [!NOTE]
> Both `python -m src.cli validate` and `python -m src.validators.site_validator` automatically scan `site/exercises`, `site/content`, and `site/animations`.

### 4.4 Automated Tests (`pytest`)
```bash
# Run the full test suite under tests/
python -m pytest
```
The test suite under `tests/` covers LaTeX sanitization, `calc_animator`, bundle rebuilding and synchronization via `sync_site_index`, `SiteValidator` scanning of `site/animations/`, and consistency checks across `catalog.js`, CLI commands, and documentation.

---

## 5. Animations, Production Bundles & Local Server

1. **Generate step-by-step animations (standalone module):**
   ```bash
   python -m src.tools.calc_animator --scan
   python -m src.tools.calc_animator --subject thermo --chapter 5 --mode hybrid --overwrite
   ```
2. **Build Production Bundles & Scripts Catalog:**
   ```bash
   python scripts/build_bundles.py
   ```
   Creates `site/bundles/{subject}.bundle.js` (mapping folder `b/thermod` to canonical ID `thermo`) and updates `site/content/scripts_catalog.js`. Synced generation workflows (`build-batch`, `generate-exercises`, `process-inbox`, `scripts/theory.py`) also invoke the bundler automatically via `sync_site_index`. Passing `--raw` points `scripts_catalog.js` to individual source files instead of bundles. `python scripts/build_scripts_catalog.py` is a compatibility wrapper that delegates to `build_bundles.py`.
3. **Start Local Web Server:**
   ```bash
   python scripts/site_server.py
   ```
   Serves `site/` locally at `http://localhost:8000`.

---

## 6. Complete CLI & Script Reference

### 6.1 `python -m src.cli` Subcommands

| Subcommand | Key Flags | Description |
| :--- | :--- | :--- |
| `build-chapter` | `-i`, `-e`, `-g`, `-s`, `-c`, `--start-page`, `--end-page`, `-o`, `-m` | Build a single chapter (theory and optional exercises) |
| `build-batch` | `-i`/`--input-dir`, `-e`/`--exercises-dir`, `-g`, `-s`, `-o`, `-m` | Batch-build chapters from an input directory |
| `generate-theory` | `-i`, `-g`, `-s`, `-c`, `-o`, `-m` | Generate theory section for a subject and chapter |
| `generate-exercises` | `-i`, `-e`, `-g`, `-s`, `-c`, `-o`, `-m` | Generate exercise file |
| `validate` | `[path]` (default `site`), `--fix` | Validate schemas under `site/exercises`, `site/content`, and `site/animations` |
| `tutor` | `-c`, `-q`, `-l`, `-m` | Launch interactive AI tutoring assistant |
| `extract-pdf` | `-p`/`--pdf`, `-o`, `--start-page`, `--end-page`, `-t`, `--ai-clean`, `-m` | Extract text from PDF with optional AI cleanup |
| `assistant` | `-m` | Launch interactive CLI assistant |
| `process-inbox` | `--inbox`, `-o`, `-m`, `--craft`, `--force` | Process queued files from `data/inbox` |
| `fix-stems` | `-o`/`--site`, `--rename` | Check and normalize exercise file stems |
| `fix-exercise` | `target` (positional) | Fix a specific exercise by URL, link, or bank code (e.g., `27123`) |
| `sanitize-latex` | `[path]`, `--pattern` (default `*.js`) | Clean and normalize LaTeX/KaTeX math expressions |

### 6.2 Standalone Tools & Scripts

| Command | Key Flags | Description |
| :--- | :--- | :--- |
| `python -m src.tools.calc_animator` | `--scan`, `--target`, `--subject`, `--chapter`, `--overwrite`, `--mode` | Scan and generate animations for `calc` exercises (`local`, `hybrid`, `ai-pedagogy`, `ai`, `ai-full`) |
| `python scripts/build_bundles.py` | `--raw` | Build `site/bundles/*.bundle.js` and `site/content/scripts_catalog.js` |
| `python scripts/build_scripts_catalog.py` | `--raw` | Compatibility wrapper delegating to `build_bundles.py` |
| `python scripts/theory.py` | `-s`, `-c`, `--page-start`, `--page-end`, `-g`, `-l` | Standalone theory generator by subject and page range |
| `python scripts/edubooks.py` | `--taxi`, `--subject`, `--all`, `--force`, `--list` | Download EPAL school textbooks |
| `python scripts/trapeza7.py` | — | Collect exam problems from Trapeza7 |
| `python scripts/extract_pdf_images_craft.py` | `<pdf>`, `-o`/`--out`, `--dpi`, `--pages`, `-v` | Extract images from PDF |
| `python scripts/optimize_images_to_webp.py` | — | Convert images to WebP (`quality=85, method=6`) and strip `#` |
| `scripts\sanitize_latex.bat` | `[args]` | Batch wrapper running `python -m src.utils.latex_sanitizer` |
| `python scripts/site_server.py` | — | Local HTTP server (`http://localhost:8000`) serving `site/` |
