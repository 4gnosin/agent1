window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-25266",
    "group": "ch02-10-proto-thermodynamiko-axiosima",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25266",
    "code": "Θέμα 4<sup>ο</sup> · #25266",
    "title": "#25266 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch02-10-thermodynamiko-axiosima",
    "sourceOrder": 4,
    "stem": "Σε ένα κλειστό σύστημα, ρευστό μάζας $m = 4\\text{ kg}$ υφίσταται μια μεταβολή. Κατά την διάρκεια της μεταβολής παράγεται έργο $W = 100\\text{ kJ}$, ενώ η προσφερόμενη θερμότητα ανά μονάδα μάζας $q$ ισούται $q = 20\\text{ kJ/kg}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την προσφερόμενη θερμότητα $Q$.",
        "formula": "$Q = m \\cdot q$",
        "answer": 80,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τη μάζα $m$ επί τη ειδική θερμότητα $q$.",
        "explain": "Η προσφερόμενη θερμότητα $Q$ ισούται: $Q = m \\cdot q = 4\\text{ kg} \\cdot 20\\text{ kJ/kg} = 80\\text{ kJ}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη μεταβολή της εσωτερικής ενέργειας $\\Delta U$ του συστήματος.",
        "formula": "$\\Delta U = Q - W$",
        "answer": -20,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε το Α' Θερμοδυναμικό Αξίωμα $Q = \\Delta U + W$.",
        "explain": "Από το Α' Θερμοδυναμικό αξίωμα έχουμε $Q = \\Delta U + W \\Rightarrow \\Delta U = Q - W = 80\\text{ kJ} - 100\\text{ kJ} = -20\\text{ kJ}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Εάν το σύστημα ήταν μονωμένο και αποδίδεται το έργο που αναγράφεται στην εκφώνηση, πόση θα ήταν η μεταβολή της εσωτερικής ενέργειας; Να σχολιάσετε το αποτέλεσμα.",
        "formula": "$\\Delta U = -W$",
        "answer": -100,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Σε μονωμένο σύστημα η προσφερόμενη θερμότητα είναι μηδέν ($Q = 0$).",
        "explain": "Εάν το σύστημα είναι μονωμένο τότε $Q = 0$, άρα η μεταβολή της εσωτερικής ενέργειας ισούται: $Q = \\Delta U + W \\Rightarrow \\Delta U = -W = -100\\text{ kJ}$. Το αρνητικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια του συστήματος μειώνεται."
      }
    ]
  }
]
);
