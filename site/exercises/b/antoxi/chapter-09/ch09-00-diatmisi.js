window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch09-19029",
    "group": "ch09-00-diatmisi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #19029",
    "bankCode": "19029",
    "title": "#19029 — Θέμα 4$^{ο}$ (9.0)",
    "units": 25,
    "theory": "antoxi-ch09",
    "sourceOrder": 1,
    "stem": "Ήλος καταπονείται σε διάτμηση με δύναμη $F = 6.280\\text{ daN}$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α. Να υπολογιστεί η διατομή $S$ της κυκλικής διατομής του ήλου, εάν η διάμετρός του είναι $d = 2\\text{ cm}$. Δίνεται $\\pi = 3{,}14$.",
        "prompt": "Να υπολογιστεί η διατομή $S$ της κυκλικής διατομής του ήλου.",
        "formula": "$S = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 3.14,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο της κυκλικής διατομής.",
        "explain": "Η διατομή του ήλου είναι: \\( S = \\frac{3{,}14 \\cdot 2^2}{4} = 3{,}14\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η αναπτυσσόμενη διατμητική τάση $\\tau$.",
        "formula": "$\\tau = \\frac{F}{S}$",
        "answer": 2000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη $F$ με τη διατομή $S$.",
        "explain": "Η διατμητική τάση είναι: \\( \\tau = \\frac{6.280\\text{ daN}}{3{,}14\\text{ cm}^2} = 2.000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Εάν η επιτρεπόμενη διατμητική τάση είναι $\\tau_{\\text{επ}} = 2.100\\text{ daN/cm}^2$, να εξετάσετε αν αντέχει ο ήλος.",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Ο ήλος αντέχει στη διάτμιση, διότι η επιτρεπόμενη τάση είναι μεγαλύτερη από την αναπτυσσόμενη."
          },
          {
            "id": "b",
            "text": "Ο ήλος δεν αντέχει στη διάτμιση, διότι η επιτρεπόμενη τάση είναι μικρότερη."
          },
          {
            "id": "c",
            "text": "Ο ήλος αστοχεί ακριβώς στο όριο."
          }
        ],
        "answer": "a",
        "explain": "Αφού η επιτρεπόμενη τάση $\\tau_{\\text{επ}} = 2.100\\text{ daN/cm}^2 > \\tau = 2.000\\text{ daN/cm}^2$, ο ήλος αντέχει στη διάτμιση."
      }
    ]
  }
]
);
