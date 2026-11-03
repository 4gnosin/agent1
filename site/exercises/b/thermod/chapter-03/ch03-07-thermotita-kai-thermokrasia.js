window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch03-18707",
    "group": "ch03-07-thermotita-kai-thermokrasia",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18707",
    "code": "Θέμα 4<sup>ο</sup> · #18707",
    "title": "#18707 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-07-thermotita-kai-thermokrasia",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "4.1. Να μετατρέψετε την θερμοκρασία των $30\\text{ }^\\circ\\text{C}$:",
        "prompt": "α) Σε κλίμακα Κέλβιν (Kelvin).",
        "formula": "$T = t \\text{ }^\\circ\\text{C} + 273$",
        "answer": 303,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στη θερμοκρασία σε βαθμούς Κελσίου.",
        "explain": "Σύμφωνα με τη σχέση $T = t \\text{ }^\\circ\\text{C} + 273$ έχουμε $T = 30 + 273 = 303\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "β) Σε κλίμακα Φαρενάιτ (Fahrenheit).",
        "formula": "$F = \\frac{9 \\cdot t \\text{ }^\\circ\\text{C}}{5} + 32$",
        "answer": 86,
        "unit": "°F",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο μετατροπής Κελσίου σε Φαρενάιτ.",
        "explain": "Από τη σχέση $\\frac{t \\text{ }^\\circ\\text{C}}{5} = \\frac{F - 32}{9}$ προκύπτει $F = \\frac{9 \\cdot 30}{5} + 32 = 54 + 32 = 86\\text{ }^\\circ\\text{F}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2. Να μετατρέψετε τα $10.000\\text{ BTU}$ σε $\\text{Kcal}$.",
        "formula": "$Q_{\\text{Kcal}} = Q_{\\text{BTU}} \\cdot 0,252$",
        "answer": 2520,
        "unit": "kcal",
        "tolerance": 0.01,
        "hint": "Γνωρίζοντας ότι $1\\text{ BTU} = 0,252\\text{ Kcal}$, πολλαπλασιάστε τα BTU επί την αντιστοιχία.",
        "explain": "Εφόσον $1\\text{ BTU} = 0,252\\text{ Kcal}$, έχουμε: $10.000\\text{ BTU} \\cdot 0,252\\text{ Kcal/BTU} = 2520\\text{ Kcal}$."
      }
    ]
  }
]
);
