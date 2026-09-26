(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap7) || {};
  window.CHAPTER_CONFIG = {
    chapter: 7,
    title: "Regresia",
    review: [
      { id: 1, key: "kap7_segment1", title: "Regresia vs. korelacia", url: links.segment1 },
      { id: 2, key: "kap7_segment2", title: "Regresna rovnica: intercept, sklon a reziduum", url: links.segment2 },
      { id: 3, key: "kap7_segment3", title: "R2 a vysvetlena variabilita", url: links.segment3 },
      { id: 4, key: "kap7_segment4", title: "Viacnasobna regresia a dummy premenne", url: links.segment4 },
      { id: 5, key: "kap7_segment5", title: "Diagnostika regresie", url: links.segment5 },
      { id: 6, key: "kap7_segment6", title: "Linearna, kvadraticka a polynomicka regresia", url: links.segment6 }
    ]
  };
})();