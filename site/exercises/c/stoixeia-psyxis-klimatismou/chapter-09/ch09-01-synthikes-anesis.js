window.SUBJECT_DATA = window.SUBJECT_DATA || {};
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] = window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"] || { sections: [], groups: [], exercises: [] };
window.SUBJECT_DATA["stoixeia-psyxis-klimatismou"].exercises.push(...
[
  {
    "id": "ch09-32786",
    "group": "ch09-01-synthikes-anesis",
    "kind": "calc",
    "layout": "unified",
    "bankCode": "32786",
    "code": "Θέμα 4<sup>ο</sup> · #32786",
    "title": "#32786 — Θέμα 4<sup>ο</sup> (4.1–4.2)",
    "units": 17,
    "theory": "ch09-01-synthikes-anesis",
    "sourceOrder": 1,
    "stem": "Αν η αίσθηση θερμικού περιβάλλοντος είναι ζέστη δηλαδή $PMV = +2$ που φαίνεται στον παρακάτω πίνακα να υπολογίσετε: Σε έναν χώρο η θερμοκρασία του αέρα είναι $27\\text{ }^\\circ\\text{C}$. Να βρείτε την ταχύτητα την οποία δεν πρέπει να ξεπερνά ο αέρας στον χώρο, από το Διάγραμμα 2 ώστε να νιώθει άνετα ένα άτομο όταν η σχετική υγρασία είναι $20\\%$.",
    "items": [
      {
        "kind": "calc",
        "subq": "4.1",
        "subqPrompt": "Αν η αίσθηση θερμικού περιβάλλοντος είναι ζέστη δηλαδή $PMV = +2$ που φαίνεται στον παρακάτω πίνακα να υπολογίσετε:",
        "prompt": "α) Τον δείκτη PPD από το Διάγραμμα 1.",
        "formula": "PPD(PMV = +2)",
        "answer": 75,
        "unit": "%",
        "tolerance": 0.01,
        "explain": "Από τον δείκτη PMV που είναι +2 και βάσει του διαγράμματος 1 βρίσκουμε PPD = 75%.",
        "image": "images/c/stoixeia-psyxis-klimatismou/chapter-09/c_stoixeia-psyxis-klimatismou_ch09_#32786_fig01.webp"
      },
      {
        "kind": "mc",
        "subq": "4.1",
        "prompt": "β) Να εξηγήσετε τι σημαίνει αυτό που υπολογίσατε στο ερώτημα α.",
        "openEnded": true,
        "options": [
          {
            "id": "a",
            "text": "Σημαίνει ότι το 75% των ατόμων που θα βρίσκονται στον χώρο προβλέπεται ότι δεν θα νιώθουν άνετα, ενώ μόνο το 25% θα είναι απόλυτα ικανοποιημένοι."
          },
          {
            "id": "b",
            "text": "Σημαίνει ότι το 75% των ατόμων θα νιώθουν απόλυτη θερμική άνεση."
          },
          {
            "id": "c",
            "text": "Σημαίνει ότι το 75% των ατόμων κρυώνει."
          }
        ],
        "answer": "a",
        "explain": "Σημαίνει ότι το 75% των ατόμων που θα βρίσκονται στον χώρο αυτό προβλέπεται ότι δεν θα νιώθουν άνετα (PPD=75), ή αλλιώς μόνο το 25% θα είναι απόλυτα ικανοποιημένοι με το θερμικό περιβάλλον του χώρου."
      },
      {
        "kind": "calc",
        "subq": "4.2",
        "prompt": "4.2 Σε έναν χώρο η θερμοκρασία του αέρα είναι $27\\text{ }^\\circ\\text{C}$. Να βρείτε την ταχύτητα την οποία δεν πρέπει να ξεπερνά ο αέρας στον χώρο, από το Διάγραμμα 2 ώστε να νιώθει άνετα ένα άτομο όταν η σχετική υγρασία είναι $20\\%$.",
        "formula": "v(t=27^\\circ\\text{C}, \\phi=20\\%)",
        "answer": 0.2,
        "unit": "m/s",
        "tolerance": 0.05,
        "explain": "Στο διάγραμμα 2 φέρνουμε κατακόρυφη γραμμή στους $27\\text{ }^\\circ\\text{C}$ και σημειώνουμε το σημείο τομής με τη γραμμή σχετικής υγρασίας $20\\%$. Βλέπουμε ότι ο αέρας δεν πρέπει να έχει ταχύτητα μεγαλύτερη από $0,2\\text{ m/s}$ και πάντως μεγαλύτερη από $0,1\\text{ m/s}$."
      }
    ],
    "image": "images/c/stoixeia-psyxis-klimatismou/chapter-09/c_stoixeia-psyxis-klimatismou_ch09_#32786_fig02.webp",
    "solutionImages": [
      "images/c/stoixeia-psyxis-klimatismou/chapter-09/c_stoixeia-psyxis-klimatismou_ch09_#32786_sol01.webp"
    ]
  }
]
);
