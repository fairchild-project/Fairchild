window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Ktorá vlastnosť je pre časový rad kľúčová?",
    answers: ["Poradie pozorovaní v čase", "Náhodné premiešanie hodnôt", "Iba ročné priemery", "Iba sezónne údaje"],
    correct: 0,
    ok: "Správne. Časové poradie je základnou vlastnosťou časového radu.",
    bad: "Nesprávne. Časový rad zachováva chronologické poradie pozorovaní.",
    visual: "<svg viewBox=\"0 0 520 250\"><line x1=\"55\" y1=\"175\" x2=\"465\" y2=\"175\" stroke=\"#7f8c9a\" stroke-width=\"3\"/><g fill=\"#58d6f3\"><circle cx=\"85\" cy=\"135\" r=\"8\"/><circle cx=\"155\" cy=\"120\" r=\"8\"/><circle cx=\"225\" cy=\"138\" r=\"8\"/><circle cx=\"295\" cy=\"95\" r=\"8\"/><circle cx=\"365\" cy=\"110\" r=\"8\"/><circle cx=\"435\" cy=\"70\" r=\"8\"/></g><text x=\"85\" y=\"210\" fill=\"#a7b2be\" font-size=\"14\">t1</text><text x=\"225\" y=\"210\" fill=\"#a7b2be\" font-size=\"14\">t3</text><text x=\"435\" y=\"210\" fill=\"#a7b2be\" font-size=\"14\">t6</text></svg>"
  },
  {
    checkpoint: 1,
    question: "Ktorý príklad najlepšie predstavuje časový rad?",
    answers: ["Mesačné hodnoty CRP za 12 po sebe idúcich mesiacov", "Zoznam pacientov zoradený podľa mena", "Jednorazové meranie tlaku u 500 pacientov", "Náhodne premiešané mesačné hodnoty"],
    correct: 0,
    ok: "Správne. Ide o opakované merania usporiadané podľa času.",
    bad: "Nesprávne. Hľadaj údaje sledované opakovane v chronologickom poradí.",
    visual: "<svg viewBox=\"0 0 520 250\"><polyline points=\"45,170 85,150 125,165 165,125 205,140 245,110 285,130 325,95 365,115 405,80 445,100 480,70\" fill=\"none\" stroke=\"#63e6be\" stroke-width=\"4\"/><line x1=\"40\" y1=\"190\" x2=\"485\" y2=\"190\" stroke=\"#7f8c9a\" stroke-width=\"2\"/><text x=\"260\" y=\"225\" text-anchor=\"middle\" fill=\"#a7b2be\" font-size=\"14\">mesiace 1–12</text></svg>"
  },
  {
    checkpoint: 2,
    question: "Ktoré tri zložky bežne hľadáme v časovom rade?",
    answers: ["Trend, sezónnosť a náhodná zložka", "Medián, modus a rozptyl", "Intercept, dummy a reziduum", "X, Y a Z"],
    correct: 0,
    ok: "Správne. Trend, sezónnosť a náhodná zložka sú základné komponenty.",
    bad: "Nesprávne. Zopakuj si rozklad časového radu na trend, sezónnosť a náhodnú zložku.",
    visual: "<svg viewBox=\"0 0 520 260\"><rect x=\"30\" y=\"55\" width=\"140\" height=\"120\" rx=\"16\" fill=\"#101b25\" stroke=\"#58d6f3\" stroke-width=\"2\"/><rect x=\"190\" y=\"55\" width=\"140\" height=\"120\" rx=\"16\" fill=\"#101b25\" stroke=\"#f3c969\" stroke-width=\"2\"/><rect x=\"350\" y=\"55\" width=\"140\" height=\"120\" rx=\"16\" fill=\"#101b25\" stroke=\"#ff6678\" stroke-width=\"2\"/><text x=\"100\" y=\"120\" text-anchor=\"middle\" fill=\"#58d6f3\" font-size=\"20\" font-weight=\"700\">TREND</text><text x=\"260\" y=\"120\" text-anchor=\"middle\" fill=\"#f3c969\" font-size=\"20\" font-weight=\"700\">SEZÓNNOSŤ</text><text x=\"420\" y=\"120\" text-anchor=\"middle\" fill=\"#ff6678\" font-size=\"20\" font-weight=\"700\">NÁHODA</text></svg>"
  },
  {
    checkpoint: 2,
    question: "Čo najlepšie opisuje trend v časovom rade?",
    answers: ["Dlhodobejší smer vývoja", "Pravidelné opakovanie v rámci roka", "Čisto náhodné odchýlky", "Rozdiel medzi dvoma kategóriami"],
    correct: 0,
    ok: "Správne. Trend opisuje dlhodobejší smer alebo systematickú zmenu v čase.",
    bad: "Nesprávne. Trend nie je sezónny cyklus ani náhodný šum.",
    visual: "<svg viewBox=\"0 0 520 250\"><line x1=\"55\" y1=\"190\" x2=\"465\" y2=\"190\" stroke=\"#7f8c9a\" stroke-width=\"2\"/><line x1=\"70\" y1=\"170\" x2=\"450\" y2=\"65\" stroke=\"#63e6be\" stroke-width=\"5\"/><g fill=\"#58d6f3\"><circle cx=\"85\" cy=\"165\" r=\"6\"/><circle cx=\"150\" cy=\"148\" r=\"6\"/><circle cx=\"215\" cy=\"135\" r=\"6\"/><circle cx=\"280\" cy=\"112\" r=\"6\"/><circle cx=\"345\" cy=\"95\" r=\"6\"/><circle cx=\"420\" cy=\"78\" r=\"6\"/></g></svg>"
  },
  {
    checkpoint: 3,
    question: "Čo vyjadruje sklon jednoduchého lineárneho trendu v čase?",
    answers: ["Priemernú zmenu sledovanej veličiny pri posune času o jednu jednotku", "Vždy presnú budúcu hodnotu", "Iba sezónny rozdiel", "Počet pozorovaní"],
    correct: 0,
    ok: "Správne. Sklon trendu je priemerná očakávaná zmena na jednu časovú jednotku.",
    bad: "Nesprávne. Sklon opisuje priemernú zmenu v čase, nie presnú budúcu hodnotu.",
    visual: "<svg viewBox=\"0 0 520 250\"><text x=\"260\" y=\"48\" text-anchor=\"middle\" fill=\"#f3c969\" font-size=\"26\" font-weight=\"800\">Ŷ = b₀ + b₁·t</text><line x1=\"80\" y1=\"190\" x2=\"440\" y2=\"80\" stroke=\"#63e6be\" stroke-width=\"4\"/><text x=\"365\" y=\"120\" fill=\"#63e6be\" font-size=\"18\" font-weight=\"700\">b₁ = sklon</text></svg>"
  },
  {
    checkpoint: 3,
    question: "Ak je b₁ = 0,4 mg/l za mesiac, ako to interpretujeme?",
    answers: ["Očakávaná hodnota rastie priemerne o 0,4 mg/l za mesiac", "Každý mesiac musí byť presne o 0,4 vyšší", "Sezónnosť je 0,4", "Reziduum je vždy 0,4"],
    correct: 0,
    ok: "Správne. Ide o priemerný trend na jednu časovú jednotku.",
    bad: "Nesprávne. Sklon je priemerný trend, nie presná zmena každého mesiaca.",
    visual: "<svg viewBox=\"0 0 520 250\"><line x1=\"60\" y1=\"185\" x2=\"460\" y2=\"185\" stroke=\"#7f8c9a\" stroke-width=\"2\"/><line x1=\"90\" y1=\"165\" x2=\"430\" y2=\"75\" stroke=\"#58d6f3\" stroke-width=\"4\"/><text x=\"300\" y=\"70\" fill=\"#f3c969\" font-size=\"18\" font-weight=\"700\">+0,4 / mesiac</text></svg>"
  },
  {
    checkpoint: 3,
    question: "Čo znamená reziduum pri trendovom modeli?",
    answers: ["Rozdiel medzi pozorovanou a modelom predikovanou hodnotou", "Samotný čas t", "Sezónna kategória", "Priemer všetkých hodnôt"],
    correct: 0,
    ok: "Správne. Reziduum je odchýlka pozorovania od hodnoty predikovanej modelom.",
    bad: "Nesprávne. Reziduum je chyba alebo odchýlka Y − Ŷ.",
    visual: "<svg viewBox=\"0 0 520 250\"><line x1=\"70\" y1=\"185\" x2=\"450\" y2=\"85\" stroke=\"#63e6be\" stroke-width=\"4\"/><circle cx=\"300\" cy=\"120\" r=\"8\" fill=\"#58d6f3\"/><line x1=\"300\" y1=\"120\" x2=\"300\" y2=\"125\" stroke=\"#ff6678\" stroke-width=\"6\"/><line x1=\"300\" y1=\"125\" x2=\"300\" y2=\"120\" stroke=\"#ff6678\" stroke-width=\"6\"/><text x=\"320\" y=\"145\" fill=\"#ff6678\" font-size=\"16\">reziduum</text></svg>"
  },
  {
    checkpoint: 4,
    question: "Prečo sa pri sezónnosti používajú dummy premenné?",
    answers: ["Aby sme sezónne kategórie vložili do regresného modelu", "Aby sme odstránili čas", "Aby sme vždy dostali R² = 1", "Aby sme nepotrebovali dáta"],
    correct: 0,
    ok: "Správne. Dummy premenné kódujú sezónne kategórie pomocou 0/1.",
    bad: "Nesprávne. Dummy premenné slúžia na reprezentáciu kategórií v modeli.",
    visual: "<svg viewBox=\"0 0 520 250\"><rect x=\"55\" y=\"55\" width=\"410\" height=\"135\" rx=\"16\" fill=\"#101b25\" stroke=\"#304050\"/><text x=\"95\" y=\"92\" fill=\"#a7b2be\" font-size=\"15\">SEZÓNA</text><text x=\"250\" y=\"92\" fill=\"#f3c969\" font-size=\"15\">D₂</text><text x=\"355\" y=\"92\" fill=\"#f3c969\" font-size=\"15\">D₃</text><text x=\"95\" y=\"130\" fill=\"#58d6f3\" font-size=\"17\">referencia</text><text x=\"250\" y=\"130\" fill=\"#fff\">0</text><text x=\"355\" y=\"130\" fill=\"#fff\">0</text><text x=\"95\" y=\"165\" fill=\"#58d6f3\" font-size=\"17\">sezóna 2</text><text x=\"250\" y=\"165\" fill=\"#fff\">1</text><text x=\"355\" y=\"165\" fill=\"#fff\">0</text></svg>"
  },
  {
    checkpoint: 4,
    question: "Ak máme 4 sezónne kategórie a model s interceptom, koľko dummy premenných zvyčajne použijeme?",
    answers: ["3", "4", "2", "1"],
    correct: 0,
    ok: "Správne. Pri k kategóriách používame pri interceptovom modeli zvyčajne k−1 dummy premenných.",
    bad: "Nesprávne. Jedna kategória je referenčná, preto pri 4 kategóriách stačia 3 dummy premenné.",
    visual: "<svg viewBox=\"0 0 520 250\"><text x=\"260\" y=\"70\" text-anchor=\"middle\" fill=\"#f3c969\" font-size=\"30\" font-weight=\"800\">k − 1</text><rect x=\"110\" y=\"105\" width=\"300\" height=\"80\" rx=\"14\" fill=\"#101b25\" stroke=\"#63e6be\" stroke-width=\"2\"/><text x=\"260\" y=\"155\" text-anchor=\"middle\" fill=\"#63e6be\" font-size=\"25\" font-weight=\"800\">4 sezóny → 3 dummy</text></svg>"
  },
  {
    checkpoint: 5,
    question: "Prečo môžu dva rozumné modely dať inú predikciu 13. mesiaca?",
    answers: ["Používajú odlišné predpoklady a štruktúru modelu", "Jedna predikcia musí byť podvod", "Predikcia nikdy nezávisí od modelu", "Pretože 13. mesiac neexistuje"],
    correct: 0,
    ok: "Správne. Predikcia závisí od špecifikácie modelu a jeho predpokladov.",
    bad: "Nesprávne. Rôzne modely môžu trend a sezónnosť zachytiť odlišne.",
    visual: "<svg viewBox=\"0 0 520 250\"><polyline points=\"60,170 120,150 180,140 240,120 300,110 360,95 420,82\" fill=\"none\" stroke=\"#58d6f3\" stroke-width=\"4\"/><polyline points=\"60,170 120,150 180,140 240,120 300,110 360,100 420,115\" fill=\"none\" stroke=\"#f3c969\" stroke-width=\"4\"/><text x=\"405\" y=\"70\" fill=\"#58d6f3\">Model A</text><text x=\"405\" y=\"135\" fill=\"#f3c969\">Model B</text></svg>"
  },
  {
    checkpoint: 5,
    question: "Čo je pri predikcii 13. mesiaca dôležité okrem samotného bodového odhadu?",
    answers: ["Neistota predikcie a interval predikcie", "Iba počet desatinných miest", "Iba názov mesiaca", "Aby model mal R² presne 1"],
    correct: 0,
    ok: "Správne. Budúca hodnota je neistá, preto je dôležitý aj interval predikcie.",
    bad: "Nesprávne. Predikcia by mala komunikovať aj neistotu, nielen jedno číslo.",
    visual: "<svg viewBox=\"0 0 520 250\"><line x1=\"70\" y1=\"150\" x2=\"450\" y2=\"150\" stroke=\"#7f8c9a\" stroke-width=\"2\"/><circle cx=\"350\" cy=\"110\" r=\"9\" fill=\"#f3c969\"/><line x1=\"350\" y1=\"75\" x2=\"350\" y2=\"145\" stroke=\"#63e6be\" stroke-width=\"4\"/><line x1=\"325\" y1=\"75\" x2=\"375\" y2=\"75\" stroke=\"#63e6be\" stroke-width=\"4\"/><line x1=\"325\" y1=\"145\" x2=\"375\" y2=\"145\" stroke=\"#63e6be\" stroke-width=\"4\"/><text x=\"350\" y=\"55\" text-anchor=\"middle\" fill=\"#63e6be\" font-size=\"16\">interval predikcie</text></svg>"
  },
  {
    checkpoint: 5,
    question: "Prečo jeden rok údajov často nestačí na spoľahlivé posúdenie sezónnosti?",
    answers: ["Máme príliš málo opakovaní sezónneho cyklu", "Pretože trend sa nikdy nedá modelovať", "Pretože časový rad musí mať presne 10 rokov", "Pretože sezónnosť existuje iba pri denných dátach"],
    correct: 0,
    ok: "Správne. Viac opakovaní sezónneho cyklu umožňuje stabilnejšie odhadnúť sezónny vzor.",
    bad: "Nesprávne. Problém je v malom počte opakovaní sezónneho cyklu.",
    visual: "<svg viewBox=\"0 0 520 250\"><text x=\"90\" y=\"55\" fill=\"#f3c969\" font-size=\"16\">1 rok</text><polyline points=\"55,160 90,120 125,150 160,100 195,145 230,115\" fill=\"none\" stroke=\"#ff6678\" stroke-width=\"4\"/><text x=\"330\" y=\"55\" fill=\"#63e6be\" font-size=\"16\">viac rokov</text><polyline points=\"285,160 320,120 355,150 390,100 425,145 460,115\" fill=\"none\" stroke=\"#63e6be\" stroke-width=\"4\"/><polyline points=\"285,190 320,150 355,180 390,130 425,175 460,145\" fill=\"none\" stroke=\"#58d6f3\" stroke-width=\"3\" opacity=\".8\"/></svg>"
  }
];
