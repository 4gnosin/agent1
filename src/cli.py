"""
Unified CLI for epal-mech-agent & 4gnosin.github.io content pipeline.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

# Επιτρέπει εκτέλεση είτε ως script (python src/cli.py) είτε ως module (python -m src.cli)
if __package__ is None or __package__ == "":
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
    from src.agent import EpalMechAgent
    from src.generators.exercise_generator import ExerciseGenerator
    from src.generators.script_tags_generator import ScriptTagsGenerator
    from src.generators.theory_generator import TheoryGenerator
    from src.validators.site_validator import SiteValidator
    from src.utils.pdf_extractor import extract_chapter_from_pdf
    from src.utils.structure import (
        catalog_id_for_subject,
        parse_named_chapter_file,
        sort_exercise_files,
        sort_theory_files,
        standard_chapter_stem,
    )
    from src.assistant import AuthorAssistant
else:
    from .agent import EpalMechAgent
    from .generators.exercise_generator import ExerciseGenerator
    from .generators.script_tags_generator import ScriptTagsGenerator
    from .generators.theory_generator import TheoryGenerator
    from .validators.site_validator import SiteValidator
    from .utils.pdf_extractor import extract_chapter_from_pdf
    from .utils.structure import (
        catalog_id_for_subject,
        parse_named_chapter_file,
        sort_exercise_files,
        sort_theory_files,
        standard_chapter_stem,
    )
    from .assistant import AuthorAssistant


def discover_batch_chapters(input_dir: Path) -> list[tuple[int, Path]]:
    """Find Markdown chapters and read their chapter number from the filename."""
    if not input_dir.is_dir():
        raise NotADirectoryError(f"Ο φάκελος εισόδου δεν βρέθηκε: {input_dir}")

    markdown_files = sorted(input_dir.glob("*.md"))
    if not markdown_files:
        raise FileNotFoundError(f"Δεν βρέθηκαν αρχεία .md στον φάκελο: {input_dir}")

    chapter_pattern = re.compile(r"(?:chapter|ch)[_-]?(\d+)", re.IGNORECASE)
    chapters: list[tuple[int, Path]] = []
    seen_chapters: dict[int, Path] = {}
    for path in markdown_files:
        match = chapter_pattern.search(path.stem)
        if not match:
            raise ValueError(
                f"Δεν αναγνωρίζεται αριθμός κεφαλαίου στο όνομα '{path.name}'. "
                "Χρησιμοποιήστε μορφή όπως chapter_01_titlos.md ή ch01_titlos.md."
            )

        chapter = int(match.group(1))
        if chapter in seen_chapters:
            raise ValueError(
                f"Διπλό κεφάλαιο {chapter}: '{seen_chapters[chapter].name}' "
                f"και '{path.name}'."
            )
        seen_chapters[chapter] = path
        chapters.append((chapter, path))

    return sorted(chapters, key=lambda item: item[0])


def catalog_subject_id(subject: str) -> str:
    """Map content directory names to the existing site's subject routes."""
    return catalog_id_for_subject(subject)


def validate_site_subject(site_dir: Path, subject_id: str) -> None:
    app_path = site_dir / "js" / "app.js"
    if not app_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε η εφαρμογή του site: {app_path}")

    app_source = app_path.read_text(encoding="utf-8")
    subjects_match = re.search(
        r"const\s+SUBJECTS\s*=\s*\{(?P<body>.*?)^\s*\};",
        app_source,
        re.DOTALL | re.MULTILINE,
    )
    if not subjects_match:
        raise ValueError(f"Δεν βρέθηκε η ρύθμιση SUBJECTS στο {app_path}.")

    subject_ids = {
        quoted or identifier
        for quoted, identifier in re.findall(
            r'^\s*(?:"([^"]+)"|([A-Za-z_$][\w$]*))\s*:\s*\{',
            subjects_match.group("body"),
            re.MULTILINE,
        )
    }
    if subject_id not in subject_ids:
        raise ValueError(
            f"Το μάθημα '{subject_id}' δεν έχει route στο app.js. "
            "Η μαζική ενημέρωση υποστηρίζει μόνο υπάρχοντα μαθήματα."
        )


