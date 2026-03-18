// Grade 1 Tutor — Lessons + Quizzes + Global Progress

// SUBJECT DATA: lessons + questions
const g1Subjects = {
  phonics: {
    displayName: "Phonics & Reading",
    lessons: [
      {
        id: 1,
        title: "CVC Words (Consonant-Vowel-Consonant)",
        lessonHtml: `
          <p>CVC words are short words with a consonant, a vowel, then a consonant.</p>
          <p>Examples:</p>
          <ul>
            <li><strong>c</strong>-<strong>a</strong>-<strong>t</strong> → cat</li>
            <li><strong>d</strong>-<strong>o</strong>-<strong>g</strong> → dog</li>
            <li><strong>s</strong>-<strong>u</strong>-<strong>n</strong> → sun</li>
          </ul>
          <p>We say each sound and then blend them together to read the word.</p>
        `,
        questions: [
          {
            prompt: "Which word is a CVC word?",
            choices: ["cat", "tree", "play"],
            correct: "cat"
          },
          {
            prompt: "Which word has 3 sounds?",
            choices: ["sun", "train", "blue"],
            correct: "sun"
          },
          {
            prompt: "Which word is built like c-a-t?",
            choices: ["dog", "star", "play"],
            correct: "dog"
          }
        ]
      },
      {
        id: 2,
        title: "Blends (Two Consonants Together)",
        lessonHtml: `
          <p>Blends are two consonants that stay together at the start or end of a word.</p>
          <p>Examples:</p>
          <ul>
            <li><strong>bl</strong> in <em>blue</em></li>
            <li><strong>st</strong> in <em>stop</em></li>
            <li><strong>cl</strong> in <em>clap</em></li>
          </ul>
          <p>We still hear each sound, but they are close together.</p>
        `,
        questions: [
          {
            prompt: "Which word has a blend?",
            choices: ["blue", "cat", "sun"],
            correct: "blue"
          },
          {
            prompt: "Which word starts with st?",
            choices: ["stop", "top", "shop"],
            correct: "stop"
          },
          {
            prompt: "Which word has cl?",
            choices: ["clap", "cap", "lap"],
            correct: "clap"
          }
        ]
      },
      {
        id: 3,
        title: "Digraphs (Two Letters, One Sound)",
        lessonHtml: `
          <p>Digraphs are two letters that make one new sound.</p>
          <p>Examples:</p>
          <ul>
            <li><strong>sh</strong> in <em>ship</em></li>
            <li><strong>ch</strong> in <em>chop</em></li>
            <li><strong>th</strong> in <em>thin</em></li>
          </ul>
          <p>We do not say each letter by itself. We say the new sound.</p>
        `,
        questions: [
          {
            prompt: "Which word has sh?",
            choices: ["ship", "sip", "hip"],
            correct: "ship"
          },
          {
            prompt: "Which word has ch?",
            choices: ["chop", "hop", "cop"],
            correct: "chop"
          },
          {
            prompt: "Which word has th?",
            choices: ["thin", "tin", "win"],
            correct: "thin"
          }
        ]
      },
      {
        id: 4,
        title: "Short Sentences",
        lessonHtml: `
          <p>We can read short sentences by looking at each word and thinking about what makes sense.</p>
          <p>Example:</p>
          <p><em>The cat can run.</em></p>
          <p>We read from left to right and stop at the period.</p>
        `,
        questions: [
          {
            prompt: "Which sentence is written correctly?",
            choices: [
              "the cat can run",
              "The cat can run.",
              "the Cat Can Run"
            ],
            correct: "The cat can run."
          },
          {
            prompt: "Where do we start reading?",
            choices: [
              "Right to left",
              "Left to right",
              "Bottom to top"
            ],
            correct: "Left to right"
          },
          {
            prompt: "What tells us the sentence is finished?",
            choices: ["A comma", "A period", "A question mark"],
            correct: "A period"
          }
        ]
      }
    ]
  },

  sight: {
    displayName: "Sight Words",
    lessons: [
      {
        id: 1,
        title: "Common Sight Words",
        lessonHtml: `
          <p>Sight words are words we see and read quickly without sounding them out.</p>
          <p>Examples:</p>
          <ul>
            <li>the, and, you, said, was</li>
          </ul>
          <p>We practice them again and again so they feel easy.</p>
        `,
        questions: [
          {
            prompt: "Which word is a sight word?",
            choices: ["the", "cat", "jump"],
            correct: "the"
          },
          {
            prompt: "Which word is a sight word?",
            choices: ["and", "sand", "hand"],
            correct: "and"
          },
          {
            prompt: "Which word is a sight word?",
            choices: ["was", "wash", "wax"],
            correct: "was"
          }
        ]
      },
      {
        id: 2,
        title: "Reading Sight Words in Sentences",
        lessonHtml: `
          <p>We see sight words inside sentences.</p>
          <p>Example:</p>
          <p><em>The dog was big.</em></p>
          <p>We read the sight words quickly and then read the rest of the sentence.</p>
        `,
        questions: [
          {
            prompt: "Which sentence has the word was?",
            choices: [
              "The dog was big.",
              "The dog is big.",
              "The dog will big."
            ],
            correct: "The dog was big."
          },
          {
            prompt: "Which word is the sight word in this sentence: 'You can go.'",
            choices: ["You", "can", "go"],
            correct: "You"
          },
          {
            prompt: "Which word is the sight word in this sentence: 'I said yes.'",
            choices: ["I", "said", "yes"],
            correct: "said"
          }
        ]
      },
      {
        id: 3,
        title: "Choosing the Right Sight Word",
        lessonHtml: `
          <p>Sometimes we choose the sight word that makes the sentence sound right.</p>
          <p>Example:</p>
          <p><em>The cat ___ on the mat.</em></p>
          <p>We might choose <strong>was</strong> or <strong>is</strong> to make a good sentence.</p>
        `,
        questions: [
          {
            prompt: "The cat ___ on the mat.",
            choices: ["was", "and", "you"],
            correct: "was"
          },
          {
            prompt: "I ___ happy.",
            choices: ["am", "and", "the"],
            correct: "am"
          },
          {
            prompt: "You ___ my friend.",
            choices: ["are", "was", "said"],
            correct: "are"
          }
        ]
      }
    ]
  },

  math: {
    displayName: "Math Facts",
    lessons: [
      {
        id: 1,
        title: "Addition to 10",
        lessonHtml: `
          <p>Addition means putting groups together.</p>
          <p>Example: 3 + 2 = 5</p>
          <p>We can count on: 3, 4, 5.</p>
        `,
        questions: [
          {
            prompt: "3 + 4 = ?",
            choices: ["6", "7", "8"],
            correct: "7"
          },
          {
            prompt: "5 + 2 = ?",
            choices: ["6", "7", "8"],
            correct: "7"
          },
          {
            prompt: "1 + 6 = ?",
            choices: ["6", "7", "8"],
            correct: "7"
          }
        ]
      },
      {
        id: 2,
        title: "Subtraction to 10",
        lessonHtml: `
          <p>Subtraction means taking away.</p>
          <p>Example: 7 − 2 = 5</p>
          <p>We can count back: 7, 6, 5.</p>
        `,
        questions: [
          {
            prompt: "9 − 3 = ?",
            choices: ["5", "6", "7"],
            correct: "6"
          },
          {
            prompt: "8 − 2 = ?",
            choices: ["5", "6", "7"],
            correct: "6"
          },
          {
            prompt: "6 − 1 = ?",
            choices: ["4", "5", "6"],
            correct: "5"
          }
        ]
      },
      {
        id: 3,
        title: "Making 10",
        lessonHtml: `
          <p>We can make 10 by putting two numbers together.</p>
          <p>Examples: 7 + 3, 6 + 4, 8 + 2.</p>
          <p>Knowing these facts helps us add faster.</p>
        `,
        questions: [
          {
            prompt: "Which makes 10?",
            choices: ["7 + 2", "7 + 3", "7 + 4"],
            correct: "7 + 3"
          },
          {
            prompt: "Which makes 10?",
            choices: ["6 + 4", "6 + 5", "6 + 3"],
            correct: "6 + 4"
          },
          {
            prompt: "Which makes 10?",
            choices: ["8 + 1", "8 + 2", "8 + 3"],
            correct: "8 + 2"
          }
        ]
      },
      {
        id: 4,
        title: "Word Problems",
        lessonHtml: `
          <p>Word problems are stories with math inside.</p>
          <p>We read the story, decide if we add or subtract, then solve.</p>
        `,
        questions: [
          {
            prompt: "Mia has 3 apples. She gets 2 more. How many apples now?",
            choices: ["4", "5", "6"],
            correct: "5"
          },
          {
            prompt: "Tom has 8 stickers. He gives 3 away. How many left?",
            choices: ["4", "5", "6"],
            correct: "5"
          },
          {
            prompt: "You have 5 blocks. You find 4 more. How many now?",
            choices: ["8", "9", "10"],
            correct: "9"
          }
        ]
      }
    ]
  },

  time: {
    displayName: "Time & Money",
    lessons: [
      {
        id: 1,
        title: "Time to the Hour",
        lessonHtml: `
          <p>On a clock, the short hand shows the hour.</p>
          <p>If the short hand points to 3, it is 3 o'clock.</p>
        `,
        questions: [
          {
            prompt: "If the short hand points to 4, what time is it?",
            choices: ["3 o'clock", "4 o'clock", "5 o'clock"],
            correct: "4 o'clock"
          },
          {
            prompt: "If the short hand points to 7, what time is it?",
            choices: ["6 o'clock", "7 o'clock", "8 o'clock"],
            correct: "7 o'clock"
          },
          {
            prompt: "If the short hand points to 1, what time is it?",
            choices: ["1 o'clock", "2 o'clock", "3 o'clock"],
            correct: "1 o'clock"
          }
        ]
      },
      {
        id: 2,
        title: "Coins: Penny, Nickel, Dime",
        lessonHtml: `
          <p>We use coins to show money.</p>
          <ul>
            <li>Penny = 1¢</li>
            <li>Nickel = 5¢</li>
            <li>Dime = 10¢</li>
          </ul>
        `,
        questions: [
          {
            prompt: "Which coin is worth 5¢?",
            choices: ["Penny", "Nickel", "Dime"],
            correct: "Nickel"
          },
          {
            prompt: "Which coin is worth 10¢?",
            choices: ["Penny", "Nickel", "Dime"],
            correct: "Dime"
          },
          {
            prompt: "Which coin is worth 1¢?",
            choices: ["Penny", "Nickel", "Dime"],
            correct: "Penny"
          }
        ]
      },
      {
        id: 3,
        title: "Counting Coins",
        lessonHtml: `
          <p>We can add coin values to find the total.</p>
          <p>Example: 1 dime (10¢) and 1 nickel (5¢) = 15¢.</p>
        `,
        questions: [
          {
            prompt: "1 dime and 1 penny = ?",
            choices: ["10¢", "11¢", "12¢"],
            correct: "11¢"
          },
          {
            prompt: "1 nickel and 2 pennies = ?",
            choices: ["6¢", "7¢", "8¢"],
            correct: "7¢"
          },
          {
            prompt: "2 nickels = ?",
            choices: ["5¢", "10¢", "15¢"],
            correct: "10¢"
          }
        ]
      }
    ]
  },

  science: {
    displayName: "Science & World",
    lessons: [
      {
        id: 1,
        title: "Living and Nonliving",
        lessonHtml: `
          <p>Living things need food, water, and air. They can grow and change.</p>
          <p>Nonliving things do not need food or water.</p>
        `,
        questions: [
          {
            prompt: "Which is living?",
            choices: ["Rock", "Tree", "Chair"],
            correct: "Tree"
          },
          {
            prompt: "Which is nonliving?",
            choices: ["Dog", "Flower", "Ball"],
            correct: "Ball"
          },
          {
            prompt: "Which is living?",
            choices: ["Fish", "Shoe", "Book"],
            correct: "Fish"
          }
        ]
      },
      {
        id: 2,
        title: "Seasons",
        lessonHtml: `
          <p>There are four seasons: spring, summer, fall, and winter.</p>
          <p>Each season has different weather and activities.</p>
        `,
        questions: [
          {
            prompt: "Which season is usually cold and snowy?",
            choices: ["Summer", "Winter", "Spring"],
            correct: "Winter"
          },
          {
            prompt: "Which season is usually hot?",
            choices: ["Fall", "Summer", "Winter"],
            correct: "Summer"
          },
          {
            prompt: "Leaves fall from trees in which season?",
            choices: ["Spring", "Summer", "Fall"],
            correct: "Fall"
          }
        ]
      },
      {
        id: 3,
        title: "Communities",
        lessonHtml: `
          <p>A community is a place where people live, work, and play together.</p>
          <p>Helpers in a community include teachers, doctors, and firefighters.</p>
        `,
        questions: [
          {
            prompt: "Who is a community helper?",
            choices: ["Teacher", "Tree", "Car"],
            correct: "Teacher"
          },
          {
            prompt: "Where do many people in a community live?",
            choices: ["In space", "In houses and apartments", "Underwater"],
            correct: "In houses and apartments"
          },
          {
            prompt: "Who helps put out fires?",
            choices: ["Doctor", "Firefighter", "Chef"],
            correct: "Firefighter"
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
        title: "Shape Patterns",
        lessonHtml: `
          <p>Patterns repeat in a certain order.</p>
          <p>Example: 🔴🔵🔴🔵 ... the next is 🔴.</p>
        `,
        questions: [
          {
            prompt: "🔴🔵🔴🔵 ?",
            choices: ["🔴", "🔵", "🟢"],
            correct: "🔴"
          },
          {
            prompt: "🟡🟡🔵🟡🟡🔵 ?",
            choices: ["🟡", "🔵", "🟣"],
            correct: "🟡"
          },
          {
            prompt: "⭐🌙⭐🌙 ?",
            choices: ["⭐", "🌙", "☀️"],
            correct: "⭐"
          }
        ]
      },
      {
        id: 2,
        title: "Number Patterns",
        lessonHtml: `
          <p>Number patterns follow a rule, like “add 2 each time.”</p>
          <p>Example: 2, 4, 6, 8, ...</p>
        `,
        questions: [
          {
            prompt: "2, 4, 6, ?",
            choices: ["7", "8", "9"],
            correct: "8"
          },
          {
            prompt: "5, 10, 15, ?",
            choices: ["18", "20", "25"],
            correct: "20"
          },
          {
            prompt: "1, 3, 5, ?",
            choices: ["6", "7", "8"],
            correct: "7"
          }
        ]
      },
      {
        id: 3,
        title: "True or False",
        lessonHtml: `
          <p>We can decide if a statement is true or false.</p>
          <p>We think about what we know and check if it makes sense.</p>
        `,
        questions: [
          {
            prompt: "All cats are animals.",
            choices: ["True", "False", "I don't know"],
            correct: "True"
          },
          {
            prompt: "The sun is cold.",
            choices: ["True", "False", "I don't know"],
            correct: "False"
          },
          {
            prompt: "We read from left to right in English.",
            choices: ["True", "False", "I don't know"],
            correct: "True"
          }
        ]
      }
    ]
  }
};

// PROGRESS STATE
const g1Progress = {
  phonics: 0,
  sight: 0,
  math: 0,
  time: 0,
  science: 0,
  logic: 0
};

let currentSubjectKey = null;
let currentLessonIndex = 0;
let currentQuestionIndex = 0;
let quizActive = false;

// INIT
document.addEventListener("DOMContentLoaded", () => {
  updateAllSubjectStatus();
  updateGlobalProgress();
});

// NAVIGATION

function goHome() {
  window.location.href = "../arcade/arcade.html";
}

function selectSubject(key) {
  currentSubjectKey = key;
  currentLessonIndex = Math.min(g1Progress[key], g1Subjects[key].lessons.length - 1);
  quizActive = false;

  // Sidebar active state
  document.querySelectorAll(".g1-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-subject") === key);
  });

  showLesson();
}

