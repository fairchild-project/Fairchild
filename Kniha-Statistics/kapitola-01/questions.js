window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "\u010co v tomto datasete reprezentuje jeden riadok?",
    answers: [
      "Jedn\u00e9ho syntetick\u00e9ho pacienta",
      "Jednu \u0161tatistick\u00fa met\u00f3du",
      "Jednu premenn\u00fa",
      "Jeden graf"
    ],
    correct: 0,
    ok: "Spr\u00e1vne. Jeden riadok je jeden pozorovan\u00fd objekt - tu jeden syntetick\u00fd pacient.",
    bad: "Nespr\u00e1vne. Pozri si e\u0161te raz vysvetlenie riadkov a st\u013apcov.",
    visual: `
      <div class="mini-table" aria-label="Ukazka jedneho riadku datasetu">
        <div class="head">ID</div><div class="head">VEK</div><div class="head">BMI</div><div class="head">FAJ\u010cENIE</div>
        <div class="rowmark">1002</div><div class="rowmark">62</div><div class="rowmark">29,8</div><div class="rowmark">\u00e1no</div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ktor\u00e1 dvojica je klasifikovan\u00e1 spr\u00e1vne?",
    answers: [
      "Faj\u010denie = kvantitat\u00edvna; BMI = kvalitat\u00edvna",
      "Faj\u010denie = kvalitat\u00edvna; BMI = kvantitat\u00edvna",
      "ID pacienta = spojit\u00e1; vek = nomin\u00e1lna",
      "Pohlavie = spojit\u00e1; CRP = nomin\u00e1lna"
    ],
    correct: 1,
    ok: "Spr\u00e1vne. Faj\u010denie je kateg\u00f3ria, BMI je kvantitat\u00edvne meranie.",
    bad: "Nespr\u00e1vne. Vr\u00e1\u0165 sa k rozdeleniu KATEG\u00d3RIA vs. MERANIE.",
    visual: ""
  },
  {
    checkpoint: 3,
    question: "Sk\u00f3re z\u00e1va\u017enosti 1-5 m\u00e1 prirodzen\u00e9 poradie, ale rozdiel medzi stup\u0148ami nemus\u00ed by\u0165 rovnak\u00fd. Ak\u00fd je to typ?",
    answers: [
      "Nomin\u00e1lna premenn\u00e1",
      "Ordin\u00e1lna premenn\u00e1",
      "Spojit\u00e1 premenn\u00e1",
      "Identifik\u00e1tor"
    ],
    correct: 1,
    ok: "Spr\u00e1vne. Ordin\u00e1lna premenn\u00e1 m\u00e1 poradie, no vzdialenosti medzi stup\u0148ami nemusia by\u0165 rovnak\u00e9.",
    bad: "Nespr\u00e1vne. Pozri si e\u0161te raz schodisko z\u00e1va\u017enosti.",
    visual: `
      <div class="stairs" aria-label="Ordinalne skore 1 az 5">
        <div class="stair s1">1</div><div class="stair s2">2</div><div class="stair s3">3</div><div class="stair s4">4</div><div class="stair s5">5</div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Graf ukazuje iba oddelen\u00e9 mo\u017en\u00e9 hodnoty 0, 1, 2, 3, 4, 5. Ako tak\u00fa premenn\u00fa klasifikuje\u0161?",
    answers: ["Diskr\u00e9tna", "Spojit\u00e1", "Nomin\u00e1lna", "Nez\u00e1visl\u00e1"],
    correct: 0,
    ok: "Spr\u00e1vne. Diskr\u00e9tna premenn\u00e1 preskakuje medzi oddelen\u00fdmi hodnotami.",
    bad: "Nespr\u00e1vne. Vr\u00e1\u0165 sa k rozdielu medzi oddelen\u00fdmi bodmi a plynulou osou.",
    visual: `
      <div class="axis-demo" aria-label="Diskretne hodnoty na osi">
        <div class="visual-kicker">MO\u017dN\u00c9 HODNOTY</div>
        <div class="axis-line">
          <span class="axis-dot d0"></span><span class="axis-dot d1"></span><span class="axis-dot d2"></span>
          <span class="axis-dot d3"></span><span class="axis-dot d4"></span><span class="axis-dot d5"></span>
        </div>
        <div class="tick-labels"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span></div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "M\u00e1\u0161 dve kvantitat\u00edvne premenn\u00e9, napr\u00edklad BMI a systolick\u00fd tlak. Ktor\u00fd smer anal\u00fdzy d\u00e1va zmysel?",
    answers: [
      "Korel\u00e1cia alebo regresia",
      "Kontingen\u010dn\u00e1 tabu\u013eka pre kateg\u00f3rie",
      "Modus ako jedin\u00e1 met\u00f3da",
      "Iba zoradenie kateg\u00f3ri\u00ed"
    ],
    correct: 0,
    ok: "Spr\u00e1vne. Dve kvantitat\u00edvne premenn\u00e9 prirodzene ved\u00fa ku korel\u00e1cii alebo regresii.",
    bad: "Nespr\u00e1vne. Vr\u00e1\u0165 sa k mape TYP PREMENNEJ -> MET\u00d3DA.",
    visual: `
      <div class="axis-demo" aria-label="Scatterplot BMI a systolickeho tlaku">
        <div class="scatter">
          <span class="p1"></span><span class="p2"></span><span class="p3"></span><span class="p4"></span>
          <span class="p5"></span><span class="p6"></span><span class="p7"></span><span class="p8"></span>
        </div>
        <div class="scatter-labels"><span>os X: BMI</span><span>os Y: systolick\u00fd tlak</span></div>
      </div>`
  }
];
