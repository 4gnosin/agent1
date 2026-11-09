window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] = window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-kentrikon-thermanseon"].exercises.push(...
[
  {
    "id": "ch09-28564",
    "group": "ch09-04-epilogi-thermantikon-somaton",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28564",
    "bankCode": "28564",
    "title": "#28564 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "stoixeia-kentrikon-thermanseon/ch09",
    "sourceOrder": 4,
    "stem": "Σε ένα χώρο, η ονομαστική απόδοση ενός θερμαντικού σώματος είναι $Q_{60} = 3000\\text{ Kcal/h}$. Η θερμοκρασία εισόδου του νερού στο σώμα είναι $t_v = 90^\\circ\\text{C}$, η θερμοκρασία εξόδου του νερού από το σώμα είναι $t_r = 70^\\circ\\text{C}$ και η θερμοκρασία του χώρου είναι $t_x = 20^\\circ\\text{C}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογίσετε την ενεργό θερμοκρασιακή διαφορά $t_{\\text{εν}}$ του σώματος.",
        "formula": "$t_m = \\frac{t_v + t_r}{2}, \\quad t_{\\text{εν}} = t_m - t_x$",
        "answer": 60,
        "unit": "°C",
        "tolerance": 0.01,
        "hint": "Υπολογίστε πρώτα τη μέση θερμοκρασία $t_m = (90 + 70)/2 = 80^\\circ\\text{C}$ και μετά $t_{\\text{εν}} = t_m - t_x$.",
        "explain": "Μέση θερμοκρασία: $t_m = \\frac{90 + 70}{2} = 80^\\circ\\text{C}$. Ενεργός θερμοκρασιακή διαφορά: $t_{\\text{εν}} = 80^\\circ\\text{C} - 20^\\circ\\text{C} = 60^\\circ\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να υπολογίσετε τον συντελεστή διόρθωσης $\\sigma_{\\delta}$ του σώματος χρησιμοποιώντας το διάγραμμα διόρθωσης απόδοσης.",
        "image": "images/c/stoixeia-kentrikon-thermanseon/chapter-09/c_stoixeia-kentrikon-thermanseon_ch09_#28564_fig01.webp",
        "formula": "\\text{Από το διάγραμμα για } t_{\\text{εν}} = 60^\\circ\\text{C}",
        "answer": 1,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Για ενεργό θερμοκρασιακή διαφορά $t_{\\text{εν}} = 60^\\circ\\text{C}$, διαβάστε την τιμή του $\\sigma_{\\delta}$ στο διάγραμμα.",
        "explain": "Για ενεργό θερμοκρασιακή διαφορά $t_{\\text{εν}} = 60^\\circ\\text{C}$, από το διάγραμμα προκύπτει συντελεστής διόρθωσης $\\sigma_{\\delta} = 1$.",
        "images": [
          "images/c/stoixeia-kentrikon-thermanseon/chapter-09/c_stoixeia-kentrikon-thermanseon_ch09_#28564_fig01.webp"
        ]
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Να υπολογίσετε την πραγματική απόδοση $Q$ του σώματος.",
        "formula": "$Q = \\sigma_{\\delta} \\cdot Q_{60}$",
        "answer": 3000,
        "unit": "Kcal/h",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη σχέση $Q = \\sigma_{\\delta} \\cdot Q_{60}$.",
        "explain": "Η πραγματική απόδοση είναι: $Q = \\sigma_{\\delta} \\cdot Q_{60} = 1 \\cdot 3000\\text{ Kcal/h} = 3000\\text{ Kcal/h}$."
      }
    ],
    "omitted": [],
    "solutionImages": [
      "images/c/stoixeia-kentrikon-thermanseon/chapter-09/c_stoixeia-kentrikon-thermanseon_ch09_#28564_sol01.webp"
    ]
  },
  {
    "id": "ch09-28565",
    "group": "ch09-04-epilogi-thermantikon-somaton",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28565",
    "bankCode": "28565",
    "title": "#28565 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "stoixeia-kentrikon-thermanseon/ch09",
    "sourceOrder": 5,
    "stem": "Σ’ ένα χώρο, η ονομαστική απόδοση ενός θερμαντικού σώματος είναι $Q_{60} = 3000\\text{ Kcal/h}$. Η μέση θερμοκρασία σώματος είναι $t_m = 70^\\circ\\text{C}$, η θερμοκρασία εξόδου του νερού είναι $t_r = 60^\\circ\\text{C}$, η θερμοκρασία του χώρου είναι $t_x = 20^\\circ\\text{C}$ και ο συντελεστής διόρθωσης του σώματος είναι $\\sigma_{\\delta} = 0{,}8$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "α) Να υπολογίσετε τη θερμοκρασία εισόδου του νερού στο σώμα $t_v$.",
        "formula": "$t_m = \\frac{t_v + t_r}{2} \\Rightarrow t_v = 2 \\cdot t_m - t_r$",
        "answer": 80,
        "unit": "°C",
        "tolerance": 0.01,
        "hint": "Από τον τύπο $t_m = (t_v + t_r)/2$ λύστε ως προς $t_v$.",
        "explain": "$70 = \\frac{t_v + 60}{2} \\Rightarrow t_v + 60 = 140 \\Rightarrow t_v = 80^\\circ\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "β) Να υπολογίσετε την ενεργό θερμοκρασιακή διαφορά $t_{\\text{εν}}$ του σώματος.",
        "formula": "$t_{\\text{εν}} = t_m - t_x$",
        "answer": 50,
        "unit": "°C",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε τη θερμοκρασία χώρου $t_x$ από τη μέση θερμοκρασία $t_m$.",
        "explain": "$t_{\\text{εν}} = t_m - t_x = 70^\\circ\\text{C} - 20^\\circ\\text{C} = 50^\\circ\\text{C}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "γ) Να υπολογίσετε την πραγματική απόδοση $Q$ του σώματος.",
        "formula": "$Q = \\sigma_{\\delta} \\cdot Q_{60}$",
        "answer": 2400,
        "unit": "Kcal/h",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον συντελεστή $\\sigma_{\\delta}$ με την ονομαστική απόδοση $Q_{60}$.",
        "explain": "$Q = \\sigma_{\\delta} \\cdot Q_{60} = 0{,}8 \\cdot 3000\\text{ Kcal/h} = 2400\\text{ Kcal/h}$."
      }
    ],
    "omitted": []
  }
]
);
