window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch03-20475",
    "group": "ch03-forces-composition",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20475",
    "code": "Θέμα 4<sup>ο</sup> · #20475",
    "title": "#20475 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-forces-composition",
    "sourceOrder": 1,
    "givens": [
      {
        "label": "F₁",
        "value": "10 N"
      },
      {
        "label": "F₂",
        "value": "4 N"
      },
      {
        "label": "ημ45° = συν45°",
        "value": "0,7"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε το μέτρο των συνιστωσών F1x και F1y στους άξονες Ox και Oy (δώστε την τιμή για F1x).",
        "formula": "F1x = F1 · συν45°",
        "answer": 7,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "F1x = F1 · συν45°",
        "explain": " \\( F_{1x} = 10\\text{ N} \\cdot 0,7 = 7\\text{ N} \\) και \\( F_{1y} = 10\\text{ N} \\cdot 0,7 = 7\\text{ N} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε το μέτρο της συνισταμένης ΣFx στον άξονα Ox.",
        "formula": "ΣFx = F1x + F2",
        "answer": 11,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "ΣFx = F1x + F2",
        "explain": " \\( \\Sigma F_x = F_{1x} + F_2 = 7\\text{ N} + 4\\text{ N} = 11\\text{ N} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ) Να υπολογίσετε το μέτρο της συνισταμένης δύναμης FΣ.",
        "formula": "FΣ = √(ΣFx² + F1y²)",
        "answer": 13.03,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "FΣ = √(ΣFx² + F1y²)",
        "explain": " \\( F_{\\Sigma} = \\sqrt{11^2 + 7^2} = \\sqrt{121 + 49} = \\sqrt{170} = 13,03\\text{ N} \\)."
      },
      {
        "kind": "calc",
        "prompt": "δ) Να υπολογίσετε την εφαπτομένη της διεύθυνσης (εφθ) της συνισταμένης δύναμης FΣ.",
        "formula": "εφθ = F1y / ΣFx",
        "answer": 0.63,
        "unit": "",
        "tolerance": 0.02,
        "hint": "εφθ = F1y / ΣFx",
        "explain": " \\( \\varepsilon\\varphi\\theta = \\frac{F_{1y}}{\\Sigma F_x} = \\frac{7}{11} = 0,63 \\)."
      }
    ]
  },
  {
    "id": "ch03-21107",
    "group": "ch03-forces-composition",
    "kind": "match",
    "layout": "unified",
    "bankCode": "21107",
    "code": "Θέμα 2<sup>ο</sup> · #21107",
    "title": "#21107 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch03-forces-composition",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "match",
        "prompt": "2.1. Αντιστοιχίστε τις περιπτώσεις σύνθεσης δυνάμεων (Στήλη Α) με τη διεύθυνση και φορά της συνισταμένης (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "Δυνάμεις συγγραμικές και αντίφορες"
          },
          {
            "id": "2",
            "text": "Δυνάμεις συγγραμμικές και ομόφορες"
          },
          {
            "id": "3",
            "text": "Δυνάμεις υπό γωνία φ = 90°"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Η διεύθυνση και η φορά, είναι αυτές των συνιστωσών."
          },
          {
            "id": "b",
            "text": "Η διεύθυνση δίνεται από την σχέση: εφθ = F2 / F1"
          },
          {
            "id": "c",
            "text": "Η διεύθυνση, είναι η διεύθυνση των συνιστωσών και η φορά είναι αυτή της μεγαλύτερης σε μέτρο συνιστώσας."
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "b"
        },
        "explain": "1-γ, 2-α, 3-β σύμφωνα με τη θεωρία των απλών περιπτώσεων σύνθεσης δυνάμεων."
      },
      {
        "kind": "blank",
        "prompt": "2.2. Συμπληρώστε τα κενά της παραγράφου για τη σύνθεση δυνάμεων:",
        "textBefore": [
          "Η ",
          "(1) δύο ή περισσοτέρων ",
          "(2) που ενεργούν σε ένα σώμα, αποσκοπεί στον προσδιορισμό μιας δύναμης, της ",
          "(3), η οποία όταν ενεργεί στο σώμα, επιφέρει το ίδιο ",
          "(4) με αυτό των αρχικών δυνάμεων."
        ],
        "answers": [
          "σύνθεση",
          "δυνάμεων",
          "συνισταμένης",
          "αποτέλεσμα"
        ],
        "bank": [
          "ροπών",
          "σύνθεση",
          "δυνάμεων",
          "συνιστώσας",
          "πρόβλημα",
          "ανάλυση",
          "συνισταμένης",
          "αποτέλεσμα"
        ],
        "explain": "Η σύνθεση δυνάμεων αποσκοπεί στην εύρεση της συνισταμένης που φέρει το ίδιο αποτέλεσμα."
      }
    ]
  }
]
);
