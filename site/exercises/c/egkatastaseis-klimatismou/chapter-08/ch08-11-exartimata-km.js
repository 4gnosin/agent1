window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch08-34216",
    "group": "ch08-11-exartimata-km",
    "kind": "match",
    "layout": "unified",
    "bankCode": "34216",
    "code": "Θέμα 2<sup>ο</sup> · #34216",
    "title": "#34216 — Θέμα 2<sup>ο</sup> (2.1–2.3)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "match",
        "prompt": "Αντιστοιχίστε τα εξαρτήματα της Στήλης Α με τις ονομασίες της Στήλης Β:",
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
            "text": "Ανεμιστήρας"
          },
          {
            "id": "b",
            "text": "Στοιχείο εναλλαγής θερμότητας"
          },
          {
            "id": "c",
            "text": "Τάμπερ"
          },
          {
            "id": "d",
            "text": "Φίλτρο αέρα"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "c",
          "3": "a",
          "4": "b"
        },
        "explain": "Σωστή αντιστοίχιση εξαρτημάτων ΚΚΜ (1->δ, 2->γ, 3->α, 4->β)."
      },
      {
        "kind": "blank",
        "prompt": "Συμπληρώστε τα κενά στις προτάσεις:",
        "textBefore": [
          "1. ",
          " μιας κλιματιστικής μονάδας ονομάζεται ο αέρας ο οποίος εισέρχεται στην κλιματιστική μονάδα, μετά το κιβώτιο μείξης πριν ακόμα αυτός διέλθει από το στοιχείο και κλιματιστεί.\n2. Η εργαζόμενη μάζα, μέσω της οποίας επιτυγχάνεται ο κλιματισμός ενός χώρου είναι ",
          ".\n3. ",
          " ονομάζεται μια κλιματιστική μονάδα που έχει στοιχείο νερού."
        ],
        "answers": [
          "αέρας τροφοδοσίας",
          "ο αέρας",
          "Fun Coil Unit"
        ],
        "bank": [
          "αέρας τροφοδοσίας",
          "ο αέρας",
          "Fun Coil Unit",
          "το νερό",
          "Split Unit",
          "πρωτεύων αέρας"
        ],
        "explain": "Ορισμοί: 1) αέρας τροφοδοσίας, 2) ο αέρας ως εργαζόμενη μάζα, 3) Fan Coil Unit (Fun Coil Unit)."
      },
      {
        "kind": "tf",
        "prompt": "Ο ανεμιστήρας σε μια τοπική κλιματιστική μονάδα αναρροφά τον αέρα διασφαλίζοντας ισοκατανομή στην επιφάνεια του στοιχείου.",
        "answer": true,
        "explain": "Σωστό. Η αναρρόφηση δημιουργεί ομοιόμορφη υποπίεση και ομοιόμορφη ταχύτητα αέρα, βελτιστοποιώντας την απόδοση."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34216_fig01.png",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34216_fig01.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34216_fig02.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34216_fig03.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34216_fig04.png"
    ]
  },
  {
    "id": "ch08-34218",
    "group": "ch08-11-exartimata-km",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "34218",
    "code": "Θέμα 4<sup>ο</sup> · #34218",
    "title": "#34218 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 8,
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογίσετε την ταχύτητα του αέρα \\( V_a \\) δια μέσου των φίλτρων, αν η παροχή είναι \\( 450 \\text{ L/s} \\) και η επιφάνεια \\( 0,225 \\text{ m}^2 \\).",
        "formula": "V_a = Q_a / A_f",
        "answer": 2,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε την παροχή σε m³/s και διαιρέστε με την επιφάνεια.",
        "explain": "Μετατροπή: \\( Q_a = 450 \\text{ L/s} = 0,45 \\text{ m}^3\\text{/s} \\). Ταχύτητα: \\( V_a = \\frac{0,45}{0,225} = 2 \\text{ m/s} \\)."
      },
      {
        "kind": "tf",
        "prompt": "Εάν η επιτρεπόμενη ταχύτητα Vmax είναι 1,524 m/s, η ταχύτητα των 2 m/s είναι μεγαλύτερη από την επιτρεπόμενη και άρα πρέπει να μειωθεί.",
        "answer": true,
        "explain": "Σωστό. Η υπολογισμένη ταχύτητα (2 m/s) υπερβαίνει το όριο (1,524 m/s), άρα απαιτείται μείωση της ταχύτητας με αύξηση της επιφάνειας."
      },
      {
        "kind": "calc",
        "prompt": "Πόση πρέπει να είναι η νέα επιφάνεια των φίλτρων \\( A_{f,\\text{νεο}} \\) εάν μειώσουμε την ταχύτητα σε \\( 1,5 \\text{ m/s} \\) με σταθερή παροχή \\( 0,45 \\text{ m}^3\\text{/s} \\);",
        "formula": "A_f = Q_a / V_a",
        "answer": 0.3,
        "unit": "m^2",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο \\( A_f = Q_a / V_a \\).",
        "explain": "Νέα επιφάνεια: \\( A_{f,\\text{νεο}} = \\frac{0,45 \\text{ m}^3\\text{/s}}{1,5 \\text{ m/s}} = 0,3 \\text{ m}^2 \\)."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34218_sol01.png"
    ]
  },
  {
    "id": "ch08-34219",
    "group": "ch08-11-exartimata-km",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "34219",
    "code": "Θέμα 4<sup>ο</sup> · #34219",
    "title": "#34219 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολογίστε τη συνολική πτώση πίεσης εάν η πτώση πίεσης στην ΚΚΜ είναι 0,1 kPa και η ολική πτώση πίεσης στο δίκτυο αεραγωγών είναι 0,25 kPa.",
        "formula": "ΔP_ολ = ΔP_δικτύου + ΔP_ΚΚΜ",
        "answer": 0.35,
        "unit": "kPa",
        "tolerance": 0.01,
        "hint": "Προσθέστε την πτώση πίεσης του δικτύου και της ΚΚΜ.",
        "explain": "Συνολική πτώση πίεσης = \\( 0,25 \\text{ kPa} + 0,1 \\text{ kPa} = 0,35 \\text{ kPa} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Αν από το διάγραμμα για πτώση πίεσης 0,35 kPa και παροχή 1200 L/s βρούμε τον βαθμό απόδοσης του ανεμιστήρα ίσο με 53%, ποια είναι η τιμή αυτή;",
        "answer": 53,
        "unit": "%",
        "tolerance": 1,
        "hint": "Διαβάστε την τιμή από το σημείο τομής στο διάγραμμα χαρακτηριστικών καμπυλών.",
        "explain": "Από το διάγραμμα προκύπτει βαθμός απόδοσης \\( 53\\% \\)."
      },
      {
        "kind": "calc",
        "prompt": "Εάν θέλουμε να βελτιώσουμε τον βαθμό απόδοσης σε 72% με σταθερή πτώση πίεσης 0,35 kPa, ποια είναι η νέα απαιτούμενη παροχή αέρα (σε L/s);",
        "answer": 820,
        "unit": "L/s",
        "tolerance": 15,
        "hint": "Βρείτε το σημείο τομής της καμπύλης πίεσης 0,35 kPa με τον βαθμό απόδοσης 72% και διαβάστε την παροχή.",
        "explain": "Η νέα απαιτούμενη παροχή αέρα είναι ίση με \\( 820 \\text{ L/s} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34219_fig01.png",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34219_sol01.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34219_sol02.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34219_sol03.png"
    ]
  },
  {
    "id": "ch08-34222",
    "group": "ch08-11-exartimata-km",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "34222",
    "code": "Θέμα 2<sup>ο</sup> · #34222",
    "title": "#34222 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 10,
    "items": [
      {
        "kind": "tf",
        "prompt": "Τα τάμπερ χρησιμοποιούνται για τη ρύθμιση της παροχής του αέρα.",
        "answer": true,
        "explain": "Σωστό. Τα τάμπερ (κλαπέτα) ελέγχουν και ρυθμίζουν την παροχή του αέρα στους αεραγωγούς."
      },
      {
        "kind": "tf",
        "prompt": "Στις ηχοπαγίδες, όσο μικρότερο είναι το πάχος και το μήκος των διαχωριστικών (splitters) τόσο καλύτερη είναι η απόσβεση του ήχου.",
        "answer": false,
        "explain": "Λάθος. Μεγαλύτερο μήκος και κατάλληλες διαστάσεις ενισχύουν την ηχοαπόσβεση."
      },
      {
        "kind": "tf",
        "prompt": "Μία μονάδα ανεμιστήρα-στοιχείου (FCU) δεν πρέπει να αφήνεται να λειτουργεί χωρίς φίλτρο, διότι η σκόνη επικαθήται στις επιφάνειες και αχρηστεύει το στοιχείο.",
        "answer": true,
        "explain": "Σωστό. Χωρίς φίλτρο η σκόνη επικαθήται στα πτερύγια εναλλαγής θερμότητας και μειώνει δραστικά την απόδοση."
      },
      {
        "kind": "match",
        "prompt": "Αντιστοιχίστε τα μέρη του FCU (Στήλη Α) με τα γράμματα (Στήλη Β):",
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
            "text": "Ανεμιστήρας"
          },
          {
            "id": "b",
            "text": "Αυτοματισμός"
          },
          {
            "id": "c",
            "text": "Στοιχείο"
          },
          {
            "id": "d",
            "text": "Φίλτρο"
          },
          {
            "id": "e",
            "text": "Λεκάνη συμπυκνωμάτων"
          }
        ],
        "pairs": {
          "1": "e",
          "2": "c",
          "3": "d",
          "4": "a"
        },
        "explain": "Σωστή αντιστοίχιση εξαρτημάτων FCU (1->ε, 2->γ, 3->δ, 4->α)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34222_fig01.png"
  },
  {
    "id": "ch08-34223",
    "group": "ch08-11-exartimata-km",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "34223",
    "code": "Θέμα 2<sup>ο</sup> · #34223",
    "title": "#34223 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 11,
    "items": [
      {
        "kind": "tf",
        "prompt": "Οι υγραντήρες τύπου pan (δοχείο) επιτυγχάνουν υψηλό βαθμό ύγρανσης.",
        "answer": true,
        "explain": "Σωστό. Οι υγραντήρες τύπου δοχείου (pan) προσθέτουν υγρασία με εξάτμιση νερού."
      },
      {
        "kind": "tf",
        "prompt": "Τα απόλυτα φίλτρα έχουν πολύ μικρή ικανότητα φιλτραρίσματος.",
        "answer": false,
        "explain": "Λάθος. Τα απόλυτα φίλτρα (HEPA) έχουν εξαιρετικά υψηλή ικανότητα φιλτραρίσματος (άνω του 99,9%)."
      },
      {
        "kind": "tf",
        "prompt": "Η θερμομόνωση δεν είναι απαραίτητη στις Κεντρικές Κλιματιστικές Μονάδες (ΚΚΜ).",
        "answer": false,
        "explain": "Λάθος. Η θερμομόνωση είναι απολύτως απαραίτητη στις ΚΚΜ επειδή τοποθετούνται σε μη κλιματιζόμενους χώρους και εξωτερικές ταράτσες."
      },
      {
        "kind": "match",
        "prompt": "Αντιστοιχίστε τα μέρη της ΚΚΜ (Στήλη Α) με τα γράμματα (Στήλη Β):",
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
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Στοιχεία"
          },
          {
            "id": "b",
            "text": "Υγραντήρας με υγροσυλλέκτη"
          },
          {
            "id": "c",
            "text": "Θερμομονωμένα καπάκια"
          },
          {
            "id": "d",
            "text": "Έξοδος αέρα"
          },
          {
            "id": "e",
            "text": "Ανεμιστήρας"
          },
          {
            "id": "στ",
            "text": "Εισαγωγή αέρα"
          }
        ],
        "pairs": {
          "1": "στ",
          "2": "b",
          "3": "e",
          "4": "a",
          "5": "c"
        },
        "explain": "Σωστή αντιστοίχιση μερών ΚΚΜ πολλαπλών ζωνών (1->στ, 2->β, 3->ε, 4->α, 5->γ)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34223_fig01.png",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34223_sol01.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34223_sol02.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34223_sol03.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#34223_sol04.png"
    ]
  },
  {
    "id": "ch08-34729",
    "group": "ch08-11-exartimata-km",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "34729",
    "code": "Θέμα 4<sup>ο</sup> · #34729",
    "title": "#34729 — Θέμα 4<sup>ο</sup> (α–δ)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ταχύτητα του αέρα \\( V_a \\) που περνάει από το φίλτρο, εάν η παροχή είναι \\( 2000 \\text{ L/s} \\) και η επιφάνεια \\( A_f = 1 \\text{ m}^2 \\).",
        "formula": "V_a = Q_a / A_f",
        "answer": 2,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τα 2000 L/s σε m³/s και διαιρέστε με το 1 m².",
        "explain": "Παροχή \\( Q_a = 2000 \\text{ L/s} = 2 \\text{ m}^3\\text{/s} \\). Ταχύτητα \\( V_a = \\frac{2}{1} = 2 \\text{ m/s} \\)."
      },
      {
        "kind": "tf",
        "prompt": "Είναι κατάλληλο το φίλτρο αν η ταχύτητα είναι 2 m/s ενώ η μέγιστη επιτρεπόμενη είναι Vmax = 1,5 m/s;",
        "answer": false,
        "explain": "Λάθος. Το φίλτρο δεν είναι κατάλληλο διότι η ταχύτητα \\( 2 \\text{ m/s} > 1,5 \\text{ m/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Αν η παροχή μειωθεί σε \\( 1200 \\text{ L/s} \\) (δηλαδή \\( 1,2 \\text{ m}^3\\text{/s} \\)) με επιφάνεια \\( 1 \\text{ m}^2 \\), ποια είναι η νέα ταχύτητα \\( V_a \\);",
        "formula": "V_a = Q_a / A_f",
        "answer": 1.2,
        "unit": "m/s",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη νέα παροχή με την επιφάνεια.",
        "explain": "Νέα ταχύτητα \\( V_a = \\frac{1,2}{1} = 1,2 \\text{ m/s} \\), η οποία είναι μικρότερη από το όριο \\( 1,5 \\text{ m/s} \\), άρα το φίλτρο καθίσταται κατάλληλο."
      },
      {
        "kind": "calc",
        "prompt": "Ποιο είναι το ποσοστό συγκράτησης σωματιδίων διαμέτρου 0,3 μm από φίλτρο κατηγορίας H12 (σε %);",
        "answer": 99.99,
        "unit": "%",
        "tolerance": 0.1,
        "hint": "Συμβουλευθείτε τα χαρακτηριστικά των φίλτρων HEPA κατηγορίας H12.",
        "explain": "Το φίλτρο κατηγορίας H12 συγκρατεί τουλάχιστον το \\( 99,99\\% \\) των σωματιδίων διαμέτρου 0,3 μm."
      }
    ]
  },
  {
    "id": "ch08-34868",
    "group": "ch08-11-exartimata-km",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "34868",
    "code": "Θέμα 4<sup>ο</sup> · #34868",
    "title": "#34868 — Θέμα 4<sup>ο</sup> (4.1α–ε)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 13,
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ολική πτώση πίεσης που πρέπει να καλύψει ο ανεμιστήρας, αν η πτώση πίεσης του δικτύου αεραγωγών είναι 0,70 kPa και η πτώση πίεσης στην ΚΚΜ είναι 0,20 kPa.",
        "formula": "ΔP_ολ = ΔP_δικτύου + ΔP_ΚΚΜ",
        "answer": 0.9,
        "unit": "kPa",
        "tolerance": 0.01,
        "hint": "Προσθέστε την πτώση πίεσης του δικτύου και της ΚΚΜ.",
        "explain": "Ολική πτώση πίεσης = \\( 0,70 \\text{ kPa} + 0,20 \\text{ kPa} = 0,90 \\text{ kPa} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Για παροχή αέρα 1000 L/s και ολική πτώση πίεσης 0,90 kPa, ποιες είναι οι στροφές λειτουργίας του ανεμιστήρα (σε rpm);",
        "answer": 2400,
        "unit": "rpm",
        "tolerance": 50,
        "hint": "Εντοπίστε το σημείο στο διάγραμμα 1.",
        "explain": "Από το διάγραμμα 1, οι στροφές λειτουργίας είναι 2400 rpm."
      },
      {
        "kind": "calc",
        "prompt": "Ποια είναι η απορροφούμενη ισχύς από τον κινητήρα (σε kW) για τις ίδιες συνθήκες;",
        "answer": 1.2,
        "unit": "kW",
        "tolerance": 0.1,
        "hint": "Διαβάστε την ισχύ από το διάγραμμα 1.",
        "explain": "Η απορροφούμενη ισχύς είναι περίπου 1,2 kW."
      },
      {
        "kind": "calc",
        "prompt": "Ποιος είναι ο βαθμός απόδοσης του ανεμιστήρα (σε %) για τις ίδιες συνθήκες;",
        "answer": 78,
        "unit": "%",
        "tolerance": 2,
        "hint": "Διαβάστε τον βαθμό απόδοσης από το διάγραμμα 1.",
        "explain": "Ο βαθμός απόδοσης του ανεμιστήρα είναι 78%."
      },
      {
        "kind": "calc",
        "prompt": "Ποια είναι η στάθμη θορύβου (σε dBA) για τις ίδιες συνθήκες;",
        "answer": 82,
        "unit": "dBA",
        "tolerance": 2,
        "hint": "Διαβάστε τη στάθμη θορύβου από το διάγραμμα 1.",
        "explain": "Η στάθμη θορύβου είναι 82 dBA."
      }
    ]
  },
  {
    "id": "ch08-35090",
    "group": "ch08-11-exartimata-km",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "35090",
    "code": "Θέμα 2<sup>ο</sup> · #35090",
    "title": "#35090 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "ch08-11",
    "sourceOrder": 14,
    "items": [
      {
        "kind": "tf",
        "prompt": "Το στοιχείο μιας ΚΚΜ μοιάζει κατασκευαστικά με αυτό ενός FCU, με κύριες διαφορές στους συλλέκτες και στο σύστημα ροής που είναι η αντιρροή.",
        "answer": true,
        "explain": "Σωστό. Υπάρχουν κατασκευαστικές ομοιότητες αλλά και διαφορές στη διάταξη και στους συλλέκτες (αντιρροή)."
      },
      {
        "kind": "tf",
        "prompt": "Η θερμομόνωση είναι απαραίτητη στις ΚΚΜ επειδή τοποθετούνται σε μη κλιματιζόμενους χώρους.",
        "answer": true,
        "explain": "Σωστό. Η τοποθέτηση σε εξωτερικούς ή μη κλιματιζόμενους χώρους καθιστά τη θερμομόνωση απαραίτητη."
      },
      {
        "kind": "tf",
        "prompt": "Οι ΗΚΜ (Ημικεντρικές Κλιματιστικές Μονάδες) χρησιμοποιούνται μόνο σε περιπτώσεις που μπορεί να εφαρμοστεί ένα μεγάλο κεντρικό δίκτυο αεραγωγών.",
        "answer": false,
        "explain": "Λάθος. Οι ημικεντρικές μονάδες χρησιμοποιούνται συνήθως με μικρότερα ή τοπικά δίκτυα."
      },
      {
        "kind": "match",
        "prompt": "Αντιστοιχίστε τους αριθμούς της Στήλης Α με τα γράμματα της Στήλης Β:",
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
            "text": "Ανεμιστήρας FCU"
          },
          {
            "id": "b",
            "text": "Ηχοπαγίδα αεραγωγού"
          },
          {
            "id": "c",
            "text": "Στοιχείο FCU"
          },
          {
            "id": "d",
            "text": "Τρίοδη βάνα"
          },
          {
            "id": "e",
            "text": "Τάμπερ"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "d",
          "3": "a",
          "4": "b"
        },
        "explain": "Σωστή αντιστοίχιση εξαρτημάτων (1->c, 2->d, 3->a, 4->b)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#35090_fig01.png",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#35090_fig01.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#35090_fig02.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#35090_fig03.png",
      "images/c/egkatastaseis-klimatismou/chapter-08/c_egkatastaseis-klimatismou_ch08_#35090_fig04.png"
    ]
  }
]
);