def sync_catalog_subject(catalog_text: str, subject_id: str) -> str:
    """Ensure an existing site course is marked ready and links to its route."""
    lines = catalog_text.splitlines(keepends=True)
    id_pattern = re.compile(r'^\s*"id"\s*:\s*"' + re.escape(subject_id) + r'",?\s*$')
    matches = [index for index, line in enumerate(lines) if id_pattern.match(line.rstrip("\r\n"))]
    if len(matches) != 1:
        raise ValueError(
            f"Το μάθημα '{subject_id}' πρέπει να υπάρχει ακριβώς μία φορά στο catalog.js."
        )

    id_index = matches[0]
    start_index = id_index - 1
    while start_index >= 0 and lines[start_index].strip() != "{":
        start_index -= 1
    end_index = id_index + 1
    while end_index < len(lines) and not re.match(r"^\s*\}", lines[end_index]):
        end_index += 1
    if start_index < 0 or end_index >= len(lines):
        raise ValueError(f"Δεν ήταν δυνατή η ανάγνωση της καταχώρισης '{subject_id}' στο catalog.")

    block = lines[start_index:end_index + 1]
    status_pattern = re.compile(r'^(\s*"status"\s*:\s*")[^"]*(".*)$')
    href_pattern = re.compile(r'^(\s*)"href"\s*:\s*"[^"]*"(,?)\s*$')
    status_updated = False
    href_updated = False
    for offset, line in enumerate(block):
        ending = "\r\n" if line.endswith("\r\n") else "\n" if line.endswith("\n") else ""
        content = line.rstrip("\r\n")
        status_match = status_pattern.match(content)
        if status_match:
            block[offset] = f'{status_match.group(1)}ready{status_match.group(2)}{ending}'
            status_updated = True
        href_match = href_pattern.match(content)
        if href_match:
            block[offset] = f'{href_match.group(1)}"href": "#/{subject_id}"{href_match.group(2)}{ending}'
            href_updated = True

    if not status_updated:
        raise ValueError(f"Η καταχώριση '{subject_id}' στο catalog δεν έχει πεδίο status.")
    if not href_updated:
        closing_line = block[-1]
        indentation = " " * (len(closing_line) - len(closing_line.lstrip()) + 2)
        ending = "\r\n" if closing_line.endswith("\r\n") else "\n" if closing_line.endswith("\n") else ""
        for offset, line in enumerate(block):
            status_match = status_pattern.match(line.rstrip("\r\n"))
            if status_match:
                line_ending = "\r\n" if line.endswith("\r\n") else "\n" if line.endswith("\n") else ""
                content = line.rstrip("\r\n")
                if not content.rstrip().endswith(","):
                    content = content.rstrip() + ","
                block[offset] = content + line_ending
                break
        block.insert(-1, f'{indentation}"href": "#/{subject_id}"{ending}')

    lines[start_index:end_index + 1] = block
    return "".join(lines)


def rewrite_subject_script_tags(
    html: str,
    site_dir: Path,
    grade: str,
    subject: str,
    theory_files: list[Path],
    exercise_files: list[Path],
) -> str:
    """Replace a subject's chapter scripts so chapters stay in numeric order."""
    prefixes = (
        f"content/{grade}/{subject}/chapter-",
        f"exercises/{grade}/{subject}/chapter-",
    )

    def is_subject_chapter_script(src: str) -> bool:
        normalized = src.replace("\\", "/").lstrip("./")
        return normalized.startswith(prefixes)

    tags = [
        f'  <script src="{path.relative_to(site_dir).as_posix()}"></script>'
        for path in [*sort_theory_files(theory_files), *sort_exercise_files(exercise_files)]
    ]
    script_src_re = re.compile(
        r"""^[ \t]*<script\b[^>]*\bsrc=["']([^"']+)["']""",
        re.IGNORECASE,
    )
    lines = html.splitlines(keepends=True)
    kept: list[str] = []
    insert_at: int | None = None
    for line in lines:
        match = script_src_re.match(line)
        if match and is_subject_chapter_script(match.group(1)):
            if insert_at is None:
                insert_at = len(kept)
            continue
        kept.append(line)

    block = "\n".join(tags) + ("\n" if tags else "")
    if insert_at is not None:
        kept.insert(insert_at, block)
        return "".join(kept)

    if not tags:
        return html

    fallback = re.search(
        r"""^[ \t]*<script\b[^>]*\bsrc=["'](?:exercises|simulations|https://|js/app\.js)""",
        html,
        re.IGNORECASE | re.MULTILINE,
    )
    if not fallback:
        raise ValueError("Δεν βρέθηκε κατάλληλη θέση εισαγωγής script tags στο index.html.")
    return html[: fallback.start()] + block + html[fallback.start() :]


def sync_site_index(site_dir: Path, grade: str, subject: str) -> None:
    """Register generated chapter scripts in index.html and sync the course catalog."""
    index_path = site_dir / "index.html"
    catalog_path = site_dir / "content" / "catalog.js"
    if not index_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε το site index: {index_path}")
    if not catalog_path.is_file():
        raise FileNotFoundError(f"Δεν βρέθηκε ο κατάλογος μαθημάτων: {catalog_path}")

    subject_id = catalog_subject_id(subject)
    validate_site_subject(site_dir, subject_id)
    subject_dir = site_dir / "content" / grade / subject
    exercises_dir = site_dir / "exercises" / grade / subject
    if not exercises_dir.is_dir():
        raise FileNotFoundError(
            f"Δεν βρέθηκε ο φάκελος ασκήσεων για {grade}/{subject} στο {site_dir}."
        )

    catalog_text = catalog_path.read_text(encoding="utf-8")
    if not re.search(
        r'^\s*"id"\s*:\s*"' + re.escape(subject_id) + r'",?\s*$',
        catalog_text,
        re.MULTILINE,
    ):
        raise ValueError(
            f"Το μάθημα '{subject_id}' δεν υπάρχει στο catalog.js. "
            "Η μαζική ενημέρωση υποστηρίζει υπάρχοντα μαθήματα."
        )

    theory_files: list[Path] = []
    if subject_dir.is_dir():
        for path in sort_theory_files(list(subject_dir.glob("chapter-*/*.js"))):
            errors = SiteValidator.validate_section_file(path)
            if errors:
                print(f"Skipping invalid theory file {path}: {'; '.join(errors)}")
            else:
                theory_files.append(path)

    exercise_files: list[Path] = []
    for path in sort_exercise_files(list(exercises_dir.glob("chapter-*/*.js"))):
        if path.name == "groups.js":
            errors = SiteValidator.validate_groups_file(path)
        else:
            errors = SiteValidator.validate_exercises_file(path)
        if errors:
            print(f"Skipping invalid exercise file {path}: {'; '.join(errors)}")
        else:
            exercise_files.append(path)
    if not exercise_files:
        raise FileNotFoundError(
            f"Δεν βρέθηκαν παραγόμενα αρχεία ασκήσεων για {grade}/{subject}."
        )

    html = index_path.read_text(encoding="utf-8")
    html = rewrite_subject_script_tags(
        html,
        site_dir=site_dir,
        grade=grade,
        subject=subject,
        theory_files=theory_files,
        exercise_files=exercise_files,
    )
    updated_catalog = sync_catalog_subject(catalog_text, subject_id)
    index_path.write_text(html, encoding="utf-8")
    catalog_path.write_text(updated_catalog, encoding="utf-8")
    print(f"Updated script tags in {index_path}")
    print(f"Synchronized course '{subject_id}' in {catalog_path}")


