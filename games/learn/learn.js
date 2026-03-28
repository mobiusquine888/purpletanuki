// ============================================================
// LEARN PAGE ENGINE — REFORGED
// Respects grade, subjects, curriculum mode, and progress
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

  // Save subject for continuity
  localStorage.setItem("pt_category", subject);


  // -----------------------------
  // 3. LOAD CURRICULUM FILE
  // -----------------------------
  let curriculumData = null;

  try {
    if (curriculumMode === "default") {
      // Load built-in grade file
      curriculumData = await loadScript(`/games/${grade}/${grade}.js`)
        .then(() => window[`${grade}Data`]); // e.g., window.grade3Data
    } else {
      // Load custom curriculum JSON
      curriculumData = await fetch(customCurriculumUrl).then(r => r.json());
    }
  } catch (err) {
    return showError("Could not load curriculum file.");
  }

  if (!curriculumData || !curriculumData[subject]) {
    return showError("This subject has no lessons available.");
  }


  // -----------------------------
  // 4. DETERMINE LESSON PROGRESS
  // -----------------------------
  const progressKey = `pt_progress_${grade}_${subject}`;
  let progress = Number(localStorage.getItem(progressKey)) || 0;

  const lessons = curriculumData[subject].lessons;
  if (!lessons || lessons.length === 0) {
    return showError("No lessons found for this subject.");
  }

  if (progress >= lessons.length) {
    progress = 0; // Loop back to start
  }

  const lesson = lessons[progress];


  // -----------------------------
  // 5. RENDER LESSON
  // -----------------------------
  renderLesson(lesson);


  // -----------------------------
  // 6. HANDLE ANSWER SUBMISSION
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
// HELPERS
// ============================================================

// Load JS file dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

// Pick a subject from allowed list
function chooseSubject(subjects) {
  // If only one subject is allowed, auto-select it
  if (subjects.length === 1) return subjects[0];

  // If multiple subjects allowed, show a simple chooser
  const choice = prompt(`Choose a subject: ${subjects.join(", ")}`);
  if (!choice || !subjects.includes(choice)) return null;

  return choice;
}

// Render lesson into the page
function renderLesson(lesson) {
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonQuestion").textContent = lesson.question;

  const answersDiv = document.getElementById("answerOptions");
  answersDiv.innerHTML = "";

  lesson.options.forEach(opt => {
    const id = `opt_${opt.replace(/\W+/g, "")}`;

    answersDiv.innerHTML += `
      <div class="answer-option">
        <input type="radio" name="answer" id="${id}" value="${opt}">
        <label for="${id}">${opt}</label>
      </div>
    `;
  });
}

// Show error message
function showError(msg) {
  document.body.innerHTML = `
    <div style="padding: 40px; font-size: 1.2rem; color: white;">
      ${msg}
    </div>
  `;
}
