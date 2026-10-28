window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-16450",
    "group": "ch06-axial",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "16450",
    "code": "Θέμα 4<sup>ο</sup> · #16450",
    "title": "#16450 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "axial-stress",
    "sourceOrder": 1,
    "givens": [
      {
        "label": "α",
        "value": "2 cm"
      },
      {
        "label": "F",
        "value": "1000 daN"
      },
      {
        "label": "σ_επ",
        "value": "100 daN/cm²"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί η τετραγωνική διατομή Α της δοκού.",
        "formula": "A = α²",
        "answer": 4,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Υπολογίστε το εμβαδόν τετραγωνικής διατομής: A = α².",
        "explain": " \\( A = \\alpha^2 = (2\\text{ cm})^2 = 4\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί η εφελκυστική τάση σ που αναπτύσσεται στη δοκό.",
        "formula": "σ = F / A",
        "answer": 250,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο σ = F / A.",
        "explain": " \\( \\sigma = \\frac{F}{A} = \\frac{1000\\text{ daN}}{4\\text{ cm}^2} = 250\\text{ daN/cm}^2 \\) "
      },
      {
        "kind": "mc",
        "prompt": "γ) Αν η επιτρεπόμενη εφελκυστική τάση είναι σ_επ = 100 daN/cm², γίνεται έλεγχος αντοχής της δοκού. Η δοκός αντέχει;",
        "options": [
          {
            "id": "yes",
            "text": "Ναι, η δοκός αντέχει"
          },
          {
            "id": "no",
            "text": "Όχι, η δοκός δεν αντέχει"
          }
        ],
        "answer": "no",
        "explain": " \\( \\sigma = 250\\text{ daN/cm}^2 > 100\\text{ daN/cm}^2 = \\sigma_{\\text{επ}} \\). Επομένως η δοκός δεν αντέχει."
      }
    ]
  },
  {
    "id": "ch06-18233",
    "group": "ch06-axial",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18233",
    "code": "Θέμα 4<sup>ο</sup> · #18233",
    "title": "#18233 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "axial-compression",
    "sourceOrder": 2,
    "givens": [
      {
        "label": "d",
        "value": "2 cm"
      },
      {
        "label": "F",
        "value": "3140 daN"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε την κυκλική διατομή Α.",
        "formula": "A = (π · d²) / 4",
        "answer": 3.14,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο A = (π · d²) / 4 με π = 3,14.",
        "explain": " \\( A = \\frac{\\pi \\cdot d^2}{4} = \\frac{3,14 \\cdot (2\\text{ cm})^2}{4} = 3,14\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε την θλιπτική τάση σ που αναπτύσσεται.",
        "formula": "σ = F / A",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε τη δύναμη F με τη διατομή A.",
        "explain": " \\( \\sigma = \\frac{F}{A} = \\frac{3140\\text{ daN}}{3,14\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\) "
      }
    ]
  },
  {
    "id": "ch06-18580",
    "group": "ch06-axial",
    "kind": "tf",
    "layout": "unified",
    "bankCode": "18580",
    "code": "Θέμα 2<sup>ο</sup> · #18580",
    "title": "#18580 — Θέμα 2<sup>ο</sup>",
    "units": 25,
    "theory": "axial-basics",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "tf",
        "prompt": "2.1α. Κατά τη διάρκεια του εφελκυσμού, σε κάθε διατομή α αναπτύσσονται τάσεις (σ) κάθετες στη διατομή, των οποίων η συνισταμένη θα πρέπει να συμπίπτει με τον άξονα της ράβδου και να είναι ίση και αντίθετη με το εξωτερικό φορτίο.",
        "answer": true,
        "explain": "Σωστό. Στον αξονικό εφελκυσμό, οι ορθές τάσεις κατανέμονται ομοιόμορφα και η συνισταμένη τους ισούται με το εξωτερικό φορτίο."
      },
      {
        "kind": "tf",
        "prompt": "2.1β. Κατά τον έλεγχο των τάσεων που αναπτύσσονται σε φορτισμένα σώματα, με δεδομένη διατομή και δεδομένα εξωτερικά φορτία, οι αναπτυσσόμενες τάσεις πρέπει να είναι μεγαλύτερες ή ίσες με τις επιτρεπόμενες.",
        "answer": false,
        "explain": "Λάθος. Οι αναπτυσσόμενες τάσεις πρέπει να είναι μικρότερες ή ίσες με τις επιτρεπόμενες (\\( \\sigma \\le \\sigma_{\\text{επ}} \\))."
      },
      {
        "kind": "tf",
        "prompt": "2.1γ. Η επιφανειακή πίεση που εμφανίζεται σε μια κατασκευή είναι ανάλογη της επιφάνειας στην οποία κατανέμεται το εξωτερικό φορτίο.",
        "answer": false,
        "explain": "Λάθος. Η επιφανειακή πίεση είναι αντιστρόφως ανάλογη της επιφάνειας (\\( p = \\frac{F}{A} \\))."
      },
      {
        "kind": "blank",
        "prompt": "2.2. Συμπληρώστε τα κενά για την παραμόρφωση ράβδου υπό αξονικό φορτίο:",
        "textBefore": [
          "Μία ράβδος, υπό την επίδραση ",
          " (1), τείνει να ",
          " (2) όταν στις ακραίες διατομές της επενεργούν ",
          " (3) δυνάμεις ίσες και ",
          " (4), κάθετες στις διατομές της και των οποίων η συνισταμένη συμπίπτει με το γεωμετρικό της άξονα."
        ],
        "answers": [
          "φορτίων",
          "επιμηκυνθεί",
          "εξωτερικές",
          "αντίθετες"
        ],
        "bank": [
          "εξωτερικές",
          "φορτίων",
          "ομόρροπες",
          "επιμηκυνθεί",
          "ροπών",
          "αντίθετες",
          "εσωτερικές",
          "καμφθεί"
        ],
        "explain": " \\( 1 \\to \\text{φορτίων} \\), \\( 2 \\to \\text{επιμηκυνθεί} \\), \\( 3 \\to \\text{εξωτερικές} \\), \\( 4 \\to \\text{αντίθετες} \\)."
      }
    ]
  },
  {
    "id": "ch06-18921",
    "group": "ch06-axial",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18921",
    "code": "Θέμα 4<sup>ο</sup> · #18921",
    "title": "#18921 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "axial-stress",
    "sourceOrder": 4,
    "givens": [
      {
        "label": "F",
        "value": "2000 daN"
      },
      {
        "label": "σ_επ",
        "value": "100 daN/cm²"
      },
      {
        "label": "β",
        "value": "10 cm"
      },
      {
        "label": "ν",
        "value": "4"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί η ορθογωνική διατομή Α της δοκού.",
        "formula": "A = F / σ_επ",
        "answer": 20,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο A = F / σ_επ.",
        "explain": " \\( A = \\frac{F}{\\sigma_{\\text{επ}}} = \\frac{2000\\text{ daN}}{100\\text{ daN/cm}^2} = 20\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί το πάχος της διατομής (πλευρά α), αν το πλάτος της διατοχής (πλευρά β) είναι β = 10 cm.",
        "formula": "α = A / β",
        "answer": 2,
        "unit": "cm",
        "tolerance": 0.02,
        "hint": "Από τη σχέση A = α · β, λύστε ως προς α.",
        "explain": " \\( \\alpha = \\frac{A}{\\beta} = \\frac{20\\text{ cm}^2}{10\\text{ cm}} = 2\\text{ cm} \\) "
      },
      {
        "kind": "calc",
        "prompt": "γ) Να υπολογιστεί η εφελκυστική τάση θραύσης σ_θρ της δοκού, αν ο συντελεστής ασφαλείας είναι ν = 4.",
        "formula": "σ_θρ = ν · σ_επ",
        "answer": 400,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Από τον ορισμό του συντελεστή ασφαλείας: ν = σ_θρ / σ_επ.",
        "explain": " \\( \\nu = \\frac{\\sigma_{\\text{θρ}}}{\\sigma_{\\text{επ}}} \\implies \\sigma_{\\text{θρ}} = 4 \\cdot 100 = 400\\text{ daN/cm}^2 \\) "
      }
    ]
  },
  {
    "id": "ch06-19457",
    "group": "ch06-axial",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19457",
    "code": "Θέμα 4<sup>ο</sup> · #19457",
    "title": "#19457 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "axial-stress",
    "sourceOrder": 5,
    "givens": [
      {
        "label": "d",
        "value": "20 mm"
      },
      {
        "label": "F",
        "value": "6280 N"
      },
      {
        "label": "σ_επ",
        "value": "50 N/mm²"
      },
      {
        "label": "π",
        "value": "3,14"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί η κυκλική διατομή της ράβδου Α.",
        "formula": "A = (π · d²) / 4",
        "answer": 314,
        "unit": "mm²",
        "tolerance": 0.02,
        "hint": "Υπολογίστε το εμβαδόν κυκλικής διατομής με d = 20 mm.",
        "explain": " \\( A = \\frac{\\pi \\cdot d^2}{4} = \\frac{3,14 \\cdot (20\\text{ mm})^2}{4} = 314\\text{ mm}^2 \\) "
      },
      {
        "kind": "mc",
        "prompt": "β) Να γίνει έλεγχος αντοχής τάσεων της ράβδου στη συγκεκριμένη φόρτιση. Η ράβδος αντέχει;",
        "options": [
          {
            "id": "yes",
            "text": "Ναι, η ράβδος αντέχει"
          },
          {
            "id": "no",
            "text": "Όχι, η ράβδος δεν αντέχει"
          }
        ],
        "answer": "yes",
        "explain": " \\( \\sigma = \\frac{F}{A} = \\frac{6280\\text{ N}}{314\\text{ mm}^2} = 20\\text{ N/mm}^2 \\). Επειδή \\( 20 < 50 \\text{ N/mm}^2 \\) (\\( \\sigma < \\sigma_{\\text{επ}} \\)), η ράβδος αντέχει."
      }
    ]
  },
  {
    "id": "ch06-20102",
    "group": "ch06-axial",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20102",
    "code": "Θέμα 4<sup>ο</sup> · #20102",
    "title": "#20102 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "axial-stress",
    "sourceOrder": 6,
    "givens": [
      {
        "label": "A",
        "value": "36 cm²"
      },
      {
        "label": "F",
        "value": "36000 daN"
      },
      {
        "label": "σ_θρ",
        "value": "4000 daN/cm²"
      },
      {
        "label": "ν",
        "value": "2"
      }
    ],
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί η τάση εφελκυσμού σ.",
        "formula": "σ = F / A",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε τη δύναμη F με το εμβαδόν διατομής A.",
        "explain": " \\( \\sigma = \\frac{F}{A} = \\frac{36000\\text{ daN}}{36\\text{ cm}^2} = 1000\\text{ daN/cm}^2 \\) "
      },
      {
        "kind": "mc",
        "prompt": "β) Να γίνει έλεγχος αντοχής της δοκού. Η δοκός αντέχει;",
        "options": [
          {
            "id": "yes",
            "text": "Ναι, η δοκός αντέχει"
          },
          {
            "id": "no",
            "text": "Όχι, η δοκός δεν αντέχει"
          }
        ],
        "answer": "yes",
        "explain": " \\( \\sigma_{\\text{επ}} = \\frac{\\sigma_{\\text{θρ}}}{\\nu} = \\frac{4000}{2} = 2000\\text{ daN/cm}^2 \\). Επειδή \\( \\sigma = 1000 < 2000 = \\sigma_{\\text{επ}} \\), η δοκός αντέχει."
      }
    ]
  }
]
);
