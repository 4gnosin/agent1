window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-23727",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23727",
    "code": "Θέμα 4<sup>ο</sup> · #23727",
    "title": "#23727 — Θέμα 4$^{ο}$ (4.1–4.2)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 19,
    "stem": "Σε ένα μονοκύλινδρο κινητήρα εσωτερικής καύσης το εμβαδόν της διατομής του κυλίνδρου είναι $E = 314\\text{ cm}^2$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογιστεί η εσωτερική διάμετρος $d$ του κυλίνδρου.",
        "formula": "$E = \\frac{\\pi \\cdot d^2}{4} \\implies d = \\sqrt{\\frac{4 \\cdot E}{\\pi}}$",
        "answer": 20,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο του εμβαδού κύκλου $E = \\frac{\\pi d^2}{4}$.",
        "explain": "Από τον τύπο $d = \\sqrt{\\frac{4 \\cdot 314}{3{,}14}} = \\sqrt{400} = 20\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογιστεί η διαδρομή του εμβόλου $l$ από το Κ.Ν.Σ έως το Α.Ν.Σ., όταν η σχέση συμπίεσης του κυλίνδρου είναι $\\lambda = 8{,}85$ και ο όγκος του θαλάμου καύσης είναι $V_{\\text{συμπ}} = 100\\text{ cm}^3$.",
        "formula": "$\\lambda = 1 + \\frac{V_{\\text{κυλ}}}{V_{\\text{συμπ}}} \\implies V_{\\text{κυλ}} = (\\lambda - 1) \\cdot V_{\\text{συμπ}}$, και $V_{\\text{κυλ}} = E \\cdot l$",
        "answer": 25,
        "unit": "mm",
        "tolerance": 0.02,
        "hint": "Υπολογίστε πρώτα τον όγκο κυλίνδρου $V_{\\text{κυλ}}$ και μετά τη διαδρομή $l = \\frac{V_{\\text{κυλ}}}{E}$.",
        "explain": "$V_{\\text{κυλ}} = (8{,}85 - 1) \\cdot 100 = 785\\text{ cm}^3$. Κατόπιν $l = \\frac{785}{314} = 2{,}5\\text{ cm} = 25\\text{ mm}$."
      }
    ]
  },
  {
    "id": "ch04-23728",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23728",
    "code": "Θέμα 4<sup>ο</sup> · #23728",
    "title": "#23728 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 20,
    "stem": "Τετράχρονος τετρακύλινδρος κινητήρας εσωτερικής καύσης έχει σχέση συμπίεσης $\\lambda = 10$ και όγκο κυλίνδρου $V_{\\text{κυλ}} = 450\\text{ cm}^3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον όγκο θαλάμου καύσης $V_{\\text{συμπ}}$.",
        "formula": "$V_{\\text{συμπ}} = \\frac{V_{\\text{κυλ}}}{\\lambda - 1}$",
        "answer": 50,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Λύστε τη σχέση συμπίεσης ως προς $V_{\\text{συμπ}}$.",
        "explain": "$V_{\\text{συμπ}} = \\frac{450}{10 - 1} = \\frac{450}{9} = 50\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον κυλινδρισμό $V_{\\text{ολ}}$ του κινητήρα.",
        "formula": "$V_{\\text{ολ}} = V_{\\text{κυλ}} \\cdot K$",
        "answer": 1800,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον όγκο ενός κυλίνδρου επί τον αριθμό των κυλίνδρων.",
        "explain": "$V_{\\text{ολ}} = 450 \\cdot 4 = 1800\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τη γωνία σφήνωσης $\\alpha$ κομβίων στροφαλοφόρου άξονα.",
        "formula": "$\\alpha = \\frac{720{}^{\\circ}}{K}$",
        "answer": 180,
        "unit": "°",
        "tolerance": 0.01,
        "hint": "Για τετράχρονο κινητήρα η γωνία σφήνωσης είναι $720{}^{\\circ} / K$.",
        "explain": "$\\alpha = \\frac{720{}^{\\circ}}{4} = 180{}^{\\circ}$."
      }
    ]
  },
  {
    "id": "ch04-24353",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "24353",
    "code": "Θέμα 4<sup>ο</sup> · #24353",
    "title": "#24353 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 21,
    "stem": "Εάν ο ολικός κυλινδρισμός ενός οκτακύλινδρου κινητήρα είναι $V_{\\text{ολ}} = 6280\\text{ cm}^3$ και η εσωτερική διάμετρος του κυλίνδρου είναι $d = 10\\text{ cm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον όγκο του κυλίνδρου $V_{\\text{κυλ}}$.",
        "formula": "$V_{\\text{κυλ}} = \\frac{V_{\\text{ολ}}}{K}$",
        "answer": 785,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τον ολικό κυλινδρισμό με τον αριθμό των κυλίνδρων ($K=8$).",
        "explain": "$V_{\\text{κυλ}} = \\frac{6280}{8} = 785\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τη διαδρομή $l$ του εμβόλου.",
        "formula": "$l = \\frac{V_{\\text{κυλ}} \\cdot 4}{\\pi \\cdot d^2}$",
        "answer": 10,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο του όγκου κυλίνδρου $V_{\\text{κυλ}} = \\frac{\\pi d^2}{4} \\cdot l$.",
        "explain": "$l = \\frac{785 \\cdot 4}{3{,}14 \\cdot 10^2} = \\frac{3140}{314} = 10\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τη σχέση συμπίεσης $\\lambda$ του κυλίνδρου, εάν ο όγκος του θαλάμου καύσης είναι $V_{\\text{συμπ}} = 100\\text{ cm}^3$.",
        "formula": "$\\lambda = 1 + \\frac{V_{\\text{κυλ}}}{V_{\\text{συμπ}}}$",
        "answer": 8.85,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον ορισμό της σχέσης συμπίεσης.",
        "explain": "$\\lambda = 1 + \\frac{785}{100} = 1 + 7{,}85 = 8{,}85$."
      }
    ]
  },
  {
    "id": "ch04-25440",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25440",
    "code": "Θέμα 4<sup>ο</sup> · #25440",
    "title": "#25440 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 22,
    "stem": "Κινητήρας αυτοκινήτου έχει τέσσερις (4) κυλίνδρους, που ο καθένας τους έχει εσωτερική διάμετρο $d = 80\\text{ mm}$ και διαδρομή εμβόλου $l = 80\\text{ mm}$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον κυλινδρισμό $V_{\\text{κυλ}}$ του κάθε κυλίνδρου σε $\\text{cm}^3$.",
        "formula": "$V_{\\text{κυλ}} = \\frac{\\pi \\cdot d^2}{4} \\cdot l$",
        "answer": 401.92,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τα mm σε cm ($d=8\\text{ cm}$, $l=8\\text{ cm}$) και εφαρμόστε τον τύπο.",
        "explain": "$V_{\\text{κυλ}} = \\frac{3{,}14 \\cdot 8^2}{4} \\cdot 8 = \\frac{3{,}14 \\cdot 64}{4} \\cdot 8 = 50{,}24 \\cdot 8 = 401{,}92\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον συνολικό κυλινδρισμό $V_{\\text{ολ}}$ του κινητήρα.",
        "formula": "$V_{\\text{ολ}} = V_{\\text{κυλ}} \\cdot K$",
        "answer": 1607.68,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον κυλινδρισμό ενός κυλίνδρου επί 4.",
        "explain": "$V_{\\text{ολ}} = 401{,}92 \\cdot 4 = 1607{,}68\\text{ cm}^3$."
      }
    ]
  },
  {
    "id": "ch04-25441",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "25441",
    "code": "Θέμα 4<sup>ο</sup> · #25441",
    "title": "#25441 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 23,
    "stem": "Τετράχρονος τρικύλινδρος κινητήρας εσωτερικής καύσης έχει σχέση συμπίεσης $\\lambda = 10$ και όγκο κυλίνδρου $V_{\\text{κυλ}} = 360\\text{ cm}^3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον όγκο θαλάμου καύσης $V_{\\text{συμπ}}$.",
        "formula": "$V_{\\text{συμπ}} = \\frac{V_{\\text{κυλ}}}{\\lambda - 1}$",
        "answer": 40,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον τύπο σχέσης συμπίεσης.",
        "explain": "$V_{\\text{συμπ}} = \\frac{360}{10 - 1} = \\frac{360}{9} = 40\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον κυλινδρισμό $V_{\\text{ολ}}$ του κινητήρα.",
        "formula": "$V_{\\text{ολ}} = V_{\\text{κυλ}} \\cdot K$",
        "answer": 1080,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε επί 3 κυλίνδρους.",
        "explain": "$V_{\\text{ολ}} = 360 \\cdot 3 = 1080\\text{ cm}^3$."
      }
    ]
  },
  {
    "id": "ch04-27555",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27555",
    "code": "Θέμα 4<sup>ο</sup> · #27555",
    "title": "#27555 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 24,
    "stem": "Ένας βενζινοκινητήρας έχει κυλινδρισμό κινητήρα $V_{\\text{ολ}} = 1800\\text{ cm}^3$, σχέση συμπίεσης $\\lambda = 6$ και όγκο θαλάμου καύσης $V_{\\text{συμπ}} = 60\\text{ cm}^3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον κυλινδρισμό του ενός κυλίνδρου $V_{\\text{κυλ}}$.",
        "formula": "$V_{\\text{κυλ}} = (\\lambda - 1) \\cdot V_{\\text{συμπ}}$",
        "answer": 300,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον τύπο $V_{\\text{κυλ}} = (\\lambda - 1) V_{\\text{συμπ}}$.",
        "explain": "$V_{\\text{κυλ}} = (6 - 1) \\cdot 60 = 5 \\cdot 60 = 300\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον αριθμό των κυλίνδρων $K$.",
        "formula": "$K = \\frac{V_{\\text{ολ}}}{V_{\\text{κυλ}}}$",
        "answer": 6,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τον ολικό κυλινδρισμό με τον κυλινδρισμό ενός κυλίνδρου.",
        "explain": "$K = \\frac{1800}{300} = 6$ κυλίνδροι."
      }
    ]
  },
  {
    "id": "ch04-27556",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "27556",
    "code": "Θέμα 4<sup>ο</sup> · #27556",
    "title": "#27556 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 25,
    "stem": "Η εσωτερική διάμετρος $d$ του κυλίνδρου ενός κινητήρα είναι $d = 100\\text{ mm}$ και η διαδρομή $l$ του εμβόλου από το Κ.Ν.Σ στο Α.Ν.Σ είναι $l = 40\\text{ mm}$. Ο όγκος του θαλάμου καύσης (νεκρός χώρος) είναι $V_{\\text{συμπ}} = 61\\text{ cm}^3$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί το εμβαδόν $E$ της διατομής του κυλίνδρου σε $\\text{cm}^2$.",
        "formula": "$E = \\frac{\\pi \\cdot d^2}{4}$",
        "answer": 78.5,
        "unit": "cm²",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε $d = 10\\text{ cm}$ και υπολογίστε το εμβαδόν.",
        "explain": "$E = \\frac{3{,}14 \\cdot 10^2}{4} = \\frac{314}{4} = 78{,}5\\text{ cm}^2$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί ο κυλινδρισμός του κυλίνδρου $V_{\\text{κυλ}}$.",
        "formula": "$V_{\\text{κυλ}} = E \\cdot l$",
        "answer": 314,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε το εμβαδόν $E$ με τη διαδρομή $l = 4\\text{ cm}$.",
        "explain": "$V_{\\text{κυλ}} = 78{,}5 \\cdot 4 = 314\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογιστεί ο συνολικός όγκος του κυλίνδρου $V$.",
        "formula": "$V = V_{\\text{συμπ}} + V_{\\text{κυλ}}$",
        "answer": 375,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Προσθέστε τον όγκο θαλάμου καύσης και τον κυλινδρισμό.",
        "explain": "$V = 61 + 314 = 375\\text{ cm}^3$."
      }
    ]
  },
  {
    "id": "ch04-29065",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "29065",
    "code": "Θέμα 4<sup>ο</sup> · #29065",
    "title": "#29065 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 26,
    "stem": "Σε ένα 4κύλινδρο κινητήρα εσωτερικής καύσης με συνολικό κυλινδρισμό $V_{\\text{ολ}} = 1920\\text{ cm}^3$, το εμβαδόν της διατομής του ενός κυλίνδρου είναι $E = 120\\text{ cm}^2$ και ο συνολικός όγκος του κυλίνδρου είναι $V = 540\\text{ cm}^3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η διαδρομή του εμβόλου $\\ell$ από το Κ.Ν.Σ έως το Α.Ν.Σ.",
        "formula": "$\\ell = \\frac{V_{\\text{κυλ}}}{E}$",
        "answer": 4,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Βρείτε πρώτα τον όγκο ενός κυλίνδρου $V_{\\text{κυλ}} = \\frac{V_{\\text{ολ}}}{4}$ και διαιρέστε με το $E$.",
        "explain": "$V_{\\text{κυλ}} = \\frac{1920}{4} = 480\\text{ cm}^3$. Τότε $\\ell = \\frac{480}{120} = 4\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί ο όγκος του θαλάμου καύσης $V_{\\text{συμπ}}$ και η σχέση συμπίεσης του κυλίνδρου $\\lambda$.",
        "formula": "$V_{\\text{συμπ}} = V - V_{\\text{κυλ}} \\text{ και } \\lambda = \\frac{V}{V_{\\text{συμπ}}}$",
        "answer": 9,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Αφαιρέστε $V_{\\text{κυλ}}$ από τον συνολικό όγκο $V$ για το $V_{\\text{συμπ}}$, και μετά υπολογίστε $\\lambda = \\frac{V}{V_{\\text{συμπ}}}$.",
        "explain": "$V_{\\text{συμπ}} = 540 - 480 = 60\\text{ cm}^3$. Άρα $\\lambda = \\frac{540}{60} = 9$."
      }
    ]
  },
  {
    "id": "ch04-30561",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "30561",
    "code": "Θέμα 4<sup>ο</sup> · #30561",
    "title": "#30561 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 27,
    "stem": "Έστω δύο κινητήρες, ένας τετρακύλινδρος και ένας τρικύλινδρος, με κυλινδρισμό $V_{\\text{ολ}} = 1526\\text{ cm}^3$ ο καθένας. Η διαδρομή εμβόλου του τρικύλινδρου είναι $l = 80\\text{ mm} = 8\\text{ cm}$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον όγκο του ενός κυλίνδρου $V_{4}$ για τον τετρακύλινδρο κινητήρα.",
        "formula": "$V_{4} = \\frac{V_{\\text{ολ}}}{4}$",
        "answer": 381.5,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τον ολικό κυλινδρισμό με το 4.",
        "explain": "$V_{4} = \\frac{1526}{4} = 381{,}5\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε την εσωτερική διάμετρο $d$ κυλίνδρου του τρικύλινδρου κινητήρα (με στρογγυλοποίηση σε ακέραιο cm).",
        "formula": "$d = \\sqrt{\\frac{V_{3} \\cdot 4}{\\pi \\cdot l}}$, όπου $V_{3} = \\frac{1526}{3} \\approx 508{,}7\\text{ cm}^3$",
        "answer": 9,
        "unit": "cm",
        "tolerance": 0.05,
        "hint": "Υπολογίστε τον όγκο του ενός κυλίνδρου του τρικύλινδρου και λύστε ως προς $d$.",
        "explain": "$V_{3} = \\frac{1526}{3} \\approx 508{,}7\\text{ cm}^3$. $d = \\sqrt{\\frac{508{,}7 \\cdot 4}{3{,}14 \\cdot 8}} = \\sqrt{\\frac{2034{,}8}{25{,}12}} = \\sqrt{81} = 9\\text{ cm}$."
      }
    ]
  },
  {
    "id": "ch04-31673",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "31673",
    "code": "Θέμα 4<sup>ο</sup> · #31673",
    "title": "#31673 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 28,
    "stem": "Σε έναν δίχρονο βενζινοκινητήρα η διάμετρος του κυλίνδρου είναι $d = 10\\text{ cm}$ και εκτελεί διαδρομή από το ΚΝΣ έως το ΑΝΣ ίση με $\\ell = 4\\text{ cm}$. Ο κυλινδρισμός (κυβισμός) του κινητήρα είναι $V_{\\text{ολ}} = 1256\\text{ cm}^3$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η γωνία σφήνωσης $\\alpha$ σε μοίρες.",
        "formula": "$V_{\\text{κυλ}} = \\frac{\\pi d^2}{4} \\cdot \\ell$, $K = \\frac{V_{\\text{ολ}}}{V_{\\text{κυλ}}}$, $\\alpha = \\frac{360{}^{\\circ}}{K}$",
        "answer": 90,
        "unit": "°",
        "tolerance": 0.01,
        "hint": "Βρείτε τον κυλινδρισμό ενός κυλίνδρου, τον αριθμό κυλίνδρων $K$ και τη γωνία $\\alpha$.",
        "explain": "$V_{\\text{κυλ}} = \\frac{3{,}14 \\cdot 10^2}{4} \\cdot 4 = 314\\text{ cm}^3$. $K = \\frac{1256}{314} = 4$. Άρα $\\alpha = \\frac{360{}^{\\circ}}{4} = 90{}^{\\circ}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Αν η σχέση συμπίεσης είναι $\\lambda = 6$, να βρείτε τον όγκο του θαλάμου καύσης (νεκρός χώρος) $V_{\\text{συμπ}}$.",
        "formula": "$V_{\\text{συμπ}} = \\frac{V_{\\text{κυλ}}}{\\lambda - 1}$",
        "answer": 62.8,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον τύπο με $\\lambda = 6$ και $V_{\\text{κυλ}} = 314\\text{ cm}^3$.",
        "explain": "$V_{\\text{συμπ}} = \\frac{314}{6 - 1} = \\frac{314}{5} = 62{,}8\\text{ cm}^3$."
      }
    ]
  },
  {
    "id": "ch04-33202",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "33202",
    "code": "Θέμα 4<sup>ο</sup> · #33202",
    "title": "#33202 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 29,
    "stem": "Κινητήρας αυτοκινήτου έχει τρεις (3) κυλίνδρους, που ο καθένας τους έχει εσωτερική διάμετρο $d = 70\\text{ mm}$ και διαδρομή εμβόλου $l = 80\\text{ mm}$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί ο κυλινδρισμός $V_{\\text{κυλ}}$ του κάθε κυλίνδρου σε $\\text{cm}^3$.",
        "formula": "$V_{\\text{κυλ}} = \\frac{\\pi \\cdot d^2}{4} \\cdot l$",
        "answer": 307.72,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε σε cm ($d=7\\text{ cm}$, $l=8\\text{ cm}$) και υπολογίστε.",
        "explain": "$V_{\\text{κυλ}} = \\frac{3{,}14 \\cdot 7^2}{4} \\cdot 8 = \\frac{3{,}14 \\cdot 49}{4} \\cdot 8 = 38{,}465 \\cdot 8 = 307{,}72\\text{ cm}^3$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί ο συνολικός κυλινδρισμός $V_{\\text{ολ}}$ του κινητήρα.",
        "formula": "$V_{\\text{ολ}} = V_{\\text{κυλ}} \\cdot 3$",
        "answer": 923.16,
        "unit": "cm³",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε επί 3 κυλίνδρους.",
        "explain": "$V_{\\text{ολ}} = 307{,}72 \\cdot 3 = 923{,}16\\text{ cm}^3$."
      }
    ]
  },
  {
    "id": "ch04-34628",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "34628",
    "code": "Θέμα 4<sup>ο</sup> · #34628",
    "title": "#34628 — Θέμα 4$^{ο}$ (4.1–4.2)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 30,
    "stem": "Σε ένα μονοκύλινδρο κινητήρα η διαδρομή του εμβόλου $l$ από το Κ.Ν.Σ έως το Α.Ν.Σ. είναι $l = 100\\text{ mm}$ και ο όγκος κυλινδρισμού του κινητήρα είναι $V_{\\text{κυλ}} = 785\\text{ cm}^3$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να υπολογιστεί η εσωτερική διάμετρος $d$ του κυλίνδρου σε cm.",
        "formula": "$d = \\sqrt{\\frac{V_{\\text{κυλ}} \\cdot 4}{\\pi \\cdot l}}$",
        "answer": 10,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε $l = 100\\text{ mm} = 10\\text{ cm}$ και λύστε ως προς $d$.",
        "explain": "$d = \\sqrt{\\frac{785 \\cdot 4}{3{,}14 \\cdot 10}} = \\sqrt{\\frac{3140}{31{,}4}} = \\sqrt{100} = 10\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογιστεί ο όγκος του θαλάμου καύσης $V_{\\text{συμπ}}$, όταν η σχέση συμπίεσης του κυλίνδρου είναι $\\lambda = 8{,}85$.",
        "formula": "$V_{\\text{συμπ}} = \\frac{V_{\\text{κυλ}}}{\\lambda - 1}$",
        "answer": 100,
        "unit": "cm³",
        "tolerance": 0.05,
        "hint": "Εφαρμόστε τον τύπο σχέσης συμπίεσης.",
        "explain": "$V_{\\text{συμπ}} = \\frac{785}{8{,}85 - 1} = \\frac{785}{7{,}85} = 100\\text{ cm}^3$."
      }
    ],
    "solutionImages": [
      "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34628_sol01.webp",
      "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34628_sol02.webp",
      "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34628_sol03.webp",
      "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34628_sol04.webp"
    ]
  },
  {
    "id": "ch04-34914",
    "group": "ch04-06-kylindrismos-sympiesi",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "34914",
    "code": "Θέμα 4<sup>ο</sup> · #34914",
    "title": "#34914 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch04-06-kylindrismos-sympiesi",
    "sourceOrder": 31,
    "stem": "Σε ένα εξακύλινδρο κινητήρα ($K = 6$) εσωτερικής καύσης με κυλινδρισμό $V_{\\text{ολ}} = 2400\\text{ cm}^3$, το εμβαδόν της διατομής του κυλίνδρου είναι $E = 80\\text{ cm}^2$ και ο συνολικός όγκος του κυλίνδρου είναι $V = 480\\text{ cm}^3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογιστεί η διαδρομή του εμβόλου $\\ell$ από το Κ.Ν.Σ έως το Α.Ν.Σ.",
        "formula": "$\\ell = \\frac{V_{\\text{κυλ}}}{E}$",
        "answer": 5,
        "unit": "cm",
        "tolerance": 0.01,
        "hint": "Βρείτε πρώτα $V_{\\text{κυλ}} = \\frac{V_{\\text{ολ}}}{6}$ και διαιρέστε με το $E$.",
        "explain": "$V_{\\text{κυλ}} = \\frac{2400}{6} = 400\\text{ cm}^3$. Τότε $\\ell = \\frac{400}{80} = 5\\text{ cm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογιστεί η σχέση συμπίεσης του κυλίνδρου $\\lambda$.",
        "formula": "$\\lambda = \\frac{V}{V_{\\text{συμπ}}}$, όπου $V_{\\text{συμπ}} = V - V_{\\text{κυλ}}$",
        "answer": 6,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τον όγκο θαλάμου καύσης $V_{\\text{συμπ}} = 480 - 400 = 80\\text{ cm}^3$ και μετά το $\\lambda$.",
        "explain": "$V_{\\text{συμπ}} = 480 - 400 = 80\\text{ cm}^3$. Άρα $\\lambda = \\frac{480}{80} = 6$."
      }
    ]
  }
]
);
