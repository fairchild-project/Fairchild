window.CHAPTER_QUIZ_GROUPS = [
  {
    checkpoint: 1,
    questions: [
      {
        question: "V súbore bolo 32 hospitalizácií z 1500 pacientov. Ktorá dvojica podielov je správna?",
        answers: [
          "P(H) = 32 %; P(bez H) = 68 %",
          "P(H) ≈ 2,13 %; P(bez H) ≈ 97,87 %",
          "P(H) ≈ 21,3 %; P(bez H) ≈ 78,7 %",
          "P(H) ≈ 97,87 %; P(bez H) ≈ 2,13 %"
        ],
        correct: 1,
        ok: "Správne. 32/1500 ≈ 2,13 % a doplnok do 100 % je približne 97,87 %.",
        bad: "Najprv vydeľ počet hospitalizácií počtom všetkých pacientov a potom dopočítaj doplnok.",
        visual: `
          <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="color:#f3c969;font:800 13px Consolas,monospace;margin-bottom:14px;">SÚBOR PACIENTOV</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div style="padding:18px;border:1px solid #58d6f3;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:12px Consolas,monospace;">CELKOM</div><div style="font:800 30px Arial;color:#58d6f3;">1500</div></div>
              <div style="padding:18px;border:1px solid #f3c969;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:12px Consolas,monospace;">HOSPITALIZÁCIE</div><div style="font:800 30px Arial;color:#f3c969;">32</div></div>
            </div>
          </div>`
      },
      {
        question: "Ak je P(H) ≈ 2,13 %, čo predstavuje P(bez H)?",
        answers: [
          "Rovnakú hodnotu 2,13 %",
          "Doplnkovú pravdepodobnosť do 100 %",
          "Podmienenú pravdepodobnosť P(H | A)",
          "Prienik dvoch udalostí"
        ],
        correct: 1,
        ok: "Správne. Udalosť bez H je doplnok udalosti H, takže ich pravdepodobnosti dávajú 100 %.",
        bad: "Premysli si vzťah udalosti a jej doplnku: spolu pokrývajú celý priestor možností.",
        visual: `
          <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="height:34px;border:1px solid #304050;border-radius:999px;overflow:hidden;display:flex;">
              <div style="width:18%;background:#f3c969;"></div><div style="flex:1;background:#152331;"></div>
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:12px;color:#8d9aaa;font:700 12px Consolas,monospace;"><span>H</span><span>bez H</span></div>
            <div style="margin-top:18px;color:#8d9aaa;font:13px/1.5 Arial;">Dve navzájom sa dopĺňajúce časti jedného celku.</div>
          </div>`
      }
    ]
  },
  {
    checkpoint: 2,
    questions: [
      {
        question: "P(A) = 51 %, P(B) = 37 % a P(A ∩ B) = 14 %. Aká je pravdepodobnosť A alebo B?",
        answers: ["88 %", "14 %", "74 %", "102 %"],
        correct: 2,
        ok: "Správne. 51 + 37 − 14 = 74 %. Spoločnú časť odpočítame raz.",
        bad: "Spoločná časť bola pri sčítaní započítaná dvakrát. Pri zjednotení ju treba odpočítať raz.",
        visual: `
          <div style="width:100%;max-width:500px;padding:16px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <svg viewBox="0 0 420 220" style="width:100%;height:auto;display:block;">
              <circle cx="165" cy="110" r="82" fill="rgba(88,214,243,.15)" stroke="#58d6f3" stroke-width="3"/>
              <circle cx="255" cy="110" r="82" fill="rgba(99,230,190,.15)" stroke="#63e6be" stroke-width="3"/>
              <text x="116" y="55" fill="#58d6f3" font-size="18" font-family="Arial" font-weight="700">A = 51 %</text>
              <text x="267" y="55" fill="#63e6be" font-size="18" font-family="Arial" font-weight="700">B = 37 %</text>
              <text x="210" y="118" text-anchor="middle" fill="#f3c969" font-size="18" font-family="Arial" font-weight="700">A ∩ B = 14 %</text>
            </svg>
          </div>`
      },
      {
        question: "Prečo sa pri výpočte P(A ∪ B) odpočítava P(A ∩ B)?",
        answers: [
          "Pretože spoločná časť bola pri P(A)+P(B) započítaná dvakrát",
          "Pretože prienik sa nikdy nesmie zahrnúť",
          "Pretože A a B musia byť nezávislé",
          "Pretože zjednotenie obsahuje iba prienik"
        ],
        correct: 0,
        ok: "Správne. Prienik patrí do A aj do B, preto je pri jednoduchom súčte započítaný dvakrát.",
        bad: "Pozri sa na prekryv dvoch množín. Pri sčítaní oboch kruhov sa prekryv objaví dvakrát.",
        visual: `
          <div style="width:100%;max-width:500px;padding:16px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <svg viewBox="0 0 420 220" style="width:100%;height:auto;display:block;">
              <circle cx="165" cy="110" r="82" fill="rgba(88,214,243,.18)" stroke="#58d6f3" stroke-width="3"/>
              <circle cx="255" cy="110" r="82" fill="rgba(99,230,190,.18)" stroke="#63e6be" stroke-width="3"/>
              <path d="M210 36 C245 57 265 80 265 110 C265 140 245 163 210 184 C175 163 155 140 155 110 C155 80 175 57 210 36Z" fill="rgba(243,201,105,.28)"/>
              <text x="210" y="116" text-anchor="middle" fill="#f3c969" font-size="17" font-family="Arial" font-weight="700">spoločná časť</text>
            </svg>
          </div>`
      }
    ]
  },
  {
    checkpoint: 3,
    questions: [
      {
        question: "Ktorý podiel vyjadruje P(A | H), teda aktívnych fajčiarov medzi hospitalizovanými?",
        answers: ["13 / 321", "32 / 1500", "321 / 1500", "13 / 32"],
        correct: 3,
        ok: "Správne. Podmienkou je H, preto menovateľ tvorí 32 hospitalizovaných; z nich je 13 aktívnych fajčiarov.",
        bad: "To, čo stojí za zvislou čiarou, určuje skupinu v menovateli.",
        visual: `
          <div style="width:100%;max-width:500px;border:1px solid #304050;border-radius:16px;background:#0d1620;overflow:hidden;">
            <div style="display:grid;grid-template-columns:1.5fr 1fr 1fr;font:700 13px Consolas,monospace;text-align:center;">
              <div style="padding:12px;color:#f3c969;background:#152331;">SKUPINA</div><div style="padding:12px;color:#f3c969;background:#152331;">CELKOM</div><div style="padding:12px;color:#f3c969;background:#152331;">A ∩ H</div>
              <div style="padding:14px;color:#58d6f3;border-top:1px solid #304050;">Aktívni fajčiari A</div><div style="padding:14px;border-top:1px solid #304050;">321</div><div style="padding:14px;border-top:1px solid #304050;">13</div>
              <div style="padding:14px;color:#63e6be;border-top:1px solid #304050;">Hospitalizovaní H</div><div style="padding:14px;border-top:1px solid #304050;">32</div><div style="padding:14px;border-top:1px solid #304050;">13</div>
            </div>
          </div>`
      },
      {
        question: "Ktorý menovateľ použiješ pri výpočte P(H | A)?",
        answers: ["1500", "32", "321", "13"],
        correct: 2,
        ok: "Správne. Podmienka A znamená, že pracujeme iba v skupine aktívnych fajčiarov, teda s 321 pacientmi.",
        bad: "Pri podmienenej pravdepodobnosti menovateľ určuje udalosť za zvislou čiarou.",
        visual: `
          <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="font:800 24px Consolas,monospace;color:#f2f5f8;text-align:center;margin-bottom:18px;">P(H | A)</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div style="padding:18px;border:1px solid #63e6be;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:12px Consolas,monospace;">PODMIENKA A</div><div style="font:800 28px Arial;color:#63e6be;">321</div></div>
              <div style="padding:18px;border:1px solid #f3c969;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:12px Consolas,monospace;">A ∩ H</div><div style="font:800 28px Arial;color:#f3c969;">13</div></div>
            </div>
          </div>`
      }
    ]
  },
  {
    checkpoint: 4,
    questions: [
      {
        question: "Ako správne získaš celkové riziko hospitalizácie z rizík troch fajčiarskych skupín?",
        answers: [
          "Každé riziko vynásobím podielom jeho skupiny a príspevky sčítam",
          "Tri percentá sčítam bez váh",
          "Vypočítam jednoduchý priemer troch percent bez ohľadu na veľkosti skupín",
          "Vyberiem najvyššie riziko"
        ],
        correct: 0,
        ok: "Správne. Skupiny majú rôzne veľkosti, preto sa ich riziká skladajú váženým spôsobom.",
        bad: "Skupiny majú rôzne veľkosti, takže jednoduchý nevážený priemer nie je vhodný.",
        visual: `
          <div style="width:100%;max-width:500px;border:1px solid #304050;border-radius:16px;background:#0d1620;overflow:hidden;">
            <div style="display:grid;grid-template-columns:1.2fr 1fr 1fr;font:700 13px Consolas,monospace;text-align:center;">
              <div style="padding:12px;color:#f3c969;background:#152331;">SKUPINA</div><div style="padding:12px;color:#f3c969;background:#152331;">PACIENTI</div><div style="padding:12px;color:#f3c969;background:#152331;">HOSP.</div>
              <div style="padding:13px;color:#58d6f3;border-top:1px solid #304050;">Aktívni</div><div style="padding:13px;border-top:1px solid #304050;">321</div><div style="padding:13px;border-top:1px solid #304050;">13</div>
              <div style="padding:13px;color:#58d6f3;border-top:1px solid #304050;">Bývalí</div><div style="padding:13px;border-top:1px solid #304050;">279</div><div style="padding:13px;border-top:1px solid #304050;">7</div>
              <div style="padding:13px;color:#58d6f3;border-top:1px solid #304050;">Nefajčiari</div><div style="padding:13px;border-top:1px solid #304050;">900</div><div style="padding:13px;border-top:1px solid #304050;">12</div>
            </div>
          </div>`
      },
      {
        question: "Prečo pri celkovej pravdepodobnosti nestačí jednoduchý priemer troch skupinových rizík?",
        answers: [
          "Pretože skupiny majú rôzne veľkosti",
          "Pretože všetky tri riziká musia byť rovnaké",
          "Pretože hospitalizácie sa nesmú sčítavať",
          "Pretože celková pravdepodobnosť používa iba najväčšiu skupinu"
        ],
        correct: 0,
        ok: "Správne. Väčšia skupina musí mať v celkovom výsledku väčšiu váhu než menšia skupina.",
        bad: "Pozri sa na počty 321, 279 a 900. Skupiny nie sú rovnako veľké.",
        visual: `
          <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="display:flex;align-items:flex-end;gap:22px;height:190px;justify-content:center;">
              <div style="width:80px;height:64px;background:rgba(88,214,243,.25);border:1px solid #58d6f3;border-radius:8px 8px 0 0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:8px;color:#58d6f3;font:700 12px Consolas,monospace;">321</div>
              <div style="width:80px;height:56px;background:rgba(88,214,243,.25);border:1px solid #58d6f3;border-radius:8px 8px 0 0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:8px;color:#58d6f3;font:700 12px Consolas,monospace;">279</div>
              <div style="width:80px;height:180px;background:rgba(99,230,190,.25);border:1px solid #63e6be;border-radius:8px 8px 0 0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:8px;color:#63e6be;font:700 12px Consolas,monospace;">900</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px;text-align:center;color:#8d9aaa;font:11px Consolas,monospace;"><span>aktívni</span><span>bývalí</span><span>nefajčiari</span></div>
          </div>`
      }
    ]
  },
  {
    checkpoint: 5,
    questions: [
      {
        question: "Ktorý zápis predstavuje Bayesovu vetu pre P(A | H)?",
        answers: [
          "P(A | H) = P(H | A) · P(A) / P(H)",
          "P(A | H) = P(A) + P(H)",
          "P(A | H) = P(H | A) / P(A)",
          "P(A | H) = P(A ∩ H) · P(H)"
        ],
        correct: 0,
        ok: "Správne. Bayesova veta otočí podmienku pomocou P(H | A), P(A) a P(H).",
        bad: "Bayesova veta potrebuje podmienenú pravdepodobnosť opačného smeru, prior a celkovú pravdepodobnosť dôkazu.",
        visual: `
          <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
              <div style="padding:16px;border:1px solid #58d6f3;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">LIKELIHOOD</div><div style="color:#58d6f3;font:800 18px Consolas,monospace;">P(H | A)</div></div>
              <div style="padding:16px;border:1px solid #63e6be;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">PRIOR</div><div style="color:#63e6be;font:800 18px Consolas,monospace;">P(A)</div></div>
              <div style="padding:16px;border:1px solid #f3c969;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">EVIDENCIA</div><div style="color:#f3c969;font:800 18px Consolas,monospace;">P(H)</div></div>
            </div>
          </div>`
      },
      {
        question: "Pomocou Bayesovej vety vypočítaj P(A | H). Aký výsledok dostaneš z uvedených vstupov?",
        answers: ["4,05 %", "21,40 %", "40,63 %", "2,13 %"],
        correct: 2,
        ok: "Správne. (13/321) × (321/1500) ÷ (32/1500) = 13/32 ≈ 40,63 %.",
        bad: "P(H | A) nestačí iba premenovať. Pri otočení podmienky treba zohľadniť aj P(A) a P(H).",
        visual: `
          <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;text-align:center;">
              <div style="padding:15px;border:1px solid #58d6f3;border-radius:10px;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">P(H | A)</div><div style="color:#58d6f3;font:800 18px Consolas,monospace;">13 / 321</div></div>
              <div style="padding:15px;border:1px solid #63e6be;border-radius:10px;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">P(A)</div><div style="color:#63e6be;font:800 18px Consolas,monospace;">321 / 1500</div></div>
              <div style="padding:15px;border:1px solid #f3c969;border-radius:10px;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">P(H)</div><div style="color:#f3c969;font:800 18px Consolas,monospace;">32 / 1500</div></div>
            </div>
          </div>`
      },
      {
        question: "Čo slovne znamená P(A | H)?",
        answers: [
          "Podiel aktívnych fajčiarov medzi hospitalizovanými",
          "Podiel hospitalizovaných medzi všetkými pacientmi",
          "Podiel hospitalizovaných medzi aktívnymi fajčiarmi",
          "Podiel aktívnych fajčiarov v celom súbore"
        ],
        correct: 0,
        ok: "Správne. P(A | H) čítame ako pravdepodobnosť A za podmienky H.",
        bad: "Najprv čítaj udalosť pred zvislou čiarou, potom podmienku za ňou.",
        visual: `
          <div style="width:100%;max-width:500px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;text-align:center;">
            <div style="font:900 34px Consolas,monospace;color:#f2f5f8;">P(A | H)</div>
            <div style="margin-top:18px;color:#8d9aaa;font:13px/1.5 Arial;">Udalosť <b style="color:#58d6f3;">A</b> sa hodnotí iba v rámci podmienky <b style="color:#63e6be;">H</b>.</div>
          </div>`
      }
    ]
  },
  {
    checkpoint: 6,
    questions: [
      {
        question: "Čo vystihuje stabilizáciu empirickej pravdepodobnosti pri rastúcom počte pozorovaní?",
        answers: [
          "Podiel sa po každom novom pozorovaní musí priblížiť k výslednej hodnote",
          "Jeden prípad má v podiele menšiu váhu; náhodné výkyvy bývajú menšie",
          "Pri 1500 pozorovaniach už neexistuje neistota",
          "Veľký súbor zaručuje správny výsledok bez ohľadu na spôsob zberu"
        ],
        correct: 1,
        ok: "Správne. S rastúcim n má jedno nové pozorovanie menší vplyv na výsledný podiel.",
        bad: "Stabilizácia neznamená nulovú neistotu ani monotónne približovanie v každom kroku.",
        visual: `
          <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <svg viewBox="0 0 420 220" style="width:100%;height:auto;display:block;">
              <line x1="42" y1="20" x2="42" y2="190" stroke="#8d9aaa" stroke-width="2"/>
              <line x1="42" y1="190" x2="400" y2="190" stroke="#8d9aaa" stroke-width="2"/>
              <path d="M50 65 L70 130 L90 82 L110 118 L130 96 L150 109 L170 99 L190 106 L210 101 L230 105 L250 102 L270 104 L290 103 L310 104 L330 103 L350 103 L380 103" fill="none" stroke="#58d6f3" stroke-width="3"/>
              <line x1="42" y1="103" x2="400" y2="103" stroke="#63e6be" stroke-width="2" stroke-dasharray="6 6"/>
              <text x="220" y="214" text-anchor="middle" fill="#8d9aaa" font-size="12" font-family="Arial">počet pozorovaní n</text>
            </svg>
          </div>`
      },
      {
        question: "Kde má jeden nový prípad väčší vplyv na podiel: pri n = 20 alebo pri n = 1500?",
        answers: ["Pri n = 20", "Pri n = 1500", "Vplyv je rovnaký", "Nedá sa určiť"],
        correct: 0,
        ok: "Správne. Pri n = 20 zmení jeden prípad podiel o 5 percentuálnych bodov, pri n = 1500 iba približne o 0,067 p. b.",
        bad: "Váha jedného prípadu je 1/n. Menšie n znamená väčší vplyv jedného pozorovania.",
        visual: `
          <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div style="padding:18px;border:1px solid #f3c969;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">MALÝ SÚBOR</div><div style="color:#f3c969;font:900 30px Arial;">n = 20</div></div>
              <div style="padding:18px;border:1px solid #63e6be;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:11px Consolas,monospace;">VEĽKÝ SÚBOR</div><div style="color:#63e6be;font:900 30px Arial;">n = 1500</div></div>
            </div>
          </div>`
      }
    ]
  },
  {
    checkpoint: 7,
    questions: [
      {
        question: "Dve normálne rozdelenia majú rovnaký priemer. Čo sa zmení, keď sa zväčší SD?",
        answers: [
          "Rozdelenie bude širšie; jeho stred ostane rovnaký",
          "Stred sa automaticky posunie doprava",
          "Rozdelenie bude užšie",
          "Rozdelenie prestane byť symetrické"
        ],
        correct: 0,
        ok: "Správne. Priemer určuje stred a smerodajná odchýlka šírku normálneho rozdelenia.",
        bad: "Rozlišuj polohu stredu a rozptýlenie okolo neho.",
        visual: `
          <div style="width:100%;max-width:500px;padding:16px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <svg viewBox="0 0 420 220" style="width:100%;height:auto;display:block;">
              <line x1="35" y1="190" x2="400" y2="190" stroke="#8d9aaa" stroke-width="2"/>
              <path d="M50 188 C95 188,120 170,145 118 C165 76,184 45,210 42 C236 45,255 76,275 118 C300 170,325 188,370 188" fill="none" stroke="#58d6f3" stroke-width="3"/>
              <path d="M50 178 C105 164,138 136,165 105 C185 83,198 74,210 72 C222 74,235 83,255 105 C282 136,315 164,370 178" fill="none" stroke="#63e6be" stroke-width="3"/>
              <line x1="210" y1="35" x2="210" y2="190" stroke="#f3c969" stroke-width="2" stroke-dasharray="5 5"/>
            </svg>
            <div style="text-align:center;color:#8d9aaa;font:12px Consolas,monospace;">rovnaký stred · odlišná šírka</div>
          </div>`
      },
      {
        question: "Ktorá vlastnosť zostáva rovnaká, ak dve normálne rozdelenia majú rovnaký priemer, ale rozdielne SD?",
        answers: ["Poloha stredu", "Šírka rozdelenia", "Výška vrcholu musí byť rovnaká", "Smerodajná odchýlka"],
        correct: 0,
        ok: "Správne. Rovnaký priemer znamená rovnakú polohu stredu; SD mení rozptýlenie okolo stredu.",
        bad: "Priemer určuje polohu stredu, zatiaľ čo SD určuje šírku rozdelenia.",
        visual: `
          <div style="width:100%;max-width:500px;padding:16px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
            <svg viewBox="0 0 420 220" style="width:100%;height:auto;display:block;">
              <line x1="35" y1="190" x2="400" y2="190" stroke="#8d9aaa" stroke-width="2"/>
              <path d="M50 188 C95 188,120 170,145 118 C165 76,184 45,210 42 C236 45,255 76,275 118 C300 170,325 188,370 188" fill="none" stroke="#58d6f3" stroke-width="3"/>
              <path d="M50 178 C105 164,138 136,165 105 C185 83,198 74,210 72 C222 74,235 83,255 105 C282 136,315 164,370 178" fill="none" stroke="#63e6be" stroke-width="3"/>
              <circle cx="210" cy="190" r="5" fill="#f3c969"/>
            </svg>
          </div>`
      }
    ]
  }
];
