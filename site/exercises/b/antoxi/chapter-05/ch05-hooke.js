window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch05-17860",
    "group": "ch05-hooke",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "17860",
    "code": "Θέμα 4<sup>ο</sup> · #17860",
    "title": "#17860 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch05-hooke",
    "sourceOrder": 13,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί η διατομή Α ατράκτου κυκλικής διατομής διαμέτρου d = 20 mm (= 2 cm), δίνεται π = 3,14.",
        "formula": "A = (π · d²) / 4",
        "answer": 3.14,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τα mm σε cm και εφαρμόστε τον τύπο κυκλικής διατομής.",
        "explain": " \\( A = \\frac{3,14 \\cdot 2^2}{4} = 3,14\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί η αναπτυσσόμενη εφελκυστική τάση σ για F = 3140 daN και A = 3,14 cm².",
        "formula": "σ = F / A",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το φορτίο F με τη διατομή Α.",
        "explain": " \\( \\sigma = \\frac{3140}{3,14} = 1000\\text{ daN/cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "γ) Να υπολογιστεί η επιμήκυνση Δl σε cm για l = 1,2 m (= 120 cm) και E = 2.000.000 daN/cm².",
        "formula": "Δl = (F · l) / (A · E)",
        "answer": 0.06,
        "unit": "cm",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον νόμο του Hooke: Δl = (F · l) / (A · E).",
        "explain": " \\( \\Delta l = \\frac{3140 \\cdot 120}{3,14 \\cdot 2.000.000} = 0,06\\text{ cm} \\) "
      }
    ]
  }
]
);
