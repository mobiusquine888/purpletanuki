// ===============================
// GRADE 5 — CURRICULUM DATA (Learn Engine Format)
// ===============================

window.grade5Data = {

  reading: {
    displayName: "Reading & Writing",
    lessons: [
      {
        id: 1,
        title: "Theme & Evidence",
        lessonHtml: `
          <p>The <strong>theme</strong> of a story is the big idea or message, like friendship or courage.</p>
          <p>We use <strong>text evidence</strong> (quotes or details) to support our ideas about the theme.</p>
        `,
        questions: [
          {
            prompt: "A story shows friends helping each other during a storm. What is a possible theme?",
            choices: ["Teamwork matters", "Storms are loud", "Houses can break"],
            correct: "Teamwork matters"
          },
          {
            prompt: "Which is text evidence?",
            choices: [
              "\"They held hands and shared their food.\"",
              "I think they are kind.",
              "Storms are scary."
            ],
            correct: "\"They held hands and shared their food.\""
          },
          {
            prompt: "Why do we use text evidence?",
            choices: [
              "To support our ideas",
              "To make the story longer",
              "To change the ending"
            ],
            correct: "To support our ideas"
          }
        ]
      },
      {
        id: 2,
        title: "Comparing Characters",
        lessonHtml: `
          <p>We can <strong>compare and contrast</strong> characters by looking at their actions, thoughts, and feelings.</p>
          <p>Good readers notice how characters respond to challenges.</p>
        `,
        questions: [
          {
            prompt: "Two characters both face a hard test. One gives up, the other keeps trying. What is one difference?",
            choices: [
              "How they respond to the challenge",
              "Where they live",
              "The length of the story"
            ],
            correct: "How they respond to the challenge"
          },
          {
            prompt: "Which detail shows a character is brave?",
            choices: [
              "\"She stepped forward even though she was scared.\"",
              "\"He went to sleep early.\"",
              "\"They ate lunch together.\""
            ],
            correct: "\"She stepped forward even though she was scared.\""
          },
          {
            prompt: "When we compare characters, we look at:",
            choices: [
              "Actions and feelings",
              "Only the title",
              "Only the pictures"
            ],
            correct: "Actions and feelings"
          }
        ]
      },
      {
        id: 3,
        title: "Opinion Writing with Reasons",
        lessonHtml: `
          <p>In <strong>opinion writing</strong>, you clearly state your opinion and support it with strong reasons and examples.</p>
          <p>Good opinion writing explains <em>why</em> you think something, not just <em>what</em> you think.</p>
        `,
        questions: [
          {
            prompt: "Which sentence is a clear opinion?",
            choices: [
              "Recess should be longer.",
              "Recess is 20 minutes.",
              "Recess happens after lunch."
            ],
            correct: "Recess should be longer."
          },
          {
            prompt: "Which is a strong reason for that opinion?",
            choices: [
              "It helps students get energy out.",
              "The playground is outside.",
              "The bell rings loudly."
            ],
            correct: "It helps students get energy out."
          },
          {
            prompt: "Good opinion writing includes:",
            choices: [
              "Opinion and reasons",
              "Only facts",
              "Only questions"
            ],
            correct: "Opinion and reasons"
          }
        ]
      }
    ]
  },
  math: {
    displayName: "Math",
    lessons: [
      {
        id: 1,
        title: "Adding & Subtracting Fractions",
        lessonHtml: `
          <p>To add or subtract fractions with the same denominator, we add or subtract the numerators and keep the denominator.</p>
          <p>Example: 2/8 + 3/8 = 5/8.</p>
        `,
        questions: [
          {
            prompt: "What is 1/6 + 2/6?",
            choices: ["3/6", "3/12", "1/12"],
            correct: "3/6"
          },
          {
            prompt: "What is 5/10 − 2/10?",
            choices: ["3/10", "7/10", "2/5"],
            correct: "3/10"
          },
          {
            prompt: "To add 3/7 + 2/7, you:",
            choices: [
              "Add numerators, keep denominator",
              "Add denominators only",
              "Change to whole numbers"
            ],
            correct: "Add numerators, keep denominator"
          }
        ]
      },
      {
        id: 2,
        title: "Decimals & Place Value",
        lessonHtml: `
          <p>Decimals use place value: tenths, hundredths, thousandths.</p>
          <p>Example: 3.47 means 3 ones, 4 tenths, and 7 hundredths.</p>
        `,
        questions: [
          {
            prompt: "In 5.2, the 2 is in the:",
            choices: ["Tenths place", "Ones place", "Hundredths place"],
            correct: "Tenths place"
          },
          {
            prompt: "Which is greater?",
            choices: ["0.6", "0.56", "0.59"],
            correct: "0.6"
          },
          {
            prompt: "Which decimal equals 3 and 5 tenths?",
            choices: ["3.5", "3.05", "3.50"],
            correct: "3.5"
          }
        ]
      },
      {
        id: 3,
        title: "Volume of Rectangular Prisms",
        lessonHtml: `
          <p><strong>Volume</strong> is the amount of space a 3D shape takes up.</p>
          <p>For a rectangular prism: Volume = length × width × height.</p>
        `,
        questions: [
          {
            prompt: "A box is 2 units long, 3 units wide, and 4 units high. What is its volume?",
            choices: ["24 cubic units", "9 cubic units", "12 cubic units"],
            correct: "24 cubic units"
          },
          {
            prompt: "Volume is measured in:",
            choices: ["Cubic units", "Square units", "Meters only"],
            correct: "Cubic units"
          },
          {
            prompt: "To find volume, you:",
            choices: [
              "Multiply length × width × height",
              "Add all the sides",
              "Only measure the top"
            ],
            correct: "Multiply length × width × height"
          }
        ]
      }
    ]
  },

  science: {
    displayName: "Science",
    lessons: [
      {
        id: 1,
        title: "Ecosystems & Food Webs",
        lessonHtml: `
          <p>An <strong>ecosystem</strong> is a community of living things and their environment.</p>
          <p>In a <strong>food web</strong>, energy moves from producers (plants) to consumers (animals).</p>
        `,
        questions: [
          {
            prompt: "Which is a producer?",
            choices: ["Grass", "Lion", "Hawk"],
            correct: "Grass"
          },
          {
            prompt: "Which is a consumer?",
            choices: ["Rabbit", "Sunlight", "Soil"],
            correct: "Rabbit"
          },
          {
            prompt: "Energy in most food webs starts with:",
            choices: ["The sun", "The moon", "The ocean"],
            correct: "The sun"
          }
        ]
      },
      {
        id: 2,
        title: "Earth’s Systems",
        lessonHtml: `
          <p>Earth has systems like the <strong>geosphere</strong> (rock), <strong>hydrosphere</strong> (water), <strong>atmosphere</strong> (air), and <strong>biosphere</strong> (living things).</p>
        `,
        questions: [
          {
            prompt: "Which system includes oceans and rivers?",
            choices: ["Hydrosphere", "Geosphere", "Atmosphere"],
            correct: "Hydrosphere"
          },
          {
            prompt: "Trees and animals are part of the:",
            choices: ["Biosphere", "Geosphere", "Atmosphere"],
            correct: "Biosphere"
          },
          {
            prompt: "Rocks and mountains belong to the:",
            choices: ["Geosphere", "Hydrosphere", "Biosphere"],
            correct: "Geosphere"
          }
        ]
      },
      {
        id: 3,
        title: "Matter & Conservation",
        lessonHtml: `
          <p><strong>Matter</strong> is anything that has mass and takes up space.</p>
          <p>In a closed system, matter is <strong>conserved</strong>—it is not created or destroyed.</p>
        `,
        questions: [
          {
            prompt: "Which is matter?",
            choices: ["Air", "A shadow", "A thought"],
            correct: "Air"
          },
          {
            prompt: "When ice melts into water, the amount of matter:",
            choices: ["Stays the same", "Disappears", "Doubles"],
            correct: "Stays the same"
          },
          {
            prompt: "Conservation of matter means:",
            choices: [
              "Matter is not created or destroyed",
              "Matter only exists as solids",
              "Matter can vanish"
            ],
            correct: "Matter is not created or destroyed"
          }
        ]
      }
    ]
  },
  social: {
    displayName: "Social Studies",
    lessons: [
      {
        id: 1,
        title: "U.S. Government Basics",
        lessonHtml: `
          <p>The U.S. government has three branches: <strong>legislative</strong> (makes laws), <strong>executive</strong> (carries out laws), and <strong>judicial</strong> (interprets laws).</p>
        `,
        questions: [
          {
            prompt: "Which branch makes laws?",
            choices: ["Legislative", "Executive", "Judicial"],
            correct: "Legislative"
          },
          {
            prompt: "Which branch includes the courts?",
            choices: ["Judicial", "Executive", "Legislative"],
            correct: "Judicial"
          },
          {
            prompt: "Which branch carries out laws?",
            choices: ["Executive", "Judicial", "Legislative"],
            correct: "Executive"
          }
        ]
      },
      {
        id: 2,
        title: "Early United States History",
        lessonHtml: `
          <p>The original 13 colonies became the first states of the United States after the American Revolution.</p>
          <p>The Constitution was written to create a new government.</p>
        `,
        questions: [
          {
            prompt: "The 13 colonies were located along the:",
            choices: ["East Coast", "West Coast", "Gulf Coast"],
            correct: "East Coast"
          },
          {
            prompt: "The American Revolution was a war for:",
            choices: ["Independence", "More taxes", "New holidays"],
            correct: "Independence"
          },
          {
            prompt: "The Constitution is:",
            choices: [
              "A plan for the government",
              "A list of holidays",
              "A map of the colonies"
            ],
            correct: "A plan for the government"
          }
        ]
      },
      {
        id: 3,
        title: "Citizenship & Rights",
        lessonHtml: `
          <p>Citizens have <strong>rights</strong> (like freedom of speech) and <strong>responsibilities</strong> (like following laws and voting when they are old enough).</p>
        `,
        questions: [
          {
            prompt: "Which is a right?",
            choices: ["Freedom of speech", "Breaking laws", "Ignoring rules"],
            correct: "Freedom of speech"
          },
          {
            prompt: "Which is a responsibility?",
            choices: ["Following laws", "Taking others' things", "Littering"],
            correct: "Following laws"
          },
          {
            prompt: "Voting is a way citizens:",
            choices: ["Help choose leaders", "Avoid responsibility", "Stop laws"],
            correct: "Help choose leaders"
          }
        ]
      }
    ]
  },

  logic: {
    displayName: "Logic & Patterns",
    lessons: [
      {
        id: 1,
        title: "Number Patterns & Rules",
        lessonHtml: `
          <p>Number patterns follow a rule, like “add 6 each time” or “multiply by 2.”</p>
        `,
        questions: [
          {
            prompt: "What comes next? 4, 8, 12, 16, ?",
            choices: ["18", "20", "22"],
            correct: "20"
          },
          {
            prompt: "What is the rule? 3, 6, 12, 24, ...",
            choices: ["Multiply by 2", "Add 3", "Subtract 3"],
            correct: "Multiply by 2"
          },
          {
            prompt: "What comes next? 25, 20, 15, 10, ?",
            choices: ["5", "0", "8"],
            correct: "5"
          }
        ]
      },
      {
        id: 2,
        title: "Logical Statements",
        lessonHtml: `
          <p>Logical statements can be true or false. We use facts and reasoning to decide.</p>
        `,
        questions: [
          {
            prompt: "All squares are rectangles.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          },
          {
            prompt: "All rectangles are squares.",
            choices: ["True", "False", "Not sure"],
            correct: "False"
          },
          {
            prompt: "If a number is even, it is divisible by 2.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          }
        ]
      },
      {
        id: 3,
        title: "Two‑Step Problems",
        lessonHtml: `
          <p>Some problems take more than one step, like multiplying then adding.</p>
        `,
        questions: [
          {
            prompt: "You buy 3 notebooks for $2 each and one pen for $1. How much total?",
            choices: ["$7", "$5", "$6"],
            correct: "$7"
          },
          {
            prompt: "A pattern starts at 10, then subtracts 2 and adds 1. What is the next number after 10?",
            choices: ["9", "8", "11"],
            correct: "9"
          },
          {
            prompt: "You read 4 pages each day for 5 days. How many pages total?",
            choices: ["20", "9", "15"],
            correct: "20"
          }
        ]
      }
    ]
  },

};
// ===============================
// GRADE 5 — PROGRESS STATE
// ===============================

window.g5Progress = {
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
  currentLessonIndex = Math.min(window.g5Progress[key], window.grade5Data[key].lessons.length - 1);
  quizActive = false;

  document.querySelectorAll(".g5-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-subject") === key);
  });

  showLesson();
}

