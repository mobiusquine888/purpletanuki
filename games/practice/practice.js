// ============================================================
// PRACTICE MODE — CONTROLLER
// ============================================================

const subjectSelect = document.getElementById("subject-select");
const difficultySelect = document.getElementById("difficulty-select");
const countSelect = document.getElementById("count-select");
const startBtn = document.getElementById("start-btn");
const cardContainer = document.getElementById("card-container");

let currentQuestionIndex = 0;
let totalQuestions = 0;
let subject = "";
let difficulty = "";
let questions = [];
let score = 0;

startBtn.addEventListener("click", () => {
  subject = subjectSelect.value;
  difficulty = difficultySelect.value;
  totalQuestions = parseInt(countSelect.value, 10);

  currentQuestionIndex = 0;
  score = 0;
  questions = [];

  for (let i = 0; i < totalQuestions; i++) {
    const q = window.remoteFallback.fallbackGenerate(subject, difficulty);
    questions.push(q);
  }

  renderQuestion();
});

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  cardContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "challenge-card";

  const questionEl = document.createElement("div");
  questionEl.className = "question-text";
  questionEl.textContent = q.question;
  card.appendChild(questionEl);

  if (q.type === "mc") {
    renderMultipleChoice(card, q);
  } else if (q.type === "text") {
    renderTextInput(card, q);
  } else if (q.type === "tf") {
    renderTrueFalse(card, q);
  }

  cardContainer.appendChild(card);
}

function renderMultipleChoice(card, q) {
  const wrapper = document.createElement("div");
  wrapper.className = "options-wrapper";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;

    btn.addEventListener("click", () => handleAnswer(opt, q.answer));
    wrapper.appendChild(btn);
  });

  card.appendChild(wrapper);
}

function renderTextInput(card, q) {
  const input = document.createElement("input");
  input.className = "text-input";
  input.placeholder = "Type your answer...";

  const submit = document.createElement("button");
  submit.className = "submit-btn";
  submit.textContent = "Submit";

  submit.addEventListener("click", () => {
    handleAnswer(input.value.trim().toLowerCase(), String(q.answer).toLowerCase());
  });

  card.appendChild(input);
  card.appendChild(submit);
}

function renderTrueFalse(card, q) {
  const wrapper = document.createElement("div");
  wrapper.className = "tf-wrapper";

  const trueBtn = document.createElement("button");
  trueBtn.className = "tf-btn";
  trueBtn.textContent = "True";

  const falseBtn = document.createElement("button");
  falseBtn.className = "tf-btn";
  falseBtn.textContent = "False";

  trueBtn.addEventListener("click", () => handleAnswer(true, q.answer));
  falseBtn.addEventListener("click", () => handleAnswer(false, q.answer));

  wrapper.appendChild(trueBtn);
  wrapper.appendChild(falseBtn);
  card.appendChild(wrapper);
}

function handleAnswer(userAnswer, correctAnswer) {
  if (String(userAnswer) === String(correctAnswer)) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= totalQuestions) {
    endSession();
  } else {
    renderQuestion();
  }
}

function endSession() {
  cardContainer.innerHTML = "";

  const summary = document.createElement("div");
  summary.className = "summary-card";

  summary.innerHTML = `
    <h2>Session Complete!</h2>
    <p>You scored <strong>${score}</strong> out of <strong>${totalQuestions}</strong>.</p>
    <button id="restart-btn">Start Again</button>
  `;

  cardContainer.appendChild(summary);

  document.getElementById("restart-btn").addEventListener("click", () => {
    cardContainer.innerHTML = "";
  });

  // ⭐ STEP 4 — Unlock target after ritual
  ritualComplete();
}


// ============================================================
// RITUAL COMPLETE — STEP 4
// ============================================================

function ritualComplete() {
  const target = localStorage.getItem("nextUnlockTarget");

  if (target === "youtube") {
    localStorage.removeItem("nextUnlockTarget");
    window.location.href = "https://www.youtube.com";
    return;
  }

  // Future targets can be added here
}
