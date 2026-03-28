// ============================================================
// LEARN PAGE ENGINE — WITH BUILT-IN FALLBACK
// Respects grade, subjects, curriculum mode, and progress
// Never shows "no lessons available" if fallback works
// ============================================================

document.addEventListener("DOMContentLoaded", async () => {

  // -----------------------------
  // 1. READ SETTINGS FROM PARENT PORTAL
  // -----------------------------
  const grade = localStorage.getItem("pt_grade");
  if (!grade) return showError("No grade selected. Please ask an adult to set it in Parent Mode.");

  const allowedSubjectsRaw = localStorage.getItem(`pt_allowed_subjects_${grade}`);
  const allowedSubjects = allowedSubjectsRaw ? JSON.parse(allowedSubjectsRaw) : [];

  if (allowedSubjects.length === 0) {
    return showError("No subjects enabled. Please ask an adult to enable subjects in Parent Mode.");
  }

  const curriculumMode = localStorage.getItem("pt_curriculum_mode") || "default";
  const customCurriculumUrl = localStorage.getItem("pt_curriculum_url") || null;


  // -----------------------------
  // 2. CHOOSE SUBJECT (child-facing)
  // -----------------------------
  const subject = chooseSubject(allowedSubjects);
  if (!subject) return showError("No subject selected.");

  localStorage.setItem("pt_category", subject);


  // -----------------------------
  // 3. LOAD CURRICULUM FILE (IF AVAILABLE)
  // -----------------------------
  let curriculumData = null;

  try {
    if (curriculumMode === "default") {
      // Load built-in grade file, e.g. /games/grade2/grade2.js → window.grade2Data
      await loadScript(`/games/${grade}/${grade}.js`);
      curriculumData = window[`${grade}Data`] || null;
    } else if (customCurriculumUrl) {
      curriculumData = await fetch(customCurriculumUrl).then(r => r.json());
    }
  } catch (err) {
    // Ignore errors here; fallback will handle missing curriculum
    curriculumData = null;
  }


  // -----------------------------
  // 4. DETERMINE LESSON PROGRESS
  // -----------------------------
  const progressKey = `pt_progress_${grade}_${subject}`;
  let progress = Number(localStorage.getItem(progressKey)) || 0;


  // -----------------------------
  // 5. PICK LESSON: CURRICULUM → FALLBACK
  // -----------------------------
  let lesson = null;

  if (curriculumData && curriculumData[subject] && Array.isArray(curriculumData[subject].lessons)) {
    const lessons = curriculumData[subject].lessons;

    if (lessons.length > 0) {
      if (progress >= lessons.length) {
        progress = 0;
      }
      lesson = lessons[progress];
    }
  }

  // If no valid lesson from curriculum, use fallback
  if (!lesson) {
    lesson = fallbackGenerate(grade, subject, progress);
  }

  // If fallback somehow fails, show error
  if (!lesson) {
    return showError("No lesson could be generated. Please try again later.");
  }


  // -----------------------------
  // 6. RENDER LESSON
  // -----------------------------
  renderLesson(lesson);


  // -----------------------------
  // 7. HANDLE ANSWER SUBMISSION
  // -----------------------------
  document.getElementById("submitAnswer").onclick = () => {
    const selected = document.querySelector("input[name='answer']:checked");
    if (!selected) return alert("Choose an answer first!");

    if (selected.value === lesson.answer) {
      // Correct → unlock portal
      localStorage.setItem("pt_portal_unlocked", "true");

      // Advance progress
      localStorage.setItem(progressKey, progress + 1);

      window.location.href = "/games/ritual/ritual.html";
    } else {
      alert("Try again!");
    }
  };

});


// ============================================================
// FALLBACK ENGINE — ALWAYS RETURNS A VALID LESSON
// ============================================================

function fallbackGenerate(grade, subject, progress) {
  // Normalize subject to a small set of known types
  const s = subject.toLowerCase();

  if (s === "math") {
    return fallbackMath(grade, progress);
  }
  if (s === "reading") {
    return fallbackReading(grade, progress);
  }
  if (s === "science") {
    return fallbackScience(grade, progress);
  }
  if (s === "social") {
    return fallbackSocial(grade, progress);
  }
  if (s === "vocabulary") {
    return fallbackVocabulary(grade, progress);
  }
  if (s === "logic") {
    return fallbackLogic(grade, progress);
  }

  // Generic catch-all
  return {
    title: "Quick Thinking",
    question: "Which of these is the best answer?",
    options: ["A", "B", "C"],
    answer: "A"
  };
}


