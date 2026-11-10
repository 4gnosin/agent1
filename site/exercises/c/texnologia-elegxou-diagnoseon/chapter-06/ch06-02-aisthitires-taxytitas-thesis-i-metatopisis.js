window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["texnologia-elegxou-diagnoseon"] = window.SUBJECT_DATA["texnologia-elegxou-diagnoseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["texnologia-elegxou-diagnoseon"].exercises.push(...
[
  {
    "id": "ch06-34239",
    "group": "ch06-02-aisthitires-taxytitas-thesis-i-metatopisis",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #34239",
    "bankCode": "34239",
    "title": "#34239 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "aisthitires-taxytitas-thesis-i-metatopisis",
    "stem": "Το παρακάτω σήμα από παλμογράφο είναι από έναν αισθητήρα ταχύτητας στροφών σε σύστημα ABS με οδοντωτό τροχό. Η ευαισθησία τάσης είναι $E_v = 1\\text{ V/DIV}$ και η ευαισθησία χρόνου είναι $E_t = 5\\text{ ms/DIV}$.",
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "openEnded": true,
        "image": "images/c/texnologia-elegxou-diagnoseon/chapter-06/c_texnologia-elegxou-diagnoseon_ch06_34239_fig01.webp",
        "prompt": "α) Πρόκειται για ψηφιακό ή αναλογικό σήμα; Να αιτιολογήσετε την απάντησή σας.",
        "options": [
          {
            "id": "a",
            "text": "Το σήμα είναι αναλογικό επειδή μεταβάλλεται συνεχόμενα ως προς το χρόνο."
          },
          {
            "id": "b",
            "text": "Το σήμα είναι ψηφιακό επειδή αποτελείται από ορθογώνιους παλμούς."
          },
          {
            "id": "c",
            "text": "Το σήμα είναι ψηφιακό επειδή παίρνει μόνο δύο τιμές τάσης."
          },
          {
            "id": "d",
            "text": "Το σήμα είναι αναλογικό επειδή η συχνότητά του παραμένει απόλυτα σταθερή."
          }
        ],
        "answer": "a",
        "explain": "Το σήμα είναι αναλογικό επειδή μεταβάλλεται συνεχόμενα ως προς το χρόνο.",
        "images": [
          "images/c/texnologia-elegxou-diagnoseon/chapter-06/c_texnologia-elegxou-diagnoseon_ch06_34239_fig01.webp"
        ]
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να υπολογίσετε το πλάτος της τάσης $V_0$ του σήματος.",
        "formula": "$V_0 = 2\\text{ DIV} \\cdot 1\\text{ V/DIV}$",
        "answer": 2,
        "unit": "V",
        "tolerance": 0.01,
        "explain": "Έχουμε 2 τετραγωνάκια για το πλάτος τάσης, οπότε: $V_0 = 2\\text{ DIV} \\cdot 1\\text{ V/DIV} = 2\\text{ V}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Να υπολογίσετε την περίοδο $T$ του σήματος.",
        "formula": "$T = 1.5\\text{ DIV} \\cdot 5\\text{ ms/DIV}$",
        "answer": 7.5,
        "unit": "ms",
        "tolerance": 0.01,
        "explain": "Έχουμε 1,5 τετραγωνάκια για την περίοδο, οπότε: $T = 1.5\\text{ DIV} \\cdot 5\\text{ ms/DIV} = 7.5\\text{ ms}$."
      },
      {
        "kind": "calc",
        "subq": "δ",
        "prompt": "δ) Να υπολογίσετε τον αριθμό των δοντιών που είναι σπασμένα.",
        "answer": 2,
        "unit": "δόντια",
        "tolerance": 0,
        "explain": "Έχουμε 2 κορυφές στην κυματομορφή οι οποίες έχουν μικρότερο πλάτος, οπότε 2 δόντια από τον οδοντωτό τροχό είναι σπασμένα."
      },
      {
        "kind": "mc",
        "subq": "ε",
        "prompt": "ε) Να αναφέρετε το είδος του αισθητήρα ταχύτητας στροφών που παράγει το συγκεκριμένο σήμα.",
        "options": [
          {
            "id": "a",
            "text": "Αισθητήρας μαγνητικής αντίστασης (επαγωγικός)"
          },
          {
            "id": "b",
            "text": "Αισθητήρας Hall (ψηφιακός)"
          },
          {
            "id": "c",
            "text": "Οπτικός αισθητήρας"
          },
          {
            "id": "d",
            "text": "Πιεζοηλεκτρικός αισθητήρας"
          }
        ],
        "answer": "a",
        "explain": "Επειδή το σήμα είναι αναλογικό, ο αισθητήρας ταχύτητας στροφών που παράγει τέτοιο σήμα είναι ο αισθητήρας μαγνητικής αντίστασης."
      }
    ],
    "solutionImages": [
      "images/c/texnologia-elegxou-diagnoseon/chapter-06/c_texnologia-elegxou-diagnoseon_ch06_34239_sol01.webp"
    ]
  }
]
);
