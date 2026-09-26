(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap9) || {};
  window.CHAPTER_CONFIG = {
    chapter: 9,
    title: "Časové rady a predikcia",
    review: [
      { id: 1, key: "kap9_segment1", title: "Čo je časový rad?", url: links.segment1 },
      { id: 2, key: "kap9_segment2", title: "Trend, sezónnosť a náhoda", url: links.segment2 },
      { id: 3, key: "kap9_segment3", title: "Jednoduchý lineárny trend CRP", url: links.segment3 },
      { id: 4, key: "kap9_segment4", title: "Sezónnosť a dummy premenné", url: links.segment4 },
      { id: 5, key: "kap9_segment5", title: "Predikcia 13. mesiaca", url: links.segment5 },
      { id: 6, key: "kap9_segment6", title: "Prečo jeden rok nestačí?", url: links.segment6 }
    ]
  };
})();
