window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].exercises.push(...
[
  {
    "id": "ch14-24753",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "24753",
    "code": "Θέμα 4<sup>ο</sup> · #24753",
    "title": "#24753 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 10,
    "stem": "Κοχλίας καταπονείται σε διάτμηση. Το φορτίο που τον καταπονεί είναι $Q = 3140\\text{ daN}$. Αν το όριο θραύσης του υλικού σε διάτμηση είναι $\\tau_{\\text{θρ}} = 3000\\text{ daN/cm}^2$ και ο συντελεστής ασφαλείας $\\nu_{\\text{ασφ}} = 3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "μονό",
        "prompt": "Να υπολογιστεί η διάμετρος $d_1$ του πυρήνα του κοχλία σε mm.",
        "formula": "$d_1 = \\sqrt{\\frac{4 \\cdot Q}{\\tau_{\\text{επ}} \\cdot \\pi}}$",
        "answer": 20,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε πρώτα την επιτρεπόμενη τάση $\\tau_{\\text{επ}} = \\frac{\\tau_{\\text{θρ}}}{\\nu_{\\text{ασφ}}}$, και έπειτα τη διάμετρο πυρήνα.",
        "explain": "Είναι $\\tau_{\\text{επ}} = \\frac{3000}{3} = 1000\\text{ daN/cm}^2$. Από τον τύπο $d_1^2 = \\frac{4 \\cdot 3140}{1000 \\cdot 3{,}14} = 4\\text{ cm}^2 \\implies d_1 = 2\\text{ cm} = 20\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-25680",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25680",
    "code": "Θέμα 4<sup>ο</sup> · #25680",
    "title": "#25680 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 11,
    "stem": "Ο περαστός κοχλίας σύσφιξης του Σχήματος 1, με διάμετρο πυρήνα $d_1$, υφίσταται αξονική καταπόνηση εφελκυσμού. Η μέγιστη επιτρεπόμενη φόρτιση $F$ που μπορεί να δεχτεί ο κοχλίας κατά την σύσφιξη είναι $F = 3140\\text{ kp}$. Το υλικό κατασκευής του κοχλία έχει ορθή τάση θραύσης $\\sigma_{\\text{θρ}} = 80\\text{ kp/mm}^2$ και συντελεστή ασφάλειας $\\nu_{\\text{ασφ}} = 2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η επιτρεπόμενη τάση $\\sigma_{\\text{επ}}$ του υλικού του κοχλία.",
        "formula": "$\\sigma_{\\text{επ}} = \\frac{\\sigma_{\\text{θρ}}}{\\nu_{\\text{ασφ}}}$",
        "answer": 40,
        "unit": "kp/mm²",
        "tolerance": 0.1,
        "hint": "Διαιρέστε την ορθή τάση θραύσης με τον συντελεστή ασφάλειας.",
        "explain": "Είναι $\\sigma_{\\text{επ}} = \\frac{80\\text{ kp/mm}^2}{2} = 40\\text{ kp/mm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η διάμετρος του πυρήνα $d_1$ του κοχλία.",
        "formula": "$d_1 = \\sqrt{\\frac{4 \\cdot F}{\\sigma_{\\text{επ}} \\cdot \\pi}}$",
        "answer": 10,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε πρώτα την απαιτούμενη διατομή $A = \\frac{F}{\\sigma_{\\text{επ}}}$ και έπειτα τη διάμετρο πυρήνα.",
        "explain": "Είναι $A = \\frac{3140}{40} = 78{,}5\\text{ mm}^2$. Συνεπώς $d_1 = \\sqrt{\\frac{78{,}5 \\cdot 4}{3{,}14}} = \\sqrt{100} = 10\\text{ mm}$.",
        "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_#25680_fig01.png"
      }
    ]
  },
  {
    "id": "ch14-25682",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25682",
    "code": "Θέμα 4<sup>ο</sup> · #25682",
    "title": "#25682 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 12,
    "stem": "Ο κοχλίας κίνησης τετραγωνικού σπειρώματος του Σχήματος 1, με διάμετρο πυρήνα ίση με $d_1 = 10\\text{ mm}$, υφίσταται αξονική και στρεπτική καταπόνηση με μέγιστη επιτρεπόμενη φόρτιση $F = 1800\\text{ kp}$. Το υλικό κατασκευής του κοχλία έχει συντελεστή ασφάλειας $\\nu_{\\text{ασφ}} = 1{,}5$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η επιτρεπόμενη τάση $\\sigma_{\\text{επ}}$ του υλικού του κοχλία σε $\\text{kp/mm}^2$.",
        "formula": "$\\sigma_{\\text{επ}} = \\frac{F}{0{,}6 \\cdot d_1^2}$",
        "answer": 30,
        "unit": "kp/mm²",
        "tolerance": 0.1,
        "hint": "Χρησιμοποιήστε τον τύπο σύνθετης καταπόνησης $F = 0{,}6 \\cdot d_1^2 \\cdot \\sigma_{\\text{επ}}$.",
        "explain": "Είναι $\\sigma_{\\text{επ}} = \\frac{1800}{0{,}6 \\cdot 10^2} = \\frac{1800}{60} = 30\\text{ kp/mm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η τάση θραύσης $\\sigma_{\\text{θρ}}$ του υλικού του κοχλία σε $\\text{kp/mm}^2$.",
        "formula": "$\\sigma_{\\text{θρ}} = \\sigma_{\\text{επ}} \\cdot \\nu_{\\text{ασφ}}$",
        "answer": 45,
        "unit": "kp/mm²",
        "tolerance": 0.1,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση με τον συντελεστή ασφάλειας.",
        "explain": "Είναι $\\sigma_{\\text{θρ}} = 30 \\cdot 1{,}5 = 45\\text{ kp/mm}^2$."
      }
    ],
    "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_#25682_fig01.png"
  },
  {
    "id": "ch14-25683",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25683",
    "code": "Θέμα 4<sup>ο</sup> · #25683",
    "title": "#25683 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 13,
    "stem": "Ο φυτευτός κοχλίας (μπουζόνι) του Σχήματος 1, με διάμετρο πυρήνα ίση με $d_1 = 20\\text{ mm}$, υφίσταται αξονική καταπόνηση εφελκυσμού. Το υλικό κατασκευής του κοχλία έχει επιτρεπόμενη τάση $\\sigma_{\\text{επ}} = 1000\\text{ daN/cm}^2$ και συντελεστή ασφάλειας $\\nu_{\\text{ασφ}} = 2{,}5$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η μέγιστη επιτρεπόμενη φόρτιση $F$ που μπορεί να δεχτεί ο κοχλίας κατά τη σύσφιξη.",
        "formula": "$F = \\sigma_{\\text{επ}} \\cdot \\frac{\\pi \\cdot d_1^2}{4}$",
        "answer": 3140,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο πυρήνα σε cm ($2\\text{ cm}$), υπολογίστε τη διατομή και πολλαπλασιάστε επί $\\sigma_{\\text{επ}}$.",
        "explain": "Με $d_1 = 2\\text{ cm}$, η διατομή είναι $A = \\frac{3{,}14 \\cdot 2^2}{4} = 3{,}14\\text{ cm}^2$. Η φόρτιση είναι $F = 1000 \\cdot 3{,}14 = 3140\\text{ daN}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η ορθή τάση θραύσης $\\sigma_{\\text{θρ}}$ του υλικού του κοχλία.",
        "formula": "$\\sigma_{\\text{θρ}} = \\sigma_{\\text{επ}} \\cdot \\nu_{\\text{ασφ}}$",
        "answer": 2500,
        "unit": "daN/cm²",
        "tolerance": 1,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση με τον συντελεστή ασφάλειας.",
        "explain": "Είναι $\\sigma_{\\text{θρ}} = 1000 \\cdot 2{,}5 = 2500\\text{ daN/cm}^2$.",
        "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_#25683_fig01.png"
      }
    ]
  },
  {
    "id": "ch14-25684",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25684",
    "code": "Θέμα 4<sup>ο</sup> · #25684",
    "title": "#25684 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 14,
    "stem": "Ο κοχλίας κίνησης τετραγωνικού σπειρώματος του Σχήματος 1, με διάμετρο πυρήνα ίση με $d_1 = 30\\text{ mm}$, υφίσταται αξονική και στρεπτική καταπόνηση και μπορεί να δεχτεί μέγιστο επιτρεπόμενο φορτίο $F$. Η ορθή τάση θραύσης $\\sigma_{\\text{θρ}}$ του υλικού του κοχλία είναι ίση με $\\sigma_{\\text{θρ}} = 2000\\text{ daN/cm}^2$ και το υλικό κατασκευής του κοχλία έχει συντελεστή ασφάλειας $\\nu_{\\text{ασφ}} = 2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η επιτρεπόμενη τάση $\\sigma_{\\text{επ}}$ του υλικού του κοχλία.",
        "formula": "$\\sigma_{\\text{επ}} = \\frac{\\sigma_{\\text{θρ}}}{\\nu_{\\text{ασφ}}}$",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 1,
        "hint": "Διαιρέστε την τάση θραύσης με τον συντελεστή ασφάλειας.",
        "explain": "Είναι $\\sigma_{\\text{επ}} = \\frac{2000}{2} = 1000\\text{ daN/cm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί το μέγιστο επιτρεπόμενο φορτίο $F$.",
        "formula": "$F = 0{,}6 \\cdot d_1^2 \\cdot \\sigma_{\\text{επ}}$",
        "answer": 5400,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο σε cm ($3\\text{ cm}$) και εφαρμόστε τον τύπο σύνθετης καταπόνησης.",
        "explain": "Με $d_1 = 3\\text{ cm}$, έχουμε $F = 0{,}6 \\cdot 3^2 \\cdot 1000 = 0{,}6 \\cdot 9 \\cdot 1000 = 5400\\text{ daN}$.",
        "image": "images/c/stoixeia-michanon/chapter-14/c_stoixeia-michanon_ch14_#25684_fig01.png"
      }
    ]
  },
  {
    "id": "ch14-25685",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25685",
    "code": "Θέμα 4<sup>ο</sup> · #25685",
    "title": "#25685 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 15,
    "stem": "Κοχλίας πρέσας τετραγωνικού σπειρώματος με ονομαστική διάμετρο $d = 40\\text{ mm}$ και διάμετρο πυρήνα $d_1 = 30\\text{ mm}$ καταπονείται σε σύνθετη καταπόνηση (θλίψη – στρέψη) με φορτίο $F = 12560\\text{ daN}$. Αν ο αριθμός των συνεργαζόμενων σπειρωμάτων είναι $z = 10$ και η επιτρεπόμενη πίεση επιφανείας $p_{\\text{επ}} = 150\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "μονό",
        "prompt": "Να υπολογιστεί η επιφανειακή πίεση $p$ των σπειρωμάτων και να γίνει έλεγχος.",
        "formula": "$p = \\frac{F}{\\frac{\\pi}{4} \\cdot (d^2 - d_1^2) \\cdot z}$",
        "answer": 228.57,
        "unit": "daN/cm²",
        "tolerance": 0.5,
        "hint": "Μετατρέψτε τις διαμέτρους σε cm ($d = 4\\text{ cm}$, $d_1 = 3\\text{ cm}$) και εφαρμόστε τον τύπο επιφανειακής πίεσης.",
        "explain": "Είναι $p = \\frac{12560}{\\frac{3{,}14}{4} \\cdot (4^2 - 3^2) \\cdot 10} = \\frac{12560}{0{,}785 \\cdot 7 \\cdot 10} = \\frac{12560}{54{,}95} \\approx 228{,}57\\text{ daN/cm}^2$. Επειδή $p > p_{\\text{επ}}$ ($228{,}57 > 150$), το υλικό δεν αντέχει."
      }
    ]
  },
  {
    "id": "ch14-25686",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25686",
    "code": "Θέμα 4<sup>ο</sup> · #25686",
    "title": "#25686 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 16,
    "stem": "Κοχλίας πρέσας με ονομαστική διάμετρο $d = 30\\text{ mm}$ και διάμετρο πυρήνα $d_1 = 20\\text{ mm}$, κατασκευασμένος από υλικό με επιτρεπόμενη πίεση $p_{\\text{επ}} = 200\\text{ daN/cm}^2$ υφίσταται σύνθετη καταπόνηση (αξονική και στρεπτική). Αν η μέγιστη επιτρεπόμενη φόρτιση είναι $F = 12560\\text{ daN}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "μονό",
        "prompt": "Να βρεθεί ο ελάχιστος αριθμός συνεργαζόμενων σπειρωμάτων $z$ με το οδηγό περικόχλιο.",
        "formula": "$z = \\frac{F}{p_{\\text{επ}} \\cdot \\frac{\\pi}{4} \\cdot (d^2 - d_1^2)}$",
        "answer": 16,
        "unit": "σπείρώματα",
        "tolerance": 0.1,
        "hint": "Μετατρέψτε σε cm ($d = 3\\text{ cm}$, $d_1 = 2\\text{ cm}$) και λύστε τον τύπο επιφανειακής πίεσης ως προς $z$.",
        "explain": "Είναι $z = \\frac{12560}{200 \\cdot \\frac{3{,}14}{4} \\cdot (3^2 - 2^2)} = \\frac{12560}{200 \\cdot 0{,}785 \\cdot 5} = \\frac{12560}{785} = 16$."
      }
    ]
  },
  {
    "id": "ch14-25715",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25715",
    "code": "Θέμα 4<sup>ο</sup> · #25715",
    "title": "#25715 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 17,
    "stem": "Κοχλίας καταπονείται σε σύνθετη καταπόνηση (θλίψη και στρέψη). Αν:\n• η επιτρεπόμενη πίεση επιφανείας είναι $p_{\\text{επ}} = 200\\text{ daN/cm}^2$,\n• η διάμετρος πυρήνα $d_1 = 20\\text{ mm}$ και\n• η ονομαστική διάμετρος είναι $d = 30\\text{ mm}$,\n• ο αριθμός των συνεργαζόμενων σπειρωμάτων κοχλία-περικοχλίου $z = 10$.",
    "items": [
      {
        "kind": "calc",
        "subq": "μονό",
        "prompt": "Να υπολογίσετε τη μέγιστη επιτρεπόμενη φόρτιση $F$ του κοχλία.",
        "formula": "$F = p_{\\text{επ}} \\cdot \\frac{\\pi}{4} \\cdot (d^2 - d_1^2) \\cdot z$",
        "answer": 7850,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Μετατρέψτε σε cm ($d = 3\\text{ cm}$, $d_1 = 2\\text{ cm}$) και λύστε τον τύπο πίεσης ως προς $F$.",
        "explain": "Είναι $F = 200 \\cdot \\frac{3{,}14}{4} \\cdot (3^2 - 2^2) \\cdot 10 = 200 \\cdot 0{,}785 \\cdot 5 \\cdot 10 = 7850\\text{ daN}$."
      }
    ]
  },
  {
    "id": "ch14-25743",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25743",
    "code": "Θέμα 4<sup>ο</sup> · #25743",
    "title": "#25743 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 18,
    "stem": "Για τη σύσφιξη δύο κομματιών χρησιμοποιούμε δύο ίδιους κοχλίες, οι οποίοι καταπονούνται ομοιόμορφα σε εφελκυσμό (αξονική φόρτιση). Το συνολικό φορτίο είναι $P = 25120\\text{ daN}$. Δίνεται ότι η επιτρεπόμενη ορθή τάση του υλικού των κοχλιών ισούται με $\\sigma_{\\text{επ}} = 1000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε το φορτίο $F$ που παραλαμβάνει κάθε κοχλίας.",
        "formula": "$F = \\frac{P}{2}$",
        "answer": 12560,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Διαιρέστε το συνολικό φορτίο δια 2.",
        "explain": "Είναι $F = \\frac{25120}{2} = 12560\\text{ daN}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη διατομή του πυρήνα $A$, κάθε κοχλία που υφίσταται σε εφελκυσμό.",
        "formula": "$A = \\frac{F}{\\sigma_{\\text{επ}}}$",
        "answer": 12.56,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το φορτίο του κοχλία με την επιτρεπόμενη τάση.",
        "explain": "Είναι $A = \\frac{12560}{1000} = 12{,}56\\text{ cm}^2$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τη διάμετρο $d_1$ του πυρήνα του κοχλία σε mm.",
        "formula": "$d_1 = \\sqrt{\\frac{4 \\cdot A}{\\pi}}$",
        "answer": 40,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Λύστε τον τύπο της κυκλικής διατομής ως προς τη διάμετρο.",
        "explain": "Είναι $d_1^2 = \\frac{4 \\cdot 12{,}56}{3{,}14} = 16\\text{ cm}^2 \\implies d_1 = 4\\text{ cm} = 40\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-25988",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25988",
    "code": "Θέμα 4<sup>ο</sup> · #25988",
    "title": "#25988 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 19,
    "stem": "Δίνεται κοχλίας ονομαστικής διαμέτρου $d = 40\\text{ mm}$, με διάμετρο πυρήνα $d_1 = 20\\text{ mm}$ και $\\sigma_{\\text{επ}} = 1000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Αν ο κοχλίας καταπονείται σε εφελκυσμό, να βρείτε τη μέγιστη επιτρεπόμενη φόρτιση $F$ του κοχλία.",
        "formula": "$F = \\sigma_{\\text{επ}} \\cdot \\frac{\\pi \\cdot d_1^2}{4}$",
        "answer": 3140,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο πυρήνα σε cm ($2\\text{ cm}$) και εφαρμόστε τον τύπο εφελκυσμού.",
        "explain": "Είναι $F = 1000 \\cdot \\frac{3{,}14 \\cdot 2^2}{4} = 3140\\text{ daN}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Αν ο κοχλίας καταπονείται σε σύνθετη καταπόνηση (θλίψη και στρέψη), να βρείτε την επιφανειακή πίεση $p$. Δίνεται αριθμός συνεργαζομένων σπειρωμάτων $z = 10$.",
        "formula": "$p = \\frac{0{,}6 \\cdot d_1^2 \\cdot \\sigma_{\\text{επ}}}{\\frac{\\pi}{4} \\cdot (d^2 - d_1^2) \\cdot z}$",
        "answer": 25.47,
        "unit": "daN/cm²",
        "tolerance": 0.05,
        "hint": "Υπολογίστε πρώτα το φορτίο σύνθετης καταπόνησης $F = 0{,}6 \\cdot d_1^2 \\cdot \\sigma_{\\text{επ}}$ και έπειτα την πίεση.",
        "explain": "Με $d = 4\\text{ cm}$ και $d_1 = 2\\text{ cm}$, το φορτίο είναι $F = 0{,}6 \\cdot 2^2 \\cdot 1000 = 2400\\text{ daN}$. Η πίεση είναι $p = \\frac{2400}{\\frac{3{,}14}{4} \\cdot (4^2 - 2^2) \\cdot 10} = \\frac{2400}{0{,}785 \\cdot 12 \\cdot 10} = \\frac{2400}{94{,}2} \\approx 25{,}47\\text{ daN/cm}^2$."
      }
    ]
  },
  {
    "id": "ch14-26760",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26760",
    "code": "Θέμα 4<sup>ο</sup> · #26760",
    "title": "#26760 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 20,
    "stem": "Δίνεται μη τυποποιημένος κοχλίας, με ονομαστική διάμετρο $d = 20\\text{ mm}$ και διάμετρο πυρήνα $d_1 = 10\\text{ mm}$, ο οποίος καταπονείται σε σύνθετη καταπόνηση (θλίψη και στρέψη) με φορτίο $F = 1884\\text{ daN}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η επιτρεπόμενη τάση $\\sigma_{\\text{επ}}$ του υλικού του κοχλία.",
        "formula": "$\\sigma_{\\text{επ}} = \\frac{F}{0{,}6 \\cdot d_1^2}$",
        "answer": 3140,
        "unit": "daN/cm²",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο πυρήνα σε cm ($1\\text{ cm}$) και λύστε τον τύπο σύνθετης καταπόνησης ως προς $\\sigma_{\\text{επ}}$.",
        "explain": "Είναι $\\sigma_{\\text{επ}} = \\frac{1884}{0{,}6 \\cdot 1^2} = \\frac{1884}{0{,}6} = 3140\\text{ daN/cm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η επιφανειακή πίεση $p$ των σπειρωμάτων. Δίνεται αριθμός συνεργαζόμενων σπειρωμάτων $z = 4$.",
        "formula": "$p = \\frac{F}{\\frac{\\pi}{4} \\cdot (d^2 - d_1^2) \\cdot z}$",
        "answer": 200,
        "unit": "daN/cm²",
        "tolerance": 1,
        "hint": "Μετατρέψτε σε cm ($d = 2\\text{ cm}$,σ $d_1 = 1\\text{ cm}$) και εφαρμόστε τον τύπο επιφανειακής πίεσης.",
        "explain": "Είναι $p = \\frac{1884}{\\frac{3{,}14}{4} \\cdot (2^2 - 1^2) \\cdot 4} = \\frac{1884}{3{,}14 \\cdot 3} = \\frac{1884}{9{,}42} = 200\\text{ daN/cm}^2$."
      }
    ]
  },
  {
    "id": "ch14-26761",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26761",
    "code": "Θέμα 4<sup>ο</sup> · #26761",
    "title": "#26761 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 21,
    "stem": "Κοχλίας καταπονείται σε εφελκυσμό με φορτίο $F = 6280\\text{ daN}$. Υλικό κοχλία με επιτρεπόμενη τάση $\\sigma_{\\text{επ}} = 2000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η διάμετρος πυρήνα $d_1$ σε mm.",
        "formula": "$d_1 = \\sqrt{\\frac{4 \\cdot F}{\\sigma_{\\text{επ}} \\cdot \\pi}}$",
        "answer": 20,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε τη διατομή $A = \\frac{F}{\\sigma_{\\text{επ}}}$ και έπειτα τη διάμετρο.",
        "explain": "Είναι $d_1^2 = \\frac{4 \\cdot 6280}{2000 \\cdot 3{,}14} = 4\\text{ cm}^2 \\implies d_1 = 2\\text{ cm} = 20\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η μέγιστη επιτρεπόμενη φόρτιση $F$, αν ο παραπάνω κοχλίας καταπονείται σε σύνθετη καταπόνηση (θλίψη και στρέψη) με την ίδια $\\sigma_{\\text{επ}} = 2000\\text{ daN/cm}^2$.",
        "formula": "$F = 0{,}6 \\cdot d_1^2 \\cdot \\sigma_{\\text{επ}}$",
        "answer": 4800,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Εφαρμόστε τον τύπο σύνθετης καταπόνησης με $d_1 = 2\\text{ cm}$.",
        "explain": "Είναι $F = 0{,}6 \\cdot 2^2 \\cdot 2000 = 0{,}6 \\cdot 4 \\cdot 2000 = 4800\\text{ daN}$."
      }
    ]
  },
  {
    "id": "ch14-27127",
    "group": "ch14-04-kochliosyndeseis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27127",
    "code": "Θέμα 4<sup>ο</sup> · #27127",
    "title": "#27127 — Θέμα 4<sup>ο</sup> (14.4)",
    "units": 25,
    "theory": "ch14-kochliosyndeseis",
    "sourceOrder": 22,
    "stem": "Δίνεται κοχλίας πρέσσας, με ονομαστική διάμετρο $d = 30\\text{ mm}$ και διάμετρο πυρήνα $d_1 = 20\\text{ mm}$, από υλικό με επιτρεπόμενη τάση $\\sigma_{\\text{επ}} = 3140\\text{ daN/cm}^2$, ο οποίος υφίσταται σύνθετη καταπόνηση (θλίψη και στρέψη).",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η μέγιστη επιτρεπόμενη φόρτιση $F$ του κοχλία.",
        "formula": "$F = 0{,}6 \\cdot d_1^2 \\cdot \\sigma_{\\text{επ}}$",
        "answer": 7536,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Μετατρέψτε τη διάμετρο πυρήνα σε cm ($2\\text{ cm}$) και εφαρμόστε τον τύπο σύνθετης καταπόνησης.",
        "explain": "Είναι $F = 0{,}6 \\cdot 2^2 \\cdot 3140 = 0{,}6 \\cdot 4 \\cdot 3140 = 7536\\text{ daN}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί ο απαιτούμενος αριθμός συνεργαζόμενων σπειρωμάτων $z$. Δίνεται η επιτρεπόμενη επιφανειακή πίεση των σπειρωμάτων $p_{\\text{επ}} = 320\\text{ daN/cm}^2$.",
        "formula": "$z = \\frac{F}{p_{\\text{επ}} \\cdot \\frac{\\pi}{4} \\cdot (d^2 - d_1^2)}$",
        "answer": 6,
        "unit": "σπείρώματα",
        "tolerance": 0.1,
        "hint": "Μετατρέψτε σε cm ($d = 3\\text{ cm}$, $d_1 = 2\\text{ cm}$) και λύστε τον τύπο πίεσης ως προς $z$.",
        "explain": "Είναι $z = \\frac{7536}{320 \\cdot \\frac{3{,}14}{4} \\cdot (3^2 - 2^2)} = \\frac{7536}{320 \\cdot 0{,}785 \\cdot 5} = \\frac{7536}{1256} = 6$."
      }
    ]
  }
]
);
