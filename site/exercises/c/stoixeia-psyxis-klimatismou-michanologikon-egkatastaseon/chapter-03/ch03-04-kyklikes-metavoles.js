window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-29507",
    "group": "ch03-04-kyklikes-metavoles",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #29507",
    "bankCode": "29507",
    "title": "#29507 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-04-kyklikes-metavoles",
    "sourceOrder": 1,
    "stem": "Μία ποσότητα ιδανικού αερίου εκτελεί την κυκλική μεταβολή 1-2-3 του Σχήματος 1. Η μεταβολή 2-3 είναι ισοθερμοκρασιακή.",
    "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_#29507_fig01.png",
    "items": [
      {
        "kind": "mc",
        "subq": "α",
        "subqPrompt": "α) Να αναγνωρίσετε τις θερμοδυναμικές μεταβολές 1-2 και 3-1, στις οποίες υποβάλλεται το αέριο.",
        "prompt": "Ποιο είναι το είδος της θερμοδυναμικής μεταβολής 1-2;",
        "options": [
          {
            "id": "a",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή 1-2 είναι ισόογκη, λόγω του ότι στο διάγραμμα P-V απεικονίζεται ως ευθεία κάθετη στον άξονα των όγκων."
      },
      {
        "kind": "mc",
        "subq": "α",
        "prompt": "Ποιο είναι το είδος της θερμοδυναμικής μεταβολής 3-1;",
        "options": [
          {
            "id": "a",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "b",
        "explain": "Η μεταβολή 3-1 είναι ισόθλιπτη, λόγω του ότι στο διάγραμμα P-V απεικονίζεται ως ευθεία κάθετη στον άξονα των πιέσεων."
      },
      {
        "kind": "calc",
        "subq": "β",
        "subqPrompt": "β) Να συμπληρώσετε στον ακόλουθο πίνακα τις τιμές των θερμοδυναμικών μεταβλητών στα σημεία 1, 2 και 3, εάν γνωρίζετε ότι η αύξηση της θερμοκρασίας κατά την μεταβολή 1-2 ισούται με 100Κ. (Δίνεται 1 bar = 10^5 N/m^2). Υπολογίστε την πίεση $P_2$ στο σημείο 2.",
        "prompt": "Υπολογίστε την πίεση $P_2$ (σε bar) στο σημείο 2.",
        "formula": "$P_2 = \\frac{P_1 \\cdot T_2}{T_1}$",
        "answer": 4,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε τον νόμο των ισόογκων μεταβολών για τα σημεία 1 και 2.",
        "explain": "Επειδή η μεταβολή 1-2 είναι ισόογκη ($V_1 = V_2 = 0,04\\text{ m}^3$) και $T_1 = T_2 - 100 = 200 - 100 = 100\\text{ K}$, από τη σχέση $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ προκύπτει $P_2 = \\frac{2\\text{ bar} \\cdot 200\\text{ K}}{100\\text{ K}} = 4\\text{ bar}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε τον όγκο $V_3$ (σε m^3) στο σημείο 3.",
        "formula": "$V_3 = \\frac{P_2 \\cdot V_2}{P_3}$",
        "answer": 0.08,
        "unit": "m³",
        "tolerance": 0.001,
        "hint": "Η μεταβολή 2-3 είναι ισοθερμοκρασιακή ($T_2 = T_3$).",
        "explain": "Από την ισοθερμοκρασιακή μεταβολή 2-3 ισχύει $P_2 \\cdot V_2 = P_3 \\cdot V_3$, οπότε $V_3 = \\frac{4\\text{ bar} \\cdot 0,04\\text{ m}^3}{2\\text{ bar}} = 0,08\\text{ m}^3$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "subqPrompt": "γ) Να υπολογίσετε το έργο της μεταβολής 3-1 σε Joule.",
        "prompt": "Υπολογίστε το έργο $W_{31}$ της ισόθλιπτης μεταβολής 3-1 σε Joule.",
        "formula": "$W_{31} = P_3 \\cdot (V_1 - V_3)$",
        "answer": -8000,
        "unit": "J",
        "tolerance": 1,
        "hint": "Χρησιμοποιήστε τον τύπο του έργου σε ισόθλιπτη μεταβολή: $W = P \\cdot \\Delta V$. Λάβετε υπόψη ότι $1\\text{ bar} = 10^5\\text{ N/m}^2$.",
        "explain": "Το έργο στην ισόθλιπτη μεταβολή 3-1 είναι: $W_{31} = P_3 \\cdot (V_1 - V_3) = 2\\text{ bar} \\cdot (0,04\\text{ m}^3 - 0,08\\text{ m}^3) = 2\\text{ bar} \\cdot (-0,04\\text{ m}^3) = -0,08\\text{ bar} \\cdot \\text{m}^3 = -0,08 \\cdot 10^5\\text{ N/m}^2 \\cdot \\text{m}^3 = -8000\\text{ J}$. Το αρνητικό πρόσημο δείχνει ότι το έργο καταναλώθηκε από το αέριο."
      }
    ]
  },
  {
    "id": "ch03-23638",
    "group": "ch03-04-kyklikes-metavoles",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23638",
    "code": "Θέμα 4<sup>ο</sup> · #23638",
    "title": "#23638 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-04-kyklikes-metavoles",
    "sourceOrder": 4,
    "stem": "Η αρχική κατάσταση (1) ενός τέλειου αερίου περιγράφεται με τις τιμές $P_1 = 1\\text{ bar}$, $V_1 = 5\\text{ lt}$ και $T_1 = 350\\text{ K}$. Αρχικά, υφίσταται μια ισοθερμοκρασιακή συμπίεση μέχρι ο όγκος του να γίνει $V_2 = 2\\text{ lt}$ (κατάσταση 2). Στη συνέχεια, υφίσταται μια ισόογκη ψύξη μέχρι η πίεση του να επανέλθει στην αρχική της τιμή (κατάσταση 3) και τέλος μια ισόθλιπτη θέρμανση, οπότε επανέρχεται στην αρχική του κατάσταση.",
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "Να απεικονίσετε σχηματικά την κυκλική αυτή μεταβολή σε διάγραμμα P-V.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_#23638_sol01.png",
        "explain": "Η κυκλική μεταβολή αποτελείται από ισοθερμοκρασιακή συμπίεση (1-2), ισόογκη ψύξη (2-3) και ισόθλιπτη θέρμανση (3-1)."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογίσετε την πίεση στην κατάσταση 2.",
        "formula": "$P_2 = \\frac{P_1 \\cdot V_1}{V_2}$",
        "answer": 2.5,
        "unit": "bar",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε το νόμο του Boyle-Mariotte για την ισοθερμοκρασιακή μεταβολή 1-2.",
        "explain": " \\( P_2 = \\frac{P_1 \\cdot V_1}{V_2} = \\frac{1\\text{ bar} \\cdot 5\\text{ lt}}{2\\text{ lt}} = 2,5\\text{ bar} \\).",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_#23638_sol01.png"
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Να υπολογίσετε τη θερμοκρασία στην κατάσταση 3.",
        "formula": "$T_3 = \\frac{P_3 \\cdot T_2}{P_2}$",
        "answer": 140,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Για την ισόογκη μεταβολή 2-3 ισχύει $\\frac{P_2}{T_2} = \\frac{P_3}{T_3}$, όπου $P_3 = P_1 = 1\\text{ bar}$ και $T_2 = T_1 = 350\\text{ K}$.",
        "explain": " \\( T_3 = \\frac{P_3 \\cdot T_2}{P_2} = \\frac{1\\text{ bar} \\cdot 350\\text{ K}}{2,5\\text{ bar}} = 140\\text{ K} \\)."
      },
      {
        "kind": "calc",
        "subq": "4.4",
        "prompt": "Ποια είναι η τιμή της μεταβολής της εσωτερικής ενέργειας $\\Delta U$ στον παραπάνω κύκλο;",
        "formula": "$\\Delta U = 0$",
        "answer": 0,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Σε κάθε κυκλική μεταβολή, το σύστημα επανέρχεται στην αρχική του κατάσταση.",
        "explain": "Επειδή η μεταβολή είναι κυκλική, η εσωτερική ενέργεια ως συνάρτηση κατάστασης δεν μεταβάλλεται συνολικά, οπότε $\\Delta U = 0$ (μηδέν)."
      }
    ],
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_#23638_sol01.png"
    ]
  }
]
);
