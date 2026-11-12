window.EXERCISES = window.EXERCISES || [];
window.EXERCISES.push(...
[
  {
    "id": "ch12-17648",
    "group": "ch12-02-metadosi-me-agogi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #17648",
    "bankCode": "17648",
    "title": "#17648 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch12-02-metadosi-me-agogi",
    "sourceOrder": 1,
    "stem": "Το χαλύβδινο περίβλημα μιας μηχανής έχει πάχος $L = 10\\text{ mm}$ και εμβαδό $A = 2\\text{ m}^2$. Εάν η θερμοκρασία στο εσωτερικό της μηχανής ισούται με $\\theta_1 = 100^{\\circ}\\text{C}$, η θερμοκρασία του εξωτερικού περιβάλλοντος είναι $\\theta_2 = 20^{\\circ}\\text{C}$ και ο συντελεστής θερμικής αγωγιμότητας του υλικού είναι $\\lambda = 58\\text{ W}/(\\text{m}\\cdot\\text{K})$, να υπολογίσετε:",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "α. Τη θερμότητα $Q$ (σε $\\text{kJ}$) που διέρχεται μέσα από το περίβλημα σε χρονικό διάστημα $t = 1\\text{ min}$:",
        "formula": "$Q = \\frac{\\lambda \\cdot t \\cdot A}{L} \\cdot (\\theta_1 - \\theta_2)$",
        "answer": 55680,
        "unit": "kJ",
        "tolerance": 10,
        "explain": "$t = 1\\text{ min} = 60\\text{ s}$, $L = 10\\text{ mm} = 0.01\\text{ m}$, $\\Delta\\theta = 100 - 20 = 80\\text{ K}$.\n$$Q = \\frac{\\lambda \\cdot t \\cdot A}{L} \\cdot (\\theta_1 - \\theta_2) = \\frac{58 \\cdot 60 \\cdot 2}{0.01} \\cdot 80 = 55.680.000\\text{ J} = 55.680\\text{ kJ}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "β. Τη ροή θερμότητας $\\dot{Q}$ (σε $\\text{kW}$):",
        "formula": "$\\dot{Q} = \\frac{Q}{t}$",
        "answer": 928,
        "unit": "kW",
        "tolerance": 1,
        "explain": "$$\\dot{Q} = \\frac{Q}{t} = \\frac{55.680\\text{ kJ}}{60\\text{ s}} = 928\\text{ kW}$$"
      }
    ]
  },
  {
    "id": "ch12-18621",
    "group": "ch12-02-metadosi-me-agogi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #18621",
    "bankCode": "18621",
    "title": "#18621 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch12-02-metadosi-me-agogi",
    "sourceOrder": 2,
    "stem": "Μέσα από ένα χαλύβδινο έλασμα πάχους $L$ και εμβαδού $A = 2\\text{ m}^2$ διέρχεται θερμότητα $Q = 100\\text{ kJ}$. Στη μία πλευρά του ελάσματος η θερμοκρασία είναι $\\theta_1 = 60^{\\circ}\\text{C}$ και στην άλλη είναι $\\theta_2 = 313\\text{ K}$. Το φαινόμενο έλαβε χώρα σε χρόνο $t = 4\\text{ s}$. Δίνεται ο συντελεστής θερμικής αγωγιμότητας $\\lambda = 50\\text{ W}/(\\text{m}\\cdot\\text{K})$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "α. Να υπολογιστεί η ροή της θερμότητας $\\dot{Q}$ (σε $\\text{kW}$):",
        "formula": "$\\dot{Q} = \\frac{Q}{t}$",
        "answer": 25,
        "unit": "kW",
        "tolerance": 0.1,
        "explain": "$$\\dot{Q} = \\frac{Q}{t} = \\frac{100\\text{ kJ}}{4\\text{ s}} = 25\\text{ kW}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "β. Να υπολογιστεί η θερμοκρασία $\\theta_1$ σε κλίμακα Κέλβιν (σε $\\text{K}$):",
        "formula": "$T_1 = \\theta_1 + 273$",
        "answer": 333,
        "unit": "K",
        "tolerance": 0.1,
        "explain": "$$\\theta_1 = 60 + 273 = 333\\text{ K}$$"
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "γ. Να υπολογιστεί το πάχος του ελάσματος $L$ (σε $\\text{m}$):",
        "formula": "$L = \\frac{\\lambda \\cdot A}{\\dot{Q}} \\cdot (\\theta_1 - \\theta_2)$",
        "answer": 0.08,
        "unit": "m",
        "tolerance": 0.005,
        "explain": "Από τον νόμο του Fourier: $$\\dot{Q} = \\frac{\\lambda \\cdot A}{L} (\\theta_1 - \\theta_2) \\Rightarrow L = \\frac{\\lambda \\cdot A}{\\dot{Q}} (\\theta_1 - \\theta_2) = \\frac{50\\text{ W}/(\\text{m}\\cdot\\text{K}) \\cdot 2\\text{ m}^2}{25.000\\text{ W}} \\cdot (333\\text{ K} - 313\\text{ K}) = \\frac{100 \\cdot 20}{25.000} = 0.08\\text{ m}$$"
      }
    ]
  },
  {
    "id": "ch12-20049",
    "group": "ch12-02-metadosi-me-agogi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #20049",
    "bankCode": "20049",
    "title": "#20049 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch12-02-metadosi-me-agogi",
    "sourceOrder": 3,
    "stem": "Μια θερμαινόμενη ηλεκτρικά οροφή ενός συνεργείου έχει διαστάσεις $10\\text{ m}$ μήκος, $5\\text{ m}$ πλάτος και $20\\text{ cm}$ πάχος. Το υλικό της οροφής έχει συντελεστή θερμικής αγωγιμότητας $\\lambda = 0.6\\text{ W}/(\\text{m}\\cdot\\text{K})$. Η επιφανειακή εσωτερική θερμοκρασία είναι $13^{\\circ}\\text{C}$ και η επιφανειακή εξωτερική θερμοκρασία είναι $5^{\\circ}\\text{C}$.",
    "image": "images/b/thermod/chapter-12/b_thermod_ch12_20049_fig01.webp",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "4.1 Να υπολογίσετε τη ροή θερμότητας δια μέσου της οροφής (σε $\\text{kW}$):",
        "formula": "$\\dot{Q} = \\frac{\\lambda \\cdot A}{L} \\cdot (\\Theta_1 - \\Theta_2)$",
        "answer": 1.2,
        "unit": "kW",
        "tolerance": 0.02,
        "hint": "Υπολογίστε πρώτα το εμβαδό $A$, το πάχος σε μέτρα ($L = 0.2\\text{ m}$) και τη διαφορά θερμοκρασιών.",
        "explain": "Η ροή θερμότητας δίνεται από τον νόμο του Fourier: $$\\dot{Q} = \\frac{\\lambda \\cdot A}{L} \\cdot (\\Theta_1 - \\Theta_2) = \\frac{0.6 \\cdot 50}{0.2} \\cdot (286 - 278) = 150 \\cdot 8 = 1200\\text{ W} = 1.2\\text{ kW}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Να υπολογίσετε το κόστος της ηλεκτρικής ενέργειας για χρονικό διάστημα 12 ωρών, όταν 1 kWh κοστίζει 0,1€:",
        "formula": "$\\text{Κόστος} = Q \\cdot \\text{τιμή}$",
        "answer": 1.44,
        "unit": "€",
        "tolerance": 0.02,
        "hint": "Βρείτε τη συνολική ενέργεια $Q$ σε kWh ($Q = \\dot{Q} \\cdot t$) για $t = 12\\text{ h}$ και πολλαπλασιάστε με την τιμή χρέωσης (0,1 €/kWh).",
        "explain": "Η συνολική θερμότητα που μεταδίδεται στις 12 ώρες είναι: $$Q = \\dot{Q} \\cdot t = 1.2\\text{ kW} \\cdot 12\\text{ h} = 14.4\\text{ kWh}$$ Το κόστος της ηλεκτρικής ενέργειας είναι: $$\\text{Κόστος} = 14.4\\text{ kWh} \\cdot 0.1\\text{ €/kWh} = 1.44\\text{ €}$$"
      }
    ]
  },
  {
    "id": "ch12-27013",
    "group": "ch12-02-metadosi-me-agogi",
    "kind": "calc",
    "layout": "unified",
    "code": "Θέμα 4<sup>ο</sup> · #27013",
    "bankCode": "27013",
    "title": "#27013 — Θέμα 4$^{ο}$",
    "units": 25,
    "theory": "ch12-02-metadosi-me-agogi",
    "sourceOrder": 4,
    "stem": "Μέσα από ένα μπρούτζινο έλασμα πάχους $L = 0.05\\text{ m}$ και εμβαδού $A$ διέρχεται ροή θερμότητας $\\dot{Q} = 13\\text{ kW}$ σε χρόνο $t = 10\\text{ s}$. Στη μία πλευρά του ελάσματος η θερμοκρασία είναι $\\theta_1 = 330\\text{ K}$ και στην άλλη $\\theta_2 = 320\\text{ K}$. Δίνεται $\\lambda = 65\\text{ W}/(\\text{m}\\cdot\\text{K})$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "prompt": "4.1 Να υπολογιστεί η θερμότητα $Q$ (σε $\\text{kJ}$):",
        "formula": "$Q = \\dot{Q}\\cdot t$",
        "answer": 130,
        "unit": "kJ",
        "tolerance": 1,
        "explain": "$$Q = \\dot{Q} \\cdot t = 13\\text{ kW} \\cdot 10\\text{ s} = 130\\text{ kJ}$$"
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Να υπολογιστεί το εμβαδό του ελάσματος $A$ (σε $\\text{m}^2$):",
        "formula": "$A = \\frac{\\dot{Q} \\cdot L}{\\lambda \\cdot (\\theta_1 - \\theta_2)}$",
        "answer": 1,
        "unit": "m²",
        "tolerance": 0.05,
        "explain": "Από τον νόμο του Fourier: $$A = \\frac{\\dot{Q} \\cdot L}{\\lambda \\cdot (\\theta_1 - \\theta_2)} = \\frac{13.000\\text{ W} \\cdot 0.05\\text{ m}}{65\\text{ W}/(\\text{m}\\cdot\\text{K}) \\cdot 10\\text{ K}} = \\frac{650}{650} = 1\\text{ m}^2$$"
      },
      {
        "kind": "calc",
        "subq": "4.3",
        "prompt": "4.3 Να υπολογιστεί η θερμική αντίσταση για διάδοση με αγωγή $R$ (σε $\\text{K}/\\text{W}$):",
        "formula": "$R = \\frac{L}{\\lambda \\cdot A}$",
        "answer": 0.000769,
        "unit": "K/W",
        "tolerance": 5e-05,
        "explain": "Η θερμική αντίσταση υπολογίζεται ως: $$R = \\frac{L}{\\lambda \\cdot A} = \\frac{0.05\\text{ m}}{65\\text{ W}/(\\text{m}\\cdot\\text{K}) \\cdot 1\\text{ m}^2} = \\frac{1}{1300}\\text{ K}/\\text{W} \\approx 0.00077\\text{ K}/\\text{W}$$"
      }
    ]
  }
]
);
