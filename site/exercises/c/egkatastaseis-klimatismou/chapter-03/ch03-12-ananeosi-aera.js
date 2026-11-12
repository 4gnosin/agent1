window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-26852",
    "group": "ch03-12-ananeosi-aera",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26852",
    "code": "Θέμα 4<sup>ο</sup> · #26852",
    "title": "#26852 — Θέμα 4$^{ο}$ (4.1–4.4)",
    "units": 25,
    "theory": "ch03-12-ananeosi-aera",
    "sourceOrder": 12,
    "stem": "Σε σχολική αίθουσα $1$ εκπαιδευτικός κάνει μάθημα σε $24$ μαθητές (συνολικά $25$ άτομα). Η διαφορά θερμοκρασίας εξωτερικού και εσωτερικού χώρου είναι $\\Delta t = 10^{\\circ}\\text{C}$.",
    "items": [
      {
        "subq": "4.1",
        "kind": "calc",
        "prompt": "4.1 Την απαιτούμενη παροχή $Q$ νωπού αέρα στην αίθουσα σε $\\text{L/s}$.",
        "formula": "$Q = \\text{παροχή/άτομο} \\cdot \\text{συνολικά άτομα}$",
        "answer": 150,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Βρείτε την απαιτούμενη ποσότητα νωπού αέρα ανά άτομο για σχολεία ($6\\text{ L/s}$) και πολλαπλασιάστε επί 25 άτομα.",
        "explain": "Για σχολεία ο απαιτούμενος νωπός αέρας είναι $6\\text{ L/s}$ ανά άτομο. $Q = 6 \\text{ L/s} \\cdot 25 \\text{ άτομα} = 150\\text{ L/s}$."
      },
      {
        "subq": "4.2",
        "kind": "calc",
        "prompt": "4.2 Το αισθητό ψυκτικό φορτίο $q_S$ σε Watt.",
        "formula": "$q_S = 1,2 \\cdot Q \\cdot \\Delta t$",
        "answer": 1800,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $q_S = 1,2 \\cdot Q \\cdot \\Delta t$.",
        "explain": "$q_S = 1,2 \\cdot 150 \\cdot 10 = 1800\\text{ W}$."
      },
      {
        "subq": "4.3",
        "kind": "calc",
        "prompt": "4.3 Το λανθάνον ψυκτικό φορτίο $q_L$ σε Watt (με $\\Delta W = 0,0012$).",
        "formula": "$q_L = 3000 \\cdot Q \\cdot \\Delta W$",
        "answer": 540,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $q_L = 3000 \\cdot Q \\cdot \\Delta W$.",
        "explain": "$q_L = 3000 \\cdot 150 \\cdot 0,0012 = 540\\text{ W}$."
      },
      {
        "subq": "4.4",
        "kind": "calc",
        "prompt": "4.4 Το συνολικό ψυκτικό φορτίο $q_T$ σε Watt.",
        "formula": "$q_T = q_S + q_L$",
        "answer": 2340,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Προσθέστε το αισθητό και το λανθάνον ψυκτικό φορτίο.",
        "explain": "$q_T = 1800 + 540 = 2340\\text{ W}$.",
        "image": "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_26852_fig01.webp"
      }
    ]
  }
]
);
