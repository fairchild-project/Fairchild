(() => {
  "use strict";

  const cfg = window.CHAPTER_CONFIG || {};
  const videos = Array.isArray(cfg.review) ? cfg.review : [];
  const groups = Array.isArray(window.CHAPTER_QUIZ_GROUPS) ? window.CHAPTER_QUIZ_GROUPS : [];
  const totalQuestions = groups.reduce((sum, g) => sum + ((g.questions || []).length), 0);

  const $ = id => document.getElementById(id);
  const nativeVideo = $("nativeVideo"), driveFrame = $("driveFrame"), missingVideo = $("missingVideo"), missingTitle = $("missingTitle");
  const startOverlay = $("startOverlay"), quizOverlay = $("quizOverlay"), doneOverlay = $("doneOverlay");
  const startBtn = $("startBtn"), restartBtn = $("restartBtn"), questionBtn = $("questionBtn"), nextBtn = $("nextBtn");
  const quizBadge = $("quizBadge"), question = $("question"), answers = $("answers"), feedback = $("feedback"), visual = $("visual");
  const progressBar = $("progressBar"), progressLabel = $("progressLabel"), scoreLabel = $("scoreLabel"), segmentNumber = $("segmentNumber"), segmentTitle = $("segmentTitle"), status = $("status");

  const state = {
    mode: "start",
    segmentIndex: 0,
    groupIndex: null,
    pos: 0,
    passed: new Set(),
    locked: false
  };

  const hide = el => el && el.classList.add("hidden");
  const show = el => el && el.classList.remove("hidden");
  const keyFor = (g, p) => `${g}:${p}`;

  function isPlaceholder(url) {
    return !url || /^VLOZ_/i.test(url) || /^https?:\/\/SEM_/i.test(url);
  }

  function driveId(url) {
    if (!url) return null;
    const m = url.match(/\/d\/([A-Za-z0-9_-]+)/) || url.match(/[?&]id=([A-Za-z0-9_-]+)/);
    return m ? m[1] : null;
  }

  function stopMedia() {
    try { nativeVideo.pause(); } catch (_) {}
    nativeVideo.removeAttribute("src");
    try { nativeVideo.load(); } catch (_) {}
    driveFrame.src = "about:blank";
    hide(nativeVideo); hide(driveFrame); hide(missingVideo);
  }

  function updateProgress() {
    const totalSegments = Math.max(videos.length, 1);
    progressBar.style.width = `${Math.min(100, (state.segmentIndex / totalSegments) * 100)}%`;
    progressLabel.textContent = state.mode === "done"
      ? "Kapitola dokončená"
      : `Úsek ${Math.min(state.segmentIndex + 1, totalSegments)} / ${totalSegments}`;
    scoreLabel.textContent = `${state.passed.size} / ${totalQuestions} otázok`;
  }

  function loadVideo(item) {
    stopMedia();
    const url = item && item.url;
    if (isPlaceholder(url)) {
      missingTitle.textContent = `Doplň link pre ${item ? item.key : "segment"}`;
      show(missingVideo);
      status.textContent = "Video link nie je nastavený";
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
      status.textContent = "Video je pripravené";
    }
  }

  function renderSegment(index) {
    state.mode = "video";
    state.segmentIndex = index;
    state.groupIndex = null;
    state.pos = 0;
    state.locked = false;

    const item = videos[index];
    if (!item) { finishChapter(); return; }

    startOverlay.classList.remove("show");
    quizOverlay.classList.remove("show");
    doneOverlay.classList.remove("show");
    segmentNumber.textContent = String(index + 1).padStart(2, "0");
    segmentTitle.textContent = item.title;
    updateProgress();
    loadVideo(item);

    const group = groups.find(g => Number(g.checkpoint) === index + 1);
    if (group && (group.questions || []).length) {
      const count = group.questions.length;
      questionBtn.dataset.action = "quiz";
      questionBtn.textContent = `PO DOPOZERANÍ: ${count} OTÁZKY`;
    } else {
      questionBtn.dataset.action = "finish";
      questionBtn.textContent = "DOKONČIŤ KAPITOLU";
    }
    show(questionBtn);
  }

  function beginQuiz() {
    const groupIndex = groups.findIndex(g => Number(g.checkpoint) === state.segmentIndex + 1);
    if (groupIndex < 0) { renderSegment(state.segmentIndex + 1); return; }
    state.groupIndex = groupIndex;
    state.pos = 0;
    state.mode = "quiz";
    renderQuestion("");
  }

  function renderQuestion(message) {
    state.mode = "quiz";
    state.locked = false;
    const group = groups[state.groupIndex];
    const qs = (group && group.questions) || [];
    const q = qs[state.pos];
    if (!q) return;

    stopMedia();
    hide(questionBtn); hide(nextBtn);
    quizOverlay.classList.add("show");
    quizBadge.textContent = `CHECKPOINT ${group.checkpoint} · OTÁZKA ${state.pos + 1} / ${qs.length}`;
    question.textContent = q.question;
    visual.innerHTML = q.visual || "";
    feedback.textContent = message || "";
    feedback.className = message ? "feedback bad" : "feedback";
    answers.innerHTML = "";

    q.answers.forEach((text, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "answer";
      b.textContent = `${i + 1}. ${text}`;
      b.addEventListener("click", ev => {
        ev.preventDefault();
        ev.stopPropagation();
        if (typeof ev.stopImmediatePropagation === "function") ev.stopImmediatePropagation();
        handleAnswer(i, b);
      }, true);
      answers.appendChild(b);
    });
    status.textContent = `Otázka ${state.pos + 1} z ${qs.length}`;
  }

  function handleAnswer(selected, button) {
    if (state.mode !== "quiz" || state.locked) return;
    const group = groups[state.groupIndex];
    const qs = group.questions || [];
    const q = qs[state.pos];
    if (!q) return;

    state.locked = true;
    answers.querySelectorAll(".answer").forEach(b => b.disabled = true);

    const currentKey = keyFor(state.groupIndex, state.pos);
    if (selected === q.correct) {
      button.classList.add("correct");
      feedback.textContent = q.ok;
      feedback.className = "feedback ok";
      state.passed.add(currentKey);
      updateProgress();
      nextBtn.textContent = state.pos < qs.length - 1 ? "ĎALŠIA OTÁZKA →" : "ĎALEJ NA VIDEO →";
      show(nextBtn);
      status.textContent = "Správna odpoveď";
      return;
    }

    button.classList.add("wrong");
    feedback.textContent = "NESPRÁVNA ODPOVEĎ";
    feedback.className = "feedback bad";
    status.textContent = "Nesprávna odpoveď";

    const failedPos = state.pos;
    const target = Math.max(0, failedPos - 1);
    state.passed.delete(currentKey);
    state.passed.delete(keyFor(state.groupIndex, target));
    updateProgress();

    window.setTimeout(() => {
      if (state.mode !== "quiz") return;
      state.pos = target;
      renderQuestion(failedPos === 0
        ? "NESPRÁVNA ODPOVEĎ — skús túto otázku ešte raz."
        : `NESPRÁVNA ODPOVEĎ — vraciaš sa na otázku ${target + 1}.`);
    }, 1200);
  }

  function nextQuestion(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (typeof ev.stopImmediatePropagation === "function") ev.stopImmediatePropagation();
    if (state.mode !== "quiz") return;

    const group = groups[state.groupIndex];
    const qs = group.questions || [];
    const currentKey = keyFor(state.groupIndex, state.pos);
    if (!state.passed.has(currentKey)) return;

    if (state.pos < qs.length - 1) {
      state.pos++;
      renderQuestion("");
      return;
    }

    const complete = qs.every((_, pos) => state.passed.has(keyFor(state.groupIndex, pos)));
    if (!complete) {
      const missing = qs.findIndex((_, pos) => !state.passed.has(keyFor(state.groupIndex, pos)));
      state.pos = missing < 0 ? 0 : missing;
      renderQuestion("Najprv správne dokonči všetky otázky tejto série.");
      return;
    }

    quizOverlay.classList.remove("show");
    renderSegment(state.segmentIndex + 1);
  }

  function finishChapter() {
    state.mode = "done";
    stopMedia();
    hide(questionBtn);
    quizOverlay.classList.remove("show");
    progressBar.style.width = "100%";
    progressLabel.textContent = "Kapitola dokončená";
    status.textContent = "Hotovo";
    doneOverlay.classList.add("show");
  }

  questionBtn.addEventListener("click", ev => {
    ev.preventDefault(); ev.stopPropagation();
    questionBtn.dataset.action === "finish" ? finishChapter() : beginQuiz();
  }, true);
  nextBtn.addEventListener("click", nextQuestion, true);
  startBtn.addEventListener("click", ev => {
    ev.preventDefault();
    startOverlay.classList.remove("show");
    renderSegment(0);
  }, true);
  restartBtn.addEventListener("click", ev => {
    ev.preventDefault();
    state.mode = "start";
    state.segmentIndex = 0;
    state.groupIndex = null;
    state.pos = 0;
    state.passed = new Set();
    state.locked = false;
    doneOverlay.classList.remove("show");
    startOverlay.classList.add("show");
    updateProgress();
    status.textContent = "Pripravené";
  }, true);

  nativeVideo.addEventListener("error", () => status.textContent = "Video sa nepodarilo načítať. Skontroluj video_links.js.");
  updateProgress();
})();