function showLesson() {
  const subject = g1Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  const subjectLabel = document.getElementById("g1-lesson-subject-label");
  const titleEl = document.getElementById("g1-lesson-title");
  const bodyEl = document.getElementById("g1-lesson-body");
  const startBtn = document.getElementById("g1-start-quiz-btn");

  subjectLabel.textContent = subject.displayName;
  titleEl.textContent = `Lesson ${lesson.id}: ${lesson.title}`;
  bodyEl.innerHTML = lesson.lessonHtml;

  startBtn.disabled = false;

  document.getElementById("g1-lesson-card").style.display = "flex";
  document.getElementById("g1-quiz-card").style.display = "none";
}

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

// QUIZ ENGINE

function loadQuestion() {
  const subject = g1Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];
  const q = lesson.questions[currentQuestionIndex];

  document.getElementById("g1-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("g1-quiz-title").textContent = lesson.title;
  document.getElementById("g1-quiz-lesson-label").textContent = `Lesson ${lesson.id}`;
  document.getElementById("g1-quiz-q-progress").textContent =
    `Question ${currentQuestionIndex + 1} / ${lesson.questions.length}`;

  document.getElementById("g1-quiz-prompt").textContent = q.prompt;

  const choiceButtons = [
    document.getElementById("g1-choice-1"),
    document.getElementById("g1-choice-2"),
    document.getElementById("g1-choice-3")
  ];

  const shuffled = shuffleArray(q.choices.slice());

  choiceButtons.forEach((btn, idx) => {
    btn.textContent = shuffled[idx];
    btn.className = "g1-choice-btn";
    btn.onclick = () => checkAnswer(btn, q.correct);
  });

  document.getElementById("g1-lesson-card").style.display = "none";
  document.getElementById("g1-quiz-card").style.display = "flex";
}

