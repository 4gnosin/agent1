// ============================================================================
// 4gnosin - Auto-generated Bundle for: michanes-esoterikis-kafsis-2
// Συνενώνει 26 αρχεία (θεωρία, ομάδες, ασκήσεις, animations)
// Υποστηρίζει file:/// και web.
// ============================================================================
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-02/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].groups.push(...
[
  {
    "id": "ch02-03-aftorrhythmizomenes-valvides",
    "chapter": "2",
    "title": "2.3.1 Αυτορρυθμιζόμενες βαλβίδες",
    "blurb": "Αυτορρυθμιζόμενες βαλβίδες και υδραυλικά ωστήρια κινητήρων."
  },
  {
    "id": "ch02-04-ropi",
    "chapter": "2",
    "title": "2.4 Ροπή",
    "blurb": "Υπολογισμοί ροπής, δύναμης διωστήρα και γεωμετρικών χαρακτηριστικών σε ΜΕΚ."
  },
  {
    "id": "ch02-09-ischys",
    "chapter": "2",
    "title": "2.9 Ισχύς",
    "blurb": "Υπολογισμοί έργου, ισχύος και μετατροπών μονάδων σε ανυψωτικά μηχανήματα."
  },
  {
    "id": "ch02-18-kinitiries-mixanes",
    "chapter": "2",
    "title": "2.18 Κινητήριες μηχανές - Κατάταξη",
    "blurb": "Κατάταξη και χαρακτηριστικά κινητήριων μηχανών και ΜΕΚ."
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-02/ch02-03-aftorrhythmizomenes-valvides.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch02-29066",
    "group": "ch02-03-aftorrhythmizomenes-valvides",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #29066",
    "bankCode": "29066",
    "title": "#29066 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch02-03-aftorrhythmizomenes-valvides",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ένα υδραυλικό ωστήριο. Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα (1) γράμμα από τη Στήλη Β θα περισσέψει.",
        "prompt": "Αντιστοίχιση εξαρτημάτων υδραυλικού ωστηρίου",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ελατήριο εμβόλου"
          },
          {
            "id": "b",
            "text": "Έμβολο με τρύπα"
          },
          {
            "id": "c",
            "text": "Μονόδρομη βαλβίδα"
          },
          {
            "id": "d",
            "text": "Έκκεντρο"
          },
          {
            "id": "e",
            "text": "Κανάλι λαδιού"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "e",
          "3": "g",
          "4": "a"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_29066_fig01.webp"
        ],
        "explain": "Η σωστή αντιστοίχιση είναι: 1 - β, 2 - ε, 3 - γ, 4 - α. Περισσεύει το δ.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_29066_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "Για να περιοριστεί στο ελάχιστο η απαίτηση για ρύθμιση των βαλβίδων, χρησιμοποιούνται υδραυλικά ωστήρια.",
        "answer": true,
        "explain": "Σωστό. Τα υδραυλικά ωστήρια αντισταθμίζουν αυτόματα τα διάκενα, μηδενίζοντας την ανάγκη συχνών ρυθμίσεων."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Η μεταβολή του διάκενου μεταβάλλει συνήθως και το χρονισμό.",
        "answer": true,
        "explain": "Σωστό. Το ύψος και η διάρκεια ανοίγματος των βαλβίδων επηρεάζονται από το διάκενο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Τα υδραυλικά ωστήρια μπορούν να επισκευασθούν.",
        "answer": false,
        "explain": "Λάθος. Τα υδραυλικά ωστήρια αποτελούν ακριβείας εξαρτήματα κλειστού τύπου και σε περίπτωση βλάβης αντικαθίστανται εξ ολοκλήρου και δεν επισκευάζονται."
      }
    ]
  },
  {
    "id": "ch02-33197",
    "group": "ch02-03-aftorrhythmizomenes-valvides",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #33197",
    "bankCode": "33197",
    "title": "#33197 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch02-03-aftorrhythmizomenes-valvides",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παραπάνω σχήμα απεικονίζεται η λειτουργία ωστηρίου με εκκεντροφόρο επικεφαλή. Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5, 6, 7, 8 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ, ζ, η της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοίχιση εξαρτημάτων ωστηρίου",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          },
          {
            "id": "6",
            "text": "6"
          },
          {
            "id": "7",
            "text": "7"
          },
          {
            "id": "8",
            "text": "8"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Έκκεντρο"
          },
          {
            "id": "b",
            "text": "Ωστήριο"
          },
          {
            "id": "c",
            "text": "Βαλβίδα αντεπιστροφής"
          },
          {
            "id": "d",
            "text": "Χώρος υψηλής πίεσης"
          },
          {
            "id": "e",
            "text": "Ωστική ράβδος"
          },
          {
            "id": "f",
            "text": "Παροχή λαδιού"
          },
          {
            "id": "g",
            "text": "Έμβολο ωστηρίου"
          },
          {
            "id": "h",
            "text": "Θάλαμος λαδιού"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "e",
          "3": "g",
          "4": "f",
          "5": "d",
          "6": "h",
          "7": "a",
          "8": "c"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_33197_fig01.webp"
        ],
        "explain": "Η σωστή αντιστοίχιση είναι: 1-β, 2-ε, 3-ζ, 4-στ, 5-δ, 6-η, 7-α, 8-γ.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_33197_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "Για να περιορισθεί στο ελάχιστο η απαίτηση για ρύθμιση των βαλβίδων, χρησιμοποιούνται υδραυλικά ωστήρια.",
        "answer": true,
        "explain": "Σωστό. Τα υδραυλικά ωστήρια εξαλείφουν την ανάγκη περιοδικής ρύθμισης."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Αν το διάκενο είναι μεγαλύτερο, η βαλβίδα μένει ανοικτή.",
        "answer": false,
        "explain": "Λάθος. Με υπερβολικά μεγάλο διάκενο η βαλβίδα ανοίγει αργότερα και κλείνει νωρίτερα, ενώ αν δεν υπήρχε καθόλου διάκενο ενδέχεται να μη έκλεινε τελείως."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Το ωστήριο συνδέεται με το κύκλωμα λαδιού του κινητήρα.",
        "answer": true,
        "explain": "Σωστό. Τροφοδοτείται συνεχώς με λάδι υπό πίεση από το σύστημα λίπανσης."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-02/ch02-04-ropi.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch02-23741",
    "group": "ch02-04-ropi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23741",
    "bankCode": "23741",
    "title": "#23741 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-04-ropi",
    "sourceOrder": 3,
    "stem": "Ο διωστήρας μιας Μηχανής Εσωτερικής Καύσης (ΜΕΚ) διαβιβάζει δύναμη ίση με $F = 20\\text{ kN}$, η οποία προκαλεί ροπή $M$ ως προς τον άξονα του στροφαλοφόρου, όταν βρίσκεται στην θέση του σχήματος 1. Ο μοχλοβραχίονας της δύναμης $F$ ως προς τον άξονα του στροφαλοφόρου είναι ίσος με $d = 7\\text{ cm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Η ροπή $M$ που ασκείται στον διωστήρα σε $\\text{Nm}$.",
        "formula": "$M = F \\cdot d$",
        "answer": 1400,
        "unit": "Nm",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τη δύναμη σε $\\text{N}$ και τον μοχλοβραχίονα σε $\\text{m}$.",
        "explain": "$F = 20\\text{ kN} = 20000\\text{ N}$, $d = 7\\text{ cm} = 0,07\\text{ m}$. Άρα $M = 20000\\text{ N} \\cdot 0,07\\text{ m} = 1400\\text{ Nm}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η απόσταση $L$ του πείρου από τον στροφαλοφόρο άξονα σε $\\text{m}$.",
        "formula": "$L = \\frac{d}{\\text{ημ}\\varphi}$",
        "answer": 0.2,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τη δοσμένη τιμή $\\text{ημ}\\varphi = 0,35$.",
        "explain": "$L = \\frac{d}{\\text{ημ}\\varphi} = \\frac{0,07\\text{ m}}{0,35} = 0,2\\text{ m}$."
      }
    ],
    "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_23741_fig01.webp"
  },
  {
    "id": "ch02-23742",
    "group": "ch02-04-ropi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23742",
    "bankCode": "23742",
    "title": "#23742 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-04-ropi",
    "sourceOrder": 4,
    "stem": "Ο διωστήρας μιας Μηχανής Εσωτερικής Καύσης (ΜΕΚ) διαβιβάζει δύναμη $F$, η οποία προκαλεί ροπή ίση με $M = 560\\text{ Nm}$, ως προς τον άξονα του στροφαλοφόρου, όταν βρίσκεται στην θέση του σχήματος 1. Το ημίτονο της γωνίας $\\varphi$ είναι ίσο με $\\text{ημ}\\varphi = 0,2$ και η απόσταση του πείρου από τον στροφαλοφόρο άξονα είναι ίση με $L = 40\\text{ cm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Ο μοχλοβραχίονας $d$ της δύναμης $F$ του εμβόλου ως προς τον άξονα περιστροφής του στροφαλοφόρου σε $\\text{m}$.",
        "formula": "$d = L \\cdot \\text{ημ}\\varphi$",
        "answer": 0.08,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε το $L$ σε $\\text{m}$ και πολλαπλασιάστε με το $\\text{ημ}\\varphi$.",
        "explain": "$L = 40\\text{ cm} = 0,4\\text{ m}$. $d = L \\cdot \\text{ημ}\\varphi = 0,4\\text{ m} \\cdot 0,2 = 0,08\\text{ m}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η δύναμη $F$ σε $\\text{kN}$ που ασκείται στον διωστήρα.",
        "formula": "$F = \\frac{M}{d}$",
        "answer": 7,
        "unit": "kN",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη ροπή $M$ με τον μοχλοβραχίονα $d$.",
        "explain": "$F = \\frac{M}{d} = \\frac{560\\text{ Nm}}{0,08\\text{ m}} = 7000\\text{ N} = 7\\text{ kN}$.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_23742_fig01.webp"
      }
    ]
  },
  {
    "id": "ch02-24400",
    "group": "ch02-04-ropi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24400",
    "bankCode": "24400",
    "title": "#24400 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-04-ropi",
    "sourceOrder": 5,
    "stem": "Δίνεται διωστήρας μιας πετρελαιομηχανής (diesel), ο οποίος μεταβιβάζει μία δύναμη $F = 8000\\text{ N}$, όπως φαίνεται στο παρακάτω σχήμα. Η ροπή που αναπτύσσεται ως προς τον άξονα του στροφαλοφόρου είναι $M = 764\\text{ Nm}$. Δίνονται: γωνία $\\varphi = 11{}^{\\circ}$, $\\text{ημ} 11{}^{\\circ} = 0,191$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Τον μοχλοβραχίονα $d$ της δύναμης $F$ του εμβόλου ως προς τον άξονα περιστροφής του στροφαλοφόρου σε $\\text{m}$.",
        "formula": "$d = \\frac{M}{F}$",
        "answer": 0.0955,
        "unit": "m",
        "tolerance": 0.001,
        "hint": "Διαιρέστε τη ροπή $M$ με τη δύναμη $F$.",
        "explain": "$d = \\frac{M}{F} = \\frac{764\\text{ Nm}}{8000\\text{ N}} = 0,0955\\text{ m}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την απόσταση $L$ του πείρου του εμβόλου από τον στροφαλοφόρο άξονα σε $\\text{m}$.",
        "formula": "$L = \\frac{d}{\\text{ημ}\\varphi}$",
        "answer": 0.5,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τον μοχλοβραχίονα $d$ με το $\\text{ημ} 11{}^{\\circ}$.",
        "explain": "$L = \\frac{d}{\\text{ημ} 11{}^{\\circ}} = \\frac{0,0955\\text{ m}}{0,191} = 0,5\\text{ m}$."
      }
    ],
    "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_24400_fig01.webp"
  },
  {
    "id": "ch02-34913",
    "group": "ch02-04-ropi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #34913",
    "bankCode": "34913",
    "title": "#34913 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-04-ropi",
    "sourceOrder": 6,
    "stem": "Ο διωστήρας μιας βενζινομηχανής μεταβιβάζει μια δύναμη $F = 8000\\text{ N}$, όταν βρίσκεται στην θέση του σχήματος 1, η οποία ως προς τον άξονα του στροφαλοφόρου προκαλεί ροπή $M = 1200\\text{ Nm}$. Δίνονται: Συνημίτονο της γωνίας $\\varphi = 75{}^{\\circ}$ είναι $\\text{συν}\\varphi = 0,25$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Ο μοχλοβραχίονας $d$ της δύναμης $F$ του εμβόλου σε $\\text{m}$.",
        "formula": "$d = \\frac{M}{F}$",
        "answer": 0.15,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη ροπή $M$ με τη δύναμη $F$.",
        "explain": "$d = \\frac{M}{F} = \\frac{1200\\text{ Nm}}{8000\\text{ N}} = 0,15\\text{ m}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η απόσταση $L$ σε $\\text{m}$.",
        "formula": "$L = \\frac{d}{\\text{συν}\\varphi}$",
        "answer": 0.6,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το $d$ με το $\\text{συν}\\varphi$.",
        "explain": "$L = \\frac{d}{\\text{συν}\\varphi} = \\frac{0,15\\text{ m}}{0,25} = 0,6\\text{ m}$."
      }
    ],
    "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_34913_fig01.webp"
  },
  {
    "id": "ch02-34916",
    "group": "ch02-04-ropi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #34916",
    "bankCode": "34916",
    "title": "#34916 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-04-ropi",
    "sourceOrder": 7,
    "stem": "Ο διωστήρας μιας βενζινομηχανής μεταβιβάζει μια δύναμη $F$, η οποία ως προς τον άξονα του στροφαλοφόρου προκαλεί ροπή $M = 900\\text{ Nm}$, όπως φαίνεται στο σχήμα 1. Ο μοχλοβραχίονας $d$ ως προς τον άξονα του στροφαλοφόρου είναι $d = 0,18\\text{ m}$ και η απόσταση $L = 0,8\\text{ m}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Η δύναμη $F$ που ασκείται στον διωστήρα σε $\\text{N}$.",
        "formula": "$F = \\frac{M}{d}$",
        "answer": 5000,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Διαιρέστε τη ροπή $M$ με τον μοχλοβραχίονα $d$.",
        "explain": "$F = \\frac{M}{d} = \\frac{900\\text{ Nm}}{0,18\\text{ m}} = 5000\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η γωνία $\\varphi$ σε μοίρες (${}^{\\circ}$), βάσει του πινακίου ημιτόνων.",
        "formula": "$\\text{ημ}\\varphi = \\frac{d}{L}$",
        "answer": 13,
        "unit": "°",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το $\\text{ημ}\\varphi = d / L$ και βρείτε την αντίστοιχη γωνία.",
        "explain": "$\\text{ημ}\\varphi = \\frac{0,18}{0,8} = 0,225$. Από τον πίνακα προκύπτει γωνία $13{}^{\\circ}$."
      }
    ],
    "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_34916_fig01.webp"
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-02/ch02-09-ischys.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch02-23726",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23726",
    "bankCode": "23726",
    "title": "#23726 — Θέμα 4$^{ο}$ (4.1–4.2)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 8,
    "stem": "Η ισχύς ενός ανυψωτικού μηχανήματος συνεργείου αυτοκινήτων (αναβατόριο) είναι $P = 2,5\\text{ kW}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1α",
        "prompt": "Το έργο $W$ που παράγει σε χρόνο $t = 10\\text{ s}$ σε $\\text{J}$.",
        "formula": "$W = P \\cdot t$",
        "answer": 25000,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε την ισχύ σε $\\text{W}$ και πολλαπλασιάστε με τον χρόνο $t$.",
        "explain": "$P = 2,5\\text{ kW} = 2500\\text{ W}$. $W = 2500\\text{ W} \\cdot 10\\text{ s} = 25000\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "4.1β",
        "prompt": "Η μάζα $m$ ενός οχήματος που μπορεί το μηχάνημα να ανυψώσει σε ύψος $h = 2,5\\text{ m}$ σε $\\text{kg}$. Δίνεται $g = 10\\text{ m/s}^2$.",
        "formula": "$m = \\frac{W}{g \\cdot h}$",
        "answer": 1000,
        "unit": "kg",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο $W$ δια του γινομένου $g \\cdot h$.",
        "explain": "$B = \\frac{W}{h} = \\frac{25000\\text{ J}}{2,5\\text{ m}} = 10000\\text{ N}$. $m = \\frac{B}{g} = \\frac{10000\\text{ N}}{10\\text{ m/s}^2} = 1000\\text{ kg}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Η παραπάνω ισχύς σε μετρικούς ίππους ($\\text{PS}$), με ακρίβεια δύο δεκαδικών. Δίνεται $1\\text{ kW} = 1,3596\\text{ PS}$.",
        "formula": "$\\text{PS} = P_{\\text{kW}} \\cdot 1,3596$",
        "answer": 3.39,
        "unit": "PS",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την ισχύ σε $\\text{kW}$ με το συντελεστή $1,3596$.",
        "explain": "$P = 2,5\\text{ kW} \\cdot 1,3596\\text{ PS/kW} = 3,399\\text{ PS} \\approx 3,39\\text{ PS}$."
      }
    ]
  },
  {
    "id": "ch02-24354",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24354",
    "bankCode": "24354",
    "title": "#24354 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 9,
    "stem": "Μια πλατφόρμα ανύψωσης ενός συνεργείου πρέπει να ανυψώσει ένα αυτοκίνητο μάζας $m = 1500\\text{ kg}$, σε ένα ύψος $h = 300\\text{ cm}$ και σε χρόνο $t = 15\\text{ s}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το έργο $W$ που παράγεται από την πλατφόρμα ανύψωσης σε $\\text{J}$.",
        "formula": "$W = m \\cdot g \\cdot h$",
        "answer": 45000,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το βάρος $B = m \\cdot g$ και πολλαπλασιάστε επί το ύψος $h$ σε $\\text{m}$.",
        "explain": "$B = 1500\\text{ kg} \\cdot 10\\text{ m/s}^2 = 15000\\text{ N}$. $h = 300\\text{ cm} = 3\\text{ m}$. $W = 15000\\text{ N} \\cdot 3\\text{ m} = 45000\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την ισχύ $P$ του κινητήρα σε $\\text{kW}$.",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 3,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο $W$ δια του χρόνου $t$ και μετατρέψτε σε $\\text{kW}$.",
        "explain": "$P = \\frac{45000\\text{ J}}{15\\text{ s}} = 3000\\text{ W} = 3\\text{ kW}$."
      }
    ]
  },
  {
    "id": "ch02-24369",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24369",
    "bankCode": "24369",
    "title": "#24369 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 10,
    "stem": "Μία πλατφόρμα ενός συνεργείου έχει μηχανική ισχύ $P = 4\\text{ kW}$ και χρησιμοποιείται για την ανύψωση αυτοκινήτου μάζας $m = 4800\\text{ kg}$ σε ύψος $h = 2\\text{ m}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Ο χρόνος $t$ που χρειάζεται για την ανύψωση σε $\\text{s}$.",
        "formula": "$t = \\frac{m \\cdot g \\cdot h}{P}$",
        "answer": 24,
        "unit": "s",
        "tolerance": 0.01,
        "hint": "Βρείτε πρώτα το έργο $W$ και διαιρέστε το με την ισχύ $P$.",
        "explain": "$W = 4800\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 2\\text{ m} = 96000\\text{ J}$. $t = \\frac{96000\\text{ J}}{4000\\text{ W}} = 24\\text{ s}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η απαιτούμενη ισχύς $P'$ σε $\\text{W}$, αν πρέπει να μειωθεί ο χρόνος $t$ της παραπάνω ανύψωσης κατά $4\\text{ s}$.",
        "formula": "$P' = \\frac{W}{t - 4}$",
        "answer": 4800,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Υπολογίστε τον νέο χρόνο $t' = 24 - 4 = 20\\text{ s}$ και διαιρέστε το έργο με αυτόν.",
        "explain": "$t' = 24\\text{ s} - 4\\text{ s} = 20\\text{ s}$. $P' = \\frac{96000\\text{ J}}{20\\text{ s}} = 4800\\text{ W}$."
      }
    ]
  },
  {
    "id": "ch02-24372",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24372",
    "bankCode": "24372",
    "title": "#24372 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 11,
    "stem": "Μία πλατφόρμα ενός συνεργείου ανυψώνει ένα αυτοκίνητο $m = 1200\\text{ kg}$, σε ύψος $h = 1,8\\text{ m}$ και σε χρόνο $t = 10\\text{ s}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το έργο $W$ της ανύψωσης σε $\\text{J}$.",
        "formula": "$W = m \\cdot g \\cdot h$",
        "answer": 21600,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε μάζα, επιτάχυνση βαρύτητας και ύψος.",
        "explain": "$W = 1200\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 1,8\\text{ m} = 21600\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η μηχανική ισχύς $P$ της πλατφόρμας σε $\\text{kW}$.",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 2.16,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο $W$ με τον χρόνο $t$ και μετατρέψτε σε $\\text{kW}$.",
        "explain": "$P = \\frac{21600\\text{ J}}{10\\text{ s}} = 2160\\text{ W} = 2,16\\text{ kW}$."
      }
    ]
  },
  {
    "id": "ch02-24375",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #24375",
    "bankCode": "24375",
    "title": "#24375 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 12,
    "stem": "Ένα συνεργείο αυτοκινήτων διαθέτει πλατφόρμα ανύψωσης αυτοκινήτων μέγιστης ισχύος $P = 3\\text{ kW}$. Να ελεγχθεί, το συγκεκριμένο ανυψωτικό, αν μπορεί να ανυψώσει ένα όχημα μάζας $m = 1200\\text{ kg}$, σε ύψος $h = 3\\text{ m}$ και σε χρόνο $t = 12\\text{ s}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε την απαιτούμενη ισχύ $P'$ σε $\\text{kW}$ για την ανύψωση.",
        "formula": "$P' = \\frac{m \\cdot g \\cdot h}{t}$",
        "answer": 3,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Βρείτε το έργο και διαιρέστε με τον χρόνο $t$.",
        "explain": "$W = 1200\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 3\\text{ m} = 36000\\text{ J}$. $P' = \\frac{36000\\text{ J}}{12\\text{ s}} = 3000\\text{ W} = 3\\text{ kW}$. Επειδή $P = P'$, το ανυψωτικό μπορεί να ανυψώσει το όχημα."
      }
    ]
  },
  {
    "id": "ch02-25290",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25290",
    "bankCode": "25290",
    "title": "#25290 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 13,
    "stem": "Μία πλατφόρμα ενός συνεργείου έχει μηχανική ισχύ $P = 5\\text{ kW}$. Θέλουμε να ανυψώσουμε ένα αυτοκίνητο μάζας $m = 2000\\text{ kg}$ σε ύψος $h = 2\\text{ m}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Πόσο χρόνο $t$ χρειάζεται για την ανύψωση του αυτοκινήτου σε $\\text{s}$;",
        "formula": "$t = \\frac{m \\cdot g \\cdot h}{P}$",
        "answer": 8,
        "unit": "s",
        "tolerance": 0.01,
        "hint": "Υπολογίστε το έργο και διαιρέστε με την ισχύ $P$.",
        "explain": "$W = 2000\\text{ kg} \\cdot 10\\text{ m/s}^2 \\cdot 2\\text{ m} = 40000\\text{ J}$. $t = \\frac{40000\\text{ J}}{5000\\text{ W}} = 8\\text{ s}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Αν θέλουμε να μειώσουμε τον χρόνο $t$ στο μισό, να υπολογίσετε την απαιτούμενη ισχύ $P'$ σε $\\text{kW}$.",
        "formula": "$P' = \\frac{W}{t/2}$",
        "answer": 10,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο με τον νέο χρόνο ($t' = 4\\text{ s}$).",
        "explain": "$t' = \\frac{8\\text{ s}}{2} = 4\\text{ s}$. $P' = \\frac{40000\\text{ J}}{4\\text{ s}} = 10000\\text{ W} = 10\\text{ kW}$."
      }
    ]
  },
  {
    "id": "ch02-28767",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #28767",
    "bankCode": "28767",
    "title": "#28767 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 14,
    "stem": "Μια πλατφόρμα ανύψωσης ενός συνεργείου πρέπει να ανυψώσει ένα αυτοκίνητο μάζας $m = 2000\\text{ kg}$, σε ένα ύψος $h = 2,2\\text{ m}$ και σε χρόνο $t = 20\\text{ s}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το έργο που παράγεται από την πλατφόρμα ανύψωσης σε $\\text{J}$.",
        "formula": "$W = m \\cdot g \\cdot h$",
        "answer": 44000,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε μάζα, επιτάχυνση βαρύτητας και ύψος.",
        "explain": "$B = 2000\\text{ kg} \\cdot 10\\text{ m/s}^2 = 20000\\text{ N}$. $W = 20000\\text{ N} \\cdot 2,2\\text{ m} = 44000\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την ισχύ του κινητήρα σε $\\text{kW}$.",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 2.2,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο με τον χρόνο $t$.",
        "explain": "$P = \\frac{44000\\text{ J}}{20\\text{ s}} = 2200\\text{ W} = 2,2\\text{ kW}$."
      }
    ]
  },
  {
    "id": "ch02-33204",
    "group": "ch02-09-ischys",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #33204",
    "bankCode": "33204",
    "title": "#33204 — Θέμα 4$^{ο}$ (α–β)",
    "units": 25,
    "theory": "ch02-09-ischys",
    "sourceOrder": 15,
    "stem": "Μια πλατφόρμα ανύψωσης ενός συνεργείου πρέπει να ανυψώσει ένα αυτοκίνητο μάζας $m = 1300\\text{ kg}$, σε ένα ύψος $h = 2\\text{ m}$ και σε χρόνο $t = 10\\text{ s}$. Δίνεται $g = 10\\text{ m/s}^2$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το έργο που παράγεται από την πλατφόρμα ανύψωσης σε $\\text{J}$.",
        "formula": "$W = m \\cdot g \\cdot h$",
        "answer": 26000,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε μάζα, επιτάχυνση βαρύτητας και ύψος.",
        "explain": "$B = 1300\\text{ kg} \\cdot 10\\text{ m/s}^2 = 13000\\text{ N}$. $W = 13000\\text{ N} \\cdot 2\\text{ m} = 26000\\text{ J}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Την ισχύ του κινητήρα σε $\\text{kW}$.",
        "formula": "$P = \\frac{W}{t}$",
        "answer": 2.6,
        "unit": "kW",
        "tolerance": 0.01,
        "hint": "Διαιρέστε το έργο με τον χρόνο $t$.",
        "explain": "$P = \\frac{26000\\text{ J}}{10\\text{ s}} = 2600\\text{ W} = 2,6\\text{ kW}$."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-02/ch02-18-kinitiries-mixanes.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch02-25289",
    "group": "ch02-18-kinitiries-mixanes",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25289",
    "bankCode": "25289",
    "title": "#25289 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch02-18-kinitiries-mixanes",
    "sourceOrder": 16,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα (1) γράμμα από τη Στήλη Β θα περισσέψει.",
        "prompt": "Αντιστοίχιση διάταξης κυλίνδρων ΜΕΚ",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Μηχανή τύπου Boxer"
          },
          {
            "id": "b",
            "text": "Μηχανή με οριζόντιους κυλίνδρους σε σειρά"
          },
          {
            "id": "c",
            "text": "Μηχανή διάταξης V"
          },
          {
            "id": "d",
            "text": "Αστεροειδής μηχανή απλού αστέρα"
          },
          {
            "id": "e",
            "text": "Μηχανή αντίθετων εμβόλων"
          },
          {
            "id": "f",
            "text": "Μηχανή με κατακόρυφους κυλίνδρους σε σειρά"
          }
        ],
        "pairs": {
          "1": "f",
          "2": "a",
          "3": "c",
          "4": "b",
          "5": "e"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_25289_fig01.webp"
        ],
        "explain": "Η σωστή αντιστοίχιση είναι: 1-στ, 2-α, 3-γ, 4-β, 5-ε.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_25289_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "Κινητήρια μηχανή ονομάζεται, γενικά, ένα σύνολο εξαρτημάτων το οποίο μπορούν να παράγουν κινητήριο ωφέλιμο μηχανικό έργο.",
        "answer": true,
        "explain": "Σωστό. Ο ορισμός περιγράφει την κύρια λειτουργία μιας κινητήριας μηχανής."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Όλες οι μηχανές, κατά την διάρκεια της λειτουργίας τους, παραλαμβάνουν ενέργεια κάποιας μορφής και την μετατρέπουν όλη σε κινητήριο έργο.",
        "answer": false,
        "explain": "Λάθος. Λόγω των απωλειών (θερμότητα, τριβές), ποτέ δεν μετατρέπεται το 100% της ενέργειας σε ωφέλιμο έργο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Ως προς την χρήση τους, οι μηχανές εσωτερικής καύσης κατατάσσονται σε αερόψυκτες και υδρόψυκτες.",
        "answer": false,
        "explain": "Λάθος. Η κατάταξη σε αερόψυκτες και υδρόψυκτες γίνεται ως προς το σύστημα ψύξης τους και όχι ως προς τη χρήση τους."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι κινητήριες μηχανές διακρίνονται σε διάφορες κατηγορίες, ανάλογα με τη μορφή της ενέργειας την οποία παραλαμβάνουν και που μετατρέπουν, τελικά, σε κινητική.",
        "answer": true,
        "explain": "Σωστό. Η βασική ταξινόμηση γίνεται με βάση την αρχική μορφή ενέργειας και τη μετατροπή της."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Οι μηχανές που χρησιμοποιούν ηλεκτρική ενέργεια για την παραγωγή μηχανικού έργου, ονομάζονται μηχανές εσωτερικής καύσης.",
        "answer": false,
        "explain": "Λάθος. Ονομάζονται ηλεκτροκινητήρες, ενώ οι ΜΕΚ παράγουν έργο από την καύση καυσίμου στο εσωτερικό τους."
      }
    ]
  },
  {
    "id": "ch02-26270",
    "group": "ch02-18-kinitiries-mixanes",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #26270",
    "bankCode": "26270",
    "title": "#26270 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch02-18-kinitiries-mixanes",
    "sourceOrder": 17,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι (1) ένα γράμμα από τη Στήλη Β θα περισσέψει.",
        "prompt": "Αντιστοίχιση κατηγορίας κατάταξης ΜΕΚ ως προς τη διάταξη των εμβόλων",
        "left": [
          {
            "id": "1",
            "text": "Μηχανή τύπου Boxer"
          },
          {
            "id": "2",
            "text": "Μηχανή με οριζόντιους κυλίνδρους σε σειρά"
          },
          {
            "id": "3",
            "text": "Μηχανή διάταξης V"
          },
          {
            "id": "4",
            "text": "Μηχανή με κατακόρυφους κυλίνδρους σε σειρά"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Σχήμα Α"
          },
          {
            "id": "b",
            "text": "Σχήμα Β"
          },
          {
            "id": "c",
            "text": "Σχήμα Γ"
          },
          {
            "id": "d",
            "text": "Σχήμα Δ"
          },
          {
            "id": "e",
            "text": "Σχήμα Ε"
          }
        ],
        "pairs": {
          "1": "e",
          "2": "c",
          "3": "d",
          "4": "b"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_26270_fig01.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_26270_fig02.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_26270_fig03.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_26270_fig04.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_26270_fig05.webp"
        ],
        "explain": "Η σωστή αντιστοίχιση σύμφωνα με το ΙΕΠ είναι: 1-ε (Μηχανή τύπου Boxer), 2-γ (Μηχανή με οριζόντιους κυλίνδρους σε σειρά), 3-δ (Μηχανή διάταξης V), 4-β (Μηχανή με κατακόρυφους κυλίνδρους σε σειρά). Περισσεύει το Σχήμα α (ακτινωτή μηχανή).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-02/c_michanes-esoterikis-kafsis-2_ch02_26270_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "Οι μηχανές εσωτερικής καύσης, ως προς τη χρήση τους, διακρίνονται σε μηχανές ξηράς, θαλάσσης και αέρος.",
        "answer": true,
        "explain": "Σωστό. Αυτή είναι η βασική διάκριση των ΜΕΚ ανάλογα με την εφαρμογή και τη χρήση τους."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Ως προς τα μέσα βελτίωσης της καύσης οι ΜΕΚ διακρίνονται σε φυσικής εισπνοής με την κάθοδο του εμβόλου και σε υπερπληρούμενες.",
        "answer": false,
        "explain": "Λάθος. Η διάκριση αυτή γίνεται ως προς τον τρόπο πλήρωσης των κυλίνδρων με φρέσκο αέρα (ατμοσφαιρικές ή υπερπληρούμενες/turbo) και όχι ως προς μέσα βελτίωσης καύσης."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Αν κατατάξουμε τις θερμικές μηχανές ως προς το θερμικό κύκλο, τότε κάποιες από αυτές θα ανήκουν στην κατηγορία των μηχανών σταθερής πίεσης (πετρελαιομηχανές ή μηχανές Diesel).",
        "answer": true,
        "explain": "Σωστό. Οι πετρελαιομηχανές λειτουργούν κατά προσέγγιση με τον κύκλο Diesel, γνωστό και ως κύκλο σταθερής πίεσης (ή ανάμικτου κύκλου)."
      }
    ]
  },
  {
    "id": "ch02-30603",
    "group": "ch02-18-kinitiries-mixanes",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #30603",
    "bankCode": "30603",
    "title": "#30603 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch02-18-kinitiries-mixanes",
    "sourceOrder": 18,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "Η ροπή εξαρτάται μόνο από το μέγεθος της δύναμης.",
        "answer": false,
        "explain": "Λάθος. Η ροπή εξαρτάται τόσο από το μέγεθος της δύναμης όσο και από τον μοχλοβραχίονα (την απόσταση από το σημείο περιστροφής)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "Η ροπή μετριέται σε $\\text{kg}\\cdot\\text{m}$.",
        "answer": false,
        "explain": "Λάθος. Στο Διεθνές Σύστημα Μονάδων (SI) η ροπή μετριέται σε Newton μέτρα ($\\text{Nm}$)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "Όταν σε ένα σώμα επενεργούν περισσότερες από μία ροπές το σώμα καταλαβαίνει τη συνισταμένη τους.",
        "answer": true,
        "explain": "Σωστό. Το αποτέλεσμα της δράσης πολλαπλών ροπών καθορίζεται από τη συνισταμένη ροπή."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "Η ισχύς είναι το φυσικό μέγεθος με το οποίο μπορούμε να συγκρίνουμε την απόδοση διαφόρων μηχανών.",
        "answer": true,
        "explain": "Σωστό. Η ισχύς εκφράζει το έργο που παράγεται ανά μονάδα χρόνου και αποτελεί βασικό κριτήριο σύγκρισης."
      },
      {
        "kind": "mc",
        "subq": "2.2",
        "subqPrompt": "Να αναφέρετε, ονομαστικά, τις τρεις κατηγορίες που διακρίνονται οι μηχανές εσωτερικής καύσης ως προς τους χρόνους λειτουργίας τους.",
        "prompt": "Ποιες είναι οι τρεις κατηγορίες ΜΕΚ ως προς τους χρόνους λειτουργίας τους;",
        "options": [
          {
            "id": "a",
            "text": "Δίχρονες, Τετράχρονες, Συνεχούς λειτουργίας (αεριοστρόβιλοι)"
          },
          {
            "id": "b",
            "text": "Αερόψυκτες, Υδρόψυκτες, Θερμοσίφωνες"
          },
          {
            "id": "c",
            "text": "Βενζινομηχανές, Πετρελαιομηχανές, Αεριομηχανές"
          },
          {
            "id": "d",
            "text": "Κατακόρυφες, Οριζόντιες, Διάταξης V"
          }
        ],
        "answer": "a",
        "explain": "Οι ΜΕΚ ως προς τους χρόνους λειτουργίας τους διακρίνονται σε δίχρονες, τετράχρονες και συνεχούς λειτουργίας (όπως οι αεριοστρόβιλοι)."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-03/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].groups.push(...
[
  {
    "id": "ch03-01-systimata-trofodosias",
    "chapter": "3",
    "title": "3.1 Συστήματα τροφοδοσίας ψεκασμού",
    "blurb": "Βασικά εξαρτήματα, κατάταξη και υποσυστήματα τροφοδοσίας ψεκασμού στις ΜΕΚ."
  },
  {
    "id": "ch03-02-vasikos-michanismos",
    "chapter": "3",
    "title": "3.2 Βασικός κινηματικός μηχανισμός και εξαρτήματα",
    "blurb": "Έμβολα, διωστήρες, σφόνδυλος και βασικά μέρη του κινητήρα."
  },
  {
    "id": "ch03-05-tetrachronoi-kinitires",
    "chapter": "3",
    "title": "3.5 Λειτουργία τετράχρονων κινητήρων",
    "blurb": "Κύκλος λειτουργίας και χαρακτηριστικά τετράχρονων Μ.Ε.Κ."
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-03/ch03-01-systimata-trofodosias.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch03-30028",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30028",
    "code": "Θέμα 2<sup>ο</sup> · #30028",
    "title": "#30028 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "match",
        "prompt": "Στο παρακάτω σχήμα απεικονίζεται ένα σύστημα πολλαπλού ψεκασμού. Να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Πολλαπλή εισαγωγής"
          },
          {
            "id": "b",
            "text": "Μπεκ"
          },
          {
            "id": "c",
            "text": "Αέρας"
          },
          {
            "id": "d",
            "text": "Καύσιμο"
          },
          {
            "id": "e",
            "text": "Πολλαπλή εξαγωγής"
          },
          {
            "id": "st",
            "text": "Πεταλούδα"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "c",
          "3": "st",
          "4": "a",
          "5": "b"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_30028_fig01.webp"
        ],
        "explain": "Η αντιστοίχιση των μερών του συστήματος πολλαπλού ψεκασμού είναι: 1-δ (Καύσιμο), 2-γ (Αέρας), 3-στ (Πεταλούδα), 4-α (Πολλαπλή εισαγωγής), 5-β (Μπεκ).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_30028_fig01.webp"
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε στο τετράδιό σας το γράμμα καθεμιάς από τις παρακάτω προτάσεις και δίπλα τις λέξεις που συμπληρώνουν σωστά την πρόταση. (Σημειώνεται ότι τρεις από τις λέξεις θα περισσέψουν).",
        "subq": "2.2",
        "subqPrompt": "Να συμπληρώσετε τα κενά στις προτάσεις α έως ε:",
        "textBefore": [
          "α) Εάν τα μπεκ έχουν τοποθετηθεί στην πολλαπλή εισαγωγή πριν από τη βαλβίδα εισαγωγής το σύστημα ψεκασμού ονομάζεται ",
          ".  β) Εάν τα μπεκ ψεκάζουν το καύσιμο απευθείας στο θάλαμο καύσης το σύστημα ψεκασμού ονομάζεται ",
          ".  γ) ",
          " είναι ο χώρος αποθήκευσης και επιστροφής της περίσσειας του καυσίμου.  δ) Τα συστήματα ψεκασμού μονού σημείου διαθέτουν ",
          " μπέκ.  ε) Το σύστημα ψεκασμού L-Jetronic ανήκει στα ",
          " ελεγχόμενα συστήματα ψεκασμού."
        ],
        "answers": [
          "έμμεσο",
          "άμεσο",
          "ρεζερβουάρ",
          "ένα",
          "ηλεκτρονικά"
        ],
        "bank": [
          "μηχανικά",
          "ένα",
          "άμεσο",
          "ρεζερβουάρ",
          "τρία",
          "ηλεκτρονικά",
          "διακλαδωτήρας",
          "έμμεσο"
        ],
        "explain": "α) έμμεσο, β) άμεσο, γ) ρεζερβουάρ, δ) ένα, ε) ηλεκτρονικά."
      }
    ]
  },
  {
    "id": "ch03-34607",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "match",
    "layout": "unified",
    "bankCode": "34607",
    "code": "Θέμα 2<sup>ο</sup> · #34607",
    "title": "#34607 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "match",
        "prompt": "Να γράψετε τους αριθμούς 1, 2, 3 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα (1) γράμμα από τη Στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1. Μηχανικά συστήματα ψεκασμού"
          },
          {
            "id": "2",
            "text": "2. Ηλεκτρονικά ελεγχόμενα συστήματα ψεκασμού"
          },
          {
            "id": "3",
            "text": "3. Συνδυασμένα συστήματα ανάφλεξης και ψεκασμού"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ορισμένες από τις επιμέρους λειτουργίες τους ελέγχονται μηχανικά, ενώ ορισμένες άλλες ελέγχονται ηλεκτρονικά, από την ηλεκτρονική μονάδα ελέγχου."
          },
          {
            "id": "b",
            "text": "Τα ολοένα και αυστηρότερα όρια εκπομπών ρύπων είχαν σαν αποτέλεσμα τη δημιουργία συστημάτων ψεκασμού και ανάφλεξης που ελέγχονται από μία κοινή κεντρική μονάδα ελέγχου και χρησιμοποιούν κοινούς αισθητήρες."
          },
          {
            "id": "c",
            "text": "Το καύσιμο ψεκάζεται από τους εγχυτήρες καυσίμου (μπεκ) που ελέγχονται μηχανικά και ανοίγουν όταν η πίεση που επικρατεί στη γραμμή διανομής του καυσίμου ξεπεράσει κάποιο όριο."
          },
          {
            "id": "d",
            "text": "Ο υπολογισμός της ποσότητας του καυσίμου που ψεκάζεται γίνεται από την ηλεκτρονική μονάδα ελέγχου (ΗΜΕ) με βάση τις πληροφορίες για τις συνθήκες λειτουργίας του κινητήρα που μεταβιβάζονται σ' αυτήν από τους αισθητήρες."
          }
        ],
        "pairs": {
          "1": "c",
          "2": "d",
          "3": "b"
        },
        "explain": "1-γ (Μηχανικά συστήματα), 2-δ (Ηλεκτρονικά ελεγχόμενα), 3-β (Συνδυασμένα συστήματα). Περισσεύει το α."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "Να αναφέρετε τέσσερα (4) πλεονεκτήματα των συστημάτων ψεκασμού καυσίμου έναντι των συμβατικών συστημάτων τροφοδοσίας.",
        "subq": "2.2",
        "options": [
          {
            "id": "a",
            "text": "Μείωση της κατανάλωσης, αύξηση ισχύος, καλύτερη ψυχρή εκκίνηση, ελάττωση ρύπων."
          },
          {
            "id": "b",
            "text": "Αύξηση κατανάλωσης, μείωση ισχύος, δυσκολία στην ψυχρή εκκίνηση."
          },
          {
            "id": "c",
            "text": "Απλούστερη κατασκευή χωρίς αισθητήρες και ηλεκτρονικά."
          },
          {
            "id": "d",
            "text": "Σταθερή ποσότητα καυσίμου ανεξάρτητα από τις στροφές."
          }
        ],
        "answer": "a",
        "explain": "Τα βασικά πλεονεκτήματα περιλαμβάνουν τη μείωση της κατανάλωσης, την αύξηση της απόδοσης ισχύος, την καλύτερη λειτουργία στην ψυχρή εκκίνηση, την ελάττωση των εκπεμπόμενων ρύπων και την καλύτερη απόκριση στην επιτάχυνση."
      }
    ]
  },
  {
    "id": "ch03-34608",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "34608",
    "code": "Θέμα 2<sup>ο</sup> · #34608",
    "title": "#34608 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 19,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Εάν τα μπεκ έχουν τοποθετηθεί στην πολλαπλή εισαγωγής πριν από τη βαλβίδα εισαγωγής, το σύστημα ψεκασμού ονομάζεται έμμεσο.",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "answer": true,
        "explain": "Σωστό. Στον έμμεσο ψεκασμό το καύσιμο εγχέεται στην πολλαπλή εισαγωγής πριν από τη βαλβίδα εισαγωγής."
      },
      {
        "kind": "tf",
        "prompt": "β. Ο συνεχής ψεκασμός ελέγχεται μέσω της θερμοκρασίας και ο διακοπτόμενος ελέγχεται με τη μεταβολή της χρονικής διάρκειας που τροφοδοτούνται τα μπεκ με ηλεκτρικό ρεύμα.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Ο συνεχής ψεκασμός χαρακτηρίζεται από συνεχή έγχυση καυσίμου με μεταβολή της πίεσης, ενώ ο διακοπτόμενος ελέγχεται με παλμούς διάρκειας τροφοδοσίας των μπεκ."
      },
      {
        "kind": "tf",
        "prompt": "γ. Τα συστήματα ψεκασμού ή έγχυσης καυσίμου (injection) αντικατέστησαν τα συστήματα τροφοδοσίας που είχαν μηχανικά ή ηλεκτρονικά καρμπυρατέρ.",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Τα σύγχρονα συστήματα ψεκασμού έχουν αντικαταστήσει τα καρμπυρατέρ λόγω ακρίβειας και ρύπων."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "α. Σε ποιες κατηγορίες ταξινομούνται τα μπεκ από πλευράς κατασκευής;",
        "subq": "2.2a",
        "options": [
          {
            "id": "a",
            "text": "Κάθετης ή πλευρικής τροφοδοσίας, με βαλβίδα ανοίγματος (βελόνας, κώνου, επίπεδο), υψηλής/χαμηλής αντίστασης, ολόσωμης ή διαιρούμενης δέσμης."
          },
          {
            "id": "b",
            "text": "Μόνο μηχανικά και υδραυλικά."
          },
          {
            "id": "c",
            "text": "Αποκλειστικά μονού ή πολλαπλού σημείου."
          },
          {
            "id": "d",
            "text": "Αερόψυκτα και υδρόψυκτα."
          }
        ],
        "answer": "a",
        "explain": "Τα μπεκ κατατάσσονται ανάλογα με τη θέση τροφοδοσίας, το σχήμα βαλβίδας ανοίγματος, την ηλεκτρική αντίσταση και το είδος της δέσμης ψεκασμού."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "β. Ποια κατασκευαστικά χαρακτηριστικά πρέπει να γνωρίζετε για να επιλέξετε ένα μπεκ;",
        "subq": "2.2b",
        "options": [
          {
            "id": "a",
            "text": "Την πίεση ψεκασμού, την ποσότητα του ψεκαζόμενου καυσίμου σε cm³/min και τη γωνία ψεκασμού."
          },
          {
            "id": "b",
            "text": "Το χρώμα και το βάρος του μπεκ."
          },
          {
            "id": "c",
            "text": "Τη χωρητικότητα του ρεζερβουάρ."
          },
          {
            "id": "d",
            "text": "Τον τύπο του κιβωτίου ταχυτήτων."
          }
        ],
        "answer": "a",
        "explain": "Για την επιλογή μπεκ απαιτούνται η πίεση ψεκασμού, η παροχή (cm³/min) και η γωνία ψεκασμού."
      }
    ]
  },
  {
    "id": "ch03-34616",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "34616",
    "code": "Θέμα 2<sup>ο</sup> · #34616",
    "title": "#34616 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "tf",
        "prompt": "Στους κινητήρες με άμεσο ψεκασμό: α. Η εισαγωγή του καυσίμου γίνεται απευθείας μέσα στον κύλινδρο με μεγάλη πίεση.",
        "subq": "2.1",
        "subqPrompt": "Στους κινητήρες με άμεσο ψεκασμό, χαρακτηρίστε τις προτάσεις ως Σωστό ή Λάθος:",
        "answer": true,
        "explain": "Σωστό. Στον άμεσο ψεκασμό το καύσιμο εγχέεται απευθείας στον κύλινδρο υπό υψηλή πίεση."
      },
      {
        "kind": "tf",
        "prompt": "Στους κινητήρες με άμεσο ψεκασμό: β. Η κατανάλωση είναι μεγαλύτερη σε σύγκριση με ένα κινητήρα που έχει έμμεσο ψεκασμό και αυτό συνεπάγεται χαμηλούς ρύπους στα καυσαέρια.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Ο άμεσος ψεκασμός προσφέρει γενικά μικρότερη κατανάλωση και καλύτερη απόδοση."
      },
      {
        "kind": "tf",
        "prompt": "Στους κινητήρες με άμεσο ψεκασμό: γ. Υπάρχει καλύτερη και άμεσότερη απόκριση στην επιτάχυνση και επιβράδυνση του κινητήρα.",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Η άμεση έγχυση βελτιώνει την απόκριση του κινητήρα."
      },
      {
        "kind": "tf",
        "prompt": "Στους κινητήρες με άμεσο ψεκασμό: δ. Αυξάνεται η απόδοση, γιατί μπορούμε να αυξήσουμε τη συμπίεση του κινητήρα έως 1:12.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Η σχέση συμπίεσης στους κινητήρες άμεσου ψεκασμού βενζίνης ή πετρελαίου φτάνει σε διαφορετικά υψηλότερα επίπεδα (ή η διατύπωση δεν αντιστοιχεί στα όρια του άμεσου βενζίνης)."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "Σε ποιες κατηγορίες ταξινομούνται οι αντλίες ανάλογα με την εσωτερική δομή τους;",
        "subq": "2.2",
        "options": [
          {
            "id": "a",
            "text": "Με οδοντωτούς τροχούς, με δίσκο και κυλίνδρους, με πτερύγια."
          },
          {
            "id": "b",
            "text": "Φυγόκεντρες και εμβολικές."
          },
          {
            "id": "c",
            "text": "Μηχανικές και ηλεκτρικές υψηλής πίεσης."
          },
          {
            "id": "d",
            "text": "Συνεχείς και διακοπτόμενες."
          }
        ],
        "answer": "a",
        "explain": "Ανάλογα με την εσωτερική δομή τους, οι αντλίες καυσίμου διακρίνονται σε αντλίες με οδοντωτούς τροχούς, με δίσκο και κυλίνδρους, και με πτερύγια."
      }
    ]
  },
  {
    "id": "ch03-34619",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "match",
    "layout": "unified",
    "bankCode": "34619",
    "code": "Θέμα 2<sup>ο</sup> · #34619",
    "title": "#34619 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "match",
        "prompt": "Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη Στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1. Φίλτρα"
          },
          {
            "id": "2",
            "text": "2. Ηλεκτρομαγνητικά μπεκ"
          },
          {
            "id": "3",
            "text": "3. Ρεζερβουάρ"
          },
          {
            "id": "4",
            "text": "4. Ρυθμιστής πίεσης"
          },
          {
            "id": "5",
            "text": "5. Ηλεκτρική αντλία βενζίνης"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Είναι ηλεκτρομαγνητικές βαλβίδες, που ανοιγο-κλείνουν ανάλογα με τα ηλεκτρικά σήματα που δέχονται από τον εγκέφαλο, στην περίπτωση του διακοπτόμενου ψεκασμού."
          },
          {
            "id": "b",
            "text": "Συγκρατούν τα ξένα σώματα που θα έφραξαν τα μπεκ."
          },
          {
            "id": "c",
            "text": "Είναι ο χώρος αποθήκευσης και επιστροφής της περίσσειας καυσίμου."
          },
          {
            "id": "d",
            "text": "Χρησιμοποιείται για τη μεταφορά του καυσίμου στο σύστημα."
          },
          {
            "id": "e",
            "text": "Εξασφαλίζει μια σταθερή διαφορά μεταξύ της πίεσης του καυσίμου και της πίεσης που επικρατεί στην πολλαπλή εισαγωγής."
          },
          {
            "id": "st",
            "text": "Χρησιμοποιούνται για την αναρρόφηση την κατάθλιψη και επιστροφή του καυσίμου."
          }
        ],
        "pairs": {
          "1": "b",
          "2": "a",
          "3": "c",
          "4": "e",
          "5": "d"
        },
        "explain": "1-β, 2-α, 3-γ, 4-ε, 5-δ. Περισσεύει το στ."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "α. Να αναφέρετε ποιο είναι το υλικό κατασκευής του φίλτρου καυσίμου.",
        "subq": "2.2a",
        "options": [
          {
            "id": "a",
            "text": "Ειδικό χαρτί με πόρους 10-15 μm, περιβαλλόμενο από χνουδωτό διάτρητο κύλινδρο και μεταλλικό κυλινδρικό δοχείο."
          },
          {
            "id": "b",
            "text": "Αλουμίνιο υψηλής αντοχής χωρίς εσωτερικό φίλτρο."
          },
          {
            "id": "c",
            "text": "Πλαστικό πολυμερές υλικό μιας χρήσης."
          },
          {
            "id": "d",
            "text": "Πλεγμένο σύρμα χαλκού."
          }
        ],
        "answer": "a",
        "explain": "Το φίλτρο καυσίμου αποτελείται από ειδικό χαρτί με πόρους τάξης μεγέθους 10-15 μm μέσα σε διάτρητο κύλινδρο και μεταλλικό περίβλημα."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "β. Σε ποιο σημείο τοποθετείται το φίλτρο καυσίμου;",
        "subq": "2.2b",
        "options": [
          {
            "id": "a",
            "text": "Κάτω από το όχημα κοντά στο ρεζερβουάρ ή στο χώρο του κινητήρα."
          },
          {
            "id": "b",
            "text": "Μέσα στο θάλαμο καύσης."
          },
          {
            "id": "c",
            "text": "Επάνω στο τιμόνι."
          },
          {
            "id": "d",
            "text": "Μέσα στο δοχείο ψυκτικού υγρού."
          }
        ],
        "answer": "a",
        "explain": "Το φίλτρο τοποθετείται κάτω από το αμάξωμα κοντά στο ρεζερβουάρ ή στο χώρο του κινητήρα."
      }
    ]
  },
  {
    "id": "ch03-34631",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "34631",
    "code": "Θέμα 4<sup>ο</sup> · #34631",
    "title": "#34631 — Θέμα 4$^{ο}$ (4.1–4.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "4.1 Εργάζεστε ως βοηθός μηχανικού σε ένα συνεργείο και διαπιστώνεται βλάβη στο υποσύστημα τροφοδοσίας ψεκασμού καυσίμου. Να αναφέρετε τα πέντε (5) βασικά εξαρτήματα του υποσυστήματος τροφοδοσίας ψεκασμού καυσίμου που θα αναζητήσετε τη βλάβη.",
        "subq": "4.1",
        "options": [
          {
            "id": "a",
            "text": "Ρεζερβουάρ, Αντλία καυσίμου, Φίλτρο καυσίμου, Ρυθμιστής πίεσης, Μπεκ."
          },
          {
            "id": "b",
            "text": "Καρμπυρατέρ, Πολλαπλή, Αντλία λαδιού, Μπουζί, Δυναμό."
          },
          {
            "id": "c",
            "text": "Ψυγείο, Θερμοστάτης, Αντλία νερού, Βαλβίδες, Σφόνδυλος."
          },
          {
            "id": "d",
            "text": "Εκκεντροφόρος, Στροφαλοφόρος, Μπιέλα, Έμβολο, Κάρτερ."
          }
        ],
        "answer": "a",
        "explain": "Η ροή και τα βασικά εξαρτήματα του συστήματος τροφοδοσίας είναι: Ρεζερβουάρ, Αντλία καυσίμου, Φίλτρο καυσίμου, Ρυθμιστής πίεσης, Μπεκ."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "4.2 Ποιος ο σκοπός του συστήματος τροφοδοσίας καυσίμου;",
        "subq": "4.2",
        "options": [
          {
            "id": "a",
            "text": "Η μεταφορά του καυσίμου από το ρεζερβουάρ προς τα μπεκ σε όλες τις φάσεις λειτουργίας του κινητήρα, καθώς και η επιστροφή από τα μπεκ προς το ρεζερβουάρ της ποσότητας που δεν ψεκάζεται."
          },
          {
            "id": "b",
            "text": "Η ψύξη του κινητήρα με καύσιμο."
          },
          {
            "id": "c",
            "text": "Η λίπανση των κυλίνδρων."
          },
          {
            "id": "d",
            "text": "Η παραγωγή ηλεκτρικής ενέργειας."
          }
        ],
        "answer": "a",
        "explain": "Σκοπός του συστήματος είναι η μεταφορά καυσίμου από το ρεζερβουάρ στα μπεκ και η επιστροφή της περίσσειας."
      }
    ]
  },
  {
    "id": "ch03-34644",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "match",
    "layout": "unified",
    "bankCode": "34644",
    "code": "Θέμα 2<sup>ο</sup> · #34644",
    "title": "#34644 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "match",
        "prompt": "Στο παρακάτω σχήμα απεικονίζεται ένα σύστημα μονού ψεκασμού. Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Πολλαπλή εισαγωγής"
          },
          {
            "id": "b",
            "text": "Μπεκ"
          },
          {
            "id": "c",
            "text": "Αέρας"
          },
          {
            "id": "d",
            "text": "Καύσιμο"
          },
          {
            "id": "e",
            "text": "Κινητήρας"
          },
          {
            "id": "st",
            "text": "Πεταλούδα"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "c",
          "3": "st",
          "4": "a",
          "5": "b"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_34644_fig01.webp"
        ],
        "explain": "1-δ (Καύσιμο), 2-γ (Αέρας), 3-στ (Πεταλούδα), 4-α (Πολλαπλή εισαγωγής), 5-β (Μπεκ). Περισσεύει το ε (κινητήρας).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_34644_fig01.webp"
      },
      {
        "kind": "tf",
        "prompt": "α. Σε κάθε ρεζερβουάρ υπάρχει μια βαλβίδα αντεπιστροφής που είναι μια μηχανική βαλβίδα και επιτρέπει τη ροή του καυσίμου από τη δεξαμενή προς την αντλία και αντίστροφα.",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "answer": false,
        "explain": "Λάθος. Η βαλβίδα αντεπιστροφής επιτρέπει τη ροή προς μία κατεύθυνση."
      },
      {
        "kind": "tf",
        "prompt": "β. Οι αυτορρυθμιζόμενες βαλβίδες έχουν ένα διπλό ομόκεντρο υδραυλικό ωστηρίο, το οποίο συνδέεται με το κύκλωμα του λαδιού.",
        "subq": "2.2",
        "answer": true,
        "explain": "Σωστό. Τα υδραυλικά ωστηρίο ρυθμίζουν αυτόματα το διάκενο των βαλβίδων."
      },
      {
        "kind": "tf",
        "prompt": "γ. Στο κύκλωμα καυσίμου υπάρχει ένας αποσβεστήρας στον αγωγό εισαγωγής, για τον περιορισμό του θορύβου που δημιουργείται από το άνοιγμα και κλείσιμο των μπεκ και του ρυθμιστή της πίεσης.",
        "subq": "2.2",
        "answer": false,
        "explain": "Λάθος. Ο αποσβεστήρας τοποθετείται στο κύκλωμα καυσίμου και όχι στον αγωγό εισαγωγής αέρα."
      },
      {
        "kind": "tf",
        "prompt": "δ. Η αντλία γραμμής τοποθετείται έξω από τη δεξαμενή πριν από το φίλτρο καυσίμου και επάνω στο σασί του αυτοκινήτου.",
        "subq": "2.2",
        "answer": true,
        "explain": "Σωστό. Οι εξωτερικές αντλίες γραμμής τοποθετούνται στο πλαίσιο (σασί) του οχήματος."
      },
      {
        "kind": "tf",
        "prompt": "ε. Οι σωληνώσεις του καυσίμου χρησιμοποιούνται για την αναρρόφηση, την κατάθλιψη και επιστροφή του καυσίμου. Είναι ανθεκτικές σε υψηλές πιέσεις και θερμοκρασίες λειτουργίας.",
        "subq": "2.2",
        "answer": true,
        "explain": "Σωστό. Οι σωληνώσεις καυσίμου αντέχουν σε υψηλές πιέσεις και θερμοκρασίες."
      }
    ]
  },
  {
    "id": "ch03-34974",
    "group": "ch03-01-systimata-trofodosias",
    "kind": "blank",
    "layout": "unified",
    "bankCode": "34974",
    "code": "Θέμα 2<sup>ο</sup> · #34974",
    "title": "#34974 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-01-systimata-trofodosias",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό κάθε μία από τις παρακάτω προτάσεις και, δίπλα, μία από τις λέξεις που συμπληρώνει σωστά την πρόταση. (Σημειώνεται ότι τρείς (3) από τις λέξεις θα περισσέψουν).",
        "subq": "2.1",
        "subqPrompt": "«Ο __________ (1) ψεκασμός γίνεται σε δύο φάσεις: κατά την __________ (2) και κατά τη __________ (3). Ανάλογα με το αν απαιτείται οικονομία ή υψηλή απόδοση, αλλάζει ο __________ (4) του ψεκασμού. Για οικονομία η βενζίνη ψεκάζεται __________ (5) στο θάλαμο καύσης και σχηματίζεται ένα στρωματοποιημένο μείγμα.»",
        "textBefore": [
          "«Ο ",
          " (1) ψεκασμός γίνεται σε δύο φάσεις: κατά την ",
          " (2) και κατά τη ",
          " (3). Ανάλογα με το αν απαιτείται οικονομία ή υψηλή απόδοση, αλλάζει ο ",
          " (4) του ψεκασμού. Για οικονομία η βενζίνη ψεκάζεται ",
          " (5) στο θάλαμο καύσης και σχηματίζεται ένα στρωματοποιημένο μείγμα.»"
        ],
        "answers": [
          "άμεσος",
          "εισαγωγή",
          "συμπίεση",
          "χρονισμός",
          "καθυστερημένα"
        ],
        "bank": [
          "άμεσος",
          "καθυστερημένα",
          "εισαγωγή",
          "συμπίεση",
          "πρόωρα",
          "εξαγωγή",
          "χρονισμός",
          "έμμεσος"
        ],
        "explain": "1: άμεσος, 2: εισαγωγή, 3: συμπίεση, 4: χρονισμός, 5: καθυστερημένα. (Περισσεύουν: πρόωρα, εξαγωγή, έμμεσος)."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "prompt": "Να αναφέρετε δυο (2) λόγους για τους οποίους χρησιμοποιούνται οι βαλβίδες ασφαλείας στο ρεζερβουάρ ενός οχήματος.",
        "subq": "2.2",
        "options": [
          {
            "id": "a",
            "text": "Για την εκτόνωση της υπερβολικής πίεσης, την αποφυγή διαρροής καυσίμου σε ανατροπή και την αποφυγή διαρροής σε ατύχημα ή κίνηση σε μεγάλες κλίσεις."
          },
          {
            "id": "b",
            "text": "Για την αύξηση της ταχύτητας του οχήματος."
          },
          {
            "id": "c",
            "text": "Για τη θέρμανση του καυσίμου τον χειμώνα."
          },
          {
            "id": "d",
            "text": "Για τον καθαρισμό των καυσαερίων."
          }
        ],
        "answer": "a",
        "explain": "Οι βαλβίδες ασφαλείας αποτρέπουν την υπερπίεση και τις διαρροές καυσίμου σε ανατροπή, ατύχημα ή κλίσεις."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-03/ch03-02-vasikos-michanismos.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch03-23739",
    "group": "ch03-02-vasikos-michanismos",
    "kind": "match",
    "layout": "unified",
    "bankCode": "23739",
    "code": "Θέμα 2<sup>ο</sup> · #23739",
    "title": "#23739 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-02-vasikos-michanismos",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "match",
        "prompt": "Με βάση τη σχηματική παράσταση που απεικονίζεται στο παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Κουζινέτα"
          },
          {
            "id": "b",
            "text": "Αξονικοί τριβείς (Θρος)"
          },
          {
            "id": "c",
            "text": "Μεταλλική φλάντζα"
          },
          {
            "id": "d",
            "text": "Οδηγός"
          },
          {
            "id": "e",
            "text": "Βολάν"
          },
          {
            "id": "st",
            "text": "Στρόφαλος"
          }
        ],
        "pairs": {
          "1": "st",
          "2": "e",
          "3": "c",
          "4": "b",
          "5": "a"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_23739_fig01.webp"
        ],
        "explain": "1-στ (Στρόφαλος), 2-ε (Βολάν), 3-γ (Μεταλλική φλάντζα), 4-β (Αξονικοί τριβείς/Θρος), 5-α (Κουζινέτα). Περισσεύει το δ.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_23739_fig01.webp"
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο. (Σημειώνεται ότι πέντε από τις λέξεις θα περισσέψουν)",
        "subq": "2.2",
        "subqPrompt": "«Πάνω στο __________________ (1) και συγκεκριμένα στην περιφέρειά του, βρίσκεται η οδοντωτή στεφάνη στην οποία εμπλέκεται το γρανάζι της __________________ (2). Η εξωτερική επιφάνεια του σφονδύλου είναι __________________ (3), γιατί σ’ αυτή στηρίζεται ο __________________ (4) και μεταφέρεται η __________________ (5) στο κιβώτιο ταχυτήτων.»",
        "textBefore": [
          "«Πάνω στο ",
          " (1) και συγκεκριμένα στην περιφέρειά του, βρίσκεται η οδοντωτή στεφάνη στην οποία εμπλέκεται το γρανάζι της ",
          " (2). Η εξωτερική επιφάνεια του σφονδύλου είναι ",
          " (3), γιατί σ’ αυτή στηρίζεται ο ",
          " (4) και μεταφέρεται η ",
          " (5) στο κιβώτιο ταχυτήτων.»"
        ],
        "answers": [
          "βολάν",
          "μίζας",
          "λεία",
          "συμπλέκτης",
          "κίνηση"
        ],
        "bank": [
          "συμπλέκτης",
          "εκκεντροφόρος",
          "τραχιά",
          "λεία",
          "στρόφαλο",
          "βολάν",
          "επιτάχυνσης",
          "κίνηση",
          "συμπίεση",
          "μίζας"
        ],
        "explain": "1: βολάν, 2: μίζας, 3: λεία, 4: συμπλέκτης, 5: κίνηση."
      }
    ]
  },
  {
    "id": "ch03-23740",
    "group": "ch03-02-vasikos-michanismos",
    "kind": "match",
    "layout": "unified",
    "bankCode": "23740",
    "code": "Θέμα 2<sup>ο</sup> · #23740",
    "title": "#23740 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-02-vasikos-michanismos",
    "sourceOrder": 10,
    "items": [
      {
        "kind": "match",
        "prompt": "Στο παρακάτω σχήμα απεικονίζονται τα τμήματα του εμβόλου. Να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ζώνη ελατηρίων"
          },
          {
            "id": "b",
            "text": "Ποδιά εμβόλου"
          },
          {
            "id": "c",
            "text": "Κεφαλή εμβόλου"
          },
          {
            "id": "d",
            "text": "Ομφαλός"
          },
          {
            "id": "e",
            "text": "Ελατήρια"
          },
          {
            "id": "st",
            "text": "Παρέκκλιση εμβόλου"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "st",
          "4": "d",
          "5": "b"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_23740_fig01.webp"
        ],
        "explain": "1-γ (Κεφαλή εμβόλου), 2-α (Ζώνη ελατηρίων), 3-στ (Παρέκκλιση εμβόλου), 4-δ (Ομφαλός), 5-β (Ποδιά εμβόλου). Περισσεύει το ε.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_23740_fig01.webp"
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο. (Σημειώνεται ότι τέσσερις από τις λέξεις θα περισσέψουν)",
        "subq": "2.2",
        "subqPrompt": "«Τα __________________(1) πρέπει να εφαρμόζουν στεγανά στο __________________(2) του κυλίνδρου, ώστε να μην υπάρχει περίπτωση να διαφύγουν τα αέρια της καύσης προς το __________________(3) ή αντίστροφα το λάδι λίπανσης να περάσει στο θάλαμο καύσης. Για το σκοπό αυτό, στις αυλακώσεις - οδηγούς του εμβόλου εφαρμόζονται ειδικά __________________(4) που εξασφαλίζουν πλήρη __________________(5) στο χώρο του κυλίνδρου.»",
        "textBefore": [
          "«Τα ",
          " (1) πρέπει να εφαρμόζουν στεγανά στο ",
          " (2) του κυλίνδρου, ώστε να μην υπάρχει περίπτωση να διαφύγουν τα αέρια της καύσης προς το ",
          " (3) ή αντίστροφα το λάδι λίπανσης να περάσει στο θάλαμο καύσης. Για το σκοπό αυτό, στις αυλακώσεις - οδηγούς του εμβόλου εφαρμόζονται ειδικά ",
          " (4) που εξασφαλίζουν πλήρη ",
          " (5) στο χώρο του κυλίνδρου.»"
        ],
        "answers": [
          "έμβολα",
          "εσωτερικό",
          "στροφαλοθάλαμο",
          "ελατήρια",
          "στεγανότητα"
        ],
        "bank": [
          "στεγανότητα",
          "έδρανα",
          "εσωτερικό",
          "εξωτερικό",
          "στροφαλοθάλαμο",
          "ελατήρια",
          "καύση",
          "έμβολα",
          "κάρτερ"
        ],
        "explain": "1: έμβολα, 2: εσωτερικό, 3: στροφαλοθάλαμο, 4: ελατήρια, 5: στεγανότητα."
      }
    ]
  },
  {
    "id": "ch03-26278",
    "group": "ch03-02-vasikos-michanismos",
    "kind": "match",
    "layout": "unified",
    "bankCode": "26278",
    "code": "Θέμα 2<sup>ο</sup> · #26278",
    "title": "#26278 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-02-vasikos-michanismos",
    "sourceOrder": 11,
    "items": [
      {
        "kind": "match",
        "prompt": "Στο παρακάτω σχήμα απεικονίζεται ο διωστήρας ενός εμβόλου. Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της στήλης Β που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα γράμμα από τη Στήλη Β θα περισσέψει.",
        "subq": "2.1",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ο κορμός του διωστήρα"
          },
          {
            "id": "b",
            "text": "Το «πόδι» του διωστήρα"
          },
          {
            "id": "c",
            "text": "Ο τριβέας του πείρου"
          },
          {
            "id": "d",
            "text": "Η κεφαλή του διωστήρα"
          },
          {
            "id": "e",
            "text": "Ο τριβέας του στροφαλοφόρου"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "c",
          "3": "a",
          "4": "e"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_26278_fig01.webp"
        ],
        "explain": "1-β (Πόδι διωστήρα), 2-γ (Τριβέας πείρου), 3-α (Κορμός διωστήρα), 4-ε (Τριβέας στροφαλοφόρου). Περισσεύει το δ (κεφαλή).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-03/c_michanes-esoterikis-kafsis-2_ch03_26278_fig01.webp"
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό κάθε μίας από τις παρακάτω προτάσεις και, δίπλα, μία από τις λέξεις που συμπληρώνει σωστά την πρόταση. Σημειώνεται ότι 3 από τις λέξεις θα περισσέψουν.",
        "subq": "2.2",
        "subqPrompt": "«Ο προορισμός της μπιέλας είναι να μεταφέρει την _________ (1) ενέργεια του εμβόλου στο στροφαλοφόρο άξονα, αλλά και αντίστροφα, να μεταφέρει δηλ. τη _________ (2) που χρειάζεται το έμβολο από το στροφαλοφόρο, ιδιαίτερα τη φάση της _________ (3) και λιγότερο κατά τη φάση της εξαγωγής και της εισαγωγής.»",
        "textBefore": [
          "«Ο προορισμός της μπιέλας είναι να μεταφέρει την ",
          " (1) ενέργεια του εμβόλου στο στροφαλοφόρο άξονα, αλλά και αντίστροφα, να μεταφέρει δηλ. τη ",
          " (2) που χρειάζεται το έμβολο από το στροφαλοφόρο, ιδιαίτερα τη φάση της ",
          " (3) και λιγότερο κατά τη φάση της εξαγωγής και της εισαγωγής.»"
        ],
        "answers": [
          "κινητική",
          "δύναμη",
          "συμπίεσης"
        ],
        "bank": [
          "ροπή",
          "δυναμική",
          "συμπίεσης",
          "κινητική",
          "δύναμη",
          "εκτόνωσης"
        ],
        "explain": "1: κινητική, 2: δύναμη, 3: συμπίεσης."
      }
    ]
  },
  {
    "id": "ch03-30607",
    "group": "ch03-02-vasikos-michanismos",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "30607",
    "code": "Θέμα 2<sup>ο</sup> · #30607",
    "title": "#30607 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-02-vasikos-michanismos",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Οι βενζινομηχανές ή μηχανές Otto θεωρούνται ως προς τον θερμικό τους κύκλο μηχανές έκρηξης ή σταθερού όγκου.",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "answer": true,
        "explain": "Σωστό. Ο θερμοδυναμικός κύκλος Otto θεωρείται ιδανικά κύκλος σταθερού όγκου (έκρηξης)."
      },
      {
        "kind": "tf",
        "prompt": "β. Οι ταχύστροφες πετρελαιομηχανές εργάζονται σε αριθμό στροφών 3500-7000 rpm.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Οι πετρελαιομηχανές εργάζονται γενικά σε χαμηλότερο εύρος στροφών."
      },
      {
        "kind": "tf",
        "prompt": "γ. Ως προς τους χρόνους λειτουργίας τους οι ΜΕΚ διακρίνονται σε δίχρονες και τετράχρονες.",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Ως προς τους χρόνους ανά κύκλο διακρίνονται σε δίχρονες και τετράχρονες."
      },
      {
        "kind": "tf",
        "prompt": "δ. Οι ΜΕΚ ως προς τον τρόπο ψύξης κατατάσσονται σε αερόψυκτες και σε υδρόψυκτες.",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Η κατάταξη ως προς την ψύξη περιλαμβάνει αερόψυκτους και υδρόψυκτους κινητήρες."
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό για κάθε μία από τις προτάσεις και δίπλα τη λέξη που συμπληρώνει σωστά την πρόταση. Σημειώνεται ότι τρεις (3) από τις λέξεις θα περισσέψουν.",
        "subq": "2.2",
        "subqPrompt": "«Τα ______________(1) πρέπει να εφαρμόζουν στεγανά στο εσωτερικό του κυλίνδρου, ώστε να μην υπάρχει περίπτωση να διαφύγουν τα αέρια της ______________(2) προς το στροφαλοθάλαμο ή αντίστροφα το λάδι ______________(3) να περάσει στο θάλαμο καύσης.»",
        "textBefore": [
          "«Τα ",
          " (1) πρέπει να εφαρμόζουν στεγανά στο εσωτερικό του κυλίνδρου, ώστε να μην υπάρχει περίπτωση να διαφύγουν τα αέρια της ",
          " (2) προς το στροφαλοθάλαμο ή αντίστροφα το λάδι ",
          " (3) να περάσει στο θάλαμο καύσης.»"
        ],
        "answers": [
          "έμβολα",
          "καύσης",
          "λίπανσης"
        ],
        "bank": [
          "αντίβαρα",
          "λίπανσης",
          "έμβολα",
          "καύσης",
          "συμπίεσης",
          "καυσαερίου"
        ],
        "explain": "1: έμβολα, 2: καύσης, 3: λίπανσης."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-03/ch03-05-tetrachronoi-kinitires.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch03-23723",
    "group": "ch03-05-tetrachronoi-kinitires",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "23723",
    "code": "Θέμα 2<sup>ο</sup> · #23723",
    "title": "#23723 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-05-tetrachronoi-kinitires",
    "sourceOrder": 8,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Η μετατροπή της χημικής ενέργειας που περιέχεται στο καύσιμο σε θερμική και μέρους της θερμικής σε μηχανική, στις Μηχανές Εσωτερικής Καύσης γίνεται μέσα στον ίδιο χώρο του κινητήρα.",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "answer": true,
        "explain": "Σωστό. Στις ΜΕΚ η καύση και η παραγωγή έργου γίνονται εσωτερικά στον κύλινδρο."
      },
      {
        "kind": "tf",
        "prompt": "β. Η φάση κατά την οποία αυξάνει τον όγκο του αερίου μέσα σε έναν κύλινδρο ονομάζεται συμπίεση.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Κατά τη συμπίεση ο όγκος του αερίου μειώνεται."
      },
      {
        "kind": "tf",
        "prompt": "γ. Το σχήμα του σώματος των κυλίνδρων εξαρτάται μόνο από τη διάταξη των κυλίνδρων.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Εξαρτάται από πολλούς παράγοντες (τύπο ψύξης, διαδρομή, διάμετρο κ.ά.)."
      },
      {
        "kind": "tf",
        "prompt": "δ. Η μπιέλα στη φάση της εισαγωγής καταπονείται σε εφελκυσμό.",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Κατά την εισαγωγή το έμβολο τραβιέται προς τα κάτω από το στρόφαλο, ασκώντας εφελκυσμό στη μπιέλα."
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό κάθε ενός κενού από το παρακάτω κείμενο και δίπλα τη λέξη που συμπληρώνει σωστά την αντίστοιχη πρόταση. Σημειώνεται ότι 3 από τις λέξεις θα περισσέψουν.",
        "subq": "2.2",
        "subqPrompt": "«Η φάση, κατά την οποία το έμβολο __________ (1) τον όγκο του αερίου μέσα στον κύλινδρο, ονομάζεται ____________ (2) και είναι η φάση εκείνη κατά την οποία ______________ (3) η πίεση και παράγεται έργο».",
        "textBefore": [
          "«Η φάση, κατά την οποία το έμβολο ",
          " (1) τον όγκο του αερίου μέσα στον κύλινδρο, ονομάζεται ",
          " (2) και είναι η φάση εκείνη κατά την οποία ",
          " (3) η πίεση και παράγεται έργο»."
        ],
        "answers": [
          "αυξάνει",
          "εκτόνωση",
          "μειώνεται"
        ],
        "bank": [
          "μειώνει",
          "αυξάνεται",
          "εισαγωγή",
          "μειώνεται",
          "εκτόνωση",
          "αυξάνει"
        ],
        "explain": "1: αυξάνει, 2: εκτόνωση, 3: μειώνεται. (Περισσεύουν: μειώνει, αυξάνεται, εισαγωγή)."
      }
    ]
  },
  {
    "id": "ch03-30609",
    "group": "ch03-05-tetrachronoi-kinitires",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "30609",
    "code": "Θέμα 2<sup>ο</sup> · #30609",
    "title": "#30609 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch03-05-tetrachronoi-kinitires",
    "sourceOrder": 13,
    "items": [
      {
        "kind": "tf",
        "prompt": "α. Ένας κινητήρας που εκτελεί ένα πλήρη κύκλο λειτουργίας του σε δύο περιστροφές του στροφαλοφόρου άξονα του λέγεται δίχρονος κινητήρας.",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "answer": false,
        "explain": "Λάθος. Ο τετράχρονος κινητήρας εκτελεί πλήρη κύκλο σε δύο περιστροφές του στροφαλοφόρου (ο δίχρονος σε μία)."
      },
      {
        "kind": "tf",
        "prompt": "β. Οι ταχύστροφες πετρελαιομηχανές εργάζονται σε αριθμό στροφών 3500-7000 rpm.",
        "subq": "2.1",
        "answer": false,
        "explain": "Λάθος. Οι πετρελαιομηχανές λειτουργούν σε χαμηλότερο εύρος στροφών."
      },
      {
        "kind": "tf",
        "prompt": "γ. Ο χρόνος της εισαγωγής αποτελεί την πρώτη φάση του κύκλου λειτουργίας των τετράχρονων Μ.Ε.Κ. και αρχίζει, όταν το έμβολο βρίσκεται στο ανώτερο σημείο της διαδρομής του, δηλ. στο «Άνω Νεκρό Σημείο» (Α.Ν.Σ.).",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Η εισαγωγή ξεκινά από το ΑΝΣ προς τα κάτω."
      },
      {
        "kind": "tf",
        "prompt": "δ. Κατά τη φάση της συμπίεσης του κύκλου λειτουργίας των τετράχρονων Μ.Ε.Κ το έμβολο κινείται από το Κ.Ν.Σ. προς τα επάνω, ενώ οι βαλβίδες εισαγωγής και εξαγωγής είναι κλειστές.",
        "subq": "2.1",
        "answer": true,
        "explain": "Σωστό. Στη συμπίεση το έμβολο ανεβαίνει με κλειστές βαλβίδες."
      },
      {
        "kind": "blank",
        "prompt": "Να γράψετε τον αριθμό για κάθε μία από τις προτάσεις και δίπλα τη λέξη που συμπληρώνει σωστά την πρόταση. Σημειώνεται ότι τρεις (3) από τις λέξεις θα περισσέψουν.",
        "subq": "2.2",
        "subqPrompt": "«Ο σφόνδυλος ή το βολάν είναι ένας αρκετά _____________ (1) μεταλλικός δίσκος, που αποθηκεύει _____________(2) από τον ωφέλιμο χρόνο της εκτόνωσης και στη συνέχεια την αποδεσμεύει, για να πραγματοποιηθούν οι υπόλοιποι τρεις χρόνοι. Όσους _____________(3) κυλίνδρους έχει ένας κινητήρας, τόσο μικρότερο βάρος έχει το βολάν.»",
        "textBefore": [
          "«Ο σφόνδυλος ή το βολάν είναι ένας αρκετά ",
          " (1) μεταλλικός δίσκος, που αποθηκεύει ",
          " (2) από τον ωφέλιμο χρόνο της εκτόνωσης και στη συνέχεια την αποδεσμεύει, για να πραγματοποιηθούν οι υπόλοιποι τρεις χρόνοι. Όσους ",
          " (3) κυλίνδρους έχει ένας κινητήρας, τόσο μικρότερο βάρος έχει το βολάν.»"
        ],
        "answers": [
          "βαρύς",
          "ενέργεια",
          "περισσότερους"
        ],
        "bank": [
          "ενέργεια",
          "ελαφρύς",
          "βαρύς",
          "λιγότερους",
          "καύσιμο",
          "περισσότερους"
        ],
        "explain": "1: βαρύς, 2: ενέργεια, 3: περισσότερους."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].groups.push(...
[
  {
    "id": "ch04-01-spiroeides-diagramma",
    "chapter": "4",
    "title": "4.1 Σπειροειδές διάγραμμα πραγματικής λειτουργίας τετράχρονου βενζινοκινητήρα",
    "blurb": "Σπειροειδές διάγραμμα λειτουργίας και προπορεία (αβάνς)."
  },
  {
    "id": "ch04-02-kylindrokefali",
    "chapter": "4",
    "title": "4.2 Κυλινδροκεφαλή",
    "blurb": "Κατασκευή, μέρη και υλικά κυλινδροκεφαλής."
  },
  {
    "id": "ch04-03-merh-kinitira",
    "chapter": "4",
    "title": "4.3 Κύλινδρος – έμβολο – ελατήρια – πείρος – διωστήρας – στροφαλοφόρος – σφόνδυλος",
    "blurb": "Μέρη του κινητήρα, έμβολο, ελατήρια, διωστήρας, σφόνδυλος και συγχρονισμός."
  },
  {
    "id": "ch04-05-ekkentroforos-valvides",
    "chapter": "4",
    "title": "4.5 Εκκεντροφόρος άξονας – βαλβίδες",
    "blurb": "Σύστημα διανομής, εκκεντροφόρος, βαλβίδες και τρόποι μετάδοσης κίνησης."
  },
  {
    "id": "ch04-06-kylindrismos-sympiesi",
    "chapter": "4",
    "title": "4.6 Κυλινδρισμός – σχέση συμπίεσης – πίεση συμπίεσης",
    "blurb": "Υπολογισμοί κυλινδρισμού, σχέσης συμπίεσης, όγκου θαλάμου καύσης και διαδρομής εμβόλου."
  },
  {
    "id": "ch04-07-paraskevi-kafsimou",
    "chapter": "4",
    "title": "4.7 Σύστημα παρασκευής καυσίμου μίγματος",
    "blurb": "Συστήματα ψεκασμού, στοιχειομετρικό μίγμα και λόγος λ."
  },
  {
    "id": "ch04-08-systima-anafleksis",
    "chapter": "4",
    "title": "4.8 Σύστημα ανάφλεξης",
    "blurb": "Σύστημα ανάφλεξης, μπουζί και κρουστική καύση."
  },
  {
    "id": "ch04-09-systima-lipansis",
    "chapter": "4",
    "title": "4.9 Σύστημα λίπανσης",
    "blurb": "Αντλία λαδιού και λίπανση κινητήρα."
  },
  {
    "id": "ch04-10-systima-psyxis",
    "chapter": "4",
    "title": "4.10 Σύστημα ψύξης Μ.Ε.Κ.",
    "blurb": "Σύστημα ψύξης, αντλία νερού και θερμοστάτης."
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-01-spiroeides-diagramma.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-30596",
    "group": "ch04-01-spiroeides-diagramma",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30596",
    "code": "Θέμα 2<sup>ο</sup> · #30596",
    "title": "#30596 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-01-spiroeides-diagramma",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα που απεικονίζει το σπειροειδές διάγραμμα λειτουργίας τετράχρονου βενζινοκινητήρα, να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τα γράμματα της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "1. Τόξο ΑΒ"
          },
          {
            "id": "2",
            "text": "2. Τόξο ΑΔ"
          },
          {
            "id": "3",
            "text": "3. Τόξο ΒΓ"
          },
          {
            "id": "4",
            "text": "4. Τόξο ΓΔ"
          },
          {
            "id": "5",
            "text": "5. Τόξο ΕΖ"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Επικάλυψη (overlap)"
          },
          {
            "id": "b",
            "text": "β. Εξαγωγή"
          },
          {
            "id": "c",
            "text": "γ. Εκτόνωση"
          },
          {
            "id": "d",
            "text": "δ. Εισαγωγή"
          },
          {
            "id": "e",
            "text": "ε. Συμπίεση"
          },
          {
            "id": "στ",
            "text": "στ. Καύση"
          }
        ],
        "pairs": {
          "1": "δ",
          "2": "α",
          "3": "ε",
          "4": "στ",
          "5": "β"
        },
        "explain": "Η σωστή αντιστοίχιση από το σπειροειδές διάγραμμα είναι: 1→δ (Εισαγωγή), 2→α (Επικάλυψη), 3→ε (Συμπίεση), 4→στ (Καύση), 5→β (Εξαγωγή).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30596_fig01.webp"
      },
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "2.2",
        "prompt": "Να γράψετε τον ορισμό της προπορείας (αβάνς) για ένα τετράχρονο βενζινοκινητήρα.",
        "options": [
          {
            "id": "a",
            "text": "Στους τετράχρονους βενζινοκινητήρες ο σπινθήρας δίνεται νωρίτερα, ώστε, μόλις το έμβολο φθάσει στο Α.Ν.Σ., να δημιουργείται η μεγαλύτερη δύναμη εκτόνωσης. Η μεταβολή αυτή της σπινθηροδότησης πριν από το Α.Ν.Σ. ονομάζεται προπορεία (αβάνς)."
          },
          {
            "id": "b",
            "text": "Είναι η καθυστέρηση του σπινθήρα μετά το Α.Ν.Σ. για την αποφυγή της κρουστικής καύσης."
          },
          {
            "id": "c",
            "text": "Είναι η χρονική στιγμή ανοίγματος των βαλβίδων εξαγωγής."
          },
          {
            "id": "d",
            "text": "Είναι η προηγμένη κίνηση του εκκεντροφόρου σε σχέση με τον στροφαλοφόρο."
          }
        ],
        "answer": "a",
        "explain": "Η προπορεία (αβάνς) εξασφαλίζει ότι ο σπινθήρας δίνεται νωρίτερα ώστε η πίεση της καύσης να κορυφωθεί ακριβώς τη στιγμή που το έμβολο φτάνει στο Άνω Νεκρό Σημείο (Α.Ν.Σ.)."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-02-kylindrokefali.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-24364",
    "group": "ch04-02-kylindrokefali",
    "kind": "match",
    "layout": "unified",
    "bankCode": "24364",
    "code": "Θέμα 2<sup>ο</sup> · #24364",
    "title": "#24364 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-02-kylindrokefali",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση τη σχηματική παράσταση που απεικονίζεται στο παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τα γράμματα της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Αγωγός νερού"
          },
          {
            "id": "b",
            "text": "β. Βαλβίδες εισαγωγής"
          },
          {
            "id": "c",
            "text": "γ. Βαλβίδες εξαγωγής"
          },
          {
            "id": "d",
            "text": "δ. Αγωγός λαδιού"
          },
          {
            "id": "e",
            "text": "ε. Υποδοχή μπουζί"
          }
        ],
        "pairs": {
          "1": "δ",
          "2": "β",
          "3": "ε",
          "4": "γ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24364_fig01.webp",
        "explain": "Σύμφωνα με τη σχηματική παράσταση της κυλινδροκεφαλής: 1→δ, 2→β, 3→ε, 4→γ.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24364_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Η κυλινδροκεφαλή ή κεφαλή των κυλίνδρων (καπάκι) είναι ένα ",
          " μεταλλικό κομμάτι. Τοποθετείται στερεά με μπουζόνια (αμφικόχλια) ή βίδες επάνω στο σώμα των ",
          ". Μεταξύ σώματος και κεφαλής τοποθετείται μια ειδική φλάντζα, για να εξασφαλίσει την απαιτούμενη ",
          ".»"
        ],
        "answers": [
          "ολόσωμο",
          "κυλίνδρων",
          "στεγανότητα"
        ],
        "bank": [
          "στερέωση",
          "ολόσωμο",
          "διαιρούμενο",
          "κυλίνδρων",
          "εδράνων",
          "στεγανότητα"
        ],
        "explain": "Η κυλινδροκεφαλή είναι ολόσωμο μεταλλικό κομμάτι, στερεώνεται στο σώμα των κυλίνδρων, και η φλάντζα εξασφαλίζει τη στεγανότητα."
      }
    ]
  },
  {
    "id": "ch04-30610",
    "group": "ch04-02-kylindrokefali",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "30610",
    "code": "Θέμα 2<sup>ο</sup> · #30610",
    "title": "#30610 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-02-kylindrokefali",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Ως προς το υλικό της κυλινδροκεφαλής, τα κράματα αλουμινίου έχουν μικρότερο βάρος που στην όλη κατασκευή μπορεί να φθάσει μέχρι και 30%.",
        "answer": true,
        "explain": "Σωστό. Τα κράματα αλουμινίου προσφέρουν σημαντική μείωση βάρους."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Τα κράματα αλουμινίου έχουν μεγαλύτερη αντοχή στις απότομες μεταβολές της θερμοκρασίας.",
        "answer": true,
        "explain": "Σωστό. Έχουν εξαιρετική συμπεριφορά και θερμική αγωγιμότητα έναντι του χυτοσιδήρου."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Τα κράματα αλουμινίου έχουν μικρότερο συντελεστή διαστολής από τον χυτοσίδηρο.",
        "answer": false,
        "explain": "Λάθος. Το αλουμίνιο έχει μεγαλύτερο συντελεστή διαστολής από τον χυτοσίδηρο."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "δ. Το αλουμίνιο είναι μαλακότερο από τον χυτοσίδηρο.",
        "answer": true,
        "explain": "Σωστό. Το αλουμίνιο είναι μαλακότερο υλικό και υφίσταται ευκολότερα μηχανικές κατεργασίες."
      },
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "2.2",
        "prompt": "Να αναφέρετε ονομαστικά τρία (3) μέρη που υπάρχουν στην κυλινδροκεφαλή και το εσωτερικό της.",
        "options": [
          {
            "id": "a",
            "text": "Οι αγωγοί του λαδιού για τη λίπανση, οι θάλαμοι του νερού για την ψύξη, και οι αγωγοί εισαγωγής του μίγματος."
          },
          {
            "id": "b",
            "text": "Το έμβολο, το ελατήριο και ο πείρος."
          },
          {
            "id": "c",
            "text": "Ο στροφαλοφόρος, ο σφόνδυλος και το βολάν."
          },
          {
            "id": "d",
            "text": "Η αντλία λαδιού, το ψυγείο και ο θερμοστάτης."
          }
        ],
        "answer": "a",
        "explain": "Μέρη της κυλινδροκεφαλής είναι μεταξύ άλλων οι αγωγοί λαδιού, οι θάλαμοι ψύξης, οι αγωγοί εισαγωγής/εξαγωγής, οι υποδοχές μπουζί, ο πληκτροφορέας και ο εκκεντροφόρος."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-03-merh-kinitira.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-24351",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "24351",
    "code": "Θέμα 2<sup>ο</sup> · #24351",
    "title": "#24351 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 4,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζονται τα χαρακτηριστικά του εμβόλου. Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα χαρακτηριστικά του εμβόλου:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Ανοχή τοποθέτησης του εμβόλου σε χιλιοστά"
          },
          {
            "id": "b",
            "text": "β. Ημερομηνία κατασκευής"
          },
          {
            "id": "c",
            "text": "γ. Στοιχείο - σήμα κατασκευαστή"
          },
          {
            "id": "d",
            "text": "δ. Διάμετρος περιφέρειας εμβόλου σε χιλιοστά"
          },
          {
            "id": "e",
            "text": "ε. Κατεύθυνση μονταρίσματος εμβόλου"
          }
        ],
        "pairs": {
          "1": "δ",
          "2": "α",
          "3": "ε",
          "4": "γ",
          "5": "β"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24351_fig01.webp",
        "explain": "Η αντιστοίχιση των σημαδιών και χαρακτηριστικών του εμβόλου είναι: 1→δ, 2→α, 3→ε, 4→γ, 5→β.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24351_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Στα πλάγια των αερόψυκτων κινητήρων υπάρχουν πώματα (τάπες αέρα) ή πώματα Welch.",
        "answer": false,
        "explain": "Λάθος. Τα πώματα Welch ή τάπες α bao/νερού συναντώνται στους υδρόψυκτους κινητήρες."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Πλεονέκτημα των χιτωνίων κυλίνδρων είναι η εύκολη αντικατάστασή τους όταν φθαρούν.",
        "answer": true,
        "explain": "Σωστό. Τα αποσπώμενα χιτώνια επιτρέπουν την εύκολη αντικατάσταση χωρίς αλλαγή ολόκληρου του μπλοκ."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Τα υλικά κατασκευής των εμβόλων είναι ο χυτοσίδηρος, ο χαλκός και το αλουμίνιο.",
        "answer": false,
        "explain": "Λάθος. Τα έμβολα κατασκευάζονται συνήθως από κράματα αλουμινίου ή χυτοσίδηρο, όχι από καθαρό χαλκό."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η διάμετρος της ποδιάς σε μερικούς τύπους εμβόλων είναι λίγο μεγαλύτερη από τη διάμετρο της κεφαλής.",
        "answer": true,
        "explain": "Σωστό. Λόγω θερμικών διαστολών, η μορφή του εμβόλου διαμορφώνεται κατάλληλα."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Τα σφηνοειδή ελατήρια εμβόλων είναι κατάλληλα για κινητήρες που λειτουργούν με υψηλή συμπίεση και τοποθετούνται ως δεύτερα ελατήρια.",
        "answer": true,
        "explain": "Σωστό. Τα σφηνοειδή ελατήρια χρησιμοποιούνται σε υψηλές πιέσεις και συμπιέσεις."
      }
    ]
  },
  {
    "id": "ch04-24365",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "24365",
    "code": "Θέμα 2<sup>ο</sup> · #24365",
    "title": "#24365 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 5,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση τη σχηματική παράσταση που απεικονίζεται στο παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τα γράμματα της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Μπιέλα"
          },
          {
            "id": "b",
            "text": "β. Ελατήριο λαδιού"
          },
          {
            "id": "c",
            "text": "γ. Ελατήριο συμπίεσης"
          },
          {
            "id": "d",
            "text": "δ. Πείρος πιστονιού"
          },
          {
            "id": "e",
            "text": "ε. Έμβολο με τον πείρο"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "α",
          "3": "δ",
          "4": "ε"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24365_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→α, 3→δ, 4→ε.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24365_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Τα αέρια της καύσης του καυσίμου εξασκούν πιέσεις στην επιφάνεια του ",
          " (1) και έτσι μετατρέπεται η παραγόμενη θερμική ενέργεια σε κινητική, η οποία -μέσω του ",
          " (2)- μεταφέρεται στο ",
          " (3) άξονα.»"
        ],
        "answers": [
          "εμβόλου",
          "διωστήρα",
          "στροφαλοφόρο"
        ],
        "bank": [
          "διωστήρα",
          "εκκεντροφόρο",
          "στροφαλοφόρο",
          "πείρου",
          "εμβόλου",
          "κυλίνδρου"
        ],
        "explain": "Τα αέρια πιέζουν το έμβολο, η κίνηση μεταφέρεται μέσω του διωστήρα στον στροφαλοφόρο άξονα."
      }
    ]
  },
  {
    "id": "ch04-24368",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "24368",
    "code": "Θέμα 2<sup>ο</sup> · #24368",
    "title": "#24368 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 6,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση τη σχηματική παράσταση που απεικονίζεται στο παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τα γράμματα της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Ομφαλός"
          },
          {
            "id": "b",
            "text": "β. Ελατήριο λαδιού"
          },
          {
            "id": "c",
            "text": "γ. Πάνω ελατήριο συμπίεσης"
          },
          {
            "id": "d",
            "text": "δ. Κάτω ελατήριο συμπίεσης"
          },
          {
            "id": "e",
            "text": "ε. Αυλάκια ελατηρίων"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "δ",
          "3": "β",
          "4": "ε"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24368_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→δ, 3→β, 4→ε.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24368_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Τα ελατήρια με τραπεζοειδή διατομή χρησιμοποιούνται ως δεύτερα ελατήρια συμπίεσης.",
        "answer": true,
        "explain": "Σωστό. Τα τραπεζοειδή ελατήρια χρησιμοποιούνται κατάλληλα στη ζώνη συμπίεσης."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Η επιχρωμίωση δεν χρησιμοποιείται πλέον σαν τεχνική κατασκευής ελατηρίων.",
        "answer": false,
        "explain": "Λάθος. Η επιχρωμίωση χρησιμοποιείται ευρύτατα για τη μείωση της τριβής και την αύξηση της αντοχής στη φθορά."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Η διατομή των σφηνοειδών ελατηρίων σχηματίζει ένα ισοσκελές τραπέζιο.",
        "answer": true,
        "explain": "Σωστό. Η διατομή τους έχει σχήμα που παραπέμπει σε ισοσκελές τραπέζιο."
      }
    ]
  },
  {
    "id": "ch04-30559",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30559",
    "code": "Θέμα 2<sup>ο</sup> · #30559",
    "title": "#30559 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 7,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Τριβείς βάσης (άνω ήμισυ)"
          },
          {
            "id": "b",
            "text": "β. Κοχλίας επιδεσμίδας"
          },
          {
            "id": "c",
            "text": "γ. Επιδεσμίδες (καβαλέτα) εδράνων βάσης"
          },
          {
            "id": "d",
            "text": "δ. Σφόνδυλος"
          },
          {
            "id": "e",
            "text": "ε. Αλυσίδα χρονισμού εκκεντροφόρου"
          },
          {
            "id": "στ",
            "text": "στ. Ωστικός τριβέας"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "δ",
          "3": "α",
          "4": "ε",
          "5": "β"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30559_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→δ, 3→α, 4→ε, 5→β.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30559_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Για να λειτουργήσει σωστά ένας κινητήρας, πρέπει να εξασφαλιστεί ένας ",
          " (1) λειτουργίας μεταξύ του ",
          " (2) και του στροφαλοφόρου άξονα, ώστε οι ",
          " (3) να ανοίγουν και να κλείνουν την κατάλληλη στιγμή, ανάλογα με τη θέση του ",
          " (4). Ο συγχρονισμός αυτός μεταξύ εκκεντροφόρου και στροφαλοφόρου άξονα λέγεται ",
          " (5) χρονισμός»"
        ],
        "answers": [
          "συγχρονισμός",
          "εκκεντροφόρου",
          "βαλβίδες",
          "εμβόλου",
          "εσωτερικός"
        ],
        "bank": [
          "στροφαλοφόρου",
          "εσωτερικός",
          "εμβόλου",
          "εξωτερικός",
          "εκκεντροφόρου",
          "τεντωτήρα",
          "βαλβίδες",
          "διανομέα",
          "συγχρονισμός",
          "ιμάντα"
        ],
        "explain": "Ο συγχρονισμός λειτουργίας εκκεντροφόρου και στροφαλοφόρου εξασφαλίζει το άνοιγμα/κλείσιμο των βαλβίδων ως προς το έμβολο (εσωτερικός χρονισμός)."
      }
    ]
  },
  {
    "id": "ch04-30597",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30597",
    "code": "Θέμα 2<sup>ο</sup> · #30597",
    "title": "#30597 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 8,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα που απεικονίζει τα επιμέρους τμήματα που συνθέτουν τον διωστήρα, να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του διωστήρα:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Η κεφαλή"
          },
          {
            "id": "b",
            "text": "β. Το κάλυμμα του εδράνου (καβαλέτο)"
          },
          {
            "id": "c",
            "text": "γ. Ο τριβέας του πείρου"
          },
          {
            "id": "d",
            "text": "δ. Ο κορμός"
          },
          {
            "id": "ε",
            "text": "ε. Ο τριβέας του στροφαλοφόρου"
          },
          {
            "id": "στ",
            "text": "στ. Το πόδι"
          }
        ],
        "pairs": {
          "1": "στ",
          "2": "γ",
          "3": "δ",
          "4": "b",
          "5": "ε"
        },
        "explain": "Η αντιστοίχιση των μερών του διωστήρα είναι: 1→στ (πόδι), 2→γ (τριβέας πείρου), 3→δ (κορμός), 4→β (καβαλέτο), 5→ε (τριβέας στροφαλοφόρου).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30597_fig01.webp"
      },
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "2.2",
        "prompt": "Να αναφέρετε τα πλεονεκτήματα των κραμάτων αλουμινίου σε σχέση με τον χυτοσίδηρο για την κατασκευή των κυλινδροκεφαλών.",
        "options": [
          {
            "id": "a",
            "text": "Έχουν καλύτερη θερμική αγωγιμότητα, μικρότερο βάρος, μεγαλύτερη αντοχή στις θερμικές μεταβολές, υψηλότερη απόδοση και ευκολότερη μηχανική κατεργασία."
          },
          {
            "id": "b",
            "text": "Έχουν μεγαλύτερο βάρος και χαμηλότερη θερμική αγωγιμότητα."
          },
          {
            "id": "c",
            "text": "Είναι φθηνότερα αλλά παρουσιάζουν υψηλότερη τριβή και μικρότερη αντοχή."
          },
          {
            "id": "d",
            "text": "Δεν διαφέρουν σημαντικά σε καμία ιδιότητα από τον χυτοσίδηρο."
          }
        ],
        "answer": "a",
        "explain": "Τα κράματα αλουμινίου προσφέρουν υψηλή θερμική αγωγιμότητα, χαμηλό βάρος (έως 30% μείωση), αντοχή σε απότομες θερμοκρασιακές μεταβολές και ευκολία κατεργασίας."
      }
    ]
  },
  {
    "id": "ch04-30599",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30599",
    "code": "Θέμα 2<sup>ο</sup> · #30599",
    "title": "#30599 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα που απεικονίζει το έμβολο και την μπιέλα μιας μηχανής εσωτερικής καύσης, να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του εμβόλου και της μπιέλας:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Μπιέλα"
          },
          {
            "id": "b",
            "text": "β. Ελατήριο λαδιού"
          },
          {
            "id": "c",
            "text": "γ. Ελατήριο συμπιέσεως"
          },
          {
            "id": "d",
            "text": "δ. Πείρος"
          },
          {
            "id": "ε",
            "text": "ε. Έμβολο"
          },
          {
            "id": "στ",
            "text": "στ. Κουζινέτο"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "β",
          "3": "δ",
          "4": "α",
          "5": "στ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30599_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→β, 3→δ, 4→α, 5→στ.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30599_fig01.webp"
        ]
      },
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "2.2",
        "prompt": "Σήμερα στην κατασκευή των εμβόλων χρησιμοποιούνται τα διάφορα κράματα αλουμινίου. Να αναφέρετε τα πλεονεκτήματα και τα μειονεκτήματα των κραμάτων αλουμινίου.",
        "options": [
          {
            "id": "a",
            "text": "Πλεονεκτήματα: μικρότερο βάρος, μεγαλύτερη θερμική αγωγιμότητα, μικρότερη τάση σχηματισμού ανθρακωμάτων. Μειονεκτήματα: μεγαλύτερος συντελεστής διαστολής, μικρότερη αντοχή."
          },
          {
            "id": "b",
            "text": "Πλεονεκτήματα: μέγιστη σκληρότητα και αντοχή σε υψηλές θερμοκρασίες. Μειονεκτήματα: υπερβολικό βάρος."
          },
          {
            "id": "c",
            "text": "Πλεονεκτήματα: μηδενική διαστολή. Μειονεκτήματα: πολύ υψηλό κόστος."
          },
          {
            "id": "d",
            "text": "Δεν παρουσιάζουν κανένα μειονέκτημα σε σχέση με τον χυτοσίδηρο."
          }
        ],
        "answer": "a",
        "explain": "Τα κράματα αλουμινίου προσφέρουν χαμηλό βάρος και καλή ψύξη, αλλά απαιτούν μεγαλύτερες ανοχές λόγω υψηλότερης διαστολής."
      }
    ]
  },
  {
    "id": "ch04-30611",
    "group": "ch04-03-merh-kinitira",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30611",
    "code": "Θέμα 2<sup>ο</sup> · #30611",
    "title": "#30611 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-03-merh-kinitira",
    "sourceOrder": 10,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση τα παρακάτω σχήματα που απεικονίζουν διάφορα είδη ελατηρίων εμβόλων, να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα είδη ελατηρίων:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Ελατήριο με δόντι (πατούρα)"
          },
          {
            "id": "b",
            "text": "β. Ελατήριο με τραπεζοειδή διατομή"
          },
          {
            "id": "c",
            "text": "γ. Επιχρωμιωμένο ελατήριο"
          },
          {
            "id": "d",
            "text": "δ. Σφηνοειδές ελατήριο"
          },
          {
            "id": "ε",
            "text": "ε. Τριγωνικό ελατήριο"
          }
        ],
        "pairs": {
          "1": "β",
          "2": "δ",
          "3": "γ",
          "4": "α"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30611_fig01.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30611_fig02.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30611_fig03.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30611_fig04.webp"
        ],
        "explain": "Η αντιστοίχιση είναι: 1→β, 2→δ, 3→γ, 4→α.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30611_fig01.webp"
      },
      {
        "kind": "mc",
        "openEnded": true,
        "subq": "2.2",
        "prompt": "Να αναφέρετε ονομαστικά τρία (3) από τα μέρη του εμβόλου.",
        "options": [
          {
            "id": "a",
            "text": "Η κεφαλή του εμβόλου, η ζώνη των ελατηρίων και η ποδιά του εμβόλου."
          },
          {
            "id": "b",
            "text": "Ο στροφαλοφόρος, ο σφόνδυλος και το βολάν."
          },
          {
            "id": "c",
            "text": "Ο θάλαμος νερού, η φλάντζα και η βαλβίδα."
          },
          {
            "id": "d",
            "text": "Ο εκκεντροφόρος, το ωστήριο και το ζύγωθρο."
          }
        ],
        "answer": "a",
        "explain": "Τα βασικά μέρη του εμβόλου περιλαμβάνουν την κεφαλή, τη ζώνη ελατηρίων, τα έδρανα του πείρου και την ποδιά."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-05-ekkentroforos-valvides.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-23724",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "23724",
    "code": "Θέμα 2<sup>ο</sup> · #23724",
    "title": "#23724 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 11,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ο εκκεντροφόρος επικεφαλής με τις βαλβίδες να κινούνται απευθείας από τα έκκεντρα. Να γράψετε τα γράμματα α, β, γ, δ, ε από τη στήλη Α και δίπλα έναν από τους αριθμούς 1, 2, 3, 4, 5 της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τη Στήλη Β:",
        "left": [
          {
            "id": "α",
            "text": "α"
          },
          {
            "id": "β",
            "text": "β"
          },
          {
            "id": "γ",
            "text": "γ"
          },
          {
            "id": "δ",
            "text": "δ"
          },
          {
            "id": "ε",
            "text": "ε"
          }
        ],
        "right": [
          {
            "id": "1",
            "text": "1. Έκκεντρο"
          },
          {
            "id": "2",
            "text": "2. Ωστήριο (ποτηράκι)"
          },
          {
            "id": "3",
            "text": "3. Βαλβίδα"
          },
          {
            "id": "4",
            "text": "4. Εκκεντροφόρος"
          },
          {
            "id": "5",
            "text": "5. Πλακάκι ρύθμισης"
          }
        ],
        "pairs": {
          "α": "4",
          "β": "1",
          "γ": "5",
          "δ": "2",
          "ε": "3"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_23724_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: α→4, β→1, γ→5, δ→2, ε→3.",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_23724_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η θέση του εκκεντροφόρου άξονα εξαρτάται μόνο από τη σχεδίαση του κινητήρα.",
        "answer": false,
        "explain": "Λάθος. Εξαρτάται από πολλούς παράγοντες όπως οι απαιτήσεις απόδοσης, η δομή και οι μάζες αδράνειας."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Στις δεσμοδρομικές βαλβίδες δεν υπάρχουν ελατήρια για το κλείσιμό τους.",
        "answer": true,
        "explain": "Σωστό. Στις δεσμοδρομικές βαλβίδες το άνοιγμα και το κλείσιμο γίνονται μηχανικά."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Το διάκενο των βαλβίδων ορίζεται από τον κατασκευαστή.",
        "answer": true,
        "explain": "Σωστό. Ο κατασκευαστής ορίζει την προβλεπόμενη ανοχή/διάκενο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η μετάδοση από τον στροφαλοφόρο στον εκκεντροφόρο, με οδοντωτό ιμάντα έχει χαμηλό κόστος κατασκευής και συντήρησης και χρειάζεται λίπανση.",
        "answer": false,
        "explain": "Λάθος. Ο οδοντωτός ιμάντας δεν χρειάζεται λίπανση (λειτουργεί στεγνός)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Για τις βαλβίδες εισαγωγής χρησιμοποιούνται νικελιούχα, χρωμονικελιούχα ή χρωμιομολυβδαινιούχα κράματα χάλυβα.",
        "answer": true,
        "explain": "Σωστό. Τα ανθεκτικά κράματα χάλυβα χρησιμοποιούνται λόγω των υψηλών θερμοκρασιών."
      }
    ]
  },
  {
    "id": "ch04-24399",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "24399",
    "code": "Θέμα 2<sup>ο</sup> · #24399",
    "title": "#24399 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ένα σύστημα διανομής καυσίμου και απαγωγής καυσαερίων. Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία του συστήματος διανομής:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Στροφαλοφόρος"
          },
          {
            "id": "b",
            "text": "β. Πληκτροφορέας"
          },
          {
            "id": "c",
            "text": "γ. Εκκεντροφόρος"
          },
          {
            "id": "d",
            "text": "δ. Γρανάζι εκκεντροφόρου"
          },
          {
            "id": "ε",
            "text": "ε. Γρανάζι στροφαλοφόρου"
          },
          {
            "id": "στ",
            "text": "στ. Ωστήριο"
          }
        ],
        "pairs": {
          "1": "β",
          "2": "στ",
          "3": "α",
          "4": "ε",
          "5": "δ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24399_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→β, 2→στ, 3→α, 4→ε, 5→δ (Περισσεύει το γ).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24399_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Προορισμός του εκκεντροφόρου είναι να ανοίγει τις βαλβίδες την κατάλληλη στιγμή.",
        "answer": true,
        "explain": "Σωστό. Αυτός είναι ο κύριος ρόλος του εκκεντροφόρου άξονα."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Για αύξηση της αντοχής των βαλβίδων από διάβρωση, οι κεφαλές τους επικαλύπτονται, επιπρόσθετα, με ειδικό κράμα μετάλλων (νικέλιο 80% και χρώμιο 20% ) ή κράμα αλουμινίου.",
        "answer": true,
        "explain": "Σωστό. Χρησιμοποιούνται ειδικές επιστρώσεις για υψηλή αντοχή σε θερμοκρασίες και καυσαέρια."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Ο ρόλος της ωστικής ράβδου (καλάμι) είναι να μεταφέρει την κίνηση από τον στροφαλοφόρο στις βαλβίδες.",
        "answer": false,
        "explain": "Λάθος. Η ωστική ράβδος μεταφέρει την κίνηση από τον εκκεντροφόρο (στα πλάγια) στα ζυγωθρά (κοκοράκια)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Ο πληκτροφορέας είναι ένας άξονας, στον οποίο στερεώνονται τα έκκεντρα.",
        "answer": false,
        "explain": "Λάθος. Ο πληκτροφορέας (πιανόλα) είναι ο άξονας που στηρίζει τα ζυγωθρά, όχι τα έκκεντρα."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Στις αυτορυθμιζόμενες βαλβίδες δεν υπάρχει καθόλου διάκενο μεταξύ ωστηρίου και βαλβίδας και οι διαστολές του συστήματος εξουδετερώνονται από το υδραυλικά ρυθμιζόμενο ωστήριο.",
        "answer": true,
        "explain": "Σωστό. Τα υδραυλικά ωστήρια διατηρούν μηδενικό διάκενο και αντισταθμίζουν τις θερμικές διαστολές."
      }
    ]
  },
  {
    "id": "ch04-27552",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "27552",
    "code": "Θέμα 2<sup>ο</sup> · #27552",
    "title": "#27552 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 13,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη της βαλβίδας και του μηχανισμού:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. 1ο ελατήριο βαλβίδας"
          },
          {
            "id": "b",
            "text": "β. 2ο ελατήριο βαλβίδας"
          },
          {
            "id": "c",
            "text": "γ. Ροδέλα"
          },
          {
            "id": "d",
            "text": "δ. Ωστική ράβδος"
          },
          {
            "id": "ε",
            "text": "ε. Στέλεχος βαλβίδας"
          },
          {
            "id": "στ",
            "text": "στ. Ασφάλεια"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "ε",
          "3": "στ",
          "4": "β",
          "5": "α"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_27552_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→ε, 3→στ, 4→β, 5→α (Περισσεύει το δ).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_27552_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η ουρά της βαλβίδας μπορεί να έχει διάφορες διαμορφώσεις, ανάλογα με τον τρόπο συγκράτησης της ασφάλειας των ελατηρίων.",
        "answer": true,
        "explain": "Σωστό. Υπάρχουν διάφοροι τύποι αυλακώσεων για ασφάλειες."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Ο οδηγός του συστήματος στήριξης της βαλβίδας εξασφαλίζει καλύτερη στεγανότητα κατά το κλείσιμο της βαλβίδας.",
        "answer": false,
        "explain": "Λάθος. Η στεγανότητα εξασφαλίζεται από την έδρα και την επιφάνεια επαφής βαλβίδας-κεφαλής."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Η υποδοχή της έδρας και ο οδηγός είναι μέρη της κυλινδροκεφαλής.",
        "answer": true,
        "explain": "Σωστό. Αποτελούν αναerves/αναπόσπαστα ή εφαρμοστά τμήματα της κυλινδροκεφαλής."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Το σύστημα που ανοίγει και κλείνει τις βαλβίδες αποτελείται από μια σειρά μεταλλικών τμημάτων, μερικά των οποίων σε ορισμένες διατάξεις είναι επιμήκη.",
        "answer": true,
        "explain": "Σωστό. Όπως οι ωστικές ράβδοι."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Η κίνηση στον στροφαλοφόρο άξονα μεταδίδεται από τον εκκεντροφόρο άξονα.",
        "answer": false,
        "explain": "Λάθος. Η κίνηση μεταδίδεται από τον στροφαλοφόρο προς τον εκκεντροφόρο."
      }
    ]
  },
  {
    "id": "ch04-27554",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "27554",
    "code": "Θέμα 2<sup>ο</sup> · #27554",
    "title": "#27554 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 14,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Ζύγωθρο (κοκοράκι)"
          },
          {
            "id": "b",
            "text": "β. Πληκτροφορέας (πιανόλα)"
          },
          {
            "id": "c",
            "text": "γ. Ελατήριο"
          },
          {
            "id": "δ",
            "text": "δ. Ωστική ράβδος (καλάμι)"
          },
          {
            "id": "ε",
            "text": "ε. Ωστήριο (ποτηράκι)"
          }
        ],
        "pairs": {
          "1": "α",
          "2": "β",
          "3": "δ",
          "4": "ε"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_27554_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→α, 2→β, 3→δ, 4→ε (Περισσεύει το γ).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_27554_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Το ",
          " (1) είναι ένας μικρός μεταλλικός μοχλός (πλήκτρο). Βρίσκεται στερεωμένο επάνω σε έναν άξονα, τον ",
          " (2), και μπορεί να περιστρέφεται γύρω από αυτόν. Δέχεται στη μία πλευρά του την κίνηση από την ωστική ράβδο και από την άλλη πλευρά πιέζει τη ",
          " (3) να ανοίξει.»"
        ],
        "answers": [
          "ζύγωθρο",
          "πληκτροφορέα",
          "βαλβίδα"
        ],
        "bank": [
          "ωστήριο",
          "ζύγωθρο",
          "εκκεντροφόρο",
          "πληκτροφορέα",
          "βαλβίδα",
          "πιανόλα"
        ],
        "explain": "Το ζύγωθρο (κοκοράκι) λαμβάνει κίνηση και α bao πιέζει τη βαλβίδα."
      }
    ]
  },
  {
    "id": "ch04-30560",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30560",
    "code": "Θέμα 2<sup>ο</sup> · #30560",
    "title": "#30560 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 15,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε τους αριθμούς 1, 2, 3, 4, 5, από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Βαλβίδες εισαγωγής"
          },
          {
            "id": "b",
            "text": "β. Βαλβίδες εξαγωγής"
          },
          {
            "id": "c",
            "text": "γ. Τεντωτήρας"
          },
          {
            "id": "d",
            "text": "δ. Γρανάζι εκκεντροφόρου"
          },
          {
            "id": "ε",
            "text": "ε. Γρανάζι στροφαλοφόρου άξονα"
          },
          {
            "id": "στ",
            "text": "στ. Οδοντωτός ιμάντας"
          }
        ],
        "pairs": {
          "1": "β",
          "2": "ε",
          "3": "γ",
          "4": "δ",
          "5": "στ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30560_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→β, 2→ε, 3→γ, 4→δ, 5→στ (Περισσεύει το α).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30560_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Επάνω στην περιφέρεια του σφονδύλου βρίσκεται η ",
          " (1) στην οποία εμπλέκεται το ",
          " (2) της μίζας. Η ",
          " (3) επιφάνεια του σφονδύλου είναι λεία, γιατί σε αυτήν στηρίζεται ο ",
          " (4), ο οποίος μεταφέρει την κίνηση στο ",
          " (5)»"
        ],
        "answers": [
          "οδοντωτή στεφάνη",
          "γρανάζι",
          "εξωτερική",
          "συμπλέκτης (δίσκος‐ πλατό)",
          "κιβώτιο ταχυτήτων (σανζμάν)"
        ],
        "bank": [
          "Μίζα",
          "εξωτερική",
          "εσωτερική",
          "οδοντωτή στεφάνη",
          "σφόνδυλος",
          "στρόφαλος",
          "γρανάζι",
          "κιβώτιο ταχυτήτων (σανζμάν)",
          "διαφορικό",
          "συμπλέκτης (δίσκος‐ πλατό)"
        ],
        "explain": "Περιγράφεται η εμπλοκή της μίζας στον σφόνδυλο και η επαφή του δίσκου συμπλέκτη."
      }
    ]
  },
  {
    "id": "ch04-30600",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30600",
    "code": "Θέμα 2<sup>ο</sup> · #30600",
    "title": "#30600 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 16,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα που απεικονίζει τα επιμέρους τμήματα που συνθέτουν τη βαλβίδα μιας ΜΕΚ, να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη της βαλβίδας:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Γωνία έδρας βαλβίδας."
          },
          {
            "id": "b",
            "text": "β. Υποδοχή εμβόλου."
          },
          {
            "id": "c",
            "text": "γ. Διάμετρος στελέχους βαλβίδας"
          },
          {
            "id": "δ",
            "text": "δ. Διάμετρος κεφαλής βαλβίδας"
          },
          {
            "id": "ε",
            "text": "ε. Υποδοχή ασφάλειας"
          },
          {
            "id": "στ",
            "text": "στ. Ύψος βαλβίδας"
          }
        ],
        "pairs": {
          "1": "δ",
          "2": "στ",
          "3": "γ",
          "4": "α",
          "5": "ε"
        },
        "explain": "Η σωστή αντιστοίχιση είναι: 1→δ, 2→στ, 3→γ, 4→α, 5→ε.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30600_fig01.webp"
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε μία από τις προτάσεις και δίπλα τη λέξη που συμπληρώνει σωστά την πρόταση.",
        "textBefore": [
          "«Σήμερα, οι κατασκευαστές προσπαθούν οι κινητήρες να έχουν όσο το δυνατό ",
          " (1) εξαρτήματα και λιγότερες ",
          " (2) μάζες. Για το λόγο αυτό, στους περισσότερους κινητήρες ο εκκεντροφόρος τοποθετείται ",
          " (3).»"
        ],
        "answers": [
          "λιγότερα",
          "αδρανειακές",
          "επικεφαλής"
        ],
        "bank": [
          "περισσότερα",
          "λιγότερα",
          "πλαστικές",
          "αδρανειακές",
          "πλαγίως",
          "επικεφαλής"
        ],
        "explain": "Για καλύτερη απόδοση και μικρότερες απώλειες, οι σύγχρονοι κινητήρες επιδιώκουν λιγότερα κινούμενα εξαρτήματα, χαμηλότερες αδρανειακές μάζες και εκκεντροφόρο επικεφαλής."
      }
    ]
  },
  {
    "id": "ch04-31430",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "match",
    "layout": "unified",
    "bankCode": "31430",
    "code": "Θέμα 2<sup>ο</sup> · #31430",
    "title": "#31430 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 17,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση τη σχηματική παράσταση, να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της Στήλης Α με τη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Βαλβίδες εισαγωγής"
          },
          {
            "id": "b",
            "text": "β. Βαλβίδες εξαγωγής"
          },
          {
            "id": "c",
            "text": "γ. Τεντωτήρας"
          },
          {
            "id": "δ",
            "text": "δ. Γρανάζι εκκεντροφόρου"
          },
          {
            "id": "ε",
            "text": "ε. Γρανάζι στροφαλοφόρου άξονα"
          },
          {
            "id": "στ",
            "text": "στ. Οδοντωτός ιμάντας"
          }
        ],
        "pairs": {
          "1": "β",
          "2": "ε",
          "3": "γ",
          "4": "δ",
          "5": "στ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_31430_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→β, 2→ε, 3→γ, 4→δ, 5→στ (Περισσεύει το α).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_31430_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις / φράσεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Επάνω στην περιφέρεια του σφονδύλου βρίσκεται η ",
          " (1) στην οποία εμπλέκεται το ",
          " (2) της μίζας. Η ",
          " (3) επιφάνεια του σφονδύλου είναι λεία, γιατί σε αυτήν στηρίζεται ο ",
          " (4), ο οποίος μεταφέρει την κίνηση στο ",
          " (5).»"
        ],
        "answers": [
          "οδοντωτή στεφάνη",
          "γρανάζι",
          "εξωτερική",
          "συμπλέκτης (δίσκος- πλατό)",
          "κιβώτιο ταχυτήτων (σανζμάν)"
        ],
        "bank": [
          "μίζα",
          "εξωτερική",
          "εσωτερική",
          "οδοντωτή στεφάνη",
          "σφόνδυλος",
          "στρόφαλος",
          "γρανάζι",
          "κιβώτιο ταχυτήτων (σανζμάν)",
          "διαφορικό",
          "συμπλέκτης (δίσκος- πλατό)"
        ],
        "explain": "Περιγράφονται τα βασικά στοιχεία μετάδοσης κίνησης από τη μίζα και τον συμπλέκτη στον σφόνδυλο."
      }
    ]
  },
  {
    "id": "ch04-31431",
    "group": "ch04-05-ekkentroforos-valvides",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "31431",
    "code": "Θέμα 2<sup>ο</sup> · #31431",
    "title": "#31431 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-05-ekkentroforos-valvides",
    "sourceOrder": 18,
    "items": [
      {
        "kind": "tf",
        "subq": "2.1",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό (Σ), αν η πρόταση είναι σωστή ή τη λέξη Λάθος (Λ), αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Μετάδοση με γρανάζια. Ο τρόπος αυτός χρησιμοποιείται, όταν ο εκκεντροφόρος άξονας είναι τοποθετημένος επικεφαλής.",
        "answer": false,
        "explain": "Λάθος. Η μετάδοση με γρανάζια χρησιμοποιείται κυρίως όταν ο εκκεντροφόρος είναι χαμηλά ή στο μπλοκ (ή σε βαρέως τύπου κινητήρες)."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "β. Μετάδοση με αλυσίδα (καδένα). Ο τρόπος αυτός χρησιμοποιείται, όταν ο εκκεντροφόρος είναι τοποθετημένος είτε στα πλάγια είτε είναι επικεφαλής.",
        "answer": true,
        "explain": "Σωστό. Η καδένα χρησιμοποιείται και σε πλάγιους και σε επικεφαλής εκκεντροφόρους."
      },
      {
        "kind": "tf",
        "subq": "2.1",
        "prompt": "γ. Μετάδοση με οδοντωτό ιμάντα. Ο τρόπος αυτός χρησιμοποιείται, όταν ο εκκεντροφόρος είναι είτε στα πλάγια είτε επικεφαλής.",
        "answer": true,
        "explain": "Σωστό. Ο οδοντωτός ιμάντας εφαρμόζεται ευρύτατα σε σύγχρονους κινητήρες."
      },
      {
        "kind": "match",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τους αριθμούς 1, 2, 3, 4 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τους τύπους μετάδοσης διανομής:",
        "left": [
          {
            "id": "1",
            "text": "1. Μετάδοση με γρανάζια"
          },
          {
            "id": "2",
            "text": "2. Μετάδοση της κίνησης με οδοντωτό ιμάντα"
          },
          {
            "id": "3",
            "text": "3. Μετάδοση της κίνησης με αλυσίδα σε σύστημα διανομής με εκκεντροφόρο επικεφαλής"
          },
          {
            "id": "4",
            "text": "4. Μετάδοση της κίνησης με αλυσίδα σε σύστημα διανομής με εκκεντροφόρο στα πλάγια"
          }
        ],
        "right": [
          {
            "id": "α",
            "text": "α"
          },
          {
            "id": "β",
            "text": "β"
          },
          {
            "id": "γ",
            "text": "γ"
          },
          {
            "id": "δ",
            "text": "δ"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "β",
          "3": "δ",
          "4": "α"
        },
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_31431_fig01.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_31431_fig02.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_31431_fig03.webp",
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_31431_fig04.webp"
        ],
        "explain": "Η σωστή αντιστοίχιση βάσει των διαγραμμάτων είναι: 1→γ, 2→β, 3→δ, 4→α.",
        "imageLabels": [
          "α",
          "β",
          "γ",
          "δ"
        ],
        "imageLayout": "grid"
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-06-kylindrismos-sympiesi.js ---
;
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
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-07-paraskevi-kafsimou.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-24352",
    "group": "ch04-07-paraskevi-kafsimou",
    "kind": "match",
    "layout": "unified",
    "bankCode": "24352",
    "code": "Θέμα 2<sup>ο</sup> · #24352",
    "title": "#24352 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-07-paraskevi-kafsimou",
    "sourceOrder": 32,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ένα ηλεκτρονικό σύστημα ψεκασμού μονού σημείου. Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία του συστήματος ψεκασμού:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Μπαταρία"
          },
          {
            "id": "b",
            "text": "β. Αισθητήρας στροφών"
          },
          {
            "id": "c",
            "text": "γ. Λήπτης λάμδα"
          },
          {
            "id": "δ",
            "text": "δ. Ηλεκτρική αντλία καυσίμου"
          },
          {
            "id": "ε",
            "text": "ε. Μπέκ ψεκασμού"
          },
          {
            "id": "στ",
            "text": "στ. Εγκέφαλος"
          }
        ],
        "pairs": {
          "1": "δ",
          "2": "γ",
          "3": "β",
          "4": "ε",
          "5": "στ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24352_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→δ, 2→γ, 3→β, 4→ε, 5→στ (Περισσεύει το α).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_24352_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Προορισμός του καταλύτη είναι να φιλτράρει τα καυσαέρια.",
        "answer": false,
        "explain": "Λάθος. Ο καταλύτης πραγματοποιεί χημικές αντιδράσεις μετατροπής ρύπων και δεν λειτουργεί ως απλό μηχανικό φίλτρο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Ο αισθητήρας οξυγόνου ή λήπτης λάμδα (λ) μετρά την ποσότητα οξυγόνου στο περιβάλλον.",
        "answer": false,
        "explain": "Λάθος. Μετράει την ποσότητα οξυγόνου στα καυσαέρια και όχι στο εξωτερικό περιβάλλον."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Οι βέλτιστες συνθήκες λειτουργίας του κινητήρα είναι στην περιοχή λ=1.",
        "answer": true,
        "explain": "Σωστό. Η περιοχή του στοιχειομετρικού μίγματος (λ=1) είναι ιδανική για τη λειτουργία του τριοδικού καταλύτη."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η κατανάλωση λαδιού του κινητήρα προκαλεί «βούλωμα» του καταλύτη.",
        "answer": true,
        "explain": "Σωστό. Τα κατάλοιπα καύσης λαδιού καταστρέφουν και φράσσουν τον καταλύτη."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Στα απλά ηλεκτρονικά συστήματα ψεκασμού, υπάρχει μια ηλεκτρονική μονάδα που ελέγχει τόσο την ανάφλεξη όσο και τον ψεκασμό.",
        "answer": false,
        "explain": "Λάθος. Συχνά ο έλεγχος ανάφλεξης και ψεκασμού είναι ξεχωριστός ή διακριτός στα παλιότερα συστήματα."
      }
    ]
  },
  {
    "id": "ch04-30601",
    "group": "ch04-07-paraskevi-kafsimou",
    "kind": "match",
    "layout": "unified",
    "bankCode": "30601",
    "code": "Θέμα 2<sup>ο</sup> · #30601",
    "title": "#30601 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-07-paraskevi-kafsimou",
    "sourceOrder": 33,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Με βάση το παρακάτω σχήμα που απεικονίζει το σύστημα παροχής βενζίνης, να γράψετε στο τετράδιό σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και, δίπλα, ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του συστήματος παροχής βενζίνης:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Συσσωρευτής (μπαταρία)"
          },
          {
            "id": "b",
            "text": "β. Εξαεριωτής"
          },
          {
            "id": "c",
            "text": "γ. Ηλεκτρικός δείκτης στάθμης"
          },
          {
            "id": "δ",
            "text": "δ. Σωληνώσεις βενζίνης"
          },
          {
            "id": "ε",
            "text": "ε. Αντλία"
          },
          {
            "id": "στ",
            "text": "στ. Δεξαμενή βενζίνης"
          }
        ],
        "pairs": {
          "1": "β",
          "2": "γ",
          "3": "στ",
          "4": "δ",
          "5": "ε"
        },
        "explain": "Η σωστή αντιστοίχιση είναι: 1→β, 2→γ, 3→στ, 4→δ, 5→ε (Περισσεύει το α).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_30601_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Στην περίπτωση του φτωχού μίγματος, έχει μετρηθεί ότι για ελαφρά φτωχό μίγμα η κατανάλωση είναι μικρότερη από εκείνη του στοιχειομετρικού μίγματος.",
        "answer": true,
        "explain": "Σωστό. Το ελαφρά φτωχό μίγμα προσφέρει οικονομία καυσίμου."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Όταν το μίγμα αέρα καυσίμου είναι πλούσιο, τότε ο προσδιδόμενος αέρας είναι περισσότερος από τον στοιχειομετρικό και, κατά συνέπεια, θα είναι $\\lambda > 1$.",
        "answer": false,
        "explain": "Λάθος. Στο πλούσιο μίγμα ο αέρας είναι λιγότερος από τον στοιχειομετρικό και $\\lambda < 1$."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Οι λειτουργικές συνθήκες του κινητήρα (στροφές, θερμοκρασία, φορτίο, περίσσεια ή έλλειψη αέρα) είναι παράμετροι που επιδρούν στην ποιότητα της καύσης.",
        "answer": true,
        "explain": "Σωστό. Οι συνθήκες λειτουργίας επηρεάζουν άμεσα την καύση."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η καύση είναι αποδοτική, όταν η απόσταση διάδοσης του μετώπου της φλόγας είναι μεγάλη.",
        "answer": false,
        "explain": "Λάθος. Η υπερβολική διάδοση ή η ανώμαλη διάδοση φέρνει απώλειες ή κρουστική καύση."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Η καύση είναι η ταχεία οξείδωση της βενζίνης με την παρουσία αέρα και την παραγωγή θερμότητας και νέων χημικών ενώσεων, το σύνολο των οποίων αποτελούν τα καυσαέρια.",
        "answer": true,
        "explain": "Σωστό. Αυτός είναι ο ορισμός της καύσης στις Μ.Ε.Κ."
      }
    ]
  },
  {
    "id": "ch04-31675",
    "group": "ch04-07-paraskevi-kafsimou",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "31675",
    "code": "Θέμα 4<sup>ο</sup> · #31675",
    "title": "#31675 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "ch04-07-paraskevi-kafsimou",
    "sourceOrder": 34,
    "stem": "Σε ένα βενζινοκινητήρα ο προσδιδόμενος αέρας για την καύση είναι $345\\text{ cm}^3$ και ο θεωρητικά απαιτούμενος αέρας για τη στοιχειομετρική αναλογία του μίγματος αέρα-βενζίνη είναι $300\\text{ cm}^3$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε τον λόγο $\\lambda$ με ακρίβεια δύο (2) δεκαδικών ψηφίων.",
        "formula": "$\\lambda = \\frac{\\text{προσδιδόμενος αέρας}}{\\text{θεωρητικά απαιτούμενος αέρας}}$",
        "answer": 1.15,
        "unit": "",
        "tolerance": 0.001,
        "hint": "Διαιρέστε τον προσδιδόμενο αέρα με τον απαιτούμενο.",
        "explain": "$\\lambda = \\frac{345}{300} = 1{,}15$."
      },
      {
        "kind": "mc",
        "subq": "β",
        "prompt": "Να χαρακτηρίσετε το μίγμα αέρα-βενζίνης, αν είναι πλούσιο ή φτωχό και να αιτιολογήσετε την απάντησή σας.",
        "options": [
          {
            "id": "a",
            "text": "Το μίγμα είναι φτωχό, γιατί $\\lambda = 1{,}15 > 1$, δηλαδή η αναλογία βενζίνης προς αέρα είναι μικρότερη από τη στοιχειομετρική."
          },
          {
            "id": "b",
            "text": "Το μίγμα είναι πλούσιο, γιατί $\\lambda > 1$."
          },
          {
            "id": "c",
            "text": "Το μίγμα είναι στοιχειομετρικό, γιατί $\\lambda$ πλησιάζει το 1."
          }
        ],
        "answer": "a",
        "explain": "Επειδή $\\lambda > 1$, υπάρχει περίσσεια αέρα, άρα το μίγμα είναι φτωχό."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Να ορίσετε το στοιχειομετρικό μίγμα και να αναφέρετε την τιμή του λόγου $\\lambda$ στην περίπτωση αυτή.",
        "options": [
          {
            "id": "a",
            "text": "Στοιχειομετρικό μίγμα είναι το μίγμα στο οποίο η αναλογία αέρα-καυσίμου ισούται με 14,7:1 κατά βάρος, με $\\lambda = 1$."
          },
          {
            "id": "b",
            "text": "Είναι το μίγμα με μηδενικό αέρα και $\\lambda = 0$."
          },
          {
            "id": "c",
            "text": "Είναι το μίγμα με διπλάσιο καύσιμο και $\\lambda = 2$."
          }
        ],
        "answer": "a",
        "explain": "Στοιχειομετρικό είναι το ιδανικό μίγμα 14,7 kg αέρα ανά 1 kg καυσίμου, όπου $\\lambda = 1$."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-08-systima-anafleksis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-25438",
    "group": "ch04-08-systima-anafleksis",
    "kind": "match",
    "layout": "unified",
    "bankCode": "25438",
    "code": "Θέμα 2<sup>ο</sup> · #25438",
    "title": "#25438 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-08-systima-anafleksis",
    "sourceOrder": 35,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ηλεκτρονική ανάφλεξη με κεντρική μονάδα ελέγχου. Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4, 5 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα στοιχεία της ηλεκτρονικής ανάφλεξης:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Μπουζί"
          },
          {
            "id": "b",
            "text": "β. Πολλαπλασιαστής"
          },
          {
            "id": "c",
            "text": "γ. Μπαταρία"
          },
          {
            "id": "d",
            "text": "δ. Διακόπτης ανάφλεξης"
          },
          {
            "id": "ε",
            "text": "ε. Επαγωγικός αισθητήρας στροφών (στροφαλοφόρος)"
          },
          {
            "id": "στ",
            "text": "στ. Διανομέας"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "ε",
          "3": "β",
          "4": "στ",
          "5": "α"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_25438_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→ε, 3→β, 4→στ, 5→α (Περισσεύει το δ).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_25438_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η υπερθέρμανση του κινητήρα δεν αποτελεί ένδειξη λανθασμένης προπορείας του σπινθήρα.",
        "answer": false,
        "explain": "Λάθος. Η λανθασμένη προπορεία (π.χ. πολύ μεγάλη) προκαλεί υπερθέρμανση."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Ο μηχανισμός κενού ή φούσκα ρυθμίζει το σημείο ανάφλεξης του μπουζί, ανάλογα με την ισχύ ή το φορτίο του κινητήρα.",
        "answer": true,
        "explain": "Σωστό. Ο υποπίεσης μηχανισμός ρυθμίζει την προπορεία ανάλογα με το φορτίο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Ο διανομέας παίρνει κίνηση από τον στροφαλοφόρο.",
        "answer": false,
        "explain": "Λάθος. Ο διανομέας παίρνει συνήθως κίνηση από τον εκκεντροφόρο άξονα."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Όταν το μπουζί λειτουργεί σε υψηλή θερμοκρασία υπάρχει πιθανότητα αυτανάφλεξης του μίγματος και έκρηξής του (κρουστικής ανάφλεξης).",
        "answer": true,
        "explain": "Σωστό. Οι θερμές περιοχές ή καυτά σημεία στο μπουζί μπορούν να προκαλέσουν πρόωρη αυτανάφλεξη."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Όλα τα καλώδια του συστήματος ανάφλεξης, τόσο της χαμηλής όσο και της υψηλής τάσης, είναι ενός αγωγού.",
        "answer": true,
        "explain": "Σωστό. Τα κυκλώματα ανάφλεξης βασίζονται σε μονοαγωγούς αγωγούς με επιστροφή μέσω του σασί/μάζας."
      }
    ]
  },
  {
    "id": "ch04-29366",
    "group": "ch04-08-systima-anafleksis",
    "kind": "match",
    "layout": "unified",
    "bankCode": "29366",
    "code": "Θέμα 2<sup>ο</sup> · #29366",
    "title": "#29366 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-08-systima-anafleksis",
    "sourceOrder": 36,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ένας αναφλεφτήρας (μπουζί). Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του μπουζί:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Θήκη"
          },
          {
            "id": "b",
            "text": "β. Κεραμικός μονωτής"
          },
          {
            "id": "c",
            "text": "γ. Χάλκινος δακτύλιος"
          },
          {
            "id": "δ",
            "text": "δ. Ηλεκτρόδια"
          },
          {
            "id": "ε",
            "text": "ε. Ακροδέκτης"
          }
        ],
        "pairs": {
          "1": "ε",
          "2": "β",
          "3": "α",
          "4": "δ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_29366_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→ε, 2→β, 3→α, 4→δ (Περισσεύει το γ).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_29366_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Όταν το μπουζί λειτουργεί σε χαμηλή θερμοκρασία, υπάρχει πιθανότητα αυτανάφλεξης του μίγματος και της έκρηξής του (κρουστικής ανάφλεξης).",
        "answer": false,
        "explain": "Λάθος. Η χαμηλή θερμοκρασία προκαλεί ρύπανση/καπνιά (fouling) στο μπουζί και όχι αυτανάφλεξη (η οποία οφείλεται σε υπερθέρμανση)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Η γωνία που διαγράφει το έκκεντρο κατά την περιστροφή του, όσο χρόνο οι πλατίνες παραμένουν κλειστές, ονομάζεται γωνία επαφής ή γωνία ντούελ (Dwell).",
        "answer": true,
        "explain": "Σωστό. Αυτός είναι ο ακριβής ορισμός της γωνίας dwell."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Ο μηχανισμός κενού ή φούσκα ρυθμίζει το σημείο ανάφλεξης του μπουζί, ανάλογα με την ισχύ ή το φορτίο του κινητήρα.",
        "answer": true,
        "explain": "Σωστό. Η υποπίεση στο πολλαπλό εισαγωγής ελέγχει τη φούσκα κενού για τη ρύθμιση προπορείας."
      }
    ]
  },
  {
    "id": "ch04-31674",
    "group": "ch04-08-systima-anafleksis",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "31674",
    "code": "Θέμα 4<sup>ο</sup> · #31674",
    "title": "#31674 — Θέμα 4$^{ο}$ (α–γ)",
    "units": 25,
    "theory": "ch04-08-systima-anafleksis",
    "sourceOrder": 37,
    "stem": "Κατά την λειτουργία ενός βενζινοκινητήρα διαπιστώθηκε ότι κατά την καύση ακούγονται ευκρινώς έξω από τον κινητήρα μεταλλικοί κτύποι.",
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Να χαρακτηρίσετε το φαινόμενο αυτό.",
        "options": [
          {
            "id": "a",
            "text": "Στον βενζινοκινητήρα εμφανίζεται κρουστική καύση και το φαινόμενο αυτό ονομάζεται και «πειράκια»."
          },
          {
            "id": "b",
            "text": "Πρόκειται για ομαλή καύση υψηλής απόδοσης."
          },
          {
            "id": "c",
            "text": "Είναι ο φυσικός θόρυβος λειτουργίας των βαλβίδων."
          }
        ],
        "answer": "a",
        "explain": "Οι μεταλλικοί κτύποι κατά την καύση οφείλονται στην κρουστική καύση («πειράκια»)."
      },
      {
        "kind": "mc",
        "subq": "β",
        "prompt": "Να αναφέρετε την αιτία εμφάνισης του φαινομένου αυτού.",
        "options": [
          {
            "id": "a",
            "text": "Ως αιτία εμφάνισης της κρουστικής καύσης θεωρείται η ταχύτερη μετάδοση της φλόγας μέσα στο καύσιμο μίγμα πέρα από κάποιο κρίσιμο όριο, καθώς και η υπερθέρμανση του κινητήρα."
          },
          {
            "id": "b",
            "text": "Η πολύ χαμηλή θερμοκρασία λειτουργίας του κινητήρα."
          },
          {
            "id": "c",
            "text": "Η χρήση καυσίμου με υπερβολικά υψηλό αριθμό οκτανίων."
          }
        ],
        "answer": "a",
        "explain": "Η υπερθέρμανση και η απότομη ανώμαλη διάδοση της φλόγας προκαλούν κρουστική καύση."
      },
      {
        "kind": "mc",
        "subq": "γ",
        "prompt": "Να αναφέρετε τις συνέπειες που έχουμε από το φαινόμενο αυτό.",
        "options": [
          {
            "id": "a",
            "text": "Κόπωση των εξαρτημάτων, μερική ή ολική καταστροφή (π.χ. τρύπημα του εμβόλου), αυξημένη κατανάλωση και αυξημένη ποσότητα ρυπαντών."
          },
          {
            "id": "b",
            "text": "Αύξηση της ιπποδύναμης και μείωση της κατανάλωσης καυσίμου."
          },
          {
            "id": "c",
            "text": "Κανένα απολύτως πρόβλημα στη μακροζωία του κινητήρα."
          }
        ],
        "answer": "a",
        "explain": "Η κρουστική καύση καταστρέφει έμβολα, διωστήρες και προκαλεί σοβαρές μηχανικές ζημιές."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-09-systima-lipansis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-34762",
    "group": "ch04-09-systima-lipansis",
    "kind": "match",
    "layout": "unified",
    "bankCode": "34762",
    "code": "Θέμα 2<sup>ο</sup> · #34762",
    "title": "#34762 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-09-systima-lipansis",
    "sourceOrder": 38,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται μια αντλία λαδιού με λοβούς (στροφείς). Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη της αντλίας λαδιού:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Εξωτερικός ρότορας"
          },
          {
            "id": "b",
            "text": "β. Εσωτερικός ρότορας"
          },
          {
            "id": "c",
            "text": "γ. Κάλυμμα αντλίας"
          },
          {
            "id": "δ",
            "text": "δ. Βαλβίδα ανακούφισης πίεσης"
          },
          {
            "id": "ε",
            "text": "ε. Τσιμούχα λαδιού"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "α",
          "3": "β",
          "4": "δ"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34762_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→α, 3→β, 4→δ (Περισσεύει το ε).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34762_fig01.webp"
        ]
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Ιξώδες είναι η αντίσταση που προβάλουν τα μόρια ενός λιπαντικού στη μεταξύ τους κίνηση ή, διαφορετικά, η συνεκτικότητα των μορίων του λιπαντικού.",
        "answer": true,
        "explain": "Σωστό. Ο ορισμός του ιξώδους αναφέρεται στην εσωτερική τριβή και συνεκτικότητα του ρευστού."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Η αντλία λαδιού παίρνει κίνηση από τον εκκεντροφόρο άξονα με οδοντωτούς τροχούς, ή από το στροφαλοφόρο άξονα.",
        "answer": true,
        "explain": "Σωστό. Η αντλία λαδιού κινείται απευθείας από τον στροφαλοφόρο ή μέσω του εκκεντροφόρου."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Η αντλία με στροφείς φέρει δύο οδοντωτούς τροχούς (γρανάζια).",
        "answer": false,
        "explain": "Λάθος. Η αντλία με στροφείς (λοβούς) αποτελείται από εσωτερικό και εξωτερικό ρότορα με ειδικούς λοβούς και όχι από απλά κλασικά γρανάζια οδοντωτών τροχών."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-04/ch04-10-systima-psyxis.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch04-25439",
    "group": "ch04-10-systima-psyxis",
    "kind": "mc",
    "layout": "unified",
    "bankCode": "25439",
    "code": "Θέμα 2<sup>ο</sup> · #25439",
    "title": "#25439 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-10-systima-psyxis",
    "sourceOrder": 39,
    "items": [
      {
        "kind": "mc",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε τον αριθμό κάθε μίας από τις παρακάτω προτάσεις και δίπλα στον αριθμό, το γράμμα που αντιστοιχεί στη σωστή απάντηση.",
        "prompt": "1. Η αντλία νερού βρίσκεται στο εμπρόσθιο τμήμα του κινητήρα και παίρνει κίνηση από:",
        "options": [
          {
            "id": "a",
            "text": "α. Τον εκκεντροφόρο."
          },
          {
            "id": "b",
            "text": "β. Τον στροφαλοφόρο."
          },
          {
            "id": "c",
            "text": "γ. Ηλεκτρικό μοτέρ."
          }
        ],
        "answer": "b",
        "explain": "Η αντλία νερού παίρνει κίνηση από τον στροφαλοφόρο (συνήθως μέσω ιμάντα)."
      },
      {
        "kind": "mc",
        "subq": "2.1",
        "prompt": "2. Το σύστημα ψύξης με δοχείο διαστολής θεωρείται:",
        "options": [
          {
            "id": "a",
            "text": "α. «Κλειστό» σύστημα ψύξης."
          },
          {
            "id": "b",
            "text": "β. «Μεταβαλλόμενο» σύστημα ψύξης."
          },
          {
            "id": "c",
            "text": "γ. «Ανοικτό» σύστημα ψύξης."
          }
        ],
        "answer": "a",
        "explain": "Το σύγχρονο σύστημα με δοχείο διαστολής είναι κλειστού τύπου."
      },
      {
        "kind": "mc",
        "subq": "2.1",
        "prompt": "3. Στα σύγχρονα αυτοκίνητα ο ανεμιστήρας του ψυγείου παίρνει κίνηση από:",
        "options": [
          {
            "id": "a",
            "text": "α. Το έμβολο."
          },
          {
            "id": "b",
            "text": "β. Τον εκκεντροφόρο."
          },
          {
            "id": "c",
            "text": "γ. Ηλεκτρικό μοτέρ."
          }
        ],
        "answer": "c",
        "explain": "Ο ανεμιστήρας στα σύγχρονα αυτοκίνητα κινείται από αυτόνομο ηλεκτρικό μοτέρ ελεγχόμενο από θερμοστάτη/εγκέφαλο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Στα ανοικτά συστήματα ψύξης που χρησιμοποιείται μόνο αέρας, ο κινητήρας ονομάζεται αερόψυκτος.",
        "answer": true,
        "explain": "Σωστό. Οι αερόψυκτοι κινητήρες λειτουργούν με απευθείας επαφή του αέρα."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Αν το ψυκτικό υγρό μετά τη θέρμανσή του απομακρύνεται χωρίς να επανακυκλοφορεί τότε το σύστημα ψύξης ονομάζεται «κλειστό».",
        "answer": false,
        "explain": "Λάθος. Αυτό είναι ανοικτό ή μη ανακυκλούμενο σύστημα (π.χ. σε ορισμένες θαλάσσιες εφαρμογές), όχι κλειστό σύστημα αυτοκινήτου."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Όταν το αυτοκίνητο κινείται σε μεγάλο υψόμετρο και το ψυγείο είναι κλειστό, το νερό βράζει σε χαμηλότερες θερμοκρασίες.",
        "answer": false,
        "explain": "Λάθος. Τα κλειστά συστήματα ψύξης υπό πίεση ανεβάζουν το σημείο βρασμού του νερού."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Το ψυγείο είναι το εξάρτημα που μεταφέρει τη θερμότητα του ζεστού νερού από τον κινητήρα προς την ατμόσφαιρα.",
        "answer": true,
        "explain": "Σωστό. Ο ρόλος του ψυγείου είναι η αποβολή της θερμότητας στο περιβάλλον."
      }
    ]
  },
  {
    "id": "ch04-34763",
    "group": "ch04-10-systima-psyxis",
    "kind": "match",
    "layout": "unified",
    "bankCode": "34763",
    "code": "Θέμα 2<sup>ο</sup> · #34763",
    "title": "#34763 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch04-10-systima-psyxis",
    "sourceOrder": 40,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται ο θερμοστάτης. Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του θερμοστάτη:",
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "α. Θήκη"
          },
          {
            "id": "b",
            "text": "β. Ελατήριο επαναφοράς βαλβίδας"
          },
          {
            "id": "c",
            "text": "γ. Βαλβίδα διαφυγής ψυκτικού υγρού"
          },
          {
            "id": "d",
            "text": "δ. Ελαστική έδρα βαλβίδας"
          },
          {
            "id": "ε",
            "text": "ε. Στέλεχος εμβόλου"
          }
        ],
        "pairs": {
          "1": "γ",
          "2": "α",
          "3": "δ",
          "4": "ε"
        },
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34763_fig01.webp",
        "explain": "Η σωστή αντιστοίχιση είναι: 1→γ, 2→α, 3→δ, 4→ε (Περισσεύει το β).",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-04/c_michanes-esoterikis-kafsis-2_ch04_34763_fig01.webp"
        ]
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "subqPrompt": "Να γράψετε τον αριθμό για κάθε ένα από τα κενά και δίπλα, μία από τις λέξεις που συμπληρώνει σωστά το παρακάτω κείμενο.",
        "textBefore": [
          "«Η υπερβολική ",
          " (1) του κινητήρα είναι επιβλαβής για τη λειτουργία του και πρέπει να αποφεύγεται. Έτσι, για τη σωστή λειτουργία της μηχανής, πρέπει μετά την ψυχρή εκκίνηση η ",
          " (2) τους να ανέβει όσο το δυνατό γρηγορότερα σε μια ορισμένη τιμή και να παραμένει, όσο γίνεται, συνεχώς σταθερή στην τιμή αυτή. Αυτό επιτυγχάνεται με τη χρήση του ",
          " (3).»"
        ],
        "answers": [
          "ψύξη",
          "θερμοκρασία",
          "θερμοστάτη"
        ],
        "bank": [
          "ταχύτητα",
          "θέρμανση",
          "ανεμιστήρα",
          "ψύξη",
          "θερμοκρασία",
          "θερμοστάτη"
        ],
        "explain": "Ο θερμοστάτης ελέγχει τη ροή του ψυκτικού υγρού ώστε η θερμοκρασία του κινητήρα να σταθεροποιείται γρήγορα."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-05/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].groups.push(...
[
  {
    "id": "ch05-04-thalamos-kafsis-mihanon-diesel",
    "chapter": "5",
    "title": "5.4.1 Θάλαμος καύσης μηχανών diesel",
    "blurb": "Θεμάτα σχετικά με τους θάλαμους καύσης των πετρελαιομηχανών και τα μέρη τους."
  },
  {
    "id": "ch05-05-antlia-trofodosias",
    "chapter": "5",
    "title": "5.5.3 Αντλία τροφοδοσίας ή αντλία χαμηλής πίεσης",
    "blurb": "Θέματα σχετικά με την αντλία τροφοδοσίας και το κύκλωμα έγχυσης καυσίμου."
  },
  {
    "id": "ch05-05-vasiko-filtro",
    "chapter": "5",
    "title": "5.5.4 Βασικό φίλτρο",
    "blurb": "Θέματα σχετικά με το βασικό φίλτρο και το σύστημα τροφοδοσίας πετρελαίου."
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-05/ch05-04-thalamos-kafsis-mihanon-diesel.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch05-31678",
    "group": "ch05-04-thalamos-kafsis-mihanon-diesel",
    "kind": "match",
    "layout": "unified",
    "bankCode": "31678",
    "code": "Θέμα 2<sup>ο</sup> · #31678",
    "title": "#31678 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch05-thalamos-kafsis",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται μία διάταξη μηχανής diesel με προθάλαμο καύσης. Να γράψετε στις απαντήσεις σας τους αριθμούς 1, 2, 3, 4 από τη Στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της Στήλης Β, που δίνει τη σωστή αντιστοίχιση. Σημειώνεται ότι ένα (1) γράμμα από τη Στήλη Β θα περισσέψει.",
        "prompt": "Αντιστοιχίστε τα μέρη της διάταξης μηχανής diesel με προθάλαμο καύσης:",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-05/c_michanes-esoterikis-kafsis-2_ch05_31678_fig01.webp"
        ],
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Σύστημα υποβοήθησης της εκκίνησης"
          },
          {
            "id": "b",
            "text": "Έμβολο"
          },
          {
            "id": "c",
            "text": "(Περισσεύει)"
          },
          {
            "id": "d",
            "text": "Προθάλαμος"
          },
          {
            "id": "e",
            "text": "Εγχυτήρας"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "d",
          "3": "e",
          "4": "a"
        },
        "explain": "Σύμφωνα με το σχήμα της διάταξης με προθάλαμο καύσης: 1 αντιστοιχεί στο έμβολο (β), 2 στον προθάλαμο (δ), 3 στον εγχυτήρα (ε) και 4 στο σύστημα υποβοήθησης της εκκίνησης (α). Περισσεύει το γ.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-05/c_michanes-esoterikis-kafsis-2_ch05_31678_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν γράφοντας δίπλα στο γράμμα που αντιστοιχεί κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή, ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Με τον άμεσο ψεκασμό επιτυγχάνεται η ομοιόμορφη ανάμιξη του καυσίμου και κατά συνέπεια, είναι μικρότερες οι απώλειες της θερμότητας, λόγω ακριβώς του περιορισμένου χώρου της συμπίεσης.",
        "answer": true,
        "explain": "Σωστό. Ο άμεσος ψεκασμός προσφέρει πλεονεκτήματα στην ομοιόμορφη ανάμιξη και στη μείωση των θερμικών απωλειών."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Στις πετρελαιομηχανές με στροβιλοθάλαμο ο όγκος του θαλάμου είναι περίπου το 25% έως 35% του συνολικού όγκου της συμπίεσης.",
        "answer": false,
        "explain": "Λάθος. Στον στροβιλοθάλαμο ο όγκος του βοηθητικού θαλάμου είναι μεγαλύτερος ποσοστιαία (συνήθως 50% ή παραπάνω ανάλογα με τον τύπο)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Στις μηχανές με προθάλαμο καύσης, σε κάθε κύλινδρο, το καύσιμο ψεκάζεται μέσα σε ένα μικρό θάλαμο, ο οποίος είναι διαμορφωμένος στην κυλινδροκεφαλή της μηχανής, περίπου στο κέντρο του κύριου θαλάμου καύσης.",
        "answer": true,
        "explain": "Σωστό. Ο προθάλαμος καύσης βρίσκεται στην κυλινδροκεφαλή και εκεί πραγματοποιείται η αρχική ανάφλεξη."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-05/ch05-05-antlia-trofodosias.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch05-23725",
    "group": "ch05-05-antlia-trofodosias",
    "kind": "match",
    "layout": "unified",
    "bankCode": "23725",
    "code": "Θέμα 2<sup>ο</sup> · #23725",
    "title": "#23725 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch05-systima-trofodosias",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται η θέση της αντλίας τροφοδοσίας στο κύκλωμα έγχυσης του καυσίμου σε πετρελαιοκινητήρα. Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του κυκλώματος έγχυσης καυσίμου:",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-05/c_michanes-esoterikis-kafsis-2_ch05_23725_fig01.webp"
        ],
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Αντλία τροφοδοσίας"
          },
          {
            "id": "b",
            "text": "Εγχυτήρας"
          },
          {
            "id": "c",
            "text": "Αντλία έγχυσης"
          },
          {
            "id": "d",
            "text": "Δεξαμενή καυσίμου"
          },
          {
            "id": "e",
            "text": "Βασικό φίλτρο"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "a",
          "3": "e",
          "4": "c",
          "5": "b"
        },
        "explain": "Σύμφωνα με το διάγραμμα κυκλώματος τροφοδοσίας: 1 είναι η δεξαμενή καυσίμου (δ), 2 η αντλία τροφοδοσίας (α), 3 το βασικό φίλτρο (ε), 4 η αντλία έγχυσης (γ) και 5 ο εγχυτήρας (β).",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-05/c_michanes-esoterikis-kafsis-2_ch05_23725_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η αυτανάφλεξη του καυσίμου που παρατηρείται στις βενζινομηχανές είναι αποτέλεσμα της μεγάλης θερμοκρασίας που αναπτύσσεται στον κύλινδρο.",
        "answer": false,
        "explain": "Λάθος. Στις βενζινομηχανές η αυτανάφλεξη (αντιλαμπή / πινγκ-πονγκ) είναι ανεπιθύμητο φαινόμενο που προκαλείται από τοπικές υπερθερμίες ή ακατάλληλο καύσιμο, όχι από τον κανονικό κύκλο λειτουργίας."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Οι μηχανές άμεσης έγχυσης παρουσιάζουν υψηλούς βαθμούς απόδοσης και μικρή ειδική κατανάλωση καυσίμου.",
        "answer": true,
        "explain": "Σωστό. Οι κινητήρες άμεσης έγχυσης διαθέτουν εξαιρετική θερμική απόδοση και χαμηλότερη κατανάλωση."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Οι πετρελαιομηχανές με έμμεση έγχυση καυσίμου παρουσιάζουν λιγότερο θορυβώδη λειτουργία.",
        "answer": true,
        "explain": "Σωστό. Η έμμεση έγχυση (με προθάλαμο ή στροβιλοθάλαμο) εξασφαλίζει πιο ομαλή αύξηση της πίεσης και άρα πιο αθόρυβη λειτουργία."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η σχέση συμπίεσης των πετρελαιομηχανών ξεκινά από την τιμή 10:1 και φθάνει στην τιμή 16:1.",
        "answer": false,
        "explain": "Λάθος. Η σχέση συμπίεσης στις πετρελαιομηχανές είναι σημαντικά υψηλότερη, ξεκινώντας συνήθως από 14:1 ή 16:1 έως 22:1 ή και περισσότερο."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Το κακό φιλτράρισμα του καυσίμου σε μια πετρελαιομηχανή μπορεί να προκαλέσει μείωση της απόδοσης του κινητήρα.",
        "answer": true,
        "explain": "Σωστό. Τυχόν ακαθαρσίες στο καύσιμο φθείρουν τα ακριβή μέρη της αντλίας έγχυσης και των εγχυτήρων, μειώνοντας την απόδοση."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-05/ch05-05-vasiko-filtro.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch05-33200",
    "group": "ch05-05-vasiko-filtro",
    "kind": "match",
    "layout": "unified",
    "bankCode": "33200",
    "code": "Θέμα 2<sup>ο</sup> · #33200",
    "title": "#33200 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch05-systima-trofodosias-petrelaiou",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "subqPrompt": "Στο παρακάτω σχήμα απεικονίζεται το διάγραμμα λειτουργίας του συστήματος τροφοδοσίας πετρελαίου. Να γράψετε τους αριθμούς 1, 2, 3, 4, 5 από τη στήλη Α και δίπλα ένα από τα γράμματα α, β, γ, δ, ε, στ της στήλης Β που δίνει τη σωστή αντιστοίχιση.",
        "prompt": "Αντιστοιχίστε τα μέρη του διαγράμματος λειτουργίας του συστήματος τροφοδοσίας πετρελαίου:",
        "images": [
          "images/c/michanes-esoterikis-kafsis-2/chapter-05/c_michanes-esoterikis-kafsis-2_ch05_33200_fig01.webp"
        ],
        "left": [
          {
            "id": "1",
            "text": "1"
          },
          {
            "id": "2",
            "text": "2"
          },
          {
            "id": "3",
            "text": "3"
          },
          {
            "id": "4",
            "text": "4"
          },
          {
            "id": "5",
            "text": "5"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Αντλία τροφοδοσίας"
          },
          {
            "id": "b",
            "text": "Εγχυτήρας"
          },
          {
            "id": "c",
            "text": "Αντλία έγχυσης καυσίμου"
          },
          {
            "id": "d",
            "text": "Δεξαμενή καυσίμου"
          },
          {
            "id": "e",
            "text": "Βασικό φίλτρο"
          },
          {
            "id": "στ",
            "text": "Σύστημα υποβοήθησης της εκκίνησης (Περισσεύει)"
          }
        ],
        "pairs": {
          "1": "d",
          "2": "b",
          "3": "a",
          "4": "e",
          "5": "c"
        },
        "explain": "Σύμφωνα με το διάγραμμα: 1 είναι η δεξαμενή καυσίμου (δ), 2 ο εγχυτήρας (β), 3 η αντλία τροφοδοσίας (α), 4 το βασικό φίλτρο (ε) και 5 η αντλία έγχυσης καυσίμου (γ). Περισσεύει το στ.",
        "image": "images/c/michanes-esoterikis-kafsis-2/chapter-05/c_michanes-esoterikis-kafsis-2_ch05_33200_fig01.webp"
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντισουχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η δεξαμενή καυσίμου τοποθετείται σε κάποιο σημείο του οχήματος, το οποίο να είναι αρκετά προστατευμένο από τυχόν συγκρούσεις και υψηλές θερμοκρασίες.",
        "answer": true,
        "explain": "Σωστό. Η σωστή θέση της δεξαμενής διασφαλίζει την ασφάλεια από φωτιά ή πρόσκρουση."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Οι αντλίες τροφοδοσίας μπορεί να είναι μόνο διπλής ενέργειας.",
        "answer": false,
        "explain": "Λάθος. Οι αντλίες τροφοδοσίας μπορεί να είναι απλής ή διπλής ενέργειας."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Οι αντλίες τροφοδοσίας διαθέτουν και μηχανισμό χειροκίνητης λειτουργίας για τη συμπλήρωση και τον εξαερισμό όλου του κυκλώματος, μετά από επισκευές ή συντηρήσεις.",
        "answer": true,
        "explain": "Σωστό. Ο χειροκίνητος μοχλός (έμβολο χειρός) χρησιμοποιείται για τον εξαερισμό και την πλήρωση του κυκλώματος."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Η χωρητικότητα των δεξαμενών καυσίμου στα οχήματα με μηχανές diesel είναι ίδια με των βενζινοκινητήρων.",
        "answer": false,
        "explain": "Λάθος. Η χωρητικότητα εξαρτάται από τον τύπο και τη χρήση του οχήματος και δεν είναι απαραίτητα ίδια."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Το κακό φιλτράρισμα του καυσίμου σε μια πετρελαιομηχανή μπορεί να προκαλέσει μείωση της απόδοσης του κινητήρα.",
        "answer": true,
        "explain": "Σωστό. Οι ακαθαρσίες στο καύσιμο προκαλούν φθορές και δυσλειτουργίες στο σύστημα έγχυσης."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-06/groups.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].groups.push(...
[
  {
    "id": "ch06-02-ilektronikes-peristrofikes-antlies",
    "chapter": "6",
    "title": "6.2.1 Ηλεκτρονικές περιστροφικές αντλίες",
    "blurb": "Ηλεκτρονικές περιστροφικές αντλίες και συστήματα ηλεκτρονικού ελέγχου EDC."
  },
  {
    "id": "ch06-03-charaktiristika-tdi",
    "chapter": "6",
    "title": "6.3.2 Χαρακτηριστικά του κινητήρα TDI",
    "blurb": "Χαρακτηριστικά του κινητήρα TDI (turbo diesel άμεσου ψεκασμού) και συστήματα ελέγχου."
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-06/ch06-02-ilektronikes-peristrofikes-antlies.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch06-33195",
    "group": "ch06-02-ilektronikes-peristrofikes-antlies",
    "kind": "blank",
    "layout": "unified",
    "bankCode": "33195",
    "code": "Θέμα 2<sup>ο</sup> · #33195",
    "title": "#33195 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch06-02-ilektronikes-peristrofikes-antlies",
    "sourceOrder": 1,
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε τον αριθμό κάθε ενός κενού από το παρακάτω κείμενο και δίπλα τη λέξη που συμπληρώνει σωστά την αντίστοιχη πρόταση. Σημειώνεται ότι 3 από τις λέξεις θα περισσέψουν. Λέξεις που δίνονται: αναγνωρίζει, ελέγχου, αυτοδιάγνωσης, αισθητήρες, ενεργοποιητές, ρυθμίζει.",
        "textBefore": [
          "«Στο σύστημα ",
          " (1) όλοι οι ",
          " (2) και όλες οι λειτουργίες του ελέγχου τόσο της αντλίας πετρελαίου, όσο γενικότερα του οχήματος ελέγχονται μέσω ενός κυκλώματος ηλεκτρονικού ελέγχου που ",
          " (3) βλάβες και χαλασμένα εξαρτήματα»."
        ],
        "answers": [
          "αυτοδιάγνωσης",
          "αριθμοί",
          "αναγνωρίζει"
        ],
        "bank": [
          "αναγνωρίζει",
          "ελέγχου",
          "αυτοδιάγνωσης",
          "αισθητήρες",
          "ενεργοποιητές",
          "ρυθμίζει"
        ],
        "explain": "Σύμφωνα με τη θεωρία των συστημάτων ηλεκτρονικού ελέγχου EDC, το σύστημα αυτοδιάγνωσης (1) αξιοποιεί τους αισθητήρες (2) και ο εγκέφαλος αναγνωρίζει (3) τυχόν βλάβες."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η ανακύκλωση των καυσαερίων βοηθάει στην μείωση των NOx (οξείδια του Αζώτου) με τη μείωση της θερμοκρασίας στο θάλαμο καύσης.",
        "answer": true,
        "explain": "Σωστό. Η ανακύκλωση καυσαερίων (EGR) μειώνει τις μέγιστες θερμοκρασίες καύσης περιορίζοντας την περιεκτικότητα του μίγματος σε οξυγόνο, με αποτέλεσμα τη μείωση των εκπομπών NOx."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Τα συστήματα EDC (αντλίες πετρελαίου με ηλεκτρονικό έλεγχο λειτουργίας) αποτελούνται από δύο υποσυστήματα, τους αισθητήρες και τους ενεργοποιητές.",
        "answer": false,
        "explain": "Λάθος. Τα συστήματα EDC αποτελούνται από τρία βασικά υποσυστήματα: τους αισθητήρες, τη μονάδα ελέγχου (εγκέφαλο) και τους ενεργοποιητές."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Πλεονέκτημα των αντλιών πετρελαίου με ηλεκτρονικό έλεγχο, αποτελεί η δυνατότητα σύνδεσης με μεγάλο αριθμό ηλεκτρονικών συστημάτων ελέγχου.",
        "answer": true,
        "explain": "Σωστό. Ο ηλεκτρονικός έλεγχος επιτρέπει την εύκολη δικτύωση και ανταλλαγή δεδομένων με άλλα συστήματα του οχήματος (π.χ. ABS, ASR, Immobiliser)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Ο εγκέφαλος συγκρίνει τις τιμές που παίρνει από τους διάφορους ενεργοποιητές.",
        "answer": false,
        "explain": "Λάθος. Ο εγκέφαλος συγκρίνει τις τιμές που λαμβάνει από τους αισθητήρες με τις αποθηκευμένες επιθυμητές τιμές (χαρτογραφήσεις) και στη συνέχεια δίνει εντολές στους ενεργοποιητές."
      }
    ]
  }
]
);
;

