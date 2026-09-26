(() => {
  const links = (window.STATISTICS_VIDEO_LINKS && window.STATISTICS_VIDEO_LINKS.kap1) || {};
  window.CHAPTER_CONFIG = {
    chapter: 1,
    title: "Dataset a klasifikácia premenných",
    review: [
      { id: 1, key: "kap1_segment1", title: "Dataset: riadok, stĺpec a pacient", url: links.segment1 },
      { id: 2, key: "kap1_segment2", title: "Kvalitatívna vs. kvantitatívna premenná", url: links.segment2 },
      { id: 3, key: "kap1_segment3", title: "Nominálna vs. ordinálna premenná", url: links.segment3 },
      { id: 4, key: "kap1_segment4", title: "Diskrétna vs. spojitá premenná", url: links.segment4 },
      { id: 5, key: "kap1_segment5", title: "Typ premennej určuje metódu", url: links.segment5 },
      { id: 6, key: "kap1_segment6", title: "Premenné môžu byť navzájom prepojené", url: links.segment6 }
    ]
  };
})();
