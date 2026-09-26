window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Čo najlepšie znamená r = −0,82?",
    answers: [
      "Silný záporný lineárny vzťah",
      "Slabý kladný lineárny vzťah",
      "Žiadny vzťah medzi premennými",
      "Dôkaz, že X spôsobuje Y"
    ],
    correct: 0,
    ok: "Správne. Záporné znamienko určuje smer a |r| = 0,82 znamená silný lineárny vzťah.",
    bad: "Nesprávne. Najprv čítaj znamienko a potom absolútnu hodnotu r.",
    visual: `
      <div class="corr-meter" aria-label="Stupnica korelacneho koeficientu">
        <div class="corr-meter-title">KORELAČNÝ KOEFICIENT r</div>
        <div class="corr-line">
          <span class="corr-tick left">−1</span>
          <span class="corr-tick mid">0</span>
          <span class="corr-tick right">+1</span>
          <span class="corr-marker" style="left:9%">r = −0,82</span>
        </div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ako správne interpretovať Pearsonovo r = 0,621 medzi vekom a systolickým tlakom?",
    answers: [
      "Kladný a pomerne silný lineárny vzťah",
      "Takmer nulový vzťah",
      "Silný záporný vzťah",
      "Vek určite spôsobuje vyšší tlak"
    ],
    correct: 0,
    ok: "Správne. r = 0,621 opisuje kladnú a pomerne silnú lineárnu súvislosť.",
    bad: "Nesprávne. Pearsonovo r opisuje smer a silu lineárnej súvislosti, nie automaticky kauzalitu.",
    visual: `
      <div class="pearson-quiz" aria-label="Kladny scatterplot vek a tlak">
        <div class="stat-pill">r = 0,621 &nbsp; | &nbsp; p &lt; 0,001</div>
        <div class="quiz-scatter positive">
          <span style="left:9%;top:82%"></span><span style="left:18%;top:74%"></span>
          <span style="left:27%;top:70%"></span><span style="left:36%;top:61%"></span>
          <span style="left:46%;top:56%"></span><span style="left:55%;top:48%"></span>
          <span style="left:64%;top:43%"></span><span style="left:73%;top:34%"></span>
          <span style="left:82%;top:27%"></span><span style="left:91%;top:19%"></span>
        </div>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Máš ordinálne skóre a vzťah je monotónny, ale nie presne lineárny. Ktorý koeficient je vhodnejší?",
    answers: [
      "Pearson",
      "Spearman",
      "Modus",
      "Chí-kvadrát ako korelačný koeficient"
    ],
    correct: 1,
    ok: "Správne. Spearman pracuje s poradiami a je vhodný aj pri monotónnom nelineárnom vzťahu.",
    bad: "Nesprávne. Pri poradiach alebo ordinálnych dátach sa prirodzene uvažuje Spearman.",
    visual: `
      <div class="method-visual" aria-label="Pearson verzus Spearman">
        <div class="method-card"><b>PEARSON</b><span>kvantitatívne</span><span>lineárne</span></div>
        <div class="method-card active"><b>SPEARMAN</b><span>poradia</span><span>monotónne</span></div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Ktorá z uvedených dvojíc má v zobrazenej matici najsilnejšiu kladnú koreláciu?",
    answers: [
      "Vek – cholesterol, r = 0,653",
      "Vek – tlak, r = 0,621",
      "BMI – tlak, r = 0,365",
      "CRP – BMI, r = 0,090"
    ],
    correct: 0,
    ok: "Správne. Najväčšia uvedená off-diagonálna hodnota je r = 0,653 pre vek a cholesterol.",
    bad: "Nesprávne. Porovnaj absolútne hodnoty korelácií mimo hlavnej diagonály.",
    visual: `
      <div class="matrix-quiz" aria-label="Vybrane hodnoty korelacnej matice">
        <div class="mh"></div><div class="mh">TLAK</div><div class="mh">CHOL.</div><div class="mh">BMI</div>
        <div class="rh">VEK</div><div>0,621</div><div class="hot">0,653</div><div>0,210</div>
        <div class="rh">TLAK</div><div>1,000</div><div>0,310</div><div class="mid">0,365</div>
        <div class="rh">BMI</div><div class="mid">0,365</div><div>0,190</div><div>1,000</div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Ktorý údaj priamo opisuje silu lineárneho vzťahu?",
    answers: [
      "Korelačný koeficient r",
      "Iba p-hodnota",
      "Počet desatinných miest",
      "Samotná veľkosť vzorky"
    ],
    correct: 0,
    ok: "Správne. Sila a smer lineárneho vzťahu sa čítajú z r; p-hodnota rieši inú otázku.",
    bad: "Nesprávne. Malé p môže sprevádzať slabý aj silný vzťah.",
    visual: `
      <div class="effect-visual" aria-label="Rovnaka p hodnota ina sila vztahu">
        <div class="effect-card weak"><b>SLABÝ</b><span>r = 0,12</span><em>p &lt; 0,001</em></div>
        <div class="effect-card strong"><b>SILNÝ</b><span>r = 0,78</span><em>p &lt; 0,001</em></div>
      </div>`
  }
];