// --- Source: exercises/c/michanes-esoterikis-kafsis-2/chapter-06/ch06-03-charaktiristika-tdi.js ---
;
window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] = window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["michanes-esoterikis-kafsis-2"].exercises.push(...
[
  {
    "id": "ch06-28766",
    "group": "ch06-03-charaktiristika-tdi",
    "kind": "blank",
    "layout": "unified",
    "bankCode": "28766",
    "code": "Θέμα 2<sup>ο</sup> · #28766",
    "title": "#28766 — Θέμα 2$^{ο}$ (2.1–2.2)",
    "units": 25,
    "theory": "ch06-03-charaktiristika-tdi",
    "sourceOrder": 2,
    "items": [
      {
        "kind": "blank",
        "subq": "2.1",
        "subqPrompt": "Να γράψετε τον αριθμό κάθε ενός κενού από το παρακάτω κείμενο και δίπλα τη λέξη που συμπληρώνει σωστά την αντίστοιχη πρόταση. Σημειώνεται ότι 3 από τις λέξεις θα περισσέψουν. Λέξεις που δίνονται: ψύξη, μείωση, εκτόνωση, θέρμανση, συμπίεση, αύξηση, βελτίωση.",
        "textBefore": [
          "«Στον κινητήρα TDI (turbo diesel άμεσου ψεκασμού) η ",
          " (1) του εισερχόμενου αέρα έχει ως αποτέλεσμα την ",
          " (2) της θερμοκρασίας του και σαν άμεση συνέπεια τη ",
          " (3) της πυκνότητάς του. Αυτό αποτελεί μειονέκτημα και αντιμετωπίζεται με την ",
          " (4) του εισερχόμενου αέρα σε έναν εναλλάκτη θερμότητας αέρα – αέρα»."
        ],
        "answers": [
          "συμπίεση",
          "αύξηση",
          "μείωση",
          "ψύξη"
        ],
        "bank": [
          "ψύξη",
          "μείωση",
          "εκτόνωση",
          "θέρμανση",
          "συμπίεση",
          "αύξηση",
          "βελτίωση"
        ],
        "explain": "Η συμπίεση του αέρα από τον υπερπληρωτή (turbo) προκαλεί αύξηση της θερμοκρασίας του και μείωση της πυκνότητάς του. Το πρόβλημα αυτό αντιμετωπίζεται με την ψύξη του αέρα μέσω intercooler (εναλλάκτη θερμότητας)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις που ακολουθούν, γράφοντας δίπλα στο γράμμα που αντιστοιχεί σε κάθε πρόταση, τη λέξη Σωστό, αν η πρόταση είναι σωστή ή τη λέξη Λάθος, αν η πρόταση είναι λανθασμένη.",
        "prompt": "α. Η ανακύκλωση των καυσαερίων βοηθάει στη μείωση των NOx (οξείδια του Αζώτου) με τη μείωση της θερμοκρασίας στο θάλαμο καύσης.",
        "answer": true,
        "explain": "Σωστό. Η ανακύκλωση καυσαερίων (EGR) μειώνει τις μέγιστες θερμοκρασίες καύσης στον κύλινδρο, περιορίζοντας τα οξείδια του αζώτου."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "β. Τα συστήματα EDC (αντλίες πετρελαίου με ηλεκτρονικό έλεγχο λειτουργίας) αποτελούνται από τρία υποσυστήματα, τους αισθητήρες, τη μονάδα ελέγχου και τους ενεργοποιητές.",
        "answer": true,
        "explain": "Σωστό. Τα συστήματα EDC περιλαμβάνουν την τριάδα: αισθητήρες, μονάδα ελέγχου (ECU) και ενεργοποιητές."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "γ. Μειονέκτημα του συστήματος Common Rail είναι η δυσκολία τοποθέτησης σε διαφορετικούς κινητήρες.",
        "answer": false,
        "explain": "Λάθος. Το σύστημα Common Rail διακρίνεται για την ευελιξία και την ευκολία προσαρμογής του σε μεγάλη ποικιλία κινητήρων πετρελαίου."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "δ. Στον κινητήρα TDI (turbo diesel άμεσου ψεκασμού) ο ψεκασμός όλης της ποσότητας του καυσίμου γίνεται μία φορά (σε ένα στάδιο).",
        "answer": false,
        "explain": "Λάθος. Στους σύγχρονους κινητήρες TDI (ιδιαίτερα με τεχνολογία αντλιοφυστούρων ή Common Rail) ο ψεκασμός συχνά διαχωρίζεται σε προψεκασμό και κύριο ψεκασμό (πολλαπλοί ψεκασμοί) για ομαλότερη λειτουργία."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "ε. Το σύστημα ακινητοποίησης του κινητήρα για την αποτροπή κλοπής του αυτοκινήτου (immobiliser), αλληλεπιδρά με τον κινητήρα TDI.",
        "answer": true,
        "explain": "Σωστό. Το Immobiliser επικοινωνεί με τον εγκέφαλο του κινητήρα (ECU) ώστε να επιτρέψει την τροφοδοσία και την εκκίνηση."
      }
    ]
  }
]
);
;
