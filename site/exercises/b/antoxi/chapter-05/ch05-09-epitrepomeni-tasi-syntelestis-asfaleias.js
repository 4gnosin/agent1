window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch05-18582",
    "group": "ch05-09-epitrepomeni-tasi-syntelestis-asfaleias",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18582",
    "code": "Θέμα 4<sup>ο</sup> · #18582",
    "title": "#18582 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 21,
    "stem": "Άτρακτος διαμέτρου $d = 40\\text{ mm}$, εφελκύεται από φορτίο $F$. Ο συντελεστής ασφαλείας είναι $v = 2$ και η επιτρεπόμενη τάση $\\sigma_{\\text{επ}} = 150\\text{ N/mm}^2$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογίσετε την τάση στο όριο θραύσης $\\sigma_\\theta$.",
        "formula": "$\\sigma_\\theta = \\sigma_{\\text{επ}} \\cdot v$",
        "answer": 300,
        "unit": "N/mm2",
        "tolerance": 1,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί τον συντελεστή ασφαλείας.",
        "explain": " \\( \\sigma_\\theta = 150\\text{ N/mm}^2 \\cdot 2 = 300\\text{ N/mm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να υπολογίσετε το εφελκυστικό φορτίο θραύσης $F_\\theta$ (με $A = 125{,}6\\text{ mm}^2$).",
        "formula": "$F_\\theta = \\sigma_\\theta \\cdot A$",
        "answer": 37680,
        "unit": "N",
        "tolerance": 5,
        "hint": "Υπολογίστε το εμβαδόν $A = \\frac{3{,}14 \\cdot 40^2}{4} = 125{,}6\\text{ mm}^2$ και πολλαπλασιάστε επί $\\sigma_\\theta$.",
        "explain": " \\( F_\\theta = 300\\text{ N/mm}^2 \\cdot 125{,}6\\text{ mm}^2 = 37.680\\text{ N} \\)."
      }
    ]
  },
  {
    "id": "ch05-18832",
    "group": "ch05-09-epitrepomeni-tasi-syntelestis-asfaleias",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18832",
    "code": "Θέμα 4<sup>ο</sup> · #18832",
    "title": "#18832 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 22,
    "stem": "Σε ράβδο τετραγωνικής διατομής με πλευρά $a$, ασκείται εφελκυστικό φορτίο θραύσης $F_\\theta = 4.800\\text{ daN}$. Το υλικό έχει επιτρεπόμενη ορθή τάση $\\sigma_{\\text{επ}} = 50\\text{ daN/mm}^2$ και συντελεστή ασφαλείας $v = 6$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Η ορθή τάση θραύσης του υλικού της ράβδου $\\sigma_\\theta$.",
        "formula": "$\\sigma_\\theta = \\sigma_{\\text{επ}} \\cdot v$",
        "answer": 300,
        "unit": "daN/mm2",
        "tolerance": 1,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί τον συντελεστή ασφαλείας $v$.",
        "explain": " \\( \\sigma_\\theta = 50\\text{ daN/mm}^2 \\cdot 6 = 300\\text{ daN/mm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Η πλευρά $a$ της διατομής της ράβδου σε mm, για να αντέχει στη φόρτιση.",
        "formula": "$a = \\sqrt{\\frac{F_\\theta}{\\sigma_\\theta}}$",
        "answer": 4,
        "unit": "mm",
        "tolerance": 0.1,
        "hint": "Υπολογίστε το απαιτούμενο εμβαδόν $A = \\frac{4.800}{300} = 16\\text{ mm}^2$ και βρείτε την πλευρά $a = \\sqrt{A}$.",
        "explain": " \\( A = \\frac{4.800\\text{ daN}}{300\\text{ daN/mm}^2} = 16\\text{ mm}^2 \\). Άρα $a = \\sqrt{16} = 4\\text{ mm}$."
      }
    ],
    "image": "images/b/antoxi/chapter-05/b_antoxi_ch05_#18832_fig01.webp"
  },
  {
    "id": "ch05-19135",
    "group": "ch05-09-epitrepomeni-tasi-syntelestis-asfaleias",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19135",
    "code": "Θέμα 4<sup>ο</sup> · #19135",
    "title": "#19135 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 23,
    "stem": "Το εφελκυστικό φορτίο θραύσης χαλύβδινης ράβδου τετραγωνικής διατομής είναι $F_\\theta = 8.000\\text{ daN}$ και η επιτρεπόμενη εφελκυστική τάση $\\sigma_{\\text{επ}} = 1.000\\text{ daN/cm}^2$. Ο συντελεστής ασφαλείας είναι $v = 2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογιστεί η τάση θραύσης $\\sigma_\\theta$ της ράβδου.",
        "formula": "$\\sigma_\\theta = \\sigma_{\\text{επ}} \\cdot v$",
        "answer": 2000,
        "unit": "daN/cm2",
        "tolerance": 1,
        "hint": "Πολλαπλασιάστε την $\\sigma_{\\text{επ}}$ επί $v$.",
        "explain": " \\( \\sigma_\\theta = 1.000\\text{ daN/cm}^2 \\cdot 2 = 2.000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να υπολογιστεί η πλευρά $a$ της τετραγωνικής διατομής σε cm.",
        "formula": "$a = \\sqrt{\\frac{F_\\theta}{\\sigma_\\theta}}$",
        "answer": 2,
        "unit": "cm",
        "tolerance": 0.05,
        "hint": "Βρείτε το $A = \\frac{8.000}{2.000} = 4\\text{ cm}^2$ και υπολογίστε την τετραγωνική πλευρά $a = \\sqrt{A}$.",
        "explain": " \\( A = \\frac{8.000\\text{ daN}}{2.000\\text{ daN/cm}^2} = 4\\text{ cm}^2 \\). Άρα $a = \\sqrt{4} = 2\\text{ cm}$."
      }
    ]
  },
  {
    "id": "ch05-21880",
    "group": "ch05-09-epitrepomeni-tasi-syntelestis-asfaleias",
    "kind": "match",
    "layout": "unified",
    "bankCode": "21880",
    "code": "Θέμα 2<sup>ο</sup> · #21880",
    "title": "#21880 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 24,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "2.1 Στη στήλη Α του παρακάτω πίνακα αναφέρονται ορισμένα από τα μεγέθη ενός δοκιμίου το οποίο καταπονείται σε εφελκυσμό ή θλίψη και στη στήλη Β η μονάδα μέτρησης των μεγεθών αυτών. Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη στήλη Β θα περισσέψει.",
        "left": [
          {
            "id": "1",
            "text": "Μεταβολή μήκους"
          },
          {
            "id": "2",
            "text": "Ειδική μεταβολή μήκους"
          },
          {
            "id": "3",
            "text": "Μέτρο ελαστικότητας υλικού"
          },
          {
            "id": "4",
            "text": "Διατομή"
          }
        ],
        "right": [
          {
            "id": "α",
            "text": "N/cm²"
          },
          {
            "id": "β",
            "text": "μόνο αριθμός (δεν έχει μονάδα)"
          },
          {
            "id": "γ",
            "text": "cm"
          },
          {
            "id": "δ",
            "text": "Ν (Νιούτον)"
          },
          {
            "id": "ε",
            "text": "cm²"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "β",
          "3": "α",
          "4": "ε"
        },
        "explain": "Η μεταβολή μήκους μετριέται σε cm, η ειδική μεταβολή είναι αδιάστατη, το μέτρο ελαστικότητας σε N/cm² και η διατομή σε cm²."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "2.2 Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Για να είναι εξασφαλισμένη η αντοχή των κατασκευών, είναι αυτονόητο, ότι πρέπει κατά τη φόρτισή τους να εξαντλούνται τα όρια της αντοχής τους.",
        "answer": false,
        "explain": "Λάθος. Για λόγους ασφαλείας, τα υλικά δεν φορτίζονται ποτέ μέχρι εξάντλησης των ορίων αντοχής τους, αλλά χρησιμοποιείται συντελεστής ασφαλείας."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Σε μια κατασκευή που πρόκειται να φορτιστεί, θα πρέπει η φόρτιση να γίνει με τέτοιο τρόπο, ώστε να υπάρχουν επαρκείς εγγυήσεις ασφάλειας, έναντι πιθανών κινδύνων.",
        "answer": true,
        "explain": "Σωστό. Η ασφάλεια των κατασκευών αποτελεί πρωταρχικό μέλημα του μελετητή."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Επιτρεπόμενη τάση σ_επ, ονομάζεται η τάση με την οποία επιτρέπεται να καταπονηθεί ένα υλικό, για να είναι εξασφαλισμένη η αντοχή του.",
        "answer": true,
        "explain": "Σωστό. Η επιτρεπόμενη τάση αποτελεί το ασφαλές όριο καταπόνησης."
      }
    ]
  }
]
);
