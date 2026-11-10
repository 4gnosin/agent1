window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch02-23771",
    "group": "ch02-09-shr",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23771",
    "code": "Θέμα 4<sup>ο</sup> · #23771",
    "title": "#23771 — Θέμα 4<sup>ο</sup> (α–δ)",
    "units": 25,
    "theory": "ch02-09-shr",
    "stem": "Σε μια κλιματιστική μονάδα ο αέρας εισέρχεται με θερμοκρασία $t_{db1} = 31\\text{ }^\\circ\\text{C}$ και σχετική υγρασία $\\varphi_1 = 80\\%$ (σημείο 1) και εξέρχεται με θερμοκρασία $t_{db2} = 22\\text{ }^\\circ\\text{C}$ και σχετική υγρασία $\\varphi_2 = 50\\%$ (σημείο 2). Με τη βοήθεια του ψυχρομετρικού χάρτη να υπολογίσετε:",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Τις ενθαλπίες $h_1$ και $h_2$ στα σημεία 1 και 2 αντίστοιχα (kJ/kg).",
        "formula": "$h_1 = 90\\text{ kJ/kg}, \\quad h_2 = 43\\text{ kJ/kg}$",
        "answer": 90,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Διαβάστε τις ενθαλπίες $h_1$ και $h_2$ από τον ψυχρομετρικό χάρτη.",
        "explain": "Από τον ψυχρομετρικό χάρτη βρίσκουμε $h_1 = 90\\text{ kJ/kg}$ και $h_2 = 43\\text{ kJ/kg}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Την ολική διαφορά ενθαλπίας $\\Delta h_T$ (kJ/kg).",
        "formula": "$\\Delta h_T = h_1 - h_2 = 90 - 43 = 47\\text{ kJ/kg}$",
        "answer": 47,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Αφαιρέστε την τελική ενθαλπία $h_2$ από την αρχική $h_1$.",
        "explain": "Η ολική διαφορά ενθαλπίας είναι $\\Delta h_T = 90 - 43 = 47\\text{ kJ/kg}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Την αισθητή διαφορά ενθαλπίας $\\Delta h_S$ (kJ/kg).",
        "formula": "$\\Delta h_S = h_3 - h_2 = 52 - 43 = 9\\text{ kJ/kg}$",
        "answer": 9,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Βρείτε το σημείο τομής 3 (σταθερή θερμοκρασία από 1 και σταθερή υγρασία από 2) με ενθαλπία $h_3 = 52\\text{ kJ/kg}$.",
        "explain": "Φέρνοντας κατακόρυφη από το 1 και οριζόντια από το 2 τέμνονται στο σημείο 3 με $h_3 = 52\\text{ kJ/kg}$. Η αισθητή διαφορά είναι $\\Delta h_S = 52 - 43 = 9\\text{ kJ/kg}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "δ) Τον Συντελεστή Αισθητής Θερμότητας SHR.",
        "formula": "$\\text{SHR} = \\frac{\\Delta h_S}{\\Delta h_T} = \\frac{9}{47} = 0,19$",
        "answer": 0.19,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την αισθητή διαφορά ενθαλπίας $\\Delta h_S$ με την ολική $\\Delta h_T$.",
        "explain": "Ο συντελεστής SHR υπολογίζεται από το πηλίκο $\\text{SHR} = 9 / 47 = 0,19$."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_23771_fig01.webp",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_23771_sol01.webp"
    ]
  }
]
);
