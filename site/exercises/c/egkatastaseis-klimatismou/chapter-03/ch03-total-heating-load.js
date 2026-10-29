window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-25268",
    "group": "ch03-total-heating-load",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25268",
    "code": "Θέμα 4<sup>ο</sup> · #25268",
    "title": "#25268 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "3.7",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να βρείτε τις θερμικές απώλειες του τοίχου σε W.",
        "formula": "q = A · U · Δt",
        "answer": 348,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "A = 10 · 3 = 30 m², U = 0.58, Δt = 20 - 0 = 20 °C.",
        "explain": " \\( A = 30\\text{ m}^2 \\), \\( U = 0{,}58\\text{ W}/(\\text{m}^2\\cdot\\text{K}) \\), \\( \\Delta t = 20^\\circ\\text{C} \\). \\( q = 30 \\cdot 0{,}58 \\cdot 20 = 348\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε το σύνολο των θερμικών φορτίων με προσαύξηση 100% στα φορτία αγωγιμότητας (2000 W) και 500 W από αέρα διείσδυσης.",
        "formula": "q_tot = q_agog · (1 + prop) + q_dief",
        "answer": 4500,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Προσαυξήστε τα 2000 W κατά 100% (δηλαδή +2000 W) και προσθέστε τα 500 W.",
        "explain": "Με προσαύξηση 100%, τα φορτία αγωγιμότητας γίνονται \\( 2000 + 2000 = 4000\\text{ W} \\). Συνδυάζοντας με τα 500 W του αέρα διείσδυσης έχουμε \\( 4000 + 500 = 4500\\text{ W} \\)."
      }
    ]
  }
]
);
