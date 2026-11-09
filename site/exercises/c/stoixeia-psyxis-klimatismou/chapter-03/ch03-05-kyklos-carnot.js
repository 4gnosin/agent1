window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-23880",
    "group": "ch03-05-kyklos-carnot",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23880",
    "bankCode": "23880",
    "title": "#23880 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch03-05-kyklos-carnot",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "2.1 Αντιστοιχίστε τα σημεία/φάσεις του κύκλου Carnot της Στήλης Α με τις μεταβολές της Στήλης Β:",
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
            "text": "α. Αδιαβατική Συμπίεση"
          },
          {
            "id": "b",
            "text": "β. Ισοθερμοκρασιακή Συμπίεση"
          },
          {
            "id": "c",
            "text": "γ. Αδιαβατική Εκτόνωση"
          },
          {
            "id": "d",
            "text": "δ. Ισοθερμοκρασιακή Εκτόνωση"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "c",
          "3": "b",
          "4": "a"
        },
        "explain": "1 - δ (Ισοθερμοκρασιακή εκτόνωση), 2 - γ (Αδιαβατική εκτόνωση), 3 - β (Ισοθερμοκρασιακή συμπίεση), 4 - α (Αδιαβατική συμπίεση).",
        "images": [
          "images/c/stoixeia-psyxis-klimatismou/chapter-03/c_stoixeia-psyxis-klimatismou_ch03_#23880_fig01.webp"
        ],
        "image": "images/c/stoixeia-psyxis-klimatismou/chapter-03/c_stoixeia-psyxis-klimatismou_ch03_#23880_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "2.2 Επιλέξτε ποια από τα παρακάτω πραγματικά αέρια συμπεριφέρονται σαν τέλεια σε συνηθισμένες συνθήκες:",
        "prompt": "Το υδρογόνο συμπεριφέρεται σαν τέλειο αέριο σε συνηθισμένες συνθήκες.",
        "answer": true,
        "explain": "Σωστό. Το υδρογόνο, όπως και το άζωτο και το οξυγόνο, υγροποιούνται δύσκολα και προσεγγίζουν το τέλειο αέριο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι υδρατμοί συμπεριφέρονται σαν τέλεια αέρια σε συνηθισμένες συνθήκες.",
        "answer": false,
        "explain": "Λάθος. Οι υδρατμοί και το διοξείδιο του άνθρακα υγροποιούνται εύκολα στις συνηθισμένες συνθήκες."
      }
    ]
  },
  {
    "id": "ch03-26870",
    "group": "ch03-05-kyklos-carnot",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26870",
    "bankCode": "26870",
    "title": "#26870 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-05-kyklos-carnot",
    "sourceOrder": 13,
    "stem": "Μία θερμική μηχανή που ακολουθεί τον κύκλο του Carnot, λειτουργεί ανάμεσα στις θερμοκρασίες $T_1$ (υψηλή) και $T_2 = 86\\text{ }^\\circ\\text{F}$ (χαμηλή). Ο θερμικός βαθμός απόδοσης της μηχανής είναι $n_\\theta = 0,7$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "Να υπολογιστούν:",
        "prompt": "4.1 Να μετατρέψετε τη θερμοκρασία $T_2$ σε κλίμακα Κέλβιν.",
        "formula": "$T_2 = \\frac{86 - 32}{1,8} + 273$",
        "answer": 303,
        "unit": "K",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε πρώτα τους $86\\text{ }^\\circ\\text{F}$ σε $^\\circ\\text{C}$ και έπειτα σε K.",
        "explain": "Από τη σχέση $\\frac{\\vartheta_2}{5} = \\frac{86 - 32}{9}$ προκύπτει $\\vartheta_2 = 30\\text{ }^\\circ\\text{C}$. Άρα $T_2 = 30 + 273 = 303\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Να υπολογίσετε τη θερμοκρασία $T_1$ σε Kelvin (ή βαθμούς Κελσίου, εδώ σε K).",
        "formula": "$T_1 = \\frac{T_2}{1 - n_\\theta}$",
        "answer": 1010,
        "unit": "K",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο απόδοσης κύκλου Carnot: $n_\\theta = 1 - \\frac{T_2}{T_1}$.",
        "explain": " $n_\\theta = 1 - \\frac{T_2}{T_1} \\Rightarrow 0,7 = 1 - \\frac{303}{T_1} \\Rightarrow T_1 = \\frac{303}{0,3} = 1010\\text{ K}$."
      }
    ]
  },
  {
    "id": "ch03-33903",
    "group": "ch03-05-kyklos-carnot",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33903",
    "bankCode": "33903",
    "title": "#33903 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch03-05-kyklos-carnot",
    "sourceOrder": 14,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "2.1 Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "prompt": "α. Σε ένα διάγραμμα $P-V$ ένας δεξιόστροφος κύκλος είναι κύκλος λειτουργίας ψυκτικής μηχανής.",
        "answer": false,
        "explain": "Λάθος. Ο δεξιόστροφος κύκλος αντιστοιχεί σε θερμική μηχανή, ενώ ο αριστερόστροφος σε ψυκτική μηχανή."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Στην ισόογκη μεταβολή η πίεση μεταβάλλεται αντιστρόφως ανάλογα με την απόλυτη θερμοκρασία.",
        "answer": false,
        "explain": "Λάθος. Στην ισόογκη μεταβολή η πίεση είναι ευθέως ανάλογη της απόλυτης θερμοκρασίας ($P/T = \\text{σταθερό}$)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Το υδρογόνο, το άζωτο και το οξυγόνο συμπεριφέρονται σαν τέλεια αέρια σε συνηθισμένες συνθήκες πίεσης και θερμοκρασίας.",
        "answer": true,
        "explain": "Σωστό. Τα αέρια αυτά υγροποιούνται δύσκολα και προσεγγίζουν το ιδανικό αέριο."
      },
      {
        "kind": "mc",
        "subq": "2.1",
        "openEnded": true,
        "prompt": "Δικαιολογήστε την απάντησή σας στο γ.",
        "options": [
          {
            "id": "a",
            "text": "Υγροποιούνται δύσκολα και σε συνηθισμένες συνθήκες απέχουν πολύ από τις συνθήκες υγροποίησης."
          },
          {
            "id": "b",
            "text": "Είναι υγρά σε θερμοκρασία δωματίου."
          },
          {
            "id": "c",
            "text": "Έχουν μηδενική μάζα."
          },
          {
            "id": "d",
            "text": "Δεν υπακούουν στον νόμο του Charles."
          }
        ],
        "answer": "a",
        "explain": "Υγροποιούνται δύσκολα, άρα σε συνηθισμένες συνθήκες απέχουν πολύ από την υγροποίηση."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "subqPrompt": "2.2 Αντιστοιχίστε τα τμήματα του κύκλου Carnot (Στήλη Α) με τις μεταβολές (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "1. 1-2"
          },
          {
            "id": "2",
            "text": "2. 2-3"
          },
          {
            "id": "3",
            "text": "3. 3-4"
          },
          {
            "id": "4",
            "text": "4. 4-5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Ισόογκη ψύξη"
          },
          {
            "id": "b",
            "text": "β. Ισοθερμοκρασιακή συμπίεση"
          },
          {
            "id": "c",
            "text": "γ. Αδιαβατική εκτόνωση"
          },
          {
            "id": "d",
            "text": "δ. Ισόθλιπτη θέρμανση"
          },
          {
            "id": "e",
            "text": "ε. Ισοθερμοκρασιακή εκτόνωση"
          },
          {
            "id": "στ",
            "text": "στ. Αδιαβατική συμπίεση"
          }
        ],
        "pairs": {
          "1": "e",
          "2": "c",
          "3": "b",
          "4": "στ"
        },
        "explain": "1-2: Ισοθερμοκρασιακή εκτόνωση (ε), 2-3: Αδιαβατική εκτόνωση (γ), 3-4: Ισοθερμοκρασιακή συμπίεση (β), 4-5: Αδιαβατική συμπίεση (στ).",
        "images": [
          "images/c/stoixeia-psyxis-klimatismou/chapter-03/c_stoixeia-psyxis-klimatismou_ch03_#33903_fig01.webp"
        ],
        "image": "images/c/stoixeia-psyxis-klimatismou/chapter-03/c_stoixeia-psyxis-klimatismou_ch03_#33903_fig01.webp"
      }
    ]
  }
]
);