def build_batch_command(args: argparse.Namespace) -> None:
    """Build every Markdown chapter in a folder using one grade and subject."""
    try:
        chapters = discover_batch_chapters(Path(args.input_dir))
        output_dir = Path(args.output)
        if not (output_dir / "index.html").is_file():
            raise FileNotFoundError(
                f"Ο φάκελος εξόδου πρέπει να είναι το root του site και να περιέχει index.html: {output_dir}"
            )
        subject_id = catalog_subject_id(args.subject)
        validate_site_subject(output_dir, subject_id)
        catalog_path = output_dir / "content" / "catalog.js"
        if not catalog_path.is_file():
            raise FileNotFoundError(f"Δεν βρέθηκε ο κατάλογος μαθημάτων: {catalog_path}")
        catalog_text = catalog_path.read_text(encoding="utf-8")
        if not re.search(
            r'^\s*"id"\s*:\s*"' + re.escape(subject_id) + r'",?\s*$',
            catalog_text,
            re.MULTILINE,
        ):
            raise ValueError(
                f"Το μάθημα '{subject_id}' δεν υπάρχει στο catalog.js. "
                "Η μαζική ενημέρωση υποστηρίζει υπάρχοντα μαθήματα."
            )
        sync_catalog_subject(catalog_text, subject_id)
        exercise_sources: dict[int, Path] = {}
        if args.exercises_dir:
            exercises_dir = Path(args.exercises_dir)
            if not exercises_dir.is_dir():
                raise NotADirectoryError(f"Ο φάκελος ασκήσεων δεν βρέθηκε: {exercises_dir}")
            for chapter, source_path in chapters:
                exercise_path = exercises_dir / source_path.name
                if not exercise_path.is_file():
                    raise FileNotFoundError(
                        f"Δεν βρέθηκε αρχείο ασκήσεων για το κεφάλαιο {chapter}: {exercise_path}"
                    )
                exercise_sources[chapter] = exercise_path
    except (FileNotFoundError, NotADirectoryError, ValueError) as exc:
        print(f"❌ Σφάλμα εισόδου: {exc}", file=sys.stderr)
        sys.exit(1)

    print(f"\n📚 Βρέθηκαν {len(chapters)} κεφάλαια για παραγωγή.")
    for chapter, source_path in chapters:
        print(f"\n{'=' * 70}")
        print(f"Κεφάλαιο {chapter}: {source_path.name}")
        chapter_args = argparse.Namespace(
            input=str(source_path),
            exercises_input=str(exercise_sources[chapter]) if args.exercises_dir else None,
            grade=args.grade,
            subject=args.subject,
            chapter=chapter,
            start_page=None,
            end_page=None,
            output=args.output,
            model=args.model,
        )
        build_chapter_command(chapter_args)

    try:
        sync_site_index(Path(args.output), args.grade, args.subject)
    except (FileNotFoundError, ValueError) as exc:
        print(f"❌ Δεν ήταν δυνατός ο συγχρονισμός με το site: {exc}", file=sys.stderr)
        sys.exit(1)


