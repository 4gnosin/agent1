window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23748",
    "group": "ch03-02-thermodynamikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23748",
    "code": "Θέμα 4<sup>ο</sup> · #23748",
    "title": "#23748 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-02-thermodynamikes-metavoles",
    "sourceOrder": 3,
    "stem": "Αέρας όγκου $V_1 = 0,8\\text{ m}^3$ συμπιέζεται ισοθερμοκρασιακά. Αν η αρχική και η τελική του πίεση είναι ίσες με $P_1 = 1\\text{ bar}$ και $P_2 = 10\\text{ bar}$ αντίστοιχα.",
    "givens": [
      {
        "label": "V₁",
        "value": "0.8 m³"
      },
      {
        "label": "P₁",
        "value": "1 bar"
      },
      {
        "label": "P₂",
        "value": "10 bar"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "4.1. Να προσδιορίσετε τον τελικό όγκο $V_2$.",
        "prompt": "Να προσδιορίσετε τον τελικό όγκο $V_2$.",
        "formula": "P_1 \\cdot V_1 = P_2 \\cdot V_2",
        "answer": 0.08,
        "unit": "m³",
        "tolerance": 0.01,
        "hint": "Στην ισοθερμοκρασιακή μεταβολή ισχύει ο νόμος Boyle-Mariotte: $P_1 \\cdot V_1 = P_2 \\cdot V_2$.",
        "explain": "Από τον νόμο της ισοθερμοκρασιακής μεταβολής: \\( P_1 \\cdot V_1 = P_2 \\cdot V_2 \\Rightarrow V_2 = \\frac{P_1 \\cdot V_1}{P_2} = \\frac{1 \\cdot 0,8}{10} = 0,08\\text{ m}^3 \\).",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23748_sol01.webp"
      },
      {
        "kind": "open",
        "subq": "4.2",
        "prompt": "4.2. Να απεικονίσετε τη μεταβολή του παραπάνω ερωτήματος σε ένα διάγραμμα $P-V$ (πίεσης-όγκου).",
        "explain": "Η ισοθερμοκρασιακή μεταβολή στο διάγραμμα P-V απεικονίζεται ως καμπύλη (ισόθερμη υπερβολή) που συνδέει την αρχική κατάσταση (1 bar, 0,8 m³) με την τελική κατάσταση (10 bar, 0,08 m³).",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23748_sol01.webp"
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23748_sol01.webp"
    ]
  },
  {
    "id": "ch03-23891",
    "group": "ch03-02-thermodynamikes-metavoles",
    "kind": "match",
    "layout": "unified",
    "bankCode": "23891",
    "code": "Θέμα 2<sup>ο</sup> · #23891",
    "title": "#23891 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch03-02-thermodynamikes-metavoles",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "2.1. Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α, όπου απεικονίζονται χαρακτηριστικές μεταβολές αερίων σε διάγραμμα πίεσης-όγκου, και δίπλα ένα από τα γράμματα α, β, γ, δ, της Στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τους αριθμούς των καμπυλών μεταβολής (1, 2, 3, 4) από τα αντίστοιχα σχήματα με τα είδη των μεταβολών της Στήλης Β:",
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
            "text": "Ισοθερμοκρασιακή Μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόθλιπτη Μεταβολή"
          },
          {
            "id": "c",
            "text": "Αδιαβατική Μεταβολή"
          },
          {
            "id": "d",
            "text": "Ισόογκη Μεταβολή"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "c",
          "3": "d",
          "4": "a"
        },
        "images": [
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig01.webp",
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig02.webp",
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig03.webp",
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig04.webp"
        ],
        "explain": "Με βάση τα διαγράμματα P-V: 1-β (Ισόθλιπτη), 2-γ (Αδιαβατική), 3-δ (Ισόογκη), 4-α (Ισοθερμοκρασιακή).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "2.2. Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Στην ισόθλιπτη μεταβολή, η θερμότητα που συναλλάσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Στην ισόθλιπτη (σταθερής πίεσης) μεταβολή, η θερμότητα Q ισούται με τη μεταβολή της ενθαλπίας (\\( Q = \\Delta H \\))."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Κατά την αδιαβατική μεταβολή, το αέριο συναλλάσει θερμότητα με το περιβάλλον.",
        "answer": false,
        "explain": "Λάθος. Κατά την αδιαβατική μεταβολή δεν υπάρχει καμία ανταλλαγή θερμότητας μεταξύ του συστήματος και του περιβάλλοντος (\\( Q = 0 \\))."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Στην ισόογκη μεταβολή το έργο είναι μηδέν",
        "answer": true,
        "explain": "Σωστό. Στην ισόογκη (σταθερού όγκου) μεταβολή δεν υπάρχει μεταβολή όγκου (\\( \\Delta V = 0 \\)), οπότε το παραγόμενο έργο είναι μηδέν."
      }
    ]
  }
]
);
