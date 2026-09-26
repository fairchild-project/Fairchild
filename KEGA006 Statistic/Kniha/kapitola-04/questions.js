window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Čo najlepšie vystihuje bodový odhad?",
    answers: [
      "Jedno číslo z výberu, ktorým odhadujeme populačný parameter",
      "Rozsah všetkých hodnôt v populácii",
      "Pravdepodobnosť, že výber je správny",
      "Počet pozorovaní mimo priemeru"
    ],
    correct: 0,
    ok: "Správne. Bodový odhad je jedno číslo vypočítané z výberu, ktorým odhadujeme neznámy populačný parameter.",
    bad: "Nesprávne. Rozlišuj výberovú štatistiku od populačného parametra.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:14px;">
          <div style="padding:18px;border:1px solid #58d6f3;border-radius:14px;text-align:center;background:rgba(88,214,243,.06);">
            <div style="color:#58d6f3;font:800 14px Arial;">VÝBER</div>
            <div style="margin-top:10px;color:#f2f5f8;font:900 28px Consolas,monospace;">n = 1500</div>
          </div>
          <div style="color:#8d9aaa;font:900 28px Arial;">→</div>
          <div style="padding:18px;border:1px solid #f3c969;border-radius:14px;text-align:center;background:rgba(243,201,105,.05);">
            <div style="color:#f3c969;font:800 14px Arial;">POPULÁCIA</div>
            <div style="margin-top:10px;color:#f2f5f8;font:900 28px Consolas,monospace;">μ = ?</div>
          </div>
        </div>
        <div style="margin-top:18px;text-align:center;color:#8d9aaa;font:700 12px Consolas,monospace;">Z výberu sa snažíme usudzovať o neznámom parametri populácie.</div>
      </div>`
  },
  {
    checkpoint: 1,
    question: "Výberový priemer systolického tlaku je 118,31 mmHg. Čo je v tejto situácii neznáme?",
    answers: [
      "Počet pacientov vo výbere",
      "Populačný priemer systolického tlaku",
      "Výberový priemer 118,31",
      "Jednotka merania mmHg"
    ],
    correct: 1,
    ok: "Správne. Výberový priemer poznáme; ním odhadujeme neznámy populačný priemer.",
    bad: "Nesprávne. Hodnota 118,31 je už vypočítaná z výberu. Hľadaný je parameter celej populácie.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
          <div style="padding:16px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="display:block;color:#8d9aaa;font:700 12px Consolas,monospace;">VEĽKOSŤ VÝBERU</span><b style="display:block;margin-top:8px;color:#58d6f3;font:900 24px Consolas,monospace;">1500</b></div>
          <div style="padding:16px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="display:block;color:#8d9aaa;font:700 12px Consolas,monospace;">VÝBEROVÝ PRIEMER</span><b style="display:block;margin-top:8px;color:#63e6be;font:900 24px Consolas,monospace;">118,31</b></div>
          <div style="padding:16px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="display:block;color:#8d9aaa;font:700 12px Consolas,monospace;">POPULAČNÝ PRIEMER</span><b style="display:block;margin-top:8px;color:#f3c969;font:900 24px Consolas,monospace;">?</b></div>
        </div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ktoré tvrdenie správne odlišuje SD a SE?",
    answers: [
      "SD opisuje neistotu priemeru a SE rozptyl jednotlivcov",
      "SD aj SE opisujú presne tú istú vec",
      "SD opisuje rozptýlenie jednotlivých meraní, SE neistotu odhadu priemeru",
      "SE sa so zvyšovaním n vždy zväčšuje"
    ],
    correct: 2,
    ok: "Správne. SD patrí k variabilite jednotlivých dát, SE k neistote odhadnutého priemeru.",
    bad: "Nesprávne. Rozlišuj šírku dát od neistoty výberového priemeru.",
    visual: `
      <div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <svg viewBox="0 0 500 230" style="width:100%;height:auto;display:block;">
          <line x1="35" y1="190" x2="465" y2="190" stroke="#8d9aaa" stroke-width="2"/>
          <path d="M55 188 C100 185,130 145,165 105 C195 70,225 48,250 46 C275 48,305 70,335 105 C370 145,400 185,445 188" fill="none" stroke="#58d6f3" stroke-width="3"/>
          <path d="M155 188 C185 186,205 130,225 84 C235 60,243 46,250 42 C257 46,265 60,275 84 C295 130,315 186,345 188" fill="none" stroke="#63e6be" stroke-width="3"/>
          <text x="95" y="32" fill="#58d6f3" font-size="14" font-family="Arial" font-weight="700">rozptýlenie jednotlivých meraní</text>
          <text x="276" y="65" fill="#63e6be" font-size="14" font-family="Arial" font-weight="700">neistota priemeru</text>
        </svg>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ak sa SD nemení a veľkosť výberu n sa zväčší zo 100 na 400, čo sa stane so SE?",
    answers: [
      "Zväčší sa približne dvojnásobne",
      "Zmenší sa približne na polovicu",
      "Zostane rovnaká",
      "Zmenší sa štvornásobne"
    ],
    correct: 1,
    ok: "Správne. SE = SD/√n; keď sa n zväčší štvornásobne, √n sa zdvojnásobí a SE klesne na polovicu.",
    bad: "Nesprávne. Pozri sa na odmocninu z n v menovateli vzťahu SE = SD/√n.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="text-align:center;color:#f3c969;font:900 26px Consolas,monospace;margin-bottom:20px;">SE = SD / √n</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div style="padding:18px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="display:block;color:#8d9aaa;font:700 13px Consolas,monospace;">SCENÁR A</span><b style="display:block;margin-top:8px;color:#58d6f3;font:900 24px Consolas,monospace;">n = 100</b></div>
          <div style="padding:18px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="display:block;color:#8d9aaa;font:700 13px Consolas,monospace;">SCENÁR B</span><b style="display:block;margin-top:8px;color:#63e6be;font:900 24px Consolas,monospace;">n = 400</b></div>
        </div>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Čo znamená 95 % interval spoľahlivosti vo frekventistickom zmysle?",
    answers: [
      "Parameter má po výpočte presne 95 % šancu byť v tomto jednom intervale",
      "Asi 95 % jednotlivých pacientov musí ležať medzi hranicami intervalu",
      "Pri opakovanom výbere by približne 95 % takto zostrojených intervalov zachytilo pevný parameter",
      "95 % znamená, že výber obsahuje 95 % populácie"
    ],
    correct: 2,
    ok: "Správne. 95 % opisuje dlhodobú úspešnosť metódy pri opakovaných výberoch.",
    bad: "Nesprávne. Parameter je pevný; menia sa výbery a z nich vypočítané intervaly.",
    visual: `
      <div style="width:100%;max-width:520px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <svg viewBox="0 0 500 250" style="width:100%;height:auto;display:block;">
          <line x1="260" y1="20" x2="260" y2="230" stroke="#f3c969" stroke-width="2" stroke-dasharray="6 5"/>
          <g stroke-width="5" stroke-linecap="round">
            <line x1="120" y1="45" x2="330" y2="45" stroke="#63e6be"/>
            <line x1="165" y1="78" x2="360" y2="78" stroke="#63e6be"/>
            <line x1="95" y1="111" x2="280" y2="111" stroke="#63e6be"/>
            <line x1="300" y1="144" x2="455" y2="144" stroke="#f25c7f"/>
            <line x1="145" y1="177" x2="375" y2="177" stroke="#63e6be"/>
            <line x1="190" y1="210" x2="315" y2="210" stroke="#63e6be"/>
          </g>
          <text x="270" y="18" fill="#f3c969" font-size="13" font-family="Arial">pevný parameter</text>
        </svg>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Ak zvýšime úroveň spoľahlivosti z 95 % na 99 % a ostatné podmienky sa nemenia, čo očakávame?",
    answers: [
      "Užší interval",
      "Širší interval",
      "Rovnakú šírku intervalu",
      "Automatický posun stredu intervalu"
    ],
    correct: 1,
    ok: "Správne. Vyššia požadovaná spoľahlivosť vyžaduje širší interval.",
    bad: "Nesprávne. Vyššia spoľahlivosť znamená konzervatívnejší, teda širší interval.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="display:grid;grid-template-columns:110px 1fr;row-gap:24px;align-items:center;">
          <div style="color:#58d6f3;font:900 18px Consolas,monospace;">95 %</div>
          <div style="height:10px;border-radius:99px;background:linear-gradient(90deg,transparent 18%,#58d6f3 18%,#58d6f3 82%,transparent 82%);"></div>
          <div style="color:#f3c969;font:900 18px Consolas,monospace;">99 %</div>
          <div style="height:10px;border-radius:99px;background:linear-gradient(90deg,transparent 6%,#f3c969 6%,#f3c969 94%,transparent 94%);"></div>
        </div>
        <div style="margin-top:18px;text-align:center;color:#8d9aaa;font:700 12px Consolas,monospace;">Rovnaký stred, rozdielna požadovaná miera pokrytia.</div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Aký 95 % interval bol v kapitole uvedený pre priemer systolického tlaku?",
    answers: [
      "(104,84 ; 131,78) mmHg",
      "(117,62 ; 118,99) mmHg",
      "(118,31 ; 1500) mmHg",
      "(13,47 ; 118,31) mmHg"
    ],
    correct: 1,
    ok: "Správne. Bodový odhad je 118,31 mmHg a interval je približne 117,62 až 118,99 mmHg.",
    bad: "Nesprávne. Vráť sa k číselnej osi a skontroluj, ktoré hodnoty sú hranice a ktorá je stred.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <svg viewBox="0 0 500 160" style="width:100%;height:auto;display:block;">
          <line x1="45" y1="95" x2="455" y2="95" stroke="#8d9aaa" stroke-width="2"/>
          <line x1="160" y1="95" x2="340" y2="95" stroke="#63e6be" stroke-width="8" stroke-linecap="round"/>
          <circle cx="250" cy="95" r="8" fill="#f3c969"/>
          <line x1="160" y1="78" x2="160" y2="112" stroke="#63e6be" stroke-width="2"/>
          <line x1="340" y1="78" x2="340" y2="112" stroke="#63e6be" stroke-width="2"/>
          <text x="250" y="55" text-anchor="middle" fill="#f3c969" font-size="15" font-family="Arial" font-weight="700">výberový priemer</text>
          <text x="160" y="135" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial">dolná hranica</text>
          <text x="340" y="135" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial">horná hranica</text>
        </svg>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Výberový priemer je 118,31 mmHg a 95 % interval je (117,62; 118,99). Ktoré tvrdenie je správne?",
    answers: [
      "Interval je centrovaný približne okolo bodového odhadu",
      "Priemer leží mimo intervalu",
      "Dolná hranica je vyššia než horná",
      "Interval obsahuje všetkých jednotlivých pacientov"
    ],
    correct: 0,
    ok: "Správne. Hranice ležia približne symetricky okolo výberového priemeru.",
    bad: "Nesprávne. Pozri sa na polohu bodového odhadu voči obom hraniciam.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;align-items:end;">
          <div style="text-align:center;"><span style="display:block;color:#8d9aaa;font:700 12px Consolas,monospace;">HRANICA A</span><b style="display:block;margin-top:8px;color:#58d6f3;font:900 22px Consolas,monospace;">117,62</b></div>
          <div style="text-align:center;"><span style="display:block;color:#8d9aaa;font:700 12px Consolas,monospace;">ODHAD</span><b style="display:block;margin-top:8px;color:#f3c969;font:900 22px Consolas,monospace;">118,31</b></div>
          <div style="text-align:center;"><span style="display:block;color:#8d9aaa;font:700 12px Consolas,monospace;">HRANICA B</span><b style="display:block;margin-top:8px;color:#63e6be;font:900 22px Consolas,monospace;">118,99</b></div>
        </div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Čo sa pri nezmenených ostatných podmienkach zvyčajne stane s intervalom, keď zväčšíme n?",
    answers: [
      "Interval sa zúži",
      "Interval sa rozšíri",
      "Interval sa vždy posunie doprava",
      "SD sa automaticky zdvojnásobí"
    ],
    correct: 0,
    ok: "Správne. Väčšie n znižuje štandardnú chybu, preto sa interval zvyčajne zužuje.",
    bad: "Nesprávne. Uvažuj cez vzťah medzi n, SE a šírkou intervalu.",
    visual: `
      <div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="display:grid;grid-template-columns:110px 1fr;row-gap:22px;align-items:center;">
          <div style="color:#58d6f3;font:900 16px Consolas,monospace;">n = 100</div>
          <div style="height:10px;background:linear-gradient(90deg,transparent 20%,#58d6f3 20%,#58d6f3 80%,transparent 80%);"></div>
          <div style="color:#63e6be;font:900 16px Consolas,monospace;">n = 400</div>
          <div style="height:10px;background:linear-gradient(90deg,transparent 34%,#63e6be 34%,#63e6be 66%,transparent 66%);"></div>
        </div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Ktorá zmena pri rovnakom n typicky vedie k širšiemu intervalu spoľahlivosti?",
    answers: [
      "Menšia variabilita dát",
      "Väčšia variabilita dát",
      "Menšia smerodajná odchýlka",
      "Nezmenená SD pri rovnakom n"
    ],
    correct: 1,
    ok: "Správne. Väčšia variabilita zväčšuje SE a tým aj šírku intervalu.",
    bad: "Nesprávne. Pri rovnakom n sleduj, čo sa deje so SE, keď rastie SD.",
    visual: `
      <div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <table style="width:100%;border-collapse:separate;border-spacing:6px;font:700 13px Consolas,monospace;text-align:center;">
          <tr><th style="padding:10px;color:#f3c969;">SCENÁR</th><th style="padding:10px;color:#f3c969;">n</th><th style="padding:10px;color:#f3c969;">SD</th><th style="padding:10px;color:#f3c969;">ÚROVEŇ</th></tr>
          <tr><td style="padding:12px;background:rgba(88,214,243,.08);border-radius:8px;color:#58d6f3;">A</td><td style="padding:12px;background:rgba(255,255,255,.03);border-radius:8px;">400</td><td style="padding:12px;background:rgba(255,255,255,.03);border-radius:8px;">10</td><td style="padding:12px;background:rgba(255,255,255,.03);border-radius:8px;">95 %</td></tr>
          <tr><td style="padding:12px;background:rgba(99,230,190,.08);border-radius:8px;color:#63e6be;">B</td><td style="padding:12px;background:rgba(255,255,255,.03);border-radius:8px;">400</td><td style="padding:12px;background:rgba(255,255,255,.03);border-radius:8px;">20</td><td style="padding:12px;background:rgba(255,255,255,.03);border-radius:8px;">95 %</td></tr>
        </table>
      </div>`
  }
];