def build_chapter_command(args: argparse.Namespace) -> None:
    """Πλήρης αυτοματοποιημένη παραγωγή κεφαλαίου: Θεωρία + Ασκήσεις + Script Tags."""
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"❌ Σφάλμα: Το αρχείο εισόδου δεν βρέθηκε: {input_path}", file=sys.stderr)
        sys.exit(1)

    # Αν η είσοδος είναι απευθείας αρχείο PDF, κάνε αυτόματη εξαγωγή & αποκατάσταση τύπων
    if input_path.suffix.lower() == ".pdf":
        print("\n📄 Εντοπίστηκε αρχείο PDF ως είσοδος.")
        print("⚡ Αυτόματη τοπική εξαγωγή σελίδων & αποκατάσταση μαθηματικών τύπων σε LaTeX...")
        auto_md = Path("data/chapters") / f"{args.grade}_{args.subject}_ch{args.chapter:02d}.md"
        extract_chapter_from_pdf(
            pdf_path=input_path,
            output_path=auto_md,
            start_page=getattr(args, "start_page", None),
            end_page=getattr(args, "end_page", None),
            title=f"Κεφάλαιο {args.chapter}",
            ai_clean=False,
            model=args.model,
        )
        input_path = auto_md

    out_dir = Path(args.output) if args.output else Path("output")

    print("=" * 70)
    print("🚀 4gnosin.github.io — ΠΛΗΡΗΣ ΠΑΡΑΓΩΓΗ ΚΕΦΑΛΑΙΟΥ (BUILD PIPELINE)")
    print(f"Αρχείο Ύλης: {input_path}")
    print(f"Τάξη: {args.grade} | Μάθημα: {args.subject} | Κεφάλαιο: {args.chapter}")
    print(f"Φάκελος Εξαγωγής: {out_dir.resolve()}")
    print("=" * 70)

    # 1. Θεωρία
    theory_gen = TheoryGenerator(model=args.model)
    theory_files = theory_gen.generate_chapter_sections(
        source_markdown_path=input_path,
        grade=args.grade,
        subject=args.subject,
        chapter=args.chapter,
        output_dir=out_dir,
    )

    # 2. Ασκήσεις (από ξεχωριστό αρχείο αν δηλώθηκε, αλλιώς από το αρχείο θεωρίας)
    exercises_source = Path(args.exercises_input) if getattr(args, "exercises_input", None) else input_path
    if not exercises_source.exists():
        print(f"❌ Σφάλμα: Το αρχείο ασκήσεων δεν βρέθηκε: {exercises_source}", file=sys.stderr)
        sys.exit(1)

    exercise_gen = ExerciseGenerator(model=args.model)
    exercise_files = exercise_gen.generate_chapter_exercises(
        source_markdown_path=exercises_source,
        grade=args.grade,
        subject=args.subject,
        chapter=args.chapter,
        output_dir=out_dir,
    )

    groups_file = next((f for f in exercise_files if f.name == "groups.js"), None)
    actual_exercises = [f for f in exercise_files if f.name != "groups.js"]

    # 3. Παραγωγή Script Tags για το index.html
    tags = ScriptTagsGenerator.generate_tags(
        theory_files=theory_files,
        groups_file=groups_file,
        exercise_files=actual_exercises,
    )

    tags_file = out_dir / f"index_tags_{args.subject}_ch{args.chapter:02d}.html"
    tags_file.write_text(tags, encoding="utf-8")

    print("\n" + "=" * 70)
    print("✨ Η ΠΑΡΑΓΩΓΗ ΟΛΟΚΛΗΡΩΘΗΚΕ ΜΕ ΕΠΙΤΥΧΙΑ!")
    print(f"📁 Αρχεία Θεωρίας ({len(theory_files)}):")
    for tf in theory_files:
        print(f"  - {tf}")
    print(f"📁 Αρχεία Ασκήσεων ({len(exercise_files)}):")
    for ef in exercise_files:
        print(f"  - {ef}")
    print(f"📋 Script tags αποθηκεύτηκαν στο: {tags_file}")
    print("=" * 70)
    print("\nΑποκόμματα για το index.html:\n")
    print(tags)


def generate_theory_command(args: argparse.Namespace) -> None:
    """Παραγωγή μόνο των αρχείων θεωρίας."""
    input_path = Path(args.input)
    out_dir = Path(args.output) if args.output else Path("output")

    gen = TheoryGenerator(model=args.model)
    files = gen.generate_chapter_sections(
        source_markdown_path=input_path,
        grade=args.grade,
        subject=args.subject,
        chapter=args.chapter,
        output_dir=out_dir,
    )
    print(f"\n✅ Παράχθηκαν {len(files)} αρχεία θεωρίας.")


def generate_exercises_command(args: argparse.Namespace) -> None:
    """Παραγωγή και επικύρωση ομάδων και ασκήσεων."""
    input_path = Path(args.exercises_input) if getattr(args, "exercises_input", None) else Path(args.input)
    if not input_path.exists():
        print(f"❌ Σφάλμα: Το αρχείο δεν βρέθηκε: {input_path}", file=sys.stderr)
        sys.exit(1)

    grade = args.grade
    subject = args.subject
    chapter = args.chapter
    # Αν λείπουν μάθημα/κεφάλαιο, διάβασέ τα από το όνομα αρχείου
    if subject is None or chapter is None:
        try:
            auto_grade, auto_subject, auto_chapter = parse_named_chapter_file(input_path)
        except ValueError as exc:
            print(f"❌ {exc}", file=sys.stderr)
            print("   Ή δώστε ρητά: -g b -s thermod -c 5", file=sys.stderr)
            sys.exit(1)
        grade = grade or auto_grade
        subject = subject or auto_subject
        chapter = chapter if chapter is not None else auto_chapter
        print(f"📌 Από όνομα αρχείου: τάξη={grade}, μάθημα={subject}, κεφάλαιο={chapter}")

    out_dir = Path(args.output) if args.output else Path("output")

    gen = ExerciseGenerator(model=args.model)
    files = gen.generate_chapter_exercises(
        source_markdown_path=input_path,
        grade=grade,
        subject=subject,
        chapter=int(chapter),
        output_dir=out_dir,
    )
    if (out_dir / "index.html").is_file():
        try:
            sync_site_index(out_dir, grade, subject)
        except (FileNotFoundError, ValueError) as exc:
            print(f"❌ Δεν ήταν δυνατός ο συγχρονισμός με το site: {exc}", file=sys.stderr)
            sys.exit(1)
    print(f"\n✅ Παράχθηκαν και επικυρώθηκαν {len(files)} αρχεία ασκήσεων.")


