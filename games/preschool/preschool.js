/* ============================================================
   PRESCHOOL TUTOR — FINAL REFORGE
   ============================================================ */

/* ------------------------------------------------------------
   FULL PRESCHOOL CURRICULUM DATA
   ------------------------------------------------------------ */

const preschoolCurriculum = {
  colors: {
    title: "Colors",
    lessons: [
      {
        title: "Primary Colors",
        teach: "Red, blue, and yellow are the primary colors.",
        examples: [
          "The sky is blue.",
          "A fire truck is red.",
          "A banana is yellow."
        ],
        questions: [
          { q: "What color is the sky?", a: "Blue" },
          { q: "Which color is a banana?", a: "Yellow" },
          { q: "Which one is red?", a: "Red" }
        ]
      }
    ],
    mastery: [
      "Point to something blue.",
      "Which one is yellow?",
      "Which color is the sun?"
    ]
  },

  shapes: {
    title: "Shapes",
    lessons: [
      {
        title: "Basic Shapes",
        teach: "Circles are round. Squares have four equal sides. Triangles have three sides.",
        examples: [
          "A ball is a circle.",
          "A window can be a square.",
          "A slice of pizza is a triangle."
        ],
        questions: [
          { q: "Which shape is round?", a: "Circle" },
          { q: "Which shape has three sides?", a: "Triangle" },
          { q: "Which shape has four equal sides?", a: "Square" }
        ]
      }
    ],
    mastery: [
      "Which one is a circle?",
      "Which shape looks like a slice of pizza?",
      "Which shape has three sides?"
    ]
  },

  numbers: {
    title: "Numbers",
    lessons: [
      {
        title: "Counting to 10",
        teach: "We count from 1 to 10. Counting helps us know how many things there are.",
        examples: [
          "1, 2, 3, 4, 5...",
          "There are 3 apples.",
          "There are 5 fingers on a hand."
        ],
        questions: [
          { q: "What number comes after 3?", a: "4" },
          { q: "How many apples are there: 🍎🍎🍎?", a: "3" },
          { q: "Which number is bigger: 5 or 2?", a: "5" }
        ]
      }
    ],
    mastery: [
      "Count to 10.",
      "Which number comes after 6?",
      "Which number is missing: 1, 2, __, 4?"
    ]
  },

  letters: {
    title: "Letters",
    lessons: [
      {
        title: "The Alphabet",
        teach: "The alphabet has 26 letters. A, B, C are the first three.",
        examples: [
          "A is for apple.",
          "B is for ball.",
          "C is for cat."
        ],
        questions: [
          { q: "Which letter is this: A?", a: "A" },
          { q: "Which letter does 'cat' start with?", a: "C" },
          { q: "Which letter comes after B?", a: "C" }
        ]
      }
    ],
    mastery: [
      "Which one is the letter A?",
      "Which letter makes the 'mmm' sound?",
      "Which letter does 'dog' start with?"
    ]
  },

  animalsLogic: {
    title: "Animals & Logic",
    lessons: [
      {
        title: "Animals and Thinking",
        teach: "Animals live in different places and make different sounds.",
        examples: [
          "A cat says meow.",
          "A dog says woof.",
          "A fish lives in water."
        ],
        questions: [
          { q: "Which animal says meow?", a: "Cat" },
          { q: "Which one lives in water?", a: "Fish" },
          { q: "Which one is bigger: a mouse or an elephant?", a: "Elephant" }
        ]
      }
    ],
    mastery: [
      "Which one is an animal?",
      "Which one does NOT belong: cat, dog, banana?",
      "Which animal lives in the water?"
    ]
  }
};


/* ------------------------------------------------------------
   SUBJECT LIST RENDERING
   ------------------------------------------------------------ */

function showSubjects() {
  hideAllViews();

  const container = document.getElementById("subject-list");
  container.innerHTML = "";

  Object.keys(preschoolCurriculum).forEach(key => {
    const subject = preschoolCurriculum[key];
    const btn = document.createElement("button");
    btn.className = "subject-btn";
    btn.textContent = subject.title;
    btn.onclick = () => showLesson(key, 0);
    container.appendChild(btn);
  });
}


/* ------------------------------------------------------------
   LESSON VIEW
   ------------------------------------------------------------ */

function showLesson(subjectKey, lessonIndex) {
  hideAllViews();

  const subject = preschoolCurriculum[subjectKey];
  const lesson = subject.lessons[lessonIndex];

  const view = document.getElementById("lesson-view");
  view.classList.remove("hidden");

  view.innerHTML = `
    <h2>${lesson.title}</h2>
    <p>${lesson.teach}</p>

    <h3>Examples</h3>
    <ul>
      ${lesson.examples.map(e => `<li>${e}</li>`).join("")}
    </ul>

    <button onclick="showMastery('${subjectKey}')">I'm Ready!</button>
  `;
}


/* ------------------------------------------------------------
   MASTERY CHECK
   ------------------------------------------------------------ */

function showMastery(subjectKey) {
  hideAllViews();

  const subject = preschoolCurriculum[subjectKey];
  const view = document.getElementById("mastery-view");
  view.classList.remove("hidden");

  view.innerHTML = `
    <h2>${subject.title} Mastery Check</h2>
    <ul>
      ${subject.mastery.map(q => `<li>${q}</li>`).join("")}
    </ul>

    <button onclick="completeSubject()">Next</button>
  `;
}

let completedSubjects = 0;

function completeSubject() {
  completedSubjects++;

  if (completedSubjects >= 5) {
    showFinalChallenge();
  } else {
    showSubjects();
  }
}


/* ------------------------------------------------------------
   FINAL PRESCHOOL CHALLENGE
   ------------------------------------------------------------ */

function showFinalChallenge() {
  hideAllViews();

  const view = document.getElementById("final-view");
  view.classList.remove("hidden");

  view.innerHTML = `
    <h2>Final Preschool Challenge</h2>
    <ul>
      <li>Which one does NOT belong: dog, cat, chair?</li>
      <li>Which number is bigger: 7 or 3?</li>
      <li>Which shape is round?</li>
      <li>Which letter does 'sun' start with?</li>
      <li>Which animal lives in water?</li>
    </ul>

    <button onclick="unlockGate()">Finish Preschool!</button>
  `;
}

function unlockGate() {
  alert("🎉 You finished Preschool! The Gate Ritual is unlocked!");
  window.location.href = "../arcade/index.html";
}


/* ------------------------------------------------------------
   UTILITY
   ------------------------------------------------------------ */

function hideAllViews() {
  document.getElementById("lesson-view").classList.add("hidden");
  document.getElementById("mastery-view").classList.add("hidden");
  document.getElementById("final-view").classList.add("hidden");
}


/* ------------------------------------------------------------
   INITIALIZE
   ------------------------------------------------------------ */

showSubjects();

