window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Prečo je pri troch a viacerých skupinách vhodnejšia ANOVA než séria samostatných t-testov?",
    answers: ["ANOVA vždy dokáže, že všetky skupiny sa navzájom líšia.","ANOVA testuje spoločnú H0 o rovnosti priemerov a obmedzí problém opakovaného testovania.","ANOVA sa používa iba pri presne piatich skupinách.","Séria t-testov nemení riziko chyby I. druhu."],
    correct: 1,
    ok: "Správne. ANOVA používa jeden globálny test rovnosti priemerov a tým obmedzuje problém viacnásobného testovania.",
    bad: "Nesprávne. Pri mnohých samostatných t-testoch rastie riziko falošne pozitívneho záveru.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Viac skupín smeruje do jedného ANOVA testu"><g font-family="Arial" text-anchor="middle"><circle cx="70" cy="72" r="30" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><circle cx="165" cy="72" r="30" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><circle cx="260" cy="72" r="30" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><circle cx="355" cy="72" r="30" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><circle cx="450" cy="72" r="30" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><text x="70" y="80" fill="#fff" font-size="20" font-weight="700">A</text><text x="165" y="80" fill="#fff" font-size="20" font-weight="700">B</text><text x="260" y="80" fill="#fff" font-size="20" font-weight="700">C</text><text x="355" y="80" fill="#fff" font-size="20" font-weight="700">D</text><text x="450" y="80" fill="#fff" font-size="20" font-weight="700">E</text><path d="M70 112 L260 160 M165 112 L260 160 M260 112 L260 160 M355 112 L260 160 M450 112 L260 160" stroke="#9aa8b7" stroke-width="2"/><rect x="155" y="160" width="210" height="55" rx="15" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="260" y="194" fill="#f3c969" font-size="18" font-weight="800">1 SPOLOČNÁ ANOVA</text></g></svg>`
  },
  {
    checkpoint: 1,
    question: "Ak by sme pri piatich skupinách robili veľa párových t-testov bez korekcie, čo je hlavný problém?",
    answers: ["Rastie kumulatívne riziko chyby I. druhu.","Priemery sa automaticky vyrovnajú.","F-štatistika sa vždy rovná nule.","Nie je možné vypočítať p-hodnotu."],
    correct: 0,
    ok: "Správne. Čím viac samostatných testov vykonáme, tým väčšia je šanca aspoň jedného falošne pozitívneho výsledku.",
    bad: "Nesprávne. Premýšľaj nad tým, čo sa deje s celkovým rizikom falošného pozitívneho záveru pri opakovanom testovaní.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Viac párových testov"><g font-family="Arial"><text x="260" y="40" text-anchor="middle" fill="#a7b2be" font-size="16">MNOHO SAMOSTATNÝCH TESTOV</text><g fill="#101b25" stroke="#ff6678" stroke-width="2"><rect x="55" y="75" width="120" height="55" rx="12"/><rect x="200" y="75" width="120" height="55" rx="12"/><rect x="345" y="75" width="120" height="55" rx="12"/></g><g fill="#fff" font-size="15" font-weight="700" text-anchor="middle"><text x="115" y="109">A vs B</text><text x="260" y="109">A vs C</text><text x="405" y="109">B vs C</text></g><path d="M115 145 V182 H405 V145" fill="none" stroke="#ff6678" stroke-width="3"/><text x="260" y="215" text-anchor="middle" fill="#ff6678" font-size="17" font-weight="800">vyššie kumulatívne α</text></g></svg>`
  },
  {
    checkpoint: 2,
    question: "Kedy bude F-štatistika typicky väčšia?",
    answers: ["Keď je variabilita medzi skupinami veľká vzhľadom na variabilitu vnútri skupín.","Keď sú všetky skupinové priemery takmer rovnaké a vnútorný šum je veľký.","Keď sú presne dve skupiny.","Keď je p-hodnota väčšia než 1."],
    correct: 0,
    ok: "Správne. F porovnáva variabilitu medzi skupinami s variabilitou vnútri skupín.",
    bad: "Nesprávne. Mysli na F ako na pomer signálu medzi skupinami k šumu vnútri skupín.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="F pomer medzi a vnútri"><g font-family="Arial" text-anchor="middle"><text x="260" y="50" fill="#58d6f3" font-size="22" font-weight="800">VARIABILITA MEDZI</text><line x1="110" y1="88" x2="410" y2="88" stroke="#f3c969" stroke-width="4"/><text x="260" y="132" fill="#63e6be" font-size="22" font-weight="800">VARIABILITA VNÚTRI</text><text x="260" y="190" fill="#fff" font-size="28" font-weight="900">F = MEDZI / VNÚTRI</text></g></svg>`
  },
  {
    checkpoint: 2,
    question: "Ak sa rozdiely medzi skupinovými priemermi zväčšia, ale vnútroskupinová variabilita zostane podobná, čo sa typicky stane s F?",
    answers: ["F sa zväčší.","F sa zmenší na nulu.","F sa nezmení.","F sa vždy rovná p-hodnote."],
    correct: 0,
    ok: "Správne. Väčší signál medzi skupinami pri podobnom vnútornom šume zvyšuje F.",
    bad: "Nesprávne. Pri rovnakom menovateli rastúci čitateľ zvyšuje pomer F.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Skupiny s rozdielnymi priemermi"><line x1="50" y1="205" x2="470" y2="205" stroke="#7f8c9a" stroke-width="2"/><g fill="#58d6f3"><circle cx="110" cy="160" r="8"/><circle cx="130" cy="145" r="8"/><circle cx="150" cy="170" r="8"/></g><g fill="#f3c969"><circle cx="250" cy="105" r="8"/><circle cx="270" cy="90" r="8"/><circle cx="290" cy="115" r="8"/></g><g fill="#63e6be"><circle cx="390" cy="55" r="8"/><circle cx="410" cy="70" r="8"/><circle cx="430" cy="48" r="8"/></g><text x="130" y="230" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">A</text><text x="270" y="230" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">B</text><text x="410" y="230" text-anchor="middle" fill="#a7b2be" font-size="14" font-family="Arial">C</text></svg>`
  },
  {
    checkpoint: 3,
    question: "Jednofaktorová ANOVA dala F = 21,67 a p < 0,001. Čo z toho môžeme priamo uzavrieť?",
    answers: ["Všetky dvojice skupín sa určite líšia.","Aspoň jeden skupinový priemer sa líši, konkrétne páry treba určiť post-hoc testom.","H0 je pravdivá s pravdepodobnosťou menšou než 0,1 %.","Fajčenie je jedinou možnou príčinou rozdielu tlaku."],
    correct: 1,
    ok: "Správne. Významná ANOVA hovorí, že nie všetky priemery sú rovnaké; lokalizáciu rozdielov rieši post-hoc analýza.",
    bad: "Nesprávne. Globálny ANOVA test sám neurčí, ktoré konkrétne dvojice sa líšia.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Výsledok ANOVA"><g font-family="Arial"><rect x="55" y="55" width="170" height="100" rx="16" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><rect x="295" y="55" width="170" height="100" rx="16" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="140" y="92" text-anchor="middle" fill="#a7b2be" font-size="15">F</text><text x="140" y="130" text-anchor="middle" fill="#58d6f3" font-size="28" font-weight="800">21,67</text><text x="380" y="92" text-anchor="middle" fill="#a7b2be" font-size="15">p</text><text x="380" y="130" text-anchor="middle" fill="#f3c969" font-size="28" font-weight="800">&lt; 0,001</text><text x="260" y="205" text-anchor="middle" fill="#63e6be" font-size="18" font-weight="800">ASPOŇ JEDEN PRIEMER SA LÍŠI</text></g></svg>`
  },
  {
    checkpoint: 3,
    question: "Ak ANOVA nie je štatisticky významná, ktorý záver je najprimeranejší?",
    answers: ["Nemáme dostatok dôkazov tvrdiť, že sa skupinové priemery líšia.","Všetky skupiny sú dokázane identické.","Treba automaticky vyhlásiť všetky páry za významné.","F musí byť záporné."],
    correct: 0,
    ok: "Správne. Nevýznamný výsledok znamená nedostatok dôkazov proti H0, nie dôkaz úplnej rovnosti.",
    bad: "Nesprávne. Nevýznamnosť neznamená absolútnu identitu skupín.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Nevýznamná ANOVA"><g font-family="Arial" text-anchor="middle"><line x1="80" y1="180" x2="440" y2="180" stroke="#7f8c9a" stroke-width="2"/><g fill="#58d6f3"><circle cx="150" cy="130" r="8"/><circle cx="180" cy="120" r="8"/><circle cx="210" cy="138" r="8"/></g><g fill="#f3c969"><circle cx="240" cy="128" r="8"/><circle cx="270" cy="118" r="8"/><circle cx="300" cy="136" r="8"/></g><g fill="#63e6be"><circle cx="330" cy="132" r="8"/><circle cx="360" cy="122" r="8"/><circle cx="390" cy="140" r="8"/></g><text x="260" y="55" fill="#a7b2be" font-size="18">veľké prekrytie skupín</text><text x="260" y="222" fill="#fff" font-size="16">nedostatok dôkazov proti H0</text></g></svg>`
  },
  {
    checkpoint: 3,
    question: "Čo je úlohou post-hoc testu po významnej ANOVA?",
    answers: ["Zistiť, ktoré konkrétne dvojice skupín sa líšia.","Nahradiť všetky priemery mediánmi.","Určiť počet pozorovaní bez výpočtu.","Dokázať kauzalitu."],
    correct: 0,
    ok: "Správne. Post-hoc test lokalizuje rozdiely medzi konkrétnymi skupinami.",
    bad: "Nesprávne. Post-hoc analýza nasleduje po globálnom teste a hľadá konkrétne párové rozdiely.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Globálny test a post-hoc porovnania"><g font-family="Arial"><rect x="160" y="30" width="200" height="58" rx="14" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="260" y="66" text-anchor="middle" fill="#f3c969" font-size="18" font-weight="800">ANOVA: p &lt; 0,05</text><path d="M260 88 V125" stroke="#9aa8b7" stroke-width="3"/><rect x="45" y="145" width="120" height="55" rx="12" fill="#101b25" stroke="#58d6f3"/><rect x="200" y="145" width="120" height="55" rx="12" fill="#101b25" stroke="#58d6f3"/><rect x="355" y="145" width="120" height="55" rx="12" fill="#101b25" stroke="#58d6f3"/><g fill="#fff" font-size="15" font-weight="700" text-anchor="middle"><text x="105" y="178">A vs B</text><text x="260" y="178">A vs C</text><text x="415" y="178">B vs C</text></g></g></svg>`
  },
  {
    checkpoint: 4,
    question: "Tukeyho test dal: A-B nevýznamné, A-C významné, B-C významné. Ktorý záver zodpovedá výsledkom?",
    answers: ["Aktívni a bývalí sa významne líšia, nefajčiari sa nelíšia od nikoho.","Aktívni a bývalí sa významne nelíšia; obe fajčiarske skupiny sa líšia od nefajčiarov.","Všetky tri dvojice sú nevýznamné.","Tukeyho test neporovnáva dvojice skupín."],
    correct: 1,
    ok: "Správne. Rozdiel sa lokalizoval voči nefajčiarom; aktívni a bývalí sa medzi sebou významne nelíšia.",
    bad: "Nesprávne. Prečítaj tri párové porovnania samostatne a sleduj, ktoré obsahujú skupinu C.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Tukeyho párové porovnania"><g font-family="Arial"><rect x="90" y="45" width="340" height="45" rx="10" fill="#101b25" stroke="#7f8c9a"/><rect x="90" y="105" width="340" height="45" rx="10" fill="#101b25" stroke="#63e6be"/><rect x="90" y="165" width="340" height="45" rx="10" fill="#101b25" stroke="#63e6be"/><text x="120" y="74" fill="#fff" font-size="16">A − B</text><text x="400" y="74" text-anchor="end" fill="#a7b2be" font-size="15" font-weight="700">NEVÝZNAMNÉ</text><text x="120" y="134" fill="#fff" font-size="16">A − C</text><text x="400" y="134" text-anchor="end" fill="#63e6be" font-size="15" font-weight="700">VÝZNAMNÉ</text><text x="120" y="194" fill="#fff" font-size="16">B − C</text><text x="400" y="194" text-anchor="end" fill="#63e6be" font-size="15" font-weight="700">VÝZNAMNÉ</text></g></svg>`
  },
  {
    checkpoint: 4,
    question: "Prečo sa po významnej ANOVA často používa Tukeyho post-hoc test namiesto nekorigovaných párových t-testov?",
    answers: ["Kontroluje chybu pri viacnásobných párových porovnaniach.","Zaručí, že všetky páry budú významné.","Používa sa iba pri dvoch skupinách.","Nepočíta žiadne p-hodnoty."],
    correct: 0,
    ok: "Správne. Tukeyho test je navrhnutý pre viacnásobné párové porovnania pri kontrole celkovej chybovosti.",
    bad: "Nesprávne. Jeho hlavnou výhodou je kontrola chybovosti pri viacerých párových porovnaniach.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Tukey kontroluje viacnásobné porovnania"><g font-family="Arial" text-anchor="middle"><text x="260" y="45" fill="#a7b2be" font-size="16">VIACNÁSOBNÉ POROVNANIA</text><rect x="55" y="78" width="120" height="50" rx="12" fill="#101b25" stroke="#58d6f3"/><rect x="200" y="78" width="120" height="50" rx="12" fill="#101b25" stroke="#58d6f3"/><rect x="345" y="78" width="120" height="50" rx="12" fill="#101b25" stroke="#58d6f3"/><text x="115" y="109" fill="#fff" font-size="15">A vs B</text><text x="260" y="109" fill="#fff" font-size="15">A vs C</text><text x="405" y="109" fill="#fff" font-size="15">B vs C</text><path d="M115 135 V170 H405 V135" fill="none" stroke="#f3c969" stroke-width="3"/><text x="260" y="210" fill="#f3c969" font-size="18" font-weight="800">TUKEY = KONTROLA CHYBOVOSTI</text></g></svg>`
  },
  {
    checkpoint: 5,
    question: "Čo je v dvojfaktorovej ANOVA samostatnou treťou otázkou popri dvoch hlavných efektoch?",
    answers: ["Interakcia: či sa efekt jedného faktora mení podľa úrovne druhého faktora.","Počet riadkov v dátovom súbore.","Rozdiel medzi mediánom a modusom.","Vždy iba jednovýberový t-test."],
    correct: 0,
    ok: "Správne. Okrem dvoch hlavných efektov model testuje aj interakciu faktorov.",
    bad: "Nesprávne. Dvojfaktorový model testuje dva hlavné efekty a navyše ich interakciu.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Dva hlavné efekty a interakcia"><g font-family="Arial" text-anchor="middle"><rect x="40" y="45" width="190" height="70" rx="14" fill="#101b25" stroke="#58d6f3" stroke-width="2"/><rect x="290" y="45" width="190" height="70" rx="14" fill="#101b25" stroke="#63e6be" stroke-width="2"/><rect x="140" y="155" width="240" height="70" rx="14" fill="#101b25" stroke="#f3c969" stroke-width="2"/><text x="135" y="72" fill="#a7b2be" font-size="13">HLAVNÝ EFEKT</text><text x="135" y="98" fill="#58d6f3" font-size="18" font-weight="800">POHLAVIE</text><text x="385" y="72" fill="#a7b2be" font-size="13">HLAVNÝ EFEKT</text><text x="385" y="98" fill="#63e6be" font-size="18" font-weight="800">FAJČENIE</text><text x="260" y="182" fill="#a7b2be" font-size="13">INTERAKCIA</text><text x="260" y="208" fill="#f3c969" font-size="17" font-weight="800">POHLAVIE × FAJČENIE</text></g></svg>`
  },
  {
    checkpoint: 5,
    question: "Čo znamená významná interakcia medzi pohlavím a fajčením?",
    answers: ["Efekt fajčenia sa môže líšiť podľa pohlavia.","Pohlavie ani fajčenie nemajú žiadny efekt.","Všetky skupiny majú rovnaký priemer.","Interakcia je iba iný názov pre hlavný efekt."],
    correct: 0,
    ok: "Správne. Významná interakcia znamená, že účinok jedného faktora závisí od úrovne druhého.",
    bad: "Nesprávne. Interakcia vyjadruje závislosť efektu jedného faktora od druhého.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Interakcia ako neparalelné línie"><line x1="70" y1="205" x2="460" y2="205" stroke="#7f8c9a" stroke-width="2"/><line x1="95" y1="180" x2="420" y2="70" stroke="#58d6f3" stroke-width="5"/><line x1="95" y1="90" x2="420" y2="165" stroke="#f3c969" stroke-width="5"/><circle cx="95" cy="180" r="7" fill="#58d6f3"/><circle cx="420" cy="70" r="7" fill="#58d6f3"/><circle cx="95" cy="90" r="7" fill="#f3c969"/><circle cx="420" cy="165" r="7" fill="#f3c969"/><text x="130" y="45" fill="#a7b2be" font-size="15" font-family="Arial">efekt sa mení podľa druhej premennej</text></svg>`
  },
  {
    checkpoint: 5,
    question: "Ak sú línie pri grafickom zobrazení faktorov približne paralelné, čo to typicky naznačuje o interakcii?",
    answers: ["Interakcia je skôr slabá alebo neprítomná.","Interakcia je určite maximálna.","Hlavné efekty sa nedajú testovať.","ANOVA sa nesmie použiť."],
    correct: 0,
    ok: "Správne. Približne paralelné línie zvyčajne naznačujú slabú alebo neprítomnú interakciu.",
    bad: "Nesprávne. Pri silnej interakcii sa línie často rozchádzajú, zbiehajú alebo križujú.",
    visual: `<svg viewBox="0 0 520 250" role="img" aria-label="Paralelné línie bez silnej interakcie"><line x1="70" y1="205" x2="460" y2="205" stroke="#7f8c9a" stroke-width="2"/><line x1="95" y1="155" x2="420" y2="85" stroke="#58d6f3" stroke-width="5"/><line x1="95" y1="195" x2="420" y2="125" stroke="#63e6be" stroke-width="5"/><circle cx="95" cy="155" r="7" fill="#58d6f3"/><circle cx="420" cy="85" r="7" fill="#58d6f3"/><circle cx="95" cy="195" r="7" fill="#63e6be"/><circle cx="420" cy="125" r="7" fill="#63e6be"/><text x="260" y="45" text-anchor="middle" fill="#a7b2be" font-size="15" font-family="Arial">približne paralelné línie</text></svg>`
  }
];
