window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Vo výbere 1500 pacientov bol vypočítaný priemerný systolický tlak 118,31 mmHg. Čo predstavuje hodnota 118,31 mmHg?",
    answers: ["Výberový priemer", "Veľkosť populácie", "95 % interval", "Populačnú smerodajnú odchýlku"],
    correct: 0,
    ok: "Správne. Ide o výberový priemer vypočítaný z pozorovaných údajov.",
    bad: "Nesprávne. Rozlišuj medzi číslom vypočítaným z výberu a neznámym populačným parametrom.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Schéma výberu a populácie"><rect x="24" y="42" width="200" height="145" rx="18" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="124" y="82" text-anchor="middle" fill="#58d6f3" font-size="18" font-family="Arial" font-weight="700">VÝBER</text><text x="124" y="120" text-anchor="middle" fill="#fff" font-size="30" font-family="Arial" font-weight="800">n = 1500</text><text x="124" y="154" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">pozorované údaje</text><path d="M235 114 H285" stroke="#9aa8b7" stroke-width="3"/><path d="M285 114 l-12 -8 v16 z" fill="#9aa8b7"/><rect x="296" y="42" width="200" height="145" rx="18" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="396" y="82" text-anchor="middle" fill="#f3c969" font-size="18" font-family="Arial" font-weight="700">POPULÁCIA</text><text x="396" y="120" text-anchor="middle" fill="#fff" font-size="30" font-family="Arial" font-weight="800">μ = ?</text><text x="396" y="154" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">neznámy parameter</text></svg>`
  },
  {
    checkpoint: 1,
    question: "Ktorý z nasledujúcich príkladov je bodovým odhadom populačného priemeru?",
    answers: ["Jedno číslo, napr. 118,31", "Interval od 117,62 do 118,99", "95 % spoľahlivosť", "Všetky namerané hodnoty"],
    correct: 0,
    ok: "Správne. Bodový odhad je jedna konkrétna hodnota.",
    bad: "Nesprávne. Bodový odhad je jedna hodnota, nie interval ani súbor všetkých meraní.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Bodový odhad"><line x1="55" y1="145" x2="465" y2="145" stroke="#7f8c9a" stroke-width="3"/><circle cx="260" cy="145" r="13" fill="#f3c969"/><line x1="260" y1="92" x2="260" y2="130" stroke="#f3c969" stroke-width="3"/><text x="260" y="72" text-anchor="middle" fill="#f3c969" font-size="20" font-family="Arial" font-weight="700">JEDEN ODHAD</text><text x="260" y="192" text-anchor="middle" fill="#a7b2be" font-size="15" font-family="Arial">jedna hodnota na číselnej osi</text></svg>`
  },
  {
    checkpoint: 2,
    question: "Dva výbery majú rovnaký priemer, ale prvý má hodnoty tesne pri priemere a druhý veľmi rozptýlené. Ktorá veličina opisuje tento rozdiel?",
    answers: ["SE", "SD", "n", "95 %"],
    correct: 1,
    ok: "Správne. SD opisuje rozptýlenie jednotlivých pozorovaní.",
    bad: "Nesprávne. Hľadáme mieru variability jednotlivých hodnôt okolo priemeru.",
    visual: `<svg viewBox="0 0 520 260" role="img" aria-label="Dve skupiny s rovnakým priemerom a rozdielnym rozptylom"><line x1="45" y1="215" x2="475" y2="215" stroke="#7f8c9a" stroke-width="2"/><line x1="260" y1="28" x2="260" y2="224" stroke="#f3c969" stroke-width="2" stroke-dasharray="6 6"/><g fill="#63e6be"><circle cx="225" cy="82" r="7"/><circle cx="244" cy="70" r="7"/><circle cx="260" cy="88" r="7"/><circle cx="278" cy="72" r="7"/><circle cx="294" cy="86" r="7"/></g><g fill="#58d6f3"><circle cx="95" cy="166" r="7"/><circle cx="165" cy="150" r="7"/><circle cx="230" cy="174" r="7"/><circle cx="290" cy="148" r="7"/><circle cx="365" cy="176" r="7"/><circle cx="430" cy="154" r="7"/></g><text x="260" y="245" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">rovnaký stred, rozdielna rozptýlenosť</text></svg>`
  },
  {
    checkpoint: 2,
    question: "Ak sa SD nemení a veľkosť výberu sa zvýši zo 100 na 400, čo sa stane so štandardnou chybou priemeru SE?",
    answers: ["Zostane rovnaká", "Klesne približne na polovicu", "Klesne na štvrtinu", "Zdvojnásobí sa"],
    correct: 1,
    ok: "Správne. Pretože SE = SD/√n, štvornásobné n zníži SE približne na polovicu.",
    bad: "Nesprávne. Vo vzťahu SE = SD/√n rastie menovateľ s odmocninou z n.",
    visual: `<svg viewBox="0 0 520 260" role="img" aria-label="Porovnanie n 100 a n 400"><text x="260" y="48" text-anchor="middle" fill="#f3c969" font-size="28" font-family="Arial" font-weight="800">SE = SD / √n</text><rect x="70" y="90" width="155" height="105" rx="16" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="148" y="126" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">SCENÁR A</text><text x="148" y="166" text-anchor="middle" fill="#58d6f3" font-size="28" font-family="Arial" font-weight="800">n = 100</text><rect x="295" y="90" width="155" height="105" rx="16" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="372" y="126" text-anchor="middle" fill="#9aa8b7" font-size="14" font-family="Arial">SCENÁR B</text><text x="372" y="166" text-anchor="middle" fill="#63e6be" font-size="28" font-family="Arial" font-weight="800">n = 400</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Čo vyjadruje 95 % spoľahlivosť pri opakovanom vytváraní intervalov rovnakou metódou?",
    answers: ["95 % pacientov leží v každom intervale", "Približne 95 % takto vytvorených intervalov zachytí skutočný parameter", "Parameter má po výpočte 95 % šancu meniť svoju hodnotu", "Výber tvorí 95 % populácie"],
    correct: 1,
    ok: "Správne. Ide o dlhodobú úspešnosť metódy pri opakovaných výberoch.",
    bad: "Nesprávne. Pri frekventistickom intervale je parameter pevný a náhodné sú intervaly.",
    visual: `<svg viewBox="0 0 520 270" role="img" aria-label="Viaceré intervaly okolo pevného parametra"><line x1="270" y1="25" x2="270" y2="240" stroke="#f3c969" stroke-width="3" stroke-dasharray="7 6"/><text x="280" y="22" fill="#f3c969" font-size="13" font-family="Arial">pevný parameter</text><g stroke-width="7" stroke-linecap="round"><line x1="110" y1="65" x2="360" y2="65" stroke="#63e6be"/><line x1="155" y1="102" x2="390" y2="102" stroke="#63e6be"/><line x1="85" y1="139" x2="310" y2="139" stroke="#63e6be"/><line x1="320" y1="176" x2="455" y2="176" stroke="#ff6678"/><line x1="150" y1="213" x2="395" y2="213" stroke="#63e6be"/></g></svg>`
  },
  {
    checkpoint: 3,
    question: "Pri rovnakých dátach zvýšime úroveň spoľahlivosti z 95 % na 99 %. Ako sa typicky zmení interval?",
    answers: ["Zúži sa", "Rozšíri sa", "Stred sa vždy posunie doprava", "Zmení sa na bodový odhad"],
    correct: 1,
    ok: "Správne. Vyššia požadovaná spoľahlivosť vedie k širšiemu intervalu.",
    bad: "Nesprávne. Vyššia úroveň spoľahlivosti vyžaduje väčšiu rezervu okolo odhadu.",
    visual: `<svg viewBox="0 0 520 240" role="img" aria-label="Porovnanie šírky 95 a 99 percentného intervalu"><line x1="260" y1="28" x2="260" y2="205" stroke="#7f8c9a" stroke-width="2" stroke-dasharray="5 6"/><text x="68" y="92" fill="#58d6f3" font-size="17" font-family="Arial" font-weight="700">95 %</text><line x1="150" y1="86" x2="370" y2="86" stroke="#58d6f3" stroke-width="10" stroke-linecap="round"/><text x="68" y="160" fill="#f3c969" font-size="17" font-family="Arial" font-weight="700">99 %</text><line x1="92" y1="154" x2="428" y2="154" stroke="#f3c969" stroke-width="10" stroke-linecap="round"/></svg>`
  },
  {
    checkpoint: 3,
    question: "Ktoré tvrdenie správne rozlišuje interval pre priemer od variability jednotlivých pacientov?",
    answers: ["95 % interval pre priemer musí obsahovať 95 % pacientov", "Interval pre priemer vyjadruje neistotu odhadu priemeru, nie rozsah individuálnych hodnôt", "Interval je vždy minimum a maximum meraní", "Interval určuje počet pacientov nad priemerom"],
    correct: 1,
    ok: "Správne. Interval pre priemer sa týka neistoty odhadu populačného priemeru.",
    bad: "Nesprávne. Individuálne hodnoty môžu byť oveľa rozptýlenejšie než interval odhadu priemeru.",
    visual: `<svg viewBox="0 0 520 270" role="img" aria-label="Individuálne hodnoty a užší interval odhadu"><g fill="#58d6f3"><circle cx="75" cy="192" r="7"/><circle cx="120" cy="142" r="7"/><circle cx="168" cy="182" r="7"/><circle cx="220" cy="118" r="7"/><circle cx="272" cy="168" r="7"/><circle cx="330" cy="126" r="7"/><circle cx="388" cy="184" r="7"/><circle cx="445" cy="145" r="7"/></g><line x1="205" y1="62" x2="315" y2="62" stroke="#63e6be" stroke-width="10" stroke-linecap="round"/><circle cx="260" cy="62" r="9" fill="#f3c969"/><text x="260" y="35" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">interval odhadu priemeru</text><line x1="48" y1="220" x2="472" y2="220" stroke="#7f8c9a" stroke-width="2"/></svg>`
  },
  {
    checkpoint: 4,
    question: "Výberový priemer systolického tlaku je 118,31 mmHg. Ktorá dvojica hraníc zodpovedá uvedenému 95 % intervalu v kapitole?",
    answers: ["104,84 až 131,78", "117,62 až 118,99", "118,31 až 1500", "13,47 až 118,31"],
    correct: 1,
    ok: "Správne. Uvedený interval je približne 117,62 až 118,99 mmHg.",
    bad: "Nesprávne. Správne hranice ležia tesne na oboch stranách priemeru 118,31 mmHg.",
    visual: `<svg viewBox="0 0 520 230" role="img" aria-label="Číselná os s výberovým priemerom"><line x1="60" y1="130" x2="460" y2="130" stroke="#7f8c9a" stroke-width="3"/><circle cx="260" cy="130" r="11" fill="#f3c969"/><text x="260" y="92" text-anchor="middle" fill="#f3c969" font-size="22" font-family="Arial" font-weight="800">118,31</text><text x="260" y="180" text-anchor="middle" fill="#a7b2be" font-size="15" font-family="Arial">výberový priemer</text></svg>`
  },
  {
    checkpoint: 4,
    question: "Interval 117,62 až 118,99 mmHg je približne symetrický okolo 118,31 mmHg. Čo z toho vyplýva?",
    answers: ["Bodový odhad leží približne v strede intervalu", "Bodový odhad leží mimo intervalu", "Interval obsahuje všetky merania", "Dolná hranica je väčšia ako horná"],
    correct: 0,
    ok: "Správne. Bodový odhad je približne v strede medzi oboma hranicami.",
    bad: "Nesprávne. Porovnaj vzdialenosť hodnoty 118,31 od dolnej a hornej hranice.",
    visual: `<svg viewBox="0 0 520 245" role="img" aria-label="Tri hodnoty dolná hranica stred horná hranica"><rect x="35" y="82" width="135" height="95" rx="14" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="102" y="116" text-anchor="middle" fill="#a7b2be" font-size="13" font-family="Arial">DOLNÁ</text><text x="102" y="148" text-anchor="middle" fill="#58d6f3" font-size="23" font-family="Arial" font-weight="800">117,62</text><rect x="192" y="62" width="136" height="135" rx="14" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="260" y="108" text-anchor="middle" fill="#a7b2be" font-size="13" font-family="Arial">STRED</text><text x="260" y="145" text-anchor="middle" fill="#f3c969" font-size="25" font-family="Arial" font-weight="800">118,31</text><rect x="350" y="82" width="135" height="95" rx="14" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="417" y="116" text-anchor="middle" fill="#a7b2be" font-size="13" font-family="Arial">HORNÁ</text><text x="417" y="148" text-anchor="middle" fill="#63e6be" font-size="23" font-family="Arial" font-weight="800">118,99</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ak SD ostáva rovnaká a zväčšíme n, čo sa typicky stane so šírkou intervalu spoľahlivosti?",
    answers: ["Interval sa rozšíri", "Interval sa zúži", "Stred sa musí posunúť", "SD sa automaticky zdvojnásobí"],
    correct: 1,
    ok: "Správne. Väčšie n znižuje SE a interval býva užší.",
    bad: "Nesprávne. Väčší výber pri rovnakej variabilite zvyšuje presnosť odhadu.",
    visual: `<svg viewBox="0 0 520 245" role="img" aria-label="Dva intervaly pri rôznej veľkosti výberu"><text x="45" y="84" fill="#58d6f3" font-size="16" font-family="Arial" font-weight="700">n = 100</text><line x1="160" y1="78" x2="450" y2="78" stroke="#58d6f3" stroke-width="10" stroke-linecap="round"/><text x="45" y="164" fill="#63e6be" font-size="16" font-family="Arial" font-weight="700">n = 400</text><line x1="230" y1="158" x2="380" y2="158" stroke="#63e6be" stroke-width="10" stroke-linecap="round"/></svg>`
  },
  {
    checkpoint: 5,
    question: "Pri rovnakom n sa výrazne zvýši SD. Aký vplyv to má typicky na interval spoľahlivosti?",
    answers: ["Rozšíri sa", "Zúži sa", "Nezmení sa", "SE sa vynuluje"],
    correct: 0,
    ok: "Správne. Väčšia variabilita zvyšuje SE a interval sa rozširuje.",
    bad: "Nesprávne. Väčšie SD pri rovnakom n znamená väčšiu neistotu odhadu.",
    visual: `<svg viewBox="0 0 520 265" role="img" aria-label="Úzka a široká distribúcia"><line x1="45" y1="218" x2="475" y2="218" stroke="#7f8c9a" stroke-width="2"/><path d="M80 216 C145 210 185 126 225 86 C240 70 252 63 260 61 C268 63 280 70 295 86 C335 126 375 210 440 216" fill="none" stroke="#58d6f3" stroke-width="4"/><path d="M175 216 C210 210 230 120 245 74 C251 55 256 47 260 44 C264 47 269 55 275 74 C290 120 310 210 345 216" fill="none" stroke="#63e6be" stroke-width="4"/><text x="120" y="42" fill="#58d6f3" font-size="14" font-family="Arial">väčšie SD</text><text x="350" y="64" fill="#63e6be" font-size="14" font-family="Arial">menšie SD</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ktorá kombinácia vedie pri ostatných podmienkach k najmenšej štandardnej chybe priemeru?",
    answers: ["Malé n a veľké SD", "Veľké n a malé SD", "Malé n a veľká úroveň spoľahlivosti", "Veľké SD bez ohľadu na n"],
    correct: 1,
    ok: "Správne. Veľké n a malé SD vedú k menšiemu SE.",
    bad: "Nesprávne. Pri SE = SD/√n pomáha veľké n a malé SD.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Porovnanie dvoch scenárov"><rect x="55" y="55" width="180" height="140" rx="18" fill="#101b25" stroke="#ff6678" stroke-width="2"/><text x="145" y="92" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">SCENÁR A</text><text x="145" y="130" text-anchor="middle" fill="#ff6678" font-size="23" font-family="Arial" font-weight="800">malé n</text><text x="145" y="164" text-anchor="middle" fill="#ff6678" font-size="23" font-family="Arial" font-weight="800">veľké SD</text><rect x="285" y="55" width="180" height="140" rx="18" fill="#101b25" stroke="#63e6be" stroke-width="2"/><text x="375" y="92" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">SCENÁR B</text><text x="375" y="130" text-anchor="middle" fill="#63e6be" font-size="23" font-family="Arial" font-weight="800">veľké n</text><text x="375" y="164" text-anchor="middle" fill="#63e6be" font-size="23" font-family="Arial" font-weight="800">malé SD</text></svg>`
  }
];
