const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  try {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
      osc.start(); osc.stop(audioCtx.currentTime + 0.25);
    }
  } catch (e) {}
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');
const docItems = document.querySelectorAll('.doc-item');
const markdownOutput = document.getElementById('markdown-output');
const reloadBtn = document.getElementById('reload-btn');
const loadingIndicator = document.getElementById('loading-indicator');
const promptSearch = document.getElementById('prompt-search');
const docBreadcrumbTitle = document.getElementById('doc-breadcrumb-title');
const chipFilters = document.querySelectorAll('.chip-filter');

let currentDocPath = 'content/day1-education.md';
let rawMarkdownCache = "";
let currentSectionFilter = "all";

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    views.forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target).classList.add('active');
  });
});

async function fetchMarkdown(filePath) {
  loadingIndicator.classList.remove('hidden');
  markdownOutput.innerHTML = "";
  try {
    const cacheBuster = '?t=' + Date.now();
    const response = await fetch(filePath + cacheBuster);
    if (!response.ok) throw new Error('ไม่สามารถโหลดเอกสารได้');
    const text = await response.text();
    rawMarkdownCache = text;
    applyFiltersAndRender();
  } catch (err) {
    markdownOutput.innerHTML = '<div style="color:red; padding:20px;">เกิดข้อผิดพลาด: ' + err.message + '</div>';
  } finally {
    loadingIndicator.classList.add('hidden');
  }
}

function applyFiltersAndRender() {
  const searchQuery = promptSearch.value.trim().toLowerCase();
  let content = rawMarkdownCache;
  if (currentSectionFilter !== "all") {
    const sections = content.split('## ');
    const matched = sections.filter(sec => sec.toLowerCase().includes(currentSectionFilter.toLowerCase()));
    content = matched.length > 0 ? "## " + matched.join('## ') : content;
  }
  if (searchQuery) {
    const lines = content.split('\n');
    const filtered = lines.filter(l => l.toLowerCase().includes(searchQuery));
    content = '> 🔍 ผลการค้นหาสำหรับ: **"' + searchQuery + '"**\n\n' + filtered.join('\n');
  }
  renderMarkdown(content);
}

function renderMarkdown(mdText) {
  markdownOutput.innerHTML = marked.parse(mdText);
  markdownOutput.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
    const pre = block.parentElement;
    if (!pre.querySelector('.copy-prompt-btn')) {
      const btn = document.createElement('button');
      btn.className = 'copy-prompt-btn';
      btn.innerHTML = '<i class="fa-regular fa-copy"></i> คัดลอก Prompt';
      btn.onclick = () => {
        navigator.clipboard.writeText(block.innerText);
        showToast("คัดลอก Prompt ลง Clipboard แล้ว!");
        btn.innerHTML = '<i class="fa-solid fa-check"></i> คัดลอกแล้ว';
        setTimeout(() => btn.innerHTML = '<i class="fa-regular fa-copy"></i> คัดลอก Prompt', 2000);
      };
      pre.appendChild(btn);
    }
  });
}

docItems.forEach(item => {
  item.addEventListener('click', () => {
    docItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    currentDocPath = item.dataset.file;
    docBreadcrumbTitle.innerText = item.innerText.trim();
    fetchMarkdown(currentDocPath);
  });
});

reloadBtn.addEventListener('click', () => { fetchMarkdown(currentDocPath); showToast("รีเฟรชข้อมูลล่าสุดเรียบร้อย!"); });
promptSearch.addEventListener('input', applyFiltersAndRender);
chipFilters.forEach(chip => {
  chip.addEventListener('click', () => {
    chipFilters.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentSectionFilter = chip.dataset.filter;
    applyFiltersAndRender();
  });
});
fetchMarkdown(currentDocPath);

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
const TOTAL_TIME = 30;
let timeLeft = TOTAL_TIME;
let isHost = false;
let peer = null;
let hostConn = null;
let connectedGuests = [];
let playerScores = [];

