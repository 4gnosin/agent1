window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["antoxi"] = window.SUBJECT_DATA["antoxi"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["antoxi"].exercises.push(...
[
  {
    "id": "ch03-18829",
    "group": "ch03-coplanar-forces",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "18829",
    "code": "Θέμα 4<sup>ο</sup> · #18829",
    "title": "#18829 — Θέμα 4<sup>ο</sup>",
    "units": 25,
    "theory": "ch03-coplanar-forces",
    "sourceOrder": 3,
    "items": [
      {
        "kind": "calc",
        "prompt": "α) Υπολογίστε το μέτρο και τη διεύθυνση της συνισταμένης όταν: F1=8 N, F2=3 N, F3=5 N και F4=5 N.",
        "formula": "FΣ = Fy = 5 N",
        "answer": 5,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "FΣ = Fy = F1 + F2",
        "explain": " \\( F_y = 8\\text{ N} + (-3\\text{ N}) = 5\\text{ N} \\), \\( F_x = -5\\text{ N} + 5\\text{ N} = 0\\text{ N} \\). Άρα \\( F_\\Sigma = 5\\text{ N} \\) με διεύθυνση τον άξονα y’y."
      },
      {
        "kind": "calc",
        "prompt": "β) Υπολογίστε το μέτρο της συνισταμένης όταν: F1=10 N, F2=7 N, F3=5 N και F4=9 N.",
        "formula": "FΣ = √(Fx² + Fy²)",
        "answer": 5,
        "unit": "N",
        "tolerance": 0.02,
        "hint": "FΣ = √(4² + 3²)",
        "explain": " \\( F_y = 10 - 7 = 3\\text{ N} \\), \\( F_x = -5 + 9 = 4\\text{ N} \\). \\( F_\\Sigma = \\sqrt{4^2 + 3^2} = 5\\text{ N} \\)."
      }
    ]
  }
]
);
