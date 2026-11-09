"""
agent_memory.py - Κεντρική Μόνιμη Μνήμη & Διαχείριση Κανόνων για τους Agents του 4gnosin.github.io.

Καλύπτει:
1. Ασκήσεις Τράπεζας Θεμάτων
2. Θεωρία & Διδακτικές Σημειώσεις
3. Animations (Manim-Style)
4. Θέματα με Εικόνες & Σχήματα Βιβλίου
5. Παιδαγωγικό Στυλ ΕΠΑ.Λ.
6. LaTeX & Πρότυπα Κώδικα
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

MEMORY_DIR = Path(__file__).resolve().parent.parent.parent / "data" / "agent_memory"
RULES_FILE = MEMORY_DIR / "rules_and_standards.json"


class AgentMemory:
    """
    Διαχειρίζεται τη μόνιμη μνήμη, τα διδάγματα (lessons learned)
    και τους κανόνες ποιότητας για όλους τους AI generators.
    """

    def __init__(self, rules_file: Path | str | None = None) -> None:
        self.rules_file = Path(rules_file) if rules_file else RULES_FILE
        self._data: dict[str, Any] = {}
        self.reload()

    def reload(self) -> None:
        """Επαναφορτώνει τη μνήμη από το αρχείο JSON."""
        if self.rules_file.exists():
            try:
                self._data = json.loads(self.rules_file.read_text(encoding="utf-8"))
            except Exception:
                self._data = {"pillars": {}}
        else:
            self._data = {"pillars": {}}

    def get_rules(self, category: str | None = None) -> list[str]:
        """
        Επιστρέφει τη λίστα κανόνων για μία συγκεκριμένη κατηγορία
        ή για όλες τις κατηγορίες συνδυαστικά.
        """
        pillars = self._data.get("pillars", {})
        if category and category in pillars:
            return pillars[category].get("rules", [])

        # Αν δεν οριστεί κατηγορία, συγκεντρώνει όλους τους κανόνες
        all_rules = []
        for cat_info in pillars.values():
            all_rules.extend(cat_info.get("rules", []))
        return all_rules

    def get_prompt_injection(self, category: str | None = None) -> str:
        """
        Παράγει ένα πλήρες markdown block κανόνων μνήμης για ενσωμάτωση στο System Prompt
        οποιουδήποτε AI Generator (Theory, Exercises, Animations).
        """
        pillars = self._data.get("pillars", {})
        selected_pillars = {}

        if category and category in pillars:
            selected_pillars[category] = pillars[category]
            # Πάντα περιλαμβάνουμε pedagogy και latex_and_code ως βασικούς πυλώνες
            for base_cat in ["pedagogy", "latex_and_code"]:
                if base_cat in pillars and base_cat != category:
                    selected_pillars[base_cat] = pillars[base_cat]
        else:
            selected_pillars = pillars

        lines = [
            "\n<!-- ===================================================================== -->",
            "<!-- ΠΥΡΗΝΑΣ ΜΟΝΙΜΗΣ ΜΝΗΜΗΣ AGENT & ΑΠΑΡΑΒΙΑΣΤΟΙ ΚΑΝΟΝΕΣ (GOLD STANDARDS)   -->",
            "<!-- ===================================================================== -->",
            "ΠΡΕΠΕΙ ΝΑ ΑΚΟΛΟΥΘΗΣΕΙΣ ΑΠΑΡΕΓΚΛΙΤΑ ΤΟΥΣ ΠΑΡΑΚΑΤΩ ΚΑΝΟΝΕΣ ΠΟΥ ΚΑΘΟΡΙΣΤΗΚΑΝ",
            "ΑΠΟ ΤΟΝ ΕΠΟΠΤΗ ΚΑΘΗΓΗΤΗ ΚΑΙ ΤΟ ΠΡΟΤΥΠΟ ΤΗΣ ΠΛΑΤΦΟΡΜΑΣ:\n",
        ]

        for cat_key, cat_data in selected_pillars.items():
            lines.append(f"### Πυλώνας: {cat_data.get('title', cat_key)}")
            for idx, r in enumerate(cat_data.get("rules", []), 1):
                lines.append(f"{idx}. {r}")
            lines.append("")

        return "\n".join(lines)

    def record_lesson(self, category: str, rule: str) -> None:
        """
        Καταγράφει έναν νέο κανόνα/μάθημα στη μόνιμη μνήμη.
        """
        rule = rule.strip()
        if not rule:
            return

        pillars = self._data.setdefault("pillars", {})
        if category not in pillars:
            cat_titles = {
                "exercises": "Ασκήσεις Τράπεζας Θεμάτων",
                "theory": "Θεωρία & Διδακτικές Σημειώσεις",
                "animation": "Διαδραστικά Animations Επίλυσης (Manim-Style)",
                "images": "Σχήματα & Εικόνες από Σχολικά Βιβλία και Τράπεζα",
                "pedagogy": "Παιδαγωγικό Μοντέλο & Διδακτικό Ύφος ΕΠΑ.Λ.",
                "latex_and_code": "LaTeX, Μαθηματικά & Πρότυπα Κώδικα",
            }
            pillars[category] = {
                "title": cat_titles.get(category, category.title()),
                "rules": [],
            }

        rules_list = pillars[category].setdefault("rules", [])
        if rule not in rules_list:
            rules_list.append(rule)
            self.save()

    def save(self) -> None:
        """Αποθηκεύει τη μνήμη πίσω στο αρχείο JSON."""
        self.rules_file.parent.mkdir(parents=True, exist_ok=True)
        self.rules_file.write_text(
            json.dumps(self._data, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )

    def validate_code_standards(self, text: str) -> list[str]:
        """
        Ελέγχει αν το παραχθέν κείμενο/κώδικας παραβιάζει τους κανόνες της μνήμης.
        Επιστρέφει λίστα προειδοποιήσεων/σφαλμάτων.
        """
        warnings = []
        # 1. Έλεγχος λατινικής τριγωνομετρίας
        if re.search(r"\\(?:sin|cos|tan|cot)\b", text):
            warnings.append("Εντοπίστηκε λατινική τριγωνομετρία (\\sin, \\cos, \\tan). Απαιτείται \\text{ημ}, \\text{συν}, \\text{εφ}.")

        # 2. Έλεγχος απαγόρευσης αναφοράς ΙΕΠ
        if re.search(r"\bΙΕΠ\b|\bΙ\.Ε\.Π\.\b", text, re.IGNORECASE):
            warnings.append("Εντοπίστηκε αναφορά στον όρο 'ΙΕΠ' (απαγορεύεται ρητά).")

        # 3. Έλεγχος μακροσκελούς οριζόντιας ισότητας (A = B = C = D)
        if re.search(r"=[^=\n]+=[^=\n]+=", text) and "aligned" not in text:
            warnings.append("Εντοπίστηκε οριζόντια αλυσίδα ισοτήτων. Απαιτείται κατακόρυφη στοίχιση (aligned με \\\\ &=).")

        return warnings


# Global Singleton για άμεση χρήση
_memory_instance: AgentMemory | None = None


def get_agent_memory() -> AgentMemory:
    """Επιστρέφει το κοινό αντικείμενο AgentMemory."""
    global _memory_instance
    if _memory_instance is None:
        _memory_instance = AgentMemory()
    return _memory_instance
