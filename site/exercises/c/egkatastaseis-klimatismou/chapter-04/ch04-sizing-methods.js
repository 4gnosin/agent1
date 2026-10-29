window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch04-25302",
    "group": "ch04-sizing-methods",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "25302",
    "code": "Θέμα 2<sup>ο</sup> · #25302",
    "title": "#25302 — Θέμα 2<sup>ο</sup> (2.1–2.3)",
    "units": 12,
    "theory": "ch04-sizing",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Οι ορθογωνικοί αεραγωγοί παρουσιάζουν τις μικρότερες αντιστάσεις ροής και επομένως τις μικρότερες απώλειας ενέργειας.",
        "answer": false,
        "explain": "Λάθος. Οι κυκλικοί αεραγωγοί έχουν τις μικρότερες αντιστάσεις."
      },
      {
        "kind": "tf",
        "prompt": "β. Κατά την κατασκευή δικτύου αεραγωγών, ως γενικός κανόνας καλής κλίσης για τη διαφοροποίηση των διαστάσεων των αεραγωγών, θεωρείται το 1:7.",
        "answer": true,
        "explain": "Σωστό."
      },
      {
        "kind": "tf",
        "prompt": "γ. Για να κινηθεί ο αέρας μέσα στους αεραγωγούς θα πρέπει να εξασφαλίζεται συνεχώς μια διαφορά πίεσης μεταξύ της εισόδου του αέρα στους αεραγωγούς και της εξόδου του.",
        "answer": true,
        "explain": "Σωστό."
      },
      {
        "kind": "tf",
        "prompt": "δ. Δυναμική πίεση μέσα σε έναν αεραγωγό, είναι η πίεση που ασκείται από τον αέρα στα τοιχώματα των αεραγωγών.",
        "answer": false,
        "explain": "Λάθος. Αυτή είναι η στατική πίεση."
      }
    ]
  },
  {
    "id": "ch04-25303",
    "group": "ch04-sizing-methods",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25303",
    "code": "Θέμα 4<sup>ο</sup> · #25303",
    "title": "#25303 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "ch04-sizing",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε τον ολικό όγκο (παροχή) QΣ του κλιματιζόμενου αέρα που εισέρχεται στο χώρο (σε L/s).",
        "formula": "QΣ = 200 · 5",
        "answer": 1000,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την παροχή κάθε στόμιου επί τον αριθμό των στομίων (5).",
        "explain": " \\( Q_\\Sigma = 200\\text{ L/s} \\cdot 5 = 1000\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Τις απώλειες πίεσης λόγω τριβών στον κύριο αεραγωγό σε Pa/m.",
        "formula": "Διάγραμμα",
        "answer": 0.55,
        "unit": "Pa/m",
        "tolerance": 0.02,
        "hint": "Από το διάγραμμα για παροχή 1000 L/s και ταχύτητα 5 m/s.",
        "explain": "Με τη βοήθεια του διαγράμματος βρίσκουμε απώλεια πίεσης 0,55 Pa/m."
      },
      {
        "kind": "calc",
        "prompt": "4.3 Τη διάμετρο του κύριου αεραγωγού σε mm.",
        "formula": "Διάγραμμα",
        "answer": 500,
        "unit": "mm",
        "tolerance": 0.02,
        "hint": "Από το διάγραμμα υπολογισμού διαμέτρου.",
        "explain": "Σύμφωνα με το διάγραμμα, η απαιτούμενη διάμετρος ισούται με 500 mm."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#25303_fig01.png",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#25303_sol01.png",
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#25303_sol02.png"
    ]
  },
  {
    "id": "ch04-26811",
    "group": "ch04-sizing-methods",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26811",
    "code": "Θέμα 4<sup>ο</sup> · #26811",
    "title": "#26811 — Θέμα 4<sup>ο</sup> (α-στ)",
    "units": 25,
    "theory": "ch04-sizing",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Την παροχή (σε L/s) του αέρα που ρέει στο κύριο τμήμα του δικτύου Α-Β.",
        "formula": "QA-B = 160 + 120 + 140",
        "answer": 420,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Προσθέστε τις παροχές των τριών γραφείων.",
        "explain": " \\( Q_{A-B} = 160 + 120 + 140 = 420\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Β-Γ.",
        "formula": "QB-Γ = 120 + 140",
        "answer": 260,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Προσθέστε τις παροχές των γραφείων 2 και 3.",
        "explain": " \\( Q_{B-\\Gamma} = 120 + 140 = 260\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Γ-Δ.",
        "formula": "QΓ-Δ = 140",
        "answer": 140,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Αντιστοιχεί στην παροχή του γραφείου 3.",
        "explain": " \\( Q_{\\Gamma-\\Delta} = 140\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "δ) Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Β-Ε.",
        "formula": "QB-E = 160",
        "answer": 160,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Αντιστοιχεί στην παροχή του γραφείου 1.",
        "explain": " \\( Q_{B-E} = 160\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "ε) Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Γ-Ζ.",
        "formula": "QΓ-Ζ = 120",
        "answer": 120,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Αντιστοιχεί στην παροχή του γραφείου 2.",
        "explain": " \\( Q_{\\Gamma-Z} = 120\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "στ) Την παροχή (σε L/s) του αέρα που ρέει στο τμήμα του δικτύου Δ-Η.",
        "formula": "QΔ-Η = 140",
        "answer": 140,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Αντιστοιχεί στην παροχή του γραφείου 3.",
        "explain": " \\( Q_{\\Delta-H} = 140\\text{ L/s} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#26811_fig01.png",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#26811_sol01.png"
    ]
  },
  {
    "id": "ch04-29208",
    "group": "ch04-sizing-methods",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "29208",
    "code": "Θέμα 4<sup>ο</sup> · #29208",
    "title": "#29208 — Θέμα 4<sup>ο</sup> (α-β)",
    "units": 25,
    "theory": "ch04-sizing",
    "sourceOrder": 8,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Την διάμετρο (σε mm) του κύριου αεραγωγού προσαγωγής (τμήμα Α-Β).",
        "formula": "Διάγραμμα 1",
        "answer": 280,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Συνολική παροχή 500 L/s και μέγιστη ταχύτητα 8 m/s (για ιδιωτικά γραφεία).",
        "explain": " \\( Q_{A-B} = 180 + 150 + 170 = 500\\text{ L/s} \\). Από το διάγραμμα προκύπτει διάμετρος 280 mm."
      },
      {
        "kind": "calc",
        "prompt": "β) Τις απώλειες πίεσης ανά μέτρο σωλήνα λόγω τριβών (σε Pa/m) του κύριου αεραγωγού.",
        "formula": "Διάγραμμα 1",
        "answer": 2.65,
        "unit": "Pa/m",
        "tolerance": 0.05,
        "hint": "Από το σημείο τομής στο διάγραμμα.",
        "explain": "Οι απώλειες στατικής πίεσης είναι 2,65 Pa/m."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#29208_fig01.png",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#29208_fig01.png",
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#29208_fig02.png"
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#29208_sol01.png"
    ]
  }
]
);
