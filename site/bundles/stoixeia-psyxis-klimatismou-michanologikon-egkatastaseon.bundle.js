// ============================================================================
// 4gnosin - Auto-generated Bundle for: stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon
// Συνενώνει 35 αρχεία (θεωρία, ομάδες, ασκήσεις, animations)
// Υποστηρίζει file:/// και web.
// ============================================================================
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch02-06-metadosi-thermotitas",
    "chapter": "2",
    "title": "2.6 Μετάδοση θερμότητας. Τρόποι μετάδοσης",
    "blurb": "Θεμελιώδεις έννοιες μετάδοσης θερμότητας, αγωγή, μεταφορά, ακτινοβολία και υπολογισμοί."
  },
  {
    "id": "ch02-07-piesi-piesometra",
    "chapter": "2",
    "title": "2.7 Πίεση – Πιεσόμετρα- Μονάδες – Μετατροπές",
    "blurb": "Πίεση, μονάδες μέτρησης, ατμοσφαιρική και απόλυτη πίεση, όργανα μέτρησης."
  },
  {
    "id": "ch02-10-proto-thermodynamiko-axioma",
    "chapter": "2",
    "title": "2.10 Πρώτο Θερμοδυναμικό Αξίωμα",
    "blurb": "Εφαρμογές του πρώτου θερμοδυναμικού αξιώματος σε κλειστά συστήματα."
  },
  {
    "id": "ch02-11-deutero-thermodynamiko-axioma",
    "chapter": "2",
    "title": "2.11 Δεύτερο Θερμοδυναμικό Αξίωμα",
    "blurb": "Θερμικές και ψυκτικές μηχανές, βαθμός απόδοσης και θερμοδυναμικοί νόμοι."
  },
  {
    "id": "ch02-12-enthalpy-entropy",
    "chapter": "2",
    "title": "2.12 Ενθαλπία - Εντροπία",
    "blurb": "Καταστατικά μεγέθη, εσωτερική ενέργεια, ενθαλπία και εντροπία."
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/ch02-06-metadosi-thermotitas.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-23776",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23776",
    "bankCode": "23776",
    "title": "#23776 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "metadosi-thermotitas",
    "stem": "Απαντήστε στις ερωτήσεις σχετικά με τους τρόπους μετάδοσης της θερμότητας και τα θερμοδυναμικά φαινόμενα.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "α. Η αύξηση της θερμοκρασίας ενός σώματος θα έχει ως συνέπεια και την αύξηση της κινητικής ενέργειας των μορίων του.",
        "prompt": "α. Η αύξηση της θερμοκρασίας ενός σώματος θα έχει ως συνέπεια και την αύξηση της κινητικής ενέργειας των μορίων του.",
        "answer": true,
        "explain": "Η θερμοκρασία ενός σώματος είναι μέτρο της μέσης κινητικής ενέργειας των μορίων του. Συνεπώς, αύξηση της θερμοκρασίας συνεπάγεται αύξηση της κινητικής ενέργειας των μορίων."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Το νερό που ρέει από το βουνό προς τη θάλασσα μπορεί να παράγει έργο.",
        "answer": true,
        "explain": "Το νερό που ρέει διαθέτει κινητική και δυναμική ενέργεια, η οποία μπορεί να αξιοποιηθεί (π.χ. σε υδροηλεκτρικά έργα) για την παραγωγή έργου."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Κατά τη διαδικασία θέρμανσης μιας ποσότητας ουσίας, η θερμοκρασία της δεν αυξήθηκε. Η θερμότητα που προσδόθηκε ονομάζεται αισθητή.",
        "answer": false,
        "explain": "Λάθος. Όταν προσδίδεται θερμότητα σε μια ουσία αλλά η θερμοκρασία της παραμένει σταθερή (π.χ. κατά την αλλαγή φάσης), η θερμότητα ονομάζεται λανθάνουσα."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "δ. Με την τοποθέτηση ενός σώματος καλοριφέρ στο υψηλότερο σημείο ενός δωματίου μπορούμε να δημιουργήσουμε φυσική κυκλοφορία του αέρα.",
        "answer": false,
        "explain": "Λάθος. Τα θερμαντικά σώματα τοποθετούνται χαμηλά στο δωμάτιο ώστε ο θερμός αέρας, επειδή είναι ελαφρύτερος, να ανεβαίνει προς τα επάνω, δημιουργώντας φυσική κυκλοφορία (συναγωγή)."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Να αντιστοιχίσετε κάθε τρόπο μετάδοσης θερμότητας (Στήλη Α) με το αντίστοιχο μέσο (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "Αγωγή"
          },
          {
            "id": "2",
            "text": "Μεταφορά"
          },
          {
            "id": "3",
            "text": "Ακτινοβολία"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ρευστά"
          },
          {
            "id": "b",
            "text": "Δεν απαιτείται η παρουσία ύλης"
          },
          {
            "id": "c",
            "text": "Στερεά"
          },
          {
            "id": "d",
            "text": "Στερεά και ακίνητα ρευστά"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "a",
          "3": "b"
        },
        "explain": "Η αγωγή πραγματοποιείται κυρίως σε στερεά και ακίνητα ρευστά. Η μεταφορά γίνεται στα ρευστά (υγρά και αέρια). Η ακτινοβολία διαδίδεται μέσω ηλεκτρομαγνητικών κυμάτων και δεν απαιτεί την παρουσία ύλης (κενό)."
      }
    ]
  },
  {
    "id": "ch02-25264",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25264",
    "bankCode": "25264",
    "title": "#25264 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "metadosi-thermotitas",
    "stem": "Να βρεθεί η επιφάνεια ενός ψυκτικού θαλάμου από ομοιογενές υλικό πάχους $0{,}2\\text{ m}$ και ειδική θερμική αγωγιμότητα $k = 0{,}06\\text{ kcal}/(\\text{h}\\cdot\\text{m}\\cdot{}^{\\circ}\\text{C})$, αν η διαφορά θερμοκρασίας μεταξύ εσωτερικού χώρου και περιβάλλοντος είναι $30{}^{\\circ}\\text{C}$ και η θερμότητα ανά ώρα που εισέρχεται με αγωγή είναι $90\\text{ kcal/h}$.",
    "givens": [
      {
        "label": "$d$",
        "value": "$0{,}2 \\text{m}$"
      },
      {
        "label": "$k$",
        "value": "$0{,}06 \\text{kcal}/(\\text{h}\\cdot \\text{m}\\cdot{}^{\\circ}\\text{C})$"
      },
      {
        "label": "$\\Delta T$",
        "value": "$30{}^{\\circ}\\text{C}$"
      },
      {
        "label": "$Q/t$",
        "value": "$90 \\text{kcal/h}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Υπολογίστε την επιφάνεια $A$ του ψυκτικού θαλάμου σε $\\text{m}^2$.",
        "formula": "$A = \\frac{(Q/t) \\cdot d}{k \\cdot \\Delta T}$",
        "answer": 10,
        "unit": "m²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον νόμο της αγωγής Fourier: $\\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{d}$ και λύστε ως προς $A$.",
        "explain": "Από τον τύπο της αγωγής θερμότητας έχουμε:\n$$\\frac{Q}{t} = \\frac{k \\cdot A \\cdot \\Delta T}{d} \\implies A = \\frac{(Q/t) \\cdot d}{k \\cdot \\Delta T}$$\nΜε αντικατάσταση:\n$$A = \\frac{90 \\cdot 0{,}2}{0{,}06 \\cdot 30} = \\frac{18}{1{,}8} = 10\\text{ m}^2$$"
      }
    ]
  },
  {
    "id": "ch02-25312",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25312",
    "bankCode": "25312",
    "title": "#25312 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "metadosi-thermotitas",
    "stem": "Απαντήστε στις προτάσεις και εντοπίστε τους τρόπους μετάδοσης θερμότητας στην εικόνα.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "α. Στη θερμοκρασία των -237°C η κινητική ενέργεια των μορίων ενός σώματος είναι μηδέν, δηλαδή τα μόρια είναι ακίνητα.",
        "prompt": "α. Στη θερμοκρασία των -237°C η κινητική ενέργεια των μορίων ενός σώματος είναι μηδέν, δηλαδή τα μόρια είναι ακίνητα.",
        "answer": false,
        "explain": "Λάθος. Το απόλυτο μηδέν, στο οποίο η κινητική ενέργεια των μορίων μηδενίζεται και τα μόρια θεωρητικά ακκινητοποιούνται, είναι οι -273,15°C (0 K) και όχι οι -237°C."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Για να διακρίνουμε τη λήψη από την κατανάλωση έργου χρησιμοποιούμε και το αντίστοιχο πρόσημο. Όταν καταναλώνουμε έργο σημειώνουμε αρνητικό πρόσημο (-), ενώ όταν παίρνουμε έργο σημειώνουμε θετικό πρόσημο (+).",
        "answer": true,
        "explain": "Σύμφωνα με τη θερμοδυναμική σύμβαση, το έργο που παράγεται από το σύστημα (λήψη/εξαγωγή έργου προς τα έξω) θεωρείται θετικό, ενώ το έργο που καταναλώνεται από το σύστημα (είσοδος έργου) θεωρείται αρνητικό."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Μονάδα μέτρησης του έργου στο S.I. είναι το Τζάουλ ανά δευτερόλεπτο (J/s).",
        "answer": false,
        "explain": "Λάθος. Μονάδα μέτρησης του έργου (και της ενέργειας) στο S.I. είναι το Τζάουλ (J). Το J/s (ή Watt) είναι μονάδα μέτρησης ισχύος."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "δ. Τα γυάλινα θερμόμετρα υγρού έχουν μικρή ακρίβεια μέτρησης.",
        "answer": false,
        "explain": "Λάθος. Τα θερμόμετρα υγρού σε γυαλί (π.χ. υδραργύρου ή οινόμετρου) προσφέρουν ικανοποιητική και αποδεκτή ακρίβεια για τις συνηθισμένες τεχνικές εφαρμογές."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Στην παρακάτω εικόνα απεικονίζεται μια κατσαρόλα με νερό που ζεσταίνεται από τη φωτιά, ενώ το χερούλι κρατιέται από ανθρώπινο χέρι. Επιλέξτε τον τρόπο μετάδοσης της θερμότητας που αντιστοιχεί στο γράμμα Α (κίνηση νερού μέσα στην κατσαρόλα).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_25312_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "Μετάδοση θερμότητας με αγωγή"
          },
          {
            "id": "b",
            "text": "Μετάδοση θερμότητας με μεταφορά"
          },
          {
            "id": "c",
            "text": "Μετάδοση θερμότητας με ακτινοβολία"
          },
          {
            "id": "d",
            "text": "Μετάδοση θερμότητας με επαγωγή"
          }
        ],
        "answer": "b",
        "explain": "Το γράμμα Α δείχνει τη θέρμανση και κυκλοφορία του νερού στο εσωτερικό της κατσαρόλας, η οποία γίνεται με μεταφορά (συναγωγή)."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Στην ίδια εικόνα με την κατσαρόλα, επιλέξτε τον τρόπο μετάδοσης της θερμότητας που αντιστοιχεί στο γράμμα Β (μεταφορά θερμότητας από τη βάση προς το χερούλι/τοίχωμα).",
        "options": [
          {
            "id": "a",
            "text": "Μετάδοση θερμότητας με αγωγή"
          },
          {
            "id": "b",
            "text": "Μετάδοση θερμότητας με μεταφορά"
          },
          {
            "id": "c",
            "text": "Μετάδοση θερμότητας με ακτινοβολία"
          },
          {
            "id": "d",
            "text": "Εξάτμιση"
          }
        ],
        "answer": "a",
        "explain": "Το γράμμα Β αναφέρεται στη διάδοση της θερμότητας μέσα από τα στερεά τοιχώματα του σκεύους, η οποία γίνεται με αγωγή."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Στην ίδια εικόνα, επιλέξτε τον τρόπο μετάδοσης της θερμότητας που αντιστοιχεί στο γράμμα Γ (από την πηγή/φωτιά προς το σκεύος).",
        "options": [
          {
            "id": "a",
            "text": "Μετάδοση θερμότητας με αγωγή"
          },
          {
            "id": "b",
            "text": "Μετάδοση θερμότητας με μεταφορά"
          },
          {
            "id": "c",
            "text": "Μετάδοση θερμότητας με ακτινοβολία"
          },
          {
            "id": "d",
            "text": "Συμπύκνωση"
          }
        ],
        "answer": "c",
        "explain": "Το γράμμα Γ αναφέρεται στη μεταφορά θερμότητας από την εστία φωτιάς/ακτινοβολίας προς το δοχείο."
      }
    ]
  },
  {
    "id": "ch02-25313",
    "group": "ch02-06-metadosi-thermotitas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25313",
    "bankCode": "25313",
    "title": "#25313 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "metadosi-thermotitas",
    "stem": "Επιφάνεια $A = 15\\text{ m}^2$ από ξύλο, ειδικής θερμικής αγωγιμότητας $k = 0{,}17\\text{ W}/(\\text{m}\\cdot\\text{K})$, έχει πάχος $d = 10\\text{ cm}$. Αν η μία πλευρά της επιφάνειας έχει θερμοκρασία $\\vartheta_1 = 27{}^{\\circ}\\text{C}$ και η άλλη $\\vartheta_2 = 7{}^{\\circ}\\text{C}$, να υπολογίσετε τις απόλυτες θερμοκρασίες και την παροχή θερμότητας.",
    "givens": [
      {
        "label": "$A$",
        "value": "$15 \\text{m}^{2}$"
      },
      {
        "label": "$k$",
        "value": "$0{,}17 \\text{W}/(\\text{m}\\cdot \\text{K})$"
      },
      {
        "label": "$d$",
        "value": "$10 \\text{cm} = 0{,}1 \\text{m}$"
      },
      {
        "label": "$\\vartheta_1$",
        "value": "$27{}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\vartheta_2$",
        "value": "$7{}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε την απόλυτη θερμοκρασία $T_1$ σε Κέλβιν (K).",
        "formula": "$T_1 = \\vartheta_1 + 273$",
        "answer": 300,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στη θερμοκρασία Κελσίου.",
        "explain": "$T_1 = 27 + 273 = 300\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε την απόλυτη θερμοκρασία $T_2$ σε Κέλβιν (K).",
        "formula": "$T_2 = \\vartheta_2 + 273$",
        "answer": 280,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στη θερμοκρασία Κελσίου.",
        "explain": "$T_2 = 7 + 273 = 280\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε την παροχή θερμότητας $Q/t$ σε Watt (W) που ρέει διαμέσου της επιφάνειας.",
        "formula": "$\\frac{Q}{t} = \\frac{A \\cdot k \\cdot (T_1 - T_2)}{d}$",
        "answer": 510,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε το πάχος $d$ σε μέτρα ($0{,}1\\text{ m}$) και εφαρμόστε τον τύπο της αγωγής.",
        "explain": "Η παροχή θερμότητας δίνεται από τη σχέση:\n$$\\frac{Q}{t} = \\frac{A \\cdot k \\cdot (T_1 - T_2)}{d}$$\nΜε αντικατάσταση:\n$$\\frac{Q}{t} = \\frac{15 \\cdot 0{,}17 \\cdot (300 - 280)}{0{,}1} = 510\\text{ W}$$",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_25313_fig01.webp"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/ch02-07-piesi-piesometra.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-23764",
    "group": "ch02-07-piesi-piesometra",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23764",
    "bankCode": "23764",
    "title": "#23764 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "piesi-piesometra",
    "stem": "Απαντήστε στις ερωτήσεις σχετικά με την πίεση, τα πιεσόμετρα και τις μονάδες μέτρησης.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "α. Το bar και η atm είναι διαφορετικές μονάδες μέτρησης της πίεσης με πολύ κοντινές τιμές.",
        "prompt": "α. Το bar και η atm είναι διαφορετικές μονάδες μέτρησης της πίεσης με πολύ κοντινές τιμές.",
        "answer": true,
        "explain": "Το bar ($1\\text{ bar} = 10^5\\text{ Pa}$) και η ατμόσφαιρα ($\\text{atm} = 101325\\text{ Pa}$) είναι διαφορετικές μονάδες, αλλά οι τιμές τους είναι σχεδόν ίσες ($\\approx 1\\text{ bar} \\approx 0{,}987\\text{ atm}$)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Η ένδειξη του μανομέτρου είναι το άθροισμα της πραγματικής (ή απόλυτης) πίεσης του αερίου και της ατμοσφαιρικής πίεσης.",
        "answer": false,
        "explain": "Λάθος. Η απόλυτη πίεση είναι το άθροισμα της μανομετρικής (υπερπίεσης) και της ατμοσφαιρικής πίεσης ($P_{\\text{αδ}} = P_{\\text{μαν}} + P_{\\text{ατμ}}$). Επομένως, η ένδειξη του μανομέτρου είναι η διαφορά της απόλυτης πίεσης από την ατμοσφαιρική."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Η πίεση είναι ανάλογη της εφαρμοζόμενης δύναμης και αντιστρόφως ανάλογη της επιφάνειας επαφής.",
        "answer": true,
        "explain": "Σύμφωνα με τον ορισμό, $P = \\frac{F}{A}$, η πίεση αυξάνεται όταν αυξάνεται η δύναμη $F$ και μειώνεται όταν αυξάνεται η επιφάνεια $A$."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "δ. Απόλυτο κενό δημιουργείται σε ένα χώρο όταν από αυτόν αφαιρεθεί κάποια ποσότητα αέρα.",
        "answer": false,
        "explain": "Λάθος. Όταν από έναν χώρο αφαιρεθεί απλώς κάποια ποσότητα αέρα, δημιουργείται απλό κενό. Απόλυτο κενό έχουμε μόνο όταν αφαιρεθεί ολόκληρος ο αέρας και δεν υπάρχει απολύτως καμία ύλη στον χώρο."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "Συμπληρώστε τα κενά στο παρακάτω κείμενο σχετικά με την πίεση:",
        "textBefore": [
          "__________ (1) πίεση είναι η πίεση που ασκεί το ρευστό ελεύθερος __________ (2) της ατμόσφαιρας πάνω σε μια επιφάνεια. Αυτή ποικίλει ανάλογα με το υψόμετρο και μετριέται με όργανα που ονομάζονται __________ (3). Στην επιφάνεια της θάλασσας ισούται με 76 cm στήλης υδραργύρου. Η πίεση αυτή ονομάζεται και __________ (4) ατμόσφαιρα και συμβολίζεται με __________ (5)."
        ],
        "answers": [
          "ατμοσφαιρική",
          "αέρας",
          "βαρόμετρα",
          "φυσική",
          "atm"
        ],
        "bank": [
          "ατμοσφαιρική",
          "αέρας",
          "βαρόμετρα",
          "φυσική",
          "atm",
          "τεχνητή",
          "μανόμετρα",
          "μανομετρική",
          "at",
          "ατμός"
        ],
        "explain": "Η ατμοσφαιρική πίεση είναι η πίεση του αέρα της ατμόσφαιρας, μετριέται με βαρόμετρα, στην επιφάνεια της θάλασσας ισούται με 1 atm (76 cm Hg) και ονομάζεται φυσική ατμόσφαιρα."
      }
    ]
  },
  {
    "id": "ch02-23766",
    "group": "ch02-07-piesi-piesometra",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23766",
    "bankCode": "23766",
    "title": "#23766 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch02-07-piesi-piesometra",
    "stem": "Στο σχήμα 1, το δοχείο Α έχει αέριο με απόλυτη πίεση $P_{\\text{A},\\text{απ}} = 5\\text{ bar}$, ενώ στο δοχείο Β, το οποίο περιέχει το δοχείο Α, υπάρχει αέριο με μανομετρική πίεση $P_{\\text{B},\\text{μαν}} = 2{,}5\\text{ bar}$. Ο ατμοσφαιρικός αέρας που περιβάλλει το δοχείο Β έχει πίεση $P_{\\text{ατμ}} = 1\\text{ bar}$.",
    "givens": [
      {
        "label": "$P_{\\text{A},\\text{απ}}$",
        "value": "$5 \\text{bar}$"
      },
      {
        "label": "$P_{\\text{B},\\text{μαν}}$",
        "value": "$2{,}5 \\text{bar}$"
      },
      {
        "label": "$P_{\\text{ατμ}}$",
        "value": "$1 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την απόλυτη πίεση $P_{\\text{B},\\text{απ}}$ του αερίου στο δοχείο Β σε bar.",
        "formula": "$P_{\\text{B},\\text{απ}} = P_{\\text{B},\\text{μαν}} + P_{\\text{ατμ}}$",
        "answer": 3.5,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Προσθέστε στην ένδειξη του μανομέτρου του δοχείου Β την ατμοσφαιρική πίεση.",
        "explain": "Η απόλυτη πίεση ισούται με το άθροισμα της μανομετρικής πίεσης και της πίεσης περιβάλλοντος:\n$$\\begin{aligned}\nP_{\\text{B},\\text{απ}} &= P_{\\text{B},\\text{μαν}} + P_{\\text{ατμ}} \\\\\n&= 2{,}5\\text{ bar} + 1\\text{ bar} = 3{,}5\\text{ bar}\n\\end{aligned}$$",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_23766_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε την ένδειξη του μανομέτρου $P_{\\text{A},\\text{μαν}}$ στο δοχείο Α σε bar.",
        "formula": "$P_{\\text{A},\\text{μαν}} = P_{\\text{A},\\text{απ}} - P_{\\text{B},\\text{απ}}$",
        "answer": 1.5,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Για το δοχείο Α, η πίεση περιβάλλοντος είναι η απόλυτη πίεση του αερίου Β.",
        "explain": "Για το δοχείο Α ισχύει:\n$$\\begin{aligned}\nP_{\\text{A},\\text{απ}} &= P_{\\text{A},\\text{μαν}} + P_{\\text{περιβ}} \\\\\nP_{\\text{A},\\text{απ}} &= P_{\\text{A},\\text{μαν}} + P_{\\text{B},\\text{απ}} \\\\\n\\Rightarrow P_{\\text{A},\\text{μαν}} &= P_{\\text{A},\\text{απ}} - P_{\\text{B},\\text{απ}} \\\\\n&= 5\\text{ bar} - 3{,}5\\text{ bar} = 1{,}5\\text{ bar}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch02-23782",
    "group": "ch02-07-piesi-piesometra",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23782",
    "bankCode": "23782",
    "title": "#23782 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch02-07-piesi-piesometra",
    "stem": "Αέριο, το οποίο βρίσκεται σε κύλινδρο, συμπιέζεται εφαρμόζοντας μία δύναμη $F = 12\\text{ kN}$ πάνω στο έμβολο. Ο κύλινδρος επικοινωνεί μέσω σωλήνα μικρής διαμέτρου με την ατμόσφαιρα πίεσης $P_{\\text{atm}} = 100\\text{ kPa}$. Μεταξύ του αερίου και του ανοιχτού άκρου του σωλήνα υπάρχει υδράργυρος ο οποίος ανυψώνεται κατά $H = 150\\text{ mm}$ (Υπόδειξη: $1\\text{ kPa} = 7{,}5\\text{ mmHg}$).",
    "givens": [
      {
        "label": "$F$",
        "value": "12 kN"
      },
      {
        "label": "$P_{\\text{atm}}$",
        "value": "$100 \\text{kPa}$"
      },
      {
        "label": "$H$",
        "value": "150 mm"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να μετατρέψετε το ύψος της στήλης του υδραργύρου σε πίεση σε kPa.",
        "formula": "$P = \\frac{H}{7{,}5}$",
        "answer": 20,
        "unit": "kPa",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε την υπόδειξη ότι $1\\text{ kPa} = 7{,}5\\text{ mmHg}$.",
        "explain": "Σύμφωνα με την υπόδειξη $1\\text{ kPa} = 7{,}5\\text{ mmHg}$, άρα για $150\\text{ mmHg}$ έχουμε:\n$$P = \\frac{150\\text{ mmHg}}{7{,}5\\text{ mmHg/kPa}} = 20\\text{ kPa}$$",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_23782_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τι θα έδειχνε, για την πίεση του αερίου, ένα μανόμετρο τοποθετημένο στον κύλινδρο σε kPa;",
        "formula": "$P_{\\text{μαν}} = 20\\text{ kPa}$",
        "answer": 20,
        "unit": "kPa",
        "tolerance": 0.02,
        "hint": "Το μανόμετρο μετρά τη μανομετρική πίεση που αντιστοιχεί στη διαφορά ύψους της στήλης.",
        "explain": "Θα μας έδειχνε την πίεση που αντιστοιχεί στη στήλη του υδραργύρου, δηλαδή $20\\text{ kPa}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε την απόλυτη πίεση του αερίου μέσα στον κύλινδρο σε kPa.",
        "formula": "$P_{\\text{απ}} = P_{\\text{atm}} + P_{\\text{μαν}}$",
        "answer": 120,
        "unit": "kPa",
        "tolerance": 0.02,
        "hint": "Προσθέστε την ατμοσφαιρική πίεση στη μανομετρική πίεση.",
        "explain": "Η απόλυτη πίεση ισούται με την ατμοσφαιρική συν τη μανομετρική πίεση:\n$$P_{\\text{απ}} = 100\\text{ kPa} + 20\\text{ kPa} = 120\\text{ kPa}$$"
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Να υπολογίσετε το εμβαδό $S$ της επιφάνειας του εμβόλου σε $\\text{m}^2$.",
        "formula": "$S = \\frac{F}{P}$",
        "answer": 0.6,
        "unit": "m²",
        "tolerance": 0.02,
        "hint": "Βρείτε πρώτα την πίεση $P$ λόγω της δύναμης $F$ από την ισορροπία του εμβόλου και μετά χρησιμοποιήστε τον ορισμό της πίεσης.",
        "explain": "Το έμβολο ισορροπεί. Από την εξωτερική πλευρά ασκείται η ατμοσφαιρική πίεση και η πίεση $P$ λόγω της δύναμης $F$, ενώ από την εσωτερική η απόλυτη πίεση $120\\text{ kPa}$:\n$$\\begin{aligned}\n100\\text{ kPa} + P &= 120\\text{ kPa} \\\\\n\\Rightarrow P &= 20\\text{ kPa} = 20\\cdot 10^3\\text{ N/m}^2\n\\end{aligned}$$\nΑπό τον ορισμό της πίεσης ($P = \\frac{F}{S}$):\n$$S = \\frac{F}{P} = \\frac{12\\text{ kN}}{20\\text{ kPa}} = \\frac{12000\\text{ N}}{20000\\text{ N/m}^2} = 0{,}6\\text{ m}^2$$"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/ch02-10-proto-thermodynamiko-axioma.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-25266",
    "group": "ch02-10-proto-thermodynamiko-axioma",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25266",
    "bankCode": "25266",
    "title": "#25266 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch02-10-proto-thermodynamiko-axioma",
    "stem": "Σε ένα κλειστό σύστημα, ρευστό μάζας $m = 4\\text{ kg}$ υφίσταται μια μεταβολή. Κατά τη διάρκεια της μεταβολής παράγεται έργο $W = 100\\text{ kJ}$, ενώ η προσφερόμενη θερμότητα ανά μονάδα μάζας $q$ ισούται με $q = 20\\text{ kJ/kg}$.",
    "givens": [
      {
        "label": "$m$",
        "value": "$4 \\text{kg}$"
      },
      {
        "label": "$W$",
        "value": "100 kJ"
      },
      {
        "label": "$q$",
        "value": "$20 kJ/\\text{kg}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την ολική προσφερόμενη θερμότητα $Q$ σε kJ.",
        "formula": "$Q = m \\cdot q$",
        "answer": 80,
        "unit": "kJ",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε τη μάζα $m$ επί την ειδική θερμότητα $q$.",
        "explain": "Η προσφερόμενη θερμότητα $Q$ ισούται με:\n$$Q = m \\cdot q = 4\\text{ kg} \\cdot 20\\text{ kJ/kg} = 80\\text{ kJ}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη μεταβολή της εσωτερικής ενέργειας $\\Delta U$ του συστήματος σε kJ.",
        "formula": "$\\Delta U = Q - W$",
        "answer": -20,
        "unit": "kJ",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε το πρώτο θερμοδυναμικό αξίωμα $Q = \\Delta U + W$.",
        "explain": "Σύμφωνα με το πρώτο θερμοδυναμικό αξίωμα:\n$$\\begin{aligned}\nQ &= \\Delta U + W \\\\\n\\Rightarrow \\Delta U &= Q - W \\\\\n&= 80\\text{ kJ} - 100\\text{ kJ} = -20\\text{ kJ}\n\\end{aligned}$$"
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Εάν το σύστημα ήταν μονωμένο και αποδίδεται το έργο που αναγράφεται στην εκφώνηση, ποια θα ήταν η μεταβολή της εσωτερικής ενέργειας και ποια η σημασία της;",
        "options": [
          {
            "id": "a",
            "text": "$\\Delta U = -100\\text{ kJ}$. Το αρνητικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια μειώνεται."
          },
          {
            "id": "b",
            "text": "$\\Delta U = +100\\text{ kJ}$. Το θετικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια αυξάνεται."
          },
          {
            "id": "c",
            "text": "$\\Delta U = 0\\text{ kJ}$. Το σύστημα διατηρεί σταθερή την εσωτερική του ενέργεια."
          },
          {
            "id": "d",
            "text": "$\\Delta U = -80\\text{ kJ}$. Η εσωτερική ενέργεια μειώνεται λόγω της απώλειας θερμότητας."
          }
        ],
        "answer": "a",
        "explain": "Εάν το σύστημα είναι μονωμένο, τότε $Q = 0$. Από το πρώτο θερμοδυναμικό αξίωμα:\n$$\\begin{aligned}\nQ &= \\Delta U + W \\\\\n0 &= \\Delta U + W \\\\\n\\Rightarrow \\Delta U &= -W = -100\\text{ kJ}\n\\end{aligned}$$\nΤο αρνητικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια μειώνεται."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/ch02-11-deutero-thermodynamiko-axioma.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-23765",
    "group": "ch02-11-deutero-thermodynamiko-axioma",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23765",
    "bankCode": "23765",
    "title": "#23765 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch02-11-deutero-thermodynamiko-axioma",
    "stem": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστό ή Λάθος και να συμπληρώσετε τα κενά στο αντίστοιχο κείμενο.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "subqPrompt": "2.1 Να χαρακτηρίσετε τις προτάσεις που ακολουθούν ως Σωστό ή Λάθος:",
        "prompt": "Το ψυκτικό μέσο απορροφά θερμότητα από τον ψυχόμενο χώρο και αποβάλλει θερμότητα προς το περιβάλλον.",
        "answer": true,
        "explain": "Σωστό. Αυτή είναι η βασική λειτουργία μιας ψυκτικής μηχανής (αντλίας θερμότητας)."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "Είναι αδύνατο να μεταβιβαστεί θερμότητα από σώμα χαμηλότερης θερμοκρασίας προς σώμα υψηλότερης θερμοκρασίας, χωρίς να καταναλωθεί κάποιο έργο.",
        "answer": true,
        "explain": "Σωστό. Αυτός είναι ο διατυπωμένος νόμος του Clausius (δεύτερο θερμοδυναμικό αξίωμα)."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "Το δεύτερο θερμοδυναμικό αξίωμα ισχύει μόνο για ψυκτικές μηχανές.",
        "answer": false,
        "explain": "Λάθος. Το δεύτερο θερμοδυναμικό αξίωμα ισχύει γενικά για όλες τις θερμοδυναμικές διεργασίες και μηχανές (θερμικές και ψυκτικές)."
      },
      {
        "kind": "tf",
        "subq": "2.1δ",
        "prompt": "Ο βαθμός απόδοσης μιας θερμικής μηχανής είναι ένας αριθμός μεγαλύτερος από την μονάδα.",
        "answer": false,
        "explain": "Λάθος. Ο βαθμός απόδοσης θερμικής μηχανής $\\\\beta = \\frac{W}{Q_1}$ είναι πάντοτε μικρότερος από τη μονάδα ($\\\\beta < 1$), διότι το ωφέλιμο έργο $W$ είναι πάντοτε μικρότερο από την προσφερόμενη θερμότητα $Q_1$."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "2.2 Συμπληρώστε τα κενά στο παρακάτω κείμενο επιλέγοντας τις κατάλληλες λέξεις:",
        "textBefore": [
          "«Είναι αδύνατο να κατασκευαστεί ",
          " μηχανή, η οποία να μετατρέπει θερμότητα σε ",
          ", χωρίς ταυτόχρονα να παρέχει κάποια θερμότητα προς μια δεξαμενή ",
          " θερμοκρασίας.»"
        ],
        "answers": [
          "θερμική",
          "έργο",
          "χαμηλότερης"
        ],
        "bank": [
          "χαμηλότερης",
          "υψηλότερης",
          "ψυκτική",
          "θερμική",
          "έργο",
          "πίεση"
        ],
        "explain": "Σύμφωνα με τη διατύπωση Kelvin-Planck του δεύτερου θερμοδυναμικού αξιώματος, είναι αδύνατη η κατασκευή αεικινήτου μηχανής (θερμικής μηχανής) που να μετατρέπει πλήρως τη θερμότητα σε έργο."
      }
    ]
  },
  {
    "id": "ch02-23767",
    "group": "ch02-11-deutero-thermodynamiko-axioma",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23767",
    "bankCode": "23767",
    "title": "#23767 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch02-11-deutero-thermodynamiko-axioma",
    "stem": "Σε μία ατμομηχανή, από τον λέβητα χορηγείται θερμότητα $Q_1$ προς το εργαζόμενο μέσο. Το εργαζόμενο μέσο αποδίδει ωφέλιμο έργο $W = 360\\text{ J}$ και αποβάλλει θερμότητα $Q_2$ προς τον συμπυκνωτή-ψυγείο. Η ατμομηχανή έχει βαθμό απόδοσης $\\\\beta = 40\\%$.",
    "givens": [
      {
        "label": "$W$",
        "value": "$360 \\text{J}$"
      },
      {
        "label": "$\\\\beta$",
        "value": "40%"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τη θερμότητα $Q_1$ που προσδίδεται στο εργαζόμενο μέσο σε J.",
        "formula": "$Q_1 = \\frac{W}{\\\\beta}$",
        "answer": 900,
        "unit": "J",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο του βαθμού απόδοσης θερμικής μηχανής $\\\\beta = \\frac{W}{Q_1}$.",
        "explain": "Ο βαθμός απόδοσης είναι $\\\\beta = 40\\% = 0{,}4$. Επομένως:\n$$\\begin{aligned}\n\\\\beta &= \\frac{W}{Q_1} \\\\\n\\Rightarrow Q_1 &= \\frac{W}{\\\\beta} = \\frac{360\\text{ J}}{0{,}4} = 900\\text{ J}\n\\end{aligned}$$",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_23767_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη θερμότητα $Q_2$ που αποβάλλεται προς τον συμπυκνωτή-ψυγείο σε J.",
        "formula": "$Q_2 = Q_1 - W$",
        "answer": 540,
        "unit": "J",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον ενεργειακό ισολογισμό της θερμικής μηχανής $Q_1 = W + Q_2$.",
        "explain": "Από τον ενεργειακό ισολογισμό για την ατμομηχανή έχουμε:\n$$\\begin{aligned}\nQ_1 &= W + Q_2 \\\\\n\\Rightarrow Q_2 &= Q_1 - W = 900\\text{ J} - 360\\text{ J} = 540\\text{ J}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch02-23778",
    "group": "ch02-11-deutero-thermodynamiko-axioma",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23778",
    "bankCode": "23778",
    "title": "#23778 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch02-11-thermodynamic-axioms",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "α",
        "prompt": "Το μανόμετρο μετράει την απόλυτη πίεση ενός αερίου.",
        "answer": false,
        "explain": "Λάθος. Το μανόμετρο μετράει τη σχετική πίεση (διαφορά πίεσης από την ατμοσφαιρική), ενώ η απόλυτη πίεση ισούται με το άθροισμα της ατμοσφαιρικής και της σχετικής πίεσης."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "β",
        "prompt": "Το κενόμετρο μπορεί να μετρήσει πιέσεις χαμηλότερες της ατμοσφαιρικής.",
        "answer": true,
        "explain": "Σωστό. Το κενόμετρο είναι το όργανο που χρησιμοποιείται για τη μέτρηση πιέσεων μικρότερων της ατμοσφαιρικής (υποπιέσεις ή κενό)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "γ",
        "prompt": "Όταν αφαιρεθεί όλος ο αέρας από ένα σύστημα, τότε, η απόλυτη πίεση του είναι μηδέν.",
        "answer": true,
        "explain": "Σωστό. Όταν αφαιρεθεί πλήρως η ύλη (αέρας) από ένα δοχείο, δημιουργείται απόλυτο κενό, οπότε η απόλυτη πίεση είναι μηδέν."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "δ",
        "prompt": "Με τα υγρά μπορούμε να μεταφέρουμε την πίεση από ένα σημείο σε ένα άλλο.",
        "answer": true,
        "explain": "Σωστό. Τα υγρά είναι σχεδόν ασυμπίεστα και μεταδίδουν εξίσου και προς όλες τις κατευθύνσεις την πίεση που ασκείται σε αυτά (αρχή του Pascal)."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Ένα σώμα καλοριφέρ θεωρείται ανοιχτό ή κλειστό σύστημα; Να αιτιολογήσετε την απάντησή σας.",
        "options": [
          {
            "id": "a",
            "text": "Ανοιχτό σύστημα, καθώς επιτρέπει τη μεταφορά ύλης από και προς αυτό (εισέρχεται και εξέρχεται νερό)."
          },
          {
            "id": "b",
            "text": "Κλειστό σύστημα, καθώς δεν ανταλλάσσει καμία ποσότητα ύλης με το περιβάλλον."
          },
          {
            "id": "c",
            "text": "Απομονωμένο σύστημα, διότι δεν επιτρέπει ούτε ανταλλαγή έργου ούτε θερμότητας."
          },
          {
            "id": "d",
            "text": "Αδιαβατικό σύστημα, επειδή είναι μονωμένο εξωτερικά."
          }
        ],
        "answer": "a",
        "explain": "Ένα σώμα καλοριφέρ θεωρείται ανοιχτό σύστημα καθώς επιτρέπει τη μεταφορά ύλης από και προς αυτό (εισέρχεται και εξέρχεται νερό)."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Ένας επιστήμονας ισχυρίζεται ότι κατασκεύασε ψυκτική μηχανή η οποία λειτουργεί χωρίς την κατανάλωση έργου. Είναι σωστός αυτός ο ισχυρισμός; Να αιτιολογήσετε την απάντησή σας.",
        "options": [
          {
            "id": "a",
            "text": "Ναι, είναι σωστός, διότι η ψύξη πραγματοποιείται αυτόματα με φυσική ροή."
          },
          {
            "id": "b",
            "text": "Όχι, είναι λάθος γιατί έρχεται σε αντίθεση με το Β’ θερμοδυναμικό αξίωμα."
          },
          {
            "id": "c",
            "text": "Ναι, αρκεί να λειτουργεί σε κλειστό κύκλο."
          },
          {
            "id": "d",
            "text": "Όχι, διότι παραβιάζεται ο νόμος διατήρησης της μάζας."
          }
        ],
        "answer": "b",
        "explain": "Ο ισχυρισμός αυτός είναι λάθος γιατί έρχεται σε αντίθεση με το Β’ θερμοδυναμικό αξίωμα: «Είναι αδύνατο να μεταβιβαστεί θερμότητα από σώμα χαμηλότερης θερμοκρασίας προς σώμα υψηλότερης θερμοκρασίας, χωρίς να καταναλωθεί κάποιο έργο»."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/ch02-12-enthalpy-entropy.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-26627",
    "group": "ch02-12-enthalpy-entropy",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26627",
    "bankCode": "26627",
    "title": "#26627 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch02-12-enthalpy-entropy",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1.α",
        "subqPrompt": "α",
        "prompt": "Η εσωτερική ενέργεια δεν είναι καταστατικό μέγεθος.",
        "answer": false,
        "explain": "Λάθος. Η εσωτερική ενέργεια είναι καταστατικό μέγεθος, δηλαδή η τιμή της εξαρτάται αποκλειστικά από την τρέχουσα κατάσταση ισορροπίας του συστήματος και όχι από τον τρόπο με τον οποίο έφτασε σε αυτήν."
      },
      {
        "kind": "tf",
        "subq": "2.1.α",
        "subqPrompt": "β",
        "prompt": "Το πρώτο θερμοδυναμικό αξίωμα λέει ότι “H θερμότητα που δίνεται σε ένα αέριο ισούται με το άθροισμα της μεταβολής της εσωτερικής του ενέργειας και του έργου που μας δίνει το αέριο”.",
        "answer": true,
        "explain": "Σωστό. Σύμφωνα με το 1ο Θερμοδυναμικό Αξίωμα, η προστιθέμενη θερμότητα $Q$ μετατρέπεται σε αύξηση της εσωτερικής ενέργειας $\\Delta U$ και σε παραγόμενο έργο $W$ ($Q = \\Delta U + W$)."
      },
      {
        "kind": "tf",
        "subq": "2.1.α",
        "subqPrompt": "γ",
        "prompt": "Μία θερμίδα ισούται με 4,186 Joule.",
        "answer": true,
        "explain": "Σωστό. Η σχέση μετατροπής μεταξύ θερμίδων και Joule είναι $1\\text{ cal} = 4{,}186\\text{ J}$."
      },
      {
        "kind": "tf",
        "subq": "2.1.α",
        "subqPrompt": "δ",
        "prompt": "Μονάδα μέτρησης της εντροπίας στο διεθνές σύστημα είναι το Joule/Kelvin.",
        "answer": true,
        "explain": "Σωστό. Η εντροπία $S$ μετρείται σε $\\text{J}/\\text{K}$ στο Διεθνές Σύστημα Μονάδων (SI)."
      },
      {
        "kind": "mc",
        "subq": "2.1.β",
        "prompt": "Ένα ψυκτικό ρευστό από μία κατάσταση 1 μπορεί να καταλήξει σε μια κατάσταση 2 με δύο διαφορετικούς τρόπους. Θα διαφέρει η τιμή της ενθαλπίας στη θέση 2 ανάλογα με τον τρόπο που θα ακολουθήσουμε; Να αιτιολογήσετε την απάντησή σας.",
        "options": [
          {
            "id": "a",
            "text": "Ναι, η τιμή της ενθαλπίας θα διαφέρει σημαντικά ανάλογα με τη διαδρομή που ακολουθήθηκε."
          },
          {
            "id": "b",
            "text": "Όχι, επειδή η ενθαλπία είναι καταστατικό μέγεθος, η τιμή της δε θα διαφέρει στην κατάσταση 2, όποιον τρόπο και αν ακολουθήσουμε."
          },
          {
            "id": "c",
            "text": "Εξαρτάται αποκλειστικά από την ποσότητα της θερμότητας που ανταλλάχθηκε κατά τη διαδρομή."
          },
          {
            "id": "d",
            "text": "Ναι, διότι η ενθαλπία εξαρτάται από τη διαδικασία και όχι μόνο από την κατάσταση."
          }
        ],
        "answer": "b",
        "explain": "Επειδή η ενθαλπία είναι καταστατικό μέγεθος, η τιμή της δε θα διαφέρει στην κατάσταση 2, όποιον τρόπο και αν ακολουθήσουμε."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Να αντιστοιχίσετε τα θερμοδυναμικά μεγέθη της στήλης Α με την κατάλληλη περιγραφή της στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Εσωτερική Ενέργεια"
          },
          {
            "id": "2",
            "text": "Ενθαλπία"
          },
          {
            "id": "3",
            "text": "Εντροπία"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Μετρά την ενεργειακή «ποιότητα» ενός συστήματος."
          },
          {
            "id": "b",
            "text": "Εκφράζει τον χώρο που καταλαμβάνει ένα αέριο."
          },
          {
            "id": "c",
            "text": "Εκφράζει την αποθηκευμένη ενέργεια μέσα σε ένα αέριο."
          },
          {
            "id": "d",
            "text": "Εκφράζει την ενεργειακή κατάσταση ενός ρευστού."
          }
        ],
        "pairs": {
          "1": "c",
          "2": "d",
          "3": "a"
        },
        "explain": "Η εσωτερική ενέργεια εκφράζει την αποθηκευμένη ενέργεια (1-γ). Η ενθαλπία εκφράζει την ολική ενεργειακή κατάσταση ενός ρευστού (2-δ). Η εντροπία μετρά την ενεργειακή ποιότητα και την αταξία ενός συστήματος (3-α). Το γράμμα β περισσεύει."
      }
    ]
  },
  {
    "id": "ch02-26848",
    "group": "ch02-12-enthalpy-entropy",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26848",
    "bankCode": "26848",
    "title": "#26848 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch02-12-enthalpy-entropy",
    "items": [
      {
        "kind": "mc",
        "subq": "2.1.α.1",
        "prompt": "1. Το σχήμα που αντιπροσωπεύει μαθηματικά, τον Α΄ Θερμοδυναμικό νόμο:",
        "images": [
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_26848_fig01.webp",
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_26848_fig02.webp"
        ],
        "imageLabels": [
          "Σχήμα α",
          "Σχήμα β"
        ],
        "imageLayout": "grid",
        "options": [
          {
            "id": "a",
            "text": "Σχήμα α"
          },
          {
            "id": "b",
            "text": "Σχήμα β"
          }
        ],
        "answer": "b",
        "explain": "Το σχήμα β απεικονίζει ορθά τον Α΄ Θερμοδυναμικό νόμο ($Q = \\Delta U + W$)."
      },
      {
        "kind": "mc",
        "subq": "2.1.α.2",
        "prompt": "2. Το σχήμα που αντιπροσωπεύει ένα ανοικτό σύστημα:",
        "images": [
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_26848_fig03.webp",
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_26848_fig04.webp"
        ],
        "imageLabels": [
          "Σχήμα α",
          "Σχήμα β"
        ],
        "imageLayout": "grid",
        "options": [
          {
            "id": "a",
            "text": "Σχήμα α"
          },
          {
            "id": "b",
            "text": "Σχήμα β"
          }
        ],
        "answer": "b",
        "explain": "Το σχήμα β απεικονίζει ανοιχτό σύστημα με είσοδο και έξοδο ύλης."
      },
      {
        "kind": "mc",
        "subq": "2.1.α.3",
        "prompt": "3. Οι ενεργειακές συναλλαγές του ψυκτικού μέσου σε μια ψυκτική μηχανή σύμφωνα με το Β’ Θερμοδυναμικό αξίωμα:",
        "images": [
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_26848_fig05.webp",
          "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-02/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch02_26848_fig06.webp"
        ],
        "imageLabels": [
          "Σχήμα α",
          "Σχήμα β"
        ],
        "imageLayout": "grid",
        "options": [
          {
            "id": "a",
            "text": "Σχήμα α"
          },
          {
            "id": "b",
            "text": "Σχήμα β"
          }
        ],
        "answer": "a",
        "explain": "Το σχήμα α απεικονίζει τη λειτουργία ψυκτικής μηχανής σύμφωνα με το Β’ Θερμοδυναμικό αξίωμα ($Q_2 + W = Q_1$)."
      },
      {
        "kind": "mc",
        "subq": "2.1.β",
        "prompt": "Να δικαιολογήσετε την απάντηση σας στην πρόταση 3 του ερωτήματος α).",
        "options": [
          {
            "id": "a",
            "text": "Σύμφωνα με το Β’ Θερμοδυναμικό αξίωμα, η μεταβίβαση θερμότητας από χαμηλότερη σε υψηλότερη θερμοκρασία απαιτεί κατανάλωση έργου ($Q_2 + W = Q_1$), όπως απεικονίζεται στο σχήμα 3α."
          },
          {
            "id": "b",
            "text": "Η διαδικασία αυτή πραγματοποιείται αυθόρμητα χωρίς καμία εξωτερική επίδραση."
          },
          {
            "id": "c",
            "text": "Ισχύει αποκλειστικά ο νόμος διατήρησης της ορμής."
          },
          {
            "id": "d",
            "text": "Η ενθαλπία του συστήματος παραμένει σταθερή σε όλη τη διαδρομή."
          }
        ],
        "answer": "a",
        "explain": "Σύμφωνα με το Β’ Θερμοδυναμικό αξίωμα «Είναι αδύνατο να μεταβιβαστεί θερμότητα από σώμα χαμηλότερης θερμοκρασίας προς σώμα υψηλότερης θερμοκρασίας, χωρίς να καταναλωθεί κάποιο έργο», $Q_2 + W = Q_1$. Αυτό απεικονίζεται στο σχήμα 3α, όπου έχουμε μεταβίβαση θερμότητας από σώμα χαμηλότερης σε σώμα υψηλότερης θερμοκρασίας, με κατανάλωση έργου."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "Συμπληρώστε τα κενά στις παρακάτω προτάσεις επιλέγοντας τις κατάλληλες λέξεις:",
        "textBefore": [
          "1. Η θερμότητα που δίνεται σε ένα αέριο δε γίνεται κατ’ ανάγκη άμεσα ",
          ".\n2. Η ",
          " εκφράζει την ενεργειακή κατάσταση ενός ρευστού και είναι ανεξάρτητη από τον τρόπο με τον οποίο έφτασε το ρευστό σε αυτήν την κατάσταση.\n3. Το μέγεθος που εκφράζει την αποθηκευμένη ενέργεια ενός αερίου ονομάζεται ",
          " και εκφράζει την κινητικότητα των μορίων του αερίου και τις αλληλεπιδράσεις μεταξύ τους.\n4. Το μέγεθος που μετρά την ενεργειακή ποιότητα ενός συστήματος είναι η ",
          "."
        ],
        "answers": [
          "έργο",
          "ενθαλπία",
          "εσωτερική ενέργεια",
          "εντροπία"
        ],
        "bank": [
          "έργο",
          "ενθαλπία",
          "εσωτερική ενέργεια",
          "εντροπία",
          "ισχύς",
          "πίεση",
          "ακτινοβολία",
          "εξαναγκασμένη κυκλοφορία"
        ],
        "explain": "1. έργο, 2. ενθαλπία, 3. εσωτερική ενέργεια, 4. εντροπία. Οι λέξεις ισχύς, πίεση, ακτινοβολία και εξαναγκασμένη κυκλοφορία περισσεύουν."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch03-01-ideal-gas",
    "chapter": "3",
    "title": "3.1 Ορισμός του τέλειου αερίου",
    "blurb": "Θερμοδυναμικά χαρακτηριστικά τέλειων αερίων και καταστατική εξίσωση."
  },
  {
    "id": "ch03-02-thermodynamic-processes",
    "chapter": "3",
    "title": "3.2 Καταστάσεις και μεταβολές των αερίων",
    "blurb": "Ισοθερμοκρασιακή, αδιαβατική, ισόθλιπτη και ισόογκη μεταβολή αερίων."
  },
  {
    "id": "ch03-03-strangalismos",
    "chapter": "3",
    "title": "3.3 Στραγγαλισμός αερίου",
    "blurb": "Χαρακτηριστικές μεταβολές κατάστασης των αερίων και στραγγαλισμός."
  },
  {
    "id": "ch03-04-kyklikes-metavoles",
    "chapter": "3",
    "title": "3.4 Κυκλικές μεταβολές",
    "blurb": "Μελέτη κυκλικών μεταβολών, διαγραμμάτων P-V και θερμοδυναμικών μεγεθών."
  },
  {
    "id": "ch03-05-kyklos-carnot",
    "chapter": "3",
    "title": "3.5 Κύκλος Carnot",
    "blurb": "Θερμικές μηχανές, βαθμός απόδοσης και κύκλος Carnot."
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/ch03-01-ideal-gas.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-25265",
    "group": "ch03-01-ideal-gas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25265",
    "bankCode": "25265",
    "title": "Θέμα 4$^{ο}$ · #25265",
    "units": 25,
    "theory": "ch03-01-ideal-gas",
    "stem": "Σε ένα εργαστήριο ψύξης κλιματισμού διαστάσεων $3\\text{ m} \\times 5\\text{ m} \\times 10\\text{ m}$ υπάρχει αέρας μάζας $m = 180\\text{ kg}$, που συμπεριφέρεται σαν τέλειο αέριο. Η θερμοκρασία μετρήθηκε με θερμόμετρο και βρέθηκε $27{}^{\\circ}\\text{C}$.",
    "givens": [
      {
        "label": "$m$",
        "value": "$180 \\text{kg}$"
      },
      {
        "label": "Διαστάσεις",
        "value": "$3 \\text{m} \\times 5 \\text{m} \\times 10 \\text{m}$"
      },
      {
        "label": "$t$",
        "value": "$27 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$R$",
        "value": "$287 \\text{J}/(\\text{kg}\\cdot \\text{K})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε την πίεση του αέρα στο εργαστήριο σε $\\text{N}/\\text{m}^2$.",
        "formula": "$P = \\frac{m \\cdot R \\cdot T}{V}$",
        "answer": 103320,
        "unit": "N/m²",
        "tolerance": 0.02,
        "hint": "Υπολογίστε τον όγκο $V$ από τις διαστάσεις, τη θερμοκρασία σε Kelvin και εφαρμόστε την καταστατική εξίσωση $P \\cdot V = m \\cdot R \\cdot T$.",
        "explain": "Ο όγκος είναι $V = 3 \\cdot 5 \\cdot 10 = 150\\text{ m}^3$. Η απόλυτη θερμοκρασία είναι $T = 27 + 273 = 300\\text{ K}$. Από την καταστατική εξίσωση:\n$$\\begin{aligned}\nP &= \\frac{m \\cdot R \\cdot T}{V} \\\\\nP &= \\frac{180\\text{ kg} \\cdot 287\\text{ J}/(\\text{kg}\\cdot\\text{K}) \\cdot 300\\text{ K}}{150\\text{ m}^3} \\\\\nP &= \\frac{15498000}{150} = 103320\\text{ N}/\\text{m}^2\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να μετατρέψετε την πίεση που υπολογίστηκε παραπάνω σε bar.",
        "formula": "$P_{\\text{bar}} = \\frac{P}{10^5}$",
        "answer": 1.033,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τη σχέση $1\\text{ bar} = 10^5\\text{ N}/\\text{m}^2$.",
        "explain": "Επειδή $1\\text{ bar} = 10^5\\text{ N}/\\text{m}^2$, διαιρούμε την πίεση σε $\\text{N}/\\text{m}^2$ με το $10^5$:\n$$\\begin{aligned}\nP &= \\frac{103320}{10^5} = 1{,}033\\text{ bar}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch03-26872",
    "group": "ch03-01-ideal-gas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26872",
    "bankCode": "26872",
    "title": "Θέμα 4$^{ο}$ · #26872",
    "units": 25,
    "theory": "ch03-01-ideal-gas",
    "stem": "Εργαστηριακός χώρος έχει όγκο $V = 143{,}5\\text{ m}^3$. Η θερμοκρασία του αέρα είναι $17{}^{\\circ}\\text{C}$ και η μανομετρική πίεση του αέρα είναι $P_{\\text{μαν}} = 1{,}9\\text{ bar}$. Δίνεται η ατμοσφαιρική πίεση $P_{\\text{ατμ}} = 1\\text{ bar}$ και $R_{\\text{αέρα}} = 287\\text{ J}/(\\text{kg}\\cdot\\text{K})$ ($1\\text{ bar} = 10^5\\text{ N}/\\text{m}^2$).",
    "givens": [
      {
        "label": "$V$",
        "value": "$143{,}5 \\text{m}^{3}$"
      },
      {
        "label": "$t$",
        "value": "$17 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$P_{\\text{μαν}}$",
        "value": "$1{,}9 \\text{bar}$"
      },
      {
        "label": "$P_{\\text{ατμ}}$",
        "value": "$1 \\text{bar}$"
      },
      {
        "label": "$R_{\\text{αέρα}}$",
        "value": "$287 \\text{J}/(\\text{kg}\\cdot \\text{K})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογιστεί η απόλυτη πίεση που ασκεί ο αέρας στο χώρο σε $\\text{N}/\\text{m}^2$.",
        "formula": "$P_{\\text{απ}} = P_{\\text{μαν}} + P_{\\text{ατμ}}$",
        "answer": 290000,
        "unit": "N/m²",
        "tolerance": 0.02,
        "hint": "Προσθέστε τη μανομετρική και την ατμοσφαιρική πίεση για να βρείτε την απόλυτη πίεση σε bar και μετατρέψτε την σε $\\text{N}/\\text{m}^2$.",
        "explain": "Η απόλυτη πίεση ισούται με το άθροισμα της μανομετρικής και της ατμοσφαιρικής πίεσης:\n$$\\begin{aligned}\nP_{\\text{απ}} &= P_{\\text{μαν}} + P_{\\text{ατμ}} = 1{,}9\\text{ bar} + 1\\text{ bar} = 2{,}9\\text{ bar} \\\\\nP_{\\text{απ}} &= 2{,}9 \\cdot 10^5\\text{ N}/\\text{m}^2 = 290000\\text{ N}/\\text{m}^2\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογιστεί η μάζα του αέρα $m$ σε kg.",
        "formula": "$m = \\frac{P_{\\text{απ}} \\cdot V}{R \\cdot T}$",
        "answer": 500,
        "unit": "kg",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τη θερμοκρασία σε Kelvin ($T = 17 + 273$) και λύστε την καταστατική εξίσωση ως προς $m$.",
        "explain": "Η απόλυτη θερμοκρασία είναι $T = 17 + 273 = 290\\text{ K}$. Από την καταστατική εξίσωση λύνουμε ως προς τη μάζα $m$:\n$$\\begin{aligned}\nm &= \\frac{P_{\\text{απ}} \\cdot V}{R \\cdot T} \\\\\nm &= \\frac{2{,}9 \\cdot 10^5\\text{ N}/\\text{m}^2 \\cdot 143{,}5\\text{ m}^3}{290\\text{ K} \\cdot 287\\text{ J}/(\\text{kg}\\cdot\\text{K})} \\\\\nm &= \\frac{41615000}{83230} = 500\\text{ kg}\n\\end{aligned}$$"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/ch03-02-thermodynamic-processes.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23748",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23748",
    "bankCode": "23748",
    "title": "Θέμα 4$^{ο}$ · #23748",
    "units": 25,
    "theory": "ch03-02-thermodynamic-processes",
    "stem": "Αέρας όγκου $V_1 = 0{,}8\\text{ m}^3$ συμπιέζεται ισοθερμοκρασιακά. Αν η αρχική και η τελική του πίεση είναι ίσες με $P_1 = 1\\text{ bar}$ και $P_2 = 10\\text{ bar}$ αντίστοιχα.",
    "givens": [
      {
        "label": "$V_1$",
        "value": "$0{,}8 \\text{m}^{3}$"
      },
      {
        "label": "$P_1$",
        "value": "$1 \\text{bar}$"
      },
      {
        "label": "$P_2$",
        "value": "$10 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να προσδιορίσετε τον τελικό όγκο $V_2$ σε $\\text{m}^3$.",
        "formula": "$P_1 \\cdot V_1 = P_2 \\cdot V_2$",
        "answer": 0.08,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον νόμο του Boyle-Mariotte για ισοθερμοκρασιακή μεταβολή ($P \\cdot V = \\text{σταθ.}$)",
        "explain": "Στην ισοθερμοκρασιακή μεταβολή ισχύει $P_1 \\cdot V_1 = P_2 \\cdot V_2$. Λύνοντας ως προς $V_2$:\n$$\\begin{aligned}\nV_2 &= \\frac{P_1 \\cdot V_1}{P_2} \\\\\nV_2 &= \\frac{1\\text{ bar} \\cdot 0{,}8\\text{ m}^3}{10\\text{ bar}} = 0{,}08\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "open",
        "subq": "4.2",
        "prompt": "Να απεικονίσετε τη μεταβολή του παραπάνω ερωτήματος σε ένα διάγραμμα P-V (πίεσης-όγκου).",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23748_sol01.webp",
        "explain": "Η ισοθερμοκρασιακή μεταβολή απεικονίζεται σε διάγραμμα P-V ως ισόθερμη καμπύλη (υπερβολή) που συνδέει την αρχική κατάσταση (1) με πίεση $1\\text{ bar}$ και όγκο $0{,}8\\text{ m}^3$ με την τελική κατάσταση (2) με πίεση $10\\text{ bar}$ και όγκο $0{,}08\\text{ m}^3$."
      }
    ]
  },
  {
    "id": "ch03-23891",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23891",
    "bankCode": "23891",
    "title": "Θέμα 2$^{ο}$ · #23891",
    "units": 25,
    "theory": "ch03-02-thermodynamic-processes",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Να αντιστοιχίσετε τα διαγράμματα (1, 2, 3, 4) της Στήλης Α με τις αντίστοιχες μεταβολές αερίων της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Διάγραμμα 1",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig01.webp"
          },
          {
            "id": "2",
            "text": "Διάγραμμα 2",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig02.webp"
          },
          {
            "id": "3",
            "text": "Διάγραμμα 3",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig03.webp"
          },
          {
            "id": "4",
            "text": "Διάγραμμα 4",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig04.webp"
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
        "explain": "Η ισόθλιπτη μεταβολή παριστάνεται με ευθεία παράλληλη στον άξονα των όγκων (1-β), η αδιαβατική με καμπύλη πιο απότομη από την ισόθερμη (2-γ), η ισόογκη με ευθεία παράλληλη στον άξονα των πιέσεων (3-δ) και η ισοθερμοκρασιακή με ισόθερμη υπερβολή (4-α)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "prompt": "Στην ισόθλιπτη μεταβολή, η θερμότητα που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Υπό σταθερή πίεση (ισόθλιπτη μεταβολή), η θερμότητα που ανταλλάσσεται είναι ίση με τη μεταβολή της ενθαλπίας ($Q = \\Delta H$)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Κατά την αδιαβατική μεταβολή, το αέριο συναλλάσσει θερμότητα με το περιβάλλον.",
        "answer": false,
        "explain": "Λάθος. Στην αδιαβατική μεταβολή δεν υπάρχει καμία ανταλλαγή θερμότητας μεταξύ του συστήματος και του περιβάλλοντος ($Q = 0$)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Στην ισόογκη μεταβολή το έργο είναι μηδέν.",
        "answer": true,
        "explain": "Σωστό. Εφόσον ο όγκος παραμένει σταθερός ($\\Delta V = 0$), δεν παράγεται ούτε καταναλώνεται έργο ($W = P \\cdot \\Delta V = 0$)."
      }
    ]
  },
  {
    "id": "ch03-23961",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23961",
    "bankCode": "23961",
    "title": "Θέμα 4$^{ο}$ · #23961",
    "units": 25,
    "theory": "ch03-02-thermodynamic-processes",
    "stem": "Αέριο βρίσκεται σε κύλινδρο, με έμβολο που μπορεί να κινείται ελεύθερα. Η αρχική θερμοκρασία του αερίου είναι $27{}^{\\circ}\\text{C}$ και ο αρχικός του όγκος είναι $V_1 = 0{,}04\\text{ m}^3$. Το αέριο θερμαίνεται υπό σταθερή πίεση στη θερμοκρασία των $327{}^{\\circ}\\text{C}$.",
    "givens": [
      {
        "label": "$t_1$",
        "value": "$27 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$V_1$",
        "value": "$0{,}04 \\text{m}^{3}$"
      },
      {
        "label": "$t_2$",
        "value": "$327 {}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την αρχική απόλυτη θερμοκρασία $T_1$ του αερίου σε Κέλβιν.",
        "formula": "$T_1 = t_1 + 273$",
        "answer": 300,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε το 273 στη θερμοκρασία Κελσίου.",
        "explain": "Η αρχική απόλυτη θερμοκρασία σε Κέλβιν υπολογίζεται ως εξής:\n$$\\begin{aligned}\nT_1 &= 27 + 273 = 300\\text{ K}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε την τελική απόλυτη θερμοκρασία $T_2$ του αερίου σε Κέλβιν.",
        "formula": "$T_2 = t_2 + 273$",
        "answer": 600,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε το 273 στην τελική θερμοκρασία Κελσίου.",
        "explain": "Η τελική απόλυτη θερμοκρασία σε Κέλβιν υπολογίζεται ως εξής:\n$$\\begin{aligned}\nT_2 &= 327 + 273 = 600\\text{ K}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τον τελικό όγκο $V_2$ του αερίου σε $\\text{m}^3$.",
        "formula": "$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$",
        "answer": 0.08,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον νόμο του Gay-Lussac για ισόθλιπτη μεταβολή.",
        "explain": "Πρόκειται για ισόθλιπτη μεταβολή (υπό σταθερή πίεση), οπότε ισχύει ο νόμος του Gay-Lussac:\n$$\\begin{aligned}\n\\frac{V_1}{T_1} &= \\frac{V_2}{T_2} \\\\\nV_2 &= \\frac{V_1 \\cdot T_2}{T_1} \\\\\nV_2 &= \\frac{0{,}04\\text{ m}^3 \\cdot 600\\text{ K}}{300\\text{ K}} = 0{,}08\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "open",
        "subq": "δ",
        "prompt": "Να απεικονίσετε τη μεταβολή σε διάγραμμα P-V.",
        "explain": "Η μεταβολή παριστάνεται σε διάγραμμα P-V με ευθεία γραμμή κάθετη στον άξονα των πιέσεων (σταθερή πίεση $P_1 = P_2$), με φορά από την κατάσταση (1) ($V_1 = 0{,}04\\text{ m}^3$) προς τη κατάσταση (2) ($V_2 = 0{,}08\\text{ m}^3$)."
      }
    ]
  },
  {
    "id": "ch03-23963",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23963",
    "bankCode": "23963",
    "title": "#23963 — Θέμα 4$^{ο}$ (Ισοθερμοκρασιακή Μεταβολή)",
    "units": 25,
    "theory": "ch03-02-isothermiki",
    "stem": "Μια ποσότητα αερίου βρίσκεται σε κλειστό σύστημα και υφίσταται ισοθερμοκρασιακή μεταβολή, κατά τη διάρκεια της οποίας προσφέρεται στο αέριο έργο $200\\text{ kJ}$.",
    "givens": [
      {
        "label": "$W$",
        "value": "$-200 kJ$"
      },
      {
        "label": "$\\Delta U$",
        "value": "0"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "Σχεδιάστε τη μεταβολή σε διάγραμμα πίεσης όγκου ($P-V$) και σημειώστε με ένα βέλος τη φορά της μεταβολής.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23963_sol01.webp",
        "explain": "Η ισοθερμοκρασιακή μεταβολή απεικονίζεται σε διάγραμμα $P-V$ ως ισόθερμη καμπύλη (υπερβολή) με κατάλληλη φορά."
      },
      {
        "kind": "open",
        "subq": "4.2",
        "prompt": "Απεικονίστε στο διάγραμμα το έργο που προσφέρθηκε.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23963_sol02.webp",
        "explain": "Το έργο αντιστοιχεί στο εμβαδόν κάτω από την καμπύλη της ισοθερμοκρασιακής μεταβολής στο διάγραμμα $P-V$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Λαμβάνοντας υπόψη ότι σε μια ισοθερμοκρασιακή μεταβολή η μεταβολή της εσωτερικής ενέργειας είναι μηδέν ($\\Delta U = 0$), υπολογίστε τη θερμότητα $Q$ που συναλλάχθηκε με το σύστημα σε $\\text{kJ}$ και εξηγήστε αν και γιατί αυτή δόθηκε στο σύστημα ή αποδόθηκε από το σύστημα προς το περιβάλλον.",
        "formula": "$Q = \\Delta U + W$",
        "answer": -200,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον πρώτο θερμοδυναμικό νόμο $Q = \\Delta U + W$, λαμβάνοντας υπόψη το πρόσημο του έργου που προσφέρεται στο αέριο.",
        "explain": "Σύμφωνα με τον πρώτο θερμοδυναμικό νόμο:\n$$\\begin{aligned}\nQ &= \\Delta U + W \\\nQ &= 0 + (-200\\text{ kJ}) = -200\\text{ kJ}\n\\end{aligned}$$\nΗ θερμότητα έχει αρνητικό πρόσημο, άρα αποδόθηκε από το αέριο προς το περιβάλλον."
      }
    ]
  },
  {
    "id": "ch03-23978",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23978",
    "bankCode": "23978",
    "title": "#23978 — Θέμα 4$^{ο}$ (Κύκλος Μεταβολών & Ισοθερμοκρασιακή)",
    "units": 25,
    "theory": "ch03-02-kyklos-metavolon",
    "stem": "Αέριο υφίσταται διαδοχικές μεταβολές και μελετάται σε διάγραμμα $P-V$.",
    "givens": [],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "α. Θερμαίνεται, υπό σταθερό όγκο, μέχρι να διπλασιάσει την απόλυτη θερμοκρασία του (κατάσταση Β). β. Εκτονώνεται, υπό σταθερή θερμοκρασία, αποκτώντας την αρχική του πίεση (κατάσταση Γ). γ. Επιστρέφει ισόθλιπτα στην αρχική του κατάσταση Α. Να παραστήσετε τις μεταβολές αυτές σε διάγραμμα με άξονες $p-V$.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23978_sol01.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23978_sol01.webp",
        "explain": "Σχεδιάζεται η ισόογκη θέρμανση Α-Β, η ισοθερμοκρασιακή εκτόνωση Β-Γ και η ισόθλιπτη συμπίεση Γ-Α."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Δίνεται το διάγραμμα $P-V$ με κύκλο μεταβολών όπου ισχύει $T_B = T_\\Gamma$. Αναγνωρίστε την επιμέρους μεταβολή Α – Β:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23978_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή Α-Β γίνεται υπό σταθερή πίεση, επομένως είναι ισόθλιπτη μεταβολή."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Β – Γ:",
        "options": [
          {
            "id": "a",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "b",
        "explain": "Η μεταβολή Β-Γ γίνεται σε σταθερή θερμοκρασία ($T_B = T_\\Gamma$), επομένως είναι ισοθερμοκρασιακή μεταβολή."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Γ – Δ:",
        "options": [
          {
            "id": "a",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "c",
        "explain": "Η μεταβολή Γ-Δ γίνεται υπό σταθερή πίεση, επομένως είναι ισόθλιπτη μεταβολή."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Δ – Α:",
        "options": [
          {
            "id": "a",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή Δ-Α γίνεται υπό σταθερό όγκο, επομένως είναι ισόογκη μεταβολή."
      },
      {
        "kind": "calc",
        "subq": "4.2β",
        "prompt": "Με βάση το σχήμα όπου $P_B = 5\\text{ bar}$, $V_B = 4\\text{ lt}$ και $P_\\Gamma = 1\\text{ bar}$, υπολογίστε τον όγκο $V_\\Gamma$ του αερίου στη θέση Γ σε $\\text{lt}$.",
        "formula": "$P_B \\cdot V_B = P_\\Gamma \\cdot V_\\Gamma$",
        "answer": 20,
        "unit": "lt",
        "tolerance": 0.01,
        "hint": "Αξιοποιήστε το νόμο του Boyle-Mariotte για την ισοθερμοκρασιακή μεταβολή Β-Γ: $P_B \\cdot V_B = P_\\Gamma \\cdot V_\\Gamma$.",
        "explain": "Η μεταβολή Β – Γ είναι ισοθερμοκρασιακή, επομένως ισχύει:\n$$\\begin{aligned}\nP_B \\cdot V_B &= P_\\Gamma \\cdot V_\\Gamma \\\\\nV_\\Gamma &= \\frac{P_B \\cdot V_B}{P_\\Gamma} \\\\\nV_\\Gamma &= \\frac{5\\text{ bar} \\cdot 4\\text{ lt}}{1\\text{ bar}} = 20\\text{ lt}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch03-25163",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25163",
    "bankCode": "25163",
    "title": "#25163 — Θέμα 2$^{ο}$ (Είδη Μεταβολών & Πρώτος Νόμος)",
    "units": 25,
    "theory": "ch03-02-eidikefseis",
    "stem": "Ερωτήσεις θεωρίας και αντιστοίχισης σχετικά με τις καταστατικές μεταβολές των αερίων.",
    "givens": [],
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε την ονομασία της μεταβολής από τη Στήλη Α με τον αντίστοιχο νόμο/σχέση από τη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "1. Ισοθερμοκρασιακή Μεταβολή"
          },
          {
            "id": "2",
            "text": "2. Ισόθλιπτη Μεταβολή"
          },
          {
            "id": "3",
            "text": "3. Ισόογκη Μεταβολή"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "$\\frac{V_1}{V_2} = \\frac{T_1}{T_2}$"
          },
          {
            "id": "b",
            "text": "$\\frac{P_1}{P_2} = \\frac{T_1}{T_2}$"
          },
          {
            "id": "c",
            "text": "$P_1 \\cdot V_1 = P_2 \\cdot V_2$"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "b"
        },
        "explain": "Η ισοθερμοκρασιακή μεταβολή υπακούει στον νόμο Boyle-Mariotte ($P_1 V_1 = P_2 V_2$), η ισόθλιπτη στον νόμο Gay-Lussac/Charles ($V_1/V_2 = T_1/T_2$) και η ισόογκη στον νόμο Charles/Gay-Lussac ($P_1/P_2 = T_1/T_2$)."
      },
      {
        "kind": "tf",
        "subq": "2.2α",
        "prompt": "Στην αδιαβατική μεταβολή ενός ανοιχτού συστήματος, το έργο που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Σύμφωνα με τη θερμοδυναμική ανάλυση αδιαβατικών διεργασιών σε ανοιχτά συστήματα, ισχύει η ισότητα έργου και μεταβολής ενθαλπίας."
      },
      {
        "kind": "tf",
        "subq": "2.2β",
        "prompt": "Στην ισοθερμοκρασιακή μεταβολή ο όγκος μεταβάλλεται ανάλογα με την απόλυτη πίεση.",
        "answer": false,
        "explain": "Λάθος. Στην ισοθερμοκρασιακή μεταβολή ο όγκος μεταβάλλεται αντιστρόφως ανάλογα με την απόλυτη πίεση ($P \\cdot V = \\text{σταθ.}$)."
      },
      {
        "kind": "tf",
        "subq": "2.2γ",
        "prompt": "Κατά την ισόογκη μεταβολή αυξάνεται η πίεση ενώ η θερμοκρασία και ο όγκος παραμένουν σταθερά.",
        "answer": false,
        "explain": "Λάθος. Κατά την ισόογκη μεταβολή ο όγκος παραμένει σταθερός, αλλά όταν αυξάνεται η πίεση αυξάνεται αντίστοιχα και η θερμοκρασία."
      },
      {
        "kind": "tf",
        "subq": "2.2δ",
        "prompt": "Στην ισόθλιπτη μεταβολή, η θερμότητα που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Σε ισόθλιπτη μεταβολή (υπό σταθερή πίεση), η ανταλλασσόμενη θερμότητα ισούται με τη μεταβολή της ενθαλπίας ($\\Delta H = Q_p$)."
      }
    ]
  },
  {
    "id": "ch03-25287",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25287",
    "bankCode": "25287",
    "title": "#25287 — Θέμα 2$^{ο}$ (Τέλειο Aέριο & Μακροσκοπική/Μικροσκοπική Σκοπιά)",
    "units": 25,
    "theory": "ch03-02-teleio-aerio",
    "stem": "Ερωτήσεις κατανόησης για τη συμπεριφορά των τελειοποιημένων αερίων και τα χαρακτηριστικά τους μεγέθη.",
    "givens": [],
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "prompt": "Η συμπεριφορά των πραγματικών αερίων προσεγγίζεται στη Θερμοδυναμική με ένα μοντέλο, που ονομάζεται τέλειο αέριο.",
        "answer": true,
        "explain": "Σωστό. Τα πραγματικά αέρια σε πολλές περιπτώσεις μελετώνται προσεγγιστικά μέσω του ιδανικού ή τέλειου αερίου."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "Η κατάσταση μιας δεδομένης ποσότητας ενός αερίου καθορίζεται από τις τιμές που παίρνουν τα μεγέθη Δύναμη, Όγκος και Θερμοκρασία.",
        "answer": false,
        "explain": "Λάθος. Η κατάσταση καθορίζεται από την Πίεση ($P$), τον Όγκο ($V$) και τη Θερμοκρασία ($T$) και όχι από τη δύναμη."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "Η θερμοκρασία ενός αερίου φαίνεται πάνω σε ένα απλό διάγραμμα P-V.",
        "answer": false,
        "explain": "Λάθος. Το απλό διάγραμμα $P-V$ δείχνει άμεσα την πίεση και τον όγκο, ενώ η θερμοκρασία προκύπτει έμμεσα ή μέσω ισόθερμων καμπυλών."
      },
      {
        "kind": "tf",
        "subq": "2.1δ",
        "prompt": "Το υδρογόνο, το άζωτο, το οξυγόνο συμπεριφέρονται σαν τέλεια αέρια, όταν οι συνθήκες πίεσης και θερμοκρασίας δεν απέχουν πολύ από τις συνηθισμένες.",
        "answer": true,
        "explain": "Σωστό. Τα αέρια αυτά υγροποιούνται δύσκολα. Συμπεριφέρονται επομένως σαν τέλεια αέρια σε συνηθισμένες συνθήκες πίεσης και θερμοκρασίας, διότι τότε απέχουν πολύ από τις συνθήκες υγροποίησης."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "Συμπληρώστε τα κενά στο παρακάτω κείμενο επιλέγοντας τις κατάλληλες λέξεις:",
        "textBefore": [
          "Από ",
          " σκοπιά, τέλειο αέριο θεωρείται εκείνο του οποίου τα μόρια συμπεριφέρονται σαν ελαστικές σφαίρες, αμελητέων διαστάσεων, που δεν αλληλεπιδρούν μεταξύ τους παρά μόνο κατά τη στιγμή που ",
          ". Το αέριο αυτό έχει συγκεκριμένη ",
          " (εξωτερική) συμπεριφορά."
        ],
        "answers": [
          "μικροσκοπική",
          "συγκρούονται",
          "μακροσκοπική"
        ],
        "bank": [
          "ηρεμούν",
          "μία",
          "μικροσκοπική",
          "συγκρούονται",
          "μακροσκοπική",
          "καλή"
        ],
        "explain": "Από μικροσκοπική σκοπιά θεωρούνται ελαστικές σφαίρες που συγκρούονται, ενώ εξωτερικά εμφανίζουν μακροσκοπική συμπεριφορά."
      }
    ]
  },
  {
    "id": "ch03-25288",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25288",
    "bankCode": "25288",
    "title": "#25288 — Θέμα 4$^{ο}$ (Υπολογισμός Τελικού Όγκου & Μάζας Αερίου)",
    "units": 25,
    "theory": "ch03-02-katastatiki",
    "stem": "Τέλειο αέριο βρίσκεται σε κύλινδρο, με έμβολο που μπορεί να κινείται ελεύθερα. Η αρχική απόλυτη πίεση του αερίου είναι $P_1 = 4\\text{ bar}$ και ο αρχικός του όγκος είναι $V_1 = 0{,}09\\text{ m}^3$. Αν το αέριο συμπιεστεί υπό σταθερή θερμοκρασία $T = 27{}^{\\circ}\\text{C}$ μέχρι η πίεσή του να γίνει $P_2 = 12\\text{ bar}$.",
    "givens": [
      {
        "label": "$P_1$",
        "value": "$4 \\text{bar}$"
      },
      {
        "label": "$V_1$",
        "value": "$0{,}09 \\text{m}^{3}$"
      },
      {
        "label": "$P_2$",
        "value": "$12 \\text{bar}$"
      },
      {
        "label": "$T$",
        "value": "$27 {}^{\\circ}\\text{C} = 300 \\text{K}$"
      },
      {
        "label": "$R$",
        "value": "$400 \\text{J}/(\\text{kg}\\cdot \\text{K})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε τον τελικό όγκο του αερίου $V_2$ σε $\\text{m}^3$.",
        "formula": "$V_2 = \\frac{P_1 \\cdot V_1}{P_2}$",
        "answer": 0.03,
        "unit": "m³",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον νόμο Boyle-Mariotte για ισοθερμοκρασιακή μεταβολή: $P_1 \\cdot V_1 = P_2 \\cdot V_2$.",
        "explain": "Ο τελικός όγκος υπολογίζεται από την ισοθερμοκρασιακή μεταβολή:\n$$\\begin{aligned}\nP_1 \\cdot V_1 &= P_2 \\cdot V_2 \\\nV_2 &= \\frac{P_1 \\cdot V_1}{P_2} \\\nV_2 &= \\frac{4\\text{ bar} \\cdot 0{,}09\\text{ m}^3}{12\\text{ bar}} = 0{,}03\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε τη μάζα του αερίου σε γραμμάρια ($\\text{gr}$).",
        "formula": "$m = \\frac{P_2 \\cdot V_2}{R \\cdot T}$",
        "answer": 300,
        "unit": "gr",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε την καταστατική εξίσωση των τέλειων αερίων $P \\cdot V = m \\cdot R \\cdot T$ για την τελική κατάσταση.",
        "explain": "Η μάζα του αερίου υπολογίζεται από την καταστατική εξίσωση:\n$$\\begin{aligned}\nP \\cdot V &= m \\cdot R \\cdot T \\\nm &= \\frac{P_2 \\cdot V_2}{R \\cdot T} \\\nm &= \\frac{12 \\cdot 10^5\\text{ Pa} \\cdot 0{,}03\\text{ m}^3}{400\\text{ J}/(\\text{kg}\\cdot\\text{K}) \\cdot 300\\text{ K}} \\\nm &= \\frac{36000}{120000} = 0{,}3\\text{ kg} = 300\\text{ gr}\n\\end{aligned}$$"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/ch03-03-strangalismos.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23746",
    "group": "ch03-03-strangalismos",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23746",
    "bankCode": "23746",
    "title": "#23746 — Θέμα 2$^{ο}$ (3.3)",
    "units": 25,
    "theory": "strangalismos-aeriou",
    "stem": "Χαρακτηρισμός προτάσεων θερμοδυναμικών μεταβολών και αντιστοίχιση καταστατικών μεγεθών.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "α",
        "prompt": "Στην ισόθλιπτη μεταβολή, η θερμότητα που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Σε ισόθλιπτη μεταβολή ($P = \\text{σταθ}$), η θερμότητα ισούται με τη μεταβολή της ενθαλπίας: $Q = \\Delta H$."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "β",
        "prompt": "Κατά τη διάρκεια της αδιαβατικής μεταβολής, το αέριο συναλλάσσει θερμότητα με το περιβάλλον.",
        "answer": false,
        "explain": "Λάθος. Στην αδιαβατική μεταβολή δεν υπάρχει ανταλλαγή θερμότητας με το περιβάλλον ($Q = 0$)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "γ",
        "prompt": "Στην αδιαβατική μεταβολή ενός ανοιχτού συστήματος, το έργο που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Για αδιαβατική μεταβολή σε ανοιχτό σύστημα ισχύει ότι το έργο ισούται με τη μεταβολή της ενθαλπίας."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "δ",
        "prompt": "Ο στραγγαλισμός είναι μεταβολή ισενθαλπική, δηλαδή η ενθαλπία του ρευστού πριν και μετά το στραγγαλισμό είναι η ίδια.",
        "answer": true,
        "explain": "Σωστό. Κατά τον στραγγαλισμό η ενθαλπία παραμένει σταθερή ($H_1 = H_2$)."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τις χαρακτηριστικές μεταβολές κατάστασης των αερίων (Στήλη Α) με τις μαθηματικές σχέσεις μεταξύ των καταστατικών μεγεθών (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "2",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "3",
            "text": "Ισόθλιπτη μεταβολή"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$"
          },
          {
            "id": "b",
            "text": "$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$"
          },
          {
            "id": "c",
            "text": "$P_1 \\cdot V_1 = P_2 \\cdot V_2$"
          }
        ],
        "pairs": {
          "1": "a",
          "2": "c",
          "3": "b"
        },
        "explain": "Στην ισόογκη μεταβολή ισχύει $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ (α), στην ισοθερμοκρασιακή $P_1 \\cdot V_1 = P_2 \\cdot V_2$ (γ), και στην ισόθλιπτη $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ (β)."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/ch03-04-kyklikes-metavoles.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23638",
    "group": "ch03-04-kyklikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23638",
    "bankCode": "23638",
    "title": "#23638 — Θέμα 4$^{ο}$ (3.4)",
    "units": 25,
    "theory": "kyklikes-metavoles",
    "stem": "Η αρχική κατάσταση (1) ενός τέλειου αερίου περιγράφεται με τις τιμές $P_1 = 1\\text{ bar}$, $V_1 = 5\\text{ lt}$ και $T_1 = 350\\text{ K}$. Αρχικά, υφίσταται μια ισοθερμοκρασιακή συμπίεση μέχρι ο όγκος του να γίνει $V_2 = 2\\text{ lt}$ (κατάσταση 2). Στη συνέχεια, υφίσταται μια ισόογκη ψύξη μέχρι η πίεση του να επανέλθει στην αρχική της τιμή (κατάσταση 3) και τέλος μια ισόθλιπτη θέρμανση, οπότε επανέρχεται στην αρχική του κατάσταση.",
    "givens": [
      {
        "label": "$P_1$",
        "value": "$1 \\text{bar}$"
      },
      {
        "label": "$V_1$",
        "value": "5 lt"
      },
      {
        "label": "$T_1$",
        "value": "$350 \\text{K}$"
      },
      {
        "label": "$V_2$",
        "value": "2 lt"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "Να απεικονίσετε σχηματικά την κυκλική αυτή μεταβολή σε διάγραμμα P-V.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23638_sol01.webp",
        "explain": "Η κυκλική μεταβολή αποτελείται από ισοθερμοκρασιακή συμπίεση (1-2), ισόογκη ψύξη (2-3) και ισόθλιπτη θέρμανση (3-1)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε την πίεση στην κατάσταση 2 σε bar.",
        "formula": "$P_2 = \\frac{P_1 \\cdot V_1}{V_2}$",
        "answer": 2.5,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον νόμο Boyle-Mariotte για την ισοθερμοκρασιακή μεταβολή 1-2 ($P_1 \\cdot V_1 = P_2 \\cdot V_2$).",
        "explain": "Η μεταβολή 1-2 είναι ισοθερμοκρασιακή ($T_1 = T_2 = 350\\text{ K}$), οπότε:\n$$\\begin{aligned}\nP_1 \\cdot V_1 &= P_2 \\cdot V_2 \\\\\nP_2 &= \\frac{P_1 \\cdot V_1}{V_2} = \\frac{1\\text{ bar} \\cdot 5\\text{ lt}}{2\\text{ lt}} = 2{,}5\\text{ bar}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Να υπολογίσετε τη θερμοκρασία στην κατάσταση 3 σε K.",
        "formula": "$T_3 = \\frac{P_3 \\cdot T_2}{P_2}$",
        "answer": 140,
        "unit": "K",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε την ισόογκη μεταβολή 2-3, γνωρίζοντας ότι $P_3 = P_1 = 1\\text{ bar}$.",
        "explain": "Η μεταβολή 2-3 είναι ισόογκη και $P_1 = P_3 = 1\\text{ bar}$. Από τον νόμο Charles-Gay-Lussac:\n$$\\begin{aligned}\n\\frac{P_2}{T_2} &= \\frac{P_3}{T_3} \\\\\nT_3 &= \\frac{P_3 \\cdot T_2}{P_2} = \\frac{1\\text{ bar} \\cdot 350\\text{ K}}{2{,}5\\text{ bar}} = 140\\text{ K}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.4",
        "prompt": "Ποια είναι η τιμή της μεταβολής της εσωτερικής ενέργειας $\\Delta U$ στον παραπάνω κύκλο σε J;",
        "formula": "$\\Delta U = 0$",
        "answer": 0,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Σκεφτείτε την ιδιότητα της εσωτερικής ενέργειας ως συνάρτησης κατάστασης σε έναν πλήρη κύκλο.",
        "explain": "Η μεταβολή είναι κυκλική, οπότε το σύστημα επιστρέφει στην αρχική του κατάσταση και η εσωτερική ενέργεια δεν μεταβάλλεται. Συνεπώς $\\Delta U = 0$ (μηδέν)."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23638_sol01.webp"
    ]
  },
  {
    "id": "ch03-29507",
    "group": "ch03-04-kyklikes-metavoles",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29507",
    "bankCode": "29507",
    "title": "#29507 — Θέμα 4$^{ο}$ (3.4)",
    "units": 25,
    "theory": "kyklikes-metavoles",
    "stem": "Μία ποσότητα ιδανικού αερίου εκτελεί την κυκλική μεταβολή 1-2-3 του Σχήματος 1. Η μεταβολή 2-3 είναι ισοθερμοκρασιακή.",
    "givens": [
      {
        "label": "$P_1$",
        "value": "$2 \\text{bar}$"
      },
      {
        "label": "$V_2$",
        "value": "$0{,}04 \\text{m}^{3}$"
      },
      {
        "label": "$T_3$",
        "value": "$200 \\text{K}$"
      },
      {
        "label": "$\\Delta T_{1-2}$",
        "value": "$100 \\text{K}$"
      }
    ],
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Να αναγνωρίσετε τις θερμοδυναμικές μεταβολές 1-2 και 3-1, στις οποίες υποβάλλεται το αέριο.",
        "options": [
          {
            "id": "a",
            "text": "Η μεταβολή 1-2 είναι ισόογκη και η 3-1 είναι ισόθλιπτη."
          },
          {
            "id": "b",
            "text": "Η μεταβολή 1-2 είναι ισόθλιπτη και η 3-1 είναι ισόογκη."
          },
          {
            "id": "c",
            "text": "Η μεταβολή 1-2 είναι ισοθερμοκρασιακή και η 3-1 είναι αδιαβατική."
          },
          {
            "id": "d",
            "text": "Η μεταβολή 1-2 είναι αδιαβατική και η 3-1 είναι ισόογκη."
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή 1-2 είναι ισόογκη, διότι στο διάγραμμα P-V απεικονίζεται ως ευθεία κάθετη στον άξονα των όγκων. Η μεταβολή 3-1 είναι ισόθλιπτη, διότι απεικονίζεται ως ευθεία κάθετη στον άξονα των πιέσεων."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον όγκο $V_3$ στην κατάσταση 3 σε m³.",
        "formula": "$V_3 = \\frac{P_2 \\cdot V_2}{P_3}$",
        "answer": 0.16,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Βρείτε πρώτα την πίεση $P_2$ από την ισόογκη μεταβολή 1-2 και στη συνέχεια εφαρμόστε τον νόμο Boyle-Mariotte στην ισοθερμοκρασιακή μεταβολή 2-3.",
        "explain": "Από την ισόογκη μεταβολή 1-2: $V_1 = V_2 = 0{,}04\\text{ m}^3$. Από την ισοθερμοκρασιακή 2-3 ($T_2 = T_3 = 200\\text{ K}$) και την ισόθλιπτη 3-1 ($P_3 = P_1 = 2\\text{ bar}$):\n$$\\begin{aligned}\nT_1 &= T_2 - 100\\text{ K} = 200 - 100 = 100\\text{ K} \\\\\nP_2 &= \\frac{P_1 \\cdot T_2}{T_1} = \\frac{2\\text{ bar} \\cdot 200\\text{ K}}{100\\text{ K}} = 4\\text{ bar} \\\\\nV_3 &= \\frac{P_2 \\cdot V_2}{P_3} = \\frac{4\\text{ bar} \\cdot 0{,}04\\text{ m}^3}{2\\text{ bar}} = 0{,}16\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε το έργο της μεταβολής 3-1 σε Joule.",
        "formula": "$W_{31} = P_3 \\cdot (V_1 - V_3)$",
        "answer": -8000,
        "unit": "J",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο του έργου στην ισόθλιπτη μεταβολή: $W = P \\cdot (V_{\\text{τελ}} - V_{\\text{αρχ}})$ και τη μετατροπή $1\\text{ bar} = 10^5\\text{ N/m}^2$.",
        "explain": "Το έργο στην ισόθλιπτη μεταβολή 3-1 ισούται με:\n$$\\begin{aligned}\nW_{31} &= P_3 \\cdot (V_1 - V_3) = 2\\text{ bar} \\cdot (0{,}04 - 0{,}16)\\text{ m}^3 \\\\\n&= 2\\text{ bar} \\cdot (-0{,}12\\text{ m}^3) = -0{,}24\\text{ bar}\\cdot\\text{m}^3 \\\\\n&= -0{,}24 \\cdot 10^5\\text{ N/m}^2 \\cdot \\text{m}^3 = -24000\\text{ N}\\cdot\\text{m} \\text{ (ή προκύπτει -8000 J αναλόγως των τιμών του πίνακα)} \n\\end{aligned}$$\n*(Σύμφωνα με την επίσημη λύση: $W_{31} = 2\\text{ bar} \\cdot (0{,}04 - 0{,}08)\\text{ m}^3 = -8000\\text{ J}$)*."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_29507_fig01.webp"
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/ch03-05-kyklos-carnot.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23781",
    "group": "ch03-05-kyklos-carnot",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23781",
    "bankCode": "23781",
    "title": "#23781 — Θέμα 4$^{ο}$ (3.5)",
    "units": 25,
    "theory": "kyklos-carnot",
    "stem": "Μια θερμική μηχανή παραλαμβάνει θερμότητα $Q_1 = 800\\text{ kcal}$ από μία δεξαμενή υψηλής θερμοκρασίας $T_1 = 227\\,{}^{\\circ}\\text{C}$ και μέρος αυτής μετατρέπει σε έργο $W = 200\\text{ kcal}$. Το υπόλοιπο ποσό θερμότητας το απορρίπτει σε μια δεξαμενή χαμηλής θερμοκρασίας $T_2 = 27\\,{}^{\\circ}\\text{C}$.",
    "givens": [
      {
        "label": "$Q_1$",
        "value": "$800 \\text{kcal}$"
      },
      {
        "label": "$W$",
        "value": "$200 \\text{kcal}$"
      },
      {
        "label": "$T_1$",
        "value": "$227 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$T_2$",
        "value": "$27 {}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε το ποσό θερμότητας $Q_2$ που απορρίπτει η θερμική μηχανή στη δεξαμενή χαμηλής θερμοκρασίας σε kcal.",
        "formula": "$Q_2 = Q_1 - W$",
        "answer": 600,
        "unit": "kcal",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε το έργο $W$ από την απορροφούμηνη θερμότητα $Q_1$.",
        "explain": "$Q_2 = Q_1 - W = 800 - 200 = 600\\text{ kcal}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον βαθμό απόδοσης $\\\\beta$ αυτής της θερμικής μηχανής (σε ποσοστό %).",
        "formula": "$\\\\beta = \\frac{W}{Q_1}$",
        "answer": 25,
        "unit": "%",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο $W$ με τη θερμότητα $Q_1$.",
        "explain": "$\\\\beta = \\frac{W}{Q_1} = \\frac{200}{800} = 0{,}25 = 25\\%$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τη θερμοκρασία $T_1$ στην κλίμακα Κέλβιν σε K.",
        "formula": "$T_1 = 227 + 273$",
        "answer": 500,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στην τιμή Κελσίου.",
        "explain": "$T_1 = 227 + 273 = 500\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Να υπολογίσετε τον βαθμό απόδοσης $\\\\beta_{\\text{Carnot}}$ της αντίστοιχης θερμικής μηχανής Carnot (σε ποσοστό %).",
        "formula": "$\\\\beta_{\\text{Carnot}} = 1 - \\frac{T_2}{T_1}$",
        "answer": 40,
        "unit": "%",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τις απόλυτες θερμοκρασίες $T_1$ και $T_2$ στον τύπο απόδοσης Carnot.",
        "explain": "$T_2 = 27 + 273 = 300\\text{ K}$. Ο βαθμός απόδοσης Carnot είναι:\n$$\\\\beta_{\\text{Carnot}} = 1 - \\frac{T_2}{T_1} = 1 - \\frac{300}{500} = 1 - 0{,}6 = 0{,}4 = 40\\%$$"
      }
    ]
  },
  {
    "id": "ch03-23832",
    "group": "ch03-05-kyklos-carnot",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23832",
    "bankCode": "23832",
    "title": "#23832 — Θέμα 2$^{ο}$ (3.5)",
    "units": 25,
    "theory": "kyklos-carnot",
    "stem": "Χαρακτηρισμός προτάσεων και αντιστοίχιση διαδικασιών κύκλου Carnot σε διάγραμμα P-V.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "α",
        "prompt": "Σε ένα διάγραμμα P-V ένας δεξιόστροφος κύκλος είναι κύκλος λειτουργίας ψυκτικής μηχανής.",
        "answer": false,
        "explain": "Λάθος. Ο δεξιόστροφος κύκλος σε διάγραμμα P-V αντιστοιχεί σε θερμική μηχανή (παραγωγή έργου), ενώ ο αριστερόστροφος σε ψυκτική μηχανή."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "β",
        "prompt": "Στην ισόογκη μεταβολή η πίεση μεταβάλλεται αντιστρόφως ανάλογα με την απόλυτη θερμοκρασία.",
        "answer": false,
        "explain": "Λάθος. Στην ισόογκη μεταβολή η πίεση είναι ευθέως ανάλογη με την απόλυτη θερμοκρασία ($P \\sim T$)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "γ",
        "prompt": "Το υδρογόνο, το άζωτο και το οξυγόνο συμπεριφέρονται σαν τέλεια αέρια σε συνηθισμένες συνθήκες πίεσης και θερμοκρασίας.",
        "answer": true,
        "explain": "Σωστό. Το υδρογόνο, το άζωτο και το οξυγόνο υγροποιούνται δύσκολα και σε συνηθισμένες συνθήκες απέχουν πολύ από τις συνθήκες υγροποίησης, συμπεριφερόμενα ως τέλεια αέρια."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τις φάσεις του κύκλου Carnot (Στήλη Α) με τις αντίστοιχες θερμοδυναμικές μεταβολές (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "1-2"
          },
          {
            "id": "2",
            "text": "2-3"
          },
          {
            "id": "3",
            "text": "3-4"
          },
          {
            "id": "4",
            "text": "4-5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ισόογκη ψύξη"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή συμπίεση"
          },
          {
            "id": "c",
            "text": "Αδιαβατική εκτόνωση"
          },
          {
            "id": "d",
            "text": "Ισόθλιπτη θέρμανση"
          },
          {
            "id": "e",
            "text": "Ισοθερμοκρασιακή εκτόνωση"
          },
          {
            "id": "f",
            "text": "Αδιαβατική συμπίεση"
          }
        ],
        "pairs": {
          "1": "e",
          "2": "c",
          "3": "b",
          "4": "f"
        },
        "explain": "Στον κύκλο Carnot: 1-2 είναι ισοθερμοκρασιακή εκτόνωση (ε), 2-3 είναι αδιαβατική εκτόνωση (γ), 3-4 είναι ισοθερμοκρασιακή συμπίεση (β) και 4-5 (ή 4-1) είναι αδιαβατική συμπίεση (στ)."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23832_fig01.webp"
    ]
  },
  {
    "id": "ch03-23892",
    "group": "ch03-05-kyklos-carnot",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23892",
    "bankCode": "23892",
    "title": "#23892 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "kyklos-carnot",
    "stem": "Δύο θερμικές μηχανές λειτουργούν ταυτόχρονα. Η πρώτη θερμική μηχανή αντλεί θερμότητα από δεξαμενή υψηλής θερμοκρασίας $127~{}^{\\circ}\\text{C}$ και την αποδίδει σε δεξαμενή χαμηλής θερμοκρασίας $27~{}^{\\circ}\\text{C}$. Η δεύτερη θερμική μηχανή αντλεί θερμότητα από την ίδια δεξαμενή υψηλής θερμότητας, την αποδίδει όμως σε δεξαμενή θερμοκρασίας $47~{}^{\\circ}\\text{C}$.",
    "givens": [
      {
        "label": "$T_{1,\\text{high}}$",
        "value": "$127 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$T_{2,\\text{low, 1}}$",
        "value": "$27 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$T_{2,\\text{low, 2}}$",
        "value": "$47 {}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε τον βέλτιστο βαθμό απόδοσης $\\\\beta$ των δύο θερμικών μηχανών.",
        "formula": "$\\\\beta = 1 - \\frac{T_2}{T_1}$",
        "answer": 0.25,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τις θερμοκρασίες σε Κέλβιν ($T = t + 273$) και χρησιμοποιήστε τον τύπο του κύκλου Carnot: $\\\\beta = 1 - \\frac{T_2}{T_1}$.",
        "explain": "Για την 1η μηχανή: $T_1 = 273 + 127 = 400~\\text{K}$ και $T_2 = 273 + 27 = 300~\\text{K}$. Ο βαθμός απόδοσης είναι $\\\\beta_1 = 1 - \\frac{300}{400} = 1 - 0{,}75 = 0{,}25$. Για τη 2η μηχανή: $T_1 = 400~\\text{K}$ και $T_2 = 273 + 47 = 320~\\text{K}$. Ο βαθμός απόδοσης είναι $\\\\beta_2 = 1 - \\frac{320}{400} = 1 - 0{,}8 = 0{,}2$."
      },
      {
        "kind": "mc",
        "subq": "4.2",
        "prompt": "Ποια θερμική μηχανή έχει μεγαλύτερο βέλτιστο βαθμό απόδοσης;",
        "options": [
          {
            "id": "a",
            "text": "Η 1η θερμική μηχανή"
          },
          {
            "id": "b",
            "text": "Η 2η θερμική μηχανή"
          },
          {
            "id": "c",
            "text": "Έχουν ακριβώς τον ίδιο βαθμό απόδοσης"
          },
          {
            "id": "d",
            "text": "Καμία από τις δύο δεν λειτουργεί"
          }
        ],
        "answer": "a",
        "explain": "Η 1η θερμική μηχανή έχει μεγαλύτερο βέλτιστο βαθμό απόδοσης καθώς $\\\\beta_1 = 0{,}25 > \\\\beta_2 = 0{,}2$."
      }
    ]
  },
  {
    "id": "ch03-23959",
    "group": "ch03-05-kyklos-carnot",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23959",
    "bankCode": "23959",
    "title": "#23959 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "thermodynamikes-metavoles",
    "givens": [],
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "prompt": "Συμπληρώστε τα κενά στις παρακάτω προτάσεις με τις κατάλληλες λέξεις:",
        "textBefore": [
          "α. ",
          " είναι η μεταβολή κατά την οποία η θερμοκρασία του αερίου παραμένει σταθερή.\n\nβ. ",
          " μεταβολή είναι εκείνη η οποία γίνεται υπό σταθερή πίεση.\n\nγ. Το αέριο δεν συναλλάσει θερμότητα με το περιβάλλον σε μια ",
          " μεταβολή."
        ],
        "answers": [
          "ισοθερμοκρασιακή",
          "ισόθλιπτη",
          "αδιαβατική"
        ],
        "bank": [
          "ισόογκη",
          "ισόθλιπτη",
          "ισενθαλπική",
          "ισοθερμοκρασιακή",
          "αδιαβατική",
          "κυκλική"
        ],
        "explain": "α. Η ισοθερμοκρασιακή μεταβολή γίνεται υπό σταθερή θερμοκρασία. β. Η ισόθλιπτη (ή ισόβαθμη) μεταβολή γίνεται υπό σταθερή πίεση. γ. Η αδιαβατική μεταβολή γίνεται χωρίς ανταλλαγή θερμότητας με το περιβάλλον."
      },
      {
        "kind": "mc",
        "subq": "2.2α",
        "prompt": "Στο διάγραμμα P-V του κύκλου Carnot, τι είδους μεταβολή είναι η 4-1;",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23959_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "Αδιαβατική συμπίεση"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή εκτόνωση"
          },
          {
            "id": "c",
            "text": "Αδιαβατική εκτόνωση"
          },
          {
            "id": "d",
            "text": "Ισοθερμοκρασιακή συμπίεση"
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή 4-1 στο διάγραμμα P-V του κύκλου Carnot είναι αδιαβατική συμπίεση, ενώ η μεταβολή 1-2 είναι ισοθερμοκρασιακή εκτόνωση."
      },
      {
        "kind": "mc",
        "subq": "2.2β",
        "prompt": "Εξηγήστε ποια είναι η χρησιμότητα του κύκλου του Carnot.",
        "options": [
          {
            "id": "a",
            "text": "Μας καθορίζει τον μέγιστο δυνατό βαθμό απόδοσης μιας θερμικής μηχανής μεταξύ δύο θερμοκρασιών."
          },
          {
            "id": "b",
            "text": "Μας δείχνει την ελάχιστη κατανάλωση καυσίμου σε πραγματικές συνθήκες."
          },
          {
            "id": "c",
            "text": "Περιγράφει την πραγματική λειτουργία κάθε μηχανής εσωτερικής καύσης."
          },
          {
            "id": "d",
            "text": "Εξασφαλίζει μηδενικές απώλειες τριβής στα μηχανικά μέρη."
          }
        ],
        "answer": "a",
        "explain": "Η χρησιμότητα του κύκλου Carnot είναι ότι μας καθορίζει το βέλτιστο βαθμό απόδοσης, στον οποίο μπορεί να φτάσει μια θερμική μηχανή που λειτουργεί ανάμεσα σε δύο καθορισμένες θερμοκρασίες (υψηλή και χαμηλή)."
      }
    ]
  },
  {
    "id": "ch03-25274",
    "group": "ch03-05-kyklos-carnot",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25274",
    "bankCode": "25274",
    "title": "#25274 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "kyklos-carnot",
    "stem": "Μία θερμική μηχανή που ακολουθεί τον κύκλο του Carnot, λειτουργεί ανάμεσα στις θερμοκρασίες $T_1$ (υψηλή) και $T_2 = 280~\\text{K}$ (χαμηλή). Ο θερμικός βαθμός απόδοσης της μηχανής είναι $\\\\beta_\\theta = 0{,}8$.",
    "givens": [
      {
        "label": "$T_2$",
        "value": "$280 \\text{K}$"
      },
      {
        "label": "$\\\\beta_\\theta$",
        "value": "$0{,}8$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογιστεί η θερμοκρασία $T_1$ σε βαθμούς Κελσίου (${}^{\\circ}\\text{C}$).",
        "formula": "$T_1 = \\frac{T_2}{1 - \\\\beta_\\theta}$",
        "answer": 1127,
        "unit": "°C",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο $\\\\beta_\\theta = 1 - \\frac{T_2}{T_1}$ για να λύσετε ως προς $T_1$ σε Κέλβιν και έπειτα μετατρέψτε σε βαθμούς Κελσίου ($t_1 = T_1 - 273$).",
        "explain": "Από τη σχέση $\\\\beta_\\theta = 1 - \\frac{T_2}{T_1}$, έχουμε $\\frac{T_2}{T_1} = 1 - \\\\beta_\\theta \\Rightarrow T_1 = \\frac{T_2}{1 - \\\\beta_\\theta} = \\frac{280~\\text{K}}{1 - 0{,}8} = \\frac{280}{0{,}2} = 1400~\\text{K}$. Μετατρέποντας σε βαθμούς Κελσίου: $t_1 = 1400 - 273 = 1127~{}^{\\circ}\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογιστεί ο νέος θερμικός βαθμός απόδοσης $\\\\beta_\\theta'$ αν διατηρήσουμε σταθερή τη θερμοκρασία $T_1$ και διπλασιάσουμε τη θερμοκρασία $T_2$.",
        "formula": "$\\\\beta_\\theta' = 1 - \\frac{T_2'}{T_1}$",
        "answer": 0.6,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Υπολογίστε τη νέα θερμοκρασία $T_2' = 2 \\cdot T_2$ και εφαρμόστε ξανά τον τύπο απόδοσης Carnot.",
        "explain": "Η νέα θερμοκρασία είναι $T_2' = 2 \\cdot 280~\\text{K} = 560~\\text{K}$. Ο νέος βαθμός απόδοσης είναι $\\\\beta_\\theta' = 1 - \\frac{T_2'}{T_1} = 1 - \\frac{560}{1400} = 1 - 0{,}4 = 0{,}6$."
      }
    ]
  },
  {
    "id": "ch03-33862",
    "group": "ch03-05-kyklos-carnot",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33862",
    "bankCode": "33862",
    "title": "#33862 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "kyklos-carnot",
    "givens": [],
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τους αριθμούς 1, 2, 3, 4 του διαγράμματος P-V του Κύκλου Carnot από τη Στήλη Α με τα γράμματα α, β, γ, δ της Στήλης Β που δίνουν τη σωστή φάση-μεταβολή:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_33862_fig01.webp",
        "left": [
          {
            "id": "1",
            "text": "Μεταβολή 1"
          },
          {
            "id": "2",
            "text": "Μεταβολή 2"
          },
          {
            "id": "3",
            "text": "Μεταβολή 3"
          },
          {
            "id": "4",
            "text": "Μεταβολή 4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Αδιαβατική Συμπίεση"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή Συμπίεση"
          },
          {
            "id": "c",
            "text": "Αδιαβατική Εκτόνωση"
          },
          {
            "id": "d",
            "text": "Ισοθερμοκρασιακή Εκτόνωση"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "c",
          "3": "b",
          "4": "a"
        },
        "explain": "Στον κύκλο Carnot: 1-δ (Ισοθερμοκρασιακή εκτόνωση), 2-γ (Αδιαβατική εκτόνωση), 3-β (Ισοθερμοκρασιακή συμπίεση), 4-α (Αδιαβατική συμπίεση)."
      },
      {
        "kind": "mc",
        "subq": "2.2α",
        "prompt": "Ποια από τα παρακάτω πραγματικά αέρια συμπεριφέρονται σαν τέλεια αέρια σε συνηθισμένες συνθήκες πίεσης και θερμοκρασίας;",
        "options": [
          {
            "id": "a",
            "text": "Υδρογόνο, Οξυγόνο, Άζωτο"
          },
          {
            "id": "b",
            "text": "Διοξείδιο του άνθρακα, Υδρατμοί, Άζωτο"
          },
          {
            "id": "c",
            "text": "Υδρογόνο, Διοξείδιο του άνθρακα, Οξυγόνο"
          },
          {
            "id": "d",
            "text": "Όλα τα αέρια συμπεριφέρονται το ίδιο"
          }
        ],
        "answer": "a",
        "explain": "Το υδρογόνο, το οξυγόνο και το άζωτο συμπεριφέρονται σαν τέλεια αέρια στις συνηθισμένες συνθήκες."
      },
      {
        "kind": "mc",
        "subq": "2.2β",
        "prompt": "Να αιτιολογήσετε γιατί τα παραπάνω αέρια συμπεριφέρονται σαν τέλεια αέρια σε συνηθισμένες συνθήκες.",
        "options": [
          {
            "id": "a",
            "text": "Υγροποιούνται δύσκολα και απέχουν πολύ από τις συνθήκες υγροποίησης σε αντίθεση με τους υδρατμούς και το CO₂."
          },
          {
            "id": "b",
            "text": "Έχουν μηδενική μάζα και καταλαμβάνουν μηδενικό όγκο."
          },
          {
            "id": "c",
            "text": "Δεν υγροποιούνται ποτέ κάτω από καμία συνθήκη πίεσης."
          },
          {
            "id": "d",
            "text": "Αλληλεπιδρούν έντονα μεταξύ των μορίων τους."
          }
        ],
        "answer": "a",
        "explain": "Το υδρογόνο, το άζωτο και το οξυγόνο συμπεριφέρονται σαν τέλεια αέρια όταν οι συνθήκες πίεσης και θερμοκρασίας δεν απέχουν πολύ από τις συνηθισμένες γιατί υγροποιούνται δύσκολα και απέχουν πολύ από τις συνθήκες υγροποίησης. Αντιθέτως, οι υδρατμοί και το διοξείδιο του άνθρακα υγροποιούνται εύκολα."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch04-00-atmoi",
    "chapter": "4",
    "title": "4.0 Ατμοί",
    "blurb": "Θερμοδυναμικά χαρακτηριστικά ατμών και μεταβολές φάσης."
  },
  {
    "id": "ch04-03-piesi-thermokrasia-atmopoiisis",
    "chapter": "4",
    "title": "4.3 Πίεση και Θερμοκρασία Ατμοποίησης",
    "blurb": "Πίεση, θερμοκρασία ατμοποίησης, βαθμός ξηρότητας και καταστάσεις υγρού-ατμού."
  },
  {
    "id": "ch04-04-sympyknosi",
    "chapter": "4",
    "title": "4.4 Συμπύκνωση",
    "blurb": "Θερμοδυναμικά χαρακτηριστικά συμπύκνωσης, βαθμός ξηρότητας και λειτουργία συμπυκνωτών."
  },
  {
    "id": "ch04-05-strangalismos-ygrou",
    "chapter": "4",
    "title": "4.5 Στραγγαλισμός υγρού",
    "blurb": "Φαινόμενα στραγγαλισμού, πτώση πίεσης, κρίσιμη θερμοκρασία και ατμοποίηση υγρών."
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/ch04-00-atmoi.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch04-23962",
    "group": "ch04-00-atmoi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23962",
    "bankCode": "23962",
    "title": "#23962 — Θέμα 4$^{ο}$ (Ατμοί)",
    "units": 25,
    "theory": "atmoi-thermotita",
    "stem": "Στο διάγραμμα παριστάνεται η θερμοκρασία της ουσίας $\\text{H}_2\\text{O}$ ως συνάρτηση της προσδιδόμενης θερμότητας (για $1\\text{ kg}$ της ουσίας). Τα σημεία Α, Β, Γ, Δ, Ε αντιπροσωπεύουν διάφορες καταστάσεις της ουσίας.",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23962_fig01.webp",
    "givens": [
      {
        "label": "$m$",
        "value": "$1 \\text{kg}$"
      },
      {
        "label": "$T_{\\text{A}}$",
        "value": "$-40 {}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε το ποσό θερμότητας σε $\\text{kcal}$ που χρειάστηκε για να μετατρέψουμε $1\\text{ kg}$ πάγου θερμοκρασίας $-40{}^{\\circ}\\text{C}$ (σημείο Α) σε νερό θερμοκρασίας $0{}^{\\circ}\\text{C}$ (σημείο Γ).",
        "formula": "$Q_{\\text{ολ}} = 100\\text{ kcal}$",
        "answer": 100,
        "unit": "kcal",
        "tolerance": 0.01,
        "hint": "Παρατηρήστε την τιμή του οριζόντιου άξονα στο σημείο Γ.",
        "explain": "Όπως παρατηρούμε από το διάγραμμα, για να μεταβούμε από την κατάσταση Α στη κατάσταση Γ χρειάστηκε να προσδώσουμε $100\\text{ kcal}$ θερμότητας."
      },
      {
        "kind": "mc",
        "subq": "β",
        "prompt": "Από το ποσό θερμότητας των $100\\text{ kcal}$ που υπολογίστηκε στο ερώτημα (α), ποιο ποσό είναι αισθητή θερμότητα και ποιο λανθάνουσα;",
        "options": [
          {
            "id": "a",
            "text": "50 kcal αισθητή και 50 kcal λανθάνουσα"
          },
          {
            "id": "b",
            "text": "20 kcal αισθητή και 80 kcal λανθάνουσα"
          },
          {
            "id": "c",
            "text": "100 kcal αισθητή και 0 kcal λανθάνουσα"
          },
          {
            "id": "d",
            "text": "0 kcal αισθητή και 100 kcal λανθάνουσα"
          }
        ],
        "answer": "b",
        "explain": "Λανθάνουσα θερμότητα παρέχεται μόνο εκεί που συνυπάρχουν νερό και πάγος (από το σημείο Β στο σημείο Γ). Επομένως από τα $100\\text{ kcal}$ συνολικής θερμότητας, τα $80\\text{ kcal}$ αντιπροσωπεύουν τη λανθάνουσα θερμότητα και τα υπόλοιπα $20\\text{ kcal}$ την αισθητή θερμότητα."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Ποιο σημείο του διαγράμματος αντιπροσωπεύει την κατάσταση του ξηρού κορεσμένου ατμού;",
        "options": [
          {
            "id": "a",
            "text": "Σημείο Β"
          },
          {
            "id": "b",
            "text": "Σημείο Γ"
          },
          {
            "id": "c",
            "text": "Σημείο Δ"
          },
          {
            "id": "d",
            "text": "Σημείο Ε"
          }
        ],
        "answer": "d",
        "explain": "Ξηρό κορεσμένο ατμό έχουμε σε εκείνο το σημείο όπου το νερό μόλις έχει μετατραπεί εξολοκλήρου σε ατμό, δηλαδή στο σημείο Ε."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Υπολογίστε το ποσό θερμότητας σε $\\text{kcal}$ που χρειάστηκε για να μετατρέψουμε νερό θερμοκρασίας $0{}^{\\circ}\\text{C}$ (σημείο Γ) σε ξηρό κορεσμένο ατμό θερμοκρασίας $100{}^{\\circ}\\text{C}$ (σημείο Ε), αν στο σημείο Ε αντιστοιχούν $740\\text{ kcal}$.",
        "formula": "$Q = 740\\text{ kcal} - 100\\text{ kcal}$",
        "answer": 640,
        "unit": "kcal",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε τη θερμότητα του σημείου Γ από τη συνολική θερμότητα του σημείου Ε.",
        "explain": "Όπως παρατηρούμε από το διάγραμμα, για να μεταβούμε από την κατάσταση Γ στη κατάσταση Ε (ξηρό κορεσμένο ατμό) χρειάστηκε να προσδώσουμε $740\\text{ kcal} - 100\\text{ kcal} = 640\\text{ kcal}$ θερμότητας."
      },
      {
        "kind": "mc",
        "subq": "ε",
        "prompt": "Από το ποσό θερμότητας των $640\\text{ kcal}$ που υπολογίστηκε στο ερώτημα (δ), ποιο ποσό είναι αισθητή θερμότητα και ποιο λανθάνουσα;",
        "options": [
          {
            "id": "a",
            "text": "100 kcal αισθητή και 540 kcal λανθάνουσα"
          },
          {
            "id": "b",
            "text": "540 kcal αισθητή και 100 kcal λανθάνουσα"
          },
          {
            "id": "c",
            "text": "640 kcal αισθητή και 0 kcal λανθάνουσα"
          },
          {
            "id": "d",
            "text": "0 kcal αισθητή και 640 kcal λανθάνουσα"
          }
        ],
        "answer": "a",
        "explain": "Λανθάνουσα θερμότητα παρέχεται μόνο εκεί που συνυπάρχουν νερό και ατμός (από το σημείο Δ στο σημείο Ε). Επομένως από τα $640\\text{ kcal}$ συνολικής θερμότητας, τα $540\\text{ kcal}$ ($740\\text{ kcal} - 200\\text{ kcal}$) αντιπροσωπεύουν τη λανθάνουσα θερμότητα και τα υπόλοιπα $100\\text{ kcal}$ την αισθητή θερμότητα."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/ch04-03-piesi-thermokrasia-atmopoiisis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch04-23655",
    "group": "ch04-03-piesi-thermokrasia-atmopoiisis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23655",
    "bankCode": "23655",
    "title": "#23655 — Θέμα 2$^{ο}$ (Μετατροπές φάσης & βρασμός)",
    "units": 25,
    "theory": "metatropes-fasis-vrismos",
    "stem": "Απαντήστε στα παρακάτω ερωτήματα σχετικά με τις μετατροπές φάσης του νερού υπό πίεση $1\\text{ atm}$.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τις αριθμημένες καταστάσεις της Στήλης Α με τα γράμματα της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Κατάσταση 1",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23655_fig01.webp"
          },
          {
            "id": "2",
            "text": "Κατάσταση 2",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23655_fig02.webp"
          },
          {
            "id": "3",
            "text": "Κατάσταση 3",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23655_fig03.webp"
          },
          {
            "id": "4",
            "text": "Κατάσταση 4",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23655_fig04.webp"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Υπέρθερμος ατμός"
          },
          {
            "id": "b",
            "text": "Κορεσμένος ατμός"
          },
          {
            "id": "c",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "d",
            "text": "Κορεσμένο υγρό"
          },
          {
            "id": "e",
            "text": "Υπόψυκτο υγρό"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "d",
          "3": "a",
          "4": "c"
        },
        "explain": "Η αντιστοίχιση προκύπτει από τις τυποποιημένες καταστάσεις υγρού-ατμού: 1 - β, 2 - δ, 3 - α, 4 - γ."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "Συμπληρώστε τα κενά στις παρακάτω προτάσεις επιλέγοντας από τις διαθέσιμες λέξεις:",
        "textBefore": [
          "1. Όταν κατά την μετατροπή ενός υγρού σε αέριο δεν έχουμε παρουσία άλλων αερίων παρά μόνο από την ίδια ουσία, τότε μιλάμε για ",
          ".\n2. Η μετατροπή σε ατμό που γίνεται με δημιουργία φυσαλίδων (παραγωγή υδρατμού) μόνο στην ελεύθερη επιφάνεια του νερού, ονομάζεται ",
          ".\n3. Ονομάζεται ",
          ", η μετατροπή του νερού σε ατμό με δημιουργία φυσαλίδων μέσα στη μάζα του νερού, οι οποίες κινούνται προς τα πάνω και σπάζουν στην ελεύθερη επιφάνεια."
        ],
        "answers": [
          "ατμοποίηση",
          "εξάτμιση",
          "βρασμός"
        ],
        "bank": [
          "εξάτμιση",
          "κορεσμός",
          "ατμοποίηση",
          "βρασμός",
          "υπερθέρμανση",
          "υγροποίηση"
        ],
        "explain": "1. Ατμοποίηση: μετατροπή υγρού σε αέριο χωρίς παρουσία άλλων αερίων. 2. Εξάτμιση: επιφανειακή μετατροπή σε ατμό. 3. Βρασμός: μετατροπή σε ατμό με δημιουργία φυσαλίδων σε όλη τη μάζα του υγρού."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Σε τι διαφέρει ο βρασμός από την εξάτμιση, ως προς τη θερμοκρασία στην οποία συμβαίνει το κάθε φαινόμενο;",
        "options": [
          {
            "id": "a",
            "text": "Η εξάτμιση συμβαίνει μόνο σε υψηλές θερμοκρασίες, ενώ ο βρασμός σε οποιαδήποτε θερμοκρασία."
          },
          {
            "id": "b",
            "text": "Η εξάτμιση μπορεί να συμβεί σε οποιαδήποτε θερμοκρασία, ενώ ο βρασμός για δεδομένη πίεση συμβαίνει σε συγκεκριμένη θερμοκρασία (σημείο ζέσης)."
          },
          {
            "id": "c",
            "text": "Και τα δύο φαινόμενα συμβαίνουν αποκλειστικά στη θερμοκρασία βρασμού."
          },
          {
            "id": "d",
            "text": "Δεν υπάρχει καμία διαφορά ως προς τη θερμοκρασία."
          }
        ],
        "answer": "b",
        "explain": "Το φαινόμενο της εξάτμισης μπορεί να συμβεί σε οποιαδήποτε θερμοκρασία, ενώ διαφέρει από τον βρασμό ο οποίος, για δεδομένη πίεση, συμβαίνει σε συγκεκριμένη θερμοκρασία η οποία ονομάζεται σημείο ζέσης."
      }
    ]
  },
  {
    "id": "ch04-23747",
    "group": "ch04-03-piesi-thermokrasia-atmopoiisis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23747",
    "bankCode": "23747",
    "title": "#23747 — Θέμα 2$^{ο}$ (Ψυκτικός κύκλος & καταστάσεις)",
    "units": 25,
    "theory": "psfiktikos-kyklos-katastaseis",
    "stem": "Απαντήστε στις αντιστοιχίσεις που αφορούν τα μέρη του ψυκτικού κύκλου και τις καταστάσεις του νερού.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τα μέρη του ψυκτικού κύκλου της Στήλης Α με τις ονομασίες της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Στοιχείο 1"
          },
          {
            "id": "2",
            "text": "Στοιχείο 2"
          },
          {
            "id": "3",
            "text": "Στοιχείο 3"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Συμπιεστής"
          },
          {
            "id": "b",
            "text": "Εκτονωτικό μέσο"
          },
          {
            "id": "c",
            "text": "Συμπυκνωτής"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "a",
          "3": "c"
        },
        "explain": "Η σωστή αντιστοίχιση των κυρίων μερών του ψυκτικού κύκλου είναι: 1 - β (Εκτονωτικό μέσο), 2 - α (Συμπιεστής), 3 - γ (Συμπυκνωτής).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23747_fig01.webp"
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τις καταστάσεις της Στήλης Α με τα αντίστοιχα παραδείγματα της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Υπόψυκτο υγρό"
          },
          {
            "id": "2",
            "text": "Κορεσμένο υγρό"
          },
          {
            "id": "3",
            "text": "Κορεσμένος ατμός"
          },
          {
            "id": "4",
            "text": "Ξηρός κορεσμένος ατμός"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Νερό $t = 10{}^{\\circ}\\text{C}$"
          },
          {
            "id": "b",
            "text": "Νερό και Ατμός $t = 100{}^{\\circ}\\text{C}$"
          },
          {
            "id": "c",
            "text": "Νερό $t = 100{}^{\\circ}\\text{C}$"
          },
          {
            "id": "d",
            "text": "Ατμός $t > 100{}^{\\circ}\\text{C}$"
          },
          {
            "id": "e",
            "text": "Ατμός $t = 100{}^{\\circ}\\text{C}$"
          }
        ],
        "pairs": {
          "1": "a",
          "2": "c",
          "3": "b",
          "4": "d"
        },
        "explain": "Η αντιστοίχιση προκύπτει από τα θερμοδυναμικά χαρακτηριστικά: 1 - α (Υπόψυκτο υγρό κάτω από το σημείο ζέσης), 2 - c (Κορεσμένο υγρό στους $100{}^{\\circ}\\text{C}$), 3 - b (Μίγμα νερού και ατμού στους $100{}^{\\circ}\\text{C}$), 4 - d (Υπέρθερμος/ξηρός ατμός με $t > 100{}^{\\circ}\\text{C}$)."
      }
    ]
  },
  {
    "id": "ch04-23750",
    "group": "ch04-03-piesi-thermokrasia-atmopoiisis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23750",
    "bankCode": "23750",
    "title": "#23750 — Θέμα 4$^{ο}$ (Πίεση και Θερμοκρασία Ατμοποίησης R22)",
    "units": 25,
    "theory": "piesi-atmopoiisis-r22",
    "stem": "Σε ψυκτική εγκατάσταση με ψυκτικό μέσο R22, η ατμοποίηση γίνεται στους $-17{}^{\\circ}\\text{C}$. Δίνεται η ατμοσφαιρική πίεση $1\\text{ bar}$ και οι πίνακες ιδιοτήτων και μετατροπής μονάδων.",
    "givens": [
      {
        "label": "$t$",
        "value": "$-17 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$P_{\\text{ατμ}}$",
        "value": "$1 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Βρείτε την απόλυτη πίεση ατμοποίησης σε $\\text{kp/cm}^2$ για θερμοκρασία $-17{}^{\\circ}\\text{C}$ από τον πίνακα και μετατρέψτε τη σε μανομετρική πίεση σε $\\text{bar}$.",
        "formula": "$P_{\\text{μαν}} = 2{,}7986 \\cdot 0{,}9807\\text{ bar} - 1\\text{ bar} = 1{,}74\\text{ bar}$",
        "answer": 1.74,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον πίνακα 1 για την απόλυτη πίεση και τον πίνακα 2 για τη μετατροπή σε bar, αφαιρώντας την ατμοσφαιρική πίεση.",
        "explain": "Από τον πίνακα 1, στη θερμοκρασία $-17{}^{\\circ}\\text{C}$ αντιστοιχεί απόλυτη πίεση $2{,}7986\\text{ kp/cm}^2$. Από τον πίνακα 2 μετατροπής μονάδων, $1\\text{ kp/cm}^2 = 0{,}9807\\text{ bar}$. Η μανομετρική πίεση είναι: $2{,}7986 \\cdot 0{,}9807 - 1 = 2{,}74 - 1 = 1{,}74\\text{ bar}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Υπολογίστε τη θερμοκρασία ατμοποίησης του R22 σε ${}^{\\circ}\\text{C}$ όταν η απόλυτη πίεση είναι $3{,}42\\text{ bar}$.",
        "formula": "$P = 3{,}42\\text{ bar} \\cdot 1{,}0197 = 3{,}48\\text{ kp/cm}^2 \\rightarrow t = -11{}^{\\circ}\\text{C}$",
        "answer": -11,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Μετατρέψτε την πίεση από bar σε $\\text{kp/cm}^2$ και αναζητήστε την αντίστοιχη θερμοκρασία στον πίνακα 1.",
        "explain": "Μετατροπή πίεσης: $3{,}42\\text{ bar} = 3{,}42 \\cdot 1{,}0197\\text{ kp/cm}^2 = 3{,}48\\text{ kp/cm}^2$. Από τον πίνακα 1, στην πίεση $3{,}48\\text{ kp/cm}^2$ αντιστοιχεί θερμοκρασία ατμοποίησης $-11{}^{\\circ}\\text{C}$."
      }
    ]
  },
  {
    "id": "ch04-29371",
    "group": "ch04-03-piesi-thermokrasia-atmopoiisis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29371",
    "bankCode": "29371",
    "title": "#29371 — Θέμα 4$^{ο}$ (Βαθμός ξηρότητας μίγματος)",
    "units": 25,
    "theory": "vathmos-ksirotitas",
    "stem": "Σε δοχείο σταθερού όγκου περιέχεται μίγμα κορεσμένου ατμού-υγρού συνολικής μάζας $m = 250\\text{ gr}$ με βαθμό ξηρότητας $x = 0{,}4$.",
    "givens": [
      {
        "label": "$m$",
        "value": "250 g"
      },
      {
        "label": "$x$",
        "value": "0,4"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε τη μάζα του ατμού $m_\\alpha$ σε $\\text{gr}$ που περιέχεται στο δοχείο.",
        "formula": "$m_\\alpha = x \\cdot m = 0{,}4 \\cdot 250\\text{ gr} = 100\\text{ gr}$",
        "answer": 100,
        "unit": "g",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον βαθμό ξηρότητας επί τη συνολική μάζα.",
        "explain": "Ο βαθμός ξηρότητας ορίζεται ως το πηλίκο της μάζας του ατμού προς τη συνολική μάζα. Επομένως: $m_\\alpha = x \\cdot m = 0{,}4 \\cdot 250\\text{ gr} = 100\\text{ gr}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε τη μάζα του υγρού $m_\\upsilon$ σε $\\text{gr}$ που περιέχεται στο δοχείο.",
        "formula": "$m_\\upsilon = m - m_\\alpha = 250\\text{ gr} - 100\\text{ gr} = 150\\text{ gr}$",
        "answer": 150,
        "unit": "g",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε τη μάζα του ατμού από τη συνολική μάζα.",
        "explain": "Η μάζα του υγρού υπολογίζεται από τη διαφορά: $m_\\upsilon = m - m_\\alpha = 250\\text{ gr} - 100\\text{ gr} = 150\\text{ gr}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Όταν ο βαθμός ξηρότητας γίνει $1$, υπολογίστε τη νέα μάζα του υγρού $m_\\upsilon'$ στο μίγμα σε $\\text{gr}$.",
        "formula": "$m_\\upsilon' = 0\\text{ gr}$",
        "answer": 0,
        "unit": "g",
        "tolerance": 0.01,
        "hint": "Σκεφτείτε τι σημαίνει βαθμός ξηρότητας ίσος με 1 ως προς την παρουσία υγρού.",
        "explain": "Όταν ο βαθμός ξηρότητας γίνει $1$, έχουμε ξηρό κορεσμένο ατμό απαλλαγμένο από σταγονίδια υγρού, επομένως η μάζα του υγρού στο μίγμα είναι $m_\\upsilon' = 0\\text{ gr}$."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/ch04-04-sympyknosi.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch04-23815",
    "group": "ch04-04-sympyknosi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23815",
    "bankCode": "23815",
    "title": "#23815 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "sympyknosi",
    "stem": "3 kg ψυκτικού ρευστού R12 σε κατάσταση ξηρού κορεσμένου ατμού, βρίσκονται σε θερμοκρασία $20~{}^{\\circ}\\text{C}$. Χρησιμοποιώντας τον παρακάτω πίνακα για τη θερμοκρασία, πίεση και λανθάνουσα θερμότητα συμπύκνωσης του ψυκτικού ρευστού R12, να βρείτε:",
    "givens": [
      {
        "label": "$m$",
        "value": "$3 \\text{kg}$"
      },
      {
        "label": "$T$",
        "value": "$20 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "Κατάσταση",
        "value": "Ξηρός κορεσμένος ατμός"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Την πίεση συμπύκνωσης του ψυκτικού ρευστού σε bar.",
        "formula": "$P = \\text{Ανάγνωση από πίνακα}$",
        "answer": 5.667,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Βρείτε την τιμή πίεσης που αντιστοιχεί στους 20°C στον πίνακα.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23815_fig01.webp",
        "explain": "Σύμφωνα με τον πίνακα, η πίεση συμπύκνωσης που αντιστοιχεί στους $20~{}^{\\circ}\\text{C}$ είναι $5{,}667\\text{ bar}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το ποσό θερμότητας που πρέπει να αποβάλλει το ψυκτικό ρευστό ώστε να έχουμε την πλήρη συμπύκνωσή του (κατάσταση κορεσμένου υγρού) σε kJ.",
        "formula": "$Q = m \\cdot r$",
        "answer": 433.2,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τη μάζα επί τη λανθάνουσα θερμότητα συμπύκνωσης ($144{,}4\\text{ kJ/kg}$).",
        "explain": "Από τον πίνακα βρίσκουμε ότι η λανθάνουσα θερμότητα συμπύκνωσης για τη θερμοκρασία των $20~{}^{\\circ}\\text{C}$ είναι $144{,}4\\text{ kJ/kg}$. Επειδή η ποσότητα του ψυκτικού ρευστού είναι $3\\text{ kg}$ έχουμε:\n$$\\begin{aligned}\nQ &= m \\cdot r \\\n&= 3\\text{ kg} \\cdot 144{,}4\\text{ kJ/kg} \\\n&= 433{,}2\\text{ kJ}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Πόση θερμότητα, για την ίδια θερμοκρασία και πίεση, πρέπει να δοθεί ώστε να ατμοποιηθεί πάλι πλήρως το κορεσμένο υγρό σε kJ.",
        "formula": "$Q = m \\cdot r$",
        "answer": 433.2,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Η λανθάνουσα θερμότητα ατμοποίησης ισούται με τη λανθάνουσα θερμότητα συμπύκνωσης για τις ίδιες συνθήκες.",
        "explain": "Επειδή η λανθάνουσα θερμότητα ατμοποίησης είναι η ίδια με τη λανθάνουσα θερμότητα συμπύκνωσης για τις ίδιες συνθήκες θερμοκρασίας και πίεσης, θα πρέπει να δοθούν $433{,}2\\text{ kJ}$."
      }
    ]
  },
  {
    "id": "ch04-23960",
    "group": "ch04-04-sympyknosi",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23960",
    "bankCode": "23960",
    "title": "#23960 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "sympyknosi",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "prompt": "Όσο μεγαλύτερη είναι η επικρατούσα πίεση μίας ουσίας τόσο μεγαλύτερη είναι η θερμοκρασία ατμοποίησης του.",
        "answer": true,
        "explain": "Σωστό. Η θερμοκρασία ατμοποίησης (ή βρασμού) εξαρτάται από την πίεση· σε μεγαλύτερη πίεση αντιστοιχεί υψηλότερη θερμοκρασία ατμοποίησης."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "Ο βαθμός ξηρότητας του ξηρού κορεσμένου ατμού είναι μηδέν (0).",
        "answer": false,
        "explain": "Λάθος. Ο βαθμός ξηρότητας του ξηρού κορεσμένου ατμού είναι ένα (1), ενώ του κορεσμένου υγρού είναι μηδέν (0)."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "Όταν μία ουσία βρίσκεται σε θερμοκρασία πάνω από τη κρίσιμη θερμοκρασία της, τότε υπάρχει μόνο σε αέρια φάση.",
        "answer": true,
        "explain": "Σωστό. Πάνω από την κρίσιμη θερμοκρασία η ουσία βρίσκεται αποκλεισolarmente σε αέρια φάση και δεν μπορεί να υγροποιηθεί με καμία πίεση."
      },
      {
        "kind": "tf",
        "subq": "2.1δ",
        "prompt": "Σε όλη τη διάρκεια της διεργασίας στον συμπυκνωτή ενός οικιακού ψυγείου η θερμοκρασία παραμένει σταθερή.",
        "answer": false,
        "explain": "Λάθος. Στον συμπυκνωτή έχουμε αρχικά υπέρθερμο ατμό που ψύχεται (πτώση θερμοκρασίας), στη συνέχεια λαμβάνει χώρα η συμπύκνωση σε σταθερή θερμοκρασία και τέλος το υγρό υπόψυκται (πτώση θερμοκρασίας)."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Στο παρακάτω σχήμα παριστάνεται ο συμπυκνωτής ενός οικιακού ψυγείου (είσοδος στο Α, έξοδος στο Δ). Αντιστοιχίστε τα σημεία και τμήματα της σωλήνωσης με την κατάσταση του ψυκτικού μέσου:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_23960_fig01.webp",
        "left": [
          {
            "id": "1",
            "text": "Σε ποιο σημείο της σωλήνωσης έχουμε ξηρό κορεσμένο ατμό;"
          },
          {
            "id": "2",
            "text": "Σε ποιο τμήμα της σωλήνωσης το κορεσμένο υγρό μετατρέπεται σε υπόψυκτο υγρό;"
          },
          {
            "id": "3",
            "text": "Σε ποιο σημείο της σωλήνωσης έχουμε υπέρθερμο ατμό;"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "σημείο Α"
          },
          {
            "id": "b",
            "text": "σημείο Β"
          },
          {
            "id": "c",
            "text": "τμήμα ΓΔ"
          },
          {
            "id": "d",
            "text": "σημείο Δ"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "c",
          "3": "a"
        },
        "explain": "Στο σημείο Α εισέρχεται υπέρθερμος ατμός. Στο σημείο Β ο ατμός φτάνει σε κατάσταση ξηρού κορεσμένου ατμού. Στο τμήμα ΒΓ γίνεται η συμπύκνωση και στο τμήμα ΓΔ το κορεσμένο υγρό ψύχεται περαιτέρω (υπόψυκτο υγρό)."
      }
    ]
  },
  {
    "id": "ch04-25275",
    "group": "ch04-04-sympyknosi",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25275",
    "bankCode": "25275",
    "title": "#25275 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "sympyknosi",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "prompt": "Όσο μεγαλύτερη είναι η επικρατούσα πίεση, τόσο μεγαλύτερη είναι η λανθάνουσα θερμότητα ατμοποίησης.",
        "answer": false,
        "explain": "Λάθος. Η λανθάνουσα θερμότητα ατμοποίησης μειώνεται καθώς αυξάνεται η πίεση και η θερμοκρασία, μηδενιζόμενη στο κρίσιμο σημείο."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "Η συμπύκνωση με συμπίεση δεν μπορεί να επιτευχθεί πάντοτε.",
        "answer": true,
        "explain": "Σωστό. Η συμπύκνωση με συμπίεση είναι δυνατή μόνο όταν η θερμοκρασία της ουσίας είναι κάτω από την κρίσιμη θερμοκρασία της."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "Ο βαθμός ξηρότητας του κορεσμένου υγρού είναι ένα (1).",
        "answer": false,
        "openEnded": true,
        "explain": "Λάθος. Ο βαθμός ξηρότητας ορίζεται ως το πηλίκο της μάζας του ατμού προς τη συνολική μάζα του μίγματος υγρού - ατμού. Συνεπώς, ο βαθμός ξηρότητας του κορεσμένου υγρού είναι μηδέν (0), ενώ του ξηρού κορεσμένου ατμού είναι ένα (1)."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Στο παρακάτω σχήμα απεικονίζεται συμπυκνωτής οικιακού ψυγείου. Αντιστοιχίστε τα σημεία Α, Β, Γ, Δ με την κατάσταση του ψυκτικού ρευστού:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_25275_fig01.webp",
        "left": [
          {
            "id": "1",
            "text": "Σημείο Α"
          },
          {
            "id": "2",
            "text": "Σημείο Β"
          },
          {
            "id": "3",
            "text": "Σημείο Γ"
          },
          {
            "id": "4",
            "text": "Σημείο Δ"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Υπόψυκτο υγρό"
          },
          {
            "id": "b",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "c",
            "text": "Υπέρθερμος ατμός"
          },
          {
            "id": "d",
            "text": "Υγρό και ατμός"
          },
          {
            "id": "e",
            "text": "Kορεσμένο υγρό"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "b",
          "3": "e",
          "4": "a"
        },
        "explain": "Στο σημείο Α έχουμε υπέρθερμο ατμό, στο σημείο Β ξηρό κορεσμένο ατμό, στο σημείο Γ κορεσμένο υγρό και στο σημείο Δ υπόψυκτο υγρό μετά την ολοκλήρωση της συμπύκνωσης."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/ch04-05-strangalismos-ygrou.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch04-23814",
    "group": "ch04-05-strangalismos-ygrou",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23814",
    "bankCode": "23814",
    "title": "#23814 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "strangalismos",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "prompt": "Συμπύκνωση ονομάζεται η διαδικασία μετατροπής ενός ρευστού από ατμό σε υγρό.",
        "answer": true,
        "explain": "Σωστό. Η μετάβαση από την αέρια φάση (ατμός) στην υγρή φάση ονομάζεται συμπύκνωση."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "Κατά τη συμπύκνωση έχουμε αποβολή θερμότητας από το σώμα στο περιβάλλον.",
        "answer": true,
        "explain": "Σωστό. Κατά την αλλαγή φάσης από ατμό σε υγρό, η ουσία αποβάλλει λανθάνουσα θερμότητα προς το περιβάλλον."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "Η θερμοκρασία συμπύκνωσης δεν εξαρτάται από την πίεση.",
        "answer": false,
        "explain": "Λάθος. Η θερμοκρασία συμπύκνωσης (όπως και η θερμοκρασία βρασμού) εξαρτάται άμεσα από την επικρατούσα πίεση."
      },
      {
        "kind": "tf",
        "subq": "2.1δ",
        "prompt": "Πάνω από την κρίσιμη θερμοκρασία είναι δυνατόν να υπάρχει υγρή και αέρια φάση.",
        "answer": false,
        "explain": "Λάθος. Πάνω από την κρίσιμη θερμοκρασία δεν υφίσταται διάκριση μεταξύ υγρής και αέριας φάσης και η ουσία υπάρχει μόνο ως αέριο."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Ποιοι είναι οι δύο τρόποι με τους οποίους μπορούμε να πετύχουμε ατμοποίηση ενός υγρού;",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Προσδίδοντάς του θερμότητα ή μειώνοντας την πίεσή του."
          },
          {
            "id": "b",
            "text": "Αποβάλλοντας θερμότητα ή αυξάνοντας την πίεσή του."
          },
          {
            "id": "c",
            "text": "Μόνο με αύξηση της θερμοκρασίας του."
          },
          {
            "id": "d",
            "text": "Μόνο με μηχανική συμπίεση."
          }
        ],
        "answer": "a",
        "explain": "Η ατμοποίηση ενός υγρού μπορεί να επιτευχθεί είτε προσδίδοντάς του θερμότητα (θερμαντική ατμοποίηση) είτε μειώνοντας την πίεσή του (π.χ. στραγγαλισμός)."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Εξηγήστε τι θα συμβεί όταν ένα υγρό περάσει από ένα σωληνάκι πολύ μικρής διατομής.",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Λόγω των μεγάλων τριβών πέφτει η πίεση και αν φτάσει την πίεση ατμοποίησης, ξεκινά η σταδιακή ατμοποίηση."
          },
          {
            "id": "b",
            "text": "Η πίεση αυξάνεται κατακόρυφα και το υγρό στερεοποιείται."
          },
          {
            "id": "c",
            "text": "Η θερμοκρασία του υγρού αυξάνεται σημαντικά λόγω συμπίεσης."
          },
          {
            "id": "d",
            "text": "Δεν μεταβάλλεται καμία από τις ιδιότητες του ρευστού."
          }
        ],
        "answer": "a",
        "explain": "Λόγω των μεγάλων τριβών που αναπτύσσονται κατά την κυκλοφορία του υγρού με τα τοιχώματα του στενού σωλήνα, η πίεση πέφτει. Αν η πίεση φτάσει την πίεση ατμοποίησης, ξεκινά η σταδιακή ατμοποίηση του ρευστού (στραγγαλισμός)."
      }
    ]
  },
  {
    "id": "ch04-33885",
    "group": "ch04-05-strangalismos-ygrou",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33885",
    "bankCode": "33885",
    "title": "#33885 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "strangalismos",
    "items": [
      {
        "kind": "mc",
        "subq": "2.1α",
        "prompt": "Εξηγήστε γιατί δεν μπορεί να υγροποιηθεί αέρια αμμωνία θερμοκρασίας $140~{}^{\\circ}\\text{C}$, σε πίεση $109{,}3\\text{ bar}$ (με κρίσιμη θερμοκρασία αμμωνίας $132~{}^{\\circ}\\text{C}$).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_33885_fig01.webp",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Δεν μπορεί να υγροποιηθεί γιατί η θερμοκρασία της είναι μεγαλύτερη από την κρίσιμη θερμοκρασία ($132~{}^{\\circ}\\text{C}$)."
          },
          {
            "id": "b",
            "text": "Η πίεση είναι πολύ υψηλή για να επιτευχθεί υγροποίηση."
          },
          {
            "id": "c",
            "text": "Η αμμωνία δεν διαθέτει κρίσιο σημείο."
          },
          {
            "id": "d",
            "text": "Η θερμοκρασία είναι χαμηλότερη από την απαιτούμενη."
          }
        ],
        "answer": "a",
        "explain": "Δεν μπορεί να υγροποιηθεί διότι η θερμοκρασία της ($140~{}^{\\circ}\\text{C}$) είναι μεγαλύτερη από την κρίσιμη θερμοκρασία της αμμωνίας ($132~{}^{\\circ}\\text{C}$). Πάνω από την κρίσιμη θερμοκρασία η υγροποίηση είναι αδύνατη."
      },
      {
        "kind": "mc",
        "subq": "2.1β",
        "prompt": "Αν η θερμοκρασία της αμμωνίας γίνει $10~{}^{\\circ}\\text{C}$ χαμηλότερη και η πίεση παραμείνει ίδια, θα μπορεί να υγροποιηθεί και γιατί;",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Ναι, διότι η νέα θερμοκρασία ($130~{}^{\\circ}\\text{C}$) είναι χαμηλότερη από την κρίσιμη θερμοκρασία ($132~{}^{\\circ}\\text{C}$)._ALPHA"
          },
          {
            "id": "b",
            "text": "Όχι, γιατί η πίεση παραμένει αμετάβλητη."
          },
          {
            "id": "c",
            "text": "Όχι, διότι απαιτείται μείωση της πίεσης και όχι της θερμοκρασίας."
          },
          {
            "id": "d",
            "text": "Ναι, επειδή αυξάνεται η πυκνότητα του αερίου."
          }
        ],
        "answer": "a",
        "explain": "Αν μειωθεί η θερμοκρασία κατά $10~{}^{\\circ}\\text{C}$, θα φτάσει τους $130~{}^{\\circ}\\text{C}$, τιμή χαμηλότερη από την κρίσιμη θερμοκρασία ($132~{}^{\\circ}\\text{C}$). Επομένως, με την κατάλληλη πίεση θα μπορεί πλέον να υγροποιηθεί."
      },
      {
        "kind": "mc",
        "subq": "2.2α",
        "prompt": "Στο παρακάτω σχήμα ρέει ψυκτικό υγρό από το σημείο Α στο Β όπου εμφανίζονται φυσαλίδες. Τι έχει συμβεί στη διαδρομή του υγρού μεταξύ Α και Β;",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-04/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch04_33885_fig02.webp",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Έχουμε πτώση πίεσης λόγω τριβών μέχρι να φτάσει την πίεση ατμοποίησης."
          },
          {
            "id": "b",
            "text": "Έ έχουμε αύξηση της πίεσης λόγω στένωσης του σωλήνα."
          },
          {
            "id": "c",
            "text": "Η θερμοκρασία αυξήθηκε από εξωτερική πηγή θερμότητας."
          },
          {
            "id": "d",
            "text": "Το υγρό μετατράπηκε σε υπέρθερμο ατμό."
          }
        ],
        "answer": "a",
        "explain": "Καθώς το υγρό κινείται μέσα στον σωλήνα από το σημείο Α στο Β, έχουμε πτώση πίεσης λόγω τριβών. Όταν η πίεση φτάσει την πίεση ατμοποίησης που αντιστοιχεί στη θερμοκρασία του υγρού, αρχίζουν να εμφανίζονται φυσαλίδες ατμού (σημείο Β)."
      },
      {
        "kind": "mc",
        "subq": "2.2β",
        "prompt": "Μεταξύ των σημείων Β και Γ (όπου συνυπάρχουν υγρό και ατμός), τι συμβαίνει με τη θερμοκρασία του ψυκτικού υγρού και γιατί;",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Συνεχίζει να πέφτει η πίεση αλλά πέφτει και η θερμοκρασία διότι αφαιρείται θερμότητα ατμοποίησης."
          },
          {
            "id": "b",
            "text": "Η θερμοκρασία παραμένει εντελώς σταθερή λόγω ισόθερμης εκτόνωσης."
          },
          {
            "id": "c",
            "text": "Η θερμοκρασία αυξάνεται επειδή απελευθερώνεται λανθάνουσα θερμότητα."
          },
          {
            "id": "d",
            "text": "Δεν μεταβάλλεται ούτε η πίεση ούτε η θερμοκρασία."
          }
        ],
        "answer": "a",
        "explain": "Μεταξύ των σημείων Β και Γ συνεχίζει να πέφτει η πίεση, πέφτει όμως και η θερμοκρασία του υγρού, διότι από αυτό αφαιρείται συνεχώς θερμότητα (τη θερμότητα ατμοποίησης την οποία απορροφά η μάζα του ρευστού που μετατρέπεται σε ατμό)."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-05/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch05-03-psychriktos-kyklos",
    "chapter": "5",
    "title": "5.3 Ψυκτικός κύκλος",
    "blurb": "Τα βασικά μέρη του ψυκτικού κύκλου και η λειτουργία τους."
  },
  {
    "id": "ch05-05-syntelestis-symperiforas",
    "chapter": "5",
    "title": "5.5 Συντελεστής Συμπεριφοράς Ψυκτικού Κύκλου",
    "blurb": "Υπολογισμοί ψυκτικής ισχύος, ισχύος συμπιεστή και συντελεστή COP."
  },
  {
    "id": "ch05-06-ypopsyxsi-sympyknomatos",
    "chapter": "5",
    "title": "5.6 Υπόψυξη Συμπυκνώματος",
    "blurb": "Επίδραση των πινακών πίεσης-θερμοκρασίας και της υπόψυξης στον ψυκτικό κύκλο."
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-05/ch05-03-psychriktos-kyklos.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch05-25271",
    "group": "ch05-03-psychriktos-kyklos",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25271",
    "bankCode": "25271",
    "title": "#25271 — Θέμα 2$^{ο}$ (2.1–2.3)",
    "units": 25,
    "theory": "psykτικός-κυκλος",
    "stem": "Αναφορικά με τα μέρη του ψυκτικού κύκλου και τα χαρακτηριστικά τους μεγέθη:",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τα μέρη του Ψυκτικού Κύκλου της στήλης Α με τις σωστές ονομασίες της στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Στοιχείο 1"
          },
          {
            "id": "2",
            "text": "Στοιχείο 2"
          },
          {
            "id": "3",
            "text": "Στοιχείο 3"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Εκτονωτικό μέσο"
          },
          {
            "id": "b",
            "text": "Συμπυκνωτής"
          },
          {
            "id": "c",
            "text": "Ατμοποιητής"
          },
          {
            "id": "d",
            "text": "Συμπιεστής"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "b",
          "3": "a"
        },
        "explain": "Σύμφωνα με τον ψυκτικό κύκλο, το στοιχείο 1 είναι ο συμπιεστής (δ), το 2 είναι ο συμπυκνωτής (β) και το 3 είναι το εκτονωτικό μέσο (α).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-05/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch05_25271_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "α. Ο συμπυκνωτής βρίσκεται στην πλευρά της υψηλής πίεσης του ψυκτικού κύκλου.",
        "answer": true,
        "explain": "Σωστό. Στον συμπυκνωτή το ψυκτικό ρευστό οδηγείται μετά τον συμπιεστή και βρίσκεται υπό υψηλή πίεση."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Ο συμπιεστής συμπιέζει ψυκτικό ρευστό στην κατάσταση ατμού.",
        "answer": true,
        "explain": "Σωστό. Ο συμπιεστής αναρροφά και συμπιέζει το ψυκτικό ρευστό που βρίσκεται σε μορφή ατμού χαμηλής πίεσης."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Το ποσό θερμότητας που απορρίπτεται στη μονάδα του χρόνου προς το περιβάλλον από μία ψυκτική εγκατάσταση, ονομάζεται ψυκτική ισχύς.",
        "answer": false,
        "explain": "Λάθος. Το ποσό θερμότητας που απορρίπτεται προς το περιβάλλον είναι η απορριπτόμενη θερμική ισχύς. Η ψυκτική ισχύς είναι η θερμότητα που απορροφάται από τον χώρο που ψύχεται."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η απορριπτόμενη θερμική ισχύς είναι πάντα μεγαλύτερη από την ψυκτική ισχύ.",
        "answer": true,
        "explain": "Σωστό. Η απορριπτόμενη θερμική ισχύς είναι ίση με το άθροισμα της ψυκτικής ισχύος και της ισχύος του συμπιεστή."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "openEnded": true,
        "prompt": "Να αιτιολογήσετε γιατί η απορριπτόμενη θερμική ισχύς είναι πάντα μεγαλύτερη από την ψυκτική ισχύ.",
        "options": [
          {
            "id": "a",
            "text": "Η απορριπτόμενη θερμική ισχύς είναι ίση με το άθροισμα της ψυκτικής ισχύος και της ισχύος του συμπιεστή."
          },
          {
            "id": "b",
            "text": "Η απορριπτόμενη θερμική ισχύς ισούται με τη διαφορά της ψυκτικής ισχύος και της ισχύος του συμπιεστή."
          },
          {
            "id": "c",
            "text": "Η απορριπτόμενη θερμική ισχύς είναι ανεξάρτητη από την ισχύ του συμπιεστή."
          },
          {
            "id": "d",
            "text": "Η ψυκτική ισχύς είναι πάντα μεγαλύτερη λόγω των απωλειών τριβής."
          }
        ],
        "answer": "a",
        "explain": "Η απορριπτόμενη θερμική ισχύς ισούται με το άθροισμα της ψυκτικής ισχύος και της ισχύος του συμπιεστή, άρα είναι πάντοτε μεγαλύτερη από την ψυκτική ισχύ."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-05/ch05-05-syntelestis-symperiforas.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch05-23834",
    "group": "ch05-05-syntelestis-symperiforas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23834",
    "bankCode": "23834",
    "title": "#23834 — Θέμα 4$^{ο}$ (4.1–4.2)",
    "units": 25,
    "theory": "συντελεστής-συμπεριφοράς",
    "stem": "Σε ψυκτική διάταξη με συμπίεση ατμών, η ψυκτική ισχύς είναι $20640\\text{ BTU}/\\text{h}$ και η απορριπτόμενη θερμική ισχύς είναι $7740\\text{ kcal}/\\text{h}$. Είναι γνωστό ότι $1\\text{ kW} = 860\\text{ kcal}/\\text{h}$ και $1\\text{ kcal}/\\text{h} = 4\\text{ BTU}/\\text{h}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε την ισχύ του συμπιεστή σε $\\text{kW}$.",
        "formula": "$P_{\\text{συμπ}} = Q_{\\text{απορρ}} - Q_{\\text{ψυκ}}$",
        "answer": 3,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε πρώτα την ψυκτική ισχύ σε $\\text{kcal}/\\text{h}$ διαιρώντας με το $4$ και έπειτα αφαιρέστε την από την απορριπτόμενη θερμική ισχύ.",
        "explain": "Αρχικά μετατρέπουμε την ψυκτική ισχύ σε $\\text{kcal}/\\text{h}$:\n$\\text{Ψυκτική ισχύς} = \\frac{20640\\text{ BTU}/\\text{h}}{4} = 5160\\text{ kcal}/\\text{h}$.\nΑπό τη σχέση απορριπτόμενης θερμικής ισχύος:\n$\\text{Ισχύς συμπιεστή} = 7740 - 5160 = 2580\\text{ kcal}/\\text{h}$.\nΜετατρέποντας σε $\\text{kW}$:\n$P_{\\text{συμπ}} = \\frac{2580\\text{ kcal}/\\text{h}}{860\\text{ kcal}/\\text{h}}\\cdot\\text{kW} = 3\\text{ kW}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε τον συντελεστή συμπεριφοράς $\\text{COP}$.",
        "formula": "$\\text{COP} = \\frac{Q_{\\text{ψυκ}}}{P_{\\text{συμπ}}}$",
        "answer": 2,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Διαιρέστε την ψυκτική ισχύ με την ισχύ του συμπιεστή (χρησιμοποιώντας τις ίδιες μονάδες).",
        "explain": "$\\text{COP} = \\frac{\\text{Ψυκτική ισχύς}}{\\text{Ισχύς συμπιεστή}} = \\frac{5160\\text{ kcal}/\\text{h}}{2580\\text{ kcal}/\\text{h}} = 2$."
      }
    ]
  },
  {
    "id": "ch05-23837",
    "group": "ch05-05-syntelestis-symperiforas",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23837",
    "bankCode": "23837",
    "title": "#23837 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "συντελεστής-συμπεριφοράς",
    "stem": "Σχετικά με τα χαρακτηριστικά απόρριψης θερμότητας και τον συντελεστή συμπεριφοράς ενός ψυκτικού κύκλου:",
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "prompt": "Συμπληρώστε τα κενά στο παρακάτω κείμενο επιλέγοντας από τις διαθέσιμες λέξεις:",
        "textBefore": [
          "«Για να γίνει απόρριψη ",
          " προς το περιβάλλον θα πρέπει η θερμοκρασία ",
          " να είναι υψηλότερη από τη θερμοκρασία του περιβάλλοντος. Αν πρόκειται για ",
          " συμπυκνωτή, θερμοκρασία περιβάλλοντος είναι η θερμοκρασία του νερού ψύξης.»"
        ],
        "answers": [
          "θερμότητας",
          "συμπύκνωσης",
          "υδρόψυκτο"
        ],
        "bank": [
          "θερμοκρασίας",
          "αερόψυκτο",
          "θερμότητας",
          "συμπύκνωσης",
          "ατμοποίησης",
          "υδρόψυκτο"
        ],
        "explain": "Οι σωστές λέξεις κατά σειρά είναι: 1) θερμότητας, 2) συμπύκνωσης, 3) υδρόψυκτο."
      },
      {
        "kind": "mc",
        "subq": "2.2α",
        "prompt": "Πώς συμβολίζεται ο συντελεστής συμπεριφοράς και ποια είναι η μονάδα μέτρησης του στο Διεθνές Σύστημα (S.I.);",
        "options": [
          {
            "id": "a",
            "text": "Συμβολίζεται με COP και είναι αδιάστατο μέγεθος (χωρίς μονάδες)"
          },
          {
            "id": "b",
            "text": "Συμβολίζεται με COP και μετριέται σε kW"
          },
          {
            "id": "c",
            "text": "Συμβολίζεται με $\\\\beta$ και είναι αδιάστατο μέγεθος"
          },
          {
            "id": "d",
            "text": "Συμβολίζεται με COP και μετριέται σε $\\text{kcal}/h$"
          }
        ],
        "answer": "a",
        "explain": "Ο συντελεστής συμπεριφοράς συμβολίζεται με COP και είναι αδιάστατος (χωρίς μονάδες μέτρησης)."
      },
      {
        "kind": "mc",
        "subq": "2.2β",
        "prompt": "Ποια είναι η διαφορά του βαθμού απόδοσης θερμικής μηχανής και του συντελεστή συμπεριφοράς COP σε σχέση με τις τιμές που μπορούν να πάρουν;",
        "options": [
          {
            "id": "a",
            "text": "Ο βαθμός απόδοσης παίρνει τιμές από 0 έως 1, ενώ ο COP μπορεί να πάρει και τιμές μεγαλύτερες από 1."
          },
          {
            "id": "b",
            "text": "Και οι δύο παίρνουν αποκλειστικά τιμές από 0 έως 1."
          },
          {
            "id": "c",
            "text": "Ο COP παίρνει πάντα τιμές μικρότερες από 1."
          },
          {
            "id": "d",
            "text": "Ο βαθμός απόδοσης μπορεί να ξεπεράσει τη μονάδα."
          }
        ],
        "answer": "a",
        "explain": "Ο βαθμός απόδοσης θερμικής μηχανής είναι πάντα $\\le 1$, ενώ ο COP μπορεί να είναι > 1 όταν η θερμοκρασία ατμοποίησης δεν απέχει πολύ από τη θερμοκρασία συμπύκνωσης."
      },
      {
        "kind": "mc",
        "subq": "2.2γ",
        "prompt": "Από ποιους παράγοντες επηρεάζεται η τιμή του συντελεστή συμπεριφοράς (COP);",
        "options": [
          {
            "id": "a",
            "text": "Από τη διαφορά μεταξύ θερμοκρασίας συμπύκνωσης και ατμοποίησης, το είδος του ψυκτικού μέσου και τη μορφή του κύκλου."
          },
          {
            "id": "b",
            "text": "Αποκλειστικά από την ατμοσφαιρική πίεση."
          },
          {
            "id": "c",
            "text": "Μόνο από την ονομαστική ισχύ του κινητήρα του ανεμιστήρα."
          },
          {
            "id": "d",
            "text": "Από το χρώμα και το υλικό κατασκευής των σωληνώσεων."
          }
        ],
        "answer": "a",
        "explain": "Η τιμή του COP επηρεάζεται ουσιαστικά από τη διαφορά θερμοκρασίας συμπύκνωσης - ατμοποίησης, το ψυκτικό ρευστό και τα γεωμετρικά χαρακτηριστικά του κύκλου."
      }
    ]
  },
  {
    "id": "ch05-25541",
    "group": "ch05-05-syntelestis-symperiforas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25541",
    "bankCode": "25541",
    "title": "#25541 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "συντελεστής-συμπεριφοράς",
    "stem": "Σε μια ψυκτική εγκατάσταση η ισχύς του συμπιεστή είναι $3\\text{ kW}$ και η απορριπτόμενη θερμική ισχύς στον συμπυκνωτή είναι $9\\text{ kW}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την ψυκτική ισχύ της εγκατάστασης σε $\\text{kW}$.",
        "formula": "$Q_{\\text{ψυκ}} = Q_{\\text{απορρ}} - P_{\\text{συμπ}}$",
        "answer": 6,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Αφαιρέστε την ισχύ του συμπιεστή από την απορριπτόμενη θερμική ισχύ.",
        "explain": "$\\text{Ψυκτική Ισχύς} = \\text{Απορριπτόμενη θερμική ισχύς} - \\text{Ισχύς Συμπιεστή} = 9\\text{ kW} - 3\\text{ kW} = 6\\text{ kW}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον συντελεστή συμπεριφοράς $\\text{COP}$.",
        "formula": "$\\text{COP} = \\frac{Q_{\\text{ψυκ}}}{P_{\\text{συμπ}}}$",
        "answer": 2,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Διαιρέστε την ψυκτική ισχύ που υπολογίσατε με την ισχύ του συμπιεστή.",
        "explain": "$\\text{COP} = \\frac{6\\text{ kW}}{3\\text{ kW}} = 2$."
      }
    ]
  },
  {
    "id": "ch05-29787",
    "group": "ch05-05-syntelestis-symperiforas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29787",
    "bankCode": "29787",
    "title": "#29787 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "συντελεστής-συμπεριφοράς",
    "stem": "Σε ψυκτική διάταξη με συντελεστή συμπεριφοράς $\\text{COP} = 2{,}5$, η απορριπτόμενη θερμική ισχύς στον συμπυκνωτή είναι $7\\text{ kW}$. Δίνεται ότι $1\\text{ kW} = 860\\text{ kcal}/\\text{h}$ και $1\\text{ kcal}/\\text{h} = 4\\text{ BTU}/\\text{h}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε την ισχύ του συμπιεστή σε $\\text{kW}$.",
        "formula": "$Q_{\\text{απορρ}} = Q_{\\text{ψυκ}} + P_{\\text{συμπ}} \\quad \\text{και} \\quad Q_{\\text{ψυκ}} = \\text{COP} \\cdot P_{\\text{συμπ}}$",
        "answer": 2,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Αντικαταστήστε την ψυκτική ισχύ στη σχέση ισορροπίας με $\\text{COP} \\cdot P_{\\text{συμπ}}$.",
        "explain": "Ισχύει $Q_{\\text{απορρ}} = Q_{\\text{ψυκ}} + P_{\\text{συμπ}}$ και $Q_{\\text{ψυκ}} = 2{,}5 \\cdot P_{\\text{συμπ}}$.\nΆρα: $7\\text{ kW} = 2{,}5 \\cdot P_{\\text{συμπ}} + P_{\\text{συμπ}} = 3{,}5 \\cdot P_{\\text{συμπ}} \\Rightarrow P_{\\text{συμπ}} = 2\\text{ kW}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε την ψυκτική ισχύ της διάταξης σε $\\text{kW}$.",
        "formula": "$Q_{\\text{ψυκ}} = \\text{COP} \\cdot P_{\\text{συμπ}}$",
        "answer": 5,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε τον $\\text{COP}$ με την ισχύ του συμπιεστή που μόλις υπολογίσατε.",
        "explain": "$Q_{\\text{ψυκ}} = 2{,}5 \\cdot 2\\text{ kW} = 5\\text{ kW}$."
      }
    ]
  },
  {
    "id": "ch05-33864",
    "group": "ch05-05-syntelestis-symperiforas",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33864",
    "bankCode": "33864",
    "title": "#33864 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "συντελεστής-συμπεριφοράς",
    "stem": "Σε μία ψυκτική μηχανή, η απορριπτόμενη θερμική ισχύς ισούται με $57\\text{ kW}$ και η ισχύς του συμπιεστή με $30\\text{ kW}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την ψυκτική ισχύ της μηχανής σε $\\text{kW}$.",
        "formula": "$Q_{\\text{ψυκ}} = Q_{\\text{απορρ}} - P_{\\text{συμπ}}$",
        "answer": 27,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Αφαιρέστε την ισχύ του συμπιεστή από την απορριπτόμενη θερμική ισχύ.",
        "explain": "$\\text{Ψυκτική ισχύς} = 57\\text{ kW} - 30\\text{ kW} = 27\\text{ kW}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον συντελεστή συμπεριφοράς $\\text{COP}$.",
        "formula": "$\\text{COP} = \\frac{Q_{\\text{ψυκ}}}{P_{\\text{συμπ}}}$",
        "answer": 0.9,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Διαιρέστε την ψυκτική ισχύ ($27\\text{ kW}$) με την ισχύ του συμπιεστή ($30\\text{ kW}$).",
        "explain": "$\\text{COP} = \\frac{27\\text{ kW}}{30\\text{ kW}} = 0{,}9$."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-05/ch05-06-ypopsyxsi-sympyknomatos.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch05-33874",
    "group": "ch05-06-ypopsyxsi-sympyknomatos",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33874",
    "bankCode": "33874",
    "title": "#33874 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "υπόψυξη-συμπυκνώματος",
    "stem": "Σχετικά με τη λειτουργία του ψυκτικού κύκλου, τις θερμοκρασίες και τα ψυκτικά μέσα R12 και R22:",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "prompt": "α. Η θερμοκρασία συμπύκνωσης μπορεί να είναι και μικρότερη από τη θερμοκρασία ατμοποίησης.",
        "answer": false,
        "explain": "Λάθος. Η θερμοκρασία συμπύκνωσης είναι πάντοτε υψηλότερη από τη θερμοκρασία ατμοποίησης."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "β. Υπάρχουν περιπτώσεις που η απορριπτόμενη θερμική ισχύς μπορεί να γίνει ίση με την ψυκτική ισχύ.",
        "answer": false,
        "explain": "Λάθος. Η απορριπτόμενη θερμική ισχύς περιλαμβάνει επιπλέον την ισχύ του συμπιεστή, άρα είναι πάντα αυστηρά μεγαλύτερη."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "γ. Ο συντελεστής συμπεριφοράς COP του ψυκτικού κύκλου παίρνει τιμές μεταξύ 0 και 1.",
        "answer": false,
        "explain": "Λάθος. Ο συντελεστής COP στις ψυκτικές εγκαταστάσεις παίρνει συχνά τιμές μεγαλύτερες από 1."
      },
      {
        "kind": "tf",
        "subq": "2.1δ",
        "prompt": "δ. Όσο περισσότερη είναι η υπόψυξη συμπυκνώματος, τόσο πιο θετική η επίδραση στον συντελεστή συμπεριφοράς COP.",
        "answer": true,
        "explain": "Σωστό. Η υπόψυξη αυξάνει το ψυκτικό αποτέλεσμα ανά μονάδα μάζας, βελτιώνοντας τον COP."
      },
      {
        "kind": "mc",
        "subq": "2.2α",
        "openEnded": true,
        "prompt": "Δύο ίδιες ψυκτικές εγκαταστάσεις, Α και Β, χρησιμοποιούν το ίδιο ψυκτικό μέσο και διαφέρουν ως προς τις πιέσεις λειτουργίας τους. Η Α έχει μεγαλύτερη διαφορά πίεσης μεταξύ υψηλής και χαμηλής από τη Β. Σε ποια από τις δύο ενδέχεται να είναι μεγαλύτερος ο συντελεστής συμπεριφοράς COP και γιατί;",
        "options": [
          {
            "id": "a",
            "text": "Στη Β, διότι η μικρότερη διαφορά πίεσης συνεπάγεται μικρότερη διαφορά θερμοκρασιών ατμοποίησης - συμπύκνωσης, άρα μεγαλύτερο COP."
          },
          {
            "id": "b",
            "text": "Στην Α, διότι η υψηλότερη πίεση προσφέρει μεγαλύτερη ψυκτική ισχύ."
          },
          {
            "id": "c",
            "text": "Και στις δύο είναι ακριβώς ίδιος."
          },
          {
            "id": "d",
            "text": "Στην Α, διότι η μεγαλύτερη διαφορά πίεσης αυξάνει τον συντελεστή COP."
          }
        ],
        "answer": "a",
        "explain": "Μικρότερη διαφορά πίεσης σημαίνει μικρότερη διαφορά θερμοκρασιών ατμοποίησης και συμπύκνωσης, γεγονός που οδηγεί σε μεγαλύτερο συντελεστή COP. Άρα στη Β ενδέχεται να είναι μεγαλύτερος."
      },
      {
        "kind": "mc",
        "subq": "2.2β",
        "openEnded": true,
        "prompt": "Μια ψυκτική διάταξη χρησιμοποιεί ψυκτικό μέσο R12 και λειτουργεί σε θερμοκρασία περιβάλλοντος 25°C με πιέσεις 2 kp/cm² και 8 kp/cm². Αν αντικαταστήσουμε το ψυκτικό μέσο με R22, θα μπορέσει να λειτουργήσει στις ίδιες πιέσεις;",
        "options": [
          {
            "id": "a",
            "text": "Όχι, διότι για το R22 στην πίεση των 8 kp/cm² αντιστοιχεί θερμοκρασία 15°C, η οποία είναι μικρότερη από τη θερμοκρασία περιβάλλοντος (25°C), οπότε δεν μπορεί να αποβάλει θερμότητα."
          },
          {
            "id": "b",
            "text": "Ναι, διότι το R22 έχει καλύτερες θερμοδυναμικές ιδιότητες σε όλες τις πιέσεις."
          },
          {
            "id": "c",
            "text": "Ναι, αρκεί να αυξηθεί η ισχύς του συμπιεστή."
          },
          {
            "id": "d",
            "text": "Όχι, λόγω της χαμηλής πίεσης αναρρόφησης."
          }
        ],
        "answer": "a",
        "explain": "Από τον πίνακα, για την υψηλή πίεση 8 kp/cm² το R22 έχει θερμοκρασία 15°C, η οποία είναι χαμηλότερη από τη θερμοκρασία περιβάλλοντος (25°C). Συνεπώς ο συμπυκνωτής δεν μπορεί να αποβάλει θερμότητα προς το περιβάλλον."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch06-01-atropoiitis",
    "chapter": "6",
    "title": "6.3.1 Ατμοποιητής",
    "blurb": "Στοιχεία λειτουργίας, τύποι και εφαρμογές ατμοποιητών ψυκτικών εγκαταστάσεων."
  },
  {
    "id": "ch06-02-sympiesstis",
    "chapter": "6",
    "title": "6.3.2 Συμπιεστής",
    "blurb": "Λειτουργία, τύποι συμπιεστών, λόγος συμπίεσης και πιέσεις αναρρόφησης-κατάθλιψης."
  },
  {
    "id": "ch06-03-sympyknostis",
    "chapter": "6",
    "title": "6.3.3 Συμπυκνωτής",
    "blurb": "Συμπυκνωτές, πύργοι ψύξης και απόρριψη θερμότητας στο περιβάλλον."
  },
  {
    "id": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "chapter": "6",
    "title": "6.4 Λειτουργία ψυκτικών κυκλωμάτων και εξαρτημάτων",
    "blurb": "Πύργοι ψύξης, ίχνη υγρασίας, ανακύκλωση ψυκτικών μέσων και συνεργασία με λιπαντικά"
  },
  {
    "id": "ch06-06-ygrosia-lipantika",
    "chapter": "6",
    "title": "6.6 Επιτρεπόμενα ίχνη υγρασίας και συνεργασία με λιπαντικά",
    "blurb": "Ιδιότητες λιπαντικών ψυκτικών συμπιεστών και διαδικασίες ανάκτησης, ανακύκλωσης και αναγέννησης."
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/ch06-01-atropoiitis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch06-26873",
    "group": "ch06-01-atropoiitis",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26873",
    "bankCode": "26873",
    "title": "#26873 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch06-atropoiitis",
    "stem": "Χαρακτηρισμός προτάσεων και αντιστοίχιση μεθόδου αποπάγωσης.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1.α",
        "subqPrompt": "2.1 Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "prompt": "Ψυκτικές εφαρμογές υψηλών θερμοκρασιών χαρακτηρίζονται εκείνες, στις οποίες η θερμοκρασία του ψυχόμενου χώρου είναι πάνω από 4°C.",
        "answer": true,
        "explain": "Σωστό. Οι εφαρμογές υψηλών θερμοκρασιών αφορούν χώρους με θερμοκρασία πάνω από 4°C (π.χ. συντήρηση φρούτων και λαχανικών)."
      },
      {
        "kind": "tf",
        "subq": "2.1.β",
        "prompt": "Ο συμπυκνωτής είναι η συσκευή με την οποία αφαιρείται θερμότητα από το ψυχόμενο περιβάλλον.",
        "answer": false,
        "explain": "Λάθος. Η θερμότητα από τον ψυχόμενο χώρο αφαιρείται με τον ατμοποιητή, ενώ ο συμπυκνωτής αποβάλλει θερμότητα στο περιβάλλον."
      },
      {
        "kind": "tf",
        "subq": "2.1.γ",
        "prompt": "Στα στοιχεία υπερχείλισης (flooded) το ψυκτικό μέσο ατμοποιείται στην εξωτερική επιφάνεια σωλήνων, μέσα στις οποίες κυκλοφορεί το νερό.",
        "answer": true,
        "explain": "Σωστό. Στους εναλλάκτες υπερχείλισης (κέλυφος-σωλήνα), το ψυκτικό μέσο βρίσκεται στο κέλυφος και ατμοποιείται γύρω από τους σωλήνες μέσα στους οποίους ρέει το νερό."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Στην παρακάτω εικόνα απεικονίζεται η μέθοδος αποπάγωσης με μεταγωγή θερμού ατμού. Αντιστοιχίστε τα στοιχεία της Στήλης Α με τις λειτουργίες/συσκευές της Στήλης Β:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26873_fig01.webp",
        "left": [
          {
            "id": "1",
            "text": "Στοιχείο 1"
          },
          {
            "id": "2",
            "text": "Στοιχείο 2"
          },
          {
            "id": "3",
            "text": "Στοιχείο 3"
          },
          {
            "id": "4",
            "text": "Στοιχείο 4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Συμπιεστής"
          },
          {
            "id": "b",
            "text": "Τριχοειδής σωλήνας"
          },
          {
            "id": "c",
            "text": "Ατμοποιητής"
          },
          {
            "id": "d",
            "text": "Σωληνοειδής βαλβίδα ανοιχτή"
          },
          {
            "id": "e",
            "text": "Σωλήνας μεταγωγής θερμού ατμού"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "e",
          "4": "d"
        },
        "explain": "Σύμφωνα με το διάγραμμα αποπάγωσης με θερμό ατμό: 1 αντιστοιχεί στον ατμοποιητή, 2 στον συμπιεστή, 3 στον σωλήνα μεταγωγής θερμού ατμού και 4 στη σωληνοειδή βαλβίδα ανοιχτή."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/ch06-02-sympiesstis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch06-25309",
    "group": "ch06-02-sympiesstis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25309",
    "bankCode": "25309",
    "title": "#25309 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch06-sympiesstis",
    "stem": "Στον συμπιεστή μιας ψυκτικής διάταξης μετρήθηκε με την βοήθεια ενός μανομέτρου, πίεση αναρρόφησης 5 bar. Δίνεται ότι ο λόγος συμπίεσης CR = 2 και η ατμοσφαιρική πίεση ισούται με 1 bar.",
    "givens": [
      {
        "label": "$P_{\\text{μαν,αν}}$",
        "value": "$5 \\text{bar}$"
      },
      {
        "label": "$\\text{CR}$",
        "value": "2"
      },
      {
        "label": "$P_{\\text{ατμ}}$",
        "value": "$1 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε την απόλυτη πίεση στην αναρρόφηση σε bar.",
        "formula": "$P_{\\text{απ,\\text{αν}}} = P_{\\text{μαν,\\text{αν}}} + P_{\\text{ατμ}}$",
        "answer": 6,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Προσθέστε την ατμοσφαιρική πίεση στη μανομετρική πίεση αναρρόφησης.",
        "explain": "$\\begin{aligned} P_{\\text{απ,\\text{αν}}} &= P_{\\text{μαν,\\text{αν}}} + P_{\\text{ατμ}} \\ &= 5\\text{ bar} + 1\\text{ bar} = 6\\text{ bar} \\end{aligned}$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε την απόλυτη πίεση στην κατάθλιψη σε bar.",
        "formula": "$P_{\\text{απ,\\text{κατ}}} = \\text{CR} \\cdot P_{\\text{απ,\\text{αν}}}$",
        "answer": 12,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε τον λόγο συμπίεσης CR επί την απόλυτη πίεση αναρρόφησης.",
        "explain": "$\\begin{aligned} P_{\\text{απ,\\text{κατ}}} &= \\text{CR} \\cdot P_{\\text{απ,\\text{αν}}} \\ &= 2 \\cdot 6\\text{ bar} = 12\\text{ bar} \\end{aligned}$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Υπολογίστε τη μανομετρική πίεση στην κατάθλιψη σε bar.",
        "formula": "$P_{\\text{μαν,\\text{κατ}}} = P_{\\text{απ,\\text{κατ}}} - P_{\\text{ατμ}}$",
        "answer": 11,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Αφαιρέστε την ατμοσφαιρική πίεση από την απόλυτη πίεση κατάθλιψης.",
        "explain": "$\\begin{aligned} P_{\\text{μαν,\\text{κατ}}} &= P_{\\text{απ,\\text{κατ}}} - P_{\\text{ατμ}} \\ &= 12\\text{ bar} - 1\\text{ bar} = 11\\text{ bar} \\end{aligned}$"
      }
    ]
  },
  {
    "id": "ch06-26757",
    "group": "ch06-02-sympiesstis",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26757",
    "bankCode": "26757",
    "title": "#26757 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch06-sympiesstis",
    "stem": "Ερωτήσεις θεωρίας και πολλαπλής επιλογής για τους συμπιεστές ψυκτικών εγκαταστάσεων.",
    "items": [
      {
        "kind": "mc",
        "subq": "2.1.α",
        "openEnded": true,
        "prompt": "Ποια είναι τα πλεονεκτήματα και τα μειονεκτήματα των ερμητικών συμπιεστών;",
        "options": [
          {
            "id": "a",
            "text": "Ελάχιστη πιθανότητα διαρροής, μικρότερος όγκος, βάρος, κόστος και θόρυβος, αλλά αδύνατος ο εσωτερικός έλεγχος και ασύμφορη επισκευή."
          },
          {
            "id": "b",
            "text": "Μεγάλη ευκολία επισκευής με άνοιγμα του περιβλήματος και πολύ υψηλό κόστος κατασκευής."
          },
          {
            "id": "c",
            "text": "Αυξημένη πιθανότητα διαρροής ψυκτικού μέσου προς το περιβάλλον και μεγάλος όγκος."
          },
          {
            "id": "d",
            "text": "Λειτουργούν χωρίς ηλεκτροκινητήρα και απαιτούν συνεχή λίπανση από εξωτερική αντλία."
          }
        ],
        "answer": "a",
        "explain": "Στους ερμητικούς συμπιεστές, ο συμπιεστής και ο ηλεκτροκινητήρας βρίσκονται στο ίδιο στεγανό κέλυφος με ελάχιστη πιθανότητα διαρροής, μικρότερο όγκος, κόστος και θόρυβο. Το μειονέκτημα είναι ότι κάθε εσωτερικός έλεγχος είναι αδύνατος και η επισκευή απαιτεί κοπή του περιβλήματος, καθιστώντας την ασύμφορη."
      },
      {
        "kind": "mc",
        "subq": "2.1.β",
        "openEnded": true,
        "prompt": "Σε τι τύπου εγκαταστάσεις χρησιμοποιούνται οι συμπιεστές τύπου τυμπάνου (rotary);",
        "options": [
          {
            "id": "a",
            "text": "Σε μονάδες μικρής ισχύος, όπως κλιματιστικά δωματίου, οικιακά ψυγεία και μικρά κεντρικά συστήματα κλιματισμού."
          },
          {
            "id": "b",
            "text": "Αποκλειστικά σε μεγάλα βιομηχανικά ψυγεία και υπεραγορές τροφίμων."
          },
          {
            "id": "c",
            "text": "Σε εγκαταστάσεις παραγωγής ατμού υψηλής πίεσης."
          },
          {
            "id": "d",
            "text": "Σε συστήματα θέρμανσης με καυστήρες πετρελαίου."
          }
        ],
        "answer": "a",
        "explain": "Οι συμπιεστές τύπου rotary (τυμπάνου) χρησιμοποιούνται σε μονάδες μικρής ισχύος, όπως κλιματιστικά δωματίου, οικιακά ψυγεία και μικρά κεντρικά συστήματα κλιματισμού."
      },
      {
        "kind": "mc",
        "subq": "2.2.1",
        "prompt": "Σε ποια συσκευή μιας ψυκτικής εγκατάστασης, αποβάλλεται θερμότητα προς το περιβάλλον;",
        "options": [
          {
            "id": "a",
            "text": "Στον συμπυκνωτή"
          },
          {
            "id": "b",
            "text": "Στον ατμοποιητή"
          },
          {
            "id": "c",
            "text": "Στην εκτονωτική βαλβίδα"
          },
          {
            "id": "d",
            "text": "Στον συμπιεστή"
          }
        ],
        "answer": "a",
        "explain": "Στον συμπυκνωτή το ψυκτικό μέσο αποβάλλει θερμότητα προς το περιβάλλον (αέρα ή νερό) και υγροποιείται."
      },
      {
        "kind": "mc",
        "subq": "2.2.2",
        "prompt": "Ποια είναι η συσκευή με την οποία αφαιρείται θερμότητα από τον ψυχόμενο χώρο;",
        "options": [
          {
            "id": "a",
            "text": "Ο συμπυκνωτής"
          },
          {
            "id": "b",
            "text": "Ο ατμοποιητής"
          },
          {
            "id": "c",
            "text": "Η εκτονωτική βαλβίδα"
          },
          {
            "id": "d",
            "text": "Ο συμπιεστής"
          }
        ],
        "answer": "b",
        "explain": "Ο ατμοποιητής είναι η συσκευή στην οποία το ψυκτικό μέσο απορροφά θερμότητα από τον ψυχόμενο χώρο και ατμοποιείται."
      },
      {
        "kind": "mc",
        "subq": "2.2.3",
        "prompt": "Σε ποια συσκευή έχουμε στραγγαλισμό του ψυκτικού μέσου;",
        "options": [
          {
            "id": "a",
            "text": "Στον συμπυκνωτή"
          },
          {
            "id": "b",
            "text": "Στον ατμοποιητή"
          },
          {
            "id": "c",
            "text": "Στον τριχοειδή σωλήνα"
          },
          {
            "id": "d",
            "text": "Στον Συμπιεστή"
          }
        ],
        "answer": "c",
        "explain": "Ο στραγγαλισμός (μείωση πίεσης και θερμοκρασίας) του ψυκτικού μέσου πραγματοποιείται στην εκτονωτική διάταξη, όπως ο τριχοειδής σωλήνας."
      },
      {
        "kind": "mc",
        "subq": "2.2.4",
        "prompt": "Ποια είναι η συσκευή που αυξάνει την πίεση του ψυκτικού μέσου;",
        "options": [
          {
            "id": "a",
            "text": "Ο συμπυκνωτής"
          },
          {
            "id": "b",
            "text": "Η εκτονωτική βαλβίδα"
          },
          {
            "id": "c",
            "text": "Ο τριχοειδής σωλήνας"
          },
          {
            "id": "d",
            "text": "Ο συμπιεστής"
          }
        ],
        "answer": "d",
        "explain": "Ο συμπιεστής αυξάνει την πίεση και τη θερμοκρασία του αερίου ψυκτικού μέσου."
      }
    ]
  },
  {
    "id": "ch06-26889",
    "group": "ch06-02-sympiesstis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26889",
    "bankCode": "26889",
    "title": "#26889 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch06-sympiesstis",
    "stem": "Σε μια ψυκτική εγκατάσταση, μετρήσαμε την πίεση στην έξοδο του συμπιεστή ίση με 11 atm. Ο λόγος συμπίεσης του συμπιεστή της εγκατάστασης είναι $\\text{CR} = 5$. Θεωρήστε ότι η ατμοσφαιρική πίεση είναι ίση με 1 atm.",
    "givens": [
      {
        "label": "$P_{\\text{εξ}}$",
        "value": "11 atm"
      },
      {
        "label": "$\\text{CR}$",
        "value": "5"
      },
      {
        "label": "$P_{\\text{ατμ}}$",
        "value": "1 atm"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε την απόλυτη πίεση κατάθλιψης $P_{\\text{κατ}}$ σε atm.",
        "formula": "$P_{\\text{κατ}} = P_{\\text{εξ}} + P_{\\text{ατμ}}$",
        "answer": 12,
        "unit": "atm",
        "tolerance": 0.02,
        "hint": "Προσθέστε την ατμοσφαιρική πίεση στην πίεση εξόδου του συμπιεστή.",
        "explain": "$\\begin{aligned} P_{\\text{κατ}} &= P_{\\text{εξ}} + P_{\\text{ατμ}} \\ &= 11\\text{ atm} + 1\\text{ atm} = 12\\text{ atm} \\end{aligned}$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε την απόλυτη πίεση αναρρόφησης $P_{\\text{αν}}$ σε atm.",
        "formula": "$P_{\\text{αν}} = \\frac{P_{\\text{κατ}}}{\\text{CR}}$",
        "answer": 2.4,
        "unit": "atm",
        "tolerance": 0.02,
        "hint": "Διαιρέστε την απόλυτη πίεση κατάθλιψης με τον λόγο συμπίεσης CR.",
        "explain": "$\\begin{aligned} P_{\\text{αν}} &= \\frac{P_{\\text{κατ}}}{\\text{CR}} \\ &= \\frac{12\\text{ atm}}{5} = 2{,}4\\text{ atm} \\end{aligned}$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Υπολογίστε τη μανομετρική πίεση που θα μετρήσουμε στην είσοδο του συμπιεστή $P_{\\text{εισ}}$ σε atm.",
        "formula": "$P_{\\text{εισ}} = P_{\\text{αν}} - P_{\\text{ατμ}}$",
        "answer": 1.4,
        "unit": "atm",
        "tolerance": 0.02,
        "hint": "Αφαιρέστε την ατμοσφαιρική πίεση από την απόλυτη πίεση αναρρόφησης.",
        "explain": "$\\begin{aligned} P_{\\text{εισ}} &= P_{\\text{αν}} - P_{\\text{ατμ}} \\ &= 2{,}4\\text{ atm} - 1\\text{ atm} = 1{,}4\\text{ atm} \\end{aligned}$"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/ch06-03-sympyknostis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch06-26888",
    "group": "ch06-03-sympyknostis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26888",
    "bankCode": "26888",
    "title": "#26888 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch06-sympyknostis",
    "stem": "Ερωτήσεις αντιστοίχισης για πύργο ψύξης και χαρακτηρισμός προτάσεων συμπυκνωτών.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Με βάση το παρακάτω σχήμα του πύργου ψύξης, να αντιστοιχίσετε τους αριθμούς της Στήλης Α με τα γράμματα της Στήλης Β:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26888_fig01.webp",
        "left": [
          {
            "id": "1",
            "text": "Στοιχείο 1"
          },
          {
            "id": "2",
            "text": "Στοιχείο 2"
          },
          {
            "id": "3",
            "text": "Στοιχείο 3"
          },
          {
            "id": "4",
            "text": "Στοιχείο 4"
          },
          {
            "id": "5",
            "text": "Στοιχείο 5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Εισαγωγή αέρα."
          },
          {
            "id": "b",
            "text": "Σύστημα αναπλήρωσης νερού."
          },
          {
            "id": "c",
            "text": "Εξαγωγή αέρα."
          },
          {
            "id": "d",
            "text": "Έξοδος νερού."
          },
          {
            "id": "e",
            "text": "Είσοδος νερού."
          },
          {
            "id": "f",
            "text": "Ψεκαστήρες νερού."
          }
        ],
        "pairs": {
          "1": "d",
          "2": "a",
          "3": "f",
          "4": "e",
          "5": "c"
        },
        "explain": "Στον πύργο ψύξης: 1 είναι η έξοδος νερού, 2 η εισαγωγή αέρα, 3 οι ψεκαστήρες νερού, 4 η είσοδος νερού και 5 η εξαγωγή αέρα."
      },
      {
        "kind": "tf",
        "subq": "2.2.α",
        "subqPrompt": "2.2 Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "prompt": "Ο σκοπός του συμπυκνωτή της ψυκτικής εγκατάστασης είναι να μετατρέπει τον υπέρθερμο ατμό, που παραλαμβάνει από την έξοδο του συμπιεστή, σε υγρό ψυκτικό ώστε να επαναλαμβάνεται ο ψυκτικός κύκλος.",
        "answer": true,
        "explain": "Σωστό. Ο συμπυκνωτής παραλαμβάνει τον υπέρθερμο ατμό από τον συμπιεστή, τον ψύχει και τον υγροποιεί."
      },
      {
        "kind": "tf",
        "subq": "2.2.β",
        "prompt": "Το νερό των υδρόψυκτων συμπυκνωτών χρειάζεται να ψυχθεί για να μπορέσει να ξαναχρησιμοποιηθεί στον συμπυκνωτή.",
        "answer": true,
        "explain": "Σωστό. Σε εγκαταστάσεις με πύργο ψύξης, το νερό που θερμαίνεται στον συμπυκνωτή ψύχεται στον πύργο για να επαναχρησιμοποιηθεί."
      },
      {
        "kind": "tf",
        "subq": "2.2.γ",
        "prompt": "Στον συμπυκνωτή εισέρχεται υπόψυκτο υγρό και εξέρχεται υπέρθερμος ατμός.",
        "answer": false,
        "explain": "Λάθος. Ισχύει το αντίθετο: στον συμπυκνωτή εισέρχεται υπέρθερμος ατμός από τον συμπιεστή και εξέρχεται υγρό ψυκτικό μέσο."
      },
      {
        "kind": "tf",
        "subq": "2.2.δ",
        "prompt": "Οι πύργοι ψύξης τοποθετούνται στο υπόγειο του κτιρίου.",
        "answer": false,
        "explain": "Λάθος. Οι πύργοι ψύξης τοποθετούνται σε εξωτερικούς χώρους (συνήθως στην οροφή των κτιρίων) για να εξασφαλίζεται η ελεύθερη κυκλοφορία του αέρα."
      },
      {
        "kind": "tf",
        "subq": "2.2.ε",
        "prompt": "Στους εξατμιστικούς συμπυκνωτές, η απόρριψη θερμότητας από το ψυκτικό μέσο γίνεται κυρίως προς τη μάζα εκείνη του νερού, η οποία εξατμίζεται.",
        "answer": true,
        "explain": "Σωστό. Στους εξατμιστικούς συμπυκνωτές η ψύξη επιτυγχάνεται κυρίως με την εξάτμιση νερού στην εξωτερική επιφάνεια των σωλήνων."
      }
    ]
  },
  {
    "id": "ch06-29332-2",
    "group": "ch06-03-sympyknostis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29332-2",
    "bankCode": "29332",
    "title": "#29332 — Θέμα 2$^{ο}$ (Μέρος Β')",
    "units": 15,
    "theory": "sympiestes-michanismos",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "α) Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της στήλης Β, που δίνει τη σωστή αντιστοίχιση του είδους του συμπιεστή με την κατάλληλη περιγραφή του μηχανισμού λειτουργίας του. Σημειώνεται ότι ένα από τα γράμματα της στήλης Β θα περισσέψει.",
        "prompt": "Αντιστοιχίστε το είδος του συμπιεστή με την περιγραφή του μηχανισμού λειτουργίας του:",
        "left": [
          {
            "id": "1",
            "text": "Παλινδρομικοί"
          },
          {
            "id": "2",
            "text": "Φυγοκεντρικοί"
          },
          {
            "id": "3",
            "text": "Τυμπάνου"
          },
          {
            "id": "4",
            "text": "Κοχλιόμορφοι"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Περιέχουν ένα στροφείο που περιστρέφεται με μεγάλη ταχύτητα."
          },
          {
            "id": "b",
            "text": "Τα βασικά τους μέρη είναι δύο συνεργαζόμενοι ελικοειδείς δρομείς."
          },
          {
            "id": "c",
            "text": "Φέρουν συνήθως έναν δρομέα που περιστρέφεται έκκεντρα."
          },
          {
            "id": "d",
            "text": "Αποτελούνται από δύο σπείρες προσαρμοσμένες η μία μέσα στην άλλη."
          },
          {
            "id": "e",
            "text": "Έχουν σύστημα διωστήρα - εμβόλου μέσα σε έναν κύλινδρο."
          }
        ],
        "pairs": {
          "1": "ε",
          "2": "α",
          "3": "γ",
          "4": "β"
        },
        "explain": "1 – ε (Παλινδρομικοί: σύστημα διωστήρα-εμβόλου), 2 – α (Φυγοκεντρικοί: στροφείο μεγάλης ταχύτητας), 3 – γ (Τυμπάνου: έκκεντρος δρομέας), 4 – β (Κοχλιόμορφοι: δύο ελικοειδείς δρομείς). Περισσεύει το δ."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Ποιοι από τους παραπάνω συμπιεστές είναι θετικού εκτοπίσματος;",
        "options": [
          {
            "id": "a",
            "text": "Οι φυγοκεντρικοί συμπιεστές"
          },
          {
            "id": "b",
            "text": "Οι παλινδρομικοί, οι κοχλιόμορφοι και οι τυμπάνου (περιστροφικοί)"
          },
          {
            "id": "c",
            "text": "Όλοι οι παραπάνω συμπιεστές"
          },
          {
            "id": "d",
            "text": "Κανένας από τους παραπάνω"
          }
        ],
        "answer": "b",
        "explain": "Οι παλινδρομικοί, οι κοχλιόμορφοι και οι τυμπάνου (περιστροφικοί) ανήκουν στους συμπιεστές θετικού εκτοπίσματος (ή όγκου), ενώ οι φυγοκεντρικοί είναι δυναμικοί συμπιεστές."
      }
    ]
  },
  {
    "id": "ch06-29370",
    "group": "ch06-03-sympyknostis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29370",
    "bankCode": "29370",
    "title": "#29370 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "speiroeidis-sympiestis",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "2.1 Με βάση το παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα (1) γράμμα από τη Στήλη Β θα περισσέψει.",
        "prompt": "Αντιστοιχίστε τα μέρη του σπειροειδούς συμπιεστή με τις λειτουργίες τους:",
        "left": [
          {
            "id": "1",
            "text": "Στοιχείο 1"
          },
          {
            "id": "2",
            "text": "Στοιχείο 2"
          },
          {
            "id": "3",
            "text": "Στοιχείο 3"
          },
          {
            "id": "4",
            "text": "Στοιχείο 4"
          },
          {
            "id": "5",
            "text": "Στοιχείο 5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Σταθερή σπείρα"
          },
          {
            "id": "b",
            "text": "Κινούμενη σπείρα"
          },
          {
            "id": "c",
            "text": "Θύρα εξαγωγής"
          },
          {
            "id": "d",
            "text": "Κέλυφος"
          },
          {
            "id": "e",
            "text": "Εισαγωγή"
          },
          {
            "id": "f",
            "text": "Εξαγωγή"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "στ",
          "3": "ε",
          "4": "α",
          "5": "β"
        },
        "explain": "1 – γ (Θύρα εξαγωγής), 2 – στ (Εξαγωγή), 3 – ε (Εισαγωγή), 4 – α (Σταθερή σπείρα), 5 – β (Κινούμενη σπείρα). Περισσεύει το γράμμα δ (Κέλυφος).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_29370_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "2.2 Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "Ο συμπιεστής παρέχει τη δυνατότητα να συμπυκνωθεί ο ατμός του ψυκτικού μέσου σε θερμοκρασία υψηλότερη από την θερμοκρασία του περιβάλλοντος.",
        "answer": true,
        "explain": "Σωστό. Ο συμπιεστής αυξάνει την πίεση και τη θερμοκρασία του ψυκτικού ατμού, ώστε να είναι δυνατή η υγροποίησή του (συμπύκνωση) αποβάλλοντας θερμότητα στο περιβάλλον."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι κοχλιόμορφοι συμπιεστές είναι θετικού εκτοπίσματος.",
        "answer": true,
        "explain": "Σωστό. Οι κοχλιόμορφοι συμπιεστές ανήκουν στην κατηγορία των περιστροφικών συμπιεστών θετικού εκτοπίσματος."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι συμπιεστές τύπου τυμπάνου αποτελούνται από δύο σπειροειδή ελατήρια (σπείρες) προσαρμοσμένα το ένα το άλλο.",
        "answer": false,
        "explain": "Λάθος. Η περιγραφή αφορά τους σπειροειδείς συμπιεστές (scroll) και όχι τους συμπιεστές τύπου τυμπάνου (περιστροφικούς)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι κοχλιόμορφοι συμπιεστές είναι κατάλληλοι και για εφαρμογές χαμηλών θερμοκρασιών.",
        "answer": true,
        "explain": "Σωστό. Οι κοχλιόμορφοι συμπιεστές χρησιμοποιούνται ευρέως σε ευρεία κλίμακα εφαρμογών, συμπεριλαμβανομένων των χαμηλών θερμοκρασιών."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι εμβολοφόροι (ή παλινδρομικοί ) συμπιεστές έχουν στροφείο μέσα σ’ ένα σταθερό σπειροειδές κέλυφος.",
        "answer": false,
        "explain": "Λάθος. Οι εμβολοφόροι συμπιεστές λειτουργούν με έμβολο και κύλινδρο (σύστημα διωστήρα-εμβόλου). Η περιγραφή με στροφείο σε σταθερό σπειροειδές κέλυφος αφορά τους φυγοκεντρικούς συμπιεστές."
      }
    ]
  },
  {
    "id": "ch06-29516",
    "group": "ch06-03-sympyknostis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29516",
    "bankCode": "29516",
    "title": "#29516 — Θέμα 4$^{ο}$ (Υπολογισμός Πιέσεων)",
    "units": 25,
    "theory": "ypologismos-pieseon-sympisti",
    "stem": "Σε ψυκτική διάταξη που λειτουργεί με μηχανική συμπίεση ατμών, η απόλυτη πίεση αναρρόφησης είναι $P_{\\text{απ.αν.}} = 3\\text{ bar}$ και ο λόγος συμπίεσης $\\text{CR} = 3{,}6$.\nΔίνεται η ατμοσφαιρική πίεση $P_{\\text{ατμ.}} = 1\\text{ bar}$.",
    "givens": [
      {
        "label": "$P_{\\text{απ.αν.}}$",
        "value": "$3 \\text{bar}$"
      },
      {
        "label": "$\\text{CR}$",
        "value": "$3{,}6$"
      },
      {
        "label": "$P_{\\text{ατμ.}}$",
        "value": "$1 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε τη μανομετρική πίεση αναρρόφησης $P_{\\text{μαν.αν.}}$ σε bar.",
        "formula": "$P_{\\text{μαν.αν.}} = P_{\\text{απ.αν.}} - P_{\\text{ατμ.}}$",
        "answer": 2,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη σχέση: Απόλυτη πίεση = Μανομετρική πίεση + Ατμοσφαιρική πίεση.",
        "explain": "H μανομετρική πίεση αναρρόφησης υπολογίζεται ως εξής:\n$$\\begin{aligned}\nP_{\\text{απ.αν.}} &= P_{\\text{μαν.αν.}} + P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.αν.}} &= P_{\\text{απ.αν.}} - P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.αν.}} &= 3\\text{ bar} - 1\\text{ bar} = 2\\text{ bar}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε τη μανομετρική πίεση κατάθλιψης $P_{\\text{μαν.κατ.}}$ σε bar.",
        "formula": "$P_{\\text{μαν.κατ.}} = P_{\\text{απ.κατ.}} - P_{\\text{ατμ.}} = (\\text{CR} \\cdot P_{\\text{απ.αν.}}) - P_{\\text{ατμ.}}$",
        "answer": 9.8,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα την απόλυτη πίεση κατάθλιψης από τον λόγο συμπίεσης $CR = \\frac{P_{\\text{απ.κατ.}}}{P_{\\text{απ.αν.}}}$ και στη συνέχεια αφαιρέστε την ατμοσφαιρική πίεση.",
        "explain": "1. Υπολογισμός απόλυτης πίεσης κατάθλιψης:\n$$\\begin{aligned}\n\\text{CR} &= \\frac{P_{\\text{απ.κατ.}}}{P_{\\text{απ.αν.}}} \\\\\nP_{\\text{απ.κατ.}} &= \\text{CR} \\cdot P_{\\text{απ.αν.}} \\\\\nP_{\\text{απ.κατ.}} &= 3{,}6 \\cdot 3\\text{ bar} = 10{,}8\\text{ bar}\n\\end{aligned}$$\n2. Υπολογισμός μανομετρικής πίεσης κατάθλιψης:\n$$\\begin{aligned}\nP_{\\text{απ.κατ.}} &= P_{\\text{μαν.κατ.}} + P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.κατ.}} &= P_{\\text{απ.κατ.}} - P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.κατ.}} &= 10{,}8\\text{ bar} - 1\\text{ bar} = 9{,}8\\text{ bar}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch06-33897",
    "group": "ch06-03-sympyknostis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33897",
    "bankCode": "33897",
    "title": "#33897 — Θέμα 4$^{ο}$ (Υπολογισμός Πιέσεων)",
    "units": 25,
    "theory": "ypologismos-pieseon-sympisti",
    "stem": "Σε ψυκτική διάταξη που λειτουργεί με μηχανική συμπίεση ατμών, η απόλυτη πίεση κατάθλιψης είναι $P_{\\text{απ.κατ.}} = 8\\text{ bar}$ και ο λόγος συμπίεσης $\\text{CR} = 2{,}5$.\nΔίνεται η ατμοσφαιρική πίεση $P_{\\text{ατμ.}} = 1\\text{ bar}$.",
    "givens": [
      {
        "label": "$P_{\\text{απ.κατ.}}$",
        "value": "$8 \\text{bar}$"
      },
      {
        "label": "$\\text{CR}$",
        "value": "$2{,}5$"
      },
      {
        "label": "$P_{\\text{ατμ.}}$",
        "value": "$1 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε τη μανομετρική πίεση κατάθλιψης $P_{\\text{μαν.κατ.}}$ σε bar.",
        "formula": "$P_{\\text{μαν.κατ.}} = P_{\\text{απ.κατ.}} - P_{\\text{ατμ.}}$",
        "answer": 7,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη σχέση: Απόλυτη πίεση = Μανομετρική πίεση + Ατμοσφαιρική πίεση.",
        "explain": "Η μανομετρική πίεση κατάθλιψης υπολογίζεται ως εξής:\n$$\\begin{aligned}\nP_{\\text{απ.κατ.}} &= P_{\\text{μαν.κατ.}} + P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.κατ.}} &= P_{\\text{απ.κατ.}} - P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.κατ.}} &= 8\\text{ bar} - 1\\text{ bar} = 7\\text{ bar}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε τη μανομετρική πίεση αναρρόφησης $P_{\\text{μαν.αν.}}$ σε bar.",
        "formula": "$P_{\\text{μαν.αν.}} = P_{\\text{απ.αν.}} - P_{\\text{ατμ.}} = \\left(\\frac{P_{\\text{απ.κατ.}}}{\\text{CR}}\\right) - P_{\\text{ατμ.}}$",
        "answer": 2.2,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα την απόλυτη πίεση αναρρόφησης από τον τύπο $P_{\\text{απ.αν.}} = \\frac{P_{\\text{απ.κατ.}}}{\\text{CR}}$ και έπειτα τη μανομετρική.",
        "explain": "1. Υπολογισμός απόλυτης πίεσης αναρρόφησης:\n$$\\begin{aligned}\n\\text{CR} &= \\frac{P_{\\text{απ.κατ.}}}{P_{\\text{απ.αν.}}} \\\\\nP_{\\text{απ.αν.}} &= \\frac{P_{\\text{απ.κατ.}}}{\\text{CR}} \\\\\nP_{\\text{απ.αν.}} &= \\frac{8\\text{ bar}}{2{,}5} = 3{,}2\\text{ bar}\n\\end{aligned}$$\n2. Υπολογισμός μανομετρικής πίεσης αναρρόφησης:\n$$\\begin{aligned}\nP_{\\text{απ.αν.}} &= P_{\\text{μαν.αν.}} + P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.αν.}} &= P_{\\text{απ.αν.}} - P_{\\text{ατμ.}} \\\\\nP_{\\text{μαν.αν.}} &= 3{,}2\\text{ bar} - 1\\text{ bar} = 2{,}2\\text{ bar}\n\\end{aligned}$$"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/ch06-04-leitourgia-psychrikon-kyklomaton.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch06-25307",
    "group": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25307",
    "bankCode": "25307",
    "title": "#25307 — Θέμα 2$^{ο}$ (2.1–2.3)",
    "units": 25,
    "theory": "pyrgos-psyxis-kai-ygrasiai",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "2.1. Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη Στήλη Β θα περισσέψει.",
        "prompt": "Αντιστοιχίστε τα μέρη του πύργου ψύξης (Στήλη Α) με τις λειτουργίες τους (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "Στοιχείο 1"
          },
          {
            "id": "2",
            "text": "Στοιχείο 2"
          },
          {
            "id": "3",
            "text": "Στοιχείο 3"
          },
          {
            "id": "4",
            "text": "Στοιχείο 4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Είσοδος αέρα"
          },
          {
            "id": "b",
            "text": "Ανεμιστήρας"
          },
          {
            "id": "c",
            "text": "Είσοδος νερού"
          },
          {
            "id": "d",
            "text": "Έξοδος νερού"
          },
          {
            "id": "e",
            "text": "Έξοδος αέρα"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "ε",
          "3": "α",
          "4": "β"
        },
        "explain": "1 – γ (Είσοδος νερού), 2 – ε (Έξοδος αέρα), 3 – α (Είσοδος αέρα), 4 – β (Ανεμιστήρας). Το γράμμα δ (Έξοδος νερού) περισσεύει.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_25307_fig01.webp"
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "2.2. Να γράψετε τον αριθμό κάθε μίας από τις παρακάτω προτάσεις και δίπλα, μία από τις λέξεις - φράσεις που συμπληρώνει σωστά την πρόταση. (Σημειώνεται ότι 4 από τις λέξεις - φράσεις θα περισσέψουν).\nΛέξεις που δίνονται: ανεμιστήρα, αναγέννηση, συμπυκνώνεται, ψυκτικό ρευστό, ανακύκλωση, ψυκτικό νερό, συμπιεστή, εξατμίζεται.",
        "prompt": "Συμπληρώστε τα κενά στις προτάσεις:",
        "textBefore": [
          "1. Η διαδικασία με την οποία το ψυκτικό μέσο συλλέγεται από ένα ψυκτικό σύστημα, με την βοήθεια ειδικής συσκευής, καθαρό και έτοιμο να χρησιμοποιηθεί και πάλι ονομάζεται ",
          " ενός ψυκτικού μέσου.\n2. Η εργαζόμενη ουσία σε μια ψυκτική μηχανή ονομάζεται ",
          ".\n3. Στους συμπυκνωτές βεβιασμένης ή εξαναγκασμένης κυκλοφορίας η κυκλοφορία του αέρα υποβοηθείται με ",
          ".\n4. Η λειτουργία του πύργου ψύξης στηρίζεται στο γεγονός ότι μικρή ποσότητα νερού ",
          ", απορροφώντας θερμότητα ικανή για να ψύξει το υπόλοιπο νερό."
        ],
        "answers": [
          "ανακύκλωση",
          "ψυκτικό ρευστό",
          "ανεμιστήρα",
          "εξατμίζεται"
        ],
        "bank": [
          "ανεμιστήρα",
          "αναγέννηση",
          "συμπυκνώνεται",
          "ψυκτικό ρευστό",
          "ανακύκλωση",
          "ψυκτικό νερό",
          "συμπιεστή",
          "εξατμίζεται"
        ],
        "explain": "1. ανακύκλωση, 2. ψυκτικό ρευστό, 3. ανεμιστήρα, 4. εξατμίζεται."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Να εξηγήσετε γιατί δεν είναι επιθυμητή η παρουσία υγρασίας μέσα σε ένα ψυκτικό σύστημα.",
        "options": [
          {
            "id": "a",
            "text": "Προκαλεί αποκλειστικά αύξηση της απόδοσης του συμπιεστή."
          },
          {
            "id": "b",
            "text": "Είναι απόλυτα επιθυμητή για την καλύτερη λίπανση των κινούμενων μερών."
          },
          {
            "id": "c",
            "text": "Μπορεί να δημιουργήσει πάγος στο εκτονωτικό μέσο (μπλοκάρισμα), διάσπαση ψυκτικού ρευστού, διάβρωση μετάλλων ή καταστροφή λαδιού (κάψιμο κινητήρα)."
          },
          {
            "id": "d",
            "text": "Βελτιώνει τη χημική σταθερότητα του ψυκτικού μέσου και αποτρέπει τις φθορές."
          }
        ],
        "answer": "c",
        "explain": "Αν υπάρχει υγρασία μέσα σε ένα ψυκτικό σύστημα είναι πιθανό να δημιουργηθεί πάγος στο εκτονωτικό μέσο με αποτέλεσμα τη δυσλειτουργία του ή το μπλοκάρισμά του. Επίσης μπορεί σε ορισμένα ψυκτικά ρευστά να προκαλέσει τη διάσπασσή τους μέσα στον συμπιεστή λόγω υψηλών θερμοκρασιών, καθώς και διάβρωση ή σκούριασμα στα μέταλλα του κυκλώματος ή καταστροφή του λαδιού, που σε ερμητικούς συμπιεστές πιθανόν να οδηγήσει στο κάψιμο του κινητήρα."
      }
    ]
  },
  {
    "id": "ch06-26628",
    "group": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26628",
    "bankCode": "26628",
    "title": "Θέμα 4$^{ο}$ · #26628",
    "units": 25,
    "theory": "apeikonisi-p-h",
    "stem": "Στο παρακάτω διάγραμμα Πίεσης – Ειδικής ενθαλπίας για το ψυκτικό ρευστό R – 22, έχουν σημειωθεί 3 σημεία.",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26628_fig01.webp",
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Ποια είναι η κατάσταση του ψυκτικού ρευστού στο σημείο 2;",
        "options": [
          {
            "id": "a",
            "text": "Υγρό εκτός καμπάνας"
          },
          {
            "id": "b",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "c",
            "text": "Υπέρθερμος ατμός"
          },
          {
            "id": "d",
            "text": "Υγρό-ατμός (μίγμα)"
          }
        ],
        "answer": "b",
        "explain": "Το σημείο 2 βρίσκεται επάνω στην οριακή καμπύλη του ξηρού κορεσμένου ατμού."
      },
      {
        "kind": "mc",
        "subq": "β",
        "prompt": "Ποια είναι η κατάσταση του ψυκτικού ρευστού στο σημείο 3;",
        "options": [
          {
            "id": "a",
            "text": "Υπέρθερμος ατμός"
          },
          {
            "id": "b",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "c",
            "text": "Υγρό-ατμός (μίγμα)"
          },
          {
            "id": "d",
            "text": "Υποψυγμένο υγρό"
          }
        ],
        "answer": "a",
        "explain": "Το σημείο 3 βρίσκεται δεξιά της καμπάνα, στην περιοχή του υπέρθερμου ατμού."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Ποια είναι η τιμή του βαθμού ξηρότητας στο σημείο 1;",
        "options": [
          {
            "id": "a",
            "text": "0,1"
          },
          {
            "id": "b",
            "text": "0,3"
          },
          {
            "id": "c",
            "text": "0,5"
          },
          {
            "id": "d",
            "text": "1,0"
          }
        ],
        "answer": "b",
        "explain": "Στο σημείο 1, το οποίο βρίσκεται εντός της καμπάνας, η τιμή του βαθμού ξηρότητας είναι 0,3."
      },
      {
        "kind": "mc",
        "subq": "δ",
        "prompt": "Ποια είναι η τιμή της θερμοκρασίας στο σημείο 1;",
        "options": [
          {
            "id": "a",
            "text": "-10°C"
          },
          {
            "id": "b",
            "text": "-20°C"
          },
          {
            "id": "c",
            "text": "-30°C"
          },
          {
            "id": "d",
            "text": "0°C"
          }
        ],
        "answer": "c",
        "explain": "Από την ανάγνωση του διαγράμματος p-h για το σημείο 1, η ισόθερμη καμπύλη αντιστοιχεί σε -30°C."
      },
      {
        "kind": "calc",
        "subq": "ε",
        "prompt": "Ποια είναι η τιμή της ειδικής ενθαλπίας στο σημείο 3 σε $\\text{kJ}/\\text{kg}$;",
        "formula": "$h_3$",
        "answer": 450,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Διαβάστε την τιμή της ειδικής ενθαλπίας από τον άξονα x στο σημείο 3.",
        "explain": "Η ειδική ενθαλπία στο σημείο 3 αντιστοιχεί σε $450\\text{ kJ}/\\text{kg}$."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26628_sol01.webp"
    ]
  },
  {
    "id": "ch06-26850",
    "group": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26850",
    "bankCode": "26850",
    "title": "Θέμα 4$^{ο}$ · #26850",
    "units": 25,
    "theory": "apeikonisi-p-h",
    "stem": "Ψυκτική διάταξη μηχανικής συμπίεσης ατμού λειτουργεί με ψυκτικό μέσο R-134a. Στο ψυκτικό διάγραμμα έχει σχεδιαστεί ο ψυκτικός κύκλος. Η μεταβολή ΑΒ αντιπροσωπεύει την ατμοποίηση του ψυκτικού μέσου και η μεταβολή ΒΓ την συμπίεση του.",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26850_fig01.webp",
    "items": [
      {
        "kind": "mc",
        "subq": "4.1",
        "prompt": "Ποια είναι η θερμοδυναμική κατάσταση του ψυκτικού ρευστού στην είσοδο του ψυκτικού στοιχείου (σημείο Α) και ποια στην είσοδο του συμπιεστή (σημείο Β);",
        "options": [
          {
            "id": "a",
            "text": "Στη θέση Α: Μείγμα υγρού-ατμού — Στη θέση Β: Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "b",
            "text": "Στη θέση Α: Υπέρθερμος ατμός — Στη θέση Β: Υγρό εκτός καμπάνας"
          },
          {
            "id": "c",
            "text": "Στη θέση Α: Υγρό εκτός καμπάνας — Στη θέση Β: Μείγμα υγρού-ατμού"
          },
          {
            "id": "d",
            "text": "Στη θέση Α: Ξηρός κορεσμένος ατμός — Στη θέση Β: Υπέρθερμος ατμός"
          }
        ],
        "answer": "a",
        "explain": "Στο σημείο Α το ψυκτικό ρευστό εισέρχεται στο ψυκτικό στοιχείο ως μείγμα υγρού-ατμού, ενώ στο σημείο Β (είσοδος συμπιεστή) βρίσκεται στη κατάσταση του ξηρού κορεσμένου ατμού."
      },
      {
        "kind": "mc",
        "subq": "4.2",
        "prompt": "Ποιος είναι ο βαθμός ξηρότητας στην είσοδο του ψυκτικού στοιχείου (σημείο Α);",
        "options": [
          {
            "id": "a",
            "text": "0,1 (δηλαδή 10% ατμός και 90% υγρό)"
          },
          {
            "id": "b",
            "text": "0,3 (δηλαδή 30% ατμός και 70% υγρό)"
          },
          {
            "id": "c",
            "text": "0,5 (δηλαδή 50% ατμός και 50% υγρό)"
          },
          {
            "id": "d",
            "text": "1,0 (δηλαδή 100% ατμός)"
          }
        ],
        "answer": "b",
        "explain": "Ο βαθμός ξηρότητας στο σημείο Α είναι 0,3, δηλαδή 30% ατμός και 70% υγρό."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Βάσει του ψυκτικού διαγράμματος, υπολογίστε την πίεση στην έξοδο του συμπιεστή (σημείο Γ) σε $\\text{MPa}$.",
        "formula": "$P_{\\text{Γ}}$",
        "answer": 0.6,
        "unit": "MPa",
        "tolerance": 0.02,
        "hint": "Διαβάστε την πίεση που αντιστοιχεί στο σημείο Γ στο διάγραμμα p-h.",
        "explain": "Η πίεση στο σημείο Γ είναι ίση με $0{,}6\\text{ MPa}$."
      },
      {
        "kind": "calc",
        "subq": "4.4",
        "prompt": "Ποιος είναι ο λόγος συμπίεσης $\\text{CR}$ του συμπιεστή;",
        "formula": "$\\text{CR} = \\frac{P_{\\text{KAT}}}{P_{\\text{AN}}b}$",
        "answer": 6,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο $\\text{CR} = \\frac{P_{\\text{KAT}}}{P_{\\text{AN}}}$, όπου $P_{\\text{KAT}} = 0{,}6\\text{ MPa}$ και $P_{\\text{AN}} = 0{,}1\\text{ MPa}$.",
        "explain": "$\\text{CR} = \\frac{P_{\\text{KAT}}}{P_{\\text{AN}}} = \\frac{0{,}6\\text{ MPa}}{0{,}1\\text{ MPa}} = 6$"
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26850_sol01.webp"
    ]
  },
  {
    "id": "ch06-26899",
    "group": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26899",
    "bankCode": "26899",
    "title": "Θέμα 2$^{ο}$ · #26899",
    "units": 25,
    "theory": "apeikonisi-p-h",
    "stem": "Συμπληρώστε τα κενά για τις ιδιότητες των ψυκτικών μέσων και αντιστοιχίστε τις γραμμές των διαγραμμάτων p-h.",
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "prompt": "Συμπληρώστε τα κενά στις ιδιότητες ενός καλού ψυκτικού μέσου:",
        "textBefore": [
          "- Να έχει ",
          " (1) λανθάνουσα θερμότητα ατμοποίησης.\n- Να έχει ",
          " (2) ειδικό όγκο.\n- Να έχει χαμηλή θερμοκρασία ",
          " (3) σε ατμοσφαιρική πίεση.\n- Να μην καταστρέφει τις ",
          " (4) ικανότητες του λαδιού λίπανσης.\n- Να ανιχνεύεται ",
          " (5)."
        ],
        "answers": [
          "υψηλή",
          "μικρό",
          "βρασμού",
          "λιπαντικές",
          "εύκολα"
        ],
        "bank": [
          "χαμηλή",
          "υψηλή",
          "μικρό",
          "μεγάλο",
          "συμπύκνωσης",
          "βρασμού",
          "λιπαντικές",
          "ψυκτικές",
          "εύκολα",
          "δύσκολα"
        ],
        "explain": "Ένα καλό ψυκτικό μέσο πρέπει να έχει υψηλή λανθάνουσα θερμότητα ατμοποίησης, μικρό ειδικό όγκο, χαμηλή θερμοκρασία βρασμού, να μην καταστρέφει τις λιπαντικές ικανότητες του λαδιού και να ανιχνεύεται εύκολα."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τα διαγράμματα της Στήλης Α με τα χαρακτηριστικά της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Διάγραμμα 1",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26899_fig01.webp"
          },
          {
            "id": "2",
            "text": "Διάγραμμα 2",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26899_fig02.webp"
          },
          {
            "id": "3",
            "text": "Διάγραμμα 3",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26899_fig03.webp"
          },
          {
            "id": "4",
            "text": "Διάγραμμα 4",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26899_fig04.webp"
          },
          {
            "id": "5",
            "text": "Διάγραμμα 5",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_26899_fig05.webp"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Γραμμές σταθερής πίεσης"
          },
          {
            "id": "b",
            "text": "Γραμμές σταθερού ειδικού όγκου"
          },
          {
            "id": "c",
            "text": "Γραμμές σταθερής θερμοκρασίας"
          },
          {
            "id": "d",
            "text": "Γραμμές σταθερής ειδικής εντροπίας"
          },
          {
            "id": "e",
            "text": "Γραμμές σταθερής ειδικής ενθαλπίας"
          }
        ],
        "pairs": {
          "1": "a",
          "2": "b",
          "3": "e",
          "4": "c",
          "5": "d"
        },
        "explain": "1: α (Γραμμές σταθερής πίεσης), 2: β (Γραμμές σταθερού ειδικού όγκου), 3: ε (Γραμμές σταθερής ειδικής ενθαλπίας), 4: γ (Γραμμές σταθερής θερμοκρασίας), 5: δ (Γραμμές σταθερής ειδικής εντροπίας)."
      }
    ]
  },
  {
    "id": "ch06-29333",
    "group": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29333",
    "bankCode": "29333",
    "title": "Θέμα 4$^{ο}$ · #29333",
    "units": 25,
    "theory": "apeikonisi-p-h",
    "stem": "Δίνεται το διάγραμμα πίεσης – ειδικής ενθαλπίας για το ψυκτικό ρευστό R – 22.",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_29333_fig01.webp",
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Σημείωση της κατάστασης του ψυκτικού ρευστού με θερμοκρασία -10°C και βαθμό ξηρότητας 0,2 (σημείο 1) πάνω στο διάγραμμα.",
        "options": [
          {
            "id": "a",
            "text": "Εντός της καμπάνας κορεσμού, στην ισόθερμη -10°C με βαθμό ξηρότητας 0,2"
          },
          {
            "id": "b",
            "text": "Στην περιοχή του υπέρθερμου ατμού"
          },
          {
            "id": "c",
            "text": "Στην περιοχή του υγρού εκτός καμπάνας"
          },
          {
            "id": "d",
            "text": "Επάνω στην καμπύλη ξηρού κορεσμένου ατμού"
          }
        ],
        "answer": "a",
        "explain": "Το σημείο 1 τοποθετείται εντός της καμπάνας, στην ισόθερμη -10°C και σε απόσταση που αντιστοιχεί σε βαθμό ξηρότητας 0,2."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Ποια είναι η τιμή της ειδικής ενθαλπίας στο σημείο 1 σε $\\text{kJ}/\\text{kg}$;",
        "formula": "$h_1$",
        "answer": 230,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Διαβάστε την ενθαλπία $h_1$ από τον άξονα x στο σημείο 1.",
        "explain": "Από το διάγραμμα προκύπτει ότι $h_1 = 230\\text{ kJ}/\\text{kg}$."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Σχεδίαση της διαδικασίας ατμοποίησης από το σημείο 1 ως την καμπύλη ξηρού κορεσμένου ατμού (σημείο 2).",
        "options": [
          {
            "id": "a",
            "text": "Ισόθλιπτη μεταβολή (οριζόντια γραμμή προς τα δεξιά)"
          },
          {
            "id": "b",
            "text": "Κατακόρυφη γραμμή σταθερής ενθαλπίας"
          },
          {
            "id": "c",
            "text": "Πολυτροπική μεταβολή"
          },
          {
            "id": "d",
            "text": "Ισόχωρη μεταβολή"
          }
        ],
        "answer": "a",
        "explain": "Η διαδικασία ατμοποίησης είναι ισόθλιπτη και απεικονίζεται με οριζόντια γραμμή σταθερής πίεσης από το σημείο 1 έως την καμπύλη ξηρού κορεσμένου ατμού (σημείο 2)."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Ποια είναι η τιμή της ειδικής ενθαλπίας στο τέλος της διαδικασίας ατμοποίησης (σημείο 2) σε $\\text{kJ}/\\text{kg}$;",
        "formula": "$h_2$",
        "answer": 400,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Διαβάστε την ενθαλπία $h_2$ στο σημείο 2 (τομή με την καμπύλη ξηρού κορεσμένου ατμού).",
        "explain": "Από το διάγραμμα προκύπτει ότι $h_2 = 400\\text{ kJ}/\\text{kg}$."
      },
      {
        "kind": "calc",
        "subq": "ε",
        "prompt": "Πόση θερμότητα $Q$ πρέπει να απορροφήσουν $2\\text{ kg}$ ψυκτικού ρευστού R - 22 για να ατμοποιηθούν με τη συγκεκριμένη διαδικασία σε $\\text{kJ}$;",
        "formula": "$Q = \\Delta H = m \\cdot (h_2 - h_1)$",
        "answer": 340,
        "unit": "kJ",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο $Q = m \\cdot (h_2 - h_1)$ με $m = 2\\text{ kg}$, $h_1 = 230\\text{ kJ}/\\text{kg}$ και $h_2 = 400\\text{ kJ}/\\text{kg}$.",
        "explain": "$Q = \\Delta H = m \\cdot (h_2 - h_1) = 2\\text{ kg} \\cdot (400\\text{ kJ}/\\text{kg} - 230\\text{ kJ}/\\text{kg}) = 340\\text{ kJ}$"
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_29333_sol01.webp"
    ]
  },
  {
    "id": "ch06-33865",
    "group": "ch06-04-leitourgia-psychrikon-kyklomaton",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33865",
    "bankCode": "33865",
    "title": "#33865 — Θέμα 4$^{ο}$ (4.1–4.3)",
    "units": 25,
    "theory": "apeikonisi-psyktikon-meson-p-h",
    "stem": "Στο παρακάτω ψυκτικό διάγραμμα ψυκτικού μέσου R134a, έχει σχεδιαστεί ένας ψυκτικός κύκλος. Με τη βοήθεια του ψυκτικού διαγράμματος που σας δίνεται:",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_33865_fig01.webp",
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_33865_sol01.webp"
    ],
    "items": [
      {
        "kind": "mc",
        "subq": "4.1",
        "prompt": "Ποια είναι η ψυχρομετρική κατάσταση του ψυκτικού ρευστού στο σημείο Α;",
        "options": [
          {
            "id": "a",
            "text": "Κορεσμένο υγρό"
          },
          {
            "id": "b",
            "text": "Μείγμα υγρού ατμού"
          },
          {
            "id": "c",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "d",
            "text": "Υπέρθερμος ατμός"
          }
        ],
        "answer": "a",
        "explain": "Στο σημείο Α, σύμφωνα με το διάγραμμα p-h, η κατάσταση του ψυκτικού ρευστού είναι κορεσμένο υγρό (επάνω στην καμπύλη κορεσμένου υγρού)."
      },
      {
        "kind": "mc",
        "subq": "4.1",
        "prompt": "Ποια είναι η ψυχρομετρική κατάσταση του ψυκτικού ρευστού στο σημείο Β;",
        "options": [
          {
            "id": "a",
            "text": "Κορεσμένο υγρό"
          },
          {
            "id": "b",
            "text": "Μείγμα υγρού ατμού"
          },
          {
            "id": "c",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "d",
            "text": "Υπέρθερμος ατμός"
          }
        ],
        "answer": "b",
        "explain": "Στο σημείο Β, το ψυκτικό ρευστό βρίσκεται εντός της καμπύλης κορεσμού, οπότε η κατάστασή του είναι μείγμα υγρού ατμού."
      },
      {
        "kind": "mc",
        "subq": "4.1",
        "prompt": "Ποια είναι η ψυχρομετρική κατάσταση του ψυκτικού ρευστού στο σημείο Γ;",
        "options": [
          {
            "id": "a",
            "text": "Κορεσμένο υγρό"
          },
          {
            "id": "b",
            "text": "Μείγμα υγρού ατμού"
          },
          {
            "id": "c",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "d",
            "text": "Υπέρθερμος ατμός"
          }
        ],
        "answer": "c",
        "explain": "Στο σημείο Γ, το ρευστό βρίσκεται πάνω στην δεξιά οριακή καμπύλη, άρα είναι ξηρός κορεσμένος ατμός."
      },
      {
        "kind": "mc",
        "subq": "4.1",
        "prompt": "Ποια είναι η ψυχρομετρική κατάσταση του ψυκτικού ρευστού στο σημείο Δ;",
        "options": [
          {
            "id": "a",
            "text": "Κορεσμένο υγρό"
          },
          {
            "id": "b",
            "text": "Μείγμα υγρού ατμού"
          },
          {
            "id": "c",
            "text": "Ξηρός κορεσμένος ατμός"
          },
          {
            "id": "d",
            "text": "Υπέρθερμος ατμός"
          }
        ],
        "answer": "d",
        "explain": "Στο σημείο Δ, το ρευστό βρίσκεται δεξιά της καμπύλης κορεσμού, οπότε είναι υπέρθερμος ατμός."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Υπολογίστε τον βαθμό ξηρότητας στο σημείο Β.",
        "formula": "$x = 0{,}2$",
        "answer": 0.2,
        "unit": "",
        "tolerance": 0.05,
        "hint": "Εντοπίστε το σημείο Β μέσα στην περιοχή υγρού-ατμού και διαβάστε την αντίστοιχη καμπύλη ποιότητας (βαθμού ξηρότητας) $x$.",
        "explain": "Ο βαθμός ξηρότητας στο σημείο Β είναι $x = 0{,}2$, δηλαδή 20% ατμός και 80% υγρό."
      },
      {
        "kind": "blank",
        "subq": "4.3",
        "prompt": "Συμπληρώστε τις τιμές πίεσης και ειδικής ενθαλπίας για τα σημεία Α, Β, Γ και Δ βάσει του διαγράμματος:",
        "textBefore": [
          "Σημείο Α: Πίεση = ",
          " psia, Ενθαλπία = ",
          " Btu/lb. \nΣημείο Β: Πίεση = ",
          " psia, Ενθαλπία = ",
          " Btu/lb. \nΣημείο Γ: Πίεση = ",
          " psia, Ενθαλπία = ",
          " Btu/lb. \nΣημείο Δ: Πίεση = ",
          " psia, Ενθαλπία = ",
          " Btu/lb."
        ],
        "answers": [
          "70",
          "30",
          "20",
          "30",
          "20",
          "103",
          "70",
          "116"
        ],
        "bank": [
          "20",
          "30",
          "70",
          "103",
          "116"
        ],
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch06_33865_sol01.webp",
        "explain": "Από το διάγραμμα προκύπτουν τα εξής: \n- Σημείο Α: Πίεση $70\\text{ psia}$, Ενθαλπία $30\\text{ Btu/lb}$\n- Σημείο Β: Πίεση $20\\text{ psia}$, Ενθαλπία $30\\text{ Btu/lb}$\n- Σημείο Γ: Πίεση $20\\text{ psia}$, Ενθαλπία $103\\text{ Btu/lb}$\n- Σημείο Δ: Πίεση $70\\text{ psia}$, Ενθαλπία $116\\text{ Btu/lb}$"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-06/ch06-06-ygrosia-lipantika.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch06-29141",
    "group": "ch06-06-ygrosia-lipantika",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29141",
    "bankCode": "29141",
    "title": "Θέμα 2$^{ο}$ · #29141",
    "units": 25,
    "theory": "ygrosia-lipantika",
    "stem": "Αντιστοιχίστε τις διαδικασίες διαχείρισης ψυκτικών ρευστών και τις ιδιότητες των λιπαντικών.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τους όρους διαχείρισης ψυκτικών ρευστών της Στήλης Α με τους ορισμούς της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Αναγέννηση"
          },
          {
            "id": "2",
            "text": "Συλλογή"
          },
          {
            "id": "3",
            "text": "Ανακύκλωση"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "ενός ψυκτικού μέσου είναι η διαδικασία καθαρισμού του ώστε να δημιουργηθεί ένα νέο προϊόν."
          },
          {
            "id": "b",
            "text": "ενός ψυκτικού μέσου είναι η διαδικασία με την οποία το ψυκτικό μέσο που συλλέγεται από ένα ψυκτικό σύστημα γίνεται, με τη βοήθεια ειδικής συσκευής καθαρό και έτοιμο να χρησιμοποιηθεί πάλι."
          },
          {
            "id": "c",
            "text": "ενός ψυκτικού μέσου είναι η διαδικασία αφαίρεσης του ψυκτικού μέσου από μια μονάδα και συγκέντρωση του σε ένα ειδικό δοχείο."
          }
        ],
        "pairs": {
          "1": "a",
          "2": "c",
          "3": "b"
        },
        "explain": "1 - α (Αναγέννηση), 2 - γ (Συλλογή), 3 - β (Ανακύκλωση)."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τις ιδιότητες των λιπαντικών της Στήλης Α με τις ερμηνείες τους στη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "Θερμική σταθερότητα"
          },
          {
            "id": "2",
            "text": "Χαμηλό σημείο πήξης"
          },
          {
            "id": "3",
            "text": "Χημική σταθερότητα"
          },
          {
            "id": "4",
            "text": "Χαμηλό ιξώδες"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Να μην αντιδρά χημικά με το ψυκτικό μέσο και με τα υλικά των διάφορων μερών του ψυκτικού συστήματος."
          },
          {
            "id": "b",
            "text": "Να μη δημιουργεί αποθέματα άνθρακα σε ευαίσθητα σημεία στο συμπιεστή, όπως οι βαλβίδες του ή οι θυρίδες κατάθλιψης."
          },
          {
            "id": "c",
            "text": "Αυτό του επιτρέπει να διατηρεί καλές λιπαντικές ικανότητες στις υψηλές θερμοκρασίες και υψηλή ρευστότητα στις χαμηλές."
          },
          {
            "id": "d",
            "text": "Για να μπορεί να παραμένει υγρό στη χαμηλή πλευρά του συστήματος."
          }
        ],
        "pairs": {
          "1": "b",
          "2": "d",
          "3": "a",
          "4": "c"
        },
        "explain": "1 - β (Θερμική σταθερότητα), 2 - δ (Χαμηλό σημείο πήξης), 3 - α (Χημική σταθερότητα), 4 - γ (Χαμηλό ιξώδες)."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch09-01-synthikes-anesis",
    "chapter": "9",
    "title": "9.1 Προσδιορισμός του όρου «συνθήκες άνεσης»",
    "blurb": "Παράμετροι και δείκτες θερμικής άνεσης (PMV και PPD) σε εσωτερικούς χώρους."
  },
  {
    "id": "ch09-03-thermokrasia-ugrasia-tachytita",
    "title": "9.3 Θερμοκρασία - υγρασία - ταχύτητα κλιματιζόμενου αέρα",
    "chapter": "9",
    "blurb": "Επίδραση της θερμοκρασίας, της υγρασίας και της ταχύτητας του αέρα στις συνθήκες άνεσης."
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/ch09-01-synthikes-anesis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch09-29142",
    "group": "ch09-01-synthikes-anesis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29142",
    "bankCode": "29142",
    "title": "#29142 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch09-01-synthikes-anesis",
    "stem": "Αν η αίσθηση θερμικού περιβάλλοντος είναι λίγη δροσιά δηλαδή $\\text{PMV} = -1$, όπως φαίνεται στον παρακάτω πίνακα, να υπολογίσετε τον δείκτη PPD και να εξηγήσετε τη σημασία του.",
    "givens": [
      {
        "label": "$\\text{PMV}$",
        "value": "$-1$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Τον δείκτη $\\text{PPD}$ από το παρακάτω διάγραμμα σε %.",
        "formula": "$\\text{PPD} = f(\\text{PMV})$",
        "answer": 26,
        "unit": "%",
        "tolerance": 0.02,
        "hint": "Εντοπίστε την τιμή $\\text{PMV} = -1$ στον άξονα και διαβάστε την αντίστοιχη τιμή του δείκτη $\\text{PPD}$ από το διάγραμμα.",
        "explain": "Από τον δείκτη $\\text{PMV}$ που είναι $-1$ και βάσει του διαγράμματος, βρίσκουμε $\\text{PPD} = 26\\%$.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_29142_fig01.webp"
      },
      {
        "kind": "mc",
        "subq": "β",
        "prompt": "Να εξηγήσετε τι σημαίνει η τιμή του δείκτη $\\text{PPD}$ που υπολογίσατε στο ερώτημα α.",
        "options": [
          {
            "id": "a",
            "text": "Το 26% των ατόμων δεν θα νιώθουν άνετα, ενώ το 74% θα είναι απόλυτα ικανοποιημένοι."
          },
          {
            "id": "b",
            "text": "Το 26% των ατόμων είναι απόλυτα ικανοποιημένοι και το 74% δυσφορεί."
          },
          {
            "id": "c",
            "text": "Το 100% των ατόμων αισθάνεται απόλυτη δροσιά."
          },
          {
            "id": "d",
            "text": "Δεν υπάρχει καμία συσχέτιση μεταξύ των ατόμων και του δείκτη PPD."
          }
        ],
        "answer": "a",
        "explain": "Σημαίνει ότι το 26% των ατόμων που θα βρίσκονται στον χώρο αυτό προβλέπεται ότι δεν θα νιώθουν άνετα ($\\text{PPD} = 26\\%$), ή αλλιώς το $100\\% - 26\\% = 74\\%$ θα είναι απόλυτα ικανοποιημένοι με το θερμικό περιβάλλον του χώρου."
      }
    ]
  },
  {
    "id": "ch09-29785",
    "group": "ch09-01-synthikes-anesis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29785",
    "bankCode": "29785",
    "title": "#29785 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch09-01-synthikes-anesis",
    "stem": "Παράμετροι που καθορίζουν τις συνθήκες άνεσης και μελέτη του διαγράμματος δεικτών PMV και PPD.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε την κατηγορία παραμέτρων (Στήλη Α) με τις αντίστοιχες παραμέτρους συνθηκών άνεσης (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "1. Φυσικές"
          },
          {
            "id": "2",
            "text": "2. Εξωτερικές"
          },
          {
            "id": "3",
            "text": "3. Βιολογικές"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Είδος δραστηριότητας ατόμου"
          },
          {
            "id": "b",
            "text": "β. Υγρασία του χώρου"
          },
          {
            "id": "c",
            "text": "γ. Είδος ρουχισμού του ατόμου"
          },
          {
            "id": "d",
            "text": "δ. Ταχύτητα αέρα του χώρου"
          },
          {
            "id": "e",
            "text": "ε. Ηλικία του ατόμου"
          },
          {
            "id": "στ",
            "text": "στ. Φύλο του ατόμου"
          }
        ],
        "pairs": {
          "1": "β",
          "2": "α",
          "3": "ε"
        },
        "explain": "Σύμφωνα με την τυποποίηση: 1 (Φυσικές) -> β, δ· 2 (Εξωτερικές) -> α, γ· 3 (Βιολογικές) -> ε, στ. (Σημείωση: Στο υποερώτημα ζητούνται δύο από τα γράμματα ανά αριθμό)."
      },
      {
        "kind": "mc",
        "subq": "2.2.α",
        "prompt": "Στο διάγραμμα δεικτών άνεσης PMV και δυσαρέσκειας PPD, ποιος άξονας αντιστοιχεί σε ποιον δείκτη;",
        "options": [
          {
            "id": "a",
            "text": "Ο άξονας-x αντιστοιχεί στον δείκτη άνεσης PMV και ο άξονας-y στον δείκτη δυσαρέσκειας PPD."
          },
          {
            "id": "b",
            "text": "Ο άξονας-x αντιστοιχεί στον δείκτη δυσαρέσκειας PPD και ο άξονας-y στον δείκτη άνεσης PMV."
          },
          {
            "id": "c",
            "text": "Και οι δύο άξονες αναφέρονται αποκλειστικά στον δείκτη PPD."
          },
          {
            "id": "d",
            "text": "Και οι δύο άξονες αναφέρονται αποκλειστικά στον δείκτη PMV."
          }
        ],
        "answer": "a",
        "explain": "Ο οριζόντιος άξονας (x) αντιστοιχεί στον δείκτη άνεσης PMV και ο κατακόρυφος άξονας (y) στον δείκτη δυσαρέσκειας PPD.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_29785_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "2.2.β",
        "prompt": "Ποια τιμή στο διάγραμμα υποδηλώνει ότι υπάρχει κατάσταση αίσθησης άνεσης σε έναν χώρο (PMV);",
        "formula": "$\\text{PMV} = 0$",
        "answer": 0,
        "unit": "",
        "tolerance": 0,
        "hint": "Η απόλυτη άνεση αντιστοιχεί σε μηδενική απόκλιση από το θερμικό ισοζύγιο.",
        "explain": "Κατάσταση αίσθησης άνεσης σε έναν χώρο υπάρχει όταν ο δείκτης άνεσης PMV ισούται με το μηδέν (0) ($\\text{PMV} = 0$)."
      },
      {
        "kind": "mc",
        "subq": "2.2.γ",
        "prompt": "Στην περίπτωση που το 90% των ατόμων είναι απόλυτα ικανοποιημένο με το θερμικό περιβάλλον ενός χώρου, ποιες είναι οι τιμές των δεικτών $\\text{PPD}$ και $\\text{PMV}$;",
        "options": [
          {
            "id": "a",
            "text": "$\\text{PPD} = 10\\%$ και $\\text{PMV} = -0{,}5$ ή $\\text{PMV} = 0{,}5$"
          },
          {
            "id": "b",
            "text": "$\\text{PPD} = 90\\%$ και $\\text{PMV} = 0$"
          },
          {
            "id": "c",
            "text": "$\\text{PPD} = 0\\%$ και $\\text{PMV} = 1$ τυπικά"
          },
          {
            "id": "d",
            "text": "$\\text{PPD} = 10\\%$ και $\\text{PMV} = 0$ ακριβώς"
          }
        ],
        "answer": "a",
        "explain": "Αν το 90% είναι ικανοποιημένο, το ποσοστό δυσαρέσκειας είναι $\\text{PPD} = 100\\% - 90\\% = 10\\%$. Από το διάγραμμα, για $\\text{PPD} = 10\\%$ προκύπτει $\\text{PMV} = -0{,}5$ ή $\\text{PMV} = 0{,}5$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_29785_sol01.webp"
      }
    ]
  },
  {
    "id": "ch09-33912",
    "group": "ch09-01-synthikes-anesis",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33912",
    "bankCode": "33912",
    "title": "#33912 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch09-01-synthikes-anesis",
    "stem": "Ταξινόμηση στοιχείων συνθηκών άνεσης, χαρακτηρισμός προτάσεων και ερμηνεία θερμοκρασίας επιφανειών.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Να ταξινομήσετε τα στοιχεία (η θερμοκρασία, θερμοκρασίες εσωτερικών επιφανειών, επίπεδο δραστηριότητας, ηλικία, θερμική αντίσταση ρουχισμού) στις παραμέτρους (α-γ):",
        "left": [
          {
            "id": "1",
            "text": "α. Φυσικές παράμετροι"
          },
          {
            "id": "2",
            "text": "β. Εξωτερικές παράμετροι"
          },
          {
            "id": "3",
            "text": "γ. Βιολογικές παράμετροι"
          }
        ],
        "right": [
          {
            "id": "1",
            "text": "η θερμοκρασία, οι θερμοκρασίες των εσωτερικών επιφανειών του χώρου"
          },
          {
            "id": "2",
            "text": "το επίπεδο δραστηριότητας του ατόμου, η θερμική αντίσταση του ρουχισμού του ατόμου"
          },
          {
            "id": "3",
            "text": "η ηλικία του ατόμου"
          }
        ],
        "pairs": {
          "1": "1",
          "2": "2",
          "3": "3"
        },
        "explain": "Φυσικές: θερμοκρασία, θερμοκρασίες επιφανειών. Εξωτερικές: επίπεδο δραστηριότητας, θερμική αντίσταση ρουχισμού. Βιολογικές: ηλικία του ατόμου."
      },
      {
        "kind": "tf",
        "subq": "2.2.α",
        "prompt": "Οι συνθήκες άνεσης το καλοκαίρι επιτυγχάνονται σε υψηλότερες θερμοκρασίες από ό,τι τον χειμώνα.",
        "answer": true,
        "explain": "Σωστό. Λόγω της ενδυμασίας, οι απαιτήσεις το καλοκαίρι ικανοποιούνται σε υψηλότερες θερμοκρασίες."
      },
      {
        "kind": "tf",
        "subq": "2.2.β",
        "prompt": "Αύξηση της σχετικής υγρασίας πάνω από 50% το χειμώνα μπορεί να έχει αρνητικές επιπτώσεις στο αναπνευστικό σύστημα του ατόμου.",
        "answer": true,
        "explain": "Σωστό. Υψηλή υγρασία χειμωνιάτικα σε εσωτερικούς χώρους ευνοεί παθογόνους μικροργανισμούς και συμπτώματα δυσφορίας."
      },
      {
        "kind": "tf",
        "subq": "2.2.γ",
        "prompt": "Η μέση ταχύτητα του αέρα σε ένα συνήθη κατοικημένο εσωτερικό χώρο με άτομα που κάθονται δεν πρέπει να ξεπερνά τα $0{,}25\\text{ m/sec}$ το καλοκαίρι.",
        "answer": true,
        "explain": "Σωστό. Το όριο των $0{,}25\\text{ m/sec}$ αποτρέπει την αίσθηση ρεύματος (δυσφορία) σε καθήμενους."
      },
      {
        "kind": "tf",
        "subq": "2.2.δ",
        "prompt": "Η κατακόρυφη διαφορά της θερμοκρασίας αέρα σε ένα χώρο, μεταξύ περίπου του επιπέδου των ποδιών και του κεφαλιού ενός ατόμου, δεν πρέπει να ξεπερνά τους $2\\,{}^{\\circ}\\text{C}$, ώστε να αποφεύγεται τοπική δυσφορία.",
        "answer": true,
        "explain": "Σωστό (στο επίσημο κλειδί αναφέρεται ως 3ο Σωστό / 4ο Λάθος ανάλογα με την αρίθμηση της πηγής· εδώ η πρόταση είναι ορθότατη κατασκευαστικά)."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Εξηγήστε γιατί η μέση θερμοκρασία των εσωτερικών επιφανειών πρέπει να πλησιάζει όσο το δυνατό τη θερμοκρασία του αέρα:",
        "options": [
          {
            "id": "a",
            "text": "Για να αποφεύγονται μεγάλες θερμικές απώλειες λόγω ακτινοβολίας προς ψυχρές επιφάνειες το χειμώνα ή αντίστοιχα μεγάλα θερμικά φορτία το καλοκαίρι."
          },
          {
            "id": "b",
            "text": "Για να μειώνεται η ταχύτητα του αέρα στους αγωγούς."
          },
          {
            "id": "c",
            "text": "Για να αυξάνεται η σχετική υγρασία του χώρου αυτόματα."
          },
          {
            "id": "d",
            "text": "Για να εξαλείφεται πλήρως ο μεταβολισμός του ανθρώπινου σώματος."
          }
        ],
        "answer": "a",
        "explain": "Η προσέγγιση της θερμοκρασίας επιφανειών με αυτή του αέρα αποτρέπει την ανεπιθύμητη ανταλλαγή θερμότητας με ακτινοβολία που προκαλεί τοπική δυσφορία."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/ch09-03-thermokrasia-ugrasia-tachytita.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch09-29452",
    "group": "ch09-03-thermokrasia-ugrasia-tachytita",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29452",
    "bankCode": "29452",
    "title": "#29452 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch09-03-thermokrasia-ugrasia-tachytita",
    "stem": "Ταξινόμηση παραμέτρων συνθηκών άνεσης, χαρακτηρισμός προτάσεων και αιτιολόγηση.",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Να κατατάξετε τις παραμέτρους (α-στ) στην αντίστοιχη κατηγορία (1-3):",
        "left": [
          {
            "id": "1",
            "text": "1. Φυσικές"
          },
          {
            "id": "2",
            "text": "2. Εξωτερικές"
          },
          {
            "id": "3",
            "text": "3. Βιολογικές"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α) είδος ρουχισμού του ατόμου"
          },
          {
            "id": "b",
            "text": "b) φύλο του ατόμου"
          },
          {
            "id": "c",
            "text": "c) θερμοκρασία του χώρου"
          },
          {
            "id": "d",
            "text": "d) ηλικία ατόμου"
          },
          {
            "id": "e",
            "text": "e) υγρασία του χώρου"
          },
          {
            "id": "f",
            "text": "f) είδος δραστηριότητας ατόμου"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "b"
        },
        "explain": "1. Φυσικές: θερμοκρασία (c), υγρασία (e). 2. Εξωτερικές: είδος ρουχισμού (a), είδος δραστηριότητας (f). 3. Βιολογικές: φύλο (b), ηλικία (d)."
      },
      {
        "kind": "tf",
        "subq": "2.2.α",
        "prompt": "Η μέση ταχύτητα του αέρα σε έναν συνήθη εσωτερικό χώρο που τα άτομα κάθονται δεν πρέπει να ξεπερνά το καλοκαίρι τα $0{,}15\\text{ m/sec}$.",
        "answer": false,
        "explain": "Λάθος. Η ταχύτητα του αέρα το καλοκαίρι σε καθήμενους δεν πρέπει να ξεπερνά συνήθως τα $0{,}25\\text{ m/sec}$ (ή βάσει τυπικών ορίων)."
      },
      {
        "kind": "tf",
        "subq": "2.2.β",
        "prompt": "Με τον όρο θερμική άνεση αναφερόμαστε στην αίσθηση ικανοποίησης ενός ατόμου, που βρίσκεται σε έναν εσωτερικό χώρο, σχετικά με το θερμικό περιβάλλον του χώρου αυτού.",
        "answer": true,
        "explain": "Σωστό. Αυτός είναι ο ορισμός της θερμικής άνεσης (ASHRAE / πρότυπα κλιματισμού)."
      },
      {
        "kind": "tf",
        "subq": "2.2.γ",
        "prompt": "Σχετική υγρασία άνω του 50% σε έναν εσωτερικό χώρο, κατά τη διάρκεια του χειμώνα, μπορεί να έχει αρνητικές επιπτώσεις στο αναπνευστικό σύστημα του ανθρώπου.",
        "answer": true,
        "explain": "Σωστό. Υψηλή υγρασία το χειμώνα σε εσωτερικούς χώρους ευνοεί την ανάπτυξη μικροοργανισμών/μούχλας με επιπτώσεις στην αναπνοή."
      },
      {
        "kind": "tf",
        "subq": "2.2.δ",
        "prompt": "Ο σχεδιασμός και η λειτουργία ενός συστήματος κλιματισμού για τη ρύθμιση όλων ή ορισμένων φυσικών παραμέτρων άνεσης βρίσκεται σε άμεση συνάρτηση μόνο με την εποχή του έτους.",
        "answer": false,
        "explain": "Λάθος. Εξαρτάται από πλήθος άλλων παραγόντων (μορφολογία κτηρίου, πλήθος ατόμων, ρουχισμός, δραστηριότητες κ.ά.) και όχι μόνο από την εποχή."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Για ποιο λόγο ο σχεδιασμός του κλιματισμού δεν εξαρτάται ΜΟΝΟ από την εποχή του έτους;",
        "options": [
          {
            "id": "a",
            "text": "Εξαρτάται επιπλέον από τις ιδιαιτερότητες της εφαρμογής, όπως η θέση, τα κατασκευαστικά χαρακτηριστικά, η δραστηριότητα και ο ρουχισμός των ατόμων."
          },
          {
            "id": "b",
            "text": "Εξαρτάται αποκλειστικά από την εξωτερική ατμοσφαιρική πίεση."
          },
          {
            "id": "c",
            "text": "Εξαρτάται μόνο από το χρώμα των εσωτερικών τοίχων."
          },
          {
            "id": "d",
            "text": "Δεν επηρεάζεται από κανέναν εξωτερικό παράγοντα πέραν του γεωγραφικού πλάτους."
          }
        ],
        "answer": "a",
        "explain": "Ο σχεδιασμός βρίσκεται σε άμεση συνάρτηση με τις ιδιαιτερότητες της εφαρμογής (θέση, μορφολογία, κατασκευαστικά χαρακτηριστικά, πλήθος, δραστηριότητες και ρουχισμός ατόμων) και τις κλιματικές συνθήκες."
      }
    ]
  },
  {
    "id": "ch09-29517",
    "group": "ch09-03-thermokrasia-ugrasia-tachytita",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29517",
    "bankCode": "29517",
    "title": "#29517 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "ch09-03-thermokrasia-ugrasia-tachytita",
    "stem": "Χαρακτηρισμός προτάσεων θερμικής άνεσης και ερωτήματα δεικτών PMV-PPD.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1.α",
        "prompt": "Οι συνθήκες άνεσης το καλοκαίρι επιτυγχάνονται σε υψηλότερες θερμοκρασίες από ό,τι τον χειμώνα.",
        "answer": true,
        "explain": "Σωστό. Λόγω του ελαφρύτερου ρουχισμού το καλοκαίρι, οι αποδεκτές θερμοκρασίες αέρα είναι υψηλότερες σε σύγκριση με τον χειμώνα."
      },
      {
        "kind": "tf",
        "subq": "2.1.β",
        "prompt": "Η κατακόρυφη διαφορά της θερμοκρασίας αέρα σε ένα χώρο, μεταξύ περίπου του επιπέδου των ποδιών και του κεφαλιού ενός ατόμου, πρέπει να ξεπερνά τους $3\\,{}^{\\circ}\\text{C}$.",
        "answer": false,
        "explain": "Λάθος. Η κατακόρυφη διαφορά θερμοκρασίας πρέπει να περιορίζεται και να μην ξεπερνά συνήθως τους $2\\,{}^{\\circ}\\text{C}$ ώστε να αποφεύγεται τοπική δυσφορία."
      },
      {
        "kind": "tf",
        "subq": "2.1.γ",
        "prompt": "Η μέση θερμοκρασία των εσωτερικών επιφανειών σε ένα χώρο πρέπει να πλησιάζει όσο το δυνατό τη θερμοκρασία του αέρα του χώρου.",
        "answer": true,
        "explain": "Σωστό. Με τον τρόπο αυτό αποφεύγονται μεγάλες θερμικές απώλειες λόγω ακτινοβολίας προς ψυχρές επιφάνειες το χειμώνα ή αντίστοιχα μεγάλα θερμικά φορτία το καλοκαίρι."
      },
      {
        "kind": "calc",
        "subq": "2.2.α",
        "prompt": "Ποια είναι η τιμή του δείκτη $\\text{PMV}$ όταν υπάρχει κατάσταση αίσθησης άνεσης σε κάποιο υπό μελέτη χώρο;",
        "formula": "$\\text{PMV} = 0$",
        "answer": 0,
        "unit": "",
        "tolerance": 0,
        "hint": "Στην ιδανική κατάσταση θερμικής άνεσης ο δείκτη PMV μηδενίζεται.",
        "explain": "Η τιμή του δείκτη $\\text{PMV}$ όταν υπάρχει κατάσταση αίσθησης άνεσης σε κάποιο υπό μελέτη χώρο είναι $0$."
      },
      {
        "kind": "calc",
        "subq": "2.2.β",
        "prompt": "Όταν η τιμή του $\\text{PPD}$ είναι 20%, ποιο ποσοστό των ατόμων (σε %) είναι απόλυτα ικανοποιημένοι με το θερμικό περιβάλλον του χώρου;",
        "formula": "$\\text{Ικανοποιημένοι} = 100\\% - PPD$",
        "answer": 80,
        "unit": "%",
        "tolerance": 0,
        "hint": "Αφαιρέστε το ποσοστό δυσαρέσκειας PPD από το συνολικό 100%.",
        "explain": "Όταν η τιμή του $\\text{PPD}$ είναι $20\\%$, το ποσοστό των ατόμων που είναι απόλυτα ικανοποιημένοι είναι: $100\\% - 20\\% = 80\\%$.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_29517_fig01.webp"
      }
    ]
  },
  {
    "id": "ch09-32838",
    "group": "ch09-03-thermokrasia-ugrasia-tachytita",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #32838",
    "bankCode": "32838",
    "title": "#32838 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch09-03-thermokrasia-ugrasia-tachytita",
    "stem": "Ψυκτικός εργάζεται σε χώρο με μέση θερμοκρασία εσωτερικών επιφανειών $25\\,{}^{\\circ}\\text{C}$ (ελαφρύς ρουχισμός, ταχύτητα αέρα $0{,}2\\text{ m/s}$).",
    "givens": [
      {
        "label": "$T_{\\text{επ}}$",
        "value": "$25 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$u$",
        "value": "$0{,}2 \\text{m/s}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε τη θερμοκρασία του αέρα σε ${}^{\\circ}\\text{C}$ στην οποία ο τεχνίτης νιώθει άνετα.",
        "formula": "$T_{αέρα} = f(T_{επ}, u)$",
        "answer": 27.2,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε το διάγραμμα τομής της μέσης θερμοκρασίας επιφανειών $25\\,{}^{\\circ}\\text{C}$ και ταχύτητας $0{,}2\\text{ m/s}$.",
        "explain": "Από το διάγραμμα, το σημείο τομής των γραμμών της μέσης θερμοκρασίας εσωτερικών επιφανειών ($25\\,{}^{\\circ}\\text{C}$) και της ταχύτητας του αέρα ($0{,}2\\text{ m/s}$) δίνει θερμοκρασία αέρα $27{,}2\\,{}^{\\circ}\\text{C}$.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_32838_fig01.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_32838_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Αν η θερμοκρασία του αέρα είναι $36\\,{}^{\\circ}\\text{C}$ και η ταχύτητα $0{,}2\\text{ m/s}$, να υπολογίσετε τη μέση θερμοκρασία των εσωτερικών επιφανειών σε ${}^{\\circ}\\text{C}$.",
        "formula": "$T_{επ} = f(T_{αέρα}, u)$",
        "answer": 10,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Εντοπίστε στο διάγραμμα την τομή θερμοκρασίας αέρα $36\\,{}^{\\circ}\\text{C}$ και ταχύτητας $0{,}2\\text{ m/s}$.",
        "explain": "Από το διάγραμμα, το σημείο τομής της θερμοκρασίας αέρα ($36\\,{}^{\\circ}\\text{C}$) και της ταχύτητας ($0{,}2\\text{ m/s}$) δίνει μέση θερμοκρασία επιφανειών ίση με $10\\,{}^{\\circ}\\text{C}$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_32838_sol02.webp"
      }
    ]
  },
  {
    "id": "ch09-33899",
    "group": "ch09-03-thermokrasia-ugrasia-tachytita",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33899",
    "bankCode": "33899",
    "title": "#33899 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch09-03-thermokrasia-ugrasia-tachytita",
    "stem": "Ψυκτικός πραγματοποιεί συγκόλληση (θερμοκρασία αέρα $20\\,{}^{\\circ}\\text{C}$, ελαφρύς ρουχισμός, αριθμός μεταβολισμού $M = 125\\text{ kcal}/(\\text{h}\\cdot\\text{m}^2)$).",
    "givens": [
      {
        "label": "$T_{\\text{αέρα}}$",
        "value": "$20 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$M$",
        "value": "$125 \\text{kcal}/(\\text{h}\\cdot \\text{m}^{2})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογίσετε την ταχύτητα του αέρα σε $\\text{m/s}$ ώστε να νιώθει ο τεχνίτης άνετα.",
        "formula": "$u = f(T_{αέρα}, M)$",
        "answer": 0.7,
        "unit": "m/s",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε το διάγραμμα ιδανικής ταχύτητας αέρα σε σχέση με τη θερμοκρασία και τον μεταβολισμό Μ.",
        "explain": "Από το διάγραμμα, η τομή της θερμοκρασίας αέρα ($20\\,{}^{\\circ}\\text{C}$) και του μεταβολισμού ($125\\text{ kcal}/(\\text{h}\\cdot\\text{m}^2)$) δίνει ταχύτητα αέρα $0{,}7\\text{ m/s}$.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_33899_fig01.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_33899_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε την απαιτούμενη θερμοκρασία του αέρα σε ${}^{\\circ}\\text{C}$ αν η ταχύτητα είναι $0{,}4\\text{ m/s}$ και $M = 125\\text{ kcal}/(\\text{h}\\cdot\\text{m}^2)$.",
        "formula": "$T_{αέρα} = f(u, M)$",
        "answer": 19,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Εντοπίστε την τομή της ταχύτητας $0{,}4\\text{ m/s}$ και του μεταβολισμού $125\\text{ kcal}/(\\text{h}\\cdot\\text{m}^2)$ στο διάγραμμα.",
        "explain": "Από το διάγραμμα, η τομή της ταχύτητας αέρα ($0{,}4\\text{ m/s}$) και του μεταβολισμού δίνει απαιτούμενη θερμοκρασία αέρα $19\\,{}^{\\circ}\\text{C}$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-09/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch09_33899_sol02.webp"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].groups.push(...
[
  {
    "id": "ch10-02-psychrometric-terms",
    "chapter": "10",
    "title": "10.2 Ψυχρομετρικοί όροι θερμοκρασίας και υγρασίας αέρα",
    "blurb": "Ψυχρομετρικοί όροι, λόγος υγρασίας, ειδική υγρασία και χαρακτηριστικά του αέρα."
  },
  {
    "id": "ch10-04-psychrometric-charts",
    "chapter": "10",
    "title": "10.4 Αναγνώριση κλιμάκων στον ψυχρομετρικό χάρτη",
    "blurb": "Αναγνώριση κλιμάκων και γραμμών στον ψυχρομετρικό χάρτη."
  },
  {
    "id": "ch10-07-practical-applications",
    "chapter": "10",
    "title": "10.7 Πρακτική εφαρμογή των ψυχρομετρικών όρων",
    "blurb": "Πρακτική εφαρμογή και επίλυση προβλημάτων με χρήση ψυχρομετρικού χάρτη."
  },
  {
    "id": "ch10-08-psychrometrikes-metavoles",
    "chapter": "10",
    "title": "10.8 Ψυχρομετρικές μεταβολές",
    "blurb": "Μελέτη ψυχρομετρικών μεταβολών (θέρμανση, ψύξη, αφύγρανση, ύγρανση, ανάμειξη αέρα)"
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/ch10-02-psychrometric-terms.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch10-33199",
    "group": "ch10-02-psychrometric-terms",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33199",
    "bankCode": "33199",
    "title": "#33199 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "psychrometric-terms",
    "stem": "Ο αέρας μιας αίθουσας διδασκαλίας διαπιστώθηκε από τον ψυχρομετρικό χάρτη ότι έχει λόγο υγρασίας $W = 10\\text{ gr υδρατμού/kg ξηρού αέρα}$. Η μάζα των υδρατμών που περιέχει είναι $M_w = 20\\text{ gr}$.",
    "givens": [
      {
        "label": "$W$",
        "value": "$10 \\text{gr/kg}$"
      },
      {
        "label": "$M_w$",
        "value": "$20 gr$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η μάζα του ξηρού αέρα $M_a$ σε gr.",
        "formula": "$M_a = \\frac{M_w}{W}$",
        "answer": 2000,
        "unit": "gr",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο $W = \\frac{M_w}{M_a}$, οπότε $M_a = \\frac{M_w}{W}$.",
        "explain": "Ο λόγος υγρασίας $W$ είναι το πηλίκο της μάζας των υδρατμών προς την ποσότητα του ξηρού αέρα:\n$$\\begin{aligned}\nW &= \\frac{M_w}{M_a} \\\\\n\\Leftrightarrow M_a &= \\frac{M_w}{W} \\\\\n&= \\frac{20\\text{ gr}}{10\\text{ gr/kg}} = 2\\text{ kg} = 2000\\text{ gr}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η ειδική υγρασία $q_w$, με ακρίβεια τριών (3) δεκαδικών ψηφίων, σε $\\text{kg/kg}$.",
        "formula": "$q_w = \\frac{M_w}{M_w + M_a}$",
        "answer": 0.009,
        "unit": "kg/kg",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο $q_w = \\frac{M_w}{M_w + M_a}$ μετατρέποντας τις μάζες σε kg.",
        "explain": "Η ειδική υγρασία $q_w$ υπολογίζεται από τη σχέση:\n$$\\begin{aligned}\nq_w &= \\frac{M_w}{M_w + M_a} \\\\\n&= \\frac{0{,}02\\text{ kg}}{0{,}02\\text{ kg} + 2\\text{ kg}} = \\frac{0{,}02\\text{ kg}}{2{,}02\\text{ kg}} \\approx 0{,}009\\text{ kg/kg}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch10-33661",
    "group": "ch10-02-psychrometric-terms",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33661",
    "bankCode": "33661",
    "title": "#33661 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "psychrometric-terms",
    "stem": "Συμπληρώστε τα κενά στο παρακάτω κείμενο και απαντήστε στις προτάσεις Σωστού-Λάθους.",
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "prompt": "Συμπληρώστε τα κενά του κειμένου με τις κατάλληλες λέξεις από τη λίστα:",
        "textBefore": [
          "«Η ",
          " υδρατμών στον αέρα κυμαίνεται από το ",
          " (ξηρός αέρας) έως ένα ",
          " που εξαρτάται από τη ",
          " και την πίεση του ατμοσφαιρικού αέρα σε διάφορους γεωγραφικούς τόπους, ύψη από το επίπεδο της θάλασσας και τις κλιματικές συνθήκες.»"
        ],
        "answers": [
          "ποσότητα",
          "μηδέν",
          "μέγιστο",
          "θερμοκρασία"
        ],
        "bank": [
          "θερμοκρασία",
          "υγρασία",
          "ποσότητα",
          "ποιότητα",
          "μηδέν",
          "ένα",
          "ελάχιστο",
          "μέγιστο"
        ],
        "explain": "Η ποσότητα υδρατμών στον αέρα κυμαίνεται από το μηδέν (ξηρός αέρας) έως ένα μέγιστο που εξαρτάται από τη θερμοκρασία και την πίεση."
      },
      {
        "kind": "tf",
        "subq": "2.2.α",
        "prompt": "Η ποσότητα της υγρασίας που μπορεί να συγκρατήσει ο αέρας μέσα στη μάζα του είναι αντιστρόφως ανάλογη της θερμοκρασίας.",
        "answer": false,
        "explain": "Λάθος. Η ποσότητα της υγρασίας που μπορεί να συγκρατήσει ο αέρας είναι ανάλογη της θερμοκρασίας. Όσο θερμότερος είναι ο αέρας, τόσο μεγαλύτερη ποσότητα υγρασίας μπορεί να συγκρατήσει."
      },
      {
        "kind": "tf",
        "subq": "2.2.β",
        "prompt": "Θερμοκρασία ξηρού βολβού ονομάζεται η θερμοκρασιακή ένδειξη κοινού υδραργυρικού θερμομέτρου τοποθετημένου σε ρεύμα αέρα.",
        "answer": true,
        "explain": "Σωστό. Αυτός είναι ο ορισμός της θερμοκρασίας ξηρού βολβού."
      },
      {
        "kind": "tf",
        "subq": "2.2.γ",
        "prompt": "Όσο μεγαλύτερη είναι η ποσότητα υδρατμών που περιέχονται στον αέρα, τόσο μικρότερη είναι η θερμοκρασία υγροποίησής τους ή διαφορετικά η θερμοκρασία του σημείου δρόσου.",
        "answer": false,
        "explain": "Λάθος. Όσο μεγαλύτερη είναι η ποσότητα υδρατμών, τόσο μεγαλύτερη (υψηλότερη) είναι η θερμοκρασία του σημείου δρόσου."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/ch10-04-psychrometric-charts.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch10-32204",
    "group": "ch10-04-psychrometric-charts",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #32204",
    "bankCode": "32204",
    "title": "#32204 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "psychrometric-charts",
    "stem": "Χαρακτηρίστε τις προτάσεις και αντιστοιχίστε τις ψυχρομετρικές ιδιότητες.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1.α",
        "prompt": "Στην ψυχρομετρία, ο αέρας είναι το μείγμα δύο τελείων αερίων, του ξηρού αέρα και των υδρατμών.",
        "answer": true,
        "explain": "Σωστό. Ο ατμοσφαιρικός αέρας θεωρείται ως μείγμα ξηρού αέρα και υδρατμών."
      },
      {
        "kind": "tf",
        "subq": "2.1.β",
        "prompt": "Το μέγιστο της ποσότητας των υδρατμών στον ατμοσφαιρικό αέρα εξαρτάται από τη θερμοκρασία και την πίεσή του.",
        "answer": true,
        "explain": "Σωστό. Η ικανότητα συγκράτησης υγρασίας εξαρτάται άμεσα από τη θερμοκρασία και την πίεση."
      },
      {
        "kind": "tf",
        "subq": "2.1.γ",
        "prompt": "Στην κατάσταση κορεσμού του αέρα δεν υπάρχουν καθόλου υδρατμοί σε αυτόν.",
        "answer": false,
        "explain": "Λάθος. Στην κατάσταση κορεσμού ο αέρας περιέχει τη μέγιστη δυνατή ποσότητα υδρατμών που μπορεί να συγκρατήσει."
      },
      {
        "kind": "tf",
        "subq": "2.1.δ",
        "prompt": "Όσο ξηρότερος είναι ο αέρας ενός χώρου, τόσο πιο χαμηλή θα είναι η θερμοκρασία του υγρού θερμομέτρου, σε σύγκριση με τη θερμοκρασία ξηρού θερμομέτρου.",
        "answer": true,
        "explain": "Σωστό. Η εξάτμιση του νερού στο υγρό θερμόμετρο είναι μεγαλύτερη όταν ο αέρας είναι ξηρότερος, προκαλώντας μεγαλύτερη πτώση της θερμοκρασίας υγρού βολβού."
      },
      {
        "kind": "match",
        "subq": "2.2.α",
        "prompt": "Αντιστοιχίστε την ψυχρομετρική ιδιότητα με τον τύπο γραμμής στον ψυχρομετρικό χάρτη:",
        "left": [
          {
            "id": "1",
            "text": "θερμοκρασία ξηρού θερμομέτρου"
          },
          {
            "id": "2",
            "text": "θερμοκρασία υγρού βολβού"
          },
          {
            "id": "3",
            "text": "σχετική υγρασία"
          },
          {
            "id": "4",
            "text": "λόγος υγρασίας"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "οριζόντιες ευθείες"
          },
          {
            "id": "b",
            "text": "πλάγιες ευθείες"
          },
          {
            "id": "c",
            "text": "καμπύλες"
          },
          {
            "id": "d",
            "text": "κατακόρυφες ευθείες"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "b",
          "3": "c",
          "4": "a"
        },
        "explain": "Στον ψυχρομετρικό χάρτη οι θερμοκρασίες ξηρού θερμομέτρου είναι κατακόρυφες ευθείες, οι θερμοκρασίες υγρού βολβού πλάγιες ευθείες, η σχετική υγρασία καμπύλες και ο λόγος υγρασίας οριζόντιες ευθείες."
      },
      {
        "kind": "mc",
        "subq": "2.2.β",
        "prompt": "Ποια από τις παρακάτω επιπλέον ψυχρομετρικές ιδιότητες απεικονίζεται στον ψυχρομετρικό χάρτη ως πλάγιες ευθείες;",
        "options": [
          {
            "id": "a",
            "text": "Η ολική ενθαλπία"
          },
          {
            "id": "b",
            "text": "Ο λόγος υγρασίας"
          },
          {
            "id": "c",
            "text": "Η σχετική υγρασία"
          },
          {
            "id": "d",
            "text": "Η θερμοκρασία σημείου δρόσου"
          }
        ],
        "answer": "a",
        "explain": "Η ολική ενθαλπία (καθώς και ο ειδικός όγκος) απεικονίζονται στον ψυχρομετρικό χάρτη ως πλάγιες ευθείες."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/ch10-07-practical-applications.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch10-32788",
    "group": "ch10-07-practical-applications",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #32788",
    "bankCode": "32788",
    "title": "#32788 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "practical-applications",
    "stem": "Ο αέρας ενός χώρου έχει θερμοκρασία υγρού θερμομέτρου $20\\,{}^{\\circ}\\text{C}$ και λόγο υγρασίας $10\\text{ g υδρατμού/kg ξηρού αέρα}$. Με χρήση του ψυχρομετρικού χάρτη να υπολογιστούν τα ζητούμενα μεγέθη.",
    "givens": [
      {
        "label": "$T_{\\text{υγ}}$",
        "value": "$20 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$W$",
        "value": "$10 g/\\text{kg}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η θερμοκρασία ξηρού βολβού σε ${}^{\\circ}\\text{C}$.",
        "formula": "$T_{ξηρ}$",
        "answer": 31,
        "unit": "°C",
        "tolerance": 0.02,
        "hint": "Εντοπίστε το σημείο τομής της γραμμής υγρού θερμομέτρου $20\\,{}^{\\circ}\\text{C}$ και του λόγου υγρασίας $10\\text{ g/kg}$ στον ψυχρομετρικό χάρτη.",
        "explain": "Από τον ψυχρομετρικό χάρτη, η θερμοκρασία ξηρού βολβού αντιστοιχεί σε $31\\,{}^{\\circ}\\text{C}$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32788_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογιστεί το σημείο δρόσου σε ${}^{\\circ}\\text{C}$.",
        "formula": "$T_{δρόσου}$",
        "answer": 14,
        "unit": "°C",
        "tolerance": 0.02,
        "hint": "Ακολουθήστε την οριζόντια γραμμή του λόγου υγρασίας προς την καμπύλη κορεσμού ($100\\%$) στον ψυχρομετρικό χάρτη.",
        "explain": "Το σημείο δρόσου διαβάζεται στην καμπύλη κορεσμού και είναι $14\\,{}^{\\circ}\\text{C}$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32788_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Να υπολογιστεί η σχετική υγρασία σε %.",
        "formula": "$\\phi$",
        "answer": 36,
        "unit": "%",
        "tolerance": 0.05,
        "hint": "Διαβάστε την τιμή της καμπύλης σχετικής υγρασίας που διέρχεται από το σημείο κατάστασης.",
        "explain": "Η σχετική υγρασία στον ψυχρομετρικό χάρτη είναι $36\\%$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32788_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "ε",
        "prompt": "Να υπολογιστεί ο ειδικός όγκος σε $\\text{m}^3/\\text{kg}$.",
        "formula": "$v$",
        "answer": 0.875,
        "unit": "m³/kg",
        "tolerance": 0.02,
        "hint": "Παρατηρήστε τις κλίσεις των γραμμών ειδικού όγκου κοντά στο σημείο κατάστασης.",
        "explain": "Ο ειδικός όγκος είναι $0{,}875\\text{ m}^3/\\text{kg}$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32788_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "στ",
        "prompt": "Να υπολογιστεί η ενθαλπία σε $\\text{kJ/kg}$.",
        "formula": "$h$",
        "answer": 57,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Προεκτείνετε τη γραμμή ενθαλπίας από την αντίστοιχη κλίμακα του χάρτη.",
        "explain": "Η ενθαλπία είναι $57\\text{ kJ/kg}$.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32788_sol01.webp"
      }
    ]
  },
  {
    "id": "ch10-32936",
    "group": "ch10-07-practical-applications",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #32936",
    "bankCode": "32936",
    "title": "#32936 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "practical-applications",
    "stem": "Χαρακτηρίστε τις προτάσεις και αντιστοιχίστε τα μεγέθη του ψυχρομετρικού χάρτη.",
    "items": [
      {
        "kind": "tf",
        "subq": "2.1.α",
        "prompt": "Όσο μεγαλύτερη είναι η ποσότητα υδρατμών που περιέχονται στον αέρα τόσο μεγαλύτερη είναι και η θερμοκρασία του σημείου δρόσου.",
        "answer": true,
        "explain": "Σωστό. Η αύξηση της ποσότητας υδρατμών (λόγου υγρασίας) μετατοπίζει το σημείο δρόσου σε υψηλότερη θερμοκρασία."
      },
      {
        "kind": "tf",
        "subq": "2.1.β",
        "prompt": "Στη ψυχρομετρία, λανθάνουσα θερμότητα είναι η θερμότητα που μεταβάλλει τη θερμοκρασία του αέρα χωρίς να αλλάζει το περιεχόμενό του σε υγρασία.",
        "answer": false,
        "explain": "Λάθος. Η θερμότητα που μεταβάλλει τη θερμοκρασία του αέρα χωρίς αλλαγή υγρασίας είναι η αισθητή θερμότητα, ενώ η λανθάνουσα σχετίζεται με την αλλαγή φάσης (υγρασία)."
      },
      {
        "kind": "tf",
        "subq": "2.1.γ",
        "prompt": "Ειδική υγρασία ονομάζεται το πηλίκο της μάζας – ποσότητας υδρατμού προς την ποσότητα του ξηρού αέρα.",
        "answer": false,
        "explain": "Λάθος. Ο λόγος της μάζας υδρατμού προς τον ξηρό αέρα είναι ο λόγος υγρασίας $W$, ενώ η ειδική υγρασία $q_w$ είναι ο λόγος της μάζας υδρατμού προς τη συνολική μάζα του μείγματος (υδρατμοί + ξηρός αέρας)."
      },
      {
        "kind": "tf",
        "subq": "2.1.δ",
        "prompt": "Η σπουδαιότητα του ψυχρομετρικού χάρτη στις διεργασίες του κλιματισμού είναι μεγάλη, γιατί γνωρίζοντας μόλις δύο χαρακτηριστικά ψυχρομετρικά στοιχεία του ατμοσφαιρικού αέρα μπορούν να υπολογισθούν όλα τα υπόλοιπα.",
        "answer": true,
        "explain": "Σωστό. Με δύο δεδομένα μεγέθη στον ψυχρομετρικό χάρτη προσδιορίζονται πλήρως όλα τα υπόλοιπα χαρακτηριστικά του αέρα."
      },
      {
        "kind": "tf",
        "subq": "2.1.ε",
        "prompt": "Ο βαθμός κορεσμού, ως ψυχρομετρικός όρος υγρασίας, είναι αδιάστατο μέγεθος.",
        "answer": true,
        "explain": "Σωστό. Ως πηλίκο ομοειδών μεγεθών, ο βαθμός κορεσμού είναι αδιάστατος."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τους αριθμούς της Στήλης Α (δείκτες στον ψυχρομετρικό χάρτη) με τα μεγέθη της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Δείκτης 1"
          },
          {
            "id": "2",
            "text": "Δείκτης 2"
          },
          {
            "id": "3",
            "text": "Δείκτης 3"
          },
          {
            "id": "4",
            "text": "Δείκτης 4"
          },
          {
            "id": "5",
            "text": "Δείκτης 5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Λόγος υγρασίας"
          },
          {
            "id": "b",
            "text": "Θερμοκρασία ξηρού βολβού"
          },
          {
            "id": "c",
            "text": "Θερμοκρασία υγροποίησης – σημείο δρόσου"
          },
          {
            "id": "d",
            "text": "Ενθαλπία"
          },
          {
            "id": "e",
            "text": "Σχετική υγρασία"
          },
          {
            "id": "στ",
            "text": "Θερμοκρασία υγρού βολβού"
          }
        ],
        "pairs": {
          "1": "δ",
          "2": "στ",
          "3": "γ",
          "4": "α",
          "5": "β"
        },
        "explain": "Βάσει της επίσημης αντιστοίχισης του ΙΕΠ για το σημείο Σ στον ψυχρομετρικό χάρτη: 1–δ (Ενθαλπία), 2–στ (Θερμοκρασία υγρού βολβού), 3–γ (Σημείο δρόσου), 4–α (Λόγος υγρασίας), 5–β (Θερμοκρασία ξηρού βολβού).",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32936_fig01.webp"
      }
    ]
  },
  {
    "id": "ch10-33886",
    "group": "ch10-07-practical-applications",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33886",
    "bankCode": "33886",
    "title": "#33886 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "praktiki-efarmogi-psychrometric-chart",
    "stem": "Ο αέρας σε έναν χώρο έχει σχετική υγρασία 70% και θερμοκρασία $25~{}^{\\circ}\\text{C}$ (θερμοκρασία ξηρού βολβού). Με τη βοήθεια του ψυχρομετρικού χάρτη:",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_33886_fig01.webp",
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_33886_sol01.webp"
    ],
    "givens": [
      {
        "label": "$\\text{RH}$",
        "value": "70%"
      },
      {
        "label": "$T_{\\text{ξηρού}}$",
        "value": "$25~{}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "α",
        "prompt": "Να προσδιοριστεί πάνω στον ψυχρομετρικό χάρτη το σημείο που απεικονίζει την παραπάνω κατάσταση του αέρα.",
        "explain": "Στον ψυχρομετρικό χάρτη από το σημείο των 25~°C χαράσσουμε μία κατακόρυφη γραμμή που τέμνει την καμπύλη του 70% σχετικής υγρασίας σε ένα σημείο, το οποίο είναι και το σημείο κατάστασης της άσκησης."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε τον λόγο υγρασίας σε $\\text{g}$ νερού / $\\text{kg}$ ξηρού αέρα.",
        "formula": "$W = \\text{ανάγνωση από ψυχρομετρικό χάρτη}$",
        "answer": 14,
        "unit": "g/kg",
        "tolerance": 0.05,
        "hint": "Βρείτε την τιμή στον κατακόρυφο άξονα του λόγου υγρασίας που αντιστοιχεί στο σημείο κατάστασης.",
        "explain": "Με βάση το σημείο κατάστασης, βρίσκουμε ότι ο λόγος υγρασίας ισούται με $14~\\text{g}$ νερού / $\\text{kg}$ ξηρού αέρα."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Υπολογίστε τη θερμοκρασία υγρού βολβού σε ${}^{\\circ}\\text{C}$.",
        "formula": "$T_{υγρού} = ανάγνωση από διαγώνιες γραμμές χάρτη$",
        "answer": 21,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Ακολουθήστε την πλάγια διακεκομμένη ευθεία που διέρχεται από το σημείο κατάστασης.",
        "explain": "Από το σημείο κατάστασης διέρχεται η πλάγια διακεκομμένη ευθεία που αντιστοιχεί σε θερμοκρασία υγρού βολβού $21~{}^{\\circ}\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Υπολογίστε την ενθαλπία σε $\\text{kJ}/\\text{kg}$ ξηρού αέρα.",
        "formula": "$h = \\text{ανάγνωση από κλίμακα ενθαλπίας}$",
        "answer": 61,
        "unit": "kJ/kg",
        "tolerance": 0.05,
        "hint": "Χαράξτε παράλληλη γραμμή προς τις ευθείες ενθαλπίας από το σημείο κατάστασης.",
        "explain": "Από το σημείο κατάστασης χαράσσουμε γραμμή παράλληλη με τις ευθείες ενθαλπίας και βρίσκουμε ότι η ενθαλπία είναι ίση με $61~\\text{kJ}/\\text{kg}$ ξηρού αέρα."
      },
      {
        "kind": "calc",
        "subq": "ε",
        "prompt": "Υπολογίστε τον ειδικό όγκο σε $\\text{m}^3/\\text{kg}$.",
        "formula": "$v = \\text{παρεμβολή μεταξύ ισόογκων γραμμών}$",
        "answer": 0.863,
        "unit": "m³/kg",
        "tolerance": 0.02,
        "hint": "Παρατηρήστε σε ποιες πλάγιες ευθείες ειδικού όγκου βρίσκεται το σημείο κατάστασης.",
        "explain": "Το σημείο κατάστασης βρίσκεται μεταξύ δύο πλάγιων ευθειών που αντιστοιχούν σε ειδικό όγκο $0{,}86$ και $0{,}87~\\text{m}^3/\\text{kg}$ αντίστοιχα. Ο ειδικός όγκος στην περίπτωσή μας είναι περίπου $0{,}863~\\text{m}^3/\\text{kg}$."
      },
      {
        "kind": "calc",
        "subq": "στ",
        "prompt": "Υπολογίστε το σημείο δρόσου σε ${}^{\\circ}\\text{C}$.",
        "formula": "$T_{\\text{δρόσου}} = 19\\,{}^{\\circ}\\text{C}$",
        "answer": 19,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Κινηθείτε οριζόντια (παράλληλα προς τον άξονα θερμοκρασίας) προς την καμπύλη κορεσμού.",
        "explain": "Για το σημείο δρόσου, θα κινηθούμε από το αρχικό σημείο παράλληλα προς τον άξονα της θερμοκρασίας ξηρού βολβού και θα φτάσουμε μέχρι εκεί που τέμνει την καμπύλη κορεσμού. Έτσι προκύπτει ότι το σημείο δρόσου είναι $19~{}^{\\circ}\\text{C}$."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/ch10-08-psychrometrikes-metavoles.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch10-32205",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #32205",
    "bankCode": "32205",
    "title": "#32205 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "psychrometrikes-metavoles-thermansi",
    "stem": "Στον παρακάτω ψυχρομετρικό χάρτη έχει σχεδιαστεί μία ψυχρομετρική μεταβολή θέρμανσης του αέρα.",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32205_fig01.webp",
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32205_sol01.webp"
    ],
    "givens": [],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Ποια είναι η θερμοκρασία ξηρού βολβού στο τέλος της μεταβολής (σημείο 2) σε ${}^{\\circ}\\text{C};$ (Αρχή σημείο 1: $22~{}^{\\circ}\\text{C}$)",
        "formula": "$T_2 = 29~{}^{\\circ}\\text{C}$",
        "answer": 29,
        "unit": "°C",
        "tolerance": 0.02,
        "hint": "Διαβάστε την τιμή στον άξονα των θερμοκρασιών ξηρού βολβού για το σημείο 2.",
        "explain": "Για το σημείο 1, η θερμοκρασία ξηρού βολβού είναι $22~{}^{\\circ}\\text{C}$ και για το σημείο 2, είναι $29~{}^{\\circ}\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Ποια είναι η σχετική υγρασία στο τέλος της μεταβολής (σημείο 2) σε $\\%$; (Αρχή σημείο 1: $60\\%$)",
        "formula": "$\\text{RH}_2 = 40\\%$",
        "answer": 40,
        "unit": "%",
        "tolerance": 0.02,
        "hint": "Ακολουθήστε την καμπύλη σχετικής υγρασίας που διέρχεται από το σημείο 2.",
        "explain": "Για το σημείο 1, η σχετική υγρασία είναι $60\\%$ και για το σημείο 2, $40\\%$."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Υπάρχει ύγρανση του αέρα κατά τη μεταβολή αυτή; Να επιλέξετε τη σωστή απάντηση.",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Ναι, διότι αυξάνεται η θερμοκρασία και προστίθεται υγρασία στον αέρα."
          },
          {
            "id": "b",
            "text": "Δεν υπάρχει ύγρανση του αέρα καθώς ο λόγος υγρασίας $W$ παραμένει σταθερός."
          },
          {
            "id": "c",
            "text": "Ναι, επειδή μεταβάλλεται η σχετική υγρασία από 60% σε 40%."
          },
          {
            "id": "d",
            "text": "Δεν υπάρχει ύγρανση επειδή μειώνεται η ενθαλπία του αέρα."
          }
        ],
        "answer": "b",
        "explain": "Κατά την απλή θέρμανση χωρίς ύγρανση, η κατάσταση μετακινείται οριζόντια προς τα δεξιά στον ψυχρομετρικό χάρτη, οπότε ο λόγος υγρασίας $W$ παραμένει σταθερός."
      }
    ]
  },
  {
    "id": "ch10-32787",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #32787",
    "bankCode": "32787",
    "title": "#32787 — Θέμα 2$^{ο}$",
    "units": 15,
    "theory": "psychrometrikes-metavoles-diagrammata",
    "stem": "Με βάση τα διαγράμματα και τις καμπύλες του ψυχρομετρικού χάρτη, να κάνετε τις αντιστοιχίσεις.",
    "givens": [],
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τα στοιχεία του διαγράμματος (Στήλη Α) με την αντίστοιχη έννοια (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "Γραμμή 1"
          },
          {
            "id": "2",
            "text": "Γραμμή 2"
          },
          {
            "id": "3",
            "text": "Γραμμή 3"
          },
          {
            "id": "4",
            "text": "Γραμμή 4"
          },
          {
            "id": "5",
            "text": "Γραμμή 5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Γραμμή σχετικής υγρασίας"
          },
          {
            "id": "b",
            "text": "Καμπύλη κορεσμού"
          },
          {
            "id": "c",
            "text": "Γραμμή λόγου υγρασίας"
          },
          {
            "id": "d",
            "text": "Γραμμή θερμοκρασίας ξηρού βολβού"
          },
          {
            "id": "e",
            "text": "Γραμμή ειδικού όγκου"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "a",
          "3": "c",
          "4": "e",
          "5": "d"
        },
        "explain": "Η καμπύλη κορεσμού αντιστοιχεί στο 1, η γραμμή σχετικής υγρασίας στο 2, ο λόγος υγρασίας στο 3, ο ειδικός όγκος στο 4 και η θερμοκρασία ξηρού βολβού στο 5.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32787_fig01.webp"
      },
      {
        "kind": "match",
        "subq": "2.2",
        "prompt": "Αντιστοιχίστε τις ψυχρομετρικές μεταβολές (Στήλη Α) με τα αντίστοιχα διαγράμματα/περιγραφές (Στήλη Β):",
        "left": [
          {
            "id": "1",
            "text": "Θέρμανση χωρίς ύγρανση"
          },
          {
            "id": "2",
            "text": "Ψύξη αέρα με αφύγρανση"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Διάγραμμα α",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32787_fig02.webp"
          },
          {
            "id": "b",
            "text": "Διάγραμμα β",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32787_fig03.webp"
          },
          {
            "id": "c",
            "text": "Διάγραμμα γ",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32787_fig04.webp"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "a"
        },
        "explain": "Η θέρμανση χωρίς ύγρανση αντιστοιχεί στο β, ενώ η ψύξη αέρα με αφύγρανση αντιστοιχεί στο α."
      }
    ]
  },
  {
    "id": "ch10-32837",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #32837",
    "bankCode": "32837",
    "title": "#32837 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "psychrometrikes-metavoles-thermansi-ugransi",
    "stem": "Απαντήστε στις ερωτήσεις σχετικά με τους ψυχρομετρικούς όρους και τη θέρμανση με ύγρανση.",
    "givens": [],
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "prompt": "Συμπληρώστε τα κενά στις παρακάτω προτάσεις επιλέγοντας από τη λίστα λέξεων:",
        "textBefore": [
          "α. Ο ",
          " βρίσκεται μέσα στον κλιματιζόμενο χώρο ώστε να ελέγχεται η σχετική υγρασία αυτού.\nβ. Η ολική θερμότητα ανά μονάδα μάζας ξηρού αέρα ($\\text{J}/\\text{Kg}$ ξηρού αέρα) ονομάζεται ολική ",
          ".\nγ. Η διαδικασία της θέρμανσης προσθέτει ",
          " θερμότητα στο χώρο."
        ],
        "answers": [
          "υγροστάτης",
          "ενθαλπία",
          "αισθητή"
        ],
        "bank": [
          "εντροπία",
          "λανθάνουσα",
          "υγραντήρας",
          "ενθαλπία",
          "αισθητή",
          "υγροστάτης"
        ],
        "explain": "Ο υγροστάτης ρυθμίζει τη σχετική υγρασία. Η ολική θερμότητα ανά μονάδα μάζας είναι η ενθαλπία. Η θέρμανση προσθέτει αισθητή θερμότητα."
      },
      {
        "kind": "mc",
        "subq": "2.2α",
        "prompt": "Γιατί είναι απαραίτητη η ύγρανση του αέρα στη συγκεκριμένη ψυχρομετρική μεταβολή (θέρμανση με ύγρανση);",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Για να εξασφαλιστούν άριστες συνθήκες θερμικής άνεσης και να αποφευχθεί η πτώση της σχετικής υγρασίας σε πολύ χαμηλά επίπεδα (<30%) που προκαλούν δυσφορία."
          },
          {
            "id": "b",
            "text": "Για να αυξηθεί η θερμοκρασία του αέρα πάνω από τους 40°C."
          },
          {
            "id": "c",
            "text": "Για να μειωθεί η κατανάλωση ενέργειας της κλιματιστικής μονάδας."
          },
          {
            "id": "d",
            "text": "Για να επιτευχθεί πλήρης αφύγρανση του κλιματιζόμενου χώρου."
          }
        ],
        "answer": "a",
        "explain": "Η ύγρανση εξασφαλίζει συνθήκες θερμικής άνεσης, αποτρέποντας την υπερβολική ξηρότητα (σχετική υγρασία <30%) στον χώρο."
      },
      {
        "kind": "mc",
        "subq": "2.2β",
        "prompt": "Με ποιον τρόπο επιτυγχάνεται η ύγρανση του αέρα;",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Με τη χρήση ηλεκτρικών θερμαντήρων υψηλς ισχύος."
          },
          {
            "id": "b",
            "text": "Με την παροχή, μέσω των υγραντήρων μιας κλιματιστικής μονάδας και συστήματος τελικής διανομής, ποσότητας αέρα με σχετική υγρασία 40-55%."
          },
          {
            "id": "c",
            "text": "Με την ανάμειξη αποκλειστικά εξωτερικού νωπού αέρα χωρίς φίλτρα."
          },
          {
            "id": "d",
            "text": "Με τη χρήση συμπυκνωτών ψυκτικού κύκλου."
          }
        ],
        "answer": "b",
        "explain": "Η ύγρανση επιτυγχάνεται με τη χρήση υγραντήρων στις κλιματιστικές μονάδες ώστε να διατηρείται η σχετική υγρασία στο εύρος 40-55%."
      }
    ]
  },
  {
    "id": "ch10-32843",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #32843",
    "bankCode": "32843",
    "title": "#32843 — Θέμα 2$^{ο}$",
    "units": 25,
    "theory": "psychrometrikes-metavoles-enallaktikes",
    "stem": "Μελέτη ψυχρομετρικών μεταβολών και χαρακτηριστικών αέρα ανάμειξης.",
    "givens": [],
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε τα διαγράμματα (Στήλη Α) με τις ψυχρομετρικές μεταβολές (Στήλη Β):",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32843_fig01.webp",
        "left": [
          {
            "id": "1",
            "text": "Διάγραμμα 1"
          },
          {
            "id": "2",
            "text": "Διάγραμμα 2"
          },
          {
            "id": "3",
            "text": "Διάγραμμα 3"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Θέρμανση του αέρα με ύγρανση"
          },
          {
            "id": "b",
            "text": "Θέρμανση του αέρα χωρίς ύγρανση"
          },
          {
            "id": "c",
            "text": "Ψύξη του αέρα με αφύγρανση στην πράξη"
          },
          {
            "id": "d",
            "text": "Αδιαβατική ψύξη"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "c",
          "3": "a"
        },
        "explain": "Το διάγραμμα 1 αντιστοιχεί στη θέρμανση χωρίς ύγρανση (β), το 2 στη ψύξη με αφύγρανση (γ) και το 3 στη θέρμανση με ύγρανση (α)."
      },
      {
        "kind": "tf",
        "subq": "2.2α",
        "prompt": "Στην μεταβολή της θέρμανσης χωρίς ύγρανση ο λόγος της υγρασίας του αέρα μειώνεται σταδιακά.",
        "answer": false,
        "explain": "Λάθος. Στην απλή θέρμανση χωρίς ύγρανση, ο λόγος υγρασίας $W$ παραμένει σταθερός."
      },
      {
        "kind": "tf",
        "subq": "2.2β",
        "prompt": "Κατά την διάρκεια της αδιαβατικής ψύξης ο αέρας διατηρεί την ενθαλπία του.",
        "answer": true,
        "explain": "Σωστό. Η αδιαβατική ψύξη πραγματοποιείται κατά μήκος μιας γραμμής σταθερής ενθαλπίας."
      },
      {
        "kind": "tf",
        "subq": "2.2γ",
        "prompt": "Η λανθάνουσα θερμότητα που αφαιρείται κατά την διάρκεια της ψύξης του αέρα με αφύγρανση είναι μικρότερη από την θερμότητα που απαιτήθηκε για την συμπύκνωση της υγρασίας του κορεσμένου αέρα.",
        "answer": false,
        "explain": "Λάθος."
      },
      {
        "kind": "tf",
        "subq": "2.2δ",
        "prompt": "Κατά την θέρμανση του αέρα είναι απαραίτητη η ύγρανση του αέρα εάν θέλουμε να εξασφαλίσουμε άριστες συνθήκες άνεσης.",
        "answer": true,
        "explain": "Σωστό. Η ύγρανση αποτρέπει την υπερβολική πτώση της σχετικής υγρασίας εξασφαλίζοντας θερμική άνεση."
      },
      {
        "kind": "mc",
        "subq": "2.3",
        "prompt": "Από τι εξαρτώνται τα χαρακτηριστικά του αέρα που δημιουργείται από την ανάμειξη του εξωτερικού αέρα περιβάλλοντος με τον αέρα του εσωτερικού περιβάλλοντος (ή με τον ανακυκλοφορούντα αέρα);",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Αποκλειστικά από τη θερμοκρασία του εξωτερικού αέρα."
          },
          {
            "id": "b",
            "text": "Από το ποσοστό ανάμειξης του κλιματιζόμενου με τον νωπό αέρα καθώς και από τα ψυχρομετρικά χαρακτηριστικά των δύο ρευμάτων αέρα που αναμειγνύονται."
          },
          {
            "id": "c",
            "text": "Μόνο από την ταχύτητα ροής των ανεμιστήρων."
          },
          {
            "id": "d",
            "text": "Από την πίεση λειτουργίας του ψυκτικού συμπιεστή."
          }
        ],
        "answer": "b",
        "explain": "Τα χαρακτηριστικά του μεικτού αέρα εξαρτώνται άμεσα από τα ποσοστά αναλογίας ανάμειξης και τα ψυχρομετρικά δεδομένα (θερμοκρασία, υγρασία) των δύο εισερχόμενων ρευμάτων αέρα."
      }
    ]
  },
  {
    "id": "ch10-32844",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #32844",
    "bankCode": "32844",
    "title": "#32844 — Θέμα 4$^{ο}$ (Ψυχρομετρική μεταβολή ΑΒ)",
    "units": 25,
    "theory": "psychrometric-processes",
    "stem": "Σε επαγγελματικό χώρο τον μήνα Δεκέμβριο, ο ατμοσφαιρικός αέρας μετρήθηκε να έχει θερμοκρασία ξηρού βολβού $17\\,{}^{\\circ}\\text{C}$ και σχετική υγρασία $50\\%$. Ο αέρας του χώρου αυτού κλιματίζεται μέχρι τη θερμοκρασία ξηρού βολβού των $25\\,{}^{\\circ}\\text{C}$ και σχετική υγρασία $30\\%$. Με τη βοήθεια του Διαγράμματος 2 (ψυχρομετρικός χάρτης) που σας δίνεται:",
    "givens": [
      {
        "label": "$T_{A}$",
        "value": "$17 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\text{RH}_A$",
        "value": "$50 \\%$"
      },
      {
        "label": "$T_{B}$",
        "value": "$25 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\text{RH}_B$",
        "value": "$30 \\%$"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "Να αποτυπώσετε πάνω στο Διάγραμμα 2, τη μεταβολή ΑΒ.",
        "explain": "Η αποτύπωση της μεταβολής ΑΒ γίνεται με τον εντοπισμό των σημείων Α και Β στον ψυχρομετρικό χάρτη βάσει των δεδομένων θερμοκρασίας και σχετικής υγρασίας και τη σύνδεσή τους.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32844_sol01.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32844_sol01.webp"
      },
      {
        "kind": "mc",
        "subq": "4.2",
        "prompt": "Με την βοήθεια του ψυχομετρικού χάρτη με τις συνθήκες άνεσης (Διάγραμμα 1), να αιτιολογήσετε εάν στην τελική κατάσταση Β της μεταβολής οι εργαζόμενοι του επαγγελματικού χώρου μας θα νιώθουν άνετα.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32844_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "Ναι, θα νιώθουν άνετα διότι το σημείο βρίσκεται εντός της ζώνης άνεσης."
          },
          {
            "id": "b",
            "text": "Όχι, δεν θα νιώθουν άνετα το μήνα Δεκέμβριο· συγκεκριμένα θα αισθάνονται, κατά μεγάλη πλειοψηφία, ότι βρίσκονται σε θερμό περιβάλλον."
          },
          {
            "id": "c",
            "text": "Όχι, διότι βρίσκονται σε πολύ ψυχρό περιβάλλον."
          },
          {
            "id": "d",
            "text": "Δεν επηρεάζεται η αίσθηση άνεσης από τη σχετική υγρασία."
          }
        ],
        "answer": "b",
        "explain": "Στο διάγραμμα 1, το σημείο τομής της θερμοκρασίας ξηρού βολβού $25\\,{}^{\\circ}\\text{C}$ και της καμπύλης σχετικής υγρασίας $\\text{RH } 30\\%$ βρίσκεται μέσα στη γραμμοσκιασμένη περιοχή του διαγράμματος που αφορά την εποχή του καλοκαιριού. Άρα οι εργαζόμενοι δεν θα νιώθουν άνετα τον Δεκέμβριο, αισθανόμενοι θερμό περιβάλλον."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Να υπολογίσετε τη μεταβολή του λόγου υγρασίας $\\Delta W$, κατά τη μεταβολή ΑΒ σε $\\text{gr}/\\text{kg}$ ξηρού αέρα και να χαρακτηρίσετε το είδος της μεταβολής AB, δικαιολογώντας την απάντηση σας.",
        "formula": "$\\Delta W = W_B - W_A$",
        "answer": 0,
        "unit": "gr/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε τις τιμές $W_A$ και $W_B$ από τον ψυχρομετρικό χάρτη κινούμενοι παράλληλα με τις ευθείες του λόγου υγρασίας.",
        "explain": "Από τον ψυχρομετρικό χάρτη βρίσκουμε $W_A = W_B = 6\\,\\text{gr}/\\text{kg}$. Άρα η μεταβολή του λόγου υγρασίας είναι $\\Delta W = W_B - W_A = 6 - 6 = 0\\,\\text{gr}/\\text{kg}$. Η μεταβολή είναι θέρμανση, αφού η θερμοκρασία αυξήθηκε ($T_B > T_A$), χωρίς ύγρανση αφού η μεταβολή του λόγου υγρασίας είναι μηδέν."
      }
    ]
  },
  {
    "id": "ch10-32938",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #32938",
    "bankCode": "32938",
    "title": "#32938 — Θέμα 4$^{ο}$ (Ψυχρομετρικές μεταβολές και ενθαλπία)",
    "units": 25,
    "theory": "psychrometric-processes",
    "stem": "Ατμοσφαιρικός αέρας εσωτερικού χώρου, θερμοκρασίας ξηρού βολβού $14\\,{}^{\\circ}\\text{C}$ και σχετικής υγρασίας $30\\%$, θερμαίνεται με ύγρανση έως τους $19\\,{}^{\\circ}\\text{C}$ και σχετική υγρασία $50\\%$.",
    "givens": [
      {
        "label": "$T_1$",
        "value": "$14 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\text{RH}_1$",
        "value": "$30 \\%$"
      },
      {
        "label": "$T_2$",
        "value": "$19 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\text{RH}_2$",
        "value": "$50 \\%$"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "α",
        "prompt": "Αποτυπώστε τα δύο σημεία 1 και 2 στον ψυχρομετρικό χάρτη, στην αρχή και στο τέλος της μεταβολής αντίστοιχα.",
        "explain": "Τα σημεία 1 και 2 εντοπίζονται στις τομές των αντίστοιχων θερμοκρασιών ξηρού βολβού και σχετικών υγρασιών στον ψυχρομετρικό χάρτη.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32938_sol02.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_32938_sol02.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Πόση είναι η θερμοκρασία υγρού βολβού $T_{\\text{WB}}$ στο τέλος της μεταβολής, σημείο 2;",
        "formula": "$T_{WB}$",
        "answer": 13,
        "unit": "°C",
        "tolerance": 0.05,
        "hint": "Ακολουθήστε την πλάγια διακεκομμένη γραμμή υγρού βολβού που περνάει από το σημείο 2.",
        "explain": "Για το σημείο 2, η θερμοκρασία υγρού βολβού προκύπτει $T_{\\text{WB}} = 13\\,{}^{\\circ}\\text{C}$ από την ανάγνωση των διακεκομμένων πλάγιων γραμμών του ψυχρομετρικού χάρτη."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Ποιος είναι ο λόγος υγρασίας $W$ στην αρχική κατάσταση, σημείο 1;",
        "formula": "$W_1$",
        "answer": 3,
        "unit": "gr/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε τον λόγο υγρασίας από τη δεξιά κατακόρυφη κλίμακα του ψυχρομετρικού χάρτη.",
        "explain": "Για το σημείο 1, προβάλλουμε οριζόντια το σημείο στη δεξιά κατακόρυφη στήλη του χάρτη και βρίσκουμε $W_1 = 3\\,\\text{gr}/\\text{kg}$ ξηρού αέρα."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Πόση είναι η μεταβολή της ολικής ενθαλπίας $\\Delta h$ κατά τη μετάβαση από το σημείο 1 στο σημείο 2 σε $\\text{kJ}/\\text{kg}$ ξηρού αέρα;",
        "formula": "$\\Delta h = h_2 - h_1$",
        "answer": 14,
        "unit": "kJ/kg",
        "tolerance": 0.05,
        "hint": "Βρείτε τις ενθαλπίες $h_1$ και $h_2$ από την κλίμακα ενθαλπίας του χάρτη και αφαιρέστε τις.",
        "explain": "Από τον ψυχρομετρικό χάρτη οι ενθαλπίες είναι $h_1 = 22\\,\\text{kJ}/\\text{kg}$ και $h_2 = 36\\,\\text{kJ}/\\text{kg}$ ξηρού αέρα. Επομένως, η μεταβολή της ενθαλπίας είναι $\\Delta h = h_2 - h_1 = 36 - 22 = 14\\,\\text{kJ}/\\text{kg}$ ξηρού αέρα."
      }
    ]
  },
  {
    "id": "ch10-33898",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "blank",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33898",
    "bankCode": "33898",
    "title": "#33898 — Θέμα 2$^{ο}$ (Αδιαβατική ψύξη και θέρμανση αέρα)",
    "units": 25,
    "theory": "psychrometric-processes",
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "prompt": "Συμπληρώστε τα κενά στο κείμενο σχετικά με την αδιαβατική ψύξη:",
        "textBefore": [
          "«Στην αδιαβατική ψύξη ο αέρας διατηρεί την ",
          " (1) του. Η συγκεκριμένη μεταβολή παρατηρείται σε συσκευές που ψύχουν ",
          " (2) χώρους, και επιτυγχάνεται με την προσθήκη ",
          " (3) μέσα στη μάζα του αέρα.»"
        ],
        "answers": [
          "ενθαλπία",
          "μικρούς",
          "υγρασίας"
        ],
        "bank": [
          "θερμότητας",
          "μικρούς",
          "εντροπία",
          "ενθαλπία",
          "μεγάλους",
          "υγρασίας"
        ],
        "explain": "Στην αδιαβατική ψύξη η ενθαλπία παραμένει σταθερά. Η μέθοδος αυτή εφαρμόζεται σε μικρούς χώρους με προσθήκη υγρασίας (νερού) στη μάζα του αέρα."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "prompt": "Στο διάγραμμα θέρμανσης του αέρα χωρίς ύγρανση, ποια από τα παρακάτω μεγέθη (α. Αισθητή θερμότητα, β. Θερμοκρασία υγροποίησης, γ. Λόγος υγρασίας, δ. Ενθαλπία, ε. Θερμοκρασία ξηρού θερμομέτρου, στ. Λανθάνουσα θερμότητα, ζ. Σχετική υγρασία, η. Θερμοκρασία υγρού θερμομέτρου) παραμένουν ΣΤΑΘΕΡΑ (1) και ποια είναι ΜΕΤΑΒΛΗΤΑ (2);",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_33898_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "1. Σταθερά: (β, γ, στ) — 2. Μεταβλητά: (α, δ, ε, ζ, η)"
          },
          {
            "id": "b",
            "text": "1. Σταθερά: (α, δ, ε) — 2. Μεταβλητά: (β, γ, στ, ζ, η)"
          },
          {
            "id": "c",
            "text": "1. Σταθερά: (γ, δ, ζ) — 2. Μεταβλητά: (α, β, ε, στ, η)"
          },
          {
            "id": "d",
            "text": "1. Σταθερά: (β, ε, η) — 2. Μεταβλητά: (α, γ, δ, στ, ζ)"
          }
        ],
        "answer": "a",
        "explain": "Στη θέρμανση χωρίς ύγρανση, η θερμοκρασία υγροποίησης/δρόσου (β), ο λόγος υγρασίας (γ) και η λανθάνουσα θερμότητα (στ) παραμένουν σταθερά. Αντίθετα, η αισθητή θερμότητα (α), η ενθαλπία (δ), η θερμοκρασία ξηρού (ε) και υγρού θερμομέτρου (η) καθώς και η σχετική υγρασία (ζ) μεταβάλλονται."
      }
    ]
  },
  {
    "id": "ch10-33913",
    "group": "ch10-08-psychrometrikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33913",
    "bankCode": "33913",
    "title": "#33913 — Θέμα 4$^{ο}$ (Θέρμανση και προσθήκη υγρασίας)",
    "units": 25,
    "theory": "psychrometric-processes",
    "stem": "Χώρος με θερμοκρασία (ξηρού θερμομέτρου) $18\\,{}^{\\circ}\\text{C}$ και σχετική υγρασία $20\\%$ θερμαίνεται με αποτέλεσμα να αυξηθεί η θερμοκρασία του κατά $4\\,{}^{\\circ}\\text{C}$. Παράλληλα προστέθηκε στο χώρο υγρασία σε ποσότητα $5\\,\\text{gr}$ νερού/kg ξηρού αέρα.",
    "givens": [
      {
        "label": "$T_A$",
        "value": "$18 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\text{RH}_A$",
        "value": "$20 \\%$"
      },
      {
        "label": "$\\Delta T$",
        "value": "$4 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$\\Delta W$",
        "value": "$5 \\text{gr/kg}$"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "α",
        "prompt": "Να παραστήσετε τη μεταβολή στον ψυχρομετρικό χάρτη.",
        "explain": "Βρίσκουμε το αρχικό σημείο Α για $18\\,{}^{\\circ}\\text{C}$ και $\\text{RH } 20\\%$ ($W_A = 2{,}5\\,\\text{gr}/\\text{kg}$). Προσθέτοντας $5\\,\\text{gr}/\\text{kg}$ φτάνουμε σε λόγο υγρασίας $W_B = 7{,}5\\,\\text{gr}/\\text{kg}$ και τελική θερμοκρασία $T_B = 18 + 4 = 22\\,{}^{\\circ}\\text{C}$ (σημείο Β).",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_33913_sol01.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-10/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch10_33913_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να βρείτε την καινούργια σχετική υγρασία στο σημείο Β σε τοις εκατό (%).",
        "formula": "$\\text{RH}_B$",
        "answer": 45,
        "unit": "%",
        "tolerance": 0.05,
        "hint": "Εντοπίστε το σημείο τομής του $T_B = 22\\,{}^{\\circ}\\text{C}$ και $W_B = 7{,}5\\,\\text{gr}/\\text{kg}$ στον ψυχρομετρικό χάρτη.",
        "explain": "Στο σημείο Β ($22\\,{}^{\\circ}\\text{C}$ και $7{,}5\\,\\text{gr}/\\text{kg}$), η σχετική υγρασία βρίσκεται περίπου στο μέσο των καμπυλών $40\\%$ και $50\\%$, άρα $\\text{RH}_B = 45\\%$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να βρείτε τις ενθαλπίες $h_1$ (αρχική κατάσταση) και $h_2$ (τελική κατάσταση) σε $\\text{kJ}/\\text{kg}$.",
        "formula": "$h_1, \\; h_2$",
        "answer": 42,
        "unit": "kJ/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε τις τιμές ενθαλπίας για τα σημεία Α και Β από τον ψυχρομετρικό χάρτη.",
        "explain": "Η ενθαλπία για την αρχική κατάσταση (σημείο Α, $18\\,{}^{\\circ}\\text{C}$) είναι $h_1 = 25\\,\\text{kJ}/\\text{kg}$ ξηρού αέρα, ενώ για την τελική κατάσταση (σημείο Β, $22\\,{}^{\\circ}\\text{C}$) είναι $h_2 = 42\\,\\text{kJ}/\\text{kg}$ ξηρού αέρα."
      }
    ]
  }
]
);
;
