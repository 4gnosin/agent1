window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch04-26660",
    "group": "ch04-air-flow",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "26660",
    "code": "Θέμα 4<sup>ο</sup> · #26660",
    "title": "#26660 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 15,
    "theory": "ch04-flow",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1 α) Την διατομή Α του αεραγωγού (σε m²).",
        "formula": "A = 0,6 · 0,4",
        "answer": 0.24,
        "unit": "m²",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τις διαστάσεις του ορθογώνιου αεραγωγού.",
        "explain": "Η διατομή του αεραγωγού υπολογίζεται από: \\( A = 0,6\\text{ m} \\cdot 0,4\\text{ m} = 0,24\\text{ m}^2 \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.1 β) Τον όγκο (παροχή) Q του αέρα που ρέει στον αεραγωγό σε L/s.",
        "formula": "Q = A · V",
        "answer": 480,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο Q = A · V και μετατρέψτε τα m³/s σε L/s.",
        "explain": " \\( Q = 0,24\\text{ m}^2 \\cdot 2\\text{ m/s} = 0,48\\text{ m}^3\\text{/s} = 480\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "prompt": "4.2 Να υπολογίσετε τη δυναμική πίεση pd στον αεραγωγό (σε psi).",
        "formula": "p_d = p_T - p_s",
        "answer": 5,
        "unit": "psi",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε τη στατική πίεση από την ολική πίεση.",
        "explain": " \\( p_T = p_s + p_d \\Rightarrow p_d = 30\\text{ psi} - 25\\text{ psi} = 5\\text{ psi} \\)."
      }
    ]
  }
]
);
