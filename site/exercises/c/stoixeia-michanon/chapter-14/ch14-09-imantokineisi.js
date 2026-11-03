window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-michanon"] = window.SUBJECT_DATA["stoixeia-michanon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-michanon"].exercises.push(...
[
  {
    "id": "ch14-31606",
    "group": "ch14-09-imantokineisi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "31606",
    "code": "Θέμα 4<sup>ο</sup> · #31606",
    "title": "#31606 — Θέμα 4<sup>ο</sup> (14.9)",
    "units": 25,
    "theory": "ch14-imantokineisi",
    "sourceOrder": 48,
    "stem": "Σε ιμαντοκίνηση με επίπεδο δερμάτινο ιμάντα πάχους $s = 5\\text{ mm}$, η κινητήρια τροχαλία έχει διάμετρο $d_1 = 600\\text{ mm}$ και περιστρέφεται με $n_1 = 1000\\text{ rpm}$. Το πλάτος της τροχαλίας είναισ $b_1 = 12\\text{ cm}$ και η επιτρεπόμενη τάσησ $\\sigma_{\\text{επ}} = 30\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το πλάτος του επίπεδου δερμάτινου ιμάντα $b$ σε mm.",
        "formula": "$b = \\frac{b_1 - 10\\text{ mm}}{1{,}1}$",
        "answer": 100,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Μετατρέψτε το πλάτος τροχαλίας σε mm ($120\\text{ mm}$) και λύστε $b_1 = 1{,}1 \\cdot b + 10$.",
        "explain": "Είναι $120 = 1{,}1 \\cdot b + 10 \\implies 1{,}1 \\cdot b = 110 \\implies b = 100\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η επιτρεπόμενη περιφερειακή δύναμη του ιμάντα $F$.",
        "formula": "$F = (b \\cdot s) \\cdot \\sigma_{\\text{επ}}$",
        "answer": 150,
        "unit": "daN",
        "tolerance": 1,
        "hint": "Μετατρέψτε διαστάσεις σε cm ($b = 10\\text{ cm}$, $s = 0{,}5\\text{ cm}$) και πολλαπλασιάστε με $\\sigma_{\\text{επ}}$.",
        "explain": "Είναι $F = (10\\text{ cm} \\cdot 0{,}5\\text{ cm}) \\cdot 30\\text{ daN/cm}^2 = 5 \\cdot 30 = 150\\text{ daN}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Η ισχύς $P$ που μπορεί να μεταφέρει ο ιμάντας σε PS.",
        "formula": "$P = \\frac{F \\cdot v}{75}$",
        "answer": 62.8,
        "unit": "PS",
        "tolerance": 0.1,
        "hint": "Υπολογίστε πρώτα την ταχύτητα $v = \\frac{\\pi \\cdot d_1 \\cdot n_1}{60000} = 31{,}4\\text{ m/s}$, και έπειτα την ισχύ.",
        "explain": "Είναι $v = \\frac{3{,}14 \\cdot 600 \\cdot 1000}{60000} = 31{,}4\\text{ m/s}$. Η ισχύς είναι $P = \\frac{150 \\cdot 31{,}4}{75} = 62{,}8\\text{ PS}$."
      }
    ]
  },
  {
    "id": "ch14-31607",
    "group": "ch14-09-imantokineisi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "31607",
    "code": "Θέμα 4<sup>ο</sup> · #31607",
    "title": "#31607 — Θέμα 4<sup>ο</sup> (14.9)",
    "units": 25,
    "theory": "ch14-imantokineisi",
    "sourceOrder": 49,
    "stem": "Επίπεδος ιμάντας έχει πλάτος $b = 130\\text{ mm}$, είναι κατασκευασμένος από υλικό με επιτρεπόμενη τάση $\\sigma_{\\text{επ}} = 20\\text{ daN/cm}^2$. Η επιτρεπόμενη περιφερειακή δύναμη της ιμαντοκίνησης είναι $F = 130\\text{ daN}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το απαιτούμενο πλάτος της τροχαλίας του ιμάντα $b_1$ σε mm.",
        "formula": "$b_1 = 1{,}1 \\cdot b + 10\\text{ mm}$",
        "answer": 153,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Εφαρμόστε τον τύπο $b_1 = 1{,}1 \\cdot b + 10$.",
        "explain": "Είναι $b_1 = 1{,}1 \\cdot 130 + 10 = 143 + 10 = 153\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το απαιτούμενο πάχος του ιμάντα $s$ σε mm.",
        "formula": "$s = \\frac{F}{b \\cdot \\sigma_{\\text{επ}}}$",
        "answer": 5,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Μετατρέψτε το πλάτος σε cm ($13\\text{ cm}$) και λύστε τον τύπο $F = b \\cdot s \\cdot \\sigma_{\\text{επ}}$ ως προς $s$.",
        "explain": "Είναι $s = \\frac{130\\text{ daN}}{13\\text{ cm} \\cdot 20\\text{ daN/cm}^2} = \\frac{130}{260} = 0{,}5\\text{ cm} = 5\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-31644",
    "group": "ch14-09-imantokineisi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "31644",
    "code": "Θέμα 4<sup>ο</sup> · #31644",
    "title": "#31644 — Θέμα 4<sup>ο</sup> (14.9)",
    "units": 25,
    "theory": "ch14-imantokineisi",
    "sourceOrder": 50,
    "stem": "Σε ιμαντοκίνηση με επίπεδο ιμάντα δίνονται:\n• Επιτρεπόμενη περιφερειακή δύναμη του ιμάντα $F = 100\\text{ daN}$\n• Πάχος ιμάντα $s = 5\\text{ mm}$\n• Πλάτος ιμάντα $b = 80\\text{ mm}$\n• Αριθμός στροφών ανά λεπτό της κινητήριας τροχαλίας $n_1 = 1000\\text{ rpm}$\n• Περιφερειακή ταχύτητα ιμάντα $v = 6{,}28\\text{ m/s}$",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Η επιτρεπόμενη τάση $\\sigma_{\\text{επ}}$ σε εφελκυσμό του ιμάντα (σε $\\text{daN/cm}^2$).",
        "formula": "$\\sigma_{\\text{επ}} = \\frac{F}{b \\cdot s}$",
        "answer": 25,
        "unit": "daN/cm²",
        "tolerance": 0.1,
        "hint": "Μετατρέψτε διαστάσεις σε cm ($b = 8\\text{ cm}$, $s = 0{,}5\\text{ cm}$) και λύστε ως προς $\\sigma_{\\text{επ}}$.",
        "explain": "Είναι $\\sigma_{\\text{επ}} = \\frac{100}{8 \\cdot 0{,}5} = \\frac{100}{4} = 25\\text{ daN/cm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το απαιτούμενο πλάτος της τροχαλίας $b_1$ (σε mm).",
        "formula": "$b_1 = 1{,}1 \\cdot b + 10\\text{ mm}$",
        "answer": 98,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Εφαρμόστε τον τύπο $b_1 = 1{,}1 \\cdot 80 + 10$.",
        "explain": "Είναι $b_1 = 1{,}1 \\cdot 80 + 10 = 88 + 10 = 98\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "H διάμετρος της κινητήριας τροχαλίας $d_1$ (σε mm).",
        "formula": "$d_1 = \\frac{v \\cdot 60000}{\\pi \\cdot n_1}$",
        "answer": 120,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Χρησιμοποιήστε τον τύπο ταχύτητας $v = \\frac{\\pi \\cdot d_1 \\cdot n_1}{60000}$ και λύστε ως προς $d_1$.",
        "explain": "Είναι $6{,}28 = \\frac{3{,}14 \\cdot d_1 \\cdot 1000}{60000} \\implies d_1 = \\frac{6{,}28 \\cdot 60}{3{,}14} = 2 \\cdot 60 = 120\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-31645",
    "group": "ch14-09-imantokineisi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "31645",
    "code": "Θέμα 4<sup>ο</sup> · #31645",
    "title": "#31645 — Θέμα 4<sup>ο</sup> (14.9)",
    "units": 25,
    "theory": "ch14-imantokineisi",
    "sourceOrder": 51,
    "stem": "Σε ιμαντοκίνηση με επίπεδο ιμάντα δίνονται:\n· Πάχος ιμάντα $s = 5\\text{ mm}$\n· Διάμετρος κινητήριας τροχαλίας $d_1 = 300\\text{ mm}$\n· Επιτρεπόμενη τάση του υλικού του ιμάντα $\\sigma_{\\text{επ}} = 15\\text{ daN/cm}^2$\n· Περιφερειακή ταχύτητα ιμάντα $v = 7{,}85\\text{ m/s}$\n· Επιτρεπόμενη περιφερειακή δύναμη $F$ του ιμάντα $F = 150\\text{ daN}$",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Η ταχύτητα περιστροφής της κινητήριας τροχαλίας $n_1$ σε rpm.",
        "formula": "$n_1 = \\frac{v \\cdot 60000}{\\pi \\cdot d_1}$",
        "answer": 500,
        "unit": "rpm",
        "tolerance": 1,
        "hint": "Λύστε τον τύπο περιφερειακής ταχύτητας ως προς $n_1$.",
        "explain": "Είναι $7{,}85 = \\frac{3{,}14 \\cdot 300 \\cdot n_1}{60000} \\implies 7{,}85 = \\frac{3{,}14 \\cdot n_1}{200} \\implies n_1 = \\frac{7{,}85 \\cdot 200}{3{,}14} = 500\\text{ rpm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το απαιτούμενο πλάτος του ιμάντα $b$ σε mm.",
        "formula": "$b = \\frac{F}{s \\cdot \\sigma_{\\text{επ}}}$",
        "answer": 200,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Μετατρέψτε το πάχος σε cm ($0{,}5\\text{ cm}$) και λύστε τον τύπο δύναμης ως προς $b$.",
        "explain": "Είναι $150 = b \\cdot 0{,}5 \\cdot 15 \\implies 150 = b \\cdot 7{,}5 \\implies b = \\frac{150}{7{,}5} = 20\\text{ cm} = 200\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch14-33436",
    "group": "ch14-09-imantokineisi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "33436",
    "code": "Θέμα 4<sup>ο</sup> · #33436",
    "title": "#33436 — Θέμα 4<sup>ο</sup> (14.9)",
    "units": 25,
    "theory": "ch14-imantokineisi",
    "sourceOrder": 52,
    "stem": "Στην εταιρεία που εργάζεστε σας ζητούν να επιλέξετε επίπεδο ιμάντα, ο οποίος συνεργάζεται με τροχαλία πλάτους $b_1 = 12\\text{ cm}$. Η περιφερειακή ταχύτητα του ιμάντα είναι $v = 15{,}7\\text{ m/sec}$, η μεταφερόμενη ισχύς από τον ιμάντα είναι $P = 15{,}7\\text{ PS}$ και η επιτρεπόμενη εφελκυστική τάση του υλικού είναι $\\sigma_{\\text{επ}} = 15\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το πλάτος $b$ του ιμάντα που επιλέξατε σε mm.",
        "formula": "$b = \\frac{b_1 - 10\\text{ mm}}{1{,}1}$",
        "answer": 100,
        "unit": "mm",
        "tolerance": 0.5,
        "hint": "Μετατρέψτε το πλάτος τροχαλίας σε mm ($120\\text{ mm}$) και λύστε $b_1 = 1{,}1 \\cdot b + 10$.",
        "explain": "Είναι $120 = 1{,}1 \\cdot b + 10 \\implies 1{,}1 \\cdot b = 110 \\implies b = 100\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το πάχος $s$ του ιμάντα που επιλέξατε σε mm.",
        "formula": "$s = \\frac{75 \\cdot P}{v \\cdot b \\cdot \\sigma_{\\text{επ}}}$",
        "answer": 5,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε πρώτα την περιφερειακή δύναμη $F = \\frac{75 \\cdot P}{v} = 75\\text{ daN}$ και έπειτα το πάχος.",
        "explain": "Είναι $F = \\frac{75 \\cdot 15{,}7}{15{,}7} = 75\\text{ daN}$. Με $b = 10\\text{ cm}$ και $\\sigma_{\\text{επ}} = 15\\text{ daN/cm}^2$, έχουμε $s = \\frac{75}{10 \\cdot 15} = \\frac{75}{150} = 0{,}5\\text{ cm} = 5\\text{ mm}$."
      }
    ]
  }
]
);
