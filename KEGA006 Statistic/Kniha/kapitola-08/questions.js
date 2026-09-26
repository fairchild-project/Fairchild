window.CHAPTER_QUIZZES = [
  {
    checkpoint: 1,
    question: "Čo najlepšie znamená r = −0,82?",
    answers: [
      "Silný záporný lineárny vzťah",
      "Slabý kladný lineárny vzťah",
      "Medzi premennými nie je žiadny vzťah",
      "Dôkaz, že X spôsobuje Y"
    ],
    correct: 0,
    ok: "Správne. Znamienko určuje smer a |r| = 0,82 znamená silný lineárny vzťah.",
    bad: "Nesprávne. Záporné znamienko určuje opačný smer a absolútna hodnota blízka 1 znamená silný lineárny vzťah.",
    visual: `
      <div style="width:100%;max-width:500px;padding:24px;border:1px solid #304050;border-radius:16px;background:#0d1620;color:#f2f5f8;">
        <div style="text-align:center;color:#8d9aaa;font:700 13px Consolas,monospace;letter-spacing:.08em;margin-bottom:34px;">KORELAČNÝ KOEFICIENT r</div>
        <div style="position:relative;height:6px;margin:34px 22px 48px;background:linear-gradient(90deg,#f25c7f,#8d9aaa 50%,#63e6be);border-radius:99px;">
          <span style="position:absolute;left:0;top:18px;transform:translateX(-50%);color:#8d9aaa;font:700 13px Consolas,monospace;">−1</span>
          <span style="position:absolute;left:50%;top:18px;transform:translateX(-50%);color:#8d9aaa;font:700 13px Consolas,monospace;">0</span>
          <span style="position:absolute;left:100%;top:18px;transform:translateX(-50%);color:#8d9aaa;font:700 13px Consolas,monospace;">+1</span>
          <span style="position:absolute;left:9%;top:-16px;transform:translate(-50%,-100%);padding:8px 11px;border:1px solid #f3c969;border-radius:9px;color:#f3c969;background:#0b121a;font:700 13px Consolas,monospace;white-space:nowrap;">r = −0,82</span>
          <span style="position:absolute;left:9%;top:-16px;width:2px;height:22px;background:#f3c969;"></span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;font:700 12px Consolas,monospace;color:#8d9aaa;">
          <span>silný záporný</span><span>bez lineárneho vzťahu</span><span>silný kladný</span>
        </div>
      </div>`
  },
  {
    checkpoint: 2,
    question: "Ako správne interpretovať Pearsonovo r = 0,621 medzi vekom a systolickým tlakom?",
    answers: [
      "Kladný a pomerne silný lineárny vzťah",
      "Takmer nulový vzťah",
      "Silný záporný vzťah",
      "Vek určite spôsobuje vyšší tlak"
    ],
    correct: 0,
    ok: "Správne. r = 0,621 opisuje kladnú a pomerne silnú lineárnu súvislosť.",
    bad: "Nesprávne. Pearsonovo r opisuje smer a silu lineárnej súvislosti, nie automaticky kauzalitu.",
    visual: `
      <div style="width:100%;max-width:500px;padding:20px;border:1px solid #304050;border-radius:16px;background:#0d1620;">
        <div style="display:inline-block;margin:0 auto 12px;padding:8px 12px;border:1px solid #63e6be;border-radius:999px;color:#63e6be;font:700 13px Consolas,monospace;">r = 0,621 &nbsp; · &nbsp; p &lt; 0,001</div>
        <svg viewBox="0 0 420 240" style="display:block;width:100%;height:auto;">
          <line x1="42" y1="18" x2="42" y2="205" stroke="#8d9aaa" stroke-width="2"/>
          <line x1="42" y1="205" x2="400" y2="205" stroke="#8d9aaa" stroke-width="2"/>
          <line x1="58" y1="188" x2="386" y2="42" stroke="#63e6be" stroke-width="3"/>
          <g fill="#58d6f3">
            <circle cx="72" cy="178" r="6"/><circle cx="105" cy="166" r="6"/><circle cx="138" cy="159" r="6"/>
            <circle cx="170" cy="143" r="6"/><circle cx="205" cy="133" r="6"/><circle cx="235" cy="118" r="6"/>
            <circle cx="270" cy="105" r="6"/><circle cx="305" cy="86" r="6"/><circle cx="340" cy="70" r="6"/><circle cx="374" cy="54" r="6"/>
          </g>
          <text x="221" y="232" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial">VEK</text>
          <text x="16" y="112" text-anchor="middle" fill="#8d9aaa" font-size="13" font-family="Arial" transform="rotate(-90 16 112)">SYSTOLICKÝ TLAK</text>
        </svg>
      </div>`
  },
  {
    checkpoint: 3,
    question: "Máš ordinálne skóre a vzťah je monotónny, ale nie presne lineárny. Ktorý koeficient je vhodnejší?",
    answers: ["Pearson", "Spearman", "Modus", "Chí-kvadrát ako korelačný koeficient"],
    correct: 1,
    ok: "Správne. Spearman pracuje s poradiami a je vhodný aj pri monotónnom vzťahu bez presnej linearity.",
    bad: "Nesprávne. Pri poradiach alebo ordinálnych dátach a monotónnom vzťahu je prirodzenou voľbou Spearman.",
    visual: `
      <div style="width:100%;max-width:500px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div style="padding:20px;border:1px solid #304050;border-radius:14px;background:#0d1620;min-height:215px;">
          <div style="color:#58d6f3;font:800 21px Arial;margin-bottom:18px;">PEARSON</div>
          <div style="padding:9px;margin:8px 0;border-radius:9px;background:rgba(255,255,255,.04);color:#b7c2cf;font:700 13px Consolas,monospace;">kvantitatívne dáta</div>
          <div style="padding:9px;margin:8px 0;border-radius:9px;background:rgba(255,255,255,.04);color:#b7c2cf;font:700 13px Consolas,monospace;">lineárny vzťah</div>
          <div style="padding:9px;margin:8px 0;border-radius:9px;background:rgba(255,255,255,.04);color:#b7c2cf;font:700 13px Consolas,monospace;">citlivejší na odľahlé hodnoty</div>
        </div>
        <div style="padding:20px;border:1px solid #63e6be;border-radius:14px;background:rgba(99,230,190,.07);min-height:215px;box-shadow:inset 0 0 0 1px rgba(99,230,190,.15);">
          <div style="color:#63e6be;font:800 21px Arial;margin-bottom:18px;">SPEARMAN</div>
          <div style="padding:9px;margin:8px 0;border-radius:9px;background:rgba(99,230,190,.06);color:#d8fff2;font:700 13px Consolas,monospace;">poradia / ordinálne dáta</div>
          <div style="padding:9px;margin:8px 0;border-radius:9px;background:rgba(99,230,190,.06);color:#d8fff2;font:700 13px Consolas,monospace;">monotónny vzťah</div>
          <div style="padding:9px;margin:8px 0;border-radius:9px;background:rgba(99,230,190,.06);color:#d8fff2;font:700 13px Consolas,monospace;">nevyžaduje presnú linearitu</div>
        </div>
      </div>`
  },
  {
    checkpoint: 4,
    question: "Ktorá z uvedených dvojíc má v zobrazenej matici najsilnejšiu kladnú koreláciu?",
    answers: [
      "Vek – cholesterol, r = 0,653",
      "Vek – tlak, r = 0,621",
      "BMI – tlak, r = 0,365",
      "CRP – BMI, r = 0,090"
    ],
    correct: 0,
    ok: "Správne. Zo zobrazených kladných hodnôt je r = 0,653 najväčšie.",
    bad: "Nesprávne. Porovnaj hodnoty mimo hlavnej diagonály; najsilnejšia kladná korelácia má najväčšie kladné r.",
    visual: `
      <div style="width:100%;max-width:500px;padding:12px;border:1px solid #304050;border-radius:16px;background:#0d1620;overflow:hidden;">
        <div style="text-align:center;color:#f3c969;font:800 13px Consolas,monospace;letter-spacing:.06em;margin:4px 0 14px;">KORELAČNÁ MATICA</div>
        <div style="display:grid;grid-template-columns:1.2fr repeat(4,1fr);font:700 12px Consolas,monospace;text-align:center;">
          <div style="padding:11px;border-bottom:1px solid #304050;"></div>
          <div style="padding:11px;color:#f3c969;border-bottom:1px solid #304050;">VEK</div>
          <div style="padding:11px;color:#f3c969;border-bottom:1px solid #304050;">TLAK</div>
          <div style="padding:11px;color:#f3c969;border-bottom:1px solid #304050;">CHOL.</div>
          <div style="padding:11px;color:#f3c969;border-bottom:1px solid #304050;">BMI</div>

          <div style="padding:11px;color:#58d6f3;border-bottom:1px solid #304050;">VEK</div>
          <div style="padding:11px;border-bottom:1px solid #304050;color:#8d9aaa;">1,000</div>
          <div style="padding:11px;border-bottom:1px solid #304050;">0,621</div>
          <div style="padding:11px;border-bottom:1px solid #304050;background:#63e6be;color:#071015;font-weight:900;border-radius:6px;">0,653</div>
          <div style="padding:11px;border-bottom:1px solid #304050;">0,210</div>

          <div style="padding:11px;color:#58d6f3;border-bottom:1px solid #304050;">TLAK</div>
          <div style="padding:11px;border-bottom:1px solid #304050;">0,621</div>
          <div style="padding:11px;border-bottom:1px solid #304050;color:#8d9aaa;">1,000</div>
          <div style="padding:11px;border-bottom:1px solid #304050;">0,310</div>
          <div style="padding:11px;border-bottom:1px solid #304050;color:#63e6be;">0,365</div>

          <div style="padding:11px;color:#58d6f3;border-bottom:1px solid #304050;">CHOL.</div>
          <div style="padding:11px;border-bottom:1px solid #304050;background:rgba(99,230,190,.10);color:#63e6be;">0,653</div>
          <div style="padding:11px;border-bottom:1px solid #304050;">0,310</div>
          <div style="padding:11px;border-bottom:1px solid #304050;color:#8d9aaa;">1,000</div>
          <div style="padding:11px;border-bottom:1px solid #304050;">0,190</div>

          <div style="padding:11px;color:#58d6f3;">BMI</div>
          <div style="padding:11px;">0,210</div>
          <div style="padding:11px;color:#63e6be;">0,365</div>
          <div style="padding:11px;">0,190</div>
          <div style="padding:11px;color:#8d9aaa;">1,000</div>
        </div>
      </div>`
  },
  {
    checkpoint: 5,
    question: "Ktorý údaj priamo opisuje silu lineárneho vzťahu?",
    answers: ["Korelačný koeficient r", "Iba p-hodnota", "Počet desatinných miest", "Samotná veľkosť vzorky"],
    correct: 0,
    ok: "Správne. Smer a silu lineárneho vzťahu opisuje r; p-hodnota rieši štatistickú významnosť.",
    bad: "Nesprávne. Malé p môže sprevádzať slabý aj silný vzťah; silu lineárneho vzťahu opisuje r.",
    visual: `
      <div style="width:100%;max-width:500px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
        <div style="padding:16px;border:1px solid #304050;border-radius:14px;background:#0d1620;text-align:center;">
          <div style="color:#f3c969;font:800 16px Arial;margin-bottom:5px;">SLABÝ VZŤAH</div>
          <div style="color:#f3c969;font:900 24px Consolas,monospace;">r = 0,12</div>
          <div style="color:#8d9aaa;font:700 12px Consolas,monospace;margin:4px 0 10px;">p &lt; 0,001</div>
          <svg viewBox="0 0 190 105" style="display:block;width:100%;height:auto;">
            <line x1="18" y1="8" x2="18" y2="90" stroke="#8d9aaa" stroke-width="2"/><line x1="18" y1="90" x2="180" y2="90" stroke="#8d9aaa" stroke-width="2"/>
            <g fill="#58d6f3"><circle cx="35" cy="64" r="5"/><circle cx="58" cy="42" r="5"/><circle cx="79" cy="71" r="5"/><circle cx="102" cy="38" r="5"/><circle cx="128" cy="57" r="5"/><circle cx="154" cy="33" r="5"/></g>
          </svg>
        </div>
        <div style="padding:16px;border:1px solid #63e6be;border-radius:14px;background:rgba(99,230,190,.07);text-align:center;">
          <div style="color:#63e6be;font:800 16px Arial;margin-bottom:5px;">SILNÝ VZŤAH</div>
          <div style="color:#63e6be;font:900 24px Consolas,monospace;">r = 0,78</div>
          <div style="color:#8d9aaa;font:700 12px Consolas,monospace;margin:4px 0 10px;">p &lt; 0,001</div>
          <svg viewBox="0 0 190 105" style="display:block;width:100%;height:auto;">
            <line x1="18" y1="8" x2="18" y2="90" stroke="#8d9aaa" stroke-width="2"/><line x1="18" y1="90" x2="180" y2="90" stroke="#8d9aaa" stroke-width="2"/>
            <line x1="28" y1="80" x2="170" y2="22" stroke="#63e6be" stroke-width="2.5"/>
            <g fill="#58d6f3"><circle cx="34" cy="78" r="5"/><circle cx="58" cy="67" r="5"/><circle cx="82" cy="58" r="5"/><circle cx="106" cy="47" r="5"/><circle cx="132" cy="36" r="5"/><circle cx="158" cy="24" r="5"/></g>
          </svg>
        </div>
      </div>`
  }
];
