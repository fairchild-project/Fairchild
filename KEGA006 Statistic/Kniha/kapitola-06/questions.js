window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Prečo je pri troch a viacerých skupinách vhodnejšia ANOVA než séria samostatných t-testov?",
    answers: [
      "ANOVA vždy dokáže, že všetky skupiny sa navzájom líšia.",
      "ANOVA testuje spoločnú H0 o rovnosti priemerov a obmedzí problém opakovaného testovania.",
      "ANOVA sa používa iba vtedy, keď máme presne päť skupín.",
      "Séria t-testov nemá žiadny vplyv na riziko chyby I. druhu."
    ],
    correct: 1,
    ok: "Správne. ANOVA najprv testuje jednu spoločnú nulovú hypotézu pre viac priemerov; konkrétne páry riešime až post-hoc testom.",
    bad: "Nesprávne. Pri viacerých samostatných testoch rastie problém viacnásobného testovania; ANOVA používa jeden globálny test.",
    visual: `
      <div class="anova-one-visual" aria-label="Viac skupin do jednej ANOVA">
        <div class="anova-groups"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span></div>
        <div class="anova-arrow">↓</div>
        <div class="anova-box">1 SPOLOČNÁ ANOVA</div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Kedy bude F-štatistika typicky väčšia?",
    answers: [
      "Keď je variabilita medzi skupinami veľká vzhľadom na variabilitu vnútri skupín.",
      "Keď sú všetky skupinové priemery prakticky rovnaké a vnútorný šum je veľký.",
      "Keď je počet skupín vždy presne dva.",
      "Keď p-hodnota rastie nad 1."
    ],
    correct: 0,
    ok: "Správne. F je pomer variability medzi skupinami a variability vnútri skupín; silnejší signál voči šumu znamená väčšie F.",
    bad: "Nesprávne. Mysli na F ako na pomer signálu medzi skupinami k šumu vnútri skupín.",
    visual: `
      <div class="f-ratio-visual" aria-label="F ako pomer medzi a vnutri">
        <div class="f-top">VARIABILITA MEDZI</div>
        <div class="f-line"></div>
        <div class="f-bottom">VARIABILITA VNÚTRI</div>
        <div class="f-eq">F = MEDZI / VNÚTRI</div>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Jednofaktorová ANOVA dala F = 21,67 a p < 0,001. Čo z toho môžeme priamo uzavrieť?",
    answers: [
      "Všetky tri dvojice skupín sa určite navzájom líšia.",
      "Aspoň jeden skupinový priemer sa líši, ale konkrétne páry ešte treba určiť post-hoc testom.",
      "Nulová hypotéza je pravdivá s pravdepodobnosťou menšou ako 0,1 %.",
      "Fajčenie je jedinou možnou príčinou rozdielu tlaku."
    ],
    correct: 1,
    ok: "Správne. Významná ANOVA hovorí, že nie všetky priemery sú rovnaké. Lokalizáciu rozdielov poskytne až post-hoc analýza.",
    bad: "Nesprávne. Globálny ANOVA test neidentifikuje automaticky všetky konkrétne dvojice.",
    visual: `
      <div class="anova-result-visual" aria-label="Vysledok jednofaktorovej ANOVA">
        <div><span>F</span><b>21,67</b></div>
        <div><span>p</span><b>&lt; 0,001</b></div>
        <p>ASPOŇ JEDEN PRIEMER SA LÍŠI</p>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Tukeyho test dal: A-B nevýznamné, A-C významné, B-C významné. Ktorý záver zodpovedá výsledkom?",
    answers: [
      "Aktívni a bývalí sa významne líšia, ale nefajčiari sa nelíšia od nikoho.",
      "Aktívni a bývalí sa významne nelíšia; obe fajčiarske skupiny sa líšia od nefajčiarov.",
      "Všetky tri dvojice sú nevýznamné.",
      "Tukeyho test neporovnáva dvojice skupín."
    ],
    correct: 1,
    ok: "Správne. Rozdiel sa lokalizoval voči nefajčiarom; aktívni a bývalí medzi sebou významný rozdiel nemajú.",
    bad: "Nesprávne. Prečítaj tri párové porovnania samostatne a sleduj, ktoré obsahujú skupinu C.",
    visual: `
      <div class="tukey-visual" aria-label="Tukeyho porovnania">
        <div class="neutral">A − B <b>NEVÝZNAMNÉ</b></div>
        <div class="good">A − C <b>VÝZNAMNÉ</b></div>
        <div class="good">B − C <b>VÝZNAMNÉ</b></div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Čo je v dvojfaktorovej ANOVA samostatnou treťou otázkou popri dvoch hlavných efektoch?",
    answers: [
      "Interakcia: či sa efekt jedného faktora mení podľa úrovne druhého faktora.",
      "Počet riadkov v dátovom súbore.",
      "Rozdiel medzi mediánom a modusom.",
      "Vždy iba jednovýberový t-test."
    ],
    correct: 0,
    ok: "Správne. Okrem hlavného efektu pohlavia a hlavného efektu fajčenia model testuje aj ich interakciu.",
    bad: "Nesprávne. Dvojfaktorový model má dva hlavné efekty a navyše otázku, či jeden efekt závisí od druhého faktora.",
    visual: `
      <div class="twofactor-visual" aria-label="Dva hlavne efekty a interakcia">
        <div>HLAVNÝ EFEKT<br><b>POHLAVIE</b></div>
        <div>HLAVNÝ EFEKT<br><b>FAJČENIE</b></div>
        <div class="interaction">INTERAKCIA<br><b>POHLAVIE × FAJČENIE</b></div>
      </div>`
  }
];
