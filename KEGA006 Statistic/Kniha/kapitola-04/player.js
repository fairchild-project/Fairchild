(() => {
  "use strict";
  const cfg = window.CHAPTER_CONFIG || {};
  const videos = cfg.review || [];
  const quizzes = window.CHAPTER_QUIZZES || [];
  const groups = new Map();
  quizzes.forEach((q, i) => {
    const cp = Number(q.checkpoint || 1);
    if (!groups.has(cp)) groups.set(cp, []);
    groups.get(cp).push({ ...q, __index: i });
  });

  const $ = id => document.getElementById(id);
  const nativeVideo=$('nativeVideo'), driveFrame=$('driveFrame'), missingVideo=$('missingVideo'), missingTitle=$('missingTitle');
  const startOverlay=$('startOverlay'), quizOverlay=$('quizOverlay'), doneOverlay=$('doneOverlay');
  const startBtn=$('startBtn'), restartBtn=$('restartBtn'), questionBtn=$('questionBtn'), backBtn=$('backBtn'), nextBtn=$('nextBtn');
  const quizBadge=$('quizBadge'), question=$('question'), answers=$('answers'), feedback=$('feedback'), visual=$('visual');
  const progressBar=$('progressBar'), progressLabel=$('progressLabel'), scoreLabel=$('scoreLabel'), segmentNumber=$('segmentNumber'), segmentTitle=$('segmentTitle'), status=$('status');
  const quizCard=quizOverlay.querySelector('.quiz-card');

  let segmentIndex=0;
  let passed=new Set();
  let currentGroup=[];
  let currentGroupPos=0;
  let currentQuiz=null;
  let answerLocked=false;

  const hide=el=>el.classList.add('hidden');
  const show=el=>el.classList.remove('hidden');
  function isPlaceholder(url){return !url || /^VLOZ_/i.test(url) || /^https?:\/\/SEM_/i.test(url);}
  function driveId(url){if(!url)return null;const m=url.match(/\/d\/([A-Za-z0-9_-]+)/)||url.match(/[?&]id=([A-Za-z0-9_-]+)/);return m?m[1]:null;}
  function stopAllMedia(){nativeVideo.pause();nativeVideo.removeAttribute('src');nativeVideo.load();driveFrame.src='about:blank';}
  function updateProgress(){
    const total=Math.max(videos.length,1);
    progressBar.style.width=`${Math.min(100,(segmentIndex/total)*100)}%`;
    progressLabel.textContent=`Usek ${Math.min(segmentIndex+1,total)} / ${total}`;
    scoreLabel.textContent=`${passed.size} / ${quizzes.length} otázok`;
  }
  function loadVideo(item){
    stopAllMedia();hide(nativeVideo);hide(driveFrame);hide(missingVideo);
    const url=item&&item.url;
    if(isPlaceholder(url)){missingTitle.textContent=`Dopln link pre ${item?item.key:'segment'}`;show(missingVideo);status.textContent='Video link nie je nastaveny';return;}
    const id=driveId(url);
    if(id){driveFrame.src=`https://drive.google.com/file/d/${id}/preview`;show(driveFrame);status.textContent='Google Drive video';}
    else{nativeVideo.src=url;show(nativeVideo);status.textContent='Video je pripravene';}
  }
  function renderSegment(index){
    segmentIndex=index;
    const item=videos[index];
    if(!item){finishChapter();return;}
    startOverlay.classList.remove('show');quizOverlay.classList.remove('show');doneOverlay.classList.remove('show');
    segmentNumber.textContent=String(index+1).padStart(2,'0');segmentTitle.textContent=item.title;updateProgress();loadVideo(item);
    const cp=index+1;
    if(groups.has(cp)){
      questionBtn.dataset.action='quiz';
      const count=groups.get(cp).length;
      questionBtn.textContent=`PO DOPOZERANI: ${count} OTÁZKY`;
      show(questionBtn);
    }else{
      questionBtn.dataset.action='finish';questionBtn.textContent='DOKONCIT KAPITOLU';show(questionBtn);
    }
  }
  function showQuizGroupForSegment(){
    const cp=segmentIndex+1;
    currentGroup=groups.get(cp)||[];
    currentGroupPos=0;
    if(!currentGroup.length){renderSegment(segmentIndex+1);return;}
    showCurrentQuiz();
  }
  function showCurrentQuiz(){
    currentQuiz=currentGroup[currentGroupPos];
    if(!currentQuiz)return;
    answerLocked=false;
    stopAllMedia();hide(nativeVideo);hide(driveFrame);hide(missingVideo);hide(questionBtn);
    const cp=currentQuiz.checkpoint;
    quizBadge.textContent=`CHECKPOINT ${cp} · OTÁZKA ${currentGroupPos+1} / ${currentGroup.length}`;
    question.textContent=currentQuiz.question;
    visual.innerHTML=currentQuiz.visual||'';
    quizCard.classList.toggle('no-visual',!currentQuiz.visual);
    feedback.textContent='';feedback.className='feedback';answers.innerHTML='';hide(backBtn);hide(nextBtn);
    currentQuiz.answers.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=`${i+1}. ${text}`;b.onclick=()=>handleAnswer(i,b);answers.appendChild(b);});
    quizOverlay.classList.add('show');status.textContent='Vyber odpoved';
  }
  function handleAnswer(selected,button){
    if(answerLocked||!currentQuiz)return;
    answerLocked=true;answers.querySelectorAll('.answer').forEach(b=>b.disabled=true);
    if(selected===currentQuiz.correct){
      button.classList.add('correct');feedback.textContent=currentQuiz.ok;feedback.className='feedback ok';passed.add(currentQuiz.__index);updateProgress();
      nextBtn.textContent=currentGroupPos<currentGroup.length-1?'ĎALŠIA OTÁZKA →':'ĎALEJ →';show(nextBtn);hide(backBtn);status.textContent='Spravna odpoved';
    }else{
      button.classList.add('wrong');feedback.textContent=currentQuiz.bad;feedback.className='feedback bad';hide(nextBtn);show(backBtn);status.textContent='Nespravna odpoved';
    }
  }
  function finishChapter(){stopAllMedia();hide(nativeVideo);hide(driveFrame);hide(missingVideo);hide(questionBtn);progressBar.style.width='100%';progressLabel.textContent='Kapitola dokoncena';status.textContent='Hotovo';doneOverlay.classList.add('show');}
  questionBtn.onclick=()=>questionBtn.dataset.action==='finish'?finishChapter():showQuizGroupForSegment();
  backBtn.onclick=()=>{quizOverlay.classList.remove('show');renderSegment(segmentIndex);status.textContent='Zopakuj vysvetlenie a skus otazku znova';};
  nextBtn.onclick=()=>{
    if(!currentQuiz||!passed.has(currentQuiz.__index))return;
    if(currentGroupPos<currentGroup.length-1){currentGroupPos++;showCurrentQuiz();}
    else{quizOverlay.classList.remove('show');renderSegment(segmentIndex+1);}
  };
  startBtn.onclick=()=>{startOverlay.classList.remove('show');renderSegment(0);};
  restartBtn.onclick=()=>{passed=new Set();segmentIndex=0;doneOverlay.classList.remove('show');startOverlay.classList.add('show');updateProgress();status.textContent='Pripravene';};
  nativeVideo.addEventListener('error',()=>status.textContent='Video sa nepodarilo nacitat. Skontroluj video_links.js.');
  updateProgress();
})();
