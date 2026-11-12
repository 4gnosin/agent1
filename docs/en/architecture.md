# System Architecture — 4gnosin.github.io

**Language / Γλώσσα:** [Ελληνικά](../architecture.md) | English

This document details the technical architecture, data flow, and execution model of the **4gnosin.github.io** educational platform.

---

## 1. End-to-End Data Flow

The platform consists of two distinct layers:
1. **Backend / Generation Pipeline (Python):** PDF processing, OCR, extraction of vector diagrams and images, mathematical formula cleanup (LaTeX sanitizer), generation of structured JavaScript files, and automatic per-subject bundling.
2. **Frontend Client (Vanilla JS Single Page Application):** A static application running 100% in the browser with no backend server, database, or Node.js runtime required.

```mermaid
flowchart TD
    subgraph INBOX["1. Content Ingestion"]
        PDF["School Textbook & IEP Exam Bank PDFs"]
    end

    subgraph PIPELINE["2. Processing & Bundling Pipeline (Python CLI)"]
        EXTRACT["PDF Extractor (fitz / PyMuPDF)"]
        OCR["Text Correlation & Bounding Boxes"]
        VEC["Vector Diagram & Overlay Detection"]
        WEBP["WebP Image Optimization"]
        LATEX["LaTeX Sanitizer (Math Cleanup)"]
        GEN["Generators (Theory, Exercises, Groups, Animations)"]
        BUNDLER["Subject Bundler (scripts/build_bundles.py)"]
    end

    subgraph STORE["3. Content Repository (site/)"]
        CONTENT["site/content/ (Source Theory per Chapter)"]
        EXERCISES["site/exercises/ (Source Exercises & Groups)"]
        ANIM["site/animations/ (Source Blackboards)"]
        IMAGES["site/images/ (WebP Diagrams)"]
        BUNDLES["site/bundles/ (Single Bundles per Subject ~300-600 KB)"]
        CATALOG["site/content/scripts_catalog.js (On-Demand Index)"]
    end

    subgraph SPA["4. Frontend Single Page Application"]
        INDEX["site/index.html (Lightweight Client ~2.4 KB)"]
        APP["site/js/app.js (Router, Promise Cache, Hover Prefetch, KaTeX)"]
        DOM["Interactive Browser Rendering (Web or file:///)"]
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

## 2. The "Zero-Fetch" Rule & `file:///` Compatibility

### 2.1 The `fetch()` Problem in Local Environments
In many EPAL schools and labs, the site is distributed on USB sticks or opened locally by double-clicking `index.html` (`file:///` protocol) with no internet connection and no local HTTP server (`http://localhost`).
* Modern browsers (Chrome, Edge, Firefox) **block `fetch()` and `XMLHttpRequest` calls** when running over the `file:///` protocol due to CORS (*Cross-Origin Resource Sharing*) security restrictions.

### 2.2 The Architectural Solution: Global Namespace Injection
All platform data is stored in JavaScript (`.js`) files loaded via standard script tags:
```html
<script src="path/to/file.js"></script>
```
These tags execute unrestricted both online (GitHub Pages) and from local disk (`file:///`).

Each file attaches its data to global `window` objects:
* `window.SUBJECT_DATA`: Holds theory, group, and exercise data for the active subject.
* `window.SUBJECT_SCRIPTS`: Index of active scripts per subject (points to the unified `bundles/{subject}.bundle.js` for instant loading in a single request).
* `window.SUBJECT_RAW_SCRIPTS`: Complete index of the original source files per subject (useful for development / fallback with `--raw`).
* `window.EXERCISE_ANIMATIONS`: Independent registry for the interactive blackboard steps (Plug & Play).

---

## 3. Loading Mechanism & Performance (High-Speed Lazy Loading)

### 3.1 Architectural Evolution
1. **Phase 1 (Monolithic — `index_full.html`):** Loaded all 650+ files on startup. The landing page was slow.
2. **Phase 2 (Simple Lazy Loading with individual files):** The landing page became fast, but selecting a subject required 80–110 separate network (HTTP) requests, causing a 2–4 second delay.
3. **Phase 3 (Production — Subject Bundles + Hover Prefetching):** The landing page remains instantaneous, while each subject is merged into **a single bundle file** (~300–600 KB).