// -----------------------------
// Fallback templates per subject
// -----------------------------

function fallbackMath(grade, progress) {
  // Simple progression: start with single-digit, then two-digit, etc.
  const n1 = (progress % 9) + 1;
  const n2 = ((progress * 2) % 9) + 1;
  const correct = n1 + n2;

  const options = shuffleOptions([
    correct,
    correct + 1,
    correct - 1
  ].map(String));

  return {
    title: "Quick Addition",
    question: `What is ${n1} + ${n2}?`,
    options,
    answer: String(correct)
  };
}

function fallbackReading(grade, progress) {
  const sentences = [
    "The cat sat on the mat.",
    "The dog ran across the yard.",
    "The bird flew over the tree.",
    "The child read a book."
  ];
  const idx = progress % sentences.length;
  const sentence = sentences[idx];

  return {
    title: "Reading Comprehension",
    question: `In the sentence: "${sentence}" — what animal is mentioned?`,
    options: ["Cat", "Dog", "Bird", "Child"],
    answer: sentence.includes("cat") ? "Cat"
          : sentence.includes("dog") ? "Dog"
          : sentence.includes("bird") ? "Bird"
          : "Child"
  };
}

function fallbackScience(grade, progress) {
  const questions = [
    {
      q: "Which of these is a planet in our solar system?",
      options: ["Mars", "Spoon", "Tree"],
      answer: "Mars"
    },
    {
      q: "What do plants need to grow?",
      options: ["Sunlight and water", "Plastic and metal", "Sand and glass"],
      answer: "Sunlight and water"
    }
  ];
  const item = questions[progress % questions.length];

  return {
    title: "Science Basics",
    question: item.q,
    options: item.options,
    answer: item.answer
  };
}

function fallbackSocial(grade, progress) {
  const questions = [
    {
      q: "Which of these is a community helper?",
      options: ["Firefighter", "Dragon", "Robot"],
      answer: "Firefighter"
    },
    {
      q: "Which is a symbol of the United States?",
      options: ["Bald eagle", "Penguin", "Kangaroo"],
      answer: "Bald eagle"
    }
  ];
  const item = questions[progress % questions.length];

  return {
    title: "Social Studies",
    question: item.q,
    options: item.options,
    answer: item.answer
  };
}

function fallbackVocabulary(grade, progress) {
  const words = [
    { word: "happy", synonym: "joyful", distractors: ["angry", "tired"] },
    { word: "big", synonym: "large", distractors: ["tiny", "thin"] },
    { word: "fast", synonym: "quick", distractors: ["slow", "late"] }
  ];
  const item = words[progress % words.length];

  const options = shuffleOptions([
    item.synonym,
    ...item.distractors
  ]);

  return {
    title: "Vocabulary Builder",
    question: `Which word means the same as "${item.word}"?`,
    options,
    answer: item.synonym
  };
}

function fallbackLogic(grade, progress) {
  const questions = [
    {
      q: "Which number comes next: 2, 4, 6, __?",
      options: ["7", "8", "9"],
      answer: "8"
    },
    {
      q: "Which shape has 3 sides?",
      options: ["Triangle", "Square", "Circle"],
      answer: "Triangle"
    }
  ];
  const item = questions[progress % questions.length];

  return {
    title: "Logic & Patterns",
    question: item.q,
    options: item.options,
    answer: item.answer
  };
}


// ============================================================
// HELPERS
// ============================================================

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

function chooseSubject(subjects) {
  if (subjects.length === 1) return subjects[0];

  const choice = prompt(`Choose a subject: ${subjects.join(", ")}`);
  if (!choice || !subjects.includes(choice)) return null;

  return choice;
}

function renderLesson(lesson) {
  document.getElementById("lessonTitle").textContent = lesson.title || "Lesson";
  document.getElementById("lessonQuestion").textContent = lesson.question || "Answer the question.";

  const answersDiv = document.getElementById("answerOptions");
  answersDiv.innerHTML = "";

  (lesson.options || []).forEach(opt => {
    const safeId = `opt_${String(opt).replace(/\W+/g, "")}`;

    answersDiv.innerHTML += `
      <div class="answer-option">
        <input type="radio" name="answer" id="${safeId}" value="${opt}">
        <label for="${safeId}">${opt}</label>
      </div>
    `;
  });
}

function showError(msg) {
  document.body.innerHTML = `
    <div style="padding: 40px; font-size: 1.2rem; color: white;">
      ${msg}
    </div>
  `;
}

function shuffleOptions(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
