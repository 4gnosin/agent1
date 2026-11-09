window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["egkatastaseis-klimatismou"] = window.SUBJECT_DATA["egkatastaseis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["egkatastaseis-klimatismou"].exercises.push(...
[
  {
    "id": "ch04-26660",
    "group": "ch04-02-vasikes-arxes-rois",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #26660",
    "bankCode": "26660",
    "title": "#26660 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch04-02",
    "sourceOrder": 1,
    "stem": "Αέρας ρέει σε έναν αεραγωγό ορθογώνιας διατομής διαστάσεων $0,6\\text{ m} \\times 0,4\\text{ m}$. Η ταχύτητα του αέρα μετρήθηκε $V = 2\\text{ m/s}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Την διατομή $A$ του αεραγωγού.",
        "formula": "$A = a \\cdot b$",
        "answer": 0.24,
        "unit": "m²",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τις διαστάσεις του αεραγωγού.",
        "explain": "Η διατομή του αεραγωγού είναι \\( A = 0,6\\text{ m} \\cdot 0,4\\text{ m} = 0,24\\text{ m}^2 \\)."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Τον όγκο $Q$ του αέρα που ρέει στον αεραγωγό σε L/s.",
        "formula": "$Q = A \\cdot V$",
        "answer": 480,
        "unit": "L/s",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο \\( Q = A \\cdot V \\) και μετατρέψτε τα $\text{m}^3\\text{/s}$ σε $\text{L/s}$.",
        "explain": " \\( Q = A \\cdot V = 0,24\\text{ m}^2 \\cdot 2\\text{ m/s} = 0,48\\text{ m}^3\\text{/s} = 480\\text{ L/s} \\)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "image": "images/c/egkatastaseis-klimatismou/chapter-04/c_egkatastaseis-klimatismou_ch04_#26660_fig01.webp",
        "prompt": "Να υπολογίσετε τη δυναμική πίεση στον αεραγωγό του σχήματος (με ολική πίεση $p_T = 30\\text{ psi}$ και στατική πίεση $p_s = 25\\text{ psi}$).",
        "formula": "$p_T = p_s + p_d$",
        "answer": 5,
        "unit": "psi",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη σχέση ολικής, στατικής και δυναμικής πίεσης.",
        "explain": "Στο σχήμα βλέπουμε την μέτρηση της ολικής πίεσης ($p_T = 30\\text{ psi}$) και την μέτρηση της στατικής πίεσης ($p_s = 25\\text{ psi}$). Άρα η δυναμική πίεση είναι \\( p_d = p_T - p_s = 30\\text{ psi} - 25\\text{ psi} = 5\\text{ psi} \\)."
      }
    ]
  }
]
);