const gameLobby = document.getElementById('game-lobby');
const gamePlay = document.getElementById('game-play');
const gameResults = document.getElementById('game-results');
const singleSetup = document.getElementById('single-setup');
const multiSetup = document.getElementById('multi-setup');
const feedbackModal = document.getElementById('feedback-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalExplanation = document.getElementById('modal-explanation');
const modalPoints = document.getElementById('modal-points');
const btnModalNext = document.getElementById('btn-modal-next');
const timerBar = document.getElementById('timer-bar');

async function loadQuestions() {
  try {
    const res = await fetch('data/spot-the-bug.json?t=' + Date.now());
    questions = await res.json();
  } catch (e) { console.error(e); }
}
loadQuestions();

document.getElementById('btn-mode-single').addEventListener('click', () => { singleSetup.classList.remove('hidden'); multiSetup.classList.add('hidden'); });
document.getElementById('btn-mode-multi').addEventListener('click', () => { multiSetup.classList.remove('hidden'); singleSetup.classList.add('hidden'); });

document.getElementById('btn-start-single').addEventListener('click', () => {
  window.currentPlayerName = document.getElementById('player-name-single').value.trim() || "ผู้เข้าอบรม";
  document.getElementById('hud-mode').innerText = "Single Player";
  startGame();
});

function startGame() {
  gameLobby.classList.add('hidden'); gameResults.classList.add('hidden'); feedbackModal.classList.add('hidden');
  gamePlay.classList.remove('hidden');
  currentQuestionIndex = 0; score = 0;
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  if (currentQuestionIndex >= questions.length) { endGame(); return; }
  const q = questions[currentQuestionIndex];
  document.getElementById('hud-question-index').innerText = 'ข้อที่ ' + (currentQuestionIndex + 1) + '/' + questions.length;
  document.getElementById('scenario-title').innerText = q.category;
  document.getElementById('scenario-prompt').innerText = "คำสั่ง/บริบท: " + q.promptContext;
  document.getElementById('ai-response-text').innerText = q.aiOutput;
  document.getElementById('current-score').innerText = score;

  const optContainer = document.getElementById('options-container');
  optContainer.innerHTML = "";
  const markers = ['ก', 'ข', 'ค', 'ง'];
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = "option-btn";
    btn.innerHTML = '<span class="option-marker">' + (markers[idx] || idx+1) + '</span> <span>' + opt.text + '</span>';
    btn.onclick = () => handleAnswer(idx, q.correctIndex);
    optContainer.appendChild(btn);
  });

  timeLeft = TOTAL_TIME;
  document.getElementById('time-left').innerText = timeLeft;
  timerBar.style.width = "100%";
  timerBar.style.background = "var(--primary)";

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('time-left').innerText = timeLeft;
    const pct = (timeLeft / TOTAL_TIME) * 100;
    timerBar.style.width = pct + '%';
    if (timeLeft <= 10) timerBar.style.background = "var(--danger)";
    if (timeLeft <= 0) { clearInterval(timer); handleAnswer(-1, q.correctIndex); }
  }, 1000);
}

function handleAnswer(chosenIdx, correctIdx) {
  clearInterval(timer);
  const q = questions[currentQuestionIndex];
  const isCorrect = chosenIdx === correctIdx;
  let earned = 0;
  if (isCorrect) {
    earned = 100 + (timeLeft * 3);
    score += earned;
    playSound('correct');
    modalIcon.innerHTML = "🎉"; modalTitle.innerText = "ถูกต้องแม่นยำ!"; modalTitle.style.color = "var(--accent)";
    modalPoints.innerText = '+' + earned + ' คะแนน (ความเร็วโบนัส +' + (timeLeft * 3) + ')';
    modalPoints.style.color = "var(--accent)";
  } else {
    playSound('wrong');
    modalIcon.innerHTML = "❌"; modalTitle.innerText = chosenIdx === -1 ? "หมดเวลา!" : "ยังไม่ถูกต้อง";
    modalTitle.style.color = "var(--danger)";
    modalPoints.innerText = "+0 คะแนน"; modalPoints.style.color = "var(--danger)";
  }
  modalExplanation.innerHTML = '<strong>เหตุผลประกอบ:</strong> ' + q.explanation;
  feedbackModal.classList.remove('hidden');
  btnModalNext.onclick = () => { feedbackModal.classList.add('hidden'); currentQuestionIndex++; loadQuestion(); };
}

function endGame() {
  gamePlay.classList.add('hidden'); gameResults.classList.remove('hidden');
  document.getElementById('final-score-val').innerText = score;
  confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  playerScores.push({ name: window.currentPlayerName || "ฉัน", score: score });
  if (hostConn && !isHost) hostConn.send({ type: 'SUBMIT_SCORE', name: window.currentPlayerName, score: score });
  renderLeaderboards();
}

