window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"].exercises.push(...
[
  {
    "id": "ch02-23654",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "calc",
    "layout": "unified",
    "stem": "Ένας τοίχος έχει πάχος $\\delta = 10\\text{ cm}$ και εμβαδό $A = 20\\text{ m}^2$. Εάν η θερμοκρασία στην εσωτερική πλευρά του τοίχου ισούται με $\\theta_1 = 25\\text{ }^\\circ\\text{C}$, η θερμοκρασία του εξωτερικού περιβάλλοντος είναι $\\theta_2 = 10\\text{ }^\\circ\\text{C}$ και ο συντελεστής θερμικής αγωγιμότητας του υλικού ισούται $k = 0,7\\text{ kcal}/(\\text{h}\\cdot\\text{m}\\cdot^\\circ\\text{C})$, να υπολογίσετε:",
    "code": "Θέμα 4<sup>ο</sup> · #23654",
    "bankCode": "23654",
    "title": "#23654 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch02-06-metadosi-thermotitas",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) την παροχή θερμότητας $\\frac{Q}{t}$ που διέρχεται μέσα από τον τοίχο.",
        "formula": "$\\frac{Q}{t} = A \\cdot k \\cdot \\frac{\\theta_1 - \\theta_2}{\\delta}$",
        "answer": 2100,
        "unit": "kcal/h",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε το πάχος σε μέτρα και εφαρμόστε τον νόμο Fourier για την αγωγή.",
        "explain": "Μετατροπή πάχους: $\\delta = 10\\text{ cm} = 0,1\\text{ m}$. Εφαρμογή τύπου: $\\frac{Q}{t} = 20\\text{ m}^2 \\cdot 0,7\\text{ kcal}/(\\text{h}\\cdot\\text{m}\\cdot^\\circ\\text{C}) \\cdot \\frac{25\\text{ }^\\circ\\text{C} - 10\\text{ }^\\circ\\text{C}}{0,1\\text{ m}} = 2100\\text{ kcal}/\\text{h}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) την θερμότητα $Q$ που διέρχεται μέσα από τον τοίχο σε χρονικό διάστημα μιας ημέρας.",
        "formula": "$Q = \\frac{Q}{t} \\cdot t$",
        "answer": 50400,
        "unit": "kcal",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την παροχή θερμότητας επί τις ώρες μιας ημέρας ($24\\text{ h}$).",
        "explain": "Για $t = 24\\text{ h}$, έχουμε $Q = 24\\text{ h} \\cdot 2100\\text{ kcal}/\\text{h} = 50400\\text{ kcal}$."
      }
    ]
  },
  {
    "id": "ch02-26661",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "calc",
    "layout": "unified",
    "stem": "Ψυκτικός θάλαμος λειτουργεί σε περιβάλλον με θερμοκρασία $\\theta_1 = 40\\text{ }^\\circ\\text{C}$. Το ορθογώνιο τοίχωμα του ψυκτικού θαλάμου, έχει μήκος $6\\text{ m}$, ύψος $3\\text{ m}$ και πάχος $\\delta = 20\\text{ cm}$. Η ειδική θερμική αγωγιμότητα του τοιχώματος είναι $k = 0,12\\text{ kcal}/(\\text{h}\\cdot\\text{m}\\cdot^\\circ\\text{C})$. Δίνεται η παροχή θερμότητας στο τοίχωμα του ψυκτικού θαλάμου $\\frac{Q}{t} = 378\\text{ kcal}/\\text{h}$. Να υπολογίσετε:",
    "code": "Θέμα 4<sup>ο</sup> · #26661",
    "bankCode": "26661",
    "title": "#26661 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch02-06-metadosi-thermotitas",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Την απόλυτη θερμοκρασία του περιβάλλοντος $T_1$.",
        "formula": "$T_1 = \\theta_1 + 273$",
        "answer": 313,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στη θερμοκρασία Κελσίου.",
        "explain": "$T_1 = 40 + 273 = 313\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Το εμβαδόν $A$ της επιφάνειας του τοιχώματος του ψυκτικού θαλάμου.",
        "formula": "$A = \\text{μήκος} \\cdot \\text{ὕψος}$",
        "answer": 18,
        "unit": "m²",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το μήκος επί το ύψος του τοιχώματος.",
        "explain": "$A = 6\\text{ m} \\cdot 3\\text{ m} = 18\\text{ m}^2$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Τη θερμοκρασία $\\theta_2$ εντός του θαλάμου σε βαθμούς Κελσίου.",
        "formula": "$\\theta_2 = \\theta_1 - \\frac{Q}{t} \\cdot \\frac{\\delta}{A \\cdot k}$",
        "answer": 5,
        "unit": "°C",
        "tolerance": 0.01,
        "hint": "Λύστε ως προς $\\theta_2$ από τον τύπο της αγωγής.",
        "explain": "Με $\\delta = 20\\text{ cm} = 0,2\\text{ m}$, έχουμε $\\theta_2 = 40 - 378 \\cdot \\frac{0,2}{18 \\cdot 0,12} = 40 - 35 = 5\\text{ }^\\circ\\text{C}$."
      }
    ]
  },
  {
    "id": "ch02-33869",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33869",
    "bankCode": "33869",
    "title": "#33869 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch02-06-metadosi-thermotitas",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Στη θερμοκρασία των $-237\\text{ }^\\circ\\text{C}$ η κινητική ενέργεια των μορίων ενός σώματος είναι μηδέν, δηλαδή τα μόρια είναι ακίνητα.",
        "answer": false,
        "explain": "Λάθος. Η θερμοκρασία στην οποία μηδενίζεται η κινητική ενέργεια των μορίων (απόλυτο μηδέν) είναι οι $-273,15\\text{ }^\\circ\\text{C}$ ($0\\text{ K}$)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Για να διακρίνουμε τη λήψη από την κατανάλωση έργου χρησιμοποιούμε και το αντίστοιχο πρόσημο. Όταν καταναλώνουμε έργο σημειώνουμε αρνητικό πρόσημο (-), ενώ όταν παίρνουμε έργο σημειώνουμε θετικό πρόσημο (+).",
        "answer": true,
        "explain": "Σωστό. Κατά τη θερμοδυναμική σύμβαση, το έργο που παράγεται από το σύστημα είναι θετικό, ενώ το έργο που καταναλώνεται (δίδεται στο σύστημα) είναι αρνητικό."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Μονάδα μέτρησης του έργου στο S.I. είναι το Τζάουλ ανά δευτερόλεπτο (J/s).",
        "answer": false,
        "explain": "Λάθος. Μονάδα μέτρησης του έργου στο S.I. είναι το Joule (J). Το J/s αντιστοιχεί στο Watt (W) που είναι μονάδα ισχύος."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "δ. Τα γυάλινα θερμόμετρα υγρού έχουν μικρή ακρίβεια μέτρησης.",
        "answer": false,
        "explain": "Λάθος. Τα γυάλινα θερμόμετρα υγρού (π.χ. υδραργύρου ή οινόμετρου) έχουν ικανοποιητική και αποδεκτή ακρίβεια για τις συνηθισμένες τεχνικές εφαρμογές."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "subqPrompt": "Στην παρακάτω εικόνα απεικονίζεται μια κατσαρόλα με νερό που ζεσταίνεται από τη φωτιά, ενώ το χερούλι κρατιέται από ανθρώπινο χέρι. Να γράψετε τα γράμματα Α, Β, Γ και δίπλα τον τρόπο μετάδοσης της θερμότητας που αναλογεί σε κάθε περίπτωση.",
        "prompt": "Αντιστοιχίστε τα σημεία/μέρη του σχήματος με τον αντίστοιχο τρόπο μετάδοσης θερμότητας:",
        "left": [
          {
            "id": "A",
            "text": "Α"
          },
          {
            "id": "B",
            "text": "Β"
          },
          {
            "id": "C",
            "text": "Γ"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Μετάδοση θερμότητας με αγωγή"
          },
          {
            "id": "b",
            "text": "Μετάδοση θερμότητας με μεταφορά"
          },
          {
            "id": "c",
            "text": "Μετάδοση θερμότητας με ακτινοβολία"
          }
        ],
        "pairs": {
          "A": "b",
          "B": "a",
          "C": "c"
        },
        "images": [
          "images/c/stoixeia-psyxis-klimatismou/chapter-02/c_stoixeia-psyxis-klimatismou_ch02_#33869_fig01.png"
        ],
        "explain": "Α. Μεταφορά (στο νερό που θερμαίνεται), Β. Αγωγή (στο χερούλι/τοίχωμα), Γ. Ακτινοβολία (από τη φλόγα/εστία).",
        "image": "images/c/stoixeia-psyxis-klimatismou/chapter-02/c_stoixeia-psyxis-klimatismou_ch02_#33869_fig01.png"
      }
    ]
  }
]
);
