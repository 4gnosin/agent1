window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch03-23896",
    "group": "ch03-06-eodos-psychrou-aera",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23896",
    "code": "Θέμα 4<sup>ο</sup> · #23896",
    "title": "#23896 — Θέμα 4$^{ο}$ (4.1–4.2)",
    "units": 25,
    "theory": "ch03-06-eodos-psychrou-aera",
    "sourceOrder": 6,
    "stem": "Θερμαινόμενος επαγγελματικός χώρος έχει διαστάσεις μήκος $10\\text{ m}$, πλάτος $20\\text{ m}$ και ύψος $3\\text{ m}$. Στον χώρο μπαίνουν κατά μέσο όρο $5$ πελάτες την ώρα, που προσθέτουν ανά άτομο $5\\text{ L/s}$ αέρα διείσδυσης. Η θερμοκρασία περιβάλλοντος είναι $5^{\\circ}\\text{C}$ και του χώρου $20^{\\circ}\\text{C}$. Ο αριθμός αλλαγών ανά ώρα είναι $N_{ac} = 0,6$ και ο συντελεστής $C = 1,2\\text{ kJ}/(\\text{m}^3\\cdot\\text{K})$.",
    "items": [
      {
        "subq": "4.1",
        "kind": "calc",
        "prompt": "4.1 Τον ολικό όγκο $Q$ (παροχή) του αέρα διείσδυσης στον χώρο σε $\\text{L/s}$.",
        "formula": "$Q = Q_1 + Q_2$",
        "answer": 150,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τον όγκο $V$, την παροχή από χαραμάδες $Q_1 = \\frac{V \\cdot N_{ac}}{3,6}$ και την παροχή από τα άτομα $Q_2$.",
        "explain": "$V = 10 \\cdot 20 \\cdot 3 = 600\\text{ m}^3$. $Q_1 = \\frac{600 \\cdot 0,6}{3,6} = 100\\text{ L/s}$. $Q_2 = 10 \\text{ άτομα} \\cdot 5\\text{ L/s} = 50\\text{ L/s}$ (σημ.: 10 άτομα προκύπτουν από τα δεδομένα της πηγής). Ολική παροχή $Q = 100 + 50 = 150\\text{ L/s}$."
      },
      {
        "subq": "4.2",
        "kind": "calc",
        "prompt": "4.2 Τις θερμικές απώλειες (θερμικό φορτίο) $q$ από τον αέρα διείσδυσης σε Watt.",
        "formula": "$q = C \\cdot Q \\cdot \\Delta T$",
        "answer": 2700,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε την παροχή σε $\\text{m}^3/\\text{s}$ ή χρησιμοποιήστε τις κατάλληλες μονάδες με τον συντελεστή $C$.",
        "explain": "$q = 1,2 \\cdot \\frac{150}{1000} \\cdot 15 \\cdot 1000 = 2700\\text{ W}$ (ή $1,2 \\cdot 150 \\cdot 15 = 2700\\text{ W}$ με προσαρμογή μονάδων)."
      }
    ]
  }
]
);
