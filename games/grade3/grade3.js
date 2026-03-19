// ===============================
// GRADE 3 — CURRICULUM DATA
// ===============================

const g3Subjects = {

  // READING & WRITING
  reading: {
    displayName: "Reading & Writing",
    lessons: [
      {
        id: 1,
        title: "Characters & Setting",
        lessonHtml: `
          <p>Stories have <strong>characters</strong> (who) and a <strong>setting</strong> (where and when).</p>
          <p>Example: A girl and her dog at a park in summer.</p>
        `,
        questions: [
          {
            prompt: "Which is a character?",
            choices: ["A dragon", "A forest", "A storm"],
            correct: "A dragon"
          },
          {
            prompt: "Which is a setting?",
            choices: ["At night in a city", "A brave boy", "A talking cat"],
            correct: "At night in a city"
          },
          {
            prompt: "In a story about a pirate ship, which is most likely the setting?",
            choices: ["On the ocean", "In a classroom", "On the moon"],
            correct: "On the ocean"
          }
        ]
      },
      {
        id: 2,
        title: "Beginning, Middle, End",
        lessonHtml: `
          <p>Stories have a <strong>beginning</strong>, <strong>middle</strong>, and <strong>end</strong>.</p>
          <p>The beginning introduces characters and setting, the middle has the problem, and the end solves it.</p>
        `,
        questions: [
          {
            prompt: "What usually happens in the beginning?",
            choices: ["Characters and setting are introduced", "The problem is solved", "Everyone says goodbye"],
            correct: "Characters and setting are introduced"
          },
          {
            prompt: "What usually happens in the middle?",
            choices: ["The problem appears", "The title is chosen", "The book ends"],
            correct: "The problem appears"
          },
          {
            prompt: "What usually happens at the end?",
            choices: ["The problem is solved", "New characters appear", "The setting changes"],
            correct: "The problem is solved"
          }
        ]
      },
      {
        id: 3,
        title: "Opinion Writing",
        lessonHtml: `
          <p>An <strong>opinion</strong> tells what you think or feel.</p>
          <p>Opinion writing uses reasons to explain why you think that.</p>
        `,
        questions: [
          {
            prompt: "Which sentence is an opinion?",
            choices: ["Pizza is the best food.", "Pizza has cheese.", "Pizza is round."],
            correct: "Pizza is the best food."
          },
          {
            prompt: "Which is a good reason for an opinion?",
            choices: ["Because I like it", "Because it exists", "Because it is a noun"],
            correct: "Because I like it"
          },
          {
            prompt: "Which could be a topic for opinion writing?",
            choices: ["My favorite game", "The exact time", "The number of days in a week"],
            correct: "My favorite game"
          }
        ]
      }
    ]
  },

  // MATH
  math: {
    displayName: "Math",
    lessons: [
      {
        id: 1,
        title: "Multiplication Basics",
        lessonHtml: `
          <p><strong>Multiplication</strong> is repeated addition.</p>
          <p>Example: 3 × 4 means 4 + 4 + 4.</p>
        `,
        questions: [
          {
            prompt: "3 × 5 = ?",
            choices: ["8", "15", "10"],
            correct: "15"
          },
          {
            prompt: "4 × 2 = ?",
            choices: ["6", "8", "10"],
            correct: "8"
          },
          {
            prompt: "2 × 6 = ?",
            choices: ["10", "12", "8"],
            correct: "12"
          }
        ]
      },
      {
        id: 2,
        title: "Division Basics",
        lessonHtml: `
          <p><strong>Division</strong> is splitting into equal groups.</p>
          <p>Example: 12 ÷ 3 means 12 split into 3 equal groups.</p>
        `,
        questions: [
          {
            prompt: "12 ÷ 3 = ?",
            choices: ["4", "3", "6"],
            correct: "4"
          },
          {
            prompt: "15 ÷ 5 = ?",
            choices: ["2", "3", "5"],
            correct: "3"
          },
          {
            prompt: "9 ÷ 3 = ?",
            choices: ["2", "3", "4"],
            correct: "3"
          }
        ]
      },
      {
        id: 3,
        title: "Fractions as Equal Parts",
        lessonHtml: `
          <p>A <strong>fraction</strong> shows equal parts of a whole.</p>
          <p>Example: 1/2 means one of two equal parts.</p>
        `,
        questions: [
          {
            prompt: "Which shows one half?",
            choices: ["1/2", "1/3", "2/3"],
            correct: "1/2"
          },
          {
            prompt: "Which is bigger?",
            choices: ["1/2", "1/4", "1/8"],
            correct: "1/2"
          },
          {
            prompt: "If a pizza is cut into 4 equal slices and you eat 1, what fraction did you eat?",
            choices: ["1/2", "1/3", "1/4"],
            correct: "1/4"
          }
        ]
      }
    ]
  },

  // SCIENCE
  science: {
    displayName: "Science",
    lessons: [
      {
        id: 1,
        title: "States of Matter",
        lessonHtml: `
          <p>Matter can be a <strong>solid</strong>, <strong>liquid</strong>, or <strong>gas</strong>.</p>
          <p>Solids keep their shape, liquids flow, gases spread out.</p>
        `,
        questions: [
          {
            prompt: "Which is a solid?",
            choices: ["Rock", "Juice", "Air"],
            correct: "Rock"
          },
          {
            prompt: "Which is a liquid?",
            choices: ["Water", "Cloud", "Smoke"],
            correct: "Water"
          },
          {
            prompt: "Which is a gas?",
            choices: ["Oxygen", "Ice", "Sand"],
            correct: "Oxygen"
          }
        ]
      },
      {
        id: 2,
        title: "Weather & Climate",
        lessonHtml: `
          <p><strong>Weather</strong> is what the air is like today.</p>
          <p><strong>Climate</strong> is the usual weather in a place over a long time.</p>
        `,
        questions: [
          {
            prompt: "Which is weather?",
            choices: ["It is raining today.", "Winters are usually cold here.", "This place is near the equator."],
            correct: "It is raining today."
          },
          {
            prompt: "Which is climate?",
            choices: ["Summers are hot every year.", "It might rain later.", "The sky is cloudy right now."],
            correct: "Summers are hot every year."
          },
          {
            prompt: "Which tool measures temperature?",
            choices: ["Thermometer", "Ruler", "Compass"],
            correct: "Thermometer"
          }
        ]
      },
      {
        id: 3,
        title: "Life Cycles",
        lessonHtml: `
          <p>Living things have a <strong>life cycle</strong>: birth, growth, reproduction, and death.</p>
        `,
        questions: [
          {
            prompt: "Which has a life cycle?",
            choices: ["Frog", "Rock", "Cloud"],
            correct: "Frog"
          },
          {
            prompt: "A butterfly starts as a:",
            choices: ["Caterpillar", "Bird", "Tree"],
            correct: "Caterpillar"
          },
          {
            prompt: "Which is part of a plant's life cycle?",
            choices: ["Seed", "Car", "Mountain"],
            correct: "Seed"
          }
        ]
      }
    ]
  },

  // SOCIAL STUDIES
  social: {
    displayName: "Social Studies",
    lessons: [
      {
        id: 1,
        title: "Communities",
        lessonHtml: `
          <p>A <strong>community</strong> is a place where people live, work, and play together.</p>
        `,
        questions: [
          {
            prompt: "Which is a community?",
            choices: ["A town", "A pencil", "A cloud"],
            correct: "A town"
          },
          {
            prompt: "Who is part of a community?",
            choices: ["Neighbors", "Only animals", "Only plants"],
            correct: "Neighbors"
          },
          {
            prompt: "Which place is part of a community?",
            choices: ["School", "Moon", "Desert island"],
            correct: "School"
          }
        ]
      },
      {
        id: 2,
        title: "Rules & Laws",
        lessonHtml: `
          <p><strong>Rules</strong> help keep people safe and fair in small groups.</p>
          <p><strong>Laws</strong> are rules made by governments for everyone.</p>
        `,
        questions: [
          {
            prompt: "Which is a rule?",
            choices: ["No running in the hall", "The name of a country", "The color of the sky"],
            correct: "No running in the hall"
          },
          {
            prompt: "Which is a law?",
            choices: ["Stop at a red light", "Wear a blue shirt", "Eat ice cream"],
            correct: "Stop at a red light"
          },
          {
            prompt: "Why do we have rules?",
            choices: ["To keep people safe", "To make things confusing", "To stop learning"],
            correct: "To keep people safe"
          }
        ]
      },
      {
        id: 3,
        title: "Maps & Directions",
        lessonHtml: `
          <p>Maps show places and where things are.</p>
          <p>North, south, east, and west are <strong>cardinal directions</strong>.</p>
        `,
        questions: [
          {
            prompt: "Which is a cardinal direction?",
            choices: ["North", "Up", "Left"],
            correct: "North"
          },
          {
            prompt: "What does a map show?",
            choices: ["Locations", "Music", "Smells"],
            correct: "Locations"
          },
          {
            prompt: "Which tool shows direction?",
            choices: ["Compass", "Thermometer", "Ruler"],
            correct: "Compass"
          }
        ]
      }
    ]
  },

  // LOGIC & PATTERNS
  logic: {
    displayName: "Logic & Patterns",
    lessons: [
      {
        id: 1,
        title: "Simple Number Patterns",
        lessonHtml: `
          <p>Number patterns follow a rule, like adding or subtracting the same number.</p>
        `,
        questions: [
          {
            prompt: "2, 4, 6, 8, ?",
            choices: ["9", "10", "11"],
            correct: "10"
          },
          {
            prompt: "5, 10, 15, 20, ?",
            choices: ["22", "24", "25"],
            correct: "25"
          },
          {
            prompt: "9, 7, 5, 3, ?",
            choices: ["1", "0", "2"],
            correct: "1"
          }
        ]
      },
      {
        id: 2,
        title: "True or False",
        lessonHtml: `
          <p>Logic helps us decide if a statement is true or false.</p>
        `,
        questions: [
          {
            prompt: "All squares have four sides.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          },
          {
            prompt: "All triangles have three sides.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          },
          {
            prompt: "All circles have corners.",
            choices: ["True", "False", "Not sure"],
            correct: "False"
          }
        ]
      },
      {
        id: 3,
        title: "Two‑Step Thinking",
        lessonHtml: `
          <p>Some problems take more than one step to solve.</p>
        `,
        questions: [
          {
            prompt: "If you add 2 then add 3 to 5, what do you get?",
            choices: ["9", "8", "10"],
            correct: "10"
          },
          {
            prompt: "If a pattern adds 4 each time, what comes after 6?",
            choices: ["8", "10", "12"],
            correct: "10"
          },
          {
            prompt: "If A = 3 and B = A + 2, what is B?",
            choices: ["4", "5", "6"],
            correct: "5"
          }
        ]
      }
    ]
  }

};

// ===============================
// GRADE 3 — PROGRESS STATE
// ===============================

const g3Progress = {
  reading: 0,
  math: 0,
  science: 0,
  social: 0,
  logic: 0
};

let currentSubjectKey = null;
let currentLessonIndex = 0;
let currentQuestionIndex = 0;
let quizActive = false;

// ===============================
// INIT
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  updateAllSubjectStatus();
  updateGlobalProgress();
});

