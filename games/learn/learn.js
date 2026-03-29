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

// ---------- PARENT MODE + PROGRESS ----------

function getLessonsRequired() {
  try {
    const raw = localStorage.getItem("pt_lessons_required");
    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n <= 0) return 1;
    return n;
  } catch {
    return 1;
  }
}

function loadCompletedLessons() {
  try {
    const raw = localStorage.getItem("pt_g5_lessons_completed");
    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n < 0) return 0;
    return n;
  } catch {
    return 0;
  }
}

function saveCompletedLessons(count) {
  try {
    localStorage.setItem("pt_g5_lessons_completed", String(count));
  } catch {}
}

function setExploreUnlocked() {
  try {
    localStorage.setItem("pt_explore_unlocked", "true");
  } catch {}
}

function isExploreUnlocked() {
  try {
    return localStorage.getItem("pt_explore_unlocked") === "true";
  } catch {
    return false;
  }
}

// ---------- XP + STREAK ----------

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function loadXP() {
  try {
    const raw = localStorage.getItem("pt_xp_total");
    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n < 0) return 0;
    return n;
  } catch {
    return 0;
  }
}

function saveXP(xp) {
  try {
    localStorage.setItem("pt_xp_total", String(xp));
  } catch {}
}

function addXP(amount) {
  const current = loadXP();
  const next = current + amount;
  saveXP(next);
}

function loadStreak() {
  try {
    const raw = localStorage.getItem("pt_daily_streak");
    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n < 0) return 0;
    return n;
  } catch {
    return 0;
  }
}

function saveStreak(streak) {
  try {
    localStorage.setItem("pt_daily_streak", String(streak));
  } catch {}
}

function loadLastActive() {
  try {
    return localStorage.getItem("pt_last_active_date") || "";
  } catch {
    return "";
  }
}

function saveLastActive(dateKey) {
  try {
    localStorage.setItem("pt_last_active_date", dateKey);
  } catch {}
}

function updateStreakOnActivity() {
  const today = todayKey();
  const last = loadLastActive();
  let streak = loadStreak();

  if (!last) {
    streak = 1;
  } else if (last === today) {
    // same day, no change
  } else {
    const lastDate = new Date(last);
    const t = new Date(today);
    const diff = (t - lastDate) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak += 1;
    } else {
      streak = 1;
    }
  }

  saveStreak(streak);
  saveLastActive(today);
}

// ---------- LESSON LIST + PATH ----------

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

function updateProgressRing() {
  const percentEl = document.getElementById("learnProgressPercent");
  if (!percentEl || learnState.lessons.length === 0) return;
  const completed = loadCompletedLessons();
  const percent = Math.round((completed / learnState.lessons.length) * 100);
  percentEl.textContent = `${percent}%`;
}

function renderPath() {
  const container = document.getElementById("learnPath");
  if (!container) return;
  container.innerHTML = "";

  const completedCount = loadCompletedLessons();
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
      const currentCompleted = loadCompletedLessons();
      if (index > currentCompleted) return;
      openLesson(index);
    });

    row.appendChild(node);
    container.appendChild(row);
  });

  updateProgressRing();
}

// ---------- LESSON + QUIZ FLOW ----------

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

// ---------- LESSON COMPLETE + GATING ----------

function finishLessonStep() {
  // XP + streak for finishing a lesson
  addXP(10);
  updateStreakOnActivity();

  const total = learnState.lessons.length;
  let completed = loadCompletedLessons();

  if (learnState.currentIndex >= completed) {
    completed = learnState.currentIndex + 1;
    if (completed > total) completed = total;
    saveCompletedLessons(completed);
  }

  renderPath();
  closeQuiz();
  showCelebrate();

  const required = getLessonsRequired();

  // If we've met or exceeded Parent Mode requirement, go to Ritual
  if (completed >= required && !isExploreUnlocked()) {
    setExploreUnlocked(); // mark unlocked so Explore can open
    setTimeout(() => {
      window.location.href = "/games/ritual/index.html";
    }, 600);
  }
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
      const completed = loadCompletedLessons();
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
      if (isExploreUnlocked()) {
        window.location.href = "/explore/index.html";
      } else {
        alert("Keep learning to unlock Explore!");
      }
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

  const completed = loadCompletedLessons();
  if (completed < learnState.lessons.length) {
    openLesson(completed);
  }
});