def validate_command(args: argparse.Namespace) -> None:
    """Επικύρωση αρχείων JavaScript."""
    target_path = Path(args.path)
    if not target_path.exists():
        print(f"❌ Η διαδρομή δεν υπάρχει: {target_path}", file=sys.stderr)
        sys.exit(1)

    files_to_check = [target_path] if target_path.is_file() else list(target_path.rglob("*.js"))

    print(f"\n🔍 Επικύρωση {len(files_to_check)} αρχείων JavaScript...")
    has_errors = False
    for f in files_to_check:
        errs = []
        if f.name == "groups.js":
            errs = SiteValidator.validate_groups_file(f)
        elif "content" in f.parts or f.name.startswith("0"):
            errs = SiteValidator.validate_section_file(f)
        else:
            errs = SiteValidator.validate_exercises_file(f)

        if errs:
            has_errors = True
            print(f"❌ {f.name}:")
            for e in errs:
                print(f"   - {e}")
        else:
            print(f"✅ {f.name}: Έγκυρο schema")

    if not has_errors:
        print("\n🎉 Όλα τα αρχεία τηρούν αυστηρά τα schemas του 4gnosin.github.io!")


def extract_pdf_command(args: argparse.Namespace) -> None:
    """Εξαγωγή κεφαλαίου από PDF σχολικού βιβλίου σε Markdown με προαιρετική αποκατάσταση τύπων."""
    extract_chapter_from_pdf(
        pdf_path=args.pdf,
        output_path=args.output,
        start_page=args.start_page,
        end_page=args.end_page,
        title=args.title or "",
        ai_clean=args.ai_clean,
        model=args.model,
    )


def assistant_command(args: argparse.Namespace) -> None:
    """Εκκίνηση του AI Co-Pilot για τον δημιουργό του site."""
    assistant = AuthorAssistant(model=args.model)
    assistant.start_repl()


def tutor_command(args: argparse.Namespace) -> None:
    """Εκκίνηση του AI Tutor καθηγητή Μηχανολογίας ΕΠΑΛ."""
    agent = EpalMechAgent(model=args.model)
    if args.list:
        chapters = agent.list_chapters()
        print("\n📚 Διαθέσιμα Κεφάλαια:")
        for idx, ch in enumerate(chapters, 1):
            print(f"  {idx}. {ch}")
        print()
        return

    if not args.chapter:
        print("⚠️ Παρακαλούμε ορίστε κεφάλαιο με το -c / --chapter.")
        return

    if args.question:
        chunks = agent.ask(chapter_name=args.chapter, question=args.question, stream=True)
        print(f"\n📖 [Κεφάλαιο: {args.chapter}]")
        print(f"❓ {args.question}\n")
        print("👨‍🏫 Καθηγητής: ", end="", flush=True)
        for c in chunks:
            print(c, end="", flush=True)
        print("\n")
    else:
        agent.interactive_chat(args.chapter)


# Κενό ή μόνο ετικέτα θέματος — Θέμα/ΘΕΜΑ/θεμα + αριθμός (+ προαιρετικό ο/<sup>/κωδικός)
_BAD_STEM_RE = re.compile(
    r"^[θΘ][εέΕΈ][μΜ][αΑ]\s+\d{1,2}\s*"
    r"(?:<sup>\s*[οo°ᵒ]?\s*</sup>|[οo°ᵒ])?"
    r"(?:\s*[·\-—]\s*#?\d+)?"
    r"$",
)


def _is_redundant_stem(stem: str) -> bool:
    s = re.sub(r"\s+", " ", stem.strip())
    return (not s) or bool(_BAD_STEM_RE.fullmatch(s))


def _strip_stems_from_exercises_js(text: str) -> tuple[str, int]:
    """Αφαιρεί stem που είναι κενό ή μόνο «Θέμα Xο». Επιστρέφει (νέο_κείμενο, πλήθος)."""
    marker = "window.EXERCISES"
    if marker not in text:
        return text, 0
    # Εντοπισμός του JSON array μετά το push(...
    push_idx = text.find("push(")
    if push_idx < 0:
        return text, 0
    arr_start = text.find("[", push_idx)
    if arr_start < 0:
        return text, 0
    # Βρες το matching ] πριν το );
    depth = 0
    arr_end = -1
    for i in range(arr_start, len(text)):
        ch = text[i]
        if ch == "[":
            depth += 1
        elif ch == "]":
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    if arr_end < 0:
        return text, 0
    try:
        data = json.loads(text[arr_start : arr_end + 1])
    except json.JSONDecodeError:
        return text, 0
    if not isinstance(data, list):
        return text, 0
    removed = 0
    for item in data:
        if not isinstance(item, dict):
            continue
        stem = item.get("stem")
        if isinstance(stem, str) and _is_redundant_stem(stem):
            item.pop("stem", None)
            removed += 1
    if removed == 0:
        return text, 0
    new_arr = json.dumps(data, ensure_ascii=False, indent=2)
    new_text = text[:arr_start] + new_arr + text[arr_end + 1 :]
    return new_text, removed


