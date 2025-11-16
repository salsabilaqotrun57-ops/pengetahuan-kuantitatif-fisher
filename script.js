const ITEMS = [
  {
    id: 1,
    q: 'Jika 2<sup>(x+1)</sup> = 32, maka nilai x adalah ...',
    choices: [
      { k:'A', t:'3' },
      { k:'B', t:'4' },
      { k:'C', t:'5' },
      { k:'D', t:'2' }
    ],
    answer: 'B',
    explain: '2<sup>(x+1)</sup>=32=2<sup>5</sup> ⇒ x+1=5 ⇒ x=4.',
    a:1,b:0,c:0.15
  },

  {
    id: 2,
    q: 'Nilai dari <sup>3</sup>log81 adalah ...',
    choices: [
      { k:'A', t:'3' },
      { k:'B', t:'4' },
      { k:'C', t:'2' },
      { k:'D', t:'5' }
    ],
    answer: 'B',
    explain: '81 = 3<sup>4</sup> ⇒ log<sub>3</sub>81 = 4.',
    a:1,b:0,c:0.15
  },

  {
    id: 3,
    q: 'Barisan aritmetika: 7, 10, 13, … . Suku ke-20 adalah ...',
    choices: [
      { k:'A', t:'64' },
      { k:'B', t:'67' },
      { k:'C', t:'70' },
      { k:'D', t:'73' }
    ],
    answer: 'A',
    explain: 'aₙ=7+(n−1)·3 ⇒ a₂₀=7+19·3=64.',
    a:1,b:0,c:0.15
  },

  {
    id: 4,
    q: 'Diketahui P(x) = x³ − x² − x + 1. Nilai P(1) adalah ...',
    choices: [
      { k:'A', t:'0' },
      { k:'B', t:'1' },
      { k:'C', t:'−1' },
      { k:'D', t:'2' }
    ],
    answer: 'A',
    explain: 'P(1)=1−1−1+1=0.',
    a:1,b:0,c:0.15
  },

  {
    id: 5,
    q: 'Hitung (√50 + √2) − (√50 − √2)=',
    choices: [
      { k:'A', t:'2√2' },
      { k:'B', t:'2√50' },
      { k:'C', t:'√2' },
      { k:'D', t:'2' }
    ],
    answer: 'A',
    explain: 'Ekspresi = 2√2.',
    a:1,b:0,c:0.15
  },

  {
    id: 6,
    q: 'Jika 1/a + 1/b = 1/6 dan a = 12, maka nilai b adalah ...',
    choices: [
      { k:'A', t:'12' },
      { k:'B', t:'8' },
      { k:'C', t:'24' },
      { k:'D', t:'6' }
    ],
    answer: 'A',
    explain: '1/12 + 1/b = 1/6 ⇒ 1/b = 1/12 ⇒ b = 12.',
    a:1,b:0,c:0.15
  },

  {
    id: 7,
    q: 'Nilai dari 5! ÷ 3! adalah ...',
    choices: [
      { k:'A', t:'20' },
      { k:'B', t:'10' },
      { k:'C', t:'15' },
      { k:'D', t:'30' }
    ],
    answer: 'A',
    explain: '5!=120, 3!=6 ⇒ 120 ÷ 6 = 20.',
    a:1,b:0,c:0.15
  },

  {
    id: 8,
    q: 'Jika sin θ = 3/5 dan 0° < θ < 90°, maka cos θ = ...',
    choices: [
      { k:'A', t:'4/5' },
      { k:'B', t:'3/4' },
      { k:'C', t:'1/2' },
      { k:'D', t:'√(16)/5' }
    ],
    answer: 'A',
    explain: 'cos = √(1 − (3/5)²) = √(16/25) = 4/5.',
    a:1,b:0,c:0.15
  },

  {
    id: 9,
    q: 'Perbandingan umur A : B = 5 : 7. Jika A + B = 144, umur A adalah ...',
    choices: [
      { k:'A', t:'60' },
      { k:'B', t:'62' },
      { k:'C', t:'64' },
      { k:'D', t:'65' }
    ],
    answer: 'A',
    explain: 'Total rasio = 12 ⇒ bagian = 12 ⇒ A = 5×12 = 60.',
    a:1,b:0,c:0.15
  },

  {
    id: 10,
    q: 'Dua dadu dilempar. Peluang jumlah mata dadu = 7 adalah ...',
    choices: [
      { k:'A', t:'1/6' },
      { k:'B', t:'1/9' },
      { k:'C', t:'1/12' },
      { k:'D', t:'1/3' }
    ],
    answer: 'A',
    explain: '6 kombinasi dari 36 → 1/6.',
    a:1,b:0,c:0.15
  },

  {
    id: 11,
    q: 'Segitiga siku-siku dengan sisi 6 dan 8. Sisi miring adalah ...',
    choices: [
      { k:'A', t:'10' },
      { k:'B', t:'12' },
      { k:'C', t:'14' },
      { k:'D', t:'20' }
    ],
    answer: 'A',
    explain: '√(36 + 64) = 10.',
    a:1,b:0,c:0.15
  },

  {
    id: 12,
    q: 'Jika 3x − 7 = 2x + 5, maka x = ...',
    choices: [
      { k:'A', t:'10' },
      { k:'B', t:'−12' },
      { k:'C', t:'12' },
      { k:'D', t:'−10' }
    ],
    answer: 'C',
    explain: '3x − 2x = 12 ⇒ x=12.',
    a:1,b:0,c:0.15
  },

  {
    id: 13,
    q: 'Jika 4<sup>(2x)</sup> = 64, maka nilai x adalah ...',
    choices: [
      { k:'A', t:'3/2' },
      { k:'B', t:'2' },
      { k:'C', t:'5/2' },
      { k:'D', t:'3' }
    ],
    answer: 'A',
    explain: '4<sup>(2x)</sup> = (2²)<sup>(2x)</sup> = 2<sup>(4x)</sup>; 64 = 2<sup>6</sup> ⇒ 4x = 6 ⇒ x = 3/2.',
    a:1,b:0,c:0.15
  },

  {
    id: 14,
    q: 'Hitung jumlah 3 + 6 + 12 + 24 + 48',
    choices: [
      { k:'A', t:'93' },
      { k:'B', t:'96' },
      { k:'C', t:'99' },
      { k:'D', t:'150' }
    ],
    answer: 'A',
    explain: 'Deret geometri: 3(2⁵−1)=93.',
    a:1,b:0,c:0.15
  },

  {
    id: 15,
    q: 'Faktorisasi dari x² − 5x + 6 adalah ...',
    choices: [
      { k:'A', t:'(x−2)(x−3)' },
      { k:'B', t:'(x+2)(x−3)' },
      { k:'C', t:'(x−1)(x−6)' },
      { k:'D', t:'(x+2)(x+3)' }
    ],
    answer: 'A',
    explain: '(x−2)(x−3).',
    a:1,b:0,c:0.15
  },

  {
    id: 16,
    q: 'Jika P(A)=0.4, P(B)=0.5 dan A ∩ B = ∅, maka P(A ∪ B) = ...',
    choices: [
      { k:'A', t:'0.1' },
      { k:'B', t:'0.9' },
      { k:'C', t:'0.2' },
      { k:'D', t:'0.4' }
    ],
    answer: 'B',
    explain: '0.4+0.5=0.9.',
    a:1,b:0,c:0.15
  },

  {
    id: 17,
    q: '1/x + 1/(x+1) = 1. Apakah x bilangan adalah bulat positif?',
    choices: [
      { k:'A', t:'1' },
      { k:'B', t:'2' },
      { k:'C', t:'3' },
      { k:'D', t:'Tidak ada' }
    ],
    answer: 'D',
    explain: 'Akar penyelesaian tidak bulat.',
    a:1,b:0,c:0.15
  },

  {
    id: 18,
    q: 'f(x)=2x+3. Nilai f(f(1)) adalah ...',
    choices: [
      { k:'A', t:'7' },
      { k:'B', t:'11' },
      { k:'C', t:'13' },
      { k:'D', t:'17' }
    ],
    answer: 'C',
    explain: 'f(1)=5 → f(5)=13.',
    a:1,b:0,c:0.15
  },

  {
    id: 19,
    q: 'Jika x+y=7 dan x−y=1, nilai x = ...',
    choices: [
      { k:'A', t:'4' },
      { k:'B', t:'3' },
      { k:'C', t:'5' },
      { k:'D', t:'2' }
    ],
    answer: 'A',
    explain: '2x=8 → x=4.',
    a:1,b:0,c:0.15
  },

  {
    id: 20,
    q: 'Jika panjang sisi kubus adalah 4 cm, luas seluruh permukaan kubus adalah ...',
    choices: [
      { k:'A', t:'64 cm²' },
      { k:'B', t:'96 cm²' },
      { k:'C', t:'48 cm²' },
      { k:'D', t:'24 cm²' }
    ],
    answer: 'B',
    explain: 'L = 6·4² = 6·16 = 96 cm².',
    a:1,b:0,c:0.15
  },

  {
    id: 21,
    q: 'Nilai log<sub>10</sub>1000 adalah ...',
    choices: [
      { k:'A', t:'2' },
      { k:'B', t:'3' },
      { k:'C', t:'4' },
      { k:'D', t:'1' }
    ],
    answer: 'B',
    explain: '10³ = 1000.',
    a:1,b:0,c:0.15
  },

  {
    id: 22,
    q: 'Suhu naik dari 10°C menjadi 25°C. Kenaikan suhu ...',
    choices: [
      { k:'A', t:'10°C' },
      { k:'B', t:'12°C' },
      { k:'C', t:'15°C' },
      { k:'D', t:'20°C' }
    ],
    answer: 'C',
    explain: '25−10=15.',
    a:1,b:0,c:0.15
  },

  {
    id: 23,
    q: 'Dalam kotak ada 3 bola merah dan 5 putih. Peluang ambil putih ...',
    choices: [
      { k:'A', t:'3/8' },
      { k:'B', t:'5/8' },
      { k:'C', t:'1/2' },
      { k:'D', t:'5/3' }
    ],
    answer: 'B',
    explain: '5/8.',
    a:1,b:0,c:0.15
  },

  {
    id: 24,
    q: 'Deret 2, 5, 11, 23,… Suku berikutnya ...',
    choices: [
      { k:'A', t:'35' },
      { k:'B', t:'47' },
      { k:'C', t:'45' },
      { k:'D', t:'46' }
    ],
    answer: 'B',
    explain: '23×2 + 1 =47.',
    a:1,b:0,c:0.15
  },

  {
    id: 25,
    q: 'Luas lingkaran πr² = 154, π=22/7. Nilai r ...',
    choices: [
      { k:'A', t:'7' },
      { k:'B', t:'6' },
      { k:'C', t:'14' },
      { k:'D', t:'11' }
    ],
    answer: 'A',
    explain: 'r²=49 → r=7.',
    a:1,b:0,c:0.15
  },

  {
    id: 26,
    q: 'Suatu nilai dikurangi 20% dari 50, hasilnya ...',
    choices: [
      { k:'A', t:'30' },
      { k:'B', t:'35' },
      { k:'C', t:'40' },
      { k:'D', t:'45' }
    ],
    answer: 'C',
    explain: '20%×50 =10 → 50−10=40.',
    a:1,b:0,c:0.15
  },

  {
    id: 27,
    q: 'Jika 3x = 2y dan y = 12, maka x = ...',
    choices: [
      { k:'A', t:'6' },
      { k:'B', t:'8' },
      { k:'C', t:'9' },
      { k:'D', t:'12' }
    ],
    answer: 'B',
    explain: '3x=24 → x=8.',
    a:1,b:0,c:0.15
  },

  {
    id: 28,
    q: 'Sisi kubus 4 cm. Luas permukaan ...',
    choices: [
      { k:'A', t:'64 cm²' },
      { k:'B', t:'96 cm²' },
      { k:'C', t:'48 cm²' },
      { k:'D', t:'24 cm²' }
    ],
    answer: 'B',
    explain: '6×16 =96.',
    a:1,b:0,c:0.15
  },

  {
    id: 29,
    q: 'Jika 2x² = 18, nilai x positif adalah ...',
    choices: [
      { k:'A', t:'3' },
      { k:'B', t:'9' },
      { k:'C', t:'7' },
      { k:'D', t:'4' }
    ],
    answer: 'A',
    explain: 'x²=9 → x=3.',
    a:1,b:0,c:0.15
  },

  {
    id: 30,
    q: "Jika p(x)=x³−6x²+11x−6, maka nilai p(4) adalah …",
    choices: [
      { k: "A", t: "6" },
      { k: "B", t: "10" },
      { k: "C", t: "12" },
      { k: "D", t: "24" }
    ],
    answer: "A",
    explain: "p(4)=64 − 96 + 44 − 6 = 6.",
    a:1,b:0,c:0.15
  }
];



