window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "V súbore bolo 32 hospitalizácií z 1500 pacientov. Ktorá dvojica podielov je správna?",
    answers: [
      "P(H) = 32 %; P(bez H) = 68 %",
      "P(H) ≈ 2,13 %; P(bez H) ≈ 97,87 %",
      "P(H) ≈ 21,3 %; P(bez H) ≈ 78,7 %",
      "P(H) ≈ 97,87 %; P(bez H) ≈ 2,13 %"
    ],
    correct: 1,
    ok: "Správne. 32/1500 ≈ 2,13 %. Doplnok dopočítame do 100 %, teda približne 97,87 %.",
    bad: "Najprv vydeľ počet hospitalizácií počtom všetkých pacientov. Potom dopočítaj doplnok.",
    visual: `
      <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;margin-bottom:14px;text-align:center;">SÚBOR PACIENTOV</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div style="padding:20px;border:1px solid #58d6f3;border-radius:14px;background:rgba(88,214,243,.07);text-align:center;">
            <div style="color:#8d9aaa;font:700 12px Consolas,monospace;">VŠETCI</div>
            <div style="margin-top:8px;color:#58d6f3;font:900 32px Consolas,monospace;">1500</div>
          </div>
          <div style="padding:20px;border:1px solid #f3c969;border-radius:14px;background:rgba(243,201,105,.07);text-align:center;">
            <div style="color:#8d9aaa;font:700 12px Consolas,monospace;">HOSPITALIZÁCIE</div>
            <div style="margin-top:8px;color:#f3c969;font:900 32px Consolas,monospace;">32</div>
          </div>
        </div>
        <div style="margin-top:18px;height:16px;border:1px solid #304050;border-radius:99px;overflow:hidden;background:#101922;">
          <div style="height:100%;width:14%;background:#f3c969;"></div>
        </div>
        <div style="margin-top:8px;color:#8d9aaa;font:700 11px Consolas,monospace;text-align:center;">Schéma len znázorňuje časť z celku; mierka nie je numerická.</div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "P(A) = 51 %, P(B) = 37 % a P(A ∩ B) = 14 %. Aká je pravdepodobnosť A alebo B?",
    answers: ["88 %", "14 %", "74 %", "102 %"],
    correct: 2,
    ok: "Správne. 51 + 37 − 14 = 74 %. Spoločnú časť odpočítame raz.",
    bad: "Spoločná časť bola pri sčítaní započítaná dvakrát. Zopakuj si, ako sa tvorí zjednotenie.",
    visual: `
      <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;text-align:center;margin-bottom:8px;">PRIENIK A ZJEDNOTENIE</div>
        <svg viewBox="0 0 420 235" style="display:block;width:100%;height:auto;">
          <circle cx="170" cy="118" r="82" fill="rgba(88,214,243,.16)" stroke="#58d6f3" stroke-width="3"/>
          <circle cx="250" cy="118" r="82" fill="rgba(99,230,190,.14)" stroke="#63e6be" stroke-width="3"/>
          <text x="120" y="60" fill="#58d6f3" font-size="18" font-weight="700" font-family="Arial">A = 51 %</text>
          <text x="250" y="60" fill="#63e6be" font-size="18" font-weight="700" font-family="Arial">B = 37 %</text>
          <text x="210" y="126" text-anchor="middle" fill="#f3c969" font-size="18" font-weight="800" font-family="Arial">A ∩ B</text>
          <text x="210" y="150" text-anchor="middle" fill="#f3c969" font-size="18" font-weight="800" font-family="Arial">14 %</text>
        </svg>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Ktorý podiel vyjadruje P(A | H), teda aktívnych fajčiarov medzi hospitalizovanými?",
    answers: ["13 / 321", "32 / 1500", "321 / 1500", "13 / 32"],
    correct: 3,
    ok: "Správne. Podmienkou je H: menovateľ tvorí 32 hospitalizovaných. Z nich bolo 13 aktívnych fajčiarov.",
    bad: "Pozri sa, čo stojí za zvislou čiarou. Práve táto podmienka určuje menovateľ.",
    visual: `
      <div style="width:100%;max-width:500px;padding:14px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;text-align:center;margin-bottom:12px;">POČTY V DÁTACH</div>
        <div style="display:grid;grid-template-columns:1.45fr 1fr 1fr;gap:4px;font:700 13px Consolas,monospace;text-align:center;">
          <div></div><div style="padding:10px;color:#f3c969;background:rgba(243,201,105,.08);border-radius:8px;">CELKOM</div><div style="padding:10px;color:#f3c969;background:rgba(243,201,105,.08);border-radius:8px;">HOSP.</div>
          <div style="padding:11px;color:#58d6f3;background:rgba(88,214,243,.08);border-radius:8px;">Aktívni fajčiari A</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">321</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">13</div>
          <div style="padding:11px;color:#58d6f3;background:rgba(88,214,243,.08);border-radius:8px;">Hospitalizovaní H</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">32</div><div style="padding:11px;color:#8d9aaa;background:rgba(255,255,255,.03);border-radius:8px;">—</div>
        </div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Ako správne získaš celkové riziko hospitalizácie z rizík troch fajčiarskych skupín?",
    answers: [
      "Každé riziko vynásobím podielom jeho skupiny a príspevky sčítam.",
      "Tri percentá sčítam bez váh.",
      "Vypočítam jednoduchý priemer troch percent bez ohľadu na veľkosti skupín.",
      "Vyberiem najvyššie riziko."
    ],
    correct: 0,
    ok: "Správne. Vážené príspevky sú 13/1500, 7/1500 a 12/1500. Spolu 32/1500 ≈ 2,13 %.",
    bad: "Skupiny majú rôzne veľkosti. Pri celkovom riziku preto potrebujeme ich podiely v celom súbore.",
    visual: `
      <div style="width:100%;max-width:500px;padding:14px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;text-align:center;margin-bottom:12px;">TRI FAJČIARSKE SKUPINY</div>
        <div style="display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:4px;font:700 13px Consolas,monospace;text-align:center;">
          <div></div><div style="padding:10px;color:#f3c969;background:rgba(243,201,105,.08);border-radius:8px;">PACIENTI</div><div style="padding:10px;color:#f3c969;background:rgba(243,201,105,.08);border-radius:8px;">HOSP.</div>
          <div style="padding:11px;color:#58d6f3;background:rgba(88,214,243,.08);border-radius:8px;">Aktívni</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">321</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">13</div>
          <div style="padding:11px;color:#58d6f3;background:rgba(88,214,243,.08);border-radius:8px;">Bývalí</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">279</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">7</div>
          <div style="padding:11px;color:#58d6f3;background:rgba(88,214,243,.08);border-radius:8px;">Nefajčiari</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">900</div><div style="padding:11px;background:rgba(255,255,255,.03);border-radius:8px;">12</div>
        </div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Pomocou Bayesovej vety vypočítaj P(A | H). Aký výsledok dostaneš z uvedených vstupov?",
    answers: ["4,05 %", "21,40 %", "40,63 %", "2,13 %"],
    correct: 2,
    ok: "Správne. (13/321) × (321/1500) ÷ (32/1500) = 13/32 ≈ 40,63 %.",
    bad: "P(H | A) nestačí iba premenovať. Pri otočení podmienky zohľadni aj P(A) a P(H).",
    visual: `
      <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;text-align:center;margin-bottom:14px;">BAYESOVE VSTUPY</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
          <div style="padding:16px 10px;border:1px solid #58d6f3;border-radius:12px;background:rgba(88,214,243,.07);text-align:center;"><div style="color:#8d9aaa;font:700 11px Consolas,monospace;">P(H | A)</div><div style="margin-top:8px;color:#58d6f3;font:900 18px Consolas,monospace;">13 / 321</div></div>
          <div style="padding:16px 10px;border:1px solid #f3c969;border-radius:12px;background:rgba(243,201,105,.07);text-align:center;"><div style="color:#8d9aaa;font:700 11px Consolas,monospace;">P(A)</div><div style="margin-top:8px;color:#f3c969;font:900 18px Consolas,monospace;">321 / 1500</div></div>
          <div style="padding:16px 10px;border:1px solid #63e6be;border-radius:12px;background:rgba(99,230,190,.07);text-align:center;"><div style="color:#8d9aaa;font:700 11px Consolas,monospace;">P(H)</div><div style="margin-top:8px;color:#63e6be;font:900 18px Consolas,monospace;">32 / 1500</div></div>
        </div>
        <div style="margin-top:16px;padding:12px;border:1px dashed #304050;border-radius:10px;color:#8d9aaa;font:700 12px Consolas,monospace;text-align:center;">Úlohou je tieto vstupy správne usporiadať podľa Bayesovej vety.</div>
      </div>`
  },
  {
    checkpoint: 6,
    question: "Čo vystihuje stabilizáciu empirickej pravdepodobnosti pri rastúcom počte pozorovaní?",
    answers: [
      "Podiel sa po každom novom pozorovaní musí priblížiť k výslednej hodnote.",
      "Jeden prípad má v podiele menšiu váhu; náhodné výkyvy bývajú menšie.",
      "Pri 1500 pozorovaniach už neexistuje neistota.",
      "Veľký súbor zaručuje správny výsledok bez ohľadu na spôsob zberu."
    ],
    correct: 1,
    ok: "Správne. Pri rovnakom n znamená zmena počtu udalostí o 1 zmenu podielu o 100/n percentuálnych bodov.",
    bad: "Stabilnejší odhad nie je zárukou zlepšenia v každom kroku. Zopakuj si váhu jedného prípadu.",
    visual: `
      <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;text-align:center;margin-bottom:12px;">EMPIRICKÝ PODIEL PRI RASTÚCOM n</div>
        <svg viewBox="0 0 430 230" style="display:block;width:100%;height:auto;">
          <line x1="42" y1="18" x2="42" y2="195" stroke="#8d9aaa" stroke-width="2"/>
          <line x1="42" y1="195" x2="405" y2="195" stroke="#8d9aaa" stroke-width="2"/>
          <line x1="42" y1="105" x2="405" y2="105" stroke="#f3c969" stroke-width="2" stroke-dasharray="6 6"/>
          <polyline points="48,50 65,160 82,82 100,138 120,90 145,120 170,98 195,114 225,102 255,109 290,104 325,107 362,105 395,106" fill="none" stroke="#58d6f3" stroke-width="3"/>
          <text x="224" y="221" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial">počet pozorovaní n</text>
          <text x="14" y="110" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial" transform="rotate(-90 14 110)">empirický podiel</text>
        </svg>
      </div>`
  },
  {
    checkpoint: 7,
    question: "Dve normálne rozdelenia majú rovnaký priemer. Čo sa zmení, keď sa zväčší SD?",
    answers: [
      "Rozdelenie bude širšie; jeho stred ostane rovnaký.",
      "Stred sa automaticky posunie doprava.",
      "Rozdelenie bude užšie.",
      "Rozdelenie prestane byť symetrické."
    ],
    correct: 0,
    ok: "Správne. Priemer určuje stred a smerodajná odchýlka šírku normálneho rozdelenia.",
    bad: "Rozlišuj polohu stredu a rozptýlenie okolo neho. Vráť sa k premene zvonovej krivky.",
    visual: `
      <div style="width:100%;max-width:500px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="color:#8d9aaa;font:700 12px Consolas,monospace;letter-spacing:.08em;text-align:center;margin-bottom:12px;">NORMÁLNE ROZDELENIE</div>
        <svg viewBox="0 0 430 230" style="display:block;width:100%;height:auto;">
          <line x1="42" y1="195" x2="405" y2="195" stroke="#8d9aaa" stroke-width="2"/>
          <path d="M55 194 C95 194,120 187,145 165 C170 142,185 90,215 54 C245 90,260 142,285 165 C310 187,335 194,375 194" fill="none" stroke="#63e6be" stroke-width="3"/>
          <line x1="215" y1="45" x2="215" y2="195" stroke="#f3c969" stroke-width="2" stroke-dasharray="6 6"/>
          <text x="215" y="218" text-anchor="middle" fill="#f3c969" font-size="13" font-family="Arial">μ</text>
          <text x="322" y="74" fill="#8d9aaa" font-size="13" font-family="Arial">SD opisuje rozptýlenie okolo μ</text>
        </svg>
      </div>`
  }
];
