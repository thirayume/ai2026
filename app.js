'use strict';
const $ = (id) => document.getElementById(id);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
function on(id, event, fn){ const el=$(id); if(el) el.addEventListener(event,fn); }
function showToast(msg){ const t=$('toast'); if(!t)return; t.textContent=msg; t.classList.add('show'); clearTimeout(showToast._t); showToast._t=setTimeout(()=>t.classList.remove('show'),2200); }
function escapeHtml(s=''){ return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

/* ---------- Navigation ---------- */
function switchView(target){
  $$('.nav-btn').forEach(b=>{
    const active=b.dataset.target===target;
    b.classList.toggle('active',active);
    if(active) b.setAttribute('aria-current','page'); else b.removeAttribute('aria-current');
  });
  $$('.view').forEach(v=>v.classList.toggle('active',v.id===target));
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({top:0,behavior:reduced?'auto':'smooth'});
  history.replaceState(null,'','#'+target.replace('-view',''));
}
$$('.nav-btn,.brand-button,.quick-nav').forEach(btn=>btn.addEventListener('click',()=>{
  const target=btn.dataset.target; if(target) switchView(target);
  if(btn.dataset.openDoc){ setTimeout(()=>openDocumentByFile(btn.dataset.openDoc,btn.dataset.find||''),50); }
}));

/* ---------- Audio ---------- */
let audioCtx;
function playSound(type){
  try{
    audioCtx ||= new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==='suspended') audioCtx.resume();
    const osc=audioCtx.createOscillator(), gain=audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination);
    if(type==='correct'){osc.type='sine';osc.frequency.setValueAtTime(587.33,audioCtx.currentTime);osc.frequency.exponentialRampToValueAtTime(880,audioCtx.currentTime+.15);gain.gain.setValueAtTime(.25,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.01,audioCtx.currentTime+.3);osc.start();osc.stop(audioCtx.currentTime+.3);}
    else{osc.type='sawtooth';osc.frequency.setValueAtTime(160,audioCtx.currentTime);osc.frequency.linearRampToValueAtTime(110,audioCtx.currentTime+.25);gain.gain.setValueAtTime(.2,audioCtx.currentTime);gain.gain.exponentialRampToValueAtTime(.01,audioCtx.currentTime+.25);osc.start();osc.stop(audioCtx.currentTime+.25);}
  }catch(e){}
}

/* ---------- Day 0 Mission Progress ---------- */
const PROGRESS_KEY='ai-workshop-day0-progress-v1';
function loadMissionProgress(){
  let saved={}; try{saved=JSON.parse(localStorage.getItem(PROGRESS_KEY)||'{}')}catch(e){}
  $$('.mission-check').forEach(cb=>{ cb.checked=!!saved[cb.dataset.mission]; cb.closest('.mission-card')?.classList.toggle('completed',cb.checked); cb.addEventListener('change',()=>{ saved[cb.dataset.mission]=cb.checked; localStorage.setItem(PROGRESS_KEY,JSON.stringify(saved)); cb.closest('.mission-card')?.classList.toggle('completed',cb.checked); updateMissionProgress(); }); });
  updateMissionProgress();
}
function updateMissionProgress(){ const checks=$$('.mission-check'), done=checks.filter(x=>x.checked).length; if($('mission-progress-text'))$('mission-progress-text').textContent=`${done}/${checks.length} Missions`; if($('mission-progress-bar'))$('mission-progress-bar').style.width=(checks.length?done/checks.length*100:0)+'%'; }


/* ---------- Clickable Missions ---------- */
$$('.mission-open').forEach(card=>{
  const openMission=()=>{
    switchView('prompts-view');
    setTimeout(()=>openDocumentByFile(card.dataset.openDoc||'content/day0.md',card.dataset.find||''),60);
  };
  card.addEventListener('click',event=>{
    if(event.target.closest('label,input,a,button')) return;
    openMission();
  });
  card.addEventListener('keydown',event=>{
    if((event.key==='Enter'||event.key===' ') && !event.target.closest('label,input,a,button')){
      event.preventDefault();
      openMission();
    }
  });
});


