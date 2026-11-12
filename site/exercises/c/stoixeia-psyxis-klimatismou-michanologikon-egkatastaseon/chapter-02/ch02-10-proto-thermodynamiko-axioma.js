window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch02-25266",
    "group": "ch02-10-proto-thermodynamiko-axioma",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25266",
    "bankCode": "25266",
    "title": "#25266 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch02-10-proto-thermodynamiko-axioma",
    "stem": "Σε ένα κλειστό σύστημα, ρευστό μάζας $m = 4\\text{ kg}$ υφίσταται μια μεταβολή. Κατά τη διάρκεια της μεταβολής παράγεται έργο $W = 100\\text{ kJ}$, ενώ η προσφερόμενη θερμότητα ανά μονάδα μάζας $q$ ισούται με $q = 20\\text{ kJ/kg}$.",
    "givens": [
      {
        "label": "$m$",
        "value": "$4 \\text{kg}$"
      },
      {
        "label": "$W$",
        "value": "100 kJ"
      },
      {
        "label": "$q$",
        "value": "$20 kJ/\\text{kg}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την ολική προσφερόμενη θερμότητα $Q$ σε kJ.",
        "formula": "$Q = m \\cdot q$",
        "answer": 80,
        "unit": "kJ",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε τη μάζα $m$ επί την ειδική θερμότητα $q$.",
        "explain": "Η προσφερόμενη θερμότητα $Q$ ισούται με:\n$$Q = m \\cdot q = 4\\text{ kg} \\cdot 20\\text{ kJ/kg} = 80\\text{ kJ}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη μεταβολή της εσωτερικής ενέργειας $\\Delta U$ του συστήματος σε kJ.",
        "formula": "$\\Delta U = Q - W$",
        "answer": -20,
        "unit": "kJ",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε το πρώτο θερμοδυναμικό αξίωμα $Q = \\Delta U + W$.",
        "explain": "Σύμφωνα με το πρώτο θερμοδυναμικό αξίωμα:\n$$\\begin{aligned}\nQ &= \\Delta U + W \\\\\n\\Rightarrow \\Delta U &= Q - W \\\\\n&= 80\\text{ kJ} - 100\\text{ kJ} = -20\\text{ kJ}\n\\end{aligned}$$"
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Εάν το σύστημα ήταν μονωμένο και αποδίδεται το έργο που αναγράφεται στην εκφώνηση, ποια θα ήταν η μεταβολή της εσωτερικής ενέργειας και ποια η σημασία της;",
        "options": [
          {
            "id": "a",
            "text": "$\\Delta U = -100\\text{ kJ}$. Το αρνητικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια μειώνεται."
          },
          {
            "id": "b",
            "text": "$\\Delta U = +100\\text{ kJ}$. Το θετικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια αυξάνεται."
          },
          {
            "id": "c",
            "text": "$\\Delta U = 0\\text{ kJ}$. Το σύστημα διατηρεί σταθερή την εσωτερική του ενέργεια."
          },
          {
            "id": "d",
            "text": "$\\Delta U = -80\\text{ kJ}$. Η εσωτερική ενέργεια μειώνεται λόγω της απώλειας θερμότητας."
          }
        ],
        "answer": "a",
        "explain": "Εάν το σύστημα είναι μονωμένο, τότε $Q = 0$. Από το πρώτο θερμοδυναμικό αξίωμα:\n$$\\begin{aligned}\nQ &= \\Delta U + W \\\\\n0 &= \\Delta U + W \\\\\n\\Rightarrow \\Delta U &= -W = -100\\text{ kJ}\n\\end{aligned}$$\nΤο αρνητικό αποτέλεσμα σημαίνει ότι η εσωτερική ενέργεια μειώνεται."
      }
    ]
  }
]
);
