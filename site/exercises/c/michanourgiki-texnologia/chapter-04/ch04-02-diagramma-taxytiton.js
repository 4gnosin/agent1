window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanourgiki-texnologia"] = window.SUBJECT_DATA["michanourgiki-texnologia"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanourgiki-texnologia"].exercises.push(...
[
  {
    "id": "ch04-29153",
    "group": "ch04-02-diagramma-taxytiton",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29153",
    "bankCode": "29153",
    "title": "#29153 — Θέμα 4$^{ο}$ (4.6.2)",
    "units": 25,
    "theory": "ch04-02-diagramma-taxytiton",
    "sourceOrder": 4,
    "stem": "Άξονας από χάλυβα St70, διαμέτρου $D = 100\\text{ mm}$, πρόκειται να κατεργαστεί σε τόρνο. Το κοπτικό εργαλείο που θα χρησιμοποιηθεί για την κατεργασία είναι από ταχυχάλυβα (HSS). Να υπολογιστούν η ταχύτητα κοπής και οι στροφές του τσοκ του τόρνου.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "subqPrompt": "α. Υπολογισμός στροφών και ταχύτητας κοπής για την εκχόνδριση του τεμαχίου:",
        "prompt": "Για την εκχόνδριση με διάμετρο $D = 100\\text{ mm}$ και ταχύτητα κοπής $u = 20\\text{ m/min}$, ποια είναι η επιλεγμένη τιμή στροφών $n$ σε rpm από το διάγραμμα;",
        "formula": "$n = \\frac{u \\cdot 1000}{\\pi \\cdot D}$",
        "answer": 74,
        "unit": "rpm",
        "tolerance": 0.05,
        "hint": "Σύμφωνα με τον πίνακα και το διάγραμμα 1 για St70 και HSS, επιλέγεται η πλησιέστερη μεγαλύτερη τυποποιημένη τιμή στροφών.",
        "explain": "Από το διάγραμμα 1 για $D = 100\\text{ mm}$ και $u = 20\\text{ m/min}$, οι στροφές κυμαίνονται μεταξύ 53 και 74 rpm. Επιλέγεται η μεγαλύτερη $n = 74\\text{ rpm}$.",
        "image": "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_fig01.webp",
        "hintImage": "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_sol01.webp"
      },
      {
        "kind": "calc",
        "subq": "β",
        "subqPrompt": "β. Υπολογισμός για το φινίρισμα του τεμαχίου:",
        "prompt": "Για το φινίρισμα του τεμαχίου με ταχύτητα κοπής $u = 24\\text{ m/min}$ και διάμετρο $D = 100\\text{ mm}$, ποια είναι η αντίστοιχη τιμή στροφών $n$ σε rpm;",
        "formula": "$n = \\frac{u \\cdot 1000}{\\pi \\cdot D}$",
        "answer": 74,
        "unit": "rpm",
        "tolerance": 0.05,
        "hint": "Για το φινίρισμα με $u = 24\\text{ m/min}$ και $D = 100\\text{ mm}$, ελέγχεται η αντίστοιχη καμπύλη στο διάγραμμα.",
        "explain": "Από το διάγραμμα ταχυτήτων κοπής, για $D = 100\\text{ mm}$ και $u = 24\\text{ m/min}$, προκύπτουν στροφές $n = 74\\text{ rpm}$.",
        "image": "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_fig02.webp"
      }
    ],
    "solutionImages": [
      "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_sol01.webp",
      "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_sol02.webp",
      "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_sol03.webp",
      "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_sol04.webp",
      "images/c/michanourgiki-texnologia/chapter-04/c_michanourgiki-texnologia_ch04_29153_sol05.webp"
    ]
  }
]
);
