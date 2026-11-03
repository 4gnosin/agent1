window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch16-26938",
    "group": "ch16-03-teleia-idanika-uygra",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26938",
    "code": "Θέμα 4<sup>ο</sup> · #26938",
    "title": "#26938 — Θέμα 4<sup>ο</sup> (α-β)",
    "units": 25,
    "theory": "ch16-03-teleia-idanika-uygra",
    "sourceOrder": 3,
    "stem": "Ένας σωλήνας έχει εμβαδόν διατομής $A = 0,01\\text{ m}^2$. Η ταχύτητα του νερού που ρέει από το στόμιο του σωλήνα είναι $V = 3,6\\text{ km/h}$.\n\nΝα υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α) την παροχή Q του σωλήνα.",
        "prompt": "την παροχή $Q$ του σωλήνα.",
        "formula": "$Q = A \\cdot V$",
        "answer": 0.01,
        "unit": "m3/s",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε την ταχύτητα σε m/s ($3,6\\text{ km/h} = 1\\text{ m/s}$) και πολλαπλασιάστε με το εμβαδόν $A$.",
        "explain": "Μετατροπή ταχύτητας: $3,6\\text{ km/h} = \\frac{3600\\text{ m}}{3600\\text{ s}} = 1\\text{ m/s}$. Παροχή: $Q = A \\cdot V = 0,01\\text{ m}^2 \\cdot 1\\text{ m/s} = 0,01\\text{ m}^3\\text{/s}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "subqPrompt": "β) τον όγκο του νερού U που ρέει από τον σωλήνα σε 12 ώρες.",
        "prompt": "τον όγκο του νερού $U$ που ρέει από τον σωλήνα σε 12 ώρες.",
        "formula": "$U = Q \\cdot t$",
        "answer": 432,
        "unit": "m3",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τις 12 ώρες σε δευτερόλεπτα και πολλαπλασιάστε με την παροχή $Q$.",
        "explain": "Χρόνος σε δευτερόλεπτα: $12\\text{ h} \\cdot 3600\\text{ s} = 43200\\text{ s}$. Όγκος: $U = Q \\cdot t = 0,01\\text{ m}^3\\text{/s} \\cdot 43200\\text{ s} = 432\\text{ m}^3$."
      }
    ]
  },
  {
    "id": "ch16-27124",
    "group": "ch16-03-teleia-idanika-uygra",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27124",
    "code": "Θέμα 4<sup>ο</sup> · #27124",
    "title": "#27124 — Θέμα 4<sup>ο</sup> (α-γ)",
    "units": 25,
    "theory": "ch16-03-teleia-idanika-uygra",
    "sourceOrder": 4,
    "stem": "Υγρό ρέει σε φλέβα ροής, διαμέτρου $d = 1\\text{ m}$, με ταχύτητα $v = 10\\text{ m/s}$. Αν θεωρήσουμε ότι το υγρό είναι τέλειο και ασυμπίεστο, να υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α) τη διατομή Α της φλέβας ροής.",
        "prompt": "τη διατομή $A$ της φλέβας ροής.",
        "formula": "$A = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 0.785,
        "unit": "m2",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο του εμβαδού κύκλου με δεδομένη τη διάμετρο ($π \\approx 3,14$).",
        "explain": "$A = \\frac{\\pi \\cdot d^2}{4} = \\frac{3,14 \\cdot (1\\text{ m})^2}{4} = 0,785\\text{ m}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "subqPrompt": "β) την παροχή Q της φλέβας.",
        "prompt": "την παροχή $Q$ της φλέβας.",
        "formula": "$Q = A \\cdot v$",
        "answer": 7.85,
        "unit": "m3/s",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τη διατομή $A$ επί την ταχύτητα $v$.",
        "explain": "$Q = A \\cdot v = 0,785\\text{ m}^2 \\cdot 10\\text{ m/s} = 7,85\\text{ m}^3\\text{/s}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "subqPrompt": "γ) τον όγκο U του υγρού που ρέει από τη διατομή της φλέβας ροής, σε χρονικό διάστημα ενός λεπτού (1 min).",
        "prompt": "τον όγκο $U$ του υγρού που ρέει σε χρονικό διάστημα ενός λεπτού ($1\\text{ min}$).",
        "formula": "$U = Q \\cdot t$",
        "answer": 471,
        "unit": "m3",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε το $1\\text{ min}$ σε $60\\text{ s}$ και πολλαπλασιάστε με την παροχή $Q$.",
        "explain": "Δεδομένου ότι $1\\text{ min} = 60\\text{ s}$, ο όγκος είναι $U = Q \\cdot t = 7,85\\text{ m}^3\\text{/s} \\cdot 60\\text{ s} = 471\\text{ m}^3$."
      }
    ]
  }
]
);
