window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-25265",
    "group": "ch03-01-orismos-teleiou-aeriou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25265",
    "code": "Θέμα 4<sup>ο</sup> · #25265",
    "title": "#25265 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-01-orismos-teleiou-aeriou",
    "sourceOrder": 1,
    "stem": "Σε ένα εργαστήριο ψύξης κλιματισμού διαστάσεων $3\\text{ m} \\times 5\\text{ m} \\times 10\\text{ m}$ υπάρχει αέρας μάζας $m = 180\\text{ Kg}$, που συμπεριφέρεται σαν τέλειο αέριο. Η θερμοκρασία μετρήθηκε με ένα θερμόμετρο και βρέθηκε $27\\text{ }^\\circ\\text{C}$.",
    "givens": [
      {
        "label": "V",
        "value": "150 m³"
      },
      {
        "label": "m",
        "value": "180 Kg"
      },
      {
        "label": "t",
        "value": "27 °C"
      },
      {
        "label": "R",
        "value": "287 J/(Kg·K)"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "4.1. Να υπολογίσετε την πίεση του αέρα στο εργαστήριο σε $\\text{N/m}^2$.",
        "prompt": "Να υπολογίσετε την πίεση του αέρα στο εργαστήριο σε $\\text{N/m}^2$.",
        "formula": "P = \\frac{m \\cdot R \\cdot T}{V}",
        "answer": 103320,
        "unit": "N/m²",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα τον όγκο $V = 3 \\cdot 5 \\cdot 10 = 150\\text{ m}^3$ και τη θερμοκρασία σε Kelvin $T = 27 + 273 = 300\\text{ K}$, και στη συνέχεια εφαρμόστε την καταστατική εξίσωση $P \\cdot V = m \\cdot R \\cdot T$.",
        "explain": "Όγκος $V = 150\\text{ m}^3$, Θερμοκρασία $T = 300\\text{ K}$. Από την καταστατική εξίσωση: \\( P = \\frac{m \\cdot R \\cdot T}{V} = \\frac{180 \\cdot 287 \\cdot 300}{150} = 103320\\text{ N/m}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Να μετατρέψετε την πίεση που υπολογίστηκε παραπάνω σε bar.",
        "formula": "$P_{\bar}$ = \\frac{$P_{\\text{N/m}^2}$}{10^5}",
        "answer": 1.033,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Γνωρίζοντας ότι $1\\text{ bar} = 10^5\\text{ N/m}^2$, διαιρέστε την πίεση με $10^5$.",
        "explain": "Ισχύει $1\\text{ bar} = 10^5\\text{ N/m}^2$, οπότε \\( P = \\frac{103320}{10^5} = 1,033\\text{ bar} \\)."
      }
    ]
  },
  {
    "id": "ch03-26872",
    "group": "ch03-01-orismos-teleiou-aeriou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26872",
    "code": "Θέμα 4<sup>ο</sup> · #26872",
    "title": "#26872 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-01-orismos-teleiou-aeriou",
    "sourceOrder": 2,
    "stem": "Εργαστηριακός χώρος έχει όγκος $V = 143,5\\text{ m}^3$. Η θερμοκρασία του αέρα είναι $17\\text{ }^\\circ\\text{C}$ και η μανομετρική πίεση του αέρα είναι $P_{\\text{μαν}} = 1,9\\text{ bar}$. Δίνεται η ατμοσφαιρική πίεση $P_{\\text{ατμ}} = 1\\text{ bar}$, $R_{\\text{αέρα}} = 287\\text{ J}/(\\text{Kg}\\cdot\\text{K})$ και $1\\text{ bar} = 10^5\\text{ N/m}^2$.",
    "givens": [
      {
        "label": "V",
        "value": "143.5 m³"
      },
      {
        "label": "t",
        "value": "17 °C"
      },
      {
        "label": "P_μαν",
        "value": "1.9 bar"
      },
      {
        "label": "P_ατμ",
        "value": "1 bar"
      },
      {
        "label": "R",
        "value": "287 J/(Kg·K)"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "4.1 Να υπολογιστεί η απόλυτη πίεση που ασκεί ο αέρας στο χώρο σε $\\text{N/m}^2$.",
        "prompt": "Να υπολογιστεί η απόλυτη πίεση που ασκεί ο αέρας στο χώρο σε $\\text{N/m}^2$.",
        "formula": "$P_{\\text{απ}}$ = $P_{\\text{μαν}}$ + $P_{\\text{ατμ}}$",
        "answer": 290000,
        "unit": "N/m²",
        "tolerance": 0.01,
        "hint": "Η απόλυτη πίεση ισούται με το άθροισμα της μανομετρικής και της ατμοσφαιρικής πίεσης σε bar, και στη συνέχεια μετατρέπεται σε $\\text{N/m}^2$.",
        "explain": "\\( P_{\\text{απ}} = P_{\\text{μαν}} + P_{\\text{ατμ}} = 1,9\\text{ bar} + 1\\text{ bar} = 2,9\\text{ bar} \\). Επειδή $1\\text{ bar} = 10^5\\text{ N/m}^2$, προκύπτει \\( P_{\\text{απ}} = 2,9 \\cdot 10^5\\text{ N/m}^2 = 290000\\text{ N/m}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Να υπολογιστεί η μάζα του αέρα $m$.",
        "formula": "m = \\frac{$P_{\\text{απ}}$ \\cdot V}{R \\cdot T}",
        "answer": 500,
        "unit": "Kg",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τη θερμοκρασία σε Kelvin ($T = 17 + 273 = 290\\text{ K}$) και λύστε την καταστατική εξίσωση ως προς $m$.",
        "explain": "Θερμοκρασία $T = 17 + 273 = 290\\text{ K}$. Από την καταστατική εξίσωση: \\( m = \\frac{P \\cdot V}{R \\cdot T} = \\frac{2,9 \\cdot 10^5 \\cdot 143,5}{290 \\cdot 287} = 500\\text{ Kg} \\)."
      }
    ]
  }
]
);
