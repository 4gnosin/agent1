window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch06-18625",
    "group": "ch06-01-metaboles-teleion-aerion",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18625",
    "bankCode": "18625",
    "title": "#18625 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch06-01-metaboles-teleion-aerion",
    "sourceOrder": 1,
    "stem": "Αέρας ειδικού όγκου $v = 0,2 \\text{ m}^3/\\text{kg}$ και πίεσης $P = 43,05 \\text{ kN/m}^2$ υφίσταται μια μεταβολή. Η σταθερά της ελαστικότητας του αέρα $R = 0,287 \\text{ kJ}/(\\text{kg}\\cdot\\text{K})$. Εάν η τελική θερμοκρασία του αέρα είναι $127 \\text{ }^\\circ\\text{C}$ και η ειδική θερμότητα υπό σταθερή πίεση $C_p = 1,001 \\text{ kJ}/(\\text{kg}\\cdot\\text{K})$, να υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "4.1. Την αρχική θερμοκρασία του αέρα $T_1$.",
        "prompt": "Την αρχική θερμοκρασία του αέρα $T_1$.",
        "formula": "$T_1 = \\frac{P \\cdot v}{R}$",
        "answer": 30,
        "unit": "K",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε την καταστατική εξίσωση των τελείων αερίων $P \\cdot v = R \\cdot T_1$.",
        "explain": "Από την καταστατική εξίσωση προκύπτει: $T_1 = \\frac{43050 \\text{ N/m}^2 \\cdot 0,2 \\text{ m}^3/\\text{kg}}{287 \\text{ J}/(\\text{kg}\\cdot\\text{K})} = 30 \\text{ K}$."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2. Την ειδική θερμότητα υπό σταθερό όγκο $C_v$.",
        "formula": "$C_v = C_p - R$",
        "answer": 0.714,
        "unit": "kJ/(kg·K)",
        "tolerance": 0.02,
        "hint": "Χρησιμοποιήστε τη σχέση Mayer: $C_p - C_v = R$.",
        "explain": "Η ειδική θερμότητα $C_v$ υπολογίζεται από τη σχέση: $C_v = C_p - R = 1,001 - 0,287 = 0,714 \\text{ kJ}/(\\text{kg}\\cdot\\text{K})$."
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "4.3. Την μεταβολή της εσωτερικής ενέργειας ανά μονάδα μάζας ($\\Delta u$), εάν η μεταβολή είναι ισόχωρη.",
        "formula": "$\\Delta u = C_v \\cdot (T_2 - T_1)$",
        "answer": 264.18,
        "unit": "kJ/kg",
        "tolerance": 0.02,
        "hint": "Μετατρέψτε την τελική θερμοκρασία σε Κέλβιν και εφαρμόστε τον τύπο $\\Delta u = C_v \\cdot \\Delta T$.",
        "explain": "Η τελική θερμοκρασία σε Κέλβιν είναι $T_2 = 127 + 273 = 400 \\text{ K}$. Η μεταβολή της εσωτερικής ενέργειας είναι: $\\Delta u = 0,714 \\cdot (400 - 30) = 264,18 \\text{ kJ/kg}$."
      }
    ]
  }
]
);