function renderLeaderboards() {
  const sorted = [...playerScores].sort((a, b) => b.score - a.score);
  const top5Body = document.querySelector('#top5-table tbody');
  top5Body.innerHTML = "";
  sorted.slice(0, 5).forEach((p, idx) => {
    top5Body.innerHTML += '<tr><td><strong>#' + (idx + 1) + '</strong></td><td>' + p.name + '</td><td><strong>' + p.score + '</strong></td><td><span class="badge" style="background:#ecfdf5; color:#047857;">เสร็จสิ้น</span></td></tr>';
  });
  const fullBody = document.querySelector('#full-table tbody');
  fullBody.innerHTML = "";
  sorted.forEach((p, idx) => { fullBody.innerHTML += '<tr><td>#' + (idx + 1) + '</td><td>' + p.name + '</td><td>' + p.score + '</td></tr>'; });
}

document.getElementById('btn-toggle-full-board').addEventListener('click', () => { document.getElementById('full-board-container').classList.toggle('hidden'); });
document.getElementById('btn-play-again').addEventListener('click', () => { gameResults.classList.add('hidden'); gameLobby.classList.remove('hidden'); });

const btnCreateRoom = document.getElementById('btn-create-room');
const btnJoinRoom = document.getElementById('btn-join-room');
const roomInfo = document.getElementById('room-info');
const createdRoomId = document.getElementById('created-room-id');
const playersList = document.getElementById('connected-players-list');
const playerCountSpan = document.getElementById('player-count');
const qrCodeBox = document.getElementById('qrcode-box');

btnCreateRoom.addEventListener('click', () => {
  const pin = "ROOM-" + Math.floor(1000 + Math.random() * 9000);
  peer = new Peer(pin);
  isHost = true;
  peer.on('open', (id) => {
    createdRoomId.value = id;
    roomInfo.classList.remove('hidden');
    btnCreateRoom.disabled = true;
    const joinUrl = window.location.origin + window.location.pathname + '?room=' + id;
    qrCodeBox.innerHTML = "";
    new QRCode(qrCodeBox, { text: joinUrl, width: 140, height: 140, colorDark: "#1e293b", colorLight: "#ffffff" });
  });
  peer.on('connection', (conn) => {
    conn.on('data', (data) => {
      if (data.type === 'JOIN') {
        connectedGuests.push({ conn, name: data.name });
        const li = document.createElement('li');
        li.innerText = data.name; playersList.appendChild(li);
        playerCountSpan.innerText = connectedGuests.length;
        showToast('ผู้เข้าอบรม: ' + data.name + ' เข้าร่วมห้องแล้ว');
      }
      if (data.type === 'SUBMIT_SCORE') { playerScores.push({ name: data.name, score: data.score }); renderLeaderboards(); }
    });
  });
});

document.getElementById('btn-copy-link').addEventListener('click', () => {
  const link = window.location.origin + window.location.pathname + '?room=' + createdRoomId.value;
  navigator.clipboard.writeText(link);
  showToast("คัดลอกลิงก์ส่งเข้า LINE กลุ่มเรียบร้อย!");
});

document.getElementById('btn-host-start-game').addEventListener('click', () => {
  connectedGuests.forEach(guest => { guest.conn.send({ type: 'START_GAME' }); });
  window.currentPlayerName = "วิทยากร (Host)";
  document.getElementById('hud-mode').innerText = "Live Host";
  startGame();
});

btnJoinRoom.addEventListener('click', () => {
  const pin = document.getElementById('join-room-id').value.trim();
  const name = document.getElementById('player-name-multi').value.trim() || "ผู้เรียน";
  window.currentPlayerName = name;
  if (!pin) return alert("กรุณาระบุ PIN ห้องกิจกรรม");
  peer = new Peer();
  peer.on('open', () => {
    hostConn = peer.connect(pin);
    hostConn.on('open', () => {
      document.getElementById('join-status').innerText = "✅ เชื่อมต่อห้องเรียนสำเร็จ! รอวิทยากรกดเริ่ม...";
      hostConn.send({ type: 'JOIN', name: name });
    });
    hostConn.on('data', (data) => {
      if (data.type === 'START_GAME') { document.getElementById('hud-mode').innerText = "Multiplayer Live"; startGame(); }
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const roomParam = urlParams.get('room');
  if (roomParam) {
    document.querySelector('.nav-btn[data-target="game-view"]').click();
    document.getElementById('btn-mode-multi').click();
    document.getElementById('join-room-id').value = roomParam;
    showToast('ตรวจพบห้อง ' + roomParam + ' พร้อมเข้าห้อง');
  }
});