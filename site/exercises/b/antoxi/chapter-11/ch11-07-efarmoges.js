window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch11-29001",
    "group": "ch11-07-efarmoges",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "29001",
    "code": "Θέμα 4<sup>ο</sup> · #29001",
    "title": "#29001 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch11-07",
    "sourceOrder": 2,
    "stem": "Μία άτρακτος κυκλικής διατομής, έχει επιτρεπόμενη διατμητική τάση $\\tau_{\\text{επ}} = 10^7\\text{ N/m}^2$ και καταπονείται σε στρέψη από μία ροπή $M_t$. Θεωρώντας τις τυχόν άλλες επιβαρύνσεις κάμψης κ.λπ. μη σημαντικές, υπολογίζουμε την καταπόνηση της ατράκτου μόνο σε στρέψη. Η διάμετρος της ατράκτου είναι $d = 1\\text{ m}$.\n\nΙσχύει ο τύπος:\n$$\\tau = \\frac{16 \\cdot M_t}{\\pi \\cdot d^3} \\le \\tau_{\\text{επ}}$$",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τη διατομή $A$ της ατράκτου.",
        "formula": "$A = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 0.785,
        "unit": "m²",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο εμβαδού κύκλου $A = \\frac{\\pi \\cdot d^2}{4}$ με $d = 1\\text{ m}$ και $\\pi \\approx 3,14$.",
        "explain": "Η διατομή υπολογίζεται ως: \\( A = \\frac{3,14 \\cdot (1\\text{ m})^2}{4} = 0,785\\text{ m}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη στρεπτική ροπή $M_t$.",
        "formula": "$M_t = \\frac{\\tau_{\\text{επ}} \\cdot \\pi \\cdot d^3}{16}$",
        "answer": 1962000,
        "unit": "N·m",
        "tolerance": 0.02,
        "hint": "Λύστε την ανισότητα ως προς $M_t$ χρησιμοποιώντας την οριακή τιμή $\\tau_{\\text{επ}}$.",
        "explain": "Από τη σχέση \\( \\tau_{\\text{επ}} = \\frac{16 \\cdot M_t}{\\pi \\cdot d^3} \\), προκύπτει \\( M_t = \\frac{10^7 \\cdot 3,14 \\cdot (1)^3}{16} = 19,62 \\cdot 10^5\\text{ N}\\cdot\\text{m} \\)."
      }
    ]
  }
]
);
