window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch11-29001",
    "group": "ch11-torsion-relations",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "29001",
    "code": "Θέμα 4<sup>ο</sup> · #29001",
    "title": "#29001 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch11-torsion",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολογίστε τη διατομή A της ατράκτου.",
        "formula": "A = (π · d²) / 4",
        "answer": 0.785,
        "unit": "m²",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο A = (π · d²) / 4 με d = 1 m.",
        "explain": "Η διατομή υπολογίζεται ως: \\( A = \\frac{3{,}14 \\cdot (1\\text{ m})^2}{4} = 0{,}785\\text{ m}^2 \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε τη στρεπτική ροπή Mt.",
        "formula": "Mt = (τ_επ · π · d³) / 16",
        "answer": 1962000,
        "unit": "N·m",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο Mt = (τ_επ · π · d³) / 16.",
        "explain": "Η ροπή υπολογίζεται ως: \\( M_t = \\frac{10^7 \\cdot 3{,}14 \\cdot (1\\text{ m})^3}{16} = 19{,}62 \\cdot 10^5\\text{ N}\\cdot\\text{m} = 1962000\\text{ N}\\cdot\\text{m} \\)."
      }
    ]
  }
]
);
