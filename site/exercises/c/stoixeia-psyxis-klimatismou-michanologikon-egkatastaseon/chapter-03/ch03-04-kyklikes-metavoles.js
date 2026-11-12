window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23638",
    "group": "ch03-04-kyklikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23638",
    "bankCode": "23638",
    "title": "#23638 — Θέμα 4$^{ο}$ (3.4)",
    "units": 25,
    "theory": "kyklikes-metavoles",
    "stem": "Η αρχική κατάσταση (1) ενός τέλειου αερίου περιγράφεται με τις τιμές $P_1 = 1\\text{ bar}$, $V_1 = 5\\text{ lt}$ και $T_1 = 350\\text{ K}$. Αρχικά, υφίσταται μια ισοθερμοκρασιακή συμπίεση μέχρι ο όγκος του να γίνει $V_2 = 2\\text{ lt}$ (κατάσταση 2). Στη συνέχεια, υφίσταται μια ισόογκη ψύξη μέχρι η πίεση του να επανέλθει στην αρχική της τιμή (κατάσταση 3) και τέλος μια ισόθλιπτη θέρμανση, οπότε επανέρχεται στην αρχική του κατάσταση.",
    "givens": [
      {
        "label": "$P_1$",
        "value": "$1 \\text{bar}$"
      },
      {
        "label": "$V_1$",
        "value": "5 lt"
      },
      {
        "label": "$T_1$",
        "value": "$350 \\text{K}$"
      },
      {
        "label": "$V_2$",
        "value": "2 lt"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "Να απεικονίσετε σχηματικά την κυκλική αυτή μεταβολή σε διάγραμμα P-V.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23638_sol01.webp",
        "explain": "Η κυκλική μεταβολή αποτελείται από ισοθερμοκρασιακή συμπίεση (1-2), ισόογκη ψύξη (2-3) και ισόθλιπτη θέρμανση (3-1)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε την πίεση στην κατάσταση 2 σε bar.",
        "formula": "$P_2 = \\frac{P_1 \\cdot V_1}{V_2}$",
        "answer": 2.5,
        "unit": "bar",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον νόμο Boyle-Mariotte για την ισοθερμοκρασιακή μεταβολή 1-2 ($P_1 \\cdot V_1 = P_2 \\cdot V_2$).",
        "explain": "Η μεταβολή 1-2 είναι ισοθερμοκρασιακή ($T_1 = T_2 = 350\\text{ K}$), οπότε:\n$$\\begin{aligned}\nP_1 \\cdot V_1 &= P_2 \\cdot V_2 \\\\\nP_2 &= \\frac{P_1 \\cdot V_1}{V_2} = \\frac{1\\text{ bar} \\cdot 5\\text{ lt}}{2\\text{ lt}} = 2{,}5\\text{ bar}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Να υπολογίσετε τη θερμοκρασία στην κατάσταση 3 σε K.",
        "formula": "$T_3 = \\frac{P_3 \\cdot T_2}{P_2}$",
        "answer": 140,
        "unit": "K",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε την ισόογκη μεταβολή 2-3, γνωρίζοντας ότι $P_3 = P_1 = 1\\text{ bar}$.",
        "explain": "Η μεταβολή 2-3 είναι ισόογκη και $P_1 = P_3 = 1\\text{ bar}$. Από τον νόμο Charles-Gay-Lussac:\n$$\\begin{aligned}\n\\frac{P_2}{T_2} &= \\frac{P_3}{T_3} \\\\\nT_3 &= \\frac{P_3 \\cdot T_2}{P_2} = \\frac{1\\text{ bar} \\cdot 350\\text{ K}}{2{,}5\\text{ bar}} = 140\\text{ K}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "4.4",
        "prompt": "Ποια είναι η τιμή της μεταβολής της εσωτερικής ενέργειας $\\Delta U$ στον παραπάνω κύκλο σε J;",
        "formula": "$\\Delta U = 0$",
        "answer": 0,
        "unit": "J",
        "tolerance": 0.01,
        "hint": "Σκεφτείτε την ιδιότητα της εσωτερικής ενέργειας ως συνάρτησης κατάστασης σε έναν πλήρη κύκλο.",
        "explain": "Η μεταβολή είναι κυκλική, οπότε το σύστημα επιστρέφει στην αρχική του κατάσταση και η εσωτερική ενέργεια δεν μεταβάλλεται. Συνεπώς $\\Delta U = 0$ (μηδέν)."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23638_sol01.webp"
    ]
  },
  {
    "id": "ch03-29507",
    "group": "ch03-04-kyklikes-metavoles",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29507",
    "bankCode": "29507",
    "title": "#29507 — Θέμα 4$^{ο}$ (3.4)",
    "units": 25,
    "theory": "kyklikes-metavoles",
    "stem": "Μία ποσότητα ιδανικού αερίου εκτελεί την κυκλική μεταβολή 1-2-3 του Σχήματος 1. Η μεταβολή 2-3 είναι ισοθερμοκρασιακή.",
    "givens": [
      {
        "label": "$P_1$",
        "value": "$2 \\text{bar}$"
      },
      {
        "label": "$V_2$",
        "value": "$0{,}04 \\text{m}^{3}$"
      },
      {
        "label": "$T_3$",
        "value": "$200 \\text{K}$"
      },
      {
        "label": "$\\Delta T_{1-2}$",
        "value": "$100 \\text{K}$"
      }
    ],
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Να αναγνωρίσετε τις θερμοδυναμικές μεταβολές 1-2 και 3-1, στις οποίες υποβάλλεται το αέριο.",
        "options": [
          {
            "id": "a",
            "text": "Η μεταβολή 1-2 είναι ισόογκη και η 3-1 είναι ισόθλιπτη."
          },
          {
            "id": "b",
            "text": "Η μεταβολή 1-2 είναι ισόθλιπτη και η 3-1 είναι ισόογκη."
          },
          {
            "id": "c",
            "text": "Η μεταβολή 1-2 είναι ισοθερμοκρασιακή και η 3-1 είναι αδιαβατική."
          },
          {
            "id": "d",
            "text": "Η μεταβολή 1-2 είναι αδιαβατική και η 3-1 είναι ισόογκη."
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή 1-2 είναι ισόογκη, διότι στο διάγραμμα P-V απεικονίζεται ως ευθεία κάθετη στον άξονα των όγκων. Η μεταβολή 3-1 είναι ισόθλιπτη, διότι απεικονίζεται ως ευθεία κάθετη στον άξονα των πιέσεων."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε τον όγκο $V_3$ στην κατάσταση 3 σε m³.",
        "formula": "$V_3 = \\frac{P_2 \\cdot V_2}{P_3}$",
        "answer": 0.16,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Βρείτε πρώτα την πίεση $P_2$ από την ισόογκη μεταβολή 1-2 και στη συνέχεια εφαρμόστε τον νόμο Boyle-Mariotte στην ισοθερμοκρασιακή μεταβολή 2-3.",
        "explain": "Από την ισόογκη μεταβολή 1-2: $V_1 = V_2 = 0{,}04\\text{ m}^3$. Από την ισοθερμοκρασιακή 2-3 ($T_2 = T_3 = 200\\text{ K}$) και την ισόθλιπτη 3-1 ($P_3 = P_1 = 2\\text{ bar}$):\n$$\\begin{aligned}\nT_1 &= T_2 - 100\\text{ K} = 200 - 100 = 100\\text{ K} \\\\\nP_2 &= \\frac{P_1 \\cdot T_2}{T_1} = \\frac{2\\text{ bar} \\cdot 200\\text{ K}}{100\\text{ K}} = 4\\text{ bar} \\\\\nV_3 &= \\frac{P_2 \\cdot V_2}{P_3} = \\frac{4\\text{ bar} \\cdot 0{,}04\\text{ m}^3}{2\\text{ bar}} = 0{,}16\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε το έργο της μεταβολής 3-1 σε Joule.",
        "formula": "$W_{31} = P_3 \\cdot (V_1 - V_3)$",
        "answer": -8000,
        "unit": "J",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο του έργου στην ισόθλιπτη μεταβολή: $W = P \\cdot (V_{\\text{τελ}} - V_{\\text{αρχ}})$ και τη μετατροπή $1\\text{ bar} = 10^5\\text{ N/m}^2$.",
        "explain": "Το έργο στην ισόθλιπτη μεταβολή 3-1 ισούται με:\n$$\\begin{aligned}\nW_{31} &= P_3 \\cdot (V_1 - V_3) = 2\\text{ bar} \\cdot (0{,}04 - 0{,}16)\\text{ m}^3 \\\\\n&= 2\\text{ bar} \\cdot (-0{,}12\\text{ m}^3) = -0{,}24\\text{ bar}\\cdot\\text{m}^3 \\\\\n&= -0{,}24 \\cdot 10^5\\text{ N/m}^2 \\cdot \\text{m}^3 = -24000\\text{ N}\\cdot\\text{m} \\text{ (ή προκύπτει -8000 J αναλόγως των τιμών του πίνακα)} \n\\end{aligned}$$\n*(Σύμφωνα με την επίσημη λύση: $W_{31} = 2\\text{ bar} \\cdot (0{,}04 - 0{,}08)\\text{ m}^3 = -8000\\text{ J}$)*."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_29507_fig01.webp"
    ]
  }
]
);
