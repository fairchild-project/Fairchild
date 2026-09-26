window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Z výberu 1500 pacientov poznáme priemerný systolický tlak 118,31 mmHg. Ktorá hodnota je tu výberová štatistika?",
    answers: ["118,31 mmHg", "1500 mmHg", "Neznámy populačný priemer μ", "95 %"],
    correct: 0,
    ok: "Správne. Výberový priemer 118,31 mmHg je štatistika vypočítaná z konkrétneho výberu.",
    bad: "Nesprávne. Hľadaj číslo, ktoré bolo vypočítané priamo z výberových dát.",
    visual: `<div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div style="padding:18px;border:1px solid #58d6f3;border-radius:14px;text-align:center;background:rgba(88,214,243,.06);"><div style="color:#58d6f3;font:800 13px Arial;">VÝBER</div><div style="margin-top:9px;color:#fff;font:900 24px Consolas,monospace;">n = 1500</div><div style="margin-top:6px;color:#8d9aaa;font:700 12px Consolas,monospace;">pozorované dáta</div></div>
        <div style="padding:18px;border:1px solid #f3c969;border-radius:14px;text-align:center;background:rgba(243,201,105,.05);"><div style="color:#f3c969;font:800 13px Arial;">POPULÁCIA</div><div style="margin-top:9px;color:#fff;font:900 24px Consolas,monospace;">μ = ?</div><div style="margin-top:6px;color:#8d9aaa;font:700 12px Consolas,monospace;">neznámy parameter</div></div>
      </div><div style="margin-top:18px;padding:12px;border:1px dashed #304050;border-radius:10px;color:#8d9aaa;text-align:center;font:700 12px Consolas,monospace;">Z výberu odhadujeme vlastnosť celej populácie.</div></div>`
  },
  {
    checkpoint: 1,
    question: "Ktoré tvrdenie najlepšie opisuje bodový odhad populačného priemeru?",
    answers: ["Jedna hodnota vypočítaná z výberu", "Celý rozsah možných populačných hodnôt", "Pravdepodobnosť správnosti výberu", "Počet meraní nad priemerom"],
    correct: 0,
    ok: "Správne. Bodový odhad je jedno číslo, napríklad výberový priemer.",
    bad: "Nesprávne. Bodový odhad je jediná výberová hodnota používaná ako odhad parametra.",
    visual: `<div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
      <svg viewBox="0 0 500 180" style="width:100%;height:auto;display:block;"><circle cx="95" cy="90" r="56" fill="rgba(88,214,243,.08)" stroke="#58d6f3" stroke-width="2"/><circle cx="405" cy="90" r="70" fill="rgba(243,201,105,.05)" stroke="#f3c969" stroke-width="2"/><line x1="160" y1="90" x2="330" y2="90" stroke="#8d9aaa" stroke-width="3"/><polygon points="330,90 316,82 316,98" fill="#8d9aaa"/><text x="95" y="86" text-anchor="middle" fill="#58d6f3" font-size="16" font-family="Arial" font-weight="700">VÝBER</text><text x="95" y="108" text-anchor="middle" fill="#d8e1ea" font-size="13" font-family="Arial">štatistika</text><text x="405" y="86" text-anchor="middle" fill="#f3c969" font-size="16" font-family="Arial" font-weight="700">POPULÁCIA</text><text x="405" y="108" text-anchor="middle" fill="#d8e1ea" font-size="13" font-family="Arial">parameter</text></svg></div>`
  },
  {
    checkpoint: 2,
    question: "Dve skupiny majú rovnaký priemer, ale jedna má oveľa rozptýlenejšie individuálne hodnoty. Ktorá veličina tento rozdiel priamo zachytáva?",
    answers: ["SD", "SE", "Veľkosť výberu n", "Úroveň spoľahlivosti"],
    correct: 0,
    ok: "Správne. SD opisuje rozptýlenie jednotlivých meraní okolo priemeru.",
    bad: "Nesprávne. Otázka sa týka variability jednotlivcov, nie neistoty priemeru.",
    visual: `<div style="width:100%;max-width:520px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><svg viewBox="0 0 500 220" style="width:100%;height:auto;display:block;"><line x1="30" y1="185" x2="470" y2="185" stroke="#8d9aaa" stroke-width="2"/><g fill="#58d6f3"><circle cx="110" cy="140" r="7"/><circle cx="145" cy="118" r="7"/><circle cx="180" cy="130" r="7"/><circle cx="215" cy="105" r="7"/><circle cx="250" cy="122" r="7"/><circle cx="285" cy="98" r="7"/><circle cx="320" cy="128" r="7"/><circle cx="355" cy="112" r="7"/><circle cx="390" cy="142" r="7"/></g><g fill="#63e6be"><circle cx="205" cy="65" r="7"/><circle cx="225" cy="55" r="7"/><circle cx="245" cy="61" r="7"/><circle cx="265" cy="52" r="7"/><circle cx="285" cy="64" r="7"/></g><text x="250" y="210" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial">rovnaký stred · rozdielna rozptýlenosť</text></svg></div>`
  },
  {
    checkpoint: 2,
    question: "Ak SD zostane rovnaká a n sa zväčší zo 100 na 400, ako sa zmení SE?",
    answers: ["Klesne približne na polovicu", "Zväčší sa štvornásobne", "Zostane rovnaká", "Klesne na štvrtinu"],
    correct: 0,
    ok: "Správne. SE = SD/√n, takže štvornásobné n znamená dvojnásobný menovateľ.",
    bad: "Nesprávne. Uvažuj cez odmocninu z n vo vzťahu SE = SD/√n.",
    visual: `<div style="width:100%;max-width:520px;padding:22px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><div style="text-align:center;color:#f3c969;font:900 24px Consolas,monospace;margin-bottom:18px;">SE = SD / √n</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;"><div style="padding:16px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="color:#8d9aaa;font:700 12px Consolas,monospace;">SCENÁR A</span><b style="display:block;margin-top:8px;color:#58d6f3;font:900 24px Consolas,monospace;">n = 100</b></div><div style="padding:16px;border:1px solid #304050;border-radius:12px;text-align:center;"><span style="color:#8d9aaa;font:700 12px Consolas,monospace;">SCENÁR B</span><b style="display:block;margin-top:8px;color:#63e6be;font:900 24px Consolas,monospace;">n = 400</b></div></div></div>`
  },
  {
    checkpoint: 3,
    question: "Pri opakovanom výbere tvoríme vždy 95 % interval rovnakou metódou. Čo znamená číslo 95 %?",
    answers: ["Približne 95 % takto vytvorených intervalov zachytí pevný parameter", "Každý jeden interval má po výpočte 95 % pravdepodobnosť obsahovať parameter", "95 % pacientov leží v intervale", "Výber obsahuje 95 % populácie"],
    correct: 0,
    ok: "Správne. 95 % je dlhodobá úspešnosť metódy pri opakovaných výberoch.",
    bad: "Nesprávne. Parameter je vo frekventistickom pohľade pevný; náhodné sú intervaly.",
    visual: `<div style="width:100%;max-width:520px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><svg viewBox="0 0 500 250" style="width:100%;height:auto;display:block;"><line x1="260" y1="18" x2="260" y2="232" stroke="#f3c969" stroke-width="2" stroke-dasharray="6 5"/><g stroke-width="5" stroke-linecap="round"><line x1="115" y1="45" x2="335" y2="45" stroke="#63e6be"/><line x1="155" y1="78" x2="355" y2="78" stroke="#63e6be"/><line x1="90" y1="111" x2="285" y2="111" stroke="#63e6be"/><line x1="302" y1="144" x2="455" y2="144" stroke="#f25c7f"/><line x1="138" y1="177" x2="380" y2="177" stroke="#63e6be"/><line x1="188" y1="210" x2="318" y2="210" stroke="#63e6be"/></g><text x="270" y="16" fill="#f3c969" font-size="13" font-family="Arial">pevný parameter</text></svg></div>`
  },
  {
    checkpoint: 3,
    question: "Ak zvýšime požadovanú úroveň spoľahlivosti z 95 % na 99 %, čo sa pri rovnakých dátach typicky stane s intervalom?",
    answers: ["Rozšíri sa", "Zúži sa", "Nezmení sa", "Jeho stred sa musí posunúť doprava"],
    correct: 0,
    ok: "Správne. Vyššia spoľahlivosť si vyžaduje širší interval.",
    bad: "Nesprávne. Vyššia požadovaná miera pokrytia znamená konzervatívnejší interval.",
    visual: `<div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><svg viewBox="0 0 500 180" style="width:100%;height:auto;display:block;"><line x1="250" y1="25" x2="250" y2="155" stroke="#8d9aaa" stroke-width="2" stroke-dasharray="5 5"/><line x1="150" y1="70" x2="350" y2="70" stroke="#58d6f3" stroke-width="8" stroke-linecap="round"/><line x1="85" y1="125" x2="415" y2="125" stroke="#f3c969" stroke-width="8" stroke-linecap="round"/><text x="65" y="75" fill="#58d6f3" font-size="15" font-family="Arial" font-weight="700">95 %</text><text x="65" y="130" fill="#f3c969" font-size="15" font-family="Arial" font-weight="700">99 %</text></svg></div>`
  },
  {
    checkpoint: 3,
    question: "Ktoré tvrdenie o intervale spoľahlivosti a jednotlivých pacientoch je správne?",
    answers: ["Interval pre priemer nehovorí, že v ňom musí ležať 95 % jednotlivých pacientov", "Presne 95 % pacientov musí ležať medzi hranicami", "Interval je rozsah všetkých meraní", "Interval určuje minimálnu a maximálnu hodnotu pacienta"],
    correct: 0,
    ok: "Správne. Interval pre priemer sa týka neistoty odhadu priemeru, nie rozptylu jednotlivých hodnôt.",
    bad: "Nesprávne. Rozlišuj interval pre parameter od rozdelenia individuálnych meraní.",
    visual: `<div style="width:100%;max-width:520px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><svg viewBox="0 0 500 220" style="width:100%;height:auto;display:block;"><line x1="35" y1="175" x2="465" y2="175" stroke="#8d9aaa" stroke-width="2"/><g fill="#58d6f3"><circle cx="80" cy="142" r="6"/><circle cx="115" cy="90" r="6"/><circle cx="145" cy="128" r="6"/><circle cx="188" cy="70" r="6"/><circle cx="220" cy="118" r="6"/><circle cx="255" cy="82" r="6"/><circle cx="300" cy="132" r="6"/><circle cx="348" cy="73" r="6"/><circle cx="405" cy="145" r="6"/></g><line x1="210" y1="35" x2="290" y2="35" stroke="#63e6be" stroke-width="8" stroke-linecap="round"/><circle cx="250" cy="35" r="7" fill="#f3c969"/><text x="250" y="20" text-anchor="middle" fill="#8d9aaa" font-size="12" font-family="Arial">interval odhadu priemeru</text></svg></div>`
  },
  {
    checkpoint: 4,
    question: "Pre systolický tlak bol uvedený výberový priemer 118,31 mmHg. Ktorý interval zodpovedá uvedenému 95 % intervalu?",
    answers: ["117,62 až 118,99 mmHg", "104,84 až 131,78 mmHg", "118,31 až 1500 mmHg", "13,47 až 118,31 mmHg"],
    correct: 0,
    ok: "Správne. V kapitole bol uvedený interval približne 117,62 až 118,99 mmHg.",
    bad: "Nesprávne. Hľadaj dve hranice veľmi blízko výberového priemeru 118,31 mmHg.",
    visual: `<div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><svg viewBox="0 0 500 170" style="width:100%;height:auto;display:block;"><line x1="50" y1="100" x2="450" y2="100" stroke="#8d9aaa" stroke-width="2"/><circle cx="250" cy="100" r="9" fill="#f3c969"/><text x="250" y="72" text-anchor="middle" fill="#f3c969" font-size="15" font-family="Arial" font-weight="700">118,31</text><text x="250" y="145" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial">výberový priemer</text></svg></div>`
  },
  {
    checkpoint: 4,
    question: "Interval (117,62; 118,99) má stred približne pri 118,31. Čo to ukazuje?",
    answers: ["Interval je približne centrovaný okolo bodového odhadu", "Bodový odhad leží mimo intervalu", "Interval obsahuje všetky individuálne merania", "Dolná hranica je väčšia ako horná"],
    correct: 0,
    ok: "Správne. Hranice ležia približne symetricky okolo bodového odhadu.",
    bad: "Nesprávne. Porovnaj vzdialenosť bodového odhadu od oboch hraníc.",
    visual: `<div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;"><div style="text-align:center;padding:14px;border:1px solid #304050;border-radius:10px;"><span style="color:#8d9aaa;font:700 12px Consolas,monospace;">A</span><b style="display:block;margin-top:8px;color:#58d6f3;font:900 21px Consolas,monospace;">117,62</b></div><div style="text-align:center;padding:14px;border:1px solid #f3c969;border-radius:10px;"><span style="color:#8d9aaa;font:700 12px Consolas,monospace;">STRED</span><b style="display:block;margin-top:8px;color:#f3c969;font:900 21px Consolas,monospace;">118,31</b></div><div style="text-align:center;padding:14px;border:1px solid #304050;border-radius:10px;"><span style="color:#8d9aaa;font:700 12px Consolas,monospace;">B</span><b style="display:block;margin-top:8px;color:#63e6be;font:900 21px Consolas,monospace;">118,99</b></div></div></div>`
  },
  {
    checkpoint: 5,
    question: "Pri rovnakom SD zväčšíme veľkosť výberu. Aký smer zmeny šírky intervalu očakávame?",
    answers: ["Interval sa zúži", "Interval sa rozšíri", "Stred sa musí posunúť", "SD sa zdvojnásobí"],
    correct: 0,
    ok: "Správne. Väčšie n znižuje SE, preto interval býva užší.",
    bad: "Nesprávne. Uvažuj cez vzťah SE = SD/√n.",
    visual: `<div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><div style="display:grid;grid-template-columns:120px 1fr;row-gap:20px;align-items:center;"><div style="color:#58d6f3;font:900 16px Consolas,monospace;">n = 100</div><div style="height:9px;background:linear-gradient(90deg,transparent 18%,#58d6f3 18%,#58d6f3 82%,transparent 82%);"></div><div style="color:#63e6be;font:900 16px Consolas,monospace;">n = 400</div><div style="height:9px;background:linear-gradient(90deg,transparent 34%,#63e6be 34%,#63e6be 66%,transparent 66%);"></div></div></div>`
  },
  {
    checkpoint: 5,
    question: "Pri rovnakom n sa SD výrazne zväčší. Čo to typicky urobí s intervalom spoľahlivosti?",
    answers: ["Rozšíri ho", "Zúži ho", "Neovplyvní ho", "Vynuluje SE"],
    correct: 0,
    ok: "Správne. Väčšia variabilita zvyšuje SE a interval sa rozširuje.",
    bad: "Nesprávne. Väčšie SD znamená väčšiu neistotu odhadu pri rovnakom n.",
    visual: `<div style="width:100%;max-width:520px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><svg viewBox="0 0 500 205" style="width:100%;height:auto;display:block;"><line x1="35" y1="170" x2="465" y2="170" stroke="#8d9aaa" stroke-width="2"/><path d="M90 168 C145 165,180 105,220 70 C235 58,245 52,250 50 C255 52,265 58,280 70 C320 105,355 165,410 168" fill="none" stroke="#58d6f3" stroke-width="3"/><path d="M170 168 C205 165,225 105,240 62 C245 48,248 42,250 40 C252 42,255 48,260 62 C275 105,295 165,330 168" fill="none" stroke="#63e6be" stroke-width="3"/><text x="105" y="35" fill="#58d6f3" font-size="13" font-family="Arial">väčšia variabilita</text><text x="305" y="58" fill="#63e6be" font-size="13" font-family="Arial">menšia variabilita</text></svg></div>`
  },
  {
    checkpoint: 5,
    question: "Ktorá kombinácia pri rovnakom priemere vedie typicky k najpresnejšiemu odhadu priemeru?",
    answers: ["Veľké n a malé SD", "Malé n a veľké SD", "Malé n a malé SD vždy bez ohľadu na SE", "Veľké SD a vyššia úroveň spoľahlivosti"],
    correct: 0,
    ok: "Správne. Veľké n a malé SD vedú k menšiemu SE a typicky užšiemu intervalu.",
    bad: "Nesprávne. Presnosť odhadu rastie, keď SE klesá.",
    visual: `<div style="width:100%;max-width:520px;padding:18px;border:1px solid #304050;border-radius:16px;background:#0d1620;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;"><div style="padding:14px;border:1px solid #304050;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:700 12px Consolas,monospace;">SCENÁR A</div><div style="margin-top:8px;color:#58d6f3;font:900 19px Consolas,monospace;">n malé</div><div style="color:#58d6f3;font:900 19px Consolas,monospace;">SD veľké</div></div><div style="padding:14px;border:1px solid #304050;border-radius:12px;text-align:center;"><div style="color:#8d9aaa;font:700 12px Consolas,monospace;">SCENÁR B</div><div style="margin-top:8px;color:#63e6be;font:900 19px Consolas,monospace;">n veľké</div><div style="color:#63e6be;font:900 19px Consolas,monospace;">SD malé</div></div></div></div>`
  }
];
