window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-16256",
    "group": "ch06-isobaric",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "16256",
    "code": "Θέμα 2<sup>ο</sup> · #16256",
    "title": "#16256 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "mc",
        "prompt": "2.1. 1) Στο διάγραμμα P-V απεικονίζεται μεταβολή με σταθερή πίεση. Τι είδους μεταβολή είναι;",
        "options": [
          {
            "id": "a",
            "text": "ισόθερμη"
          },
          {
            "id": "b",
            "text": "ισοβαρής"
          },
          {
            "id": "c",
            "text": "ισόχωρη"
          }
        ],
        "answer": "b",
        "explain": "Στη μεταβολή που απεικονίζεται με οριζόντια ευθεία παραμένει σταθερή η πίεση, οπότε πρόκειται για ισοβαρή μεταβολή."
      },
      {
        "kind": "mc",
        "prompt": "2.2. 1) Σε μια ισόθερμη μεταβολή, προσφέρθηκε στο αέριο θερμότητα Q = 80 Joule. Το έργο που αποδίδει το αέριο στο περιβάλλον ισούται με:",
        "options": [
          {
            "id": "a",
            "text": "80 Joule"
          },
          {
            "id": "b",
            "text": "40 Joule"
          },
          {
            "id": "c",
            "text": "Δεν μπορούμε να ξέρουμε"
          }
        ],
        "answer": "a",
        "explain": "Στην ισόθερμη μεταβολή \\( \\Delta U = 0 \\). Από τον πρώτο θερμοδυναμικό νόμο \\( Q = \\Delta U + W \\) προκύπτει \\( Q = W = 80 \\text{ J} \\)."
      }
    ]
  },
  {
    "id": "ch06-16258",
    "group": "ch06-isobaric",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16258",
    "code": "Θέμα 4<sup>ο</sup> · #16258",
    "title": "#16258 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 10,
    "givens": [
      {
        "label": "t₁",
        "value": "27 °C"
      },
      {
        "label": "V₁",
        "value": "0,02 m³"
      },
      {
        "label": "t₂",
        "value": "177 °C"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1. Υπολογίστε τον τελικό όγκο V₂ (σε m³).",
        "formula": "V₂ = V₁ · (T₂ / T₁)",
        "answer": 0.03,
        "unit": "m³",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε σε Kelvin: T₁ = 27 + 273 = 300 K, T₂ = 177 + 273 = 450 K. Χρησιμοποιήστε τον νόμο Gay-Lussac για ισοβαρή μεταβολή (V₁/T₁ = V₂/T₂).",
        "explain": " \\( T_1 = 300 \\text{ K} \\), \\( T_2 = 450 \\text{ K} \\). Από \\( \\frac{V_1}{T_1} = \\frac{V_2}{T_2} \\Rightarrow V_2 = 0,02 \\cdot \\frac{450}{300} = 0,03 \\text{ m}^3 \\)."
      },
      {
        "kind": "tf",
        "prompt": "4.2. Θα μεταβληθεί η εσωτερική ενέργεια του αερίου από την αρχική στην τελική κατάσταση;",
        "answer": true,
        "explain": "Σωστό. Η εσωτερική ενέργεια εξαρτάται από τη θερμοκρασία. Εφόσον \\( T_2 > T_1 \\), η εσωτερική ενέργεια αυξάνεται."
      }
    ]
  },
  {
    "id": "ch06-17641",
    "group": "ch06-isobaric",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "17641",
    "code": "Θέμα 2<sup>ο</sup> · #17641",
    "title": "#17641 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 11,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Στην αδιαβατική μεταβολή η θερμότητα που συναλλάσσεται με το σύστημα είναι μηδέν.",
        "answer": true,
        "explain": "Σωστό. Εξ ορισμού, στην αδιαβατική μεταβολή δεν υπάρχει ανταλλαγή θερμότητας με το περιβάλλον (\\( Q = 0 \\))."
      },
      {
        "kind": "tf",
        "prompt": "β. Σε μια αδιαβατική συμπίεση ενός αερίου, το έργο που δίνεται στο σύστημα μετατρέπεται όλο σε αύξηση της εσωτερικής ενέργειας.",
        "answer": true,
        "explain": "Σωστό. Επειδή \\( Q = 0 \\), από τον πρώτο νόμο \\( \\Delta U = W \\), οπότε όλο το έργο μετατρέπεται σε εσωτερική ενέργεια."
      },
      {
        "kind": "tf",
        "prompt": "γ. Σε μια αδιαβατική εκτόνωση ενός αερίου, η θερμοκρασία του δεν μεταβάλλεται.",
        "answer": false,
        "explain": "Λάθος. Σε αδιαβατική εκτόνωση \\( W > 0 \\), οπότε \\( \\Delta U < 0 \\) και η θερμοκρασία του αερίου μειώνεται."
      },
      {
        "kind": "mc",
        "prompt": "2.2. Με ποιον τρόπο (ισόχωρη ή ισοβαρή μεταβολή) θα χρειαστεί να προσφέρουμε λιγότερη θερμότητα για να φτάσουμε σε θερμοκρασία Τ;",
        "options": [
          {
            "id": "a",
            "text": "Μέσω μιας ισόχωρης μεταβολής"
          },
          {
            "id": "b",
            "text": "Μέσω μιας ισοβαρούς μεταβολής"
          },
          {
            "id": "c",
            "text": "Απαιτείται η ίδια ακριβώς θερμότητα"
          }
        ],
        "answer": "a",
        "explain": "Η ισόχωρη θερμότητα είναι \\( Q_v = m \\cdot C_v \\cdot \\Delta T \\) και η ισοβαρή \\( Q_p = m \\cdot C_p \\cdot \\Delta T \\). Επειδή \\( C_p > C_v \\), η απαιτούμενη θερμότητα στην ισόχωρη είναι μικρότερη."
      }
    ]
  },
  {
    "id": "ch06-17650",
    "group": "ch06-isobaric",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "17650",
    "code": "Θέμα 4<sup>ο</sup> · #17650",
    "title": "#17650 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 12,
    "givens": [
      {
        "label": "V₁",
        "value": "0,2 m³"
      },
      {
        "label": "t₁",
        "value": "15 °C"
      },
      {
        "label": "V₂",
        "value": "0,8 m³"
      },
      {
        "label": "W",
        "value": "600 KJ"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολογίστε την αρχική θερμοκρασία T₁ σε κλίμακα Κέλβιν.",
        "formula": "T₁ = t₁ + 273",
        "answer": 288,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στους βαθμούς Κελσίου.",
        "explain": " \\( T_1 = 15 + 273 = 288 \\text{ K} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Υπολογίστε την τελική θερμοκρασία t₂ σε βαθμούς Κελσίου.",
        "formula": "t₂ = (V₂ · T₁ / V₁) - 273",
        "answer": 879,
        "unit": "°C",
        "tolerance": 0.02,
        "hint": "Βρείτε πρώτα την \\( T_2 \\) σε K από τον νόμο \\( V_1/T_1 = V_2/T_2 \\) και αφαιρέστε 273.",
        "explain": " \\( T_2 = \\frac{V_2 \\cdot T_1}{V_1} = \\frac{0,8 \\cdot 288}{0,2} = 1152 \\text{ K} \\). Άρα \\( t_2 = 1152 - 273 = 879 \\text{ °C} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Υπολογίστε την πίεση P (σε KN/m² ή kPa).",
        "formula": "P = W / (V₂ - V₁)",
        "answer": 1000,
        "unit": "KN/m²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο του έργου ισοβαρούς μεταβολής W = P · (V₂ - V₁).",
        "explain": " \\( W = P \\cdot (V_2 - V_1) \\Rightarrow P = \\frac{600 \\text{ KJ}}{0,8 - 0,2 \\text{ m}^3} = \\frac{600}{0,6} = 1000 \\text{ KN/m}^2 \\)."
      }
    ]
  },
  {
    "id": "ch06-18627",
    "group": "ch06-isobaric",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18627",
    "code": "Θέμα 4<sup>ο</sup> · #18627",
    "title": "#18627 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "thermod-ch6",
    "sourceOrder": 13,
    "givens": [
      {
        "label": "P",
        "value": "50 KN/m²"
      },
      {
        "label": "V₁",
        "value": "0,3 m³"
      },
      {
        "label": "V₂",
        "value": "0,6 m³"
      },
      {
        "label": "t₁",
        "value": "27 °C"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "4.2. Υπολογίστε το παραγόμενο έργο ογκομεταβολής W (σε KJ).",
        "formula": "W = P · (V₂ - V₁)",
        "answer": 15,
        "unit": "KJ",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον τύπο W = P · ΔV.",
        "explain": " \\( W = 50 \\text{ KN/m}^2 \\cdot (0,6 - 0,3) \\text{ m}^3 = 50 \\cdot 0,3 = 15 \\text{ KJ} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.3. Υπολογίστε την τελική θερμοκρασία T₂ (σε K).",
        "formula": "T₂ = T₁ · (V₂ / V₁)",
        "answer": 600,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε την \\( t_1 \\) σε Kelvin ( \\( T_1 = 300 \\text{ K} \\) ) και χρησιμοποιήστε τον νόμο Gay-Lussac.",
        "explain": " \\( T_1 = 27 + 273 = 300 \\text{ K} \\). Από \\( \\frac{V_1}{V_2} = \\frac{T_1}{T_2} \\Rightarrow T_2 = 300 \\cdot \\frac{0,6}{0,3} = 600 \\text{ K} \\)."
      }
    ]
  }
]
);
