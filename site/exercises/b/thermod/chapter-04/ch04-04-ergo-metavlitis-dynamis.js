window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch04-16252",
    "group": "ch04-04-ergo-metavlitis-dynamis",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "16252",
    "code": "Θέμα 2<sup>ο</sup> · #16252",
    "title": "#16252 — Θέμα 2<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-04-ergo-metavlitis-dynamis",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστό ή Λάθος.",
        "prompt": "α. Ένα σύστημα παράγει έργο όταν η δύναμη που ασκεί το σύστημα και η μετατόπιση του ορίου του έχουν την ίδια διεύθυνση και φορά.",
        "answer": true,
        "explain": "Σωστό. Όταν η δύναμη και η μετατόπιση έχουν την ίδια διεύθυνση και φορά, το έργο είναι θετικό."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Για την παραγωγή έργου από μια δύναμη δεν είναι απαραίτητη η μετακίνηση του σημείου εφαρμογής της.",
        "answer": false,
        "explain": "Λάθος. Για να παραχθεί έργο από δύναμη, απαιτείται μετακίνηση του σημείου εφαρμογής της στη διεύθυνση της δύναμης."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Ισχύς μιας ατράκτου είναι το έργο της ατράκτου ανά μονάδα μήκους.",
        "answer": false,
        "explain": "Λάθος. Η ισχύς είναι το έργο ανά μονάδα χρόνου ($P = \\frac{W}{t}$)."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ της Στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα σχήματα/αριθμούς της Στήλης Α με τους τύπους έργου της Στήλης Β.",
        "images": [
          "images/b/thermod/chapter-04/b_thermod_ch04_16252_fig01.webp",
          "images/b/thermod/chapter-04/b_thermod_ch04_16252_fig02.webp",
          "images/b/thermod/chapter-04/b_thermod_ch04_16252_fig03.webp",
          "images/b/thermod/chapter-04/b_thermod_ch04_16252_fig04.webp"
        ],
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Έργο Ελατηρίου"
          },
          {
            "id": "b",
            "text": "Έργο Επιτάχυνσης"
          },
          {
            "id": "c",
            "text": "Έργο Ανυψώσεως"
          },
          {
            "id": "d",
            "text": "Έργο Ατράκτου"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "d",
          "4": "b"
        },
        "explain": "Η αντιστοίχιση βασίζεται στα αντίστοιχα σχήματα των διαφόρων ειδών έργου (1: Έργο Ανυψώσεως, 2: Έργο Ελατηρίου, 3: Έργο Ατράκτου, 4: Έργο Επιτάχυνσης).",
        "image": "images/b/thermod/chapter-04/b_thermod_ch04_16252_fig01.webp"
      }
    ]
  },
  {
    "id": "ch04-16257",
    "group": "ch04-04-ergo-metavlitis-dynamis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16257",
    "code": "Θέμα 4<sup>ο</sup> · #16257",
    "title": "#16257 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-04-ergo-metavlitis-dynamis",
    "sourceOrder": 4,
    "stem": "Αυτοκίνητο ρυμουλκείται με σταθερή δύναμη $F = 100\\text{ N}$ σε απόσταση $l = 2\\text{ km}$. Εάν το συρματόσχοινο που ρυμουλκεί το αυτοκίνητο σχηματίζει γωνία $60^\\circ$ με τη μετατόπιση, να υπολογίσετε το έργο που απαιτείται να καταναλωθεί. Δίνεται $\\sigma\\upsilon\\nu 60^\\circ = \\frac{1}{2}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "Αυτοκίνητο ρυμουλκείται... να υπολογίσετε το έργο που απαιτείται να καταναλωθεί.",
        "prompt": "Υπολογίστε το έργο $W$ σε $\\text{kJ}$.",
        "formula": "$W = F \\cdot l \\cdot \\sigma\\upsilon\\nu\\theta$",
        "answer": 100,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $W = F \\cdot l \\cdot \\sigma\\upsilon\\nu 60^\\circ$, μετατρέποντας τα $2\\text{ km}$ σε μέτρα ($2000\\text{ m}$).",
        "explain": "$W = 100\\text{ N} \\cdot 2000\\text{ m} \\cdot \\frac{1}{2} = 100000\\text{ J} = 100\\text{ kJ}$.",
        "image": "images/b/thermod/chapter-04/b_thermod_ch04_16257_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "subqPrompt": "Η άτρακτος ενός αυτοκινήτου περιστρέφεται με $n=10\\text{ s}^{-1}$ και ροπή $M=500\\text{ N}\\cdot\\text{m}$. Να υπολογίσετε την ισχύ $P_{\\text{ατρ}}$ της ατράκτου.",
        "prompt": "Υπολογίστε την ισχύ $P_{\\text{ατρ}}$ της ατράκτου σε $\\text{kW}$.",
        "formula": "$P_{\\text{ατρ}} = 2\\pi n M$",
        "answer": 31.4,
        "unit": "kW",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο $P_{\\text{ατρ}} = 2 \\cdot \\pi \\cdot n \\cdot M$ με $\\pi \\approx 3,14$.",
        "explain": "$P_{\\text{ατρ}} = 2 \\cdot 3{,}14 \\cdot 10\\text{ s}^{-1} \\cdot 500\\text{ N}\\cdot\\text{m} = 31400\\text{ W} = 31{,}4\\text{ kW}$."
      }
    ]
  }
]
);