/* ---------- v4.8 Downloadable Markdown Assets ---------- */
const LOCAL_ASSET_RE=/^(?:\.\/)?(?:assets|examples|content|data)\/[^\s"'<>?#]+(?:\?[^\s"'<>#]*)?$/i;

function normalizeAssetPath(path=''){
  return path.trim().replace(/^\.\//,'');
}
function isDownloadableLocalPath(path=''){
  return LOCAL_ASSET_RE.test(normalizeAssetPath(path));
}
function assetFilename(path=''){
  const clean=normalizeAssetPath(path).split('?')[0].split('#')[0];
  return decodeURIComponent(clean.split('/').pop()||'download');
}

async function downloadLocalAsset(path){
  const clean=normalizeAssetPath(path);
  try{
    showToast('กำลังเตรียมไฟล์ดาวน์โหลด...');
    const res=await fetch(clean);
    if(!res.ok) throw new Error('HTTP '+res.status);
    const blob=await res.blob();
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=assetFilename(clean);
    a.style.display='none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1500);
    showToast('ดาวน์โหลด '+assetFilename(clean)+' แล้ว');
  }catch(err){
    console.warn('Asset download failed:',clean,err);
    showToast('ดาวน์โหลดอัตโนมัติไม่สำเร็จ — กำลังเปิดไฟล์');
    window.open(clean,'_blank','noopener');
  }
}

function createAssetAction(path,type='download'){
  const el=document.createElement(type==='open'?'a':'button');
  el.className='asset-action '+(type==='open'?'asset-open':'asset-download');
  if(type==='open'){
    el.href=normalizeAssetPath(path);
    el.target='_blank';
    el.rel='noopener';
    el.innerHTML='<i class="fa-solid fa-arrow-up-right-from-square"></i><span>เปิด</span>';
    el.setAttribute('aria-label','เปิดไฟล์ '+assetFilename(path));
  }else{
    el.type='button';
    el.dataset.downloadAsset=normalizeAssetPath(path);
    el.innerHTML='<i class="fa-solid fa-download"></i><span>ดาวน์โหลด</span>';
    el.setAttribute('aria-label','ดาวน์โหลดไฟล์ '+assetFilename(path));
  }
  return el;
}

function enhanceMarkdownAssets(root){
  if(!root) return;

  /* Backtick references such as `assets/examples/file.md` */
  root.querySelectorAll('code').forEach(code=>{
    if(code.closest('pre') || code.closest('.asset-file-ref')) return;
    const path=code.textContent.trim();
    if(!isDownloadableLocalPath(path)) return;

    const wrap=document.createElement('span');
    wrap.className='asset-file-ref';
    wrap.dataset.assetPath=normalizeAssetPath(path);

    const pathCode=document.createElement('code');
    pathCode.className='asset-file-path';
    pathCode.textContent=path;

    wrap.appendChild(pathCode);
    wrap.appendChild(createAssetAction(path,'open'));
    wrap.appendChild(createAssetAction(path,'download'));
    code.replaceWith(wrap);
  });

  /* Existing Markdown links to a local file also receive a download action. */
  root.querySelectorAll('a[href]').forEach(link=>{
    if(link.closest('.asset-file-ref') || link.dataset.assetEnhanced==='1') return;
    const href=link.getAttribute('href')||'';
    if(!isDownloadableLocalPath(href)) return;

    link.dataset.assetEnhanced='1';
    link.classList.add('asset-source-link');

    const dl=createAssetAction(href,'download');
    dl.classList.add('asset-download-inline');
    link.insertAdjacentElement('afterend',dl);
  });
}

document.addEventListener('click',event=>{
  const btn=event.target.closest('[data-download-asset]');
  if(!btn) return;
  event.preventDefault();
  downloadLocalAsset(btn.dataset.downloadAsset);
});

/* ---------- Dynamic Markdown ---------- */
let manifest=[], currentDocPath='', rawMarkdownCache='', currentSectionFilter='all';
async function initSidebar(){
  try{
    const res=await fetch('content/manifest.json?t='+Date.now()); if(!res.ok)throw new Error('manifest load failed'); manifest=await res.json();
    manifest.sort((a,b)=>(Number(a.order)||999)-(Number(b.order)||999));
    const list=$('dynamic-doc-list'); list.innerHTML='';
    let lastGroup='';
    manifest.forEach((item,index)=>{
      if(item.group && item.group!==lastGroup){
        const group=document.createElement('li');
        group.className='doc-group-label';
        group.textContent=item.group;
        list.appendChild(group);
        lastGroup=item.group;
      }
      const li=document.createElement('li'); li.className='doc-item'+(index===0?' active':''); li.dataset.file=item.file;
      const meta=[item.time,item.category].filter(Boolean).join(' • ');
      li.innerHTML=`<i class="fa-solid ${escapeHtml(item.icon||'fa-file-lines')}"></i><span>${escapeHtml(item.title)}<small>${escapeHtml(meta)}</small></span>`;
      li.addEventListener('click',()=>selectDocument(item,li)); list.appendChild(li);
    });
    const params=new URLSearchParams(location.search); const doc=params.get('doc'); const initial=manifest.find(x=>x.file===doc)||manifest[0]; if(initial) openDocumentByFile(initial.file);
  }catch(e){ if($('dynamic-doc-list'))$('dynamic-doc-list').innerHTML='<li class="loading-list" style="color:#b91c1c">ไม่พบ content/manifest.json</li>'; }
}
function selectDocument(item,li){
  $$('.doc-item').forEach(i=>i.classList.remove('active'));
  li?.classList.add('active');
  currentDocPath=item.file;
  if($('doc-breadcrumb-title'))$('doc-breadcrumb-title').textContent=item.title;
  const loading=fetchMarkdown(item.file);
  if(window.matchMedia('(max-width: 980px)').matches){
    setTimeout(()=>$('markdown-output')?.scrollIntoView({behavior:'smooth',block:'start'}),120);
  }
  return loading;
}
function resetDocumentFilters(){
  currentSectionFilter='all';
  $$('.chip-filter').forEach(c=>c.classList.toggle('active',c.dataset.filter==='all'));
  if($('prompt-search')) $('prompt-search').value='';
}
async function openDocumentByFile(file,find=''){
  resetDocumentFilters();
  const item=manifest.find(x=>x.file===file);
  if(!item){
    if(file) await fetchMarkdown(file);
  }else{
    const li=$$('.doc-item').find(x=>x.dataset.file===file);
    await selectDocument(item,li);
  }
  if(find){
    const q=$('prompt-search');
    if(q){
      q.value=find;
      applyFiltersAndRender();
      setTimeout(()=>$('markdown-output')?.scrollIntoView({behavior:'smooth',block:'start'}),80);
    }
  }
}
async function fetchMarkdown(file){
  if(!file)return; currentDocPath=file; $('loading-indicator')?.classList.remove('hidden'); if($('markdown-output'))$('markdown-output').innerHTML='';
  try{ const res=await fetch(file+'?t='+Date.now()); if(!res.ok)throw new Error('ไม่สามารถโหลด '+file); rawMarkdownCache=await res.text(); applyFiltersAndRender(); }
  catch(err){ if($('markdown-output'))$('markdown-output').innerHTML=`<div class="notice">${escapeHtml(err.message)}</div>`; }
  finally{$('loading-indicator')?.classList.add('hidden');}
}
function splitMarkdownSections(content){ const lines=content.split('\n'); const sections=[]; let current=[]; for(const line of lines){ if(/^##\s+/.test(line)&&current.length){sections.push(current.join('\n'));current=[line];}else current.push(line); } if(current.length)sections.push(current.join('\n')); return sections; }
function applyFiltersAndRender(){
  if(!$('markdown-output')||typeof marked==='undefined')return;
  const query=($('prompt-search')?.value||'').trim().toLowerCase(); let sections=splitMarkdownSections(rawMarkdownCache);
  if(currentSectionFilter!=='all') sections=sections.filter(s=>s.toLowerCase().includes(currentSectionFilter.toLowerCase()));
  if(query) sections=sections.filter(s=>s.toLowerCase().includes(query));
  let content=sections.join('\n\n'); if(query&&!content) content=`> ไม่พบเนื้อหาที่ตรงกับ **${query}**`;
  $('markdown-output').innerHTML=marked.parse(content||rawMarkdownCache);
  if(typeof hljs!=='undefined') $('markdown-output').querySelectorAll('pre code').forEach(block=>hljs.highlightElement(block));
  $('markdown-output').querySelectorAll('pre').forEach(pre=>{ if(pre.querySelector('.copy-prompt-btn'))return; const btn=document.createElement('button');btn.className='copy-prompt-btn';btn.innerHTML='<i class="fa-regular fa-copy"></i> คัดลอก';btn.onclick=()=>{const code=pre.querySelector('code');navigator.clipboard.writeText(code?code.innerText:pre.innerText);showToast('คัดลอก Prompt แล้ว');};pre.appendChild(btn); });
  enhanceMarkdownAssets($('markdown-output'));
}
on('reload-btn','click',()=>{fetchMarkdown(currentDocPath);showToast('รีเฟรชข้อมูลแล้ว');});
on('prompt-search','input',applyFiltersAndRender);
$$('.chip-filter').forEach(chip=>chip.addEventListener('click',()=>{$$('.chip-filter').forEach(c=>c.classList.remove('active'));chip.classList.add('active');currentSectionFilter=chip.dataset.filter||'all';applyFiltersAndRender();}));
on('copy-doc-link','click',async()=>{ const url=new URL(location.href); url.hash='prompts'; if(currentDocPath)url.searchParams.set('doc',currentDocPath); try{await navigator.clipboard.writeText(url.toString());showToast('คัดลอกลิงก์เอกสารแล้ว');}catch(e){showToast('ไม่สามารถคัดลอกลิงก์ได้');} });

/* ---------- Lab ---------- */
$$('.open-demo').forEach(btn=>btn.addEventListener('click',()=>{ $('demo-frame').src=btn.dataset.demo; $('demo-title').textContent=btn.dataset.title||'Demo'; $('demo-stage').classList.remove('hidden'); $('demo-stage').scrollIntoView({behavior:'smooth',block:'start'}); }));
on('close-demo','click',()=>{ $('demo-frame').src='about:blank'; $('demo-stage').classList.add('hidden'); });
on('copy-gemini-ar-prompt','click',async()=>{
  const text=$('gemini-ar-prompt')?.value||'';
  try{
    await navigator.clipboard.writeText(text);
    showToast('คัดลอก AR Prompt สำหรับ Gemini แล้ว');
  }catch(e){
    $('gemini-ar-prompt')?.select();
    showToast('เลือก Prompt แล้ว — กด Ctrl+C เพื่อคัดลอก');
  }
});

/* ---------- AI Bug Spotter ---------- */
let questions=[],currentQuestionIndex=0,score=0,timer=null; const TOTAL_TIME=20; let timeLeft=TOTAL_TIME; let isHost=false,peer=null,hostConn=null,connectedGuests=[],playerScores=[]; const shapes=['fa-play','fa-square','fa-circle','fa-star'];
async function loadQuestions(){ try{const res=await fetch('data/spot-the-bug.json?t='+Date.now());if(!res.ok)throw new Error('Question data missing');questions=await res.json();}catch(e){console.error(e);showToast('โหลดคำถามเกมไม่สำเร็จ');} }
on('btn-mode-single','click',()=>{$('single-setup').classList.remove('hidden');$('multi-setup').classList.add('hidden');});
on('btn-mode-multi','click',()=>{$('multi-setup').classList.remove('hidden');$('single-setup').classList.add('hidden');});
on('btn-start-single','click',()=>{window.currentPlayerName=$('player-name-single').value.trim()||'ผู้เล่น 1';$('hud-mode').textContent='Single Player';startGame();});
function startGame(){ if(!questions.length){showToast('ยังไม่มีคำถามเกม');return;} $('game-lobby').classList.add('hidden');$('game-results').classList.add('hidden');$('feedback-modal').classList.add('hidden');$('game-play').classList.remove('hidden');currentQuestionIndex=0;score=0;loadQuestion(); }
function loadQuestion(){ clearInterval(timer); if(currentQuestionIndex>=questions.length){endGame();return;} const q=questions[currentQuestionIndex]; $('hud-question-index').textContent=`ข้อที่ ${currentQuestionIndex+1}/${questions.length}`;$('scenario-title').textContent=q.category;$('scenario-prompt').textContent=q.promptContext; const img=$('scenario-image'),txt=$('text-scenario-box'); if(q.image){img.src=q.image;img.classList.remove('hidden');txt.classList.add('hidden');}else{img.classList.add('hidden');txt.classList.remove('hidden');$('ai-response-text').textContent=q.aiOutput||'';} $('current-score').textContent=score; const oc=$('options-container');oc.innerHTML='';q.options.forEach((opt,idx)=>{const b=document.createElement('button');b.className='kahoot-btn k-color-'+(idx%4);b.innerHTML=`<i class="fa-solid ${shapes[idx%4]} shape-icon"></i><span>${escapeHtml(opt.text)}</span>`;b.onclick=()=>handleAnswer(idx,q.correctIndex);oc.appendChild(b);}); timeLeft=TOTAL_TIME;$('time-left').textContent=timeLeft;$('timer-bar').style.width='100%';$('timer-bar').style.background='var(--purple)';timer=setInterval(()=>{timeLeft--;$('time-left').textContent=timeLeft;$('timer-bar').style.width=(timeLeft/TOTAL_TIME*100)+'%';if(timeLeft<=5)$('timer-bar').style.background='var(--danger)';if(timeLeft<=0){clearInterval(timer);handleAnswer(-1,q.correctIndex);}},1000); }
function handleAnswer(chosen,correct){ clearInterval(timer); const q=questions[currentQuestionIndex],ok=chosen===correct; let earned=0;if(ok){earned=500+timeLeft*25;score+=earned;playSound('correct');$('modal-icon').textContent='🎯';$('modal-title').textContent='ยอดเยี่ยม!';$('modal-title').style.color='var(--accent)';$('modal-points').textContent=`+${earned} คะแนน`; }else{playSound('wrong');$('modal-icon').textContent='❌';$('modal-title').textContent=chosen===-1?'หมดเวลา!':'ลองใหม่ในข้อต่อไป';$('modal-title').style.color='var(--danger)';$('modal-points').textContent='+0 คะแนน';}$('modal-explanation').innerHTML='<strong>เฉลย:</strong> '+escapeHtml(q.explanation);$('feedback-modal').classList.remove('hidden');onNextModal(); }
function onNextModal(){ $('btn-modal-next').onclick=()=>{$('feedback-modal').classList.add('hidden');currentQuestionIndex++;loadQuestion();}; }
function endGame(){ $('game-play').classList.add('hidden');$('game-results').classList.remove('hidden');$('final-score-val').textContent=score; if(typeof confetti==='function')confetti({particleCount:140,spread:85,origin:{y:.6}});playerScores.push({name:window.currentPlayerName||'ฉัน',score});if(hostConn&&!isHost)hostConn.send({type:'SUBMIT_SCORE',name:window.currentPlayerName,score});renderLeaderboards(); }
function renderLeaderboards(){ const sorted=[...playerScores].sort((a,b)=>b.score-a.score).slice(0,10),tbody=$('#top5-table tbody');tbody.innerHTML='';sorted.forEach((p,i)=>{const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'#'+(i+1);tbody.innerHTML+=`<tr><td><strong>${medal}</strong></td><td>${escapeHtml(p.name)}</td><td><strong>${p.score}</strong></td></tr>`;}); }
on('btn-play-again','click',()=>{$('game-results').classList.add('hidden');$('game-lobby').classList.remove('hidden');});

/* ---------- PeerJS Multiplayer (preserved + safer status) ---------- */
on('btn-create-room','click',()=>{ if(typeof Peer==='undefined'){showToast('PeerJS ยังโหลดไม่สำเร็จ');return;} const pin='PIN-'+Math.floor(1000+Math.random()*9000);peer=new Peer(pin);isHost=true;$('join-status').textContent='';peer.on('open',id=>{$('created-room-id').value=id;$('room-info').classList.remove('hidden');$('btn-create-room').disabled=true;$('qrcode-box').innerHTML='';const joinUrl=new URL(location.href);joinUrl.search='';joinUrl.hash='game';joinUrl.searchParams.set('room',id);if(typeof QRCode!=='undefined')new QRCode($('qrcode-box'),{text:joinUrl.toString(),width:140,height:140});});peer.on('connection',conn=>{conn.on('data',data=>{if(data.type==='JOIN'){connectedGuests.push({conn,name:data.name});const li=document.createElement('li');li.textContent=data.name;$('connected-players-list').appendChild(li);$('player-count').textContent=connectedGuests.length;showToast(data.name+' เข้าห้องแล้ว');}if(data.type==='SUBMIT_SCORE'){playerScores.push({name:data.name,score:data.score});renderLeaderboards();}});});peer.on('error',err=>{console.error(err);showToast('เปิดห้องไม่สำเร็จ ลองใหม่อีกครั้ง');$('btn-create-room').disabled=false;});});
on('btn-copy-link','click',async()=>{const id=$('created-room-id').value;if(!id)return;const u=new URL(location.href);u.search='';u.hash='game';u.searchParams.set('room',id);try{await navigator.clipboard.writeText(u.toString());showToast('คัดลอกลิงก์ห้องแล้ว');}catch(e){showToast('คัดลอกไม่สำเร็จ');}});
on('btn-host-start-game','click',()=>{connectedGuests.forEach(g=>g.conn.send({type:'START_GAME'}));window.currentPlayerName='Host';$('hud-mode').textContent='Live Host';startGame();});
on('btn-join-room','click',()=>{const pin=$('join-room-id').value.trim(),name=$('player-name-multi').value.trim()||'ผู้เล่น';window.currentPlayerName=name;if(!pin)return alert('กรุณาใส่ PIN');if(typeof Peer==='undefined'){showToast('PeerJS ยังโหลดไม่สำเร็จ');return;}peer=new Peer();peer.on('open',()=>{hostConn=peer.connect(pin);hostConn.on('open',()=>{$('join-status').textContent='✅ เชื่อมต่อสำเร็จ รอ Host เริ่มเกม...';hostConn.send({type:'JOIN',name});});hostConn.on('data',data=>{if(data.type==='START_GAME'){$('hud-mode').textContent='Live Player';startGame();}});hostConn.on('error',()=>{$('join-status').textContent='❌ เชื่อมต่อ Host ไม่สำเร็จ';});});peer.on('error',()=>{$('join-status').textContent='❌ ตรวจสอบ PIN/เครือข่าย แล้วลองใหม่';});});

/* ---------- Online / PWA ---------- */
function updateOnline(){if(!$('offline-status'))return;$('offline-status').innerHTML=navigator.onLine?'<i class="fa-solid fa-wifi"></i> Online':'<i class="fa-solid fa-plug-circle-xmark"></i> Offline';}
window.addEventListener('online',updateOnline);window.addEventListener('offline',updateOnline);
if('serviceWorker' in navigator&&location.protocol.startsWith('http')) navigator.serviceWorker.register('service-worker.js').catch(console.warn);

window.addEventListener('DOMContentLoaded',async()=>{
  const initiallyActive=$('.nav-btn.active'); if(initiallyActive) initiallyActive.setAttribute('aria-current','page');
  loadMissionProgress();updateOnline();await Promise.all([initSidebar(),loadQuestions()]);const params=new URLSearchParams(location.search),room=params.get('room');const hash=location.hash.replace('#','');if(hash){const map={home:'home-view',prompts:'prompts-view',game:'game-view',lab:'lab-view'};if(map[hash])switchView(map[hash]);}if(room){switchView('game-view');$('btn-mode-multi')?.click();$('join-room-id').value=room;}});
