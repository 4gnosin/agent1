window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch06-24650",
    "group": "ch06-03-ypologismos-toy-levita",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24650",
    "bankCode": "24650",
    "title": "#24650 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch06-03-ypologismos-toy-levita",
    "stem": "Σε μια μονοκατοικία, για την εγκατάσταση συστήματος κεντρικής θέρμανσης, υπολογίστηκε ότι το σύνολο των θερμικών απαιτήσεων είναι $Q_{\\text{ολ}} = 50.000\\text{ kcal/h}$.",
    "givens": [
      {
        "label": "$Q_ολ$",
        "value": "$50.000 \\text{kcal/h}$"
      },
      {
        "label": "Προσαύξηση",
        "value": "30%"
      },
      {
        "label": "η",
        "value": "0,8"
      },
      {
        "label": "H",
        "value": "$10.000 \\text{kcal}/\\text{kg}$"
      }
    ],
    "sourceOrder": 5,
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "4.1 Για την επιλογή του λέβητα είναι επιθυμητή μία προσαύξηση κατά 30%. Ποια είναι η θερμική ισχύς του λέβητα $Q_{\\lambda}$;",
        "formula": "$Q_{\\lambda} = 1{,}30 \\cdot Q_{\\text{ολ}}$",
        "answer": 65000,
        "unit": "kcal/h",
        "tolerance": 0.01,
        "hint": "$Q_{\\lambda} = 1{,}30 \\cdot 50.000$",
        "explain": "$Q_{\\lambda} = 1{,}30 \\cdot Q_{\\text{ολ}} = 1{,}30 \\cdot 50.000 = 65.000\\text{ kcal/h}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Ο λέβητας του οποίου η ισχύς υπολογίστηκε στο ερώτημα 4.1 θα συνεργαστεί με καυστήρα που έχει βαθμό απόδοσης $\\\\beta = 0{,}8$ και καίει καύσιμο με θερμογόνο δύναμη $H = 10.000\\text{ kcal/kg}$. Πόση είναι η ωριαία ποσότητα καυσίμου $w$ που μπορεί να καταναλώσει;",
        "formula": "$w = \\frac{Q_{\\lambda}}{H \\cdot \\\\beta}$",
        "answer": 8.125,
        "unit": "kg/h",
        "tolerance": 0.01,
        "hint": "$w = \\frac{65.000}{10.000 \\cdot 0{,}8}$",
        "explain": "$w = \\frac{Q_{\\lambda}}{H \\cdot \\\\beta} = \\frac{65.000}{10.000 \\cdot 0{,}8} = \\frac{65.000}{8.000} = 8{,}125\\text{ kg/h}$."
      }
    ]
  },
  {
    "id": "ch06-28675",
    "group": "ch06-03-ypologismos-toy-levita",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28675",
    "bankCode": "28675",
    "title": "#28675 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch06-03-ypologismos-toy-levita",
    "stem": "Σε μία μελέτη κεντρικής θέρμανσης υπολογίζετε το σύνολο των θερμικών απαιτήσεων του κτιρίου ότι είναι $Q_{\\text{ολ}} = 95.000\\text{ kW}$.",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "4.1",
        "prompt": "Προτείνετε την ισχύ του λέβητα $Q_{\\lambda}$ για την εγκατάσταση και εξηγήστε γιατί.",
        "options": [
          {
            "id": "a",
            "text": "Επιλέγεται ισχύς $104.500\\text{ kW} \\le Q_{\\lambda} \\le 123.500\\text{ kW}$, εφαρμόζοντας προσαύξηση $10\\% \\sim 30\\%$ στο $Q_{\\text{ολ}}$ για περιθώριο ασφαλείας και μείωση βαθμού απόδοσης λόγω παλαιότητας."
          },
          {
            "id": "b",
            "text": "Επιλέγεται ισχύς $Q_{\\lambda} = 95.000\\text{ kW}$ ακριβώς, χωρίς καμία προσαύξηση."
          },
          {
            "id": "c",
            "text": "Επιλέγεται ισχύς $Q_{\\lambda} = 50.000\\text{ kW}$, διότι η μέγιστη επιτρεπτή ισχύς λέβητα είναι $50.000\\text{ kW}$."
          },
          {
            "id": "d",
            "text": "Επιλέγεται ισχύς $Q_{\\lambda} = 190.000\\text{ kW}$ (διπλάσια ισχύς) για κάλυψη μελλοντικών επεκτάσεων κατά $100\\%$."
          }
        ],
        "answer": "a",
        "explain": "Η ισχύς του λέβητα $Q_{\\lambda}$ πρέπει να καλύπτει τις θερμικές απαιτήσεις ($Q_{\\text{ολ}}$) με προσαύξηση $10\\% \\sim 30\\%$ ($Q_{\\lambda} = (1{,}10 \\sim 1{,}30) \\cdot Q_{\\text{ολ}}$). Αυτό παρέχει περιθώριο ασφάλειας λόγω μείωσης του βαθμού απόδοσης με την πάροδο του χρόνου. Επομένως: $104.500\\text{ kW} \\le Q_{\\lambda} \\le 123.500\\text{ kW}$."
      }
    ]
  }
]
);
