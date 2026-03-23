// ===============================
// GRADE 11 — CURRICULUM DATA
// ===============================

const g11Subjects = {

  // -------------------------------
  // ENGLISH LANGUAGE ARTS
  // -------------------------------
  reading: {
    displayName: "English Language Arts",
    lessons: [

      {
        id: 1,
        title: "American Literature & Themes",
        lessonHtml: `
          <p>11th grade ELA focuses heavily on <strong>American literature</strong>.</p>
          <p>Common themes include identity, freedom, justice, and the American Dream.</p>
        `,
        questions: [
          {
            prompt: "A major theme in American literature is:",
            choices: ["The American Dream", "Photosynthesis", "Geometry"],
            correct: "The American Dream"
          },
          {
            prompt: "Themes are:",
            choices: ["Central ideas", "Character names", "Plot twists"],
            correct: "Central ideas"
          },
          {
            prompt: "American literature often explores:",
            choices: ["Identity and society", "Only fantasy worlds", "Only science topics"],
            correct: "Identity and society"
          }
        ]
      },

      {
        id: 2,
        title: "Rhetorical Analysis",
        lessonHtml: `
          <p>Rhetorical analysis examines how authors use <strong>ethos, pathos, logos</strong> and stylistic choices to persuade.</p>
        `,
        questions: [
          {
            prompt: "Ethos appeals to:",
            choices: ["Credibility", "Emotion", "Logic"],
            correct: "Credibility"
          },
          {
            prompt: "Logos appeals to:",
            choices: ["Logic and evidence", "Fear", "Authority"],
            correct: "Logic and evidence"
          },
          {
            prompt: "Rhetorical analysis focuses on:",
            choices: ["How arguments are built", "Only plot", "Only characters"],
            correct: "How arguments are built"
          }
        ]
      },

      {
        id: 3,
        title: "Research Writing",
        lessonHtml: `
          <p>Research writing requires credible sources, paraphrasing, synthesis, and citations.</p>
        `,
        questions: [
          {
            prompt: "A credible source is:",
            choices: ["Reliable and accurate", "Random", "Unverified"],
            correct: "Reliable and accurate"
          },
          {
            prompt: "Paraphrasing means:",
            choices: ["Putting ideas in your own words", "Copying text", "Deleting information"],
            correct: "Putting ideas in your own words"
          },
          {
            prompt: "Research writing must include:",
            choices: ["Citations", "Only opinions", "Only summaries"],
            correct: "Citations"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // ALGEBRA II & PRE‑CALCULUS
  // -------------------------------
  math: {
    displayName: "Algebra II & Pre‑Calculus",
    lessons: [

      {
        id: 1,
        title: "Polynomial Functions",
        lessonHtml: `
          <p>Polynomial functions include terms with whole‑number exponents.</p>
          <p>Key features: degree, roots, end behavior.</p>
        `,
        questions: [
          {
            prompt: "The degree of a polynomial is:",
            choices: ["The highest exponent", "The constant term", "The slope"],
            correct: "The highest exponent"
          },
          {
            prompt: "Roots are:",
            choices: ["Where the graph crosses the x‑axis", "The y‑intercept", "The slope"],
            correct: "Where the graph crosses the x‑axis"
          },
          {
            prompt: "End behavior describes:",
            choices: ["How the graph behaves as x → ±∞", "Only the vertex", "Only the intercepts"],
            correct: "How the graph behaves as x → ±∞"
          }
        ]
      },

      {
        id: 2,
        title: "Trigonometric Functions",
        lessonHtml: `
          <p>Trigonometric functions model periodic behavior.</p>
          <p>Key ideas: amplitude, period, frequency.</p>
        `,
        questions: [
          {
            prompt: "Amplitude measures:",
            choices: ["Height of the wave", "Slope", "Intercept"],
            correct: "Height of the wave"
          },
          {
            prompt: "Period is:",
            choices: ["One full cycle", "Half the graph", "The y‑intercept"],
            correct: "One full cycle"
          },
          {
            prompt: "Sine and cosine are:",
            choices: ["Periodic functions", "Linear functions", "Exponential functions"],
            correct: "Periodic functions"
          }
        ]
      },

      {
        id: 3,
        title: "Rational Expressions",
        lessonHtml: `
          <p>Rational expressions are fractions with polynomials in the numerator and denominator.</p>
          <p>They require factoring and simplifying.</p>
        `,
        questions: [
          {
            prompt: "A rational expression is:",
            choices: ["A fraction of polynomials", "A square root", "A matrix"],
            correct: "A fraction of polynomials"
          },
          {
            prompt: "Simplifying often requires:",
            choices: ["Factoring", "Guessing", "Ignoring variables"],
            correct: "Factoring"
          },
          {
            prompt: "Undefined values occur when:",
            choices: ["Denominator = 0", "Numerator = 0", "Exponent = 1"],
            correct: "Denominator = 0"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // CHEMISTRY & PHYSICS
  // -------------------------------
  science: {
    displayName: "Chemistry & Physics",
    lessons: [

      {
        id: 1,
        title: "Atomic Structure",
        lessonHtml: `
          <p>Atoms contain protons, neutrons, and electrons.</p>
          <p>Electron configuration determines chemical behavior.</p>
        `,
        questions: [
          {
            prompt: "Protons have a:",
            choices: ["Positive charge", "Negative charge", "Neutral charge"],
            correct: "Positive charge"
          },
          {
            prompt: "Electrons determine:",
            choices: ["Chemical behavior", "Atomic mass", "Nuclear stability"],
            correct: "Chemical behavior"
          },
          {
            prompt: "Neutrons have:",
            choices: ["No charge", "Positive charge", "Negative charge"],
            correct: "No charge"
          }
        ]
      },

      {
        id: 2,
        title: "Forces & Energy",
        lessonHtml: `
          <p>Energy can be kinetic or potential.</p>
          <p>Forces cause changes in motion according to Newton’s laws.</p>
        `,
        questions: [
          {
            prompt: "Kinetic energy is:",
            choices: ["Energy of motion", "Stored energy", "Nuclear energy"],
            correct: "Energy of motion"
          },
          {
            prompt: "Potential energy is:",
            choices: ["Stored energy", "Motion energy", "Thermal energy"],
            correct: "Stored energy"
          },
          {
            prompt: "Newton’s Second Law is:",
            choices: ["F = ma", "a² + b² = c²", "E = mc²"],
            correct: "F = ma"
          }
        ]
      },

      {
        id: 3,
        title: "Chemical Bonding & Reactions",
        lessonHtml: `
          <p>Chemical reactions involve breaking and forming bonds.</p>
          <p>Reaction rates depend on temperature, concentration, and catalysts.</p>
        `,
        questions: [
          {
            prompt: "Catalysts:",
            choices: ["Speed up reactions", "Slow reactions", "Stop reactions"],
            correct: "Speed up reactions"
          },
          {
            prompt: "Bond breaking requires:",
            choices: ["Energy", "No energy", "Randomness"],
            correct: "Energy"
          },
          {
            prompt: "Reaction rate increases when:",
            choices: ["Temperature increases", "Temperature decreases", "Reactants freeze"],
            correct: "Temperature increases"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // U.S. HISTORY & CIVICS
  // -------------------------------
  social: {
    displayName: "U.S. History & Civics",
    lessons: [

      {
        id: 1,
        title: "Reconstruction to Industrialization",
        lessonHtml: `
          <p>After the Civil War, the U.S. rebuilt the South and expanded industry.</p>
        `,
        questions: [
          {
            prompt: "Reconstruction aimed to:",
            choices: ["Rebuild the South", "Start WWI", "End democracy"],
            correct: "Rebuild the South"
          },
          {
            prompt: "Industrialization increased:",
            choices: ["Factories and cities", "Feudalism", "Isolation"],
            correct: "Factories and cities"
          },
          {
            prompt: "A major issue after the Civil War was:",
            choices: ["Civil rights", "Space travel", "Nuclear energy"],
            correct: "Civil rights"
          }
        ]
      },

      {
        id: 2,
        title: "World Wars & Global Conflict",
        lessonHtml: `
          <p>World War I and II reshaped global politics, alliances, and technology.</p>
        `,
        questions: [
          {
            prompt: "WWI began after:",
            choices: ["Assassination of Archduke Ferdinand", "Moon landing", "Cold War"],
            correct: "Assassination of Archduke Ferdinand"
          },
          {
            prompt: "WWII ended in:",
            choices: ["1945", "1918", "1969"],
            correct: "1945"
          },
          {
            prompt: "The Cold War was a conflict of:",
            choices: ["Ideologies", "Geography", "Weather"],
            correct: "Ideologies"
          }
        ]
      },

      {
        id: 3,
        title: "Civics: Rights & Responsibilities",
        lessonHtml: `
          <p>Citizens participate through voting, jury duty, and civic engagement.</p>
        `,
        questions: [
          {
            prompt: "Voting is a:",
            choices: ["Civic responsibility", "Punishment", "Random act"],
            correct: "Civic responsibility"
          },
          {
            prompt: "Jury duty ensures:",
            choices: ["Fair trials", "Higher taxes", "No laws"],
            correct: "Fair trials"
          },
          {
            prompt: "Civic engagement includes:",
            choices: ["Staying informed", "Ignoring issues", "Avoiding news"],
            correct: "Staying informed"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // LOGIC, REASONING & PROBLEM SOLVING
  // -------------------------------
  logic: {
    displayName: "Logic, Reasoning & Problem Solving",
    lessons: [

      {
        id: 1,
        title: "Formal Logic & Proof",
        lessonHtml: `
          <p>Formal logic uses premises, conclusions, and valid reasoning.</p>
        `,
        questions: [
          {
            prompt: "A valid argument is one where:",
            choices: ["Conclusion follows from premises", "Premises are random", "Conclusion is emotional"],
            correct: "Conclusion follows from premises"
          },
          {
            prompt: "A premise is:",
            choices: ["A supporting statement", "A graph", "A metaphor"],
            correct: "A supporting statement"
          },
          {
            prompt: "Logic helps evaluate:",
            choices: ["Arguments", "Weather", "Music"],
            correct: "Arguments"
          }
        ]
      },

      {
        id: 2,
        title: "Advanced Algebraic Reasoning",
        lessonHtml: `
          <p>Solving complex equations may require factoring, substitution, or graphing.</p>
        `,
        questions: [
          {
            prompt: "Factoring rewrites expressions as:",
            choices: ["Products", "Sums", "Fractions"],
            correct: "Products"
          },
          {
            prompt: "Graphing helps visualize:",
            choices: ["Solutions", "Randomness", "Music"],
            correct: "Solutions"
          },
          {
            prompt: "Substitution is used to:",
            choices: ["Solve systems", "Find area", "Measure angles"],
            correct: "Solve systems"
          }
        ]
      },

      {
        id: 3,
        title: "Modeling Real‑World Problems",
        lessonHtml: `
          <p>Models use equations, graphs, and functions to represent real situations.</p>
        `,
        questions: [
          {
            prompt: "A model represents:",
            choices: ["A real‑world situation", "A fictional story", "A random idea"],
            correct: "A real‑world situation"
          },
          {
            prompt: "Graphs show:",
            choices: ["Relationships", "Only shapes", "Only text"],
            correct: "Relationships"
          },
          {
            prompt: "Equations can model:",
            choices: ["Real‑world problems", "Only art", "Only geography"],
            correct: "Real‑world problems"
          }
        ]
      }

    ]
  }

};

// ===============================
// GRADE 11 — PROGRESS STATE
// ===============================

const g11Progress = {
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
  currentLessonIndex = Math.min(g11Progress[key], g11Subjects[key].lessons.length - 1);
  quizActive = false;

  document.querySelectorAll(".g11-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-subject") === key);
  });

  showLesson();
}

// ===============================
// LESSON RENDERING
// ===============================

function showLesson() {
  const subject = g11Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  document.getElementById("g11-lesson-subject-label").textContent = subject.displayName;
  document.getElementById("g11-lesson-title").textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  document.getElementById("g11-lesson-body").innerHTML = lesson.lessonHtml;

  document.getElementById("g11-start-quiz-btn").disabled = false;

  document.getElementById("g11-lesson-card").style.display = "flex";
  document.getElementById("g11-quiz-card").style.display = "none";
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
  const subject = g11Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  document.getElementById("g11-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("g11-quiz-title").textContent = lesson.title;
  document.getElementById("g11-quiz-lesson-label").textContent = `Lesson ${lesson.id}`;
  document.getElementById("g11-quiz-q-progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${lesson.questions.length}`;

  document.getElementById("g11-quiz-prompt").textContent = q.prompt;

  const choices = [q.choices[0], q.choices[1], q.choices[2]];
  document.getElementById("g11-choice-1").textContent = choices[0];
  document.getElementById("g11-choice-2").textContent = choices[1];
  document.getElementById("g11-choice-3").textContent = choices[2];

  document.getElementById("g11-choice-1").onclick = () => submitAnswer(choices[0]);
  document.getElementById("g11-choice-2").onclick = () => submitAnswer(choices[1]);
  document.getElementById("g11-choice-3").onclick = () => submitAnswer(choices[2]);

  document.getElementById("g11-lesson-card").style.display = "none";
  document.getElementById("g11-quiz-card").style.display = "flex";
}

function submitAnswer(choice) {
  const subject = g11Subjects[currentSubjectKey];
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
  }
}

// ===============================
// LESSON COMPLETION
// ===============================

function finishLesson() {
  g11Progress[currentSubjectKey]++;

  updateAllSubjectStatus();
  updateGlobalProgress();

  const subject = g11Subjects[currentSubjectKey];
  if (g11Progress[currentSubjectKey] >= subject.lessons.length) {
    checkForGraduation();
  }

  quizActive = false;
  showLesson
