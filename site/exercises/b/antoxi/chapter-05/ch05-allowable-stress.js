window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch05-17983",
    "group": "ch05-allowable-stress",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "17983",
    "code": "Θέμα 4<sup>ο</sup> · #17983",
    "title": "#17983 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch05-allowable-stress",
    "sourceOrder": 24,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογιστεί το μέγιστο εφελκυστικό φορτίο F_μ που μπορεί να δεχτεί χαλύβδινη δοκός διατομής Α = 1,5 cm² με επιτρεπόμενη τάση σ_επ = 1000 daN/cm².",
        "formula": "F_μ = σ_επ · A",
        "answer": 1500,
        "unit": "daN",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί το εμβαδόν διατομής.",
        "explain": " \\( F_{\\mu} = 1000\\text{ daN/cm}^2 \\cdot 1,5\\text{ cm}^2 = 1500\\text{ daN} \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί η τάση θραύσης σ_θρ του υλικού για σ_επ = 1000 daN/cm² και συντελεστή ασφαλείας v = 3 (σημ.: τυπική εφαρμογή τύπου, όπου σ_θρ = σ_επ · v).",
        "formula": "σ_θρ = σ_επ · v",
        "answer": 3000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί τον συντελεστή v.",
        "explain": " \\( \\sigma_{\\theta\\rho} = 1000 \\cdot 3 = 3000\\text{ daN/cm}^2 \\) "
      }
    ]
  },
  {
    "id": "ch05-18832",
    "group": "ch05-allowable-stress",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18832",
    "code": "Θέμα 4<sup>ο</sup> · #18832",
    "title": "#18832 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch05-allowable-stress",
    "sourceOrder": 25,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να προσδιοριστεί η ορθή τάση θραύσης του υλικού σ_θρ για επιτρεπόμενη τάση σ_επ = 50 N/mm² και συντελεστή ασφαλείας v = 6.",
        "formula": "σ_θρ = σ_επ · v",
        "answer": 300,
        "unit": "N/mm²",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί τον συντελεστή ασφαλείας.",
        "explain": " \\( \\sigma_{\\theta\\rho} = 50\\text{ N/mm}^2 \\cdot 6 = 300\\text{ N/mm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί η πλευρά α της τετραγωνικής διατομής σε mm για φορτίο θραύσης F_θρ = 4800 daN και σ_θρ = 300 daN/mm² (ή N/mm²).",
        "formula": "α = \\sqrt{F_θρ / σ_θρ}",
        "answer": 4,
        "unit": "mm",
        "tolerance": 0.02,
        "hint": "Βρείτε το εμβαδόν A = F_θρ / σ_θρ και στη συνέχεια την πλευρά α = \\sqrt{A}.",
        "explain": " \\( A = \\frac{4800}{300} = 16\\text{ mm}^2 \\). Άρα \\( \\alpha = \\sqrt{16} = 4\\text{ mm} \\). "
      }
    ]
  },
  {
    "id": "ch05-19132",
    "group": "ch05-allowable-stress",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "19132",
    "code": "Θέμα 4<sup>ο</sup> · #19132",
    "title": "#19132 — Θέμα 4<sup>ο</sup> (α–β)",
    "units": 25,
    "theory": "ch05-allowable-stress",
    "sourceOrder": 26,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε το μέγιστο εφελκυστικό φορτίο F_μ για διατομή A = 10 mm² (= 1 cm²) και επιτρεπόμενη τάση σ_επ = 1000 daN/cm².",
        "formula": "F_μ = σ_επ · A",
        "answer": 1000,
        "unit": "daN",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε το εμβαδόν σε cm² και πολλαπλασιάστε με την επιτρεπόμενη τάση.",
        "explain": " \\( F_{\\mu} = 1000\\text{ daN/cm}^2 \\cdot 1\\text{ cm}^2 = 1000\\text{ daN} \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογιστεί η τάση θραύσης σ_θρ για σ_επ = 1000 daN/cm² και συντελεστή ασφαλείας v = 2.",
        "formula": "σ_θρ = σ_επ · v",
        "answer": 2000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Πολλαπλασιάστε την επιτρεπόμενη τάση επί τον συντελεστή ασφαλείας.",
        "explain": " \\( \\sigma_{\\theta\\rho} = 1000 \\cdot 2 = 2000\\text{ daN/cm}^2 \\) "
      }
    ]
  },
  {
    "id": "ch05-20470",
    "group": "ch05-allowable-stress",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "20470",
    "code": "Θέμα 4<sup>ο</sup> · #20470",
    "title": "#20470 — Θέμα 4<sup>ο</sup> (α–γ)",
    "units": 25,
    "theory": "ch05-allowable-stress",
    "sourceOrder": 27,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Να υπολογίσετε την επιτρεπόμενη διατμητική τάση τ_επ για διατμητική τάση θραύσης τ_θρ = 2000 daN/cm² και συντελεστή ασφαλείας v = 2.",
        "formula": "τ_επ = τ_θρ / v",
        "answer": 1000,
        "unit": "daN/cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε την τάση θραύσης με τον συντελεστή ασφαλείας v.",
        "explain": " \\( \\tau_{\\varepsilon\\pi} = \\frac{2000}{2} = 1000\\text{ daN/cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "β) Να υπολογίσετε την καταπονούμενη κυκλική διατομή S σε cm² για μέγιστο διατμητικό φορτίο F = 3140 daN και τ_επ = 1000 daN/cm².",
        "formula": "S = F / τ_επ",
        "answer": 3.14,
        "unit": "cm²",
        "tolerance": 0.02,
        "hint": "Διαιρέστε τη δύναμη F με την επιτρεπόμενη διατμητική τάση.",
        "explain": " \\( S = \\frac{3140}{1000} = 3,14\\text{ cm}^2 \\) "
      },
      {
        "kind": "calc",
        "prompt": "γ) Να υπολογίσετε τη διάμετρο της ατράκτου d σε cm για S = 3,14 cm² (δίνεται π = 3,14).",
        "formula": "d = \\sqrt{(4 · S) / π}",
        "answer": 2,
        "unit": "cm",
        "tolerance": 0.02,
        "hint": "Λύστε τον τύπο S = (π · d²) / 4 ως προς d.",
        "explain": " \\( d = \\sqrt{\\frac{4 \\cdot 3,14}{3,14}} = \\sqrt{4} = 2\\text{ cm} \\) "
      }
    ]
  }
]
);
