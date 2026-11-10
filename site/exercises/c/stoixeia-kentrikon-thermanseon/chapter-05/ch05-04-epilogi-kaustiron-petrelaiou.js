window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch05-24088",
    "group": "ch05-04-epilogi-kaustiron-petrelaiou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "24088",
    "code": "Θέμα 4<sup>ο</sup> · #24088",
    "title": "#24088 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "epilogi-kaustiron-petrelaiou",
    "stem": "Σε μία εγκατάσταση κεντρικής θέρμανσης θα πρέπει να επιλεγεί καυστήρας πετρελαίου για λέβητα ισχύος $Q_{\\Lambda} = 720.000\\text{ kcal/h}$ και αντίθλιψης $5\\text{ mbar}$. Η θερμογόνος δύναμη του πετρελαίου είναι $H = 10.000\\text{ kcal/kg}$ και ο βαθμός απόδοσης είναι $\\eta = 90\\%$.",
    "sourceOrder": 6,
    "givens": [
      {
        "label": "Q_L",
        "value": "720000 kcal/h"
      },
      {
        "label": "p",
        "value": "5 mbar"
      },
      {
        "label": "H",
        "value": "10000 kcal/kg"
      },
      {
        "label": "η",
        "value": "0.90"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "α) Η κατανάλωση του καυστήρα $w$ (ωριαία ποσότητα καυσίμου).",
        "prompt": "Υπολογίστε την κατανάλωση καυσίμου $w$ σε $\\text{kg/h}$.",
        "formula": "$w = \\frac{Q_{\\Lambda}}{H \\cdot \\eta}$",
        "answer": 80,
        "unit": "kg/h",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $w = \\frac{Q_{\\Lambda}}{H \\cdot \\eta}$.",
        "explain": "$w = \\frac{Q_{\\Lambda}}{H \\cdot \\eta} = \\frac{720.000}{10.000 \\cdot 0,9} = \\frac{720.000}{9.000} = 80\\text{ kg/h}$."
      },
      {
        "kind": "mc",
        "subq": "4.2",
        "subqPrompt": "β) Ο τύπος του καυστήρα με βάση το διάγραμμα 1.",
        "prompt": "Επιλέξτε τον τύπο του καυστήρα από το διάγραμμα 1 για κατανάλωση $w = 80\\text{ kg/h}$ και αντίθλιψη $5\\text{ mbar}$:",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_24088_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "0E-5.2Ζ"
          },
          {
            "id": "b",
            "text": "0E-5.1Ζ"
          },
          {
            "id": "c",
            "text": "0E-4.1Ζ"
          },
          {
            "id": "d",
            "text": "0E-3.1Ζ"
          }
        ],
        "answer": "a",
        "explain": "Από το διάγραμμα 1, για κατανάλωση καυσίμου $w = 80\\text{ kg/h}$ και αντίθλιψη λέβητα $5\\text{ mbar}$, επιλέγουμε καυστήρα πετρελαίου τύπου **0E-5.2Ζ**.",
        "images": [
          "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_24088_fig01.webp",
          "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_24088_fig01.webp"
        ]
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_24088_sol01.webp"
    ]
  },
  {
    "id": "ch05-24121",
    "group": "ch05-04-epilogi-kaustiron-petrelaiou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "24121",
    "code": "Θέμα 4<sup>ο</sup> · #24121",
    "title": "#24121 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "epilogi-kaustiron-petrelaiou",
    "stem": "Καυστήρας εργάζεται σε λέβητα ισχύος $Q_{\\Lambda} = 64.000\\text{ kcal/h}$ και καταναλώνει $w = 8\\text{ kg/h}$ πετρέλαιο. Η θερμογόνος δύναμη του πετρελαίου είναι $H = 10.000\\text{ kcal/kg}$.",
    "sourceOrder": 7,
    "givens": [
      {
        "label": "Q_L",
        "value": "64000 kcal/h"
      },
      {
        "label": "w",
        "value": "8 kg/h"
      },
      {
        "label": "H",
        "value": "10000 kcal/kg"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Υπολογίστε τον βαθμό απόδοσης $\\eta$ του λέβητα (ως δεκαδικό αριθμό).",
        "formula": "$\\eta = \\frac{Q_{\\Lambda}}{H \\cdot w}$",
        "answer": 0.8,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Από τη σχέση $w = \\frac{Q_{\\Lambda}}{H \\cdot \\eta} \\Rightarrow \\eta = \\frac{Q_{\\Lambda}}{H \\cdot w}$.",
        "explain": "$\\eta = \\frac{Q_{\\Lambda}}{H \\cdot w} = \\frac{64.000}{10.000 \\cdot 8} = \\frac{64.000}{80.000} = 0,8$ (δηλαδή $80\\%$)."
      }
    ]
  },
  {
    "id": "ch05-25897",
    "group": "ch05-04-epilogi-kaustiron-petrelaiou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25897",
    "code": "Θέμα 4<sup>ο</sup> · #25897",
    "title": "#25897 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "epilogi-kaustiron-petrelaiou",
    "stem": "Να υπολογιστεί η ισχύς που μπορεί να δίνει λέβητας πετρελαίου με βαθμό απόδοσης $\\eta = 80\\%$ με αντίθλιψη $6\\text{ mbar}$, όταν συνεργάζεται με καυστήρα OE–5.1Z για τη χαμηλότερη παροχή πετρελαίου, βάσει του διαγράμματος που δίδεται. Η θερμογόνος δύναμη του πετρελαίου είναι $H = 10.000\\text{ kcal/kg}$.",
    "sourceOrder": 8,
    "givens": [
      {
        "label": "η",
        "value": "0.80"
      },
      {
        "label": "p",
        "value": "6 mbar"
      },
      {
        "label": "H",
        "value": "10000 kcal/kg"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Υπολογίστε την ισχύ $Q_{\\Lambda}$ του λέβητα σε $\\text{kcal/h}$ για τη χαμηλότερη παροχή καυσίμου ($w = 50\\text{ kg/h}$).",
        "formula": "$Q_{\\Lambda} = w \\cdot H \\cdot \\eta$",
        "answer": 400000,
        "unit": "kcal/h",
        "tolerance": 0.01,
        "hint": "Από το διάγραμμα, για αντίθλιψη 6 mbar και καυστήρα OE-5.1Z, η ελάχιστη παροχή είναι $w = 50\\text{ kg/h}$.",
        "hintImage": "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_25897_sol01.webp",
        "explain": "Από το διάγραμμα, για αντίθλιψη $6\\text{ mbar}$ και καυστήρα OE–5.1Ζ, η ωριαία ποσότητα καυσίμου είναι στην περιοχή $50\\text{ kg/h} < w < 65\\text{ kg/h}$. Για τη χαμηλότερη παροχή $w = 50\\text{ kg/h}$: $Q_{\\Lambda} = w \\cdot H \\cdot \\eta = 50\\text{ kg/h} \\cdot 10.000\\text{ kcal/kg} \\cdot 0,8 = 400.000\\text{ kcal/h}$."
      }
    ],
    "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_25897_fig01.webp",
    "solutionImages": [
      "images/c/stoixeia-kentrikon-thermanseon/chapter-05/c_stoixeia-kentrikon-thermanseon_ch05_25897_sol01.webp"
    ]
  },
  {
    "id": "ch05-28451",
    "group": "ch05-04-epilogi-kaustiron-petrelaiou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28451",
    "code": "Θέμα 4<sup>ο</sup> · #28451",
    "title": "#28451 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "epilogi-kaustiron-petrelaiou",
    "stem": "Σε εγκατάσταση κεντρικής θέρμανσης, με καύσιμο το πετρέλαιο, ο λέβητας έχει θερμική ισχύ $Q_{\\Lambda} = 170.000\\text{ kcal/h}$. Ο βαθμός απόδοσης της εγκατάστασης είναι $\\eta = 85\\%$ και η θερμογόνος δύναμη του πετρελαίου είναι $H = 10.000\\text{ kcal/kg}$. Ο εκτιμώμενος χρόνος λειτουργίας της εγκατάστασης είναι $T = 600\\text{ h/έτος}$.",
    "sourceOrder": 9,
    "givens": [
      {
        "label": "Q_L",
        "value": "170000 kcal/h"
      },
      {
        "label": "η",
        "value": "0.85"
      },
      {
        "label": "H",
        "value": "10000 kcal/kg"
      },
      {
        "label": "T",
        "value": "600 h/έτος"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "α) Την ωριαία ποσότητα καυσίμου $w$ που μπορεί να καταναλώσει ο καυστήρας που συνεργάζεται με το συγκεκριμένο λέβητα.",
        "prompt": "Υπολογίστε την ωριαία ποσότητα καυσίμου $w$ σε $\\text{kg/h}$.",
        "formula": "$w = \\frac{Q_{\\Lambda}}{H \\cdot \\eta}$",
        "answer": 20,
        "unit": "kg/h",
        "tolerance": 0.01,
        "hint": "$w = \\frac{Q_{\\Lambda}}{H \\cdot \\eta}$",
        "explain": "$w = \\frac{170.000}{10.000 \\cdot 0,85} = \\frac{170.000}{8.500} = 20\\text{ kg/h}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "subqPrompt": "β) Την κατανάλωση πετρελαίου $M$ σε $\\text{kg/έτος}$.",
        "prompt": "Υπολογίστε την ετήσια κατανάλωση πετρελαίου $M$ σε $\\text{kg/έτος}$.",
        "formula": "$M = w \\cdot T$",
        "answer": 12000,
        "unit": "kg/έτος",
        "tolerance": 0.01,
        "hint": "$M = w \\cdot T$",
        "explain": "$M = w \\cdot T = 20\\text{ kg/h} \\cdot 600\\text{ h/έτος} = 12.000\\text{ kg/έτος}$."
      }
    ]
  }
]
);
