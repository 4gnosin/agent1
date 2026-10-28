(function () {
  /* ---------- Σταθερές και συντελεστές του μοντέλου ---------- */
  const RHO = 1025;          // πυκνότητα θαλασσινού νερού, kg/m³
  const CV = 0.97;           // συντελεστής ταχύτητας ακροφυσίου
  const CS = 0.8;            // συντελεστής παροχής στόμιου αναρρόφησης
  const ETA_D = 0.85;        // βαθμός ανάκτησης διαχύτη
  const D1 = 0.04;           // διάμετρος σωλήνα τροφοδοσίας, m
  const DS = 0.03;           // διάμετρος σωλήνα αναρρόφησης (100% άνοιγμα), m
  const P_ATM = 0.1013e6;    // ατμοσφαιρική πίεση, Pa
  const P_LIM = -0.098e6;    // όριο κενού (τάση ατμών ≈ 2,3 kPa abs), Pa gauge

  /* ---------- Ρυθμιστικά ---------- */
  // [id, ετικέτα, min, max, step, αρχική τιμή, μονάδα, δεκαδικά]
  const sliders = [
    ["dn", "Διάμετρος ακροφυσίου d<sub>n</sub>", 4, 20, 0.5, 10, "mm", 1],
    ["dt", "Διάμετρος λαιμού d<sub>t</sub>", 8, 40, 0.5, 20, "mm", 1],
    ["d3", "Διάμετρος εξόδου d<sub>o</sub>", 20, 50, 1, 40, "mm", 0],
    ["pm", "Πίεση κινητήριου νερού p<sub>m</sub>", 0.2, 1, 0.05, 0.5, "MPa", 2],
    ["pb", "Αντίθλιψη εξόδου p<sub>b</sub>", 0, 0.2, 0.01, 0.03, "MPa", 2],
    ["va", "Άνοιγμα αναρρόφησης", 0, 100, 5, 40, "%", 0],
  ];

  const readings = [
    ["Qn", "Παροχή κινητήριου Q<sub>n</sub>"],
    ["Qs", "Παροχή αναρρόφησης Q<sub>s</sub>"],
    ["M", "Λόγος M = Q<sub>s</sub>/Q<sub>n</sub>"],
    ["vj", "Ταχύτητα πίδακα v<sub>j</sub>"],
    ["vt", "Ταχύτητα λαιμού v<sub>t</sub>"],
    ["vo", "Ταχύτητα εξόδου v<sub>o</sub>"],
    ["ps", "Πίεση αναρρόφησης p<sub>s</sub>"],
    ["vac", "Κενό αναρρόφησης"],
    ["pt", "Πίεση λαιμού p<sub>t</sub>"],
    ["eta", "Απόδοση η"],
  ];

  const challenges = [
    "Κλείστε σχεδόν την αναρρόφηση (≤10%) και φτάστε κενό ≥ 0,090 MPa",
    "Με άνοιγμα αναρρόφησης ≥ 50%, πετύχετε Q<sub>s</sub> ≥ 3 L/s χωρίς σπηλαίωση",
    "Ανεβάστε την αντίθλιψη ώστε να σταματήσει η αναρρόφηση (stall)",
    "Προκαλέστε σπηλαίωση στον λαιμό (π.χ. υψηλή p<sub>m</sub>, ανοιχτή αναρρόφηση, χαμηλή αντίθλιψη)",
  ];

  /* ---------- Θεωρητικό πλαίσιο (LaTeX) ---------- */
  const theory =
    "<h3>1. Εξίσωση του Bernoulli</h3>" +
    "<p>Για μόνιμη, ασυμπίεστη ροή χωρίς τριβές, κατά μήκος μιας ρευματικής γραμμής, το άθροισμα των τριών μορφών ενέργειας ανά μονάδα όγκου είναι σταθερό:</p>" +
    "<p>\\[ p + \\tfrac{1}{2}\\rho v^{2} + \\rho g z = \\text{σταθ.} \\]</p>" +
    "<p>Σε οριζόντιο σωλήνα (\\(z=\\text{σταθ.}\\)) αυτό σημαίνει ότι όπου η ταχύτητα αυξάνεται, η στατική πίεση μειώνεται.</p>" +
    "<h3>2. Εξίσωση συνέχειας</h3>" +
    "<p>\\[ Q = A_1 v_1 = A_2 v_2 \\quad\\Rightarrow\\quad v = \\frac{Q}{A} = \\frac{4Q}{\\pi d^{2}} \\]</p>" +
    "<p>Μικρότερη διατομή σημαίνει μεγαλύτερη ταχύτητα. Η ταχύτητα είναι <b>αντιστρόφως ανάλογη του τετραγώνου της διαμέτρου</b>.</p>" +
    "<h3>3. Υποπίεση από στένωση (φαινόμενο Venturi)</h3>" +
    "<p>Συνδυάζοντας τις δύο εξισώσεις για δύο διατομές 1 και 2:</p>" +
    "<p>\\[ p_1 - p_2 = \\tfrac{1}{2}\\rho\\left(v_2^{2} - v_1^{2}\\right) = \\tfrac{1}{2}\\rho Q^{2}\\left(\\frac{1}{A_2^{2}} - \\frac{1}{A_1^{2}}\\right) \\]</p>" +
    "<p>Αν η πίεση \\(p_2\\) πέσει κάτω από την ατμοσφαιρική (σχετική πίεση \\(p_2<0\\)), δημιουργείται <b>υποπίεση</b> και ένα σωληνάκι αναρρόφησης συνδεδεμένο εκεί «τραβάει» ρευστό. Η απόλυτη πίεση είναι \\(p_{abs} = p_{atm} + p_{gauge}\\).</p>" +
    "<h3>4. Το ακροφύσιο του εγχυτήρα</h3>" +
    "<p>Το κινητήριο νερό έρχεται από την αντλία με πίεση \\(p_m\\) (πρακτικά ταχύτητα ≈ 0) και εκτονώνεται στον θάλαμο αναρρόφησης με πίεση \\(p_s\\):</p>" +
    "<p>\\[ v_j = C_v\\sqrt{\\frac{2\\,(p_m - p_s)}{\\rho}}, \\qquad Q_n = A_n\\, v_j \\]</p>" +
    "<p><b>Προσοχή:</b> η ταχύτητα του πίδακα εξαρτάται από την πτώση πίεσης, όχι από τη διάμετρο του ακροφυσίου. Η διάμετρος καθορίζει την <i>παροχή</i>. Η ταχύτητα αλλάζει στις υπόλοιπες διατομές μέσω της συνέχειας.</p>" +
    "<h3>5. Αναρρόφηση</h3>" +
    "<p>Όσο η πίεση του θαλάμου είναι χαμηλότερη από την πίεση της δεξαμενής (ατμοσφαιρική, \\(p=0\\) σχετική), το νερό αναρροφάται:</p>" +
    "<p>\\[ Q_s = C_s\\, A_s \\sqrt{\\frac{2\\,(0 - p_s)}{\\rho}} \\]</p>" +
    "<h3>6. Μίξη στον λαιμό: ισοζύγιο ορμής</h3>" +
    "<p>Στη ζώνη μίξης υπάρχουν στροβιλισμοί και απώλειες, οπότε <b>δεν ισχύει η αρχή Bernoulli</b>. Εφαρμόζεται η αρχή διατήρησης της ορμής (το αναρροφούμενο νερό μπαίνει με ταχύτητα ≈ 0):</p>" +
    "<p>\\[ p_s A_t + \\rho Q_n v_j = p_t A_t + \\rho\\,\\frac{(Q_n + Q_s)^{2}}{A_t} \\]</p>" +
    "<h3>7. Διαχύτης</h3>" +
    "<p>Η διεύρυνση της διατομής ελαττώνει την ταχύτητα και ανακτά πίεση (Bernoulli με βαθμό ανάκτησης \\(\\eta_d\\)):</p>" +
    "<p>\\[ p_o = p_t + \\eta_d\\,\\tfrac{1}{2}\\rho v_t^{2}\\left[1 - \\left(\\frac{A_t}{A_o}\\right)^{2}\\right] \\]</p>" +
    "<h3>8. Συνθήκη λειτουργίας και απόδοση</h3>" +
    "<p>Ο εγχυτήρας δουλεύει στο σημείο όπου η πίεση εξόδου του διαχύτη ισούται με την αντίθλιψη της γραμμής: \\(p_o = p_b\\). Ορίζουμε:</p>" +
    "<p>\\[ M = \\frac{Q_s}{Q_n}, \\qquad \\eta = M\\,\\frac{p_o - p_s}{p_m - p_o} \\]</p>" +
    "<h3>9. Όρια λειτουργίας</h3>" +
    "<ul><li><b>Όριο κενού / σπηλαίωση:</b> όταν η απόλυτη πίεση πέσει στην τάση ατμών του νερού \\(p_v\\approx 2{,}3\\ \\text{kPa}\\) (δηλ. \\(p_{gauge}\\approx -0{,}098\\ \\text{MPa}\\)), το νερό βράζει σε θερμοκρασία περιβάλλοντος και δεν μπορεί να δημιουργηθεί μεγαλύτερο κενό.</li>" +
    "<li><b>Stall:</b> αν η αντίθλιψη \\(p_b\\) είναι μεγαλύτερη από την πίεση που μπορεί να δώσει ο εγχυτήρας, η αναρρόφηση μηδενίζεται.</li></ul>" +
    "<p class=\"eje-help\">Απλοποιήσεις: ασυμπίεστο υγρό, μόνο νερό (στον πραγματικό εξαερωτήρα αναρροφώνται επίσης αέρια και αέρας), σταθεροί συντελεστές απωλειών, μονοδιάστατη ροή.</p>" +
    "<h3>Υπόμνημα συμβόλων</h3>" +
    "<div class=\"eje-glossary\">" +
    "<div><b>ρ</b> (rho) — πυκνότητα νερού (kg/m³)</div>" +
    "<div><b>C<sub>v</sub></b> — συντελεστής ταχύτητας ακροφυσίου (−)</div>" +
    "<div><b>C<sub>s</sub></b> — συντελεστής παροχής στόμιου αναρρόφησης (−)</div>" +
    "<div><b>η<sub>d</sub></b> — βαθμός ανάκτησης πίεσης διαχύτη (−)</div>" +
    "<div><b>d<sub>n</sub></b> — διάμετρος ακροφυσίου (m)</div>" +
    "<div><b>d<sub>t</sub></b> — διάμετρος λαιμού (m)</div>" +
    "<div><b>d<sub>o</sub></b> — διάμετρος εξόδου διαχύτη (m)</div>" +
    "<div><b>A<sub>n</sub>, A<sub>t</sub>, A<sub>o</sub>, A<sub>s</sub></b> — αντίστοιχες διατομές (m²)</div>" +
    "<div><b>p<sub>m</sub></b> — πίεση κινητήριου νερού (Pa, σχετική)</div>" +
    "<div><b>p<sub>s</sub></b> — πίεση θαλάμου αναρρόφησης (Pa, σχετική)</div>" +
    "<div><b>p<sub>t</sub></b> — πίεση στον λαιμό (Pa, σχετική)</div>" +
    "<div><b>p<sub>o</sub> / p<sub>b</sub></b> — πίεση εξόδου / αντίθλιψη γραμμής (Pa, σχετική)</div>" +
    "<div><b>v<sub>j</sub></b> — ταχύτητα πίδακα στην έξοδο ακροφυσίου (m/s)</div>" +
    "<div><b>v<sub>t</sub>, v<sub>o</sub></b> — ταχύτητα λαιμού και εξόδου (m/s)</div>" +
    "<div><b>Q<sub>n</sub></b> — παροχή κινητήριου νερού (m³/s)</div>" +
    "<div><b>Q<sub>s</sub></b> — παροχή αναρρόφησης (m³/s)</div>" +
    "<div><b>M</b> — λόγος παροχών Q<sub>s</sub>/Q<sub>n</sub> (−)</div>" +
    "<div><b>η</b> — υδραυλική απόδοση εγχυτήρα (−)</div>" +
    "<div><b>p<sub>atm</sub></b> — ατμοσφαιρική πίεση (≈ 0,1013 MPa)</div>" +
    "<div><b>p<sub>v</sub></b> — τάση ατμών νερού (≈ 2,3 kPa abs)</div>" +
    "</div>";

  /* ---------- HTML ---------- */
  const template =
    '<div class="eje-simulation eje3d-simulation"><div class="eje-toolbar">' +
    '<div class="eje-seg" role="group" aria-label="Προβολή μοντέλου">' +
    '<button type="button" data-view="cut" class="active" aria-pressed="true">Τομή</button>' +
    '<button type="button" data-view="xray" aria-pressed="false">Διάφανο</button>' +
    '<button type="button" data-view="full" aria-pressed="false">Κλειστό</button></div>' +
    '<button type="button" class="btn btn-ghost" data-eje="labels" aria-pressed="true">Ετικέτες</button>' +
    '<button type="button" class="btn btn-ghost" data-eje="camera">Κεντράρισμα κάμερας</button>' +
    '<button type="button" class="btn btn-ghost" data-eje="fullscreen" aria-pressed="false">Μεγέθυνση προσομοίωσης</button>' +
    '<button type="button" class="btn btn-ghost" data-eje="reset">Επανεκκίνηση</button></div>' +
    '<div class="eje-layout"><div>' +
    '<section class="eje-panel"><h2>Τζιφάρι εβαπορέτας (εγχυτήρας αέρα και άλμης)</h2>' +
    '<div class="eje3d-view" data-eje="view" role="img" aria-label="Τρισδιάστατο μοντέλο εγχυτήρα γεννήτριας γλυκού νερού">' +
    '<div class="eje3d-overlay" data-eje="overlay"></div>' +
    '<div class="eje3d-hint">Σύρετε για περιστροφή · ροδέλα ή τσίμπημα για zoom · δεξί κλικ ή δύο δάχτυλα για μετατόπιση</div></div>' +
    '<p class="eje-help">Η τομή δείχνει το εσωτερικό του χυτού σώματος: το ορειχάλκινο ακροφύσιο βιδωμένο στο πίσω τοίχωμα του θαλάμου αναρρόφησης, τον λαιμό ανάμιξης και τον μακρύ κωνικό διαχύτη. Οι λευκές τελίτσες είναι το κινητήριο θαλασσινό νερό από την αντλία του εγχυτήρα. Οι πράσινες είναι η άλμη και ο αέρας που τραβιούνται από την εβαπορέτα. Το χρώμα του νερού δείχνει την ταχύτητα (πιο ανοιχτό = πιο γρήγορο). Τα τρία μανόμετρα δείχνουν ζωντανά p<sub>m</sub>, p<sub>s</sub> και p<sub>o</sub>, και το τιμόνι της βάνας αναρρόφησης ακολουθεί το ρυθμιστικό ανοίγματος.</p></section>' +
    '<section class="eje-panel"><h2>Πίεση και ταχύτητα κατά μήκος του εγχυτήρα</h2><div class="eje-diagram-scroll">' +
    '<svg class="eje-diagram" data-eje="chart" viewBox="0 0 700 250" role="img" aria-label="Διάγραμμα πίεσης και ταχύτητας κατά μήκος του εγχυτήρα"></svg></div>' +
    '<p class="eje-help"><span class="eje-key eje-key-p"></span> πίεση (αριστερός άξονας, MPa σχετική) &nbsp; <span class="eje-key eje-key-v"></span> ταχύτητα (δεξιός άξονας, m/s). Κάτω από το 0 υπάρχει υποπίεση. Η διακεκομμένη κόκκινη γραμμή είναι το όριο κενού (σπηλαίωση).</p></section>' +
    '</div><aside>' +
    '<section class="eje-panel"><h2>Ρυθμίσεις</h2><div data-eje="controls"></div></section>' +
    '<section class="eje-panel"><h2>Μετρήσεις</h2><p class="eje-status" data-eje="status" aria-live="polite"></p><div class="eje-readings" data-eje="readings"></div></section>' +
    '<section class="eje-panel"><h2>Προκλήσεις</h2><ol class="eje-steps" data-eje="steps"></ol></section>' +
    '</aside></div>' +
    '<section class="eje-panel"><h2>Bernoulli σε αριθμούς</h2><div class="eje-numbers" data-eje="numbers"></div></section>' +
    '<section class="eje-panel eje-theory"><h2>Θεωρητικό πλαίσιο</h2><div data-eje="theory">' + theory + '</div></section></div>';


  /* ---------- Υπολογισμός (καθαρή συνάρτηση) ---------- */
  // p: {dn, dt, d3 σε m, pm, pb σε Pa (σχετικές), a ∈ [0,1]}
  function calc(p) {
    const An = Math.PI / 4 * p.dn * p.dn;
    const At = Math.PI / 4 * p.dt * p.dt;
    const Ao = Math.PI / 4 * p.d3 * p.d3;
    const As = Math.PI / 4 * DS * DS * p.a;

    function at(ps) {
      const vj = CV * Math.sqrt(2 * Math.max(0, p.pm - ps) / RHO);
      const Qn = An * vj;
      const dp = -ps;
      const Qs = dp > 0 ? CS * As * Math.sqrt(2 * dp / RHO) : 0;
      const Q = Qn + Qs;
      const pt = ps + (RHO * Qn * vj - RHO * Q * Q / At) / At;
      const vt = Q / At;
      const po = pt + ETA_D * 0.5 * RHO * vt * vt * (1 - Math.pow(At / Ao, 2));
      return { ps: ps, vj: vj, Qn: Qn, Qs: Qs, Q: Q, pt: pt, vt: vt, po: po };
    }

    // Σάρωση από ps = 0 προς το όριο κενού για την πρώτη λύση po = pb
    const g = function (ps) { return at(ps).po - p.pb; };
    const g0 = g(0);
    const N = 196;
    let lo = 0, hi = null, prev = g0, prevPs = 0;
    for (let i = 1; i <= N; i++) {
      const ps = P_LIM * i / N;
      const cur = g(ps);
      if ((prev <= 0 && cur > 0) || (prev >= 0 && cur < 0)) { lo = prevPs; hi = ps; break; }
      prev = cur; prevPs = ps;
    }
    let ps, state;
    if (hi !== null) {
      const sign = Math.sign(g(lo)) || -Math.sign(g(hi));
      for (let i = 0; i < 50; i++) {
        const mid = (lo + hi) / 2;
        if (Math.sign(g(mid)) === sign) lo = mid; else hi = mid;
      }
      ps = (lo + hi) / 2;
      state = "ok";
    } else if (g0 > 0) {
      ps = P_LIM;
      state = "limit";
    } else {
      ps = 0;
      state = "stall";
    }
    const r = at(ps);
    r.state = state;
    if (state === "ok" && r.pt < P_LIM) r.state = "cav";
    r.vo = r.Q / Ao;
    r.v1 = r.Qn / (Math.PI / 4 * D1 * D1);
    r.M = r.Qn > 0 ? r.Qs / r.Qn : 0;
    r.eta = r.Qs > 0 && p.pm - r.po > 0 ? r.M * (r.po - r.ps) / (p.pm - r.po) : 0;
    r.An = An; r.At = At; r.Ao = Ao; r.As = As;
    return r;
  }

  /* ---------- Βοηθητικά ---------- */
  function fmt(x, d) {
    return (x < 0 ? "−" : "") + Math.abs(x).toFixed(d).replace(".", ",");
  }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
  function speedColor(v) {
    const t = clamp(v / 45, 0, 1);
    const mix = function (a, b) { return Math.round(a + (b - a) * t); };
    return "rgb(" + mix(30, 150) + "," + mix(88, 232) + "," + mix(130, 255) + ")";
  }
  function typeset(element) {
    if (window.MathJax && window.MathJax.typesetPromise) window.MathJax.typesetPromise([element]);
    else if (window.renderMathInElement) window.renderMathInElement(element);
  }

  function mountSimulation(container) {
    if (!container) throw new Error("Ejector container not found.");
    container.innerHTML = template;

    const $ = function (id) {
      const element = container.querySelector('[data-eje="' + id + '"]');
      if (!element) throw new Error("Missing Ejector element: " + id);
      return element;
    };
    const query = function (selector) {
      const element = container.querySelector(selector);
      if (!element) throw new Error("Missing Ejector element: " + selector);
      return element;
    };

    const uid = Math.random().toString(36).slice(2, 7);
    let values = {};
    let done = [];

    /* χειριστήρια */
    sliders.forEach(function (slider) {
      $("controls").insertAdjacentHTML(
        "beforeend",
        '<div class="eje-ctl"><label for="eje-' + slider[0] + '-' + uid + '">' + slider[1] + "</label>" +
        '<output class="eje-value" data-out="' + slider[0] + '"></output>' +
        '<input type="range" id="eje-' + slider[0] + '-' + uid + '" data-slider="' + slider[0] + '" min="' + slider[2] +
        '" max="' + slider[3] + '" step="' + slider[4] + '">' +
        "</div>"
      );
    });
    readings.forEach(function (reading) {
      $("readings").insertAdjacentHTML(
        "beforeend",
        "<span>" + reading[1] + '</span><b data-reading="' + reading[0] + '"></b>'
      );
    });

    function defaults() {
      sliders.forEach(function (slider) { values[slider[0]] = slider[5]; });
    }
    // Φυσικοί περιορισμοί: dn < dt ≤ do
    function normalize(moved) {
      if (moved === "dn" && values.dn > values.dt - 2) values.dt = Math.min(40, values.dn + 2);
      if (moved === "dt") {
        if (values.dt < values.dn + 2) values.dn = Math.max(4, values.dt - 2);
      }
      if (values.d3 < values.dt) {
        if (moved === "d3") {
          values.dt = values.d3;
          if (values.dn > values.dt - 2) values.dn = Math.max(4, values.dt - 2);
        } else values.d3 = values.dt;
      }
      if (values.dn > values.dt - 2) values.dn = Math.max(4, values.dt - 2);
    }

    /* γεωμετρία σχήματος */
    const Y0 = 130, K = 1.3;
    const X = { in0: 20, n0: 130, n1: 250, t0: 320, t1: 420, d1: 560, out: 680 };
    const CH_HALF = 58;

    function r(mm) { return mm / 2 * K; }
    let cur = null;
    /* κοινά προφίλ διατομής / ταχύτητας (για διάγραμμα και σωματίδια) */
    function makeProfiles(p, c) {
      const R1 = r(D1 * 1000), Rn = r(values.dn), Rt = r(values.dt), Ro = r(values.d3);
      const areaNozzle = function (x) {
        const rad = D1 / 2 + (p.dn / 2 - D1 / 2) * (x - X.n0) / (X.n1 - X.n0);
        return Math.PI * rad * rad;
      };
      const area = function (x) {
        if (x < X.n0) return Math.PI / 4 * D1 * D1;
        if (x < X.n1) return areaNozzle(x);
        if (x < X.t0) return c.An;
        if (x < X.t1) return c.At;
        if (x < X.d1) {
          const d = p.dt + (p.d3 - p.dt) * (x - X.t1) / (X.d1 - X.t1);
          return Math.PI / 4 * d * d;
        }
        return c.Ao;
      };
      const velocity = function (x) {
        if (x < X.n0) return c.Qn / (Math.PI / 4 * D1 * D1);
        if (x < X.n1) return c.Qn / areaNozzle(x);
        if (x < X.t0) return c.vj;
        if (x < X.t1) return c.vj + (c.vt - c.vj) * (x - X.t0) / (X.t1 - X.t0);
        if (x < X.d1) return c.Q / area(x);
        return c.vo;
      };
      /* μισό πλάτος: ελεύθερος πίδακας μέχρι τον λαιμό, μετά πλήρης διατομή */
      const hw = function (x) {
        if (x < X.n0) return R1;
        if (x < X.n1) return R1 + (Rn - R1) * (x - X.n0) / (X.n1 - X.n0);
        if (x < X.t0) {
          const t = (x - X.n1) / (X.t0 - X.n1);
          return Rn + (Rt - Rn) * 0.35 * t;
        }
        if (x < X.t1) return Rt;
        if (x < X.d1) return Rt + (Ro - Rt) * (x - X.t1) / (X.d1 - X.t1);
        return Ro;
      };
      return { c: c, Rt: Rt, Rn: Rn, areaNozzle: areaNozzle, area: area, velocity: velocity, hw: hw };
    }

    /* διάγραμμα πίεσης / ταχύτητας */
    function renderChart(p, c) {
      const W = 700, H = 250, L = 52, Rm = 52, T = 18, B = 26;
      const pw = W - L - Rm, ph = H - T - B;
      const pMax = Math.max(0.2, Math.ceil(Math.max(p.pm, c.po) / 0.1e6) * 0.1);
      const pMin = -0.1;
      const vMax = Math.max(20, Math.ceil(Math.max(c.vj, c.vt, c.vo) / 10) * 10);
      const sx = function (x) { return L + (x - X.in0) / (X.out - X.in0) * pw; };
      const sp = function (mpa) { return T + (pMax - mpa) / (pMax - pMin) * ph; };
      const sv = function (v) { return T + (1 - v / vMax) * ph; };

      const prof = cur;
      const areaNozzle = prof.areaNozzle, area = prof.area, velocity = prof.velocity;

      const pressure = function (x) {
        if (x < X.n0) return p.pm - (p.pm - c.ps) * Math.pow(c.An / (Math.PI / 4 * D1 * D1), 2);
        if (x < X.n1) return p.pm - (p.pm - c.ps) * Math.pow(c.An / areaNozzle(x), 2);
        if (x < X.t0) return c.ps;
        if (x < X.t1) return c.ps + (Math.max(c.pt, P_LIM) - c.ps) * (x - X.t0) / (X.t1 - X.t0);
        if (x < X.d1) {
          const A = area(x);
          return c.pt + ETA_D * 0.5 * RHO * c.Q * c.Q * (1 / (c.At * c.At) - 1 / (A * A));
        }
        return c.po;
      };
      let pp = "", vv = "";
      for (let x = X.in0; x <= X.out; x += 4) {
        pp += (pp ? "L" : "M") + sx(x).toFixed(1) + " " + clamp(sp(pressure(x) / 1e6), T, T + ph).toFixed(1);
        vv += (vv ? "L" : "M") + sx(x).toFixed(1) + " " + sv(velocity(x)).toFixed(1);
      }

      let grid = "";
      for (let m = Math.ceil(pMin * 10) / 10; m <= pMax + 1e-9; m += 0.1) {
        grid += '<line x1="' + L + '" x2="' + (W - Rm) + '" y1="' + sp(m).toFixed(1) + '" y2="' + sp(m).toFixed(1) +
          '" stroke="#2b4258" stroke-width="' + (Math.abs(m) < 1e-9 ? 1.6 : 0.6) + '"/>' +
          '<text x="' + (L - 6) + '" y="' + (sp(m) + 3).toFixed(1) + '" text-anchor="end" class="eje-small-text">' + fmt(m, 1) + "</text>";
      }
      for (let v = 0; v <= vMax; v += vMax / 4) {
        grid += '<text x="' + (W - Rm + 6) + '" y="' + (sv(v) + 3).toFixed(1) + '" class="eje-small-text eje-vel">' + Math.round(v) + "</text>";
      }
      const stations = [[X.in0 + 50, "①"], [(X.n1 + X.t0) / 2 - 20, "②"], [(X.t0 + X.t1) / 2, "③"], [(X.d1 + X.out) / 2, "④"]];
      let marks = "";
      stations.forEach(function (st) {
        marks += '<line x1="' + sx(st[0]).toFixed(1) + '" x2="' + sx(st[0]).toFixed(1) + '" y1="' + T + '" y2="' + (T + ph) +
          '" stroke="#5c88a8" stroke-dasharray="3 4" stroke-width=".8"/>' +
          '<text x="' + sx(st[0]).toFixed(1) + '" y="' + (H - 8) + '" text-anchor="middle">' + st[1] + "</text>";
      });
      const limY = sp(P_LIM / 1e6).toFixed(1);
      $("chart").innerHTML =
        grid + marks +
        '<line x1="' + L + '" x2="' + (W - Rm) + '" y1="' + limY + '" y2="' + limY + '" stroke="#ef5350" stroke-dasharray="6 4" stroke-width="1.2"/>' +
        '<text x="' + (L + 4) + '" y="' + (Number(limY) - 4) + '" class="eje-small-text eje-bad">όριο κενού</text>' +
        '<text x="' + (L - 6) + '" y="10" text-anchor="end" class="eje-small-text">MPa</text>' +
        '<text x="' + (W - Rm + 6) + '" y="10" class="eje-small-text eje-vel">m/s</text>' +
        '<path d="' + vv + '" fill="none" stroke="#6fc4e8" stroke-width="2" stroke-dasharray="1 0"/>' +
        '<path d="' + pp + '" fill="none" stroke="#f0b429" stroke-width="2.4"/>';
    }

    function renderReadings(c) {
      const set = function (id, text, cls) {
        const el = query('[data-reading="' + id + '"]');
        el.textContent = text;
        el.setAttribute("class", cls || "");
      };
      set("Qn", fmt(c.Qn * 1000, 2) + " L/s");
      set("Qs", fmt(c.Qs * 1000, 2) + " L/s", c.Qs > 0 ? "eje-good" : "");
      set("M", fmt(c.M, 2));
      set("vj", fmt(c.vj, 1) + " m/s");
      set("vt", fmt(c.vt, 1) + " m/s");
      set("vo", fmt(c.vo, 1) + " m/s");
      set("ps", fmt(c.ps / 1e6, 3) + " MPa", c.ps < 0 ? "eje-good" : "");
      const vac = -c.ps;
      set("vac", fmt(vac / 1e6, 3) + " MPa (" + Math.round(vac / P_ATM * 76) + " cmHgV)", vac >= 0.09e6 ? "eje-good" : "");
      set("pt", fmt(Math.max(c.pt, P_LIM) / 1e6, 3) + " MPa", c.state === "cav" ? "eje-bad" : "");
      set("eta", c.Qs > 0 ? fmt(c.eta * 100, 1) + " %" : "—");

      const status = $("status");
      const messages = {
        ok: ["eje-good", "Κανονική λειτουργία: ο εγχυτήρας αναρροφά και καταθλίβει στην αντίθλιψη της γραμμής."],
        limit: ["eje-warn", "Όριο κενού: το νερό φτάνει στην τάση ατμών (−0,098 MPa). Μεγαλύτερο κενό δεν είναι δυνατό."],
        stall: ["eje-bad", "Stall: η αντίθλιψη είναι μεγαλύτερη από την πίεση που δίνει ο εγχυτήρας. Δεν υπάρχει αναρρόφηση."],
        cav: ["eje-bad", "Σπηλαίωση στον λαιμό: η πίεση φτάνει στην τάση ατμών. Στην πράξη η παροχή αναρρόφησης δεν αυξάνεται άλλο και η αντλία φθείρεται."],
      };
      status.setAttribute("class", "eje-status " + messages[c.state][0]);
      status.textContent = messages[c.state][1];
    }

    function renderNumbers(p, c) {
      const dpa = p.pm - c.ps;
      const ideal = 0.5 * RHO * (c.vj * c.vj - c.v1 * c.v1);
      const line = function (title, text) { return "<div><b>" + title + "</b><br>" + text + "</div>"; };
      $("numbers").innerHTML =
        line("Ακροφύσιο (Bernoulli)",
          "Δp = p<sub>m</sub> − p<sub>s</sub> = " + fmt(p.pm / 1e6, 3) + " − (" + fmt(c.ps / 1e6, 3) + ") = " + fmt(dpa / 1e6, 3) +
          " MPa<br>v<sub>j</sub> = C<sub>v</sub>·√(2Δp/ρ) = " + fmt(c.vj, 1) + " m/s") +
        line("Ακροφύσιο (συνέχεια)",
          "A<sub>n</sub> = " + fmt(c.An * 1e6, 1) + " mm² &nbsp;→&nbsp; Q<sub>n</sub> = A<sub>n</sub>·v<sub>j</sub> = " + fmt(c.Qn * 1000, 2) + " L/s") +
        line("Υποπίεση από τη μεταβολή ταχύτητας",
          "½ρ(v<sub>j</sub>² − v<sub>1</sub>²) = ½·" + RHO + "·(" + fmt(c.vj, 1) + "² − " + fmt(c.v1, 1) + "²) = " + fmt(ideal / 1e6, 3) +
          " MPa<br>(χωρίς απώλειες· με C<sub>v</sub> = " + CV + " η πραγματική Δp είναι " + fmt(dpa / 1e6, 3) + " MPa)") +
        line("Λαιμός (συνέχεια)",
          "A<sub>t</sub> = " + fmt(c.At * 1e6, 1) + " mm² &nbsp;→&nbsp; v<sub>t</sub> = (Q<sub>n</sub> + Q<sub>s</sub>)/A<sub>t</sub> = " +
          fmt(c.Q * 1000, 2) + " L/s ÷ " + fmt(c.At * 1e6, 1) + " mm² = " + fmt(c.vt, 1) + " m/s") +
        line("Κενό (απόλυτη πίεση)",
          "p<sub>abs</sub> = p<sub>atm</sub> + p<sub>s</sub> = " + fmt(P_ATM / 1e6, 4) + " + (" + fmt(c.ps / 1e6, 3) + ") = " +
          fmt((P_ATM + c.ps) / 1e6, 3) + " MPa");
    }

    function renderSteps(c) {
      const a = values.va;
      const checks = [
        a <= 10 && -c.ps >= 0.09e6,
        a >= 50 && c.Qs >= 0.003 && c.state === "ok",
        c.state === "stall",
        c.state === "cav",
      ];
      checks.forEach(function (ok, index) { if (ok) done[index] = 1; });
      $("steps").innerHTML = challenges.map(function (text, index) {
        return '<li class="' + (done[index] ? "done" : "") + '">' + text + "</li>";
      }).join("");
    }

    /* ================= Τρισδιάστατο μοντέλο ================= */
    const view3d = (function () {
      try { return create3D($("view"), $("overlay")); }
      catch (error) {
        console.warn("3D ejector view is unavailable; keeping the interactive simulation active.", error);
        $("view").insertAdjacentHTML("beforeend",
          '<p class="eje3d-fallback">Το τρισδιάστατο μοντέλο δεν είναι διαθέσιμο σε αυτόν τον browser ή δεν φορτώθηκαν οι απαραίτητες βιβλιοθήκες. Οι ρυθμίσεις, οι μετρήσεις και το διάγραμμα εξακολουθούν να λειτουργούν.</p>');
        return null;
      }
    })();

    let pending = 0;
    function render() {
      const p = {
        dn: values.dn / 1000, dt: values.dt / 1000, d3: values.d3 / 1000,
        pm: values.pm * 1e6, pb: values.pb * 1e6, a: values.va / 100,
      };
      const c = calc(p);
      c.v1 = c.Qn / (Math.PI / 4 * D1 * D1);
      sliders.forEach(function (slider) {
        query('[data-slider="' + slider[0] + '"]').value = values[slider[0]];
        query('[data-out="' + slider[0] + '"]').textContent = fmt(values[slider[0]], slider[7]) + " " + slider[6];
      });
      cur = makeProfiles(p, c);
      renderChart(p, c);
      renderReadings(c);
      renderNumbers(p, c);
      renderSteps(c);
      if (view3d) view3d.update(c, values);
    }
    function schedule() {
      if (pending) return;
      pending = window.requestAnimationFrame(function () { pending = 0; render(); });
    }
    function reset() {
      defaults();
      done = [];
      render();
    }

    container.addEventListener("input", function (event) {
      const input = event.target.closest("[data-slider]");
      if (!input || !container.contains(input)) return;
      const id = input.getAttribute("data-slider");
      values[id] = Number(input.value);
      normalize(id);
      schedule();
    });
    $("reset").addEventListener("click", reset);
    container.querySelectorAll("[data-view]").forEach(function (button) {
      button.addEventListener("click", function () {
        container.querySelectorAll("[data-view]").forEach(function (b) {
          const on = b === button;
          b.classList.toggle("active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        if (view3d) { view3d.setMode(button.getAttribute("data-view")); render(); }
      });
    });
    $("labels").addEventListener("click", function () {
      const on = this.getAttribute("aria-pressed") !== "true";
      this.setAttribute("aria-pressed", String(on));
      $("overlay").hidden = !on;
    });
    $("camera").addEventListener("click", function () { if (view3d) view3d.resetCamera(); });
    function syncFullscreenButton() {
      const expanded = document.fullscreenElement === container.querySelector(".eje3d-simulation")
        || container.querySelector(".eje3d-simulation").classList.contains("is-expanded");
      $("fullscreen").setAttribute("aria-pressed", String(expanded));
      $("fullscreen").textContent = expanded ? "Σμίκρυνση προσομοίωσης" : "Μεγέθυνση προσομοίωσης";
    }
    function onFullscreenChange() {
      syncFullscreenButton();
      if (view3d) view3d.resize();
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    $("fullscreen").addEventListener("click", function () {
      const root = container.querySelector(".eje3d-simulation");
      if (document.fullscreenElement === root) {
        document.exitFullscreen();
      } else if (root.classList.contains("is-expanded")) {
        root.classList.remove("is-expanded");
      } else if (root.requestFullscreen) {
        root.requestFullscreen().catch(function (error) {
          console.warn("Fullscreen mode is unavailable; using the in-page expanded view.", error);
          root.classList.add("is-expanded");
          syncFullscreenButton();
          if (view3d) view3d.resize();
        });
      } else {
        root.classList.add("is-expanded");
        syncFullscreenButton();
        if (view3d) view3d.resize();
      }
    });

    defaults();
    render();
    typeset($("theory"));

    return function () {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      const root = container.querySelector(".eje3d-simulation");
      if (root && root.classList.contains("is-expanded")) root.classList.remove("is-expanded");
      if (view3d) view3d.dispose();
      container.innerHTML = "";
    };
  };

  let dependencyPromise = null;
  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = function () {
        script.remove();
        reject(new Error("Unable to load " + src));
      };
      document.head.appendChild(script);
    });
  }
  function load3DDependencies() {
    if (window.THREE && window.THREE.OrbitControls) return Promise.resolve();
    if (!dependencyPromise) {
      dependencyPromise = (window.THREE
        ? Promise.resolve()
        : loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"))
        .then(function () {
          return window.THREE.OrbitControls
            ? undefined
            : loadScript("https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js");
        })
        .catch(function (error) {
          dependencyPromise = null;
          console.error("Unable to load the 3D ejector dependencies.", error);
        });
    }
    return dependencyPromise;
  }
  window.mountEvaporatorEjector = function (container) {
    if (!container) throw new Error("Evaporator ejector container not found.");
    let disposed = false;
    let cleanup = null;
    container.innerHTML = '<div class="eje-simulation eje3d-simulation"><p class="eje-help" role="status">Φόρτωση τρισδιάστατου μοντέλου…</p></div>';
    load3DDependencies().then(function () {
      if (disposed) return;
      try {
        cleanup = mountSimulation(container);
      } catch (error) {
        container.innerHTML = '<div class="eje-simulation eje3d-simulation"><p class="eje3d-fallback" role="alert">Δεν ήταν δυνατή η εκκίνηση της προσομοίωσης. Δοκιμάστε ξανά ή ελέγξτε αν ο browser υποστηρίζει WebGL.</p></div>';
        console.error("Unable to mount evaporator ejector simulation.", error);
      }
    });
    return function () {
      disposed = true;
      if (cleanup) cleanup();
      else container.innerHTML = "";
    };
  };
  window.mountEvaporatorEjector.calc = calc;

  /* ================= 3D σκηνή (μονάδες: mm) ================= */
  const G = {
    X_FL: -300, X_BACK: -130, X_NOZ: -40, X_CHE: 10, X_T0: 70, X_T1: 230, X_D1: 530, X_OUT: 580,
    R1: 20, R_CH: 60, R_CHO: 70, BX: -75, RB_IN: 22, RB_OUT: 29, BR_TOP: 175, FLOOR: -240,
  };
  function smooth(t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); }

  function profiles(dn, dt, d3) {
    const rn = dn / 2, rt = dt / 2, ro = d3 / 2;
    const cin = function (x) {
      if (x < G.X_BACK) return G.R1;
      if (x < G.X_CHE) return G.R_CH;
      if (x < G.X_T0) return G.R_CH + (rt - G.R_CH) * (1 - Math.cos(Math.PI * (x - G.X_CHE) / (G.X_T0 - G.X_CHE))) / 2;
      if (x < G.X_T1) return rt;
      if (x < G.X_D1) return rt + (ro - rt) * (x - G.X_T1) / (G.X_D1 - G.X_T1);
      return ro;
    };
    const cout = function (x) {
      const thr = rt + 9, dif = ro + 8;
      if (x < G.X_BACK - 28) return G.R1 + 7;
      if (x < G.X_BACK - 4) return G.R1 + 7 + (G.R_CHO - G.R1 - 7) * smooth((x - G.X_BACK + 28) / 24);
      if (x < G.X_CHE + 5) return G.R_CHO;
      if (x < G.X_T0 + 30) return G.R_CHO + (thr - G.R_CHO) * smooth((x - G.X_CHE - 5) / (G.X_T0 + 25 - G.X_CHE));
      if (x < G.X_T1) return thr;
      if (x < G.X_D1) return thr + (dif - thr) * (x - G.X_T1) / (G.X_D1 - G.X_T1);
      return dif;
    };
    const NZ1 = G.X_NOZ - 12;
    const nin = function (x) {
      if (x >= NZ1) return rn;
      const t = clamp((x - G.X_BACK) / (NZ1 - G.X_BACK), 0, 1);
      return G.R1 + (rn - G.R1) * (1 - Math.cos(Math.PI * t)) / 2;
    };
    const nout = function (x) {
      const t = clamp((x - G.X_BACK) / (G.X_NOZ - G.X_BACK), 0, 1);
      return (G.R1 + 10) + (rn + 4 - G.R1 - 10) * Math.pow(t, 0.85);
    };
    const jetR = function (x) {
      return rn + (rt - rn) * 0.35 * clamp((x - G.X_NOZ) / (G.X_T0 - G.X_NOZ), 0, 1);
    };
    return { rn: rn, rt: rt, ro: ro, NZ1: NZ1, cin: cin, cout: cout, nin: nin, nout: nout, jetR: jetR };
  }

  function sampleXs(a, b, step, extra) {
    const s = [];
    for (let x = a; x < b; x += step) s.push(x);
    s.push(b);
    (extra || []).forEach(function (e) { if (e > a && e < b) s.push(e); });
    s.sort(function (p, q) { return p - q; });
    return s.filter(function (v, i) { return i === 0 || v - s[i - 1] > 1e-6; });
  }

  function create3D(host, overlay) {
    const THREE = window.THREE;
    if (!THREE || !THREE.OrbitControls) throw new Error("three.js not loaded");
    const probe = document.createElement("canvas");
    if (!(probe.getContext("webgl2") || probe.getContext("webgl"))) throw new Error("no WebGL");

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    host.insertBefore(renderer.domElement, host.firstChild);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1c242b);
    scene.fog = new THREE.Fog(0x1c242b, 2600, 5200);

    /* περιβάλλον για αντανακλάσεις μετάλλου */
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    envScene.add(new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), new THREE.MeshBasicMaterial({ color: 0x2b343c, side: THREE.BackSide })));
    function envPanel(x, y, z, sx, sy, sz, k, color) {
      const m = new THREE.MeshBasicMaterial({ color: color || 0xffffff });
      m.color.multiplyScalar(k);
      const p = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m);
      p.position.set(x, y, z);
      envScene.add(p);
    }
    envPanel(0, 4.9, 0, 9, 0.1, 1.5, 6);
    envPanel(-3, 4.9, 4, 6, 0.1, 1, 4);
    envPanel(-6, 1.5, -9.8, 5, 3, 0.1, 2.2, 0xffdcae);
    envPanel(9.8, 1, 3, 0.1, 3, 6, 2.4, 0xcfe2ff);
    scene.environment = pmrem.fromScene(envScene, 0.035).texture;

    const camera = new THREE.PerspectiveCamera(32, 2, 10, 9000);
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 250;
    controls.maxDistance = 3200;
    controls.maxPolarAngle = Math.PI * 0.53;
    const TARGET = new THREE.Vector3(120, 20, 0);

    /* φωτισμός */
    scene.add(new THREE.HemisphereLight(0xdfe9f2, 0x2a2f36, 0.35));
    const sun = new THREE.DirectionalLight(0xffffff, 1.35);
    sun.position.set(450, 1300, 800);
    sun.target.position.set(100, 0, 0);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -1100, right: 1100, top: 1100, bottom: -1100, near: 100, far: 3500 });
    sun.shadow.bias = -0.0004;
    scene.add(sun, sun.target);
    const warm = new THREE.PointLight(0xffd6a0, 0.45, 3000);
    warm.position.set(-500, 450, 600);
    scene.add(warm);

    /* υλικά */
    const DS2 = THREE.DoubleSide;
    const M = {
      bronze: new THREE.MeshStandardMaterial({ color: 0xb3864f, metalness: 0.85, roughness: 0.34, side: DS2 }),
      bronzeIn: new THREE.MeshStandardMaterial({ color: 0x7d5c38, metalness: 0.7, roughness: 0.55, side: DS2 }),
      brass: new THREE.MeshStandardMaterial({ color: 0xdcb062, metalness: 0.95, roughness: 0.22, side: DS2 }),
      cut: new THREE.MeshStandardMaterial({ color: 0xc4513a, metalness: 0.15, roughness: 0.6, side: DS2, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }),
      cutNoz: new THREE.MeshStandardMaterial({ color: 0xe0913c, metalness: 0.2, roughness: 0.55, side: DS2, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 }),
      paint: new THREE.MeshStandardMaterial({ color: 0x3e7559, metalness: 0.25, roughness: 0.5, side: DS2 }),
      steel: new THREE.MeshStandardMaterial({ color: 0x9ea7af, metalness: 0.9, roughness: 0.32 }),
      dark: new THREE.MeshStandardMaterial({ color: 0x24292e, metalness: 0.5, roughness: 0.5 }),
      frame: new THREE.MeshStandardMaterial({ color: 0x59636b, metalness: 0.35, roughness: 0.6 }),
      wheel: new THREE.MeshStandardMaterial({ color: 0xa3261f, metalness: 0.3, roughness: 0.42 }),
      wall: new THREE.MeshStandardMaterial({ color: 0x8b969d, metalness: 0.1, roughness: 0.85 }),
      bulkhead: new THREE.MeshStandardMaterial({ color: 0xb6bec4, metalness: 0.1, roughness: 0.8 }),
    };
    const ghostable = [M.bronze, M.bronzeIn, M.brass];
    function waterMat(color, opacity) {
      return new THREE.MeshStandardMaterial({ color: color, transparent: true, opacity: opacity, roughness: 0.12, metalness: 0, depthWrite: false, side: DS2 });
    }
    const W = {
      motive: waterMat(0x2a6f9a, 0.42),
      jet: waterMat(0x6fc4e8, 0.5),
      mix: waterMat(0x4aa0cc, 0.42),
      chamber: waterMat(0x2d6e86, 0.14),
      branch: waterMat(0x2a8f6a, 0.4),
    };

    function mesh(geom, mat, shadow) {
      const m = new THREE.Mesh(geom, mat);
      if (shadow !== false) { m.castShadow = true; m.receiveShadow = true; }
      return m;
    }

    /* περιστροφή προφίλ γύρω από τον άξονα x · κομμένο: κρατά το μισό z ≤ 0 */
    function revolveX(pts, cut, holeR, nSeg) {
      const a0 = cut ? Math.PI / 2 : 0, a1 = cut ? 1.5 * Math.PI : 2 * Math.PI;
      nSeg = nSeg || (cut ? 56 : 112);
      const cols = nSeg + 1, pos = [], idx = [];
      for (let i = 0; i < pts.length; i++) {
        for (let j = 0; j <= nSeg; j++) {
          const a = a0 + (a1 - a0) * j / nSeg;
          pos.push(pts[i][0], pts[i][1] * Math.sin(a), pts[i][1] * Math.cos(a));
        }
      }
      for (let i = 0; i < pts.length - 1; i++) {
        for (let j = 0; j < nSeg; j++) {
          const A = i * cols + j, B = A + 1, C = A + cols, D = C + 1;
          if (holeR) {
            const cx = (pos[A * 3] + pos[D * 3]) / 2, cy = (pos[A * 3 + 1] + pos[D * 3 + 1]) / 2, cz = (pos[A * 3 + 2] + pos[D * 3 + 2]) / 2;
            if (cy > 0 && (cx - G.BX) * (cx - G.BX) + cz * cz < holeR * holeR) continue;
          }
          idx.push(A, C, B, B, C, D);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    }
    /* περιστροφή γύρω από κατακόρυφο άξονα (x = cx, z = 0) */
    function revolveY(cx, pts, cut, nSeg) {
      const a0 = cut ? Math.PI : 0, a1 = 2 * Math.PI;
      nSeg = nSeg || (cut ? 40 : 72);
      const cols = nSeg + 1, pos = [], idx = [];
      for (let i = 0; i < pts.length; i++) {
        for (let j = 0; j <= nSeg; j++) {
          const a = a0 + (a1 - a0) * j / nSeg;
          pos.push(cx + pts[i][1] * Math.cos(a), pts[i][0], pts[i][1] * Math.sin(a));
        }
      }
      for (let i = 0; i < pts.length - 1; i++) {
        for (let j = 0; j < nSeg; j++) {
          const A = i * cols + j, B = A + 1, C = A + cols, D = C + 1;
          idx.push(A, C, B, B, C, D);
        }
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      g.computeVertexNormals();
      return g;
    }
    /* επίπεδη επιφάνεια τομής (z = 0) ανάμεσα σε εσωτερικό και εξωτερικό προφίλ */
    function sectionX(xs, rin, rout, skipTop) {
      const pos = [];
      function quad(x0, a0, b0, x1, a1, b1, s) {
        pos.push(x0, s * a0, 0, x1, s * a1, 0, x1, s * b1, 0, x0, s * a0, 0, x1, s * b1, 0, x0, s * b0, 0);
      }
      for (let i = 0; i < xs.length - 1; i++) {
        const xm = (xs[i] + xs[i + 1]) / 2;
        if (!(skipTop && xm > skipTop[0] && xm < skipTop[1])) quad(xs[i], rin[i], rout[i], xs[i + 1], rin[i + 1], rout[i + 1], 1);
        quad(xs[i], rin[i], rout[i], xs[i + 1], rin[i + 1], rout[i + 1], -1);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
      g.computeVertexNormals();
      return g;
    }
    function rect(x0, y0, x1, y1) {
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute([x0, y0, 0, x1, y0, 0, x1, y1, 0, x0, y0, 0, x1, y1, 0, x0, y1, 0], 3));
      g.computeVertexNormals();
      return g;
    }
    function flangeX(group, x0, x1, rIn, rOut, mat) {
      [[[x0, rIn], [x0, rOut]], [[x0, rOut], [x1, rOut]], [[x1, rOut], [x1, rIn]], [[x1, rIn], [x0, rIn]]].forEach(function (pts) {
        group.add(mesh(revolveX(pts, false, 0, 64), mat));
      });
    }
    function flangeY(group, cx, y0, y1, rIn, rOut, mat) {
      [[[y0, rIn], [y0, rOut]], [[y0, rOut], [y1, rOut]], [[y1, rOut], [y1, rIn]], [[y1, rIn], [y0, rIn]]].forEach(function (pts) {
        group.add(mesh(revolveY(cx, pts, false, 64), mat));
      });
    }
    const hexShaft = new THREE.CylinderGeometry(5, 5, 1, 6);
    const hexNut = new THREE.CylinderGeometry(9.5, 9.5, 8, 6);
    function boltsX(group, xa, xb, rb, n) {
      for (let k = 0; k < n; k++) {
        const a = (k + 0.5) / n * 2 * Math.PI, y = rb * Math.sin(a), z = rb * Math.cos(a);
        const shaft = mesh(hexShaft, M.steel);
        shaft.scale.y = xb - xa + 26;
        shaft.rotation.z = Math.PI / 2;
        shaft.position.set((xa + xb) / 2, y, z);
        group.add(shaft);
        [xa - 4, xb + 4].forEach(function (x) {
          const nut = mesh(hexNut, M.steel);
          nut.rotation.z = Math.PI / 2;
          nut.position.set(x, y, z);
          group.add(nut);
        });
      }
    }
    function boltsY(group, cx, ya, yb, rb, n) {
      for (let k = 0; k < n; k++) {
        const a = (k + 0.5) / n * 2 * Math.PI, x = cx + rb * Math.cos(a), z = rb * Math.sin(a);
        const shaft = mesh(hexShaft, M.steel);
        shaft.scale.y = yb - ya + 26;
        shaft.position.set(x, (ya + yb) / 2, z);
        group.add(shaft);
        [ya - 4, yb + 4].forEach(function (y) {
          const nut = mesh(hexNut, M.steel);
          nut.position.set(x, y, z);
          group.add(nut);
        });
      }
    }
    function support(group, x, yTop, width) {
      const h = yTop - G.FLOOR - 10;
      const col = mesh(new THREE.BoxGeometry(26, h, 26), M.frame);
      col.position.set(x, G.FLOOR + h / 2, -6);
      const base = mesh(new THREE.BoxGeometry(90, 8, 90), M.frame);
      base.position.set(x, G.FLOOR + 4, -6);
      const saddle = mesh(new THREE.BoxGeometry(46, 10, width), M.frame);
      saddle.position.set(x, yTop - 5, 0);
      group.add(col, base, saddle);
    }

    /* μανόμετρα με ζωντανή ένδειξη */
    function makeGauge(o) {
      const cv = document.createElement("canvas");
      cv.width = cv.height = 256;
      const ctx = cv.getContext("2d");
      const tex = new THREE.CanvasTexture(cv);
      tex.encoding = THREE.sRGBEncoding;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      const A0 = 0.75 * Math.PI, SW = 1.5 * Math.PI;
      const ang = function (v) { return A0 + SW * clamp((v - o.min) / (o.max - o.min), 0, 1); };
      let last = null;
      function draw(v) {
        if (last !== null && Math.abs(v - last) < 1e-5) return;
        last = v;
        ctx.clearRect(0, 0, 256, 256);
        ctx.fillStyle = "#f3f0e6";
        ctx.beginPath(); ctx.arc(128, 128, 126, 0, 2 * Math.PI); ctx.fill();
        o.zones.forEach(function (z) {
          ctx.strokeStyle = z[2]; ctx.lineWidth = 9;
          ctx.beginPath(); ctx.arc(128, 128, 101, ang(z[0]), ang(z[1])); ctx.stroke();
        });
        ctx.strokeStyle = "#1b1f24"; ctx.fillStyle = "#1b1f24";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        const n = Math.round((o.max - o.min) / o.minor);
        const per = Math.round(o.major / o.minor);
        for (let i = 0; i <= n; i++) {
          let v0 = o.min + i * o.minor;
          if (Math.abs(v0) < 1e-9) v0 = 0;
          const a = ang(v0), major = i % per === 0;
          ctx.lineWidth = major ? 3 : 1.4;
          ctx.beginPath();
          ctx.moveTo(128 + (major ? 86 : 95) * Math.cos(a), 128 + (major ? 86 : 95) * Math.sin(a));
          ctx.lineTo(128 + 106 * Math.cos(a), 128 + 106 * Math.sin(a));
          ctx.stroke();
          if (major) {
            ctx.font = '600 18px "IBM Plex Sans", Arial, sans-serif';
            ctx.fillText(fmt(v0, o.dec), 128 + 68 * Math.cos(a), 128 + 68 * Math.sin(a));
          }
        }
        ctx.font = '700 14px "IBM Plex Sans", Arial, sans-serif';
        ctx.fillText(o.title, 128, 94);
        ctx.font = '600 14px "IBM Plex Sans", Arial, sans-serif';
        ctx.fillText(o.unit, 128, 168);
        ctx.fillStyle = "#7a1d14";
        ctx.font = '600 17px "IBM Plex Mono", Consolas, monospace';
        ctx.fillText(fmt(v, 3), 128, 196);
        const a = ang(v);
        ctx.strokeStyle = "#c0261c"; ctx.lineWidth = 4; ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(128 - 20 * Math.cos(a), 128 - 20 * Math.sin(a));
        ctx.lineTo(128 + 98 * Math.cos(a), 128 + 98 * Math.sin(a));
        ctx.stroke();
        ctx.fillStyle = "#262a2e";
        ctx.beginPath(); ctx.arc(128, 128, 9, 0, 2 * Math.PI); ctx.fill();
        tex.needsUpdate = true;
      }
      const g = new THREE.Group();
      const body = mesh(new THREE.CylinderGeometry(42, 42, 18, 48), M.dark);
      body.rotation.x = Math.PI / 2;
      const bezel = mesh(new THREE.TorusGeometry(41, 4, 12, 48), M.steel);
      bezel.position.z = 9;
      const face = new THREE.Mesh(new THREE.CircleGeometry(38, 48), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
      face.position.z = 9.3;
      const glass = new THREE.Mesh(new THREE.CircleGeometry(38, 48),
        new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.07, roughness: 0.04, metalness: 0, depthWrite: false }));
      glass.position.z = 11;
      g.add(body, bezel, face, glass);
      draw(o.min);
      return { group: g, set: draw };
    }
    function stem(group, x0, y0, z0, x1, y1, z1) {
      const a = new THREE.Vector3(x0, y0, z0), b = new THREE.Vector3(x1, y1, z1);
      const len = a.distanceTo(b);
      const s = mesh(new THREE.CylinderGeometry(4.5, 4.5, len, 12), M.steel);
      s.position.copy(a).add(b).multiplyScalar(0.5);
      s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
      group.add(s);
    }

    /* ---------- σταθερά μέρη ---------- */
    const fixed = new THREE.Group();
    scene.add(fixed);

    // δάπεδο με αντιολισθητική λαμαρίνα
    const fc = document.createElement("canvas");
    fc.width = fc.height = 128;
    const fx = fc.getContext("2d");
    fx.fillStyle = "#5b636a"; fx.fillRect(0, 0, 128, 128);
    fx.strokeStyle = "#7f888f"; fx.lineWidth = 6; fx.lineCap = "round";
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const cx = i * 32 + 16, cy = j * 32 + 16, d = (i + j) % 2 ? 1 : -1;
      fx.beginPath(); fx.moveTo(cx - 8, cy - 8 * d); fx.lineTo(cx + 8, cy + 8 * d); fx.stroke();
    }
    const floorTex = new THREE.CanvasTexture(fc);
    floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
    floorTex.repeat.set(30, 20);
    floorTex.encoding = THREE.sRGBEncoding;
    floorTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(3000, 2000),
      new THREE.MeshStandardMaterial({ map: floorTex, metalness: 0.55, roughness: 0.55 }));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(100, G.FLOOR, 0);
    floor.receiveShadow = true;
    fixed.add(floor);
    const backWall = new THREE.Mesh(new THREE.PlaneGeometry(3000, 1600), M.wall);
    backWall.position.set(100, G.FLOOR + 800, -720);
    backWall.receiveShadow = true;
    fixed.add(backWall);
    for (let k = 0; k < 5; k++) {
      const st = mesh(new THREE.BoxGeometry(14, 1600, 60), M.wall);
      st.position.set(-1000 + k * 500, G.FLOOR + 800, -690);
      fixed.add(st);
    }
    const bulk = mesh(new THREE.BoxGeometry(24, 1000, 1400), M.bulkhead);
    bulk.position.set(872, G.FLOOR + 500, 0);
    fixed.add(bulk);

    // είσοδος κινητήριου νερού
    fixed.add(mesh(revolveX([[-1300, 26], [G.X_FL - 16, 26]], false, 0, 48), M.paint));
    flangeX(fixed, G.X_FL - 16, G.X_FL, G.R1, 76, M.paint);
    flangeX(fixed, G.X_FL, G.X_FL + 16, G.R1 + 7, 76, M.bronze);
    boltsX(fixed, G.X_FL - 16, G.X_FL + 16, 57, 4);
    support(fixed, -600, -26, 64);

    // κλάδος αναρρόφησης: φλάντζες, σωλήνας, βάνα
    const BT = G.BR_TOP;
    flangeY(fixed, G.BX, BT, BT + 16, G.RB_OUT, 66, M.bronze);
    flangeY(fixed, G.BX, BT + 16, BT + 32, G.RB_IN, 66, M.paint);
    boltsY(fixed, G.BX, BT, BT + 32, 48, 4);
    fixed.add(mesh(revolveY(G.BX, [[BT + 32, 26], [262, 26]], false, 48), M.paint));
    fixed.add(mesh(revolveY(G.BX, [[302, 26], [900, 26]], false, 48), M.paint));
    const valve = new THREE.Group();
    valve.position.set(G.BX, 282, 0);
    valve.add(mesh(new THREE.SphereGeometry(31, 32, 20), M.bronze));
    [-24, 24].forEach(function (dy) {
      const vf = mesh(new THREE.CylinderGeometry(44, 44, 10, 40), M.bronze);
      vf.position.y = dy;
      valve.add(vf);
    });
    const bonnet = mesh(new THREE.CylinderGeometry(17, 21, 48, 28), M.bronze);
    bonnet.rotation.x = Math.PI / 2;
    bonnet.position.z = 44;
    const bonnetFl = mesh(new THREE.CylinderGeometry(26, 26, 8, 28), M.bronze);
    bonnetFl.rotation.x = Math.PI / 2;
    bonnetFl.position.z = 26;
    valve.add(bonnet, bonnetFl);
    const spindle = mesh(new THREE.CylinderGeometry(5, 5, 1, 12), M.steel);
    spindle.rotation.x = Math.PI / 2;
    valve.add(spindle);
    const wheel = new THREE.Group();
    wheel.add(mesh(new THREE.TorusGeometry(32, 4, 12, 40), M.wheel));
    for (let k = 0; k < 3; k++) {
      const sp = mesh(new THREE.BoxGeometry(64, 5, 4), M.wheel);
      sp.rotation.z = k * Math.PI / 3;
      wheel.add(sp);
    }
    const hub = mesh(new THREE.CylinderGeometry(8, 8, 10, 16), M.wheel);
    hub.rotation.x = Math.PI / 2;
    wheel.add(hub);
    valve.add(wheel);
    fixed.add(valve);
    function setValve(va) {
      const L = 14 + 30 * va / 100;
      spindle.scale.y = L + 10;
      spindle.position.z = 68 + L / 2 - 5;
      wheel.position.z = 68 + L;
      wheel.rotation.z = -va / 100 * 3 * Math.PI;
    }

    // μανόμετρα
    const gM = makeGauge({ min: 0, max: 1, major: 0.2, minor: 0.05, dec: 1, title: "ΚΙΝΗΤΗΡΙΟ", unit: "MPa",
      zones: [[0.3, 0.7, "#2f9e5b"], [0.85, 1, "#c0261c"]] });
    gM.group.position.set(-420, 150, 0);
    gM.group.rotation.y = 0.12;
    stem(fixed, -420, 20, 0, -420, 108, 0);
    fixed.add(gM.group);

    const gS = makeGauge({ min: -0.1, max: 0, major: 0.02, minor: 0.005, dec: 2, title: "ΑΝΑΡΡΟΦΗΣΗ", unit: "MPa (κενό)",
      zones: [[-0.1, -0.098, "#c0261c"], [-0.096, -0.085, "#2f9e5b"]] });
    gS.group.position.set(G.BX + 128, 152, 0);
    stem(fixed, G.BX + G.RB_OUT - 4, 112, -6, G.BX + 128, 112, -6);
    fixed.add(gS.group);

    const gD = makeGauge({ min: 0, max: 0.3, major: 0.05, minor: 0.01, dec: 2, title: "ΚΑΤΑΘΛΙΨΗ", unit: "MPa",
      zones: [[0, 0.06, "#2f9e5b"], [0.2, 0.3, "#c0261c"]] });
    gD.group.position.set(730, 160, 0);
    gD.group.rotation.y = -0.15;
    stem(fixed, 730, 0, 0, 730, 118, 0);
    fixed.add(gD.group);

    /* ---------- μέρη που αλλάζουν με τις διαστάσεις ---------- */
    const body = new THREE.Group();
    const water = new THREE.Group();
    scene.add(body, water);
    let mode = "cut";
    let P = null;
    let key = "";

    function clearGroup(group) {
      while (group.children.length) {
        const o = group.children.pop();
        o.traverse(function (n) { if (n.geometry) n.geometry.dispose(); });
      }
    }

    function buildBody() {
      clearGroup(body);
      clearGroup(water);
      const cut = mode === "cut";
      const hb = [G.BX - G.RB_IN, G.BX + G.RB_IN];
      const xs = sampleXs(G.X_FL, G.X_OUT, 4, [G.X_BACK - 28, G.X_BACK - 4, G.X_BACK - 0.01, G.X_BACK, G.X_CHE, G.X_CHE + 5,
        G.X_T0, G.X_T0 + 30, G.X_T1, G.X_D1, hb[0], hb[1], G.BX - G.RB_OUT, G.BX + G.RB_OUT]);

      // χυτό σώμα: θάλαμος, λαιμός, διαχύτης
      body.add(mesh(revolveX(xs.map(function (x) { return [x, P.cout(x)]; }), cut, G.RB_OUT - 5), M.bronze));
      body.add(mesh(revolveX(xs.filter(function (x) { return x < G.X_BACK; }).map(function (x) { return [x, P.cin(x)]; }), cut), M.bronzeIn));
      body.add(mesh(revolveX([[G.X_BACK, G.R1], [G.X_BACK, G.R_CH]], cut), M.bronzeIn));
      body.add(mesh(revolveX(xs.filter(function (x) { return x >= G.X_BACK; }).map(function (x) { return [x, P.cin(x)]; }), cut, G.RB_IN), M.bronzeIn));

      // ακροφύσιο
      const xn = sampleXs(G.X_BACK, G.X_NOZ, 2, [P.NZ1]);
      body.add(mesh(revolveX(xn.map(function (x) { return [x, P.nout(x)]; }), cut), M.brass));
      body.add(mesh(revolveX(xn.map(function (x) { return [x, P.nin(x)]; }), cut), M.brass));
      body.add(mesh(revolveX([[G.X_NOZ, P.rn], [G.X_NOZ, P.rn + 4]], cut), M.brass));

      // κλάδος αναρρόφησης
      body.add(mesh(revolveY(G.BX, [[60, G.RB_OUT], [G.BR_TOP, G.RB_OUT]], cut), M.bronze));
      body.add(mesh(revolveY(G.BX, [[54, G.RB_IN], [G.BR_TOP, G.RB_IN]], cut), M.bronzeIn));

      if (cut) {
        body.add(mesh(sectionX(xs, xs.map(P.cin), xs.map(P.cout), hb), M.cut, false));
        body.add(mesh(sectionX(xn, xn.map(P.nin), xn.map(P.nout)), M.cutNoz, false));
        body.add(mesh(rect(G.BX - G.RB_OUT, 60, G.BX - G.RB_IN, G.BR_TOP), M.cut, false));
        body.add(mesh(rect(G.BX + G.RB_IN, 60, G.BX + G.RB_OUT, G.BR_TOP), M.cut, false));
      }

      // φλάντζα εξόδου, σωλήνας overboard, στήριγμα
      flangeX(body, G.X_OUT - 16, G.X_OUT, P.ro + 8, P.ro + 52, M.bronze);
      flangeX(body, G.X_OUT, G.X_OUT + 16, P.ro, P.ro + 52, M.paint);
      boltsX(body, G.X_OUT - 16, G.X_OUT + 16, P.ro + 36, 8);
      body.add(mesh(revolveX([[G.X_OUT + 16, P.ro + 7], [880, P.ro + 7]], false, 0, 64), M.paint));
      support(body, 760, -(P.ro + 7), P.ro * 2 + 30);
      support(body, -200, -(G.R1 + 7), 70);

      // νερό (μόνο για τομή / διάφανο)
      const xm = xs.filter(function (x) { return x <= G.X_NOZ; });
      water.add(mesh(revolveX(xm.map(function (x) { return [x, (x < G.X_BACK ? G.R1 : P.nin(x)) * 0.96]; }), cut), W.motive, false));
      water.add(mesh(revolveX([[G.X_NOZ, P.rn * 0.96], [(G.X_NOZ + G.X_T0) / 2, P.jetR((G.X_NOZ + G.X_T0) / 2)], [G.X_T0 + 4, P.jetR(G.X_T0)]], cut), W.jet, false));
      water.add(mesh(revolveX(xs.filter(function (x) { return x >= G.X_T0; }).map(function (x) { return [x, P.cin(x) * 0.96]; }), cut), W.mix, false));
      water.add(mesh(revolveX(xs.filter(function (x) { return x > G.X_BACK && x <= G.X_T0; }).map(function (x) { return [x, P.cin(x) * 0.98]; }), cut, G.RB_IN), W.chamber, false));
      const br = mesh(revolveY(G.BX, [[56, G.RB_IN * 0.95], [G.BR_TOP, G.RB_IN * 0.95]], cut), W.branch, false);
      br.name = "branchWater";
      water.add(br);
      water.children.forEach(function (m, i) { m.renderOrder = 2 + i; });

      // θέσεις ετικετών που εξαρτώνται από τις διαστάσεις
      labels.s3.pos.set(150, P.rt + 9, 0);
      labels.s4.pos.set(G.X_D1 - 10, P.ro + 8, 0);
      labels.ob.pos.set(840, P.ro + 7, 0);
    }

    function applyMode() {
      const ghost = mode === "xray";
      ghostable.forEach(function (m) {
        m.transparent = ghost;
        m.opacity = ghost ? 0.2 : 1;
        m.depthWrite = !ghost;
        m.needsUpdate = true;
      });
      water.visible = mode !== "full";
    }

    /* ---------- ετικέτες ---------- */
    const labels = {};
    function addLabel(id, x, y, z, place, html) {
      const el = document.createElement("div");
      el.className = "eje3d-label";
      el.innerHTML = '<span class="eje3d-dot"></span><span class="eje3d-chip eje3d-' + place + '">' + (html || "") + "</span>";
      overlay.appendChild(el);
      labels[id] = { el: el, chip: el.lastChild, pos: new THREE.Vector3(x, y, z) };
    }
    addLabel("in", -520, -26, 0, "below", "Από αντλία εγχυτήρα");
    addLabel("s1", -215, 27, 0, "above");
    addLabel("noz", -92, -14, 0, "left", "Ακροφύσιο");
    addLabel("s2", 0, -70, 0, "below");
    addLabel("s3", 150, 20, 0, "above");
    addLabel("s4", 520, 30, 0, "above");
    addLabel("ev", G.BX + 30, 390, 0, "right", "Από εβαπορέτα: άλμη + αέρας");
    addLabel("ob", 840, 30, 0, "above", "Προς overboard");
    const tmpV = new THREE.Vector3();
    function placeLabels() {
      if (overlay.hidden) return;
      const w = host.clientWidth, h = host.clientHeight;
      Object.keys(labels).forEach(function (id) {
        const L = labels[id];
        tmpV.copy(L.pos).project(camera);
        const off = tmpV.z > 1 || tmpV.x < -1.2 || tmpV.x > 1.2 || tmpV.y < -1.2 || tmpV.y > 1.2;
        L.el.style.display = off ? "none" : "";
        if (!off) L.el.style.transform = "translate(" + ((tmpV.x + 1) / 2 * w).toFixed(1) + "px," + ((1 - tmpV.y) / 2 * h).toFixed(1) + "px)";
      });
    }

    /* ---------- σωματίδια ροής ---------- */
    const MAX = 900;
    const dotGeom = new THREE.SphereGeometry(2.6, 8, 6);
    const pm = new THREE.InstancedMesh(dotGeom, new THREE.MeshBasicMaterial({ color: 0xffffff }), MAX);
    const ps = new THREE.InstancedMesh(dotGeom, new THREE.MeshBasicMaterial({ color: 0x3ecf9a }), MAX);
    [pm, ps].forEach(function (m) { m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.count = 0; m.renderOrder = 20; m.frustumCulled = false; scene.add(m); });
    const mat4 = new THREE.Matrix4();
    let parts = [];
    let acc = { m: 0, s: 0 };
    let C = null;
    let warmed = false;

    function A(rmm) { return Math.PI * (rmm / 1000) * (rmm / 1000); }
    function hw(x) {
      if (x < G.X_BACK) return G.R1;
      if (x < G.X_NOZ) return P.nin(x);
      if (x < G.X_T0) return P.jetR(x);
      return P.cin(x);
    }
    function vel(x) {
      if (x < G.X_BACK) return C.Qn / A(G.R1);
      if (x < G.X_NOZ) return C.Qn / A(P.nin(x));
      if (x < G.X_T0) return C.vj;
      if (x < G.X_T1) return C.vj + (C.vt - C.vj) * (x - G.X_T0) / (G.X_T1 - G.X_T0);
      return C.Q / A(P.cin(x));
    }
    function randPsi() {
      return mode === "cut" ? Math.PI / 2 + 0.25 + Math.random() * (Math.PI - 0.5) : Math.random() * 2 * Math.PI;
    }
    function spawn(kind) {
      if (parts.length >= MAX * 2) return;
      if (kind === "m") {
        parts.push({ k: "m", ph: "main", x: G.X_FL + 2, f: Math.sqrt(Math.random()) * 0.88, psi: randPsi(), ft: Math.random() * 0.9, y: 0, z: 0 });
      } else {
        const a = Math.random() * Math.PI * (mode === "cut" ? 1 : 2) + (mode === "cut" ? Math.PI : 0);
        const rr = Math.sqrt(Math.random()) * G.RB_IN * 0.8;
        parts.push({ k: "s", ph: "pipe", x: G.BX + rr * Math.cos(a), y: G.BR_TOP, z: rr * Math.sin(a), f: 0, psi: 0, ft: Math.random() * 0.9 });
      }
    }
    function step(dt) {
      if (!C || !P) return;
      acc.m += dt * Math.max(0.15, C.Qn * 1000) * 11;
      while (acc.m >= 1) { acc.m -= 1; spawn("m"); }
      if (C.Qs > 1e-6) {
        acc.s += dt * C.Qs * 1000 * 11;
        while (acc.s >= 1) { acc.s -= 1; spawn("s"); }
      }
      const pipeSpeed = 70 + 28 * (C.Qs / (Math.PI / 4 * DS * DS));
      for (let i = parts.length - 1; i >= 0; i--) {
        const q = parts[i];
        if (q.ph === "pipe") {
          q.y -= pipeSpeed * dt;
          if (q.y <= 64) {
            q.ph = "ch";
            q.psi = randPsi();
            const rho = P.rt * (0.45 + 0.4 * Math.random());
            q.tx = G.X_T0 + 2; q.ty = rho * Math.sin(q.psi); q.tz = rho * Math.cos(q.psi);
            q.f = clamp(rho / P.rt, 0, 0.9);
          }
        } else if (q.ph === "ch") {
          const frac = clamp((q.x - G.BX) / (G.X_T0 - G.BX), 0, 1);
          const sp = 70 + 420 * frac * frac;
          const dx = q.tx - q.x, dy = q.ty - q.y, dz = q.tz - q.z;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < sp * dt + 1.5) { q.ph = "main"; q.x = q.tx; }
          else { q.x += dx / d * sp * dt; q.y += dy / d * sp * dt; q.z += dz / d * sp * dt; }
        } else {
          q.x += (15 * vel(q.x) + 55) * dt;
          if (q.x > G.X_OUT - 2) { parts.splice(i, 1); continue; }
          if (q.x > G.X_T0) {
            q.f += (q.ft - q.f) * Math.min(1, 1.2 * dt);
            q.psi += (Math.random() - 0.5) * 0.6 * dt;
            if (mode === "cut") q.psi = clamp(q.psi, Math.PI / 2 + 0.2, 1.5 * Math.PI - 0.2);
          }
          const rho = q.f * hw(q.x) * 0.92;
          q.y = rho * Math.sin(q.psi);
          q.z = rho * Math.cos(q.psi);
        }
      }
    }
    function drawParts() {
      const show = mode !== "full";
      let nm = 0, ns = 0;
      if (show) {
        for (let i = 0; i < parts.length; i++) {
          const q = parts[i];
          mat4.makeTranslation(q.x, q.y, q.z);
          if (q.k === "m") { if (nm < MAX) pm.setMatrixAt(nm++, mat4); }
          else if (ns < MAX) ps.setMatrixAt(ns++, mat4);
        }
      }
      pm.count = nm; ps.count = ns;
      pm.instanceMatrix.needsUpdate = true;
      ps.instanceMatrix.needsUpdate = true;
    }

    /* ---------- κάμερα, μέγεθος, βρόχος ---------- */
    function resetCamera() {
      const aspect = Math.max(0.4, host.clientWidth / Math.max(1, host.clientHeight));
      const dist = 1330 * Math.max(1, Math.pow(1.85 / aspect, 0.92));
      const dir = new THREE.Vector3(-0.12, 0.3, 1).normalize();
      camera.position.copy(TARGET).addScaledVector(dir, dist);
      controls.target.copy(TARGET);
      controls.update();
    }
    function resize() {
      const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    resetCamera();
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    let visible = true;
    const io = new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; });
    io.observe(host);

    let raf = 0, lastT = 0;
    function frame(t) {
      raf = window.requestAnimationFrame(frame);
      const dt = lastT ? Math.min(0.04, (t - lastT) / 1000) : 0.016;
      lastT = t;
      if (!visible || document.hidden) return;
      step(dt);
      drawParts();
      controls.update();
      renderer.render(scene, camera);
      placeLabels();
    }

    function setColor(material, css) { material.color.set(css); }

    function update(c, vals) {
      C = c;
      const k = vals.dn + "|" + vals.dt + "|" + vals.d3 + "|" + mode;
      if (k !== key) {
        key = k;
        P = profiles(vals.dn, vals.dt, vals.d3);
        buildBody();
        applyMode();
        if (!warmed) { warmed = true; for (let i = 0; i < 180; i++) step(0.04); }
      }
      setColor(W.motive, speedColor(c.v1 + (c.vj - c.v1) * 0.35));
      setColor(W.jet, speedColor(c.vj));
      setColor(W.mix, speedColor(c.vt));
      const vr = clamp(-c.ps / -P_LIM, 0, 1);
      W.chamber.color.setRGB((30 + 40 * (1 - vr)) / 255, (70 + 50 * (1 - vr)) / 255, (90 + 80 * vr) / 255).convertSRGBToLinear();
      W.chamber.opacity = 0.08 + 0.2 * vr;
      const bw = water.getObjectByName("branchWater");
      if (bw) bw.visible = c.Qs > 1e-6;

      gM.set(vals.pm);
      gS.set(Math.min(0, c.ps / 1e6));
      gD.set(c.po / 1e6);
      setValve(vals.va);

      const ptShown = Math.max(c.pt, P_LIM);
      labels.s1.chip.innerHTML = "<b>①</b> Κινητήριο νερό<br>p = " + fmt(vals.pm, 3) + " MPa · v = " + fmt(c.v1, 1) + " m/s";
      labels.s2.chip.innerHTML = "<b>②</b> Θάλαμος αναρρόφησης<br>p = " + fmt(c.ps / 1e6, 3) + " MPa · v<sub>j</sub> = " + fmt(c.vj, 1) + " m/s";
      labels.s2.chip.classList.toggle("good", c.ps < -1e3);
      labels.s3.chip.innerHTML = "<b>③</b> Λαιμός ανάμιξης<br>p = " + fmt(ptShown / 1e6, 3) + " MPa · v = " + fmt(c.vt, 1) + " m/s";
      labels.s3.chip.classList.toggle("bad", c.state === "cav");
      labels.s4.chip.innerHTML = "<b>④</b> Έξοδος διαχύτη<br>p = " + fmt(c.po / 1e6, 3) + " MPa · v = " + fmt(c.vo, 1) + " m/s";
    }

    function setMode(m) {
      if (m === mode) return;
      mode = m;
      key = "";
      parts = parts.filter(function (q) { return q.ph === "main"; });
      parts.forEach(function (q) { q.psi = randPsi(); });
    }

    raf = window.requestAnimationFrame(frame);

    return {
      update: update,
      setMode: setMode,
      resetCamera: resetCamera,
      resize: resize,
      dispose: function () {
        window.cancelAnimationFrame(raf);
        ro.disconnect();
        io.disconnect();
        controls.dispose();
        renderer.dispose();
      },
    };
  }
})();
