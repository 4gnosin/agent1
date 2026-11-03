window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanourgiki-texnologia"] = window.SUBJECT_DATA["michanourgiki-texnologia"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanourgiki-texnologia"].exercises.push(...
[
  {
    "id": "ch04-27603",
    "group": "ch04-04-chronos-katergasias",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #27603",
    "bankCode": "27603",
    "title": "#27603 — Θέμα 4<sup>ο</sup> (4.6.4)",
    "units": 25,
    "theory": "ch04-04-chronos-katergasias",
    "sourceOrder": 1,
    "stem": "Πρόκειται να πραγματοποιηθεί τόρνευση προσώπου τεμαχίου διαμέτρου $d = 200\\text{ mm}$ και σε μήκος $L_a = 27{,}36\\text{ mm}$ με ταχύτητα κοπής $u = 20\\text{ m/min}$ και πρόωση $s = 0{,}5\\text{ mm/min}$.\nΝα υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Τις στροφές περιστροφής του τσοκ του τόρνου $n$ σε rpm.",
        "formula": "$n = \\frac{u \\cdot 1000}{\\pi \\cdot d}$",
        "answer": 31.84,
        "unit": "rpm",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο $n = \\frac{u \\cdot 1000}{\\pi \\cdot d}$, όπου $u = 20\\text{ m/min}$ και $d = 200\\text{ mm}$.",
        "explain": "Οι στροφές υπολογίζονται από τον τύπο $n = \\frac{20 \\cdot 1000}{\\pi \\cdot 200} \\approx 31{,}84\\text{ rpm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το μήκος κοπής $L$ σε mm.",
        "formula": "$L = r + L_a$",
        "answer": 127.36,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Η ακτίνα $r$ είναι το ήμισυ της διάμετρου $d$. Το συνολικό μήκος κοπής είναι $L = r + L_a$.",
        "explain": "Η ακτίνα είναι $r = \\frac{d}{2} = \\frac{200}{2} = 100\\text{ mm}$. Συνεπώς, $L = 100 + 27{,}36 = 127{,}36\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Τον χρόνο κοπής $t_h$ σε min.",
        "formula": "$t_h = \\frac{L}{s \\cdot n}$",
        "answer": 8,
        "unit": "min",
        "tolerance": 0.05,
        "hint": "Χρησιμοποιήστε τον τύπο $t_h = \\frac{L}{s \\cdot n}$ με τις τιμές που υπολογίσατε στα προηγούμενα ερωτήματα.",
        "explain": "Ο χρόνος κοπής είναι $t_h = \\frac{127{,}36}{0{,}5 \\cdot 31{,}84} = 8\\text{ min}$."
      }
    ]
  },
  {
    "id": "ch04-29133",
    "group": "ch04-04-chronos-katergasias",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29133",
    "bankCode": "29133",
    "title": "#29133 — Θέμα 4<sup>ο</sup> (4.6.4)",
    "units": 25,
    "theory": "ch04-04-chronos-katergasias",
    "sourceOrder": 3,
    "stem": "Είστε μηχανικός σε ένα μηχανουργείο. Ποιες από τις παρακάτω οδηγίες είναι ορθές για την ασφαλή και σωστή τόρνευση τεμαχίων;",
    "items": [
      {
        "kind": "tf",
        "subq": "1",
        "subqPrompt": "1. Επιλέξτε ποιες από τις ακόλουθες πρακτικές είναι ορθές για τον χειρισμό του τόρνου:",
        "prompt": "Το τεμάχιο πρέπει να στερεώνεται στο τσοκ κεντραρισμένο και με ασφάλεια.",
        "answer": true,
        "explain": "Σωστό. Η ασφαλής και κεντραρισμένη στερέωση αποτρέπει την εκτόξευση του τεμαχίου και τους κραδασμούς."
      },
      {
        "kind": "tf",
        "subq": "2",
        "prompt": "Το κλειδί του τσοκ πρέπει να παραμένει επάνω στο τσοκ κατά την εκκίνηση για εξοικονόμηση χρόνου.",
        "answer": false,
        "explain": "Λάθος. Το κλειδί του τσοκ πρέπει να απομακρύνεται αμέσως μετά το δέσιμο του κομματιού για να αποφευχθεί σοβαρό ατύχημα."
      },
      {
        "kind": "tf",
        "subq": "3",
        "prompt": "Πριν σταματήσουν οι στροφές του τσοκ, το κοπτικό εργαλείο πρέπει να απομακρύνεται από το κομμάτι.",
        "answer": true,
        "explain": "Σωστό. Αν ο τόρνος σταματήσει ενώ το εργαλείο ακουμπάει στο τεμάχιο, κινδυνεύει να σπάσει."
      },
      {
        "kind": "tf",
        "subq": "4",
        "prompt": "Όλες οι μετρήσεις και οι έλεγχοι πρέπει να γίνονται με τον τόρνο σε πλήρη λειτουργία για μεγαλύτερη παραγωγικότητα.",
        "answer": false,
        "explain": "Λάθος. Όλες οι μετρήσεις πρέπει να γίνονται με το κατάλληλο μετρικό όργανο και με τον τόρνο κλειστό (σε στάση)."
      }
    ]
  }
]
);