function checkAnswer(btn, correct) {
  const chosen = btn.textContent;
  if (chosen === correct) {
    btn.classList.add("correct");
    spawnSparkles();
    setTimeout(() => {
      nextQuestionOrCompleteLesson();
    }, 600);
  } else {
    btn.classList.add("wrong");
    setTimeout(() => btn.classList.remove("wrong"), 400);
  }
}

function nextQuestionOrCompleteLesson() {
  const subject = g1Subjects[currentSubjectKey];
  const lesson = subject.lessons[currentLessonIndex];

  if (currentQuestionIndex < lesson.questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    // Lesson complete
    if (g1Progress[currentSubjectKey] < subject.lessons.length) {
      g1Progress[currentSubjectKey]++;
    }
    updateSubjectStatus(currentSubjectKey);
    updateGlobalProgress();
    maybeShowGraduation();
    showLesson();
  }
}

// PROGRESS

function updateSubjectStatus(key) {
  const subject = g1Subjects[key];
  const statusEl = document.getElementById(`${key}-status`);
  if (!statusEl) return;
  statusEl.textContent = `${g1Progress[key]} / ${subject.lessons.length} lessons`;
}

function updateAllSubjectStatus() {
  Object.keys(g1Subjects).forEach(updateSubjectStatus);
}

