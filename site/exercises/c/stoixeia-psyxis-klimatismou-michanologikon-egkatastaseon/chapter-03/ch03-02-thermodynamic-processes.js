window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon"].exercises.push(...
[
  {
    "id": "ch03-23748",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23748",
    "bankCode": "23748",
    "title": "Θέμα 4$^{ο}$ · #23748",
    "units": 25,
    "theory": "ch03-02-thermodynamic-processes",
    "stem": "Αέρας όγκου $V_1 = 0{,}8\\text{ m}^3$ συμπιέζεται ισοθερμοκρασιακά. Αν η αρχική και η τελική του πίεση είναι ίσες με $P_1 = 1\\text{ bar}$ και $P_2 = 10\\text{ bar}$ αντίστοιχα.",
    "givens": [
      {
        "label": "$V_1$",
        "value": "$0{,}8 \\text{m}^{3}$"
      },
      {
        "label": "$P_1$",
        "value": "$1 \\text{bar}$"
      },
      {
        "label": "$P_2$",
        "value": "$10 \\text{bar}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "Να προσδιορίσετε τον τελικό όγκο $V_2$ σε $\\text{m}^3$.",
        "formula": "$P_1 \\cdot V_1 = P_2 \\cdot V_2$",
        "answer": 0.08,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον νόμο του Boyle-Mariotte για ισοθερμοκρασιακή μεταβολή ($P \\cdot V = \\text{σταθ.}$)",
        "explain": "Στην ισοθερμοκρασιακή μεταβολή ισχύει $P_1 \\cdot V_1 = P_2 \\cdot V_2$. Λύνοντας ως προς $V_2$:\n$$\\begin{aligned}\nV_2 &= \\frac{P_1 \\cdot V_1}{P_2} \\\\\nV_2 &= \\frac{1\\text{ bar} \\cdot 0{,}8\\text{ m}^3}{10\\text{ bar}} = 0{,}08\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "open",
        "subq": "4.2",
        "prompt": "Να απεικονίσετε τη μεταβολή του παραπάνω ερωτήματος σε ένα διάγραμμα P-V (πίεσης-όγκου).",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23748_sol01.webp",
        "explain": "Η ισοθερμοκρασιακή μεταβολή απεικονίζεται σε διάγραμμα P-V ως ισόθερμη καμπύλη (υπερβολή) που συνδέει την αρχική κατάσταση (1) με πίεση $1\\text{ bar}$ και όγκο $0{,}8\\text{ m}^3$ με την τελική κατάσταση (2) με πίεση $10\\text{ bar}$ και όγκο $0{,}08\\text{ m}^3$."
      }
    ]
  },
  {
    "id": "ch03-23891",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #23891",
    "bankCode": "23891",
    "title": "Θέμα 2$^{ο}$ · #23891",
    "units": 25,
    "theory": "ch03-02-thermodynamic-processes",
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Να αντιστοιχίσετε τα διαγράμματα (1, 2, 3, 4) της Στήλης Α με τις αντίστοιχες μεταβολές αερίων της Στήλης Β:",
        "left": [
          {
            "id": "1",
            "text": "Διάγραμμα 1",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig01.webp"
          },
          {
            "id": "2",
            "text": "Διάγραμμα 2",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig02.webp"
          },
          {
            "id": "3",
            "text": "Διάγραμμα 3",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig03.webp"
          },
          {
            "id": "4",
            "text": "Διάγραμμα 4",
            "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23891_fig04.webp"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "Ισοθερμοκρασιακή Μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόθλιπτη Μεταβολή"
          },
          {
            "id": "c",
            "text": "Αδιαβατική Μεταβολή"
          },
          {
            "id": "d",
            "text": "Ισόογκη Μεταβολή"
          }
        ],
        "pairs": {
          "1": "b",
          "2": "c",
          "3": "d",
          "4": "a"
        },
        "explain": "Η ισόθλιπτη μεταβολή παριστάνεται με ευθεία παράλληλη στον άξονα των όγκων (1-β), η αδιαβατική με καμπύλη πιο απότομη από την ισόθερμη (2-γ), η ισόογκη με ευθεία παράλληλη στον άξονα των πιέσεων (3-δ) και η ισοθερμοκρασιακή με ισόθερμη υπερβολή (4-α)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "subqPrompt": "Να χαρακτηρίσετε τις προτάσεις ως Σωστό ή Λάθος:",
        "prompt": "Στην ισόθλιπτη μεταβολή, η θερμότητα που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Υπό σταθερή πίεση (ισόθλιπτη μεταβολή), η θερμότητα που ανταλλάσσεται είναι ίση με τη μεταβολή της ενθαλπίας ($Q = \\Delta H$)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Κατά την αδιαβατική μεταβολή, το αέριο συναλλάσσει θερμότητα με το περιβάλλον.",
        "answer": false,
        "explain": "Λάθος. Στην αδιαβατική μεταβολή δεν υπάρχει καμία ανταλλαγή θερμότητας μεταξύ του συστήματος και του περιβάλλοντος ($Q = 0$)."
      },
      {
        "kind": "tf",
        "subq": "2.2",
        "prompt": "Στην ισόογκη μεταβολή το έργο είναι μηδέν.",
        "answer": true,
        "explain": "Σωστό. Εφόσον ο όγκος παραμένει σταθερός ($\\Delta V = 0$), δεν παράγεται ούτε καταναλώνεται έργο ($W = P \\cdot \\Delta V = 0$)."
      }
    ]
  },
  {
    "id": "ch03-23961",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23961",
    "bankCode": "23961",
    "title": "Θέμα 4$^{ο}$ · #23961",
    "units": 25,
    "theory": "ch03-02-thermodynamic-processes",
    "stem": "Αέριο βρίσκεται σε κύλινδρο, με έμβολο που μπορεί να κινείται ελεύθερα. Η αρχική θερμοκρασία του αερίου είναι $27{}^{\\circ}\\text{C}$ και ο αρχικός του όγκος είναι $V_1 = 0{,}04\\text{ m}^3$. Το αέριο θερμαίνεται υπό σταθερή πίεση στη θερμοκρασία των $327{}^{\\circ}\\text{C}$.",
    "givens": [
      {
        "label": "$t_1$",
        "value": "$27 {}^{\\circ}\\text{C}$"
      },
      {
        "label": "$V_1$",
        "value": "$0{,}04 \\text{m}^{3}$"
      },
      {
        "label": "$t_2$",
        "value": "$327 {}^{\\circ}\\text{C}$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Να υπολογίσετε την αρχική απόλυτη θερμοκρασία $T_1$ του αερίου σε Κέλβιν.",
        "formula": "$T_1 = t_1 + 273$",
        "answer": 300,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε το 273 στη θερμοκρασία Κελσίου.",
        "explain": "Η αρχική απόλυτη θερμοκρασία σε Κέλβιν υπολογίζεται ως εξής:\n$$\\begin{aligned}\nT_1 &= 27 + 273 = 300\\text{ K}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Να υπολογίσετε την τελική απόλυτη θερμοκρασία $T_2$ του αερίου σε Κέλβιν.",
        "formula": "$T_2 = t_2 + 273$",
        "answer": 600,
        "unit": "K",
        "tolerance": 0.01,
        "hint": "Προσθέστε το 273 στην τελική θερμοκρασία Κελσίου.",
        "explain": "Η τελική απόλυτη θερμοκρασία σε Κέλβιν υπολογίζεται ως εξής:\n$$\\begin{aligned}\nT_2 &= 327 + 273 = 600\\text{ K}\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Να υπολογίσετε τον τελικό όγκο $V_2$ του αερίου σε $\\text{m}^3$.",
        "formula": "$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$",
        "answer": 0.08,
        "unit": "m³",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον νόμο του Gay-Lussac για ισόθλιπτη μεταβολή.",
        "explain": "Πρόκειται για ισόθλιπτη μεταβολή (υπό σταθερή πίεση), οπότε ισχύει ο νόμος του Gay-Lussac:\n$$\\begin{aligned}\n\\frac{V_1}{T_1} &= \\frac{V_2}{T_2} \\\\\nV_2 &= \\frac{V_1 \\cdot T_2}{T_1} \\\\\nV_2 &= \\frac{0{,}04\\text{ m}^3 \\cdot 600\\text{ K}}{300\\text{ K}} = 0{,}08\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "open",
        "subq": "δ",
        "prompt": "Να απεικονίσετε τη μεταβολή σε διάγραμμα P-V.",
        "explain": "Η μεταβολή παριστάνεται σε διάγραμμα P-V με ευθεία γραμμή κάθετη στον άξονα των πιέσεων (σταθερή πίεση $P_1 = P_2$), με φορά από την κατάσταση (1) ($V_1 = 0{,}04\\text{ m}^3$) προς τη κατάσταση (2) ($V_2 = 0{,}08\\text{ m}^3$)."
      }
    ]
  },
  {
    "id": "ch03-23963",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23963",
    "bankCode": "23963",
    "title": "#23963 — Θέμα 4$^{ο}$ (Ισοθερμοκρασιακή Μεταβολή)",
    "units": 25,
    "theory": "ch03-02-isothermiki",
    "stem": "Μια ποσότητα αερίου βρίσκεται σε κλειστό σύστημα και υφίσταται ισοθερμοκρασιακή μεταβολή, κατά τη διάρκεια της οποίας προσφέρεται στο αέριο έργο $200\\text{ kJ}$.",
    "givens": [
      {
        "label": "$W$",
        "value": "$-200 kJ$"
      },
      {
        "label": "$\\Delta U$",
        "value": "0"
      }
    ],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "Σχεδιάστε τη μεταβολή σε διάγραμμα πίεσης όγκου ($P-V$) και σημειώστε με ένα βέλος τη φορά της μεταβολής.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23963_sol01.webp",
        "explain": "Η ισοθερμοκρασιακή μεταβολή απεικονίζεται σε διάγραμμα $P-V$ ως ισόθερμη καμπύλη (υπερβολή) με κατάλληλη φορά."
      },
      {
        "kind": "open",
        "subq": "4.2",
        "prompt": "Απεικονίστε στο διάγραμμα το έργο που προσφέρθηκε.",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23963_sol02.webp",
        "explain": "Το έργο αντιστοιχεί στο εμβαδόν κάτω από την καμπύλη της ισοθερμοκρασιακής μεταβολής στο διάγραμμα $P-V$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Λαμβάνοντας υπόψη ότι σε μια ισοθερμοκρασιακή μεταβολή η μεταβολή της εσωτερικής ενέργειας είναι μηδέν ($\\Delta U = 0$), υπολογίστε τη θερμότητα $Q$ που συναλλάχθηκε με το σύστημα σε $\\text{kJ}$ και εξηγήστε αν και γιατί αυτή δόθηκε στο σύστημα ή αποδόθηκε από το σύστημα προς το περιβάλλον.",
        "formula": "$Q = \\Delta U + W$",
        "answer": -200,
        "unit": "kJ",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον πρώτο θερμοδυναμικό νόμο $Q = \\Delta U + W$, λαμβάνοντας υπόψη το πρόσημο του έργου που προσφέρεται στο αέριο.",
        "explain": "Σύμφωνα με τον πρώτο θερμοδυναμικό νόμο:\n$$\\begin{aligned}\nQ &= \\Delta U + W \\\nQ &= 0 + (-200\\text{ kJ}) = -200\\text{ kJ}\n\\end{aligned}$$\nΗ θερμότητα έχει αρνητικό πρόσημο, άρα αποδόθηκε από το αέριο προς το περιβάλλον."
      }
    ]
  },
  {
    "id": "ch03-23978",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "mc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23978",
    "bankCode": "23978",
    "title": "#23978 — Θέμα 4$^{ο}$ (Κύκλος Μεταβολών & Ισοθερμοκρασιακή)",
    "units": 25,
    "theory": "ch03-02-kyklos-metavolon",
    "stem": "Αέριο υφίσταται διαδοχικές μεταβολές και μελετάται σε διάγραμμα $P-V$.",
    "givens": [],
    "items": [
      {
        "kind": "open",
        "subq": "4.1",
        "prompt": "α. Θερμαίνεται, υπό σταθερό όγκο, μέχρι να διπλασιάσει την απόλυτη θερμοκρασία του (κατάσταση Β). β. Εκτονώνεται, υπό σταθερή θερμοκρασία, αποκτώντας την αρχική του πίεση (κατάσταση Γ). γ. Επιστρέφει ισόθλιπτα στην αρχική του κατάσταση Α. Να παραστήσετε τις μεταβολές αυτές σε διάγραμμα με άξονες $p-V$.",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23978_sol01.webp",
        "hintImage": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23978_sol01.webp",
        "explain": "Σχεδιάζεται η ισόογκη θέρμανση Α-Β, η ισοθερμοκρασιακή εκτόνωση Β-Γ και η ισόθλιπτη συμπίεση Γ-Α."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Δίνεται το διάγραμμα $P-V$ με κύκλο μεταβολών όπου ισχύει $T_B = T_\\Gamma$. Αναγνωρίστε την επιμέρους μεταβολή Α – Β:",
        "image": "images/c/stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon/chapter-03/c_stoixeia-psyxis-klimatismou-michanologikon-egkatastaseon_ch03_23978_fig01.webp",
        "options": [
          {
            "id": "a",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόογκη μεταβολή"
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
        "explain": "Η μεταβολή Α-Β γίνεται υπό σταθερή πίεση, επομένως είναι ισόθλιπτη μεταβολή."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Β – Γ:",
        "options": [
          {
            "id": "a",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "b",
        "explain": "Η μεταβολή Β-Γ γίνεται σε σταθερή θερμοκρασία ($T_B = T_\\Gamma$), επομένως είναι ισοθερμοκρασιακή μεταβολή."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Γ – Δ:",
        "options": [
          {
            "id": "a",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "c",
        "explain": "Η μεταβολή Γ-Δ γίνεται υπό σταθερή πίεση, επομένως είναι ισόθλιπτη μεταβολή."
      },
      {
        "kind": "mc",
        "subq": "4.2α",
        "prompt": "Αναγνωρίστε την επιμέρους μεταβολή Δ – Α:",
        "options": [
          {
            "id": "a",
            "text": "Ισόογκη μεταβολή"
          },
          {
            "id": "b",
            "text": "Ισοθερμοκρασιακή μεταβολή"
          },
          {
            "id": "c",
            "text": "Ισόθλιπτη μεταβολή"
          },
          {
            "id": "d",
            "text": "Αδιαβατική μεταβολή"
          }
        ],
        "answer": "a",
        "explain": "Η μεταβολή Δ-Α γίνεται υπό σταθερό όγκο, επομένως είναι ισόογκη μεταβολή."
      },
      {
        "kind": "calc",
        "subq": "4.2β",
        "prompt": "Με βάση το σχήμα όπου $P_B = 5\\text{ bar}$, $V_B = 4\\text{ lt}$ και $P_\\Gamma = 1\\text{ bar}$, υπολογίστε τον όγκο $V_\\Gamma$ του αερίου στη θέση Γ σε $\\text{lt}$.",
        "formula": "$P_B \\cdot V_B = P_\\Gamma \\cdot V_\\Gamma$",
        "answer": 20,
        "unit": "lt",
        "tolerance": 0.01,
        "hint": "Αξιοποιήστε το νόμο του Boyle-Mariotte για την ισοθερμοκρασιακή μεταβολή Β-Γ: $P_B \\cdot V_B = P_\\Gamma \\cdot V_\\Gamma$.",
        "explain": "Η μεταβολή Β – Γ είναι ισοθερμοκρασιακή, επομένως ισχύει:\n$$\\begin{aligned}\nP_B \\cdot V_B &= P_\\Gamma \\cdot V_\\Gamma \\\\\nV_\\Gamma &= \\frac{P_B \\cdot V_B}{P_\\Gamma} \\\\\nV_\\Gamma &= \\frac{5\\text{ bar} \\cdot 4\\text{ lt}}{1\\text{ bar}} = 20\\text{ lt}\n\\end{aligned}$$"
      }
    ]
  },
  {
    "id": "ch03-25163",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "match",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25163",
    "bankCode": "25163",
    "title": "#25163 — Θέμα 2$^{ο}$ (Είδη Μεταβολών & Πρώτος Νόμος)",
    "units": 25,
    "theory": "ch03-02-eidikefseis",
    "stem": "Ερωτήσεις θεωρίας και αντιστοίχισης σχετικά με τις καταστατικές μεταβολές των αερίων.",
    "givens": [],
    "items": [
      {
        "kind": "match",
        "subq": "2.1",
        "prompt": "Αντιστοιχίστε την ονομασία της μεταβολής από τη Στήλη Α με τον αντίστοιχο νόμο/σχέση από τη Στήλη Β:",
        "left": [
          {
            "id": "1",
            "text": "1. Ισοθερμοκρασιακή Μεταβολή"
          },
          {
            "id": "2",
            "text": "2. Ισόθλιπτη Μεταβολή"
          },
          {
            "id": "3",
            "text": "3. Ισόογκη Μεταβολή"
          }
        ],
        "right": [
          {
            "id": "a",
            "text": "$\\frac{V_1}{V_2} = \\frac{T_1}{T_2}$"
          },
          {
            "id": "b",
            "text": "$\\frac{P_1}{P_2} = \\frac{T_1}{T_2}$"
          },
          {
            "id": "c",
            "text": "$P_1 \\cdot V_1 = P_2 \\cdot V_2$"
          }
        ],
        "pairs": {
          "1": "c",
          "2": "a",
          "3": "b"
        },
        "explain": "Η ισοθερμοκρασιακή μεταβολή υπακούει στον νόμο Boyle-Mariotte ($P_1 V_1 = P_2 V_2$), η ισόθλιπτη στον νόμο Gay-Lussac/Charles ($V_1/V_2 = T_1/T_2$) και η ισόογκη στον νόμο Charles/Gay-Lussac ($P_1/P_2 = T_1/T_2$)."
      },
      {
        "kind": "tf",
        "subq": "2.2α",
        "prompt": "Στην αδιαβατική μεταβολή ενός ανοιχτού συστήματος, το έργο που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Σύμφωνα με τη θερμοδυναμική ανάλυση αδιαβατικών διεργασιών σε ανοιχτά συστήματα, ισχύει η ισότητα έργου και μεταβολής ενθαλπίας."
      },
      {
        "kind": "tf",
        "subq": "2.2β",
        "prompt": "Στην ισοθερμοκρασιακή μεταβολή ο όγκος μεταβάλλεται ανάλογα με την απόλυτη πίεση.",
        "answer": false,
        "explain": "Λάθος. Στην ισοθερμοκρασιακή μεταβολή ο όγκος μεταβάλλεται αντιστρόφως ανάλογα με την απόλυτη πίεση ($P \\cdot V = \\text{σταθ.}$)."
      },
      {
        "kind": "tf",
        "subq": "2.2γ",
        "prompt": "Κατά την ισόογκη μεταβολή αυξάνεται η πίεση ενώ η θερμοκρασία και ο όγκος παραμένουν σταθερά.",
        "answer": false,
        "explain": "Λάθος. Κατά την ισόογκη μεταβολή ο όγκος παραμένει σταθερός, αλλά όταν αυξάνεται η πίεση αυξάνεται αντίστοιχα και η θερμοκρασία."
      },
      {
        "kind": "tf",
        "subq": "2.2δ",
        "prompt": "Στην ισόθλιπτη μεταβολή, η θερμότητα που συναλλάσσει το σύστημα με το περιβάλλον ισούται με τη μεταβολή της ενθαλπίας του συστήματος.",
        "answer": true,
        "explain": "Σωστό. Σε ισόθλιπτη μεταβολή (υπό σταθερή πίεση), η ανταλλασσόμενη θερμότητα ισούται με τη μεταβολή της ενθαλπίας ($\\Delta H = Q_p$)."
      }
    ]
  },
  {
    "id": "ch03-25287",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "tf",
    "layout": "unified",
    "code": "Θέμα 2<sup>ο</sup> · #25287",
    "bankCode": "25287",
    "title": "#25287 — Θέμα 2$^{ο}$ (Τέλειο Aέριο & Μακροσκοπική/Μικροσκοπική Σκοπιά)",
    "units": 25,
    "theory": "ch03-02-teleio-aerio",
    "stem": "Ερωτήσεις κατανόησης για τη συμπεριφορά των τελειοποιημένων αερίων και τα χαρακτηριστικά τους μεγέθη.",
    "givens": [],
    "items": [
      {
        "kind": "tf",
        "subq": "2.1α",
        "prompt": "Η συμπεριφορά των πραγματικών αερίων προσεγγίζεται στη Θερμοδυναμική με ένα μοντέλο, που ονομάζεται τέλειο αέριο.",
        "answer": true,
        "explain": "Σωστό. Τα πραγματικά αέρια σε πολλές περιπτώσεις μελετώνται προσεγγιστικά μέσω του ιδανικού ή τέλειου αερίου."
      },
      {
        "kind": "tf",
        "subq": "2.1β",
        "prompt": "Η κατάσταση μιας δεδομένης ποσότητας ενός αερίου καθορίζεται από τις τιμές που παίρνουν τα μεγέθη Δύναμη, Όγκος και Θερμοκρασία.",
        "answer": false,
        "explain": "Λάθος. Η κατάσταση καθορίζεται από την Πίεση ($P$), τον Όγκο ($V$) και τη Θερμοκρασία ($T$) και όχι από τη δύναμη."
      },
      {
        "kind": "tf",
        "subq": "2.1γ",
        "prompt": "Η θερμοκρασία ενός αερίου φαίνεται πάνω σε ένα απλό διάγραμμα P-V.",
        "answer": false,
        "explain": "Λάθος. Το απλό διάγραμμα $P-V$ δείχνει άμεσα την πίεση και τον όγκο, ενώ η θερμοκρασία προκύπτει έμμεσα ή μέσω ισόθερμων καμπυλών."
      },
      {
        "kind": "tf",
        "subq": "2.1δ",
        "prompt": "Το υδρογόνο, το άζωτο, το οξυγόνο συμπεριφέρονται σαν τέλεια αέρια, όταν οι συνθήκες πίεσης και θερμοκρασίας δεν απέχουν πολύ από τις συνηθισμένες.",
        "answer": true,
        "explain": "Σωστό. Τα αέρια αυτά υγροποιούνται δύσκολα. Συμπεριφέρονται επομένως σαν τέλεια αέρια σε συνηθισμένες συνθήκες πίεσης και θερμοκρασίας, διότι τότε απέχουν πολύ από τις συνθήκες υγροποίησης."
      },
      {
        "kind": "blank",
        "subq": "2.2",
        "prompt": "Συμπληρώστε τα κενά στο παρακάτω κείμενο επιλέγοντας τις κατάλληλες λέξεις:",
        "textBefore": [
          "Από ",
          " σκοπιά, τέλειο αέριο θεωρείται εκείνο του οποίου τα μόρια συμπεριφέρονται σαν ελαστικές σφαίρες, αμελητέων διαστάσεων, που δεν αλληλεπιδρούν μεταξύ τους παρά μόνο κατά τη στιγμή που ",
          ". Το αέριο αυτό έχει συγκεκριμένη ",
          " (εξωτερική) συμπεριφορά."
        ],
        "answers": [
          "μικροσκοπική",
          "συγκρούονται",
          "μακροσκοπική"
        ],
        "bank": [
          "ηρεμούν",
          "μία",
          "μικροσκοπική",
          "συγκρούονται",
          "μακροσκοπική",
          "καλή"
        ],
        "explain": "Από μικροσκοπική σκοπιά θεωρούνται ελαστικές σφαίρες που συγκρούονται, ενώ εξωτερικά εμφανίζουν μακροσκοπική συμπεριφορά."
      }
    ]
  },
  {
    "id": "ch03-25288",
    "group": "ch03-02-thermodynamic-processes",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #25288",
    "bankCode": "25288",
    "title": "#25288 — Θέμα 4$^{ο}$ (Υπολογισμός Τελικού Όγκου & Μάζας Αερίου)",
    "units": 25,
    "theory": "ch03-02-katastatiki",
    "stem": "Τέλειο αέριο βρίσκεται σε κύλινδρο, με έμβολο που μπορεί να κινείται ελεύθερα. Η αρχική απόλυτη πίεση του αερίου είναι $P_1 = 4\\text{ bar}$ και ο αρχικός του όγκος είναι $V_1 = 0{,}09\\text{ m}^3$. Αν το αέριο συμπιεστεί υπό σταθερή θερμοκρασία $T = 27{}^{\\circ}\\text{C}$ μέχρι η πίεσή του να γίνει $P_2 = 12\\text{ bar}$.",
    "givens": [
      {
        "label": "$P_1$",
        "value": "$4 \\text{bar}$"
      },
      {
        "label": "$V_1$",
        "value": "$0{,}09 \\text{m}^{3}$"
      },
      {
        "label": "$P_2$",
        "value": "$12 \\text{bar}$"
      },
      {
        "label": "$T$",
        "value": "$27 {}^{\\circ}\\text{C} = 300 \\text{K}$"
      },
      {
        "label": "$R$",
        "value": "$400 \\text{J}/(\\text{kg}\\cdot \\text{K})$"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Υπολογίστε τον τελικό όγκο του αερίου $V_2$ σε $\\text{m}^3$.",
        "formula": "$V_2 = \\frac{P_1 \\cdot V_1}{P_2}$",
        "answer": 0.03,
        "unit": "m³",
        "tolerance": 0.01,
        "hint": "Εφαρμόστε τον νόμο Boyle-Mariotte για ισοθερμοκρασιακή μεταβολή: $P_1 \\cdot V_1 = P_2 \\cdot V_2$.",
        "explain": "Ο τελικός όγκος υπολογίζεται από την ισοθερμοκρασιακή μεταβολή:\n$$\\begin{aligned}\nP_1 \\cdot V_1 &= P_2 \\cdot V_2 \\\nV_2 &= \\frac{P_1 \\cdot V_1}{P_2} \\\nV_2 &= \\frac{4\\text{ bar} \\cdot 0{,}09\\text{ m}^3}{12\\text{ bar}} = 0{,}03\\text{ m}^3\n\\end{aligned}$$"
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Υπολογίστε τη μάζα του αερίου σε γραμμάρια ($\\text{gr}$).",
        "formula": "$m = \\frac{P_2 \\cdot V_2}{R \\cdot T}$",
        "answer": 300,
        "unit": "gr",
        "tolerance": 0.01,
        "hint": "Χρησιμοποιήστε την καταστατική εξίσωση των τέλειων αερίων $P \\cdot V = m \\cdot R \\cdot T$ για την τελική κατάσταση.",
        "explain": "Η μάζα του αερίου υπολογίζεται από την καταστατική εξίσωση:\n$$\\begin{aligned}\nP \\cdot V &= m \\cdot R \\cdot T \\\nm &= \\frac{P_2 \\cdot V_2}{R \\cdot T} \\\nm &= \\frac{12 \\cdot 10^5\\text{ Pa} \\cdot 0{,}03\\text{ m}^3}{400\\text{ J}/(\\text{kg}\\cdot\\text{K}) \\cdot 300\\text{ K}} \\\nm &= \\frac{36000}{120000} = 0{,}3\\text{ kg} = 300\\text{ gr}\n\\end{aligned}$$"
      }
    ]
  }
]
);
