(function () {
  const template =
    '<div class="fwg-toolbar">' +
    '<label>Ταχύτητα <select data-fwg="speed"><option value="0">Παύση</option><option value="1">×1</option><option value="10" selected>×10</option><option value="30">×30</option><option value="60">×60</option></select></label>' +
    '<button type="button" class="btn btn-ghost" data-fwg="hint">Υπόδειξη</button>' +
    '<button type="button" class="btn btn-ghost" data-fwg="reset">Επανεκκίνηση</button></div>' +
    '<div class="fwg-layout"><section class="fwg-panel"><div class="fwg-diagram-scroll">' +
    '<svg class="fwg-diagram" data-fwg="svg" viewBox="0 0 700 500" role="img" aria-label="Σχηματικό διάγραμμα βραστήρα">' +
    '<g data-fwg="pipes"></g>' +
    '<rect x="230" y="30" width="240" height="48" rx="6" fill="#22435c" stroke="#5c88a8"/><text x="350" y="48" text-anchor="middle">ΣΥΜΠΥΚΝΩΤΗΣ</text>' +
    '<rect data-fwg="evap" x="250" y="86" width="200" height="84" rx="6" fill="#1b3a4f" stroke="#5c88a8"/><text x="350" y="102" text-anchor="middle">ΕΞΑΤΜΙΣΤΗΣ (κενό)</text><text data-fwg="vacuum" x="350" y="127" text-anchor="middle" class="fwg-reading"></text><text data-fwg="temperature" x="350" y="146" text-anchor="middle" class="fwg-reading"></text>' +
    '<rect data-fwg="heat" x="265" y="178" width="170" height="120" rx="6" fill="#3a2a2a" stroke="#a86a5c"/><g stroke="#a86a5c" stroke-width="2"><path d="M295 200V290M320 200V290M345 200V290M370 200V290M395 200V290" fill="none"/></g><text x="350" y="196" text-anchor="middle">ΘΕΡΜΑΝΤΗΡΑΣ</text>' +
    '<polygon points="548,110 572,110 566,190 572,270 548,270 554,190" fill="#2a4a63" stroke="#5c88a8"/><text x="560" y="282" text-anchor="middle">Εγχυτήρας (τζιφάρι)</text>' +
    '<g data-fwg="pump-ep" style="cursor:pointer"><circle data-fwg="pc-ep" cx="560" cy="370" r="22" stroke="#fff"/><text x="560" y="374" text-anchor="middle">M</text><text x="560" y="408" text-anchor="middle">Αντλία εγχυτήρα</text></g>' +
    '<g data-fwg="pump-dp" style="cursor:pointer"><circle data-fwg="pc-dp" cx="190" cy="345" r="22" stroke="#fff"/><text x="190" y="349" text-anchor="middle">M</text><text x="190" y="382" text-anchor="middle">Αντλία γλυκού</text></g>' +
    '<rect x="20" y="322" width="50" height="58" fill="#12303a" stroke="#3ecf9a"/><text x="45" y="394" text-anchor="middle">Δεξαμενή γλυκού</text>' +
    '<rect x="212" y="280" width="14" height="44" fill="none" stroke="#9cc"/><rect data-fwg="sight-glass" x="213" y="323" width="12" height="0" fill="#3ecf9a"/><text x="236" y="302">sight glass</text>' +
    '<g data-fwg="salinometer" style="cursor:pointer"><rect data-fwg="sal-box" x="228" y="336" width="104" height="38" rx="4" fill="#12202c" stroke="#5c88a8"/><text x="236" y="349">SALINOMETER</text><text data-reading="sal" x="236" y="366" class="fwg-reading"></text><circle data-fwg="led" cx="318" cy="347" r="5" fill="#333"/></g>' +
    '<g data-fwg="chemicals" style="cursor:pointer"><rect data-fwg="chem-box" x="482" y="352" width="54" height="36" rx="4" fill="#12202c" stroke="#5c88a8"/><text x="509" y="366" text-anchor="middle" class="fwg-small-text">CHEMICALS</text><text data-fwg="chem-reading" x="509" y="381" text-anchor="middle" style="font-weight:700">OFF</text></g>' +
    '<text data-fwg="cooling-in" x="175" y="48"></text><text data-fwg="cooling-out" x="480" y="48"></text><text data-fwg="jacket-in" x="235" y="246" text-anchor="middle"></text><text data-fwg="jacket-out" x="235" y="196" text-anchor="middle"></text>' +
    '<text x="4" y="48">Θάλασσα →</text><text x="696" y="74" text-anchor="end">→ overboard</text><text x="696" y="128" text-anchor="end">→ overboard</text><text x="696" y="392" text-anchor="end">← Θάλασσα</text><text x="4" y="268">Jacket μηχανής</text><text x="4" y="196">Jacket μηχανής</text>' +
    '<rect x="8" y="420" width="684" height="72" rx="6" fill="#0e1d29" stroke="#2b4258"/><g data-fwg="readings"></g><g data-fwg="gauges"></g><g data-fwg="valves"></g></svg></div>' +
    '<p class="fwg-help">Πατήστε πάνω σε επιστόμιο για να ρυθμίσετε το άνοιγμά του (βήματα 5%, για το V1 ανά 1%). Πατήστε πάνω στις αντλίες, στο chemicals και στο salinometer για να τα ξεκινήσετε ή να τα σταματήσετε.</p></section>' +
    '<aside><section class="fwg-panel"><h2>Διαδικασία εκκίνησης</h2><ol class="fwg-steps" data-fwg="steps"></ol><p class="fwg-help">Στην πραγματικότητα, την πρώτη εκκίνηση της αντλίας γλυκού το απόσταγμα πηγαίνει overboard για τουλάχιστον 30 λεπτά.</p></section>' +
    '<section class="fwg-panel"><h2>Ημερολόγιο</h2><div class="fwg-log" data-fwg="log" aria-live="polite"></div></section></aside></div>' +
    '<div class="fwg-pop" data-fwg="popup" hidden role="dialog" aria-label="Ρύθμιση επιστομίου"><b data-fwg="popup-title"></b><div class="fwg-pop-row"><button type="button" data-fwg="minus" aria-label="Κλείσιμο">−</button><input type="range" data-fwg="range" min="0" max="100" step="5"><button type="button" data-fwg="plus" aria-label="Άνοιγμα">+</button><b class="fwg-pop-value" data-fwg="value"></b></div><button type="button" class="btn btn-ghost" data-fwg="close">Κλείσιμο παραθύρου</button></div>';

  const valves = [
    ["CWin", "Είσοδος ψυκτικού νερού συμπυκνωτή", 100, 56, 0, "Είσ. ψύξης"],
    ["CWout", "Έξοδος ψυκτικού νερού συμπυκνωτή", 630, 56, 0, "Εξ. ψύξης"],
    ["EPin", "Αναρρόφηση αντλίας εγχυτήρα (θάλασσα)", 620, 370, 0, "Αναρρ. αντλ."],
    ["OB", "Εκκένωση εγχυτήρα στη θάλασσα", 630, 110, 0, "Overboard"],
    ["V2", "V2 Τροφοδοτικό νερό (feed)", 440, 340, 0, "V2|feed"],
    ["V4", "V4 Θραύση κενού (vacuum breaker)", 468, 165, 0, "V4|θραύση κενού"],
    ["V7", "V7 Vacuum adjust (κανονικά ανοιχτό)", 482, 112, 100, "V7|ρύθμιση κενού"],
    ["Hin", "Είσοδος νερού jacket στον θερμαντήρα", 120, 250, 0, "Jacket IN"],
    ["Hout", "Έξοδος νερού jacket από τον θερμαντήρα", 120, 200, 0, "Jacket OUT"],
    ["BYP", "Bypass νερού jacket", 50, 225, 100, "Bypass"],
    ["V1", "V1 Εξαγωγή αντλίας γλυκού νερού", 118, 345, 0, "V1|εξαγωγή γλυκού", -12],
  ];
  const steps = [
    "Όλα τα επιστόμια κλειστά, εκτός από το V7 (ανοιχτό) και το bypass (ανοιχτό)",
    "Άνοιγμα εισόδου και εξόδου ψυκτικού νερού συμπυκνωτή (≥50%)",
    "Άνοιγμα αναρρόφησης και overboard, εκκίνηση αντλίας εγχυτήρα (πίεση ≥0,4 MPa)",
    "Άνοιγμα V2: πίεση feed στο πράσινο (0,04–0,06 MPa)",
    "Εκκίνηση chemicals injection",
    "Έλεγχος κενού ≈ −0,092 MPa (70 cmHgV)",
    "Νερό jacket: άνοιγμα εισόδου και εξόδου σιγά σιγά (≥80%)",
    "Ρύθμιση bypass: παραγωγή 18–22 t/d (ονομαστική 20)",
    "Εκκίνηση salinometer",
    "Εμφάνιση αποσταγμένου στο sight glass",
    "Εκκίνηση αντλίας γλυκού, άνοιγμα V1, πίεση 0,14–0,22 MPa",
    "Σταθερή λειτουργία 30 λεπτά χωρίς συναγερμό",
  ];
  const readings = [
    ["t", "Χρόνος προσομοίωσης"],
    ["vac", "Κενό εξατμιστή"],
    ["rate", "Παραγωγή (t/d)"],
    ["lvl", "Sight glass"],
    ["meter", "Μετρητής αποσταγμένου"],
    ["stab", "Σταθερή λειτουργία"],
    ["err", "Λάθη χειρισμού"],
  ];

  let s;
  const pipes = [
    ["M690 370H582", "#3b9be0", () => (s.ep ? s.v.EPin / 100 : 0)],
    ["M560 348V270", "#3b9be0", () => (s.ep ? s.v.EPin / 100 : 0)],
    ["M560 110H690", "#3b9be0", () => s.fe],
    ["M450 112H548", "#aab4bd", () => Math.min(1, s.vac * 12)],
    ["M10 56H230", "#3b9be0", () => s.cw],
    ["M470 56H690", "#3b9be0", () => s.cw],
    ["M515 56V340H350V298", "#6fc4e8", () => Math.min(1, s.feedP / 0.05)],
    ["M500 352V340", "#6fc4e8", () => (s.chem ? 1 : 0)],
    ["M10 250H50", "#e8604c", () => 1],
    ["M50 250H265", "#e8604c", () => s.fH],
    ["M265 200H50", "#e8604c", () => s.fH],
    ["M50 200H10", "#e8604c", () => 1],
    ["M50 250V200", "#e8604c", () =>
      (s.v.BYP > 0 ? 0.3 + 0.7 * s.v.BYP / 100 * (1 - s.fH) : 0)],
    ["M232 66H205V323", "#3ecf9a", () => (s.rate > 0.2 ? 1 : 0)],
    ["M168 345H70", "#3ecf9a", () => (s.out > 0 ? 1 : 0)],
    ["M450 165H485", "#555", () => 0],
  ];

  window.mountFreshWaterGenerator = function (container) {
    if (!container) throw new Error("Fresh Water Generator container not found.");
    container.innerHTML = template;

    const $ = function (id) {
      const selector = id.charAt(0) === "[" || id.charAt(0) === "#"
        ? id
        : '[data-fwg="' + id + '"]';
      const element = container.querySelector(selector);
      if (!element) throw new Error("Missing Fresh Water Generator element: " + id);
      return element;
    };
    const query = function (selector) {
      const element = container.querySelector(selector);
      if (!element) throw new Error("Missing Fresh Water Generator element: " + selector);
      return element;
    };
    const named = {};
    valves.forEach(function (valve) { named[valve[0]] = valve[1]; });
    let speed = 10;
    let logs = [];
    let currentValve = null;
    let timer;

    function say(kind, message) {
      logs.unshift([kind, message, s.t]);
      logs.length = 40;
    }
    function warn(key, message, countsAsError) {
      const now = Date.now();
      if (s.w[key] && now - s.w[key] < 30000) return;
      s.w[key] = now;
      say("er", message);
      if (countsAsError) s.err++;
    }
    function formatTime(time) {
      return String(Math.floor(time / 60)).padStart(2, "0") + ":" +
        String(Math.floor(time % 60)).padStart(2, "0");
    }
    function setValve(id, value) {
      const oldValue = s.v[id];
      if (["Hin", "Hout", "BYP"].includes(id) && Math.abs(value - oldValue) > 20)
        warn("j" + id, "Απότομη κίνηση στο «" + named[id] + "» – κινείτε το σιγά σιγά (θερμικό σοκ)!", true);
      s.v[id] = value;
    }
    function pump(id) {
      const opening = function (valve) { return s.v[valve] / 100; };
      if (id === "ep") {
        if (s.ep) {
          s.ep = 0;
          say("in", "Αντλία εγχυτήρα: STOP");
        } else {
          s.ep = 1;
          say("in", "Αντλία εγχυτήρα: START");
          if (opening("EPin") < 0.1) {
            say("er", "ΛΑΘΟΣ: ξεκίνησες την αντλία του εγχυτήρα με κλειστή την αναρρόφηση – ξηρή λειτουργία, κινδυνεύει η αντλία! Σταμάτησέ την, άνοιξε πρώτα την αναρρόφηση και ξαναξεκίνα.");
            s.err++;
          }
          if (opening("OB") < 0.1)
            warn("ob", "Κλειστό overboard: αντίθλιψη στον εγχυτήρα, δεν θα γίνει κενό.", true);
        }
      } else if (id === "dp") {
        s.dp = s.dp ? 0 : 1;
        say("in", "Αντλία γλυκού: " + (s.dp ? "START" : "STOP"));
        if (s.dp && s.lvl < 3)
          warn("dd", "Εκκίνηση αντλίας γλυκού χωρίς απόσταγμα στο sight glass.", true);
      } else {
        s[id] = s[id] ? 0 : 1;
        say("in", (id === "chem" ? "Chemicals injection" : "Salinometer") + ": " + (s[id] ? "ON" : "OFF"));
      }
      render();
    }
    function simulate(dt) {
      const opening = function (id) { return s.v[id] / 100; };
      const approach = function (target, current, timeConstant) {
        return current + (target - current) * (1 - Math.exp(-dt / timeConstant));
      };
      s.t += dt;
      const ejectorOpening = Math.min(opening("EPin"), opening("OB"));
      s.ejP = approach(
        s.ep && opening("EPin") > 0 ? 0.5 * (0.4 + 0.6 * Math.min(1, opening("EPin") * 2)) : 0,
        s.ejP,
        5
      );
      let targetVacuum = s.ep && opening("EPin") > 0
        ? 0.092 * Math.min(1, ejectorOpening * 2.5) * Math.min(1, s.ejP / 0.4)
        : 0;
      targetVacuum *= Math.max(0, 1 - opening("V4") * 3) * (0.7 + 0.3 * opening("V7"));
      s.vac = approach(targetVacuum, s.vac, targetVacuum > s.vac ? 45 : 25);
      s.fe = s.ep ? ejectorOpening : 0;
      const cooling = Math.min(opening("CWin"), opening("CWout"));
      s.cw = cooling;
      const coolingPressure = 0.12 * opening("CWin") * (1 - 0.45 * opening("CWout"));
      s.feedP = approach(
        opening("V2") > 0 && opening("CWin") > 0
          ? coolingPressure * (0.35 + 0.65 * opening("V2"))
          : 0,
        s.feedP,
        6
      );
      if (s.feedP > 0.02) s.fill = Math.min(1, s.fill + dt / 120);
      const heating = Math.min(opening("Hin"), opening("Hout")) * (1 - 0.7 * opening("BYP"));
      s.fH = heating;
      s.jin = approach(40 + 40 * Math.min(1, heating * 1.5), s.jin, 40);
      const boilingTemperature = 100 - 52 * Math.min(1, s.vac / 0.092);
      const temperatureDifference = Math.max(0, s.jin - boilingTemperature);
      const wet = s.fill > 0.9 && s.feedP > 0.01 ? 1 : 0;
      const efficiency = Math.min(1, cooling / 0.6) * (s.lvl > 51 ? 0.6 : 1);
      const feedFactor = s.feedP >= 0.04 && s.feedP <= 0.065
        ? 1
        : (s.feedP < 0.04 ? Math.max(0.3, s.feedP / 0.04) : 0.85);
      const maxTemperature = 28 + (s.jin - 28) * Math.min(1, heating * 1.5) * 0.9;
      s.te = approach(
        heating > 0.03 ? Math.min(boilingTemperature + 4 * (1 - efficiency), maxTemperature) : 30,
        s.te,
        150
      );
      const boiling = Math.max(0, Math.min(1, (s.te - boilingTemperature + 6) / 6));
      s.rate = approach(
        24 * heating * (temperatureDifference / 32) * efficiency * feedFactor * wet * boiling,
        s.rate,
        90
      );
      const warmup = Math.max(0, Math.min(1, 1 - (s.te - 30) / 18));
      s.jout = approach(
        heating > 0.02
          ? Math.max(35, s.jin - (wet ? 8 * (s.rate / 24) / Math.max(heating, 0.2) + 8 * warmup * Math.min(1, heating * 2) : 2))
          : 40,
        s.jout,
        50
      );
      s.cout = approach(
        28 + (cooling > 0.03 ? Math.min(30, s.rate * 22.4 / (52 * cooling)) : (s.rate > 1 ? 30 : 0)),
        s.cout,
        60
      );
      s.salv = approach(
        s.rate > 0.3
          ? 2 + Math.max(0, 49 - s.te) * 5 + Math.max(0, s.rate - 26) * 2 + Math.max(0, s.feedP - 0.065) * 250
          : 0,
        s.salv,
        40
      );
      s.alarm = !!(s.sal && s.salv > 10);
      const inputRate = s.rate * 1000 / 86400;
      const pumpCapacity = 0.3 * opening("V1");
      s.out = s.dp ? Math.min(pumpCapacity, inputRate + s.lvl / dt) : 0;
      s.lvl = Math.max(0, Math.min(60, s.lvl + (inputRate - s.out) * dt));
      if (!s.alarm) s.meter += s.out * dt;
      const dry = s.dp && opening("V1") > 0 && s.lvl < 0.5 && pumpCapacity > inputRate * 1.05;
      s.dpP = approach(s.dp ? (dry ? 0.08 : 0.30 - 0.16 * opening("V1")) : 0, s.dpP, 3);

      if (opening("Hin") > 0.05 && s.vac < 0.07)
        warn("hv", "Ανοίξατε νερό jacket χωρίς να έχει γίνει κενό. Πρώτα κενό και feed, μετά θερμό νερό.", true);
      if (heating > 0.1 && s.fill < 0.9)
        warn("hd", "Θερμαντήρας χωρίς feed νερό: κίνδυνος υπερθέρμανσης και κρυστάλλωσης αλάτων.", true);
      if (s.rate > 26.4)
        warn("ov", "Υπερπαραγωγή >110%: κίνδυνος αλάτων στους σωλήνες θέρμανσης. Ανοίξτε λίγο το bypass.", true);
      if (s.te > 60 && heating > 0.1)
        warn("hot", "Θερμοκρασία εξάτμισης πάνω από 60 °C: γρήγορη δημιουργία αλάτων. Ελέγξτε το κενό.", true);
      if (cooling < 0.3 && s.rate > 3)
        warn("cw", "Χαμηλή παροχή ψυκτικού στον συμπυκνωτή: ανεβαίνει η θερμοκρασία εξάτμισης.", false);
      if (s.alarm)
        warn("sal", "ΣΥΝΑΓΕΡΜΟΣ ΑΛΑΤΟΤΗΤΑΣ: το απόσταγμα επιστρέφει στον εξατμιστή. Μειώστε το φορτίο ή ελέγξτε feed και κενό.", false);
      if (s.lvl > 51)
        warn("full", "Το sight glass γέμισε: μειώνεται η επιφάνεια του συμπυκνωτή. Ανοίξτε περισσότερο το V1.", false);
      if (dry)
        warn("pd", "Η αντλία γλυκού τραβά αέρα: κλείστε λίγο το V1 (ποτέ ξηρή λειτουργία).", true);
      if (s.ep && opening("EPin") < 0.1)
        warn("dry2", "Η αντλία εγχυτήρα δουλεύει με κλειστή αναρρόφηση (ξηρή λειτουργία): σταμάτησέ την ή άνοιξε την αναρρόφηση.", false);
      if (s.ep && opening("OB") < 0.1 && s.ejP > 0.2)
        warn("ob2", "Κλειστό overboard με αντλία σε λειτουργία.", false);
      const stable = s.rate >= 18 && s.rate <= 22.5 && s.vac >= 0.085 &&
        s.dp && s.dpP >= 0.14 && s.dpP <= 0.22 &&
        s.feedP >= 0.04 && s.feedP <= 0.06 && !s.alarm && s.sal && s.chem;
      s.stable = stable ? s.stable + dt : 0;
    }
    function checkSteps() {
      const opening = function (id) { return s.v[id] / 100; };
      const done = s.done;
      const complete = function (index, condition) {
        if (condition && !done[index]) {
          done[index] = 1;
          say("ok", "✔ " + steps[index]);
        }
      };
      complete(1, opening("CWin") >= 0.5 && opening("CWout") >= 0.5);
      complete(2, s.ep && opening("EPin") >= 0.5 && opening("OB") >= 0.5 && s.ejP >= 0.4);
      complete(3, s.feedP >= 0.04 && s.feedP <= 0.06);
      complete(4, s.chem);
      complete(5, s.vac >= 0.088);
      complete(6, opening("Hin") >= 0.8 && opening("Hout") >= 0.8);
      complete(7, done[6] && s.rate >= 18 && s.rate <= 22.5);
      complete(8, s.sal);
      complete(9, s.lvl >= 3);
      complete(10, s.dp && s.dpP >= 0.14 && s.dpP <= 0.22);
      if (!done[11] && s.stable >= 1800) {
        done[11] = 1;
        say("ok", "🎉 Η εκκίνηση ολοκληρώθηκε. Λάθη χειρισμού: " + s.err);
      }
    }
    function setGaugeRange(element, value, low, high) {
      element.setAttribute("class", value >= low && value <= high ? "fwg-good" : "fwg-bad");
    }
    function render() {
      valves.forEach(function (valve) {
        const value = s.v[valve[0]];
        const graphic = query('[data-valve="' + valve[0] + '"]');
        graphic.setAttribute("fill", value ? "hsl(" + value * 1.2 + ",70%,42%)" : "#c0392b");
        query('[data-opening="' + valve[0] + '"]').textContent = value + "%";
      });
      pipes.forEach(function (pipe, index) {
        const flow = Math.max(0, Math.min(1, pipe[2]()));
        const graphic = query('[data-pipe="' + index + '"]');
        graphic.style.opacity = 0.25 + 0.75 * flow;
        graphic.classList.toggle("fwg-flow", flow > 0.03);
      });
      $("[data-fwg='pc-ep']").setAttribute("fill", s.ep ? "#1f9a52" : "#555");
      $("[data-fwg='pc-dp']").setAttribute("fill", s.dp ? "#1f9a52" : "#555");
      $("[data-fwg='chem-box']").setAttribute("stroke", s.chem ? "#3ecf6e" : "#5c88a8");
      $("[data-fwg='chem-reading']").textContent = s.chem ? "ON" : "OFF";
      $("[data-fwg='sal-box']").setAttribute("stroke", s.sal ? "#3ecf6e" : "#5c88a8");
      $("[data-fwg='heat']").setAttribute("fill", "rgb(" + Math.round(40 + (s.jin - 40) * 3) + ",45,50)");
      $("[data-fwg='evap']").setAttribute("fill", "rgb(27," + Math.round(58 + (s.te - 30) * 1.5) + ",79)");
      $("[data-fwg='sight-glass']").setAttribute("height", s.lvl / 60 * 44);
      $("[data-fwg='sight-glass']").setAttribute("y", 324 - s.lvl / 60 * 44);
      $("[data-fwg='led']").setAttribute("fill", s.alarm ? "#ef5350" : (s.sal ? "#3ecf6e" : "#333"));
      gaugeData.forEach(function (gauge) {
        query('[data-needle="' + gauge[0] + '"]').setAttribute(
          "transform",
          "rotate(" + (-135 + 270 * Math.max(0, Math.min(1, gauge[10]() / gauge[4]))) + ")"
        );
      });
      $("[data-fwg='vacuum']").textContent = "Κενό −" + s.vac.toFixed(3) + " MPa";
      $("[data-fwg='temperature']").textContent = "Θερμ. εξάτμισης " + s.te.toFixed(0) + " °C";
      $("[data-fwg='cooling-in']").textContent = "IN 28 °C";
      $("[data-fwg='cooling-out']").textContent = "OUT " + s.cout.toFixed(0) + " °C";
      $("[data-fwg='jacket-in']").textContent = "IN " + s.jin.toFixed(0) + " °C";
      $("[data-fwg='jacket-out']").textContent = "OUT " + s.jout.toFixed(0) + " °C";
      const setReading = function (id, text, range) {
        const element = query('[data-reading="' + id + '"]');
        element.textContent = text;
        if (range) setGaugeRange(element, range[0], range[1], range[2]);
        else element.removeAttribute("class");
      };
      setReading("t", formatTime(s.t));
      setReading("vac", "−" + s.vac.toFixed(3) + " MPa (" + Math.round(s.vac / 0.1013 * 76) + " cmHgV)");
      setReading("feed", s.feedP.toFixed(3) + " MPa", [s.feedP, 0.04, 0.06]);
      setReading("ejp", s.ejP.toFixed(2) + " MPa", [s.ejP, 0.4, 1]);
      setReading("dpp", s.dpP.toFixed(2) + " MPa", [s.dpP, 0.14, 0.22]);
      setReading("rate", s.rate.toFixed(1), [s.rate, 18, 22.5]);
      setReading("sal", s.sal ? s.salv.toFixed(1) + " ppm" : "OFF", s.sal ? [s.salv, 0, 10] : null);
      setReading("lvl", Math.round(s.lvl / 60 * 100) + "%", [s.lvl, 0, 51]);
      setReading("meter", Math.round(s.meter) + " L");
      setReading("stab", formatTime(s.stable) + " / 30:00");
      setReading("err", s.err);
      const next = s.done.findIndex(function (done, index) { return !done && index < 12; });
      $("[data-fwg='steps']").innerHTML = steps.map(function (text, index) {
        return '<li class="' + (s.done[index] ? "done" : index === next ? "next" : "") + '">' + text + "</li>";
      }).join("");
      $("[data-fwg='log']").innerHTML = logs.map(function (log) {
        return '<div class="' + log[0] + '"><small>' + formatTime(log[2]) + "</small> " + log[1] + "</div>";
      }).join("");
      syncPopup();
    }
    function reset() {
      s = {
        v: {}, ep: 0, dp: 0, chem: 0, sal: 0, vac: 0, ejP: 0,
        feedP: 0, fill: 0, jin: 40, jout: 40, te: 30, cout: 28,
        rate: 0, lvl: 0, meter: 0, salv: 0, dpP: 0, stable: 0,
        t: 0, done: [1], err: 0, w: {}, fe: 0, cw: 0, fH: 0,
        out: 0, alarm: false,
      };
      valves.forEach(function (valve) { s.v[valve[0]] = valve[4]; });
      logs = [];
      say("in", "Έναρξη: όλα κλειστά, bypass ανοιχτό. Ακολουθήστε τη λίστα διαδικασίας.");
      render();
    }
    function syncPopup() {
      if (!currentValve) return;
      $("[data-fwg='range']").step = currentValve === "V1" ? 1 : 5;
      $("[data-fwg='range']").value = s.v[currentValve];
      $("[data-fwg='value']").textContent = s.v[currentValve] + "%";
    }
    function closePopup() {
      currentValve = null;
      $("[data-fwg='popup']").hidden = true;
    }
    function openPopup(id, event) {
      currentValve = id;
      $("[data-fwg='popup-title']").textContent = named[id];
      const popup = $("[data-fwg='popup']");
      popup.hidden = false;
      popup.style.left = Math.max(5, Math.min(event.clientX + 10, innerWidth - 280)) + "px";
      popup.style.top = Math.max(5, Math.min(event.clientY + 10, innerHeight - 130)) + "px";
      syncPopup();
    }

    pipes.forEach(function (pipe, index) {
      $("[data-fwg='pipes']").insertAdjacentHTML(
        "beforeend",
        '<path data-pipe="' + index + '" class="fwg-pipe" d="' + pipe[0] + '" stroke="' + pipe[1] + '"/>'
      );
    });
    const gaugeData = [
      ["feed", "Feed", 390, 372, 0.1, 0.04, 0.06, "M390 355V343", "b", "r", function () { return s.feedP; }],
      ["ejp", "Εγχ. IN", 612, 318, 1, 0.4, 1, "M595 318H560", "t", "r", function () { return s.ejP; }],
      ["dpp", "Αντλ. γλυκού", 150, 305, 0.4, 0.14, 0.22, "M150 323V345", "t", "l", function () { return s.dpP; }],
    ];
    const polar = function (radius, fraction) {
      const angle = (-135 + 270 * fraction) * Math.PI / 180;
      return [radius * Math.sin(angle), -radius * Math.cos(angle)]
        .map(function (value) { return value.toFixed(1); })
        .join(" ");
    };
    gaugeData.forEach(function (gauge) {
      $("[data-fwg='gauges']").insertAdjacentHTML(
        "beforeend",
        '<path d="' + gauge[7] + '" stroke="#8fa6b8" stroke-width="2" fill="none"/>' +
        '<g transform="translate(' + gauge[2] + "," + gauge[3] + ')"><circle r="17" fill="#0e1d29" stroke="#8fa6b8" stroke-width="1.5"/>' +
        '<path d="M' + polar(13, gauge[5] / gauge[4]) + "A13 13 0 " +
        (((gauge[6] - gauge[5]) / gauge[4] * 270 > 180) ? 1 : 0) + " 1 " +
        polar(13, Math.min(1, gauge[6] / gauge[4])) + '" stroke="#3ecf6e" stroke-width="3" fill="none"/>' +
        '<line data-needle="' + gauge[0] + '" y2="-14" stroke="#ef5350" stroke-width="1.6"/><circle r="2" fill="#ccc"/>' +
        '<text y="' + (gauge[8] === "t" ? -22 : 30) + '" text-anchor="middle">' + gauge[1] + "</text>" +
        '<text data-reading="' + gauge[0] + '" x="' + (gauge[9] === "r" ? 22 : -22) +
        '" y="4" text-anchor="' + (gauge[9] === "r" ? "start" : "end") +
        '" class="fwg-gauge-value"></text></g>'
      );
    });
    valves.forEach(function (valve) {
      const id = valve[0];
      const label = valve[5].split("|").map(function (text, index, labels) {
        return '<text x="' + (valve[6] || 0) + '" y="' + (-11 - (labels.length - 1 - index) * 11) +
          '" text-anchor="middle">' + text + "</text>";
      }).join("");
      $("[data-fwg='valves']").insertAdjacentHTML(
        "beforeend",
        '<g data-valve-group="' + id + '" transform="translate(' + valve[2] + "," + valve[3] +
        ')" style="cursor:pointer" tabindex="0" role="button" aria-label="' + valve[1] +
        '"><circle r="16" fill="transparent"/><path data-valve="' + id +
        '" d="M-9-7L9 7V-7L-9 7Z" stroke="#fff" stroke-width=".8"/>' + label +
        '<text data-opening="' + id + '" y="21" text-anchor="middle" style="font-weight:700"></text></g>'
      );
    });
    readings.forEach(function (reading, index) {
      const x = 14 + index % 3 * 228;
      const y = 438 + Math.floor(index / 3) * 18;
      $("[data-fwg='readings']").insertAdjacentHTML(
        "beforeend",
        '<text x="' + x + '" y="' + y + '">' + reading[1] + "</text>" +
        '<text data-reading="' + reading[0] + '" x="' + (x + 216) +
        '" y="' + y + '" text-anchor="end" style="font-weight:700"></text>'
      );
    });

    const pumpNames = {
      ep: "Αντλία εγχυτήρα",
      dp: "Αντλία γλυκού",
      chem: "Chemicals injection",
      sal: "Salinometer",
    };
    [
      ["pump-ep", "ep"],
      ["pump-dp", "dp"],
      ["chemicals", "chem"],
      ["salinometer", "sal"],
    ].forEach(function (control) {
      const element = $("[data-fwg='" + control[0] + "']");
      element.setAttribute("tabindex", "0");
      element.setAttribute("role", "button");
      element.setAttribute("aria-label", pumpNames[control[1]]);
      element.addEventListener("click", function () { pump(control[1]); });
      element.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          pump(control[1]);
        }
      });
    });
    $("[data-fwg='speed']").addEventListener("change", function (event) {
      speed = Number(event.target.value);
    });
    $("[data-fwg='reset']").addEventListener("click", reset);
    $("[data-fwg='hint']").addEventListener("click", function () {
      const next = s.done.findIndex(function (done) { return !done; });
      say("wa", "Επόμενο βήμα: " + (next < 0 ? "ολοκληρώθηκε" : steps[next]));
      render();
    });
    $("[data-fwg='range']").addEventListener("input", function (event) {
      setValve(currentValve, Number(event.target.value));
      render();
    });
    $("[data-fwg='minus']").addEventListener("click", function () {
      const step = currentValve === "V1" ? 1 : 5;
      setValve(currentValve, Math.max(0, s.v[currentValve] - step));
      render();
    });
    $("[data-fwg='plus']").addEventListener("click", function () {
      const step = currentValve === "V1" ? 1 : 5;
      setValve(currentValve, Math.min(100, s.v[currentValve] + step));
      render();
    });
    $("[data-fwg='close']").addEventListener("click", closePopup);
    container.addEventListener("click", function (event) {
      const group = event.target.closest("[data-valve-group]");
      if (!group || !container.contains(group)) return;
      openPopup(group.getAttribute("data-valve-group"), event);
    });
    container.addEventListener("keydown", function (event) {
      const group = event.target.closest("[data-valve-group]");
      if (!group || !container.contains(group) || (event.key !== "Enter" && event.key !== " ")) return;
      event.preventDefault();
      const bounds = group.getBoundingClientRect();
      openPopup(group.getAttribute("data-valve-group"), {
        clientX: bounds.left,
        clientY: bounds.bottom,
      });
    });
    const escapeHandler = function (event) {
      if (event.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", escapeHandler);
    reset();
    timer = window.setInterval(function () {
      if (speed) {
        simulate(0.25 * speed);
        checkSteps();
        render();
      }
    }, 250);

    return function () {
      window.clearInterval(timer);
      document.removeEventListener("keydown", escapeHandler);
    };
  };
})();