// ===============================
// LESSON RENDERING
// ===============================

function showLesson() {
  const subject = window.grade5Data[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  document.getElementById("g5-lesson-subject-label").textContent = subject.displayName;
  document.getElementById("g5-lesson-title").textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  document.getElementById("g5-lesson-body").innerHTML = lesson.lessonHtml;

  document.getElementById("g5-start-quiz-btn").disabled = false;

  document.getElementById("g5-lesson-card").style.display = "flex";
  document.getElementById("g5-quiz-card").style.display = "none";
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
  const subject = window.grade5Data[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  document.getElementById("g5-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("g5-quiz-title").textContent = lesson.title;
  document.getElementById("g5-quiz-lesson-label").textContent = `Lesson ${lesson.id}`;
  document.getElementById("g5-quiz-q-progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${lesson.questions.length}`;

  document.getElementById("g5-quiz-prompt").textContent = q.prompt;

  const choices = [q.choices[0], q.choices[1], q.choices[2]];
  document.getElementById("g5-choice-1").textContent = choices[0];
  document.getElementById("g5-choice-2").textContent = choices[1];
  document.getElementById("g5-choice-3").textContent = choices[2];

  document.getElementById("g5-choice-1").onclick = () => submitAnswer(choices[0]);
  document.getElementById("g5-choice-2").onclick = () => submitAnswer(choices[1]);
  document.getElementById("g5-choice-3").onclick = () => submitAnswer(choices[2]);

  document.getElementById("g5-lesson-card").style.display = "none";
  document.getElementById("g5-quiz-card").style.display = "flex";
}

function submitAnswer(choice) {
  const subject = window.grade5Data[currentSubjectKey];
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
  window.g5Progress[currentSubjectKey]++;

  updateAllSubjectStatus();
  updateGlobalProgress();

  const subject = window.grade5Data[currentSubjectKey];

  if (window.g5Progress[currentSubjectKey] >= subject.lessons.length) {
    checkForGraduation();
  }

  quizActive = false;
  showLesson();
}

// ===============================
// PROGRESS UI
// ===============================

function updateAllSubjectStatus() {
  Object.keys(window.g5Progress).forEach(key => {
    const statusEl = document.getElementById(`${key}-status`);
    const total = window.grade5Data[key].lessons.length;
    const done = window.g5Progress[key];
    statusEl.textContent = `${done} / ${total} lessons`;
  });
}

function updateGlobalProgress() {
  const totalLessons = Object.values(window.grade5Data)
    .map(sub => sub.lessons.length)
    .reduce((a, b) => a + b, 0);

  const completed = Object.values(window.g5Progress)
    .reduce((a, b) => a + b, 0);

  const percent = Math.round((completed / totalLessons) * 100);

  document.getElementById("g5-progress-fill").style.width = percent + "%";
  document.getElementById("g5-progress-text").textContent = percent + "%";
}

// ===============================
// GRADUATION
// ===============================

function checkForGraduation() {
  const allDone = Object.keys(window.g5Progress).every(
    key => window.g5Progress[key] >= window.grade5Data[key].lessons.length
  );

  if (allDone) {
    document.getElementById("g5-grad-overlay").style.display = "flex";
  }
}

function unlockGrade5Reward() {
  window.location.href = "../browserworld/browser.html";
}

// ===============================
// SPARKLES
// ===============================

function triggerSparkles() {
  const spark = document.getElementById("g5-sparkles");
  spark.classList.add("active");
  setTimeout(() => spark.classList.remove("active"), 600);
}

