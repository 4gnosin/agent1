"""
tests/test_latex_sanitizer_regressions.py
Εκτεταμένα regression tests για όλες τις κατηγορίες σφαλμάτων LaTeX, delimiters,
μονάδων KaTeX και ασφαλούς επεξεργασίας αρχείων JS περιεχομένου.
"""

from pathlib import Path

from src.utils.latex_sanitizer import (
    sanitize_formula_field,
    sanitize_js_file,
    sanitize_js_source,
    sanitize_math_inner,
    sanitize_obj,
    sanitize_text,
)


class TestBraceAndCircPreservation:
    def test_circ_never_eats_closing_brace_of_frac_or_sqrt(self):
        s1 = r"$\Sigma = \sqrt{F_1^2 + F_2^2 + 2 \cdot F_1 \cdot F_2 \cdot \cos 60^{\circ}}$"
        res1 = sanitize_text(s1)
        assert res1.count("{") == res1.count("}")
        assert r"60^{\circ}}$" in res1 or r"60{}^{\circ}}$" in res1

        s2 = r"$\alpha = \frac{720^{\circ}}{K}$"
        res2 = sanitize_text(s2)
        assert res2.count("{") == res2.count("}")
        assert r"\frac{720^{\circ}}{K}" in res2 or r"\frac{720{}^{\circ}}{K}" in res2

    def test_stray_escaped_brace_before_circ_repaired(self):
        assert sanitize_math_inner(r"T_2 = +879\ \{}^{\circ}\text{C}") == r"T_2 = +879\ {}^{\circ}\text{C}"
        assert sanitize_math_inner(r"\text{{}^{\circ}\text{C}}") == r"{}^{\circ}\text{C}"


class TestDelimitersAndNestedDollars:
    def test_mismatched_inline_delim_fixed_without_crossing_formulas(self):
        src = (
            r"Πρώτος τύπος: \[ A = B \] και μετά \( Q = 500\text{ kJ} \]. "
            r"Δεύτερος: \( \Delta U = 300\text{ kJ} \) και \[ W = 200\text{ kJ} \]."
        )
        res = sanitize_text(src)
        assert r"\[ A = B \]" in res
        assert r"\( Q = 500\text{ kJ} \)" in res
        assert r"\( \Delta U = 300\text{ kJ} \)" in res
        assert r"\[ W = 200\text{ kJ} \]" in res
        assert r"\( Q = 500\text{ kJ} \]" not in res

    def test_strips_nested_dollars_inside_parens_and_frac(self):
        assert sanitize_text(r"\( $M_{\Sigma}$ \]") == r"\( M_{\Sigma} \)"
        assert sanitize_text(r"\( F_x, F_{$\psi$} \]") == r"\( F_x, F_{\psi} \)"
        assert sanitize_text(r"$\tau_{\text{επ}} = \frac${$\tau_{\text{θρ}}$}{$\nu$}") == (
            r"$\tau_{\text{επ}} = \frac{\tau_{\text{θρ}}}{\nu}$"
        )
        assert sanitize_text(r"$L = \frac{\lambda \cdot A}{$$\dot{Q}$$} \cdot (\theta_1 - \theta_2)$") == (
            r"$L = \frac{\lambda \cdot A}{\dot{Q}} \cdot (\theta_1 - \theta_2)$"
        )
        res = sanitize_text(r"$A_{f\,\text{νέο}}$ = $\frac{Q_\alpha}${$V_{\text{νέο}}$}")
        assert res == r"$A_{f\,\text{νέο}} = \frac{Q_\alpha}{V_{\text{νέο}}}$"

    def test_aligned_trailing_dollar_normalized_to_double(self):
        src = "$$\\begin{aligned}\na &= b \\\\\nc &= d\n\\end{aligned}$"
        res = sanitize_text(src)
        assert res.startswith("$$") and res.endswith("$$")


class TestUnitsSpacingAndMacros:
    def test_undefined_katex_unit_commands_wrapped_in_text(self):
        assert sanitize_math_inner(r"500\kJ") == r"500\text{ kJ}"
        assert sanitize_math_inner(r"40\s") == r"40\text{ s}"
        assert sanitize_math_inner(r"P_2 = +1{,}6\ \bar") == r"P_2 = +1{,}6\ \text{bar}"
        assert sanitize_math_inner(r"0{,}1\ \m³") == r"0{,}1\ \text{m}^3"
        assert sanitize_math_inner(r"100\text{ N}/\mm²") == r"100\text{ N}/\text{mm}^2"
        # Το \bar{x} παραμένει μαθηματικός τόνος
        assert sanitize_math_inner(r"\bar{x} + \bar y") == r"\bar{x} + \bar y"

    def test_repairs_broken_text_it_leak_and_unit_superscript(self):
        assert sanitize_text(r"καταπονείται σε $\text$it{εφελκυσμός}") == "καταπονείται σε εφελκυσμός"
        assert sanitize_text(r"σε $N/\text{mm}$² ή MPa") == r"σε $N/\text{mm}^2$ ή MPa"

    def test_glued_cdot_and_delta_separated_preserving_cdots(self):
        assert sanitize_math_inner(r"\Deltap_{\text{ολ}} = a \cdotm + b + \cdots") == (
            r"\Delta p_{\text{ολ}} = a \cdot m + b + \cdots"
        )

    def test_unwraps_frac_inside_text_block(self):
        res = sanitize_math_inner(r"100\text{ \frac{W}{m^2\cdot K}}")
        assert r"\text{" not in res or r"\frac{\text{W}}" in res
        assert res == r"100\,\frac{\text{W}}{\text{m}^2\cdot \text{K}}"


