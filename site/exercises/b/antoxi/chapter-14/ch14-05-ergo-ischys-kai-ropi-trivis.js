window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch14-23002",
    "group": "ch14-05-ergo-ischys-kai-ropi-trivis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23002",
    "bankCode": "23002",
    "title": "#23002 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch14-05",
    "sourceOrder": 6,
    "stem": "Μια φρέζα κινείται με μέση ταχύτητα $v = 0{,}3\\text{ m/s}$. Το βάρος της τράπεζας της φρέζας είναι $10000\\text{ N}$. Το κομμάτι που επεξεργάζεται η φρέζα είναι $4000\\text{ N}$. Η τράπεζα της φρέζας και το κομμάτι που επεξεργάζεται είναι από χυτοσίδηρο. Ο συντελεστής τριβής ολίσθησης του χυτοσιδήρου πάνω σε χυτοσίδηρο είναι $0{,}15$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Η δύναμη $F_\\kappa$ που ενεργεί στο επίπεδο ολίσθησης",
        "formula": "$F_\\kappa = B_\\text{τράπεζας} + B_\\text{κομματιού}$",
        "answer": 14000,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Προσθέστε το βάρος της τράπεζας και το βάρος του κομματιού.",
        "explain": "Η κάθετη δύναμη είναι: $F_\\kappa = 10000 + 4000 = 14000\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η τριβή ολίσθησης $T$",
        "formula": "$T = \\eta \\cdot F_\\kappa$",
        "answer": 2100,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον συντελεστή τριβής επί την κάθετη δύναμη.",
        "explain": "Η τριβή ολίσθησης είναι: $T = 0{,}15 \\cdot 14000\\text{ N} = 2100\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Η ισχύς $P_T$ που χρειάζεται για να υπερνικηθεί η τριβή της τράπεζας της φρέζας",
        "formula": "$P_T = T \\cdot v$",
        "answer": 630,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε την τριβή $T$ επί την ταχύτητα $v$.",
        "explain": "Η ισχύς είναι: $P_T = 2100\\text{ N} \\cdot 0{,}3\\text{ m/s} = 630\\text{ W}$."
      }
    ]
  },
  {
    "id": "ch14-23317",
    "group": "ch14-05-ergo-ischys-kai-ropi-trivis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23317",
    "bankCode": "23317",
    "title": "#23317 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch14-05",
    "sourceOrder": 7,
    "stem": "Ένας ακονιστικός τροχός διαμέτρου $d = 800\\text{ mm}$, ακονίζει αντικείμενο το οποίο πιέζεται με δύναμη $F_\\kappa = 300\\text{ N}$ και κινείται με $f = 180\\text{ στρ/min}$, κατά τη διεύθυνση της ακτίνας του τροχού. Ο συντελεστής τριβής είναι $\\eta = 0{,}8$. Δίνεται $\\pi = 3{,}14$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "images": [
          {
            "url": "images/b/antoxi/chapter-14/b_antoxi_ch14_23317_fig01.webp",
            "caption": "Σχήμα ακονιστικού τροχού"
          }
        ],
        "prompt": "Να υπολογιστεί η τριβή ($T$) που αναπτύσσεται.",
        "formula": "$T = \\eta \\cdot F_\\kappa$",
        "answer": 240,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον συντελεστή τριβής επί την κάθετη δύναμη.",
        "explain": "Η τριβή είναι: $T = 0{,}8 \\cdot 300\\text{ N} = 240\\text{ N}$.",
        "image": "images/b/antoxi/chapter-14/b_antoxi_ch14_23317_fig01.webp"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "Να υπολογιστεί η ροπή τριβής ($M_T$).",
        "formula": "$M_T = T \\cdot \\frac{d}{2}$",
        "answer": 96,
        "unit": "Nm",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τη διάμετρο σε μέτρα και υπολογίστε $M_T = T \\cdot r$.",
        "explain": "Η ακτίνα είναι $r = \\frac{0{,}8\\text{ m}}{2} = 0{,}4\\text{ m}$. Η ροπή είναι $M_T = 240\\text{ N} \\cdot 0{,}4\\text{ m} = 96\\text{ Nm}$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "Να υπολογιστεί η ισχύς ($P_T$) που χρειάζεται.",
        "formula": "$P_T = M_T \\cdot 2\\pi \\cdot f$",
        "answer": 1808.64,
        "unit": "W",
        "tolerance": 0.01,
        "hint": "Μετατρέψτε τις στροφές ανά λεπτό σε στροφές ανά δευτερόλεπτο ($f / 60$) και εφαρμόστε $P_T = M_T \\cdot 2 \\cdot \\pi \\cdot f$.",
        "explain": "Συχνότητα σε στρ/s: $f = \\frac{180}{60} = 3\\text{ στρ/s}$. Η ισχύς είναι: $P_T = 96\\text{ Nm} \\cdot 2 \\cdot 3{,}14 \\cdot 3\\text{ s}^{-1} = 1808{,}64\\text{ W}$."
      }
    ]
  },
  {
    "id": "ch14-23443",
    "group": "ch14-05-ergo-ischys-kai-ropi-trivis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23443",
    "bankCode": "23443",
    "title": "#23443 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch14-05",
    "sourceOrder": 8,
    "stem": "Αυτοκίνητο κινείται με ταχύτητα $v = 10\\text{ m/s}$. Το βάρος του αυτοκινήτου ασκεί κάθετη δύναμη στο επίπεδο ολίσθησης ίση με $9.000\\text{ N}$ και το βάρος των επιβατών του αυτοκινήτου δύναμη ίση με $1.000\\text{ N}$. Εάν η ισχύς, που απαιτείται για να υπερνικηθεί η δύναμη της τριβής, ισούται με $P = 10.000\\text{ W}$, να υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "prompt": "Το μέτρο της συνολικής δύναμης που επενεργεί κάθετα στο επίπεδο της ολίσθησης $F_\\kappa$",
        "formula": "$F_\\kappa = B_\\text{αυτοκινήτου} + B_\\text{επιβατών}$",
        "answer": 10000,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Προσθέστε το βάρος του αυτοκινήτου και των επιβατών.",
        "explain": "Η κάθετη δύναμη είναι: $F_\\kappa = 9000 + 1000 = 10000\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Το μέτρο της τριβής ολίσθησης $T$",
        "formula": "$T = \\frac{P}{v}$",
        "answer": 1000,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την ισχύ $P$ δια της ταχύτητας $v$.",
        "explain": "Η τριβή είναι: $T = \\frac{10000\\text{ W}}{10\\text{ m/s}} = 1000\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "γ",
        "prompt": "Τον συντελεστή $\\eta$ της τριβής ολίσθησης που αναπτύσσεται",
        "formula": "$\\eta = \\frac{T}{F_\\kappa}$",
        "answer": 0.1,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την τριβή $T$ δια της κάθετης δύναμης $F_\\kappa$.",
        "explain": "Ο συντελεστής τριβής είναι: $\\eta = \\frac{1000\\text{ N}}{10000\\text{ N}} = 0{,}1$."
      }
    ]
  },
  {
    "id": "ch14-23688",
    "group": "ch14-05-ergo-ischys-kai-ropi-trivis",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #23688",
    "bankCode": "23688",
    "title": "#23688 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch14-05",
    "sourceOrder": 9,
    "stem": "Στο σχήμα 1 διακρίνεται ένας ακονιστικός τροχός διαμέτρου $d$, που ακονίζει ένα αντικείμενο. Το αντικείμενο πιέζεται στον τροχό με δύναμη ίση με $F_\\kappa = 200\\text{ N}$, κατά τη διεύθυνση της ακτίνας του τροχού. Ο συντελεστής τριβής είναι $\\eta = 0{,}8$ και η αντιτιθέμενη προς τον κινητήρα ροπή, που δημιουργεί η δύναμη τριβής, είναι ίση με $M_T = 40\\text{ Nm}$.",
    "items": [
      {
        "kind": "calc",
        "subq": "α",
        "images": [
          {
            "url": "images/b/antoxi/chapter-14/b_antoxi_ch14_23688_fig01.webp",
            "caption": "Σχήμα ακονιστικού τροχού"
          }
        ],
        "prompt": "Η τριβή ολίσθησης $T$",
        "formula": "$T = \\eta \\cdot F_\\kappa$",
        "answer": 160,
        "unit": "N",
        "tolerance": 0.01,
        "hint": "Πολλαπλασιάστε τον συντελεστή τριβής επί την κάθετη δύναμη.",
        "explain": "Η τριβή είναι: $T = 0{,}8 \\cdot 200\\text{ N} = 160\\text{ N}$."
      },
      {
        "kind": "calc",
        "subq": "β",
        "prompt": "Η διάμετρος του τροχού $d$",
        "formula": "$d = \\frac{2 \\cdot M_T}{T}$",
        "answer": 0.5,
        "unit": "m",
        "tolerance": 0.01,
        "hint": "Λύστε τον τύπο της ροπής $M_T = T \\cdot \\frac{d}{2}$ ως προς $d$.",
        "explain": "Η διάμετρος είναι: $d = \\frac{2 \\cdot 40\\text{ Nm}}{160\\text{ N}} = 0{,}5\\text{ m}$.",
        "image": "images/b/antoxi/chapter-14/b_antoxi_ch14_23688_fig01.webp"
      }
    ]
  }
]
);