def fix_stems_command(args: argparse.Namespace) -> None:
    """Διόρθωση υπαρχουσών ασκήσεων: περιττά stem (+ προαιρετική μετονομασία chNN-)."""
    root = Path(__file__).resolve().parent.parent
    candidates = []
    if args.site:
        candidates.append(Path(args.site))
    candidates.extend(
        [
            root.parent / "site",  # artifacts/site δίπλα στο agent1.1
            root / "site",
            Path("site"),
        ]
    )
    site_dir = next((p for p in candidates if (p / "exercises").is_dir()), None)
    if site_dir is None:
        print("❌ Δεν βρέθηκε φάκελος exercises/. Δώσε -o διαδρομή_site", file=sys.stderr)
        sys.exit(1)

    exercises_root = site_dir / "exercises"
    index_path = site_dir / "index.html"
    print(f"📁 Site: {site_dir.resolve()}")
    total_removed = 0
    files_changed = 0
    renames: list[tuple[str, str]] = []  # old rel path -> new rel path (posix)

    for path in sorted(exercises_root.rglob("*.js")):
        if path.name == "groups.js":
            continue
        original = path.read_text(encoding="utf-8")
        new_text, removed = _strip_stems_from_exercises_js(original)
        if removed:
            path.write_text(new_text, encoding="utf-8")
            total_removed += removed
            files_changed += 1
            print(f"  ✓ stem: {path.relative_to(site_dir)} (−{removed})")

        if args.rename:
            # exercises/b/thermod/chapter-03/foo.js → ch03-foo.js
            m = re.search(r"chapter-(\d+)", path.parent.name)
            if not m:
                continue
            chapter = int(m.group(1))
            desired = path.parent / (
                path.name
                if re.match(rf"^ch0*{chapter}[-_]", path.stem, re.I)
                or re.match(r"^ch\d{1,2}[-_]", path.stem, re.I)
                else f"ch{chapter:02d}-{path.name}"
            )
            if desired.name != path.name and not desired.exists():
                old_rel = path.relative_to(site_dir).as_posix()
                path.rename(desired)
                new_rel = desired.relative_to(site_dir).as_posix()
                renames.append((old_rel, new_rel))
                print(f"  ✓ rename: {path.name} → {desired.name}")

    if renames and index_path.is_file():
        html = index_path.read_text(encoding="utf-8")
        for old_rel, new_rel in renames:
            html = html.replace(old_rel, new_rel)
        index_path.write_text(html, encoding="utf-8")
        print(f"  ✓ Ενημερώθηκε το index.html ({len(renames)} script tags)")

    print("\n" + "=" * 60)
    print(f"✨ Αφαιρέθηκαν {total_removed} περιττά stem σε {files_changed} αρχεία.")
    if args.rename:
        print(f"✨ Μετονομάστηκαν {len(renames)} αρχεία με πρόθεμα chNN-.")
    print("=" * 60)


def process_inbox_command(args: argparse.Namespace) -> None:
    """
    Διπλό-κλικ αυτοματισμός:
      1. Διαβάζει PDF/MD από data/inbox/
      2. Από το όνομα αρχείου εξάγει τάξη + μάθημα + κεφάλαιο
      3. PDF → Markdown (data/chapters/)
      4. Παράγει ασκήσεις απευθείας στο site του μαθήματος
      5. Ενημερώνει index.html + catalog.js
    """
    root = Path(__file__).resolve().parent.parent
    inbox = Path(args.inbox) if args.inbox else root / "data" / "inbox"
    done_dir = inbox / "done"
    chapters_dir = root / "data" / "chapters"
    site_dir = Path(args.output) if args.output else root / "site"

    inbox.mkdir(parents=True, exist_ok=True)
    chapters_dir.mkdir(parents=True, exist_ok=True)
    done_dir.mkdir(parents=True, exist_ok=True)

    sources = sorted(
        [p for p in inbox.iterdir() if p.is_file() and p.suffix.lower() in {".pdf", ".md"}],
        key=lambda p: p.name.lower(),
    )
    if not sources:
        print(f"📭 Δεν βρέθηκαν αρχεία .pdf ή .md στον φάκελο:\n   {inbox}")
        print("Ονομάστε τα:  b_thermod_ch05.pdf   ή   b_antoxi_ch01.md")
        return

    print("=" * 70)
    print(f"📥 INBOX: {inbox}")
    print(f"🌐 SITE:  {site_dir.resolve()}")
    print(f"📄 Αρχεία: {len(sources)}")
    print("=" * 70)

    errors: list[str] = []
    subjects_touched: set[tuple[str, str]] = set()

    for source in sources:
        print(f"\n{'─' * 70}")
        print(f"▶ {source.name}")
        try:
            grade, subject, chapter = parse_named_chapter_file(source)
        except ValueError as exc:
            msg = f"{source.name}: {exc}"
            print(f"❌ {msg}")
            errors.append(msg)
            continue

        print(f"   Τάξη={grade} | Μάθημα={subject} | Κεφάλαιο={chapter}")
        stem = standard_chapter_stem(grade, subject, chapter)
        md_path = chapters_dir / f"{stem}.md"

        try:
            if source.suffix.lower() == ".pdf":
                print("   📄 PDF → Markdown (τοπικός καθαρισμός συμβόλων, 0 AI tokens)...")
                extract_chapter_from_pdf(
                    pdf_path=source,
                    output_path=md_path,
                    start_page=None,
                    end_page=None,
                    title=f"Κεφάλαιο {chapter}",
                    ai_clean=False,
                    model=args.model,
                )
            else:
                from src.utils.pdf_extractor import normalize_pdf_symbols, clean_greek_pdf_text

                raw_md = source.read_text(encoding="utf-8")
                md_path.write_text(clean_greek_pdf_text(raw_md), encoding="utf-8")
                print(f"   📝 Markdown καθαρίστηκε τοπικά → {md_path.name}")

            print("   🧠 Παραγωγή ασκήσεων...")
            gen = ExerciseGenerator(model=args.model)
            files = gen.generate_chapter_exercises(
                source_markdown_path=md_path,
                grade=grade,
                subject=subject,
                chapter=chapter,
                output_dir=site_dir,
            )
            for f in files:
                print(f"      ✓ {f}")

            subjects_touched.add((grade, subject))
            target = done_dir / source.name
            if target.exists():
                target = done_dir / f"{source.stem}_{chapter:02d}{source.suffix}"
            source.rename(target)
            print(f"   📦 Μετακινήθηκε στο done/: {target.name}")
        except Exception as exc:  # noqa: BLE001 — καταγραφή ανά αρχείο, συνέχεια με τα υπόλοιπα
            msg = f"{source.name}: {exc}"
            print(f"❌ {msg}")
            errors.append(msg)

    for grade, subject in sorted(subjects_touched):
        try:
            print(f"\n🔗 Συγχρονισμός index/catalog για {grade}/{subject}...")
            sync_site_index(site_dir, grade, subject)
        except (FileNotFoundError, ValueError) as exc:
            msg = f"sync {grade}/{subject}: {exc}"
            print(f"❌ {msg}")
            errors.append(msg)

    print("\n" + "=" * 70)
    if errors:
        print(f"⚠️ Ολοκληρώθηκε με {len(errors)} σφάλμα(τα):")
        for e in errors:
            print(f"   - {e}")
        sys.exit(1)
    print("✨ Όλα τα αρχεία του inbox επεξεργάστηκαν επιτυχώς.")
    print("=" * 70)


