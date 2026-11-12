"""
tests/test_calc_animator.py
Unit tests για το Manim Animation pipeline (src.tools.calc_animator),
συμπεριλαμβανομένων των 4-βηματικών αναλυτικών λύσεων via Gemini API.
"""

from __future__ import annotations

import json
from types import SimpleNamespace

import pytest

import src.tools.calc_animator as calc_animator
from src.validators.site_validator import SiteValidator


def _sample_item_and_meta():
    meta = {
        "id": "ch14-99999",
        "title": "Κοχλίες Κίνησης",
        "code": "Θέμα #99999",
        "theory": "Κοχλίες κίνησης και γεωμετρία σπειρώματος.",
        "stem": "Δίνεται ατέρμονας κοχλίας με μέση διάμετρο d = 40 mm και γωνία κλίσης 6°.",
        "bankCode": "99999",
    }
    item = {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί το βήμα h του κοχλία.",
        "givens": [
            {"label": "Μέση διάμετρος", "value": "$d = 40\\text{ mm}$"},
            {"label": "Γωνία κλίσης", "value": "$\\varphi = 6{}^{\\circ}$"},
        ],
        "formula": "$\\tan\\varphi = \\frac{h}{\\pi \\cdot d}$",
        "answer": 13.2,
        "unit": "mm",
        "explain": "Από τον τύπο $\\text{εφ}\\varphi = \\frac{h}{\\pi \\cdot d}$ προκύπτει $h = \\pi \\cdot 40 \\cdot 0,1051 = 13,2\\text{ mm}$.",
    }
    return item, meta


class TestLocalBuilderHardening:
    def test_handles_prealigned_explain_without_double_ampersand(self):
        item, meta = _sample_item_and_meta()
        item["explain"] = (
            "$\\begin{aligned}\n"
            "h &= \\pi \\cdot d \\cdot \\text{εφ}\\varphi \\\\\n"
            "&= 3{,}14 \\cdot 40 \\cdot 0{,}1051 \\\\\n"
            "&= 13{,}2\\text{ mm}\n"
            "\\end{aligned}$"
        )
        anim = calc_animator.build_animation_locally(item, meta)
        step3_math = anim["steps"][2]["math"]
        assert "&= &=" not in step3_math
        assert step3_math.count(r"\begin{aligned}") == 1
        assert step3_math.count(r"\end{aligned}") == 1
        assert "13{,}2" in step3_math


