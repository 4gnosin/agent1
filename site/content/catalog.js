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
      },
      {
        "id": "texnologia-michanologikon-kataskevon",
        "title": "Τεχνολογία Μηχανολογικών Κατασκευών Θεωρία",
        "desc": "Σημειώσεις και διαδραστικός πίνακας ασκήσεων.",
        "status": "ready",
        "href": "#/texnologia-michanologikon-kataskevon"
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
        "status": "ready",
        "href": "#/stoixeia-michanon"
      },
      {
        "id": "stoixeia-psyxis-klimatismou",
        "title": "Στοιχεία Ψύξης – Κλιματισμού Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/stoixeia-psyxis-klimatismou"
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
        "status": "ready",
        "href": "#/systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"
      },
      {
        "id": "michanes-esoterikis-kafsis-2",
        "title": "Μηχανές Εσωτερικής Καύσης ΙΙ Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/michanes-esoterikis-kafsis-2"
      },
      {
        "id": "systimata-aftokinitou",
        "title": "Συστήματα Αυτοκινήτου Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/systimata-aftokinitou"
      },
      {
        "id": "texnologia-elegxou-diagnoseon",
        "title": "Τεχνολογία Ελέγχου και Διαγνώσεων Θεωρία",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/texnologia-elegxou-diagnoseon"
      },
      {
        "id": "stoixeia-kentrikon-thermanseon",
        "title": "Στοιχεία Σχεδιασμού Κεντρικών Θερμάνσεων",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/stoixeia-kentrikon-thermanseon"
      },
      {
        "id": "michanourgiki-texnologia",
        "title": "Μηχανουργική Τεχνολογία – Εργαλειομηχανές",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/michanourgiki-texnologia"
      },
      {
        "id": "stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon",
        "title": "Στοιχεία Ψύξης – Κλιματισμού",
        "desc": "Θεωρία και ασκήσεις.",
        "status": "ready",
        "href": "#/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"
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
      },
      {
        "id": "michanologikon-egkatastaseon-kataskevon",
        "title": "Τεχνικός Μηχανολογικών Εγκαταστάσεων και Κατασκευών",
        "subjectIds": [
          "stoixeia-michanon",
          "stoixeia-kentrikon-thermanseon",
          "michanourgiki-texnologia",
          "stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"
        ]
      }
    ]
  }
];
