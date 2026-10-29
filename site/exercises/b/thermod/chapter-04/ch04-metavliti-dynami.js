window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch04-16257",
    "group": "ch04-metavliti-dynami",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #16257",
    "bankCode": "16257",
    "title": "#16257 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "thermod-ch04-metavliti-dynami",
    "stem": "Υπολογισμός έργου σταθερής δύναμης υπό γωνία και ισχύος περιστρεφόμενης ατράκτου.",
    "givens": [
      {
        "label": "F",
        "value": "100 N"
      },
      {
        "label": "l",
        "value": "2 km = 2000 m"
      },
      {
        "label": "συν60°",
        "value": "1/2 = 0,5"
      },
      {
        "label": "n",
        "value": "10 στροφές/s"
      },
      {
        "label": "M",
        "value": "500 N·m"
      },
      {
        "label": "π",
        "value": "3,14"
      }
    ],
    "sourceOrder": 7,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Αυτοκίνητο ρυμουλκείται με σταθερή δύναμη F = 100 N σε απόσταση l = 2 km υπό γωνία 60° (συν60° = 1/2). Υπολογίστε το έργο σε kJ.",
        "formula": "W = F · l · συνθ",
        "answer": 100,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Προσοχή στη μετατροπή 2 km = 2000 m. Διαιρέστε με 1000 για kJ.",
        "explain": "\\( W = F \\cdot l \\cdot \\cos 60^\\circ = 100\\text{ N} \\cdot 2000\\text{ m} \\cdot 0{,}5 = 100.000\\text{ J} = 100\\text{ kJ} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Η άτρακτος ενός αυτοκινήτου περιστρέφεται με n = 10 στροφές/s και ροπή M = 500 N·m. Υπολογίστε την ισχύ της ατράκτου σε kW (χρησιμοποιήστε π = 3,14).",
        "formula": "P = 2 · π · n · M",
        "answer": 31.4,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "P = 2 · 3,14 · n · M σε W, μετά διαιρέστε με 1000 για kW.",
        "explain": "\\( P_{\\text{ατρ}} = 2 \\pi n M = 2 \\cdot 3{,}14 \\cdot 10 \\cdot 500 = 31.400\\text{ W} = 31{,}4\\text{ kW} \\)."
      }
    ]
  },
  {
    "id": "ch04-17102",
    "group": "ch04-metavliti-dynami",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #17102",
    "bankCode": "17102",
    "title": "#17102 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "thermod-ch04-metavliti-dynami",
    "stem": "Ένα όχημα μάζας m = 1500 kg επιταχύνει από την ηρεμία μέχρι να αποκτήσει ταχύτητα V. Το παραγόμενο έργο επιτάχυνσης είναι W = 300 kJ.",
    "givens": [
      {
        "label": "m",
        "value": "1500 kg"
      },
      {
        "label": "W",
        "value": "300 kJ = 300.000 J"
      },
      {
        "label": "V₁",
        "value": "0 m/s"
      },
      {
        "label": "P_επ",
        "value": "25 kW"
      }
    ],
    "sourceOrder": 8,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε την ταχύτητα V σε m/s.",
        "formula": "V = √(2 · W / m)",
        "answer": 20,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε το έργο σε J: 300 kJ = 300.000 J και λύστε ως προς V = √(2W/m).",
        "explain": "\\( W = \\frac{1}{2} m V^2 \\Rightarrow V^2 = \\frac{2 W}{m} = \\frac{2 \\cdot 300.000\\text{ J}}{1500\\text{ kg}} = 400\\text{ m}^2/\\text{s}^2 \\Rightarrow V = \\sqrt{400} = 20\\text{ m/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε τον χρόνο t που απαιτείται σε s, αν η ισχύς επιτάχυνσης είναι P_επ = 25 kW.",
        "formula": "t = W / P",
        "answer": 12,
        "unit": "s",
        "tolerance": 0.01,
        "hint": "t = W / P = 300 kJ / 25 kW.",
        "explain": "\\( t = \\frac{W}{P_{\\text{επ}}} = \\frac{300\\text{ kJ}}{25\\text{ kW}} = 12\\text{ s} \\)."
      }
    ]
  },
  {
    "id": "ch04-18645",
    "group": "ch04-metavliti-dynami",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18645",
    "bankCode": "18645",
    "title": "#18645 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "thermod-ch04-metavliti-dynami",
    "stem": "Η σταθερά ενός ελατηρίου είναι K = 10.000 N/m.",
    "givens": [
      {
        "label": "K",
        "value": "10.000 N/m"
      },
      {
        "label": "l",
        "value": "50 mm = 0,05 m"
      }
    ],
    "sourceOrder": 9,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Υπολογίστε το έργο που απαιτείται για να συμπιεσθεί το ελατήριο κατά 50 mm (σε Joules).",
        "formula": "W = (1/2) · K · l²",
        "answer": 12.5,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τη συμπίεση σε μέτρα: l = 50 mm = 0,05 m.",
        "explain": "\\( W = \\frac{1}{2} K l^2 = \\frac{1}{2} \\cdot 10.000\\text{ N/m} \\cdot (0{,}05\\text{ m})^2 = 5000 \\cdot 0{,}0025 = 12{,}5\\text{ J} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Πόση δύναμη F απαιτείται για την παραπάνω συμπίεση των 50 mm σε N;",
        "formula": "F = K · l",
        "answer": 500,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "F = K · l με l = 0,05 m.",
        "explain": "\\( F = K \\cdot l = 10.000\\text{ N/m} \\cdot 0{,}05\\text{ m} = 500\\text{ N} \\)."
      },
      {
        "kind": "mc",
        "prompt": "4.3 Πώς απεικονίζεται γραφικά το παραγόμενο έργο σε διάγραμμα δύναμης – μεταβολής μήκους (F–l);",
        "options": [
          {
            "id": "a",
            "text": "Ως το εμβαδόν ορθογωνίου τριγώνου με βάση l = 0,05 m και ύψος F = 500 N, ίσο με (1/2) · F · l = 12,5 J."
          },
          {
            "id": "b",
            "text": "Ως το εμβαδόν ορθογωνίου παραλληλογράμμου με πλευρές F και l."
          },
          {
            "id": "c",
            "text": "Ως καμπυλόγραμμο τραπέζιο κάτω από παραβολή."
          }
        ],
        "answer": "a",
        "explain": "Στο διάγραμμα F–l, η δύναμη αυξάνεται γραμμικά από το 0 έως τα 500 N, σχηματίζοντας ορθογώνιο τρίγωνο με εμβαδόν \\( E = \\frac{1}{2} \\cdot F \\cdot l = \\frac{1}{2} \\cdot 500 \\cdot 0{,}05 = 12{,}5\\text{ J} \\)."
      }
    ]
  },
  {
    "id": "ch04-26937",
    "group": "ch04-metavliti-dynami",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26937",
    "bankCode": "26937",
    "title": "#26937 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "thermod-ch04-metavliti-dynami",
    "stem": "Ένα όχημα μάζας 1.000 kg ξεκινά από την ηρεμία και κινείται με σταθερή επιτάχυνση μέχρι να αποκτήσει ταχύτητα 36 km/h σε χρόνο 10 δευτερόλεπτα.",
    "givens": [
      {
        "label": "m",
        "value": "1000 kg"
      },
      {
        "label": "V₁",
        "value": "0 m/s"
      },
      {
        "label": "V₂",
        "value": "36 km/h"
      },
      {
        "label": "t",
        "value": "10 s"
      }
    ],
    "sourceOrder": 10,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολογίστε την τελική ταχύτητα σε m/s.",
        "formula": "V = V_kmh / 3.6",
        "answer": 10,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "36 km/h = 36.000 m / 3600 s.",
        "explain": "\\( V = 36 \\cdot \\frac{1000\\text{ m}}{3600\\text{ s}} = 10\\text{ m/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Υπολογίστε το έργο επιτάχυνσης σε kJ.",
        "formula": "W = (1/2) · m · V²",
        "answer": 50,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "W = (1/2) · 1000 · 10² σε J και μετατρέψτε σε kJ.",
        "explain": "\\( W = \\frac{1}{2} m V^2 = \\frac{1}{2} \\cdot 1000\\text{ kg} \\cdot (10\\text{ m/s})^2 = 500 \\cdot 100 = 50.000\\text{ J} = 50\\text{ kJ} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Υπολογίστε την ισχύ που απαιτείται σε kW.",
        "formula": "P = W / t",
        "answer": 5,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "P = W / t = 50 kJ / 10 s.",
        "explain": "\\( P = \\frac{W}{t} = \\frac{50\\text{ kJ}}{10\\text{ s}} = 5\\text{ kW} \\)."
      }
    ]
  }
]
);
