(() => {
  "use strict";

  const BUILD = "kap4-multiquiz-2026-09-26-v6-auto-prev-question";
  const cfg = window.CHAPTER_CONFIG || {};
  const videos = Array.isArray(cfg.review) ? cfg.review : [];
  const quizzes = Array.isArray(window.CHAPTER_QUIZZES) ? window.CHAPTER_QUIZZES : [];

  const groups = new Map();
  quizzes.forEach((q, index) => {
    const checkpoint = Number(q.checkpoint);
    if (!Number.isInteger(checkpoint) || checkpoint < 1) return;
    if (!groups.has(checkpoint)) groups.set(checkpoint, []);
    groups.get(checkpoint).push({ ...q, __index: index });
  });

  const $ = (id) => document.getElementById(id);
  const nativeVideo = $("nativeVideo");
  const driveFrame = $("driveFrame");
  const missingVideo = $("missingVideo");
  const missingTitle = $("missingTitle");
  const startOverlay = $("startOverlay");
  const quizOverlay = $("quizOverlay");
  const doneOverlay = $("doneOverlay");
  const startBtn = $("startBtn");
  const restartBtn = $("restartBtn");
  const questionBtn = $("questionBtn");
  const backBtn = $("backBtn");
  const nextBtn = $("nextBtn");
  const quizBadge = $("quizBadge");
  const question = $("question");
  const answers = $("answers");
  const feedback = $("feedback");
  const visual = $("visual");
  const progressBar = $("progressBar");
  const progressLabel = $("progressLabel");
  const scoreLabel = $("scoreLabel");
  const segmentNumber = $("segmentNumber");
  const segmentTitle = $("segmentTitle");
  const status = $("status");
  const quizCard = quizOverlay.querySelector(".quiz-card");

  let segmentIndex = 0;
  let passed = new Set();
  let currentGroup = [];
  let currentGroupPos = 0;
  let currentQuiz = null;
  let answerLocked = false;

  const hide = (el) => el && el.classList.add("hidden");
  const show = (el) => el && el.classList.remove("hidden");

  function isPlaceholder(url) {
    return !url || /^VLOZ_/i.test(url) || /^https?:\/\/SEM_/i.test(url);
  }

  function driveId(url) {
    if (!url) return null;
    const match = url.match(/\/d\/([A-Za-z0-9_-]+)/) || url.match(/[?&]id=([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  }

  function stopAllMedia() {
    try { nativeVideo.pause(); } catch (_) {}
    nativeVideo.removeAttribute("src");
    try { nativeVideo.load(); } catch (_) {}
    driveFrame.src = "about:blank";
  }

  function updateProgress() {
    const totalSegments = Math.max(videos.length, 1);
    progressBar.style.width = `${Math.min(100, (segmentIndex / totalSegments) * 100)}%`;
    progressLabel.textContent = `Usek ${Math.min(segmentIndex + 1, totalSegments)} / ${totalSegments}`;
    scoreLabel.textContent = `${passed.size} / ${quizzes.length} otázok`;
  }

  function loadVideo(item) {
    stopAllMedia();
    hide(nativeVideo); hide(driveFrame); hide(missingVideo);
    const url = item && item.url;
    if (isPlaceholder(url)) {
      missingTitle.textContent = `Dopln link pre ${item ? item.key : "segment"}`;
      show(missingVideo);
      status.textContent = "Video link nie je nastaveny";
      return;
    }
    const id = driveId(url);
    if (id) {
      driveFrame.src = `https://drive.google.com/file/d/${id}/preview`;
      show(driveFrame);
      status.textContent = "Google Drive video";
    } else {
      nativeVideo.src = url;
      show(nativeVideo);
      status.textContent = "Video je pripravene";
    }
  }

  function renderSegment(index) {
    segmentIndex = index;
    const item = videos[index];
    if (!item) return finishChapter();

    startOverlay.classList.remove("show");
    quizOverlay.classList.remove("show");
    doneOverlay.classList.remove("show");

    segmentNumber.textContent = String(index + 1).padStart(2, "0");
    segmentTitle.textContent = item.title;
    updateProgress();
    loadVideo(item);

    const checkpoint = index + 1;
    const group = groups.get(checkpoint) || [];
    if (group.length) {
      questionBtn.dataset.action = "quiz";
      questionBtn.dataset.checkpoint = String(checkpoint);
      questionBtn.textContent = `PO DOPOZERANI: ${group.length} OTÁZKY`;
    } else {
      questionBtn.dataset.action = "finish";
      delete questionBtn.dataset.checkpoint;
      questionBtn.textContent = "DOKONCIT KAPITOLU";
    }
    show(questionBtn);
  }

  function beginQuizGroup() {
    const checkpoint = segmentIndex + 1;
    currentGroup = (groups.get(checkpoint) || []).slice();
    currentGroupPos = 0;

    if (!currentGroup.length) {
      renderSegment(segmentIndex + 1);
      return;
    }

    showCurrentQuiz();
  }

  function showCurrentQuiz() {
    currentQuiz = currentGroup[currentGroupPos] || null;
    if (!currentQuiz) return;

    answerLocked = false;
    stopAllMedia();
    hide(nativeVideo); hide(driveFrame); hide(missingVideo); hide(questionBtn);

    quizBadge.textContent = `CHECKPOINT ${currentQuiz.checkpoint} · OTÁZKA ${currentGroupPos + 1} / ${currentGroup.length}`;
    question.textContent = currentQuiz.question;
    visual.innerHTML = currentQuiz.visual || "";
    quizCard.classList.toggle("no-visual", !currentQuiz.visual);

    feedback.textContent = "";
    feedback.className = "feedback";
    answers.innerHTML = "";
    hide(backBtn); hide(nextBtn);

    currentQuiz.answers.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.textContent = `${i + 1}. ${text}`;
      btn.addEventListener("click", () => handleAnswer(i, btn));
      answers.appendChild(btn);
    });

    quizOverlay.classList.add("show");
    status.textContent = `Otázka ${currentGroupPos + 1} z ${currentGroup.length}`;
  }

  function handleAnswer(selected, button) {
    if (answerLocked || !currentQuiz) return;
    answerLocked = true;
    answers.querySelectorAll(".answer").forEach((btn) => { btn.disabled = true; });

    if (selected === currentQuiz.correct) {
      button.classList.add("correct");
      feedback.textContent = currentQuiz.ok;
      feedback.className = "feedback ok";
      passed.add(currentQuiz.__index);
      updateProgress();

      const hasMore = currentGroupPos < currentGroup.length - 1;
      nextBtn.textContent = hasMore ? `ĎALŠIA OTÁZKA (${currentGroupPos + 2}/${currentGroup.length}) →` : "ĎALEJ NA VIDEO →";
      show(nextBtn);
      hide(backBtn);
      status.textContent = hasMore ? "Správne · pokračuj ďalšou otázkou" : "Checkpoint splnený";
    } else {
      button.classList.add("wrong");
      feedback.textContent = currentQuiz.bad;
      feedback.className = "feedback bad";
      hide(nextBtn);
      hide(backBtn);

      const targetPos = currentGroupPos > 0 ? currentGroupPos - 1 : 0;
      status.textContent = currentGroupPos > 0
        ? `Nesprávne · návrat na otázku ${targetPos + 1}`
        : "Nesprávne · prvá otázka sa zopakuje";

      window.setTimeout(() => {
        currentGroupPos = targetPos;
        showCurrentQuiz();
      }, 700);
    }
  }

  function advanceFromQuiz() {
    if (!currentQuiz || !passed.has(currentQuiz.__index)) return;

    if (currentGroupPos < currentGroup.length - 1) {
      currentGroupPos += 1;
      showCurrentQuiz();
      return;
    }

    const allPassed = currentGroup.every((q) => passed.has(q.__index));
    if (!allPassed) {
      currentGroupPos = currentGroup.findIndex((q) => !passed.has(q.__index));
      if (currentGroupPos < 0) currentGroupPos = 0;
      showCurrentQuiz();
      return;
    }

    quizOverlay.classList.remove("show");
    renderSegment(segmentIndex + 1);
  }

  function finishChapter() {
    stopAllMedia();
    hide(nativeVideo); hide(driveFrame); hide(missingVideo); hide(questionBtn);
    progressBar.style.width = "100%";
    progressLabel.textContent = "Kapitola dokoncena";
    status.textContent = "Hotovo";
    doneOverlay.classList.add("show");
  }

  questionBtn.addEventListener("click", () => {
    if (questionBtn.dataset.action === "finish") finishChapter();
    else beginQuizGroup();
  });

  nextBtn.addEventListener("click", advanceFromQuiz);
  startBtn.addEventListener("click", () => renderSegment(0));
  restartBtn.addEventListener("click", () => {
    passed = new Set();
    segmentIndex = 0;
    currentGroup = [];
    currentGroupPos = 0;
    currentQuiz = null;
    doneOverlay.classList.remove("show");
    startOverlay.classList.add("show");
    updateProgress();
    status.textContent = "Pripravene";
  });

  nativeVideo.addEventListener("error", () => {
    status.textContent = "Video sa nepodarilo nacitat. Skontroluj video_links.js.";
  });

  document.documentElement.dataset.kap4Build = BUILD;
  updateProgress();
})();
