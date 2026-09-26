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
    ok: "Správne. Bodový odhad je jedno číslo vypočítané z výberu, napríklad výberový priemer 118,31 mmHg.",
    bad: "Nesprávne. Zopakuj si prechod od výberu k populačnému parametru a význam bodového odhadu.",
    visual: `
      <div class="inference-quiz" aria-label="Vyber smeruje k odhadu populacie">
        <div class="iq-node sample">VÝBER<br><b>n = 1500</b></div>
        <div class="iq-arrow">→</div>
        <div class="iq-node point">BODOVÝ ODHAD<br><b>118,31</b></div>
        <div class="iq-arrow">→</div>
        <div class="iq-node population">POPULÁCIA<br><b>parameter ?</b></div>
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
    bad: "Nesprávne. Zapamätaj si: SD = šírka dát, SE = neistota priemeru; väčšie n zvyčajne znižuje SE.",
    visual: `
      <div class="sdse-quiz" aria-label="SD verzus SE">
        <div class="sdse-row"><span>SD</span><div class="spread wide"></div><b>jednotlivci</b></div>
        <div class="sdse-row"><span>SE</span><div class="spread narrow"></div><b>priemer</b></div>
        <div class="sdse-formula">SE = SD / √n</div>
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
    bad: "Nesprávne. Parameter považujeme za pevný; menia sa výbery a z nich vypočítané intervaly.",
    visual: `
      <div class="ci-quiz" aria-label="Opakovane intervaly">
        <div class="truth-line"></div>
        <div class="ci-row hit r1"></div><div class="ci-row hit r2"></div><div class="ci-row hit r3"></div>
        <div class="ci-row miss r4"></div><div class="ci-row hit r5"></div><div class="ci-row hit r6"></div>
        <div class="ci-caption">metóda → približne 95 % zásahov</div>
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
    bad: "Nesprávne. Zopakuj si konkrétny interval: priemer 118,31, dolná hranica 117,62, horná 118,99.",
    visual: `
      <div class="pressure-quiz" aria-label="Interval systolickeho tlaku">
        <div class="pressure-axis"><span class="endpoint left">117,62</span><span class="mean">118,31</span><span class="endpoint right">118,99</span></div>
        <div class="pressure-note">95 % interval priemeru</div>
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
    bad: "Nesprávne. Pri rovnakých ostatných podmienkach väčšie n → menšie SE → užší interval.",
    visual: `
      <div class="width-quiz" aria-label="Faktory sirky intervalu">
        <div><b>n ↑</b><span class="interval narrow-i"></span><small>užší</small></div>
        <div><b>SD ↑</b><span class="interval wide-i"></span><small>širší</small></div>
        <div><b>95 → 99 %</b><span class="interval wide-i gold"></span><small>širší</small></div>
      </div>`
  }
];
