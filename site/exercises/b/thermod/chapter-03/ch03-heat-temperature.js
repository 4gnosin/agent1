window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch03-16234",
    "group": "ch03-heat-temperature",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16234",
    "code": "Θέμα 4<sup>ο</sup> · #16234",
    "title": "#16234 — Θέμα 4<sup>ο</sup> (α–β)",
    "stem": "Μία θερμική μηχανή, που ακολουθεί τον κύκλο του Carnot, λειτουργεί ανάμεσα στις θερμοκρασίες 353 °C και 104 °F.",
    "units": 25,
    "theory": "ch03-heat-temperature",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε τη χαμηλή θερμοκρασία σε κλίμακα Κέλβιν (από 104 °F).",
        "formula": "T₂ = t₂ + 273",
        "answer": 313,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε πρώτα τα °F σε °C και μετά σε K.",
        "explain": "Από τη σχέση \\( \\frac{C}{5} = \\frac{F-32}{9} \\) βρίσκουμε \\( t_2 = 40\\text{ °C} \\) και \\( T_2 = 40 + 273 = 313\\text{ K} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε τον θερμικό βαθμό απόδοσης της μηχανής nθ.",
        "formula": "nθ = 1 - (T₂ / T₁)",
        "answer": 0.5,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τις θερμοκρασίες σε Kelvin: T₁ = 626 K και T₂ = 313 K.",
        "explain": " \\( n_\\theta = 1 - \\frac{313}{626} = 1 - 0.5 = 0.5 \\)."
      }
    ]
  },
  {
    "id": "ch03-17103",
    "group": "ch03-heat-temperature",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "17103",
    "code": "Θέμα 4<sup>ο</sup> · #17103",
    "title": "#17103 — Θέμα 4<sup>ο</sup> (α–β)",
    "stem": "Μία θερμική μηχανή που ακολουθεί τον κύκλο του Carnot, λειτουργεί ανάμεσα στις θερμοκρασίες Τ₁ (υψηλή) και Τ₂ = 149 °F (χαμηλή). Ο θερμικός βαθμός απόδοσης της μηχανής είναι nθ = 0.8.",
    "units": 25,
    "theory": "ch03-heat-temperature",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να μετατρέψετε τη θερμοκρασία Τ₂ σε κλίμακα Κέλβιν.",
        "formula": "T₂ = t₂ + 273",
        "answer": 338,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τα 149 °F σε °C και προσθέστε 273.",
        "explain": "\\( t_2 = \\frac{149-32}{9} \\cdot 5 = 65\\text{ °C} \\), οπότε \\( T_2 = 65 + 273 = 338\\text{ K} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε τη θερμοκρασία Τ₁ σε κλίμακα Κέλβιν.",
        "formula": "T₁ = T₂ / (1 - nθ)",
        "answer": 1690,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Λύστε ως προς T₁ από τον τύπο του βαθμού απόδοσης.",
        "explain": "\\( T_1 = \\frac{338}{1 - 0.8} = \\frac{338}{0.2} = 1690\\text{ K} \\)."
      }
    ]
  },
  {
    "id": "ch03-18621",
    "group": "ch03-heat-temperature",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18621",
    "code": "Θέμα 4<sup>ο</sup> · #18621",
    "title": "#18621 — Θέμα 4<sup>ο</sup> (α–γ)",
    "stem": "Μέσα από ένα χαλύβδινο έλασμα πάχους L και εμβαδού Α = 2 m² διέρχεται θερμότητα Q = 100 kJ. Στη μία πλευρά η θερμοκρασία είναι θ₁ = 60 °C και στην άλλη θ₂ = 313 K σε χρόνο t = 4 s. Δίνεται λ = 50 W/(m·K).",
    "units": 25,
    "theory": "ch03-heat-temperature",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί η ροή της θερμότητας Q̇.",
        "formula": "Q̇ = Q / t",
        "answer": 25,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαίρεσε το συνολικό ποσό θερμότητας Q με τον χρόνο t.",
        "explain": "\\( \\dot{Q} = \\frac{100\\text{ kJ}}{4\\text{ s}} = 25\\text{ kW} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί η θερμοκρασία θ₁ σε κλίμακα Κέλβιν.",
        "formula": "T = t + 273",
        "answer": 333,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Πρόσθεσε 273 στους βαθμούς Κελσίου.",
        "explain": "\\( \\theta_1 = 60 + 273 = 333\\text{ K} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Να υπολογιστεί το πάχος του ελάσματος L.",
        "formula": "L = (λ · A · (θ₁ - θ₂)) / Q̇",
        "answer": 0.08,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον νόμο του Fourier.",
        "explain": "\\( L = \\frac{50 \\cdot 2 \\cdot (333 - 313)}{25000} = \\frac{2000}{25000} = 0.08\\text{ m} \\)."
      }
    ]
  },
  {
    "id": "ch03-18707",
    "group": "ch03-heat-temperature",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18707",
    "code": "Θέμα 4<sup>ο</sup> · #18707",
    "title": "#18707 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-heat-temperature",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 α) Να μετατρέψετε την θερμοκρασία των 30 °C σε κλίμακα Κέλβιν.",
        "formula": "T = t + 273",
        "answer": 303,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στους 30 °C.",
        "explain": "\\( T = 30 + 273 = 303\\text{ K} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.1 β) Να μετατρέψετε την θερμοκρασία των 30 °C σε κλίμακα Φαρενάιτ.",
        "formula": "F = (9/5) · C + 32",
        "answer": 86,
        "unit": "°F",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο μετατροπής C σε F.",
        "explain": "\\( F = \\frac{9}{5} \\cdot 30 + 32 = 54 + 32 = 86\\text{ °F} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να μετατρέψετε τα 10.000 BTU σε Kcal (δίνεται 1 BTU = 0,252 Kcal).",
        "formula": "E = BTU · 0.252",
        "answer": 2520,
        "unit": "Kcal",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τα BTU με το αντίστοιχό τους σε Kcal.",
        "explain": "\\( 10000 \\cdot 0.252 = 2520\\text{ Kcal} \\)."
      }
    ]
  },
  {
    "id": "ch03-19686",
    "group": "ch03-heat-temperature",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19686",
    "code": "Θέμα 4<sup>ο</sup> · #19686",
    "title": "#19686 — Θέμα 4<sup>ο</sup> (α–β)",
    "stem": "Σε μία μεταβολή σε κλειστό σύστημα χορηγούνται 2500 KJ μηχανικού έργου και έχουμε αύξηση της εσωτερικής ενέργειας κατά 700 KJ.",
    "units": 25,
    "theory": "ch03-heat-temperature",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να προσδιορίσετε τη θερμότητα Q που μεταφέρθηκε (σε KJ).",
        "formula": "Q = ΔU + W",
        "answer": -1800,
        "unit": "KJ",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον πρώτο θερμοδυναμικό νόμο λαμβάνοντας υπόψη το πρόσημο του έργου που χορηγείται στο σύστημα.",
        "explain": "\\( Q = 700\\text{ KJ} - 2500\\text{ KJ} = -1800\\text{ KJ} \\)."
      },
      {
        "kind": "mc",
        "prompt": "β) Ποια είναι η διεύθυνση μεταφοράς της θερμότητας;",
        "options": [
          {
            "id": "a",
            "text": "Από το περιβάλλον προς το σύστημα"
          },
          {
            "id": "b",
            "text": "Από το σύστημα προς το περιβάλλον"
          },
          {
            "id": "c",
            "text": "Δεν υπάρχει μεταφορά θερμότητας"
          }
        ],
        "answer": "b",
        "explain": "Επειδή το ποσό θερμότητας είναι αρνητικό (\\( Q = -1800\\text{ KJ} \\)), η θερμότητα αφαιρείται από το σύστημα και μεταφέρεται προς το περιβάλλον."
      }
    ]
  }
]
);