class TestAiMathAndAnimationNormalization:
    def test_normalize_ai_math_strips_outer_dollars_converts_trig_and_prevents_double_aligned(self):
        raw = (
            "$$\\begin{aligned}\n"
            "F &= m \\cdot g \\cdot \\sin\\alpha\n"
            "\\end{aligned}\\\\\n"
            "\\begin{aligned}\n"
            "\\triangle T &= 10^2\\mm\n"
            "\\end{aligned}$$"
        )
        norm = calc_animator._normalize_ai_math(raw)
        assert "$" not in norm
        assert r"\triangle" not in norm
        assert r"\Delta" in norm
        assert r"\sin" not in norm
        assert r"\text{ημ}" in norm
        assert r"\text{ mm}" in norm
        assert norm.count(r"\begin{aligned}") == 1
        assert norm.count(r"\end{aligned}") == 1

    def test_normalize_ai_math_wraps_plain_multiline_equations(self):
        raw = r"h = \pi \cdot d \cdot \tan\varphi \\ h = 3{,}14 \cdot 40 \cdot 0{,}105"
        norm = calc_animator._normalize_ai_math(raw)
        assert norm.startswith(r"\begin{aligned}")
        assert norm.endswith(r"\end{aligned}")
        assert r"\text{εφ}" in norm

    def test_normalize_ai_animation_enforces_4_steps_highlight_and_fallbacks(self):
        item, meta = _sample_item_and_meta()
        fallback = calc_animator.build_animation_locally(item, meta)
        raw_ai = {
            "title": "Υπολογισμός βήματος $h$",
            "steps": [
                {
                    "step": 2,
                    "kicker": "Βήμα 2: Αναλυτική Επίλυση Τύπου",
                    "text": "Επιλύουμε τον τύπο $\\text{$h$}$ ως προς $h$.",
                    "math": "\\begin{aligned}\n\\tan\\varphi &= \\frac{h}{\\pi \\cdot d} \\\\\nh &= \\pi \\cdot d \\cdot \\tan\\varphi\n\\end{aligned}",
                    "note": "Προσοχή στην απομόνωση του αγνώστου.",
                    "highlight": True,
                },
                {
                    "step": 1,
                    "kicker": "Βήμα 1: Δεδομένα",
                    "text": "Καταγραφή δεδομένων.",
                    "math": "\\begin{aligned}\nd &= 40\\text{ mm} \\\\\n\\varphi &= 6{}^{\\circ}\n\\end{aligned}",
                    "note": "Έλεγχος μονάδων.",
                    "highlight": False,
                },
                {
                    "step": 3,
                    "kicker": "Βήμα 3: Αντικατάσταση & Πράξεις",
                    "text": "Αντικαθιστούμε τις τιμές.",
                    "math": "\\frac{broken",  # Ασύνδετο άγκιστρο -> ασφαλές fallback στο βήμα 3
                    "note": "Αναλυτικές πράξεις.",
                    "highlight": False,
                },
                {
                    "step": 4,
                    "kicker": "Βήμα 4: Τελικό Αποτέλεσμα",
                    "text": "Το βήμα του κοχλία είναι $13{,}2$ mm.",
                    "math": "$$h = 13{,}2\\text{ mm}$$",
                    "note": "Μονάδα mm.",
                    "highlight": False,
                },
            ],
        }

        norm = calc_animator._normalize_ai_animation(raw_ai, item, meta, fallback=fallback)
        assert [s["step"] for s in norm["steps"]] == [1, 2, 3, 4]
        assert [s["highlight"] for s in norm["steps"]] == [False, False, False, True]
        assert r"\text{εφ}" in norm["steps"][1]["math"]
        assert r"\sin" not in norm["steps"][1]["math"]
        # Βήμα 3 έπεσε με ασφάλεια στο έγκυρο τοπικό fallback λόγω ασύνδετου '{'
        assert norm["steps"][2]["math"] == fallback["steps"][2]["math"]
        # Βήμα 4 απαλλάχθηκε από τα εξωτερικά $$
        assert norm["steps"][3]["math"] == r"h = 13{,}2\text{ mm}"
        assert r"\text{$" not in json.dumps(norm, ensure_ascii=False)

    def test_normalize_ai_animation_falls_back_when_wrong_step_count(self):
        item, meta = _sample_item_and_meta()
        fallback = calc_animator.build_animation_locally(item, meta)
        norm = calc_animator._normalize_ai_animation({"title": "X", "steps": [{"step": 1}]}, item, meta, fallback=fallback)
        assert len(norm["steps"]) == 4
        assert norm["steps"][3]["highlight"] is True


