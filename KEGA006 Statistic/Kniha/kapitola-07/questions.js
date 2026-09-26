window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Ktoré tvrdenie najlepšie vystihuje rozdiel medzi koreláciou a regresiou?",
    answers: ["Obe metódy sú bez smeru", "Regresia modeluje očakávané Y pomocou X a môže slúžiť na predikciu", "Korelácia automaticky dokazuje kauzalitu", "Regresia sa používa iba pre kategorizované premenné"],
    correct: 1,
    ok: "Správne. Regresia má smer X → Y a vytvára model očakávanej hodnoty Y.",
    bad: "Nesprávne. Korelácia opisuje silu vzťahu, regresia modeluje Y pomocou X.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Korelácia a regresia"><rect x="34" y="42" width="190" height="150" rx="18" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="129" y="78" text-anchor="middle" fill="#58d6f3" font-size="18" font-family="Arial" font-weight="700">KORELÁCIA</text><text x="129" y="118" text-anchor="middle" fill="#fff" font-size="26" font-family="Arial" font-weight="800">r</text><text x="129" y="153" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">sila vzťahu</text><rect x="296" y="42" width="190" height="150" rx="18" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="391" y="78" text-anchor="middle" fill="#f3c969" font-size="18" font-family="Arial" font-weight="700">REGRESIA</text><text x="391" y="118" text-anchor="middle" fill="#fff" font-size="22" font-family="Arial" font-weight="800">X → Ŷ</text><text x="391" y="153" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">model a predikcia</text></svg>`
  },
  {
    checkpoint: 1,
    question: "Ak je korelácia medzi X a Y silná, čo z toho ešte automaticky nevyplýva?",
    answers: ["Že premenné spolu súvisia", "Že vzťah môže byť lineárny", "Že X spôsobuje Y", "Že možno pozorovať spoločný trend"],
    correct: 2,
    ok: "Správne. Ani silná korelácia sama osebe nedokazuje kauzalitu.",
    bad: "Nesprávne. Rozlišuj štatistickú súvislosť od príčinnej súvislosti.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Scatterplot bez dôkazu kauzality"><line x1="60" y1="205" x2="465" y2="205" stroke="#7f8c9a" stroke-width="2"/><line x1="60" y1="40" x2="60" y2="205" stroke="#7f8c9a" stroke-width="2"/><g fill="#58d6f3"><circle cx="105" cy="175" r="7"/><circle cx="150" cy="158" r="7"/><circle cx="205" cy="137" r="7"/><circle cx="258" cy="118" r="7"/><circle cx="312" cy="95" r="7"/><circle cx="370" cy="72" r="7"/><circle cx="425" cy="58" r="7"/></g><text x="270" y="232" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">silný vzťah ≠ dôkaz príčiny</text></svg>`
  },
  {
    checkpoint: 2,
    question: "Ak je v modeli tlaku koeficient b1 = 0,79 pri veku, ako ho interpretujeme?",
    answers: ["Tlak každého pacienta sa presne zvýši o 0,79 mmHg", "Pri zvýšení veku o 1 rok sa očakávaný tlak zvýši približne o 0,79 mmHg", "Intercept modelu je 0,79 mmHg", "Reziduum je vždy 0,79 mmHg"],
    correct: 1,
    ok: "Správne. Sklon je priemerná očakávaná zmena Y pri zmene X o jednu jednotku.",
    bad: "Nesprávne. Sklon opisuje priemerný trend, nie presnú zmenu každého jednotlivca.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Regresná rovnica"><text x="260" y="65" text-anchor="middle" fill="#f3c969" font-size="30" font-family="Arial" font-weight="800">Ŷ = b₀ + b₁X</text><rect x="72" y="100" width="160" height="92" rx="14" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="152" y="132" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">b₀</text><text x="152" y="166" text-anchor="middle" fill="#58d6f3" font-size="22" font-family="Arial" font-weight="800">INTERCEPT</text><rect x="288" y="100" width="160" height="92" rx="14" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="368" y="132" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">b₁</text><text x="368" y="166" text-anchor="middle" fill="#63e6be" font-size="22" font-family="Arial" font-weight="800">SKLON</text></svg>`
  },
  {
    checkpoint: 2,
    question: "Čo predstavuje reziduum v lineárnej regresii?",
    answers: ["Rozdiel medzi pozorovanou a predikovanou hodnotou", "Sklon regresnej priamky", "Priemer všetkých X", "Koeficient determinácie"],
    correct: 0,
    ok: "Správne. Reziduum je e = Y − Ŷ.",
    bad: "Nesprávne. Reziduum je vertikálna odchýlka pozorovania od modelovej predikcie.",
    visual: `<svg viewBox="0 0 520 260" role="img" aria-label="Reziduum"><line x1="55" y1="210" x2="470" y2="210" stroke="#7f8c9a" stroke-width="2"/><line x1="70" y1="185" x2="450" y2="65" stroke="#63e6be" stroke-width="4"/><circle cx="320" cy="92" r="8" fill="#58d6f3"/><line x1="320" y1="92" x2="320" y2="106" stroke="#ff6678" stroke-width="4"/><circle cx="320" cy="106" r="6" fill="#f3c969"/><text x="342" y="101" fill="#ff6678" font-size="14" font-family="Arial">reziduum</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Model má R² = 0,61. Ktorá interpretácia je správna?",
    answers: ["Model je na 61 % správny", "61 % variability Y je v tomto modeli vysvetlených použitými prediktormi", "61 % bodov leží presne na priamke", "Model dokazuje kauzalitu na úrovni 61 %"],
    correct: 1,
    ok: "Správne. R² vyjadruje podiel variability Y vysvetlenej modelom.",
    bad: "Nesprávne. R² nie je percento správnosti ani dôkaz kauzality.",
    visual: `<svg viewBox="0 0 520 220" role="img" aria-label="R na druhú 0,61"><text x="260" y="58" text-anchor="middle" fill="#f3c969" font-size="30" font-family="Arial" font-weight="800">R² = 0,61</text><rect x="70" y="100" width="380" height="34" rx="17" fill="#17222c"/><rect x="70" y="100" width="232" height="34" rx="17" fill="#63e6be"/><text x="185" y="166" text-anchor="middle" fill="#63e6be" font-size="14" font-family="Arial">61 % vysvetlené</text><text x="383" y="166" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">39 % nevysvetlené</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Ak do modelu pridáme ďalší prediktor, čo sa môže stať s obyčajným R²?",
    answers: ["Nemôže klesnúť, môže zostať rovnaké alebo vzrásť", "Musí vždy klesnúť", "Musí sa vždy rovnať 1", "Prestane byť definované"],
    correct: 0,
    ok: "Správne. Obyčajné R² pridaním prediktora neklesá.",
    bad: "Nesprávne. Obyčajné R² penalizáciu za počet prediktorov neobsahuje.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Pridanie prediktora"><rect x="60" y="70" width="150" height="100" rx="16" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="135" y="108" text-anchor="middle" fill="#58d6f3" font-size="18" font-family="Arial" font-weight="700">MODEL 1</text><text x="135" y="145" text-anchor="middle" fill="#fff" font-size="18" font-family="Arial">X₁</text><path d="M225 120 H295" stroke="#9aa8b7" stroke-width="3"/><path d="M295 120 l-12 -8 v16 z" fill="#9aa8b7"/><rect x="310" y="70" width="150" height="100" rx="16" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="385" y="108" text-anchor="middle" fill="#63e6be" font-size="18" font-family="Arial" font-weight="700">MODEL 2</text><text x="385" y="145" text-anchor="middle" fill="#fff" font-size="18" font-family="Arial">X₁ + X₂</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Ktorý ukazovateľ je vhodnejší na porovnávanie modelov s rôznym počtom prediktorov, pretože penalizuje zbytočné premenné?",
    answers: ["Upravené R²", "Priemer X", "Medián rezíduí", "Počet kategórií"],
    correct: 0,
    ok: "Správne. Upravené R² zohľadňuje aj počet prediktorov.",
    bad: "Nesprávne. Pri porovnaní modelov s rôznym počtom premenných sleduj upravené R².",
    visual: `<svg viewBox="0 0 520 235" role="img" aria-label="R2 a upravené R2"><rect x="55" y="65" width="180" height="110" rx="16" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="145" y="105" text-anchor="middle" fill="#58d6f3" font-size="23" font-family="Arial" font-weight="800">R²</text><text x="145" y="145" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">bez penalizácie</text><rect x="285" y="65" width="180" height="110" rx="16" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="375" y="105" text-anchor="middle" fill="#f3c969" font-size="23" font-family="Arial" font-weight="800">Adj. R²</text><text x="375" y="145" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">s penalizáciou</text></svg>`
  },
  {
    checkpoint: 4,
    question: "Fajčenie má tri kategórie a nefajčiar je referencia. Koľko dummy premenných zvyčajne potrebujeme pri modeli s interceptom?",
    answers: ["0", "1", "2", "3"],
    correct: 2,
    ok: "Správne. Pri k = 3 kategóriách použijeme k − 1 = 2 dummy premenné.",
    bad: "Nesprávne. Jedna kategória je referencia, preto pri troch kategóriách stačia dve dummy premenné.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Dummy kódovanie"><rect x="60" y="48" width="400" height="152" rx="14" fill="#101b25" stroke="#304050" stroke-width="2"/><text x="125" y="82" fill="#9aa8b7" font-size="14" font-family="Arial">SKUPINA</text><text x="275" y="82" fill="#9aa8b7" font-size="14" font-family="Arial">D_BÝV</text><text x="385" y="82" fill="#9aa8b7" font-size="14" font-family="Arial">D_AKT</text><text x="125" y="120" fill="#fff" font-size="16" font-family="Arial">nefajčiar</text><text x="285" y="120" fill="#58d6f3" font-size="16" font-family="Arial">0</text><text x="395" y="120" fill="#58d6f3" font-size="16" font-family="Arial">0</text><text x="125" y="154" fill="#fff" font-size="16" font-family="Arial">bývalý</text><text x="285" y="154" fill="#63e6be" font-size="16" font-family="Arial">1</text><text x="395" y="154" fill="#58d6f3" font-size="16" font-family="Arial">0</text><text x="125" y="188" fill="#fff" font-size="16" font-family="Arial">aktívny</text><text x="285" y="188" fill="#58d6f3" font-size="16" font-family="Arial">0</text><text x="395" y="188" fill="#63e6be" font-size="16" font-family="Arial">1</text></svg>`
  },
  {
    checkpoint: 4,
    question: "Čo znamená koeficient pri dummy premennej pre aktívneho fajčiara, ak referencia je nefajčiar?",
    answers: ["Očakávaný rozdiel oproti referenčnej skupine pri ostatných premenných konštantných", "Absolútnu hodnotu Y každého fajčiara", "Počet fajčiarov v dátach", "Koreláciu medzi všetkými prediktormi"],
    correct: 0,
    ok: "Správne. Dummy koeficient vyjadruje rozdiel oproti referenčnej kategórii.",
    bad: "Nesprávne. Interpretuj ho ako rozdiel oproti referencii, nie ako absolútnu hodnotu.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Referenčná skupina a dummy koeficient"><rect x="55" y="70" width="180" height="105" rx="16" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="145" y="108" text-anchor="middle" fill="#58d6f3" font-size="17" font-family="Arial" font-weight="700">REFERENCIA</text><text x="145" y="145" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial">nefajčiar</text><path d="M250 123 H300" stroke="#9aa8b7" stroke-width="3"/><path d="M300 123 l-12 -8 v16 z" fill="#9aa8b7"/><rect x="315" y="70" width="150" height="105" rx="16" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="390" y="108" text-anchor="middle" fill="#f3c969" font-size="17" font-family="Arial" font-weight="700">ROZDIEL</text><text x="390" y="145" text-anchor="middle" fill="#fff" font-size="20" font-family="Arial">β_dummy</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ktorá situácia je pri regresnej predikcii najviac varovná?",
    answers: ["Reziduá sú náhodne rozptýlené okolo nuly", "Predikujeme pre X hlboko mimo rozsahu, na ktorom bol model odhadnutý", "Body približne sledujú lineárny trend", "Q-Q graf je približne lineárny"],
    correct: 1,
    ok: "Správne. Predikcia mimo rozsahu pozorovaných X je extrapolácia a môže byť nespoľahlivá.",
    bad: "Nesprávne. Najväčšie riziko tu predstavuje extrapolácia za hranice dát.",
    visual: `<svg viewBox="0 0 520 260" role="img" aria-label="Extrapolácia"><line x1="55" y1="210" x2="465" y2="210" stroke="#7f8c9a" stroke-width="2"/><line x1="70" y1="185" x2="370" y2="85" stroke="#63e6be" stroke-width="4"/><line x1="370" y1="85" x2="455" y2="55" stroke="#ff6678" stroke-width="4" stroke-dasharray="8 7"/><rect x="70" y="45" width="300" height="155" fill="none" stroke="#304050" stroke-width="2" stroke-dasharray="6 6"/><text x="220" y="35" text-anchor="middle" fill="#9aa8b7" font-size="13" font-family="Arial">rozsah pozorovaných dát</text><text x="420" y="105" text-anchor="middle" fill="#ff6678" font-size="14" font-family="Arial" font-weight="700">EXTRAPOLÁCIA</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ak reziduálny graf ukazuje lievikovitý tvar, čo to môže naznačovať?",
    answers: ["Heteroskedasticitu", "Dokonalú normalitu", "Žiadnu variabilitu", "Že R² musí byť 1"],
    correct: 0,
    ok: "Správne. Lievikovitý rozptyl rezíduí môže signalizovať nerovnakú varianciu.",
    bad: "Nesprávne. Sleduj, či sa rozptyl rezíduí mení s úrovňou predikcie.",
    visual: `<svg viewBox="0 0 520 260" role="img" aria-label="Lievikovitý reziduálny graf"><line x1="55" y1="130" x2="470" y2="130" stroke="#f3c969" stroke-width="2" stroke-dasharray="6 6"/><g fill="#58d6f3"><circle cx="95" cy="123" r="6"/><circle cx="125" cy="137" r="6"/><circle cx="160" cy="118" r="6"/><circle cx="195" cy="145" r="6"/><circle cx="235" cy="102" r="6"/><circle cx="275" cy="160" r="6"/><circle cx="315" cy="87" r="6"/><circle cx="355" cy="178" r="6"/><circle cx="400" cy="65" r="6"/><circle cx="445" cy="195" r="6"/></g><text x="260" y="232" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">meniaci sa rozptyl rezíduí</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ak vzťah medzi X a Y zjavne nie je lineárny, ktorý prístup môže byť vhodný?",
    answers: ["Zvážiť kvadratický alebo polynomický člen", "Ignorovať tvar vzťahu", "Vždy odstrániť Y", "Nastaviť všetky koeficienty na nulu"],
    correct: 0,
    ok: "Správne. Nelineárny trend možno niekedy modelovať napríklad pridaním X².",
    bad: "Nesprávne. Ak lineárna priamka nestačí, možno model rozšíriť o nelineárne členy.",
    visual: `<svg viewBox="0 0 520 260" role="img" aria-label="Lineárny a kvadratický trend"><line x1="55" y1="210" x2="470" y2="210" stroke="#7f8c9a" stroke-width="2"/><path d="M90 180 Q260 45 430 180" fill="none" stroke="#63e6be" stroke-width="4"/><line x1="90" y1="165" x2="430" y2="95" stroke="#58d6f3" stroke-width="3" stroke-dasharray="8 7"/><text x="355" y="68" fill="#63e6be" font-size="14" font-family="Arial">kvadratický trend</text><text x="125" y="112" fill="#58d6f3" font-size="14" font-family="Arial">lineárny model</text></svg>`
  }
];
