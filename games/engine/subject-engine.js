// subject-engine.js
// Shared engine for PurpleTanuki grade tutors (modular, future‑proof)

(function () {
  // ---------- GLOBAL STATE ----------
  let engineState = {
    title: "",
    subjects: {},
    subjectOrder: [],
    currentSubjectKey: null,
    currentLessonIndex: 0,
    currentQuestionIndex: 0,
    totalLessons: 0,
    completedLessons: {}, // { subjectKey: Set(lessonIndex) }
    storageKey: ""
  };

  // ---------- DOM HELPERS ----------
  function $(id) {
    return document.getElementById(id);
  }

  function show(el) {
    if (el) el.style.display = "block";
  }

  function hide(el) {
    if (el) el.style.display = "none";
  }

  function setText(el, text) {
    if (el) el.textContent = text;
  }

  // ---------- STORAGE ----------
  function makeStorageKey(title) {
    return "tutor-progress-" + (title || "default").replace(/\s+/g, "-").toLowerCase();
  }

  function loadProgressFromStorage() {
    try {
      const raw = localStorage.getItem(engineState.storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return;

      engineState.completedLessons = {};
      Object.keys(parsed).forEach(subjectKey => {
        engineState.completedLessons[subjectKey] = new Set(parsed[subjectKey]);
      });
    } catch (e) {
      console.warn("Failed to load progress:", e);
    }
  }

  function saveProgressToStorage() {
    try {
      const out = {};
      Object.keys(engineState.completedLessons).forEach(subjectKey => {
        out[subjectKey] = Array.from(engineState.completedLessons[subjectKey]);
      });
      localStorage.setItem(engineState.storageKey, JSON.stringify(out));
    } catch (e) {
      console.warn("Failed to save progress:", e);
    }
  }

  // ---------- SUBJECT & LESSON SETUP ----------
  function computeTotalLessons(subjects) {
    let total = 0;
    Object.keys(subjects).forEach(key => {
      const subj = subjects[key];
      if (subj && Array.isArray(subj.lessons)) {
        total += subj.lessons.length;
      }
    });
    return total;
  }

  function initCompletedLessons(subjects) {
    const map = {};
    Object.keys(subjects).forEach(key => {
      map[key] = map[key] || new Set();
    });
    // merge with loaded progress if any
    const existing = engineState.completedLessons || {};
    Object.keys(existing).forEach(key => {
      if (!map[key]) map[key] = new Set();
      existing[key].forEach(idx => map[key].add(idx));
    });
    engineState.completedLessons = map;
  }

  function updateSubjectStatusUI() {
    engineState.subjectOrder.forEach(subjectKey => {
      const subj = engineState.subjects[subjectKey];
      if (!subj || !Array.isArray(subj.lessons)) return;

      const total = subj.lessons.length;
      const completedSet = engineState.completedLessons[subjectKey] || new Set();
      const completed = completedSet.size;

      const statusEl = $(subjectKey + "-status"); // e.g. reading-status, math-status, social-status
      if (statusEl) {
        statusEl.textContent = completed + " / " + total + " lessons";
      }
    });
  }

  // ---------- GLOBAL PROGRESS ----------
  function updateGlobalProgressUI() {
    const fill = $("g6-progress-fill");
    const text = $("g6-progress-text");

    if (!engineState.totalLessons || engineState.totalLessons <= 0) {
      if (fill) fill.style.width = "0%";
      if (text) text.textContent = "0%";
      return;
    }

    let completedTotal = 0;
    Object.keys(engineState.completedLessons).forEach(subjectKey => {
      completedTotal += engineState.completedLessons[subjectKey].size;
    });

    const pct = Math.round((completedTotal / engineState.totalLessons) * 100);
    if (fill) fill.style.width = pct + "%";
    if (text) text.textContent = pct + "%";

    checkGraduation(completedTotal);
  }

  function checkGraduation(completedTotal) {
    if (completedTotal < engineState.totalLessons) return;
    const overlay = $("g6-grad-overlay");
    if (overlay) show(overlay);
  }

  // ---------- SPARKLES ----------
  function sparkleBurst() {
    const sparkles = $("g6-sparkles");
    if (!sparkles) return;

    sparkles.classList.remove("g6-sparkles-active");
    // force reflow
    void sparkles.offsetWidth;
    sparkles.classList.add("g6-sparkles-active");

    setTimeout(() => {
      sparkles.classList.remove("g6-sparkles-active");
    }, 800);
  }

  // ---------- LESSON RENDERING ----------
  function getCurrentLesson() {
    const subj = engineState.subjects[engineState.currentSubjectKey];
    if (!subj || !Array.isArray(subj.lessons)) return null;
    return subj.lessons[engineState.currentLessonIndex] || null;
  }

  function renderLesson() {
    const lesson = getCurrentLesson();
    const subj = engineState.subjects[engineState.currentSubjectKey];
    if (!lesson || !subj) return;

    const subjectLabel = $("g6-lesson-subject-label");
    const titleEl = $("g6-lesson-title");
    const bodyEl = $("g6-lesson-body");

    const displayName = subj.displayName || subj.name || engineState.currentSubjectKey;

    setText(subjectLabel, displayName);
    setText(titleEl, lesson.title || "Lesson " + (engineState.currentLessonIndex + 1));
    if (bodyEl) {
      bodyEl.innerHTML = lesson.body || "";
    }

    const lessonCard = $("g6-lesson-card");
    const quizCard = $("g6-quiz-card");
    show(lessonCard);
    hide(quizCard);
  }

  // ---------- QUIZ FLOW ----------
  function getCurrentQuiz() {
    const lesson = getCurrentLesson();
    if (!lesson || !Array.isArray(lesson.quiz)) return [];
    return lesson.quiz;
  }

  function renderQuestion() {
    const quiz = getCurrentQuiz();
    if (!quiz.length) return;

    const q = quiz[engineState.currentQuestionIndex];
    if (!q) return;

    const subj = engineState.subjects[engineState.currentSubjectKey];
    const displayName = subj.displayName || subj.name || engineState.currentSubjectKey;

    setText($("g6-quiz-subject-label"), displayName);
    setText($("g6-quiz-title"), getCurrentLesson().title || "");
    setText($("g6-quiz-lesson-label"), "Lesson " + (engineState.currentLessonIndex + 1));

    setText($("g6-quiz-prompt"), q.question || "");

    const c1 = $("g6-choice-1");
    const c2 = $("g6-choice-2");
    const c3 = $("g6-choice-3");

    const choices = q.choices || [];
    if (c1) {
      c1.textContent = choices[0] || "";
      c1.onclick = () => handleChoice(0);
    }
    if (c2) {
      c2.textContent = choices[1] || "";
      c2.onclick = () => handleChoice(1);
    }
    if (c3) {
      c3.textContent = choices[2] || "";
      c3.onclick = () => handleChoice(2);
    }

    const progressEl = $("g6-quiz-q-progress");
    if (progressEl) {
      progressEl.textContent =
        "Question " + (engineState.currentQuestionIndex + 1) + " of " + quiz.length;
    }

    const lessonCard = $("g6-lesson-card");
    const quizCard = $("g6-quiz-card");
    hide(lessonCard);
    show(quizCard);
  }

  function handleChoice(choiceIndex) {
    const quiz = getCurrentQuiz();
    if (!quiz.length) return;

    const q = quiz[engineState.currentQuestionIndex];
    const correctIndex = typeof q.correctIndex === "number" ? q.correctIndex : 0;

    // You can expand this later with feedback, animations, etc.
    const isCorrect = choiceIndex === correctIndex;
    if (isCorrect) {
      sparkleBurst();
    }

    engineState.currentQuestionIndex++;

    if (engineState.currentQuestionIndex >= quiz.length) {
      finishLesson();
    } else {
      renderQuestion();
    }
  }

  function finishLesson() {
    const subjKey = engineState.currentSubjectKey;
    if (!subjKey) return;

    const completedSet = engineState.completedLessons[subjKey] || new Set();
    completedSet.add(engineState.currentLessonIndex);
    engineState.completedLessons[subjKey] = completedSet;

    saveProgressToStorage();
    updateSubjectStatusUI();
    updateGlobalProgressUI();

    const quizCard = $("g6-quiz-card");
    const lessonCard = $("g6-lesson-card");
    hide(quizCard);
    show(lessonCard);
  }

  // ---------- PUBLIC API FUNCTIONS ----------
  function loadSubjects(subjects, title) {
    engineState.title = title || "Tutor";
    engineState.subjects = subjects || {};
    engineState.subjectOrder = Object.keys(engineState.subjects);
    engineState.storageKey = makeStorageKey(engineState.title);
    engineState.totalLessons = computeTotalLessons(engineState.subjects);

    loadProgressFromStorage();
    initCompletedLessons(engineState.subjects);
    updateSubjectStatusUI();
    updateGlobalProgressUI();

    // Optional: set page title and header text
    if (document && title) {
      document.title = title + " — Purple Tanuki";
      const headerTitle = document.querySelector(".g6-title");
      if (headerTitle) headerTitle.textContent = title;
    }
  }

  function selectSubject(subjectKey) {
    if (!engineState.subjects[subjectKey]) return;
    engineState.currentSubjectKey = subjectKey;
    engineState.currentLessonIndex = 0;
    engineState.currentQuestionIndex = 0;
    renderLesson();
  }

  function startQuiz() {
    const quiz = getCurrentQuiz();
    if (!quiz.length) return;
    engineState.currentQuestionIndex = 0;
    renderQuestion();
  }

  function backToLesson() {
    const lessonCard = $("g6-lesson-card");
    const quizCard = $("g6-quiz-card");
    show(lessonCard);
    hide(quizCard);
  }

  function goHome() {
    // If a global home handler exists (e.g., Arcade Hub), use it
    if (typeof window.goToArcade === "function") {
      window.goToArcade();
      return;
    }
    // Fallback: go back to Arcade folder
    try {
      window.location.href = "../arcade/index.html";