### 3.2 How Production Works (`site/index.html` + `site/js/app.js`)
* **Landing Page Size:** ~2.4 KB (just 39 lines).
* **Startup:** Only the HTML shell, KaTeX, CSS, `catalog.js`, `scripts_catalog.js`, and `site/js/app.js` are loaded. Zero startup latency on the home view.
* **Hover / Pointer Prefetching:** When the pointer hovers over (or touches on a touchscreen) a subject card on the home page, `app.js` silently prefetches the subject bundle in the background. When the user clicks, the subject is already cached in memory (**0 ms perceived latency**).
* **Promise Caching:** `ensureSubjectLoaded(subjectId)` maintains a Promise cache, preventing duplicate DOM script tag insertions or navigation race conditions.
* **Fault Tolerance:** Even if a script fails to load, the `s.onerror` handler prevents the application from freezing.

### 3.3 `site/index_full.html` (Monolithic Backup — Fallback / Debug)
* **Size:** ~65 KB (650+ lines).
* **Role:** Contains statically declared `<script>` tags for every theory, exercise, and animation file across all subjects. Maintained as a standalone backup for environments that do not support dynamic script injection.

---

## 4. Routing (Hash Routing)

`site/js/app.js` implements a lightweight SPA router based on `window.location.hash`:

| Hash Route Pattern | View Page | Description |
| :--- | :--- | :--- |
| `#/` | Home Page | List of all 2nd and 3rd Grade EPAL courses. |
| `#/{subject}` | Course Overview | Table of contents, links to theory, exercises, and simulations. |
| `#/{subject}/notes` | Notes Index | Consolidated list of theory chapters. |
| `#/{subject}/notes/{slug}` | Theory Page (Section) | Full section text with mathematical formulas, images, and explanations. |
| `#/{subject}/board` | Exercise Board | All exercises grouped by chapter with progress indicators and `Animation` badges. |
| `#/{subject}/board/{exId}` | Exercise Page | Interactive solving with instant validation, hints, blackboard steps, and solution diagrams. |
| `#/math` & `#/math/{category}` | Basic Mathematics | Reference guides (fractions, algebraic identities, powers, factorization). |

---

## 5. Folder Structure & Separation of Concerns

```text
site/
├── index.html                 # Main production page (High-Speed Lazy Loading)
├── index_full.html            # Monolithic fallback page (Fallback)
├── css/
│   └── style.css              # Unified responsive design, blackboard & chalk theme
├── js/
│   └── app.js                 # SPA Router, Promise Cache, Hover Prefetch, Chalkboard player
├── bundles/                   # Unified bundles per subject (1 file/subject for instant loading)
│   └── {subject}.bundle.js    # Combined theory, exercises, groups & animations (~300-600 KB)
├── content/                   # Source Theory (Sections)
│   ├── catalog.js             # Catalog of courses, grades, and titles
│   ├── scripts_catalog.js     # Map of active bundles (and raw scripts) per subject
│   └── {grade}/{subject}/...  # Source theory files per chapter (e.g. 01-sec.js)
├── exercises/                 # Source IEP Exam Bank Exercises
│   └── {grade}/{subject}/...
│       ├── groups.js          # Subsection grouping per chapter
│       └── chNN-MM-slug.js    # Exercises (mc, tf, calc, match, blank, open)
├── animations/                # Interactive Blackboards (Plug & Play)
│   └── {grade}/{subject}/
│       └── {exId}.js          # Independent animation per exercise
└── images/                    # Optimized technical figures & diagrams (WebP)
    └── {grade}/{subject}/...  # {stem}_{code}_figNN.webp / solNN.webp

scripts/
├── build_bundles.py           # Builds per-subject bundles & updates scripts_catalog.js
├── build_bundles.bat          # Double-click execution on Windows
├── menu.py                    # Control Center (option [4] in tools & automatic bundling)
└── ...                        # Tools for PDF extraction, OCR, WebP, Validator
```

---

## 6. Automation & Maintenance

* **Adding / Editing Content:** Authors and developers continue working in the clean, individual source files (`content/`, `exercises/`, `animations/`).
* **Production Updates:** Whenever the pipeline runs from `menu.py` (or directly via `scripts/build_bundles.bat`), bundles and `scripts_catalog.js` are automatically regenerated in 1–2 seconds.
* **Validation:** `site_validator.py` validates the individual source files prior to bundle generation, ensuring 100% data integrity.
