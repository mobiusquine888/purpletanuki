// ============================================================
// UNIVERSAL SUBJECT ENGINE — PurpleTanuki
// Works for Preschool, Kindergarten, Grade 7, Life Skills, etc.
// ============================================================

// Global state
let SUBJECT_DATA = null;
let SUBJECT_NAME = "";
let currentSubject = null;
let currentLessonIndex = 0;
let currentQuizIndex = 0;
let currentLesson = null;
let currentQuiz = null;

// ------------------------------------------------------------
// INITIALIZATION
// ------------------------------------------------------------
function loadSubjects(data, name) {
  SUBJECT_DATA = data;
  SUBJECT_NAME = name;

  updateAllSubjectStatus();
  updateProgressBar();
}

// ------------------------------------------------------------
// SUBJECT SELECTION
// ------------------------------------------------------------
function selectSubject(key) {
  currentSubject = key;
  currentLessonIndex = 0;
  currentQuizIndex = 0;

  showLessonCard();
  loadLesson();
}

// Show lesson card helper (missing before)
function showLessonCard() {
  hideAll();
  const card = document.getElementById("lesson-card");
  if (card) card.style.display = "block";
}

// ------------------------------------------------------------
// LESSON FLOW
// ------------------------------------------------------------
function loadLesson() {
  const subject = SUBJECT_DATA[currentSubject];
  currentLesson = subject.lessons[currentLessonIndex];

  document.getElementById("lesson-subject-label").textContent = subject.displayName;
  document.getElementById("lesson-title").textContent = currentLesson.title;
  document.getElementById("lesson-body").textContent = currentLesson.body;

  hideAll();
  document.getElementById("lesson-card").style.display = "block";
}

function startQuiz() {
  currentQuizIndex = 0;
  loadQuiz();
}

// ------------------------------------------------------------
// QUIZ FLOW
// ------------------------------------------------------------
function loadQuiz() {
  const subject = SUBJECT_DATA[currentSubject];
  currentLesson = subject.lessons[currentLessonIndex];
  currentQuiz = currentLesson.quiz[currentQuizIndex];

  document.getElementById("quiz-subject-label").textContent = subject.displayName;
  document.getElementById("quiz-title").textContent = currentLesson.title;
  document.getElementById("quiz-lesson-label").textContent = `Question ${currentQuizIndex + 1}`;
  document.getElementById("quiz-prompt").textContent = currentQuiz.question;

  const choices = shuffle([...currentQuiz.choices]);
  const correctValue = currentQuiz.choices[currentQuiz.correctIndex];

  const ids = ["choice-1", "choice-2", "choice-3"];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    el.textContent = choices[i];
    el.className = "choice-btn";
    el.onclick = () => checkAnswer(el, correctValue);
  });

  document.getElementById("quiz-q-progress").textContent =
    `${currentQuizIndex + 1} / ${currentLesson.quiz.length}`;

  hideAll();
  document.getElementById("quiz-card").style.display = "block";
}

function checkAnswer(el, correct) {
  if (el.textContent === correct) {
    el.classList.add("correct");
    spawnSparkles();

    setTimeout(() => {
      currentQuizIndex++;

      if (currentQuizIndex >= currentLesson.quiz.length) {
        completeLesson();
      } else {
        loadQuiz();
      }
    }, 500);

  } else {
    el.classList.add("wrong");
    setTimeout(() => el.classList.remove("wrong"), 400);
  }
}

// ------------------------------------------------------------
// LESSON COMPLETION
// ------------------------------------------------------------
function completeLesson() {
  incrementSubjectProgress(currentSubject);

  currentLessonIndex++;
  const subject = SUBJECT_DATA[currentSubject];

  if (currentLessonIndex >= subject.lessons.length) {
    checkForGraduation();
    return;
  }

  loadLesson();
}

// ------------------------------------------------------------
// PROGRESS + MASTERY
// ------------------------------------------------------------
function incrementSubjectProgress(key) {
  const subject = SUBJECT_DATA[key];
  subject.progress = (subject.progress || 0) + 1;

  updateSubjectStatus(key);
  updateProgressBar();
}

function updateSubjectStatus(key) {
  const subject = SUBJECT_DATA[key];
  const el = document.getElementById(`${key}-status`);
  if (!el) return;

  const total = subject.lessons.length;
  const done = subject.progress || 0;

  el.textContent = `${done} / ${total}`;
}

function updateAllSubjectStatus() {
  Object.keys(SUBJECT_DATA).forEach(updateSubjectStatus);
}

function updateProgressBar() {
  const totals = Object.values(SUBJECT_DATA).map(s => s.lessons.length);
  const dones = Object.values(SUBJECT_DATA).map(s => s.progress || 0);

  const total = totals.reduce((a, b) => a + b, 0);
  const done = dones.reduce((a, b) => a + b, 0);

  const pct = Math.round((done / total) * 100);

  document.getElementById("progress-fill").style.width = `${pct}%`;
  document.getElementById("progress-text").textContent = `${pct}%`;
}

// ------------------------------------------------------------
// GRADUATION
// ------------------------------------------------------------
function checkForGraduation() {
  const allDone = Object.keys(SUBJECT_DATA).every(
    key => (SUBJECT_DATA[key].progress || 0) >= SUBJECT_DATA[key].lessons.length
  );

  if (allDone) {
    document.getElementById("grad-overlay").style.display = "flex";
  } else {
    backToSubjects();
  }
}

function unlockReward() {
  window.location.href = "https://www.youtube.com";
}

// ------------------------------------------------------------
// NAVIGATION
// ------------------------------------------------------------
function backToLesson() {
  loadLesson();
}

function backToSubjects() {
  hideAll();
  document.getElementById("subject-status-list").style.display = "flex";
}

function goHome() {
  window.location.href = "../../index.html";
}

// ------------------------------------------------------------
// SPARKLES
// ------------------------------------------------------------
function spawnSparkles() {
  const container = document.getElementById("sparkles");
  const count = 6;

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "sparkle";
    span.textContent = "✨";
    span.style.left = 40 + Math.random() * 20 + "%";
    span.style.top = "55%";
    container.appendChild(span);
    setTimeout(() => span.remove(), 700);
  }
}

// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------
function hideAll() {
  document.getElementById("lesson-card").style.display = "none";
  document.getElementById("quiz-card").style.display = "none";
  document.getElementById("subject-status-list").style.display = "none";
}

function shuffle(arr) {
  return arr
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

