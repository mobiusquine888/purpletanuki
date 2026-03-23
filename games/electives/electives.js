// ===============================
// HIGH SCHOOL ELECTIVES — DATA
// ===============================

const elSubjects = {

  // -------------------------------
  // PSYCHOLOGY
  // -------------------------------
  psych: {
    displayName: "Psychology",
    lessons: [

      {
        id: 1,
        title: "Foundations of Psychology",
        lessonHtml: `
          <p>Psychology is the scientific study of behavior and mental processes.</p>
          <p>Major perspectives include behavioral, cognitive, biological, and humanistic.</p>
        `,
        questions: [
          {
            prompt: "Psychology studies:",
            choices: ["Behavior and mental processes", "Weather", "Economics"],
            correct: "Behavior and mental processes"
          },
          {
            prompt: "The cognitive perspective focuses on:",
            choices: ["Thinking and memory", "Muscles", "Weather patterns"],
            correct: "Thinking and memory"
          },
          {
            prompt: "The biological perspective examines:",
            choices: ["Brain and body systems", "Art styles", "Historical events"],
            correct: "Brain and body systems"
          }
        ]
      },

      {
        id: 2,
        title: "Learning & Conditioning",
        lessonHtml: `
          <p>Classical conditioning pairs stimuli; operant conditioning uses rewards and consequences.</p>
        `,
        questions: [
          {
            prompt: "Classical conditioning involves:",
            choices: ["Associating two stimuli", "Rewards only", "Punishment only"],
            correct: "Associating two stimuli"
          },
          {
            prompt: "Operant conditioning uses:",
            choices: ["Rewards and consequences", "Dreams", "Reflexes"],
            correct: "Rewards and consequences"
          },
          {
            prompt: "A reinforcement:",
            choices: ["Increases behavior", "Decreases behavior", "Stops learning"],
            correct: "Increases behavior"
          }
        ]
      },

      {
        id: 3,
        title: "Personality & Development",
        lessonHtml: `
          <p>Personality theories include trait theory, psychoanalytic theory, and humanistic theory.</p>
        `,
        questions: [
          {
            prompt: "Trait theory focuses on:",
            choices: ["Stable characteristics", "Dreams", "Brain scans"],
            correct: "Stable characteristics"
          },
          {
            prompt: "Freud’s theory emphasized:",
            choices: ["The unconscious mind", "Muscle growth", "Weather"],
            correct: "The unconscious mind"
          },
          {
            prompt: "Humanistic theory emphasizes:",
            choices: ["Growth and potential", "Punishment", "Reflexes"],
            correct: "Growth and potential"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // COMPUTER SCIENCE
  // -------------------------------
  cs: {
    displayName: "Computer Science",
    lessons: [

      {
        id: 1,
        title: "Algorithms & Logic",
        lessonHtml: `
          <p>An algorithm is a step‑by‑step procedure for solving a problem.</p>
          <p>Good algorithms are efficient and clear.</p>
        `,
        questions: [
          {
            prompt: "An algorithm is:",
            choices: ["A step‑by‑step process", "A random guess", "A picture"],
            correct: "A step‑by‑step process"
          },
          {
            prompt: "Efficiency means:",
            choices: ["Solving problems quickly", "Using more steps", "Ignoring errors"],
            correct: "Solving problems quickly"
          },
          {
            prompt: "Algorithms rely on:",
            choices: ["Logic", "Luck", "Weather"],
            correct: "Logic"
          }
        ]
      },

      {
        id: 2,
        title: "Programming Basics",
        lessonHtml: `
          <p>Programming uses variables, conditionals, loops, and functions to control behavior.</p>
        `,
        questions: [
          {
            prompt: "A variable stores:",
            choices: ["Data", "Music", "Weather"],
            correct: "Data"
          },
          {
            prompt: "A loop:",
            choices: ["Repeats actions", "Stops code", "Deletes memory"],
            correct: "Repeats actions"
          },
          {
            prompt: "A conditional runs code:",
            choices: ["Only if a condition is true", "At random", "Only on weekends"],
            correct: "Only if a condition is true"
          }
        ]
      },

      {
        id: 3,
        title: "Data & Cybersecurity",
        lessonHtml: `
          <p>Data science analyzes information to find patterns.</p>
          <p>Cybersecurity protects systems from unauthorized access.</p>
        `,
        questions: [
          {
            prompt: "Cybersecurity protects:",
            choices: ["Systems and data", "Plants", "Weather"],
            correct: "Systems and data"
          },
          {
            prompt: "Data analysis finds:",
            choices: ["Patterns", "Randomness", "Music"],
            correct: "Patterns"
          },
          {
            prompt: "A strong password should be:",
            choices: ["Long and complex", "Short", "Your name"],
            correct: "Long and complex"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // ECONOMICS
  // -------------------------------
  econ: {
    displayName: "Economics",
    lessons: [

      {
        id: 1,
        title: "Microeconomics Basics",
        lessonHtml: `
          <p>Microeconomics studies individuals, businesses, and markets.</p>
          <p>Supply and demand determine prices.</p>
        `,
        questions: [
          {
            prompt: "Microeconomics studies:",
            choices: ["Individuals and markets", "Planets", "Weather"],
            correct: "Individuals and markets"
          },
          {
            prompt: "High demand + low supply =",
            choices: ["Higher prices", "Lower prices", "No change"],
            correct: "Higher prices"
          },
          {
            prompt: "Producers supply:",
            choices: ["Goods and services", "Laws", "Weather"],
            correct: "Goods and services"
          }
        ]
      },

      {
        id: 2,
        title: "Macroeconomics Basics",
        lessonHtml: `
          <p>Macroeconomics studies national economies, inflation, unemployment, and GDP.</p>
        `,
        questions: [
          {
            prompt: "GDP measures:",
            choices: ["Total economic output", "Population", "Weather"],
            correct: "Total economic output"
          },
          {
            prompt: "Inflation means:",
            choices: ["Prices rising", "Prices falling", "No change"],
            correct: "Prices rising"
          },
          {
            prompt: "Unemployment measures:",
            choices: ["People without jobs", "People in school", "People traveling"],
            correct: "People without jobs"
          }
        ]
      },

      {
        id: 3,
        title: "Personal Finance",
        lessonHtml: `
          <p>Personal finance includes budgeting, saving, credit, and investing.</p>
        `,
        questions: [
          {
            prompt: "A budget helps you:",
            choices: ["Manage money", "Predict weather", "Grow plants"],
            correct: "Manage money"
          },
          {
            prompt: "Credit scores reflect:",
            choices: ["Borrowing history", "Height", "Age"],
            correct: "Borrowing history"
          },
          {
            prompt: "Investing helps money:",
            choices: ["Grow over time", "Disappear", "Stay the same"],
            correct: "Grow over time"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // ART HISTORY
  // -------------------------------
  art: {
    displayName: "Art History",
    lessons: [

      {
        id: 1,
        title: "Ancient to Medieval Art",
        lessonHtml: `
          <p>Early art includes cave paintings, Egyptian art, Greek sculpture, and medieval religious works.</p>
        `,
        questions: [
          {
            prompt: "Greek art is known for:",
            choices: ["Idealized human forms", "Abstract shapes", "Digital media"],
            correct: "Idealized human forms"
          },
          {
            prompt: "Medieval art focused on:",
            choices: ["Religion", "Robots", "Space travel"],
            correct: "Religion"
          },
          {
            prompt: "Egyptian art emphasized:",
            choices: ["Symbolism", "Randomness", "Perspective"],
            correct: "Symbolism"
          }
        ]
      },

      {
        id: 2,
        title: "Renaissance to Modern Art",
        lessonHtml: `
          <p>The Renaissance emphasized realism and perspective.</p>
          <p>Modern art includes impressionism, cubism, and abstract expressionism.</p>
        `,
        questions: [
          {
            prompt: "Renaissance art emphasized:",
            choices: ["Realism", "Pixel art", "Randomness"],
            correct: "Realism"
          },
          {
            prompt: "Impressionism focuses on:",
            choices: ["Light and color", "Mathematics", "Robotics"],
            correct: "Light and color"
          },
          {
            prompt: "Cubism breaks objects into:",
            choices: ["Geometric shapes", "Realistic portraits", "Photographs"],
            correct: "Geometric shapes"
          }
        ]
      },

      {
        id: 3,
        title: "Art Interpretation",
        lessonHtml: `
          <p>Interpreting art involves analyzing composition, symbolism, and cultural context.</p>
        `,
        questions: [
          {
            prompt: "Symbolism means:",
            choices: ["Objects representing ideas", "Random shapes", "Only colors"],
            correct: "Objects representing ideas"
          },
          {
            prompt: "Composition refers to:",
            choices: ["Arrangement of elements", "Artist’s age", "Museum size"],
            correct: "Arrangement of elements"
          },
          {
            prompt: "Context helps explain:",
            choices: ["Why the art was created", "How tall the artist was", "The weather"],
            correct: "Why the art was created"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // CREATIVE WRITING
  // -------------------------------
  creative: {
    displayName: "Creative Writing",
    lessons: [

      {
        id: 1,
        title: "Fiction Writing Basics",
        lessonHtml: `
          <p>Fiction uses characters, setting, conflict, and theme to tell a story.</p>
        `,
        questions: [
          {
            prompt: "Conflict is:",
            choices: ["A struggle in the story", "A setting", "A theme"],
            correct: "A struggle in the story"
          },
          {
            prompt: "Setting refers to:",
            choices: ["Time and place", "Plot twist", "Dialogue"],
            correct: "Time and place"
          },
          {
            prompt: "Characters need:",
            choices: ["Motivation", "Randomness", "No goals"],
            correct: "Motivation"
          }
        ]
      },

      {
        id: 2,
        title: "Poetry & Imagery",
        lessonHtml: `
          <p>Poetry uses imagery, rhythm, and figurative language to create meaning.</p>
        `,
        questions: [
          {
            prompt: "Imagery appeals to:",
            choices: ["The senses", "Math skills", "Gravity"],
            correct: "The senses"
          },
          {
            prompt: "A metaphor is:",
            choices: ["A comparison without 'like' or 'as'", "A rhyme", "A plot"],
            correct: "A comparison without 'like' or 'as'"
          },
          {
            prompt: "Rhythm refers to:",
            choices: ["Beat of the poem", "Color of the page", "Font size"],
            correct: "Beat of the poem"
          }
        ]
      },

      {
        id: 3,
        title: "Writing Style & Voice",
        lessonHtml: `
          <p>Voice is the unique personality in writing.</p>
          <p>Style includes word choice, sentence structure, and tone.</p>
        `,
        questions: [
          {
            prompt: "Voice is:",
            choices: ["The writer’s personality", "Grammar rules", "Plot structure"],
            correct: "The writer’s personality"
          },
          {
            prompt: "Style includes:",
            choices: ["Word choice", "Only punctuation", "Only dialogue"],
            correct: "Word choice"
          },
          {
            prompt: "Tone is:",
            choices: ["Attitude of the writing", "Font size", "Page count"],
            correct: "Attitude of the writing"
          }
        ]
      }

    ]
  }

};

// ===============================
// ELECTIVES — PROGRESS STATE
// ===============================

const elProgress = {
  psych: 0,
  cs: 0,
  econ: 0,
  art: 0,
  creative: 0
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
  currentLessonIndex = Math.min(elProgress[key], elSubjects[key].lessons.length - 1);
  quiz
