(() => {
  "use strict";

  const all = (window.CHAPTER_LINKS && window.CHAPTER_LINKS.supplementary) || [];
  const videoId = document.body.dataset.videoId || "";
  const item = all.find(v => v.id === videoId);

  const title = document.getElementById("videoTitle");
  const subtitle = document.getElementById("videoSubtitle");
  const nativeVideo = document.getElementById("suppNativeVideo");
  const driveFrame = document.getElementById("suppDriveFrame");
  const missing = document.getElementById("suppMissing");

  function hide(el) { el.classList.add("hidden"); }
  function show(el) { el.classList.remove("hidden"); }

  function isPlaceholder(url) {
    return !url || url.startsWith("VLOZ_") || url.startsWith("PASTE_");
  }

  function driveFileId(url) {
    if (!url) return null;
    const byPath = url.match(/\/file\/d\/([A-Za-z0-9_-]+)/);
    if (byPath) return byPath[1];
    try {
      const parsed = new URL(url);
      const id = parsed.searchParams.get("id");
      if (id) return id;
    } catch (_) {}
    if (/^[A-Za-z0-9_-]{20,}$/.test(url)) return url;
    return null;
  }

  function drivePreview(url) {
    const id = driveFileId(url);
    return id ? `https://drive.google.com/file/d/${id}/preview?autoplay=1` : null;
  }

  function isDirectMedia(url) {
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url || "");
  }

  if (!item) {
    title.textContent = "Video sa nenaslo";
    subtitle.textContent = "Skontroluj data-video-id v HTML.";
    show(missing);
    return;
  }

  title.textContent = item.title;
  subtitle.textContent = "Doplnkove video ku Kapitole 1";
  document.title = `${item.title} | Statistika`;

  hide(nativeVideo);
  hide(driveFrame);
  hide(missing);

  if (isPlaceholder(item.url)) {
    show(missing);
    missing.querySelector("p").textContent = `Dopln URL pre ${item.id} v subore chapter-links.js.`;
    return;
  }

  const preview = drivePreview(item.url);
  if (preview) {
    driveFrame.src = preview;
    show(driveFrame);
    return;
  }

  if (isDirectMedia(item.url)) {
    nativeVideo.src = item.url;
    show(nativeVideo);
    nativeVideo.play().catch(() => {});
    return;
  }

  show(missing);
  missing.querySelector("p").textContent = "Pouzi Google Drive share link alebo priamy MP4/WebM/Ogg link.";
})();
