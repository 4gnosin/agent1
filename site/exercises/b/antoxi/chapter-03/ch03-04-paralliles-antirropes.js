window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch03-18581",
    "group": "ch03-04-paralliles-antirropes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18581",
    "bankCode": "18581",
    "title": "#18581 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch03-04",
    "sourceOrder": 6,
    "stem": "Στο παρακάτω σχήμα (σχήμα 1) δίνονται δύο δυνάμεις παράλληλες και αντίφορες με μέτρο $F_1 = 30\\text{ N}$ καισ $F_2 = 20\\text{ N}$. Η απόσταση μεταξύ των δύο δυνάμεων είναι $l = 100\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α) Να υπολογίσετε με την αναλυτική μέθοδο, το μέτρο της συνισταμένης δύναμης Σ.",
        "prompt": "Το μέτρο της συνισταμένης δύναμης $\\Sigma$.",
        "formula": "$\\Sigma = F_1 - F_2$",
        "answer": 10,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "Αφαιρέστε τις δύο αντίρροπες δυνάμεις.",
        "explain": "$\\Sigma = F_1 - F_2 = 30\\text{ N} - 20\\text{ N} = 10\\text{ N}$."
      },
      {
        "kind": "mc",
        "subq": "β",
        "subqPrompt": "β) Να καθορίσετε την διεύθυνση και τη φορά της συνισταμένης δύναμης Σ.",
        "prompt": "Ποια είναι η διεύθυνση και η φορά της συνισταμένης $\\Sigma$;",
        "options": [
          {
            "id": "a",
            "text": "Παράλληλη με τις συνιστώσες και φορά ίδια με την F1 (μεγαλύτερη δύναμη)"
          },
          {
            "id": "b",
            "text": "Κάθετη στις συνιστώσες και φορά ίδια με την F2"
          },
          {
            "id": "c",
            "text": "Παράλληλη με τις συνιστώσες και φορά ίδια με την F2"
          }
        ],
        "answer": "a",
        "explain": "Η διεύθυνση της συνισταμένης είναι παράλληλη με τις συνιστώσες και η φορά της είναι ίδια με αυτή της $F_1$ που έχει μεγαλύτερο μέτρο.",
        "image": "images/b/antoxi/chapter-03/b_antoxi_ch03_18581_fig01.webp",
        "images": [
          "images/b/antoxi/chapter-03/b_antoxi_ch03_18581_fig01.webp",
          "images/b/antoxi/chapter-03/b_antoxi_ch03_18581_fig02.webp"
        ]
      },
      {
        "kind": "calc",
        "subq": "γ",
        "subqPrompt": "γ) Δεδομένου ότι η συνισταμένη Σ βρίσκεται στην προέκταση... να προσδιορίσετε το σημείο εφαρμογής Γ...",
        "prompt": "Απόσταση $l_1$ της συνισταμένης από τη δύναμη $F_1$.",
        "formula": "$F_1 \\cdot l_1 = F_2 \\cdot (l_1 + l)$",
        "answer": 200,
        "unit": "mm",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε το θεώρημα των ροπών στο σημείο Γ.",
        "explain": "$30 \\cdot l_1 = 20 \\cdot (l_1 + 100) \\Rightarrow 30 l_1 = 20 l_1 + 2000 \\Rightarrow 10 l_1 = 2000 \\Rightarrow l_1 = 200\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Απόσταση $l_2$ της συνισταμένης από τη δύναμη $F_2$.",
        "formula": "$l_2 = l_1 + l$",
        "answer": 300,
        "unit": "mm",
        "tolerance": 0.02,
        "hint": "Προσθέστε την απόσταση $l$ στην απόσταση $l_1$.",
        "explain": "$l_2 = 200\\text{ mm} + 100\\text{ mm} = 300\\text{ mm}$."
      }
    ],
    "solutionImages": [
      "images/b/antoxi/chapter-03/b_antoxi_ch03_18581_sol01.webp"
    ]
  }
]
);
