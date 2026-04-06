let lessons = [];
let currentIndex = 0;

async function loadLessons() {
  const res = await fetch("grade7_math.json");
  const data = await res.json();
  lessons = data.lessons;
  renderCategories();
}

function renderCategories() {
  document.getElementById("category-list").innerHTML = lessons
    .map(
      (l, i) => `
      <button class="category-item" onclick="openLesson(${i})">
        <div class="category-title">${l.title}</div>
        <div class="category-subtitle">${l.subject}</div>
      </button>
    `
    )
    .join("");

  updateProgress();
}

function openLesson(i) {
  currentIndex = i;
  const l = lessons[i];

  document.getElementById("lesson-subject-label").innerText = l.subject;
  document.getElementById("lesson-title").innerText = l.title;
  document.getElementById("lesson-body").innerText = l.body;

  document.getElementById("category-list").style.display = "none";
  document.getElementById("lesson-card").style.display = "block";
  document.getElementById("quiz-card").style.display = "none";
}

function returnToCategories() {
  document.getElementById("category-list").style.display = "flex";
  document.getElementById("lesson-card").style.display = "none";
  document.getElementById("quiz-card").style.display = "none";
}

function startQuiz() {
  const q = lessons[currentIndex].quiz;

  document.getElementById("quiz-prompt").innerText = q.prompt;

  document.getElementById("quiz-choices").innerHTML = q.choices
    .map(
      (c) => `
      <button class="choice-btn" onclick="checkAnswer('${c}')">${c}</button>
    `
    )
    .join("");

  document.getElementById("lesson-card").style.display = "none";
  document.getElementById("quiz-card").style.display = "block";
}

function checkAnswer(choice) {
  const correct = lessons[currentIndex].quiz.answer;

  if (choice === correct) {
    currentIndex++;
    updateProgress();

    if (currentIndex >= lessons.length) {
      showGraduation();
    } else {
      returnToCategories();
    }
  } else {
    alert("Try again!");
  }
}

function updateProgress() {
  const pct = Math.floor((currentIndex / lessons.length) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").innerText = pct + "%";
}

function showGraduation() {
  document.getElementById("grad-overlay").style.display = "flex";
}

function goHome() {
  window.location.href = "/frontend/home.html";
}

loadLessons();
