// Προαπαιτούμενες Γνώσεις — Ταυτότητες
var identitiesSection = {
  "id": "tautotites",
  "title": "Ταυτότητες",
  "kicker": "Προαπαιτούμενες Γνώσεις",
  "description": "Οι βασικές αλγεβρικές ταυτότητες με αναλυτικές αποδείξεις.",
  "lead": "Οι βασικές αλγεβρικές ταυτότητες (αξιοσημείωτες ταυτότητες) αποτελούν προαπαιτούμενες γνώσεις από προηγούμενες τάξεις για τα Μαθηματικά (Άλγεβρα) της Γ΄ ΕΠΑΛ. Παρακάτω αποδεικνύουμε κάθε ταυτότητα βήμα προς βήμα.",
  "topics": [
    {
      "title": "Τετράγωνο αθροίσματος",
      "intro": "\\((a+b)^2=a^2+2ab+b^2\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a+b)^2=(a+b)(a+b)", "note": "Γράφουμε το τετράγωνο ως γινόμενο δύο ίδιων παραγόντων." },
        { "label": "Βήμα 2ο", "latex": "(a+b)(a+b)=a^2+ab+ba+b^2", "note": "Επιμερίζουμε τον πολλαπλασιασμό σε όλους τους όρους." },
        { "label": "Βήμα 3ο", "latex": "a^2+ab+ba+b^2=a^2+2ab+b^2", "note": "Επειδή ab=ba, οι δύο μεσαίοι όροι είναι ίσοι: ab+ba=2ab." }
      ]
    },
    {
      "title": "Τετράγωνο διαφοράς",
      "intro": "\\((a-b)^2=a^2-2ab+b^2\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a-b)^2=(a-b)(a-b)", "note": "Γράφουμε το τετράγωνο ως γινόμενο δύο ίδιων παραγόντων." },
        { "label": "Βήμα 2ο", "latex": "(a-b)(a-b)=a^2-ab-ba+b^2", "note": "Επιμερίζουμε τον πολλαπλασιασμό σε όλους τους όρους." },
        { "label": "Βήμα 3ο", "latex": "a^2-ab-ba+b^2=a^2-2ab+b^2", "note": "Επειδή ab=ba, οι δύο αρνητικοί μεσαίοι όροι δίνουν −2ab." }
      ]
    },
    {
      "title": "Γινόμενο αθροίσματος και διαφοράς (διαφορά τετραγώνων)",
      "intro": "\\((a+b)(a-b)=a^2-b^2\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a+b)(a-b)=a^2-ab+ba-b^2", "note": "Επιμερίζουμε τον πολλαπλασιασμό σε όλους τους όρους." },
        { "label": "Βήμα 2ο", "latex": "a^2-ab+ba-b^2=a^2-b^2", "note": "Οι μεσαίοι όροι αλληλοαναιρούνται, αφού ab=ba και −ab+ba=0." }
      ]
    },
    {
      "title": "Κύβος αθροίσματος",
      "intro": "\\((a+b)^3=a^3+3a^2b+3ab^2+b^3\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a+b)^3=(a+b)(a+b)^2", "note": "Γράφουμε τον κύβο ως γινόμενο του παράγοντα (a+b) με το τετράγωνό του." },
        { "label": "Βήμα 2ο", "latex": "(a+b)^3=(a+b)(a^2+2ab+b^2)", "note": "Αντικαθιστούμε το τετράγωνο αθροίσματος με την ταυτότητα που αποδείξαμε." },
        { "label": "Βήμα 3ο", "latex": "(a+b)(a^2+2ab+b^2)=a^3+2a^2b+ab^2+a^2b+2ab^2+b^3", "note": "Επιμερίζουμε και πολλαπλασιάζουμε κάθε όρο." },
        { "label": "Βήμα 4ο", "latex": "a^3+2a^2b+ab^2+a^2b+2ab^2+b^3=a^3+3a^2b+3ab^2+b^3", "note": "Ομαδοποιούμε τους όμοιους όρους: 2a²b+a²b=3a²b και ab²+2ab²=3ab²." }
      ]
    },
    {
      "title": "Κύβος διαφοράς",
      "intro": "\\((a-b)^3=a^3-3a^2b+3ab^2-b^3\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a-b)^3=(a-b)(a-b)^2", "note": "Γράφουμε τον κύβο ως γινόμενο του παράγοντα (a−b) με το τετράγωνό του." },
        { "label": "Βήμα 2ο", "latex": "(a-b)^3=(a-b)(a^2-2ab+b^2)", "note": "Αντικαθιστούμε το τετράγωνο διαφοράς με την ταυτότητα που αποδείξαμε." },
        { "label": "Βήμα 3ο", "latex": "(a-b)(a^2-2ab+b^2)=a^3-2a^2b+ab^2-a^2b+2ab^2-b^3", "note": "Επιμερίζουμε και πολλαπλασιάζουμε κάθε όρο." },
        { "label": "Βήμα 4ο", "latex": "a^3-2a^2b+ab^2-a^2b+2ab^2-b^3=a^3-3a^2b+3ab^2-b^3", "note": "Ομαδοποιούμε τους όμοιους όρους: −2a²b−a²b=−3a²b και ab²+2ab²=3ab²." }
      ]
    },
    {
      "title": "Άθροισμα κύβων",
      "intro": "\\(a^3+b^3=(a+b)(a^2-ab+b^2)\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a+b)(a^2-ab+b^2)=a^3-a^2b+ab^2+a^2b-ab^2+b^3", "note": "Επιμερίζουμε και πολλαπλασιάζουμε κάθε όρο." },
        { "label": "Βήμα 2ο", "latex": "a^3-a^2b+ab^2+a^2b-ab^2+b^3=a^3+b^3", "note": "Οι μικτοί όροι αλληλοαναιρούνται: −a²b+a²b=0 και ab²−ab²=0." }
      ]
    },
    {
      "title": "Διαφορά κύβων",
      "intro": "\\(a^3-b^3=(a-b)(a^2+ab+b^2)\\)",
      "steps": [
        { "label": "Βήμα 1ο", "latex": "(a-b)(a^2+ab+b^2)=a^3+a^2b+ab^2-a^2b-ab^2-b^3", "note": "Επιμερίζουμε και πολλαπλασιάζουμε κάθε όρο." },
        { "label": "Βήμα 2ο", "latex": "a^3+a^2b+ab^2-a^2b-ab^2-b^3=a^3-b^3", "note": "Οι μικτοί όροι αλληλοαναιρούνται: a²b−a²b=0 και ab²−ab²=0." }
      ]
    }
  ]
};

