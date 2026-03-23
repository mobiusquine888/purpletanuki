// ===============================
// GRADE 12 — CURRICULUM DATA
// ===============================

const g12Subjects = {

  // -------------------------------
  // ENGLISH LANGUAGE ARTS
  // -------------------------------
  reading: {
    displayName: "English Language Arts",
    lessons: [

      {
        id: 1,
        title: "Literary Theory & Interpretation",
        lessonHtml: `
          <p>12th grade ELA introduces <strong>literary theory</strong>—different lenses for interpreting texts.</p>
          <p>Common lenses include feminist, historical, psychological, and structuralist approaches.</p>
        `,
        questions: [
          {
            prompt: "A feminist lens focuses on:",
            choices: ["Gender roles", "Plot twists", "Grammar"],
            correct: "Gender roles"
          },
          {
            prompt: "A historical lens examines:",
            choices: ["Context of the time period", "Only characters", "Only metaphors"],
            correct: "Context of the time period"
          },
          {
            prompt: "Literary theory helps readers:",
            choices: ["Interpret texts in deeper ways", "Avoid analysis", "Rewrite the story"],
            correct: "Interpret texts in deeper ways"
          }
        ]
      },

      {
        id: 2,
        title: "Advanced Rhetoric & Argument",
        lessonHtml: `
          <p>Advanced rhetoric analyzes how authors use structure, tone, and evidence to persuade.</p>
          <p>Writers strengthen arguments by addressing counterarguments and synthesizing sources.</p>
        `,
        questions: [
          {
            prompt: "Synthesis means:",
            choices: ["Combining ideas from multiple sources", "Copying text", "Ignoring evidence"],
            correct: "Combining ideas from multiple sources"
          },
          {
            prompt: "A strong argument includes:",
            choices: ["Counterarguments", "Only opinions", "Only summaries"],
            correct: "Counterarguments"
          },
          {
            prompt: "Tone refers to:",
            choices: ["Author’s attitude", "Plot events", "Character names"],
            correct: "Author’s attitude"
          }
        ]
      },

      {
        id: 3,
        title: "College‑Level Research Writing",
        lessonHtml: `
          <p>College‑level writing requires credible sources, synthesis, and formal citation styles (MLA/APA).</p>
        `,
        questions: [
          {
            prompt: "MLA and APA are:",
            choices: ["Citation styles", "Math formulas", "Political systems"],
            correct: "Citation styles"
          },
          {
            prompt: "A thesis statement is:",
            choices: ["The main argument", "A random detail", "A character trait"],
            correct: "The main argument"
          },
          {
            prompt: "Research writing must include:",
            choices: ["Citations", "Only opinions", "Only quotes"],
            correct: "Citations"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // PRE‑CALCULUS & INTRO CALCULUS
  // -------------------------------
  math: {
    displayName: "Pre‑Calculus & Intro Calculus",
    lessons: [

      {
        id: 1,
        title: "Limits & Continuity (Non‑AP Intro)",
        lessonHtml: `
          <p>Limits describe the value a function approaches as x approaches a point.</p>
          <p>A function is continuous if it has no breaks, jumps, or holes.</p>
        `,
        questions: [
          {
            prompt: "A limit describes:",
            choices: ["Approaching behavior", "Exact slope", "Graph color"],
            correct: "Approaching behavior"
          },
          {
            prompt: "A function is continuous when:",
            choices: ["No breaks or jumps", "It is linear", "It has no x‑intercept"],
            correct: "No breaks or jumps"
          },
          {
            prompt: "Limits are used in:",
            choices: ["Calculus", "Grammar", "Chemistry only"],
            correct: "Calculus"
          }
        ]
      },

      {
        id: 2,
        title: "Derivatives (Conceptual Intro)",
        lessonHtml: `
          <p>A derivative represents the <strong>rate of change</strong> or slope of a function at a point.</p>
          <p>It measures how fast something is changing.</p>
        `,
        questions: [
          {
            prompt: "A derivative represents:",
            choices: ["Rate of change", "Area", "Volume"],
            correct: "Rate of change"
          },
          {
            prompt: "Derivatives are used to find:",
            choices: ["Instantaneous slope", "Graph color", "Random values"],
            correct: "Instantaneous slope"
          },
          {
            prompt: "Derivatives are foundational to:",
            choices: ["Calculus", "Poetry", "Geography"],
            correct: "Calculus"
          }
        ]
      },

      {
        id: 3,
        title: "Trigonometric Identities",
        lessonHtml: `
          <p>Identities like sin²θ + cos²θ = 1 help simplify expressions and solve equations.</p>
        `,
        questions: [
          {
            prompt: "sin²θ + cos²θ =",
            choices: ["1", "0", "2"],
            correct: "1"
          },
          {
            prompt: "Trig identities are used to:",
            choices: ["Simplify expressions", "Find mass", "Write essays"],
            correct: "Simplify expressions"
          },
          {
            prompt: "tan(θ) equals:",
            choices: ["sin(θ)/cos(θ)", "cos(θ)/sin(θ)", "1/sin(θ)"],
            correct: "sin(θ)/cos(θ)"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // PHYSICS & ADVANCED BIOLOGY
  // -------------------------------
  science: {
    displayName: "Physics & Advanced Biology",
    lessons: [

      {
        id: 1,
        title: "Momentum & Energy",
        lessonHtml: `
          <p>Momentum is mass × velocity.</p>
          <p>Energy is conserved in closed systems.</p>
        `,
        questions: [
          {
            prompt: "Momentum equals:",
            choices: ["Mass × velocity", "Force × time", "Energy × distance"],
            correct: "Mass × velocity"
          },
          {
            prompt: "Energy in a closed system:",
            choices: ["Is conserved", "Disappears", "Doubles"],
            correct: "Is conserved"
          },
          {
            prompt: "Kinetic energy is:",
            choices: ["Energy of motion", "Stored energy", "Nuclear energy"],
            correct: "Energy of motion"
          }
        ]
      },

      {
        id: 2,
        title: "Genetics & Inheritance",
        lessonHtml: `
          <p>Traits are inherited through DNA, alleles, and gene expression.</p>
          <p>Dominant alleles mask recessive ones.</p>
        `,
        questions: [
          {
            prompt: "Genes carry:",
            choices: ["Traits", "Weather", "Electricity"],
            correct: "Traits"
          },
          {
            prompt: "Dominant alleles:",
            choices: ["Mask recessive alleles", "Are always harmful", "Are random"],
            correct: "Mask recessive alleles"
          },
          {
            prompt: "DNA is found in:",
            choices: ["The nucleus", "The cell membrane", "The ribosome"],
            correct: "The nucleus"
          }
        ]
      },

      {
        id: 3,
        title: "Ecology & Sustainability",
        lessonHtml: `
          <p>Ecology studies interactions between organisms and their environment.</p>
          <p>Sustainability focuses on long‑term resource use.</p>
        `,
        questions: [
          {
            prompt: "Ecology studies:",
            choices: ["Organisms and environments", "Only atoms", "Only planets"],
            correct: "Organisms and environments"
          },
          {
            prompt: "Sustainability means:",
            choices: ["Using resources responsibly", "Using unlimited resources", "Ignoring the environment"],
            correct: "Using resources responsibly"
          },
          {
            prompt: "A food web shows:",
            choices: ["Energy flow", "Planet motion", "Chemical bonds"],
            correct: "Energy flow"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // GOVERNMENT, ECONOMICS & CIVICS
  // -------------------------------
  social: {
    displayName: "Government, Economics & Civics",
    lessons: [

      {
        id: 1,
        title: "Foundations of Government",
        lessonHtml: `
          <p>Governments maintain order, protect rights, and provide services.</p>
          <p>Democracies rely on rule of law and citizen participation.</p>
        `,
        questions: [
          {
            prompt: "Rule of law means:",
            choices: ["Everyone follows the law", "Only leaders follow laws", "Laws change daily"],
            correct: "Everyone follows the law"
          },
          {
            prompt: "A democracy requires:",
            choices: ["Citizen participation", "No elections", "One ruler"],
            correct: "Citizen participation"
          },
          {
            prompt: "Governments provide:",
            choices: ["Services and protection", "Only entertainment", "Only taxes"],
            correct: "Services and protection"
          }
        ]
      },

      {
        id: 2,
        title: "Economics: Supply & Demand",
        lessonHtml: `
          <p>Supply and demand determine prices in a market economy.</p>
          <p>High demand and low supply increase prices.</p>
        `,
        questions: [
          {
            prompt: "High demand + low supply =",
            choices: ["Higher prices", "Lower prices", "No change"],
            correct: "Higher prices"
          },
          {
            prompt: "Supply refers to:",
            choices: ["How much producers offer", "How much consumers want", "Government spending"],
            correct: "How much producers offer"
          },
          {
            prompt: "Demand refers to:",
            choices: ["Consumer desire", "Producer cost", "Government policy"],
            correct: "Consumer desire"
          }
        ]
      },

      {
        id: 3,
        title: "Civic Responsibility",
        lessonHtml: `
          <p>Civic duties include voting, obeying laws, and staying informed.</p>
        `,
        questions: [
          {
            prompt: "Voting is a:",
            choices: ["Civic responsibility", "Punishment", "Random act"],
            correct: "Civic responsibility"
          },
          {
            prompt: "Citizens must:",
            choices: ["Follow laws", "Ignore laws", "Write laws"],
            correct: "Follow laws"
          },
          {
            prompt: "Staying informed helps citizens:",
            choices: ["Make decisions", "Avoid responsibility", "Ignore issues"],
            correct: "Make decisions"
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
        title: "Formal Logic & Validity",
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
        title: "Advanced Problem Solving",
        lessonHtml: `
          <p>Complex problems require breaking tasks into smaller steps and analyzing patterns.</p>
        `,
        questions: [
          {
            prompt: "Breaking a problem into smaller parts is called:",
            choices: ["Decomposition", "Guessing", "Repetition"],
            correct: "Decomposition"
          },
          {
            prompt: "Patterns help us:",
            choices: ["Predict outcomes", "Avoid solutions", "Ignore data"],
            correct: "Predict outcomes"
          },
          {
            prompt: "Problem solving requires:",
            choices: ["Critical thinking", "Random choices", "Avoiding logic"],
            correct: "Critical thinking"
          }
        ]
      },

      {
        id: 3,
        title: "Modeling Real‑World Systems",
        lessonHtml: `
          <p>Models use equations, graphs, and functions to represent real‑world situations.</p>
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
// GRADE 12 — PROGRESS STATE
// ===============================

const g12Progress = {
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
  currentLessonIndex = Math.min(g12Progress[key], g12Subjects[key].lessons.length - 1);
  quizActive = false;

  document.querySelectorAll(".g12-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-subject") === key);
  });

  showLesson();
}

// ===============================
// LESSON RENDERING
// ===============================

function showLesson() {
  const subject = g12Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  document.getElementById("g12-lesson-subject-label").textContent = subject.displayName;
  document.getElementById("g12-lesson-title").textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  document.getElementById("g12-lesson-body").innerHTML = lesson.lessonHtml;

  document.getElementById("g12-start-quiz-btn").disabled = false;

  document.getElementById("g12-lesson-card").style.display = "flex";
  document.getElementById("g12-quiz-card").style.display = "none";
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
  const subject = g12Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  document.getElementById("g12-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("g12-quiz-title").textContent = lesson.title;
  document.getElementById("g12-quiz-lesson-label").textContent = `Lesson ${lesson.id}`;
  document.getElementById("g12-quiz-q-progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${lesson.questions.length}`;

  document.getElementById("g12-quiz-prompt").textContent = q.prompt;

  const choices = [q.choices[0], q.choices[1], q.choices[2]];
  document.getElementById("g12-choice-1").textContent = choices[0];
  document.getElementById("g12-choice-2").textContent = choices[1];
  document.getElementById("g12-choice-3").textContent = choices[2];

  document.getElementById("g12-choice-1").onclick = () => submitAnswer(choices[0]);
  document.getElementById("g12-choice-2").onclick = () => submitAnswer(choices[1]);
  document.getElementById("g12-choice-3").onclick = () => submitAnswer(choices[2]);

  document.getElementById("g12-lesson-card").style.display = "none";
  document.getElementById("g12-quiz-card").style.display = "flex";
}

function submitAnswer(choice) {
  const subject = g12Subjects[currentSubjectKey];
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
  g12Progress[currentSubjectKey]++;

  updateAllSubjectStatus();
  updateGlobalProgress();

  const subject = g12Subjects[currentSubjectKey];
  if (g12Progress[currentSubjectKey] >= subject.lessons.length) {
    checkForGraduation();
  }

  quizActive = false;
  showLesson();
}

// ===============================
// PROGRESS UI
// ===============================

function updateAllSubjectStatus() {
  Object.keys(g12Progress).forEach(key => {
    const statusEl = document.getElementById(`${key}-status`);
    const total = g12Subjects[key].lessons.length;
    const done = g12Progress[key];
    statusEl.textContent = `${done} / ${total} lessons`;
  });
}

function update
