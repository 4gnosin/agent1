window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanourgiki-texnologia"] = window.SUBJECT_DATA["michanourgiki-texnologia"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanourgiki-texnologia"].exercises.push(...
[
  {
    "id": "ch04-25194",
    "group": "ch04-06-charaktiristika",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25194",
    "bankCode": "25194",
    "title": "#25194 — Θέμα 4<sup>ο</sup> (α–ε)",
    "units": 25,
    "theory": "ch04-06-charaktiristika",
    "sourceOrder": 3,
    "stem": "Άξονας από χάλυβα $50-70\\text{ kg/mm}^2$ και με αρχική διάμετρο $d=200\\text{ mm}$, πρόκειται να υποστεί κατεργασία εκχόνδρισης σε τόρνο, με χρήση κοπτικού εργαλείου κατασκευασμένου από ταχυχάλυβα (HSS). Δίνεται $\\pi=3,14$ και ο σχετικός πίνακας συνθηκών κατεργασίας.",
    "image": "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_#25194_fig01.png",
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Την ταχύτητα κοπής $u$ σε $\\text{m/min}$",
        "subq": "α",
        "formula": "$u = 20\\text{ m/min}$",
        "answer": 20,
        "unit": "m/min",
        "tolerance": 0.01,
        "explain": "Από τον δοσμένο πίνακα, για χάλυβα $50-70\\text{ kg/mm}^2$, σε κατεργασία εκχόνδρισης με εργαλείο HSS, η ταχύτητα κοπής είναι $u = 20\\text{ m/min}。」"
      },
      {
        "kind": "calc",
        "prompt": "β) Την πρόωση $s$ σε $\\text{mm/rev}$",
        "subq": "β",
        "formula": "$s = 1\\text{ mm/rev}$",
        "answer": 1,
        "unit": "mm/rev",
        "tolerance": 0.01,
        "explain": "Από τον ίδιο πίνακα, η πρόωση είναι $s = 1\\text{ mm/rev}$."
      },
      {
        "kind": "calc",
        "prompt": "γ) Το βάθος κοπής $a$ σε $\\text{mm}$",
        "subq": "γ",
        "formula": "$a = 10\\text{ mm}$",
        "answer": 10,
        "unit": "mm",
        "tolerance": 0.01,
        "explain": "Από τον ίδιο πίνακα, το βάθος κοπής είναι $a = 10\\text{ mm}$."
      },
      {
        "kind": "calc",
        "prompt": "δ) Τις στροφές της κύριας ατράκτου του τόρνου $n$ σε $\\text{rpm}$ ($\\text{στρ/min}$)",
        "subq": "δ",
        "formula": "$n = \\frac{1000 \\cdot u}{\\pi \\cdot d} = \\frac{1000 \\cdot 20}{3{,}14 \\cdot 200}$",
        "answer": 31.8,
        "unit": "rpm",
        "tolerance": 0.05,
        "explain": "Οι στροφές υπολογίζονται από τον τύπο: $n = \\frac{1000 \\cdot u}{\\pi \\cdot d} = \\frac{1000 \\cdot 20}{3{,}14 \\cdot 200} = 31{,}8\\text{ rpm}$."
      },
      {
        "kind": "calc",
        "prompt": "ε) Την ταχύτητα πρόωσης $s'$ σε $\\text{mm/min}$",
        "subq": "ε",
        "formula": "$s' = s \\cdot n = 1 \\cdot 31{,}8$",
        "answer": 31.8,
        "unit": "mm/min",
        "tolerance": 0.05,
        "explain": "Η ταχύτητα πρόωσης δίνεται από τη σχέση: $s' = s \\cdot n = 1\\text{ mm/rev} \\cdot 31{,}8\\text{ rev/min} = 31{,}8\\text{ mm/min}$."
      }
    ]
  },
  {
    "id": "ch04-27601",
    "group": "ch04-06-charaktiristika",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #27601",
    "bankCode": "27601",
    "title": "#27601 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch04-06-charaktiristika",
    "sourceOrder": 4,
    "stem": "Για την τόρνευση τεμαχίου διαμέτρου $d=50\\text{ mm}$ και μήκους $L_1=500\\text{ mm}$ με ταχύτητα κοπής $u=20\\text{ m/min}$ και πρόωση $s=0{,}5\\text{ mm/rev}$, ζητείται να υπολογίσετε τα μεγέθη κατεργασίας. Δίνονται τα διαστήματα πριν και μετά την κοπή $l_a = l_u = 5\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "prompt": "α. Το μήκος κοπής $l$ σε $\\text{mm}$",
        "subq": "α",
        "formula": "$l = L_1 + l_a + l_u = 500 + 5 + 5$",
        "answer": 510,
        "unit": "mm",
        "tolerance": 0.01,
        "explain": "Το συνολικό μήκος κοπής είναι: $l = L_1 + l_a + l_u = 500\\text{ mm} + 5\\text{ mm} + 5\\text{ mm} = 510\\text{ mm}$."
      },
      {
        "kind": "calc",
        "prompt": "β. Τις στροφές περιστροφής του τσοκ του τόρνου $n$ σε $\\text{rpm}$",
        "subq": "β",
        "formula": "$n = \\frac{1000 \\cdot u}{\\pi \\cdot d} = \\frac{1000 \\cdot 20}{\\pi \\cdot 50}$",
        "answer": 127.38,
        "unit": "rpm",
        "tolerance": 0.1,
        "explain": "Οι στροφές είναι: $n = \\frac{1000 \\cdot 20}{3{,}1416 \\cdot 50} \\approx 127{,}38\\text{ rpm}$."
      },
      {
        "kind": "calc",
        "prompt": "γ. Τον χρόνο κοπής $t_h$ σε $\\text{min}$",
        "subq": "γ",
        "formula": "$t_h = \\frac{l}{s \\cdot n} = \\frac{510}{0{,}5 \\cdot 127{,}38}$",
        "answer": 8,
        "unit": "min",
        "tolerance": 0.1,
        "explain": "Ο χρόνος κοπής υπολογίζεται από τη σχέση: $t_h = \\frac{l}{s \\cdot n} = \\frac{510}{0{,}5 \\cdot 127{,}38} \\approx 8\\text{ min}$."
      }
    ]
  }
]
);
