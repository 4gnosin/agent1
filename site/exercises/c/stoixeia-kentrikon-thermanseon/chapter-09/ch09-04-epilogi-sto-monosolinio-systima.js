window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch09-28566",
    "group": "ch09-04-epilogi-sto-monosolinio-systima",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28566",
    "bankCode": "28566",
    "title": "#28566 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "stoixeia-kentrikon-thermanseon/ch09",
    "sourceOrder": 6,
    "stem": "Σε ένα βρόχο μονοσωλήνιου συστήματος με $\\Delta t = 10^\\circ\\text{C}$ συνδέονται σε σειρά δύο σώματα $\\Sigma_1, \\Sigma_2$ τα οποία τοποθετούνται ως εξής: Το σώμα $\\Sigma_1$ σε χώρο με θερμικές απώλειες $Q_1 = 3500\\text{ Kcal/h}$ και το σώμα $\\Sigma_2$ σε χώρο με θερμικές απώλειες $Q_2 = 2000\\text{ Kcal/h}$. Το νερό εισέρχεται στον βρόγχο με θερμοκρασία $t_v = 90^\\circ\\text{C}$. Η προρρύθμιση για το πρώτο σώμα $\\Sigma_1$ είναι $50\\%$ και για το δεύτερο σώμα $\\Sigma_2$ είναι $100\\%$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογίσετε τη συνολική παροχή $V$ του βρόχου.",
        "formula": "$V = \\frac{Q_1 + Q_2}{\\Delta t}$",
        "answer": 550,
        "unit": "l/h",
        "tolerance": 0.01,
        "hint": "Προσθέστε τα φορτία $Q_1 + Q_2$ και διαιρέστε με το $\\Delta t = 10^\\circ\\text{C}$.",
        "explain": "$V = \\frac{3500 + 2000}{10} = \\frac{5500}{10} = 550\\text{ l/h}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "subqPrompt": "β) Να υπολογίσετε τις παροχές των σωμάτων:",
        "prompt": "Παροχή $V_1$ για το σώμα $\\Sigma_1$ (προρρύθμιση $50\\%$):",
        "formula": "$V_1 = V \\cdot 50\\%$",
        "answer": 275,
        "unit": "l/h",
        "tolerance": 0.01,
        "explain": "$V_1 = 550\\text{ l/h} \\cdot 50\\% = 275\\text{ l/h}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Παροχή $V_2$ για το σώμα $\\Sigma_2$ (προρρύθμιση $100\\%$):",
        "formula": "$V_2 = V \\cdot 100\\%$",
        "answer": 550,
        "unit": "l/h",
        "tolerance": 0.01,
        "explain": "$V_2 = 550\\text{ l/h} \\cdot 100\\% = 550\\text{ l/h}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "subqPrompt": "γ) Να υπολογίσετε τις θερμοκρασίες λειτουργίας των σωμάτων:",
        "prompt": "Θερμοκρασία εξόδου $t_{r1}$ του σώματος $\\Sigma_1$ ($t_{v1} = 90^\\circ\\text{C}$):",
        "formula": "$\\Delta t_1 = \\frac{Q_1}{V_1}, \\quad t_{r1} = t_{v1} - \\Delta t_1$",
        "answer": 77.28,
        "unit": "°C",
        "tolerance": 0.05,
        "explain": "$\\Delta t_1 = \\frac{3500}{275} = 12{,}72^\\circ\\text{C}$. Άρα $t_{r1} = 90^\\circ\\text{C} - 12{,}72^\\circ\\text{C} = 77{,}28^\\circ\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Θερμοκρασία εισόδου $t_{v2}$ του σώματος $\\Sigma_2$ (ανάμιξη $50\\%$ νερού $90^\\circ\\text{C}$ και $50\\%$ νερού $77{,}28^\\circ\\text{C}$):",
        "formula": "$t_{v2} = \\frac{90 + t_{r1}}{2}$",
        "answer": 83.64,
        "unit": "°C",
        "tolerance": 0.05,
        "explain": "$t_{v2} = \\frac{90^\\circ\\text{C} + 77{,}28^\\circ\\text{C}}{2} = 83{,}64^\\circ\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Θερμοκρασία εξόδου $t_{r2}$ του σώματος $\\Sigma_2$:",
        "formula": "$\\Delta t_2 = \\frac{Q_2}{V_2}, \\quad t_{r2} = t_{v2} - \\Delta t_2$",
        "answer": 80,
        "unit": "°C",
        "tolerance": 0.05,
        "explain": "$\\Delta t_2 = \\frac{2000}{550} = 3{,}64^\\circ\\text{C}$. Άρα $t_{r2} = 83{,}64^\\circ\\text{C} - 3{,}64^\\circ\\text{C} = 80^\\circ\\text{C}$."
      }
    ],
    "omitted": []
  },
  {
    "id": "ch09-28573",
    "group": "ch09-04-epilogi-sto-monosolinio-systima",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28573",
    "bankCode": "28573",
    "title": "#28573 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "stoixeia-kentrikon-thermanseon/ch09",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "mc",
        "subq": "4",
        "openEnded": true,
        "prompt": "Ως συντηρητής σε μια εγκατάσταση κεντρικής θέρμανσης με μεγάλη παροχή νερού και σε περιπτώσεις βρόχων με μεγάλα συνολικά φορτία, θα τροφοδοτούσατε πρώτα τα σώματα με μεγάλα θερμικά φορτία; Να δικαιολογήσετε την απάντησή σας.",
        "options": [
          {
            "id": "a",
            "text": "Όχι, σε βρόχους με πολλά σώματα και μεγάλα φορτία δεν είναι σκόπιμο να τροφοδοτούνται τα σώματα με τόσο μεγάλες παροχές (100% προρρύθμιση) διότι οδηγούν σε μεγάλες μέσες θερμοκρασίες λειτουργίας. Συνηθίζεται προρρύθμιση στα επίπεδα του 50%."
          },
          {
            "id": "b",
            "text": "Ναι, διότι τα σώματα με μεγάλα φορτία πρέπει πάντα να τροφοδοτούνται πρώτα με 100% προρρύθμιση ανεξαρτήτως του μεγέθους του βρόχου."
          },
          {
            "id": "c",
            "text": "Όχι, διότι στα μονοσωλήνια συστήματα όλα τα σώματα τροφοδοτούνται πάντα με την ίδια ακριβώς θερμοκρασία νερού."
          }
        ],
        "answer": "a",
        "explain": "Τα σώματα που καλύπτουν μεγάλα φορτία είναι θεμιτό να τροφοδοτούνται πρώτα με 100% προρρύθμιση για υψηλή $t_{\\text{εν}}$. Ωστόσο, σε βρόχους με πολλά σώματα και μεγάλα φορτία, η πρακτική αυτή οδηγεί σε πολύ μεγάλες μέσες θερμοκρασίες λειτουργίας. Γι' αυτό συνηθίζεται προρρύθμιση 50%, η οποία περιορίζει τις πιθανότητες σφαλμάτων λόγω πολλών διαφορετικών ρυθμίσεων."
      }
    ],
    "omitted": []
  }
]
);
