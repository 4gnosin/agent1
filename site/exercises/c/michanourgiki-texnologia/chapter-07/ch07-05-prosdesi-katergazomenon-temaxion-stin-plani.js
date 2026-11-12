window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanourgiki-texnologia"] = window.SUBJECT_DATA["michanourgiki-texnologia"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanourgiki-texnologia"].exercises.push(...
[
  {
    "id": "ch07-27543",
    "group": "ch07-05-prosdesi-katergazomenon-temaxion-stin-plani",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "27543",
    "code": "Θέμα 4<sup>ο</sup> · #27543",
    "title": "#27543 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "ch07-05-prosdesi-katergazomenon-temaxion-stin-plani",
    "sourceOrder": 3,
    "stem": "Στα πλαίσια εργαστηριακής άσκησης στο Μηχανουργείο του σχολείου πρόκειται να κατεργαστείτε σε πλάνη τεμάχιο από χάλυβα, ορθογωνικής διατομής, συνολικού μήκους 100 mm. Το τεμάχιο έχει 2 διαβαθμίσεις στο μήκος του και όριο θραύσης υλικού $40 \\text{ Kp/mm}^2$.",
    "images": [
      "images/c/michanourgiki-texnologia/chapter-07/c_michanourgiki-texnologia_ch07_27543_fig01.webp",
      "images/c/michanourgiki-texnologia/chapter-07/c_michanourgiki-texnologia_ch07_27543_fig02.webp"
    ],
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Με ποιον τρόπο θα συγκρατήσετε το τεμάχιο για να εκτελέσετε την κατεργασία;",
        "options": [
          {
            "id": "a",
            "text": "Στη μέγγενη της εργαλειομηχανής, και επειδή το τεμάχιο δεν έχει ομοιόμορφο μήκος, χρησιμοποιούνται βοηθητικοί συγκρατήρες ή σφήνα συγκράτησης και παράλληλα πλακίδια σε σχήμα ορθογώνιου παραλληλεπίπεδου."
          },
          {
            "id": "b",
            "text": "Αποκλειστικά με κόλληση επάνω στο τραπέζι της πλάνης."
          },
          {
            "id": "c",
            "text": "Με ηλεκτρομαγνητικό τραπέζι χωρίς καμία άλλη ενίσχυση."
          },
          {
            "id": "d",
            "text": "Με το χέρι του χειριστή καθ' όλη τη διάρκεια της κοπής."
          }
        ],
        "answer": "a",
        "explain": "Η συγκράτηση μικρών τεμαχίων στην πλάνη γίνεται στη μέγγενη. Όταν το τεμάχιο έχει ιδιαιτερότητες ή διαβαθμίσεις, χρησιμοποιούνται βοηθητικοί συγκρατήρες, σφήνες και παράλληλα πλακίδια."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη διαδρομή του εμβόλου ή της τράπεζας $L$ (σε mm).",
        "formula": "$L = l_{\\text{τεμ}} + l_1 + l_2$",
        "answer": 130,
        "unit": "mm",
        "tolerance": 0.01,
        "hint": "Θεωρήστε $l_1 \\approx 20\\text{ mm}$ και $l_2 \\approx 10\\text{ mm}$.",
        "explain": "Με $l_{\\text{τεμ}} = 100\\text{ mm}$, $l_1 = 20\\text{ mm}$ και $l_2 = 10\\text{ mm}$, προκύπτει: $L = 100 + 20 + 10 = 130\\text{ mm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τους κύκλους εργασίας $n$ ανά λεπτό, αν χρησιμοποιήσουμε εργαλείο από ταχυχάλυβα με ταχύτητα κοπής $u_\\mu = 22\\text{ m/min}$.",
        "formula": "$n = \\frac{u_\\mu}{2 \\cdot L}$",
        "answer": 85,
        "unit": "κύκλοι/min",
        "tolerance": 0.05,
        "hint": "Μετατρέψτε το $L$ σε μέτρα ($L = 0,13\\text{ m}$) και διαιρέστε το $u_\\mu$ δια $2 \\cdot L$.",
        "explain": "Έχουμε $L = 130\\text{ mm} = 0,13\\text{ m}$. Ο αριθμός κύκλων εργασίας είναι $n = \\frac{22\\text{ m/min}}{2 \\cdot 0,13\\text{ m}} = \\frac{22}{0,26} \\approx 84,61 \\approx 85\\text{ κύκλοι/min}$.",
        "image": "images/c/michanourgiki-texnologia/chapter-07/c_michanourgiki-texnologia_ch07_27543_fig01.webp",
        "images": [
          "images/c/michanourgiki-texnologia/chapter-07/c_michanourgiki-texnologia_ch07_27543_fig01.webp",
          "images/c/michanourgiki-texnologia/chapter-07/c_michanourgiki-texnologia_ch07_27543_fig02.webp"
        ]
      }
    ]
  }
]
);
