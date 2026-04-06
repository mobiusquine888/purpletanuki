// -------------------------------
//   GRADE 7 MATH ENGINE (FIXED)
//   Mastery-based progression
//   Progress never decreases
// -------------------------------

let lessons = [];
let currentLesson = 0;          // Which lesson is open
let completedLessons = 0;       // How many lessons have been mastered

async function loadLessons() {
  try {
    const res = await fetch("/curriculum/grade7/math/grade7_math.json");
    const data = await res.json();
    lessons = data.lessons || [];

    // Load saved progress if available
    const saved = localStorage.getItem("g7_progress");
    if (saved) {
      completedLessons = parseInt(saved, 10);
      currentLesson = completedLessons; // Continue where user left off
    }

    renderCategories();
  } catch (e) {
    console.error("Failed to load lessons", e);
  }
}

function renderCategories() {
  const list = document.getElementById("category-list");

  list.innerHTML = lessons
    .map(
      (l, i) => `
      <button class="category-item" onclick="openLesson(${i})" 
        ${i > completedLessons ? "disabled" : ""}>
        <div class="category-title">${l.title}</div>
        <div class="category-subtitle">${l.subject}</div>
      </button>
    `
    )
    .join("");

  document.getElementById("category-list").style.display = "flex";
  document.getElementById("lesson-card").style.display = "none";
  document.getElementById("quiz-card").style.display = "none";

  updateProgress();
}

function openLesson(i) {
  currentLesson = i;
  const l = lessons[i];

  document.getElementById("lesson-subject-label").innerText = l.subject;
  document.getElementById("lesson-title").innerText = l.title;
  document.getElementById("lesson-body").innerText = l.body;

  document.getElementById("category-list").style.display = "none";
  document.getElementById("lesson-card").style.display = "block";
  document.getElementById("quiz-card").style.display = "none";
}

function returnToCategories() {
  renderCategories();
}

function startQuiz() {
  const q = lessons[currentLesson].quiz;

  document.getElementById("quiz-prompt").innerText = q.prompt;

  document.getElementById("quiz-choices").innerHTML = q.choices
    .map(
      (c) => `
      <button class="choice-btn" onclick="checkAnswer('${c.replace(/'/g, "\\'")}')">${c}</button>
    `
    )
    .join("");

  document.getElementById("lesson-card").style.display = "none";
  document.getElementById("quiz-card").style.display = "block";
}

function checkAnswer(choice) {
  const correct = lessons[currentLesson].quiz.answer;

  if (choice === correct) {
    // Only increase completed lessons if this lesson wasn't already completed
    if (currentLesson === completedLessons) {
      completedLessons++;
      localStorage.setItem("g7_progress", completedLessons);
    }

    updateProgress();

    if (completedLessons >= lessons.length) {
      showGraduation();
    } else {
      returnToCategories();
    }
  } else {
    alert("Try again!");
  }
}

function updateProgress() {
  const pct = lessons.length
    ? Math.floor((completedLessons / lessons.length) * 100)
    : 0;

  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").innerText = pct + "%";
}

function showGraduation() {
  document.getElementById("grad-overlay").style.display = "flex";
}

function goHome() {
  window.location.href = "/home.html";
}

loadLessons();


