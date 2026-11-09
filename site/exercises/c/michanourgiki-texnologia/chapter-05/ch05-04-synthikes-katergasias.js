window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanourgiki-texnologia"] = window.SUBJECT_DATA["michanourgiki-texnologia"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanourgiki-texnologia"].exercises.push(...
[
  {
    "id": "ch05-25469",
    "group": "ch05-04-synthikes-katergasias",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25469",
    "code": "Θέμα 4<sup>ο</sup> · #25469",
    "title": "#25469 — Θέμα 4<sup>ο</sup> (5.4)",
    "units": 25,
    "theory": "ch05-04-synthikes-katergasias",
    "sourceOrder": 3,
    "stem": "Πλάκα από ανθρακούχο χάλυβα 50-70 kp/mm² με μήκος $l = 350\\text{ mm}$, πρόκειται να εκχονδριστεί σε φρέζα με μετωπικό φρεζάρισμα και με κοπτικό εργαλείο εντιθέμενων δοντιών από σκληρομέταλλο διαμέτρου $D = 60\\text{ mm}$. Επιπρόσθετα, δίνονται τα παρακάτω στοιχεία:\n· Ταχύτητα κοπής $u = 94,2\\text{ m/min}$.\n· Πρόωση ανά δόντι $s_z = 0,25\\text{ mm/δόντι}$.\n· Αριθμός δοντιών στο κοπτικό εργαλείο $z = 6$.\n· Διάστημα που διανύει το κοπτικό εργαλείο πριν την επαφή με την πλάκα $l_a = 15\\text{ mm}$.\n· Διάστημα που διανύει το κοπτικό εργαλείο μετά το τέλος της κατεργασίας $l_u = 10\\text{ mm}$.\nΔίνεται $\\pi = 3,14$.",
    "items": [
      {
        "subq": "α",
        "kind": "calc",
        "prompt": "Υπολογίστε τις στροφές περιστροφής του κοπτικού εργαλείου $n$ σε $\\text{rpm}$.",
        "formula": "$n = \\frac{1000 \\cdot u}{\\pi \\cdot D}$",
        "answer": 500,
        "unit": "rpm",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $n = \\frac{1000 \\cdot u}{\\pi \\cdot D}$ με $u = 94,2$, $D = 60$ και $\\pi = 3,14$.",
        "explain": "$n = \\frac{1000 \\cdot 94,2}{3,14 \\cdot 60} = \\frac{94200}{188,4} = 500\\text{ rpm}$."
      },
      {
        "subq": "β",
        "kind": "calc",
        "prompt": "Υπολογίστε την ταχύτητα πρόωσης $S$ σε $\\text{mm/min}$.",
        "formula": "$S = s_z \\cdot z \\cdot n$",
        "answer": 750,
        "unit": "mm/min",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $S = s_z \\cdot z \\cdot n$.",
        "explain": "$S = 0,25 \\cdot 6 \\cdot 500 = 750\\text{ mm/min}$."
      },
      {
        "subq": "γ",
        "kind": "calc",
        "prompt": "Υπολογίστε τη συνολική απόσταση που θα διανύσει το τραπέζι της εργαλειομηχανής $L$ σε $\\text{mm}$.",
        "formula": "$L = l + l_a + l_u$",
        "answer": 375,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "$L = l + l_a + l_u$, όπου $l = 350\\text{ mm}$, $l_a = 15\\text{ mm}$ και $l_u = 10\\text{ mm}$.",
        "explain": "$L = 350 + 15 + 10 = 375\\text{ mm}$."
      },
      {
        "subq": "δ",
        "kind": "calc",
        "prompt": "Υπολογίστε τον απαιτούμενο χρόνο κοπής $t_h$ σε $\\text{min}$.",
        "formula": "$t_h = \\frac{L}{S}$",
        "answer": 0.5,
        "unit": "min",
        "tolerance": 0.01,
        "hint": "$t_h = \\frac{L}{S}$",
        "explain": "$t_h = \\frac{375}{750} = 0,5\\text{ min}$."
      }
    ]
  },
  {
    "id": "ch05-25470",
    "group": "ch05-04-synthikes-katergasias",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "25470",
    "code": "Θέμα 4<sup>ο</sup> · #25470",
    "title": "#25470 — Θέμα 4<sup>ο</sup> (5.4)",
    "units": 25,
    "theory": "ch05-04-synthikes-katergasias",
    "sourceOrder": 4,
    "stem": "Πλάκα από ανθρακούχο χάλυβα έως $50\\text{ kp/mm}^2$, πρόκειται να εκχονδριστεί σε φρέζα με μετωπικό φρεζάρισμα και με κοπτικό εργαλείο εντιθέμενων δοντιών από ταχυχάλυβα διαμέτρου $D = 60\\text{ mm}$ και αριθμού δοντιών $z = 10$.",
    "items": [
      {
        "subq": "1",
        "kind": "mc",
        "prompt": "Με βάση τα δεδομένα, επιλέξτε τη μεγαλύτερη επιτρεπόμενη ταχύτητα κοπής $u$ σε $\\text{m/min}$.",
        "options": [
          {
            "id": "a",
            "text": "20 m/min"
          },
          {
            "id": "b",
            "text": "30 m/min"
          },
          {
            "id": "c",
            "text": "40 m/min"
          },
          {
            "id": "d",
            "text": "50 m/min"
          }
        ],
        "answer": "b",
        "explain": "Για κοπτικό εργαλείο από ταχυχάλυβα και κατεργαζόμενο υλικό από ανθρακούχο χάλυβα έως $50\\text{ kp/mm}^2$, η μεγαλύτερη επιτρεπόμενη ταχύτητα κοπής είναι $u = 30\\text{ m/min}$."
      },
      {
        "subq": "2",
        "kind": "mc",
        "prompt": "Επιλέξτε τις στροφές του κοπτικού εργαλείου $n$ σε $\\text{rpm}$ (για $D = 60\\text{ mm}$ και $u = 30\\text{ m/min}$).",
        "options": [
          {
            "id": "a",
            "text": "120 rpm"
          },
          {
            "id": "b",
            "text": "140 rpm"
          },
          {
            "id": "c",
            "text": "160 rpm"
          },
          {
            "id": "d",
            "text": "200 rpm"
          }
        ],
        "answer": "c",
        "explain": "Από τον πίνακα, για διάμετρο $D = 60\\text{ mm}$ και ταχύτητα κοπής $u = 30\\text{ m/min}$, προκύπτει ταχύτητα περιστροφής $n = 160\\text{ rpm}$.",
        "image": "images/c/michanourgiki-texnologia/chapter-05/c_michanourgiki-texnologia_ch05_#25470_fig01.webp",
        "images": [
          "images/c/michanourgiki-texnologia/chapter-05/c_michanourgiki-texnologia_ch05_#25470_fig01.webp",
          "images/c/michanourgiki-texnologia/chapter-05/c_michanourgiki-texnologia_ch05_#25470_fig02.webp"
        ]
      },
      {
        "subq": "3",
        "kind": "mc",
        "prompt": "Επιλέξτε την πρόωση ανά δόντι $s_z$ σε $\\text{mm/δόντι}$ για μετωπικό φρεζάρισμα σε ανθρακούχο χάλυβα έως $50\\text{ kp/mm}^2$.",
        "options": [
          {
            "id": "a",
            "text": "0,15 mm/δόντι"
          },
          {
            "id": "b",
            "text": "0,20 mm/δόντι"
          },
          {
            "id": "c",
            "text": "0,25 mm/δόντι"
          },
          {
            "id": "d",
            "text": "0,30 mm/δόντι"
          }
        ],
        "answer": "c",
        "explain": "Από τον πίνακα για μετωπικό φρεζάρισμα και ανθρακούχο χάλυβα έως $50\\text{ kp/mm}^2$, η πρόωση ανά δόντι είναι $s_z = 0,25\\text{ mm/δόντι}$."
      },
      {
        "subq": "4",
        "kind": "calc",
        "prompt": "Αν το συνολικό μήκος κίνησης του τραπεζιού της φρέζας είναι $L = 1200\\text{ mm}$, υπολογίστε τον απαιτούμενο χρόνο κοπής $t_h$ σε $\\text{min}$.",
        "formula": "$t_h = \\frac{L}{S}$ όπου $S = s_z \\cdot z \\cdot n$",
        "answer": 3,
        "unit": "min",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα την ταχύτητα πρόωσης $S = 0,25 \\cdot 10 \\cdot 160 = 400\\text{ mm/min}$ και μετά τον χρόνο κοπής $t_h = \\frac{1200}{400}$.",
        "explain": "$S = 0,25 \\cdot 10 \\cdot 160 = 400\\text{ mm/min}$. Ο χρόνος κοπής είναι $t_h = \\frac{1200}{400} = 3\\text{ min}$.",
        "image": "images/c/michanourgiki-texnologia/chapter-05/c_michanourgiki-texnologia_ch05_#25470_fig03.webp"
      }
    ]
  }
]
);