window.MATH_SUBCATEGORIES = window.MATH_SUBCATEGORIES || {};
window.MATH_SUBCATEGORIES[identitiesSection.id] = identitiesSection;

identitiesSection.exerciseGroups = [
  {
    "title": "Α. Ανάπτυξη παραστάσεων",
    "description": "Εφάρμοσε τις ταυτότητες και γράψε κάθε αποτέλεσμα σε ανεπτυγμένη μορφή.",
    "instruction": "Ανάπτυξε.",
    "items": [
      { "prompt": "(x+5)^2", "answer": "x^2+10x+25", "solution": "x^2+10x+25" },
      { "prompt": "(2a-3)^2", "answer": "4a^2-12a+9", "solution": "4a^2-12a+9" },
      { "prompt": "(3x+4y)^2", "answer": "9x^2+24xy+16y^2", "solution": "9x^2+24xy+16y^2" },
      { "prompt": "(x-2y)^2", "answer": "x^2-4xy+4y^2", "solution": "x^2-4xy+4y^2" },
      { "prompt": "(5a+1)(5a-1)", "answer": "25a^2-1", "solution": "25a^2-1" },
      { "prompt": "(2x+3y)(2x-3y)", "answer": "4x^2-9y^2", "solution": "4x^2-9y^2" },
      { "prompt": "(x+2)^3", "answer": "x^3+6x^2+12x+8", "solution": "x^3+6x^2+12x+8" },
      { "prompt": "(3a-1)^3", "answer": "27a^3-27a^2+9a-1", "solution": "27a^3-27a^2+9a-1" },
      { "prompt": "(2x+y)^3", "answer": "8x^3+12x^2y+6xy^2+y^3", "solution": "8x^3+12x^2y+6xy^2+y^3" },
      { "prompt": "(a-4b)^3", "answer": "a^3-12a^2b+48ab^2-64b^3", "solution": "a^3-12a^2b+48ab^2-64b^3" }
    ]
  },
  {
    "title": "Α. Ανάπτυξη παραστάσεων — πιο σύνθετες",
    "description": "Αναγνώρισε πρώτα την κατάλληλη ταυτότητα και έπειτα απλοποίησε.",
    "instruction": "Ανάπτυξε και απλοποίησε.",
    "items": [
      { "prompt": "(x+y+2)(x+y-2)", "answer": "x^2+2xy+y^2-4", "solution": "x^2+2xy+y^2-4" },
      { "prompt": "(3a-2b+1)(3a-2b-1)", "answer": "9a^2-12ab+4b^2-1", "solution": "9a^2-12ab+4b^2-1" },
      { "prompt": "(x^2+5)(x^2-5)", "answer": "x^4-25", "solution": "x^4-25" },
      { "prompt": "(2a^2-3b)(2a^2+3b)", "answer": "4a^4-9b^2", "solution": "4a^4-9b^2" },
      { "prompt": "(x+3)^3+(x-3)^3", "answer": "2x^3+54x", "solution": "2x^3+54x" },
      { "prompt": "(2a-b)^3-(2a+b)^3", "answer": "-24a^2b-2b^3", "solution": "-24a^2b-2b^3" },
      { "prompt": "(x+2y)^3+(x-2y)^3", "answer": "2x^3+24xy^2", "solution": "2x^3+24xy^2" },
      { "prompt": "(a+b)^3-(a-b)^3", "answer": "6a^2b+2b^3", "solution": "6a^2b+2b^3" },
      { "prompt": "(3x+2)^3-(3x-2)^3", "answer": "108x^2+16", "solution": "108x^2+16" },
      { "prompt": "(x^2+x+1)(x^2-x+1)", "answer": "x^4+x^2+1", "solution": "x^4+x^2+1" }
    ]
  },
  {
    "title": "Β. Παραγοντοποίηση — κλασικές και εύκολες",
    "description": "Γράψε το αποτέλεσμα ως γινόμενο παραγόντων.",
    "instruction": "Παραγοντοποίησε.",
    "mode": "factored",
    "items": [
      { "prompt": "x^2-16", "answer": "(x-4)(x+4)", "solution": "(x-4)(x+4)" },
      { "prompt": "a^2-25", "answer": "(a-5)(a+5)", "solution": "(a-5)(a+5)" },
      { "prompt": "9x^2-49", "answer": "(3x-7)(3x+7)", "solution": "(3x-7)(3x+7)" },
      { "prompt": "4a^2-49b^2", "answer": "(2a-7b)(2a+7b)", "solution": "(2a-7b)(2a+7b)" },
      { "prompt": "x^2+6x+9", "answer": "(x+3)^2", "solution": "(x+3)^2" },
      { "prompt": "a^2-10a+25", "answer": "(a-5)^2", "solution": "(a-5)^2" },
      { "prompt": "4x^2+12x+9", "answer": "(2x+3)^2", "solution": "(2x+3)^2" },
      { "prompt": "9a^2-30ab+25b^2", "answer": "(3a-5b)^2", "solution": "(3a-5b)^2" },
      { "prompt": "x^3+8", "answer": "(x+2)(x^2-2x+4)", "solution": "(x+2)(x^2-2x+4)" },
      { "prompt": "a^3-27", "answer": "(a-3)(a^2+3a+9)", "solution": "(a-3)(a^2+3a+9)" },
      { "prompt": "8x^3+1", "answer": "(2x+1)(4x^2-2x+1)", "solution": "(2x+1)(4x^2-2x+1)" },
      { "prompt": "27a^3-8b^3", "answer": "(3a-2b)(9a^2+6ab+4b^2)", "solution": "(3a-2b)(9a^2+6ab+4b^2)" }
    ]
  },
  {
    "title": "Β. Παραγοντοποίηση — μεσαίες",
    "description": "Συνδύασε τετράγωνο διωνύμου, διαφορά τετραγώνων και κύβους.",
    "instruction": "Παραγοντοποίησε.",
    "mode": "factored",
    "items": [
      { "prompt": "x^2-6x+9-4y^2", "answer": "(x-3-2y)(x-3+2y)", "solution": "(x-3-2y)(x-3+2y)" },
      { "prompt": "a^2+2ab+b^2-9", "answer": "(a+b-3)(a+b+3)", "solution": "(a+b-3)(a+b+3)" },
      { "prompt": "4x^2-12xy+9y^2-25", "answer": "(2x-3y-5)(2x-3y+5)", "solution": "(2x-3y-5)(2x-3y+5)" },
      { "prompt": "x^3+3x^2+3x+1", "answer": "(x+1)^3", "solution": "(x+1)^3" },
      { "prompt": "a^3-6a^2+12a-8", "answer": "(a-2)^3", "solution": "(a-2)^3" },
      { "prompt": "8x^3-12x^2+6x-1", "answer": "(2x-1)^3", "solution": "(2x-1)^3" },
      { "prompt": "x^3+6x^2y+12xy^2+8y^3", "answer": "(x+2y)^3", "solution": "(x+2y)^3" },
      { "prompt": "27a^3-54a^2b+36ab^2-8b^3", "answer": "(3a-2b)^3", "solution": "(3a-2b)^3" }
    ]
  },
  {
    "title": "Β. Παραγοντοποίηση — δύσκολες και συνδυαστικές",
    "description": "Παραγοντοποίησε πλήρως, εφαρμόζοντας διαδοχικά περισσότερες από μία ταυτότητες.",
    "instruction": "Παραγοντοποίησε πλήρως.",
    "mode": "factored",
    "items": [
      { "prompt": "x^4-16", "answer": "(x-2)(x+2)(x^2+4)", "solution": "(x-2)(x+2)(x^2+4)" },
      { "prompt": "a^4-81", "answer": "(a-3)(a+3)(a^2+9)", "solution": "(a-3)(a+3)(a^2+9)" },
      { "prompt": "x^6-y^6", "answer": "(x-y)(x+y)(x^2+xy+y^2)(x^2-xy+y^2)", "solution": "(x-y)(x+y)(x^2+xy+y^2)(x^2-xy+y^2)" },
      { "prompt": "a^3+b^3+3ab(a+b)", "answer": "(a+b)^3", "solution": "(a+b)^3" },
      { "prompt": "x^3-y^3-3xy(x-y)", "answer": "(x-y)^3", "solution": "(x-y)^3" },
      { "prompt": "x^2+4x+4-y^2-6y-9", "answer": "(x-y-1)(x+y+5)", "solution": "(x-y-1)(x+y+5)" },
      { "prompt": "9a^2-6ab+b^2-4c^2", "answer": "(3a-b-2c)(3a-b+2c)", "solution": "(3a-b-2c)(3a-b+2c)" },
      { "prompt": "x^3+8y^3+6xy(x+2y)", "answer": "(x+2y)^3", "solution": "(x+2y)^3" },
      { "prompt": "a^3-3a^2b+3ab^2-b^3-8", "answer": "(a-b-2)((a-b)^2+2(a-b)+4)", "solution": "(a-b-2)((a-b)^2+2(a-b)+4)" },
      { "prompt": "x^4+4x^2y^2+4y^4-9z^2", "answer": "(x^2+2y^2-3z)(x^2+2y^2+3z)", "solution": "(x^2+2y^2-3z)(x^2+2y^2+3z)" }
    ]
  },
  {
    "title": "Γ. Μικτές ασκήσεις",
    "description": "Ανάπτυξε, παραγοντοποίησε ή απλοποίησε όπως ζητά η εκφώνηση.",
    "items": [
      { "prompt": "(2x-5)^2-(x+3)^2", "instruction": "Ανάπτυξε και παραγοντοποίησε πλήρως.", "answer": "(x-8)(3x-2)", "solution": "(x-8)(3x-2)", "mode": "factored" },
      { "prompt": "x^3+1+3x(x+1)", "instruction": "Παραγοντοποίησε.", "answer": "(x+1)^3", "solution": "(x+1)^3", "mode": "factored" },
      { "prompt": "\\dfrac{a^3-b^3}{a-b},\\quad a\\ne b", "instruction": "Απλοποίησε.", "answer": "a^2+ab+b^2", "solution": "a^2+ab+b^2" },
      { "prompt": "\\dfrac{x^3+8}{x+2},\\quad x\\ne -2", "instruction": "Απλοποίησε.", "answer": "x^2-2x+4", "solution": "x^2-2x+4" },
      { "prompt": "(a+b)^3-(a-b)^3", "instruction": "Ανάπτυξε και απλοποίησε.", "answer": "2b(3a^2+b^2)", "solution": "2b(3a^2+b^2)" },
      { "prompt": "(x+1)^3+(x-1)^3", "instruction": "Ανάπτυξε και απλοποίησε.", "answer": "2x(x^2+3)", "solution": "2x(x^2+3)" },
      { "prompt": "x^6-64", "instruction": "Παραγοντοποίησε πλήρως.", "answer": "(x-2)(x+2)(x^2+2x+4)(x^2-2x+4)", "solution": "(x-2)(x+2)(x^2+2x+4)(x^2-2x+4)", "mode": "factored" },
      { "prompt": "a^3+3a^2b+3ab^2+b^3-8c^3", "instruction": "Παραγοντοποίησε.", "answer": "(a+b-2c)((a+b)^2+2c(a+b)+4c^2)", "solution": "(a+b-2c)((a+b)^2+2c(a+b)+4c^2)", "mode": "factored" }
    ]
  }
];
