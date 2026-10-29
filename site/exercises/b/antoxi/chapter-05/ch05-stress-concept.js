window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch05-19135",
    "group": "ch05-stress-concept",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19135",
    "code": "Θέμα 4<sup>ο</sup> · #19135",
    "title": "#19135 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch05-stress-concept",
    "sourceOrder": 8,
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογιστεί η τάση θραύσης σ_θρ της ράβδου αν ο συντελεστής ασφαλείας είναι v = 2 και η επιτρεπόμενη εφελκυστική τάση σ_επ = 1000 daN/cm².",
        "formula": "σ_θρ = σ_επ · v",
        "answer": 2000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί τον συντελεστή ασφαλείας.",
        "explain": " \\( \\sigma_{\\theta\\rho} = 1000\\text{ daN/cm}^2 \\cdot 2 = 2000\\text{ daN/cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "Να υπολογιστούν η διατομή Α της ράβδου (σε cm²) και η πλευρά α της τετραγωνικής διατομής (σε cm), με φορτίο θραύσης F_θρ = 8000 daN.",
        "formula": "A = F_θρ / σ_θρ",
        "answer": 4,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το φορτίο θραύσης με την τάση θραύσης.",
        "explain": " \\( A = \\frac{8000\\text{ daN}}{2000\\text{ daN/cm}^2} = 4\\text{ cm}^2 \\). Επειδή \\( A = \\alpha^2 \\), προκύπτει \\( \\alpha = \\sqrt{4} = 2\\text{ cm} \\). "
      }
    ]
  },
  {
    "id": "ch05-19205",
    "group": "ch05-stress-concept",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19205",
    "code": "Θέμα 4<sup>ο</sup> · #19205",
    "title": "#19205 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch05-stress-concept",
    "sourceOrder": 9,
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογιστεί η διατομή Α της ράβδου κυκλικής διατομής με διάμετρο d = 4 cm (δίνεται π = 3,14).",
        "formula": "A = (π · d²) / 4",
        "answer": 12.56,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τον τύπο A = (π · d²) / 4.",
        "explain": " \\( A = \\frac{3,14 \\cdot 4^2}{4} = 3,14 \\cdot 4 = 12,56\\text{ cm}^2 \\) "
      },
      {
        "kind": "mc",
        "prompt": "Τι είδους τάση αναπτύσσεται στη ράβδο όταν η δύναμη είναι κάθετη στη διατομή;",
        "options": [
          {
            "id": "a",
            "text": "Διατμητική τάση"
          },
          {
            "id": "b",
            "text": "Ορθή τάση"
          },
          {
            "id": "c",
            "text": "Στρεπτική τάση"
          }
        ],
        "answer": "b",
        "explain": "Επειδή η δύναμη είναι κάθετη στη διατομή, η τάση που αναπτύσσεται είναι ορθή."
      },
      {
        "kind": "calc",
        "prompt": "Να υπολογιστεί η εφελκυστική τάση σ που αναπτύσσεται για φορτίο F = 6280 daN και διατομή A = 12,56 cm².",
        "formula": "σ = F / A",
        "answer": 500,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το φορτίο F με τη διατομή Α.",
        "explain": " \\( \\sigma = \\frac{6280\\text{ daN}}{12,56\\text{ cm}^2} = 500\\text{ daN/cm}^2 \\) "
      }
    ]
  },
  {
    "id": "ch05-19634",
    "group": "ch05-stress-concept",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19634",
    "code": "Θέμα 4<sup>ο</sup> · #19634",
    "title": "#19634 — Θέμα 4<sup>ο</sup> (α–δ)",
    "units": 25,
    "theory": "ch05-stress-concept",
    "sourceOrder": 10,
    "items": [
      {
        "kind": "calc",
        "prompt": "Να υπολογιστεί η διατομή Α τετραγωνικής ράβδου με πλευρά α = 4 cm.",
        "formula": "A = α²",
        "answer": 16,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Υψώστε την πλευρά στο τετράγωνο.",
        "explain": " \\( A = 4^2 = 16\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "Να υπολογιστεί η αναπτυσσόμενη τάση σ για φορτίο F = 2000 daN και διατομή A = 16 cm².",
        "formula": "σ = F / A",
        "answer": 125,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε τη δύναμη F με το εμβαδόν A.",
        "explain": " \\( \\sigma = \\frac{2000\\text{ daN}}{16\\text{ cm}^2} = 125\\text{ daN/cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "Να υπολογιστεί η ειδική επιμήκυνση ε για αρχικό μήκος l = 1 m (100 cm) και επιμήκυνση Δl = 0,050 cm.",
        "formula": "ε = Δl / l",
        "answer": 0.0005,
        "unit": "",
        "tolerance": 0.01,
        "hint": "Διαιρέστε την επιμήκυνση Δl με το αρχικό μήκος l.",
        "explain": " \\( \\varepsilon = \\frac{0,050\\text{ cm}}{100\\text{ cm}} = 0,0005 \\) "
      },
      {
        "kind": "tf",
        "prompt": "Αν η αναπτυσσόμενη τάση είναι σ = 125 daN/cm² και η επιτρεπόμενη σεπ = 80 daN/cm², η δοκός αντέχει στη φόρτιση;",
        "answer": false,
        "explain": "Λάθος. Επειδή \\( \\sigma > \\sigma_{\\varepsilon\\pi} \\) (125 > 80), η δοκός δεν αντέχει."
      }
    ]
  },
  {
    "id": "ch05-21784",
    "group": "ch05-stress-concept",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "21784",
    "code": "Θέμα 4<sup>ο</sup> · #21784",
    "title": "#21784 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch05-stress-concept",
    "sourceOrder": 11,
    "items": [
      {
        "kind": "calc",
        "prompt": "Χαλύβδινη ράβδος κυκλικής διατομής μήκους l=15 cm εφελκύεται από φορτίο F=3140 daN με επιμήκυνση Δl=0,15 mm και τάση σ=1000 daN/cm². Υπολογίστε τη διάμετρο d σε cm.",
        "formula": "d = \\sqrt{(4 \\cdot F) / (π \\cdot σ)}",
        "answer": 2,
        "unit": "cm",
        "tolerance": 0.02,
        "hint": "Βρείτε πρώτα το Α από τον τύπο F/σ και μετά τη διάμετρο d.",
        "explain": " \\( A = \\frac{F}{\\sigma} = \\frac{3140}{1000} = 3,14\\text{ cm}^2 \\). Από \\( A = \\frac{\\pi d^2}{4} \\) προκύπτει \\( d = 2\\text{ cm} \\). "
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ειδική επιμήκυνση ε (με l = 15 cm = 150 mm και Δl = 0,15 mm).",
        "formula": "ε = Δl / l",
        "answer": 0.001,
        "unit": "",
        "tolerance": 0.02,
        "hint": "Διαιρέστε το Δl με το l σε ίδιες μονάδες.",
        "explain": " \\( \\varepsilon = \\frac{0,15\\text{ mm}}{150\\text{ mm}} = 0,001 \\) "
      },
      {
        "kind": "calc",
        "prompt": "Υπολογίστε την ειδική επιμήκυνση ε σε ποσοστό επί τοις εκατό (ε%).",
        "formula": "ε% = ε · 100",
        "answer": 0.1,
        "unit": "%",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε την ειδική επιμήκυνση επί 100.",
        "explain": " \\( \\varepsilon\\% = 0,001 \\cdot 100 = 0,1\\% \\) "
      }
    ]
  },
  {
    "id": "ch05-23501",
    "group": "ch05-stress-concept",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "23501",
    "code": "Θέμα 4<sup>ο</sup> · #23501",
    "title": "#23501 — Θέμα 4<sup>ο</sup> (4.1–4.3)",
    "units": 25,
    "theory": "ch05-stress-concept",
    "sourceOrder": 12,
    "items": [
      {
        "kind": "calc",
        "prompt": "4.1. Να υπολογιστεί το εμβαδόν της κυκλικής διατομής με διάμετρο d = 6 cm (π = 3,14).",
        "formula": "A = (π · d²) / 4",
        "answer": 28.26,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Εφαρμόστε τον τύπο του εμβαδού κυκλικής διατομής.",
        "explain": " \\( A = \\frac{3,14 \\cdot 6^2}{4} = \\frac{3,14 \\cdot 36}{4} = 28,26\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "4.2. Να υπολογιστεί η τάση εφελκυσμού σε N/cm² για F = 424 daN (= 4240 N) και A = 28,26 cm².",
        "formula": "σ = F / A",
        "answer": 150,
        "unit": "N/cm²",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε το φορτίο σε N και διαιρέστε με το εμβαδόν.",
        "explain": " \\( \\sigma = \\frac{4240\\text{ N}}{28,26\\text{ cm}^2} = 150\\text{ N/cm}^2 \\) "
      },
      {
        "kind": "tf",
        "prompt": "4.3. Αν η τάση εφελκυσμού είναι σ = 150 N/cm² και η επιτρεπόμενη σεπ = 140 N/cm², αντέχει η ράβδος;",
        "answer": false,
        "explain": "Λάθος. Αφού \\( \\sigma > \\sigma_{\\varepsilon\\pi} \\) (150 > 140), η ράβδος δεν αντέχει στην καταπόνηση."
      }
    ]
  }
]
);