// ===============================
// NAVIGATION
// ===============================

function goHome() {
  window.location.href = "../arcade/index.html";
}

// ===============================
// SUBJECT SELECTION
// ===============================

function selectSubject(key) {
  currentSubjectKey = key;
  currentLessonIndex = Math.min(g3Progress[key], g3Subjects[key].lessons.length - 1);
  quizActive = false;

  document.querySelectorAll(".g3-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-subject") === key);
  });

  showLesson();
}

// ===============================
// LESSON RENDERING
// ===============================

function showLesson() {
  const subject = g3Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  document.getElementById("g3-lesson-subject-label").textContent = subject.displayName;
  document.getElementById("g3-lesson-title").textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  document.getElementById("g3-lesson-body").innerHTML = lesson.lessonHtml;

  document.getElementById("g3-start-quiz-btn").disabled = false;

  document.getElementById("g3-lesson-card").style.display = "flex";
  document.getElementById("g3-quiz-card").style.display = "none";
}

// ===============================
// QUIZ ENGINE
// ===============================

function startQuiz() {
  if (!currentSubjectKey) return;
  quizActive = true;
  currentQuestionIndex = 0;
  loadQuestion();
}

function backToLesson() {
  quizActive = false;
  showLesson();
}

function loadQuestion() {
  const subject = g3Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  document.getElementById("g3-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("g3-quiz-title").textContent = lesson.title;
  document.getElementById("g3-quiz-lesson-label").textContent = `Lesson ${lesson.id}`;
  document.getElementById("g3-quiz-q-progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${lesson.questions.length}`;

  document.getElementById("g3-quiz-prompt").textContent = q.prompt;

  const choices = [q.choices[0], q.choices[1], q.choices[2]];
  document.getElementById("g3-choice-1").textContent = choices[0];
  document.getElementById("g3-choice-2").textContent = choices[1];
  document.getElementById("g3-choice-3").textContent = choices[2];

  document.getElementById("g3-choice-1").onclick = () => submitAnswer(choices[0]);
  document.getElementById("g3-choice-2").onclick = () => submitAnswer(choices[1]);
  document.getElementById("g3-choice-3").onclick = () => submitAnswer(choices[2]);

  document.getElementById("g3-lesson-card").style.display = "none";
  document.getElementById("g3-quiz-card").style.display = "flex";
}

function submitAnswer(choice) {
  const subject = g3Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  if (choice === q.correct) {
    triggerSparkles();
    currentQuestionIndex++;

    if (currentQuestionIndex >= lesson.questions.length) {
      finishLesson();
    } else {
      loadQuestion();
    }
  } else {
    // gentle: no punishment on wrong answers
  }
}

// ===============================
// LESSON COMPLETION
// ===============================

function finishLesson() {
  g3Progress[currentSubjectKey]++;

  updateAllSubjectStatus();
  updateGlobalProgress();

  const subject = g3Subjects[currentSubjectKey];
  if (g3Progress[currentSubjectKey] >= subject.lessons.length) {
    checkForGraduation();
  }

  quizActive = false;
  showLesson();
}

// ===============================
// PROGRESS UI
// ===============================

function updateAllSubjectStatus() {
  Object.keys(g3Progress).forEach(key => {
    const statusEl = document.getElementById(`${key}-status`);
    const total = g3Subjects[key].lessons.length;
    const done = g3Progress[key];
    statusEl.textContent = `${done} / ${total} lessons`;
  });
}

function updateGlobalProgress() {
  const totalLessons = Object.values(g3Subjects)
    .map(sub => sub.lessons.length)
    .reduce((a, b) => a + b, 0);

  const completed = Object.values(g3Progress)
    .reduce((a, b) => a + b, 0);

  const percent = Math.round((completed / totalLessons) * 100);

  document.getElementById("g3-progress-fill").style.width = percent + "%";
  document.getElementById("g3-progress-text").textContent = percent + "%";
}

// ===============================
// GRADUATION
// ===============================

function checkForGraduation() {
  const allDone = Object.keys(g3Progress).every(
    key => g3Progress[key] >= g3Subjects[key].lessons.length
  );

  if (allDone) {
    document.getElementById("g3-grad-overlay").style.display = "flex";
  }
}

function unlockGrade3Reward() {
  window.location.href = "../browserworld/browser.html";
}

// ===============================
// SPARKLES
// ===============================

function triggerSparkles() {
  const spark = document.getElementById("g3-sparkles");
  spark.classList.add("active");
  setTimeout(() => spark.classList.remove("active"), 600);
}


