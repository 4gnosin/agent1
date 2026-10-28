window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-20275",
    "group": "ch06-pressure",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20275",
    "code": "Θέμα 4<sup>ο</sup> · #20275",
    "title": "#20275 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "surface-pressure",
    "sourceOrder": 7,
    "givens": [
      {
        "label": "F",
        "value": "720 daN"
      },
      {
        "label": "p",
        "value": "180 daN/m²"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Η επιφάνεια επαφής Α.",
        "formula": "A = F / p",
        "answer": 4,
        "unit": "m²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο A = F / p.",
        "explain": " \\( A = \\frac{F}{p} = \\frac{720\\text{ daN}}{180\\text{ daN/m}^2} = 4\\text{ m}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Η πλευρά α της επιφάνειας επαφής.",
        "formula": "α = √A",
        "answer": 2,
        "unit": "m",
        "tolerance": 0.02,
        "hint": "Εφόσον η επιφάνεια είναι τετραγωνική, \\( \\alpha = \\sqrt{A} \\).",
        "explain": " \\( \\alpha = \\sqrt{A} = \\sqrt{4\\text{ m}^2} = 2\\text{ m} \\) "
      }
    ]
  },
  {
    "id": "ch06-20276",
    "group": "ch06-pressure",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20276",
    "code": "Θέμα 4<sup>ο</sup> · #20276",
    "title": "#20276 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "surface-pressure",
    "sourceOrder": 8,
    "givens": [
      {
        "label": "F_ολ",
        "value": "2560 daN"
      },
      {
        "label": "α",
        "value": "0,8 m"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Το φορτίο F που δέχεται το ένα πέδιλο.",
        "formula": "F = F_ολ / 4",
        "answer": 640,
        "unit": "daN",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το συνολικό φορτίο F_ολ δια 4.",
        "explain": " \\( F = \\frac{F_{\\text{ολ}}}{4} = \\frac{2560\\text{ daN}}{4} = 640\\text{ daN} \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Την επιφανειακή πίεση p που δέχεται το κάθε ένα από τα πέδιλα της κατασκευής.",
        "formula": "p = F / A",
        "answer": 1000,
        "unit": "daN/m²",
        "tolerance": 0.02,
        "hint": "Υπολογίστε πρώτα την επιφάνεια \\( A = \\alpha^2 \\) και μετά \\( p = F / A \\).",
        "explain": " \\( A = \\alpha^2 = (0,8\\text{ m})^2 = 0,64\\text{ m}^2 \\). \\( p = \\frac{F}{A} = \\frac{640\\text{ daN}}{0,64\\text{ m}^2} = 1000\\text{ daN/m}^2 \\) "
      }
    ]
  }
]
);
