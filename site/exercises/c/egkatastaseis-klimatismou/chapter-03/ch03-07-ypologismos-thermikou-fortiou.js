window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-25268",
    "group": "ch03-07-ypologismos-thermikou-fortiou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25268",
    "code": "Θέμα 4<sup>ο</sup> · #25268",
    "title": "#25268 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch03-07-ypologismos-thermikou-fortiou",
    "sourceOrder": 7,
    "stem": "Εξωτερικός τοίχος θερμομονωμένης κατοικίας έχει μήκος $10\\text{ m}$ και ύψος $3\\text{ m}$ ($U = 0,58\\text{ W}/(\\text{m}^2\\cdot\\text{K})$). Η εξωτερική θερμοκρασία είναι $t_o = 0\\text{ }^\\circ\\text{C}$ και η εσωτερική $t_i = 20\\text{ }^\\circ\\text{C}$.",
    "items": [
      {
        "subq": "α",
        "kind": "calc",
        "prompt": "α) Να βρείτε τις θερμικές απώλειες του τοίχου σε Watt.",
        "formula": "$q = A \\cdot U \\cdot \\Delta t$",
        "answer": 348,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το εμβαδόν $A$ και εφαρμόστε τον τύπο $q = A \\cdot U \\cdot \\Delta t$.",
        "explain": "$A = 3 \\cdot 10 = 30\\text{ m}^2$. $\\Delta t = 20 - 0 = 20\\text{ }^\\circ\\text{C}$. $q = 30 \\cdot 0,58 \\cdot 20 = 348\\text{ W}$."
      },
      {
        "subq": "β",
        "kind": "calc",
        "prompt": "β) Αν τα συνολικά φορτία από αγωγιμότητα για ολόκληρη την κατοικία είναι $2000\\text{ W}$ και τα φορτία από αέρα διείσδυσης είναι $500\\text{ W}$, να υπολογίσετε το σύνολο των θερμικών φορτίων λαμβάνοντας προσαύξηση $100\\%$ για τα φορτία αγωγιμότητας σε Watt.",
        "formula": "$q_{\\text{ολ.}} = (q_{\\text{αγωγ.}} + \\text{προσαύξηση}) + q_{\\text{διείσδ.}}$",
        "answer": 4500,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Προσαυξήστε τα φορτία αγωγιμότητας κατά $100\\%$ και προσθέστε τα φορτία διείσδυσης.",
        "explain": "Προσαύξηση $100\\%$ σε $2000\\text{ W}$ σημαίνει επιπλέον $2000\\text{ W}$, οπότε τα φορτία αγωγιμότητας γίνονται $4000\\text{ W}$. Με τα $500\\text{ W}$ διείσδυσης, το σύνολο είναι $4000 + 500 = 4500\\text{ W}$."
      }
    ]
  }
]
);
