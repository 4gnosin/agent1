window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch03-18581",
    "group": "ch03-parallel-opposing",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18581",
    "code": "Θέμα 4<sup>ο</sup> · #18581",
    "title": "#18581 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-parallel-opposing",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε το μέτρο της συνισταμένης δύναμης Σ για F1 = 30 N και F2 = 20 N.",
        "formula": "Σ = F1 - F2",
        "answer": 10,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "Σ = F1 - F2",
        "explain": " \\( \\Sigma = 30\\text{ N} - 20\\text{ N} = 10\\text{ N} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Να προσδιορίσετε την απόσταση l1 της συνισταμένης από τη δύναμη F1 (με l = 100 mm).",
        "formula": "l1 = (F2 · l) / (F1 - F2)",
        "answer": 200,
        "unit": "mm",
        "tolerance": 0.02,
        "hint": "F1 · l1 = F2 · (l1 + l)",
        "explain": " \\( 30 \\cdot l_1 = 20 \\cdot (l_1 + 100) \\Rightarrow 10 \\cdot l_1 = 2000 \\Rightarrow l_1 = 200\\text{ mm} \\)."
      }
    ]
  }
]
);
