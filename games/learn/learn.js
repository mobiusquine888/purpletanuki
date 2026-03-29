const learnState = {
  lessons: [],
  currentIndex: 0,
  currentQuestionIndex: 0,
  inQuiz: false
};

function getGradeData() {
  if (window.grade5Data) return window.grade5Data;
  if (window.gradeData) return window.gradeData;
  if (window.currentGradeData) return window.currentGradeData;
  return null;
}

function buildLessonList() {
  const gradeData = getGradeData();
  if (!gradeData) return;

  const subjects = Object.keys(gradeData);
  const lessons = [];

  subjects.forEach(subjectKey => {
    const subject = gradeData[subjectKey];
    subject.lessons.forEach((lesson, idx) => {
      lessons.push({
        subjectKey,
        subjectName: subject.displayName || subjectKey,
        lessonIndex: idx,
        lessonId: lesson.id,
        title: lesson.title,
        html: lesson.lessonHtml,
        questions: lesson.questions
      });
    });
  });

  learnState.lessons = lessons;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("g5LearnPathProgress");
    if (!raw) return 0;
    const n = parseInt(raw, 10);
    if (Number.isNaN(n)) return 0;
    return Math.max(0, Math.min(n, learnState.lessons.length));
  } catch {
    return 0;
  }
}

function saveProgress(count) {
  try {
    localStorage.setItem("g5LearnPathProgress", String(count));
  } catch {
  }
}

function updateProgressRing() {
  const percentEl = document.getElementById("learnProgressPercent");
  if (!percentEl || learnState.lessons.length === 0) return;
  const completed = loadProgress();
  const percent = Math.round((completed / learnState.lessons.length) * 100);
  percentEl.textContent = `${percent}%`;
}

function renderPath() {
  const container = document.getElementById("learnPath");
  if (!container) return;
  container.innerHTML = "";

  const completedCount = loadProgress();
  const total = learnState.lessons.length;

  learnState.lessons.forEach((lesson, index) => {
    const row = document.createElement("div");
    row.className = "learn-node-row";

    const node = document.createElement("button");
    node.type = "button";
    node.className = "learn-node";

    const label = document.createElement("div");
    label.className = "learn-node-label";
    label.textContent = lesson.subjectName;

    const idx = document.createElement("div");
    idx.className = "learn-node-index";
    idx.textContent = lesson.lessonId || index + 1;

    const dot = document.createElement("div");
    dot.className = "learn-node-subject-dot";

    node.appendChild(label);
    node.appendChild(idx);
    node.appendChild(dot);

    if (index < completedCount) {
      node.classList.add("complete");
    } else if (index === completedCount) {
      node.classList.add("current");
    } else {
      node.classList.add("locked");
    }

    node.dataset.index = String(index);

    node.addEventListener("click", () => {
      const currentCompleted = loadProgress();
      if (index > currentCompleted) return;
      openLesson(index);
    });

    row.appendChild(node);
    container.appendChild(row);
  });

  updateProgressRing();
}

function openLesson(index) {
  learnState.currentIndex = index;
  learnState.inQuiz = false;

  const lesson = learnState.lessons[index];
  if (!lesson) return;

  const lessonPanel = document.getElementById("lessonPanel");
  const quizPanel = document.getElementById("quizPanel");

  if (quizPanel) quizPanel.classList.add("hidden");
  if (lessonPanel) {
    document.getElementById("lessonSubject").textContent = lesson.subjectName;
    document.getElementById("lessonTitle").textContent = `Lesson ${lesson.lessonId}: ${lesson.title}`;
    document.getElementById("lessonBody").innerHTML = lesson.html;
    lessonPanel.classList.remove("hidden");
  }
}

function closeLesson() {
  const lessonPanel = document.getElementById("lessonPanel");
  if (lessonPanel) lessonPanel.classList.add("hidden");
}

function closeQuiz() {
  const quizPanel = document.getElementById("quizPanel");
  if (quizPanel) quizPanel.classList.add("hidden");
  learnState.inQuiz = false;
}

function startQuiz() {
  const lesson = learnState.lessons[learnState.currentIndex];
  if (!lesson) return;
  learnState.inQuiz = true;
  learnState.currentQuestionIndex = 0;
  showQuestion();
}

