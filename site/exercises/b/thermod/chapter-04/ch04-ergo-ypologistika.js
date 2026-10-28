window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.thermo = window.SUBJECT_DATA.thermo || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA.thermo.exercises.push(
  {
    "id": "ch4-calc-force-shaft",
    "group": "ergo-ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο (σελ. 3)",
    "title": "Έργο σταθερής δύναμης υπό γωνία & Ισχύς ατράκτου",
    "units": 25,
    "theory": "ergo-statheris-dynamis",
    "stem": "Εφαρμογή υπολογισμού έργου δύναμης υπό γωνία και ισχύος ατράκτου.",
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Αυτοκίνητο ρυμουλκείται με δύναμη F = 100 N σε απόσταση l = 2 km (2000 m) με γωνία 60° (συν60° = 0,5). Υπολόγισε το έργο W σε kJ.",
        "answer": 100,
        "tolerance": 0.05,
        "unit": "kJ",
        "formula": "W = F · l · συνθ",
        "hint": "Μετάτρεψε τα km σε m: l = 2.000 m. Έπειτα υπολόγισε W = 100 · 2000 · 0,5 J και διαίρεσε με το 1000 για kJ.",
        "explain": "W = F · l · συν60° = 100 N · 2000 m · 0,5 = 100.000 J = 100 kJ."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Η άτρακτος περιστρέφεται με n = 10 rps και ροπή M = 500 N·m. Υπολόγισε την ισχύ Pατρ σε kW (χρησιμοποίησε π ≈ 3,1416).",
        "answer": 31.42,
        "tolerance": 0.5,
        "unit": "kW",
        "formula": "P = 2 · π · n · M",
        "hint": "P = 2 · π · 10 · 500 = 10.000 · π W. Σε kW: 10π ≈ 31,416 kW.",
        "explain": "P = 2 · π · n · M = 2 · 3,14159 · 10 · 500 = 31.416 W = 31,42 kW (ή 10π kW)."
      }
    ]
  },
  {
    "id": "ch4-calc-acceleration-vehicle-1",
    "group": "ergo-ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο (σελ. 4)",
    "title": "Επιτάχυνση οχήματος 1500 kg: Ταχύτητα & Χρόνος",
    "units": 25,
    "theory": "ergo-epitaxynsis",
    "stem": "Όχημα μάζας m = 1500 kg επιταχύνει από την ηρεμία με έργο W = 300 kJ.",
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολόγισε την τελική ταχύτητα V του οχήματος σε m/s.",
        "answer": 20,
        "tolerance": 0.01,
        "unit": "m/s",
        "formula": "W = 1/2 · m · V²  =>  V = √(2W / m)",
        "hint": "W = 300 kJ = 300.000 J. V² = 2 · 300.000 / 1500 = 400.",
        "explain": "W = 1/2 · m · V²  =>  300.000 = 750 · V²  =>  V² = 400  =>  V = 20 m/s (δηλ. 72 km/h)."
      },
      {
        "kind": "calc",
        "prompt": "β) Υπολόγισε τον χρόνο t (σε s) αν η ισχύς επιτάχυνσης είναι Pεπ = 25 kW.",
        "answer": 12,
        "tolerance": 0.01,
        "unit": "s",
        "formula": "P = W / t  =>  t = W / P",
        "hint": "t = 300 kJ / 25 kW = 12 s.",
        "explain": "t = W / Pεπ = 300.000 J / 25.000 W = 12 s."
      }
    ]
  },
  {
    "id": "ch4-calc-acceleration-vehicle-2",
    "group": "ergo-ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο (σελ. 5)",
    "title": "Επιτάχυνση οχήματος 2000 kg στα 90 km/h",
    "units": 25,
    "theory": "ergo-epitaxynsis",
    "stem": "Όχημα μάζας m = 2000 kg ξεκινά από ηρεμία και φτάνει τα 90 km/h σε χρόνο t = 12 s.",
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Υπολόγισε την τελική ταχύτητα σε m/s.",
        "answer": 25,
        "tolerance": 0.01,
        "unit": "m/s",
        "formula": "V (m/s) = V (km/h) / 3,6",
        "hint": "90 / 3,6 = 25 m/s.",
        "explain": "V = 90 / 3,6 = 25 m/s."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Υπολόγισε το έργο επιτάχυνσης W σε kJ.",
        "answer": 625,
        "tolerance": 0.01,
        "unit": "kJ",
        "formula": "W = 1/2 · m · V²",
        "hint": "W = 1/2 · 2000 · 25² = 1000 · 625 = 625.000 J = 625 kJ.",
        "explain": "W = 0,5 · 2000 · (25)² = 1000 · 625 = 625.000 J = 625 kJ."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Υπολόγισε την απαιτούμενη μέση ισχύ P σε kW.",
        "answer": 52.08,
        "tolerance": 0.1,
        "unit": "kW",
        "formula": "P = W / t",
        "hint": "P = 625 kJ / 12 s ≈ 52,08 kW.",
        "explain": "P = 625.000 J / 12 s = 52.083,3 W ≈ 52,08 kW."
      }
    ]
  },
  {
    "id": "ch4-calc-spring",
    "group": "ergo-ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο (σελ. 10)",
    "title": "Συμπίεση ελατηρίου K = 10.000 N/m",
    "units": 25,
    "theory": "ergo-elatiriou",
    "stem": "Ελατήριο έχει σταθερά K = 10.000 N/m και συμπιέζεται κατά x = 50 mm.",
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Υπολόγισε το απαιτούμενο έργο συμπίεσης W σε Joules (J).",
        "answer": 12.5,
        "tolerance": 0.01,
        "unit": "J",
        "formula": "W = 1/2 · K · x²",
        "hint": "Μετάτρεψε τα mm σε m: x = 50 mm = 0,05 m. W = 0,5 · 10.000 · 0,05².",
        "explain": "x = 0,05 m. W = 1/2 · 10.000 · (0,05)² = 5.000 · 0,0025 = 12,5 J."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Πόση μέγιστη δύναμη F (σε N) απαιτείται για τη συμπίεση των 50 mm;",
        "answer": 500,
        "tolerance": 0.01,
        "unit": "N",
        "formula": "F = K · x",
        "hint": "F = 10.000 N/m · 0,05 m = 500 N.",
        "explain": "F = K · x = 10.000 · 0,05 = 500 N."
      }
    ]
  },
  {
    "id": "ch4-calc-lifting-machine",
    "group": "ergo-ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο (σελ. 12)",
    "title": "Μηχανή ανύψωσης φορτίου m = 100 kg",
    "units": 25,
    "theory": "ergo-anypsosis",
    "stem": "Ανύψωση σώματος μάζας m = 100 kg σε ύψος h = 20 m σε χρόνο t = 20 s (g = 10 m/s²).",
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Υπολόγισε το βάρος G του σώματος σε N.",
        "answer": 1000,
        "tolerance": 0.01,
        "unit": "N",
        "formula": "G = m · g",
        "hint": "G = 100 kg · 10 m/s² = 1000 N.",
        "explain": "G = m · g = 100 · 10 = 1000 N."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Υπολόγισε το έργο W που παράγει η μηχανή ανύψωσης σε kJ.",
        "answer": 20,
        "tolerance": 0.01,
        "unit": "kJ",
        "formula": "W = G · h = m · g · h",
        "hint": "W = 1000 N · 20 m = 20.000 J = 20 kJ.",
        "explain": "W = 1000 · 20 = 20.000 J = 20 kJ."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Υπολόγισε την ισχύ P της μηχανής ανύψωσης σε kW.",
        "answer": 1,
        "tolerance": 0.01,
        "unit": "kW",
        "formula": "P = W / t",
        "hint": "P = 20.000 J / 20 s = 1.000 W = 1 kW.",
        "explain": "P = W / t = 20.000 J / 20 s = 1000 W = 1 kW."
      }
    ]
  },
  {
    "id": "ch4-calc-acceleration-vehicle-3",
    "group": "ergo-ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο (σελ. 16)",
    "title": "Επιτάχυνση οχήματος 1000 kg στα 36 km/h",
    "units": 25,
    "theory": "ergo-epitaxynsis",
    "stem": "Όχημα μάζας m = 1000 kg ξεκινά από ηρεμία και φτάνει τα 36 km/h σε χρόνο t = 10 s.",
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολόγισε την τελική ταχύτητα σε m/s.",
        "answer": 10,
        "tolerance": 0.01,
        "unit": "m/s",
        "formula": "V (m/s) = V (km/h) / 3,6",
        "hint": "36 / 3,6 = 10 m/s.",
        "explain": "V = 36 / 3,6 = 10 m/s."
      },
      {
        "kind": "calc",
        "prompt": "β) Υπολόγισε το έργο επιτάχυνσης W σε kJ.",
        "answer": 50,
        "tolerance": 0.01,
        "unit": "kJ",
        "formula": "W = 1/2 · m · V²",
        "hint": "W = 1/2 · 1000 · 10² = 500 · 100 = 50.000 J = 50 kJ.",
        "explain": "W = 1/2 · 1000 · 100 = 50.000 J = 50 kJ."
      },
      {
        "kind": "calc",
        "prompt": "γ) Υπολόγισε την απαιτούμενη ισχύ P σε kW.",
        "answer": 5,
        "tolerance": 0.01,
        "unit": "kW",
        "formula": "P = W / t",
        "hint": "P = 50 kJ / 10 s = 5 kW.",
        "explain": "P = W / t = 50.000 J / 10 s = 5.000 W = 5 kW."
      }
    ]
  }
);
