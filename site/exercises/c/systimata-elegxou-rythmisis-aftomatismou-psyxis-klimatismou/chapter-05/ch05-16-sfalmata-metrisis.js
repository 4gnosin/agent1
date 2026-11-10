window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"] = window.SUBJECT_DATA["systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou"].exercises.push(...
[
  {
    "id": "ch05-23780",
    "group": "ch05-16-sfalmata-metrisis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23780",
    "code": "Θέμα 4<sup>ο</sup> · #23780",
    "title": "#23780 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch05-16-sfalmata-metrisis",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "calc",
        "subq": "1.α1",
        "prompt": "1. α) α1) Να υπολογίσετε τη θερμοκρασία των $100\\text{ }^\\circ\\text{C}$ στην κλίμακα Κέλβιν ($K$).",
        "formula": "$T = t\\text{ }^\\circ\\text{C} + 273$",
        "answer": 373,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε 273 στους βαθμούς Κελσίου.",
        "explain": "Σύμφωνα με τη σχέση $T = t\\text{ }^\\circ\\text{C} + 273$, έχουμε $T = 100 + 273 = 373\\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "1.α2",
        "prompt": "1. α) α2) Να υπολογίσετε τη θερμοκρασία των $100\\text{ }^\\circ\\text{C}$ στην κλίμακα Φαρενάιτ ($^\\circ\\text{F}$).",
        "formula": "$^\\circ\\text{F} = \\frac{9}{5} \\cdot t\\text{ }^\\circ\\text{C} + 32$",
        "answer": 212,
        "unit": "°F",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο μετατροπής Κελσίου σε Φαρενάιτ.",
        "explain": "Από τη σχέση μετατροπής $\\frac{^\\circ\\text{C}}{5} = \\frac{^\\circ\\text{F} - 32}{9}$ προκύπτει $^\\circ\\text{F} = \\frac{9 \\cdot 100}{5} + 32 = 212\\text{ }^\\circ\\text{F}$."
      },
      {
        "kind": "mc",
        "subq": "1.β",
        "openEnded": true,
        "prompt": "1. β) Εξηγήστε με ένα παράδειγμα γιατί η διαφορά θερμοκρασιών σε βαθμούς Κελσίου ($\\Delta t$) ισούται με τη διαφορά των αντίστοιχων θερμοκρασιών σε Κέλβιν ($\\Delta T$), δηλαδή γιατί $\\Delta t = \\Delta T$.",
        "options": [
          {
            "id": "a",
            "text": "Έστω $t_1 = 130\\text{ }^\\circ\\text{C}$ και $t_2 = 30\\text{ }^\\circ\\text{C}$, άρα $\\Delta t = 100\\text{ }^\\circ\\text{C}$. Στην κλίμακα Κέλβιν $T_1 = 130 + 273 = 403\\text{ K}$ και $T_2 = 30 + 273 = 303\\text{ K}$, άρα $\\Delta T = 403 - 303 = 100\\text{ K} = \\Delta t$."
          },
          {
            "id": "b",
            "text": "Η διαφορά αλλάζει ανάλογα με την ατμοσφαιρική πίεση."
          },
          {
            "id": "c",
            "text": "Οι κλίμακες Κέλβιν και Κελσίου έχουν διαφορετική κλίμακα μέτρησης διαφορών."
          }
        ],
        "answer": "a",
        "explain": "Επειδή η διαφορά ανάμεσα στις δύο κλίμακες είναι σταθερή κατά 273 μονάδες, η διαφορά δύο τιμών παραμένει απολύτως ίδια ($\\Delta t = \\Delta T$)."
      },
      {
        "kind": "calc",
        "subq": "2",
        "prompt": "2. Σε ένα σύστημα, ο πρεσσοστάτης έχει ρυθμιστεί σε πίεση $2{,}80\\text{ bar}$. Με βάση τον πίνακα μετατροπής ($1\\text{ bar} = 100\\text{ kPa}$), σε πόσο χρόνο ($s$) θα έχει φτάσει στην πίεση αυτή (αντιστοιχία $\\Delta T = 100\\text{ K}$ δίνει χρόνο $40\\text{ s}$);",
        "formula": "t = 40\\text{ s}",
        "answer": 40,
        "unit": "s",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τα bar σε kPa ($2{,}8\\text{ bar} = 280\\text{ kPa}$) και βρείτε τον χρόνο από τον πίνακα αναφοράς.",
        "explain": "Γνωρίζοντας ότι $1\\text{ bar} = 100\\text{ kPa}$, τα $2{,}8\\text{ bar}$ είναι $280\\text{ kPa}$. Συνεπώς, σύμφωνα με τον πίνακα, ο χρόνος είναι $40\\text{ s}$.",
        "image": "images/c/systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou/chapter-05/c_systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou_ch05_23780_fig01.webp"
      }
    ]
  }
]
);
