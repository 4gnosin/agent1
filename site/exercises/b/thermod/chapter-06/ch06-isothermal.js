window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-18710",
    "group": "ch06-isothermal",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18710",
    "code": "Θέμα 4<sup>ο</sup> · #18710",
    "title": "#18710 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 4,
    "givens": [
      {
        "label": "V₁",
        "value": "0,03 m³"
      },
      {
        "label": "P₁",
        "value": "0,9 bar"
      },
      {
        "label": "P₂",
        "value": "9 bar"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1. Υπολογίστε τον τελικό όγκο V₂ (σε m³).",
        "formula": "V₂ = (P₁ · V₁) / P₂",
        "answer": 0.003,
        "unit": "m³",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον νόμο Boyle-Mariotte: P₁ · V₁ = P₂ · V₂",
        "explain": "Από τον νόμο της ισόθερμης μεταβολής: \\( P_1 \\cdot V_1 = P_2 \\cdot V_2 \\Rightarrow V_2 = \\frac{0,9 \\text{ bar} \\cdot 0,03 \\text{ m}^3}{9 \\text{ bar}} = 0,003 \\text{ m}^3 \\)."
      },
      {
        "kind": "mc",
        "prompt": "4.2. Πώς απεικονίζεται η ισόθερμη μεταβολή σε ένα διάγραμμα P – V;",
        "options": [
          {
            "id": "a",
            "text": "Ως ευθεία παράλληλη στον άξονα των πιέσεων"
          },
          {
            "id": "b",
            "text": "Ως ισοσκελής υπερβολή"
          },
          {
            "id": "c",
            "text": "Ως ευθεία παράλληλη στον άξονα των όγκων"
          },
          {
            "id": "d",
            "text": "Ως παραβολή"
          }
        ],
        "answer": "b",
        "explain": "Σε διάγραμμα \\( P-V \\), η ισόθερμη μεταβολή τελείου αερίου απεικονίζεται ως κλάδο ισοscελούς υπερβολής."
      }
    ]
  },
  {
    "id": "ch06-20976",
    "group": "ch06-isothermal",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20976",
    "code": "Θέμα 4<sup>ο</sup> · #20976",
    "title": "#20976 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 5,
    "givens": [
      {
        "label": "W",
        "value": "-200 KJ (προσφερόμενο έργο)"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "4.3. Υπολογίστε τη θερμότητα Q που συναλλάχθηκε με το σύστημα (σε KJ).",
        "formula": "Q = W",
        "answer": -200,
        "unit": "KJ",
        "tolerance": 0.01,
        "hint": "Σε ισόθερμη μεταβολή \\( \\Delta U = 0 \\), άποτε \\( Q = W \\). Το έργο που προσφέρεται στο σύστημα είναι αρνητικό.",
        "explain": "Από τον πρώτο θερμοδυναμικό νόμο \\( Q = \\Delta U + W \\). Επειδή η μεταβολή είναι ισόθερμη, \\( \\Delta U = 0 \\), οπότε \\( Q = W = -200 \\text{ KJ} \\). Η θερμότητα είναι αρνητική, άρα αποδόθηκε από το αέριο προς το περιβάλλον."
      }
    ]
  },
  {
    "id": "ch06-20986",
    "group": "ch06-isothermal",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20986",
    "code": "Θέμα 4<sup>ο</sup> · #20986",
    "title": "#20986 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 6,
    "givens": [
      {
        "label": "W_αποδιδ.",
        "value": "300 KJ"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "4.3. Υπολογίστε τη θερμότητα Q που συναλλάχθηκε με το σύστημα (σε KJ).",
        "formula": "Q = W",
        "answer": 300,
        "unit": "KJ",
        "tolerance": 0.01,
        "hint": "Σε ισόθερμη εκτόνωση \\( \\Delta U = 0 \\) και \\( Q = W \\).",
        "explain": "Σε μία ισόθερμη εκτόνωση, η μεταβολή της εσωτερικής ενέργειας είναι \\( \\Delta U = 0 \\). Οπότε, από τον πρώτο θερμοδυναμικό νόμο \\( Q = W \\), άρα \\( Q = 300 \\text{ KJ} \\). Η θερμότητα είναι θετική, δηλαδή δόθηκε στο σύστημα."
      }
    ]
  },
  {
    "id": "ch06-20987",
    "group": "ch06-isothermal",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20987",
    "code": "Θέμα 4<sup>ο</sup> · #20987",
    "title": "#20987 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 7,
    "givens": [
      {
        "label": "P₁",
        "value": "2 bar"
      },
      {
        "label": "V₁",
        "value": "0,75 m³"
      },
      {
        "label": "P₂",
        "value": "5 bar"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολογίστε τον τελικό όγκο V₂ του αερίου (σε m³).",
        "formula": "V₂ = (V₁ · P₁) / P₂",
        "answer": 0.3,
        "unit": "m³",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη σχέση V₂ = (V₁ · P₁) / P₂.",
        "explain": "Από τον νόμο της ισόθερμης μεταβολής: \\( V_2 = \\frac{V_1 \\cdot P_1}{P_2} = \\frac{0,75 \\text{ m}^3 \\cdot 2 \\text{ bar}}{5 \\text{ bar}} = 0,3 \\text{ m}^3 \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Υπολογίστε τη μεταβολή της εσωτερικής ενέργειας ΔU (σε J).",
        "formula": "ΔU = 0",
        "answer": 0,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Σε ισόθερμη μεταβολή η θερμοκρασία είναι σταθερή.",
        "explain": "Η μεταβολή είναι ισόθερμη, οπότε η θερμοκρασία παραμένει σταθερή και η εσωτερική ενέργεια δεν μεταβάλλεται: \\( \\Delta U = 0 \\)."
      }
    ]
  }
]
);
