window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"].exercises.push(...
[
  {
    "id": "ch02-23637",
    "group": "ch02-11-deutero-thermodynamiko-axioma",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23637",
    "bankCode": "23637",
    "title": "#23637 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch02-11-deutero-thermodynamiko-axioma",
    "sourceOrder": 12,
    "images": [
      "images/c/stoixeia-psyxis-klimatismou/chapter-02/c_stoixeia-psyxis-klimatismou_ch02_23637_fig01.webp"
    ],
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε το γράμμα κάθε μίας από τις παρακάτω προτάσεις και δίπλα μία από τις λέξεις που συμπληρώνει σωστά την πρόταση.",
        "textBefore": [
          "α. Ο βαθμός απόδοσης μιας θερμικής μηχανής είναι ένας αριθμός ",
          " από τη μονάδα.  β. Η θερμότητα που δίνεται σε ένα αέριο ισούται με το ",
          " της μεταβολής της εσωτερικής του ενέργειας και του έργου που μας δίνει το αέριο.  γ. Είναι αδύνατο να κατασκευαστεί ",
          " μηχανή η οποία να μετατρέπει τη θερμότητα σε έργο χωρίς ταυτόχρονα να παρέχει κάποια θερμότητα προς μία δεξαμενή χαμηλότερης θερμοκρασίας."
        ],
        "answers": [
          "μικρότερος",
          "άθροισμα",
          "θερμική"
        ],
        "bank": [
          "μικρότερος",
          "άθροισμα",
          "θερμική",
          "άθροισμα",
          "γινόμενο",
          "ψυκτική",
          "μεγαλύτερος"
        ],
        "explain": "α. μικρότερος, β. άθροισμα, γ. θερμική."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζονται τα μέρη μιας ατμομηχανής. Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη της ατμομηχανής:",
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
            "text": "α. Κύλινδρος"
          },
          {
            "id": "b",
            "text": "β. Αντλία"
          },
          {
            "id": "c",
            "text": "γ. Λέβητας"
          },
          {
            "id": "d",
            "text": "δ. Ψυγείο"
          },
          {
            "id": "e",
            "text": "ε. Στρόβιλος"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "e",
          "3": "d",
          "4": "b"
        },
        "explain": "1-γ (Λέβητας), 2-ε (Στρόβιλος), 3-δ (Ψυγείο), 4-β (Αντλία).",
        "image": "images/c/stoixeia-psyxis-klimatismou/chapter-02/c_stoixeia-psyxis-klimatismou_ch02_23637_fig01.webp"
      }
    ]
  },
  {
    "id": "ch02-25263",
    "group": "ch02-11-deutero-thermodynamiko-axioma",
    "kind": "calc",
    "layout": "unified",
    "stem": "Στο σχήμα 1, φαίνονται οι ενεργειακές συναλλαγές του ψυκτικού μέσου σε ένα ψυγείο. Το ψυκτικό μέσο απορροφά θερμότητα $Q_2$ από τον ψυχόμενο χώρο και αποβάλλει θερμότητα $Q_1 = 500\\text{ Joule}$ προς το περιβάλλον. Εισπράττει έργο $W = 250\\text{ Joule}$ με μηχανική συμπίεση ατμών. Να υπολογιστεί:",
    "code": "Θέμα 4<sup>ο</sup> · #25263",
    "bankCode": "25263",
    "title": "#25263 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch02-11-deutero-thermodynamiko-axioma",
    "sourceOrder": 13,
    "images": [
      "images/c/stoixeia-psyxis-klimatismou/chapter-02/c_stoixeia-psyxis-klimatismou_ch02_25263_fig01.webp"
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Η θερμότητα $Q_2$ που απορροφά το ψυκτικό μέσο.",
        "formula": "$Q_2 = Q_1 - W$",
        "answer": 250,
        "unit": "Joule",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον ενεργειακό ισολογισμό για ψυκτική μηχανή ($Q_1 = W + Q_2$).",
        "explain": "$Q_1 = W + Q_2 \\Rightarrow Q_2 = Q_1 - W = 500\\text{ J} - 250\\text{ J} = 250\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να εκφράσετε την τιμή της θερμότητας $Q_2$ σε Kcal.",
        "formula": "$Q_2\\text{ (Kcal)} = \\frac{Q_2\\text{ (J)}}{4,183 \\cdot 1000}$",
        "answer": 0.059,
        "unit": "Kcal",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τις σχέσεις $1\\text{ cal} = 4,183\\text{ J}$ και $1\\text{ Kcal} = 1000\\text{ cal}$.",
        "explain": "$250\\text{ Joule} = \\frac{250}{4,183} = 59,76\\text{ cal} = 0,0597\\text{ Kcal} \\approx 0,059\\text{ Kcal}$."
      }
    ],
    "image": "images/c/stoixeia-psyxis-klimatismou/chapter-02/c_stoixeia-psyxis-klimatismou_ch02_25263_fig01.webp"
  }
]
);
