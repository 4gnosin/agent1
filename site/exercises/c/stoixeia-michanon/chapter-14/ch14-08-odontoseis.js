window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].exercises.push(...
[
  {
    "id": "ch14-24079",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "24079",
    "code": "Θέμα 4<sup>ο</sup> · #24079",
    "title": "#24079 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 35,
    "stem": "Σε δύο οδοντωτούς τροχούς του κιβωτίου, με κανονική οδόντωση, μετρήθηκαν τα εξής μεγέθη:\n• Ο αριθμός των δοντιών του κινητήριου οδοντωτού τροχού $z_1 = 13$.\n• Ο αριθμός των δοντιών του κινούμενου οδοντωτού τροχού $z_2 = 26$.\n• Η διάμετρος κεφαλής του κινητήριου οδοντωτού τροχού $d_{k1} = 30\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το διαμετρικό βήμα (modul) $m$.",
        "formula": "$m = \\frac{d_{k1}}{z_1 + 2}$",
        "answer": 2,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο διαμέτρου κεφαλής $d_{k1} = m \\cdot (z_1 + 2)$.",
        "explain": "Είναι $30 = m \\cdot (13 + 2) \\implies 30 = m \\cdot 15 \\implies m = 2\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η σχέση μετάδοσης $i$.",
        "formula": "$i = \\frac{z_1}{z_2}$",
        "answer": 0.5,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τον αριθμό δοντιών του κινητήριου τροχού δια του κινούμενου.",
        "explain": "Είναι $i = \\frac{13}{26} = \\frac{1}{2} = 0{,}5$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το βήμα $t$ της οδόντωσης των τροχών.",
        "formula": "$t = m \\cdot \\pi$",
        "answer": 6.28,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul επί το $\\pi$ ($3{,}14$).",
        "explain": "Είναι $t = 2 \\cdot 3{,}14 = 6{,}28\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-27796",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27796",
    "code": "Θέμα 4<sup>ο</sup> · #27796",
    "title": "#27796 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 36,
    "stem": "Σε οδοντωτό τροχό με κανονική οδόντωση μετρήθηκαν ο αριθμός των δοντιών $z = 18$ και η διάμετρος κεφαλής $d_k = 60\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το modul $m$ του οδοντωτού τροχού.",
        "formula": "$m = \\frac{d_k}{z + 2}$",
        "answer": 3,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο διάμετρο κεφαλής $d_k = m \\cdot (z + 2)$.",
        "explain": "Είναι $m = \\frac{60}{18 + 2} = \\frac{60}{20} = 3\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το βήμα $t$ της οδόντωσης.",
        "formula": "$t = m \\cdot \\pi$",
        "answer": 9.42,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul επί $3{,}14$.",
        "explain": "Είναι $t = 3 \\cdot 3{,}14 = 9{,}42\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το πάχος $s$ του δοντιού.",
        "formula": "$s = 0{,}5 \\cdot t$",
        "answer": 4.71,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το βήμα δια 2.",
        "explain": "Είναι $s = 0{,}5 \\cdot 9{,}42 = 4{,}71\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-28178",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28178",
    "code": "Θέμα 4<sup>ο</sup> · #28178",
    "title": "#28178 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 37,
    "stem": "Για έναν οδοντωτό τροχό δίνονται τα εξής στοιχεία:\n• Ύψος δοντιού $h = 6{,}51\\text{ mm}$",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το ύψος κεφαλής του δοντιού $h_k$.",
        "formula": "$h_k = m = \\frac{h}{2{,}17}$",
        "answer": 3,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Βρείτε πρώτα το $m = \\frac{h}{2{,}17}$.",
        "explain": "Είναι $m = \\frac{6{,}51}{2{,}17} = 3\\text{ mm}$, και επειδή $h_k = m$, έχουμε $h_k = 3\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το ύψος ποδιού του δοντιού $h_f$.",
        "formula": "$h_f = 1{,}17 \\cdot m$",
        "answer": 3.51,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul επί 1,17.",
        "explain": "Είναι $h_f = 1{,}17 \\cdot 3 = 3{,}51\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το βήμα της οδόντωσης $t$.",
        "formula": "$t = m \\cdot \\pi$",
        "answer": 9.42,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul επί $3{,}14$.",
        "explain": "Είναι $t = 3 \\cdot 3{,}14 = 9{,}42\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Το πάχος των δοντιών $s$.",
        "formula": "$s = 0{,}5 \\cdot t$",
        "answer": 4.71,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το βήμα επί 0,5.",
        "explain": "Είναι $s = 0{,}5 \\cdot 9{,}42 = 4{,}71\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-28179",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28179",
    "code": "Θέμα 4<sup>ο</sup> · #28179",
    "title": "#28179 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 38,
    "stem": "Σε μετάδοση κίνησης με παράλληλους οδοντωτούς τροχούς δίνονται:\n• Διαμετρικό βήμα (modul) $m = 5\\text{ mm}$\n• Αριθμός δοντιών κινούμενου τροχού $z_2 = 80$\n• Αρχική διάμετρος κινητήριου τροχού $d_{01} = 100\\text{ mm}$",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το ύψος κεφαλής του δοντιού $h_k$.",
        "formula": "$h_k = m$",
        "answer": 5,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Το ύψος κεφαλής είναι ίσο με το modul $m$.",
        "explain": "Είναι $h_k = 5\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το ύψος ποδιού του δοντιού $h_f$.",
        "formula": "$h_f = 1{,}17 \\cdot m$",
        "answer": 5.85,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul επί 1,17.",
        "explain": "Είναι $h_f = 1{,}17 \\cdot 5 = 5{,}85\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Η αρχική διάμετρος $d_{02}$ του κινούμενου τροχού.",
        "formula": "$d_{02} = m \\cdot z_2$",
        "answer": 400,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Πολλαπλασιάστε το modul επί τον αριθμό δοντιών $z_2$.",
        "explain": "Είναι $d_{02} = 5 \\cdot 80 = 400\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Η διάμετρος κεφαλής $d_{k2}$ του κινούμενου τροχού.",
        "formula": "$d_{k2} = m \\cdot (z_2 + 2)$",
        "answer": 410,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Πολλαπλασιάστε το modul επί $(z_2 + 2)$.",
        "explain": "Είναι $d_{k2} = 5 \\cdot (80 + 2) = 5 \\cdot 82 = 410\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "ε",
        "prompt": "Η σχέση μετάδοσης $i$.",
        "formula": "$i = \\frac{d_{01}}{d_{02}}$",
        "answer": 0.25,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την αρχική διάμετρο του κινητήριου δια της αρχικής διαμέτρου του κινούμενου.",
        "explain": "Είναι $i = \\frac{100}{400} = \\frac{1}{4} = 0{,}25$."
      }
    ]
  },
  {
    "id": "ch14-28180",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28180",
    "code": "Θέμα 4<sup>ο</sup> · #28180",
    "title": "#28180 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 39,
    "stem": "Σε οδοντωτό τροχό με κανονική οδόντωση δίνονται:\n• πάχος δοντιού $s = 6{,}28\\text{ mm}$\n• διάμετρος κεφαλής $d_κ = 100\\text{ mm}$",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το διαμετρικό βήμα (modul) $m$.",
        "formula": "$m = \\frac{s}{0{,}5 \\cdot \\pi}$",
        "answer": 4,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Υπολογίστε πρώτα το βήμα $t = \\frac{s}{0{,}5} = 12{,}56\\text{ mm}$ και έπειτα $m = \\frac{t}{\\pi}$.",
        "explain": "Είναι $t = \\frac{6{,}28}{0{,}5} = 12{,}56\\text{ mm}$. Συνεπώς $m = \\frac{12{,}56}{3{,}14} = 4\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τον αριθμό των δοντιών $z$ του τροχού.",
        "formula": "$z = \\frac{d_k}{m} - 2$",
        "answer": 23,
        "unit": "δόντια",
        "tolerance": 0.1,
        "hint": "Λύστε τον τύπο διάμετρος κεφαλής $d_k = m \\cdot (z + 2)$ ως προς $z$.",
        "explain": "Είναι $z + 2 = \\frac{100}{4} = 25 \\implies z = 23$ δόντια."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το διάκενο $w$.",
        "formula": "$w = t - s$",
        "answer": 6.28,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε από το βήμα $t$ το πάχος $s$.",
        "explain": "Είναι $w = 12{,}56 - 6{,}28 = 6{,}28\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-28268",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28268",
    "code": "Θέμα 4<sup>ο</sup> · #28268",
    "title": "#28268 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 40,
    "stem": "4.1 Δύο συνεργαζόμενα γρανάζια έχουν σχέση μετάδοσης $i = 0{,}6$. Το κινούμενο γρανάζι έχει αρχική διάμετρο $d_{02} = 100\\text{ mm}$.\n4.2 Ο άξονας ενός κινητήρα έχει ισχύς $P_1 = 100\\text{ HP}$ και περιστρέφεται με $n_1 = 1000\\text{ rpm}$. Η ισχύς μεταφέρεται σε έναν άλλον άξονα, μέσω δύο γραναζιών με σχέση μετάδοσης $i = 0{,}5$ χωρίς απώλειες.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1α",
        "subqPrompt": "4.1 Δύο συνεργαζόμενα γρανάζια έχουν σχέση μετάδοσης i = 0,6. Το κινούμενο γρανάζι έχει αρχική διάμετρο d02 = 100 mm. Να υπολογίσετε:",
        "prompt": "Την αρχική διάμετρο $d_{01}$ του κινητήριου γραναζιού.",
        "formula": "$d_{01} = i \\cdot d_{02}$",
        "answer": 60,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Πολλαπλασιάστε τη σχέση μετάδοσης $i$ επί την αρχική διάμετρο $d_{02}$.",
        "explain": "Είναι $d_{01} = 0{,}6 \\cdot 100 = 60\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "4.1β",
        "prompt": "Την απόσταση $\\alpha$ μεταξύ των αξόνων των δύο γραναζιών.",
        "formula": "$\\alpha = \\frac{d_{01} + d_{02}}{2}$",
        "answer": 80,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Προσθέστε τις δύο αρχικές διαμέτρους και διαιρέστε δια 2.",
        "explain": "Είναι $\\alpha = \\frac{60 + 100}{2} = \\frac{160}{2} = 80\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "4.2α",
        "subqPrompt": "4.2 Ο άξονας ενός κινητήρα έχει ισχύ P1 = 100 HP και περιστρέφεται με n1 = 1000 rpm. Η ισχύς μεταφέρεται σε έναν άλλον άξονα, μέσω δύο γραναζιών με σχέση μετάδοσης i = 0,5. Η μετάδοση ισχύος γίνεται χωρίς απώλειες. Να υπολογίσετε:",
        "prompt": "Τη στρεπτική ροπή $M_1$ του κινητήριου άξονα.",
        "formula": "$M_1 = \\frac{716{,}2 \\cdot P_1}{n_1}$",
        "answer": 71.62,
        "unit": "daN·m",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον τύπο στρεπτικής ροπής $M_1 = \\frac{716{,}2 \\cdot P_1}{n_1}$.",
        "explain": "Είναι $M_1 = \\frac{716{,}2 \\cdot 100}{1000} = 71{,}62\\text{ daN}\\cdot\\text{m}$."
      },
      {
        "kind": "calc",
        "subq": "4.2β",
        "prompt": "Τη στρεπτική ροπή $M_2$ του κινούμενου άξονα.",
        "formula": "$M_2 = \\frac{M_1}{i}$",
        "answer": 143.24,
        "unit": "daN·m",
        "tolerance": 0.05,
        "hint": "Διαιρέστε τη ροπή $M_1$ δια τη σχέση μετάδοσης $i$ (ή χρησιμοποιήστε $P_2$ και $n_2$).",
        "explain": "Είναι $M_2 = \\frac{716{,}2 \\cdot 100}{500} = 143{,}24\\text{ daN}\\cdot\\text{m}$ (ή $M_2 = \\frac{71{,}62}{0{,}5} = 143{,}24\\text{ daN}\\cdot\\text{m}$).."
      }
    ]
  },
  {
    "id": "ch14-28271",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28271",
    "code": "Θέμα 4<sup>ο</sup> · #28271",
    "title": "#28271 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 41,
    "stem": "Σε οδοντοκίνηση με παράλληλους τροχούς δίνονται:\n• το διαμετρικό βήμα (modul) $m = 2\\text{ mm}$,\n• ο αριθμός δοντιών κινητήριου τροχού $z_1 = 20$\n• ο αριθμός δοντιών κινούμενου τροχού $z_2 = 40$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α1",
        "subqPrompt": "Οι αρχικές διάμετροι των οδοντωτών τροχών d01, d02.",
        "formula": "$d_{01} = m \\cdot z_1$",
        "answer": 40,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Πολλαπλασιάστε το modul επί τον αριθμό δοντιών $z_1$.",
        "explain": "Είναι $d_{01} = 2 \\cdot 20 = 40\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "α2",
        "prompt": "Αρχική διάμετρος κινούμενου τροχού $d_{02}$.",
        "formula": "$d_{02} = m \\cdot z_2$",
        "answer": 80,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Πολλαπλασιάστε το modul επί $z_2$.",
        "explain": "Είναι $d_{02} = 2 \\cdot 40 = 80\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η απόσταση $\\alpha$ μεταξύ των αξόνων των οδοντωτών τροχών.",
        "formula": "$\\alpha = \\frac{d_{01} + d_{02}}{2}$",
        "answer": 60,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Προσθέστε τις διαμέτρους $d_{01}$ και $d_{02}$ και διαιρέστε δια 2.",
        "explain": "Είναι $\\alpha = \\frac{40 + 80}{2} = 60\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ1",
        "subqPrompt": "Οι διάμετροι των κεφαλών των οδοντωτών τροχών dk1, dk2.",
        "formula": "$d_{k1} = m \\cdot (z_1 + 2)$",
        "answer": 44,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Εφαρμόστε τον τύπο διάμετρο κεφαλής για τον κινητήριο τροχό.",
        "explain": "Είναι $d_{k1} = 2 \\cdot (20 + 2) = 44\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ2",
        "prompt": "Διάμετρος κεφαλής κινούμενου τροχού $d_{k2}$.",
        "formula": "$d_{k2} = m \\cdot (z_2 + 2)$",
        "answer": 84,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Εφαρμόστε τον τύπο διάμετρο κεφαλής για τον κινούμενο τροχό ($z_2 = 40$).",
        "explain": "Είναι $d_{k2} = 2 \\cdot (40 + 2) = 84\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Αν η περιφερειακή ταχύτητα των γραναζιών είναι $3{,}14\\text{ m/s}$, να υπολογιστεί ο αριθμός στροφών του κινητήριου τροχού $n_1$ σε rpm.",
        "formula": "$n_1 = \\frac{v}{\\pi \\cdot d_{01}}$",
        "answer": 1500,
        "unit": "rpm",
        "tolerance": 1,
        "hint": "Μετατρέψτε το $d_{01}$ σε μέτρα ($0{,}04\\text{ m}$) και υπολογίστε τις στροφές ανά δευτερόλεπτο και έπειτα σε rpm.",
        "explain": "Είναι $d_{01} = 0{,}04\\text{ m}$. $n_1 = \\frac{3{,}14}{3{,}14 \\cdot 0{,}04} = 25\\text{ rps} = 25 \\cdot 60 = 1500\\text{ rpm}$."
      }
    ]
  },
  {
    "id": "ch14-28272",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "28272",
    "code": "Θέμα 4<sup>ο</sup> · #28272",
    "title": "#28272 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 42,
    "stem": "Σε μετάδοση κίνησης με παράλληλους οδοντωτούς τροχούς δίνονται:\n• Διαμετρικό βήμα (modul) $m = 4\\text{ mm}$,\n• Σχέση μετάδοσης κίνησης $i = 1/2$,\n• Αριθμός δοντιών κινητήριου τροχού $z_1 = 30$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το ύψος της κεφαλής του δοντιού $h_k$.",
        "formula": "$h_k = m$",
        "answer": 4,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Το ύψος κεφαλής είναι ίσο με το modul $m$.",
        "explain": "Είναι $h_k = 4\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το ύψος ποδιού του δοντιού $h_f$.",
        "formula": "$h_f = 1{,}17 \\cdot m$",
        "answer": 4.68,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul επί 1,17.",
        "explain": "Είναι $h_f = 1{,}17 \\cdot 4 = 4{,}68\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Η απόσταση $\\alpha$ μεταξύ των αξόνων των οδοντωτών τροχών.",
        "formula": "$\\alpha = \\frac{d_{01} + d_{02}}{2}$",
        "answer": 180,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε πρώτα τα $d_{01} = m \\cdot z_1$ και $d_{02} = \\frac{d_{01}}{i}$, και έπειτα την απόσταση αξόνων.",
        "explain": "Είναι $d_{01} = 4 \\cdot 30 = 120\\text{ mm}$. Επειδή $i = \\frac{1}{2}$, είναι $d_{02} = 2 \\cdot 120 = 240\\text{ mm}$. Συνεπώς $\\alpha = \\frac{120 + 240}{2} = 180\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-30436",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "30436",
    "code": "Θέμα 4<sup>ο</sup> · #30436",
    "title": "#30436 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 43,
    "stem": "Ο τυποποιημένος οδοντωτός τροχός με κανονική οδόντωση, του Σχήματος 1, έχει βήμα οδόντωσης $t$ ίσο με $t = 15{,}7\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το διαμετρικό βήμα (modul) $m$ του τροχού.",
        "formula": "$m = \\frac{t}{\\pi}$",
        "answer": 5,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Διαιρέστε το βήμα $t$ δια $\\pi$ ($3{,}14$).",
        "explain": "Είναι $m = \\frac{15{,}7}{3{,}14} = 5\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το πάχος του δοντιού $s$.",
        "formula": "$s = 0{,}5 \\cdot t$",
        "answer": 7.85,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το βήμα $t$ επί 0,5.",
        "explain": "Είναι $s = 0{,}5 \\cdot 15{,}7 = 7{,}85\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το ύψος του δοντιού $h$.",
        "formula": "$h = 2{,}17 \\cdot m$",
        "answer": 10.85,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul $m$ επί 2,17.",
        "explain": "Είναι $h = 2{,}17 \\cdot 5 = 10{,}85\\text{ mm}$.",
        "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_30436_fig01.webp"
      }
    ]
  },
  {
    "id": "ch14-30441",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "30441",
    "code": "Θέμα 4<sup>ο</sup> · #30441",
    "title": "#30441 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 44,
    "stem": "Ο τυποποιημένος οδοντωτός τροχός με κανονική οδόντωση, του Σχήματος 1, έχει ύψος δοντιού $h$ ίσο με $h = 6{,}51\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το διαμετρικό βήμα (modul) $m$ του τροχού.",
        "formula": "$m = \\frac{h}{2{,}17}$",
        "answer": 3,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Διαιρέστε το ύψος $h$ δια 2,17.",
        "explain": "Είναι $m = \\frac{6{,}51}{2{,}17} = 3\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το βήμα της οδόντωσης $t$.",
        "formula": "$t = m \\cdot \\pi$",
        "answer": 9.42,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul $m$ επί $3{,}14$.",
        "explain": "Είναι $t = 3 \\cdot 3{,}14 = 9{,}42\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το πάχος του δοντιού $s$.",
        "formula": "$s = 0{,}5 \\cdot t$",
        "answer": 4.71,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το βήμα $t$ επί 0,5.",
        "explain": "Είναι $s = 0{,}5 \\cdot 9{,}42 = 4{,}71\\text{ mm}$.",
        "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_30441_fig01.webp"
      }
    ]
  },
  {
    "id": "ch14-30450",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "30450",
    "code": "Θέμα 4<sup>ο</sup> · #30450",
    "title": "#30450 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 45,
    "stem": "Το τυποποιημένο γρανάζι με κανονική οδόντωση του Σχήματος 1 έχει αρχική διάμετρο $d_o$ ίση με $d_o = 20\\text{ mm}$ και διάμετρο κεφαλής $d_κ$ ίση με $d_κ = 28\\text{ mm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το διαμετρικό βήμα (modul) $m$ του γραναζιού.",
        "formula": "$m = \\frac{d_κ - d_o}{2}$",
        "answer": 4,
        "unit": "mm",
        "tolerance": 0.05,
        "hint": "Αφαιρέστε την αρχική διάμετρο από τη διάμετρο κεφαλής και διαιρέστε δια 2.",
        "explain": "Είναι $m = \\frac{28 - 20}{2} = \\frac{8}{2} = 4\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το βήμα της οδόντωσης $t$.",
        "formula": "$t = m \\cdot \\pi$",
        "answer": 12.56,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το modul $m$ επί $3{,}14$.",
        "explain": "Είναι $t = 4 \\cdot 3{,}14 = 12{,}56\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Το πάχος του δοντιού $s$.",
        "formula": "$s = 0{,}5 \\cdot t$",
        "answer": 6.28,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το βήμα $t$ επί 0,5.",
        "explain": "Είναι $s = 0{,}5 \\cdot 12{,}56 = 6{,}28\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "Το διάκενο μεταξύ των δοντιών $w$.",
        "formula": "$w = t - s$",
        "answer": 6.28,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε από το βήμα $t$ το πάχος $s$.",
        "explain": "Είναι $w = 12{,}56 - 6{,}28 = 6{,}28\\text{ mm}$.",
        "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_30450_fig01.webp"
      }
    ]
  },
  {
    "id": "ch14-30935",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "30935",
    "code": "Θέμα 4<sup>ο</sup> · #30935",
    "title": "#30935 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 46,
    "stem": "Σε μια οδοντοκίνηση με τρεις παράλληλους άξονες και δύο ζευγάρια οδοντωτών τροχών με κανονική οδόντωση, όπως φαίνεται στο Σχήμα 1, μετρήθηκαν:\n• για τον κινητήριο τροχό 1, $z_1 = 15$ δόντια.\n• για τον τροχό 2, $z_2 = 45$ δόντια.\n• για τον τροχό 3, στροφές $n_3 = 360\\text{ rpm}$ και μεταφερόμενη ισχύς $P_3 = 5\\text{ PS}$.\n• για τον τροχό 4, στροφές $n_4 = 180\\text{ rpm}$ και μεταφερόμενη ισχύς $P_4 = 4{,}5\\text{ PS}$.\nΔίνεται επίσης ότι ο βαθμός απόδοσης του πρώτου ζεύγους γραναζιών $\\eta_{1,2} = 0{,}96$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α1",
        "subqPrompt": "Τις επιμέρους σχέσεις μετάδοσης i1 και i2 των δύο ζευγών γραναζιών καθώς και τη συνολική σχέση μετάδοσης iολ της οδοντοκίνησης.",
        "formula": "$i_1 = \\frac{z_1}{z_2}$",
        "answer": 0.333,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τα δόντια $z_1$ δια $z_2$.",
        "explain": "Είναι $i_1 = \\frac{15}{45} = \\frac{1}{3} \\approx 0{,}333$."
      },
      {
        "kind": "calc",
        "subq": "α2",
        "prompt": "Σχέση μετάδοσης δεύτερου ζεύγους $i_2$.",
        "formula": "$i_2 = \\frac{n_4}{n_3}$",
        "answer": 0.5,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τις στροφές $n_4$ δια $n_3$.",
        "explain": "Είναι $i_2 = \\frac{180}{360} = \\frac{1}{2} = 0{,}5$."
      },
      {
        "kind": "calc",
        "subq": "α3",
        "prompt": "Συνολική σχέση μετάδοσης $i_{\\text{ολ}}$.",
        "formula": "$i_{\\text{ολ}} = i_1 \\cdot i_2$",
        "answer": 0.167,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τις σχέσεις μετάδοσης $i_1 \\cdot i_2$.",
        "explain": "Είναι $i_{\\text{ολ}} = \\frac{1}{3} \\cdot \\frac{1}{2} = \\frac{1}{6} \\approx 0{,}167$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Tο βαθμό απόδοσης του δεύτερου ζευγαριού γραναζιών $\\eta_{3,4}$.",
        "formula": "$\\eta_{3,4} = \\frac{P_4}{P_3}$",
        "answer": 0.9,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την ισχύ $P_4$ δια $P_3$.",
        "explain": "Είναι $\\eta_{3,4} = \\frac{4{,}5}{5} = 0{,}9$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Tον συνολικό βαθμό απόδοσης $\\eta_{\\text{ολ}}$ της οδοντοκίνησης.",
        "formula": "$\\eta_{\\text{ολ}} = \\eta_{1,2} \\cdot \\eta_{3,4}$",
        "answer": 0.864,
        "unit": "",
        "tolerance": 0.001,
        "hint": "Πολλαπλασιάστε τους επιμέρους βαθμούς απόδοσης $\\eta_{1,2} \\cdot \\eta_{3,4}$.",
        "explain": "Είναι $\\eta_{\\text{ολ}} = 0{,}96 \\cdot 0{,}9 = 0{,}864$."
      }
    ],
    "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_30935_fig01.webp"
  },
  {
    "id": "ch14-30937",
    "group": "ch14-08-odontoseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "30937",
    "code": "Θέμα 4<sup>ο</sup> · #30937",
    "title": "#30937 — Θέμα 4<sup>ο</sup> (14.8)",
    "units": 25,
    "theory": "ch14-odontoseis",
    "sourceOrder": 47,
    "stem": "Οδοντωτός τροχός με αριθμό δοντιών $z = 20$, τοποθετημένος με σφήνα στον άξονα ηλεκτροκινητήρα ισχύος $P = 30\\text{ PS}$, περιστρέφεται με $n = 625\\text{ rpm}$. Το υλικό των δοντιών του οδοντωτού τροχού είναι από κοινό χυτοχάλυβα με συντελεστή φόρτισης $c = 45$ και συντελεστή μορφής για κατεργασμένα κοινά δόντια $y = 3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε το βήμα $t$ της οδόντωσης σε mm.",
        "formula": "$t = 100 \\cdot \\sqrt[3]{\\frac{450 \\cdot P}{n \\cdot z \\cdot y \\cdot c}}$",
        "answer": 20,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Εφαρμόστε τον τύπο αντοχής οδόντωσης για το βήμα $t$.",
        "explain": "Είναι $t = 100 \\cdot \\sqrt[3]{\\frac{450 \\cdot 30}{625 \\cdot 20 \\cdot 3 \\cdot 45}} = 100 \\cdot \\sqrt[3]{\\frac{13500}{1687500}} = 100 \\cdot \\sqrt[3]{\\frac{1}{125}} = 100 \\cdot \\frac{1}{5} = 20\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Με τη βοήθεια του Πίνακα 1, να επιλέξετε το κατάλληλο τυποποιημένο modul $m$.",
        "formula": "$m = \\frac{t}{\\pi}$",
        "answer": 8,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε $m = \\frac{20}{3{,}14} \\approx 6{,}37\\text{ mm}$ και επιλέξτε το αμέσως μεγαλύτερο τυποποιημένο modul.",
        "explain": "Είναι $m = \\frac{20}{3{,}14} \\approx 6{,}37\\text{ mm}$. Από τον πίνακα επιλέγεται το τυποποιημένο modul $m = 8\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε το εκ νέου βήμα $t_1$ της οδόντωσης με βάση το modul $m$ που επιλέξατε.",
        "formula": "$t_1 = m \\cdot \\pi$",
        "answer": 25.12,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το επιλεγμένο modul ($8\\text{ mm}$) επί $3{,}14$.",
        "explain": "Είναι $t_1 = 8 \\cdot 3{,}14 = 25{,}12\\text{ mm}$."
      }
    ],
    "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_30937_fig01.webp"
  }
]
);
