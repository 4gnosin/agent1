window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-23639",
    "group": "ch03-04-agogimotita",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23639",
    "code": "Θέμα 4<sup>ο</sup> · #23639",
    "title": "#23639 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "ch03-04-agogimotita",
    "sourceOrder": 2,
    "stem": "Η εσωτερική θερμοκρασία αίθουσας διδασκαλίας είναι $t_i = 20\\text{ }^\\circ\\text{C}$, ενώ η θερμοκρασία περιβάλλοντος είναι $t_o = -5\\text{ }^\\circ\\text{C}$. Οι θερμικές απώλειες του εξωτερικού τοίχου της αίθουσας είναι $q = 972\\text{ W}$. Ο ολικός συντελεστής θερμοπερατότητας του τοίχου είναι $U = 2,16\\text{ W}/(\\text{m}^2\\cdot\\text{K})$ και ο τοίχος έχει μήκος $M = 6\\text{ m}$.",
    "items": [
      {
        "subq": "4.1",
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε την επιφάνεια του τοίχου $A$ σε $\\text{m}^2$.",
        "formula": "$A = \\frac{q}{U \\cdot (t_i - t_o)}$",
        "answer": 18,
        "unit": "m2",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο $A = \\frac{q}{U \\cdot \\Delta t}$.",
        "explain": "Από τον τύπο $q = A \\cdot U \\cdot (t_i - t_o)$ προκύπτει $A = \\frac{972}{2,16 \\cdot [20 - (-5)]} = \\frac{972}{2,16 \\cdot 25} = 18\\text{ m}^2$."
      },
      {
        "subq": "4.2",
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε το ύψος του τοίχου $Y$ σε $\\text{m}$.",
        "formula": "$Y = \\frac{A}{M}$",
        "answer": 3,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την επιφάνεια $A$ με το μήκος $M$.",
        "explain": "Το ύψος υπολογίζεται από τη σχέση $A = M \\cdot Y \\implies Y = \\frac{A}{M} = \\frac{18\\text{ m}^2}{6\\text{ m}} = 3\\text{ m}$."
      }
    ]
  },
  {
    "id": "ch03-23879",
    "group": "ch03-04-agogimotita",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23879",
    "code": "Θέμα 4<sup>ο</sup> · #23879",
    "title": "#23879 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-04-agogimotita",
    "sourceOrder": 3,
    "stem": "Να υπολογιστούν οι θερμικές απώλειες από αγωγιμότητα σε Watt, μίας οροφής με πλάκα από μπετόν και με μόνωση $5\\text{ cm}$, σε μια αίθουσα διδασκαλίας που βρίσκεται στη Χίο. Οι διαστάσεις της οροφής είναι: μήκος $8\\text{ m}$ και πλάτος $5\\text{ m}$.",
    "items": [
      {
        "subq": "4.1",
        "kind": "calc",
        "prompt": "Να υπολογίσετε τις συνολικές θερμικές απώλειες από αγωγιμότητα $q$ της οροφής σε Watt.",
        "formula": "$q = A \\cdot U \\cdot \\Delta t$",
        "answer": 414.8,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Βρείτε τα $t_o$, $t_i$ και $U$ από τους πίνακες και χρησιμοποιήστε το $q = A \\cdot U \\cdot (t_i - t_o)$.",
        "explain": "Για τη Χίο $t_o = +3\\text{ }^\\circ\\text{C}$, για αίθουσα διδασκαλίας $t_i = 20\\text{ }^\\circ\\text{C}$ και για οροφή με μόνωση $5\\text{ cm}$, $U = 0,61\\text{ W}/(\\text{m}^2\\cdot\\text{K})$. Η επιφάνεια είναι $A = 8 \\cdot 5 = 40\\text{ m}^2$. Άποτε $q = 40 \\cdot 0,61 \\cdot (20 - 3) = 414,8\\text{ W}$."
      }
    ]
  },
  {
    "id": "ch03-25284",
    "group": "ch03-04-agogimotita",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25284",
    "code": "Θέμα 4<sup>ο</sup> · #25284",
    "title": "#25284 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-04-agogimotita",
    "sourceOrder": 4,
    "stem": "Να υπολογιστούν οι θερμικές απώλειες από αγωγιμότητα σε Watt, ενός συνήθους εξωτερικού τοίχου με μόνωση $5\\text{ cm}$, ο οποίος φέρει ένα κούφωμα αλουμινίου με διπλά τζάμια, με κενό αέρα. Ο τοίχος βρίσκεται σε κλιμακοστάσιο πολυκατοικίας στη Μυτιλήνη. Διαστάσεις τοίχου: μήκος $8\\text{ m}$ και ύψος $3\\text{ m}$. Διαστάσεις κουφώματος: μήκος $4\\text{ m}$ και ύψος $1,5\\text{ m}$.",
    "items": [
      {
        "subq": "4.1",
        "kind": "calc",
        "prompt": "Να υπολογίσετε τις ολικές θερμικές απώλειες από αγωγιμότητα $q_{\\text{ολ}}$ του τοίχου και του κουφώματος σε Watt.",
        "formula": "$q_{\\text{ολ}} = q_{\\text{τοιξ.}} + q_{\\text{κουφ.}}$",
        "answer": 369.72,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Υπολογίστε ξεχωριστά τις απώλειες του καθαρού τοίχου και του κουφώματος και προσθέστε τες.",
        "explain": "Για Μυτιλήνη $t_o = +2\\text{ }^\\circ\\text{C}$, για κλιμακοστάσιο $t_i = 15\\text{ }^\\circ\\text{C}$ ($\\Delta t = 13\\text{ }^\\circ\\text{C}$). $U_{\\text{τοιξ.}} = 0,58$, $U_{\\text{κουφ.}} = 3,00\\text{ W}/(\\text{m}^2\\cdot\\text{K})$. $A_{\\text{κουφ.}} = 6\\text{ m}^2$, $A_{\\text{τοιξ.}} = 24 - 6 = 18\\text{ m}^2$. $q_{\\text{τοιξ.}} = 18 \\cdot 0,58 \\cdot 13 = 135,72\\text{ W}$, $q_{\\text{κουφ.}} = 6 \\cdot 3,00 \\cdot 13 = 234\\text{ W}$. Ολικές απώλειες: $135,72 + 234 = 369,72\\text{ W}$."
      }
    ]
  },
  {
    "id": "ch03-26823",
    "group": "ch03-04-agogimotita",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26823",
    "code": "Θέμα 4<sup>ο</sup> · #26823",
    "title": "#26823 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch03-04-agogimotita",
    "sourceOrder": 5,
    "stem": "Ο βορεινός τοίχος αίθουσας σχολείου έχει μήκος $8\\text{ m}$ και ύψος $3\\text{ m}$ (συνήθης εξωτερικός τοίχος με μόνωση $5\\text{ cm}$). Έχει δύο ανοίγματα-παράθυρα μήκους $2\\text{ m}$ και ύψους $1\\text{ m}$ το καθένα, από αλουμίνιο με απλά τζάμια. Η θερμοκρασία περιβάλλοντος είναι $t_1 = +2\\text{ }^\\circ\\text{C}$ και του εσωτερικού $t_2 = +22\\text{ }^\\circ\\text{C}$.",
    "items": [
      {
        "subq": "α",
        "kind": "calc",
        "prompt": "α. Οι θερμικές απώλειες από αγωγιμότητα των παραθύρων $q_\\pi$ σε Watt.",
        "formula": "$q_\\pi = A_\\pi \\cdot U \\cdot \\Delta t$",
        "answer": 400,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το συνολικό εμβαδόν των 2 παραθύρων και χρησιμοποιήστε $U = 5\\text{ W}/(\\text{m}^2\\cdot\\text{K})$.",
        "explain": "$A_{\\pi 1} = 2 \\cdot 1 = 2\\text{ m}^2$, άρα για 2 παράθυρα $A_\\pi = 4\\text{ m}^2$. $\\Delta t = 22 - 2 = 20\\text{ }^\\circ\\text{C}$. $q_\\pi = 4 \\cdot 5 \\cdot 20 = 400\\text{ W}$."
      },
      {
        "subq": "β",
        "kind": "calc",
        "prompt": "β. Οι θερμικές απώλειες του καθαρού τοίχου $q_\\tau$ σε Watt.",
        "formula": "$q_\\tau = A \\cdot U \\cdot \\Delta t$",
        "answer": 232,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε το εμβαδόν των παραθύρων από το συνολικό εμβαδόν του τοίχου και χρησιμοποιήστε $U = 0,58$.",
        "explain": "Συνολικό εμβαδόν $8 \\cdot 3 = 24\\text{ m}^2$. Καθαρό εμβαδόν τοίχου $A = 24 - 4 = 20\\text{ m}^2$. $q_\\tau = 20 \\cdot 0,58 \\cdot 20 = 232\\text{ W}$."
      },
      {
        "subq": "γ",
        "kind": "calc",
        "prompt": "γ. Οι συνολικές θερμικές απώλειες του τοίχου και παραθύρων $q$ σε Watt.",
        "formula": "$q = q_\\pi + q_\\tau$",
        "answer": 632,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Προσθέστε τα αποτελέσματα των ερωτημάτων α και β.",
        "explain": "$q = 400\\text{ W} + 232\\text{ W} = 632\\text{ W}$."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_26823_fig01.webp",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_26823_fig01.webp",
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_26823_fig02.webp"
    ]
  }
]
);
