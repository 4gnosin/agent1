window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch08-28453",
    "group": "ch08-03-xarakteristika-megethi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28453",
    "bankCode": "28453",
    "title": "#28453 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch08-03-xarakteristika-megethi",
    "sourceOrder": 5,
    "stem": "Σε εγκατάσταση κεντρικής θέρμανσης, με κυκλοφορητή που λειτουργεί σε $n_1$ στροφές, υπολογίστηκαν τα ακόλουθα μεγέθη:\n- Παροχή νερού $V_1 = 8\\text{ m}^3/\\text{h}$\n- Μανομετρικό ύψος $H_1 = 2\\text{ m Σ.Ν.}$ (μέτρα στήλης νερού).",
    "givens": [
      {
        "label": "V₁",
        "value": "8 m³/h"
      },
      {
        "label": "H₁",
        "value": "2 m Σ.Ν."
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογίσετε την παροχή νερού του κυκλοφορητή $V_2$ στη περίπτωση που τριπλασιάσουμε τις στροφές του ($n_2 = 3 \\cdot n_1$).",
        "formula": "$\\frac{V_1}{V_2} = \\frac{n_1}{n_2} \\implies V_2 = 3 \\cdot V_1$",
        "answer": 24,
        "unit": "m³/h",
        "tolerance": 0.01,
        "explain": "$\\frac{V_1}{V_2} = \\frac{n_1}{n_2} \\implies \\frac{V_1}{V_2} = \\frac{n_1}{3 \\cdot n_1} = \\frac{1}{3} \\implies V_2 = 3 \\cdot V_1 = 3 \\cdot 8 = 24\\text{ m}^3/\\text{h}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να υπολογίσετε το μανομετρικό ύψος του κυκλοφορητή $H_2$ στη περίπτωση που διπλασιάσουμε τις στροφές του ($n_2 = 2 \\cdot n_1$).",
        "formula": "$\\frac{H_1}{H_2} = \\left(\\frac{n_1}{n_2}\\right)^2 \\implies H_2 = 4 \\cdot H_1$",
        "answer": 8,
        "unit": "m Σ.Ν.",
        "tolerance": 0.01,
        "explain": "$\\frac{H_1}{H_2} = \\left(\\frac{n_1}{n_2}\\right)^2 \\implies \\frac{H_1}{H_2} = \\left(\\frac{n_1}{2 \\cdot n_1}\\right)^2 = \\frac{1}{4} \\implies H_2 = 4 \\cdot H_1 = 4 \\cdot 2 = 8\\text{ m Σ.Ν.}$"
      }
    ]
  }
]
);
