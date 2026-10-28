"""
ScriptTagsGenerator - Δημιουργεί τα έτοιμα HTML <script> tags για το index.html του 4gnosin.github.io.
"""

from __future__ import annotations

from pathlib import Path

if __package__ is None or __package__ == "":
    import sys
    sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))
    from src.utils.structure import sort_exercise_files, sort_theory_files
else:
    from ..utils.structure import sort_exercise_files, sort_theory_files


class ScriptTagsGenerator:
    """
    Παράγει τα απαραίτητα <script> tags στη σωστή σειρά φόρτωσης για το 4gnosin.github.io.
    """

    @staticmethod
    def relative_src(path: Path) -> str:
        parts = path.parts
        for marker in ("content", "exercises"):
            if marker in parts:
                return "/".join(parts[parts.index(marker) :])
        return str(path).replace("\\", "/")

    @classmethod
    def generate_tags(
        cls,
        theory_files: list[Path | str],
        groups_file: Path | str | None,
        exercise_files: list[Path | str],
        relative_to_repo: bool = True,
    ) -> str:
        """
        Επιστρέφει ένα block HTML κώδικα με τα script tags.
        """
        del relative_to_repo
        lines: list[str] = []

        lines.append("<!-- ========================================================== -->")
        lines.append("<!-- 4gnosin.github.io - AUTO-GENERATED SCRIPTS FOR INDEX.HTML -->")
        lines.append("<!-- ========================================================== -->")

        if theory_files:
            lines.append("\n<!-- 1. Θεωρία Κεφαλαίου (Sections) -->")
            for path in sort_theory_files([Path(item) for item in theory_files]):
                lines.append(f'<script src="{cls.relative_src(path)}"></script>')

        combined_exercises = [Path(item) for item in exercise_files]
        if groups_file:
            groups_path = Path(groups_file)
            if groups_path not in combined_exercises:
                combined_exercises.insert(0, groups_path)

        if combined_exercises:
            lines.append("\n<!-- 2. Ομάδες & αρχεία ασκήσεων (σειρά κεφαλαίου) -->")
            for path in sort_exercise_files(combined_exercises):
                lines.append(f'<script src="{cls.relative_src(path)}"></script>')

        lines.append("\n<!-- ========================================================== -->\n")
        return "\n".join(lines)
