window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(
{
    "id": "mc-si-1",
    "group": "units",
    "kind": "mc",
    "code": "Θέμα 2ο · 2.1",
    "title": "Πίεση, SI και ισχύς",
    "units": 9,
    "theory": "monades",
    "items": [
      {
        "kind": "mc",
        "prompt": "Η πίεση P μετριέται σε:",
        "options": [
          {
            "id": "a",
            "text": "m/s"
          },
          {
            "id": "b",
            "text": "PS"
          },
          {
            "id": "c",
            "text": "Joule"
          },
          {
            "id": "d",
            "text": "bar"
          }
        ],
        "answer": "d",
        "explain": "Η πίεση στο SI είναι Pa (N/m²). Στην πράξη χρησιμοποιούμε και το bar. Τα m/s είναι ταχύτητα, το PS ίπποι, το Joule ενέργεια."
      },
      {
        "kind": "mc",
        "prompt": "Ποια από τις παρακάτω μονάδες δεν είναι μονάδα του Διεθνούς Συστήματος (SI);",
        "options": [
          {
            "id": "a",
            "text": "Joule"
          },
          {
            "id": "b",
            "text": "Kelvin"
          },
          {
            "id": "c",
            "text": "Kcal"
          },
          {
            "id": "d",
            "text": "m³"
          }
        ],
        "answer": "c",
        "explain": "Η χιλιοθερμίδα (kcal) είναι καταργημένη. 1 cal = 4,186 J. Joule, Kelvin και m³ ανήκουν στο SI."
      },
      {
        "kind": "mc",
        "prompt": "Μονάδα μέτρησης της ισχύος είναι:",
        "options": [
          {
            "id": "a",
            "text": "kg"
          },
          {
            "id": "b",
            "text": "Watt"
          },
          {
            "id": "c",
            "text": "Pascal"
          },
          {
            "id": "d",
            "text": "Kelvin"
          }
        ],
        "answer": "b",
        "explain": "Ισχύς = έργο / χρόνος. Μονάδα SI: 1 W = 1 J/s."
      }
    ]
  },
{
    "id": "match-si-base",
    "group": "units",
    "kind": "match",
    "code": "Θέμα 2ο · 2.1α",
    "title": "Βασικά μεγέθη και μονάδες",
    "units": 4,
    "theory": "monades",
    "stem": "Αντιστοίχισε κάθε μέγεθος με τη μονάδα του στο SI. Δύο γράμματα θα περισσέψουν.",
    "items": [
      {
        "kind": "match",
        "prompt": "Μέγεθος → μονάδα SI",
        "left": [
          {
            "id": "1",
            "text": "Μήκος"
          },
          {
            "id": "2",
            "text": "Μάζα"
          },
          {
            "id": "3",
            "text": "Χρόνος"
          },
          {
            "id": "4",
            "text": "Ηλεκτρικό ρεύμα"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Μέτρο"
          },
          {
            "id": "b",
            "text": "Λεπτό"
          },
          {
            "id": "c",
            "text": "Αμπέρ"
          },
          {
            "id": "d",
            "text": "Χιλιόγραμμο"
          },
          {
            "id": "e",
            "text": "Γραμμάριο"
          },
          {
            "id": "f",
            "text": "δευτερόλεπτο"
          }
        ],
        "pairs": {
          "1": "a",
          "2": "d",
          "3": "f",
          "4": "c"
        },
        "explain": "SI: μήκος → m, μάζα → kg (όχι g), χρόνος → s (όχι min), ρεύμα → A."
      }
    ]
  },
{
    "id": "match-prefixes",
    "group": "units",
    "kind": "match",
    "code": "Θέμα 2ο · 2.1β",
    "title": "Πολλαπλάσια και υποπολλαπλάσια",
    "units": 5,
    "theory": "monades",
    "stem": "Αντιστοίχισε το σύμβολο με τη δύναμη του 10. Ένα γράμμα θα περισσέψει.",
    "items": [
      {
        "kind": "match",
        "prompt": "Σύμβολο → δύναμη του 10",
        "left": [
          {
            "id": "1",
            "text": "K"
          },
          {
            "id": "2",
            "text": "M"
          },
          {
            "id": "3",
            "text": "d"
          },
          {
            "id": "4",
            "text": "c"
          },
          {
            "id": "5",
            "text": "m"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "10⁻¹"
          },
          {
            "id": "b",
            "text": "10³"
          },
          {
            "id": "c",
            "text": "10⁻²"
          },
          {
            "id": "d",
            "text": "10⁹"
          },
          {
            "id": "e",
            "text": "10⁻³"
          },
          {
            "id": "f",
            "text": "10⁶"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "f",
          "3": "a",
          "4": "c",
          "5": "e"
        },
        "explain": "k/K = 10³, M = 10⁶, d = 10⁻¹, c = 10⁻², m = 10⁻³. Το 10⁹ (G) περισσεύει."
      }
    ]
  },
{
    "id": "fill-pressure",
    "group": "units",
    "kind": "blank",
    "code": "Θέμα 2ο · 2.2",
    "title": "Pa και bar",
    "units": 16,
    "theory": "monades",
    "stem": "Δίνονται οι μονάδες Pa και bar.",
    "items": [
      {
        "kind": "blank",
        "prompt": "Συμπλήρωσε τα κενά.",
        "textBefore": [
          "Οι μονάδες αυτές μετρούν το μέγεθος ",
          ". Η μονάδα του S.I. είναι το ",
          ". Η σχέση που τις συνδέει είναι ",
          "."
        ],
        "answers": [
          "πίεση",
          "Pa",
          "1 bar = 10⁵ Pa"
        ],
        "bank": [
          "πίεση",
          "ενέργεια",
          "ισχύς",
          "Pa",
          "bar",
          "N",
          "1 bar = 10⁵ Pa",
          "1 Pa = 10⁵ bar"
        ],
        "explain": "Pa και bar μετρούν πίεση. SI μονάδα: Pa. 1 bar = 10⁵ Pa = 10⁵ N/m²."
      },
      {
        "kind": "mc",
        "prompt": "Ποιο είναι το κύριο πλεονέκτημα της χρήσης της μονάδας bar;",
        "options": [
          {
            "id": "a",
            "text": "Είναι η βασική μονάδα πίεσης του SI."
          },
          {
            "id": "b",
            "text": "Η τιμή της είναι περίπου ίση με την ατμοσφαιρική πίεση."
          },
          {
            "id": "c",
            "text": "Είναι μικρότερη από το Pascal, άρα πιο ακριβής."
          }
        ],
        "answer": "b",
        "explain": "1 bar ≈ 1 atm (ακριβώς 1 atm = 1,01325 bar). Γι’ αυτό είναι πρακτική μονάδα."
      }
    ]
  },
{
    "id": "mc-si-2",
    "group": "units",
    "kind": "mc",
    "code": "Θέμα 2ο · 2.1",
    "title": "Ταχύτητα, Νιούτον, ειδικός όγκος",
    "units": 9,
    "theory": "monades",
    "items": [
      {
        "kind": "mc",
        "prompt": "Η μονάδα μέτρησης της ταχύτητας στο S.I είναι:",
        "options": [
          {
            "id": "a",
            "text": "m/s"
          },
          {
            "id": "b",
            "text": "m/s²"
          },
          {
            "id": "c",
            "text": "N·m"
          },
          {
            "id": "d",
            "text": "km/h"
          }
        ],
        "answer": "a",
        "explain": "Ταχύτητα = μήκος / χρόνος → m/s. Το m/s² είναι επιτάχυνση, το N·m είναι Joule, το km/h δεν είναι SI."
      },
      {
        "kind": "mc",
        "prompt": "Το N (Νιούτον), το οποίο είναι σύνθετη μονάδα, ισούται με:",
        "options": [
          {
            "id": "a",
            "text": "kg/s²"
          },
          {
            "id": "b",
            "text": "kg·m"
          },
          {
            "id": "c",
            "text": "J/s"
          },
          {
            "id": "d",
            "text": "kg·m/s²"
          }
        ],
        "answer": "d",
        "explain": "Από F = m·a: 1 N = 1 kg · 1 m/s². Το J/s είναι Watt."
      },
      {
        "kind": "mc",
        "prompt": "Η μονάδα μέτρησης του ειδικού όγκου (ν) στο S.I είναι:",
        "options": [
          {
            "id": "a",
            "text": "kg/m³"
          },
          {
            "id": "b",
            "text": "N·m"
          },
          {
            "id": "c",
            "text": "m³/kg"
          },
          {
            "id": "d",
            "text": "m³/N"
          }
        ],
        "answer": "c",
        "explain": "Ειδικός όγκος = όγκος / μάζα → m³/kg. Το kg/m³ είναι πυκνότητα (το αντίστροφο)."
      }
    ]
  },
{
    "id": "match-quantities",
    "group": "units",
    "kind": "match",
    "code": "Θέμα 2ο · 2.2",
    "title": "Μεγέθη και μονάδες",
    "units": 12,
    "theory": "monades",
    "stem": "Αντιστοίχισε κάθε μέγεθος με τη μονάδα του. Ένα γράμμα θα περισσέψει.",
    "items": [
      {
        "kind": "match",
        "prompt": "Μέγεθος → μονάδα",
        "left": [
          {
            "id": "1",
            "text": "Ισχύς"
          },
          {
            "id": "2",
            "text": "Πίεση"
          },
          {
            "id": "3",
            "text": "Δύναμη"
          },
          {
            "id": "4",
            "text": "Έργο"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "K (Κέλβιν)"
          },
          {
            "id": "b",
            "text": "N (Νιούτον)"
          },
          {
            "id": "c",
            "text": "W (Βατ)"
          },
          {
            "id": "d",
            "text": "Pa (Πασκάλ)"
          },
          {
            "id": "e",
            "text": "J (Τζάουλ)"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "d",
          "3": "b",
          "4": "e"
        },
        "explain": "Ισχύς W, πίεση Pa, δύναμη N, έργο J. Το K (θερμοκρασία) περισσεύει."
      }
    ]
  },
{
    "id": "fill-derived",
    "group": "units",
    "kind": "blank",
    "code": "Θέμα 2ο · 2.3",
    "title": "Παράγωγα μεγέθη",
    "units": 4,
    "theory": "monades",
    "stem": "Η ταχύτητα και ο όγκος είναι παράγωγα μεγέθη. Συμπλήρωσε με ποια βασικά μεγέθη συνδέονται.",
    "items": [
      {
        "kind": "blank",
        "prompt": "Σχέσεις παραγώγων μεγεθών",
        "textBefore": [
          "ταχύτητα = ",
          " / ",
          "    ·    όγκος = ",
          " × ",
          " × ",
          ""
        ],
        "answers": [
          "μήκος",
          "χρόνος",
          "μήκος",
          "μήκος",
          "μήκος"
        ],
        "bank": [
          "μήκος",
          "χρόνος",
          "μάζα",
          "θερμοκρασία"
        ],
        "explain": "Ταχύτητα = μήκος / χρόνος (m/s). Όγκος = μήκος × μήκος × μήκος (m³)."
      }
    ]
  }
);
