(() => {
  "use strict";

  const cfg = window.CHAPTER_CONFIG || {};
  const videos = Array.isArray(cfg.review) ? cfg.review : [];
  const quizzes = Array.isArray(window.CHAPTER_QUIZZES) ? window.CHAPTER_QUIZZES : [];
  const groups = new Map();
  quizzes.forEach((q, index) => {
    const cp = Number(q.checkpoint);
    if (!groups.has(cp)) groups.set(cp, []);
    groups.get(cp).push({ ...q, __index: index });
  });

  const $ = id => document.getElementById(id);
  const nativeVideo = $("nativeVideo"), driveFrame = $("driveFrame"), missingVideo = $("missingVideo"), missingTitle = $("missingTitle");
  const startOverlay = $("startOverlay"), quizOverlay = $("quizOverlay"), doneOverlay = $("doneOverlay");
  const startBtn = $("startBtn"), restartBtn = $("restartBtn"), questionBtn = $("questionBtn"), nextBtn = $("nextBtn");
  const quizBadge = $("quizBadge"), question = $("question"), answers = $("answers"), feedback = $("feedback"), visual = $("visual");
  const progressBar = $("progressBar"), progressLabel = $("progressLabel"), scoreLabel = $("scoreLabel"), segmentNumber = $("segmentNumber"), segmentTitle = $("segmentTitle"), status = $("status");

  const state = { mode: "start", segmentIndex: 0, group: [], pos: 0, passed: new Set(), locked: false };
  const hide = el => el && el.classList.add("hidden");
  const show = el => el && el.classList.remove("hidden");

  function isPlaceholder(url){ return !url || /^VLOZ_/i.test(url) || /^https?:\/\/SEM_/i.test(url); }
  function driveId(url){ if(!url) return null; const m=url.match(/\/d\/([A-Za-z0-9_-]+)/)||url.match(/[?&]id=([A-Za-z0-9_-]+)/); return m?m[1]:null; }
  function stopMedia(){ try{nativeVideo.pause();}catch(_){} nativeVideo.removeAttribute("src"); try{nativeVideo.load();}catch(_){} driveFrame.src="about:blank"; hide(nativeVideo); hide(driveFrame); hide(missingVideo); }

  function updateProgress(){
    const total=Math.max(videos.length,1);
    progressBar.style.width=`${Math.min(100,(state.segmentIndex/total)*100)}%`;
    progressLabel.textContent=state.mode==="done"?"Kapitola dokončená":`Úsek ${Math.min(state.segmentIndex+1,total)} / ${total}`;
    scoreLabel.textContent=`${state.passed.size} / ${quizzes.length} otázok`;
  }

  function loadVideo(item){
    stopMedia();
    const url=item&&item.url;
    if(isPlaceholder(url)){ missingTitle.textContent=`Doplň link pre ${item?item.key:"segment"}`; show(missingVideo); status.textContent="Video link nie je nastavený"; return; }
    const id=driveId(url);
    if(id){ driveFrame.src=`https://drive.google.com/file/d/${id}/preview`; show(driveFrame); status.textContent="Google Drive video"; }
    else { nativeVideo.src=url; show(nativeVideo); status.textContent="Video je pripravené"; }
  }

  function renderSegment(index){
    state.mode="video";
    state.segmentIndex=index;
    state.group=[];
    state.pos=0;
    state.locked=false;
    const item=videos[index];
    if(!item){ finishChapter(); return; }
    startOverlay.classList.remove("show"); quizOverlay.classList.remove("show"); doneOverlay.classList.remove("show");
    segmentNumber.textContent=String(index+1).padStart(2,"0");
    segmentTitle.textContent=item.title;
    updateProgress();
    loadVideo(item);
    const group=groups.get(index+1)||[];
    if(group.length){ questionBtn.dataset.action="quiz"; questionBtn.textContent=`PO DOPOZERANÍ: ${group.length} OTÁZKY`; }
    else { questionBtn.dataset.action="finish"; questionBtn.textContent="DOKONČIŤ KAPITOLU"; }
    show(questionBtn);
  }

  function beginQuiz(){
    state.group=(groups.get(state.segmentIndex+1)||[]).slice();
    state.pos=0;
    state.mode="quiz";
    if(!state.group.length){ renderSegment(state.segmentIndex+1); return; }
    renderQuestion("");
  }

  function renderQuestion(message){
    state.mode="quiz";
    state.locked=false;
    const q=state.group[state.pos];
    if(!q) return;
    stopMedia();
    hide(questionBtn); hide(nextBtn);
    quizOverlay.classList.add("show");
    quizBadge.textContent=`CHECKPOINT ${q.checkpoint} · OTÁZKA ${state.pos+1} / ${state.group.length}`;
    question.textContent=q.question;
    visual.innerHTML=q.visual||"";
    feedback.textContent=message||"";
    feedback.className=message?"feedback bad":"feedback";
    answers.innerHTML="";
    q.answers.forEach((text,i)=>{
      const b=document.createElement("button");
      b.type="button";
      b.className="answer";
      b.textContent=`${i+1}. ${text}`;
      b.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        if(typeof ev.stopImmediatePropagation==="function") ev.stopImmediatePropagation();
        handleAnswer(i,b);
      },true);
      answers.appendChild(b);
    });
    status.textContent=`Otázka ${state.pos+1} z ${state.group.length}`;
  }

  function handleAnswer(selected,button){
    if(state.mode!=="quiz"||state.locked) return;
    const q=state.group[state.pos];
    if(!q) return;
    state.locked=true;
    answers.querySelectorAll(".answer").forEach(b=>b.disabled=true);

    if(selected===q.correct){
      button.classList.add("correct");
      feedback.textContent=q.ok;
      feedback.className="feedback ok";
      state.passed.add(q.__index);
      updateProgress();
      nextBtn.textContent=state.pos<state.group.length-1?"ĎALŠIA OTÁZKA →":"DOKONČIŤ CHECKPOINT →";
      show(nextBtn);
      status.textContent="Správna odpoveď";
      return;
    }

    // Zlá odpoveď: NIKDY nevolá renderSegment ani loadVideo.
    button.classList.add("wrong");
    const failed=state.pos;
    const target=Math.max(0,failed-1);
    state.passed.delete(q.__index);
    if(state.group[target]) state.passed.delete(state.group[target].__index);
    state.pos=target;
    updateProgress();
    renderQuestion(failed===0
      ? "NESPRÁVNA ODPOVEĎ — skús túto otázku ešte raz."
      : `NESPRÁVNA ODPOVEĎ — vraciaš sa na otázku ${target+1}.`);
  }

  function nextQuestion(ev){
    ev.preventDefault(); ev.stopPropagation();
    if(typeof ev.stopImmediatePropagation==="function") ev.stopImmediatePropagation();
    if(state.mode!=="quiz") return;
    const q=state.group[state.pos];
    if(!q||!state.passed.has(q.__index)) return;
    if(state.pos<state.group.length-1){ state.pos++; renderQuestion(""); return; }
    const complete=state.group.every(item=>state.passed.has(item.__index));
    if(!complete){ const missing=state.group.findIndex(item=>!state.passed.has(item.__index)); state.pos=missing<0?0:missing; renderQuestion("Najprv správne dokonči všetky otázky tejto série."); return; }
    quizOverlay.classList.remove("show");
    renderSegment(state.segmentIndex+1);
  }

  function finishChapter(){ state.mode="done"; stopMedia(); hide(questionBtn); quizOverlay.classList.remove("show"); progressBar.style.width="100%"; progressLabel.textContent="Kapitola dokončená"; status.textContent="Hotovo"; doneOverlay.classList.add("show"); }

  questionBtn.addEventListener("click",ev=>{ ev.preventDefault(); ev.stopPropagation(); questionBtn.dataset.action==="finish"?finishChapter():beginQuiz(); },true);
  nextBtn.addEventListener("click",nextQuestion,true);
  startBtn.addEventListener("click",ev=>{ ev.preventDefault(); startOverlay.classList.remove("show"); renderSegment(0); },true);
  restartBtn.addEventListener("click",ev=>{ ev.preventDefault(); state.mode="start"; state.segmentIndex=0; state.group=[]; state.pos=0; state.passed=new Set(); state.locked=false; doneOverlay.classList.remove("show"); startOverlay.classList.add("show"); updateProgress(); status.textContent="Pripravené"; },true);
  nativeVideo.addEventListener("error",()=>status.textContent="Video sa nepodarilo načítať. Skontroluj video_links.js.");
  updateProgress();
})();
