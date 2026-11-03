window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-16235",
    "group": "ch06-03-isochori-metavoli",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16235",
    "code": "Θέμα 4<sup>ο</sup> · #16235",
    "title": "#16235 — Θέμα 4<sup>ο</sup> (6.3)",
    "units": 25,
    "theory": "ch06-03-isochori-metavoli",
    "sourceOrder": 4,
    "stem": "Ένα αέριο βρίσκεται σε δοχείο με αμετακίνητα τοιχώματα. Στην αρχική κατάσταση 1, η θερμοκρασία του είναι $22\\text{ }^\\circ\\text{C}$ και η πίεσή του $1\\text{ bar}$. Το αέριο θερμαίνεται έως την τελική κατάσταση 2, όπου η θερμοκρασία του είναι $199\\text{ }^\\circ\\text{C}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την πίεση στην κατάσταση 2.",
        "formula": "P_2 = P_1 \\cdot \\frac{T_2}{T_1}",
        "answer": 1.6,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τις θερμοκρασίες σε Kelvin και εφαρμόστε τον νόμο του Charles-Gay-Lussac για ισόχωρη μεταβολή: $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$.",
        "explain": "Μετατρέπουμε τις θερμοκρασίες σε Kelvin: $T_1 = 22 + 273 = 295\\text{ K}$ και $T_2 = 199 + 273 = 472\\text{ K}$. Για ισόχωρη μεταβολή: $P_2 = P_1 \\cdot \\frac{T_2}{T_1} = 1\\text{ bar} \\cdot \\frac{472}{295} \\approx 1,6\\text{ bar}$.",
        "hintImage": "images/b/thermod/chapter-06/b_thermod_ch06_#16235_sol01.png"
      },
      {
        "kind": "open",
        "subq": "β",
        "prompt": "Να απεικονίσετε τη μεταβολή 1-2 σε διάγραμμα $P-V$.",
        "explain": "Στο διάγραμμα $P-V$, η ισόχωρη μεταβολή απεικονίζεται με ευθύγραμμο τμήμα κάθετο στον άξονα των όγκων, από κατάσταση χαμηλότερης πίεσης σε κατάσταση υψηλότερης πίεσης.",
        "hintImage": "images/b/thermod/chapter-06/b_thermod_ch06_#16235_sol01.png"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε το έργο που αποδόθηκε στο περιβάλλον από αυτή τη μεταβολή.",
        "formula": "W = 0",
        "answer": 0,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Σε ισόχωρη μεταβολή ο όγκος παραμένει σταθερός ($\\Delta V = 0$).",
        "explain": "Η μεταβολή είναι ισόχωρη (ο όγκος είναι σταθερός), οπότε δεν υπάρχει ογκομεταβολή ($W = P \\cdot \\Delta V = 0$)."
      }
    ],
    "solutionImages": [
      "images/b/thermod/chapter-06/b_thermod_ch06_#16235_sol01.png"
    ]
  }
]
);
