window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Čo je najpresnejšia interpretácia zamietnutia H0?",
    answers: ["H1 je dokázaná s absolútnou istotou.", "Dáta poskytujú dostatočný dôkaz proti H0 pri zvolenom pravidle testu.", "H0 bola určite nepravdivá už pred zberom dát.", "Každý pozorovaný rozdiel je prakticky dôležitý."],
    correct: 1,
    ok: "Správne. Zamietnutie H0 znamená dostatočný dôkaz proti H0 pri zvolenom pravidle testu.",
    bad: "Nesprávne. Zamietnutie H0 nie je absolútny dôkaz H1.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Logika H0 a H1"><rect x="35" y="62" width="170" height="120" rx="18" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="120" y="105" text-anchor="middle" fill="#58d6f3" font-size="28" font-family="Arial" font-weight="800">H0</text><text x="120" y="140" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">východiskový model</text><path d="M220 122 H300" stroke="#f3c969" stroke-width="4"/><path d="M300 122 l-14 -9 v18 z" fill="#f3c969"/><text x="260" y="96" text-anchor="middle" fill="#f3c969" font-size="13" font-family="Arial">dôkaz proti H0</text><rect x="315" y="62" width="170" height="120" rx="18" fill="#101b25" stroke="#ff6678" stroke-width="2"/><text x="400" y="105" text-anchor="middle" fill="#ff6678" font-size="28" font-family="Arial" font-weight="800">H1</text><text x="400" y="140" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">alternatíva</text></svg>`
  },
  {
    checkpoint: 1,
    question: "Ktoré tvrdenie najlepšie vystihuje úlohu H0 v štatistickom teste?",
    answers: ["Je to východiskový model, voči ktorému hodnotíme dáta.", "Je to vždy tvrdenie, ktoré chceme dokázať.", "Je to výsledok testu po výpočte p-hodnoty.", "Je to synonymum praktickej významnosti."],
    correct: 0,
    ok: "Správne. H0 je východiskový model, s ktorým porovnávame pozorované dáta.",
    bad: "Nesprávne. H0 je východiskové tvrdenie/model, nie automaticky želaný výsledok.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Východiskový model"><circle cx="260" cy="112" r="70" fill="#101b25" stroke="#58d6f3" stroke-width="3"/><text x="260" y="105" text-anchor="middle" fill="#58d6f3" font-size="34" font-family="Arial" font-weight="800">H0</text><text x="260" y="138" text-anchor="middle" fill="#a7b2be" font-size="15" font-family="Arial">model na začiatku testu</text><text x="260" y="205" text-anchor="middle" fill="#f3c969" font-size="14" font-family="Arial">Dáta hodnotíme vzhľadom na tento model.</text></svg>`
  },
  {
    checkpoint: 2,
    question: "Čo znamená p = 0,03 v správnej interpretácii?",
    answers: ["Je 3 % pravdepodobnosť, že H0 je pravdivá.", "Ak H0 platí, rovnako alebo viac extrémne dáta by mali pravdepodobnosť približne 3 %.", "Je 97 % pravdepodobnosť, že H1 je pravdivá.", "Riziko chyby II. druhu je presne 3 %."],
    correct: 1,
    ok: "Správne. p-hodnota sa interpretuje za predpokladu platnosti H0.",
    bad: "Nesprávne. p-hodnota nie je pravdepodobnosť pravdivosti H0 ani H1.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Porovnanie p a alfa"><rect x="65" y="60" width="170" height="110" rx="16" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="150" y="100" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">p-hodnota</text><text x="150" y="142" text-anchor="middle" fill="#58d6f3" font-size="30" font-family="Arial" font-weight="800">0,03</text><rect x="285" y="60" width="170" height="110" rx="16" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="370" y="100" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">α</text><text x="370" y="142" text-anchor="middle" fill="#f3c969" font-size="30" font-family="Arial" font-weight="800">0,05</text><text x="260" y="210" text-anchor="middle" fill="#63e6be" font-size="15" font-family="Arial">p &lt; α</text></svg>`
  },
  {
    checkpoint: 2,
    question: "Ak zvolíme α = 0,05, čo predstavuje α v logike testovania?",
    answers: ["Hranicu rozhodovania a tolerované riziko chyby I. druhu.", "Pravdepodobnosť, že H1 je pravdivá.", "Veľkosť efektu.", "Počet chybných meraní vo výbere."],
    correct: 0,
    ok: "Správne. α určuje rozhodovaciu hranicu a súvisí s rizikom chyby I. druhu.",
    bad: "Nesprávne. α nie je pravdepodobnosť H1 ani veľkosť efektu.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Rozhodovacia hranica alfa"><line x1="70" y1="160" x2="450" y2="160" stroke="#7f8c9a" stroke-width="3"/><rect x="355" y="78" width="95" height="82" rx="12" fill="rgba(255,102,120,.12)" stroke="#ff6678" stroke-width="2"/><text x="402" y="112" text-anchor="middle" fill="#ff6678" font-size="17" font-family="Arial" font-weight="700">α = 0,05</text><text x="402" y="138" text-anchor="middle" fill="#a7b2be" font-size="12" font-family="Arial">kritická oblasť</text><text x="195" y="115" text-anchor="middle" fill="#58d6f3" font-size="15" font-family="Arial">oblasť nezamietnutia H0</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Kedy je vhodný jednovýberový t-test?",
    answers: ["Keď porovnávame priemer jednej vzorky s referenčnou hodnotou.", "Keď porovnávame dve kategorizované premenné.", "Keď ten istý človek absolvuje meranie pred a po.", "Keď porovnávame tri a viac skupín bez ďalších podmienok."],
    correct: 0,
    ok: "Správne. Jednovýberový t-test porovnáva priemer jednej vzorky s referenčnou hodnotou.",
    bad: "Nesprávne. Máme jednu vzorku a jednu referenčnú hodnotu.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Jednovýberový t-test"><rect x="60" y="70" width="165" height="110" rx="16" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="142" y="106" text-anchor="middle" fill="#a7b2be" font-size="13" font-family="Arial">REFERENCIA</text><text x="142" y="148" text-anchor="middle" fill="#f3c969" font-size="30" font-family="Arial" font-weight="800">120</text><text x="260" y="130" text-anchor="middle" fill="#a7b2be" font-size="18" font-family="Arial" font-weight="700">VS.</text><rect x="295" y="70" width="165" height="110" rx="16" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="378" y="106" text-anchor="middle" fill="#a7b2be" font-size="13" font-family="Arial">PRIEMER VZORKY</text><text x="378" y="148" text-anchor="middle" fill="#63e6be" font-size="30" font-family="Arial" font-weight="800">118,31</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Čo je v jednovýberovom t-teste typicky nulová hypotéza?",
    answers: ["Priemer vzorky sa rovná nule bez ohľadu na zadanie.", "Populačný priemer sa rovná referenčnej hodnote μ0.", "Smerodajná odchýlka je vždy 1.", "p-hodnota sa rovná α."],
    correct: 1,
    ok: "Správne. H0 typicky tvrdí, že populačný priemer sa rovná referenčnej hodnote μ0.",
    bad: "Nesprávne. V jednovýberovom t-teste porovnávame populačný priemer s μ0.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Nulová hypotéza jednovýberového t-testu"><text x="260" y="72" text-anchor="middle" fill="#58d6f3" font-size="24" font-family="Arial" font-weight="800">H0: μ = μ0</text><line x1="110" y1="145" x2="410" y2="145" stroke="#7f8c9a" stroke-width="3"/><circle cx="260" cy="145" r="11" fill="#f3c969"/><text x="260" y="188" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">referenčná hodnota</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Ak je priemer vzorky blízko referenčnej hodnote, čo to samo osebe ešte neznamená?",
    answers: ["Že musíme vždy zamietnuť H0.", "Že rozdiel treba posúdiť spolu s variabilitou a veľkosťou výberu.", "Že referenčná hodnota je neznáma.", "Že t-test nemožno použiť."],
    correct: 0,
    ok: "Správne. Samotná blízkosť priemerov automaticky neznamená zamietnutie H0.",
    bad: "Nesprávne. Rozhodovanie závisí od veľkosti rozdielu vzhľadom na neistotu, nie iba od pohľadu na dve čísla.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Dve blízke hodnoty"><line x1="80" y1="145" x2="440" y2="145" stroke="#7f8c9a" stroke-width="3"/><circle cx="245" cy="145" r="10" fill="#f3c969"/><circle cx="278" cy="145" r="10" fill="#58d6f3"/><text x="245" y="105" text-anchor="middle" fill="#f3c969" font-size="14" font-family="Arial">μ0</text><text x="278" y="190" text-anchor="middle" fill="#58d6f3" font-size="14" font-family="Arial">x̄</text></svg>`
  },
  {
    checkpoint: 4,
    question: "Pacientom zmeriame tlak pred liečbou a po liečbe. Ktorý postup zodpovedá párovému t-testu?",
    answers: ["Porovnať dve skupiny, akoby boli nezávislé.", "Pre každého pacienta vytvoriť rozdiel d = po − pred a testovať priemer rozdielov.", "Použiť chi-square test bez ohľadu na typ premennej.", "Testovať osobitne priemer pred a priemer po proti nule."],
    correct: 1,
    ok: "Správne. Párový t-test pracuje s rozdielmi v jednotlivých pároch.",
    bad: "Nesprávne. Párovanie musí zostať zachované.",
    visual: `<svg viewBox="0 0 520 270" role="img" aria-label="Párové merania"><text x="80" y="58" fill="#a7b2be" font-size="14" font-family="Arial">PACIENT</text><text x="205" y="58" fill="#58d6f3" font-size="14" font-family="Arial">PRED</text><text x="320" y="58" fill="#63e6be" font-size="14" font-family="Arial">PO</text><text x="430" y="58" fill="#f3c969" font-size="14" font-family="Arial">d</text><g font-family="Arial" font-size="16"><text x="80" y="105" fill="#fff">1</text><text x="205" y="105" fill="#58d6f3">132</text><text x="320" y="105" fill="#63e6be">126</text><text x="430" y="105" fill="#f3c969">−6</text><text x="80" y="150" fill="#fff">2</text><text x="205" y="150" fill="#58d6f3">128</text><text x="320" y="150" fill="#63e6be">125</text><text x="430" y="150" fill="#f3c969">−3</text><text x="80" y="195" fill="#fff">3</text><text x="205" y="195" fill="#58d6f3">135</text><text x="320" y="195" fill="#63e6be">130</text><text x="430" y="195" fill="#f3c969">−5</text></g></svg>`
  },
  {
    checkpoint: 4,
    question: "Kedy sú dve skupiny nezávislé?",
    answers: ["Keď rovnaké osoby meriame dvakrát.", "Keď pozorovania v jednej skupine nie sú prirodzene spárované s pozorovaniami v druhej skupine.", "Keď majú obe skupiny rovnaký počet osôb.", "Keď majú rovnaký priemer."],
    correct: 1,
    ok: "Správne. Pri nezávislých skupinách neexistuje prirodzené párovanie medzi pozorovaniami.",
    bad: "Nesprávne. Rozhodujúca je nezávislosť pozorovaní, nie rovnaký počet či priemer.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Dve nezávislé skupiny"><rect x="55" y="65" width="170" height="120" rx="18" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="140" y="105" text-anchor="middle" fill="#58d6f3" font-size="20" font-family="Arial" font-weight="800">SKUPINA A</text><circle cx="105" cy="145" r="8" fill="#58d6f3"/><circle cx="140" cy="145" r="8" fill="#58d6f3"/><circle cx="175" cy="145" r="8" fill="#58d6f3"/><rect x="295" y="65" width="170" height="120" rx="18" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="380" y="105" text-anchor="middle" fill="#63e6be" font-size="20" font-family="Arial" font-weight="800">SKUPINA B</text><circle cx="345" cy="145" r="8" fill="#63e6be"/><circle cx="380" cy="145" r="8" fill="#63e6be"/><circle cx="415" cy="145" r="8" fill="#63e6be"/></svg>`
  },
  {
    checkpoint: 5,
    question: "Čo je správny postup pri posudzovaní normality pre párový t-test?",
    answers: ["Kontrolovať normalitu rozdielov d medzi párovými meraniami.", "Kontrolovať iba skupinu PRED.", "Kontrolovať iba skupinu PO.", "Ak Shapiro-Wilk dá p < 0,05, vždy automaticky použiť neparametrický test."],
    correct: 0,
    ok: "Správne. Pri párovom t-teste sa predpoklad normality viaže na rozdiely d.",
    bad: "Nesprávne. Normalitu kontrolujeme na veličine, ktorú test analyzuje — na rozdieloch.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Normalita rozdielov"><rect x="55" y="76" width="115" height="70" rx="14" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="112" y="118" text-anchor="middle" fill="#58d6f3" font-size="18" font-family="Arial" font-weight="800">PRED</text><text x="210" y="118" text-anchor="middle" fill="#a7b2be" font-size="28" font-family="Arial">−</text><rect x="250" y="76" width="115" height="70" rx="14" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="307" y="118" text-anchor="middle" fill="#63e6be" font-size="18" font-family="Arial" font-weight="800">PO</text><text x="400" y="118" text-anchor="middle" fill="#a7b2be" font-size="28" font-family="Arial">=</text><text x="455" y="118" text-anchor="middle" fill="#f3c969" font-size="18" font-family="Arial" font-weight="800">d</text><text x="260" y="200" text-anchor="middle" fill="#f3c969" font-size="15" font-family="Arial">Normalitu posudzuj na rozdieloch d.</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ak máme dve kategorizované premenné a dostatočne veľké očakávané početnosti, ktorý test je typickou voľbou?",
    answers: ["Chi-square test nezávislosti.", "Párový t-test.", "Jednovýberový t-test.", "Pearsonov korelačný koeficient bez testu."],
    correct: 0,
    ok: "Správne. Pre vzťah dvoch kategorizovaných premenných sa typicky používa chi-square test nezávislosti.",
    bad: "Nesprávne. Pri dvoch kategorizovaných premenných uvažujeme o kontingenčnej tabuľke a chi-square teste.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Kontingenčná tabuľka"><rect x="95" y="55" width="330" height="145" rx="14" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><line x1="205" y1="55" x2="205" y2="200" stroke="#7f8c9a" stroke-width="2"/><line x1="315" y1="55" x2="315" y2="200" stroke="#7f8c9a" stroke-width="2"/><line x1="95" y1="103" x2="425" y2="103" stroke="#7f8c9a" stroke-width="2"/><line x1="95" y1="151" x2="425" y2="151" stroke="#7f8c9a" stroke-width="2"/><text x="150" y="86" text-anchor="middle" fill="#a7b2be" font-size="13" font-family="Arial">Kategória</text><text x="260" y="86" text-anchor="middle" fill="#58d6f3" font-size="13" font-family="Arial">ÁNO</text><text x="370" y="86" text-anchor="middle" fill="#63e6be" font-size="13" font-family="Arial">NIE</text><text x="150" y="135" text-anchor="middle" fill="#fff" font-size="13" font-family="Arial">Skupina 1</text><text x="150" y="183" text-anchor="middle" fill="#fff" font-size="13" font-family="Arial">Skupina 2</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Kedy sa v malej 2×2 kontingenčnej tabuľke často uprednostňuje Fisherov exaktný test?",
    answers: ["Keď sú očakávané početnosti malé a chi-square aproximácia môže byť nevhodná.", "Vždy, keď porovnávame dva priemery.", "Len pri normálne rozdelených dátach.", "Keď máme jednu spojitú premennú a jednu referenčnú hodnotu."],
    correct: 0,
    ok: "Správne. Fisherov exaktný test je vhodný najmä pri malých početnostiach v 2×2 tabuľkách.",
    bad: "Nesprávne. Fisherov test sa viaže na kategorizované dáta a malé početnosti v kontingenčnej tabuľke.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Malá 2x2 tabuľka"><rect x="150" y="55" width="220" height="150" rx="14" fill="#101b25" stroke="#f3c969" stroke-width="2"/><line x1="260" y1="55" x2="260" y2="205" stroke="#7f8c9a" stroke-width="2"/><line x1="150" y1="130" x2="370" y2="130" stroke="#7f8c9a" stroke-width="2"/><text x="205" y="100" text-anchor="middle" fill="#58d6f3" font-size="26" font-family="Arial" font-weight="800">2</text><text x="315" y="100" text-anchor="middle" fill="#63e6be" font-size="26" font-family="Arial" font-weight="800">4</text><text x="205" y="175" text-anchor="middle" fill="#63e6be" font-size="26" font-family="Arial" font-weight="800">3</text><text x="315" y="175" text-anchor="middle" fill="#58d6f3" font-size="26" font-family="Arial" font-weight="800">1</text><text x="260" y="235" text-anchor="middle" fill="#f3c969" font-size="14" font-family="Arial">malé početnosti → zváž Fisherov test</text></svg>`
  }
];
