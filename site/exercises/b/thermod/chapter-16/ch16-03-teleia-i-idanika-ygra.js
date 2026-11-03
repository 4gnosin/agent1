window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch16-29358",
    "group": "ch16-03-teleia-i-idanika-ygra",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "29358",
    "code": "Θέμα 4<sup>ο</sup> · #29358",
    "title": "#29358 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch16-03",
    "sourceOrder": 1,
    "stem": "Η παροχή νερού ενός σωλήνα είναι $Q = 0,02\\text{ m}^3\\text{/s}$. Η ταχύτητα του νερού που ρέει από το στόμιο του σωλήνα είναι $V = 7,2\\text{ km/h}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τη διατομή $A$ του σωλήνα.",
        "formula": "A = \\frac{Q}{V}",
        "answer": 0.01,
        "unit": "m²",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε την ταχύτητα $V$ σε $\\text{m/s}$ και χρησιμοποιήστε τον τύπο της παροχής $Q = A \\cdot V$.",
        "explain": "Μετατρέπουμε τα $7,2\\text{ km/h}$ σε $\\text{m/s}$: $7,2\\text{ km/h} = \\frac{7200\\text{ m}}{3600\\text{ s}} = 2\\text{ m/s}$. Από τον τύπο $Q = A \\cdot V$ προκύπτει $A = \\frac{Q}{V} = \\frac{0,02}{2} = 0,01\\text{ m}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον όγκο του νερού $U$ που ρέει από τον σωλήνα σε $4$ ώρες.",
        "formula": "U = Q \\cdot t",
        "answer": 288,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε τις $4$ ώρες σε δευτερόλεπτα και πολλαπλασιάστε με την παροχή $Q$.",
        "explain": "Μετατρέπουμε τις $4\\text{ h}$ σε δευτερόλεπτα: $4 \\cdot 3600\\text{ s} = 14400\\text{ s}$. Ο όγκος είναι $U = Q \\cdot t = 0,02\\text{ m}^3\\text{/s} \\cdot 14400\\text{ s} = 288\\text{ m}^3$."
      }
    ]
  }
]
);
