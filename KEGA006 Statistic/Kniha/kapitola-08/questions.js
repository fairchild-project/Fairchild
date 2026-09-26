window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Čo najlepšie znamená r = −0,82?",
    answers: [
      "Silný záporný lineárny vzťah",
      "Slabý kladný lineárny vzťah",
      "Medzi premennými nie je žiadny vzťah",
      "Dôkaz, že X spôsobuje Y"
    ],
    correct: 0,
    ok: "Správne. Znamienko určuje smer a |r| = 0,82 znamená silný lineárny vzťah.",
    bad: "Nesprávne. Záporné znamienko určuje opačný smer a absolútna hodnota blízka 1 znamená silný lineárny vzťah.",
    visual: `
      <div class="corr-meter" aria-label="Stupnica korelačného koeficientu od mínus jedna po plus jedna">
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
      <div class="pearson-quiz" aria-label="Kladný bodový graf vek a systolický tlak">
        <div class="stat-pill">r = 0,621 &nbsp; · &nbsp; p &lt; 0,001</div>
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
    ok: "Správne. Spearman pracuje s poradiami a je vhodný aj pri monotónnom vzťahu bez presnej linearity.",
    bad: "Nesprávne. Pri poradiach alebo ordinálnych dátach a monotónnom vzťahu je prirodzenou voľbou Spearman.",
    visual: `
      <div class="method-visual" aria-label="Porovnanie Pearsonovho a Spearmanovho koeficientu">
        <div class="method-card">
          <b>PEARSON</b>
          <span>kvantitatívne dáta</span>
          <span>lineárny vzťah</span>
          <span>citlivejší na odľahlé hodnoty</span>
        </div>
        <div class="method-card active">
          <b>SPEARMAN</b>
          <span>poradia / ordinálne dáta</span>
          <span>monotónny vzťah</span>
          <span>nevyžaduje presnú linearitu</span>
        </div>
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
    ok: "Správne. Zo zobrazených kladných hodnôt je r = 0,653 najväčšie.",
    bad: "Nesprávne. Porovnaj hodnoty korelácie mimo hlavnej diagonály; najsilnejšia kladná korelácia má najväčšie kladné r.",
    visual: `
      <div class="matrix-quiz" aria-label="Výrez korelačnej matice">
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
    ok: "Správne. Smer a silu lineárneho vzťahu opisuje r; p-hodnota rieši štatistickú významnosť.",
    bad: "Nesprávne. Malé p môže sprevádzať slabý aj silný vzťah; silu lineárneho vzťahu opisuje r.",
    visual: `
      <div class="effect-visual" aria-label="Porovnanie slabého a silného lineárneho vzťahu pri malej p-hodnote">
        <div class="effect-card weak"><b>SLABÝ VZŤAH</b><span>r = 0,12</span><em>p &lt; 0,001</em></div>
        <div class="effect-card strong"><b>SILNÝ VZŤAH</b><span>r = 0,78</span><em>p &lt; 0,001</em></div>
      </div>`
  }
];
