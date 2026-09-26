window.CHAPTER_QUIZZES = [
  {
    "question": "V súbore bolo 32 hospitalizácií z 1500 pacientov. Ktorá dvojica podielov je správna?",
    "answers": [
      "P(H) = 32 %; P(bez H) = 68 %",
      "P(H) ≈ 2,13 %; P(bez H) ≈ 97,87 %",
      "P(H) ≈ 21,3 %; P(bez H) ≈ 78,7 %",
      "P(H) ≈ 97,87 %; P(bez H) ≈ 2,13 %"
    ],
    "correct": 1,
    "ok": "Správne. 32/1500 ≈ 2,13 %. Doplnok dopočítame do 100 %, teda približne 97,87 %.",
    "bad": "Najprv vydeľ počet hospitalizácií počtom všetkých pacientov. Potom dopočítaj doplnok.",
    "visual": "<div class=\"stats\"><div><span>Všetci pacienti</span><strong>1500</strong></div><div><span>Hospitalizácia H</span><strong>32</strong></div></div>",
    "checkpoint": 1
  },
  {
    "question": "P(A) = 51 %, P(B) = 37 % a P(A ∩ B) = 14 %. Aká je pravdepodobnosť A alebo B?",
    "answers": [
      "88 %",
      "14 %",
      "74 %",
      "102 %"
    ],
    "correct": 2,
    "ok": "Správne. 51 + 37 − 14 = 74 %. Spoločnú časť odpočítame raz.",
    "bad": "Spoločná časť bola pri sčítaní započítaná dvakrát. Zopakuj si, ako sa tvorí zjednotenie.",
    "visual": "<div class=\"stats\"><div><span>A: žena</span><strong>51 %</strong></div><div><span>B: liečba B</span><strong>37 %</strong></div><div><span>A aj B</span><strong>14 %</strong></div></div>",
    "checkpoint": 2
  },
  {
    "question": "Ktorý podiel vyjadruje P(A | H), teda aktívnych fajčiarov medzi hospitalizovanými?",
    "answers": [
      "13 / 321",
      "32 / 1500",
      "321 / 1500",
      "13 / 32"
    ],
    "correct": 3,
    "ok": "Správne. Podmienkou je H: menovateľ tvorí 32 hospitalizovaných. Z nich bolo 13 aktívnych fajčiarov.",
    "bad": "Pozri sa, čo stojí za zvislou čiarou. Práve táto podmienka určuje menovateľ.",
    "visual": "<table class=\"data-table\"><thead><tr><th>Skupina</th><th>Celkom</th><th>A aj H</th></tr></thead><tbody><tr><td>Aktívni fajčiari A</td><td>321</td><td>13</td></tr><tr><td>Hospitalizovaní H</td><td>32</td><td>13</td></tr></tbody></table>",
    "checkpoint": 3
  },
  {
    "question": "Ako správne získaš celkové riziko hospitalizácie z rizík troch fajčiarskych skupín?",
    "answers": [
      "Každé riziko vynásobím podielom jeho skupiny a príspevky sčítam.",
      "Tri percentá sčítam bez váh.",
      "Vypočítam jednoduchý priemer troch percent bez ohľadu na veľkosti skupín.",
      "Vyberiem najvyššie riziko."
    ],
    "correct": 0,
    "ok": "Správne. Vážené príspevky sú 13/1500, 7/1500 a 12/1500. Spolu 32/1500 ≈ 2,13 %.",
    "bad": "Skupiny majú rôzne veľkosti. Pri celkovom riziku preto potrebujeme ich podiely v celom súbore.",
    "visual": "<table class=\"data-table\"><thead><tr><th>Skupina</th><th>Pacienti</th><th>Hosp.</th></tr></thead><tbody><tr><td>Aktívni</td><td>321</td><td>13</td></tr><tr><td>Bývalí</td><td>279</td><td>7</td></tr><tr><td>Nefajčiari</td><td>900</td><td>12</td></tr></tbody></table>",
    "checkpoint": 4
  },
  {
    "question": "Pomocou Bayesovej vety vypočítaj P(A | H). Aký výsledok dostaneš z uvedených vstupov?",
    "answers": [
      "4,05 %",
      "21,40 %",
      "40,63 %",
      "2,13 %"
    ],
    "correct": 2,
    "ok": "Správne. (13/321) × (321/1500) ÷ (32/1500) = 13/32 ≈ 40,63 %.",
    "bad": "P(H | A) nestačí iba premenovať. Pri otočení podmienky zohľadni aj P(A) a P(H).",
    "visual": "<div class=\"stats\"><div><span>P(H | A)</span><strong>13 / 321</strong></div><div><span>P(A)</span><strong>321 / 1500</strong></div><div><span>P(H)</span><strong>32 / 1500</strong></div></div>",
    "checkpoint": 5
  },
  {
    "question": "Čo vystihuje stabilizáciu empirickej pravdepodobnosti pri rastúcom počte pozorovaní?",
    "answers": [
      "Podiel sa po každom novom pozorovaní musí priblížiť k výslednej hodnote.",
      "Jeden prípad má v podiele menšiu váhu; náhodné výkyvy bývajú menšie.",
      "Pri 1500 pozorovaniach už neexistuje neistota.",
      "Veľký súbor zaručuje správny výsledok bez ohľadu na spôsob zberu."
    ],
    "correct": 1,
    "ok": "Správne. Pri rovnakom n znamená zmena počtu udalostí o 1 zmenu podielu o 100/n percentuálnych bodov.",
    "bad": "Stabilnejší odhad nie je zárukou zlepšenia v každom kroku. Zopakuj si váhu jedného prípadu.",
    "visual": "<div class=\"stats\"><div><span>Váha 1 prípadu pri n = 20</span><strong>5,0 p. b.</strong></div><div><span>Váha 1 prípadu pri n = 1500</span><strong>0,067 p. b.</strong></div></div>",
    "checkpoint": 6
  },
  {
    "question": "Dve normálne rozdelenia majú rovnaký priemer. Čo sa zmení, keď sa zväčší SD?",
    "answers": [
      "Rozdelenie bude širšie; jeho stred ostane rovnaký.",
      "Stred sa automaticky posunie doprava.",
      "Rozdelenie bude užšie.",
      "Rozdelenie prestane byť symetrické."
    ],
    "correct": 0,
    "ok": "Správne. Priemer určuje stred a smerodajná odchýlka šírku normálneho rozdelenia.",
    "bad": "Rozlišuj polohu stredu a rozptýlenie okolo neho. Vráť sa k premene zvonovej krivky.",
    "visual": "<div class=\"curve-pair\" role=\"img\" aria-label=\"Dve symetrické zvonové krivky s rovnakým stredom a odlišnou šírkou.\"><svg viewBox=\"0 0 300 180\" aria-hidden=\"true\"><path d=\"M30 15 V155 H277\" fill=\"none\" stroke=\"#8d9aaa\"/><polyline points=\"30.0,155.0 32.4,155.0 34.8,155.0 37.2,155.0 39.6,155.0 42.0,155.0 44.4,155.0 46.8,155.0 49.2,155.0 51.6,155.0 54.0,155.0 56.4,155.0 58.8,155.0 61.2,155.0 63.6,155.0 66.0,155.0 68.4,155.0 70.8,155.0 73.2,154.9 75.6,154.9 78.0,154.9 80.4,154.8 82.8,154.7 85.2,154.5 87.6,154.3 90.0,153.9 92.4,153.5 94.8,152.8 97.2,151.9 99.6,150.8 102.0,149.2 104.4,147.2 106.8,144.7 109.2,141.6 111.6,137.8 114.0,133.2 116.4,127.9 118.8,121.7 121.2,114.8 123.6,107.1 126.0,98.9 128.4,90.2 130.8,81.3 133.2,72.4 135.6,63.9 138.0,56.0 140.4,49.0 142.8,43.2 145.2,38.9 147.6,36.2 150.0,35.3 152.4,36.2 154.8,38.9 157.2,43.2 159.6,49.0 162.0,56.0 164.4,63.9 166.8,72.4 169.2,81.3 171.6,90.2 174.0,98.9 176.4,107.1 178.8,114.8 181.2,121.7 183.6,127.9 186.0,133.2 188.4,137.8 190.8,141.6 193.2,144.7 195.6,147.2 198.0,149.2 200.4,150.8 202.8,151.9 205.2,152.8 207.6,153.5 210.0,153.9 212.4,154.3 214.8,154.5 217.2,154.7 219.6,154.8 222.0,154.9 224.4,154.9 226.8,154.9 229.2,155.0 231.6,155.0 234.0,155.0 236.4,155.0 238.8,155.0 241.2,155.0 243.6,155.0 246.0,155.0 248.4,155.0 250.8,155.0 253.2,155.0 255.6,155.0 258.0,155.0 260.4,155.0 262.8,155.0 265.2,155.0 267.6,155.0 270.0,155.0\" fill=\"none\" stroke=\"#63e6be\" stroke-width=\"3\"/><path d=\"M150 155 V28\" stroke=\"#f3c969\" stroke-dasharray=\"4 4\"/></svg><svg viewBox=\"0 0 300 180\" aria-hidden=\"true\"><path d=\"M30 15 V155 H277\" fill=\"none\" stroke=\"#8d9aaa\"/><polyline points=\"30.0,154.1 32.4,153.9 34.8,153.7 37.2,153.5 39.6,153.2 42.0,153.0 44.4,152.6 46.8,152.3 49.2,151.9 51.6,151.4 54.0,150.9 56.4,150.4 58.8,149.7 61.2,149.1 63.6,148.3 66.0,147.5 68.4,146.6 70.8,145.6 73.2,144.6 75.6,143.4 78.0,142.2 80.4,140.9 82.8,139.6 85.2,138.1 87.6,136.6 90.0,135.0 92.4,133.3 94.8,131.6 97.2,129.8 99.6,128.0 102.0,126.1 104.4,124.2 106.8,122.3 109.2,120.3 111.6,118.4 114.0,116.5 116.4,114.7 118.8,112.8 121.2,111.1 123.6,109.4 126.0,107.8 128.4,106.3 130.8,104.9 133.2,103.7 135.6,102.6 138.0,101.7 140.4,100.9 142.8,100.2 145.2,99.8 147.6,99.5 150.0,99.4 152.4,99.5 154.8,99.8 157.2,100.2 159.6,100.9 162.0,101.7 164.4,102.6 166.8,103.7 169.2,104.9 171.6,106.3 174.0,107.8 176.4,109.4 178.8,111.1 181.2,112.8 183.6,114.7 186.0,116.5 188.4,118.4 190.8,120.3 193.2,122.3 195.6,124.2 198.0,126.1 200.4,128.0 202.8,129.8 205.2,131.6 207.6,133.3 210.0,135.0 212.4,136.6 214.8,138.1 217.2,139.6 219.6,140.9 222.0,142.2 224.4,143.4 226.8,144.6 229.2,145.6 231.6,146.6 234.0,147.5 236.4,148.3 238.8,149.1 241.2,149.7 243.6,150.4 246.0,150.9 248.4,151.4 250.8,151.9 253.2,152.3 255.6,152.6 258.0,153.0 260.4,153.2 262.8,153.5 265.2,153.7 267.6,153.9 270.0,154.1\" fill=\"none\" stroke=\"#63e6be\" stroke-width=\"3\"/><path d=\"M150 155 V28\" stroke=\"#f3c969\" stroke-dasharray=\"4 4\"/></svg><p>Rovnaký stred · rovnaká mierka osí</p></div>",
    "checkpoint": 7
  }
];
