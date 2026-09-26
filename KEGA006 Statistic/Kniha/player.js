(() => {
  "use strict";
  const cfg = window.CHAPTER_CONFIG || {};
  const videos = cfg.review || [];
  const quizzes = window.CHAPTER_QUIZZES || [];
  const $ = id => document.getElementById(id);
  const nativeVideo=$('nativeVideo'), driveFrame=$('driveFrame'), missingVideo=$('missingVideo'), missingTitle=$('missingTitle');
  const startOverlay=$('startOverlay'), quizOverlay=$('quizOverlay'), doneOverlay=$('doneOverlay');
  const startBtn=$('startBtn'), restartBtn=$('restartBtn'), questionBtn=$('questionBtn'), backBtn=$('backBtn'), nextBtn=$('nextBtn');
  const quizBadge=$('quizBadge'), question=$('question'), answers=$('answers'), feedback=$('feedback'), visual=$('visual');
  const progressBar=$('progressBar'), progressLabel=$('progressLabel'), scoreLabel=$('scoreLabel'), segmentNumber=$('segmentNumber'), segmentTitle=$('segmentTitle'), status=$('status');
  const quizCard=quizOverlay.querySelector('.quiz-card');
  let segmentIndex=0, passed=new Set(), currentQuizIndex=null, answerLocked=false;
  const hide=el=>el.classList.add('hidden'), show=el=>el.classList.remove('hidden');
  function isPlaceholder(url){return !url || /^VLOZ_/i.test(url) || /^https?:\/\/SEM_/i.test(url);}
  function driveId(url){ if(!url) return null; const m=url.match(/\/d\/([A-Za-z0-9_-]+)/)||url.match(/[?&]id=([A-Za-z0-9_-]+)/); return m?m[1]:null; }
  function stopAllMedia(){ nativeVideo.pause(); nativeVideo.removeAttribute('src'); nativeVideo.load(); driveFrame.src='about:blank'; }
  function updateProgress(){ const total=Math.max(videos.length,1); progressBar.style.width=`${Math.min(100,(segmentIndex/total)*100)}%`; progressLabel.textContent=`Usek ${Math.min(segmentIndex+1,total)} / ${total}`; scoreLabel.textContent=`${passed.size} / ${quizzes.length} checkpointov`; }
  function loadVideo(item){ stopAllMedia(); hide(nativeVideo); hide(driveFrame); hide(missingVideo); const url=item&&item.url; if(isPlaceholder(url)){ missingTitle.textContent=`Dopln link pre ${item?item.key:'segment'}`; show(missingVideo); status.textContent='Video link nie je nastaveny'; return; } const id=driveId(url); if(id){ driveFrame.src=`https://drive.google.com/file/d/${id}/preview`; show(driveFrame); status.textContent='Google Drive video'; } else { nativeVideo.src=url; show(nativeVideo); status.textContent='Video je pripravene'; } }
  function renderSegment(index){ segmentIndex=index; const item=videos[index]; if(!item){finishChapter();return;} startOverlay.classList.remove('show'); quizOverlay.classList.remove('show'); doneOverlay.classList.remove('show'); segmentNumber.textContent=String(index+1).padStart(2,'0'); segmentTitle.textContent=item.title; updateProgress(); loadVideo(item); if(index<quizzes.length){ questionBtn.dataset.action='quiz'; questionBtn.textContent='PO DOPOZERANI: OTAZKA'; show(questionBtn); } else {questionBtn.dataset.action='finish'; questionBtn.textContent='DOKONCIT KAPITOLU'; show(questionBtn);} }
  function showQuiz(index){ if(index<0||index>=quizzes.length)return; const q=quizzes[index]; currentQuizIndex=index; answerLocked=false; stopAllMedia(); hide(nativeVideo); hide(driveFrame); hide(missingVideo); hide(questionBtn); quizBadge.textContent=`CHECKPOINT ${q.checkpoint||index+1} / ${quizzes.length}`; question.textContent=q.question; visual.innerHTML=q.visual||''; quizCard.classList.toggle('no-visual',!q.visual); feedback.textContent=''; feedback.className='feedback'; answers.innerHTML=''; hide(backBtn); hide(nextBtn); q.answers.forEach((text,i)=>{const b=document.createElement('button');b.type='button';b.className='answer';b.textContent=`${i+1}. ${text}`;b.onclick=()=>handleAnswer(i,b);answers.appendChild(b);}); quizOverlay.classList.add('show'); status.textContent='Vyber odpoved'; }
  function handleAnswer(selected,button){ if(answerLocked||currentQuizIndex===null)return; answerLocked=true; answers.querySelectorAll('.answer').forEach(b=>b.disabled=true); const q=quizzes[currentQuizIndex]; if(selected===q.correct){button.classList.add('correct');feedback.textContent=q.ok;feedback.className='feedback ok';passed.add(currentQuizIndex);scoreLabel.textContent=`${passed.size} / ${quizzes.length} checkpointov`;show(nextBtn);hide(backBtn);status.textContent='Spravna odpoved';}else{button.classList.add('wrong');feedback.textContent=q.bad;feedback.className='feedback bad';hide(nextBtn);show(backBtn);status.textContent='Nespravna odpoved';}}
  function finishChapter(){stopAllMedia();hide(nativeVideo);hide(driveFrame);hide(missingVideo);hide(questionBtn);progressBar.style.width='100%';progressLabel.textContent='Kapitola dokoncena';status.textContent='Hotovo';doneOverlay.classList.add('show');}
  questionBtn.onclick=()=>questionBtn.dataset.action==='finish'?finishChapter():showQuiz(segmentIndex);
  backBtn.onclick=()=>{quizOverlay.classList.remove('show');renderSegment(currentQuizIndex);status.textContent='Zopakuj vysvetlenie a skus otazku znova';};
  nextBtn.onclick=()=>{if(currentQuizIndex===null||!passed.has(currentQuizIndex))return;quizOverlay.classList.remove('show');renderSegment(currentQuizIndex+1);};
  startBtn.onclick=()=>{startOverlay.classList.remove('show');renderSegment(0);};
  restartBtn.onclick=()=>{passed=new Set();segmentIndex=0;doneOverlay.classList.remove('show');startOverlay.classList.add('show');updateProgress();status.textContent='Pripravene';};
  nativeVideo.addEventListener('error',()=>status.textContent='Video sa nepodarilo nacitat. Skontroluj video_links.js.');
  updateProgress();
})();