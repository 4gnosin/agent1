window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch02-16262",
    "group": "ch02-varignon",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16262",
    "code": "Θέμα 4<sup>ο</sup> · #16262",
    "title": "#16262 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch02-varignon",
    "sourceOrder": 6,
    "stem": "Δίνεται σύστημα παράλληλων δυνάμεων, με μέτρο δύναμης F₁ = 80 N και F₂ = 30 N, και αποστάσεις l₁ = 3 m, l₂ = 5 m.",
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1. Το μέτρο της συνισταμένης δύναμης Σ (υποθέτοντας αντίθετες κατευθύνσεις, F₁ - F₂).",
        "formula": "Σ = F1 - F2",
        "answer": 50,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τη διαφορά των δύο δυνάμεων.",
        "explain": "Σ = F₁ - F₂ = 80 N - 30 N = 50 N."
      },
      {
        "kind": "calc",
        "prompt": "4.2. Την ροπή Μ_Σ της συνισταμένης δύναμης Σ, ως προς το σημείο Α, εφαρμόζοντας το Θεώρημα των ροπών.",
        "formula": "M_Σ = F1 · l1 - F2 · l2",
        "answer": 90,
        "unit": "Nm",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε το θεώρημα Varignon: M_Σ = (F₁ · l₁) - (F₂ · l₂).",
        "explain": "Μ_(F1) = 80 N · 3 m = 240 Nm, Μ_(F2) = -30 N · 5 m = -150 Nm. Άρα Μ_Σ = 240 Nm - 150 Nm = 90 Nm."
      }
    ]
  },
  {
    "id": "ch02-19031",
    "group": "ch02-varignon",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19031",
    "code": "Θέμα 4<sup>ο</sup> · #19031",
    "title": "#19031 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch02-varignon",
    "sourceOrder": 7,
    "stem": "Δίνεται σύστημα παράλληλων δυνάμεων με F₁ = 30 N, F₂ = 70 N και F₃ = 40 N, και αποστάσεις l₁ = 1 m, l₂ = 2 m και l₃ = 4 m.",
    "items": [
      {
        "kind": "calc",
        "prompt": "α. Με την αναλυτική μέθοδο το μέτρο της συνισταμένης δύναμης Σ (F₁ + F₂ - F₃).",
        "formula": "Σ = F1 + F2 - F3",
        "answer": 60,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Προσθέστε τις ομόρροπες και αφαιρέστε την αντίρροπη F₃.",
        "explain": "Σ = F₁ + F₂ - F₃ = 30 N + 70 N - 40 N = 60 N."
      },
      {
        "kind": "calc",
        "prompt": "β. Την ροπή Μ_Σ της συνισταμένης δύναμης Σ, ως προς το σημείο O, εφαρμόζοντας το Θεώρημα των ροπών.",
        "formula": "M_Σ = F1·l1 + F2·l2 - F3·l3",
        "answer": 10,
        "unit": "Nm",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το αλγεβρικό άθροισμα των ροπών ως προς το O.",
        "explain": "Μ_(F1) = 30·1 = 30 Nm, Μ_(F2) = 70·2 = 140 Nm, Μ_(F3) = -40·4 = -160 Nm. Συνεπώς Μ_Σ = 30 + 140 - 160 = 10 Nm."
      }
    ]
  }
]
);
