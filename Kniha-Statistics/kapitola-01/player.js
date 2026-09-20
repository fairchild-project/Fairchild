(() => {
  "use strict";

  const videos = (window.CHAPTER_LINKS && window.CHAPTER_LINKS.review) || [];
  const quizzes = window.CHAPTER_QUIZZES || [];

  const nativeVideo = document.getElementById("nativeVideo");
  const driveFrame = document.getElementById("driveFrame");
  const missingVideo = document.getElementById("missingVideo");
  const missingTitle = document.getElementById("missingTitle");
  const startOverlay = document.getElementById("startOverlay");
  const quizOverlay = document.getElementById("quizOverlay");
  const doneOverlay = document.getElementById("doneOverlay");
  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const questionBtn = document.getElementById("questionBtn");
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const quizBadge = document.getElementById("quizBadge");
  const question = document.getElementById("question");
  const answers = document.getElementById("answers");
  const feedback = document.getElementById("feedback");
  const visual = document.getElementById("visual");
  const quizCard = quizOverlay.querySelector(".quiz-card");
  const progressBar = document.getElementById("progressBar");
  const progressLabel = document.getElementById("progressLabel");
  const scoreLabel = document.getElementById("scoreLabel");
  const segmentNumber = document.getElementById("segmentNumber");
  const segmentTitle = document.getElementById("segmentTitle");
  const status = document.getElementById("status");

  let segmentIndex = 0;
  let passed = new Set();
  let currentQuizIndex = null;
  let answerLocked = false;

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

  function driveDirect(url) {
    const id = driveFileId(url);
    return id ? `https://drive.google.com/uc?export=download&id=${id}` : null;
  }

  function isMobile() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  function isDirectMedia(url) {
    if (!url) return false;
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
  }

  function stopAllMedia() {
    nativeVideo.pause();
    nativeVideo.removeAttribute("src");
    nativeVideo.load();
    driveFrame.src = "about:blank";
  }

  function updateProgress() {
    const totalSegments = videos.length || 6;
    const pct = totalSegments > 1 ? (segmentIndex / (totalSegments - 1)) * 100 : 0;
    progressBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;
    progressLabel.textContent = `Usek ${segmentIndex + 1} / ${totalSegments}`;
    scoreLabel.textContent = `${passed.size} / ${quizzes.length} checkpointov`;
  }

  function renderSegment(index) {
    segmentIndex = index;
    currentQuizIndex = null;
    answerLocked = false;
    quizOverlay.classList.remove("show");
    doneOverlay.classList.remove("show");
    backBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");

    const item = videos[index] || { id: index + 1, title: `Usek ${index + 1}`, url: "" };
    segmentNumber.textContent = String(index + 1).padStart(2, "0");
    segmentTitle.textContent = item.title;
    updateProgress();

    stopAllMedia();
    hide(nativeVideo);
    hide(driveFrame);
    hide(missingVideo);
    hide(questionBtn);

    if (isPlaceholder(item.url)) {
      missingTitle.textContent = `Chyba link pre usek ${index + 1}`;
      show(missingVideo);
      status.textContent = "Dopln link v chapter-links.js";
      return;
    }

    const preview = drivePreview(item.url);
    if (preview) {
      if (isMobile()) {
        const directUrl = driveDirect(item.url);
        nativeVideo.src = directUrl;
        nativeVideo.autoplay = true;
        nativeVideo.playsInline = true;
        nativeVideo.muted = false;
        show(nativeVideo);
        status.textContent = "Prehrava sa video";

        let fellBack = false;
        const fallbackToDrive = () => {
          if (fellBack) return;
          fellBack = true;
          nativeVideo.pause();
          nativeVideo.removeAttribute("src");
          nativeVideo.load();
          hide(nativeVideo);
          driveFrame.src = preview;
          show(driveFrame);
          status.textContent = "Google Drive prehravac";
          configureQuestionButton();
        };

        nativeVideo.addEventListener("error", fallbackToDrive, { once: true });
        nativeVideo.addEventListener("ended", handleDirectVideoEnded, { once: true });
        const tryPlay = nativeVideo.play();
        if (tryPlay && tryPlay.catch) {
          tryPlay.catch(() => {
            nativeVideo.muted = true;
            nativeVideo.play().catch(() => fallbackToDrive());
          });
        }

        const activateFullscreen = () => {
          nativeVideo.muted = false;
          if (nativeVideo.paused) nativeVideo.play().catch(() => {});
          if (nativeVideo.requestFullscreen) nativeVideo.requestFullscreen().catch(() => {});
          else if (nativeVideo.webkitEnterFullscreen) {
            try { nativeVideo.webkitEnterFullscreen(); } catch (_) {}
          }
        };
        document.addEventListener("pointerup", activateFullscreen, { once: true, passive: true });
        document.addEventListener("touchend", activateFullscreen, { once: true, passive: true });
        return;
      }

      driveFrame.src = preview;
      show(driveFrame);
      status.textContent = "Google Drive video - po dopozerani otvor otazku";
      configureQuestionButton();
      return;
    }

    if (isDirectMedia(item.url)) {
      nativeVideo.src = item.url;
      show(nativeVideo);
      status.textContent = "Video sa nacitava";
      nativeVideo.addEventListener("loadedmetadata", () => {
        status.textContent = "Prehrava sa video";
        nativeVideo.play().catch(() => {});
      }, { once: true });
      nativeVideo.addEventListener("ended", handleDirectVideoEnded, { once: true });
      return;
    }

    missingTitle.textContent = `Nepodporovany link pre usek ${index + 1}`;
    show(missingVideo);
    status.textContent = "Pouzi Google Drive share link alebo priamy MP4 link";
  }

  function configureQuestionButton() {
    const mobile = window.matchMedia("(max-width: 900px)").matches;
    if (segmentIndex < quizzes.length) {
      questionBtn.textContent = mobile ? "OTAZKA" : "PO DOPOZERANI: OTAZKA";
      questionBtn.dataset.action = "quiz";
    } else {
      questionBtn.textContent = mobile ? "DOKONCIT" : "PO DOPOZERANI: DOKONCIT KAPITOLU";
      questionBtn.dataset.action = "finish";
    }
    show(questionBtn);
  }

  function handleDirectVideoEnded() {
    if (segmentIndex < quizzes.length) {
      showQuiz(segmentIndex);
    } else {
      finishChapter();
    }
  }

  function showQuiz(index) {
    if (index < 0 || index >= quizzes.length) return;
    const q = quizzes[index];
    currentQuizIndex = index;
    answerLocked = false;
    stopAllMedia();
    hide(nativeVideo);
    hide(driveFrame);
    hide(missingVideo);
    hide(questionBtn);

    quizBadge.textContent = `CHECKPOINT ${q.checkpoint} / ${quizzes.length}`;
    question.textContent = q.question;
    visual.innerHTML = q.visual || "";
    quizCard.classList.toggle("no-visual", !q.visual);
    feedback.textContent = "";
    feedback.className = "feedback";
    answers.innerHTML = "";
    backBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");

    q.answers.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.textContent = `${i + 1}. ${text}`;
      btn.addEventListener("click", () => handleAnswer(i, btn));
      answers.appendChild(btn);
    });

    quizOverlay.classList.add("show");
    status.textContent = `Checkpoint ${q.checkpoint}: vyber odpoved`;
  }

  function disableAnswers() {
    answers.querySelectorAll(".answer").forEach(btn => {
      btn.disabled = true;
    });
  }

  function handleAnswer(selected, button) {
    if (answerLocked || currentQuizIndex === null) return;
    answerLocked = true;
    disableAnswers();

    const q = quizzes[currentQuizIndex];
    if (selected === q.correct) {
      button.classList.add("correct");
      feedback.textContent = q.ok;
      feedback.className = "feedback ok";
      passed.add(currentQuizIndex);
      scoreLabel.textContent = `${passed.size} / ${quizzes.length} checkpointov`;
      backBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
      nextBtn.textContent = currentQuizIndex === quizzes.length - 1 ? "DALEJ NA POSLEDNY USEK ->" : "DALEJ ->";
      status.textContent = "Spravna odpoved - DALEJ je odomknute";
    } else {
      button.classList.add("wrong");
      feedback.textContent = q.bad;
      feedback.className = "feedback bad";
      nextBtn.classList.add("hidden");
      backBtn.classList.remove("hidden");
      status.textContent = "Nespravna odpoved - dostupne je iba NASPAT";
    }
  }

  function backToExplanation() {
    if (currentQuizIndex === null) return;
    const reviewSegment = currentQuizIndex;
    quizOverlay.classList.remove("show");
    renderSegment(reviewSegment);
    status.textContent = "Zopakuj vysvetlenie a potom skus otazku znova";
  }

  function goNext() {
    if (currentQuizIndex === null || !passed.has(currentQuizIndex)) return;
    const nextSegment = currentQuizIndex + 1;
    quizOverlay.classList.remove("show");
    renderSegment(nextSegment);
  }

  function finishChapter() {
    stopAllMedia();
    hide(nativeVideo);
    hide(driveFrame);
    hide(missingVideo);
    hide(questionBtn);
    progressBar.style.width = "100%";
    progressLabel.textContent = "Kapitola dokoncena";
    status.textContent = "Hotovo";
    doneOverlay.classList.add("show");
  }

  questionBtn.addEventListener("click", () => {
    if (questionBtn.dataset.action === "finish") {
      finishChapter();
    } else {
      showQuiz(segmentIndex);
    }
  });

  backBtn.addEventListener("click", backToExplanation);
  nextBtn.addEventListener("click", goNext);

  startBtn.addEventListener("click", () => {
    startOverlay.classList.remove("show");
    renderSegment(0);
  });

  restartBtn.addEventListener("click", () => {
    passed = new Set();
    segmentIndex = 0;
    doneOverlay.classList.remove("show");
    updateProgress();
    status.textContent = "Pripravene";
    if (window.matchMedia("(max-width: 900px)").matches) {
      startOverlay.classList.remove("show");
      renderSegment(0);
    } else {
      startOverlay.classList.add("show");
    }
  });

  nativeVideo.addEventListener("error", () => {
    status.textContent = "Video sa nepodarilo nacitat. Skontroluj link v chapter-links.js.";
  });

  updateProgress();

  // Na mobile preskoc uvodnu HTML kartu a rovno nacitaj prvy video usek.
  if (window.matchMedia("(max-width: 900px)").matches) {
    startOverlay.classList.remove("show");
    renderSegment(0);
  }
})();
