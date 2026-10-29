;
window.KIND_LABEL = {
  "mc": "Πολλαπλή επιλογή",
  "tf": "Σωστό / Λάθος",
  "match": "Αντιστοίχιση",
  "blank": "Συμπλήρωση κενού",
  "calc": "Υπολογισμός"
};
(function () {
  const GREEK = { a: "α", b: "β", c: "γ", d: "δ", e: "ε", f: "στ" };
  const CALLOUT_LAB = { def: "Ορισμός", example: "Παράδειγμα", remember: "Θυμήσου" };
  const SUBJECTS = {
    thermo: {
      title: "Θερμοδυναμική Θεωρία",
      kicker: "Εισαγωγή στη μηχανολογία",
      lead: "Σύντομες διδακτικές σημειώσεις και διαδραστικός πίνακας από την τράπεζα θεμάτων. Ο μαθητής σηκώνεται, λύνει, ελέγχει.",
      progressKey: "thermo-ch1-html-progress-v1",
      mark: "shuttle",
    },
    "thermo-lab": {
      title: "Θερμοδυναμική Εργαστήριο",
      kicker: "Εργαστηριακή θερμοδυναμική",
      lead: "Εργαστηριακά κεφάλαια για όργανα μέτρησης και ελέγχου θερμοδυναμικών μεγεθών.",
      progressKey: "thermo-lab-html-progress-v1",
      mark: "shuttle",
      hasExercises: false,
    },
    antoxi: {
      title: "Αντοχή Υλικών",
      kicker: "Εισαγωγή στη μηχανολογία",
      lead: "Δυνάμεις, αρχές στατικής και διαδραστικός πίνακας από την τράπεζα θεμάτων. Ο μαθητής σηκώνεται, λύνει, ελέγχει.",
      progressKey: "antoxi-html-progress-v1",
      mark: "forces",
    },
    "stoixeia-michanon": {
      title: "Στοιχεία Μηχανών",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "Στοιχεία μηχανών: συνδέσεις, άξονες, έδρανα, μεταδόσεις — σημειώσεις και τράπεζα θεμάτων.",
      progressKey: "stoixeia-michanon-html-progress-v1",
      mark: "forces",
    },
    "stoixeia-psyxis-klimatismou": {
      title: "Στοιχεία Ψύξης – Κλιματισμού",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "Βασικές αρχές ψύξης και κλιματισμού με διαδραστικές ασκήσεις από την τράπεζα θεμάτων.",
      progressKey: "stoixeia-psyxis-html-progress-v1",
      mark: "shuttle",
    },
    "egkatastaseis-klimatismou": {
      title: "Εγκαταστάσεις Κλιματισμού",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "Εγκαταστάσεις κλιματισμού: θεωρία και ασκήσεις τράπεζας θεμάτων.",
      progressKey: "egkatastaseis-klimatismou-html-progress-v1",
      mark: "shuttle",
    },
    "systimata-elegxou-rythmisis-aftomatismou-psyxis-klimatismou": {
      title: "Συστήματα Ελέγχου Ψύξης & Κλιματισμού",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "Έλεγχος, ρύθμιση και αυτοματισμοί εγκαταστάσεων ψύξης και κλιματισμού.",
      progressKey: "systimata-elegxou-html-progress-v1",
      mark: "shuttle",
    },
    "michanes-esoterikis-kafsis-2": {
      title: "Μηχανές Εσωτερικής Καύσης ΙΙ",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "ΜΕΚ ΙΙ: θεωρία και διαδραστικές ασκήσεις από την τράπεζα θεμάτων.",
      progressKey: "mek2-html-progress-v1",
      mark: "shuttle",
    },
    "systimata-aftokinitou": {
      title: "Συστήματα Αυτοκινήτου",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "Συστήματα αυτοκινήτου με σημειώσεις και πίνακα ασκήσεων.",
      progressKey: "systimata-aftokinitou-html-progress-v1",
      mark: "forces",
    },
    "texnologia-elegxou-diagnoseon": {
      title: "Τεχνολογία Ελέγχου και Διαγνώσεων",
      kicker: "Γ΄ ΕΠΑ.Λ. Μηχανολογία",
      lead: "Έλεγχος και διαγνώσεις: θεωρία και ασκήσεις τράπεζας θεμάτων.",
      progressKey: "diagnoseis-html-progress-v1",
      mark: "forces",
    },
  };
  const SIMULATIONS = [
    {
      id: "fwg",
      title: "Αποστακτήρας κενού (Fresh Water Generator)",
      description: "Διαδικασία εκκίνησης και ρύθμισης αποστακτήρα κενού.",
      intro: "Προσομοίωση της διαδικασίας εκκίνησης και ρύθμισης αποστακτήρα κενού.",
      mount: "mountFreshWaterGenerator",
      containerId: "simulation-app",
    },
    {
      id: "hydrophore",
      title: "Υδροφορικό δοχείο γλυκού νερού (Hydrophore)",
      description: "Προσομοίωση υδροφορικού συστήματος πλοίου, αεροφυλακίου, πρεσσοστάτη, στραγγαλισμού κατάθλιψης και συμπλήρωσης πεπιεσμένου αέρα.",
      intro: "Διαδραστική προσομοίωση πιεστικού δοχείου (Hydrophore) γλυκού νερού πλοίου. Στραγγαλισμός επιστομίου κατάθλιψης αντλίας (έως 7.3 Bar), προστασία ασφαλιστικού (7.0 Bar), βάνα εξαέρωσης συντήρησης, ρύθμιση πρεσσοστάτη και συμπλήρωση πεπιεσμένου αέρα (6.0–7.0 Bar).",
      mount: "mountHydrophore",
      containerId: "simulation-app",
    },
    {
      id: "ejector-evaporator",
      title: "Τζιφάρι εβαπορέτας — Τρισδιάστατη προσομοίωση",
      description: "Τρισδιάστατη τομή εγχυτήρα αέρα και άλμης με ζωντανή υδραυλική, μετρήσεις πίεσης και ροής.",
      intro: "Περιστρέψτε το μοντέλο και αλλάξτε τις συνθήκες λειτουργίας για να παρατηρήσετε τη ροή κινητήριου νερού, την αναρρόφηση άλμης και αέρα, καθώς και τις πιέσεις στον εγχυτήρα.",
      mount: "mountEvaporatorEjector",
      containerId: "simulation-app",
    },
  ];
  let ctx = {
    id: "thermo",
    title: "Θερμοδυναμική Θεωρία",
    kicker: "",
    lead: "",
    mark: "shuttle",
    sections: [],
    groups: [],
    exercises: [],
    base: "#/thermo",
  };

  const state = {
    menu: false,
    navSection: undefined,
    navChapter: undefined,
    step: 0,
    answers: [],
    checked: false,
    results: [],
    hint: false,
    matchPicked: null,
    blankPicked: null,
    exId: null,
  };
  let simulationCleanup = null;

    /** Encode path for <img src> — το # στο όνομα αρχείου αλλιώς κόβει το URL. */
  function imgUrl(src) {
    if (!src) return "";
    return String(src).split("/").map(function (part) {
      return encodeURIComponent(part);
    }).join("/");
  }
function esc(s) {
    return String(s)
      .replace(/&/g, "\u0026amp;")
      .replace(/</g, "\u0026lt;")
      .replace(/>/g, "\u0026gt;")
      .replace(/"/g, "\u0026quot;");
  }
  function letter(id) {
    return GREEK[id] || id;
  }
  /* «Θέμα 2ο» / «Θέμα 4<sup>ο</sup>» → ανώτερος δείκτης κολλητά στον αριθμό */
  function fmtOrd(s) {
    return esc(s)
      .replace(/Θέμα\s+(\d{1,2})(?:&lt;sup&gt;\s*ο\s*&lt;\/sup&gt;|[οo°])/g, 'Θέμα <span class="ord">$1<span class="ord-o">ο</span></span>');
  }
  function progressKey() {
    return (SUBJECTS[ctx.id] && SUBJECTS[ctx.id].progressKey) || "thermo-ch1-html-progress-v1";
  }
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(progressKey()) || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveProgress(p) {
    try {
      localStorage.setItem(progressKey(), JSON.stringify(p));
    } catch (e) {}
  }
  function progress() {
    const p = loadProgress();
    return { read: p.read || [], exercises: p.exercises || {} };
  }
  function markRead(slug) {
    const p = progress();
    if (!p.read.includes(slug)) p.read.push(slug);
    saveProgress(p);
  }
  function saveEx(id, result) {
    const p = progress();
    p.exercises[id] = result;
    saveProgress(p);
  }
  function resetProgress() {
    saveProgress({ read: [], exercises: {} });
    render();
  }

  const THEME_KEY = "site-theme-v1";
  function loadTheme() {
    try {
      return localStorage.getItem(THEME_KEY) || "light";
    } catch (e) {
      return "light";
    }
  }
  function saveTheme(t) {
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch (e) {}
  }
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", loadTheme());
  }
  function themeToggleBtn(extraStyle) {
    const dark = loadTheme() === "dark";
    return (
      '<button class="btn btn-ghost" data-act="theme-toggle" style="' +
      (extraStyle || "") +
      '">' +
      (dark ? "☀️ Φωτεινό θέμα" : "🌙 Σκοτεινό θέμα") +
      "</button>"
    );
  }

  function parseNumber(raw) {
    const cleaned = String(raw).trim().replace(/\s/g, "").replace(",", ".");
    const match = cleaned.match(/-?\d+(?:\.\d+)?/);
    if (!match) return null;
    const value = Number(match[0]);
    return Number.isFinite(value) ? value : null;
  }
  function nearlyEqual(a, b, tolerance) {
    const t = tolerance == null ? 0.02 : tolerance;
    if (b === 0) return Math.abs(a) <= t;
    return Math.abs(a - b) / Math.abs(b) <= t || Math.abs(a - b) <= 0.51;
  }

  function route() {
    const raw = decodeURIComponent((location.hash || "#/").replace(/^#/, ""));
    const parts = raw.split("/").filter(Boolean);
    if (!parts.length) return { name: "site-home" };
    if (parts[0] === "grade" && parts[1])
      return { name: "grade", id: parts[1], specializationId: parts[2] };
    if (parts[0] === "links") return { name: "links" };
    if (parts[0] === "math") {
      if (!parts[1]) return { name: "math" };
      if (parts[2]) return { name: "math-section", id: parts[2], categoryId: parts[1] };
      if ((window.MATH_CATEGORIES || []).some(function (category) { return category.id === parts[1]; }))
        return { name: "math-category", id: parts[1] };
      return { name: "math-section", id: parts[1] };
    }
    if (parts[0] === "simulations") {
      if (!parts[1]) return { name: "simulations" };
      const simulation = SIMULATIONS.find(function (item) {
        return item.id === parts[1];
      });
      return simulation
        ? { name: "simulation", id: simulation.id }
        : { name: "simulations" };
    }
    if (SUBJECTS[parts[0]]) {
      const subject = parts[0];
      const rest = parts.slice(1);
      if (!rest.length) return { name: "home", subject: subject };
      if (rest[0] === "notes") return { name: "notes", slug: rest[1] || "", subject: subject };
      if (rest[0] === "board" && SUBJECTS[subject].hasExercises === false)
        return { name: "home", subject: subject };
      if (rest[0] === "board" && rest[1]) return { name: "exercise", id: rest[1], subject: subject };
      if (rest[0] === "board") return { name: "board", subject: subject };
      return { name: "home", subject: subject };
    }
    return { name: "site-home" };
  }
  /** Μοναδικά θέματα Τράπεζας: ένα ανά id (ή bankCode). Κρατάει την πρώτη εμφάνιση. */
  function uniqueTopics(list) {
    const seen = Object.create(null);
    const out = [];
    (list || []).forEach(function (item) {
      if (!item || typeof item !== "object") return;
      const key = item.id || item.bankCode || "";
      if (!key || seen[key]) return;
      seen[key] = true;
      out.push(item);
    });
    return out;
  }
  function uniqueById(list) {
    const seen = Object.create(null);
    const out = [];
    (list || []).forEach(function (item) {
      if (!item || typeof item !== "object") return;
      const key = item.id || "";
      if (!key || seen[key]) return;
      seen[key] = true;
      out.push(item);
    });
    return out;
  }
  function subjectData(id) {
    const d = (window.SUBJECT_DATA && window.SUBJECT_DATA[id]) || {};
    if (id === "thermo") {
      return {
        sections: (window.SECTIONS || []).concat(d.sections || []),
        groups: uniqueById((window.GROUPS || []).concat(d.groups || [])),
        // Θέματα = μοναδικές ασκήσεις Τράπεζας (όχι διπλότυπα από παλιά/νέα αρχεία)
        exercises: uniqueTopics((window.EXERCISES || []).concat(d.exercises || [])),
      };
    }
    return {
      sections: d.sections || [],
      groups: uniqueById(d.groups || []),
      exercises: uniqueTopics(d.exercises || []),
    };
  }
  function setCtx(subjectId) {
    const meta = SUBJECTS[subjectId] || SUBJECTS.thermo;
    const data = subjectData(subjectId);
    ctx = {
      id: subjectId,
      title: meta.title,
      kicker: meta.kicker,
      lead: meta.lead,
      mark: meta.mark,
      hasExercises: meta.hasExercises !== false,
      sections: data.sections,
      groups: data.groups,
      exercises: data.exercises,
      base: "#/" + subjectId,
    };
  }
  function go(hash) {
    state.menu = false;
    state.navSection = undefined;
    state.navChapter = undefined;
    location.hash = hash;
  }

  function getSection(slug) {
    return ctx.sections.find(function (s) {
      return s.slug === slug;
    });
  }
  function sectionChapter(s) {
    return String(s.num).split(".")[0];
  }
  function chaptersOf(list, chapterKey) {
    const seen = [];
    list.forEach(function (item) {
      const c = String(chapterKey(item));
      if (c && seen.indexOf(c) === -1) seen.push(c);
    });
    /* Πάντα αριθμητική σειρά κεφαλαίων (1, 2, 3…), ανεξάρτητα από τη σειρά φόρτωσης των script tags */
    return seen.sort(function (a, b) {
      const na = parseInt(a, 10);
      const nb = parseInt(b, 10);
      if (!isNaN(na) && !isNaN(nb) && na !== nb) return na - nb;
      return String(a).localeCompare(String(b), "el");
    });
  }
  function sortedExercises(list) {
    return list.slice().sort(function (a, b) {
      const sa = a.sourceOrder != null ? Number(a.sourceOrder) : Infinity;
      const sb = b.sourceOrder != null ? Number(b.sourceOrder) : Infinity;
      if (sa !== sb) return sa - sb;
      return String(a.id || "").localeCompare(String(b.id || ""), "el");
    });
  }
  function getExercise(id) {
    return ctx.exercises.find(function (e) {
      return e.id === id;
    });
  }
  function adjacent(list, key, val) {
    const i = list.findIndex(function (x) {
      return x[key] === val;
    });
    return {
      prev: i > 0 ? list[i - 1] : null,
      next: i >= 0 && i < list.length - 1 ? list[i + 1] : null,
    };
  }

  function emptyAnswer(item) {
    if (item.kind === "mc") return { mc: null };
    if (item.kind === "tf") return { tf: null };
    if (item.kind === "match") return { match: {} };
    if (item.kind === "blank") return { blank: item.answers.map(function () { return null; }) };
    return { calc: "" };
  }
  function isFilled(item, a) {
    if (item.kind === "mc") return Boolean(a.mc);
    if (item.kind === "tf") return a.tf !== null && a.tf !== undefined;
    if (item.kind === "match") return Object.keys(a.match || {}).length === item.left.length;
    if (item.kind === "blank") return (a.blank || []).every(Boolean);
    return parseNumber(a.calc || "") !== null;
  }
  function isCorrect(item, a) {
    if (item.kind === "mc") return a.mc === item.answer;
    if (item.kind === "tf") return a.tf === item.answer;
    if (item.kind === "match") {
      const pairs = a.match || {};
      return item.left.every(function (l) {
        return pairs[l.id] === item.pairs[l.id];
      });
    }
    if (item.kind === "blank") {
      const slots = a.blank || [];
      return item.answers.every(function (ans, i) {
        return slots[i] === ans;
      });
    }
    const n = parseNumber(a.calc || "");
    if (n === null) return false;
    return nearlyEqual(n, item.answer, item.tolerance == null ? 0.02 : item.tolerance);
  }

  function resetEngine(ex) {
    state.exId = ex.id;
    state.step = 0; /* τώρα = ενεργό item (για picks) */
    state.answers = ex.items.map(emptyAnswer);
    state.checked = false;
    state.results = ex.items.map(function () { return null; });
    state.hints = {};
    state.matchPicked = null;
    state.blankPicked = null;
  }

  function navHtml(r, board) {
    const p = progress();
    const done = ctx.exercises.filter(function (e) {
      return p.exercises[e.id] && p.exercises[e.id].status === "done";
    }).length;
    let routeSection = null;
    let routeChapter = null;
    if (r.name === "notes") {
      routeSection = "theory";
      const section = getSection(r.slug);
      if (section) routeChapter = sectionChapter(section);
    } else if (r.name === "board" || r.name === "exercise") {
      routeSection = "exercises";
      if (r.name === "exercise") {
        const exercise = getExercise(r.id);
        const group = exercise && ctx.groups.find(function (g) {
          return g.id === exercise.group;
        });
        if (group) routeChapter = String(group.chapter);
      }
    }
    const openSection = state.navSection === undefined ? routeSection : state.navSection;
    const openChapter = state.navChapter === undefined ? routeChapter : state.navChapter;
    let html = "";
    html += '<a data-act="go" data-to="#/" style="display:block;font-size:.85rem;color:var(--muted);margin-bottom:.6rem">← Όλα τα μαθήματα</a>';
    html += '<a class="brand" data-act="go" data-to="' + ctx.base + '">' + esc(ctx.title) + "</a>";
    html +=
      '<p class="brand-sub">' +
      (ctx.hasExercises ? "Σημειώσεις &amp; τράπεζα θεμάτων" : "Εργαστηριακές σημειώσεις") +
      "</p>";
    html += themeToggleBtn("margin:0 0 .8rem");
    html += '<div class="nav">';
    const theoryOpen = openSection === "theory";
    html +=
      '<button type="button" class="nav-link nav-section-toggle' +
      (theoryOpen ? " active" : "") +
      '" data-act="nav-section-toggle" data-section="theory" data-expanded="' +
      theoryOpen +
      '" aria-expanded="' +
      theoryOpen +
      '"><span>Θεωρία</span><span class="nav-chevron">' +
      (theoryOpen ? "−" : "+") +
      "</span></button>";
    if (theoryOpen) {
      chaptersOf(ctx.sections, sectionChapter).forEach(function (chId) {
        const chapterOpen = String(openChapter) === String(chId);
        html +=
          '<button type="button" class="nav-link nav-chapter-toggle" data-act="nav-chapter-toggle" data-section="theory" data-chapter="' +
          esc(chId) +
          '" data-expanded="' +
          chapterOpen +
          '" aria-expanded="' +
          chapterOpen +
          '"><span>Κεφάλαιο ' +
          esc(chId) +
          '</span><span class="nav-chevron">' +
          (chapterOpen ? "−" : "+") +
          "</span></button>";
        if (chapterOpen) {
          ctx.sections.filter(function (s) {
            return sectionChapter(s) === chId;
          }).forEach(function (s) {
            const on = r.name === "notes" && r.slug === s.slug;
            html +=
              '<a class="nav-subitem' +
              (on ? " active" : "") +
              '" data-act="go" data-to="' +
              ctx.base +
              "/notes/" +
              s.slug +
              '"><span class="num">' +
              esc(s.num) +
              "</span><span>" +
              esc(s.title) +
              "</span></a>";
          });
        }
      });
    }
    if (ctx.hasExercises) {
      const exercisesOpen = openSection === "exercises";
      html +=
        '<button type="button" class="nav-link nav-section-toggle' +
        (exercisesOpen ? " active" : "") +
        '" data-act="nav-section-toggle" data-section="exercises" data-expanded="' +
        exercisesOpen +
        '" aria-expanded="' +
        exercisesOpen +
        '"><span>Ασκήσεις τράπεζας θεμάτων</span><span class="nav-chevron">' +
        (exercisesOpen ? "−" : "+") +
        "</span></button>";
      if (exercisesOpen) {
        html +=
          '<a class="nav-subitem' +
          (r.name === "board" ? " active" : "") +
          '" data-act="go" data-to="' +
          ctx.base +
          '/board">Όλες οι ασκήσεις · ' +
          done +
          "/" +
          ctx.exercises.length +
          "</a>";
        const groupsWithExercises = ctx.groups.filter(function (g) {
          return ctx.exercises.some(function (e) {
            return e.group === g.id;
          });
        });
        chaptersOf(groupsWithExercises, function (g) {
          return String(g.chapter);
        }).forEach(function (chId) {
          const chapterOpen = String(openChapter) === String(chId);
          html +=
            '<button type="button" class="nav-link nav-chapter-toggle" data-act="nav-chapter-toggle" data-section="exercises" data-chapter="' +
            esc(chId) +
            '" data-expanded="' +
            chapterOpen +
            '" aria-expanded="' +
            chapterOpen +
            '"><span>Κεφάλαιο ' +
            esc(chId) +
            '</span><span class="nav-chevron">' +
            (chapterOpen ? "−" : "+") +
            "</span></button>";
          if (chapterOpen) {
            groupsWithExercises.filter(function (g) {
              return String(g.chapter) === String(chId);
            }).forEach(function (g) {
              html += '<p class="nav-group-title">' + esc(g.title) + "</p>";
              sortedExercises(ctx.exercises.filter(function (e) {
                return e.group === g.id;
              })).forEach(function (e) {
                html +=
                  '<a class="nav-subitem nav-exercise-item' +
                  (r.name === "exercise" && r.id === e.id ? " active" : "") +
                  '" data-act="go" data-to="' +
                  ctx.base +
                  "/board/" +
                  e.id +
                  '">' +
                  fmtOrd(e.title) +
                  "</a>";
              });
            });
          }
        });
      }
    }
    html += "</div>";
    return html;
  }

  function shell(inner, board, r) {
    return (
      '<div class="' +
      (board ? "board" : "paper") +
      '">' +
      '<header class="topbar hidden-lg">' +
      '<button class="icon-btn" data-act="menu" aria-label="Περιεχόμενα">☰</button>' +
      '<a data-act="go" data-to="' +
      ctx.base +
      '" style="font-family:var(--font-serif);font-size:1.15rem;flex:1">' +
      esc(ctx.title) +
      "</a>" +
      '<button class="icon-btn" data-act="theme-toggle" aria-label="Εναλλαγή θέματος" title="Εναλλαγή θέματος">' +
      (loadTheme() === "dark" ? "☀️" : "🌙") +
      "</button>" +
      "</header>" +
      (state.menu
        ? '<div class="overlay"><button class="dim" data-act="menu-close"></button><aside class="drawer">' +
          '<div style="display:flex;justify-content:space-between;align-items:center"><p style="font-family:var(--font-serif);font-size:1.3rem;margin:0">Περιεχόμενα</p><button class="icon-btn" data-act="menu-close">✕</button></div>' +
          navHtml(r, board) +
          "</aside></div>"
        : "") +
      '<div class="layout"><aside class="sidebar desktop">' +
      navHtml(r, board) +
      '</aside><main class="main" id="main">' +
      inner +
      "</main></div></div>"
    );
  }

  function diagram(id, caption) {
    const cap = caption ? "<figcaption>" + esc(caption) + "</figcaption>" : "";
    const svgs = {
      "system-boundary":
        '<svg viewBox="0 0 360 200" width="100%"><text x="24" y="28" fill="#6a6358" font-size="12">Περιβάλλον</text><path d="M70 58c22-22 70-28 110-18s78 8 108 28c28 18 42 52 18 78-22 24-70 32-118 28-48-4-96 4-128-22-30-24-22-68 10-94z" fill="rgba(196,92,38,.12)" stroke="#c45c26" stroke-width="2" stroke-dasharray="7 5"/><text x="148" y="112" fill="#1a1714" font-size="14" font-family="serif">Σύστημα</text><text x="210" y="168" fill="#c45c26" font-size="11">Όριο</text><path d="M196 156l14-18" stroke="#c45c26" stroke-width="1.2"/></svg>',
      "closed-piston":
        '<svg viewBox="0 0 360 200" width="100%"><rect x="108" y="36" width="144" height="128" rx="4" fill="none" stroke="#1a1714" stroke-width="1.6"/><rect x="118" y="92" width="124" height="14" fill="#c45c26"/><rect x="172" y="92" width="16" height="86" fill="#3d3830"/><circle cx="180" cy="186" r="8" fill="#1a1714"/><path d="M128 48h104v36H128z" fill="rgba(196,92,38,.12)" stroke="#c45c26" stroke-width="1.4" stroke-dasharray="4 3"/><text x="150" y="70" fill="#c45c26" font-size="11">αέριο, m = σταθ.</text><text x="118" y="28" fill="#6a6358" font-size="11">κύλινδρος — έμβολο</text></svg>',
      "isolated-adiabatic":
        '<div class="grid-2"><div class="diagram"><svg viewBox="0 0 220 180" width="100%"><rect x="54" y="28" width="112" height="124" rx="56" fill="none" stroke="#1a1714" stroke-width="10"/><rect x="70" y="44" width="80" height="92" rx="40" fill="rgba(196,92,38,.12)" stroke="#c45c26"/><text x="78" y="96" font-size="12" font-family="serif">θερμός</text><text x="62" y="168" fill="#6a6358" font-size="11">μονωμένο · E = σταθ.</text></svg></div><div class="diagram"><svg viewBox="0 0 220 180" width="100%"><rect x="48" y="36" width="124" height="100" rx="8" fill="none" stroke="#1a1714" stroke-width="8"/><circle cx="110" cy="84" r="14" fill="rgba(196,92,38,.2)" stroke="#c45c26"/><path d="M110 70v28M96 84h28" stroke="#c45c26" stroke-width="1.4"/><path d="M158 56h22v24h-12" fill="none" stroke="#1a1714" stroke-width="1.6"/><text x="54" y="158" fill="#6a6358" font-size="11">αδιαβατικό + έργο</text></svg></div></div>',
      "open-flow":
        '<div><div class="diagram"><svg viewBox="0 0 360 140" width="100%"><path d="M70 40c40-18 90-18 130 0s90 22 130 4" fill="none" stroke="#c45c26" stroke-width="1.6" stroke-dasharray="6 4"/><path d="M70 108c40 14 90 18 130 0s90-20 130-4" fill="none" stroke="#c45c26" stroke-width="1.6" stroke-dasharray="6 4"/><path d="M36 74h70" stroke="#1a1714" stroke-width="2"/><polygon points="106,74 94,68 94,80" fill="#1a1714"/><path d="M254 74h70" stroke="#1a1714" stroke-width="2"/><polygon points="324,74 312,68 312,80" fill="#1a1714"/><text x="40" y="60" fill="#6a6358" font-size="11">μάζα</text><text x="148" y="78" font-size="13" font-family="serif">σύστημα</text><text x="268" y="60" fill="#6a6358" font-size="11">μάζα</text></svg></div><div class="diagram" style="margin-top:.5rem"><svg viewBox="0 0 360 120" width="100%"><ellipse cx="150" cy="60" rx="70" ry="34" fill="rgba(196,92,38,.1)" stroke="#c45c26" stroke-dasharray="6 4"/><rect x="210" y="46" width="70" height="28" rx="4" fill="none" stroke="#1a1714"/><path d="M280 60h40" stroke="#1a1714" stroke-width="2"/><polygon points="320,60 308,54 308,66" fill="#1a1714"/><text x="122" y="64" font-size="12" font-family="serif">φιάλη</text><text x="286" y="48" fill="#6a6358" font-size="11">μάζα</text></svg></div></div>',
      "system-choice": (function () {
        const cards = [
          { title: "Λάθος", note: "Το όριο κόβει την τριβή", ok: false, kind: "cut" },
          { title: "Σωστό", note: "Και οι δύο επιφάνειες μέσα", ok: true, kind: "in" },
          { title: "Σωστό", note: "Και οι δύο επιφάνειες έξω", ok: true, kind: "out" },
        ];
        return (
          '<div class="grid-2" style="grid-template-columns:repeat(auto-fit,minmax(10rem,1fr))">' +
          cards
            .map(function (c) {
              let dots = "";
              if (c.kind === "cut")
                dots =
                  '<circle cx="78" cy="56" r="8" fill="#1a1714"/><circle cx="108" cy="56" r="8" fill="none" stroke="#1a1714" stroke-width="1.5"/>';
              else if (c.kind === "in")
                dots =
                  '<circle cx="78" cy="56" r="8" fill="#1a1714"/><circle cx="102" cy="56" r="8" fill="#3d3830"/>';
              else
                dots =
                  '<circle cx="78" cy="56" r="8" fill="none" stroke="#1a1714" stroke-width="1.5"/><circle cx="150" cy="28" r="7" fill="#3d3830"/><circle cx="166" cy="28" r="7" fill="none" stroke="#1a1714"/>';
              const stroke = c.ok ? "#c45c26" : "#e07a5f";
              const fill = c.ok ? "rgba(196,92,38,.1)" : "rgba(224,122,95,.1)";
              return (
                '<div class="diagram"><div style="padding:0.75rem 0.75rem 0"><p class="kicker" style="color:' +
                stroke +
                '">' +
                c.title +
                '</p><p style="margin:.25rem 0 0;font-size:.9rem;color:#6a6358">' +
                esc(c.note) +
                '</p></div><svg viewBox="0 0 180 110" width="100%"><path d="M24 24c20-10 50-10 72 2s50 8 64 22c12 12 8 36-10 46-22 12-56 10-84 4s-50 2-62-14c-10-14-2-48 20-60z" fill="' +
                fill +
                '" stroke="' +
                stroke +
                '" stroke-width="1.6" stroke-dasharray="5 4"/>' +
                dots +
                "</svg></div>"
              );
            })
            .join("") +
          "</div>"
        );
      })(),
      applications:
        '<div class="app-grid">' +
        [
          ["Αντλίες", "≋"],
          ["Θερμικοί κινητήρες", "△"],
          ["Κομπρεσέρ", "◎"],
          ["Εργοστάσια", "▣"],
          ["Οχήματα", "▭"],
          ["Αεροσκάφη", "✈"],
        ]
          .map(function (it) {
            return (
              '<div class="app-item"><span class="app-ico">' +
              it[1] +
              "</span><span>" +
              it[0] +
              "</span></div>"
            );
          })
          .join("") +
        "</div>",
    };
    const body = svgs[id] || "";
    if (id === "applications" || id === "isolated-adiabatic" || id === "open-flow" || id === "system-choice") {
      return '<figure>' + body + (caption ? "<figcaption style='color:var(--muted);font-size:.82rem;margin-top:.4rem'>" + esc(caption) + "</figcaption>" : "") + "</figure>";
    }
    return '<figure class="diagram">' + body + cap + "</figure>";
  }

  function renderBlock(b) {
    if (b.type === "p") return "<p>" + esc(b.text) + "</p>";
    if (b.type === "h") return "<h2 style='margin:1.4rem 0 .5rem;font-size:1.45rem'>" + esc(b.text) + "</h2>";
    if (b.type === "image") {
      const src = typeof b.src === "string" ? b.src.trim() : "";
      if (!src) return "";
      return (
        '<figure class="note-image"><img src="' +
        imgUrl(src) +
        '" alt="' +
        esc(b.alt || "") +
        '" loading="lazy">' +
        (b.caption ? "<figcaption>" + esc(b.caption) + "</figcaption>" : "") +
        "</figure>"
      );
    }
    if (b.type === "ul") {
      return (
        "<ul>" +
        b.items
          .map(function (it) {
            return "<li>" + esc(it) + "</li>";
          })
          .join("") +
        "</ul>"
      );
    }
    if (b.type === "formula") {
      return (
        '<div class="formula">' +
        b.html +
        (b.caption ? "<small>" + esc(b.caption) + "</small>" : "") +
        "</div>"
      );
    }
    if (b.type === "callout") {
      const lab = CALLOUT_LAB[b.kind] || "";
      const title =
        b.title && b.title !== lab ? "<h3>" + esc(b.title) + "</h3>" : "";
      return (
        '<aside class="callout ' +
        b.kind +
        '"><p class="lab">' +
        esc(lab) +
        "</p>" +
        title +
        "<p>" +
        esc(b.text) +
        "</p></aside>"
      );
    }
    if (b.type === "table") {
      return (
        '<table class="units"><caption>' +
        esc(b.caption || "") +
        "</caption><thead><tr>" +
        b.headers
          .map(function (h) {
            return "<th>" + esc(h) + "</th>";
          })
          .join("") +
        "</tr></thead><tbody>" +
        b.rows
          .map(function (row) {
            return (
              "<tr>" +
              row
                .map(function (c) {
                  return "<td>" + esc(c) + "</td>";
                })
                .join("") +
              "</tr>"
            );
          })
          .join("") +
        "</tbody></table>"
      );
    }
    if (b.type === "diagram") return diagram(b.id, b.caption);
    return "";
  }

  function shuttle() {
    return '<svg class="shuttle" viewBox="0 0 120 180" aria-hidden="true"><path d="M60 8c18 22 22 48 22 78 0 14-2 36-6 54H44c-4-18-6-40-6-54 0-30 4-56 22-78z" fill="#fbf6ec" stroke="#1a1714" stroke-width="2"/><rect x="48" y="70" width="24" height="18" rx="9" fill="#1a1714"/><path d="M38 86l-18 38 22-10" fill="#c45c26"/><path d="M82 86l18 38-22-10" fill="#c45c26"/><path d="M50 140h20l6 22H44l6-22z" fill="#9a471c"/><path d="M52 164c2 8 6 12 8 14 2-2 6-6 8-14" stroke="#c45c26" fill="none" stroke-width="3"/></svg>';
  }
  function forcesMark() {
    return '<svg class="shuttle" viewBox="0 0 180 180" aria-hidden="true"><rect x="28" y="78" width="124" height="18" rx="3" fill="#fbf6ec" stroke="#1a1714" stroke-width="2"/><path d="M90 78V28" stroke="#c45c26" stroke-width="3"/><polygon points="90,18 84,34 96,34" fill="#c45c26"/><path d="M28 87H8" stroke="#1a1714" stroke-width="3"/><polygon points="2,87 16,81 16,93" fill="#1a1714"/><path d="M152 87h20" stroke="#1a1714" stroke-width="3"/><polygon points="178,87 164,81 164,93" fill="#1a1714"/><text x="82" y="154" fill="currentColor" font-size="13" font-family="serif">Σ</text></svg>';
  }
  function subjectMark() {
    return ctx.mark === "forces" ? forcesMark() : shuttle();
  }

  function findGrade(id) {
    return CATALOG.find(function (g) {
      return g.id === id;
    });
  }

  function licenseFooter() {
    return (
      '<p style="margin-top:2.5rem;padding-top:1rem;border-top:1px solid var(--line);font-size:.78rem;color:var(--muted)">Το πρωτότυπο υλικό αυτού του site διανέμεται με άδεια <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> — Αναφορά Δημιουργού · Μη Εμπορική Χρήση · Παρόμοια Διανομή.</p>'
    );
  }

  function siteShell(inner, wide) {
    return (
      '<div class="paper">' +
      '<header class="topbar">' +
      '<a data-act="go" data-to="#/" style="font-family:var(--font-serif);font-size:1.15rem;flex:1">Μηχανολογία ΕΠΑΛ</a>' +
      '<button class="icon-btn" data-act="theme-toggle" aria-label="Εναλλαγή θέματος" title="Εναλλαγή θέματος">' +
      (loadTheme() === "dark" ? "☀️" : "🌙") +
      "</button>" +
      "</header>" +
      '<main class="main" id="main" style="max-width:' +
      (wide ? "90rem" : "52rem") +
      ';margin:0 auto">' +
      inner +
      "</main></div>"
    );
  }

  function subjectCard(s) {
    if (s.status === "ready") {
      return (
        '<button class="card" data-act="go" data-to="' +
        esc(s.href) +
        '" style="text-align:left;display:block;width:100%">' +
        '<h3 style="font-size:1.25rem">' +
        esc(s.title) +
        "</h3>" +
        '<p style="color:var(--muted);margin:.35rem 0 0">' +
        esc(s.desc) +
        "</p></button>"
      );
    }
    return (
      '<div class="card" style="opacity:.6">' +
      '<div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap"><h3 style="font-size:1.25rem;margin:0">' +
      esc(s.title) +
      '</h3><span class="chip" style="font-size:.7rem">Σύντομα</span></div>' +
      '<p style="color:var(--muted);margin:.35rem 0 0">' +
      esc(s.desc) +
      "</p></div>"
    );
  }

  function siteHome() {
    let inner = '<p class="kicker">Μηχανολογία ΕΠΑΛ</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.3rem">Διάλεξε τάξη</h1>';
    inner +=
      '<p class="lead" style="margin-top:.6rem">Σημειώσεις και διαδραστικές ασκήσεις, ανά τάξη και μάθημα.</p>';
    inner += '<div class="grid-2" style="margin-top:1.6rem">';
    CATALOG.forEach(function (g) {
      const readyCount = g.subjects.filter(function (s) {
        return s.status === "ready";
      }).length;
      inner +=
	'<button class="card card-light" data-act="go" data-to="#/grade/' +
        g.id +
        '" style="text-align:left;background:var(--ink);color:var(--cream)">' +
        '<p class="kicker">' +
        (g.specializations ? g.specializations.length + " ειδικότητες" : g.subjects.length + " μαθήματα") +
        "</p>" +
        '<h2 style="font-size:1.6rem;margin-top:.2rem">' +
        esc(g.label) +
        "</h2>" +
        '<p style="opacity:.75;margin:.4rem 0 0">' +
        readyCount +
        " διαθέσιμα τώρα</p></button>";
    });
    inner += "</div>";
    inner +=
      '<button class="card" data-act="go" data-to="#/simulations" style="text-align:left;display:block;width:100%;margin-top:1.6rem"><h2 style="font-size:1.6rem">Διαδραστικές Προσομοιώσεις</h2></button>';
    inner +=
      '<div class="grid-2" style="margin-top:1.6rem">' +
      '<button class="card" data-act="go" data-to="#/links" style="text-align:left;display:block;width:100%"><p class="kicker">Χρήσιμα</p><h2 style="font-size:1.3rem;margin-top:.2rem">Χρήσιμα Links</h2><p style="color:var(--muted);margin:.35rem 0 0">Σύνδεσμοι για μαθήματα και το σχολείο.</p></button>' +
      '<button class="card" data-act="go" data-to="#/math" style="text-align:left;display:block;width:100%"><p class="kicker">Γρήγορη αναφορά</p><h2 style="font-size:1.3rem;margin-top:.2rem">Βασικά Μαθηματικά</h2><p style="color:var(--muted);margin:.35rem 0 0">Προαπαιτούμενες γνώσεις, ταυτότητες και μαθηματικά για όλους.</p></button>' +
      "</div>";
    inner +=
      '<div style="margin-top:2rem;font-size:.85rem;color:var(--muted);line-height:1.6">' +
      '<p><b>Πηγές εκπαιδευτικού υλικού</b></p>' +
      '<p><b>Πηγή ασκήσεων:</b><br>Τα θέματα που περιλαμβάνονται στην παρούσα ιστοσελίδα προέρχονται και αντλήθηκαν από την πλατφόρμα της Τράπεζας Θεμάτων Διαβαθμισμένης Δυσκολίας, η οποία αναπτύχθηκε στο πλαίσιο του έργου MIS5070818 – «Τράπεζα θεμάτων Διαβαθμισμένης Δυσκολίας για τη Δευτεροβάθμια Εκπαίδευση, Γενικό Λύκειο-ΕΠΑΛ» και είναι διαθέσιμη διαδικτυακά στον δικτυακό τόπο του Ινστιτούτου Εκπαιδευτικής Πολιτικής (Ι.Ε.Π.): <a href="https://trapeza.iep.edu.gr/" target="_blank" rel="noopener">https://trapeza.iep.edu.gr/</a></p>' +
      '<p>Οι διαδραστικές δραστηριότητες, οι λύσεις, οι επεξηγήσεις και η εκπαιδευτική επεξεργασία των θεμάτων αποτελούν υλικό της παρούσας ιστοσελίδας.</p>' +
      '<p><b>Πηγή θεωρίας:</b><br>Η θεωρία και το εκπαιδευτικό περιεχόμενο βασίζονται στα σχολικά εγχειρίδια που χρησιμοποιούνται για τη διδασκαλία των μαθημάτων του τομέα Μηχανολογίας ΕΠΑ.Λ. Τα σχολικά εγχειρίδια διατίθενται μέσω της επίσημης πλατφόρμας Διαδραστικά Σχολικά Βιβλία (ebooks.edu.gr) του Υπουργείου Παιδείας και Θρησκευμάτων / ΙΤΥΕ «ΔΙΟΦΑΝΤΟΣ»: <a href="https://ebooks.edu.gr/ebooks/" target="_blank" rel="noopener">https://ebooks.edu.gr/ebooks/</a></p>' +
      '<p>Σημείωση: Η παρούσα ιστοσελίδα αποτελεί ανεξάρτητη εκπαιδευτική προσπάθεια και δεν αποτελεί επίσημη ιστοσελίδα ούτε συνδέεται με το Ινστιτούτο Εκπαιδευτικής Πολιτικής, το Υπουργείο Παιδείας ή το ΙΤΥΕ «ΔΙΟΦΑΝΤΟΣ».</p>' +
      '<p><b>Άδεια του πρωτότυπου υλικού της παρούσας ιστοσελίδας:</b><br>Το πρωτότυπο διαδραστικό εκπαιδευτικό υλικό που δημιουργήθηκε για την παρούσα ιστοσελίδα διανέμεται με άδεια Creative Commons Αναφορά Δημιουργού – Μη Εμπορική Χρήση – Παρόμοια Διανομή 4.0 Διεθνές (CC BY-NC-SA 4.0). Η άδεια αυτή αφορά το πρωτότυπο υλικό της παρούσας ιστοσελίδας και δεν επεκτείνεται σε υλικό τρίτων που αναφέρεται ή ενσωματώνεται στην ιστοσελίδα. <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> — Αναφορά Δημιουργού · Μη Εμπορική Χρήση · Παρόμοια Διανομή.<br>Κωνσταντίνος Μηναΐδης 2026 · <a href="https://github.com/4gnosin" target="_blank" rel="noopener">github.com/4gnosin</a></p>' +
      '</div>';
    return siteShell(inner);
  }

  function simulationsPage() {
    let inner = '<a data-act="go" data-to="#/" style="font-size:.85rem;color:var(--muted)">← Αρχική</a>';
    inner += '<p class="kicker" style="margin-top:1.2rem">Διαδραστικές Προσομοιώσεις</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">Επίλεξε προσομοίωση</h1>';
    inner += '<div class="grid-2" style="margin-top:1.6rem">';
    SIMULATIONS.forEach(function (simulation) {
      inner +=
        '<button class="card" data-act="go" data-to="#/simulations/' +
        esc(simulation.id) +
        '" style="text-align:left;display:block;width:100%"><h2 style="font-size:1.4rem">' +
        esc(simulation.title) +
        '</h2><p style="color:var(--muted);margin:.4rem 0 0">' +
        esc(simulation.description) +
        "</p></button>";
    });
    inner += "</div>";
    return siteShell(inner);
  }

  function simulationPage(id) {
    const simulation = SIMULATIONS.find(function (item) {
      return item.id === id;
    });
    if (!simulation) return simulationsPage();
    const inner =
      '<a data-act="go" data-to="#/simulations" style="font-size:.85rem;color:var(--muted)">← Διαδραστικές Προσομοιώσεις</a>' +
      '<p class="kicker" style="margin-top:1.2rem">Διαδραστικές Προσομοιώσεις</p>' +
      '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">' +
      esc(simulation.title) +
      '</h1><p class="lead" style="margin-top:.6rem">' +
      esc(simulation.intro) +
      "</p>" +
      '<div id="' +
      esc(simulation.containerId) +
      '" class="fwg-simulation" style="margin-top:1.5rem"></div>';
    return siteShell(inner, true);
  }

  function gradePage(id, specializationId) {
    const g = findGrade(id);
    if (!g)
      return siteShell(
        '<p class="kicker">Δεν βρέθηκε</p><h1 style="margin-top:.3rem">Η τάξη δεν βρέθηκε</h1><p style="margin-top:1.2rem"><button class="btn btn-ink" data-act="go" data-to="#/">← Πίσω</button></p>'
      );
    if (specializationId) {
      const specialization = (g.specializations || []).find(function (item) {
        return item.id === specializationId;
      });
      if (!specialization)
        return siteShell(
          '<p class="kicker">Δεν βρέθηκε</p><h1 style="margin-top:.3rem">Η ειδικότητα δεν βρέθηκε</h1><p style="margin-top:1.2rem"><button class="btn btn-ink" data-act="go" data-to="#/grade/' +
            esc(g.id) +
            '">← Πίσω στις ειδικότητες</button></p>'
        );
      let inner =
        '<a data-act="go" data-to="#/grade/' +
        esc(g.id) +
        '" style="font-size:.85rem;color:var(--muted)">← Ειδικότητες</a>';
      inner += '<p class="kicker" style="margin-top:1.2rem">Ειδικότητα · ' + esc(g.label) + "</p>";
      inner +=
        '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">' +
        esc(specialization.title) +
        "</h1>";
      inner += '<div class="grid-2" style="margin-top:1.6rem">';
      specialization.subjectIds.forEach(function (subjectId) {
        const subject = g.subjects.find(function (item) {
          return item.id === subjectId;
        });
        if (subject) inner += subjectCard(subject);
      });
      inner += "</div>";
      return siteShell(inner);
    }
    let inner = '<a data-act="go" data-to="#/" style="font-size:.85rem;color:var(--muted)">← Τάξεις</a>';
    inner += '<p class="kicker" style="margin-top:1.2rem">Τάξη</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">' + esc(g.label) + "</h1>";
    inner += '<div class="grid-2" style="margin-top:1.6rem">';
    if (g.specializations) {
      g.specializations.forEach(function (specialization) {
        inner +=
          '<button class="card" data-act="go" data-to="#/grade/' +
          esc(g.id) +
          "/" +
          esc(specialization.id) +
          '" style="text-align:left;display:block;width:100%"><h2 style="font-size:1.35rem">' +
          esc(specialization.title) +
          '</h2><p style="color:var(--muted);margin:.35rem 0 0">Επίλεξε για να δεις τα μαθήματα της ειδικότητας.</p></button>';
      });
    } else {
      g.subjects.forEach(function (s) {
        inner += subjectCard(s);
      });
    }
    inner += "</div>";
    return siteShell(inner);
  }

  function linksPage() {
    let inner = '<a data-act="go" data-to="#/" style="font-size:.85rem;color:var(--muted)">← Αρχική</a>';
    inner += '<p class="kicker" style="margin-top:1.2rem">Χρήσιμα</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">Χρήσιμα Links</h1>';
    inner += '<div class="card" style="padding:0;margin-top:1.6rem;overflow:hidden">';
    LINKS.forEach(function (group) {
      inner += '<p class="kicker" style="padding:.9rem 1.1rem 0">' + esc(group.title) + "</p>";
      group.items.forEach(function (l) {
        inner +=
          '<a class="toc-item" href="' +
          esc(l.url) +
          '" target="_blank" rel="noopener"><span style="flex:1"><b>' +
          esc(l.title) +
          "</b>" +
          (l.desc
            ? '<br><span style="color:var(--muted);font-size:.9rem">' + esc(l.desc) + "</span>"
            : "") +
          "</span><span>↗</span></a>";
      });
    });
    inner += "</div>";
    return siteShell(inner);
  }

  function renderLatex(str) {
    if (!str) return "";
    if (typeof katex === "undefined") return esc(str);
    // Αν περιέχει \(...\), κάνε render τα μαθηματικά τμήματα
    if (str.indexOf("\\(") !== -1) {
      return str.replace(/\\\(([\s\S]*?)\\\)/g, function (_, expr) {
        try {
          return katex.renderToString(expr, { throwOnError: false, displayMode: false });
        } catch (e) {
          return esc(expr);
        }
      });
    }
    try {
      return katex.renderToString(str, { throwOnError: false, displayMode: false });
    } catch (e) {
      return esc(str);
    }
  }

  function renderMathText(str) {
    if (!str) return "";
    if (typeof katex === "undefined") return esc(str);
    return str.split(/\\\(([\s\S]*?)\\\)/g).map(function (part, index) {
      if (index % 2 === 0) return esc(part);
      try {
        return katex.renderToString(part, { throwOnError: false, displayMode: false });
      } catch (e) {
        return esc("\\(" + part + "\\)");
      }
    }).join("");
  }

  /* "Βήμα 1ο" → "ΒΗΜΑ 1<sup>ο</sup>" — το ο ως εκθέτης */
  function fmtStepLabel(lbl) {
    return esc(lbl).replace(/(\d+)ο/g, '$1<sup style="font-size:.65em;vertical-align:super;line-height:1;font-weight:700">ο</sup>');
  }

  function mathPage() {
    const categories = window.MATH_CATEGORIES || [];
    const list = categories.length ? categories : (window.MATH_SECTIONS || [
      {
        id: "dekadika-klasmata",
        title: "Δεκαδικά Κλάσματα",
        kicker: "Βασικά Μαθηματικά",
        description: "Ορισμός κλάσματος και αναλυτικές μεθοδολογίες μετατροπής σε δεκαδικό αριθμό με βήματα."
      }
    ]);
    let inner = '<a data-act="go" data-to="#/" style="font-size:.85rem;color:var(--muted)">← Αρχική</a>';
    inner += '<p class="kicker" style="margin-top:1.2rem">Γρήγορη αναφορά</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">Βασικά Μαθηματικά</h1>';
    inner += '<p class="lead" style="margin-top:.6rem">Επίλεξε κατηγορία για να δεις τις υποκατηγορίες και το εκπαιδευτικό υλικό.</p>';
    inner += '<div class="grid-2" style="margin-top:1.6rem">';
    list.forEach(function (sec) {
      inner +=
        '<button class="card" data-act="go" data-to="' +
        esc("#/math/" + sec.id) +
        '" style="text-align:left;display:block;width:100%">' +
        '<p class="kicker">' + esc(sec.kicker || "Ενότητα") + '</p>' +
        '<h2 style="font-size:1.4rem;margin-top:.2rem">' +
        esc(sec.title) +
        '</h2><p style="color:var(--muted);margin:.4rem 0 0">' +
        esc(sec.description) +
        "</p></button>";
    });
    inner += "</div>";
    return siteShell(inner);
  }

  function mathCategoryPage(id) {
    const category = (window.MATH_CATEGORIES || []).find(function (item) { return item.id === id; });
    if (!category) return mathPage();
    let inner = '<a data-act="go" data-to="#/math" style="font-size:.85rem;color:var(--muted)">← Βασικά Μαθηματικά</a>';
    inner += '<p class="kicker" style="margin-top:1.2rem">' + esc(category.kicker || "Βασικά Μαθηματικά") + '</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">' + esc(category.title) + '</h1>';
    inner += '<p class="lead" style="margin-top:.6rem">' + esc(category.description || "") + '</p>';
    inner += '<div class="grid-2" style="margin-top:1.6rem">';
    (category.subcategories || []).forEach(function (section) {
      inner +=
        '<button class="card" data-act="go" data-to="#/math/' +
        esc(category.id) +
        '/' +
        esc(section.id) +
        '" style="text-align:left;display:block;width:100%">' +
        '<p class="kicker">' + esc(section.kicker || category.title) + '</p>' +
        '<h2 style="font-size:1.4rem;margin-top:.2rem">' + esc(section.title) + '</h2>' +
        '<p style="color:var(--muted);margin:.4rem 0 0">' + esc(section.description || "") + '</p></button>';
    });
    inner += "</div>";
    return siteShell(inner);
  }

  function mathSectionPage(id, categoryId) {
    const list = window.MATH_SECTIONS || [];
    const categories = window.MATH_CATEGORIES || [];
    const category = categoryId
      ? categories.find(function (item) { return item.id === categoryId; })
      : null;
    if (categoryId && !category) return mathPage();
    const sec = categoryId
      ? (category.subcategories || []).find(function (item) { return item.id === id; })
      : list.find(function (s) { return s.id === id; }) || list[0];
    if (categoryId && !sec) return mathCategoryPage(categoryId);
    if (!sec) return mathPage();

    var html = "";
    html += category
      ? '<a data-act="go" data-to="#/math/' + esc(category.id) + '" style="font-size:.85rem;color:var(--muted)">← ' + esc(category.title) + '</a>'
      : '<a data-act="go" data-to="#/math" style="font-size:.85rem;color:var(--muted)">← Βασικά Μαθηματικά</a>';
    html += '<p class="kicker" style="margin-top:1.4rem">' + esc(sec.kicker || "Βασικά Μαθηματικά") + '</p>';
    html += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.25rem;line-height:1.1">' + esc(sec.title) + '</h1>';
    html += '<p class="lead" style="margin-top:.65rem">' + esc(sec.lead) + '</p>';
    html += '<div style="display:flex;flex-direction:column;gap:1.5rem;margin-top:2rem;max-width:52rem">';

    (sec.topics || []).forEach(function (t, ti) {
      html += '<div class="card" style="padding:1.4rem 1.6rem;border-radius:1.2rem">';
      html += '<div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.9rem">';
      html += '<span style="display:grid;place-items:center;width:2.1rem;height:2.1rem;border-radius:50%;'
            + 'background:var(--copper);color:var(--cream);font-weight:700;font-size:.95rem;flex-shrink:0">'
            + (ti + 1) + '</span>';
      html += '<h2 style="font-size:1.25rem;margin:0">' + esc(t.title) + '</h2>';
      html += '</div>';

      if (t.intro) {
        html += '<p style="margin:.2rem 0 1rem;font-size:1.05rem;line-height:1.6;color:var(--ink-soft)">'
              + renderMathText(t.intro) + '</p>';
      }

      if (t.def && t.def.length) {
        html += '<div style="display:flex;flex-wrap:wrap;gap:.55rem;margin-bottom:1rem">';
        t.def.forEach(function (d) {
          html += '<div style="flex:1;min-width:10rem;background:rgba(196,92,38,.08);border:1px solid rgba(196,92,38,.22);'
                + 'border-radius:.85rem;padding:.7rem .95rem">';
          html += '<div style="font-size:.68rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;'
                + 'color:var(--copper);margin-bottom:.25rem">' + esc(d.label) + '</div>';
          html += '<div style="font-size:.97rem;color:var(--ink-soft)">' + esc(d.desc) + '</div>';
          html += '</div>';
        });
        html += '</div>';
      }

      if (t.steps && t.steps.length) {
        html += '<div style="display:flex;flex-direction:column;gap:.75rem">';
        t.steps.forEach(function (s, si) {
          var isLast = si === t.steps.length - 1;
          html += '<div style="display:flex;gap:.9rem;align-items:flex-start">';
          html += '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">';
          html += '<div style="width:1.7rem;height:1.7rem;border-radius:50%;border:2px solid var(--copper);'
                + 'display:grid;place-items:center;font-size:.78rem;font-weight:700;color:var(--copper);'
                + 'background:var(--cream);z-index:1">' + (si + 1) + '</div>';
          if (!isLast) {
            html += '<div style="width:2px;flex:1;min-height:.8rem;background:rgba(196,92,38,.2);margin:.15rem 0"></div>';
          }
          html += '</div>';
          html += '<div style="flex:1;padding-bottom:' + (isLast ? "0" : ".5rem") + '">';
          html += '<div style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;'
                + 'color:var(--copper);margin-bottom:.35rem">' + fmtStepLabel(s.label) + '</div>';
          html += '<div style="background:var(--paper-2);border:1px solid var(--line);border-radius:.85rem;'
                + 'padding:.8rem 1.1rem;font-size:1.25rem;text-align:center;overflow-x:auto">'
                + renderLatex(s.latex) + '</div>';
          if (s.note) {
            html += '<p style="margin:.45rem .25rem 0;font-size:.92rem;color:var(--ink-soft);line-height:1.55">'
                  + esc(s.note) + '</p>';
          }
          html += '</div>';
          html += '</div>';
        });
        html += '</div>';
      }

      html += '</div>';
    });

    /* ── 20 Ασκήσεις Εξάσκησης στο τέλος ── */
    if (sec.exercises && sec.exercises.length) {
      html += '<div class="card" style="padding:1.6rem;border-radius:1.2rem;border:2px solid rgba(196,92,38,.28);margin-top:.8rem">';
      html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.8rem;border-bottom:1px solid var(--line);padding-bottom:1rem;margin-bottom:1.4rem">';
      html += '<div>';
      html += '<p class="kicker" style="margin:0 0 .2rem">Διαδραστική Εξάσκηση</p>';
      html += '<h2 style="font-size:1.45rem;margin:0">' + sec.exercises.length + ' Ασκήσεις: Μετατροπή σε Δεκαδικό</h2>';
      html += '<p style="color:var(--muted);margin:.3rem 0 0;font-size:.92rem">Συμπλήρωσε το αποτέλεσμα (με κόμμα ή τελεία) και πάτησε «Έλεγχος» ή Enter.</p>';
      html += '</div>';
      html += '<div style="display:flex;align-items:center;gap:.75rem">';
      html += '<div id="math-practice-score" style="background:var(--paper-2);border:1px solid var(--line);border-radius:.8rem;padding:.45rem .95rem;font-weight:700;font-size:.95rem">';
      html += 'Σκορ: <span id="math-score-num">0</span> / ' + sec.exercises.length;
      html += '</div>';
      html += '<button class="btn btn-ghost" data-act="math-reset-all" style="min-height:2.4rem;padding:0 .9rem;font-size:.85rem">Επαναφορά</button>';
      html += '</div>';
      html += '</div>';

      html += '<div class="grid-2" style="gap:1rem">';
      sec.exercises.forEach(function (ex, i) {
        html += '<div class="card math-practice-item" data-idx="' + i + '" style="background:var(--paper);border:1px solid var(--line);border-radius:1rem;padding:1rem 1.15rem;display:flex;flex-direction:column;gap:.65rem">';
        html += '<div style="display:flex;align-items:center;justify-content:space-between">';
        html += '<span style="font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--copper)">Άσκηση ' + (i + 1) + '</span>';
        html += '<span class="math-item-status" style="font-size:.82rem;font-weight:700"></span>';
        html += '</div>';
        html += '<div style="display:flex;align-items:center;gap:.6rem;flex-wrap:wrap">';
        html += '<div style="font-size:1.35rem;min-width:4.2rem;text-align:center">' + renderLatex(ex.latex + " = ") + '</div>';
        html += '<input type="text" class="math-practice-input" data-idx="' + i + '" placeholder="0,..." autocomplete="off" style="width:6.2rem;height:2.6rem;padding:0 .5rem;text-align:center;font-size:1.15rem;font-weight:600;border-radius:.6rem;border:1px solid var(--line);background:var(--paper-2);color:inherit;outline:none">';
        html += '<button class="btn btn-copper" data-act="math-check-item" data-idx="' + i + '" style="min-height:2.6rem;padding:0 .9rem;font-size:.85rem">Έλεγχος</button>';
        html += '</div>';
        html += '<div class="math-item-feedback" style="display:none;font-size:.88rem;line-height:1.45;padding:.5rem .75rem;border-radius:.6rem"></div>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
    }

    if (sec.exerciseGroups && sec.exerciseGroups.length) {
      html += '<p style="margin:1.4rem 0 .5rem;color:var(--muted);font-size:.92rem">Γράψε τις δυνάμεις με ^ (π.χ. x^2). Ο πολλαπλασιασμός μπορεί να γραφτεί με ή χωρίς * (π.χ. 3*x ή 3x).</p>';
      sec.exerciseGroups.forEach(function (group, gi) {
        html += '<div class="card" style="padding:1.4rem;border-radius:1.2rem;border:2px solid rgba(196,92,38,.28);margin-top:1.2rem">';
        html += '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.8rem;border-bottom:1px solid var(--line);padding-bottom:1rem;margin-bottom:1.2rem">';
        html += '<div><p class="kicker" style="margin:0 0 .2rem">Διαδραστική Εξάσκηση</p>';
        html += '<h2 style="font-size:1.35rem;margin:0">' + esc(group.title) + '</h2>';
        html += '<p style="color:var(--muted);margin:.3rem 0 0;font-size:.92rem">' + esc(group.description || "Γράψε την ισοδύναμη παράσταση και πάτησε «Έλεγχος» ή Enter.") + '</p></div>';
        html += '<div style="background:var(--paper-2);border:1px solid var(--line);border-radius:.8rem;padding:.45rem .95rem;font-weight:700;font-size:.95rem">Σκορ: <span class="algebra-score" data-group="' + gi + '">0</span> / ' + group.items.length + '</div>';
        html += '</div><div class="grid-2" style="gap:1rem">';
        group.items.forEach(function (ex, ei) {
          html += '<div class="card algebra-practice-item" data-group="' + gi + '" data-idx="' + ei + '" data-mode="' + esc(ex.mode || group.mode || "expanded") + '" style="background:var(--paper);border:1px solid var(--line);border-radius:1rem;padding:1rem 1.15rem;display:flex;flex-direction:column;gap:.65rem">';
          html += '<div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--copper)">Άσκηση ' + (ei + 1) + '</span><span class="math-item-status" style="font-size:.82rem;font-weight:700"></span></div>';
          html += '<p style="margin:0;color:var(--muted);font-size:.9rem">' + esc(ex.instruction || group.instruction || "") + '</p>';
          html += '<div style="font-size:1.2rem;overflow-x:auto">' + renderLatex("\\(" + ex.prompt + "\\)") + '</div>';
          html += '<div style="display:flex;align-items:center;gap:.6rem;flex-wrap:wrap">';
          html += '<input type="text" class="algebra-practice-input" data-group="' + gi + '" data-idx="' + ei + '" aria-label="Απάντηση στην άσκηση ' + (ei + 1) + '" placeholder="π.χ. (x+1)^2" autocomplete="off" style="flex:1;min-width:12rem;height:2.6rem;padding:0 .65rem;font-size:1rem;border-radius:.6rem;border:1px solid var(--line);background:var(--paper-2);color:inherit;outline:none">';
          html += '<button class="btn btn-copper" data-act="math-check-algebra" data-group="' + gi + '" data-idx="' + ei + '" style="min-height:2.6rem;padding:0 .9rem;font-size:.85rem">Έλεγχος</button></div>';
          html += '<div class="math-item-feedback" style="display:none;font-size:.88rem;line-height:1.55;padding:.5rem .75rem;border-radius:.6rem"></div>';
          html += '</div>';
        });
        html += '</div></div>';
      });
      html += '<p style="margin-top:1rem"><button class="btn btn-ghost" data-act="math-reset-all">Επαναφορά απαντήσεων</button></p>';
    }

    html += '</div>';
    return siteShell(html);
  }

  function home() {
    const p = progress();
    const first = ctx.sections[0];
    const done = ctx.exercises.filter(function (e) {
      return p.exercises[e.id] && p.exercises[e.id].status === "done";
    }).length;
    let inner =
      '<p class="kicker">' + esc(ctx.kicker) + "</p>";
    inner +=
      '<div style="display:grid;gap:1.5rem;align-items:center;margin-top:.3rem" class="grid-2">';
    inner +=
      "<div><h1 style='font-size:clamp(2.4rem,6vw,3.6rem);line-height:.95'>" +
      esc(ctx.title) +
      "</h1>";
    inner +=
      '<p class="lead" style="margin-top:1rem">' + esc(ctx.lead) + "</p>";
    inner += '<div class="btn-row">';
    if (first) {
      inner +=
        '<button class="btn btn-copper" data-act="go" data-to="' +
        ctx.base +
        "/notes/" +
        first.slug +
        '">Σημειώσεις</button>';
    }
    if (ctx.hasExercises && ctx.exercises.length) {
      inner +=
        '<button class="btn btn-ink" data-act="go" data-to="' +
        ctx.base +
        '/board">Στον πίνακα</button>';
    }
    inner += "</div></div>";
    inner += '<div style="justify-self:center">' + subjectMark() + "</div></div>";
    inner +=
      '<div class="' +
      (ctx.hasExercises ? "grid-2" : "") +
      '" style="margin-top:1.6rem">';
    if (first) {
      inner +=
        '<button class="card" data-act="go" data-to="' +
        ctx.base +
        "/notes/" +
        first.slug +
        '" style="text-align:left"><p class="kicker">Θεωρία</p><h2 style="font-size:1.5rem;margin-top:.2rem">' +
        ctx.sections.length +
        " σύντομες ενότητες</h2><p style=\"color:var(--muted);margin:.4rem 0 0\">" +
        p.read.length +
        "/" +
        ctx.sections.length +
        " διαβάστηκαν</p></button>";
    } else if (ctx.sections.length === 0) {
      inner +=
        '<div class="card" style="text-align:left"><p class="kicker">Θεωρία</p><h2 style="font-size:1.5rem;margin-top:.2rem">Σημειώσεις σύντομα</h2><p style="color:var(--muted);margin:.4rem 0 0">Δεν έχουν φορτωθεί ακόμη ενότητες θεωρίας.</p></div>';
    }
    if (ctx.hasExercises) {
      inner +=
        '<button class="card card-light" data-act="go" data-to="' +
        ctx.base +
        '/board" style="text-align:left;background:var(--ink);color:var(--cream)"><p class="kicker">Τράπεζα θεμάτων</p><h2 style="font-size:1.5rem;margin-top:.2rem">' +
        ctx.exercises.length +
        " ασκήσεις</h2><p style=\"opacity:.75;margin:.4rem 0 0\">" +
        done +
        "/" +
        ctx.exercises.length +
        " ολοκληρώθηκαν σωστά</p></button>";
    }
    inner += "</div>";
    inner +=
      '<div class="card" style="padding:0;margin-top:1.6rem;overflow:hidden">';
    const homeChapterIds = chaptersOf(ctx.sections, sectionChapter);
    homeChapterIds.forEach(function (chId) {
      inner +=
        '<p class="kicker" style="padding:.8rem 1.1rem 0">Κεφάλαιο ' + esc(chId) + "</p>";
      ctx.sections.filter(function (s) {
        return sectionChapter(s) === chId;
      }).forEach(function (s) {
        inner +=
          '<button class="toc-item" data-act="go" data-to="' +
          ctx.base +
          "/notes/" +
          s.slug +
          '"><span class="num">' +
          esc(s.num) +
          '</span><span style="flex:1;text-align:left"><b>' +
          esc(s.title) +
          '</b><br><span style="color:var(--muted);font-size:.9rem">' +
          esc(s.kicker) +
          "</span></span><span>→</span></button>";
      });
    });
    inner += "</div>";
    if (p.read.length + done > 0) {
      inner +=
        '<p style="margin-top:1.4rem"><button class="btn btn-ghost" data-act="reset">Επαναφορά προόδου</button></p>';
    }
    return shell(inner, false, { name: "home" });
  }

  function notes(slug) {
    const s = getSection(slug) || ctx.sections[0];
    markRead(s.slug);
    const adj = adjacent(ctx.sections, "slug", s.slug);
    let inner = '<p class="kicker">' + esc(s.kicker) + "</p>";
    inner +=
      '<p style="font-family:var(--font-serif);color:var(--copper);margin:.4rem 0 0">' +
      esc(s.num) +
      "</p>";
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.2rem">' + esc(s.title) + "</h1>";
    inner += '<p class="lead" style="margin-top:.8rem">' + esc(s.lead) + "</p>";
    inner += '<div class="prose" style="margin-top:1.2rem">';
    s.blocks.forEach(function (b) {
      inner += renderBlock(b);
    });
    inner += "</div>";
    if (adj.prev || adj.next || ctx.hasExercises)
      inner += '<div class="btn-row" style="margin-top:2rem">';
    if (adj.prev)
      inner +=
        '<button class="btn btn-ghost" data-act="go" data-to="' +
        ctx.base +
        "/notes/" +
        adj.prev.slug +
        '">← ' +
        esc(adj.prev.title) +
        "</button>";
    if (adj.next)
      inner +=
        '<button class="btn btn-copper" data-act="go" data-to="' +
        ctx.base +
        "/notes/" +
        adj.next.slug +
        '">' +
        esc(adj.next.title) +
        " →</button>";
    else if (ctx.hasExercises)
      inner +=
        '<button class="btn btn-ink" data-act="go" data-to="' +
        ctx.base +
        '/board">Στον πίνακα →</button>';
    if (adj.prev || adj.next || ctx.hasExercises) inner += "</div>";
    return shell(inner, false, { name: "notes", slug: s.slug });
  }

  function boardIndex() {
    const p = progress();
    const done = ctx.exercises.filter(function (e) {
      return p.exercises[e.id] && p.exercises[e.id].status === "done";
    }).length;
    let inner = '<p class="kicker">Τράπεζα θεμάτων</p>';
    inner += '<h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.35rem">Ο πίνακας</h1>';
    inner +=
      '<p class="lead" style="margin-top:.7rem">Σήκω και λύσε. Πολλαπλή επιλογή, αντιστοίχιση, κενά, σωστό/λάθος και υπολογιστικά — όπως στην εξέταση, με άμεσο έλεγχο.</p>';
    inner +=
      '<p style="margin-top:1rem;opacity:.75">' +
      done +
      " από " +
      ctx.exercises.length +
      " σωστά ολοκληρωμένες</p>";
    const boardChapterIds = chaptersOf(ctx.groups, function (g) { return g.chapter; });
    boardChapterIds.forEach(function (chId) {
      if (boardChapterIds.length > 1)
        inner +=
          '<h2 style="margin-top:2.4rem;font-family:var(--font-serif);color:var(--copper)">Κεφάλαιο ' +
          esc(chId) +
          "</h2>";
      ctx.groups.filter(function (g) {
        return g.chapter === chId;
      }).forEach(function (g) {
        inner +=
          '<section style="margin-top:1.4rem"><h3 style="font-size:1.3rem">' +
          esc(g.title) +
          '</h3><p style="opacity:.7;margin:.3rem 0 0;font-size:.92rem">' +
          esc(g.blurb) +
          "</p><div class=\"ex-list\">";
        sortedExercises(ctx.exercises.filter(function (e) {
          return e.group === g.id;
        })).forEach(function (ex) {
          const res = p.exercises[ex.id];
          const cls = res ? (res.status === "done" ? "done" : "miss") : "";
          inner +=
            '<button class="ex-link ' +
            cls +
            '" data-act="go" data-to="' +
            ctx.base +
            "/board/" +
            ex.id +
            '"><span style="flex:1"><span style="display:block;font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;opacity:.7">' +
            esc(KIND_LABEL[ex.kind]) +
            " · " +
            fmtOrd(ex.code) +
            " · " +
            ex.units +
            ' μον.</span><span style="font-family:var(--font-serif);font-size:1.25rem">' +
            fmtOrd(ex.title) +
            "</span></span><span>" +
            (res && res.status === "done" ? "✓" : "→") +
            "</span></button>";
        });
        inner += "</div></section>";
      });
    });
    return shell(inner, true, { name: "board" });
  }

  function itemView(item, answer, checked, idx) {
    const matchPicked = idx === state.step ? state.matchPicked : null;
    const blankPicked = idx === state.step ? state.blankPicked : null;
    if (item.kind === "mc") {
      let h = '<fieldset><legend style="font-family:var(--font-serif);font-size:1.5rem;margin-bottom:.8rem">' + esc(item.prompt) + "</legend>";
      item.options.forEach(function (opt) {
        const selected = answer.mc === opt.id;
        const ok = checked && opt.id === item.answer;
        const bad = checked && selected && opt.id !== item.answer;
        const cls = ok ? "ok" : bad ? "bad" : selected ? "sel" : "";
        h +=
          '<button class="choice ' +
          cls +
          '" data-act="mc" data-id="' +
          opt.id +
          '"' +
          (checked ? " disabled" : "") +
          '><span class="ltr">' +
          letter(opt.id) +
          "</span><span>" +
          esc(opt.text) +
          "</span></button>";
      });
      return h + "</fieldset>";
    }
    if (item.kind === "tf") {
      let h = '<p style="font-family:var(--font-serif);font-size:1.45rem;line-height:1.35">' + esc(item.prompt) + '</p><div class="tf-grid">';
      [
        { v: "true", label: "Σωστό" },
        { v: "false", label: "Λάθος" },
      ].forEach(function (opt) {
        const val = opt.v === "true";
        const selected = answer.tf === val;
        const ok = checked && val === item.answer;
        const bad = checked && selected && val !== item.answer;
        const cls = ok ? "ok" : bad ? "bad" : selected ? "sel" : "";
        h +=
          '<button class="tf-btn ' +
          cls +
          '" data-act="tf" data-v="' +
          opt.v +
          '"' +
          (checked ? " disabled" : "") +
          ">" +
          opt.label +
          "</button>";
      });
      return h + "</div>";
    }
    if (item.kind === "match") {
      const value = answer.match || {};
      const usedRight = {};
      Object.keys(value).forEach(function (k) {
        usedRight[value[k]] = true;
      });
      let h =
        '<p style="font-family:var(--font-serif);font-size:1.5rem">' +
        esc(item.prompt) +
        '</p><p style="opacity:.7;font-size:.9rem;margin:.4rem 0 1rem">Πάτησε αριστερά, μετά δεξιά. Πάτησε ξανά ένα ζεύγος για να το λύσεις.</p>';
      const connected = item.left.filter(function (l) {
        return value[l.id];
      });
      connected.forEach(function (l) {
        const r = item.right.find(function (x) {
          return x.id === value[l.id];
        });
        const good = checked && value[l.id] === item.pairs[l.id];
        const bad = checked && value[l.id] !== item.pairs[l.id];
        h +=
          '<button class="pair ' +
          (good ? "ok" : bad ? "bad" : "") +
          '" data-act="match-unpair" data-id="' +
          l.id +
          '"' +
          (checked ? " disabled" : "") +
          "><span><b style='color:var(--copper);font-family:var(--font-serif)'>" +
          esc(l.id) +
          ".</b> " +
          esc(l.text) +
          "</span><span style='flex:0;opacity:.5'>→</span><span><b style='color:var(--copper);font-family:var(--font-serif)'>" +
          letter(r ? r.id : "") +
          ".</b> " +
          esc(r ? r.text : "") +
          "</span></button>";
      });
      const remainingLeft = item.left.filter(function (l) {
        return !value[l.id];
      });
      const remainingRight = item.right.filter(function (r) {
        return !usedRight[r.id];
      });
      h += '<div class="cols" style="margin-top:1rem">';
      h += '<div class="col"><h4>Στήλη Α</h4>';
      remainingLeft.forEach(function (it) {
        h +=
          '<button class="match-item ' +
          (matchPicked === it.id ? "picked" : "") +
          '" data-act="match-left" data-id="' +
          it.id +
          '"' +
          (checked ? " disabled" : "") +
          "><b>" +
          esc(it.id) +
          ".</b> " +
          esc(it.text) +
          "</button>";
      });
      if (!remainingLeft.length) h += '<p style="opacity:.5;padding:.8rem">—</p>';
      h += "</div>";
      h +=
        '<div class="col ' +
        (matchPicked && !checked ? "wait" : "") +
        '"><h4>Στήλη Β</h4>';
      remainingRight.forEach(function (it) {
        h +=
          '<button class="match-item" data-act="match-right" data-id="' +
          it.id +
          '"' +
          (checked || !matchPicked ? " disabled" : "") +
          "><b>" +
          letter(it.id) +
          ".</b> " +
          esc(it.text) +
          "</button>";
      });
      if (!remainingRight.length) h += '<p style="opacity:.5;padding:.8rem">—</p>';
      h += "</div></div>";
      return h;
    }
    if (item.kind === "blank") {
      const value = answer.blank || [];
      const usedCount = {};
      value.forEach(function (v) {
        if (v) usedCount[v] = (usedCount[v] || 0) + 1;
      });
      const maxCount = {};
      item.bank.forEach(function (w) {
        maxCount[w] = 0;
      });
      item.answers.forEach(function (a) {
        maxCount[a] = (maxCount[a] || 0) + 1;
      });
      item.bank.forEach(function (w) {
        if (!maxCount[w]) maxCount[w] = 1;
      });
      let h = '<p style="opacity:.75;font-size:.9rem">' + esc(item.prompt) + '</p><p class="para">';
      item.textBefore.forEach(function (chunk, i) {
        h += esc(chunk);
        if (i < item.answers.length) {
          const filled = value[i];
          const cls = !filled
            ? "empty"
            : checked
              ? filled === item.answers[i]
                ? "ok"
                : "bad"
              : "";
          h +=
            '<button class="slot ' +
            cls +
            '" data-act="blank-slot" data-i="' +
            i +
            '">' +
            (filled ? esc(filled) : "…") +
            "</button>";
        }
      });
      h += '</p><p class="kicker" style="margin:1.1rem 0 .5rem">Τράπεζα λέξεων</p><div class="bank">';
      item.bank.forEach(function (word) {
        const left = (maxCount[word] || 1) - (usedCount[word] || 0);
        const spent = left <= 0;
        h +=
          '<button class="word ' +
          (blankPicked === word && !spent ? "picked" : "") +
          (spent ? " spent" : "") +
          '" data-act="blank-word" data-word="' +
          encodeURIComponent(word) +
          '"' +
          (checked || spent ? " disabled" : "") +
          ">" +
          esc(word) +
          "</button>";
      });
      h += "</div>";
      return h;
    }
    if (item.kind === "calc") {
      const good = checked && isCorrect(item, answer);
      return (
        '<p style="font-family:var(--font-serif);font-size:1.5rem">' +
        esc(item.prompt) +
        '</p><label style="display:block;margin-top:1.1rem"><span class="kicker">Απάντηση</span><div style="display:flex;align-items:center;gap:.5rem;margin-top:.4rem"><input class="calc-in" data-act="calc" inputmode="decimal" placeholder="π.χ. 25" value="' +
        esc(answer.calc || "") +
        '" ' +
        (checked ? "disabled" : "") +
        '><span style="font-family:var(--font-serif);font-size:1.2rem;opacity:.75">' +
        esc(item.unit) +
        "</span></div></label>" +
        (checked && !good
          ? '<p style="margin-top:.5rem;opacity:.8;font-size:.9rem">Σωστό: <b>' +
            item.answer.toLocaleString("el-GR") +
            " " +
            esc(item.unit) +
            "</b></p>"
          : "")
      );
    }
    return "";
  }

  function exercisePage(id) {
    const ex = getExercise(id);
    if (!ex) {
      return shell('<h1>Η άσκηση δεν βρέθηκε</h1><button class="btn btn-chalk" data-act="go" data-to="' + ctx.base + '/board">Πίσω</button>', true, { name: "board" });
    }
    if (state.exId !== ex.id) resetEngine(ex);
    const theory = getSection(ex.theory);
    const adj = adjacent(ctx.exercises, "id", ex.id);
    const allReady = ex.items.every(function (it, i) { return isFilled(it, state.answers[i]); });
    const score = state.results.filter(Boolean).length;

    let inner =
      '<div style="display:flex;flex-wrap:wrap;gap:.7rem;align-items:center;margin-bottom:1.1rem"><button class="btn btn-chalk" data-act="go" data-to="' +
      ctx.base + '/board">← Όλες οι ασκήσεις</button>';
    if (theory)
      inner += '<button class="btn btn-chalk" style="margin-left:auto" data-act="go" data-to="' +
        ctx.base + "/notes/" + theory.slug + '">' + esc(theory.num) + " " + esc(theory.title) + "</button>";
    inner += "</div>";
    inner += '<div class="board-card">';
    inner += '<p class="kicker">' + esc(KIND_LABEL[ex.kind]) + " · " + ex.units + " μονάδες</p>";
    inner += '<h1 style="font-size:clamp(1.7rem,4vw,2.4rem);margin-top:.35rem">' + fmtOrd(ex.title) + "</h1>";
    inner += '<p style="margin:.4rem 0 0;font-size:.75rem;letter-spacing:.06em;text-transform:uppercase;opacity:.65">' + fmtOrd(ex.code) + "</p>";
    if (ex.stem) inner += '<p style="margin-top:.7rem;opacity:.8;line-height:1.5;white-space:pre-line">' + esc(ex.stem) + "</p>";
    // Σχήματα εκφώνησης (πάντα ορατά)
    (function () {
      const figs = [];
      if (ex.image) figs.push(ex.image);
      if (ex.images && ex.images.length) {
        ex.images.forEach(function (src) {
          if (figs.indexOf(src) < 0) figs.push(src);
        });
      }
      if (figs.length) {
        inner += '<div class="ex-figures" style="margin-top:1rem;display:flex;flex-direction:column;gap:.75rem">';
        figs.forEach(function (src) {
          inner +=
            '<figure class="ex-figure" style="margin:0"><img src="' +
            imgUrl(src) +
            '" alt="Σχήμα θέματος" style="max-width:100%;height:auto;border-radius:8px;background:#fff" loading="lazy"/></figure>';
        });
        inner += "</div>";
      }
    })();
    if (ex.givens) {
      inner += '<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.9rem">';
      ex.givens.forEach(function (g) {
        inner += '<span class="chip"><span style="opacity:.7">' + esc(g.label) + "</span> <b>" + esc(g.value) + "</b></span>";
      });
      inner += "</div>";
    }

    ex.items.forEach(function (item, i) {
      const answer = state.answers[i];
      inner += '<section data-item="' + i + '" style="margin-top:1.4rem;padding-top:1.1rem;border-top:1px solid rgb(128 128 128 / .25)">';
      if (ex.items.length > 1)
        inner += '<p style="margin:0 0 .6rem;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;opacity:.65">Ερώτημα ' + (i + 1) + "</p>";
      inner += itemView(item, answer, state.checked, i);
      if (item.hint) {
        inner += '<p><button class="btn btn-chalk" style="margin-top:.8rem" data-act="hint">' +
          (state.hints[i] ? "Απόκρυψη υπόδειξης" : "Υπόδειξη") + "</button></p>";
        if (state.hints[i])
          inner += '<div class="hintbox" style="margin-top:.5rem">' + esc(item.hint) +
            (item.formula ? '<span class="f">' + renderMathText(item.formula) + "</span>" : "") + "</div>";
      }
      if (state.checked) {
        const ok = state.results[i];
        inner += '<div class="feedback ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Σωστά" : "Όχι ακριβώς") +
          "</b><p style='margin:.35rem 0 0;line-height:1.5'>" + renderMathText(item.explain || "") + "</p></div>";
      }
      inner += "</section>";
    });

    // Εικόνες λύσης: ΜΟΝΟ μετά τον έλεγχο
    if (state.checked && ex.solutionImages && ex.solutionImages.length) {
      inner +=
        '<div class="ex-solution-figures" style="margin-top:1.2rem;padding-top:1rem;border-top:1px dashed rgb(128 128 128 / .35)">';
      inner +=
        '<p class="kicker" style="margin:0 0 .6rem">Σχήμα λύσης</p>';
      ex.solutionImages.forEach(function (src) {
        inner +=
          '<figure class="ex-figure" style="margin:0 0 .75rem"><img src="' +
          imgUrl(src) +
          '" alt="Σχήμα λύσης" style="max-width:100%;height:auto;border-radius:8px;background:#fff" loading="lazy"/></figure>';
      });
      inner += "</div>";
    }

    inner += '<div class="btn-row">';
    if (!state.checked) {
      inner += '<button class="btn btn-chalk-solid" data-act="check"' + (allReady ? "" : " disabled") + ">Έλεγχος όλων</button>";
    } else {
      inner += '<button class="btn btn-chalk" data-act="retry">Διόρθωση</button>';
      inner += '<span style="align-self:center;opacity:.8">Βαθμός: <b>' + score + "/" + ex.items.length + "</b></span>";
    }
    inner += '<button class="btn btn-chalk" data-act="restart" style="margin-left:auto">Από την αρχή</button>';
    inner += "</div></div>";
    inner += '<div class="btn-row">';
    if (adj.prev)
      inner += '<button class="btn btn-chalk" data-act="go" data-to="' + ctx.base + "/board/" +
        adj.prev.id + '">← ' + fmtOrd(adj.prev.title) + "</button>";
    if (adj.next)
      inner += '<button class="btn btn-chalk" data-act="go" data-to="' + ctx.base + "/board/" +
        adj.next.id + '">' + fmtOrd(adj.next.title) + " →</button>";
    inner += "</div>";
    return shell(inner, true, { name: "exercise", id: ex.id });
  }

  function render(opts) {
    opts = opts || {};
    const y = window.scrollY;
    if (simulationCleanup) {
      simulationCleanup();
      simulationCleanup = null;
    }
    applyTheme();
    const r = route();
    if (r.subject) setCtx(r.subject);
    const root = document.getElementById("app");
    if (r.name === "site-home") root.innerHTML = siteHome();
    else if (r.name === "grade") root.innerHTML = gradePage(r.id, r.specializationId);
    else if (r.name === "links") root.innerHTML = linksPage();
    else if (r.name === "math") root.innerHTML = mathPage();
    else if (r.name === "math-category") root.innerHTML = mathCategoryPage(r.id);
    else if (r.name === "math-section") root.innerHTML = mathSectionPage(r.id, r.categoryId);
    else if (r.name === "simulations") root.innerHTML = simulationsPage();
    else if (r.name === "simulation") {
      const simulation = SIMULATIONS.find(function (item) {
        return item.id === r.id;
      });
      root.innerHTML = simulationPage(r.id);
      const mountSimulation = simulation && window[simulation.mount];
      if (typeof mountSimulation !== "function")
        throw new Error("Simulation script is not loaded for: " + r.id);
      simulationCleanup = mountSimulation(
        document.getElementById(simulation.containerId)
      );
    }
    else if (r.name === "notes") root.innerHTML = notes(r.slug);
    else if (r.name === "board") root.innerHTML = boardIndex();
    else if (r.name === "exercise") root.innerHTML = exercisePage(r.id);
    else root.innerHTML = home();
    window.scrollTo(0, opts.keepScroll ? y : 0);

    // KaTeX – τρέχει μετά από κάθε αλλαγή περιεχομένου
    if (typeof renderMathInElement === "function") {
      renderMathInElement(root, {
        delimiters: [
          {left: "\\(", right: "\\)", display: false},
          {left: "\\[", right: "\\]", display: true},
          {left: "$", right: "$", display: false},
          {left: "$$", right: "$$", display: true}
        ],
        throwOnError: false
      });
    } else {
      // Αν το KaTeX δεν έχει φορτώσει ακόμα, δοκίμασε ξανά σε λίγο
      setTimeout(function () {
        if (typeof renderMathInElement === "function") {
          renderMathInElement(root, {
            delimiters: [
              {left: "\\(", right: "\\)", display: false},
              {left: "\\[", right: "\\]", display: true},
              {left: "$", right: "$", display: false},
              {left: "$$", right: "$$", display: true}
            ],
            throwOnError: false
          });
        }
      }, 300);
    }
  }
  function stay() {
    render({ keepScroll: true });
  }

  function currentEx() {
    return getExercise(state.exId);
  }
  function patchAnswer(next) {
    state.answers = state.answers.map(function (a, i) {
      return i === state.step ? next : a;
    });
  }

  function tokenizeAlgebra(input) {
    const source = input.replace(/[\s\u00a0]/g, "").replace(/[−–]/g, "-").replace(/[×·]/g, "*");
    if (source.length > 200) throw new Error("expression too large");
    const tokens = source.match(/\d+|[a-zA-Z]|[()+\-*^]/g) || [];
    if (!source || tokens.join("") !== source) throw new Error("invalid syntax");
    return tokens;
  }

  function polynomialConstant(value) {
    return { "0,0,0,0,0,0": value };
  }

  function polynomialVariable(variable) {
    const powers = [0, 0, 0, 0, 0, 0];
    const index = ["a", "b", "c", "x", "y", "z"].indexOf(variable);
    if (index < 0) throw new Error("unsupported variable");
    powers[index] = 1;
    const result = {};
    result[powers.join(",")] = 1;
    return result;
  }

  function addPolynomials(left, right, sign) {
    const result = Object.assign({}, left);
    Object.keys(right).forEach(function (key) {
      result[key] = (result[key] || 0) + sign * right[key];
      if (!Number.isSafeInteger(result[key])) throw new Error("coefficient too large");
      if (result[key] === 0) delete result[key];
      if (Object.keys(result).length > 200) throw new Error("expression too large");
    });
    return result;
  }

  function multiplyPolynomials(left, right) {
    const result = {};
    Object.keys(left).forEach(function (leftKey) {
      Object.keys(right).forEach(function (rightKey) {
        const powers = leftKey.split(",").map(function (power, index) {
          return Number(power) + Number(rightKey.split(",")[index]);
        });
        if (powers.some(function (power) { return power > 12; }))
          throw new Error("expression too large");
        const key = powers.join(",");
        result[key] = (result[key] || 0) + left[leftKey] * right[rightKey];
        if (!Number.isSafeInteger(result[key])) throw new Error("coefficient too large");
        if (result[key] === 0) delete result[key];
        if (Object.keys(result).length > 200) throw new Error("expression too large");
      });
    });
    return result;
  }

  function parseAlgebra(input) {
    const tokens = tokenizeAlgebra(input);
    let position = 0;
    function peek() { return tokens[position]; }
    function parseExpression() {
      let result = parseProduct();
      while (peek() === "+" || peek() === "-") {
        const sign = peek() === "+" ? 1 : -1;
        position++;
        result = {
          polynomial: addPolynomials(result.polynomial, parseProduct().polynomial, sign),
          root: "sum"
        };
      }
      return result;
    }
    function startsFactor(token) {
      return token && (/^\d+$/.test(token) || /^[a-zA-Z]$/.test(token) || token === "(");
    }
    function parseProduct() {
      let result = parseUnary();
      while (peek() === "*" || startsFactor(peek())) {
        if (peek() === "*") position++;
        const next = parseUnary();
        result = { polynomial: multiplyPolynomials(result.polynomial, next.polynomial), root: "product" };
      }
      return result;
    }
    function parseUnary() {
      if (peek() === "+" || peek() === "-") {
        const negative = peek() === "-";
        position++;
        const value = parseUnary();
        if (!negative) return value;
        const polynomial = {};
        Object.keys(value.polynomial).forEach(function (key) {
          polynomial[key] = -value.polynomial[key];
        });
        return { polynomial: polynomial, root: "unary" };
      }
      let value;
      if (peek() === "(") {
        position++;
        value = parseExpression();
        if (peek() !== ")") throw new Error("unclosed parenthesis");
        position++;
      } else if (/^\d+$/.test(peek() || "")) {
        value = { polynomial: polynomialConstant(Number(peek())), root: "number" };
        position++;
      } else if (/^[a-zA-Z]$/.test(peek() || "")) {
        value = { polynomial: polynomialVariable(peek().toLowerCase()), root: "variable" };
        position++;
      } else {
        throw new Error("expected term");
      }
      while (peek() === "^") {
        position++;
        if (!/^\d+$/.test(peek() || "")) throw new Error("invalid exponent");
        const exponent = Number(peek());
        position++;
        if (exponent > 8) throw new Error("expression too large");
        let polynomial = polynomialConstant(1);
        for (let i = 0; i < exponent; i++)
          polynomial = multiplyPolynomials(polynomial, value.polynomial);
        value = { polynomial: polynomial, root: "power" };
      }
      return value;
    }
    const parsed = parseExpression();
    if (position !== tokens.length) throw new Error("unexpected token");
    return parsed;
  }

  function checkMathAlgebra(groupIndex, idx) {
    const itemEl = document.querySelector('.algebra-practice-item[data-group="' + groupIndex + '"][data-idx="' + idx + '"]');
    if (!itemEl) return;
    const input = itemEl.querySelector(".algebra-practice-input");
    const status = itemEl.querySelector(".math-item-status");
    const feedback = itemEl.querySelector(".math-item-feedback");
    const section = window.MATH_SUBCATEGORIES && window.MATH_SUBCATEGORIES.tautotites;
    const group = section && section.exerciseGroups && section.exerciseGroups[groupIndex];
    const exercise = group && group.items[idx];
    if (!input || !status || !feedback || !exercise) return;

    const answer = input.value.trim();
    if (!answer) {
      itemEl.removeAttribute("data-solved");
      status.style.color = "var(--wrong, #e07a5f)";
      status.textContent = "Συμπλήρωσε απάντηση";
      input.style.borderColor = "var(--wrong, #e07a5f)";
      input.style.backgroundColor = "rgba(224,122,95,.12)";
      feedback.style.display = "none";
      updateMathScore();
      return;
    }
    let parsed;
    let expected;
    try {
      parsed = parseAlgebra(answer);
      expected = parseAlgebra(exercise.answer);
    } catch (error) {
      itemEl.removeAttribute("data-solved");
      status.style.color = "var(--wrong, #e07a5f)";
      status.textContent = "Μη έγκυρη παράσταση";
      input.style.borderColor = "var(--wrong, #e07a5f)";
      input.style.backgroundColor = "rgba(224,122,95,.12)";
      feedback.style.display = "block";
      feedback.style.backgroundColor = "rgba(224,122,95,.1)";
      feedback.textContent = "Χρησιμοποίησε αριθμούς, μεταβλητές a, b, c, x, y, z, παρενθέσεις και δυνάμεις με ^.";
      updateMathScore();
      return;
    }
    const keys = Object.keys(parsed.polynomial).concat(Object.keys(expected.polynomial));
    const samePolynomial = keys.every(function (key) {
      return (parsed.polynomial[key] || 0) === (expected.polynomial[key] || 0);
    });
    const needsFactors = itemEl.getAttribute("data-mode") === "factored";
    const hasFactorForm = parsed.root === "product" || parsed.root === "power";
    if (samePolynomial && (!needsFactors || hasFactorForm)) {
      status.style.color = "var(--correct, #2e7d32)";
      status.textContent = "✓ Σωστό!";
      input.style.borderColor = "var(--correct, #2e7d32)";
      input.style.backgroundColor = "rgba(143,219,154,.15)";
      feedback.style.display = "block";
      feedback.style.backgroundColor = "rgba(143,219,154,.12)";
      feedback.innerHTML = "<b>Μπράβο!</b> Ισοδύναμη παράσταση: " + renderLatex("\\(" + exercise.solution + "\\)");
      itemEl.setAttribute("data-solved", "1");
    } else {
      status.style.color = "var(--wrong, #e07a5f)";
      status.textContent = samePolynomial ? "Γράψε γινόμενο παραγόντων" : "✗ Λάθος";
      input.style.borderColor = "var(--wrong, #e07a5f)";
      input.style.backgroundColor = "rgba(224,122,95,.12)";
      feedback.style.display = "block";
      feedback.style.backgroundColor = "rgba(224,122,95,.1)";
      feedback.innerHTML = "Προσπάθησε ξανά! <button class=\"btn btn-ghost\" data-act=\"math-reveal-algebra\" data-group=\"" + groupIndex + "\" data-idx=\"" + idx + "\" style=\"min-height:1.7rem;padding:0 .5rem;font-size:.78rem;margin-left:.4rem\">Δες τη λύση</button>";
      itemEl.removeAttribute("data-solved");
    }
    updateMathScore();
  }

  function revealMathAlgebra(groupIndex, idx) {
    const itemEl = document.querySelector('.algebra-practice-item[data-group="' + groupIndex + '"][data-idx="' + idx + '"]');
    const section = window.MATH_SUBCATEGORIES && window.MATH_SUBCATEGORIES.tautotites;
    const group = section && section.exerciseGroups && section.exerciseGroups[groupIndex];
    const exercise = group && group.items[idx];
    if (!itemEl || !exercise) return;
    const input = itemEl.querySelector(".algebra-practice-input");
    const status = itemEl.querySelector(".math-item-status");
    const feedback = itemEl.querySelector(".math-item-feedback");
    input.value = exercise.solution;
    input.style.borderColor = "var(--copper)";
    input.style.backgroundColor = "rgba(196,92,38,.12)";
    status.style.color = "var(--copper)";
    status.textContent = "Λύση";
    feedback.style.display = "block";
    feedback.style.backgroundColor = "rgba(196,92,38,.08)";
    feedback.innerHTML = "<b>Αποτέλεσμα:</b> " + renderLatex("\\(" + exercise.solution + "\\)");
    itemEl.removeAttribute("data-solved");
    updateMathScore();
  }

  function checkMathItem(idx) {
    const itemEl = document.querySelector('.math-practice-item[data-idx="' + idx + '"]');
    if (!itemEl) return;
    const input = itemEl.querySelector('.math-practice-input');
    const status = itemEl.querySelector('.math-item-status');
    const feedback = itemEl.querySelector('.math-item-feedback');
    if (!input || !status || !feedback) return;

    const valStr = input.value.trim().replace(',', '.');
    const num = parseFloat(valStr);

    const sec = (window.MATH_SECTIONS || []).find(function (s) { return s.id === "dekadika-klasmata"; }) || (window.MATH_SECTIONS && window.MATH_SECTIONS[0]);
    const ex = sec && sec.exercises && sec.exercises[idx];
    if (!ex) return;

    if (valStr === "" || isNaN(num)) {
      status.style.color = "var(--wrong, #e07a5f)";
      status.textContent = "Συμπλήρωσε αριθμό";
      return;
    }

    const isOk = Math.abs(num - ex.value) < 1e-5;
    if (isOk) {
      status.style.color = "var(--correct, #2e7d32)";
      status.textContent = "✓ Σωστό!";
      input.style.borderColor = "var(--correct, #2e7d32)";
      input.style.backgroundColor = "rgba(143,219,154,.15)";
      feedback.style.display = "block";
      feedback.style.backgroundColor = "rgba(143,219,154,.12)";
      feedback.innerHTML = "<b>Μπράβο!</b> " + esc(ex.explain);
      itemEl.setAttribute("data-solved", "1");
    } else {
      status.style.color = "var(--wrong, #e07a5f)";
      status.textContent = "✗ Λάθος";
      input.style.borderColor = "var(--wrong, #e07a5f)";
      input.style.backgroundColor = "rgba(224,122,95,.12)";
      feedback.style.display = "block";
      feedback.style.backgroundColor = "rgba(224,122,95,.1)";
      feedback.innerHTML = "Προσπάθησε ξανά! <button class=\"btn btn-ghost\" data-act=\"math-reveal\" data-idx=\"" + idx + "\" style=\"min-height:1.7rem;padding:0 .5rem;font-size:.78rem;margin-left:.4rem\">Δες τη λύση</button>";
      itemEl.removeAttribute("data-solved");
    }
    updateMathScore();
  }

  function revealMathItem(idx) {
    const itemEl = document.querySelector('.math-practice-item[data-idx="' + idx + '"]');
    if (!itemEl) return;
    const input = itemEl.querySelector('.math-practice-input');
    const status = itemEl.querySelector('.math-item-status');
    const feedback = itemEl.querySelector('.math-item-feedback');
    if (!input || !status || !feedback) return;

    const sec = (window.MATH_SECTIONS || []).find(function (s) { return s.id === "dekadika-klasmata"; }) || (window.MATH_SECTIONS && window.MATH_SECTIONS[0]);
    const ex = sec && sec.exercises && sec.exercises[idx];
    if (!ex) return;

    input.value = String(ex.value).replace('.', ',');
    input.style.borderColor = "var(--copper)";
    input.style.backgroundColor = "rgba(196,92,38,.12)";
    status.style.color = "var(--copper)";
    status.textContent = "Λύση";
    feedback.style.display = "block";
    feedback.style.backgroundColor = "rgba(196,92,38,.08)";
    feedback.innerHTML = "<b>Αποτέλεσμα:</b> " + esc(ex.explain);
    itemEl.removeAttribute("data-solved");
    updateMathScore();
  }

  function resetAllMathItems() {
    const items = document.querySelectorAll('.math-practice-item, .algebra-practice-item');
    items.forEach(function (itemEl) {
      itemEl.removeAttribute("data-solved");
      const input = itemEl.querySelector('.math-practice-input, .algebra-practice-input');
      const status = itemEl.querySelector('.math-item-status');
      const feedback = itemEl.querySelector('.math-item-feedback');
      if (input) {
        input.value = "";
        input.style.borderColor = "";
        input.style.backgroundColor = "";
      }
      if (status) status.textContent = "";
      if (feedback) {
        feedback.style.display = "none";
        feedback.innerHTML = "";
      }
    });
    updateMathScore();
  }

  function updateMathScore() {
    const solved = document.querySelectorAll('.math-practice-item[data-solved="1"]').length;
    const scoreEl = document.getElementById("math-score-num");
    if (scoreEl) scoreEl.textContent = solved;
    document.querySelectorAll(".algebra-score").forEach(function (score) {
      const group = score.getAttribute("data-group");
      score.textContent = document.querySelectorAll('.algebra-practice-item[data-group="' + group + '"][data-solved="1"]').length;
    });
  }

  document.addEventListener("click", function (e) {
    const el = e.target.closest("[data-act]");
    if (!el) return;
    const act = el.getAttribute("data-act");
    if (act === "math-check-item") {
      const idx = Number(el.getAttribute("data-idx"));
      checkMathItem(idx);
      return;
    }
    if (act === "math-check-algebra") {
      checkMathAlgebra(Number(el.getAttribute("data-group")), Number(el.getAttribute("data-idx")));
      return;
    }
    if (act === "math-reveal-algebra") {
      revealMathAlgebra(Number(el.getAttribute("data-group")), Number(el.getAttribute("data-idx")));
      return;
    }
    if (act === "math-reveal") {
      const idx = Number(el.getAttribute("data-idx"));
      revealMathItem(idx);
      return;
    }
    if (act === "math-reset-all") {
      resetAllMathItems();
      return;
    }
    if (act === "nav-section-toggle") {
      const section = el.getAttribute("data-section");
      state.navSection = el.getAttribute("data-expanded") === "true" ? null : section;
      state.navChapter = null;
      stay();
      return;
    }
    if (act === "nav-chapter-toggle") {
      const section = el.getAttribute("data-section");
      const chapter = el.getAttribute("data-chapter");
      state.navSection = section;
      state.navChapter = el.getAttribute("data-expanded") === "true" ? null : chapter;
      stay();
      return;
    }
    if (act === "go") {
      go(el.getAttribute("data-to"));
      return;
    }
    if (act === "menu") {
      state.menu = !state.menu;
      stay();
      return;
    }
    if (act === "menu-close") {
      state.menu = false;
      stay();
      return;
    }
    if (act === "reset") {
      resetProgress();
      return;
    }
    if (act === "theme-toggle") {
      saveTheme(loadTheme() === "dark" ? "light" : "dark");
      if (route().name === "simulation") {
        applyTheme();
        el.textContent = loadTheme() === "dark" ? "☀️" : "🌙";
        return;
      }
      stay();
      return;
    }
    const ex = currentEx();
    const itemEl = el.closest("[data-item]");
    if (ex && itemEl) {
      const i = Number(itemEl.getAttribute("data-item"));
      if (i !== state.step) {
        state.step = i;
        state.matchPicked = null;
        state.blankPicked = null;
      }
    }
    const item = ex ? ex.items[state.step] : null;
    const ans = ex ? state.answers[state.step] : null;
    if (act === "mc" && item && !state.checked) {
      patchAnswer({ mc: el.getAttribute("data-id") });
      stay();
      return;
    }
    if (act === "tf" && item && !state.checked) {
      patchAnswer({ tf: el.getAttribute("data-v") === "true" });
      stay();
      return;
    }
    if (act === "match-left" && item && !state.checked) {
      const id = el.getAttribute("data-id");
      const value = Object.assign({}, ans.match);
      if (value[id]) {
        delete value[id];
        patchAnswer({ match: value });
        state.matchPicked = id;
      } else {
        state.matchPicked = id;
      }
      stay();
      return;
    }
    if (act === "match-unpair" && item && !state.checked) {
      const id = el.getAttribute("data-id");
      const value = Object.assign({}, ans.match);
      delete value[id];
      patchAnswer({ match: value });
      state.matchPicked = id;
      stay();
      return;
    }
    if (act === "match-right" && item && !state.checked && state.matchPicked) {
      const rid = el.getAttribute("data-id");
      const value = Object.assign({}, ans.match);
      Object.keys(value).forEach(function (l) {
        if (value[l] === rid) delete value[l];
      });
      value[state.matchPicked] = rid;
      patchAnswer({ match: value });
      state.matchPicked = null;
      stay();
      return;
    }
    if (act === "blank-word" && item && !state.checked) {
      state.blankPicked = decodeURIComponent(el.getAttribute("data-word"));
      stay();
      return;
    }
    if (act === "blank-slot" && item && !state.checked) {
      const i = Number(el.getAttribute("data-i"));
      const next = (ans.blank || []).slice();
      if (next[i]) {
        next[i] = null;
        patchAnswer({ blank: next });
      } else if (state.blankPicked) {
        next[i] = state.blankPicked;
        patchAnswer({ blank: next });
      }
      stay();
      return;
    }
    if (act === "hint") {
      state.hints[state.step] = !state.hints[state.step];
      stay();
      return;
    }
    if (act === "check" && ex) {
      state.results = ex.items.map(function (it, i) { return isCorrect(it, state.answers[i]); });
      state.checked = true;
      const score = state.results.filter(Boolean).length;
      saveEx(ex.id, {
        status: score === ex.items.length ? "done" : "miss",
        score: score,
        max: ex.items.length,
      });
      stay();
      return;
    }
    if (act === "retry") {
      state.checked = false;
      state.matchPicked = null;
      state.blankPicked = null;
      stay();
      return;
    }
    if (act === "restart" && ex) {
      resetEngine(ex);
      render();
    }
  });

  document.addEventListener("input", function (e) {
    if (e.target.getAttribute("data-act") !== "calc" || state.checked) return;
    const itemEl = e.target.closest("[data-item]");
    if (itemEl) state.step = Number(itemEl.getAttribute("data-item"));
    patchAnswer({ calc: e.target.value });
    const ex = currentEx();
    const btn = document.querySelector('[data-act="check"]');
    if (btn && ex)
      btn.disabled = !ex.items.every(function (it, i) { return isFilled(it, state.answers[i]); });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target && e.target.classList.contains("math-practice-input")) {
      e.preventDefault();
      const idx = Number(e.target.getAttribute("data-idx"));
      if (!isNaN(idx)) checkMathItem(idx);
    }
    if (e.key === "Enter" && e.target && e.target.classList.contains("algebra-practice-input")) {
      e.preventDefault();
      checkMathAlgebra(Number(e.target.getAttribute("data-group")), Number(e.target.getAttribute("data-idx")));
    }
  });

  window.addEventListener("hashchange", function () {
    const r = route();
    if (r.name !== "exercise") {
      state.exId = null;
    }
    state.menu = false;
    state.navSection = undefined;
    state.navChapter = undefined;
    render();
  });

  render();
})();
