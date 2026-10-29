window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-23896",
    "group": "ch03-infiltration-heat-loads",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23896",
    "code": "Θέμα 4<sup>ο</sup> · #23896",
    "title": "#23896 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "3.6",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε τον ολικό όγκο Q του αέρα διείσδυσης στον χώρο σε L/s.",
        "formula": "Q = (V · N_ac / 3.6) + (atoma · 5)",
        "answer": 150,
        "unit": "L/s",
        "tolerance": 0.02,
        "hint": "Υπολογίστε τον όγκο V του χώρου, τον αέρα από χαραμάδες και τον αέρα από την είσοδο ατόμων.",
        "explain": " \\( V = 10 \\cdot 20 \\cdot 3 = 600\\text{ m}^3 \\). \\( Q_1 = \\frac{600 \\cdot 0{,}6}{3{,}6} = 100\\text{ L/s} \\). \\( Q_2 = 10 \\cdot 5 = 50\\text{ L/s} \\). Ολικό \\( Q = 100 + 50 = 150\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε τις θερμικές απώλειες q από τον αέρα διείσδυσης σε W.",
        "formula": "q = C · Q · ΔT",
        "answer": 2700,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε q = C · Q · ΔT με C = 1.2 kJ/(m³·K) και Q σε m³/s ή μετατρέψτε σωστά τις μονάδες.",
        "explain": " \\( \\Delta T = 293 - 278 = 15\\text{ K} \\). Με \\( C = 1{,}2\\text{ kJ}/(\\text{m}^3\\cdot\\text{K}) \\) και \\( Q = 150\\text{ L/s} = 0{,}15\\text{ m}^3/\\text{s} \\), \\( q = 1{,}2 \\cdot 1000 \\cdot 0{,}15 \\cdot 15 = 2700\\text{ W} \\)."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#23896_sol01.png"
    ]
  }
]
);
