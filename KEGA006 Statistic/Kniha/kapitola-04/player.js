(() => {
  "use strict";

  const BUILD = "kap4-multiquiz-2026-09-26-v8-state-machine";
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

  const $ = id => document.getElementById(id);
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

  const state = {
    mode: "start", // start | video | quiz | done
    segmentIndex: 0,
    group: [],
    groupPos: 0,
    passed: new Set(),
    locked: false
  };

  const hide = el => el && el.classList.add("hidden");
  const show = el => el && el.classList.remove("hidden");

  function isPlaceholder(url) {
    return !url || /^VLOZ_/i.test(url) || /^https?:\/\/SEM_/i.test(url);
  }

  function driveId(url) {
    if (!url) return null;
    const m = url.match(/\/d\/([A-Za-z0-9_-]+)/) || url.match(/[?&]id=([A-Za-z0-9_-]+)/);
    return m ? m[1] : null;
  }

  function stopAllMedia() {
    try { nativeVideo.pause(); } catch (_) {}
    nativeVideo.removeAttribute("src");
    try { nativeVideo.load(); } catch (_) {}
    driveFrame.src = "about:blank";
    hide(nativeVideo); hide(driveFrame); hide(missingVideo);
  }

  function updateProgress() {
    const total = Math.max(videos.length, 1);
    progressBar.style.width = `${Math.min(100, (state.segmentIndex / total) * 100)}%`;
    progressLabel.textContent = state.mode === "done"
      ? "Kapitola dokoncena"
      : `Usek ${Math.min(state.segmentIndex + 1, total)} / ${total}`;
    scoreLabel.textContent = `${state.passed.size} / ${quizzes.length} otázok`;
  }

  function loadVideo(item) {
    stopAllMedia();
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
    // Jedina cesta sem z quizu je po uspesnom absolvovani CELEJ skupiny.
    state.mode = "video";
    state.segmentIndex = index;
    state.group = [];
    state.groupPos = 0;
    state.locked = false;

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
      questionBtn.textContent = `PO DOPOZERANI: ${group.length} OTÁZKY`;
    } else {
      questionBtn.dataset.action = "finish";
      questionBtn.textContent = "DOKONCIT KAPITOLU";
    }
    show(questionBtn);
  }

  function beginQuizGroup() {
    const checkpoint = state.segmentIndex + 1;
    state.group = (groups.get(checkpoint) || []).slice();
    state.groupPos = 0;
    state.mode = "quiz";
    if (!state.group.length) return renderSegment(state.segmentIndex + 1);
    renderQuiz();
  }

  function renderQuiz(message = "") {
    state.mode = "quiz";
    state.locked = false;
    const q = state.group[state.groupPos];
    if (!q) return;

    stopAllMedia();
    hide(questionBtn);
    hide(backBtn);
    hide(nextBtn);

    quizOverlay.classList.add("show");
    quizBadge.textContent = `CHECKPOINT ${q.checkpoint} · OTÁZKA ${state.groupPos + 1} / ${state.group.length}`;
    question.textContent = q.question;
    visual.innerHTML = q.visual || "";
    quizCard.classList.toggle("no-visual", !q.visual);
    feedback.textContent = message;
    feedback.className = message ? "feedback bad" : "feedback";
    answers.innerHTML = "";

    q.answers.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer";
      btn.textContent = `${i + 1}. ${text}`;
      btn.onclick = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (typeof ev.stopImmediatePropagation === "function") ev.stopImmediatePropagation();
        handleAnswer(i, btn);
        return false;
      };
      answers.appendChild(btn);
    });

    status.textContent = `Otázka ${state.groupPos + 1} z ${state.group.length}`;
  }

  function handleAnswer(selected, button) {
    if (state.mode !== "quiz" || state.locked) return;
    const q = state.group[state.groupPos];
    if (!q) return;

    state.locked = true;
    answers.querySelectorAll(".answer").forEach(b => { b.disabled = true; });

    if (selected === q.correct) {
      button.classList.add("correct");
      feedback.textContent = q.ok;
      feedback.className = "feedback ok";
      state.passed.add(q.__index);
      updateProgress();
      nextBtn.textContent = state.groupPos < state.group.length - 1
        ? `ĎALŠIA OTÁZKA (${state.groupPos + 2}/${state.group.length}) →`
        : "DOKONČIŤ CHECKPOINT →";
      show(nextBtn);
      status.textContent = "Správna odpoveď";
      return;
    }

    // NESPRAVNA ODPOVED: nikdy video.
    // Q2/Q3 -> predchadzajuca otazka; Q1 -> Q1 znova.
    button.classList.add("wrong");
    const failedPos = state.groupPos;
    const prevPos = Math.max(0, failedPos - 1);
    state.passed.delete(q.__index);
    const prevQ = state.group[prevPos];
    if (prevQ) state.passed.delete(prevQ.__index);
    state.groupPos = prevPos;
    updateProgress();

    // Vykreslime predchadzajucu otazku synchronne, stale v quiz mode.
    renderQuiz(failedPos === 0
      ? "Nesprávne. Zopakuj túto otázku."
      : `Nesprávne. Vrátil si sa na otázku ${prevPos + 1}.`);
  }

  function advanceQuiz(ev) {
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      if (typeof ev.stopImmediatePropagation === "function") ev.stopImmediatePropagation();
    }
    if (state.mode !== "quiz") return false;
    const q = state.group[state.groupPos];
    if (!q || !state.passed.has(q.__index)) return false;

    if (state.groupPos < state.group.length - 1) {
      state.groupPos += 1;
      renderQuiz();
      return false;
    }

    const allPassed = state.group.every(item => state.passed.has(item.__index));
    if (!allPassed) {
      const firstMissing = state.group.findIndex(item => !state.passed.has(item.__index));
      state.groupPos = firstMissing >= 0 ? firstMissing : 0;
      renderQuiz("Najprv dokonči všetky otázky checkpointu.");
      return false;
    }

    // Az tu sa smie vratit video: cely checkpoint je hotovy.
    renderSegment(state.segmentIndex + 1);
    return false;
  }

  function finishChapter() {
    state.mode = "done";
    stopAllMedia();
    hide(questionBtn);
    quizOverlay.classList.remove("show");
    progressBar.style.width = "100%";
    progressLabel.textContent = "Kapitola dokoncena";
    status.textContent = "Hotovo";
    doneOverlay.classList.add("show");
  }

  // Zablokuje nahodne/bublajuce kliky z quizu, aby ich nemohol zachytit stage/player.
  quizOverlay.addEventListener("click", (ev) => {
    if (state.mode === "quiz") ev.stopPropagation();
  }, true);

  questionBtn.onclick = (ev) => {
    ev.preventDefault(); ev.stopPropagation();
    if (questionBtn.dataset.action === "finish") finishChapter();
    else beginQuizGroup();
    return false;
  };
  nextBtn.onclick = advanceQuiz;
  if (backBtn) backBtn.onclick = (ev) => { ev.preventDefault(); ev.stopPropagation(); return false; };
  startBtn.onclick = (ev) => { ev.preventDefault(); renderSegment(0); return false; };
  restartBtn.onclick = (ev) => {
    ev.preventDefault();
    state.mode = "start";
    state.segmentIndex = 0;
    state.group = [];
    state.groupPos = 0;
    state.passed = new Set();
    state.locked = false;
    doneOverlay.classList.remove("show");
    quizOverlay.classList.remove("show");
    startOverlay.classList.add("show");
    stopAllMedia();
    updateProgress();
    status.textContent = "Pripravene";
    return false;
  };

  nativeVideo.addEventListener("error", () => {
    if (state.mode === "video") status.textContent = "Video sa nepodarilo nacitat. Skontroluj video_links.js.";
  });

  document.documentElement.dataset.kap4Build = BUILD;
  updateProgress();
})();
