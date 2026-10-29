// Εδώ προσθέτεις τάξεις και μαθήματα.
// status: "ready"  -> κλικάρεται, πάει στο href (π.χ. "#/thermo")
// status: "soon"   -> εμφανίζεται σαν "Σύντομα", δεν κλικάρεται ακόμα
window.CATALOG = [
  {
    "id": "b",
    "label": "Β' Τάξη",
    "subjects": [
      {
        "id": "thermo",
        "title": "Θερμοδυναμική Θεωρία",
        "desc": "Σημειώσεις και διαδραστικός πίνακας ασκήσεων.",
        "status": "ready",
        "href": "#/thermo"
      },
      {
        "id": "thermo-lab",
        "title": "Θερμοδυναμική Εργαστήριο",
        "desc": "Εργαστηριακά κεφάλαια και όργανα μέτρησης.",
        "status": "ready",
        "href": "#/thermo-lab"
      },
      {
        "id": "antoxi",
        "title": "Αντοχή Υλικών",
        "desc": "Σημειώσεις και διαδραστικός πίνακας ασκήσεων.",
        "status": "ready",
        "href": "#/antoxi"
      }
    ]
  },
  {
    "id": "c",
    "label": "Γ' Τάξη",
    "subjects": [
      {
        "id": "stoixeia-michanon",
        "title": "Στοιχεία Μηχανών",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "soon"
      },
      {
        "id": "stoixeia-psyxis-klimatismou",
        "title": "Στοιχεία Ψύξης – Κλιματισμού Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "soon"
      },
      {
        "id": "egkatastaseis-klimatismou",
        "title": "Εγκαταστάσεις Κλιματισμού Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/egkatastaseis-klimatismou"
      },
      {
        "id": "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou",
        "title": "Συστήματα Ελέγχου, Ρύθμισης και Αυτοματισμού Εγκαταστάσεων Ψύξης και Κλιματισμού Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "soon"
      },
      {
        "id": "michanes-esoterikis-kafsis-2",
        "title": "Μηχανές Εσωτερικής Καύσης ΙΙ Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "soon"
      },
      {
        "id": "systimata-aftokinitou",
        "title": "Συστήματα Αυτοκινήτου Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "soon"
      },
      {
        "id": "texnologia-elegxou-diagnoseon",
        "title": "Τεχνολογία Ελέγχου και Διαγνώσεων Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "soon"
      }
    ],
    "specializations": [
      {
        "id": "psyxi-aerismos-klimatismos",
        "title": "Τεχνικός Εγκαταστάσεων Ψύξης Αερισμού και Κλιματισμού",
        "subjectIds": [
          "stoixeia-michanon",
          "stoixeia-psyxis-klimatismou",
          "egkatastaseis-klimatismou",
          "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"
        ]
      },
      {
        "id": "oximata",
        "title": "Τεχνικός Οχημάτων",
        "subjectIds": [
          "stoixeia-michanon",
          "michanes-esoterikis-kafsis-2",
          "systimata-aftokinitou",
          "texnologia-elegxou-diagnoseon"
        ]
      }
    ]
  }
];
