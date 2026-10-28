window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-16235",
    "group": "ch06-isochoric",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16235",
    "code": "Θέμα 4<sup>ο</sup> · #16235",
    "title": "#16235 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 8,
    "givens": [
      {
        "label": "t₁",
        "value": "22 °C"
      },
      {
        "label": "P₁",
        "value": "1 bar"
      },
      {
        "label": "t₂",
        "value": "199 °C"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολογίστε την τελική πίεση P₂ στην κατάσταση 2 (σε bar).",
        "formula": "P₂ = P₁ · (T₂ / T₁)",
        "answer": 1.6,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τις θερμοκρασίες σε Kelvin (T = t + 273) και εφαρμόστε τον νόμο Gay-Lussac για ισόχωρη μεταβολή (P₁/T₁ = P₂/T₂).",
        "explain": "Μετατροπή σε Kelvin: \\( T_1 = 22 + 273 = 295 \\text{ K} \\), \\( T_2 = 199 + 273 = 472 \\text{ K} \\). Από τον νόμο \\( \\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\Rightarrow P_2 = 1 \\text{ bar} \\cdot \\frac{472}{295} = 1,6 \\text{ bar} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Υπολογίστε το έργο W που αποδόθηκε στο περιβάλλον από αυτή τη μεταβολή (σε J).",
        "formula": "W = 0",
        "answer": 0,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Σε ισόχωρη μεταβολή ο όγκος είναι σταθερός.",
        "explain": "Η αλλαγή είναι ισόχωρη (σταθερός όγκος, \\( \\Delta V = 0 \\)), οπότε δεν υπάρχει έργο ογκομεταβολής: \\( W = 0 \\)."
      }
    ]
  }
]
);
