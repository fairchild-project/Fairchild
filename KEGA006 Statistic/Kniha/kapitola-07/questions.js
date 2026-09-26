window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Ktor\u00e9 tvrdenie najlep\u0161ie vystihuje rozdiel medzi korel\u00e1ciou a regresiou?",
    answers: [
      "Korel\u00e1cia aj regresia s\u00fa bez smeru",
      "Regresia modeluje o\u010dak\u00e1van\u00e9 Y pomocou X a m\u00f4\u017ee tvori\u0165 predikciu",
      "Korel\u00e1cia automaticky dokazuje kauzalitu",
      "Regresia sa pou\u017e\u00edva iba pri kategorizovan\u00fdch premenn\u00fdch"
    ],
    correct: 1,
    ok: "Spr\u00e1vne. Regresia m\u00e1 smer X -> Y a vytv\u00e1ra model o\u010dak\u00e1van\u00e9ho Y.",
    bad: "Nespr\u00e1vne. Vr\u00e1\u0165 sa k rozdielu: korel\u00e1cia opisuje vz\u0165ah, regresia m\u00e1 smer predikcie.",
    visual: `
      <div class="reg-quiz">
        <div class="reg-kicker">TEN ISTY SCATTERPLOT, INA OTAZKA</div>
        <div class="reg-plot">
          <span class="rp p1"></span><span class="rp p2"></span><span class="rp p3"></span><span class="rp p4"></span>
          <span class="rp p5"></span><span class="rp p6"></span><span class="rp p7"></span><span class="rp p8"></span>
          <span class="reg-line"></span>
        </div>
        <div class="reg-tags"><b>r = sila vztahu</b><b>X -> Y_hat</b></div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ak je v modeli tlaku koeficient b1 = 0,79 pri veku, ako ho interpretujeme?",
    answers: [
      "Tlak ka\u017ed\u00e9ho pacienta sa presne zv\u00fd\u0161i o 0,79 mmHg",
      "Pri zv\u00fd\u0161en\u00ed veku o 1 rok sa o\u010dak\u00e1van\u00fd tlak zv\u00fd\u0161i pribli\u017ene o 0,79 mmHg",
      "Intercept modelu je 0,79 mmHg",
      "Reziduum je v\u017edy 0,79 mmHg"
    ],
    correct: 1,
    ok: "Spr\u00e1vne. Sklon je priemern\u00e1 o\u010dak\u00e1van\u00e1 zmena Y pri zmene X o jednu jednotku.",
    bad: "Nespr\u00e1vne. Sklon opisuje o\u010dak\u00e1van\u00fd priemern\u00fd trend, nie presn\u00fa zmenu ka\u017ed\u00e9ho jednotlivca.",
    visual: `
      <div class="equation-quiz">
        <div class="eq-main">Y_hat = b0 + b1 X</div>
        <div class="eq-row"><span>b0</span><b>INTERCEPT</b></div>
        <div class="eq-row active"><span>b1</span><b>SKLON</b></div>
        <div class="eq-row"><span>Y - Y_hat</span><b>REZIDUUM</b></div>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Model m\u00e1 R2 = 0,61. Ktor\u00e1 interpret\u00e1cia je spr\u00e1vna?",
    answers: [
      "Model je na 61 % spr\u00e1vny",
      "61 % variability Y je v tomto modeli vysvetlen\u00fdch pou\u017eit\u00fdmi prediktormi",
      "61 % pozorovan\u00ed le\u017e\u00ed presne na regresnej priamke",
      "Model dokazuje kauzalitu na \u00farovni 61 %"
    ],
    correct: 1,
    ok: "Spr\u00e1vne. R2 vyjadruje podiel variability Y vysvetlenej modelom.",
    bad: "Nespr\u00e1vne. R2 nie je percento spr\u00e1vnosti ani d\u00f4kaz kauzality.",
    visual: `
      <div class="r2-quiz">
        <div class="r2-label">R2 = 0,61</div>
        <div class="r2-track"><div class="r2-fill"></div></div>
        <div class="r2-scale"><span>nevysvetlene</span><span>vysvetlene</span></div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Faj\u010denie m\u00e1 tri kateg\u00f3rie a nefaj\u010diar je referencia. Ko\u013eko dummy premenn\u00fdch zvy\u010dajne potrebujeme pri modeli s interceptom?",
    answers: [
      "0",
      "1",
      "2",
      "3"
    ],
    correct: 2,
    ok: "Spr\u00e1vne. Pri k = 3 kateg\u00f3ri\u00e1ch a interceptovom modeli pou\u017eijeme zvy\u010dajne k - 1 = 2 dummy premenn\u00e9.",
    bad: "Nespr\u00e1vne. Jedna kateg\u00f3ria tvor\u00ed referenciu, preto pri troch kateg\u00f3ri\u00e1ch sta\u010dia dve indik\u00e1torov\u00e9 premenn\u00e9.",
    visual: `
      <div class="dummy-quiz">
        <div class="dummy-row head"><span>SKUPINA</span><span>D_BYV</span><span>D_AKT</span></div>
        <div class="dummy-row ref"><span>nefajciar</span><span>0</span><span>0</span></div>
        <div class="dummy-row"><span>byvaly</span><span>1</span><span>0</span></div>
        <div class="dummy-row"><span>aktivny</span><span>0</span><span>1</span></div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Ktor\u00e1 situ\u00e1cia je pri regresnej predikcii najviac varovn\u00e1?",
    answers: [
      "Rezidu\u00e1 s\u00fa n\u00e1hodne rozpt\u00fdlen\u00e9 okolo nuly",
      "Predikujeme pre X hlboko mimo rozsahu, na ktorom bol model odhadnut\u00fd",
      "Body pribli\u017ene sleduj\u00fa line\u00e1rny trend",
      "Q-Q graf je pribli\u017ene line\u00e1rny"
    ],
    correct: 1,
    ok: "Spr\u00e1vne. Predikcia mimo rozsahu pozorovan\u00fdch X je extrapol\u00e1cia a m\u00f4\u017ee by\u0165 nespo\u013eahliv\u00e1.",
    bad: "Nespr\u00e1vne. Najv\u00e4\u010d\u0161ie riziko tu predstavuje extrapol\u00e1cia za hranice d\u00e1t.",
    visual: `
      <div class="diag-quiz">
        <div class="diag-cell good">LINEARITA</div>
        <div class="diag-cell good">REZIDUA</div>
        <div class="diag-cell good">Q-Q GRAF</div>
        <div class="diag-cell warn">EXTRAPOLACIA</div>
      </div>`
  }
];
