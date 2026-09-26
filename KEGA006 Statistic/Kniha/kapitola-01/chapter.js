(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap1) || {};
  window.CHAPTER_CONFIG = {
    chapter: 1,
    title: "Dataset a klasifikacia premennych",
    review: [
      { id: 1, key: "kap1_segment1", title: "Dataset: riadok, stlpec a pacient", url: links.segment1 },
      { id: 2, key: "kap1_segment2", title: "Kvalitativna vs. kvantitativna premenna", url: links.segment2 },
      { id: 3, key: "kap1_segment3", title: "Nominalna vs. ordinalna premenna", url: links.segment3 },
      { id: 4, key: "kap1_segment4", title: "Diskretna vs. spojita premenna", url: links.segment4 },
      { id: 5, key: "kap1_segment5", title: "Typ premennej urcuje metodu", url: links.segment5 },
      { id: 6, key: "kap1_segment6", title: "Premenne mozu byt navzajom prepojene", url: links.segment6 }
    ]
  };
})();