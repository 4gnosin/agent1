window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch09-18926",
    "group": "ch09-03-posotika-megethi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18926",
    "bankCode": "18926",
    "title": "#18926 — Θέμα 4<sup>ο</sup> (9.3)",
    "units": 25,
    "theory": "antoxi-ch09",
    "sourceOrder": 2,
    "stem": "Δοκός ορθογωνικής διατομής με πλευρές $a = 2\\text{ cm}$ και $\\beta = 3\\text{ cm}$ καταπονείται σε διάτμηση με δύναμη $F = 6000\\text{ daN}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "Να υπολογίσετε: α) Την ορθογωνική διατομή $S$. β) Την διατμητική τάση $\\tau$.",
        "prompt": "Την ορθογωνική διατομή $S$.",
        "formula": "$S = a \\cdot \\beta$",
        "answer": 6,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τις δύο πλευρές $a$ και $\\beta$.",
        "explain": "Η διατομή είναι: \\( S = 2\\text{ cm} \\cdot 3\\text{ cm} = 6\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την διατμητική τάση $\\tau$.",
        "formula": "\\tau = \\frac{F}{S}",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη $F$ με τη διατομή $S$.",
        "explain": "Η διατμητική τάση είναι: \\( \\tau = \\frac{6000\\text{ daN}}{6\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\)."
      }
    ]
  },
  {
    "id": "ch09-19766",
    "group": "ch09-03-posotika-megethi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #19766",
    "bankCode": "19766",
    "title": "#19766 — Θέμα 4<sup>ο</sup> (9.3)",
    "units": 25,
    "theory": "antoxi-ch09",
    "sourceOrder": 3,
    "stem": "Ήλος καταπονείται σε διάτμηση με δύναμη $F = 502{,}4\\text{ daN}$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α. Να υπολογιστεί η διατομή $S$ της κυκλικής διατομής του ήλου, εάν η διάμετρός του είναι $d = 8\\text{ mm} = 0{,}8\\text{ cm}$. Δίνεται $\\pi = 3{,}14$.",
        "prompt": "Να υπολογιστεί η διατομή $S$ της κυκλικής διατομής του ήλου σε $\\text{cm}^2$.",
        "formula": "S = \\frac{\\pi \\cdot d^2}{4}",
        "answer": 0.5024,
        "unit": "cm²",
        "tolerance": 0.001,
        "hint": "Μετατρέψτε τα $8\\text{ mm}$ σε $\\text{cm}$ ($0{,}8\\text{ cm}$) και εφαρμόστε τον τύπο της διατομής.",
        "explain": "Με $d = 0{,}8\\text{ cm}$, η διατομή είναι: \\( S = \\frac{3{,}14 \\cdot (0{,}8)^2}{4} = 0{,}5024\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η αναπτυσσόμενη διατμητική τάση $\\tau$.",
        "formula": "\\tau = \\frac{F}{S}",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη με τη διατομή.",
        "explain": "Η τάση είναι: \\( \\tau = \\frac{502{,}4\\text{ daN}}{0{,}5024\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Εάν η επιτρεπόμενη διατμητική τάση είναι $\\tau_{\\text{επ}} = 900\\text{ daN/cm}^2$, να εξετάσετε αν αντέχει ο ήλος.",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Ο ήλος δεν αντέχει, διότι η επιτρεπόμενη τάση είναι μικρότερη από την αναπτυσσόμενη."
          },
          {
            "id": "b",
            "text": "Ο ήλος αντέχει, διότι η επιτρεπόμενη τάση είναι μεγαλύτερη."
          }
        ],
        "answer": "a",
        "explain": "Αφού $\\tau_{\\text{επ}} = 900\\text{ daN/cm}^2 < \\tau = 1000\\text{ daN/cm}^2$, η επιτρεπόμενη τάση είναι μικρότερη από την αναπτυσσόμενη, άρα ο ήλος δεν αντέχει."
      }
    ]
  },
  {
    "id": "ch09-20265",
    "group": "ch09-03-posotika-megethi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #20265",
    "bankCode": "20265",
    "title": "#20265 — Θέμα 4<sup>ο</sup> (9.3)",
    "units": 25,
    "theory": "antoxi-ch09",
    "sourceOrder": 4,
    "stem": "Ένας ήλος ενώνει δύο μεταλλικά ελάσματα. Ο κορμός του ήλου καταπονείται σε διάτμηση από δύναμη $F = 28.260\\text{ daN}$. Η διατομή του ήλου είναι ίση με $S = 7{,}065\\text{ cm}^2$ και η επιτρεπόμενη τάση σε διάτμηση είναι $\\tau_{\\text{επ}} = 3.000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α. Να υπολογιστεί η διάμετρος $d$ του ήλου. β. Να υπολογιστεί η αναπτυσσόμενη διατμητική τάση $\\tau$. γ. Να γίνει έλεγχος αντοχής του ήλου σε διάτμηση.",
        "prompt": "Να υπολογιστεί η διάμετρος $d$ του ήλου (σε $\\text{cm}$).",
        "formula": "d = \\sqrt{\\frac{S \\cdot 4}{\\pi}}",
        "answer": 3,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Λύστε τον τύπο της διατομής ως προς $d$.",
        "explain": "Από τον τύπο $S = \\frac{\\pi d^2}{4} \\Rightarrow d = \\sqrt{\\frac{7{,}065 \\cdot 4}{3{,}14}} = \\sqrt{9} = 3\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η αναπτυσσόμενη διατμητική τάση $\\tau$.",
        "formula": "\\tau = \\frac{F}{S}",
        "answer": 4000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη $F$ με τη διατομή $S$.",
        "explain": "Η τάση είναι: \\( \\tau = \\frac{28.260\\text{ daN}}{7{,}065\\text{ cm}^2} = 4000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Να γίνει έλεγχος αντοχής του ήλου σε διάτμηση.",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Ο ήλος δεν θα αντέξει στη διατμητική τάση και θα σπάσει, διότι η αναπτυσσόμενη τάση είναι μεγαλύτερη από την επιτρεπόμενη."
          },
          {
            "id": "b",
            "text": "Ο ήλος αντέχει, διότι η αναπτυσσόμενη τάση είναι μικρότερη από την επιτρεπόμενη."
          }
        ],
        "answer": "a",
        "explain": "Επειδή $\\tau = 4000\\text{ daN/cm}^2 > \\tau_{\\text{επ}} = 3000\\text{ daN/cm}^2$, ο ήλος δεν αντέχει."
      }
    ],
    "image": "images/b/antoxi/chapter-09/b_antoxi_ch09_#20265_fig01.png"
  },
  {
    "id": "ch09-20470",
    "group": "ch09-03-posotika-megethi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #20470",
    "bankCode": "20470",
    "title": "#20470 — Θέμα 4<sup>ο</sup> (9.3)",
    "units": 25,
    "theory": "antoxi-ch09",
    "sourceOrder": 5,
    "stem": "Άτρακτος καταπονείται σε διάτμηση από μέγιστο διατμητικό φορτίο $F = 3140\\text{ daN}$. Ο συντελεστής ασφαλείας ισούται $\\nu = 2$ και η διατμητική τάση θραύσης του υλικού είναι $\\tau_{\\text{θρ}} = 2000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "Να υπολογίσετε: α) την επιτρεπόμενη διατμητική τάση $\\tau_{\\text{επ}}$. β) την καταπονούμενη κυκλική διατομή $S$. γ) την διάμετρο της ατράκτου $d$.",
        "prompt": "Την επιτρεπόμενη διατμητική τάση $\\tau_{\\text{επ}}$.",
        "formula": "\\tau_{\\text{επ}} = \\frac{\\tau_{\\text{θρ}}}{\\nu}",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την τάση θραύσης με τον συντελεστή ασφαλείας.",
        "explain": " \\( \\tau_{\\text{επ}} = \\frac{2000}{2} = 1000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την καταπονούμενη κυκλική διατομή $S$.",
        "formula": "S = \\frac{F}{\\tau_{\\text{επ}}}",
        "answer": 3.14,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη δύναμη $F$ με την $\\tau_{\\text{επ}}.",
        "explain": " \\( S = \\frac{3140}{1000} = 3{,}14\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Την διάμετρο της ατράκτου $d$.",
        "formula": "d = \\sqrt{\\frac{4S}{\\pi}}",
        "answer": 2,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τη διάμετρο από τον τύπο της κυκλικής διατομής.",
        "explain": " \\( d = \\sqrt{\\frac{4 \\cdot 3{,}14}{3{,}14}} = \\sqrt{4} = 2\\text{ cm} \\)."
      }
    ]
  }
]
);
