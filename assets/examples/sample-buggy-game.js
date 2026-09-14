// ไฟล์ตัวอย่างสำหรับฝึก Code Review / Debug
let score = 0;
let locked = false;

function answer(isCorrect) {
  // BUG: ไม่ตรวจ locked ทำให้กดซ้ำได้
  if (isCorrect) score += 10;
  else score -= 5; // BUG: คะแนนติดลบได้
  document.getElementById('score').textContent = score;
  setTimeout(nextQuestion, 800);
}

function nextQuestion() {
  // TODO: เพิ่มการตรวจว่าจบเกมหรือยัง
  renderQuestion();
}
