window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-25265",
    "group": "ch03-01-ideal-gas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25265",
    "bankCode": "25265",
    "title": "Θέμα 4$^{ο}$ · #25265",
    "units": 25,
    "theory": "ch03-01-ideal-gas",
    "stem": "Σε ένα εργαστήριο ψύξης κλιματισμού διαστάσεων $3\\text{ m} \\times 5\\text{ m} \\times 10\\text{ m}$ υπάρχει αέρας μάζας $m = 180\\text{ kg}$, που συμπεριφέρεται σαν τέλειο αέριο. Η θερμοκρασία μετρήθηκε με θερμόμετρο και βρέθηκε $27{}^{\\circ}\\text{C}$.",
    "givens": [
      {
        "label": "$m$",
        "value": "$180 \\text{kg}$"
      },
      {
        "label": "Διαστάσεις",
        "value": "$3 \\text{m} \\times 5 \\text{m} \\times 10 \\text{m}$"
      },
      {
        "label": "$t$",
        "value": "$27 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$R$",
        "value": "$287 \\text{J}/(\\text{kg}\\cdot \\text{K})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε την πίεση του αέρα στο εργαστήριο σε $\\text{N}/\\text{m}^2$.",
        "formula": "$P = \\frac{m \\cdot R \\cdot T}{V}$",
        "answer": 103320,
        "unit": "N/m²",
        "tolerance": 0.02,
        "hint": "Υπολογίστε τον όγκο $V$ από τις διαστάσεις, τη θερμοκρασία σε Kelvin και εφαρμόστε την καταστατική εξίσωση $P \\cdot V = m \\cdot R \\cdot T$.",
        "explain": "Ο όγκος είναι $V = 3 \\cdot 5 \\cdot 10 = 150\\text{ m}^3$. Η απόλυτη θερμοκρασία είναι $T = 27 + 273 = 300\\text{ K}$. Από την καταστατική εξίσωση:\n$$\\begin{aligned}\nP &= \\frac{m \\cdot R \\cdot T}{V} \\\\\nP &= \\frac{180\\text{ kg} \\cdot 287\\text{ J}/(\\text{kg}\\cdot\\text{K}) \\cdot 300\\text{ K}}{150\\text{ m}^3} \\\\\nP &= \\frac{15498000}{150} = 103320\\text{ N}/\\text{m}^2\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να μετατρέψετε την πίεση που υπολογίστηκε παραπάνω σε bar.",
        "formula": "$P_{\\text{bar}} = \\frac{P}{10^5}$",
        "answer": 1.033,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τη σχέση $1\\text{ bar} = 10^5\\text{ N}/\\text{m}^2$.",
        "explain": "Επειδή $1\\text{ bar} = 10^5\\text{ N}/\\text{m}^2$, διαιρούμε την πίεση σε $\\text{N}/\\text{m}^2$ με το $10^5$:\n$$\\begin{aligned}\nP &= \\frac{103320}{10^5} = 1{,}033\\text{ bar}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch03-26872",
    "group": "ch03-01-ideal-gas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26872",
    "bankCode": "26872",
    "title": "Θέμα 4$^{ο}$ · #26872",
    "units": 25,
    "theory": "ch03-01-ideal-gas",
    "stem": "Εργαστηριακός χώρος έχει όγκο $V = 143{,}5\\text{ m}^3$. Η θερμοκρασία του αέρα είναι $17{}^{\\circ}\\text{C}$ και η μανομετρική πίεση του αέρα είναι $P_{\\text{μαν}} = 1{,}9\\text{ bar}$. Δίνεται η ατμοσφαιρική πίεση $P_{\\text{ατμ}} = 1\\text{ bar}$ και $R_{\\text{αέρα}} = 287\\text{ J}/(\\text{kg}\\cdot\\text{K})$ ($1\\text{ bar} = 10^5\\text{ N}/\\text{m}^2$).",
    "givens": [
      {
        "label": "$V$",
        "value": "$143{,}5 \\text{m}^{3}$"
      },
      {
        "label": "$t$",
        "value": "$17 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$P_{\\text{μαν}}$",
        "value": "$1{,}9 \\text{bar}$"
      },
      {
        "label": "$P_{\\text{ατμ}}$",
        "value": "$1 \\text{bar}$"
      },
      {
        "label": "$R_{\\text{αέρα}}$",
        "value": "$287 \\text{J}/(\\text{kg}\\cdot \\text{K})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογιστεί η απόλυτη πίεση που ασκεί ο αέρας στο χώρο σε $\\text{N}/\\text{m}^2$.",
        "formula": "$P_{\\text{απ}} = P_{\\text{μαν}} + P_{\\text{ατμ}}$",
        "answer": 290000,
        "unit": "N/m²",
        "tolerance": 0.02,
        "hint": "Προσθέστε τη μανομετρική και την ατμοσφαιρική πίεση για να βρείτε την απόλυτη πίεση σε bar και μετατρέψτε την σε $\\text{N}/\\text{m}^2$.",
        "explain": "Η απόλυτη πίεση ισούται με το άθροισμα της μανομετρικής και της ατμοσφαιρικής πίεσης:\n$$\\begin{aligned}\nP_{\\text{απ}} &= P_{\\text{μαν}} + P_{\\text{ατμ}} = 1{,}9\\text{ bar} + 1\\text{ bar} = 2{,}9\\text{ bar} \\\\\nP_{\\text{απ}} &= 2{,}9 \\cdot 10^5\\text{ N}/\\text{m}^2 = 290000\\text{ N}/\\text{m}^2\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογιστεί η μάζα του αέρα $m$ σε kg.",
        "formula": "$m = \\frac{P_{\\text{απ}} \\cdot V}{R \\cdot T}$",
        "answer": 500,
        "unit": "kg",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τη θερμοκρασία σε Kelvin ($T = 17 + 273$) και λύστε την καταστατική εξίσωση ως προς $m$.",
        "explain": "Η απόλυτη θερμοκρασία είναι $T = 17 + 273 = 290\\text{ K}$. Από την καταστατική εξίσωση λύνουμε ως προς τη μάζα $m$:\n$$\\begin{aligned}\nm &= \\frac{P_{\\text{απ}} \\cdot V}{R \\cdot T} \\\\\nm &= \\frac{2{,}9 \\cdot 10^5\\text{ N}/\\text{m}^2 \\cdot 143{,}5\\text{ m}^3}{290\\text{ K} \\cdot 287\\text{ J}/(\\text{kg}\\cdot\\text{K})} \\\\\nm &= \\frac{41615000}{83230} = 500\\text{ kg}\n\\end{aligned}$$"
      }
    ]
  }
]
);
