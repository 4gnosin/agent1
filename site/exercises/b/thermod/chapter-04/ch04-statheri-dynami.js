window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch04-17723",
    "group": "ch04-statheri-dynami",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #17723",
    "bankCode": "17723",
    "title": "#17723 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "thermod-ch04-statheri-dynami",
    "stem": "Ένα όχημα μάζας 2000 kg ξεκινά από την ηρεμία και κινείται με σταθερή επιτάχυνση μέχρι να αποκτήσει ταχύτητα 90 km/h σε χρόνο 12 δευτερόλεπτα.",
    "givens": [
      {
        "label": "m",
        "value": "2000 kg"
      },
      {
        "label": "V₁",
        "value": "0 m/s"
      },
      {
        "label": "V₂",
        "value": "90 km/h"
      },
      {
        "label": "t",
        "value": "12 s"
      }
    ],
    "sourceOrder": 5,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Υπολογίστε την τελική ταχύτητα σε m/s.",
        "formula": "V = V_kmh / 3.6",
        "answer": 25,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τα km/h με το 3,6 (ή πολλαπλασιάστε με 1000/3600).",
        "explain": "\\( V = 90 \\cdot \\frac{1000\\text{ m}}{3600\\text{ s}} = 25\\text{ m/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Υπολογίστε το έργο επιτάχυνσης σε kJ.",
        "formula": "W = (1/2) · m · V²",
        "answer": 625,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο W = (1/2)·m·V² και μετατρέψτε τα J σε kJ.",
        "explain": "\\( W = \\frac{1}{2} m V^2 = \\frac{1}{2} \\cdot 2000\\text{ kg} \\cdot (25\\text{ m/s})^2 = 1000 \\cdot 625 = 625.000\\text{ J} = 625\\text{ kJ} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Υπολογίστε την ισχύ που απαιτείται σε kW.",
        "formula": "P = W / t",
        "answer": 52.08,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το έργο (σε kJ) με τον χρόνο t = 12 s.",
        "explain": "\\( P = \\frac{W}{t} = \\frac{625\\text{ kJ}}{12\\text{ s}} \\approx 52{,}08\\text{ kW} \\)."
      }
    ]
  },
  {
    "id": "ch04-19642",
    "group": "ch04-statheri-dynami",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #19642",
    "bankCode": "19642",
    "title": "#19642 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "thermod-ch04-statheri-dynami",
    "stem": "Μια μηχανή ανύψωσης αντικειμένων ανυψώνει ένα σώμα μάζας m = 100 kg σε ύψος h = 20 m σε χρόνο t = 20 s. Δίνεται g = 10 m/s².",
    "givens": [
      {
        "label": "m",
        "value": "100 kg"
      },
      {
        "label": "h",
        "value": "20 m"
      },
      {
        "label": "t",
        "value": "20 s"
      },
      {
        "label": "g",
        "value": "10 m/s²"
      }
    ],
    "sourceOrder": 6,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε το βάρος G του σώματος.",
        "formula": "G = m · g",
        "answer": 1000,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "G = m · g",
        "explain": "\\( G = m \\cdot g = 100\\text{ kg} \\cdot 10\\text{ m/s}^2 = 1000\\text{ N} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε το έργο W που παράγει η μηχανή ανυψώνοντας το σώμα σε kJ.",
        "formula": "W = G · h",
        "answer": 20,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Υπολογίστε W = G · h σε J και εκφράστε σε kJ.",
        "explain": "\\( W = G \\cdot h = 1000\\text{ N} \\cdot 20\\text{ m} = 20.000\\text{ J} = 20\\text{ kJ} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Να υπολογίσετε την ισχύ P της μηχανής ανύψωσης σε kW.",
        "formula": "P = W / t",
        "answer": 1,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "P = W / t = 20 kJ / 20 s.",
        "explain": "\\( P = \\frac{W}{t} = \\frac{20.000\\text{ J}}{20\\text{ s}} = 1000\\text{ W} = 1\\text{ kW} \\)."
      }
    ]
  }
]
);
