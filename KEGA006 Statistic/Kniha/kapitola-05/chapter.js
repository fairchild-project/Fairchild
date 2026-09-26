(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap5) || {};
  window.CHAPTER_CONFIG = {
    chapter: 5,
    title: "Testovanie hypotéz",
    review: [
      { id: 1, key: "kap5_segment1", title: "H0 a H1 - logika testu", url: links.segment1 || "" },
      { id: 2, key: "kap5_segment2", title: "p-hodnota, alfa a chyby I/II", url: links.segment2 || "" },
      { id: 3, key: "kap5_segment3", title: "Jednovýberový t-test", url: links.segment3 || "" },
      { id: 4, key: "kap5_segment4", title: "Nezávislé vs. párové t-testy", url: links.segment4 || "" },
      { id: 5, key: "kap5_segment5", title: "Normalita a voľba testu", url: links.segment5 || "" },
      { id: 6, key: "kap5_segment6", title: "Fisher vs. chi-square + mapa testov", url: links.segment6 || "" }
    ]
  };
})();