def main() -> None:
    parser = argparse.ArgumentParser(
        prog="epal-mech-agent",
        description="AI Agent & Content Pipeline for 4gnosin.github.io (Μηχανολογία ΕΠΑΛ)",
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    # 1. build-chapter
    p_build = subparsers.add_parser("build-chapter", help="Πλήρης παραγωγή θεωρίας + ασκήσεων + script tags")
    p_build.add_argument("-i", "--input", required=True, help="Διαδρομή αρχείου Markdown ύλης ή απευθείας αρχείου .pdf")
    p_build.add_argument("-e", "--exercises-input", default=None, help="Προαιρετικό ξεχωριστό αρχείο Markdown με ασκήσεις")
    p_build.add_argument("-g", "--grade", default="b", choices=["b", "c"], help="Τάξη ΕΠΑΛ (b ή c)")
    p_build.add_argument("-s", "--subject", required=True, help="Αναγνωριστικό μαθήματος (π.χ. antoxi, thermod, psixi)")
    p_build.add_argument("-c", "--chapter", type=int, required=True, help="Αριθμός κεφαλαίου (π.χ. 1)")
    p_build.add_argument("--start-page", type=int, default=None, help="Αρχική σελίδα (αν το input είναι PDF)")
    p_build.add_argument("--end-page", type=int, default=None, help="Τελική σελίδα (αν το input είναι PDF)")
    p_build.add_argument("-o", "--output", default="output", help="Φάκελος εξαγωγής")
    p_build.add_argument("-m", "--model", default=None, help="Μοντέλο Gemini")
    p_build.set_defaults(func=build_chapter_command)

    # 2. build-batch
    p_batch = subparsers.add_parser(
        "build-batch",
        help="Μαζική παραγωγή πολλών κεφαλαίων από φάκελο Markdown",
    )
    p_batch.add_argument(
        "-i", "--input-dir", required=True,
        help="Φάκελος με αρχεία Markdown ονομασμένα π.χ. chapter_01_titlos.md",
    )
    p_batch.add_argument(
        "-e", "--exercises-dir", default=None,
        help="Προαιρετικός φάκελος με ξεχωριστά αρχεία ασκήσεων με τα ίδια ονόματα",
    )
    p_batch.add_argument("-g", "--grade", default="b", choices=["b", "c"])
    p_batch.add_argument("-s", "--subject", required=True)
    p_batch.add_argument("-o", "--output", default="site", help="Root του site (προεπιλογή: site)")
    p_batch.add_argument("-m", "--model", default=None)
    p_batch.set_defaults(func=build_batch_command)

    # 2. generate-theory
    p_theory = subparsers.add_parser("generate-theory", help="Παραγωγή μόνο των αρχείων θεωρίας (0N-<slug>.js)")
    p_theory.add_argument("-i", "--input", required=True, help="Διαδρομή αρχείου Markdown ύλης")
    p_theory.add_argument("-g", "--grade", default="b", choices=["b", "c"])
    p_theory.add_argument("-s", "--subject", required=True)
    p_theory.add_argument("-c", "--chapter", type=int, required=True)
    p_theory.add_argument("-o", "--output", default="output")
    p_theory.add_argument("-m", "--model", default=None)
    p_theory.set_defaults(func=generate_theory_command)

    # 3. generate-exercises
    p_ex = subparsers.add_parser(
        "generate-exercises",
        help="Παραγωγή μόνο των αρχείων ομάδων & ασκήσεων (τάξη/μάθημα/κεφ. από το όνομα αρχείου)",
    )
    p_ex.add_argument("-i", "--input", required=True, help="Διαδρομή αρχείου Markdown (π.χ. b_thermod_ch05.md)")
    p_ex.add_argument("-e", "--exercises-input", default=None, help="Προαιρετικό ξεχωριστό αρχείο Markdown με ασκήσεις")
    p_ex.add_argument("-g", "--grade", default=None, choices=["b", "c"], help="Προαιρετικό αν υπάρχει στο όνομα αρχείου")
    p_ex.add_argument("-s", "--subject", default=None, help="Προαιρετικό αν υπάρχει στο όνομα αρχείου")
    p_ex.add_argument("-c", "--chapter", type=int, default=None, help="Προαιρετικό αν υπάρχει στο όνομα αρχείου")
    p_ex.add_argument("-o", "--output", default="site", help="Root site (προεπιλογή: site)")
    p_ex.add_argument("-m", "--model", default=None)
    p_ex.set_defaults(func=generate_exercises_command)

    # 4. validate
    p_val = subparsers.add_parser("validate", help="Έλεγχος και επικύρωση αρχείων JavaScript")
    p_val.add_argument("path", help="Διαδρομή αρχείου .js ή φακέλου προς έλεγχο")
    p_val.set_defaults(func=validate_command)

    # 5. tutor
    p_tutor = subparsers.add_parser("tutor", help="Διαδραστικός καθηγητής Μηχανολογίας ΕΠΑΛ")
    p_tutor.add_argument("-c", "--chapter", help="Όνομα κεφαλαίου")
    p_tutor.add_argument("-q", "--question", help="Ερώτηση προς τον καθηγητή")
    p_tutor.add_argument("-l", "--list", action="store_true", help="Προβολή διαθέσιμων κεφαλαίων")
    p_tutor.add_argument("-m", "--model", help="Μοντέλο Gemini")
    p_tutor.set_defaults(func=tutor_command)

    # 6. extract-pdf
    p_pdf = subparsers.add_parser("extract-pdf", help="Εξαγωγή σελίδων από PDF σε Markdown με προαιρετικό AI καθαρισμό τύπων")
    p_pdf.add_argument("-p", "--pdf", required=True, help="Διαδρομή του αρχείου PDF")
    p_pdf.add_argument("-o", "--output", required=True, help="Διαδρομή αρχείου Markdown εξόδου (π.χ. data/chapters/b_thermod_ch02.md)")
    p_pdf.add_argument("--start-page", type=int, default=None, help="Αριθμός αρχικής σελίδας")
    p_pdf.add_argument("--end-page", type=int, default=None, help="Αριθμός τελικής σελίδας")
    p_pdf.add_argument("-t", "--title", default="", help="Τίτλος κεφαλαίου")
    p_pdf.add_argument("--ai-clean", action="store_true", help="Αυτόματη αναγνώριση & αποκατάσταση μαθηματικών τύπων σε LaTeX με AI")
    p_pdf.add_argument("-m", "--model", default=None, help="Μοντέλο Gemini για τον καθαρισμό")
    p_pdf.set_defaults(func=extract_pdf_command)

    # 7. assistant
    p_asst = subparsers.add_parser("assistant", help="Διαδραστικός AI βοηθός ανάπτυξης (Co-Pilot) για τον δημιουργό του site")
    p_asst.add_argument("-m", "--model", default=None, help="Μοντέλο Gemini")
    p_asst.set_defaults(func=assistant_command)

    # 8. process-inbox  (διπλό κλικ: PDF/MD → ασκήσεις στο σωστό μάθημα)
    p_inbox = subparsers.add_parser(
        "process-inbox",
        help="Αυτόματη επεξεργασία PDF/MD από data/inbox/ (όνομα = τάξη_μάθημα_chNN)",
    )
    p_inbox.add_argument(
        "--inbox",
        default=None,
        help="Φάκελος εισόδου (προεπιλογή: data/inbox)",
    )
    p_inbox.add_argument(
        "-o",
        "--output",
        default=None,
        help="Root του site (προεπιλογή: site/)",
    )
    p_inbox.add_argument("-m", "--model", default=None, help="Μοντέλο Gemini")
    p_inbox.set_defaults(func=process_inbox_command)

    # 9. fix-stems — διόρθωση υπαρχουσών ασκήσεων (περιττά stem + ονόματα chNN-)
    p_fix = subparsers.add_parser(
        "fix-stems",
        help="Αφαιρεί περιττά stem (Θέμα Xο / κενό) και προαιρετικά μετονομάζει αρχεία με chNN-",
    )
    p_fix.add_argument(
        "-o",
        "--site",
        default=None,
        help="Root του site (προεπιλογή: ../site δίπλα στο agent ή ./site)",
    )
    p_fix.add_argument(
        "--rename",
        action="store_true",
        help="Μετονομασία αρχείων ασκήσεων σε chNN-<slug>.js και ενημέρωση index.html",
    )
    p_fix.set_defaults(func=fix_stems_command)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
