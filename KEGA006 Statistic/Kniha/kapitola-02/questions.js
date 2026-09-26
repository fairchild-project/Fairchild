window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Ak 779 z 1500 pacientov patrí do vybranej skupiny, aká je približná relatívna početnosť?",
    answers: [
      "19,5 %",
      "51,9 %",
      "77,9 %",
      "1500 %"
    ],
    correct: 1,
    ok: "Správne. 779 / 1500 = 0,519, teda približne 51,9 %.",
    bad: "Nesprávne. Zopakuj si rozdiel medzi absolútnou a relatívnou početnosťou.",
    visual: `
      <div class="freq-visual" aria-label="779 z 1500 pacientov">
        <div class="freq-kicker">VYBRANÁ SKUPINA / CELKOM</div>
        <div class="freq-formula"><strong>779</strong><span>/</span><strong>1500</strong></div>
        <div class="freq-track"><div class="freq-fill" style="width:51.9%"></div></div>
        <div class="freq-scale"><span>0 %</span><span>100 %</span></div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ktorá kategória je modusom fajčiarskeho statusu?",
    answers: [
      "Fajčiari — 421",
      "Bývalí fajčiari — 300",
      "Nefajčiari — 779",
      "Modus sa pri kategóriách nepoužíva"
    ],
    correct: 2,
    ok: "Správne. Modus je najčastejšia kategória, teda nefajčiari s početnosťou 779.",
    bad: "Nesprávne. Modus je kategória s najvyššou početnosťou.",
    visual: `
      <div class="bar-quiz" aria-label="Stlpcovy graf fajciarskeho statusu">
        <div class="bar-item"><span class="bar-value">779</span><div class="bar b1"></div><span>NEFAJČIARI</span></div>
        <div class="bar-item"><span class="bar-value">421</span><div class="bar b2"></div><span>FAJČIARI</span></div>
        <div class="bar-item"><span class="bar-value">300</span><div class="bar b3"></div><span>BÝVALÍ</span></div>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Koľko pacientov má skóre závažnosti najviac 4?",
    answers: [
      "260",
      "590",
      "850",
      "1000"
    ],
    correct: 2,
    ok: "Správne. Kumulatívna početnosť pri hodnote 4 je 850.",
    bad: "Nesprávne. Pri otázke „najviac 4“ sčítavame kategórie 1, 2, 3 a 4.",
    visual: `
      <div class="cum-quiz" aria-label="Kumulativna pocetnost skore zavaznosti">
        <div class="cum-title">KUMULATÍVNE POČTY</div>
        <div class="cum-row"><span>1</span><b>90</b></div>
        <div class="cum-row"><span>2</span><b>270</b></div>
        <div class="cum-row"><span>3</span><b>590</b></div>
        <div class="cum-row highlight"><span>4</span><b>850</b></div>
        <div class="cum-row"><span>5</span><b>1000</b></div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Koľko pacientov je v bunke „fajčiar + hospitalizácia áno“?",
    answers: [
      "10",
      "12",
      "14",
      "26"
    ],
    correct: 1,
    ok: "Správne. Bunka na prieniku riadku fajčiar a stĺpca hospitalizácia áno obsahuje 12 pacientov.",
    bad: "Nesprávne. V kontingenčnej tabuľke hľadaj prienik správneho riadku a stĺpca.",
    visual: `
      <div class="cont-table" aria-label="Kontingencna tabulka">
        <div></div><div class="head">NIE</div><div class="head">ÁNO</div>
        <div class="rowhead">NEFAJČIAR</div><div>24</div><div>10</div>
        <div class="rowhead">FAJČIAR</div><div>14</div><div class="target">12</div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "V tabuľke je medzi fajčiarmi 30 hospitalizovaných a 70 nehospitalizovaných. Aký je podiel hospitalizovaných medzi fajčiarmi?",
    answers: [
      "30 %",
      "50 %",
      "60 %",
      "70 %"
    ],
    correct: 0,
    ok: "Správne. Menovateľom je celý riadok fajčiarov: 30 / (30 + 70) = 30 %.",
    bad: "Nesprávne. Otázka znie „medzi fajčiarmi“, preto normalizujeme celý riadok fajčiarov.",
    visual: `
      <div class="pct-table" aria-label="Riadkove percenta">
        <div></div><div class="head">HOSP. ÁNO</div><div class="head">HOSP. NIE</div><div class="head">SPOLU</div>
        <div class="rowhead active">FAJČIARI</div><div class="active">30</div><div class="active">70</div><div class="active">100</div>
        <div class="rowhead">NEFAJČIARI</div><div>20</div><div>180</div><div>200</div>
      </div>`
  }
];
