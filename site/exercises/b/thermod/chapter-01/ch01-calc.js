window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(
{
    "id": "calc-vehicle",
    "group": "calc",
    "kind": "calc",
    "code": "Θέμα 4ο",
    "title": "Όχημα σε επιτάχυνση",
    "units": 25,
    "theory": "monades",
    "stem": "Ένα όχημα μάζας 2000 kg ξεκινά από την ηρεμία και κινείται με σταθερή επιτάχυνση μέχρι να αποκτήσει ταχύτητα 90 km/h σε χρόνο 12 s.",
    "givens": [
      {
        "label": "m",
        "value": "2000 kg"
      },
      {
        "label": "u₀",
        "value": "0"
      },
      {
        "label": "u",
        "value": "90 km/h"
      },
      {
        "label": "t",
        "value": "12 s"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την τελική ταχύτητα σε m/s.",
        "formula": "v = 90 · (1000 / 3600)",
        "answer": 25,
        "unit": "m/s",
        "hint": "1 km/h = 1000 m / 3600 s = 1/3,6 m/s.",
        "explain": "90 / 3,6 = 25 m/s."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε το έργο επιτάχυνσης.",
        "formula": "W = ΔΕₖ = ½ m v²",
        "answer": 625000,
        "unit": "J",
        "hint": "Από ηρεμία, το έργο ισούται με την κινητική ενέργεια που αποκτά το όχημα.",
        "explain": "W = ½ · 2000 · 25² = 1000 · 625 = 625 000 J."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ισχύ που απαιτείται.",
        "formula": "P = W / t",
        "answer": 52083,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Ισχύς είναι έργο στη μονάδα του χρόνου.",
        "explain": "P = 625 000 / 12 ≈ 52 083 W (ή 52,08 kW)."
      }
    ]
  },
{
    "id": "calc-lift",
    "group": "calc",
    "kind": "calc",
    "code": "Θέμα 4ο",
    "title": "Μηχανή ανύψωσης",
    "units": 25,
    "theory": "monades",
    "stem": "Μια μηχανή ανύψωσης ανυψώνει σώμα μάζας m = 100 kg σε ύψος h = 20 m σε χρόνο t = 20 s. Δίνεται g = 10 m/s².",
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
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογίσετε το βάρος G του σώματος.",
        "formula": "G = m g",
        "answer": 1000,
        "unit": "N",
        "hint": "Βάρος είναι δύναμη: μάζα επί επιτάχυνση βαρύτητας.",
        "explain": "G = 100 · 10 = 1000 N."
      },
      {
        "kind": "calc",
        "prompt": "Να υπολογίσετε το έργο W που παράγει η μηχανή.",
        "formula": "W = G · h = m g h",
        "answer": 20000,
        "unit": "J",
        "hint": "Το έργο ανύψωσης ισούται με την αύξηση δυναμικής ενέργειας.",
        "explain": "W = 1000 · 20 = 20 000 J."
      },
      {
        "kind": "calc",
        "prompt": "Να υπολογίσετε την ισχύ P της μηχανής ανύψωσης.",
        "formula": "P = W / t",
        "answer": 1000,
        "unit": "W",
        "hint": "Ισχύς = έργο / χρόνος.",
        "explain": "P = 20 000 / 20 = 1000 W."
      }
    ]
  }
);