let currentCaptcha = '';

function randomCaptchaText(len=5){
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // avoid confusing chars
  let s = '';
  for(let i=0;i<len;i++) s += chars.charAt(Math.floor(Math.random()*chars.length));
  return s;
}

function generateCaptcha(){
  const canvas = document.getElementById('captchaCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const txt = randomCaptchaText(5);
  currentCaptcha = txt;
  // background
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#051018';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  // noise
  for(let i=0;i<25;i++){
    ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.06})`;
    ctx.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*2+1, Math.random()*2+1);
  }
  // text
  ctx.font = '22px Orbitron, sans-serif';
  ctx.fillStyle = '#c7f7ff';
  for(let i=0;i<txt.length;i++){
    const angle = (Math.random()*12 - 6) * Math.PI/180;
    ctx.save();
    ctx.translate(10 + i*28, 30);
    ctx.rotate(angle);
    ctx.fillText(txt[i], 0, 0);
    ctx.restore();
  }
  // wobble line
  ctx.strokeStyle = 'rgba(140,230,255,0.12)';
  ctx.beginPath();
  ctx.moveTo(2, Math.random()*50);
  for(let x=2;x<canvas.width;x+=8){
    ctx.lineTo(x, 10 + Math.sin(x/10 + Math.random()*1.2)*10);
  }
  ctx.stroke();
}

function validateCaptcha(input){
  if(!input) return false;
  return input.toUpperCase() === currentCaptcha.toUpperCase();
}

function getSession(){
  try{ return JSON.parse(localStorage.getItem('cbt_session') || 'null'); }
  catch(e){ return null; }
}
function setResult(obj){
  localStorage.setItem('cbt_result', JSON.stringify(obj));
}
function getResult(){
  try{ return JSON.parse(localStorage.getItem('cbt_result') || 'null'); }
  catch(e){ return null; }
}
function clearAll(){
  localStorage.removeItem('cbt_session');
  localStorage.removeItem('cbt_answers');
  localStorage.removeItem('cbt_result');
}

let ANSWERS = {}; 
let CUR_INDEX = 0;
let TIMER_INTERVAL = null;
const EXAM_DURATION_MIN = 60; 

function initExamPage(){
  const sess = getSession();
  if(!sess){ alert('Sesi tidak ditemukan. Kembali ke login.'); window.location.href='index.html'; return; }
  document.getElementById('studentName').textContent = `Peserta: ${sess.name || '—'}`;
  // load previously saved answers (if any)
  try{
    const saved = JSON.parse(localStorage.getItem('cbt_answers') || '{}');
    ANSWERS = saved;
  }catch(e){ ANSWERS = {};}
  CUR_INDEX = 0;
  renderQuestion();
  renderPanelNumbers();
  startTimer(EXAM_DURATION_MIN*60, sess.startTime || Date.now());
}

function startTimer(totalSec, startTime){
  // we will show remaining time based on totalSec
  if(TIMER_INTERVAL) clearInterval(TIMER_INTERVAL);
  const endAt = Date.now() + totalSec*1000;
  const el = document.getElementById('timer');
  function tick(){
    let diff = Math.max(0, Math.floor((endAt - Date.now()) / 1000));
    const h = String(Math.floor(diff/3600)).padStart(2,'0');
    const m = String(Math.floor((diff%3600)/60)).padStart(2,'0');
    const s = String(diff%60).padStart(2,'0');
    el.textContent = `${h}:${m}:${s}`;
    if(diff <= 0){ clearInterval(TIMER_INTERVAL); alert('Waktu habis! Soal akan diselesaikan secara otomatis.'); finishExam(); }
  }
  tick();
  TIMER_INTERVAL = setInterval(tick, 1000);
}

function renderQuestion(){
  const item = ITEMS[CUR_INDEX];
  const qText = document.getElementById('qText');
  const choicesBox = document.getElementById('choices');
  qText.innerHTML = `<div style="font-weight:700">Soal ${CUR_INDEX+1}.</div><div style="margin-top:6px">${item.q}</div>`;
  choicesBox.innerHTML = '';
  item.choices.forEach(ch => {
    const chosen = ANSWERS[item.id] === ch.k;
    const div = document.createElement('label');
    div.className = 'choice';
    div.innerHTML = `<input type="radio" name="choice_${item.id}" value="${ch.k}" ${chosen ? 'checked' : ''} onclick="selectChoice(${item.id}, '${ch.k}')"/> <div class="choice-label"><strong>${ch.k}.</strong> ${ch.t}</div>`;
    choicesBox.appendChild(div);
  });
  // highlight current number
  document.querySelectorAll('.panel-numbers .num').forEach((n,i)=> {
    n.classList.toggle('current', i === CUR_INDEX);
    n.classList.toggle('answered', ANSWERS[ITEMS[i].id] ? true : false);
  });
}

function selectChoice(itemId, key){
  ANSWERS[itemId] = key;
  localStorage.setItem('cbt_answers', JSON.stringify(ANSWERS));
  // update panel
  renderPanelNumbers();
}

function renderPanelNumbers(){
  const panel = document.getElementById('panelNumbers');
  panel.innerHTML = '';
  ITEMS.forEach((it, idx) => {
    const div = document.createElement('div');
    div.className = 'num' + (ANSWERS[it.id] ? ' answered' : '') + (idx === CUR_INDEX ? ' current' : '');
    div.textContent = idx+1;
    div.onclick = () => { CUR_INDEX = idx; renderQuestion(); };
    panel.appendChild(div);
  });
}

function prevQuestion(){ if(CUR_INDEX>0){ CUR_INDEX--; renderQuestion(); } }
function nextQuestion(){ if(CUR_INDEX < ITEMS.length-1){ CUR_INDEX++; renderQuestion(); } }

function finishExam(){
  if(!confirm('Kamu yakin ingin mengakhiri ujian?')) return;
  // compute results
  const sess = getSession();
  const endTime = Date.now();
  const answers = ANSWERS;
  const res = computeResult(ITEMS, answers, sess ? sess.startTime : null, endTime);
  setResult(res);
  // redirect to result page
  window.location.href = 'result.html';
}
function logisticProb(theta, a, b, c){
  const expo = Math.exp(-1.7 * a * (theta - b));
  return c + (1 - c) / (1 + expo);
}

function computeLikelihoodForTheta(theta, items, answers){
  let logL = 0; // compute log-likelihood to avoid underflow
  for(const it of items){
    const resp = answers[it.id];
    if(resp === undefined || resp === null) continue; // skip blanks
    const p = logisticProb(theta, it.a, it.b, it.c);
    if(resp === it.answer){
      logL += Math.log(Math.max(1e-12, p));
    } else {
      logL += Math.log(Math.max(1e-12, 1 - p));
    }
  }
  return Math.exp(logL);
}

function eapEstimate(items, answers){
  // theta grid
  const thetas = [];
  for(let t = -4.0; t <= 4.0001; t += 0.1) thetas.push(parseFloat(t.toFixed(2)));
  const prior = (theta) => Math.exp(-0.5 * theta * theta) / Math.sqrt(2*Math.PI); // N(0,1)
  let numer = 0;
  let denom = 0;
  for(const th of thetas){
    const lik = computeLikelihoodForTheta(th, items, answers);
    const post = lik * prior(th);
    numer += th * post;
    denom += post;
  }
  if(denom === 0) return 0;
  const thetaHat = numer/denom;
  // compute posterior variance
  let varP = 0;
  for(const th of thetas){
    const lik = computeLikelihoodForTheta(th, items, answers);
    const post = lik * prior(th);
    const diff = th - thetaHat;
    varP += diff*diff*post;
  }
  varP = varP / denom;
  return {theta: thetaHat, se: Math.sqrt(varP)};
}

function scaleScore(theta){
  return 0; // tidak digunakan lagi
}

function computeResult(items, answers, startTime=null, endTime=null){
  let correct = 0, wrong = 0, blank = 0;
  const perItem = [];
  for(const it of items){
    const resp = answers[it.id];
    const isBlank = (resp === undefined || resp === null);
    const isCorrect = !isBlank && resp === it.answer;
    if(isBlank) blank++;
    else if(isCorrect) correct++;
    else wrong++;

    perItem.push({
      id: it.id, question: it.q, choices: it.choices, answer: it.answer,
      response: resp || null, explain: it.explain
    });
  }

  const irt = eapEstimate(items, answers);

  // ⭐ SCORING BARU
  const scaled = Math.round((correct / items.length) * 100);

  return {
    name: getSession() ? getSession().name : 'Unknown',
    startTime: startTime || Date.now(),
    endTime: endTime || Date.now(),
    numCorrect: correct, numWrong: wrong, numBlank: blank,
    theta: parseFloat(irt.theta.toFixed(4)),
    se: parseFloat(irt.se.toFixed(4)),
    scaledScore: scaled,
    perItem
  };
}

function initResultPage(){
  const sess = getSession();
  const res = getResult();
  if(!res){ alert('Hasil tidak ditemukan. Kembali ke login.'); window.location.href='index.html'; return; }
  document.getElementById('resStudent').textContent = `Peserta: ${res.name}`;
  const timeTakenMs = (res.endTime - res.startTime);
  document.getElementById('timeTaken').textContent = msToTime(timeTakenMs);
  document.getElementById('numCorrect').textContent = res.numCorrect;
  document.getElementById('numWrong').textContent = res.numWrong;
  document.getElementById('numBlank').textContent = res.numBlank;
  document.getElementById('thetaVal').textContent = res.theta.toFixed(2);
  document.getElementById('scaledScore').textContent = res.scaledScore;


  drawDonut('donutCanvas', res.numCorrect, res.numWrong, res.numBlank, ITEMS.length);


  prepareExplanations(res.perItem);
}

function drawDonut(canvasId, numCorrect, numWrong, numBlank, total){
  const c = document.getElementById(canvasId);
  const ctx = c.getContext('2d');
  const w = c.width;
  const h = c.height;
  const cx = w/2, cy = h/2, r = Math.min(w,h)/2 - 8;
  ctx.clearRect(0,0,w,h);
  const correctPct = numCorrect/total;
  const wrongPct = numWrong/total;
  const blankPct = numBlank/total;
  const arr = [
    {pct: correctPct, color1:'#2bd48a', color2:'#38e8a5'},
    {pct: wrongPct, color1:'#ff6b6b', color2:'#ff8b8b'},
    {pct: blankPct, color1:'#cbd5e1', color2:'#e2e8f0'}
  ];
  let start = -Math.PI/2;
  for(const seg of arr){
    const end = start + seg.pct * Math.PI * 2;
    // gradient fill
    const grad = ctx.createLinearGradient(0,0,w,h);
    grad.addColorStop(0, seg.color1);
    grad.addColorStop(1, seg.color2);
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.arc(cx,cy,r,start,end);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();
    start = end;
  }
  // inner circle (cutout)
  ctx.beginPath();
  ctx.arc(cx,cy,r*0.62,0,Math.PI*2);
  ctx.fillStyle = '#071021';
  ctx.fill();

  // center text
  ctx.fillStyle = '#dff6ff';
  ctx.font = '600 18px Orbitron, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${Math.round((numCorrect/total)*100)}%`, cx, cy - 6);
  ctx.font = '13px Inter, sans-serif';
  ctx.fillText('Benar', cx, cy + 14);
}

