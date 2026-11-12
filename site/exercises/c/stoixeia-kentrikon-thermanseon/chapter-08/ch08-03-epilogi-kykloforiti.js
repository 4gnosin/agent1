window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch08-28450",
    "group": "ch08-03-epilogi-kykloforiti",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #28450",
    "bankCode": "28450",
    "title": "#28450 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch08-03-epilogi-kykloforiti",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "2.1 Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστό ή Λάθος:",
        "prompt": "α. Συνιστάται ο κυκλοφορητής να συνδέεται στην αναχώρηση του νερού από τον λέβητα.",
        "answer": true,
        "explain": "Σωστό. Συνιστάται η σύνδεση του κυκλοφορητή στην προσαγωγή (αναχώρηση) του νερού από τον λέβητα."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Το μανομετρικό ύψος που απαιτείται για την επιλογή ενός κυκλοφορητή σε μία εγκατάσταση κεντρικής θέρμανσης έχει άμεση σχέση με το ύψος της εγκατάστασης.",
        "answer": false,
        "explain": "Λάθος. Στα κλειστά κυκλώματα θέρμανσης το μανομετρικό ύψος εξαρτάται από τις τριβές (υδραυλικές αντιστάσεις) του δικτύου και όχι από το γεωμετρικό ύψος της οικοδομής."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Σε μια εγκατάσταση κεντρικής θέρμανσης ο κατάλληλος κυκλοφορητής επιλέγεται με τη βοήθεια των χαρακτηριστικών καμπυλών λειτουργίας διάφορων τύπων.",
        "answer": true,
        "explain": "Σωστό. Η επιλογή του κυκλοφορητή γίνεται με βάση τις χαρακτηριστικές καμπύλες λειτουργίας $V-H$ που παρέχει ο κατασκευαστής."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "δ. Η παροχή νερού του κυκλοφορητή μεταβάλλεται αντιστρόφως ανάλογα με τις στροφές λειτουργίας του.",
        "answer": false,
        "explain": "Λάθος. Η παροχή νερού μεταβάλλεται ανάλογα (απευθείας ανάλογα) με τις στροφές λειτουργίας του κυκλοφορητή ($V_1 / V_2 = n_1 / n_2$)."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "2.2 Να συμπληρώσετε τα κενά του παρακάτω κειμένου με τις κατάλληλες λέξεις:",
        "textBefore": [
          "«Ο κυκλοφορητής είναι μια ηλεκτροκίνητη ",
          " αντλία με ενσωματωμένο στο κέλυφός της τον ηλεκτροκινητήρα. Είναι ανθεκτικός σε θερμοκρασίες της τάξης των 120°C, ",
          " και δεν απαιτεί συντήρηση. Η λειτουργία του είναι ικανοποιητικά αθόρυβη, με τη προϋπόθεση ότι έχει γίνει σωστή επιλογή του μεγέθους του καθώς και των διαμέτρων των σωλήνων. Γενικά οι ",
          " στροφές και οι μικρές διάμετροι ευνοούν τους θορύβους.»"
        ],
        "answers": [
          "φυγοκεντρική",
          "υδρολίπαντος",
          "πολλές"
        ],
        "bank": [
          "φυγοκεντρική",
          "υδρολίπαντος",
          "πολλές",
          "αξονική",
          "ελαιολίπαντος",
          "λίγες"
        ],
        "explain": "Σωστή συμπλήρωση: (1) φυγοκεντρική, (2) υδρολίπαντος, (3) πολλές."
      }
    ]
  },
  {
    "id": "ch08-28452",
    "group": "ch08-03-epilogi-kykloforiti",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28452",
    "bankCode": "28452",
    "title": "#28452 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch08-03-epilogi-kykloforiti",
    "sourceOrder": 4,
    "stem": "Σε εγκατάσταση κεντρικής θέρμανσης η θερμική ισχύς του λέβητα είναι $Q_{\\Lambda} = 320.000\\text{ kcal/h}$, η διαφορά θερμοκρασίας του νερού στο λέβητα $\\Delta t = 20^{\\circ}\\text{C}$ και το μανομετρικό ύψος $H = 8\\text{ m Σ.Ν.}$",
    "givens": [
      {
        "label": "$Q_Λ$",
        "value": "$320000 \\text{kcal/h}$"
      },
      {
        "label": "Δt",
        "value": "$20 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "H",
        "value": "$8 \\text{m} Σ.Ν.$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογίσετε τη παροχή νερού $V$ του κυκλοφορητή σε $\\text{m}^3/\\text{h}$.",
        "formula": "$V = \\frac{Q_{\\Lambda}}{\\Delta t}$",
        "answer": 16,
        "unit": "m³/h",
        "tolerance": 0.01,
        "explain": "$V = \\frac{Q_{\\Lambda}}{\\Delta t} = \\frac{320.000\\text{ kcal/h}}{20^{\\circ}\\text{C}} = 16.000\\text{ l/h} = 16\\text{ m}^3/\\text{h}$."
      },
      {
        "kind": "mc",
        "subq": "β",
        "prompt": "β) Να επιλέξετε τον κατάλληλο τύπο κυκλοφορητή από το παρακάτω διάγραμμα λειτουργίας για παροχή $V = 16\\text{ m}^3/\\text{h}$ και μανομετρικό ύψος $H = 8\\text{ m Σ.Ν.}$.",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-08/c_stoixeia-kentrikon-thermanseon_ch08_28452_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "TOP S 50/10"
          },
          {
            "id": "b",
            "text": "TOP S 40/10"
          },
          {
            "id": "c",
            "text": "TOP S 65/10"
          },
          {
            "id": "d",
            "text": "TOP S 30/10"
          }
        ],
        "answer": "a",
        "explain": "Σύμφωνα με το διάγραμμα λειτουργίας κυκλοφορητών, το σημείο τομής της παροχής $V = 16\\text{ m}^3/\\text{h}$ και του μανομετρικού ύψους $H = 8\\text{ m Σ.Ν.}$ αντιστοιχεί στον κυκλοφορητή TOP S 50/10.",
        "images": [
          "images/c/stoixeia-kentrikon-thermanseon/chapter-08/c_stoixeia-kentrikon-thermanseon_ch08_28452_fig01.webp",
          "images/c/stoixeia-kentrikon-thermanseon/chapter-08/c_stoixeia-kentrikon-thermanseon_ch08_28452_fig01.webp"
        ]
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-kentrikon-thermanseon/chapter-08/c_stoixeia-kentrikon-thermanseon_ch08_28452_sol01.webp"
    ]
  }
]
);
