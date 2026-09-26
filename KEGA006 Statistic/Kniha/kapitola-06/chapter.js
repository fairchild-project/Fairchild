(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap6) || {};
  window.CHAPTER_CONFIG = {
    chapter: 6,
    title: "ANOVA",
    review: [
      { id: 1, key: "kap6_segment1", title: "Preco ANOVA a nie vela t-testov", url: links.segment1 },
      { id: 2, key: "kap6_segment2", title: "Odkial sa berie F-statistika", url: links.segment2 },
      { id: 3, key: "kap6_segment3", title: "Jednofaktorova ANOVA - tlak podla fajcenia", url: links.segment3 },
      { id: 4, key: "kap6_segment4", title: "Tukey post-hoc - ktore skupiny sa lisia", url: links.segment4 },
      { id: 5, key: "kap6_segment5", title: "Dvojfaktorova ANOVA - BMI, pohlavie a fajcenie", url: links.segment5 },
      { id: 6, key: "kap6_segment6", title: "Interakcia - ked efekt zavisi od druhej premennej", url: links.segment6 }
    ]
  };
})();