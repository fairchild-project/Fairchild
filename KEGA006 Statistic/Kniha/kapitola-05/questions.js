window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Čo je najpresnejšia interpretácia zamietnutia H0?",
    answers: [
      "H1 je dokázaná s absolútnou istotou.",
      "Dáta poskytujú dostatočný dôkaz proti H0 pri zvolenom pravidle testu.",
      "H0 bola určite nepravdivá už pred zberom dát.",
      "Každý pozorovaný rozdiel je prakticky dôležitý."
    ],
    correct: 1,
    ok: "Správne. Test vyhodnocuje zlučiteľnosť dát s H0; zamietnutie H0 nie je absolútny dôkaz H1.",
    bad: "Nesprávne. Vráť sa k logike H0/H1: test hľadá dôkaz proti východiskovému modelu H0.",
    visual: `
      <div class="hypo-visual" aria-label="Logika H0 a H1">
        <div class="hypo-card blue"><b>H0</b><span>východiskový model</span></div>
        <div class="hypo-arrow">DÔKAZ PROTI H0 →</div>
        <div class="hypo-card pink"><b>H1</b><span>alternatíva</span></div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Čo znamená p = 0,03 v správnej interpretácii?",
    answers: [
      "Je 3 % pravdepodobnosť, že H0 je pravdivá.",
      "Ak H0 platí, rovnako alebo viac extrémne dáta by mali pravdepodobnosť približne 3 %.",
      "Je 97 % pravdepodobnosť, že H1 je pravdivá.",
      "Riziko chyby II. druhu je presne 3 %."
    ],
    correct: 1,
    ok: "Správne. p-hodnota sa počíta za predpokladu platnosti H0 a meria extrémnosť dát voči tomuto modelu.",
    bad: "Nesprávne. p-hodnota nie je pravdepodobnosť pravdivosti H0 ani H1.",
    visual: `
      <div class="pvalue-visual" aria-label="p-hodnota a alpha">
        <div class="p-title">POROVNANIE</div>
        <div class="p-row"><span>p</span><strong>0,03</strong></div>
        <div class="p-row"><span>alpha</span><strong>0,05</strong></div>
        <div class="p-rule">p &lt; alpha → dôkaz proti H0</div>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Kedy je vhodný jednovýberový t-test?",
    answers: [
      "Keď porovnávame priemer jednej vzorky s referenčnou hodnotou.",
      "Keď porovnávame dve kategorizované premenné.",
      "Keď ten istý človek absolvuje meranie pred a po.",
      "Keď porovnávame tri a viac skupín bez ďalších podmienok."
    ],
    correct: 0,
    ok: "Správne. Jednovýberový t-test porovnáva priemer jednej vzorky s hypotetickou alebo referenčnou hodnotou mu0.",
    bad: "Nesprávne. V tomto teste máme jednu vzorku a jednu referenčnú hodnotu.",
    visual: `
      <div class="one-sample-visual" aria-label="Jednovyberovy t-test">
        <div class="metric"><span>REFERENCIA</span><b>120</b></div>
        <div class="vs">VS.</div>
        <div class="metric mint"><span>PRIEMER VZORKY</span><b>118,31</b></div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Pacientom zmeriame tlak pred liečbou a po liečbe. Ktorý postup zodpovedá párovému t-testu?",
    answers: [
      "Porovnať dve skupiny, akoby boli nezávislé.",
      "Pre každého pacienta vytvoriť rozdiel d = po - pred a testovať priemer rozdielov.",
      "Použiť chi-square test bez ohľadu na typ premennej.",
      "Testovať osobitne priemer pred a osobitne priemer po proti nule."
    ],
    correct: 1,
    ok: "Správne. Párový t-test pracuje s rozdielmi v pároch a testuje, či je ich priemer zlučiteľný s nulou.",
    bad: "Nesprávne. Párovanie musí zostať zachované: základom sú rozdiely d v jednotlivých pároch.",
    visual: `
      <div class="paired-visual" aria-label="Parovy t-test">
        <div class="pair-row"><span>PACIENT 1</span><b>132 → 126</b><em>d = -6</em></div>
        <div class="pair-row"><span>PACIENT 2</span><b>128 → 125</b><em>d = -3</em></div>
        <div class="pair-row"><span>PACIENT 3</span><b>135 → 130</b><em>d = -5</em></div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Čo je správny postup pri posudzovaní normality pre párový t-test?",
    answers: [
      "Kontrolovať normalitu rozdielov d medzi párovými meraniami.",
      "Kontrolovať iba skupinu PRED.",
      "Kontrolovať iba skupinu PO.",
      "Ak Shapiro-Wilk dá p < 0,05, vždy automaticky použiť neparametrický test."
    ],
    correct: 0,
    ok: "Správne. Pri párovom t-teste sa predpoklad normality viaže na rozdiely d, ktoré test priamo analyzuje.",
    bad: "Nesprávne. Predpoklady treba kontrolovať na veličine, ktorú daný test skutočne modeluje.",
    visual: `
      <div class="normality-visual" aria-label="Normalita rozdielov">
        <div class="n-kicker">PÁROVÝ t-TEST</div>
        <div class="n-flow"><span>PRED</span><b>−</b><span>PO</span><b>=</b><strong>ROZDIEL d</strong></div>
        <div class="n-check">normalitu kontroluj tu ↑</div>
      </div>`
  }
];
