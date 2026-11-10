window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch04-25303",
    "group": "ch04-05-eniaia-apoleia-statikis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25303",
    "bankCode": "25303",
    "title": "#25303 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-05",
    "sourceOrder": 6,
    "stem": "Σε έναν κλιματιζόμενο χώρο λειτουργεί εγκατάσταση κλιματισμού και ο κλιματιζόμενος αέρας εισέρχεται στον χώρο από πέντε (5) όμοια στόμια. Ο όγκος του κλιματιζόμενου αέρα που εισέρχεται στο χώρο από κάθε στόμιο ισούται με $200\\text{ L/s}$. Η μέγιστη επιτρεπόμενη ταχύτητα στον κύριο αεραγωγό της εγκατάστασης, ο οποίος είναι κυκλικής διατομής, είναι $5\\text{ m/s}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε τον ολικό όγκο $Q$ του κλιματιζόμενου αέρα, που εισέρχεται στον χώρο από τα στόμια σε L/s.",
        "formula": "$Q_{\\text{ολ}} = Q_{\\text{στόμιο}} \\cdot \\text{Αριθμός στομίων}$",
        "answer": 1000,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την παροχή κάθε στομίου επί τον συνολικό αριθμό των στομίων.",
        "explain": "Ο συνολικός όγκος του κλιματιζόμενου αέρα είναι \\( Q_{\\text{ολ}} = 200\\text{ L/s} \\cdot 5 = 1000\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Τις απώλειες πίεσης λόγω τριβών στον κύριο αεραγωγό, σε Pa/m (από το διάγραμμα).",
        "formula": "$\\Delta p_f$",
        "answer": 0.55,
        "unit": "Pa/m",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε το διάγραμμα υπολογισμού με βάση την παροχή και ταχύτητα.",
        "explain": "Με τη βοήθεια του διαγράμματος βρίσκουμε την απώλεια πίεσης, ότι ισούται με $0,55\\text{ Pa/m}$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Τη διάμετρο του κύριου αεραγωγού σε mm.",
        "formula": "$d$",
        "answer": 500,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Διαβάστε τη διάμετρο από το διάγραμμα στο σημείο τομής.",
        "explain": "Σύμφωνα με το διάγραμμα, η απαιτούμενη διάμετρος του αεραγωγού ισούται με $500\\text{ mm}$."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_25303_fig01.webp",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_25303_sol01.webp"
    ]
  },
  {
    "id": "ch04-26811",
    "group": "ch04-05-eniaia-apoleia-statikis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26811",
    "bankCode": "26811",
    "title": "#26811 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-05",
    "sourceOrder": 7,
    "stem": "Ένα μελετητικό γραφείο με τρία (3) γραφεία, κλιματίζεται από μία μονάδα κλιματισμού. Ο αέρας προσάγεται μέσω δικτύου και τριών στομίων (Ε: $160\\text{ L/s}$, Ζ: $120\\text{ L/s}$, Η: $140\\text{ L/s}$).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Την παροχή (σε L/s) του αέρα που ρέει στο κύριο τμήμα του δικτύου Α-Β.",
        "formula": "$Q_{A-B} = Q_E + Q_Z + Q_H$",
        "answer": 420,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Προσθέστε τις παροχές και των τριών γραφείων.",
        "explain": " \\( Q_{A-B} = 160 + 120 + 140 = 420\\text{ L/s} \\).",
        "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_26811_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Β-Γ.",
        "formula": "$Q_{B-\\Gamma} = Q_Z + Q_H$",
        "answer": 260,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Προσθέστε τις παροχές των γραφείων Ζ και Η.",
        "explain": " \\( Q_{B-\\Gamma} = 120 + 140 = 260\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Γ-Δ.",
        "formula": "$Q_{\\Gamma-\\Delta} = Q_H$",
        "answer": 140,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Η παροχή προς το γραφείο 3 (σημείο Η).",
        "explain": " \\( Q_{\\Gamma-\\Delta} = 140\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Β-Ε.",
        "formula": "$Q_{B-E} = Q_E$",
        "answer": 160,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Η παροχή προς το γραφείο 1 (σημείο Ε).",
        "explain": " \\( Q_{B-E} = 160\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "subq": "ε",
        "prompt": "Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Γ-Ζ.",
        "formula": "$Q_{\\Gamma-Z} = Q_Z$",
        "answer": 120,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Η παροχή προς το γραφείο 2 (σημείο Ζ).",
        "explain": " \\( Q_{\\Gamma-Z} = 120\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "subq": "στ",
        "prompt": "Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Δ-Η.",
        "formula": "$Q_{\\Delta-H} = Q_H$",
        "answer": 140,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Η παροχή προς το γραφείο 3 (σημείο Η).",
        "explain": " \\( Q_{\\Delta-H} = 140\\text{ L/s} \\)."
      }
    ]
  },
  {
    "id": "ch04-29208",
    "group": "ch04-05-eniaia-apoleia-statikis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29208",
    "bankCode": "29208",
    "title": "#29208 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-05",
    "sourceOrder": 8,
    "stem": "Ένα μελετητικό γραφείο με τρία (3) γραφεία κλιματίζεται από μονάδα κλιματισμού. Παροχές στομίων: Ε: $180\\text{ L/s}$, Ζ: $150\\text{ L/s}$, Η: $170\\text{ L/s}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Την διάμετρο (σε mm) του κύριου αεραγωγού προσαγωγής (τμήμα Α-Β).",
        "formula": "$d$",
        "answer": 280,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τη συνολική παροχή ($500\\text{ L/s}$), βρείτε τη μέγιστη ταχύτητα για ιδιωτικά γραφεία ($8\\text{ m/s}$) από τον πίνακα και χρησιμοποιήστε το διάγραμμα.",
        "explain": "Συνολική παροχή $Q_{A-B} = 180 + 150 + 170 = 500\\text{ L/s}$. Μέγιστη ταχύτητα για ιδιωτικά γραφεία: $8\\text{ m/s}$. Από το διάγραμμα προκύπτει διάμετρος $280\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τις απώλειες πίεσης ανά μέτρο σωλήνα λόγω τριβών (σε Pa/m) του κύριου αεραγωγού προσαγωγής (τμήμα Α-Β).",
        "formula": "$\\Delta p_f$",
        "answer": 2.65,
        "unit": "Pa/m",
        "tolerance": 0.05,
        "hint": "Εντοπίστε την απώλεια πίεσης στο διάγραμμα για παροχή $500\\text{ L/s}$ και διάμετρο $280\\text{ mm}$.",
        "explain": "Η γραμμή απωλειών στατικής πίεσης δίνει απώλειες $2,65\\text{ Pa/m}$."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_29208_fig01.webp",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_29208_fig01.webp",
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_29208_fig02.webp"
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_29208_sol01.webp"
    ]
  }
]
);
