window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch04-17723",
    "group": "ch04-03-ergo-statheris-dynamis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "17723",
    "code": "Θέμα 4<sup>ο</sup> · #17723",
    "title": "#17723 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch04-03-ergo-statheris-dynamis",
    "sourceOrder": 1,
    "stem": "Ένα όχημα μάζας $2000\\text{ kg}$ ξεκινά από την ηρεμία και κινείται με σταθερή επιτάχυνση μέχρι να αποκτήσει ταχύτητα $90\\text{ km/h}$ σε χρόνο $12\\text{ s}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "Υπολογίστε την τελική ταχύτητα σε m/s (μέτρα το δευτερόλεπτο).",
        "prompt": "Υπολογίστε την τελική ταχύτητα σε m/s.",
        "formula": "$V = 90 \\cdot \\frac{1000\\text{ m}}{3600\\text{ s}}$",
        "answer": 25,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τα $90\\text{ km/h}$ σε $\\text{m/s}$ διαιρώντας με το $3,6$.",
        "explain": "Τα $90\\text{ km}$ ισούνται με $90000\\text{ m}$ και η 1 ώρα με $3600\\text{ s}$. Άρα $V = 90 \\cdot \\frac{1000}{3600} = 25\\text{ m/s}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Υπολογίστε το έργο επιτάχυνσης σε $\\text{kJ}$.",
        "formula": "$W = \\frac{1}{2} m V^2$",
        "answer": 625,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο του έργου επιτάχυνσης $W = \\frac{1}{2} m V^2$, διότι $V_1 = 0$.",
        "explain": "$W = \\frac{1}{2} \\cdot 2000\\text{ kg} \\cdot (25\\text{ m/s})^2 = 1000 \\cdot 625 = 625000\\text{ J} = 625\\text{ kJ}$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Υπολογίστε την ισχύ που απαιτείται σε $\\text{kW}$.",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 52.08,
        "unit": "kW",
        "tolerance": 0.05,
        "hint": "Διαιρέστε το έργο $W$ με τον χρόνο $t = 12\\text{ s}$.",
        "explain": "$P = \\frac{W}{t} = \\frac{625\\text{ kJ}}{12\\text{ s}} = 52{,}08\\text{ kW}$."
      }
    ]
  },
  {
    "id": "ch04-19642",
    "group": "ch04-03-ergo-statheris-dynamis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19642",
    "code": "Θέμα 4<sup>ο</sup> · #19642",
    "title": "#19642 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch04-03-ergo-statheris-dynamis",
    "sourceOrder": 2,
    "stem": "Μια μηχανή ανύψωσης αντικειμένων ανυψώνει ένα σώμα μάζας $m = 100\\text{ kg}$ σε ύψος $h = 20\\text{ m}$ και σε χρόνο $t = 20\\text{ s}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "Να υπολογίσετε το βάρος $G$ του σώματος.",
        "prompt": "Να υπολογίσετε το βάρος $G$ του σώματος σε $\\text{N}$.",
        "formula": "$G = m \\cdot g$",
        "answer": 1000,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τη μάζα $m$ επί την επιτάχυνση της βαρύτητας $g$.",
        "explain": "$G = m \\cdot g = 100\\text{ kg} \\cdot 10\\text{ m/s}^2 = 1000\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε το έργο $W$ που παράγει η μηχανή ανυψώνοντας το σώμα σε $\\text{kJ}$.",
        "formula": "$W = G \\cdot h$",
        "answer": 20,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το βάρος $G$ επί το ύψος $h$.",
        "explain": "$W = G \\cdot h = 1000\\text{ N} \\cdot 20\\text{ m} = 20000\\text{ J} = 20\\text{ kJ}$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Να υπολογίσετε την ισχύ $P$ της μηχανής ανύψωσης σε $\\text{W}$ (ή $\\text{kW}$).",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 1000,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο $W$ με τον χρόνο $t$.",
        "explain": "$P = \\frac{W}{t} = \\frac{20000\\text{ J}}{20\\text{ s}} = 1000\\text{ W} = 1\\text{ kW}$."
      }
    ]
  }
]
);
