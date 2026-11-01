window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch02-16262",
    "group": "ch02-02-theorima-ton-ropon",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16262",
    "code": "Θέμα 4<sup>ο</sup> · #16262",
    "title": "#16262 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch02-02-theorima-ton-ropon",
    "sourceOrder": 4,
    "stem": "Δίνεται σύστημα παράλληλων δυνάμεων, όπως φαίνεται στο σχήμα, με μέτρο δύναμης $F_1 = 80\\text{ N}$ και $F_2 = 30\\text{ N}$. Δίνονται επίσης αποστάσεις $l_1 = 3\\text{ m}$, $l_2 = 5\\text{ m}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "Να υπολογίσετε το μέτρο της συνισταμένης δύναμης και τη ροπή της.",
        "prompt": "Το μέτρο της συνισταμένης δύναμης $\\Sigma$.",
        "formula": "$\\Sigma = F_1 - F_2$",
        "answer": 50,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε τις αντίθετες παράλληλες δυνάμεις.",
        "explain": "$\\Sigma = F_1 - F_2 = 80\\text{ N} - 30\\text{ N} = 50\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Την ροπή $M_\\Sigma$ της συνισταμένης δύναμης $\\Sigma$, ως προς το σημείο Α, εφαρμόζοντας το Θεώρημα των ροπών.",
        "formula": "$M_\\Sigma = M_{F1} + M_{F2}$",
        "answer": 90,
        "unit": "N.m",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τις ροπές κάθε δύναμης ως προς το Α και αθροίστε τες αλγεβρικά.",
        "explain": "$M_{F1} = F_1 \\cdot l_1 = 80\\text{ N} \\cdot 3\\text{ m} = 240\\text{ N}\\cdot\\text{m}$, $M_{F2} = -F_2 \\cdot l_2 = -30\\text{ N} \\cdot 5\\text{ m} = -150\\text{ N}\\cdot\\text{m}$. Άρα $M_\\Sigma = 240 - 150 = 90\\text{ N}\\cdot\\text{m}$.",
        "image": "images/b/antoxi/chapter-02/b_antoxi_ch02_#16262_fig01.png"
      }
    ]
  },
  {
    "id": "ch02-19031",
    "group": "ch02-02-theorima-ton-ropon",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19031",
    "code": "Θέμα 4<sup>ο</sup> · #19031",
    "title": "#19031 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch02-02-theorima-ton-ropon",
    "sourceOrder": 5,
    "stem": "Δίνεται σύστημα παράλληλων δυνάμεων με μέτρα $F_1 = 30\\text{ N}$, $F_2 = 70\\text{ N}$ και $F_3 = 40\\text{ N}$. Δίνονται: $l_1 = 1\\text{ m}$, $l_2 = 2\\text{ m}$ και $l_3 = 4\\text{ m}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "Να υπολογίσετε τη συνισταμένη και τη ροπή της.",
        "prompt": "Με την αναλυτική μέθοδο το μέτρο της συνισταμένης δύναμης $\\Sigma$.",
        "formula": "$\\Sigma = F_1 + F_2 - F_3$",
        "answer": 60,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Προσθέστε τις ομόρροπες και αφαιρέστε την αντίρροπη δύναμη.",
        "explain": "$\\Sigma = F_1 + F_2 - F_3 = 30\\text{ N} + 70\\text{ N} - 40\\text{ N} = 60\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την ροπή $M_\\Sigma$ της συνισταμένης δύναμης $\\Sigma$, ως προς το σημείο O, εφαρμόζοντας το Θεώρημα των ροπών.",
        "formula": "$M_\\Sigma = M_{F1} + M_{F2} + M_{F3}$",
        "answer": 10,
        "unit": "N.m",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τις ροπές κάθε δύναμης ως προς το σημείο O.",
        "explain": "$M_{F1} = 30 \\cdot 1 = 30\\text{ N}\\cdot\\text{m}$, $M_{F2} = 70 \\cdot 2 = 140\\text{ N}\\cdot\\text{m}$, $M_{F3} = -40 \\cdot 4 = -160\\text{ N}\\cdot\\text{m}$. Άρα $M_\\Sigma = 30 + 140 - 160 = 10\\text{ N}\\cdot\\text{m}$."
      }
    ]
  }
]
);
