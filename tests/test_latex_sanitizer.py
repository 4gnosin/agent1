"""
tests/test_latex_sanitizer.py
Unit tests για τον απολυμαντή LaTeX (src.utils.latex_sanitizer).
"""

import pytest
from src.utils.latex_sanitizer import sanitize_text, sanitize_obj, sanitize_js_file, sanitize_directory


class TestControlCharCollisions:
    """Έλεγχος αποκατάστασης συγκρούσεων ASCII control characters (από κακά escapes JSON)."""

    def test_recovers_tab_text_in_math(self):
        # \t (0x09) + ext -> \text μέσα σε μαθηματικό τύπο
        bad_input = "$\\sigma_{\x09ext{επ}}$"
        sanitized = sanitize_text(bad_input)
        assert "\\text{επ}" in sanitized

    def test_recovers_tab_tau(self):
        # \t (0x09) + au -> \tau
        bad_input = "διάτμηση \x09au"
        assert "\\tau" in sanitize_text(bad_input)

    def test_unwraps_naked_text_leak_in_prose(self):
        # Σε πεζό κείμενο, το \text{...} αφαιρείται σωστά ώστε να μείνει καθαρό ελληνικό κείμενο
        bad_input = "Ερώτημα \x09ext{Δύναμη}"
        assert sanitize_text(bad_input) == "Ερώτημα Δύναμη"

    def test_recovers_backspace_beta(self):
        # \b (0x08) + eta -> \beta
        bad_input = "γωνία \x08eta"
        assert "\\beta" in sanitize_text(bad_input)

    def test_recovers_formfeed_frac(self):
        # \f (0x0c) + rac -> \frac
        bad_input = "\x0crac{a}{b}"
        assert "\\frac{a}{b}" in sanitize_text(bad_input)

    def test_recovers_carriage_return_rho(self):
        # \r (0x0d) + ho -> \rho
        bad_input = "πυκνότητα \x0dho"
        assert "\\rho" in sanitize_text(bad_input)


class TestCyrillicHomoglyphs:
    """Έλεγχος εξομάλυνσης κυριλλικών ομογλύφων σε ελληνικούς χαρακτήρες."""

    def test_replaces_cyrillic_with_greek(self):
        # Cyrillic 'а' (U+0430) and 'е' (U+0435) -> Greek 'α' (U+03B1) and 'ε' (U+03B5)
        cyrillic_str = "\u0430\u0435"
        sanitized = sanitize_text(cyrillic_str)
        assert sanitized == "αε"


class TestGreekTrigonometry:
    """Έλεγχος μετάφρασης λατινικών τριγωνομετρικών συμβόλων σε ελληνικά."""

    def test_sin_to_text_imi(self):
        result = sanitize_text(r"\sin(x)")
        assert r"\text{ημ}(x)" in result

    def test_cos_to_text_syn(self):
        result = sanitize_text(r"\cos(\theta)")
        assert r"\text{συν}(\theta)" in result

    def test_tan_to_text_ef(self):
        result = sanitize_text(r"\tan(\phi)")
        assert r"\text{εφ}(\phi)" in result


class TestUnitsAndSymbols:
    """Έλεγχος αποκατάστασης μονάδων μέτρησης και συμβόλων."""

    def test_degrees_celsius_normalization(self):
        bad_unit = r"^\circ\text{C}"
        sanitized = sanitize_text(bad_unit)
        assert "°C" in sanitized


class TestSanitizeObject:
    """Έλεγχος αναδρομικής απολύμανσης σύνθετων δομών δεδομένων (dict / list)."""

    def test_dict_and_list_traversal(self):
        data = {
            "title": "Ερώτημα $\\sigma_{\x09ext{max}}$",
            "items": [
                {"prompt": r"\sin(\alpha)", "answer": 42},
                {"prompt": "Καθαρό κείμενο \x09ext{χωρίς διαρροή}", "is_correct": True},
            ],
            "count": 10,
            "none_val": None,
        }
        cleaned = sanitize_obj(data)
        assert r"\text{max}" in cleaned["title"]
        assert r"\text{ημ}(\alpha)" in cleaned["items"][0]["prompt"]
        assert cleaned["items"][1]["prompt"] == "Καθαρό κείμενο χωρίς διαρροή"
        assert cleaned["items"][0]["answer"] == 42
        assert cleaned["items"][1]["is_correct"] is True
        assert cleaned["count"] == 10
        assert cleaned["none_val"] is None


class TestPreserveCleanMath:
    """Έλεγχος ότι σωστά διαμορφωμένοι τύποι δεν αλλοιώνονται."""

    def test_clean_formula_preserved(self):
        formula = r"$F = \sigma_{\text{επ}} \cdot A_1$"
        sanitized = sanitize_text(formula)
        assert r"\sigma_{\text{επ}}" in sanitized
        assert r"\cdot" in sanitized


class TestCodeDirectoryGuardrails:
    """Έλεγχος ότι αρχεία λογικής / κώδικα (app.js, simulations) προστατεύονται από τροποποίηση."""

    def test_app_js_is_never_touched(self, tmp_path):
        from pathlib import Path
        js_dir = tmp_path / "site" / "js"
        js_dir.mkdir(parents=True)
        dummy_app = js_dir / "app.js"
        dummy_app.write_text("var temp = '60 °C'; /^\\([\\s\\S]*\\)$/.test(x);", encoding="utf-8")

        result = sanitize_js_file(dummy_app)
        assert result is False
        assert dummy_app.read_text(encoding="utf-8") == "var temp = '60 °C'; /^\\([\\s\\S]*\\)$/.test(x);"

    def test_simulations_are_never_touched(self, tmp_path):
        sim_dir = tmp_path / "site" / "simulations"
        sim_dir.mkdir(parents=True)
        dummy_sim = sim_dir / "fwg.js"
        dummy_sim.write_text("var label = '60 °C';", encoding="utf-8")

        result = sanitize_js_file(dummy_sim)
        assert result is False
        assert dummy_sim.read_text(encoding="utf-8") == "var label = '60 °C';"

    def test_sanitize_directory_skips_code_folders(self, tmp_path):
        site_dir = tmp_path / "site"
        js_dir = site_dir / "js"
        sim_dir = site_dir / "simulations"
        js_dir.mkdir(parents=True)
        sim_dir.mkdir(parents=True)
        (js_dir / "app.js").write_text("var x = 1;", encoding="utf-8")
        (sim_dir / "sim.js").write_text("var y = 2;", encoding="utf-8")

        mod, tot = sanitize_directory(site_dir)
        assert mod == 0
        assert tot == 0
