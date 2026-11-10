window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch05-17860",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "17860",
    "code": "Θέμα 4<sup>ο</sup> · #17860",
    "title": "#17860 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 7,
    "stem": "Άτρακτος κυκλικής διατομής διαμέτρου $d = 20\\text{ mm}$ και μήκους $l = 1{,}2\\text{ m}$, εφελκύεται από φορτίο $F = 3.140\\text{ daN}$. Το μέτρο ελαστικότητας του υλικού είναι $E = 2.000.000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Την διατομή $A$ της ατράκτου (σε $\\text{cm}^2$, με $d = 20\\text{ mm} = 2\\text{ cm}$).",
        "formula": "$A = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 3.14,
        "unit": "cm2",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τη διάμετρο σε cm ($2\\text{ cm}$) και εφαρμόστε τον τύπο του εμβαδού.",
        "explain": " \\( A = \\frac{3{,}14 \\cdot (2\\text{ cm})^2}{4} = 3{,}14\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Την αναπτυσσόμενη εφελκυστική τάση $\\sigma$.",
        "formula": "$\\sigma = \\frac{F}{A}$",
        "answer": 1000,
        "unit": "daN/cm2",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το φορτίο $F = 3.140\\text{ daN}$ με τη διατομή $A = 3{,}14\\text{ cm}^2$.",
        "explain": " \\( \\sigma = \\frac{3.140\\text{ daN}}{3{,}14\\text{ cm}^2} = 1.000\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Την επιμήκυνση $\\Delta l$ της ατράκτου (σε cm, με $l = 1{,}2\\text{ m} = 120\\text{ cm}$).",
        "formula": "$\\Delta l = \\frac{F \\cdot l}{A \\cdot E}$",
        "answer": 0.06,
        "unit": "cm",
        "tolerance": 0.001,
        "hint": "Χρησιμοποιήστε τον νόμο του Hooke: $\\Delta l = \\frac{F \\cdot l}{A \\cdot E}$.",
        "explain": " \\( \\Delta l = \\frac{3.140 \\cdot 120}{3{,}14 \\cdot 2.000.000} = \\frac{376.800}{6.280.000} = 0{,}06\\text{ cm} \\) (ή $0{,}6\\text{ mm}$)."
      }
    ]
  },
  {
    "id": "ch05-19030",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19030",
    "code": "Θέμα 4<sup>ο</sup> · #19030",
    "title": "#19030 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 8,
    "stem": "Χαλύβδινη ράβδος μήκους $l = 100\\text{ cm}$ και τετραγωνικής διατομής πλευράς $a = 2\\text{ cm}$ δέχεται φορτίο $F = 4.200\\text{ daN}$. Δίνεται το μέτρο ελαστικότητας $E = 2.100.000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α. Να υπολογιστεί η επιμήκυνση της ράβδου ($\\Delta l$) σε cm.",
        "formula": "$\\Delta l = \\frac{F \\cdot l}{A \\cdot E}$",
        "answer": 0.05,
        "unit": "cm",
        "tolerance": 0.001,
        "hint": "Υπολογίστε πρώτα το εμβαδόν τετραγωνικής διατομής $A = a^2 = 4\\text{ cm}^2$ και εφαρμόστε τον νόμο του Hooke.",
        "explain": " \\( A = 2\\text{ cm} \\cdot 2\\text{ cm} = 4\\text{ cm}^2 \\). \\( \\Delta l = \\frac{4.200 \\cdot 100}{4 \\cdot 2.100.000} = \\frac{420.000}{8.400.000} = 0{,}05\\text{ cm} \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β. Να υπολογιστεί η ειδική μεταβολή του μήκους ($\\varepsilon$).",
        "formula": "$\\varepsilon = \\frac{\\Delta l}{l}$",
        "answer": 0.0005,
        "unit": "",
        "tolerance": 1e-05,
        "hint": "Διαιρέστε την επιμήκυνση $\\Delta l$ με το αρχικό μήκος $l$.",
        "explain": " \\( \\varepsilon = \\frac{0{,}05\\text{ cm}}{100\\text{ cm}} = 0{,}0005 \\)."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ. Να υπολογιστεί η τάση ($\\sigma$) που αναπτύσσεται.",
        "formula": "$\\sigma = \\varepsilon \\cdot E$",
        "answer": 1050,
        "unit": "daN/cm2",
        "tolerance": 1,
        "hint": "Πολλαπλασιάστε την ειδική επιμήκυνση $\\varepsilon$ επί το μέτρο ελαστικότητας $E$.",
        "explain": " \\( \\sigma = 0{,}0005 \\cdot 2.100.000 = 1.050\\text{ daN/cm}^2 \\)."
      }
    ]
  },
  {
    "id": "ch05-19201",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "19201",
    "code": "Θέμα 2<sup>ο</sup> · #19201",
    "title": "#19201 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "mc",
        "subq": "2.1",
        "subqPrompt": "2.1. Να γράψετε τον αριθμό κάθε μίας από τις παρακάτω προτάσεις και δίπλα στον αριθμό, το γράμμα που αντιστοιχεί στη σωστή απάντηση.",
        "prompt": "1. Η ορθή τάση ($\\sigma$) που προκαλείται σε ένα δοκίμιο διατομής $10\\text{ mm}^2$ από μια δύναμη $F = 100\\text{ daN}$ που ασκείται κάθετα σε αυτό είναι:",
        "options": [
          {
            "id": "a",
            "text": "1 daN/mm²"
          },
          {
            "id": "b",
            "text": "10 daN/mm²"
          },
          {
            "id": "c",
            "text": "100 daN/mm²"
          }
        ],
        "answer": "b",
        "explain": " \\( \\sigma = \\frac{100\\text{ daN}}{10\\text{ mm}^2} = 10\\text{ daN/mm}^2 \\)."
      },
      {
        "kind": "mc",
        "subq": "2.1",
        "prompt": "2. Η ορθή τάση ($\\sigma$) είναι:",
        "options": [
          {
            "id": "a",
            "text": "Αντιστρόφως ανάλογη της δύναμης (F)"
          },
          {
            "id": "b",
            "text": "Ανάλογη της διατομής (Α)"
          },
          {
            "id": "c",
            "text": "Ανάλογη της δύναμης (F)"
          }
        ],
        "answer": "c",
        "explain": "Η ορθή τάση είναι ευθέως ανάλογη της δύναμης $F$ και αντιστρόφως ανάλογη της διατομής $A$ ($\\sigma = F/A$)."
      },
      {
        "kind": "mc",
        "subq": "2.1",
        "prompt": "3. Η μεταβολή του μήκους ($\\Delta l$) ενός σώματος, στην περιοχή αναλογίας, είναι:",
        "options": [
          {
            "id": "a",
            "text": "Αντιστρόφως ανάλογη της δύναμης (F)"
          },
          {
            "id": "b",
            "text": "Ανάλογη της διατομής (Α)"
          },
          {
            "id": "c",
            "text": "Αντιστρόφως ανάλογη του μέτρου ελαστικότητας (Ε)"
          }
        ],
        "answer": "c",
        "explain": "Από τον νόμο του Hooke, η επιμήκυνση $\\Delta l = \\frac{F \\cdot l}{A \\cdot E}$ είναι αντιστρόφως ανάλογη του μέτρου ελαστικότητας $E$ και της διατομής $A$, και ανάλογη της δύναμης $F$ και του μήκους $l$."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "2.2. Να γράψετε τον αριθμό κάθε ενός κενού από την παρακάτω παράγραφο και, δίπλα, μία από τις λέξεις που συμπληρώνει σωστά την πρόταση. (Σημειώνεται ότι τέσσερις από τις λέξεις θα περισσέψουν).",
        "textBefore": [
          "«Αν δεν ξεπεραστεί ένα ",
          " (1) όριο, που ονομάζεται όριο ",
          " (2), οι ",
          " (3), που υφίστανται τα φορτισμένα σώματα, είναι ανάλογες με τα αντίστοιχα ",
          " (4) που τις προκάλεσαν»."
        ],
        "answers": [
          "συγκεκριμένο",
          "αναλογίας",
          "παραμορφώσεις",
          "φορτία"
        ],
        "bank": [
          "αναλογίας",
          "θραύσης",
          "τελικό",
          "δυνάμεις",
          "φορτία",
          "παραμορφώσεις",
          "συγκεκριμένο",
          "δοκίμια"
        ],
        "explain": "Εντός του ορίου αναλογίας, οι παραμορφώσεις είναι ανάλογες των φορτίων."
      }
    ]
  },
  {
    "id": "ch05-19633",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19633",
    "code": "Θέμα 4<sup>ο</sup> · #19633",
    "title": "#19633 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 10,
    "stem": "Ράβδος κυκλικής διατομής διαμέτρου $d = 16\\text{ mm}$ και μήκους $l = 2\\text{ m}$, εφελκύεται από φορτίο $F$. Το μέτρο ελαστικότητας του υλικού είναι $E = 1.000.000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Την διατομή $A$ της ατράκτου σε $\\text{cm}^2$ (με $d = 16\\text{ mm} = 1{,}6\\text{ cm}$, $\\pi = 3{,}14$).",
        "formula": "$A = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 2.0096,
        "unit": "cm2",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τη διάμετρο σε cm ($1{,}6\\text{ cm}$) και υπολογίστε το εμβαδόν.",
        "explain": " \\( A = \\frac{3{,}14 \\cdot (1{,}6\\text{ cm})^2}{4} = \\frac{3{,}14 \\cdot 2{,}56}{4} = 2{,}0096\\text{ cm}^2 \\) (ή περίπου $2{,}01\\text{ cm}^2$)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Αν η επιμήκυνση της ράβδου είναι ίση με $\\Delta l = 0{,}8\\text{ cm}$ (με $l = 2\\text{ m} = 200\\text{ cm}$ και $A \\approx 2\\text{ cm}^2$), να βρείτε την δύναμη $F$ σε daN.",
        "formula": "$F = \\frac{\\Delta l \\cdot A \\cdot E}{l}$",
        "answer": 8000,
        "unit": "daN",
        "tolerance": 5,
        "hint": "Λύστε τον νόμο του Hooke ως προς $F$: $F = \\frac{\\Delta l \\cdot A \\cdot E}{l}$.",
        "explain": " \\( F = \\frac{0{,}8\\text{ cm} \\cdot 2\\text{ cm}^2 \\cdot 1.000.000\\text{ daN/cm}^2}{200\\text{ cm}} = \\frac{1.600.000}{200} = 8.000\\text{ daN} \\)."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Την αναπτυσσόμενη τάση $\\sigma$ (με $F = 8.000\\text{ daN}$ και $A = 2\\text{ cm}^2$).",
        "formula": "$\\sigma = \\frac{F}{A}$",
        "answer": 4000,
        "unit": "daN/cm2",
        "tolerance": 10,
        "hint": "Διαιρέστε τη δύναμη $F$ με το εμβαδόν $A$.",
        "explain": " \\( \\sigma = \\frac{8.000\\text{ daN}}{2\\text{ cm}^2} = 4.000\\text{ daN/cm}^2 \\)."
      }
    ]
  },
  {
    "id": "ch05-19634",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19634",
    "code": "Θέμα 4<sup>ο</sup> · #19634",
    "title": "#19634 — Θέμα 4<sup>ο</sup> (α–δ)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 11,
    "stem": "Ράβδος τετραγωνικής διατομής με πλευρά $a = 4\\text{ cm}$ και μήκους $l = 1\\text{ m}$, εφελκύεται από φορτίο $F = 2.000\\text{ daN}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Την διατομή $A$ της ατράκτου.",
        "formula": "$A = a^2$",
        "answer": 16,
        "unit": "cm2",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το εμβαδόν τετραγωνικής διατομής $A = a^2$.",
        "explain": " \\( A = (4\\text{ cm})^2 = 16\\text{ cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Την αναπτυσσόμενη τάση ($\\sigma$).",
        "formula": "$\\sigma = \\frac{F}{A}$",
        "answer": 125,
        "unit": "daN/cm2",
        "tolerance": 0.1,
        "hint": "Διαιρέστε το φορτίο $F = 2.000\\text{ daN}$ με το εμβαδόν $A = 16\\text{ cm}^2$.",
        "explain": " \\( \\sigma = \\frac{2.000\\text{ daN}}{16\\text{ cm}^2} = 125\\text{ daN/cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "δ) Την ειδική επιμήκυνση ($\\varepsilon$) όταν η επιμήκυνση είναι $\\Delta l = 0{,}050\\text{ cm}$ (με $l = 1\\text{ m} = 100\\text{ cm}$).",
        "formula": "$\\varepsilon = \\frac{\\Delta l}{l}$",
        "answer": 0.0005,
        "unit": "",
        "tolerance": 1e-05,
        "hint": "Διαιρέστε την επιμήκυνση $\\Delta l$ με το αρχικό μήκος $l$.",
        "explain": " \\( \\varepsilon = \\frac{0{,}050\\text{ cm}}{100\\text{ cm}} = 0{,}0005 \\)."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "γ) Αν η επιτρεπόμενη εφελκυστική τάση είναι $\\sigma_{\\text{επ}} = 80\\text{ daN/cm}^2$, να γίνει έλεγχος αντοχής της δοκού.",
        "options": [
          {
            "id": "a",
            "text": "Ναι, η δοκός αντέχει."
          },
          {
            "id": "b",
            "text": "Όχι, η δοκός δεν θα αντέξει, διότι $\\sigma = 125\\text{ daN/cm}^2 > \\sigma_{\\text{επ}} = 80\\text{ daN/cm}^2$."
          },
          {
            "id": "c",
            "text": "Η δοκός βρίσκεται ακριβώς στο όριο ασφαλείας."
          },
          {
            "id": "d",
            "text": "Δεν επαρκούν τα δεδομένα."
          }
        ],
        "answer": "b",
        "explain": "Επειδή $\\sigma = 125\\text{ daN/cm}^2 > \\sigma_{\\text{επ}} = 80\\text{ daN/cm}^2$, η δοκός δεν αντέχει."
      }
    ]
  },
  {
    "id": "ch05-19804",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19804",
    "code": "Θέμα 4<sup>ο</sup> · #19804",
    "title": "#19804 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 12,
    "stem": "Στο σχήμα διακρίνεται μία ράβδος κυκλικής διατομής, με διάμετρο $d = 20\\text{ mm}$, στην οποία ασκείται θλιπτικό φορτίο $F = 12.560\\text{ N}$. Το αρχικό μήκος είναι $l = 80\\text{ mm}$ και το μέτρο ελαστικότητας $E = 200.000\\text{ N/mm}^2$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Η κυκλική διατομή της ράβδου $A$ σε $\\text{mm}^2$ (με $d = 20\\text{ mm}$).",
        "formula": "$A = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 314,
        "unit": "mm2",
        "tolerance": 1,
        "hint": "Υπολογίστε το εμβαδόν κύκλου με διάμετρο $d = 20\\text{ mm}$.",
        "explain": " \\( A = \\frac{3{,}14 \\cdot (20\\text{ mm})^2}{4} = \\frac{3{,}14 \\cdot 400}{4} = 314\\text{ mm}^2 \\).",
        "image": "images/b/antoxi/chapter-05/b_antoxi_ch05_19804_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Η επιβράχυνση της ράβδου $\\Delta l$ σε mm.",
        "formula": "$\\Delta l = \\frac{F \\cdot l}{A \\cdot E}$",
        "answer": 0.016,
        "unit": "mm",
        "tolerance": 0.001,
        "hint": "Χρησιμοποιήστε τον νόμο του Hooke για τη θλίψη.",
        "explain": " \\( \\Delta l = \\frac{12.560\\text{ N} \\cdot 80\\text{ mm}}{314\\text{ mm}^2 \\cdot 200.000\\text{ N/mm}^2} = \\frac{1.004.800}{62.800.000} = 0{,}016\\text{ mm} \\)."
      }
    ]
  },
  {
    "id": "ch05-20839",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20839",
    "code": "Θέμα 4<sup>ο</sup> · #20839",
    "title": "#20839 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 13,
    "stem": "Δοκίμιο κυλινδρικού σχήματος διαμέτρου $d = 2\\text{ cm}$ και αρχικού μήκους $l = 8\\text{ cm}$ δοκιμάστηκε σε εφελκυσμό και έδωσε: $F_\\alpha = 3.140\\text{ N}$, $F_\\theta = 6.280\\text{ N}$, και ειδική μεταβολή $\\varepsilon = 0{,}5\\% = 0{,}005$ στο όριο θραύσης. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "4.1. Να υπολογιστεί η τάση στο όριο αναλογίας ($\\sigma_\\alpha$) (με διατομή $A = 3{,}14\\text{ cm}^2$).",
        "formula": "$\\sigma_\\alpha = \\frac{F_\\alpha}{A}$",
        "answer": 1000,
        "unit": "N/cm2",
        "tolerance": 1,
        "hint": "Υπολογίστε πρώτα το $A = \\frac{3{,}14 \\cdot 2^2}{4} = 3{,}14\\text{ cm}^2$ και διαιρέστε το φορτίο αναλογίας $F_\\alpha$.",
        "explain": " \\( \\sigma_\\alpha = \\frac{3.140\\text{ N}}{3{,}14\\text{ cm}^2} = 1.000\\text{ N/cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2. Να υπολογιστεί η τάση στο όριο θραύσης ($\\sigma_\\theta$).",
        "formula": "$\\sigma_\\theta = \\frac{F_\\theta}{A}$",
        "answer": 2000,
        "unit": "N/cm2",
        "tolerance": 1,
        "hint": "Διαιρέστε το φορτίο θραύσης $F_\\theta = 6.280\\text{ N}$ με το εμβαδόν $A = 3{,}14\\text{ cm}^2$.",
        "explain": " \\( \\sigma_\\theta = \\frac{6.280\\text{ N}}{3{,}14\\text{ cm}^2} = 2.000\\text{ N/cm}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "4.3. Να υπολογιστεί η επιμήκυνση $\\Delta l$ του δοκιμίου σε cm.",
        "formula": "$\\Delta l = \\varepsilon \\cdot l$",
        "answer": 0.04,
        "unit": "cm",
        "tolerance": 0.001,
        "hint": "Πολλαπλασιάστε την ειδική μεταβολή $\\varepsilon = 0{,}005$ επί το αρχικό μήκος $l = 8\\text{ cm}$.",
        "explain": " \\( \\Delta l = 0{,}005 \\cdot 8\\text{ cm} = 0{,}04\\text{ cm} \\)."
      }
    ]
  },
  {
    "id": "ch05-21114",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "21114",
    "code": "Θέμα 2<sup>ο</sup> · #21114",
    "title": "#21114 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 14,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "2.1 Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας, δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α) Όλκιμα υλικά είναι ο χυτοσίδηρος, το σκυρόδεμα και το γυαλί.",
        "answer": false,
        "explain": "Λάθος. Ο χυτοσίδηρος, το σκυρόδεμα και το γυαλί είναι κλασικά ψαθυρά υλικά."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β) Όταν ένα σώμα βρίσκεται υπό την επίδραση φορτίων, λέμε ότι φορτίζεται ή καταπονείται.",
        "answer": true,
        "explain": "Σωστό. Η επίδραση φορτίων ορίζει τη φόρτιση ή καταπόνηση του σώματος."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ) Μόνιμες ή πλαστικές είναι οι παραμορφώσεις οι οποίες εξακολουθούν να παραμένουν στα σώματα και μετά την απoφόρτισή τους.",
        "answer": true,
        "explain": "Σωστό. Οι πλαστικές παραμορφώσεις είναι μόνιμες."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "2.2 Να γράψετε στο τετράδιό σας το γράμμα καθεμιάς από τις παρακάτω προτάσεις και δίπλα τις λέξεις που συμπληρώνουν σωστά την πρόταση. (Σημειώνεται ότι τρεις από τις λέξεις θα περισσέψουν).",
        "textBefore": [
          "α) ",
          " είναι τα φορτία που δρουν απευθείας πάνω στα σώματα, ενώ αυτά που δρουν με τη μεσολάβηση άλλης διάταξης είναι ",
          ". β) Η μελέτη της αντοχής μιας κατασκευής, θέτει τον μελετητή απέναντι σε δυο αντιφατικές επιδιώξεις, που συνοψίζονται σε δυο λέξεις: ",
          " και ",
          ". γ) ",
          " εμφανίζεται σε ένα σώμα, όταν τα φορτία που ενεργούν σε αυτό, αποτελούν ζεύγος που βρίσκεται σε μια διατομή κάθετη στον άξονα του σώματος. δ) Η μεταβολή του μήκους ενός σώματος – στην περιοχή αναλογίας- είναι ανάλογη του φορτίου και του αρχικού του μήκους και αντιστρόφως ανάλογη της ",
          " του ",
          " και του μέτρου ",
          ". ε) ",
          " είναι τα φορτία εκείνα που δε μεταβάλλονται, κατά θέση και μέγεθος."
        ],
        "answers": [
          "άμεσα",
          "έμμεσα",
          "οικονομία",
          "ασφάλεια",
          "στρέψη",
          "διατομής",
          "ελαστικότητας",
          "μόνιμα"
        ],
        "bank": [
          "στρέψη",
          "διατομής",
          "έμμεσα",
          "μόνιμα",
          "ελαστικότητας",
          "κάμψη",
          "δύναμης",
          "άμεσα",
          "οικονομία",
          "αντοχή",
          "ασφάλεια"
        ],
        "explain": "Συμπλήρωση ορισμών και εννοιών της αντοχής υλικών."
      }
    ]
  },
  {
    "id": "ch05-21784",
    "group": "ch05-07-epimikynsi-epivrachynsi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "21784",
    "code": "Θέμα 4<sup>ο</sup> · #21784",
    "title": "#21784 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "antoxi-ch5",
    "sourceOrder": 15,
    "stem": "Χαλύβδινη ράβδος κυκλικής διατομής και μήκους $l = 15\\text{ cm}$ εφελκύεται από φορτίο $F = 3.140\\text{ daN}$. Η ράβδος επιμηκύνεται κατά $\\Delta l = 0{,}15\\text{ mm}$ και η αναπτυσσόμενη τάση είναι $\\sigma = 1.000\\text{ daN/cm}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Τη διάμετρο $d$ της ράβδου σε cm (με $\\sigma = 1.000\\text{ daN/cm}^2$, $F = 3.140\\text{ daN}$, $\\pi = 3{,}14$).",
        "formula": "$d = \\sqrt{\\frac{4 \\cdot F}{\\pi \\cdot \\sigma}}$",
        "answer": 2,
        "unit": "cm",
        "tolerance": 0.05,
        "hint": "Υπολογίστε πρώτα το εμβαδόν $A = \\frac{F}{\\sigma} = 3{,}14\\text{ cm}^2$ και από αυτό τη διάμετρο.",
        "explain": " \\( A = \\frac{3.140}{1.000} = 3{,}14\\text{ cm}^2 \\). Από $A = \\frac{\\pi \\cdot d^2}{4}$ προκύπτει $3{,}14 = \\frac{3{,}14 \\cdot d^2}{4} \\Rightarrow d^2 = 4 \\Rightarrow d = 2\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Την ειδική επιμήκυνση $\\varepsilon$ (με $\\Delta l = 0{,}15\\text{ mm} = 0{,}015\\text{ cm}$ και $l = 15\\text{ cm} = 150\\text{ mm}$).",
        "formula": "$\\varepsilon = \\frac{\\Delta l}{l}$",
        "answer": 0.001,
        "unit": "",
        "tolerance": 0.0001,
        "hint": "Διαιρέστε την επιμήκυνση με το αρχικό μήκος σε ίδιες μονάδες.",
        "explain": " \\( \\varepsilon = \\frac{0{,}15\\text{ mm}}{150\\text{ mm}} = 0{,}001 \\)."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Την ειδική επιμήκυνση $\\varepsilon$ σε ποσοστό επί τοις εκατό ($\\varepsilon\\%$).",
        "formula": "$\\varepsilon\\% = \\varepsilon \\cdot 100\\%$",
        "answer": 0.1,
        "unit": "%",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την ειδική επιμήκυνση επί 100%.",
        "explain": " \\( \\varepsilon\\% = 0{,}001 \\cdot 100\\% = 0{,}1\\% \\)."
      }
    ]
  }
]
);
