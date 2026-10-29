window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-25272",
    "group": "ch03-human-cooling-loads",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25272",
    "code": "Θέμα 4<sup>ο</sup> · #25272",
    "title": "#25272 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "3.13",
    "sourceOrder": 13,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε το συνολικό ψυκτικό φορτίο από τους 100 θεατές σε W (αισθητό 57 W, λανθάνον 45 W ανά θεατή).",
        "formula": "q1 = 100 · (57 + 45)",
        "answer": 10200,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Υπολογίστε άθροισμα αισθητού και λανθάνοντος ανά θεατή και πολλαπλασιάστε επί 100.",
        "explain": " \\( q_{S1} = 100 \\cdot 57 = 5700\\text{ W} \\), \\( q_{L1} = 100 \\cdot 45 = 4500\\text{ W} \\). Ολικό \\( q_1 = 5700 + 4500 = 10200\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε το συνολικό ψυκτικό φορτίο από τους 15 χορευτές σε W (αισθητό 131 W, λανθάνον 272 W ανά χορευτή).",
        "formula": "q2 = 15 · (131 + 272)",
        "answer": 6045,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Υπολογίστε άθροισμα αισθητού και λανθάνοντος ανά χορευτή και πολλαπλασιάστε επί 15.",
        "explain": " \\( q_{S2} = 15 \\cdot 131 = 1965\\text{ W} \\), \\( q_{L2} = 15 \\cdot 272 = 4080\\text{ W} \\). Ολικό \\( q_2 = 1965 + 4080 = 6045\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Να υπολογίσετε το ολικό ψυκτικό φορτίο από το σύνολο των ατόμων στο θέατρο σε W.",
        "formula": "qT = q1 + q2",
        "answer": 16245,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Προσθέστε τα φορτία θεατών και χορευτών.",
        "explain": " \\( q_T = 10200\\text{ W} + 6045\\text{ W} = 16245\\text{ W} \\)."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#25272_sol01.png"
    ]
  }
]
);