function updateGlobalProgress() {
  let totalLessons = 0;
  let completedLessons = 0;

  Object.keys(g1Subjects).forEach(key => {
    const subject = g1Subjects[key];
    totalLessons += subject.lessons.length;
    completedLessons += g1Progress[key];
  });

  const pct = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);
  const fill = document.getElementById("g1-progress-fill");
  const text = document.getElementById("g1-progress-text");

  fill.style.width = `${pct}%`;
  text.textContent = `${pct}%`;
}

function maybeShowGraduation() {
  const allDone = Object.keys(g1Subjects).every(key => {
    const subject = g1Subjects[key];
    return g1Progress[key] >= subject.lessons.length;
  });

  if (allDone) {
    document.getElementById("g1-grad-overlay").style.display = "flex";
  }
}

function unlockGrade1Reward() {
  // Placeholder: could be a special playlist, story, or next world
  window.location.href = "https://www.youtube.com";
}

// UTILITIES

function shuffleArray(arr) {
  return arr
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function spawnSparkles() {
  const container = document.getElementById("g1-sparkles");
  const count = 6;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "g1-sparkle";
    span.textContent = "✨";
    span.style.left = 40 + Math.random() * 20 + "%";
    span.style.top = "55%";
    container.appendChild(span);
    setTimeout(() => span.remove(), 700);
  }
}


