window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch04-17102",
    "group": "ch04-04-ergo-metavlititis-dynamis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #17102",
    "bankCode": "17102",
    "title": "#17102 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ergon-dynamis",
    "sourceOrder": 1,
    "stem": "Ένα όχημα μάζας $m = 1500\\text{ kg}$, επιταχύνει από την ηρεμία μέχρι να αποκτήσει ταχύτητα $V$. Το έργο της επιτάχυνσης που παράγεται είναι $W = 300\\text{ kJ}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την ταχύτητα $V$ (σε $\\text{m/s}$).",
        "formula": "$W = \\frac{1}{2} m V^2 \\implies V = \\sqrt{\\frac{2W}{m}}$",
        "answer": 20,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο του έργου επιτάχυνσης για αρχική ταχύτητα μηδέν.",
        "explain": "Από τη σχέση $W = \\frac{1}{2} m (V_2^2 - V_1^2)$ με $V_1 = 0$, έχουμε $2W = m V_2^2 \\implies V_2 = \\sqrt{\\frac{2 \\cdot 300 \\cdot 1000\\text{ J}}{1500\\text{ kg}}} = \\sqrt{400} = 20\\text{ m/s}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον χρόνο $t$ που απαιτείται για να αποκτήσει τη συγκεκριμένη ταχύτητα, αν η ισχύς επιτάχυνσης είναι $P_{\\text{ΕΠ}} = 25\\text{ kW}$.",
        "formula": "$P_{\\text{ΕΠ}} = \\frac{W}{t} \\implies t = \\frac{W}{P_{\\text{ΕΠ}}}$",
        "answer": 12,
        "unit": "s",
        "tolerance": 0.01,
        "hint": "Ο χρόνος υπολογίζεται διαιρώντας το έργο με την ισχύ.",
        "explain": "Ο χρόνος $t$ υπολογίζεται από τη σχέση της ισχύος: $t = \\frac{W}{P_{\\text{ΕΠ}}} = \\frac{300\\text{ kJ}}{25\\text{ kW}} = \\frac{300000\\text{ J}}{25000\\text{ W}} = 12\\text{ s}$."
      }
    ]
  },
  {
    "id": "ch04-18643",
    "group": "ch04-04-ergo-metavlititis-dynamis",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #18643",
    "bankCode": "18643",
    "title": "#18643 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "eidi-ergon",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστό (Σ) ή Λάθος (Λ):",
        "prompt": "α. Το έργο ορίζεται σαν το πηλίκο μίας δύναμης προς τη μετατόπιση του σημείου εφαρμογής τη διεύθυνση της ίδιας της δύναμης.",
        "answer": false,
        "explain": "Λάθος. Το έργο ισούται με το γινόμενο μιας δύναμης επί τη μετατόπιση και όχι με το πηλίκο τους."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Οι δυνάμεις που προκαλούν την κίνηση ή τη βοηθούν, παράγουν έργο κινητήριο.",
        "answer": true,
        "explain": "Σωστό. Οι δυνάμεις που κινούν ή επιταχύνουν ένα σώμα παράγουν θετικό (κινητήριο) έργο."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Δυνάμεις που αντιστέκονται, παράγουν έργο καταναλισκόμενο ή έργο αντιστάσεως.",
        "answer": true,
        "explain": "Σωστό. Οι δυνάμεις αντίστασης (π.χ. τριβή) παράγουν αρνητικό (καταναλισκόμενο) έργο."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Να αντιστοιχίσετε τα διαφορετικά είδη έργων της Στήλης Α (1, 2, 3, 4) με τα σχήματα εμβαδών της Στήλης Β (α, β, γ, δ).",
        "left": [
          {
            "id": "1",
            "text": "Έργο σταθερής δύναμης"
          },
          {
            "id": "2",
            "text": "Έργο που παράγεται από ελατήριο"
          },
          {
            "id": "3",
            "text": "Έργο που παράγεται από τυχαία διαδρομή του σημείου εφαρμογής μιας δύναμης"
          },
          {
            "id": "4",
            "text": "Έργο που παράγεται από επιπλέον συμπίεση βαλβίδας ελατηρίου οχήματος"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Σχήμα α"
          },
          {
            "id": "b",
            "text": "Σχήμα β"
          },
          {
            "id": "c",
            "text": "Σχήμα γ"
          },
          {
            "id": "d",
            "text": "Σχήμα δ"
          }
        ],
        "pairs": {
          "1": "a",
          "2": "d",
          "3": "b",
          "4": "c"
        },
        "images": [
          "images/b/thermod/chapter-04/b_thermod_ch04_18643_fig01.webp",
          "images/b/thermod/chapter-04/b_thermod_ch04_18643_fig02.webp",
          "images/b/thermod/chapter-04/b_thermod_ch04_18643_fig03.webp",
          "images/b/thermod/chapter-04/b_thermod_ch04_18643_fig04.webp"
        ],
        "explain": "Το έργο σταθερής δύναμης αντιστοιχεί σε ορθογώνιο (α), το έργο ελατηρίου σε τρίγωνο (δ), η τυχαία διαδρομή σε καμπύλη (β) και η επιπλέον συμπίεση βαλβίδας σε τραπέζιο (γ).",
        "image": "images/b/thermod/chapter-04/b_thermod_ch04_18643_fig01.webp"
      }
    ]
  },
  {
    "id": "ch04-18645",
    "group": "ch04-04-ergo-metavlititis-dynamis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18645",
    "bankCode": "18645",
    "title": "#18645 — Θέμα 4$^{ο}$ (4.1–4.3)",
    "units": 25,
    "theory": "ergon-elatirio",
    "sourceOrder": 3,
    "stem": "Η σταθερά ενός ελατηρίου είναι $K = 10000\\text{ N/m}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε το έργο που απαιτείται για να συμπιεσθεί το ελατήριο κατά $50\\text{ mm}$ (σε $\\text{J}$).",
        "formula": "$W = \\frac{1}{2} K l^2$",
        "answer": 12.5,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τα $\\text{mm}$ σε $\\text{m}$ και εφαρμόστε τον τύπο ενέργειας ελατηρίου.",
        "explain": "Με $l = 50\\text{ mm} = 0{,}05\\text{ m}$, έχουμε: $W = \\frac{1}{2} \\cdot 10000\\text{ N/m} \\cdot (0{,}05\\text{ m})^2 = 5000 \\cdot 0{,}0025 = 12{,}5\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Πόση δύναμη απαιτείται για την παραπάνω συμπίεση των $50\\text{ mm}$ (σε $\\text{N}$);",
        "formula": "$F = K \\cdot l$",
        "answer": 500,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον νόμο του Hooke $F = K \\cdot l$.",
        "explain": "Από τη σχέση $F = K \\cdot l = 10000\\text{ N/m} \\cdot 0{,}05\\text{ m} = 500\\text{ N}$."
      },
      {
        "kind": "open",
        "subq": "4.3",
        "prompt": "Να απεικονίσετε το παραγόμενο έργο σε διάγραμμα δύναμης – μεταβολής μήκους (συμπίεση ελατηρίου).",
        "explain": "Το έργο απεικονίζεται σε διάγραμμα $F-l$ ως το εμβαδόν ορθογωνίου τριγώνου με κάθετες πλευρές τη συμπίεση $l$ και τη δύναμη $F$, το οποίο ισούται με $\\frac{1}{2} F l$."
      }
    ]
  },
  {
    "id": "ch04-26937",
    "group": "ch04-04-ergo-metavlititis-dynamis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26937",
    "bankCode": "26937",
    "title": "#26937 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "isxys-ergon",
    "sourceOrder": 4,
    "stem": "Ένα όχημα μάζας $1000\\text{ kg}$, ξεκινά από την ηρεμία και κινείται με σταθερή επιτάχυνση μέχρι να αποκτήσει ταχύτητα $36\\text{ km/h}$, σε χρόνο $10\\text{ s}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την τελική ταχύτητα σε $\\text{m/s}$ (μέτρα ανά δευτερόλεπτο).",
        "formula": "$V = \\frac{36000\\text{ m}}{3600\\text{ s}}$",
        "answer": 10,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τα $\\text{km/h}$ με το $3{,}6$ για να τα μετατρέψετε σε $\\text{m/s}$.",
        "explain": "Τα $36\\text{ km/h}$ ισούνται με $\\frac{36000\\text{ m}}{3600\\text{ s}} = 10\\text{ m/s}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε το έργο επιτάχυνσης (σε $\\text{kJ}$).",
        "formula": "$W = \\frac{1}{2} m V^2$",
        "answer": 50,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη μάζα και την ταχύτητα σε $\\text{m/s}$ στον τύπο της κινητικής ενέργειας.",
        "explain": "Το έργο είναι $W = \\frac{1}{2} \\cdot 1000\\text{ kg} \\cdot (10\\text{ m/s})^2 = 500 \\cdot 100 = 50000\\text{ J} = 50\\text{ kJ}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε την ισχύ που απαιτείται (σε $\\text{kW}$).",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 5,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο σε $\\text{J}$ με τον χρόνο σε $\\text{s}$.",
        "explain": "Η ισχύς είναι $P = \\frac{W}{t} = \\frac{50000\\text{ J}}{10\\text{ s}} = 5000\\text{ W} = 5\\text{ kW}$."
      }
    ]
  }
]
);