class TestProseProtectionAndFormulaField:
    def test_wraps_subscripts_at_sentence_end_without_touching_backticks(self):
        s = "Υπολογισμός του h_2. Προσοχή στο `c_michanourgiki_01.png` και F_Δ."
        res = sanitize_text(s)
        assert "$h_2$." in res
        assert "$F_Δ$." in res
        assert "`c_michanourgiki_01.png`" in res

    def test_cyrillic_pi_homoglyph_normalized(self):
        assert sanitize_text("Пρόωση και Пεραστός") == "Πρόωση και Περαστός"

    def test_formula_field_unifies_split_pure_formulas_but_keeps_greek_notes(self):
        assert sanitize_formula_field(r"q = $h_3$ - $h_2$") == r"$q = h_3 - h_2$"
        assert sanitize_formula_field(r"v(t=27°C, $\phi=20$\%)") == r"$v(t=27{}^{\circ}\text{C}, \phi=20\%)$"
        assert sanitize_formula_field(r"$V_\alpha =$ $\frac{Q_\alpha}{A_f}$") == r"$V_\alpha = \frac{Q_\alpha}{A_f}$"
        mixed = r"$t_{wB} = 11{,}5^{\circ}$ C (από ψυχρομετρικό χάρτη)"
        res_mixed = sanitize_formula_field(mixed)
        assert "(από ψυχρομετρικό χάρτη)" in res_mixed
        assert res_mixed.startswith(r"$t_{wB} = 11{,}5")


class TestJsStringLiteralRewriter:
    def test_repairs_subject_data_push_without_breaking_js_or_paths(self, tmp_path: Path):
        js_path = tmp_path / "site" / "content" / "b" / "thermod" / "chapter-05" / "01-sec-01.js"
        js_path.parent.mkdir(parents=True)
        # Σκόπιμα μονό backslash \kJ, \bar, ασύζευκτο \( ... \], και filename path
        js_path.write_text(
            '(function () {\n'
            '  window.SUBJECT_DATA = window.SUBJECT_DATA || {};\n'
            '  window.SUBJECT_DATA["b/thermod"].sections.push({\n'
            '    "id": "ch05-sec-01",\n'
            '    "image": "images/b/thermod/c_test_kJ.png",\n'
            '    "text": "Ενέργεια \\\\( Q = 500\\text{ kJ} \\\\] και \\\\( \\Delta U = 300\\kJ \\\\]."\n'
            '  });\n'
            '})();\n',
            encoding="utf-8",
        )
        changed = sanitize_js_file(js_path)
        assert changed is True
        new_src = js_path.read_text(encoding="utf-8")
        assert 'window.SUBJECT_DATA["b/thermod"].sections.push({' in new_src
        assert '"images/b/thermod/c_test_kJ.png"' in new_src
        assert r"\\( Q = 500\\text{ kJ} \\)" in new_src
        assert r"\\( \\Delta U = 300\\text{ kJ} \\)" in new_src
        # Δεύτερο πέρασμα πρέπει να είναι idempotent
        assert sanitize_js_file(js_path) is False

    def test_sanitize_js_source_preserves_animation_math_and_fixes_bar(self):
        src = (
            'window.EXERCISE_ANIMATIONS["ch06-16235"] = {\n'
            '  "α": {\n'
            '    "steps": [\n'
            '      { "math": "P_2 = +1{,}6\\\\ \\bar", "note": "Εύρεση P_2." }\n'
            '    ]\n'
            '  }\n'
            '};\n'
        )
        out = sanitize_js_source(src)
        assert r'"P_2 = +1{,}6\\ \\text{bar}"' in out
        assert r'"Εύρεση $P_2$."' in out

    def test_word_boundary_never_injects_backspace_and_cleans_bmodul_bmode(self):
        # Ποτέ να μη γίνεται modul -> \bmodul ή mode -> \bmode από word boundary
        assert sanitize_text("Το διαμετρικό βήμα (modul) $m$ του τροχού.") == "Το διαμετρικό βήμα (modul) $m$ του τροχού."
        assert sanitize_text("λειτουργεί σε (limp-home mode) ασφαλείας") == "λειτουργεί σε (limp-home mode) ασφαλείας"
        # Επιδιόρθωση ήδη χαλασμένων πεζών λέξεων \bmodul / \bmode
        assert sanitize_text(r"Το διαμετρικό βήμα (\bmodul) $m$ του τροχού.") == "Το διαμετρικό βήμα (modul) $m$ του τροχού."
        assert sanitize_text(r"(limp-home \bmode)") == "(limp-home mode)"
        # Αληθινό ASCII backspace (0x08) εξακολουθεί να αποκαθίσταται σωστά
        assert sanitize_text("$\x08eta + a$") == r"$\beta + a$"
        assert sanitize_text("$\x08egin{aligned}x\\end{aligned}$") == r"$\begin{aligned}x\end{aligned}$"

    def test_naked_le_comparison_wrapped_in_math(self):
        assert sanitize_text(r"είναι πάντα \le 1") == r"είναι πάντα $\le 1$"
