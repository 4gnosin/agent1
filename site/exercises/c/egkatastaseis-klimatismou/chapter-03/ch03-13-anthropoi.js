window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-25272",
    "group": "ch03-13-anthropoi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25272",
    "code": "Θέμα 4<sup>ο</sup> · #25272",
    "title": "#25272 — Θέμα 4$^{ο}$ (4.1–4.3)",
    "units": 25,
    "theory": "ch03-13-anthropoi",
    "sourceOrder": 13,
    "stem": "Σε θέατρο παρευρίσκονται $100$ θεατές και $15$ χορευτές. Δίνονται:\n- Αισθητό φορτίο θεατή: $57\\text{ W}$, Λανθάνον φορτίο θεατή: $45\\text{ W}$\n- Αισθητό φορτίο χορευτή: $131\\text{ W}$, Λανθάνον φορτίο χορευτή: $272\\text{ W}$",
    "items": [
      {
        "subq": "4.1",
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε το συνολικό ψυκτικό φορτίο $q_1$ από τους θεατές σε Watt.",
        "formula": "$q_1 = 100 \\cdot (q_{S,\\text{θεατή}} + q_{L,\\text{θεατή}})$",
        "answer": 10200,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Προσθέστε αισθητό και λανθάνον ανά θεατή και πολλαπλασιάστε επί 100.",
        "explain": "Αισθητό θεατών: $100 \\cdot 57 = 5700\\text{ W}$, λανθάνον: $100 \\cdot 45 = 4500\\text{ W}$. Σύνολο $q_1 = 5700 + 4500 = 10200\\text{ W}$."
      },
      {
        "subq": "4.2",
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε το συνολικό ψυκτικό φορτίο $q_2$ από τους χορευτές σε Watt.",
        "formula": "$q_2 = 15 \\cdot (q_{S,\\text{χορευτή}} + q_{L,\\text{χορευτή}})$",
        "answer": 6045,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Προσθέστε αισθητό και λανθάνον ανά χορευτή και πολλαπλασιάστε επί 15.",
        "explain": "Αισθητό χορευτών: $15 \\cdot 131 = 1965\\text{ W}$, λανθάνον: $15 \\cdot 272 = 4080\\text{ W}$. Σύνολο $q_2 = 1965 + 4080 = 6045\\text{ W}$."
      },
      {
        "subq": "4.3",
        "kind": "calc",
        "prompt": "4.3 Να υπολογίσετε το ολικό ψυκτικό φορτίο $q_T$ από το σύνολο των ατόμων σε Watt.",
        "formula": "$q_T = q_1 + q_2$",
        "answer": 16245,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Προσθέστε τα φορτία θεατών και χορευτών.",
        "explain": "$q_T = 10200 + 6045 = 16245\\text{ W}$."
      }
    ]
  }
]
);
