window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch02-23825",
    "group": "ch02-heat-loads",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23825",
    "bankCode": "23825",
    "title": "#23825 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "heat-loads",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "calc",
        "prompt": "Σε χώρο όγκου V = 348 m³, με t_db = 27 °C και t_wb = 22 °C (Σημείο 1), αν μειωθεί η ειδική υγρασία σε W = 8 g/kg (Σημείο 2) με σταθερή t_db, υπολογίστε τη λανθάνουσα διαφορά ενθαλπίας Δh_L (kJ/kg) (με h_1 = 64,3 kJ/kg και h_2 = 48 kJ/kg).",
        "formula": "Δh_L = h_1 − h_2",
        "answer": 16.3,
        "unit": "kJ/kg",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τη διαφορά ενθαλπίας μεταξύ των δύο σημείων.",
        "explain": "Η λανθάνουσα διαφορά ενθαλπίας είναι \\( \\Delta h_L = 64,3 - 48 = 16,3\\text{ kJ/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε τη λανθάνουσα θερμότητα Q_L (kJ), δεδομένου ότι ο ειδικός όγκος είναι v = 0,87 m³/kg.",
        "formula": "Q_L = m · Δh_L, όπου m = V / v",
        "answer": 6520,
        "unit": "kJ",
        "tolerance": 0.02,
        "hint": "Βρείτε πρώτα τη μάζα αέρα m = 348 / 0,87 kg και πολλαπλασιάστε επί Δh_L.",
        "explain": "Η μάζα είναι \\( m = 348 / 0,87 = 400\\text{ kg} \\). Άρα \\( Q_L = 400 \\cdot 16,3 = 6520\\text{ kJ} \\)."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_#23825_sol01.png"
    ]
  },
  {
    "id": "ch02-23849",
    "group": "ch02-heat-loads",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23849",
    "bankCode": "23849",
    "title": "#23849 — Θέμα 2<sup>ο</sup> (2.1–2.2)",
    "units": 25,
    "theory": "heat-loads",
    "sourceOrder": 10,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Το ποσό της θερμότητας που απομακρύνεται κατά την ψύξη μιας ποσότητας αέρα, χωρίς να λαμβάνει χώρα υγροποίηση υδρατμών, ονομάζεται αισθητή θερμότητα.",
        "answer": true,
        "explain": "Σωστό. Η αισθητή θερμότητα σχετίζεται αποκλειστικά με τη μεταβολή της θερμοκρασίας χωρίς αλλαγή φάσης."
      },
      {
        "kind": "tf",
        "prompt": "β. Ο λόγος Δh_S / Δh_T ονομάζεται συντελεστής ολικής θερμότητας.",
        "answer": false,
        "explain": "Λάθος. Ο λόγος αυτός ονομάζεται συντελεστής αισθητής θερμότητας (SHR ή SHF)."
      },
      {
        "kind": "tf",
        "prompt": "γ. Σ' έναν κλιματιζόμενο χώρο η μάζα του αέρα παραμένει σταθερή σε οποιαδήποτε μεταβολή στον ψυχρομετρικό χάρτη.",
        "answer": true,
        "explain": "Σωστό. Η μάζα του ξηρού αέρα παραμένει σταθερή κατά τις ψυχρομετρικές διεργασίες."
      },
      {
        "kind": "tf",
        "prompt": "Να εξηγήσετε τι σημαίνει στην πράξη ο όρος σημείο δρόσου και γιατί δε προδιαγράφουμε τα πάντα με τον όρο 'κλιματιζόμενος αέρας'.",
        "answer": true,
        "explain": "Το σημείο δρόσου είναι η μέγιστη θερμοκρασία σώματος για να έχουμε υγροποίηση. Ο κλιματιζόμενος αέρας δεν ορίζεται μόνο από θερμοκρασία και υγρασία, αλλά επηρεάζεται και από ταχύτητα, σκόνη, οσμές κλπ."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_#23849_sol01.png"
    ]
  },
  {
    "id": "ch02-23871",
    "group": "ch02-heat-loads",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23871",
    "bankCode": "23871",
    "title": "#23871 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "heat-loads",
    "sourceOrder": 11,
    "items": [
      {
        "kind": "calc",
        "prompt": "Σε κλιματιζόμενο χώρο με m = 500 kg, αρχική ενθαλπία h_1 = 65 kJ/kg και τελική h_2 = 43 kJ/kg, υπολογίστε τη λανθάνουσα θερμότητα Q_L (kJ).",
        "formula": "Q_L = m · (h_1 − h_2)",
        "answer": 11000,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα τη διαφορά ενθαλπίας Δh_L = h_1 − h_2 και πολλαπλασιάστε επί τη μάζα m.",
        "explain": " \\( \\Delta h_L = 65 - 43 = 22\\text{ kJ/kg} \\). Άρα \\( Q_L = 500 \\cdot 22 = 11000\\text{ kJ} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_#23871_fig01.png",
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_#23871_sol01.png"
    ]
  }
]
);
