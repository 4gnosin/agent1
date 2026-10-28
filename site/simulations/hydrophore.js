/**
 * Marine Fresh Water Hydrophore Simulation
 * Προσομοίωση Υδροφορικού Δοχείου Γλυκού Νερού σε Πλοίο
 */
(function () {
  "use strict";

  const template = `
<div class="hydro-toolbar">
  <div class="hydro-toolbar-group">
    <label>
      <span>⏱️ Ταχύτητα:</span>
      <select data-hydro="speed">
        <option value="0">Παύση</option>
        <option value="1">×1 (Πραγματικός)</option>
        <option value="5" selected>×5 (Προτεινόμενο)</option>
        <option value="15">×15</option>
        <option value="30">×30</option>
      </select>
    </label>
    <label>
      <span>💨 Πίεση Δικτύου Αέρα:</span>
      <select data-hydro="air-line-select">
        <option value="6.0">6.0 Bar</option>
        <option value="6.5" selected>6.5 Bar (Τυπική)</option>
        <option value="7.0">7.0 Bar (Μέγιστη)</option>
      </select>
    </label>
    <button type="button" class="btn btn-ghost" data-hydro="hint">💡 Υπόδειξη</button>
    <button type="button" class="btn btn-ghost" data-hydro="reset">🔄 Επαναφορά σε Υδρόπληκτο</button>
  </div>
  <div class="hydro-toolbar-group">
    <span style="font-size:0.83rem;color:var(--muted)">Ασφαλιστικό: <b>7.0 Bar</b> | Αντλία (100% ανοιχτή): <b>7.3 Bar</b></span>
  </div>
</div>

<div data-hydro="alarm-banner" class="hydro-alarm-banner" role="status" aria-live="polite" aria-atomic="true"></div>

<div class="hydro-layout">
  <!-- Αριστερή Στήλη: Σχηματικό Διάγραμμα & Μετρήσεις -->
  <section class="hydro-panel">
    <h2>
      <span>Σχηματικό Διάγραμμα Υδροφορικού Συστήματος</span>
      <small style="font-size:0.8rem;color:var(--muted)">Κάντε κλικ στα εξαρτήματα για χειρισμό</small>
    </h2>

    <div class="hydro-diagram-scroll">
      <svg class="hydro-diagram" data-hydro="svg" viewBox="0 0 780 470" role="img" aria-label="Σχηματικό διάγραμμα υδροφορικού">
        <defs>
          <!-- Gradients -->
          <linearGradient id="tankBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="25%" stop-color="#334155" />
            <stop offset="50%" stop-color="#475569" />
            <stop offset="85%" stop-color="#334155" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0.95" />
          </linearGradient>
          <linearGradient id="airGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35" />
            <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.1" />
          </linearGradient>
          <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" stroke-width="0.5" />
          </pattern>
        </defs>

        <!-- Background grid -->
        <rect width="780" height="470" fill="#0b1322" />
        <rect width="780" height="470" fill="url(#gridPattern)" />

        <!-- PIPING SYSTEM -->
        <!-- 1. Air line from 6-7 bar main -->
        <path d="M 40 55 L 360 55" class="hydro-pipe-air" />
        <path data-hydro="flow-air" d="M 40 55 L 360 55" class="hydro-pipe-air hydro-flow-air" stroke="#fef08a" stroke-width="3" style="display:none;" />

        <!-- 2. Pump suction from FW storage tank -->
        <path d="M 75 390 L 140 390" class="hydro-pipe-water" />
        <path data-hydro="flow-suction" d="M 75 390 L 140 390" class="hydro-pipe-water hydro-flow-water" stroke="#bae6fd" stroke-width="4" style="display:none;" />

        <!-- 3. Pump discharge through NRV, gauge, Throttle valve, into Hydrophore bottom -->
        <path d="M 185 390 L 390 390 L 390 355" class="hydro-pipe-water" />
        <path data-hydro="flow-discharge" d="M 185 390 L 390 390 L 390 355" class="hydro-pipe-water hydro-flow-water" stroke="#bae6fd" stroke-width="4" style="display:none;" />

        <!-- 4. Drain pipe to bilge -->
        <path d="M 430 355 L 430 435 L 490 435" class="hydro-pipe-drain" />
        <path data-hydro="flow-drain" d="M 430 355 L 430 435 L 490 435" class="hydro-pipe-drain hydro-flow-water" stroke="#93c5fd" stroke-width="3" style="display:none;" />

        <!-- 5. Distribution to ship consumers -->
        <path d="M 470 355 L 470 380 L 670 380" class="hydro-pipe-water" />
        <path data-hydro="flow-consumer" d="M 470 355 L 470 380 L 670 380" class="hydro-pipe-water hydro-flow-water" stroke="#bae6fd" stroke-width="4" style="display:none;" />

        <!-- 6. Sight glass tubing -->
        <path d="M 490 125 L 535 125 L 535 325 L 490 325" fill="none" stroke="#64748b" stroke-width="4" />

        <!-- 7. Pressostat sensing pipe -->
        <path d="M 445 55 L 445 35 L 475 35" fill="none" stroke="#94a3b8" stroke-width="3" />

        <!-- FRESH WATER STORAGE TANK (Double bottom / Wing tank) -->
        <g>
          <rect x="18" y="345" width="58" height="90" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="2" />
          <rect x="21" y="365" width="52" height="67" fill="#0284c7" opacity="0.6" />
          <text x="47" y="375" text-anchor="middle" font-size="9" fill="#e2e8f0" font-weight="700">FW TANK</text>
          <text x="47" y="390" text-anchor="middle" font-size="8" fill="#94a3b8">Αποθήκη</text>
          <text x="47" y="402" text-anchor="middle" font-size="8" fill="#94a3b8">Γλυκού</text>
        </g>

        <!-- FEED PUMP (Centrifugal Pump & Motor) -->
        <g class="hydro-clickable" data-hydro="click-pump" transform="translate(135, 365)" role="button" tabindex="0" aria-label="Αντλία γλυκού νερού">
          <!-- Pump casing -->
          <circle cx="28" cy="25" r="22" fill="#1e293b" stroke="#0284c7" stroke-width="2.5" />
          <!-- Impeller graphic -->
          <g data-hydro="pump-impeller">
            <line x1="28" y1="9" x2="28" y2="41" stroke="#38bdf8" stroke-width="2.5" />
            <line x1="12" y1="25" x2="44" y2="25" stroke="#38bdf8" stroke-width="2.5" />
            <circle cx="28" cy="25" r="5" fill="#38bdf8" />
          </g>
          <!-- Motor casing -->
          <rect x="16" y="-22" width="24" height="20" rx="3" fill="#334155" stroke="#64748b" stroke-width="1.5" />
          <text x="28" y="-8" text-anchor="middle" font-size="10" font-weight="700" fill="#fff">M</text>
          <!-- Run Status LED -->
          <circle data-hydro="pump-led" cx="46" cy="7" r="4.5" fill="#64748b" stroke="#0f172a" />
          <text x="28" y="58" text-anchor="middle" font-size="9.5" font-weight="600" fill="#f8fafc">Αντλία FW</text>
          <text x="28" y="70" text-anchor="middle" font-size="8" fill="#38bdf8">Max 7.3 Bar</text>
        </g>

        <!-- PUMP DISCHARGE NRV (Non-return valve) -->
        <g transform="translate(195, 382)">
          <polygon points="0,-7 0,7 12,0" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
          <line x1="12" y1="-8" x2="12" y2="8" stroke="#38bdf8" stroke-width="2" />
          <text x="6" y="-11" text-anchor="middle" font-size="7" fill="#94a3b8">NRV</text>
        </g>

        <!-- DISCHARGE PRESSURE GAUGE -->
        <g transform="translate(225, 345)">
          <circle cx="15" cy="15" r="14" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5" />
          <line data-hydro="gauge-pump-needle" x1="15" y1="15" x2="15" y2="4" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="15" cy="15" r="2" fill="#fff" />
          <text x="15" y="-3" text-anchor="middle" font-size="7.5" fill="#94a3b8">Κατάθλιψη</text>
          <text data-hydro="gauge-pump-val" x="15" y="38" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">0.0 bar</text>
        </g>

        <!-- PUMP DISCHARGE THROTTLE VALVE (Επιστόμιο Κατάθλιψης Αντλίας) -->
        <g class="hydro-clickable" data-hydro="click-disch-valve" transform="translate(290, 370)" role="button" tabindex="0" aria-label="Επιστόμιο κατάθλιψης αντλίας">
          <polygon data-hydro="valve-disch-body" points="0,20 22,10 22,30" fill="#e2e8f0" stroke="#0284c7" stroke-width="1.5" />
          <polygon data-hydro="valve-disch-body2" points="22,20 0,10 0,30" fill="#e2e8f0" stroke="#0284c7" stroke-width="1.5" />
          <line x1="11" y1="20" x2="11" y2="5" stroke="#cbd5e1" stroke-width="2" />
          <circle data-hydro="valve-disch-wheel" cx="11" cy="5" r="7" fill="none" stroke="#38bdf8" stroke-width="2" />
          <line data-hydro="valve-disch-spoke" x1="5" y1="5" x2="17" y2="5" stroke="#38bdf8" stroke-width="1.5" />
          <text x="11" y="-5" text-anchor="middle" font-size="8" font-weight="600" fill="#94a3b8">Βάνα Κατάθλιψης</text>
          <text data-hydro="disch-valve-pct" x="11" y="42" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">100%</text>
        </g>

        <!-- HYDROPHORE TANK VESSEL -->
        <g transform="translate(350, 75)">
          <clipPath id="tankInteriorClip">
            <path d="M 0 50 A 65 50 0 0 1 130 50 L 130 230 A 65 50 0 0 1 0 230 Z" />
          </clipPath>

          <path d="M 0 50 A 65 50 0 0 1 130 50 L 130 230 A 65 50 0 0 1 0 230 Z"
                fill="url(#tankBodyGrad)" stroke="#475569" stroke-width="3" />

          <g clip-path="url(#tankInteriorClip)">
            <rect x="0" y="0" width="130" height="280" fill="url(#airGrad)" />
            <rect data-hydro="tank-water-rect" x="0" y="50" width="130" height="230" fill="url(#waterGrad)" />
            <line data-hydro="tank-water-surface" x1="0" y1="50" x2="130" y2="50" stroke="#bae6fd" stroke-width="2.5" stroke-dasharray="4 2" />
            <rect x="0" y="0" width="130" height="70" fill="none" stroke="#ef4444" stroke-width="1" stroke-dasharray="2 3" opacity="0.6" />
          </g>

          <line x1="5" y1="65" x2="125" y2="65" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.8" />
          <text x="65" y="60" text-anchor="middle" font-size="8" font-weight="600" fill="#fca5a5">⚠️ Υπερπλήρωση (&gt;85%)</text>

          <line x1="5" y1="140" x2="125" y2="140" stroke="#10b981" stroke-width="1.5" stroke-dasharray="5 3" />
          <text x="65" y="136" text-anchor="middle" font-size="8.5" font-weight="700" fill="#6ee7b7">⭐ NWL Κανονική Στάθμη (~50%)</text>

          <line x1="5" y1="195" x2="125" y2="195" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.7" />
          <text x="65" y="207" text-anchor="middle" font-size="8" font-weight="600" fill="#fcd34d">Χαμηλή Στάθμη (&lt;30%)</text>

          <text x="65" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#f8fafc" stroke="#0f172a" stroke-width="2" paint-order="stroke">ΥΔΡΟΦΟΡΑ</text>
          <text data-hydro="tank-air-info" x="65" y="113" text-anchor="middle" font-size="8.5" fill="#fef08a" stroke="#0f172a" stroke-width="2" paint-order="stroke">Αέρας: 80 L (8%)</text>

          <text x="65" y="165" text-anchor="middle" font-size="8.5" fill="#e0f2fe" stroke="#0f172a" stroke-width="2" paint-order="stroke">Γλυκό Νερό</text>
          <text data-hydro="tank-water-info" x="65" y="177" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8" stroke="#0f172a" stroke-width="2" paint-order="stroke">920 L (92%)</text>

          <path d="M 0 50 A 65 50 0 0 1 130 50 L 130 230 A 65 50 0 0 1 0 230 Z"
                fill="none" stroke="#64748b" stroke-width="2" />
        </g>

        <!-- SIGHT GLASS (Υαλοδείκτης) -->
        <g transform="translate(535, 125)">
          <rect x="-6" y="0" width="12" height="200" rx="3" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5" />
          <rect data-hydro="glass-water" x="-4.5" y="20" width="9" height="180" rx="2" fill="#38bdf8" opacity="0.9" />
          <line x1="8" y1="10" x2="16" y2="10" stroke="#ef4444" stroke-width="1.5" /><text x="19" y="13" font-size="7.5" fill="#fca5a5">100%</text>
          <line x1="8" y1="40" x2="14" y2="40" stroke="#ef4444" stroke-width="1" /><text x="17" y="43" font-size="7" fill="#fca5a5">85% (Υπερπλ.)</text>
          <line x1="8" y1="100" x2="18" y2="100" stroke="#10b981" stroke-width="2" /><text x="21" y="103" font-size="8" font-weight="700" fill="#34d399">50% NWL</text>
          <line x1="8" y1="150" x2="14" y2="150" stroke="#f59e0b" stroke-width="1" /><text x="17" y="153" font-size="7" fill="#fcd34d">25%</text>
          <line x1="8" y1="195" x2="16" y2="195" stroke="#94a3b8" stroke-width="1.5" /><text x="19" y="198" font-size="7.5" fill="#cbd5e1">0%</text>
          <circle cx="0" cy="0" r="4.5" fill="#64748b" stroke="#cbd5e1" />
          <circle cx="0" cy="200" r="4.5" fill="#64748b" stroke="#cbd5e1" />
          <text x="0" y="218" text-anchor="middle" font-size="8.5" font-weight="600" fill="#94a3b8">Υαλοδείκτης</text>
        </g>

        <!-- COMPRESSED AIR SUPPLY SYSTEM (6.0 - 7.0 Bar) -->
        <g transform="translate(40, 25)">
          <rect x="-15" y="15" width="85" height="30" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
          <text x="27" y="27" text-anchor="middle" font-size="8.5" font-weight="700" fill="#fbbf24">SERVICE AIR</text>
          <text data-hydro="air-line-label" x="27" y="39" text-anchor="middle" font-size="8" fill="#e2e8f0">6.5 Bar</text>

          <!-- Air Pressure Gauge -->
          <g transform="translate(95, 12)">
            <circle cx="15" cy="15" r="13" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5" />
            <line data-hydro="gauge-air-needle" x1="15" y1="15" x2="23" y2="7" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" />
            <circle cx="15" cy="15" r="2" fill="#fff" />
            <text data-hydro="gauge-air-val" x="15" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#fbbf24">6.5 bar</text>
          </g>

          <!-- AIR SUPPLY VALVE -->
          <g class="hydro-clickable" data-hydro="click-air-valve" transform="translate(150, 18)" role="button" tabindex="0" aria-label="Βάνα πεπιεσμένου αέρα">
            <polygon points="0,0 24,12 24,-12" fill="#e2e8f0" stroke="#f59e0b" stroke-width="1.5" />
            <polygon points="24,0 0,12 0,-12" fill="#e2e8f0" stroke="#f59e0b" stroke-width="1.5" />
            <line x1="12" y1="0" x2="12" y2="-12" stroke="#cbd5e1" stroke-width="2" />
            <rect data-hydro="valve-air-handle" x="5" y="-15" width="14" height="4" rx="2" fill="#ef4444" />
            <text x="12" y="23" text-anchor="middle" font-size="8.5" font-weight="600" fill="#f8fafc">Βάνα Αέρα</text>
            <text data-hydro="valve-air-state" x="12" y="33" text-anchor="middle" font-size="8" font-weight="700" fill="#ef4444">ΚΛΕΙΣΤΗ</text>
          </g>

          <!-- AIR NON-RETURN VALVE (NRV) -->
          <g transform="translate(225, 24)">
            <polygon points="0,-7 0,7 12,0" fill="#f59e0b" stroke="#fef08a" stroke-width="1.5" />
            <line x1="12" y1="-8" x2="12" y2="8" stroke="#fef08a" stroke-width="2" />
            <text x="6" y="-10" text-anchor="middle" font-size="7" fill="#94a3b8">NRV Αέρα</text>
          </g>
        </g>

        <!-- TOP DOME VALVES: AIR VENT VALVE & SAFETY VALVE -->
        <!-- AIR VENT VALVE (Βάνα Εξαέρωσης για συντήρηση) -->
        <g class="hydro-clickable" data-hydro="click-vent-valve" transform="translate(372, 38)" role="button" tabindex="0" aria-label="Βάνα εξαέρωσης">
          <path d="M 8 20 L 8 6 L 14 6 L 14 -2" fill="none" stroke="#64748b" stroke-width="2" />
          <polygon points="2,14 14,14 8,8" fill="#e2e8f0" stroke="#64748b" stroke-width="1" />
          <line x1="14" y1="-2" x2="14" y2="-7" stroke="#cbd5e1" stroke-width="2" />
          <rect data-hydro="valve-vent-handle" x="8" y="-10" width="12" height="3" rx="1.5" fill="#ef4444" />
          <text x="10" y="-14" text-anchor="middle" font-size="7.5" font-weight="700" fill="#cbd5e1">Vent</text>
          <text data-hydro="valve-vent-state" x="10" y="30" text-anchor="middle" font-size="7" font-weight="700" fill="#ef4444">ΚΛΕΙΣΤΗ</text>
          <!-- Vent exhaust puff -->
          <path data-hydro="vent-puff" class="hydro-vent-anim" d="M 14 -7 C 18 -13, 10 -17, 16 -23" fill="none" stroke="#fef08a" stroke-width="2" stroke-linecap="round" style="display:none;" />
        </g>

        <!-- SAFETY RELIEF VALVE (Ασφαλιστικό 7.0 Bar) -->
        <g transform="translate(415, 38)">
          <path d="M 12 20 L 12 0 L 22 0" fill="none" stroke="#ef4444" stroke-width="2.5" />
          <polygon points="6,0 18,0 12,-12" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5" />
          <text x="12" y="-16" text-anchor="middle" font-size="8" font-weight="700" fill="#fca5a5">Ασφαλιστικό</text>
          <text x="12" y="-6" text-anchor="middle" font-size="7.5" font-weight="700" fill="#fca5a5">7.0 Bar</text>
          <!-- Relief exhaust puff effect -->
          <path data-hydro="safety-puff" d="M 22 0 C 28 -6, 34 2, 40 -4" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" style="display:none;" />
        </g>

        <!-- PRESSURE SWITCH (Πρεσσοστάτης) -->
        <g class="hydro-clickable" data-hydro="click-pressostat" transform="translate(470, 15)" role="button" tabindex="0" aria-label="Πρεσσοστάτης">
          <rect x="0" y="0" width="85" height="42" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
          <text x="42" y="12" text-anchor="middle" font-size="8.5" font-weight="700" fill="#f8fafc">ΠΡΕΣΣΟΣΤΑΤΗΣ</text>
          <g transform="translate(15, 18)">
            <circle cx="0" cy="5" r="2.5" fill="#38bdf8" />
            <circle cx="20" cy="5" r="2.5" fill="#38bdf8" />
            <line data-hydro="contact-line" x1="0" y1="5" x2="19" y2="5" stroke="#10b981" stroke-width="2.5" />
          </g>
          <text data-hydro="contact-status-text" x="52" y="26" font-size="8" font-weight="700" fill="#10b981">ON (Κλειστή)</text>
          <text data-hydro="pressostat-settings" x="42" y="38" text-anchor="middle" font-size="7.5" fill="#94a3b8">In: 4.2 | Out: 5.8 bar</text>
        </g>

        <!-- HYDROPHORE MAIN PRESSURE GAUGE (Μανόμετρο Δοχείου 0-8 Bar) -->
        <g transform="translate(290, 80)">
          <circle cx="30" cy="30" r="28" fill="#0f172a" stroke="#cbd5e1" stroke-width="2.5" />
          <!-- Gauge zones: 0 to 4.2 green, 4.2 to 6.2 blue, 6.2 to 7.0 orange, >7.0 red -->
          <path d="M 9 30 A 21 21 0 0 1 30 9" fill="none" stroke="#10b981" stroke-width="3" />
          <path d="M 30 9 A 21 21 0 0 1 48 18" fill="none" stroke="#38bdf8" stroke-width="3" />
          <path d="M 48 18 A 21 21 0 0 1 51 30" fill="none" stroke="#ef4444" stroke-width="3" />

          <!-- Needles & Pins -->
          <circle data-hydro="pin-cutin" cx="24" cy="11" r="2" fill="#10b981" />
          <circle data-hydro="pin-cutout" cx="39" cy="11" r="2" fill="#ef4444" />
          <line data-hydro="gauge-main-needle" x1="30" y1="30" x2="30" y2="12" stroke="#f8fafc" stroke-width="2" stroke-linecap="round" />
          <circle cx="30" cy="30" r="3.5" fill="#ef4444" />

          <text x="30" y="68" text-anchor="middle" font-size="8.5" fill="#94a3b8">Πίεση Υδροφορικού</text>
          <text data-hydro="gauge-main-val" x="30" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#38bdf8">5.20 Bar</text>
        </g>

        <!-- DRAIN VALVE (Βάνα Αποστράγγισης) -->
        <g class="hydro-clickable" data-hydro="click-drain-valve" transform="translate(418, 395)" role="button" tabindex="0" aria-label="Βάνα αποστράγγισης">
          <polygon points="0,0 24,12 24,-12" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" />
          <polygon points="24,0 0,12 0,-12" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" />
          <line x1="12" y1="0" x2="12" y2="-10" stroke="#cbd5e1" stroke-width="2" />
          <rect data-hydro="valve-drain-handle" x="5" y="-13" width="14" height="4" rx="2" fill="#ef4444" />
          <text x="12" y="22" text-anchor="middle" font-size="8" font-weight="600" fill="#cbd5e1">Drain</text>
          <text data-hydro="valve-drain-state" x="12" y="32" text-anchor="middle" font-size="7.5" font-weight="700" fill="#ef4444">ΚΛΕΙΣΤΗ</text>
        </g>

        <!-- Bilge / Drain pipe terminus -->
        <g transform="translate(490, 425)">
          <rect x="0" y="0" width="55" height="20" rx="3" fill="#1e293b" stroke="#64748b" stroke-width="1" />
          <text x="27" y="13" text-anchor="middle" font-size="8" fill="#94a3b8">Σεντίνα / Bilge</text>
        </g>

        <!-- SHIP CONSUMERS DISTRIBUTION SYSTEM -->
        <g transform="translate(615, 345)">
          <g class="hydro-clickable" data-hydro="click-consumer-valve" transform="translate(0, 25)" role="button" tabindex="0" aria-label="Βάνα κατανάλωσης πλοίου">
            <polygon points="0,0 24,12 24,-12" fill="#e2e8f0" stroke="#0284c7" stroke-width="1.5" />
            <polygon points="24,0 0,12 0,-12" fill="#e2e8f0" stroke="#0284c7" stroke-width="1.5" />
            <line x1="12" y1="0" x2="12" y2="-10" stroke="#cbd5e1" stroke-width="2" />
            <rect data-hydro="valve-cons-handle" x="5" y="-13" width="14" height="4" rx="2" fill="#10b981" />
            <text x="12" y="22" text-anchor="middle" font-size="8" font-weight="600" fill="#cbd5e1">Βάνα Δικτύου</text>
          </g>

          <g transform="translate(60, 10)">
            <rect x="0" y="0" width="95" height="50" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
            <text x="47" y="15" text-anchor="middle" font-size="8.5" font-weight="700" fill="#38bdf8">ΚΑΤΑΝΑΛΩΣΗ</text>
            <text x="47" y="27" text-anchor="middle" font-size="8" fill="#cbd5e1">Καμπίνες &amp; Μαγειρείο</text>
            <text data-hydro="consumer-flow-text" x="47" y="41" text-anchor="middle" font-size="9" font-weight="700" fill="#10b981">Κανονική (50%)</text>
          </g>
        </g>
      </svg>
    </div>

    <!-- Live Metrics Grid -->
    <div class="hydro-metrics-grid">
      <div class="hydro-metric-card">
        <span class="title">Πίεση Υδροφορικού</span>
        <span data-hydro="val-pressure" class="value">5.20 Bar</span>
        <span data-hydro="sub-pressure" class="sub">Όριο Ασφαλιστικού: 7.0 Bar</span>
      </div>
      <div class="hydro-metric-card">
        <span class="title">Στάθμη Νερού</span>
        <span data-hydro="val-level" class="value">92.0 %</span>
        <span data-hydro="sub-level" class="sub" style="color:#ef4444">⚠️ Υδρόπληκτο (NWL 50%)</span>
      </div>
      <div class="hydro-metric-card">
        <span class="title">Όγκος Αεροθύλακα</span>
        <span data-hydro="val-airvol" class="value">80 L</span>
        <span data-hydro="sub-airvol" class="sub">Στόχος: ~450–500 L</span>
      </div>
      <div class="hydro-metric-card">
        <span class="title">Κατάσταση Αντλίας</span>
        <span data-hydro="val-pump-status" class="value" style="color:#10b981">AUTO (Έτοιμη)</span>
        <span data-hydro="sub-pump-starts" class="sub">Κατάθλιψη: 100% (7.3 Bar max)</span>
      </div>
    </div>
  </section>

  <!-- Δεξιά Στήλη: Πίνακας Χειρισμού & Βήματα Διαδικασίας -->
  <aside>
    <section class="hydro-panel">
      <h2>Χειριστήριο &amp; Ρυθμίσεις</h2>
      <div class="hydro-controls-panel">
        <!-- Pump Mode 3-way Switch -->
        <div class="hydro-control-group">
          <h3>
            <span>Διακόπτης Αντλίας FW</span>
            <small data-hydro="pump-mode-label" style="font-weight:700;color:#10b981">AUTO</small>
          </h3>
          <div class="hydro-toggle-group">
            <button type="button" class="hydro-toggle-btn" data-hydro="mode-off">OFF</button>
            <button type="button" class="hydro-toggle-btn active-auto" data-hydro="mode-auto">AUTO</button>
            <button type="button" class="hydro-toggle-btn" data-hydro="mode-man">MANUAL</button>
          </div>
        </div>

        <!-- Pump Discharge Valve Throttling -->
        <div class="hydro-control-group">
          <h3>
            <span>Επιστόμιο Κατάθλιψης Αντλίας (Throttling)</span>
            <span data-hydro="disch-badge" style="font-size:0.75rem;font-weight:700;color:#ef4444">100% (Πλήρες - Max 7.3 Bar)</span>
          </h3>
          <div class="hydro-slider-row" style="grid-template-columns: 8.5rem 1fr 3.5rem;">
            <label for="hydro-disch">Άνοιγμα Κατάθλιψης:</label>
            <input type="range" id="hydro-disch" data-hydro="range-disch" min="0" max="100" step="5" value="100">
            <span data-hydro="disch-val" class="hydro-slider-val">100%</span>
          </div>
          <div class="hydro-toggle-group" style="margin-top:0.35rem;">
            <button type="button" class="hydro-toggle-btn" data-hydro="disch-preset-0">0% (Κλειστό)</button>
            <button type="button" class="hydro-toggle-btn" data-hydro="disch-preset-50">50% (Στραγγαλισμένο ~6 Bar)</button>
            <button type="button" class="hydro-toggle-btn active-auto" data-hydro="disch-preset-100">100% (Πλήρες - 7.3 Bar)</button>
          </div>
          <p style="margin:0.35rem 0 0;font-size:0.77rem;color:var(--muted)">
            ⚠️ <b>Προσοχή:</b> Στο 100% άνοιγμα, η αντλία πιέζει έως <b>7.3 Bar</b> και ανοίγει το ασφαλιστικό (<b>7.0 Bar</b>), χάνοντας αέρα! Στραγγαλίστε στο <b>~50%</b> για ασφαλή λειτουργία και πλήρωση.
          </p>
        </div>

        <!-- Pressostat Adjustments -->
        <div class="hydro-control-group">
          <h3>
            <span>Ρύθμιση Πρεσσοστάτη</span>
            <span style="font-size:0.75rem;font-weight:400;color:var(--muted)">Διαφορικό ΔP: <b data-hydro="pressostat-diff">1.6</b> bar</span>
          </h3>
          <div class="hydro-slider-row">
            <label for="hydro-cutin">Cut-in (On):</label>
            <input type="range" id="hydro-cutin" data-hydro="range-cutin" min="3.0" max="5.5" step="0.1" value="4.2">
            <span data-hydro="cutin-val" class="hydro-slider-val">4.2 Bar</span>
          </div>
          <div class="hydro-slider-row">
            <label for="hydro-cutout">Cut-out (Off):</label>
            <input type="range" id="hydro-cutout" data-hydro="range-cutout" min="4.5" max="7.2" step="0.1" value="5.8">
            <span data-hydro="cutout-val" class="hydro-slider-val">5.8 Bar</span>
          </div>
          <p data-hydro="pressostat-warn" style="display:none;margin:0.25rem 0 0;font-size:0.78rem;color:#ef4444;font-weight:600;">
            ⚠️ Το Cut-out είναι πολύ κοντά στο ασφαλιστικό των 7.0 Bar!
          </p>
        </div>

        <!-- Manual Valves Quick Switches -->
        <div class="hydro-control-group">
          <h3>Επιστόμια &amp; Βάνες Εγκατάστασης</h3>
          <div class="hydro-valves-grid">
            <div class="hydro-valve-card">
              <span>Βάνα Αέρα</span>
              <button type="button" data-hydro="btn-air-valve" class="hydro-valve-btn is-closed">ΚΛΕΙΣΤΗ</button>
            </div>
            <div class="hydro-valve-card">
              <span>Βάνα Vent (Εξαέρωση)</span>
              <button type="button" data-hydro="btn-vent-valve" class="hydro-valve-btn is-closed">ΚΛΕΙΣΤΗ</button>
            </div>
            <div class="hydro-valve-card">
              <span>Βάνα Drain</span>
              <button type="button" data-hydro="btn-drain-valve" class="hydro-valve-btn is-closed">ΚΛΕΙΣΤΗ</button>
            </div>
          </div>

          <!-- Consumer demand selector -->
          <div style="margin-top:0.65rem;">
            <label style="display:flex;justify-content:space-between;font-size:0.84rem;font-weight:600;margin-bottom:0.25rem;">
              <span>Κατανάλωση Δικτύου Πλοίου:</span>
              <span data-hydro="consumer-demand-label" style="color:#0284c7">Κανονική (50%)</span>
            </label>
            <div class="hydro-toggle-group">
              <button type="button" class="hydro-toggle-btn" data-hydro="demand-0">0% (Μηδέν)</button>
              <button type="button" class="hydro-toggle-btn" data-hydro="demand-25">25% (Χαμηλή)</button>
              <button type="button" class="hydro-toggle-btn active-auto" data-hydro="demand-50">50% (Κανον.)</button>
              <button type="button" class="hydro-toggle-btn" data-hydro="demand-100">100% (Αιχμή)</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Βήματα Διαδικασίας Αποκατάστασης -->
    <section class="hydro-panel">
      <h2>Διαδικασία Αποκατάστασης &amp; Ρύθμισης</h2>
      <ol class="hydro-steps" data-hydro="steps-list">
        <li data-step="1" class="active">Αναγνώριση προβλήματος: Δοχείο υδρόπληκτο (&gt;90%). Η αντλία με 100% ανοιχτή κατάθλιψη φτάνει τα 7.3 Bar και ανοίγει το ασφαλιστικό (7.0 Bar), χάνοντας αέρα!</li>
        <li data-step="2">Στραγγαλισμός κατάθλιψης &amp; Απενεργοποίηση: Ρυθμίστε το επιστόμιο κατάθλιψης στο <b>~50%</b> (περιορισμός πίεσης κάτω από 7.0 Bar) και θέστε την αντλία στο <b>OFF</b>.</li>
        <li data-step="3">Αποστράγγιση περίσσειας νερού: Ανοίξτε τη βάνα <b>Drain</b> (ή και τη βάνα εξαέρωσης/vent αν απαιτείται) μέχρι η στάθμη στον υαλοδείκτη να κατέβει στο NWL (~50–60%). Κλείστε το Drain.</li>
        <li data-step="4">Συμπλήρωση πεπιεσμένου αέρα: Ανοίξτε τη βάνα αέρα (δίκτυο 6.0–7.0 Bar). Συμπληρώστε μέχρι η πίεση να φτάσει τα <b>~4.0–4.5 Bar</b>. Κλείστε τη βάνα αέρα.</li>
        <li data-step="5">Ρύθμιση πρεσσοστάτη: Βεβαιωθείτε ότι το Cut-in είναι στα <b>~4.2 Bar</b> και το Cut-out στα <b>~5.8 Bar</b> (ασφαλές περιθώριο από τα 7 Bar). Θέστε την αντλία στο <b>AUTO</b>.</li>
        <li data-step="6">Έλεγχος σταθερότητας: Ανοίξτε κανονική κατανάλωση. Επιβεβαιώστε ομαλή λειτουργία χωρίς hunting και ΧΩΡΙΣ να ανοίγει ποτέ το ασφαλιστικό!</li>
      </ol>
    </section>

    <!-- Ημερολόγιο Συμβάντων -->
    <section class="hydro-panel">
      <h2>Ημερολόγιο &amp; Ειδοποιήσεις</h2>
      <div class="hydro-log" data-hydro="log-box" aria-live="polite"></div>
    </section>
  </aside>
</div>

<!-- Αναδιπλούμενη Μηχανολογική Θεωρία & Ναυτική Πρακτική -->
<details class="hydro-theory-details">
  <summary>📘 Μηχανολογικό Πλαίσιο &amp; Ναυτική Εμπειρία (Γιατί άνοιγε το ασφαλιστικό στο πλοίο;)</summary>
  <div class="hydro-theory-content">
    <h4>1. Γιατί το ασφαλιστικό άνοιγε κάθε φορά που δούλευε η αντλία;</h4>
    <p>
      Σε πολλά πλοία, οι πολυβάθμιες φυγοκεντρικές αντλίες γλυκού νερού επιλέγονται με υψηλό μέγιστο μανομετρικό (π.χ. <b>7.3 Bar</b> με μηδενική παροχή / shutoff head). Αντίθετα, η ασφαλιστική βαλβίδα του υδροφορικού είναι ρυθμισμένη στα <b>7.0 Bar</b>.
      Όταν το επιστόμιο κατάθλιψης της αντλίας είναι <b>100% πλήρως ανοιχτό</b>:
    </p>
    <ul>
      <li>Όταν οι μηχανικοί ήθελαν να συμπληρώσουν νερό ή όταν η αντλία γέμιζε το δοχείο προς το Cut-out, η αντλία πίεζε πέρα από τα 7.0 Bar (έως τα 7.3 Bar).</li>
      <li>Το ασφαλιστικό επιστόμιο (7.0 Bar) <b>άνοιγε αυτόματα για εκτόνωση</b>.</li>
      <li>Επειδή το ασφαλιστικό βρίσκεται στο υψηλότερο σημείο (στον αεροθύλακα), κάθε φορά που άνοιγε <b>εκτόνωνε πεπιεσμένο αέρα</b> στην ατμόσφαιρα!</li>
      <li>Έτσι, μετά από μερικούς κύκλους λειτουργίας, ο αέρας είχε χαθεί πλήρως, το δοχείο γινόταν «υδρόπληκτο» (waterlogged) και η αντλία έκανε συνεχείς επανεκκινήσεις (hunting).</li>
    </ul>

    <h4>2. Ο κρίσιμος ρόλος του στραγγαλισμού κατάθλιψης (Pump Throttling Valve)</h4>
    <p>
      Η μηχανολογική λύση στο πλοίο είναι η σωστή ρύθμιση του επιστομίου κατάθλιψης της αντλίας:
    </p>
    <ul>
      <li><b>Στραγγαλισμός στο ~50%:</b> Προσθέτει τοπική υδραυλική αντίσταση, περιορίζοντας τη μέγιστη πίεση που μπορεί να μεταφερθεί στο εσωτερικό της υδροφόρας στα <b>~5.8 – 6.0 Bar</b>.</li>
      <li>Με στραγγαλισμένη την κατάθλιψη, η αντλία <b>δεν μπορεί ποτέ να υπερβεί τα 7.0 Bar</b> μέσα στο δοχείο, προστατεύοντας απόλυτα το ασφαλιστικό από ανεπιθύμητο άνοιγμα!</li>
      <li>Επιπλέον, ο ρυθμός πλήρωσης γίνεται ομαλός, αποτρέποντας απότομα δυναμικά κύματα πίεσης (surge) κατά τη συμπίεση του αεροθύλακα.</li>
    </ul>

    <h4>3. Η Βάνα Εξαέρωσης (Air Vent Valve)</h4>
    <p>
      Στην κορυφή του δοχείου προβλέπεται βάνα εξαέρωσης. Χρησιμεύει για:
    </p>
    <ul>
      <li><b>Συντήρηση &amp; Επιθεώρηση:</b> Πλήρη αποσυμπίεση του δοχείου στην ατμόσφαιρα πριν από το άνοιγμα ανθρωποθυρίδας ή αφαίρεση εξαρτημάτων.</li>
      <li><b>Έλεγχο υπερπίεσης:</b> Εκτόνωση περίσσειας αέρα εάν κατά λάθος εισέλθει υπερβολική πίεση από το δίκτυο των 7.0 Bar.</li>
      <li><b>Υδραυλική δοκιμή (Hydrostatic test):</b> Πλήρη εξαέρωση του δοχείου κατά το γέμισμα με νερό.</li>
    </ul>

    <h4>4. Ρύθμιση Πρεσσοστάτη &amp; Δίκτυο Αέρα (6.0 – 7.0 Bar)</h4>
    <p>
      Ο πρεσσοστάτης πρέπει να ρυθμίζεται με ασφαλές περιθώριο κάτω από τα 7.0 Bar:
    </p>
    <ul>
      <li><b>Cut-in:</b> ~4.2 Bar (εκκίνηση αντλίας).</li>
      <li><b>Cut-out:</b> ~5.8 Bar (διακοπή αντλίας, περιθώριο 1.2 Bar κάτω από το ασφαλιστικό).</li>
      <li><b>Διαφορικό ΔP:</b> 1.6 Bar (εξασφαλίζει αρκετό αποθηκευμένο όγκο νερού μεταξύ των κύκλων).</li>
      <li>Το δίκτυο αέρα του πλοίου (Service Air) κυμαίνεται από <b>6.0 έως 7.0 Bar</b>, επιτρέποντας άνετη φόρτιση του αερομαξιλαριού στα ~4.2 Bar όταν το νερό βρίσκεται στο NWL (50%).</li>
    </ul>
  </div>
</details>
`;

  window.mountHydrophore = function (container) {
    if (!container) throw new Error("Hydrophore container not found.");
    container.innerHTML = template;
    const layout = container.querySelector(".hydro-layout");
    const aside = layout && layout.querySelector("aside");
    const simulation = layout && layout.querySelector("section.hydro-panel");
    const theory = container.querySelector(".hydro-theory-details");
    if (!layout || !aside || !simulation || !theory)
      throw new Error("Hydrophore layout, controls, or theory section is missing.");
    const mainColumn = document.createElement("div");
    mainColumn.className = "hydro-main-column";
    layout.insertBefore(mainColumn, aside);
    mainColumn.appendChild(simulation);
    mainColumn.appendChild(theory);

    const $ = function (selector) {
      if (selector.startsWith("[data-hydro")) {
        return container.querySelector(selector);
      }
      return container.querySelector('[data-hydro="' + selector + '"]');
    };

    // --- State variables ---
    const TOTAL_VOLUME = 1000; // Liters
    const SAFETY_RELIEF_PRESS = 7.0; // Bar (Safety relief valve set point)
    const MAX_PUMP_HEAD_FULL = 7.3; // Bar (Head with 100% full open discharge)

    let state = {
      // Physical state
      waterVol: 920, // Initial: 92% water (waterlogged!)
      airMass: 460,  // Initial air cushion mass
      pressure: 5.2, // Gauge pressure in Bar
      pumpDischargePress: 0,
      safetyPopped: false,

      // Network & Valves
      airLinePressure: 6.5, // 6.0, 6.5, 7.0 Bar
      dischValve: 1.0,      // 0.0 to 1.0 (Starts 100% open - defect from ship!)
      airValveOpen: false,
      ventValveOpen: false, // Air vent valve at top
      drainValveOpen: false,
      consumerDemand: 0.50, // 0.0, 0.25, 0.50, 1.0

      // Pump & Pressostat
      pumpMode: "auto", // "off", "auto", "man"
      pumpRunning: false,
      cutIn: 4.2,  // Bar
      cutOut: 6.8, // Initial: set high (~6.8) to demonstrate the safety pop!

      // History & Steps
      pumpStartsHistory: [],
      safetyTripsHistory: [],
      huntingAlarm: false,
      stepCompleted: [false, false, false, false, false, false, false],

      // Simulation clock & control
      timeSec: 0,
      simSpeed: 5,
    };

    let timer = null;
    let logs = [];

    function addLog(type, message) {
      const timeStr = formatSimTime(state.timeSec);
      logs.unshift({ type, message, time: timeStr });
      if (logs.length > 50) logs.pop();

      const logBox = $("log-box");
      if (logBox) {
        logBox.innerHTML = logs
          .map(
            (item) =>
              `<div class="hydro-log-item ${item.type}"><small>[${item.time}]</small> ${item.message}</div>`
          )
          .join("");
      }
    }

    function formatSimTime(sec) {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    }

    // --- Physics Step ---
    function simulateStep(dt) {
      state.timeSec += dt;

      // 1. Calculate Air Cushion Volume
      let airVol = Math.max(5, TOTAL_VOLUME - state.waterVol);

      // 2. Ideal Gas Equation for Tank Pressure
      let pAbs = state.airMass / airVol;
      state.pressure = Math.max(0, pAbs - 1.0);

      // 3. Pump Automation Logic
      if (state.pumpMode === "off") {
        state.pumpRunning = false;
      } else if (state.pumpMode === "man") {
        state.pumpRunning = true;
      } else if (state.pumpMode === "auto") {
        if (!state.pumpRunning && state.pressure <= state.cutIn) {
          state.pumpRunning = true;
          recordPumpStart();
        } else if (state.pumpRunning && state.pressure >= state.cutOut) {
          state.pumpRunning = false;
        }
      }

      // 4. Effective Pump Delivery Head based on Discharge Throttling Valve
      // At dischValve = 1.0 -> 7.3 Bar max!
      // At dischValve = 0.5 -> ~5.9 Bar max (safely below 7.0 Bar safety valve!)
      // At dischValve = 0.0 -> 0 Bar delivered
      let effHead = state.dischValve > 0 ? (4.5 + 2.8 * state.dischValve) : 0;

      // Inflow from pump
      let flowIn = 0;
      if (state.pumpRunning && state.dischValve > 0) {
        if (state.pressure < effHead) {
          let headFactor = Math.sqrt(Math.max(0, 1 - state.pressure / effHead));
          flowIn = 28.0 * state.dischValve * headFactor; // L/s
          state.pumpDischargePress = Math.min(MAX_PUMP_HEAD_FULL, state.pressure + 0.4 * (1 - headFactor) + 0.5 * (1 - state.dischValve));
        } else {
          flowIn = 0;
          state.pumpDischargePress = effHead;
        }
      } else if (state.pumpRunning && state.dischValve === 0) {
        flowIn = 0;
        state.pumpDischargePress = MAX_PUMP_HEAD_FULL; // Deadheading pump
      } else {
        state.pumpDischargePress = 0;
      }

      // 5. Drain Outflow
      let flowDrain = 0;
      if (state.drainValveOpen) {
        let drainHead = Math.max(0.4, state.pressure * 0.7 + 0.3);
        flowDrain = 9.0 * Math.sqrt(drainHead);
      }

      // 6. Consumer Outflow
      let flowConsumer = 0;
      if (state.consumerDemand > 0) {
        let consHead = Math.max(0.05, state.pressure);
        flowConsumer = 2.5 * state.consumerDemand * Math.sqrt(consHead);
      }

      // 7. Air charging flow from Service Air line (6.0 - 7.0 Bar)
      let airMassFlow = 0;
      if (state.airValveOpen) {
        if (state.pressure < state.airLinePressure) {
          let dP = state.airLinePressure - state.pressure;
          airMassFlow += 140.0 * Math.sqrt(dP);
        } else {
          // NRV blocks backflow
        }
      }

      // 8. Air Vent Valve (Βάνα Εξαέρωσης)
      if (state.ventValveOpen) {
        let ventRate = 90.0 * Math.sqrt(Math.max(0.05, state.pressure));
        airMassFlow -= ventRate;
      }

      // 9. Safety Relief Valve Blowoff at 7.0 Bar!
      if (state.pressure >= SAFETY_RELIEF_PRESS) {
        state.safetyPopped = true;
        // Bleed air and water rapidly
        let airLoss = 200.0 * dt;
        state.airMass = Math.max(10, state.airMass - airLoss);
        if (state.waterVol > 940) flowDrain += 12.0;

        recordSafetyTrip();
      } else {
        state.safetyPopped = false;
      }

      // 10. Update state
      let dWater = (flowIn - flowDrain - flowConsumer) * dt;
      state.waterVol = Math.max(0, Math.min(TOTAL_VOLUME - 2, state.waterVol + dWater));
      state.airMass = Math.max(10, state.airMass + airMassFlow * dt);

      // Tracking hunting & safety trips
      const now = state.timeSec;
      state.pumpStartsHistory = state.pumpStartsHistory.filter((t) => now - t <= 30);
      let startsPerMin = state.pumpStartsHistory.length * 2;
      state.huntingAlarm = startsPerMin >= 6;

      state.safetyTripsHistory = state.safetyTripsHistory.filter((t) => now - t <= 10);

      checkProcedureProgress();
    }

    let lastSafetyLogSec = -99;
    function recordSafetyTrip() {
      if (state.timeSec - lastSafetyLogSec > 3) {
        lastSafetyLogSec = state.timeSec;
        addLog(
          "err",
          `⚠️ ΑΣΦΑΛΙΣΤΙΚΟ ΕΠΙΣΤΟΜΙΟ ΑΝΟΙΧΤΟ (7.0 Bar): Η πίεση έφτασε ${state.pressure.toFixed(2)} Bar! Χάνεται πεπιεσμένος αέρας από το αερομαξιλάρι!`
        );
      }
    }

    function recordPumpStart() {
      state.pumpStartsHistory.push(state.timeSec);
      addLog("info", `Εκκίνηση αντλίας νερού (Πίεση: ${state.pressure.toFixed(2)} Bar).`);
    }

    function checkProcedureProgress() {
      const waterPct = (state.waterVol / TOTAL_VOLUME) * 100;
      const airVol = TOTAL_VOLUME - state.waterVol;

      // Step 1: Problem identified
      if (!state.stepCompleted[1]) {
        state.stepCompleted[1] = true;
      }

      // Step 2: Throttle discharge valve to ~50% (<= 65%) AND pump in OFF
      if (state.stepCompleted[1] && !state.stepCompleted[2]) {
        if (state.dischValve <= 0.65 && (state.pumpMode === "off" || state.cutIn < 2.5)) {
          state.stepCompleted[2] = true;
          addLog("ok", "Βήμα 2 επιτεύχθηκε: Το επιστόμιο κατάθλιψης στραγγαλίστηκε στο " + Math.round(state.dischValve * 100) + "% (περιορισμός πίεσης < 6.2 Bar) και η αντλία τέθηκε στο OFF.");
        }
      }

      // Step 3: Drained to NWL (45% - 62%) with drain now closed
      if (state.stepCompleted[2] && !state.stepCompleted[3]) {
        if (waterPct >= 45 && waterPct <= 62 && !state.drainValveOpen) {
          state.stepCompleted[3] = true;
          addLog("ok", `Βήμα 3 επιτεύχθηκε: Στάθμη νερού στο NWL (${waterPct.toFixed(1)}%). Χώρος αεροθύλακα: ${airVol.toFixed(0)} L!`);
        }
      }

      // Step 4: Air charged to 3.8 - 4.6 Bar with air valve closed
      if (state.stepCompleted[3] && !state.stepCompleted[4]) {
        if (state.pressure >= 3.8 && state.pressure <= 4.6 && !state.airValveOpen) {
          state.stepCompleted[4] = true;
          addLog("ok", `Βήμα 4 επιτεύχθηκε: Πεπιεσμένος αέρας συμπληρώθηκε επιτυχώς στα ${state.pressure.toFixed(2)} Bar!`);
        }
      }

      // Step 5: Pressostat Cut-out <= 6.2 Bar, Cut-in ~ 4.0-4.5 Bar, Pump in AUTO
      if (state.stepCompleted[4] && !state.stepCompleted[5]) {
        if (
          state.pumpMode === "auto" &&
          state.cutIn >= 3.8 &&
          state.cutIn <= 4.6 &&
          state.cutOut >= 5.2 &&
          state.cutOut <= 6.2 &&
          state.dischValve <= 0.65
        ) {
          state.stepCompleted[5] = true;
          addLog("ok", `Βήμα 5 επιτεύχθηκε: Πρεσσοστάτης σωστά ρυθμισμένος (In: ${state.cutIn.toFixed(1)} / Out: ${state.cutOut.toFixed(1)} Bar) με ασφαλές περιθώριο από τα 7 Bar, αντλία σε AUTO.`);
        }
      }

      // Step 6: Steady operation with demand without hunting and NO safety trips
      if (state.stepCompleted[5] && !state.stepCompleted[6]) {
        if (state.consumerDemand > 0 && !state.huntingAlarm && !state.safetyPopped && airVol >= 350 && state.pressure >= 3.5) {
          state.stepCompleted[6] = true;
          addLog("ok", "🎉 Βήμα 6 ολοκληρώθηκε: Η υδροφόρα λειτουργεί υποδειγματικά! Σταθερή πίεση, χωρίς hunting και χωρίς να ανοίγει ποτέ το ασφαλιστικό των 7.0 Bar!");
        }
      }
    }

    // --- UI Render ---
    function render() {
      const waterPct = (state.waterVol / TOTAL_VOLUME) * 100;
      const airVol = TOTAL_VOLUME - state.waterVol;
      const startsPerMin = state.pumpStartsHistory.length * 2;

      // 1. Digital Metrics
      $("val-pressure").textContent = state.pressure.toFixed(2) + " Bar";
      $("val-level").textContent = waterPct.toFixed(1) + " %";
      $("val-airvol").textContent = Math.round(airVol) + " L";

      // Color coding & subtitles
      if (waterPct > 85) {
        $("val-level").style.color = "#ef4444";
        $("sub-level").textContent = "⚠️ Υδρόπληκτο (NWL 50%)";
        $("sub-level").style.color = "#ef4444";
      } else if (waterPct < 30) {
        $("val-level").style.color = "#f59e0b";
        $("sub-level").textContent = "⚠️ Πολύ χαμηλή στάθμη";
        $("sub-level").style.color = "#f59e0b";
      } else {
        $("val-level").style.color = "#10b981";
        $("sub-level").textContent = "✔ Κανονική στάθμη (NWL)";
        $("sub-level").style.color = "#10b981";
      }

      if (airVol < 150) {
        $("sub-airvol").textContent = "⚠️ Ελάχιστος αέρας (Hunting)";
        $("sub-airvol").style.color = "#ef4444";
      } else if (airVol >= 350 && airVol <= 550) {
        $("sub-airvol").textContent = "✔ Άριστο αερομαξιλάρι";
        $("sub-airvol").style.color = "#10b981";
      } else {
        $("sub-airvol").textContent = "Στόχος: ~450–500 L";
        $("sub-airvol").style.color = "var(--muted)";
      }

      let modeText = "OFF (Εκτός)";
      let modeColor = "#ef4444";
      if (state.pumpMode === "auto") {
        modeText = state.pumpRunning ? "AUTO (ΛΕΙΤΟΥΡΓΕΙ)" : "AUTO (Αναμονή)";
        modeColor = state.pumpRunning ? "#10b981" : "#0284c7";
      } else if (state.pumpMode === "man") {
        modeText = state.pumpRunning ? "MANUAL (Σε λειτουργία)" : "MANUAL (Στάση)";
        modeColor = "#f59e0b";
      }
      $("val-pump-status").textContent = modeText;
      $("val-pump-status").title = modeText;
      $("val-pump-status").style.color = modeColor;
      $("sub-pump-starts").textContent = `Κατάθλιψη: ${Math.round(state.dischValve * 100)}% | Εκκιν.: ${startsPerMin}/min`;

      // 2. Alarm Banner
      const banner = $("alarm-banner");
      let bannerClass = "hydro-alarm-banner";
      let bannerMessage = "";
      if (state.safetyPopped) {
        bannerClass += " safety";
        bannerMessage = "⚠️ <b>ΑΣΦΑΛΙΣΤΙΚΟ ΕΠΙΣΤΟΜΙΟ ΑΝΟΙΧΤΟ (7.0 Bar):</b> Υπέρβαση μέγιστης πίεσης! Εκτόνωση! Χάνεται πεπιεσμένος αέρας από το αερομαξιλάρι!";
      } else if (state.huntingAlarm) {
        bannerClass += " hunting";
        bannerMessage = "⚠️ <b>ΣΥΝΑΓΕΡΜΟΣ HUNTING ΑΝΤΛΙΑΣ:</b> Υπερβολικά συχνές εκκινήσεις! Το δοχείο είναι υδρόπληκτο. Κίνδυνος καψίματος του ηλεκτροκινητήρα!";
      } else if (state.stepCompleted[6]) {
        bannerClass += " success";
        bannerMessage = "🎉 <b>ΕΠΙΤΥΧΙΑ:</b> Το υδροφορικό λειτουργεί άριστα! Στραγγαλισμένη κατάθλιψη, σωστός αεροθύλακας, καμία διαφυγή από το ασφαλιστικό των 7.0 Bar.";
      }
      if (banner.className !== bannerClass || banner.innerHTML !== bannerMessage) {
        banner.className = bannerClass;
        banner.innerHTML = bannerMessage;
      }

      // 3. SVG Elements
      const waterHeight = (waterPct / 100) * 230;
      const waterY = 280 - waterHeight;
      const waterRect = $("[data-hydro='tank-water-rect']");
      const waterSurface = $("[data-hydro='tank-water-surface']");
      if (waterRect) {
        waterRect.setAttribute("y", waterY);
        waterRect.setAttribute("height", waterHeight);
      }
      if (waterSurface) {
        waterSurface.setAttribute("y1", waterY);
        waterSurface.setAttribute("y2", waterY);
      }

      const glassHeight = (waterPct / 100) * 190;
      const glassY = 195 - glassHeight;
      const glassWater = $("[data-hydro='glass-water']");
      if (glassWater) {
        glassWater.setAttribute("y", glassY);
        glassWater.setAttribute("height", glassHeight);
      }

      const airInfo = $("[data-hydro='tank-air-info']");
      if (airInfo) {
        airInfo.textContent = `Αέρας: ${Math.round(airVol)} L (${(100 - waterPct).toFixed(0)}%)`;
      }
      const waterInfo = $("[data-hydro='tank-water-info']");
      if (waterInfo) {
        waterInfo.textContent = `${Math.round(state.waterVol)} L (${waterPct.toFixed(0)}%)`;
      }

      const pumpLed = $("[data-hydro='pump-led']");
      if (pumpLed) {
        pumpLed.setAttribute("fill", state.pumpRunning ? "#10b981" : "#64748b");
      }
      const impeller = $("[data-hydro='pump-impeller']");
      if (impeller && state.pumpRunning) {
        const deg = (state.timeSec * 360 * 4) % 360;
        impeller.setAttribute("transform", `rotate(${deg}, 28, 25)`);
      }

      // Discharge throttle valve in SVG
      const dischPctText = $("[data-hydro='disch-valve-pct']");
      if (dischPctText) {
        dischPctText.textContent = `${Math.round(state.dischValve * 100)}%`;
        dischPctText.setAttribute("fill", state.dischValve > 0.65 ? "#ef4444" : (state.dischValve === 0 ? "#64748b" : "#10b981"));
      }
      const dischWheel = $("[data-hydro='valve-disch-wheel']");
      if (dischWheel) {
        dischWheel.setAttribute("stroke", state.dischValve > 0.65 ? "#ef4444" : (state.dischValve === 0 ? "#64748b" : "#10b981"));
      }

      // Animated Flow Lines
      const flowSuction = $("[data-hydro='flow-suction']");
      const flowDischarge = $("[data-hydro='flow-discharge']");
      if (flowSuction) flowSuction.style.display = state.pumpRunning ? "block" : "none";
      if (flowDischarge) flowDischarge.style.display = state.pumpRunning && state.dischValve > 0 ? "block" : "none";

      const flowAir = $("[data-hydro='flow-air']");
      if (flowAir) {
        flowAir.style.display = state.airValveOpen && state.pressure < state.airLinePressure ? "block" : "none";
      }

      const flowDrain = $("[data-hydro='flow-drain']");
      if (flowDrain) {
        flowDrain.style.display = state.drainValveOpen ? "block" : "none";
      }

      const flowConsumer = $("[data-hydro='flow-consumer']");
      if (flowConsumer) {
        flowConsumer.style.display = state.consumerDemand > 0 && state.pressure > 0.3 ? "block" : "none";
      }

      // Safety relief & Vent puffs
      const safetyPuff = $("[data-hydro='safety-puff']");
      if (safetyPuff) safetyPuff.style.display = state.safetyPopped ? "block" : "none";

      const ventPuff = $("[data-hydro='vent-puff']");
      if (ventPuff) ventPuff.style.display = state.ventValveOpen ? "block" : "none";

      // Pressure Gauges Needles (0 to 8 Bar mapped to -135deg to +135deg)
      const pClamped = Math.min(8, Math.max(0, state.pressure));
      const pAngle = -135 + (pClamped / 8) * 270;
      const mainNeedle = $("[data-hydro='gauge-main-needle']");
      if (mainNeedle) {
        mainNeedle.setAttribute("transform", `rotate(${pAngle}, 30, 30)`);
      }
      $("gauge-main-val").textContent = state.pressure.toFixed(2) + " Bar";

      const pumpP = Math.min(8, Math.max(0, state.pumpDischargePress));
      const pumpAngle = -135 + (pumpP / 8) * 270;
      const pumpNeedle = $("[data-hydro='gauge-pump-needle']");
      if (pumpNeedle) {
        pumpNeedle.setAttribute("transform", `rotate(${pumpAngle}, 15, 15)`);
      }
      $("gauge-pump-val").textContent = state.pumpDischargePress.toFixed(1) + " bar";

      // Air network gauge
      const airP = Math.min(8, Math.max(0, state.airLinePressure));
      const airAngle = -135 + (airP / 8) * 270;
      const airNeedle = $("[data-hydro='gauge-air-needle']");
      if (airNeedle) {
        airNeedle.setAttribute("transform", `rotate(${airAngle}, 15, 15)`);
      }
      $("gauge-air-val").textContent = state.airLinePressure.toFixed(1) + " bar";
      $("air-line-label").textContent = state.airLinePressure.toFixed(1) + " Bar";

      // Pressostat contact line & text
      const contactLine = $("[data-hydro='contact-line']");
      const contactText = $("[data-hydro='contact-status-text']");
      if (state.pumpRunning) {
        if (contactLine) contactLine.setAttribute("y2", "5");
        if (contactText) {
          contactText.textContent = "ON (Κλειστή)";
          contactText.setAttribute("fill", "#10b981");
        }
      } else {
        if (contactLine) contactLine.setAttribute("y2", "-2");
        if (contactText) {
          contactText.textContent = "OFF (Ανοιχτή)";
          contactText.setAttribute("fill", "#ef4444");
        }
      }

      $("pressostat-settings").textContent = `In: ${state.cutIn.toFixed(1)} | Out: ${state.cutOut.toFixed(1)} bar`;
      $("pressostat-diff").textContent = (state.cutOut - state.cutIn).toFixed(1);

      // Warning if Cut-out is close to safety valve (>= 6.8 Bar)
      const pWarn = $("pressostat-warn");
      if (pWarn) {
        pWarn.style.display = state.cutOut >= 6.8 ? "block" : "none";
      }

      // Valve handles & colors
      updateValveUI("air", state.airValveOpen);
      updateValveUI("vent", state.ventValveOpen);
      updateValveUI("drain", state.drainValveOpen);

      // Discharge throttling badge & text
      const dischBadge = $("disch-badge");
      if (dischBadge) {
        if (state.dischValve > 0.65) {
          dischBadge.textContent = `${Math.round(state.dischValve * 100)}% (Πλήρες - Κίνδυνος > 7.0 Bar)`;
          dischBadge.style.color = "#ef4444";
        } else if (state.dischValve === 0) {
          dischBadge.textContent = "0% (Κλειστό - 0 Bar)";
          dischBadge.style.color = "#64748b";
        } else {
          dischBadge.textContent = `${Math.round(state.dischValve * 100)}% (Στραγγαλισμένο - Ασφαλές ~6 Bar)`;
          dischBadge.style.color = "#10b981";
        }
      }
      $("disch-val").textContent = `${Math.round(state.dischValve * 100)}%`;

      // Consumer demand text
      const demands = { 0: "0% (Κλειστή)", 0.25: "Χαμηλή (25%)", 0.50: "Κανονική (50%)", 1.0: "Υψηλή (100%)" };
      $("consumer-flow-text").textContent = demands[state.consumerDemand] || `${Math.round(state.consumerDemand*100)}%`;
      $("consumer-demand-label").textContent = demands[state.consumerDemand] || "";

      // Checklist Steps Classes
      const stepsList = $("steps-list");
      if (stepsList) {
        for (let i = 1; i <= 6; i++) {
          const li = stepsList.querySelector(`[data-step="${i}"]`);
          if (li) {
            if (state.stepCompleted[i]) {
              li.className = "done";
            } else if (i === 1 || state.stepCompleted[i - 1]) {
              li.className = "active";
            } else {
              li.className = "";
            }
          }
        }
      }
    }

    function updateValveUI(type, isOpen) {
      const handle = $(`[data-hydro='valve-${type}-handle']`);
      const stateText = $(`[data-hydro='valve-${type}-state']`);
      const btn = $(`btn-${type}-valve`);

      if (handle) handle.setAttribute("fill", isOpen ? "#10b981" : "#ef4444");
      if (stateText) {
        stateText.textContent = isOpen ? "ΑΝΟΙΧΤΗ" : "ΚΛΕΙΣΤΗ";
        stateText.setAttribute("fill", isOpen ? "#10b981" : "#ef4444");
      }
      if (btn) {
        btn.textContent = isOpen ? "ΑΝΟΙΧΤΗ" : "ΚΛΕΙΣΤΗ";
        btn.className = `hydro-valve-btn ${isOpen ? "is-open" : "is-closed"}`;
      }
    }

    // --- Action Handlers ---
    function setPumpMode(mode) {
      state.pumpMode = mode;
      addLog("info", `Διακόπτης αντλίας τέθηκε σε: ${mode.toUpperCase()}`);

      $("mode-off").className = "hydro-toggle-btn" + (mode === "off" ? " active-off" : "");
      $("mode-auto").className = "hydro-toggle-btn" + (mode === "auto" ? " active-auto" : "");
      $("mode-man").className = "hydro-toggle-btn" + (mode === "man" ? " active-man" : "");
      $("pump-mode-label").textContent = mode.toUpperCase();
      $("pump-mode-label").style.color = mode === "off" ? "#ef4444" : mode === "auto" ? "#10b981" : "#f59e0b";
      render();
    }

    function setDischargeValve(pct) {
      state.dischValve = pct / 100;
      $("range-disch").value = pct;
      $("disch-preset-0").className = "hydro-toggle-btn" + (pct === 0 ? " active-off" : "");
      $("disch-preset-50").className = "hydro-toggle-btn" + (pct === 50 ? " active-auto" : "");
      $("disch-preset-100").className = "hydro-toggle-btn" + (pct === 100 ? " active-off" : "");

      if (pct > 65) {
        addLog("warn", `⚠️ Επιστόμιο κατάθλιψης στο ${pct}%: Η αντλία μπορεί να αναπτύξει έως 7.3 Bar! Αν λειτουργήσει προς πλήρωση, υπάρχει σοβαρός κίνδυνος ανοίγματος του ασφαλιστικού (7.0 Bar) και απώλειας αέρα!`);
      } else if (pct === 0) {
        addLog("info", "Επιστόμιο κατάθλιψης αντλίας κλειστό (0%).");
      } else {
        addLog("ok", `Επιστόμιο κατάθλιψης στραγγαλισμένο στο ${pct}%: Μέγιστη μεταφερόμενη πίεση ~5.9 Bar (ασφαλές, κάτω από τα 7.0 Bar).`);
      }
      render();
    }

    function toggleAirValve() {
      state.airValveOpen = !state.airValveOpen;
      if (state.airValveOpen) {
        if (state.pressure >= state.airLinePressure) {
          addLog("warn", `⚠️ Άνοιγμα βάνας αέρα: Η πίεση του υδροφορικού (${state.pressure.toFixed(2)} Bar) είναι ίση ή μεγαλύτερη από τη γραμμή (${state.airLinePressure.toFixed(1)} Bar). Το αντεπίστροφο (NRV) εμποδίζει την είσοδο αέρα!`);
        } else if (state.waterVol > 880) {
          addLog("warn", `⚠️ Άνοιγμα βάνας αέρα με σχεδόν γεμάτο δοχείο (${((state.waterVol/TOTAL_VOLUME)*100).toFixed(0)}% νερό): Ο ελάχιστος χώρος αέρα θα φτάσει ακαριαία την πίεση δικτύου χωρίς να αποκατασταθεί πραγματικός όγκος αεροθύλακα!`);
        } else {
          addLog("ok", `Άνοιγμα βάνας πεπιεσμένου αέρα (${state.airLinePressure.toFixed(1)} Bar). Συμπλήρωση αέρα στο δοχείο...`);
        }
      } else {
        addLog("info", "Κλείσιμο βάνας πεπιεσμένου αέρα.");
      }
      render();
    }

    function toggleVentValve() {
      state.ventValveOpen = !state.ventValveOpen;
      if (state.ventValveOpen) {
        addLog("warn", `💨 Άνοιγμα βάνας εξαέρωσης (Air Vent). Εκτόνωση αέρα από την κορυφή του δοχείου στην ατμόσφαιρα (χρήση σε συντήρηση/αποσυμπίεση)...`);
      } else {
        addLog("info", "Κλείσιμο βάνας εξαέρωσης (Air Vent).");
      }
      render();
    }

    function toggleDrainValve() {
      state.drainValveOpen = !state.drainValveOpen;
      if (state.drainValveOpen) {
        if (state.pumpMode === "auto" && state.cutIn >= 3.0) {
          addLog("warn", `⚠️ Άνοιγμα βάνας Drain: Προσοχή! Η αντλία είναι στο AUTO (Cut-in: ${state.cutIn.toFixed(1)} Bar). Μόλις πέσει η πίεση, η αντλία θα ξεκινήσει αυτόματα και θα ξαναγεμίσει το δοχείο! Πρέπει πρώτα να θέσετε την αντλία στο OFF.`);
        } else {
          addLog("info", `Άνοιγμα βάνας στραγγίσματος (Drain). Εκκένωση περίσσειας νερού προς τη σεντίνα...`);
        }
      } else {
        addLog("info", "Κλείσιμο βάνας drain.");
      }
      render();
    }

    function setConsumerDemand(demand) {
      state.consumerDemand = demand;
      addLog("info", `Ζήτηση κατανάλωσης δικτύου τέθηκε σε: ${Math.round(demand * 100)}%`);
      $("demand-0").className = "hydro-toggle-btn" + (demand === 0 ? " active-auto" : "");
      $("demand-25").className = "hydro-toggle-btn" + (demand === 0.25 ? " active-auto" : "");
      $("demand-50").className = "hydro-toggle-btn" + (demand === 0.50 ? " active-auto" : "");
      $("demand-100").className = "hydro-toggle-btn" + (demand === 1.0 ? " active-auto" : "");
      render();
    }

    function resetSimulation() {
      state.waterVol = 920; // 92% water (waterlogged)
      state.airMass = 460;
      state.pressure = 5.2;
      state.pumpDischargePress = 0;
      state.safetyPopped = false;
      state.airLinePressure = 6.5;
      state.dischValve = 1.0; // Starts 100% full open!
      state.pumpMode = "auto";
      state.pumpRunning = false;
      state.cutIn = 4.2;
      state.cutOut = 6.8; // High Cut-out to demonstrate ship defect
      state.airValveOpen = false;
      state.ventValveOpen = false;
      state.drainValveOpen = false;
      state.consumerDemand = 0.50;
      state.pumpStartsHistory = [];
      state.safetyTripsHistory = [];
      state.huntingAlarm = false;
      state.timeSec = 0;
      state.stepCompleted = [false, false, false, false, false, false, false];

      $("range-cutin").value = "4.2";
      $("range-cutout").value = "6.8";
      $("cutin-val").textContent = "4.2 Bar";
      $("cutout-val").textContent = "6.8 Bar";

      $("range-disch").value = "100";
      $("air-line-select").value = "6.5";

      setPumpMode("auto");
      setDischargeValve(100);
      setConsumerDemand(0.50);

      logs = [];
      addLog("info", "🔄 Επαναφορά προσομοίωσης: Το υδροφορικό ξεκινά σε κατάσταση υπερπλήρωσης (92% νερό) με πλήρως ανοιχτή κατάθλιψη (100% - 7.3 Bar max).");
      addLog("warn", "⚠️ Παρατηρήστε ότι όταν η αντλία λειτουργεί προς πλήρωση, ξεπερνά τα 7.0 Bar και ανοίγει το ασφαλιστικό, χάνοντας αέρα! Ακολουθήστε τα βήματα για σωστή ρύθμιση.");
      render();
    }

    function showHint() {
      for (let i = 1; i <= 6; i++) {
        if (!state.stepCompleted[i]) {
          let hintText = "";
          if (i === 1) hintText = "Παρατηρήστε ότι με 100% ανοιχτή κατάθλιψη η αντλία αναπτύσσει έως 7.3 Bar, υπερβαίνει τα 7.0 Bar του ασφαλιστικού και χάνει αέρα κάθε φορά που δουλεύει.";
          else if (i === 2) hintText = "Στραγγαλίστε το επιστόμιο κατάθλιψης αντλίας στο ~50% (ώστε το μανομετρικό να περιοριστεί κάτω από 6.0 Bar) και θέστε την αντλία στο OFF.";
          else if (i === 3) hintText = "Ανοίξτε τη βάνα Drain (και τη βάνα εξαέρωσης/vent αν χρειάζεται). Παρακολουθήστε τον υαλοδείκτη μέχρι η στάθμη να κατέβει στο NWL (~50–60%). Μετά κλείστε το Drain!";
          else if (i === 4) hintText = "Ανοίξτε τη βάνα πεπιεσμένου αέρα (δίκτυο 6.0–7.0 Bar). Συμπληρώστε αέρα μέχρι η πίεση να φτάσει τα ~4.0–4.5 Bar, και κλείστε τη βάνα αέρα.";
          else if (i === 5) hintText = "Ρυθμίστε τον πρεσσοστάτη σε ασφαλείς τιμές: Cut-in ~4.2 Bar και Cut-out ~5.8 Bar (αρκετά κάτω από τα 7.0 Bar). Μετά θέστε την αντλία στο AUTO.";
          else if (i === 6) hintText = "Ανοίξτε κανονική κατανάλωση (50%). Το σύστημα λειτουργεί σταθερά, χωρίς hunting και χωρίς να ανοίξει ποτέ ξανά το ασφαλιστικό!";

          addLog("ok", `💡 Υπόδειξη για Βήμα ${i}: ${hintText}`);
          return;
        }
      }
      addLog("ok", "💡 Έχετε ολοκληρώσει όλα τα βήματα με απόλυτη επιτυχία!");
    }

    // --- Attach Event Listeners ---
    $("speed").addEventListener("change", function (e) {
      state.simSpeed = parseFloat(e.target.value);
      addLog("info", `Ταχύτητα προσομοίωσης: ×${state.simSpeed}`);
    });

    $("air-line-select").addEventListener("change", function (e) {
      state.airLinePressure = parseFloat(e.target.value);
      addLog("info", `Πίεση δικτύου αέρα πλοίου ρυθμίστηκε στα: ${state.airLinePressure.toFixed(1)} Bar.`);
      render();
    });

    $("reset").addEventListener("click", resetSimulation);
    $("hint").addEventListener("click", showHint);

    // Pump mode buttons
    $("mode-off").addEventListener("click", () => setPumpMode("off"));
    $("mode-auto").addEventListener("click", () => setPumpMode("auto"));
    $("mode-man").addEventListener("click", () => setPumpMode("man"));

    // Throttling slider & presets
    $("range-disch").addEventListener("input", function (e) {
      setDischargeValve(parseFloat(e.target.value));
    });
    $("disch-preset-0").addEventListener("click", () => setDischargeValve(0));
    $("disch-preset-50").addEventListener("click", () => setDischargeValve(50));
    $("disch-preset-100").addEventListener("click", () => setDischargeValve(100));

    // Pressostat sliders
    $("range-cutin").addEventListener("input", function (e) {
      const val = parseFloat(e.target.value);
      if (val >= state.cutOut - 0.4) {
        state.cutIn = state.cutOut - 0.4;
        e.target.value = state.cutIn.toFixed(1);
      } else {
        state.cutIn = val;
      }
      $("cutin-val").textContent = state.cutIn.toFixed(1) + " Bar";
      render();
    });

    $("range-cutout").addEventListener("input", function (e) {
      const val = parseFloat(e.target.value);
      if (val <= state.cutIn + 0.4) {
        state.cutOut = state.cutIn + 0.4;
        e.target.value = state.cutOut.toFixed(1);
      } else {
        state.cutOut = val;
      }
      $("cutout-val").textContent = state.cutOut.toFixed(1) + " Bar";
      render();
    });

    // Valve buttons
    $("btn-air-valve").addEventListener("click", toggleAirValve);
    $("btn-vent-valve").addEventListener("click", toggleVentValve);
    $("btn-drain-valve").addEventListener("click", toggleDrainValve);

    // Consumer demands buttons
    $("demand-0").addEventListener("click", () => setConsumerDemand(0));
    $("demand-25").addEventListener("click", () => setConsumerDemand(0.25));
    $("demand-50").addEventListener("click", () => setConsumerDemand(0.50));
    $("demand-100").addEventListener("click", () => setConsumerDemand(1.0));

    // SVG clickable items
    const clickPump = $("[data-hydro='click-pump']");
    if (clickPump) {
      clickPump.addEventListener("click", function () {
        if (state.pumpMode === "auto") setPumpMode("off");
        else if (state.pumpMode === "off") setPumpMode("auto");
        else setPumpMode("off");
      });
    }

    const clickDisch = $("[data-hydro='click-disch-valve']");
    if (clickDisch) {
      clickDisch.addEventListener("click", function () {
        // Toggle through 100% -> 50% -> 0% -> 50%
        const next = state.dischValve === 1.0 ? 50 : (state.dischValve === 0.5 ? 0 : 50);
        setDischargeValve(next);
      });
    }

    const clickAir = $("[data-hydro='click-air-valve']");
    if (clickAir) clickAir.addEventListener("click", toggleAirValve);

    const clickVent = $("[data-hydro='click-vent-valve']");
    if (clickVent) clickVent.addEventListener("click", toggleVentValve);

    const clickDrain = $("[data-hydro='click-drain-valve']");
    if (clickDrain) clickDrain.addEventListener("click", toggleDrainValve);

    const clickConsumer = $("[data-hydro='click-consumer-valve']");
    if (clickConsumer) {
      clickConsumer.addEventListener("click", function () {
        const next = state.consumerDemand === 0 ? 0.5 : 0;
        setConsumerDemand(next);
      });
    }

    const clickPressostat = $("[data-hydro='click-pressostat']");
    if (clickPressostat) {
      clickPressostat.addEventListener("click", function () {
        addLog("info", `Πρεσσοστάτης: Cut-in = ${state.cutIn.toFixed(1)} Bar, Cut-out = ${state.cutOut.toFixed(1)} Bar. Χρησιμοποιήστε τα sliders στον δεξιό πίνακα για ρύθμιση.`);
      });
    }

    // --- Start simulation loop ---
    resetSimulation();

    timer = window.setInterval(function () {
      if (state.simSpeed > 0) {
        const dt = 0.04 * state.simSpeed;
        simulateStep(dt);
        render();
      }
    }, 40);

    return function () {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    };
  };
})();
