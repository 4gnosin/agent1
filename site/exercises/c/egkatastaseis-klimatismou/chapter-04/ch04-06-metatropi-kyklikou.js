window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch04-26875",
    "group": "ch04-06-metatropi-kyklikou",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26875",
    "bankCode": "26875",
    "title": "#26875 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-06",
    "sourceOrder": 9,
    "stem": "Η παροχή διερχόμενου αέρα μέσα σε κυκλικό αεραγωγό είναι $Q = 4,71\\text{ m}^3\\text{/s}$. Το ταχύμετρο έδειξε μέση ταχύτητα $V = 6\\text{ m/s}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε τη διάμετρο του αεραγωγού $d$ σε mm.",
        "formula": "$d = \\sqrt{\\frac{4 \\cdot Q}{\\pi \\cdot V}}$",
        "answer": 1000,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα τη διατομή $A = \\frac{Q}{V}$ και έπειτα τη διάμετρο $d = \\sqrt{\\frac{4A}{\\pi}}$.",
        "explain": "Διατομή $A = \\frac{4,71}{6} = 0,785\\text{ m}^2$. Διάμετρος $d = \\sqrt{\\frac{4 \\cdot 0,785}{3,14}} = 1\\text{ m} = 1000\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Με τη βοήθεια του πίνακα να μετατρέψετε τον κυκλικό αεραγωγό σε ορθογώνιο, λαμβάνοντας υπόψη ότι η μικρή πλευρά πρέπει να είναι $750\\text{ mm}$. Ποια είναι η μεγάλη πλευρά σε mm;",
        "formula": "$a \\times b$",
        "answer": 1100,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Αναζητήστε στη στήλη των $750\\text{ mm}$ του πίνακα την πλησιέστερη διάμετρο προς τα $1000\\text{ mm}$ ($988\\text{ mm}$) και βρείτε τη αντίστοιχη μεγάλη πλευρά.",
        "explain": "Η πλησιέστερη τιμή στη στήλη των $750\\text{ mm}$ είναι τα $988\\text{ mm}$ που αντιστοιχούν σε μεγάλη πλευρά $1100\\text{ mm}$. Άρα διαστάσεις $750 \\times 1100\\text{ mm}$.",
        "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_26875_fig01.webp"
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_26875_sol01.webp"
    ]
  }
]
);
