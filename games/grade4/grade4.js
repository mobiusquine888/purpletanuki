// ===============================
// GRADE 4 — CURRICULUM DATA
// ===============================

const g4Subjects = {

  // -------------------------------
  // READING & WRITING
  // -------------------------------
  reading: {
    displayName: "Reading & Writing",
    lessons: [

      {
        id: 1,
        title: "Main Idea & Details",
        lessonHtml: `
          <p>The <strong>main idea</strong> is what a text is mostly about.</p>
          <p><strong>Details</strong> are the facts or examples that support it.</p>
          <p>Example:</p>
          <ul>
            <li>Main Idea: Dogs need care.</li>
            <li>Details: They need food, water, and exercise.</li>
          </ul>
        `,
        questions: [
          {
            prompt: "What is the main idea?",
            choices: [
              "What the text is mostly about",
              "A random detail",
              "The last sentence"
            ],
            correct: "What the text is mostly about"
          },
          {
            prompt: "Which is a detail?",
            choices: [
              "Dogs need care",
              "Dogs need water",
              "Dogs are animals"
            ],
            correct: "Dogs need water"
          },
          {
            prompt: "Which supports the idea that plants need sunlight?",
            choices: [
              "Plants grow in soil",
              "Plants make oxygen",
              "Plants die without light"
            ],
            correct: "Plants die without light"
          }
        ]
      },

      {
        id: 2,
        title: "Context Clues",
        lessonHtml: `
          <p><strong>Context clues</strong> help us figure out the meaning of unknown words.</p>
          <p>We look at the words around the tricky word.</p>
        `,
        questions: [
          {
            prompt: "The word 'soar' means to fly. Which sentence uses context clues?",
            choices: [
              "Birds soar high above the clouds.",
              "Birds are animals.",
              "Clouds are in the sky."
            ],
            correct: "Birds soar high above the clouds."
          },
          {
            prompt: "What helps you understand a new word?",
            choices: [
              "Context clues",
              "Guessing randomly",
              "Ignoring it"
            ],
            correct: "Context clues"
          },
          {
            prompt: "In 'The puppy was famished, or very hungry,' what does famished mean?",
            choices: ["Happy", "Hungry", "Sleepy"],
            correct: "Hungry"
          }
        ]
      },

      {
        id: 3,
        title: "Summarizing",
        lessonHtml: `
          <p>A <strong>summary</strong> is a short version of a text.</p>
          <p>It includes only the most important ideas.</p>
        `,
        questions: [
          {
            prompt: "What is a summary?",
            choices: [
              "A short version of a text",
              "A list of every detail",
              "A prediction"
            ],
            correct: "A short version of a text"
          },
          {
            prompt: "Which should be in a summary?",
            choices: [
              "Important ideas",
              "Every detail",
              "Random facts"
            ],
            correct: "Important ideas"
          },
          {
            prompt: "Which summary is best?",
            choices: [
              "The story is about a boy who learns to swim.",
              "The boy swims, eats lunch, talks to friends, and buys goggles.",
              "The boy likes water."
            ],
            correct: "The story is about a boy who learns to swim."
          }
        ]
      }

    ]
  },

  // -------------------------------
  // MATH
  // -------------------------------
  math: {
    displayName: "Math",
    lessons: [

      {
        id: 1,
        title: "Multi‑Digit Multiplication",
        lessonHtml: `
          <p>We can multiply larger numbers using place value.</p>
          <p>Example: 23 × 4 = (20 × 4) + (3 × 4)</p>
        `,
        questions: [
          {
            prompt: "23 × 3 = ?",
            choices: ["69", "72", "76"],
            correct: "69"
          },
          {
            prompt: "40 × 6 = ?",
            choices: ["180", "200", "240"],
            correct: "240"
          },
          {
            prompt: "12 × 5 = ?",
            choices: ["50", "55", "60"],
            correct: "60"
          }
        ]
      },

      {
        id: 2,
        title: "Fractions",
        lessonHtml: `
          <p>A <strong>fraction</strong> represents part of a whole.</p>
          <p>The top number is the numerator. The bottom is the denominator.</p>
        `,
        questions: [
          {
            prompt: "What is the numerator in 3/4?",
            choices: ["3", "4", "7"],
            correct: "3"
          },
          {
            prompt: "Which fraction is larger?",
            choices: ["1/2", "1/4", "1/8"],
            correct: "1/2"
          },
          {
            prompt: "Which shows three fourths?",
            choices: ["3/4", "1/3", "4/3"],
            correct: "3/4"
          }
        ]
      },

      {
        id: 3,
        title: "Area & Perimeter",
        lessonHtml: `
          <p><strong>Perimeter</strong> is the distance around a shape.</p>
          <p><strong>Area</strong> is the space inside it.</p>
        `,
        questions: [
          {
            prompt: "A rectangle is 5 by 3. What is the perimeter?",
            choices: ["16", "15", "8"],
            correct: "16"
          },
          {
            prompt: "What is the area of a 6×4 rectangle?",
            choices: ["10", "12", "24"],
            correct: "24"
          },
          {
            prompt: "Which measures space inside a shape?",
            choices: ["Area", "Perimeter", "Volume"],
            correct: "Area"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // SCIENCE
  // -------------------------------
  science: {
    displayName: "Science",
    lessons: [

      {
        id: 1,
        title: "Ecosystems",
        lessonHtml: `
          <p>An <strong>ecosystem</strong> is a community of living and nonliving things.</p>
          <p>Examples: forests, deserts, oceans.</p>
        `,
        questions: [
          {
            prompt: "Which is an ecosystem?",
            choices: ["Forest", "Chair", "Pencil"],
            correct: "Forest"
          },
          {
            prompt: "Which is living?",
            choices: ["Tree", "Rock", "Water"],
            correct: "Tree"
          },
          {
            prompt: "Which is nonliving?",
            choices: ["Fish", "Grass", "Sunlight"],
            correct: "Sunlight"
          }
        ]
      },

      {
        id: 2,
        title: "Food Chains",
        lessonHtml: `
          <p>A <strong>food chain</strong> shows how energy moves from one organism to another.</p>
          <p>Example: grass → rabbit → fox</p>
        `,
        questions: [
          {
            prompt: "What starts most food chains?",
            choices: ["Plants", "Animals", "Fungi"],
            correct: "Plants"
          },
          {
            prompt: "In grass → cow → human, who is the consumer?",
            choices: ["Grass", "Cow", "Sun"],
            correct: "Cow"
          },
          {
            prompt: "What do predators do?",
            choices: ["Hunt other animals", "Make food", "Grow roots"],
            correct: "Hunt other animals"
          }
        ]
      },

      {
        id: 3,
        title: "Earth’s Processes",
        lessonHtml: `
          <p>Earth changes through processes like erosion, weathering, and earthquakes.</p>
        `,
        questions: [
          {
            prompt: "What is erosion?",
            choices: [
              "Movement of rock and soil",
              "Breaking rock into pieces",
              "A type of cloud"
            ],
            correct: "Movement of rock and soil"
          },
          {
            prompt: "What causes earthquakes?",
            choices: ["Moving plates", "Rain", "Wind"],
            correct: "Moving plates"
          },
          {
            prompt: "Weathering is:",
            choices: [
              "Breaking rock into smaller pieces",
              "Melting ice",
              "Growing plants"
            ],
            correct: "Breaking rock into smaller pieces"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // SOCIAL STUDIES
  // -------------------------------
  social: {
    displayName: "Social Studies",
    lessons: [

      {
        id: 1,
        title: "Government Basics",
        lessonHtml: `
          <p>Government makes laws and keeps order.</p>
          <p>The U.S. has three branches: legislative, executive, judicial.</p>
        `,
        questions: [
          {
            prompt: "What does government do?",
            choices: ["Makes laws", "Builds toys", "Grows food"],
            correct: "Makes laws"
          },
          {
            prompt: "How many branches of government?",
            choices: ["1", "2", "3"],
            correct: "3"
          },
          {
            prompt: "Which branch interprets laws?",
            choices: ["Judicial", "Executive", "Legislative"],
            correct: "Judicial"
          }
        ]
      },

      {
        id: 2,
        title: "Geography Skills",
        lessonHtml: `
          <p>Maps show locations, directions, and features of places.</p>
          <p>North, south, east, west are cardinal directions.</p>
        `,
        questions: [
          {
            prompt: "Which is a cardinal direction?",
            choices: ["North", "Up", "Left"],
            correct: "North"
          },
          {
            prompt: "What does a map show?",
            choices: ["Locations", "Recipes", "Music"],
            correct: "Locations"
          },
          {
            prompt: "Which tool shows direction?",
            choices: ["Compass", "Ruler", "Thermometer"],
            correct: "Compass"
          }
        ]
      },

      {
        id: 3,
        title: "Economics Basics",
        lessonHtml: `
          <p>Economics is about how people use resources.</p>
          <p>Producers make goods. Consumers buy them.</p>
        `,
        questions: [
          {
            prompt: "Who makes goods?",
            choices: ["Producers", "Consumers", "Teachers"],
            correct: "Producers"
          },
          {
            prompt: "Who buys goods?",
            choices: ["Consumers", "Producers", "Drivers"],
            correct: "Consumers"
          },
          {
            prompt: "Money is used to:",
            choices: ["Buy goods", "Grow plants", "Make weather"],
            correct: "Buy goods"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // LOGIC & PATTERNS
  // -------------------------------
  logic: {
    displayName: "Logic & Patterns",
    lessons: [

      {
        id: 1,
        title: "Number Patterns",
        lessonHtml: `
          <p>Patterns follow rules like adding or multiplying.</p>
        `,
        questions: [
          {
            prompt: "3, 6, 9, 12, ?",
            choices: ["14", "15", "16"],
            correct: "15"
          },
          {
            prompt: "2, 4, 8, 16, ?",
            choices: ["20", "24", "32"],
            correct: "32"
          },
          {
            prompt: "10, 7, 4, 1, ?",
            choices: ["0", "-1", "-2"],
            correct: "-2"
          }
        ]
      },

      {
        id: 2,
        title: "Logic Statements",
        lessonHtml: `
          <p>Logic helps us decide if statements make sense.</p>
        `,
        questions: [
          {
            prompt: "All squares are rectangles. True or false?",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          },
          {
            prompt: "If all birds have wings, and a robin is a bird, then a robin has wings.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          },
          {
            prompt: "If 5 > 3 and 3 > 1, then 5 > 1.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          }
        ]
      },

      {
        id: 3,
        title: "Multi‑Step Reasoning",
        lessonHtml: `
          <p>Some problems require more than one step to solve.</p>
        `,
        questions: [
          {
            prompt: "If a pattern adds 3 then subtracts 1, what comes after 10?",
            choices: ["12", "13", "9"],
            correct: "12"
          },
          {
            prompt: "If a shape has 4 equal sides and 4 right angles, what is it?",
            choices: ["Square", "Triangle", "Circle"],
            correct: "Square"
          },
          {
            prompt: "If A = 2 and B = A + 3, what is B?",
            choices: ["3", "4", "5"],
            correct: "5"
          }
        ]
      }

    ]
  }

};
// ===============================
// GRADE 4 — PROGRESS STATE
// ===============================

const g4Progress = {
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
  currentLessonIndex = Math.min(g4Progress[key], g4Subjects[key].lessons.length - 1);
  quizActive = false;

  document.querySelectorAll(".g4-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-subject") === key);
  });

  showLesson();
}

// ===============================
// LESSON RENDERING
// ===============================

function showLesson() {
  const subject = g4Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  document.getElementById("g4-lesson-subject-label").textContent = subject.displayName;
  document.getElementById("g4-lesson-title").textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  document.getElementById("g4-lesson-body").innerHTML = lesson.lessonHtml;

  document.getElementById("g4-start-quiz-btn").disabled = false;

  document.getElementById("g4-lesson-card").style.display = "flex";
  document.getElementById("g4-quiz-card").style.display = "none";
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
  const subject = g4Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  document.getElementById("g4-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("g4-quiz-title").textContent = lesson.title;
  document.getElementById("g4-quiz-lesson-label").textContent = `Lesson ${lesson.id}`;
  document.getElementById("g4-quiz-q-progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${lesson.questions.length}`;

  document.getElementById("g4-quiz-prompt").textContent = q.prompt;

  const choices = [q.choices[0], q.choices[1], q.choices[2]];
  document.getElementById("g4-choice-1").textContent = choices[0];
  document.getElementById("g4-choice-2").textContent = choices[1];
  document.getElementById("g4-choice-3").textContent = choices[2];

  document.getElementById("g4-choice-1").onclick = () => submitAnswer(choices[0]);
  document.getElementById("g4-choice-2").onclick = () => submitAnswer(choices[1]);
  document.getElementById("g4-choice-3").onclick = () => submitAnswer(choices[2]);

  document.getElementById("g4-lesson-card").style.display = "none";
  document.getElementById("g4-quiz-card").style.display = "flex";
}

function submitAnswer(choice) {
  const subject = g4Subjects[currentSubjectKey];
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
    // Incorrect answers do nothing (gentle learning)
  }
}

// ===============================
// LESSON COMPLETION
// ===============================

function finishLesson() {
  g4Progress[currentSubjectKey]++;

  updateAllSubjectStatus();
  updateGlobalProgress();

  const subject = g4Subjects[currentSubjectKey];
  if (g4Progress[currentSubjectKey] >= subject.lessons.length) {
    checkForGraduation();
  }

  quizActive = false;
  showLesson();
}

// ===============================
// PROGRESS UI
// ===============================

function updateAllSubjectStatus() {
  Object.keys(g4Progress).forEach(key => {
    const statusEl = document.getElementById(`${key}-status`);
    const total = g4Subjects[key].lessons.length;
    const done = g4Progress[key];
    statusEl.textContent = `${done} / ${total} lessons`;
  });
}

function updateGlobalProgress() {
  const totalLessons = Object.values(g4Subjects)
    .map(sub => sub.lessons.length)
    .reduce((a, b) => a + b, 0);

  const completed = Object.values(g4Progress)
    .reduce((a, b) => a + b, 0);

  const percent = Math.round((completed / totalLessons) * 100);

  document.getElementById("g4-progress-fill").style.width = percent + "%";
  document.getElementById("g4-progress-text").textContent = percent + "%";
}

// ===============================
// GRADUATION
// ===============================

function checkForGraduation() {
  const allDone = Object.keys(g4Progress).every(
    key => g4Progress[key] >= g4Subjects[key].lessons.length
  );

  if (allDone) {
    document.getElementById("g4-grad-overlay").style.display = "flex";
  }
}

function unlockGrade4Reward() {
  window.location.href = "../browserworld/browser.html";
}

// ===============================
// SPARKLES
// ===============================

function triggerSparkles() {
  const spark = document.getElementById("g4-sparkles");
  spark.classList.add("active");
  setTimeout(() => spark.classList.remove("active"), 600);
}