function msToTime(ms){
  const sec = Math.floor(ms/1000);
  const h = Math.floor(sec/3600);
  const m = Math.floor((sec%3600)/60);
  const s = sec%60;
  return `${h}j ${m}m ${s}s`;
}

function backToLogin(){
  if(!confirm('Kembali ke login akan menghapus sesi dan jawaban.')) return;
  clearAll();
  window.location.href = 'index.html';
}

function prepareExplanations(perItem){
  const container = document.getElementById('explanations');
  container.innerHTML = '';
  perItem.forEach((it, idx) => {
    const el = document.createElement('div');
    el.className = 'explain-item ' + ((it.response && it.response===it.answer) ? 'correct' : (it.response ? 'wrong' : ''));
    const respText = it.response ? it.response : '<em>Kosong</em>';
    el.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center">
        <div style="font-weight:700;color:#dff1ff">Soal ${idx+1}</div>
        <div style="font-size:13px;color:var(--muted)">Jawabanmu: ${respText} · Kunci: ${it.answer}</div>
      </div>
      <div style="margin-top:8px;color:#dff1ff">${it.question}</div>
      <div style="margin-top:6px;color:var(--muted)"><strong>Pembahasan:</strong> ${it.explain}</div>`;
    container.appendChild(el);
  });
}

function showExplanations(){
  const container = document.getElementById('explanations');
  container.style.display = 'block';
  // scroll to explanations
  container.scrollIntoView({behavior:'smooth'});
}


window.addEventListener('beforeunload', () => {
  if(Object.keys(ANSWERS).length) {
    localStorage.setItem('cbt_answers', JSON.stringify(ANSWERS));
  }
});
