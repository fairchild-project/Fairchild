(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap2) || {};
  window.CHAPTER_CONFIG = {
    chapter: 2,
    title: "Analyza pocetnosti",
    review: [
      { id: 1, key: "kap2_segment1", title: "Absolutna vs. relativna pocetnost", url: links.segment1 },
      { id: 2, key: "kap2_segment2", title: "Modus - najcastejsia kategoria", url: links.segment2 },
      { id: 3, key: "kap2_segment3", title: "Kumulativna pocetnost", url: links.segment3 },
      { id: 4, key: "kap2_segment4", title: "Kontingencna tabulka", url: links.segment4 },
      { id: 5, key: "kap2_segment5", title: "Riadkove a stlpcove percenta + graf", url: links.segment5 },
      { id: 6, key: "kap2_segment6", title: "Pocetnost nie je dokaz vztahu", url: links.segment6 }
    ]
  };
})();