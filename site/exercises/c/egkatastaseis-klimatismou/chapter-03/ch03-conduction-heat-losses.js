window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-23639",
    "group": "ch03-conduction-heat-losses",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23639",
    "code": "Θέμα 4<sup>ο</sup> · #23639",
    "title": "#23639 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 25,
    "theory": "3.4",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 Να υπολογίσετε την επιφάνεια του τοίχου Α σε m².",
        "formula": "A = q / (U · (tᵢ − tₒ))",
        "answer": 18,
        "unit": "m²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο A = q / (U · Δt).",
        "explain": "Από τον τύπο \\( A = \\frac{q}{U \\cdot (t_i - t_o)} = \\frac{972}{2{,}16 \\cdot (20 - (-5))} = \\frac{972}{2{,}16 \\cdot 25} = 18\\text{ m}^2 \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε το ύψος του τοίχου Υ σε m.",
        "formula": "Y = A / M",
        "answer": 3,
        "unit": "m",
        "tolerance": 0.02,
        "hint": "Διαιρέστε την επιφάνεια Α με το μήκος Μ.",
        "explain": "Από τη σχέση \\( A = M \\cdot Y \\Rightarrow Y = \\frac{A}{M} = \\frac{18}{6} = 3\\text{ m} \\)."
      }
    ]
  },
  {
    "id": "ch03-23879",
    "group": "ch03-conduction-heat-losses",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23879",
    "code": "Θέμα 4<sup>ο</sup> · #23879",
    "title": "#23879 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "3.4",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογίσετε τις θερμικές απώλειες από αγωγιμότητα σε Watt μίας οροφής με πλάκα από μπετόν και μόνωση 5 cm στη Χίο (μήκος 8 m, πλάτος 5 m).",
        "formula": "q = A · U · Δt",
        "answer": 414.8,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Βρείτε to από πίνακα 1, ti από πίνακα 2, U από πίνακα 3 και υπολογίστε q = A · U · (ti − to).",
        "explain": "Για τη Χίο \\( t_o = +3^\\circ\\text{C} \\), για αίθουσα διδασκαλίας \\( t_i = 20^\\circ\\text{C} \\), \\( U = 0{,}61\\text{ W}/(\\text{m}^2\\cdot\\text{K}) \\), \\( A = 8 \\cdot 5 = 40\\text{ m}^2 \\). Άρα \\( q = 40 \\cdot 0{,}61 \\cdot (20 - 3) = 414{,}8\\text{ W} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#23879_fig01.png",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#23879_fig01.png",
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#23879_fig02.png"
    ]
  },
  {
    "id": "ch03-25284",
    "group": "ch03-conduction-heat-losses",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25284",
    "code": "Θέμα 4<sup>ο</sup> · #25284",
    "title": "#25284 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "3.4",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογίσετε τις συνολικές θερμικές απώλειες από αγωγιμότητα σε Watt εξωτερικού τοίχου με μόνωση 5 cm και κουφώματος αλουμινίου σε κλιμακοστάσιο στη Μυτιλήνη.",
        "formula": "q_ol = q_toix + q_kouf",
        "answer": 369.72,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Υπολογίστε καθαρή επιφάνεια τοίχου και κουφώματος, \\( \\Delta t = 15 - 2 = 13^\\circ\\text{C} \\) και αθροίστε τις απώλειες.",
        "explain": "Για Μυτιλήνη \\( t_o = +2^\\circ\\text{C} \\), κλιμακοστάσιο \\( t_i = 15^\\circ\\text{C} \\) (\\(\\Delta t = 13\\text{ K}\\)). \\( A_{\\text{κουφ}} = 4 \\cdot 1{,}5 = 6\\text{ m}^2 \\), \\( A_{\\text{τοιχ}} = (8 \\cdot 3) - 6 = 18\\text{ m}^2 \\). \\( q_{\\text{τοιχ}} = 18 \\cdot 0{,}58 \\cdot 13 = 135{,}72\\text{ W} \\), \\( q_{\\text{κουφ}} = 6 \\cdot 3{,}00 \\cdot 13 = 234\\text{ W} \\). Συνολικά: \\( 135{,}72 + 234 = 369{,}72\\text{ W} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#25284_fig01.png",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#25284_fig01.png",
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#25284_fig02.png"
    ]
  },
  {
    "id": "ch03-26823",
    "group": "ch03-conduction-heat-losses",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26823",
    "code": "Θέμα 4<sup>ο</sup> · #26823",
    "title": "#26823 — Θέμα 4<sup>ο</sup> (α, β, γ)",
    "units": 25,
    "theory": "3.4",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "calc",
        "prompt": "α. Να υπολογίσετε τις θερμικές απώλειες από αγωγιμότητα των παραθύρων σε W.",
        "formula": "q_π = A_π · U · Δt",
        "answer": 400,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Εμβαδόν 2 παραθύρων = 4 m², U = 5 W/(m²·K), Δt = 22 - 2 = 20 °C.",
        "explain": " \\( A_\\pi = 2 \\cdot (2 \\cdot 1) = 4\\text{ m}^2 \\), \\( U = 5\\text{ W}/(\\text{m}^2\\cdot\\text{K}) \\), \\( \\Delta t = 22 - 2 = 20^\\circ\\text{C} \\). Άρα \\( q_\\pi = 4 \\cdot 5 \\cdot 20 = 400\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "β. Να υπολογίσετε τις θερμικές απώλειες του καθαρού τοίχου σε W.",
        "formula": "q_τ = A_τ · U · Δt",
        "answer": 232,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Καθαρή επιφάνεια τοίχου = 24 - 4 = 20 m², U = 0,58 W/(m²·K), Δt = 20 °C.",
        "explain": " \\( A_\\tau = (8 \\cdot 3) - 4 = 20\\text{ m}^2 \\), \\( U = 0{,}58\\text{ W}/(\\text{m}^2\\cdot\\text{K}) \\), \\( \\Delta t = 20^\\circ\\text{C} \\). Άρα \\( q_\\tau = 20 \\cdot 0{,}58 \\cdot 20 = 232\\text{ W} \\)."
      },
      {
        "kind": "calc",
        "prompt": "γ. Να υπολογίσετε τις συνολικές θερμικές απώλειες του τοίχου και των παραθύρων σε W.",
        "formula": "q = q_π + q_τ",
        "answer": 632,
        "unit": "W",
        "tolerance": 0.02,
        "hint": "Προσθέστε τις απώλειες παραθύρων και τοίχου.",
        "explain": " \\( q = 400\\text{ W} + 232\\text{ W} = 632\\text{ W} \\)."
      }
    ],
    "image": "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#26823_fig01.png",
    "images": [
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#26823_fig01.png",
      "images/c/egkatastaseis-klimatismou/chapter-03/c_egkatastaseis-klimatismou_ch03_#26823_fig02.png"
    ]
  }
]
);
