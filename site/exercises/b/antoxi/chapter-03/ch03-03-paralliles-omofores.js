window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch03-18137",
    "group": "ch03-03-paralliles-omofores",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18137",
    "bankCode": "18137",
    "title": "#18137 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-03",
    "sourceOrder": 5,
    "stem": "Δίδονται οι παράλληλες δυνάμεις $F_1 = 20\\text{ daN}$ και $F_2 = 5\\text{ daN}$ σε απόσταση $L = 2\\text{ m}$ (Σχήμα 1). Να υπολογιστεί με την αναλυτική μέθοδο:",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "Να υπολογιστεί με την αναλυτική μέθοδο:",
        "prompt": "Το μέτρο της συνισταμένης δύναμης $F$.",
        "formula": "$F = F_1 + F_2$",
        "answer": 25,
        "unit": "daN",
        "tolerance": 0.02,
        "hint": "Οι δυνάμεις είναι ομόφορες, οπότε προσθέτονται.",
        "explain": "$F = F_1 + F_2 = 20\\text{ daN} + 5\\text{ daN} = 25\\text{ daN}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Απόσταση $L_1$ του σημείου εφαρμογής της συνισταμένης από το σημείο Α.",
        "formula": "$L_1 = \\frac{F_2 \\cdot L}{F_1 + F_2}$",
        "answer": 0.4,
        "unit": "m",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε το θεώρημα των ροπών (Varignon) ως προς το σημείο εφαρμογής Γ.",
        "explain": "$F_1 \\cdot L_1 = F_2 \\cdot (L - L_1) \\Rightarrow 20 \\cdot L_1 = 5 \\cdot (2 - L_1) \\Rightarrow 25 L_1 = 10 \\Rightarrow L_1 = \\frac{10}{25} = 0,4\\text{ m}$."
      }
    ]
  }
]
);
