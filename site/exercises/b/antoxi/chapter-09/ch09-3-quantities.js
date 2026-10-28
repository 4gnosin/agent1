window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch09-18926",
    "group": "ch09-3-quantities",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18926",
    "code": "Θέμα 4<sup>ο</sup> · #18926",
    "title": "#18926 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch09-shear-calc",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε την ορθογωνική διατομή S.",
        "formula": "S = a · β",
        "answer": 6,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τις πλευρές α και β.",
        "explain": "Η διατομή υπολογίζεται ως: \\( S = 2\\text{ cm} \\cdot 3\\text{ cm} = 6\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε την διατμητική τάση τ (με F = 6000 daN).",
        "formula": "τ = F / S",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη F με τη διατομή S.",
        "explain": "Η διατμητική τάση είναι: \\( \\tau = \\frac{6000\\text{ daN}}{6\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\)."
      }
    ]
  },
  {
    "id": "ch09-19766",
    "group": "ch09-3-quantities",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19766",
    "code": "Θέμα 4<sup>ο</sup> · #19766",
    "title": "#19766 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch09-shear-calc",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "calc",
        "prompt": "α. Να υπολογιστεί η διατομή S της κυκλικής διατομής του ήλου, εάν η διάμετρός του είναι d = 8 mm (= 0,8 cm) (Δίνεται π = 3,14).",
        "formula": "S = (π · d²) / 4",
        "answer": 0.5024,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο S = \\( \\frac{\\pi \\cdot d^2}{4} \\). Με d = 0,8 cm.",
        "explain": " \\( S = \\frac{3,14 \\cdot (0,8\\text{ cm})^2}{4} = 0,5024\\text{ cm}^2 \\) (ή \\( 50,24\\text{ mm}^2 \\))."
      },
      {
        "kind": "calc",
        "prompt": "β. Να υπολογιστεί η αναπτυσσόμενη διατμητική τάση τ (με F = 502,4 daN).",
        "formula": "τ = F / S",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη F με τη διατομή S.",
        "explain": " \\( \\tau = \\frac{502,4\\text{ daN}}{0,5024\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "mc",
        "prompt": "γ. Εάν η επιτρεπόμενη διατμητική τάση είναι \\( \\tau_{\\text{επ}} = 900\\text{ daN/cm}^2 \\), να εξετάσετε αν αντέχει ο ήλος.",
        "options": [
          {
            "id": "yes",
            "text": "Ναι, αντέχει επειδή η αναπτυσσόμενη τάση είναι μικρότερη."
          },
          {
            "id": "no",
            "text": "Όχι, δεν αντέχει επειδή η αναπτυσσόμενη τάση είναι μεγαλύτερη από την επιτρεπόμενη."
          }
        ],
        "answer": "no",
        "explain": "Επειδή \\( \\tau = 1000\\text{ daN/cm}^2 > \\tau_{\\text{επ}} = 900\\text{ daN/cm}^2 \\), ο ήλος δεν αντέχει στο διατμητικό φορτίο."
      }
    ]
  },
  {
    "id": "ch09-20191",
    "group": "ch09-3-quantities",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20191",
    "code": "Θέμα 4<sup>ο</sup> · #20191",
    "title": "#20191 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch09-shear-calc",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε την διατομή S (κυκλική διατομή με d = 4 cm, π = 3,14).",
        "formula": "S = (π · d²) / 4",
        "answer": 12.56,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον τύπο S = \\( \\frac{\\pi \\cdot d^2}{4} \\).",
        "explain": " \\( S = \\frac{3,14 \\cdot 4^2}{4} = 3,14 \\cdot 4 = 12,56\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε την διατμητική τάση τ (με F = 12560 daN).",
        "formula": "τ = F / S",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη F με τη διατομή S.",
        "explain": " \\( \\tau = \\frac{12560\\text{ daN}}{12,56\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "mc",
        "prompt": "γ) Να γίνει έλεγχος αντοχής της δοκού (\\( \\tau_{\\text{επ}} = 150\\text{ daN/cm}^2 \\).)",
        "options": [
          {
            "id": "yes",
            "text": "Η δοκός αντέχει."
          },
          {
            "id": "no",
            "text": "Η δοκός δεν αντέχει."
          }
        ],
        "answer": "no",
        "explain": "Επειδή \\( \\tau (1000\\text{ daN/cm}^2) > \\tau_{\\text{επ}} (150\\text{ daN/cm}^2) \\), η δοκός δεν αντέχει."
      }
    ]
  },
  {
    "id": "ch09-20265",
    "group": "ch09-3-quantities",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20265",
    "code": "Θέμα 4<sup>ο</sup> · #20265",
    "title": "#20265 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch09-shear-calc",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "calc",
        "prompt": "α. Να υπολογιστεί η διάμετρος d του ήλου, εάν S = 7,065 cm² και π = 3,14.",
        "formula": "d = \\sqrt{(S · 4) / π}",
        "answer": 3,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Λύστε ως προς d από τον τύπο της διατομής κυκλικής διατομής.",
        "explain": " \\( d = \\sqrt{\\frac{7,065 \\cdot 4}{3,14}} = \\sqrt{9} = 3\\text{ cm} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β. Να υπολογιστεί η αναπτυσσόμενη διατμητική τάση τ (με F = 28260 daN και S = 7,065 cm²).",
        "formula": "τ = F / S",
        "answer": 4000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη F με τη διατομή S.",
        "explain": " \\( \\tau = \\frac{28260\\text{ daN}}{7,065\\text{ cm}^2} = 4000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "mc",
        "prompt": "γ. Να γίνει έλεγχος αντοχής του ήλου σε διάτμηση (\\( \\tau_{\\text{επ}} = 3000\\text{ daN/cm}^2 \\).)",
        "options": [
          {
            "id": "yes",
            "text": "Ο ήλος αντέχει."
          },
          {
            "id": "no",
            "text": "Ο ήλος δεν αντέχει και θα σπάσει."
          }
        ],
        "answer": "no",
        "explain": "Επειδή \\( \\tau (4000\\text{ daN/cm}^2) > \\tau_{\\text{επ}} (3000\\text{ daN/cm}^2) \\), ο ήλος δεν θα αντέξει και θα σπάσει."
      }
    ]
  }
]
);
