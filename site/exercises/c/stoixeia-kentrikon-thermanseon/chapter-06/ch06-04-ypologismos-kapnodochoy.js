window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch06-24112",
    "group": "ch06-04-ypologismos-kapnodochoy",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #24112",
    "bankCode": "24112",
    "title": "#24112 — Θέμα 2<sup>ο</sup>",
    "units": 25,
    "theory": "ch06-04-ypologismos-kapnodochoy",
    "stem": "Σε εγκατάσταση κεντρικής θέρμανσης η ισχύς του λέβητα είναι $Q_{\\lambda} = 90.000\\text{ Kcal/h}$ (αντιστοιχία $Q_{\\lambda} = 104{,}6\\text{ kW}$), ενώ η καπνοδόχος του είναι ορθογωνικής διατομής με ύψος $H = 20\\text{ m}$. Δίδεται $\\sqrt{20} = 4{,}4$.",
    "givens": [
      {
        "label": "Q_λ",
        "value": "90.000 Kcal/h (104,6 kW)"
      },
      {
        "label": "H",
        "value": "20 m"
      },
      {
        "label": "√20",
        "value": "4,4"
      }
    ],
    "sourceOrder": 7,
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α. Να υπολογίσετε τη διατομή $A$ της καπνοδόχου.",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24112_fig01.webp",
        "prompt": "Υπολογίστε την απαιτούμενη διατομή $A$ της καπνοδόχου σε $\\text{cm}^2$ (χρησιμοποιώντας τον Πίνακα 1 για $n = 1200$).",
        "formula": "$m = 2{,}75 \\cdot Q_{\\lambda}$, $A = \\frac{m}{n \\cdot \\sqrt{H}}$",
        "answer": 540,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "$m = 2{,}75 \\cdot 104{,}6 = 287{,}65\\text{ kg/h}$. Από τον Πίνακα 1 επιλέγεται $n = 1200$. $A = \\frac{287{,}65}{1200 \\cdot 4{,}4}$.",
        "explain": "1) Ωριαία παραγωγή καυσαερίων: $m = 2{,}75 \\cdot 104{,}6 = 287{,}65\\text{ kg/h}$.\n2) Από τον Πίνακα 1, για $Q = 90.000\\text{ Kcal/h}$ και $H = 20\\text{ m}$, λαμβάνουμε συντελεστή μορφής $n = 1200$.\n3) Διατομή $A = \\frac{287{,}65}{1200 \\cdot 4{,}4} \\approx 0{,}054\\text{ m}^2 = 540\\text{ cm}^2$.",
        "images": [
          "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24112_fig01.webp",
          "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24112_fig02.webp"
        ]
      },
      {
        "kind": "mc",
        "subq": "β",
        "subqPrompt": "β. Να προσδιορίσετε τις διαστάσεις της διατομής $A$ με βάση τον Πίνακα 2.",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24112_fig02.webp",
        "prompt": "Με βάση τον Πίνακα 2, ποιες είναι οι κατάλληλες διαστάσεις διατομής της καπνοδόχου για ύψος $H = 20\\text{ m}$ και θερμική ισχύ $Q_{\\lambda} = 104{,}6\\text{ kW}$;",
        "options": [
          {
            "id": "a",
            "text": "20 cm × 27 cm"
          },
          {
            "id": "b",
            "text": "15 cm × 20 cm"
          },
          {
            "id": "c",
            "text": "25 cm × 30 cm"
          },
          {
            "id": "d",
            "text": "20 cm × 20 cm"
          }
        ],
        "answer": "a",
        "explain": "Από τον Πίνακα 2, για ύψος καπνοδόχου $H = 20\\text{ m}$ και θερμική ισχύ $Q_{\\lambda} = 104{,}6\\text{ kW}$, επιλέγουμε διαστάσεις διατομής $20\\text{ cm} \\times 27\\text{ cm}$."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "γ",
        "prompt": "γ. Ποιες είναι οι διαστάσεις (μήκος, πλάτος) στο σκαρίφημα της διατομής της καπνοδόχου;",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24112_sol01.webp",
        "options": [
          {
            "id": "a",
            "text": "Μήκος = 27 cm, Πλάτος = 20 cm, Εμβαδόν A = 540 cm²"
          },
          {
            "id": "b",
            "text": "Μήκος = 30 cm, Πλάτος = 25 cm, Εμβαδόν A = 750 cm²"
          },
          {
            "id": "c",
            "text": "Μήκος = 20 cm, Πλάτος = 20 cm, Εμβαδόν A = 400 cm²"
          },
          {
            "id": "d",
            "text": "Μήκος = 35 cm, Πλάτος = 20 cm, Εμβαδόν A = 700 cm²"
          }
        ],
        "answer": "a",
        "explain": "Το σκαρίφημα απεικονίζει ορθογώνια διατομή με Μήκος = $27\\text{ cm}$, Πλάτος = $20\\text{ cm}$ και εμβαδόν $A = 20\\text{ cm} \\times 27\\text{ cm} = 540\\text{ cm}^2$."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24112_sol01.webp"
    ]
  },
  {
    "id": "ch06-24122",
    "group": "ch06-04-ypologismos-kapnodochoy",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24122",
    "bankCode": "24122",
    "title": "#24122 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch06-04-ypologismos-kapnodochoy",
    "stem": "Να υπολογιστεί η διατομή της καπνοδόχου σε $\\text{m}^2$, για λέβητα ισχύος $Q_{\\lambda} = 110{,}4\\text{ kW}$ (αντιστοιχία περίπου $Q_{\\lambda} = 95.000\\text{ Kcal/h}$) και για καπνοδόχο ύψους $H = 25\\text{ m}$.",
    "givens": [
      {
        "label": "Q_λ",
        "value": "110,4 kW (95.000 Kcal/h)"
      },
      {
        "label": "H",
        "value": "25 m"
      }
    ],
    "sourceOrder": 8,
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-06/c_stoixeia-kentrikon-thermanseon_ch06_#24122_fig01.webp",
        "prompt": "Υπολογίστε τη διατομή της καπνοδόχου $A$ σε $\\text{m}^2$ (χρησιμοποιώντας τον διδόμενο πίνακα για τον υπολογισμό του συντελεστή μορφής $n$).",
        "formula": "$m = 2{,}75 \\cdot Q_{\\lambda}$, $A = \\frac{m}{n \\cdot \\sqrt{H}}$",
        "answer": 0.05,
        "unit": "m²",
        "tolerance": 0.05,
        "hint": "Από τον πίνακα για $Q_{\\lambda} = 95.000\\text{ Kcal/h}$ και $H = 25\\text{ m}$ προκύπτει $n = 1100$. $m = 2{,}75 \\cdot 110{,}4 = 303{,}6\\text{ kg/h}$.",
        "explain": "1) Από τον πίνακα συντελεστή μορφής για $Q_{\\lambda} = 95.000\\text{ Kcal/h}$ και $H = 25\\text{ m} \\Rightarrow n = 1100$.\n2) Παραγωγή καυσαερίων: $m = 2{,}75 \\cdot 110{,}4 = 303{,}6\\text{ kg/h}$.\n3) Διατομή $A = \\frac{303{,}6}{1100 \\cdot \\sqrt{25}} = \\frac{303{,}6}{1100 \\cdot 5} = \\frac{303{,}6}{5500} \\approx 0{,}05\\text{ m}^2$."
      }
    ]
  }
]
);
