window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].exercises.push(...
[
  {
    "id": "ch14-24078",
    "group": "ch14-06-atraktoi-axones",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "24078",
    "code": "Θέμα 4<sup>ο</sup> · #24078",
    "title": "#24078 — Θέμα 4$^{ο}$ (14.6)",
    "units": 25,
    "theory": "ch14-atraktoi-axones",
    "sourceOrder": 23,
    "stem": "Η άτρακτος ενός ηλεκτροκινητήρα μεταφέρει ροπή $M_t = 2560\\text{ Kp}\\cdot\\text{cm}$. Η ισχύς του ηλεκτροκινητήρα είναι $P = 25{,}6\\text{ PS}$ και το υλικό της ατράκτου είναι χάλυβας St 60, του οποίου η επιτρεπόμενη διατμητική τάση είναι $\\tau_{\\text{επ}} = 200\\text{ kp/cm}^2$. Η άτρακτος καταπονείται μόνο σε στρέψη και η μεταφορά της κίνησης γίνεται χωρίς απώλειες. (Θεωρείστε 1 HP = 1 PS).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Την επιτρεπόμενη διατμητική τάση $\\tau_{\\text{επ}}$ για το υλικό της ατράκτου.",
        "formula": "$\\tau_{\\text{επ}} = 200\\text{ kp/cm}^2$",
        "answer": 200,
        "unit": "kp/cm²",
        "tolerance": 1,
        "hint": "Δίνεται απευθείας από τα δεδομένα / πίνακα του προβλήματος.",
        "explain": "Από τα δεδομένα του προβλήματος προκύπτει $\\tau_{\\text{επ}} = 200\\text{ kp/cm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τις στροφές $n$ του ηλεκτροκινητήρα.",
        "formula": "$n = \\frac{71620 \\cdot P}{M_t}$",
        "answer": 716.2,
        "unit": "rpm",
        "tolerance": 0.5,
        "hint": "Χρησιμοποιήστε τον τύπο της ροπής $M_t = \\frac{71620 \\cdot P}{n}$ και λύστε ως προς $n$.",
        "explain": "Είναι $n = \\frac{71620 \\cdot 25{,}6}{2560} = 716{,}2\\text{ rpm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Τη διάμετρο $d$ της ατράκτου σε mm.",
        "formula": "$d = \\sqrt[3]{\\frac{M_t}{0{,}2 \\cdot \\tau_{\\text{επ}}}}$",
        "answer": 40,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Χρησιμοποιήστε τον τύπο αντοχής ατράκτου σε στρέψη και μετατρέψτε το αποτέλεσμα σε mm.",
        "explain": "Είναι $d^3 = \\frac{2560}{0{,}2 \\cdot 200} = \\frac{2560}{40} = 64\\text{ cm}^3 \\implies d = \\sqrt[3]{64} = 4\\text{ cm} = 40\\text{ mm}$."
      }
    ],
    "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_24078_fig01.webp"
  },
  {
    "id": "ch14-26024",
    "group": "ch14-06-atraktoi-axones",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26024",
    "code": "Θέμα 4<sup>ο</sup> · #26024",
    "title": "#26024 — Θέμα 4$^{ο}$ (14.6)",
    "units": 25,
    "theory": "ch14-atraktoi-axones",
    "sourceOrder": 24,
    "stem": "Άτρακτος ηλεκτροκινητήρα με διάμετρο $d = 20\\text{ mm}$, περιστρέφεται με $n = 716{,}2\\text{ rpm}$. Η επιτρεπόμενη τάση του υλικού της ατράκτου είναι $\\tau_{\\text{επ}} = 150\\text{ daN/cm}^2$. (Θεωρήστε 1 HP = 1 PS).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Η μεταφερόμενη ροπή στρέψης $M_t$ σε daN·cm.",
        "formula": "$M_t = d^3 \\cdot 0{,}2 \\cdot \\tau_{\\text{επ}}$",
        "answer": 240,
        "unit": "daN·cm",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο σε cm ($2\\text{ cm}$) και εφαρμόστε τον τύπο $M_t = d^3 \\cdot 0{,}2 \\cdot \\tau_{\\text{επ}}$.",
        "explain": "Με $d = 2\\text{ cm}$, έχουμε $M_t = 2^3 \\cdot 0{,}2 \\cdot 150 = 8 \\cdot 30 = 240\\text{ daN}\\cdot\\text{cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η ισχύς $P$ του ηλεκτροκινητήρα, αν υποθέσουμε ότι δεν υπάρχουν απώλειες ισχύος.",
        "formula": "$P = \\frac{M_t \\cdot n}{71620}$",
        "answer": 2.4,
        "unit": "PS",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο ισχύος-ροπής $P = \\frac{M_t \\cdot n}{71620}$.",
        "explain": "Είναι $P = \\frac{240 \\cdot 716{,}2}{71620} = 2{,}4\\text{ PS}$."
      }
    ]
  },
  {
    "id": "ch14-27794",
    "group": "ch14-06-atraktoi-axones",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27794",
    "code": "Θέμα 4<sup>ο</sup> · #27794",
    "title": "#27794 — Θέμα 4$^{ο}$ (14.6)",
    "units": 25,
    "theory": "ch14-atraktoi-axones",
    "sourceOrder": 25,
    "stem": "Άτρακτος ηλεκτροκινητήρα διαμέτρου $d = 30\\text{ mm}$, μεταφέρει κίνηση και περιστρέφεται με $n = 716{,}2\\text{ rpm}$. Δίνεται η επιτρεπόμενη διατμητική τάση του υλικού της ατράκτου $\\tau_{\\text{επ}} = 200\\text{ daN/cm}^2$. Η άτρακτος καταπονείται μόνο σε στρέψη και η μεταφορά της κίνησης γίνεται χωρίς απώλειες. (Θεωρείστε 1 HP = 1 PS).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Τη μεταφερόμενη στρεπτική ροπή $M_t$ σε daN·cm.",
        "formula": "$M_t = d^3 \\cdot 0{,}2 \\cdot \\tau_{\\text{επ}}$",
        "answer": 1080,
        "unit": "daN·cm",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο σε cm ($3\\text{ cm}$) και εφαρμόστε τον τύπο $M_t = d^3 \\cdot 0{,}2 \\cdot \\tau_{\\text{επ}}$.",
        "explain": "Με $d = 3\\text{ cm}$, έχουμε $M_t = 3^3 \\cdot 0{,}2 \\cdot 200 = 27 \\cdot 40 = 1080\\text{ daN}\\cdot\\text{cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την ισχύ $P$ που μεταφέρει η άτρακτος.",
        "formula": "$P = \\frac{M_t \\cdot n}{71620}$",
        "answer": 10.8,
        "unit": "HP",
        "tolerance": 0.05,
        "hint": "Εφαρμόστε τον τύπο ισχύος $P = \\frac{M_t \\cdot n}{71620}$.",
        "explain": "Είναι $P = \\frac{1080 \\cdot 716{,}2}{71620} = 10{,}8\\text{ HP}$."
      }
    ]
  },
  {
    "id": "ch14-27795",
    "group": "ch14-06-atraktoi-axones",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27795",
    "code": "Θέμα 4<sup>ο</sup> · #27795",
    "title": "#27795 — Θέμα 4$^{ο}$ (14.6)",
    "units": 25,
    "theory": "ch14-atraktoi-axones",
    "sourceOrder": 26,
    "stem": "Κινητήρια μηχανή περιστρέφεται με $n = 716{,}2\\text{ rpm}$ και μεταφέρει μέσω μιας ατράκτου, ισχύ $P = 19{,}2\\text{ HP}$. Δίνεται η επιτρεπόμενη διατμητική τάση του υλικού της ατράκτου $\\tau_{\\text{επ}} = 150\\text{ daN/cm}^2$. Η άτρακτος καταπονείται μόνο σε στρέψη και η μεταφορά της κίνησης γίνεται χωρίς απώλειες. (Θεωρείστε 1 HP = 1 PS).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Τη μεταφερόμενη στρεπτική ροπή $M_t$ σε daN·cm.",
        "formula": "$M_t = \\frac{71620 \\cdot P}{n}$",
        "answer": 1920,
        "unit": "daN·cm",
        "tolerance": 1,
        "hint": "Χρησιμοποιήστε τον τύπο $M_t = \\frac{71620 \\cdot P}{n}$.",
        "explain": "Είναι $M_t = \\frac{71620 \\cdot 19{,}2}{716{,}2} = 1920\\text{ daN}\\cdot\\text{cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τη διάμετρο $d$ της ατράκτου σε mm.",
        "formula": "$d = \\sqrt[3]{\\frac{M_t}{0{,}2 \\cdot \\tau_{\\text{επ}}}}$",
        "answer": 40,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Εφαρμόστε τον τύπο διαμέτρου ατράκτου και μετατρέψτε σε mm.",
        "explain": "Είναισ $d^3 = \\frac{1920}{0{,}2 \\cdot 150} = \\frac{1920}{30} = 64\\text{ cm}^3 \\implies d = \\sqrt[3]{64} = 4\\text{ cm} = 40\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-27958",
    "group": "ch14-06-atraktoi-axones",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27958",
    "code": "Θέμα 4<sup>ο</sup> · #27958",
    "title": "#27958 — Θέμα 4$^{ο}$ (14.6)",
    "units": 25,
    "theory": "ch14-atraktoi-axones",
    "sourceOrder": 27,
    "stem": "Ένα γεωργικό σκαπτικό μηχάνημα κινείται από έναν τετράχρονο βενζινοκινητήρα, στην έξοδο του οποίου ο στροφαλοφόρος άξονας (Άτρακτος I), μέσω συστήματος ιμαντοκίνησης, μεταφέρει την κίνηση στην άτρακτο του κιβωτίου ταχυτήτων (Άτρακτος II). Η ισχύς στην Άτρακτο I είναι $P = 6{,}4\\text{ HP}$ και η διάμετρος της είναι $d = 20\\text{ mm}$. Δίνεται $\\tau_{\\text{επ}} = 400\\text{ daN/cm}^2$. (Θεωρείστε 1 HP = 1 PS).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Πόση είναι η ροπή στρέψεως $M_t$ στην Άτρακτο Ι σε daN·cm;",
        "formula": "$M_t = d^3 \\cdot 0{,}2 \\cdot \\tau_{\\text{επ}}$",
        "answer": 640,
        "unit": "daN·cm",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο σε cm ($2\\text{ cm}$) και εφαρμόστε τον τύπο ροπής.",
        "explain": "Με $d = 2\\text{ cm}$, έχουμε $M_t = 2^3 \\cdot 0{,}2 \\cdot 400 = 8 \\cdot 80 = 640\\text{ daN}\\cdot\\text{cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Πόσες είναι οι στροφές $n$ του βενζινοκινητήρα (Άτρακτος I);",
        "formula": "$n = \\frac{71620 \\cdot P}{M_t}$",
        "answer": 716.2,
        "unit": "rpm",
        "tolerance": 0.5,
        "hint": "Χρησιμοποιήστε τον τύπο $n = \\frac{71620 \\cdot P}{M_t}$.",
        "explain": "Είναι $n = \\frac{71620 \\cdot 6{,}4}{640} = 716{,}2\\text{ rpm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Αν ο βαθμός απόδοσης στο σύστημα της ιμαντοκίνησης είναι $\\\\beta = 0{,}9$ (90%), πόση είναι η ισχύς της Ατράκτου II;",
        "formula": "$P_2 = \\\\beta \\cdot P_1$",
        "answer": 5.76,
        "unit": "HP",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την ισχύ $P_1$ επί τον βαθμό απόδοσης $\\\\beta$.",
        "explain": "Είναι $P_2 = 0{,}9 \\cdot 6{,}4 = 5{,}76\\text{ HP}$."
      }
    ]
  }
]
);
