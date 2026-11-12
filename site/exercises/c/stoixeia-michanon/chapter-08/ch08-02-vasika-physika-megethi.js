window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].exercises.push(...
[
  {
    "id": "ch08-30367",
    "group": "ch08-02-vasika-physika-megethi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #30367",
    "bankCode": "30367",
    "title": "#30367 — Θέμα 4$^{ο}$ (α, β)",
    "units": 25,
    "theory": "ch08-02",
    "sourceOrder": 1,
    "stem": "Μια κινητήρια μηχανή αποδίδει στον άξονα της ισχύ $P_1 = 200\\text{ PS}$ και περιστρέφει, μέσω οδοντωτών τροχών, κινούμενο άξονα με $n_2 = 1800\\text{ RPM}$. Αν ο βαθμός απόδοσης είναι $\\\\beta = 0{,}9$, να υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Την ισχύ $P_2$ του κινούμενου άξονα.",
        "formula": "$P_2 = \\\\beta \\cdot P_1$",
        "answer": 180,
        "unit": "PS",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο του βαθμού απόδοσης $\\\\beta = \\frac{P_2}{P_1}$.",
        "explain": "Η ισχύς του κινούμενου άξονα είναι: \\( P_2 = \\\\beta \\cdot P_1 = 0{,}9 \\cdot 200\\text{ PS} = 180\\text{ PS} \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τη ροπή $M_2$ του κινούμενου άξονα σε $\\text{daN}\\cdot\\text{m}$.",
        "formula": "$M_2 = 716{,}2 \\cdot \\frac{P_2}{n_2}$",
        "answer": 71.62,
        "unit": "daN·m",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο της ροπής συναρτήσει της ισχύος σε PS και των στροφών ανά λεπτό (RPM).",
        "explain": "Η ροπή υπολογίζεται από τη σχέση: \\( M_2 = 716{,}2 \\cdot \\frac{P_2}{n_2} = 716{,}2 \\cdot \\frac{180}{1800} = 71{,}62\\text{ daN}\\cdot\\text{m} \\)."
      }
    ]
  }
]
);
