window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA.antoxi = window.SUBJECT_DATA.antoxi || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA.antoxi.exercises.push(
{
    "id": "calc-resultant-1",
    "group": "ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο · 1.2",
    "title": "Συνισταμένη με ορθή γωνία",
    "units": 15,
    "theory": "parallilogrammo",
    "stem": "Δύο δυνάμεις F1 = 90 N και F2 = 120 N έχουν κοινό σημείο εφαρμογής και σχηματίζουν γωνία φ = 90°.",
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολόγισε το μέτρο της συνισταμένης Σ, σε N.",
        "answer": 150,
        "tolerance": 0.02,
        "unit": "N",
        "formula": "Σ = √(F1² + F2² + 2·F1·F2·συνφ)",
        "hint": "Επειδή φ = 90°, το συνφ = 0, οπότε ο τύπος απλοποιείται στο Πυθαγόρειο θεώρημα: Σ = √(F1² + F2²).",
        "explain": "Σ = √(90² + 120²) = √(8100 + 14400) = √22500 = 150 N."
      }
    ]
  },
{
    "id": "calc-resultant-2",
    "group": "ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο · 1.2",
    "title": "Συνισταμένη ίσων δυνάμεων",
    "units": 15,
    "theory": "parallilogrammo",
    "stem": "Δύο ίσες δυνάμεις F1 = F2 = 100 N έχουν κοινό σημείο εφαρμογής και σχηματίζουν γωνία φ = 60°. Δίνεται συν60° = 0,5.",
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολόγισε το μέτρο της συνισταμένης Σ, σε N.",
        "answer": 173.2,
        "tolerance": 0.02,
        "unit": "N",
        "formula": "Σ = √(F1² + F2² + 2·F1·F2·συνφ)",
        "hint": "Αντικατέστησε τις τιμές στον τύπο και υπολόγισε το άθροισμα κάτω από τη ρίζα βήμα-βήμα.",
        "explain": "Σ = √(100² + 100² + 2·100·100·0,5) = √(10000 + 10000 + 10000) = √30000 ≈ 173,2 N."
      }
    ]
  },
{
    "id": "calc-resultant-3",
    "group": "ypologistika",
    "kind": "calc",
    "code": "Θέμα 4ο · 1.2",
    "title": "Συνισταμένη — μέτρο και διεύθυνση",
    "units": 25,
    "theory": "parallilogrammo",
    "stem": "Δύο δυνάμεις F1 = 30 N και F2 = 40 N έχουν κοινό σημείο εφαρμογής και σχηματίζουν γωνία φ = 90°.",
    "items": [
      {
        "kind": "calc",
        "prompt": "Υπολόγισε το μέτρο της συνισταμένης Σ, σε N.",
        "answer": 50,
        "tolerance": 0.02,
        "unit": "N",
        "formula": "Σ = √(F1² + F2² + 2·F1·F2·συνφ)",
        "hint": "Με φ = 90° ο τύπος γίνεται Πυθαγόρειο θεώρημα.",
        "explain": "Σ = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N."
      },
      {
        "kind": "calc",
        "prompt": "Υπολόγισε τη γωνία θ που σχηματίζει η συνισταμένη με τη δύναμη F1, σε μοίρες.",
        "answer": 53.13,
        "tolerance": 0.03,
        "unit": "°",
        "formula": "ημθ = (F2 / Σ) · ημφ",
        "hint": "Αντικατέστησε F2 = 40, Σ = 50 (από το προηγούμενο ερώτημα) και φ = 90° (ημ90° = 1).",
        "explain": "ημθ = (40/50) · 1 = 0,8 → θ ≈ 53,13°."
      }
    ]
  }
);
