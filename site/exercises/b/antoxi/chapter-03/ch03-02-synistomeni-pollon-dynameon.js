window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch03-18829",
    "group": "ch03-02-synistomeni-pollon-dynameon",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18829",
    "bankCode": "18829",
    "title": "#18829 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-02",
    "sourceOrder": 4,
    "stem": "Στο σώμα Σ ενεργούν τέσσερις ομοεπίπεδες δυνάμεις $F_1$, $F_2$, $F_3$ και $F_4$. Οι $F_1$ και $F_2$ έχουν διεύθυνση τον άξονα $y'y$ και οι $F_3$ και $F_4$ έχουν διεύθυνση τον άξονα $x'x$, όπως φαίνεται στο σχήμα 1. Να προσδιορίσετε, με την αναλυτική μέθοδο, το μέτρο και την διεύθυνση ($\\text{εφ}\\theta$) της συνισταμένης του συστήματος των δυνάμεων $F_{\\Sigma}$.",
    "image": "images/b/antoxi/chapter-03/b_antoxi_ch03_#18829_fig01.webp",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α) οι δυνάμεις έχουν μέτρο: F1=8 N, F2=3 N, F3=5 N και F4=5 N.",
        "prompt": "Μέτρο της συνισταμένης δύναμης $F_{\\Sigma}$ (περίπτωση α).",
        "formula": "$F_{\\Sigma} = F_1 - F_2$",
        "answer": 5,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "Στον άξονα $y'y$: $F_1 = 8\\text{ N}$, $F_2 = -3\\text{ N}$. Στον $x'x$: $F_3 = -5\\text{ N}$, $F_4 = 5\\text{ N}$.",
        "explain": "Στον άξονα $y'y$: $\\Sigma F_y = 8\\text{ N} - 3\\text{ N} = 5\\text{ N}$. Στον άξονα $x'x$: $\\Sigma F_x = -5\\text{ N} + 5\\text{ N} = 0\\text{ N}$. Άρα $F_{\\Sigma} = 5\\text{ N}$ με διεύθυνση τον άξονα $y'y$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "subqPrompt": "β) οι δυνάμεις έχουν μέτρο: F1=10 N, F2=7 N, F3=5 N και F4=9 N.",
        "prompt": "Μέτρο της συνισταμένης δύναμης $F_{\\Sigma}$ (περίπτωση β).",
        "formula": "$F_{\\Sigma} = \\sqrt{(\\Sigma F_x)^2 + (\\Sigma F_y)^2}$",
        "answer": 5,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "Υπολογίστε $\\Sigma F_y = 10 - 7 = 3\\text{ N}$ και $\\Sigma F_x = -5 + 9 = 4\\text{ N}$.",
        "explain": "$\\Sigma F_y = 3\\text{ N}$, $\\Sigma F_x = 4\\text{ N}$. Οπότε $F_{\\Sigma} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Εφαπτομένη της γωνίας $\\text{εφ}\\theta$ (περίπτωση β).",
        "formula": "$\\text{εφ}\\theta = \\frac{\\Sigma F_y}{\\Sigma F_x}$",
        "answer": 0.75,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Διαιρέστε τη συνιστώσα $\\Sigma F_y$ με τη $\\Sigma F_x$.",
        "explain": "$\\text{εφ}\\theta = \\frac{3\\text{ N}}{4\\text{ N}} = 0,75$."
      }
    ]
  }
]
);
