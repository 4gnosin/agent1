/**
 * Διαδραστικός Ψυχρομετρικός Χάρτης (Interactive Psychrometric Chart)
 * Thermodynamic Engine & Dynamic Chart Renderer
 * Standard Atmospheric Pressure: Patm = 101.325 kPa
 */

(function () {
  'use strict';

  // --- ΘΕΡΜΟΔΥΝΑΜΙΚΕΣ ΣΤΑΘΕΡΕΣ ---
  const P_ATM = 101.325; // kPa (Standard Atmosphere)
  const R_DA = 0.287058; // kJ/(kg·K) - Ειδική σταθερά ξηρού αέρα
  const T_MIN = -10;     // °C
  const T_MAX = 50;      // °C
  const W_MAX = 0.030;   // kg/kg d.a. (30 g/kg)

  // Chart viewport bounds
  const VIEW = {
    xMin: 70,
    xMax: 920,
    yMin: 45,
    yMax: 580,
    w: 850,
    h: 535
  };

  // State
  const state = {
    mode: 'add', // 'add' | 'connect'
    points: [],
    processes: [],
    selectedPointId: null,
    connectSourceId: null,
    dragPoint: null,
    flowRate: 1000, // m3/h default
    flowUnit: 'm3h',
    layers: {
      comfort: true,
      enthalpy: true,
      wetbulb: true,
      volume: true,
      crosshair: true
    }
  };

  // --- ΨΥΧΡΟΜΕΤΡΙΚΕΣ ΣΥΝΑΡΤΗΣΕΙΣ (ASHRAE / Magnus-Tetens) ---

  /**
   * Πίεση κορεσμού υδρατμών Pws(T) σε kPa
   * Magnus-Tetens formula (ακρίβεια για -20°C έως +50°C)
   */
  function calcPws(T) {
    return 0.6112 * Math.exp((17.67 * T) / (T + 243.5));
  }

  /**
   * Ειδική υγρασία κορεσμού ws(T) σε kg/kg d.a.
   */
  function calcWs(T) {
    const Pws = calcPws(T);
    return (0.62198 * Pws) / (P_ATM - Pws);
  }

  /**
   * Ειδική υγρασία w(T, RH) σε kg/kg d.a. (RH: 0..100)
   */
  function calcW(T, rhPercent) {
    const phi = Math.max(0.001, Math.min(1.0, rhPercent / 100));
    const Pws = calcPws(T);
    const Pv = phi * Pws;
    return (0.62198 * Pv) / (P_ATM - Pv);
  }

  /**
   * Σχετική υγρασία RH(T, w) σε %
   */
  function calcRH(T, w) {
    const Pws = calcPws(T);
    const Pv = (w * P_ATM) / (0.62198 + w);
    const phi = (Pv / Pws) * 100;
    return Math.max(0, Math.min(100, phi));
  }

  /**
   * Ειδική ενθαλπία h(T, w) σε kJ/kg d.a.
   * h = 1.006*T + w*(2501 + 1.86*T)
   */
  function calcEnthalpy(T, w) {
    return 1.006 * T + w * (2501 + 1.86 * T);
  }

  /**
   * Ειδικός όγκος v(T, w) σε m³/kg d.a.
   */
  function calcVolume(T, w) {
    const T_kelvin = T + 273.15;
    return (R_DA * T_kelvin * (1 + 1.6078 * w)) / P_ATM;
  }

  /**
   * Θερμοκρασία σημείου δρόσου Tdp(w) σε °C
   */
  function calcTdp(w) {
    const Pv = (w * P_ATM) / (0.62198 + w);
    const alpha = Math.log(Math.max(0.001, Pv) / 0.6112);
    return (243.5 * alpha) / (17.67 - alpha);
  }

  /**
   * Θερμοκρασία υγρού θερμομέτρου Twb(T, w) σε °C (Επίλυση Carrier με bisection)
   */
  function calcTwb(T, w) {
    const tdp = calcTdp(w);
    if (Math.abs(T - tdp) < 0.1) return T;

    let low = tdp;
    let high = T;
    let twb = (low + high) / 2;

    for (let i = 0; i < 16; i++) {
      twb = (low + high) / 2;
      const pws_wb = calcPws(twb);
      const ws_wb = (0.62198 * pws_wb) / (P_ATM - pws_wb);
      const w_est = ((2501 - 2.381 * twb) * ws_wb - 1.006 * (T - twb)) /
                    (2501 + 1.805 * T - 4.186 * twb);

      if (w_est > w) {
        high = twb;
      } else {
        low = twb;
      }
    }
    return twb;
  }

  /**
   * Πλήρης υπολογισμός όλων των ψυχρομετρικών παραμέτρων από (T, w)
   */
  function calcFullProperties(T, w) {
    const ws = calcWs(T);
    const w_clamped = Math.min(w, ws);
    const rh = calcRH(T, w_clamped);
    const h = calcEnthalpy(T, w_clamped);
    const v = calcVolume(T, w_clamped);
    const tdp = calcTdp(w_clamped);
    const twb = calcTwb(T, w_clamped);
    const pv = (w_clamped * P_ATM) / (0.62198 + w_clamped);

    return {
      t: T,
      w: w_clamped,
      w_g: w_clamped * 1000, // g/kg
      rh: rh,
      h: h,
      v: v,
      tdp: tdp,
      twb: twb,
      pv: pv
    };
  }

  // --- ΜΕΤΑΤΡΟΠΕΣ ΣΥΝΤΕΤΑΓΜΕΝΩΝ (Screen <-> Data) ---

  function toScreen(T, w) {
    const x = VIEW.xMin + ((T - T_MIN) / (T_MAX - T_MIN)) * VIEW.w;
    const y = VIEW.yMax - (w / W_MAX) * VIEW.h;
    return { x, y };
  }

  function toData(x, y) {
    const T = T_MIN + ((x - VIEW.xMin) / VIEW.w) * (T_MAX - T_MIN);
    const w = ((VIEW.yMax - y) / VIEW.h) * W_MAX;
    return {
      T: Math.max(T_MIN, Math.min(T_MAX, T)),
      w: Math.max(0, Math.min(W_MAX, w))
    };
  }

  // --- ΣΧΕΔΙΑΣΗ ΣΤΑΤΙΚΩΝ ΕΠΙΠΕΔΩΝ ΧΑΡΤΗ (SVG) ---

  function renderChartGrid() {
    const layerGrid = document.getElementById('layer-grid');
    const layerAxes = document.getElementById('layer-axes');
    const layerSat = document.getElementById('layer-saturation');
    const layerRh = document.getElementById('layer-rh');
    const layerEnthalpy = document.getElementById('layer-enthalpy');
    const layerWetbulb = document.getElementById('layer-wetbulb');
    const layerVolume = document.getElementById('layer-volume');
    const layerComfort = document.getElementById('layer-comfort');

    // 1. Grid & Axes
    let gridHtml = '';
    let axesHtml = '';

    // Κάθετες γραμμές θερμοκρασίας (ανά 5°C)
    for (let T = T_MIN; T <= T_MAX; T += 5) {
      const p1 = toScreen(T, 0);
      const ws = calcWs(T);
      const w_top = Math.min(W_MAX, ws);
      const p2 = toScreen(T, w_top);

      gridHtml += `<line x1="${p1.x}" y1="${VIEW.yMax}" x2="${p2.x}" y2="${p2.y}" stroke="var(--grid-line)" stroke-width="1"/>`;
      axesHtml += `<line x1="${p1.x}" y1="${VIEW.yMax}" x2="${p1.x}" y2="${VIEW.yMax + 6}" stroke="var(--grid-text)" stroke-width="1.5"/>`;
      axesHtml += `<text x="${p1.x}" y="${VIEW.yMax + 20}" text-anchor="middle" fill="var(--grid-text)" font-size="11" font-family="'JetBrains Mono', monospace">${T}</text>`;
    }

    // Οριζόντιες γραμμές ειδικής υγρασίας w (ανά 2 g/kg)
    for (let wg = 0; wg <= 30; wg += 2) {
      const w = wg / 1000;
      const pRight = toScreen(T_MAX, w);
      
      // Βρίσκουμε πού τέμνει την καμπύλη κορεσμού
      let tSat = T_MIN;
      for (let t = T_MIN; t <= T_MAX; t += 0.5) {
        if (calcWs(t) >= w) {
          tSat = t;
          break;
        }
      }
      const pSat = toScreen(tSat, w);

      gridHtml += `<line x1="${pSat.x}" y1="${pRight.y}" x2="${pRight.x}" y2="${pRight.y}" stroke="var(--grid-line)" stroke-width="1"/>`;
      axesHtml += `<line x1="${pRight.x}" y1="${pRight.y}" x2="${pRight.x + 6}" y2="${pRight.y}" stroke="var(--grid-text)" stroke-width="1.5"/>`;
      axesHtml += `<text x="${pRight.x + 10}" y="${pRight.y + 4}" fill="var(--grid-text)" font-size="11" font-family="'JetBrains Mono', monospace">${wg}</text>`;
    }

    // Άξονες και τίτλοι
    axesHtml += `<line x1="${VIEW.xMin}" y1="${VIEW.yMax}" x2="${VIEW.xMax}" y2="${VIEW.yMax}" stroke="var(--grid-text)" stroke-width="2"/>`;
    axesHtml += `<line x1="${VIEW.xMax}" y1="${VIEW.yMin}" x2="${VIEW.xMax}" y2="${VIEW.yMax}" stroke="var(--grid-text)" stroke-width="2"/>`;
    axesHtml += `<text x="${(VIEW.xMin + VIEW.xMax) / 2}" y="${VIEW.yMax + 44}" text-anchor="middle" fill="var(--text-main)" font-size="13" font-weight="600">Ξηρή Θερμοκρασία Tdb (°C)</text>`;
    axesHtml += `<text x="${VIEW.xMax + 55}" y="${(VIEW.yMin + VIEW.yMax) / 2}" text-anchor="middle" transform="rotate(90, ${VIEW.xMax + 55}, ${(VIEW.yMin + VIEW.yMax) / 2})" fill="var(--text-main)" font-size="13" font-weight="600">Ειδική Υγρασία w (g/kg ξηρού αέρα)</text>`;

    layerGrid.innerHTML = gridHtml;
    layerAxes.innerHTML = axesHtml;

    // 2. Καμπύλες Σχετικής Υγρασίας RH (10% έως 100%)
    let rhHtml = '';
    let satHtml = '';

    for (let rh = 10; rh <= 100; rh += 10) {
      let pathD = '';
      let isFirst = true;
      let labelPoint = null;

      for (let T = T_MIN; T <= T_MAX; T += 0.5) {
        const w = calcW(T, rh);
        if (w > W_MAX) {
          if (!labelPoint && isFirst === false) {
            labelPoint = toScreen(T - 1, calcW(T - 1, rh));
          }
          break;
        }
        const pt = toScreen(T, w);
        if (isFirst) {
          pathD += `M ${pt.x} ${pt.y}`;
          isFirst = false;
        } else {
          pathD += ` L ${pt.x} ${pt.y}`;
        }

        // Label position around T = 30°C
        if (T >= 28 && !labelPoint) {
          labelPoint = pt;
        }
      }

      if (rh === 100) {
        satHtml = `<path d="${pathD}" fill="none" stroke="var(--sat-line)" stroke-width="2.5" />`;
        satHtml += `<text x="${labelPoint ? labelPoint.x - 35 : 180}" y="${labelPoint ? labelPoint.y - 12 : 120}" fill="var(--sat-line)" font-size="12" font-weight="700">100% Κορεσμός</text>`;
      } else {
        rhHtml += `<path d="${pathD}" fill="none" stroke="var(--rh-line)" stroke-width="1.2" opacity="0.85"/>`;
        if (labelPoint) {
          rhHtml += `<text x="${labelPoint.x + 4}" y="${labelPoint.y - 4}" fill="var(--rh-text)" font-size="10" font-family="'JetBrains Mono', monospace">${rh}%</text>`;
        }
      }
    }
    layerRh.innerHTML = rhHtml;
    layerSat.innerHTML = satHtml;

    // 3. Ισοενθαλπικές γραμμές h (10 έως 120 kJ/kg)
    let hHtml = '';
    for (let h = 10; h <= 120; h += 10) {
      // Find starting point on saturation curve: h(T, ws(T)) = h
      let tSat = T_MIN;
      for (let t = T_MIN; t <= T_MAX; t += 0.1) {
        if (calcEnthalpy(t, calcWs(t)) >= h) {
          tSat = t;
          break;
        }
      }
      const wSat = calcWs(tSat);
      if (wSat > W_MAX) continue;

      const p1 = toScreen(tSat, wSat);
      // Ending point at w = 0 -> T = h / 1.006
      const tDry = h / 1.006;
      const p2 = toScreen(Math.min(T_MAX + 5, tDry), 0);

      hHtml += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="var(--enthalpy-line)" stroke-width="1" stroke-dasharray="4 2" opacity="0.6"/>`;
      hHtml += `<text x="${p1.x - 6}" y="${p1.y - 4}" text-anchor="end" fill="var(--enthalpy-line)" font-size="9" font-family="'JetBrains Mono', monospace">${h}</text>`;
    }
    layerEnthalpy.innerHTML = hHtml;

    // 4. Γραμμές Υγρού Θερμομέτρου Twb (0 έως 35°C)
    let twbHtml = '';
    for (let twb = 0; twb <= 35; twb += 5) {
      const wSat = calcWs(twb);
      if (wSat > W_MAX) continue;
      const p1 = toScreen(twb, wSat);
      
      let pathD = `M ${p1.x} ${p1.y}`;
      for (let t = twb + 1; t <= T_MAX; t += 1) {
        const pws_wb = calcPws(twb);
        const ws_wb = (0.62198 * pws_wb) / (P_ATM - pws_wb);
        const w_est = ((2501 - 2.381 * twb) * ws_wb - 1.006 * (t - twb)) /
                      (2501 + 1.805 * t - 4.186 * twb);
        if (w_est < 0) break;
        const pt = toScreen(t, w_est);
        pathD += ` L ${pt.x} ${pt.y}`;
      }

      twbHtml += `<path d="${pathD}" fill="none" stroke="var(--wetbulb-line)" stroke-width="1" stroke-dasharray="6 3" opacity="0.75"/>`;
      twbHtml += `<text x="${p1.x - 4}" y="${p1.y + 12}" fill="var(--wetbulb-line)" font-size="9" font-family="'JetBrains Mono', monospace">${twb}°C</text>`;
    }
    layerWetbulb.innerHTML = twbHtml;

    // 5. Γραμμές Ειδικού Όγκου v (0.78 έως 0.94 m3/kg)
    let vHtml = '';
    for (let v = 0.78; v <= 0.94; v += 0.02) {
      // Line from w = 0 to Saturation
      const tDry = (v * P_ATM) / R_DA - 273.15;
      const p1 = toScreen(tDry, 0);

      // Find intersection with saturation curve
      let tSat = tDry;
      for (let t = tDry; t >= T_MIN; t -= 0.5) {
        const ws = calcWs(t);
        const v_est = calcVolume(t, ws);
        if (v_est <= v) {
          tSat = t;
          break;
        }
      }
      const p2 = toScreen(tSat, Math.min(W_MAX, calcWs(tSat)));

      vHtml += `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="var(--volume-line)" stroke-width="1" opacity="0.65"/>`;
      if (tDry <= T_MAX && tDry >= T_MIN) {
        vHtml += `<text x="${p1.x}" y="${p1.y - 8}" text-anchor="middle" fill="var(--volume-line)" font-size="9" font-family="'JetBrains Mono', monospace">${v.toFixed(2)}</text>`;
      }
    }
    layerVolume.innerHTML = vHtml;

    // 6. Ζώνη Άνεσης ASHRAE 55 (Comfort Zone)
    // Summer: 23°C - 27°C, 30% - 60% RH | Winter: 20°C - 24°C, 30% - 60% RH
    const c1 = toScreen(20, calcW(20, 30));
    const c2 = toScreen(27, calcW(27, 30));
    const c3 = toScreen(27, calcW(27, 60));
    const c4 = toScreen(20, calcW(20, 60));

    layerComfort.innerHTML = `
      <polygon points="${c1.x},${c1.y} ${c2.x},${c2.y} ${c3.x},${c3.y} ${c4.x},${c4.y}" 
               fill="var(--comfort-fill)" stroke="var(--comfort-stroke)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="${(c1.x + c2.x) / 2}" y="${(c1.y + c3.y) / 2}" fill="var(--comfort-stroke)" font-size="11" font-weight="600" text-anchor="middle">Ζώνη Άνεσης</text>
    `;
  }

  // --- ΣΧΕΔΙΑΣΗ ΔΥΝΑΜΙΚΩΝ ΣΗΜΕΙΩΝ ΚΑΙ ΜΕΤΑΒΟΛΩΝ ---

  function updateDynamicLayers() {
    const layerPoints = document.getElementById('layer-points');
    const layerProcesses = document.getElementById('layer-processes');

    // 1. Σχεδίαση Μεταβολών (Processes)
    let procHtml = '';
    state.processes.forEach((proc, idx) => {
      const pFrom = state.points.find(p => p.id === proc.fromId);
      const pTo = state.points.find(p => p.id === proc.toId);
      if (!pFrom || !pTo) return;

      const sFrom = toScreen(pFrom.t, pFrom.w);
      const sTo = toScreen(pTo.t, pTo.w);

      procHtml += `
        <line x1="${sFrom.x}" y1="${sFrom.y}" x2="${sTo.x}" y2="${sTo.y}" 
              stroke="var(--process-line)" stroke-width="3" marker-end="url(#arrowhead)"/>
        <circle cx="${(sFrom.x + sTo.x) / 2}" cy="${(sFrom.y + sTo.y) / 2}" r="10" fill="var(--bg-card)" stroke="var(--process-line)" stroke-width="1.5"/>
        <text x="${(sFrom.x + sTo.x) / 2}" y="${(sFrom.y + sTo.y) / 2 + 4}" fill="var(--process-line)" font-size="10" font-weight="700" text-anchor="middle">${idx + 1}</text>
      `;
    });
    layerProcesses.innerHTML = procHtml;

    // 2. Σχεδίαση Σημείων (Points)
    let ptsHtml = '';
    state.points.forEach((pt) => {
      const s = toScreen(pt.t, pt.w);
      const isSelected = pt.id === state.selectedPointId;
      const isConnectSrc = pt.id === state.connectSourceId;

      ptsHtml += `
        <g class="chart-point" data-id="${pt.id}" style="cursor: move;">
          <circle cx="${s.x}" cy="${s.y}" r="8" fill="${pt.color || 'var(--point-fill)'}" 
                  stroke="${isSelected || isConnectSrc ? 'var(--point-active)' : 'var(--point-stroke)'}" 
                  stroke-width="${isSelected || isConnectSrc ? 3 : 2}" 
                  filter="url(#glow)"/>
          <text x="${s.x + 12}" y="${s.y - 8}" fill="var(--text-main)" font-size="12" font-weight="700" style="pointer-events:none;">
            ${pt.name}
          </text>
        </g>
      `;
    });
    layerPoints.innerHTML = ptsHtml;

    // Ενημέρωση λίστας στο sidebar
    renderSidebarPoints();
    renderSidebarProcesses();
  }

  // --- SIDEBAR RENDERING ---

  function renderSidebarPoints() {
    const list = document.getElementById('points-list');
    const countBadge = document.getElementById('points-count');
    countBadge.textContent = `${state.points.length} σημεί${state.points.length === 1 ? 'ο' : 'α'}`;

    if (state.points.length === 0) {
      list.innerHTML = '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:12px 0;">Δεν υπάρχουν σημεία ακόμα.</div>';
      return;
    }

    let html = '';
    state.points.forEach((pt) => {
      const isSel = pt.id === state.selectedPointId;
      html += `
        <div class="point-card ${isSel ? 'active' : ''}" data-id="${pt.id}">
          <div class="point-card-header">
            <span class="point-title">
              <span class="point-color-dot" style="background:${pt.color || 'var(--point-fill)'}"></span>
              ${pt.name}
            </span>
            <button class="btn-card-del" data-del-id="${pt.id}" title="Διαγραφή">✕</button>
          </div>
          <div class="point-props-grid">
            <div>Tdb: <b>${pt.t.toFixed(1)}</b> °C</div>
            <div>RH: <b>${pt.rh.toFixed(1)}</b> %</div>
            <div>w: <b>${pt.w_g.toFixed(1)}</b> g/kg</div>
            <div>h: <b>${pt.h.toFixed(1)}</b> kJ/kg</div>
            <div>Twb: <b>${pt.twb.toFixed(1)}</b> °C</div>
            <div>Tdp: <b>${pt.tdp.toFixed(1)}</b> °C</div>
            <div>v: <b>${pt.v.toFixed(3)}</b> m³/kg</div>
            <div>Pv: <b>${pt.pv.toFixed(2)}</b> kPa</div>
          </div>
        </div>
      `;
    });
    list.innerHTML = html;

    // Attach click listeners
    list.querySelectorAll('.point-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.dataset.delId) return;
        selectPoint(card.dataset.id);
      });
    });

    list.querySelectorAll('[data-del-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        deletePoint(btn.dataset.delId);
      });
    });
  }

  function renderSidebarProcesses() {
    const list = document.getElementById('processes-list');
    const countBadge = document.getElementById('processes-count');
    countBadge.textContent = `${state.processes.length} μεταβολ${state.processes.length === 1 ? 'ή' : 'ές'}`;

    if (state.processes.length === 0) {
      list.innerHTML = '<div style="color:var(--text-muted); font-size:0.8rem; text-align:center; padding:12px 0;">Δεν έχουν οριστεί μεταβολές. Πατήστε "Σύνδεση Μεταβολής" και επιλέξτε δύο σημεία.</div>';
      return;
    }

    // Υπολογισμός παροχής μάζας ξηρού αέρα m_da (kg/s)
    let m_da = 0;
    if (state.flowUnit === 'kgs') {
      m_da = state.flowRate;
    } else {
      // m3/h -> kg/s χρησιμοποιώντας μέσο ειδικό όγκο v ≈ 0.85 m3/kg
      m_da = (state.flowRate / 3600) / 0.85;
    }

    let html = '';
    state.processes.forEach((proc, idx) => {
      const p1 = state.points.find(p => p.id === proc.fromId);
      const p2 = state.points.find(p => p.id === proc.toId);
      if (!p1 || !p2) return;

      const dT = p2.t - p1.t;
      const dw = p2.w - p1.w; // kg/kg
      const dw_g = p2.w_g - p1.w_g; // g/kg
      const dh = p2.h - p1.h; // kJ/kg

      // Θερμικά Φορτία (kW)
      const Q_total = m_da * dh;
      const Q_sensible = m_da * 1.006 * dT;
      const Q_latent = Q_total - Q_sensible;
      const shr = Q_total !== 0 ? Math.abs(Q_sensible / Q_total) : 1;
      const waterRate = m_da * dw * 3600; // kg νερού / ώρα (ή L/h)

      // Ανίχνευση τύπου μεταβολής
      let typeLabel = 'Γενική Μεταβολή';
      if (Math.abs(dw) < 0.0002) {
        typeLabel = dT > 0 ? 'Αισθητή Θέρμανση' : 'Αισθητή Ψύξη';
      } else if (dT < 0 && dw < 0) {
        typeLabel = 'Ψύξη & Αφύγρανση';
      } else if (dT > 0 && dw > 0) {
        typeLabel = 'Θέρμανση & Ύγρανση';
      } else if (Math.abs(dh) < 1.0 && dw > 0) {
        typeLabel = 'Αδιαβατική Ύγρανση (h = const)';
      }

      html += `
        <div class="process-card">
          <div class="process-card-header">
            <span class="process-title">${idx + 1}. ${p1.name} → ${p2.name}</span>
            <span class="process-type-tag">${typeLabel}</span>
            <button class="btn-card-del" data-del-proc="${proc.id}" title="Διαγραφή Μεταβολής">✕</button>
          </div>
          <div class="process-data-grid">
            <div>ΔT: <b>${dT > 0 ? '+' : ''}${dT.toFixed(1)}</b> °C</div>
            <div>Δw: <b>${dw_g > 0 ? '+' : ''}${dw_g.toFixed(2)}</b> g/kg</div>
            <div>Δh: <b>${dh > 0 ? '+' : ''}${dh.toFixed(1)}</b> kJ/kg</div>
            <div>SHR: <b>${shr.toFixed(2)}</b></div>
            <div class="process-power-highlight">
              <span>Ολική Ισχύς Q:</span>
              <b>${Math.abs(Q_total).toFixed(2)} kW</b>
            </div>
            <div style="grid-column: span 2; display:flex; justify-content:space-between; font-size:0.72rem;">
              <span>Αισθητή: <b>${Q_sensible.toFixed(2)} kW</b></span>
              <span>Λανθάνουσα: <b>${Q_latent.toFixed(2)} kW</b></span>
              <span>Νερό: <b>${Math.abs(waterRate).toFixed(2)} kg/h</b></span>
            </div>
          </div>
        </div>
      `;
    });
    list.innerHTML = html;

    list.querySelectorAll('[data-del-proc]').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteProcess(btn.dataset.delProc);
      });
    });
  }

  // --- ACTIONS ---

  function addPoint(t, rhPercent, name, color) {
    const ws = calcWs(t);
    const w = calcW(t, rhPercent);
    const fullProps = calcFullProperties(t, Math.min(w, ws));

    const id = 'pt_' + Math.random().toString(36).substr(2, 9);
    const ptName = name || `Σημείο ${state.points.length + 1}`;
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'];
    const ptColor = color || colors[state.points.length % colors.length];

    state.points.push({
      id: id,
      name: ptName,
      color: ptColor,
      ...fullProps
    });

    state.selectedPointId = id;
    updateDynamicLayers();
    return id;
  }

  function updatePointPosition(id, T, w) {
    const pt = state.points.find(p => p.id === id);
    if (!pt) return;
    const ws = calcWs(T);
    const w_clamped = Math.max(0, Math.min(W_MAX, Math.min(w, ws)));
    const fullProps = calcFullProperties(T, w_clamped);
    Object.assign(pt, fullProps);
    updateDynamicLayers();
  }

  function selectPoint(id) {
    state.selectedPointId = id;
    updateDynamicLayers();
  }

  function deletePoint(id) {
    state.points = state.points.filter(p => p.id !== id);
    state.processes = state.processes.filter(p => p.fromId !== id && p.toId !== id);
    if (state.selectedPointId === id) state.selectedPointId = null;
    if (state.connectSourceId === id) state.connectSourceId = null;
    updateDynamicLayers();
  }

  function addProcess(fromId, toId) {
    if (fromId === toId) return;
    const exists = state.processes.some(p => (p.fromId === fromId && p.toId === toId));
    if (exists) return;

    state.processes.push({
      id: 'proc_' + Math.random().toString(36).substr(2, 9),
      fromId: fromId,
      toId: toId
    });
    updateDynamicLayers();
  }

  function deleteProcess(id) {
    state.processes = state.processes.filter(p => p.id !== id);
    updateDynamicLayers();
  }

  function clearAll() {
    state.points = [];
    state.processes = [];
    state.selectedPointId = null;
    state.connectSourceId = null;
    updateDynamicLayers();
  }

  // --- PRESET SCENARIOS ---

  function loadPreset(presetKey) {
    clearAll();
    if (presetKey === 'summer-ac') {
      // 1. Εξωτερικός Αέρας (35°C, 45% RH)
      const p1 = addPoint(35, 45, '1. Εξωτερικός (OA)', '#ef4444');
      // 2. Μετά το στοιχείο ψύξης & αφύγρανσης (12°C, 95% RH)
      const p2 = addPoint(12, 95, '2. Μετά Ψυκτικό', '#06b6d4');
      // 3. Προσαγωγή στο χώρο (17°C, 70% RH)
      const p3 = addPoint(17, 70, '3. Προσαγωγή (SA)', '#3b82f6');
      // 4. Συνθήκες Χώρου (24°C, 50% RH)
      const p4 = addPoint(24, 50, '4. Χώρος (RA)', '#10b981');
      addProcess(p1, p2);
      addProcess(p2, p3);
      addProcess(p3, p4);
    } else if (presetKey === 'winter-ac') {
      // 1. Χειμερινός Εξωτερικός (4°C, 80% RH)
      const p1 = addPoint(4, 80, '1. Εξωτερικός', '#3b82f6');
      // 2. Προθέρμανση (20°C, w=const)
      const p2 = addPoint(20, 23, '2. Προθέρμανση', '#f59e0b');
      // 3. Ύγρανση με ατμό (21°C, 50% RH)
      const p3 = addPoint(21, 50, '3. Ύγρανση Χώρου', '#10b981');
      addProcess(p1, p2);
      addProcess(p2, p3);
    } else if (presetKey === 'adiabatic-mixing') {
      // 1. Νωπός αέρας (34°C, 40% RH)
      const p1 = addPoint(34, 40, '1. Νωπός Αέρας', '#ef4444');
      // 2. Αέρας ανακυκλοφορίας (24°C, 50% RH)
      const p2 = addPoint(24, 50, '2. Ανακυκλοφορία', '#3b82f6');
      // 3. Μείγμα (1/3 νωπός, 2/3 ανακυκλοφορία) -> T = 27.3°C
      const p3 = addPoint(27.3, 47, '3. Μείγμα (Mix)', '#8b5cf6');
      addProcess(p1, p3);
      addProcess(p2, p3);
    } else if (presetKey === 'evap-cooling') {
      // Εξατμιστική ψύξη (Desert cooler): 38°C, 20% RH -> Twb = 20.8°C -> ακολουθεί Twb=const
      const p1 = addPoint(38, 20, '1. Θερμός Ξηρός', '#ef4444');
      const p2 = addPoint(24, 75, '2. Μετά Ψεκαστήρα', '#06b6d4');
      addProcess(p1, p2);
    } else if (presetKey === 'sensible-heat') {
      const p1 = addPoint(15, 60, '1. Είσοδος', '#3b82f6');
      const p2 = addPoint(32, 23, '2. Έξοδος', '#ef4444');
      addProcess(p1, p2);
    }
  }

  // --- SVG INTERACTION (DRAG & CLICK) ---

  function initInteractions() {
    const svg = document.getElementById('chart-svg');
    const hoverBadge = document.getElementById('hover-badge');

    // Crosshair lines
    const layerCrosshair = document.getElementById('layer-crosshair');
    layerCrosshair.innerHTML = `
      <line id="ch-v" x1="0" y1="${VIEW.yMin}" x2="0" y2="${VIEW.yMax}" stroke="var(--border-focus)" stroke-width="1" stroke-dasharray="3 3" style="display:none;"/>
      <line id="ch-h" x1="${VIEW.xMin}" y1="0" x2="${VIEW.xMax}" y2="0" stroke="var(--border-focus)" stroke-width="1" stroke-dasharray="3 3" style="display:none;"/>
    `;
    const chV = document.getElementById('ch-v');
    const chH = document.getElementById('ch-h');

    function getSvgCoordinates(evt) {
      const rect = svg.getBoundingClientRect();
      const x = ((evt.clientX - rect.left) / rect.width) * 1000;
      const y = ((evt.clientY - rect.top) / rect.height) * 650;
      return { x, y };
    }

    // Mouse Move (Hover & Drag)
    svg.addEventListener('mousemove', (e) => {
      const { x, y } = getSvgCoordinates(e);

      // Handle Point Dragging
      if (state.dragPoint) {
        const data = toData(x, y);
        updatePointPosition(state.dragPoint.id, data.T, data.w);
        return;
      }

      // Check if inside plot boundaries
      if (x >= VIEW.xMin && x <= VIEW.xMax && y >= VIEW.yMin && y <= VIEW.yMax) {
        const data = toData(x, y);
        const ws = calcWs(data.T);

        // Update crosshair
        if (state.layers.crosshair) {
          chV.setAttribute('x1', x);
          chV.setAttribute('x2', x);
          chV.style.display = 'block';

          chH.setAttribute('y1', y);
          chH.setAttribute('y2', y);
          chH.style.display = 'block';
        }

        // Calculate live psychrometric data for mouse position
        const w_clamped = Math.min(data.w, ws);
        const props = calcFullProperties(data.T, w_clamped);

        // Update bottom cursor bar
        document.getElementById('cur-tdb').textContent = props.t.toFixed(1);
        document.getElementById('cur-rh').textContent = props.rh.toFixed(1);
        document.getElementById('cur-w').textContent = props.w_g.toFixed(2);
        document.getElementById('cur-h').textContent = props.h.toFixed(1);
        document.getElementById('cur-twb').textContent = props.twb.toFixed(1);
        document.getElementById('cur-tdp').textContent = props.tdp.toFixed(1);
        document.getElementById('cur-v').textContent = props.v.toFixed(3);

        // Update floating badge
        hoverBadge.style.display = 'block';
        hoverBadge.style.left = `${(x / 1000) * 100}%`;
        hoverBadge.style.top = `${(y / 650) * 100}%`;
        hoverBadge.innerHTML = `T: <b>${props.t.toFixed(1)}°C</b> | RH: <b>${props.rh.toFixed(1)}%</b> | w: <b>${props.w_g.toFixed(1)}g</b>`;
      } else {
        chV.style.display = 'none';
        chH.style.display = 'none';
        hoverBadge.style.display = 'none';
      }
    });

    svg.addEventListener('mouseleave', () => {
      chV.style.display = 'none';
      chH.style.display = 'none';
      hoverBadge.style.display = 'none';
    });

    // Mouse Down (Click to Add / Select / Drag)
    svg.addEventListener('mousedown', (e) => {
      const ptTarget = e.target.closest('.chart-point');
      if (ptTarget) {
        const ptId = ptTarget.dataset.id;
        if (state.mode === 'connect') {
          if (!state.connectSourceId) {
            state.connectSourceId = ptId;
            updateDynamicLayers();
          } else {
            addProcess(state.connectSourceId, ptId);
            state.connectSourceId = null;
            updateDynamicLayers();
          }
        } else {
          state.dragPoint = state.points.find(p => p.id === ptId);
          selectPoint(ptId);
        }
        return;
      }

      // If clicked on chart area in 'add' mode
      if (state.mode === 'add') {
        const { x, y } = getSvgCoordinates(e);
        if (x >= VIEW.xMin && x <= VIEW.xMax && y >= VIEW.yMin && y <= VIEW.yMax) {
          const data = toData(x, y);
          const ws = calcWs(data.T);
          const w = Math.min(data.w, ws);
          const rh = calcRH(data.T, w);
          addPoint(data.T, rh);
        }
      }
    });

    window.addEventListener('mouseup', () => {
      state.dragPoint = null;
    });

    // Toolbar Buttons
    const btnModeAdd = document.getElementById('btn-mode-add');
    const btnModeConnect = document.getElementById('btn-mode-connect');

    btnModeAdd.addEventListener('click', () => {
      state.mode = 'add';
      state.connectSourceId = null;
      btnModeAdd.classList.add('active');
      btnModeConnect.classList.remove('active');
      updateDynamicLayers();
    });

    btnModeConnect.addEventListener('click', () => {
      state.mode = 'connect';
      state.connectSourceId = null;
      btnModeConnect.classList.add('active');
      btnModeAdd.classList.remove('active');
      updateDynamicLayers();
    });

    document.getElementById('btn-clear-all').addEventListener('click', clearAll);

    // Layer Checkboxes
    const layerMap = {
      'chk-comfort': 'layer-comfort',
      'chk-enthalpy': 'layer-enthalpy',
      'chk-wetbulb': 'layer-wetbulb',
      'chk-volume': 'layer-volume'
    };
    Object.keys(layerMap).forEach(chkId => {
      const chk = document.getElementById(chkId);
      chk.addEventListener('change', () => {
        document.getElementById(layerMap[chkId]).style.display = chk.checked ? 'block' : 'none';
      });
    });

    document.getElementById('chk-crosshair').addEventListener('change', (e) => {
      state.layers.crosshair = e.target.checked;
      if (!state.layers.crosshair) {
        chV.style.display = 'none';
        chH.style.display = 'none';
      }
    });

    // Preset Selector
    document.getElementById('preset-select').addEventListener('change', (e) => {
      if (e.target.value) {
        loadPreset(e.target.value);
      }
    });

    // Theme Toggle
    const btnTheme = document.getElementById('btn-theme-toggle');
    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      renderChartGrid();
      updateDynamicLayers();
    });

    // Manual Point Add
    document.getElementById('btn-manual-add').addEventListener('click', () => {
      const name = document.getElementById('manual-name').value.trim();
      const t = parseFloat(document.getElementById('manual-t').value);
      const rh = parseFloat(document.getElementById('manual-rh').value);
      if (!isNaN(t) && !isNaN(rh)) {
        addPoint(t, rh, name);
      }
    });

    // Air flow rate input
    const flowInput = document.getElementById('flow-rate');
    const flowUnit = document.getElementById('flow-unit');
    const updateFlow = () => {
      state.flowRate = parseFloat(flowInput.value) || 1000;
      state.flowUnit = flowUnit.value;
      renderSidebarProcesses();
    };
    flowInput.addEventListener('input', updateFlow);
    flowUnit.addEventListener('change', updateFlow);

    // Export SVG
    document.getElementById('btn-export-svg').addEventListener('click', () => {
      const svgData = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'psychrometric-chart.svg';
      a.click();
      URL.revokeObjectURL(url);
    });

    // Export PNG
    document.getElementById('btn-export-png').addEventListener('click', () => {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      canvas.width = 2000;
      canvas.height = 1300;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      img.onload = () => {
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--chart-bg').trim();
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);

        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'psychrometric-chart.png';
        a.click();
      };
      img.src = url;
    });
  }

  // --- INITIALIZATION ---
  window.addEventListener('DOMContentLoaded', () => {
    renderChartGrid();
    initInteractions();
    // Default initial scenario: Summer A/C
    loadPreset('summer-ac');
  });

})();
