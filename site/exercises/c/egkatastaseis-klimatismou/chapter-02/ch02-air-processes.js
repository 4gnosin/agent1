window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch02-23771",
    "group": "ch02-air-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23771",
    "bankCode": "23771",
    "title": "#23771 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "air-processes",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "calc",
        "prompt": "Σε κλιματιστική μονάδα εισέρχεται αέρας με t_db1 = 31 °C, φ1 = 80% (Σημείο 1) και εξέρχεται με t_db2 = 22 °C, φ2 = 50% (Σημείο 2). Υπολογίστε την ενθαλπία h_1 (kJ/kg).",
        "formula": "h1 = f(t_db1, φ1)",
        "answer": 90,
        "unit": "kJ/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε από τον χάρτη για το σημείο 1.",
        "explain": "Από τον χάρτη \\( h_1 = 90\\text{ kJ/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ενθαλπία h_2 (kJ/kg) στο σημείο 2.",
        "formula": "h2 = f(t_db2, φ2)",
        "answer": 43,
        "unit": "kJ/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε από τον χάρτη για το σημείο 2.",
        "explain": "Από τον χάρτη \\( h_2 = 43\\text{ kJ/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ολική διαφορά ενθαλπίας Δh_T (kJ/kg).",
        "formula": "Δh_T = h_1 − h_2",
        "answer": 47,
        "unit": "kJ/kg",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε την h_2 από την h_1.",
        "explain": " \\( \\Delta h_T = 90 - 43 = 47\\text{ kJ/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την αισθητή διαφορά ενθαλπίας Δh_S (kJ/kg), με ενθαλπία ενδιάμεσου σημείου h_3 = 52 kJ/kg.",
        "formula": "Δh_S = h_3 − h_2",
        "answer": 9,
        "unit": "kJ/kg",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε το σημείο τομής 3.",
        "explain": " \\( \\Delta h_S = 52 - 43 = 9\\text{ kJ/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε τον Συντελεστή Αισθητής Θερμότητας SHR.",
        "formula": "SHR = Δh_S / Δh_T",
        "answer": 0.19,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το Δh_S δια του Δh_T.",
        "explain": " \\( \\text{SHR} = 9 / 47 \\approx 0,19 \\)."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_#23771_sol01.png"
    ]
  },
  {
    "id": "ch02-23810",
    "group": "ch02-air-processes",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23810",
    "bankCode": "23810",
    "title": "#23810 — Θέμα 2<sup>ο</sup> (2.1–2.3)",
    "units": 25,
    "theory": "air-processes",
    "sourceOrder": 13,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Ο συντελεστής αισθητής θερμότητας SHR μπορεί να πάρει και αρνητικές τιμές.",
        "answer": true,
        "explain": "Σωστό. Ανάλογα με τη φορά της μεταβολής (π.χ. θέρμανση/αφύγρανση ή ψύξη/ύγρανση), μπορεί να προκύψουν αρνητικά πρόσημα."
      },
      {
        "kind": "tf",
        "prompt": "β. Σε μια μεταβολή του αέρα η ολική θερμότητα Q_T που προσδόθηκε ή απομακρύνθηκε ισούται με την ολική διαφορά ενθαλπίας Δh_T.",
        "answer": false,
        "explain": "Λάθος. Η θερμότητα ισούται με τη μεταβολή ενθαλπίας πολλαπλασιασμένη επί τη μάζα (ή παροχή μάζας)."
      },
      {
        "kind": "tf",
        "prompt": "γ. Το φορτίο q είναι η θερμότητα που απάγεται ή προσάγεται μέσα σε ένα χρονικό διάστημα.",
        "answer": true,
        "explain": "Σωστό. Ο ορισμός του θερμικού φορτίου αναφέρεται σε ποσό θερμότητας ανά μονάδα χρόνου (ισχύς)."
      },
      {
        "kind": "tf",
        "prompt": "δ. Σε μια μεταβολή του αέρα η ειδική υγρασία παρέμεινε σταθερή. Η ποσότητα θερμότητας που απομακρύνθηκε ονομάζεται λανθάνουσα.",
        "answer": false,
        "explain": "Λάθος. Όταν η ειδική υγρασία παραμένει σταθερή έχουμε μεταβολή μόνο της θερμοκρασίας (αισθητή θερμότητα), όχι λανθάνουσα."
      },
      {
        "kind": "tf",
        "prompt": "Σε τι χρησιμεύει ο μικρός κύκλος που βρίσκεται στο κέντρο περίπου του ψυχρομετρικού χάρτη;",
        "answer": true,
        "explain": "Ο μικρός κύκλος χρησιμεύει ως σημείο αναφοράς για τη χάραξη της ευθείας του συντελεστή αισθητής θερμότητας (SHR) από την αντίστοιχη κλίκα."
      }
    ]
  },
  {
    "id": "ch02-23811",
    "group": "ch02-air-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23811",
    "bankCode": "23811",
    "title": "#23811 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "air-processes",
    "sourceOrder": 14,
    "items": [
      {
        "kind": "calc",
        "prompt": "Σε κλιματιστική μονάδα εισέρχεται αέρας με t_db1 = 28 °C και φ1 = 60% (Σημείο 1). Υπολογίστε την ενθαλπία h_1 (kJ/kg).",
        "formula": "h1 = f(t_db1, φ1)",
        "answer": 64,
        "unit": "kJ/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε από τον χάρτη.",
        "explain": "Από τον χάρτη \\( h_1 = 64\\text{ kJ/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε τον ειδικό όγκο v_1 (m³/kg) στο σημείο 1.",
        "formula": "v1 = f(t_db1, φ1)",
        "answer": 0.872,
        "unit": "m³/kg",
        "tolerance": 0.01,
        "hint": "Διαβάστε τον ειδικό όγκο.",
        "explain": "Ο ειδικός όγκος είναι \\( v_1 = 0,872\\text{ m}^3\\text{/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ειδική υγρασία W_1 (g/kg) στο σημείο 1.",
        "formula": "W1 = f(t_db1, φ1)",
        "answer": 14.3,
        "unit": "g/kg",
        "tolerance": 0.05,
        "hint": "Διαβάστε την ειδική υγρασία.",
        "explain": "Η ειδική υγρασία είναι \\( W_1 = 14,3\\text{ g/kg} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Με παροχή όγκου Q = 305 L/s (= 0,305 m³/s), υπολογίστε την παροχή μάζας αέρα w (g/s) με v_1 = 0,872 m³/kg.",
        "formula": "w = Q / v1",
        "answer": 349.77,
        "unit": "g/s",
        "tolerance": 0.5,
        "hint": "Μετατρέψτε τα L/s σε m³/s και διαιρέστε με τον ειδικό όγκο.",
        "explain": " \\( w = 305\\text{ L/s} / 0,872\\text{ m}^3\\text{/kg} \\approx 349,77\\text{ g/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε το ολικό ψυκτικό φορτίο q_T (W) με h_2 = 45 kJ/kg.",
        "formula": "q_T = (h_1 − h_2) · w",
        "answer": 6645.63,
        "unit": "W",
        "tolerance": 2.0,
        "hint": "Πολλαπλασιάστε τη διαφορά ενθαλπίας με την παροχή μάζας.",
        "explain": " \\( \\Delta h_T = 64 - 45 = 19\\text{ kJ/kg} \\). Άρα \\( q_T = 19 \\cdot 349,77 = 6645,63\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ποσότητα του νερού που συμπυκνώνεται ανά ώρα (kg/h), με W_2 = 9,5 g/kg.",
        "formula": "m_w = (W_1 − W_2) · w · 3600",
        "answer": 6.048,
        "unit": "kg/h",
        "tolerance": 0.05,
        "hint": "Πολλαπλασιάστε τη διαφορά W επί την παροχή g/s και επί 3600 για να πάρετε g/h, έπειτα μετατρέψτε σε kg/h.",
        "explain": " \\( (14,3 - 9,5) \\cdot 349,77 \\cdot 3600 = 6048\\text{ g/h} = 6,048\\text{ kg/h} \\)."
      }
    ],
    "solutionImages": [
      "images/c/egkatastaseis-klimatismou/chapter-02/c_egkatastaseis-klimatismou_ch02_#23811_sol01.png"
    ]
  }
]
);