function showQuestion() {
  const lesson = learnState.lessons[learnState.currentIndex];
  if (!lesson) return;

  const qIndex = learnState.currentQuestionIndex;
  const q = lesson.questions[qIndex];
  if (!q) return;

  const lessonPanel = document.getElementById("lessonPanel");
  const quizPanel = document.getElementById("quizPanel");

  if (lessonPanel) lessonPanel.classList.add("hidden");
  if (quizPanel) quizPanel.classList.remove("hidden");

  document.getElementById("quizSubject").textContent = lesson.subjectName;
  document.getElementById("quizLessonLabel").textContent = `Lesson ${lesson.lessonId}`;
  document.getElementById("quizProgressLabel").textContent =
    `Question ${qIndex + 1} of ${lesson.questions.length}`;
  document.getElementById("quizPrompt").textContent = q.prompt;

  const choices = [q.choices[0], q.choices[1], q.choices[2]];

  const c1 = document.getElementById("quizChoice1");
  const c2 = document.getElementById("quizChoice2");
  const c3 = document.getElementById("quizChoice3");

  [c1, c2, c3].forEach(btn => {
    if (!btn) return;
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });

  if (c1) {
    c1.textContent = choices[0];
    c1.onclick = () => submitAnswer(choices[0]);
  }
  if (c2) {
    c2.textContent = choices[1];
    c2.onclick = () => submitAnswer(choices[1]);
  }
  if (c3) {
    c3.textContent = choices[2];
    c3.onclick = () => submitAnswer(choices[2]);
  }
}

function triggerSparkles() {
  const spark = document.getElementById("learnSparkles");
  if (!spark) return;
  spark.classList.add("active");
  setTimeout(() => spark.classList.remove("active"), 500);
}

function showCelebrate() {
  const overlay = document.getElementById("learnCelebrate");
  if (!overlay) return;
  overlay.classList.remove("hidden");
}

function hideCelebrate() {
  const overlay = document.getElementById("learnCelebrate");
  if (!overlay) return;
  overlay.classList.add("hidden");
}

function submitAnswer(choice) {
  const lesson = learnState.lessons[learnState.currentIndex];
  if (!lesson) return;

  const qIndex = learnState.currentQuestionIndex;
  const q = lesson.questions[qIndex];
  if (!q) return;

  const buttons = [
    document.getElementById("quizChoice1"),
    document.getElementById("quizChoice2"),
    document.getElementById("quizChoice3")
  ];

  buttons.forEach(btn => {
    if (!btn) return;
    btn.disabled = true;
    if (btn.textContent === q.correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === choice && choice !== q.correct) {
      btn.classList.add("wrong");
    }
  });

  if (choice === q.correct) {
    triggerSparkles();
    setTimeout(() => {
      learnState.currentQuestionIndex++;
      if (learnState.currentQuestionIndex >= lesson.questions.length) {
        finishLessonStep();
      } else {
        showQuestion();
      }
    }, 450);
  } else {
    setTimeout(() => {
      buttons.forEach(btn => {
        if (!btn) return;
        btn.disabled = false;
        btn.classList.remove("wrong");
      });
    }, 450);
  }
}

function finishLessonStep() {
  const total = learnState.lessons.length;
  let completed = loadProgress();
  if (learnState.currentIndex >= completed) {
    completed = learnState.currentIndex + 1;
    if (completed > total) completed = total;
    saveProgress(completed);
  }
  renderPath();
  closeQuiz();
  showCelebrate();
}

function attachHandlers() {
  const closeLessonBtn = document.getElementById("closeLesson");
  if (closeLessonBtn) closeLessonBtn.addEventListener("click", closeLesson);

  const closeQuizBtn = document.getElementById("closeQuiz");
  if (closeQuizBtn) closeQuizBtn.addEventListener("click", closeQuiz);

  const startQuizBtn = document.getElementById("startQuiz");
  if (startQuizBtn) startQuizBtn.addEventListener("click", startQuiz);

  const nextStepBtn = document.getElementById("nextStep");
  if (nextStepBtn) {
    nextStepBtn.addEventListener("click", () => {
      hideCelebrate();
      const completed = loadProgress();
      if (completed < learnState.lessons.length) {
        openLesson(completed);
      }
    });
  }

  const navHome = document.getElementById("navHome");
  if (navHome) {
    navHome.addEventListener("click", () => {
      window.location.href = "/arcade/index.html";
    });
  }

  const navExplore = document.getElementById("navExplore");
  if (navExplore) {
    navExplore.addEventListener("click", () => {
      window.location.href = "/explore/index.html";
    });
  }

  const navProfile = document.getElementById("navProfile");
  if (navProfile) {
    navProfile.addEventListener("click", () => {
      window.location.href = "/profile/index.html";
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildLessonList();
  renderPath();
  attachHandlers();

  const completed = loadProgress();
  if (completed < learnState.lessons.length) {
    openLesson(completed);
  }
});
