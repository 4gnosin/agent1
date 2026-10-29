window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-26852",
    "group": "ch03-ventilation-cooling-loads",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26852",
    "code": "Θέμα 4<sup>ο</sup> · #26852",
    "title": "#26852 — Θέμα 4<sup>ο</sup> (4.1–4.4)",
    "units": 25,
    "theory": "3.12",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε την απαιτούμενη παροχή Q νωπού αέρα για 25 άτομα (6 L/s ανά άτομο) σε L/s.",
        "formula": "Q = 6 · atoma",
        "answer": 150,
        "unit": "L/s",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε τα άτομα (25) επί την παροχή ανά άτομο (6 L/s).",
        "explain": " \\( Q = 6\\text{ L/s} \\cdot 25 = 150\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε το αισθητό ψυκτικό φορτίο qS σε W (με \\( \\Delta t = 10^\\circ\\text{C} \\)).",
        "formula": "qS = 1.2 · Q · Δt",
        "answer": 1800,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε qS = 1.2 · Q · Δt (με Q σε L/s).",
        "explain": " \\( q_S = 1{,}2 \\cdot 150 \\cdot 10 = 1800\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Να υπολογίσετε το λανθάνον ψυκτικό φορτίο qL σε W (με \\( \\Delta W = 0{,}0012 \\)).",
        "formula": "qL = 3000 · Q · ΔW",
        "answer": 540,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε qL = 3000 · Q · ΔW.",
        "explain": " \\( q_L = 3000 \\cdot 150 \\cdot 0{,}0012 = 540\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.4 Να υπολογίσετε το συνολικό ψυκτικό φορτίο qT σε W.",
        "formula": "qT = qS + qL",
        "answer": 2340,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Προσθέστε αισθητό και λανθάνον φορτίο.",
        "explain": " \\( q_T = 1800\\text{ W} + 540\\text{ W} = 2340\\text{ W} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#26852_fig01.png"
  }
]
);