class TestGeminiApiGeneration:
    def test_generate_animation_with_gemini_uses_schema_retry_and_4_step_analytical_prompt(self, monkeypatch):
        item, meta = _sample_item_and_meta()
        captured = {"calls": 0, "configs": [], "models": []}

        ai_payload = {
            "title": "Υπολογισμός βήματος $h$ (#99999)",
            "steps": [
                {
                    "step": 1,
                    "kicker": "Βήμα 1: Συλλογή Δεδομένων",
                    "text": "Καταγράφουμε τα δεδομένα $d$ και $\\varphi$.",
                    "math": "\\begin{aligned}\nd &= 40\\text{ mm} \\\\\n\\varphi &= 6{}^{\\circ}\n\\end{aligned}",
                    "note": "Όλα τα μεγέθη σε συμβατές μονάδες.",
                    "highlight": False,
                },
                {
                    "step": 2,
                    "kicker": "Βήμα 2: Αναλυτική Επίλυση Τύπου",
                    "text": "Εφαρμόζουμε τον βασικό τύπο της εφαπτομένης κλίσης και απομονώνουμε το $h$.",
                    "math": "\\begin{aligned}\n\\text{εφ}\\varphi &= \\frac{h}{\\pi \\cdot d} \\\\\n\\pi \\cdot d \\cdot \\text{εφ}\\varphi &= h \\\\\nh &= \\pi \\cdot d \\cdot \\text{εφ}\\varphi\n\\end{aligned}",
                    "note": "Αναλυτική απομόνωση με χιαστί γινόμενο.",
                    "highlight": False,
                },
                {
                    "step": 3,
                    "kicker": "Βήμα 3: Αντικατάσταση & Αναλυτικές Πράξεις",
                    "text": "Αντικαθιστούμε τις τιμές και εκτελούμε διαδοχικά τους πολλαπλασιασμούς.",
                    "math": "\\begin{aligned}\nh &= 3{,}14 \\cdot 40 \\cdot \\text{εφ}6{}^{\\circ} \\\\\n&= 125{,}6 \\cdot 0{,}1051 \\\\\n&= 13{,}20056\\text{ mm}\n\\end{aligned}",
                    "note": "Τηρούμε τη σειρά πράξεων βήμα-βήμα.",
                    "highlight": False,
                },
                {
                    "step": 4,
                    "kicker": "Βήμα 4: Τελικό Αποτέλεσμα",
                    "text": "Το βήμα του ατέρμονα κοχλία είναι 13,2 mm.",
                    "math": "h = 13{,}2\\text{ mm}",
                    "note": "Αναγραφή μονάδας mm.",
                    "highlight": True,
                },
            ],
        }

        class FakeModels:
            def generate_content(self, *, model, contents, config):
                captured["calls"] += 1
                captured["models"].append(model)
                captured["configs"].append(config)
                if captured["calls"] == 1:
                    raise RuntimeError("503 UNAVAILABLE temporary overload")
                return SimpleNamespace(text=json.dumps(ai_payload, ensure_ascii=False))

        fake_client = SimpleNamespace(models=FakeModels())
        monkeypatch.setattr(calc_animator, "get_gemini_client", lambda: fake_client)
        monkeypatch.setattr("src.utils.api_retry.time.sleep", lambda *_: None)

        result = calc_animator.generate_animation_with_gemini(item, meta)
        assert captured["calls"] == 2
        cfg = captured["configs"][0]
        assert cfg.response_schema is calc_animator.FullAnimationSpec
        assert "Αναλυτική Αλγεβρική Επίλυση" in cfg.system_instruction
        assert "Αναλυτικές Πράξεις" in cfg.system_instruction
        assert len(result["steps"]) == 4
        assert r"\pi \cdot d \cdot \text{εφ}\varphi &= h" in result["steps"][1]["math"]
        assert "125{,}6" in result["steps"][2]["math"]
        assert result["steps"][3]["highlight"] is True

    def test_animate_exercise_file_ai_mode_writes_valid_js_file(self, tmp_path, monkeypatch):
        ex_dir = tmp_path / "site" / "exercises" / "c" / "stoixeia-michanon"
        ex_dir.mkdir(parents=True)
        ex_file = ex_dir / "ch14-exercises.js"
        item, meta = _sample_item_and_meta()
        ex_obj = {
            "id": meta["id"],
            "bankCode": meta["bankCode"],
            "title": meta["title"],
            "code": meta["code"],
            "theory": meta["theory"],
            "stem": meta["stem"],
            "items": [item],
        }
        ex_file.write_text(
            "window.EXERCISES = window.EXERCISES || [];\n"
            f"window.EXERCISES.push({json.dumps(ex_obj, ensure_ascii=False, indent=2)});\n",
            encoding="utf-8",
        )

        # Ανακατεύθυνση base_dir του calc_animator στο tmp_path
        fake_module_file = tmp_path / "src" / "tools" / "calc_animator.py"
        fake_module_file.parent.mkdir(parents=True, exist_ok=True)
        fake_module_file.write_text("# test stub", encoding="utf-8")
        monkeypatch.setattr(calc_animator, "__file__", str(fake_module_file))

        called_modes = {"ai_calls": 0}

        def fake_gen(it, ex_m, base_anim=None):
            called_modes["ai_calls"] += 1
            anim = json.loads(json.dumps(base_anim))
            anim["steps"][1]["math"] = "\\begin{aligned}\nA &= B \\\\\nB &= A\n\\end{aligned}"
            anim["steps"][2]["math"] = "\\begin{aligned}\nA &= 2 \\cdot 3 \\\\\n&= 6\n\\end{aligned}"
            return anim

        monkeypatch.setattr(calc_animator, "generate_animation_with_gemini", fake_gen)
        monkeypatch.setattr(calc_animator.time, "sleep", lambda *_: None)

        count, _logs = calc_animator.animate_exercise_file(
            ex_file,
            target_bank_code="99999",
            overwrite_existing=True,
            mode="ai",
            sync_catalog=False,
        )
        assert count == 1
        assert called_modes["ai_calls"] == 1

        out_anim_file = tmp_path / "site" / "animations" / "c" / "stoixeia-michanon" / "ch14-99999.js"
        assert out_anim_file.is_file()
        assert SiteValidator.validate_animation_file(out_anim_file) == []

        # Έλεγχος και για mode="ai-full" + mode="hybrid" (όταν λείπουν πολυγραμμικά βήματα)
        monkeypatch.setenv("GEMINI_API_KEY", "test-key")
        count_hybrid, _ = calc_animator.animate_exercise_file(
            ex_file,
            target_bank_code="99999",
            overwrite_existing=True,
            mode="hybrid",
            sync_catalog=False,
        )
        assert count_hybrid == 1
        assert called_modes["ai_calls"] == 2

        count_full, _ = calc_animator.animate_exercise_file(
            ex_file,
            target_bank_code="99999",
            overwrite_existing=True,
            mode="ai-full",
            sync_catalog=False,
        )
        assert count_full == 1
        assert called_modes["ai_calls"] == 3
