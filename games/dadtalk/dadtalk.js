/* ============================================================
   DAD TALK — DATA
   ============================================================ */

const dadTalkLessons = [
  {
    title: "How to Handle Hard Days",
    body: `
      <p>Everyone has hard days — even adults. A good dad teaches you that
      tough moments don’t mean you’re failing. They mean you’re growing.</p>

      <p>Hard days are like heavy backpacks: you don’t pretend they’re light,
      you just learn how to carry them better.</p>

      <h3>Practical Dad Advice</h3>
      <p><strong>1. Slow down before you react.</strong><br>
      When you’re upset, your brain wants to move fast. A dad teaches you to
      pause, breathe, and choose your next move instead of exploding.</p>

      <p><strong>2. Break the problem into smaller pieces.</strong><br>
      Big problems feel impossible until you chop them into tiny steps.</p>

      <p><strong>3. Ask for help without shame.</strong><br>
      Strong people ask for support. Weak people pretend they don’t need it.</p>

      <h3>Real‑Life Examples</h3>
      <p><strong>Example 1:</strong> You bomb a test. A dad doesn’t say “Try harder.”
      He says, “Let’s figure out what confused you and fix it together.”</p>

      <p><strong>Example 2:</strong> You fight with a friend. A dad teaches you to
      cool off, think about your part, and talk it out calmly.</p>
    `,
    quiz: [
      {
        q: "What’s the first thing a dad teaches you to do on a hard day?",
        choices: [
          "React immediately",
          "Slow down before you react",
          "Ignore the problem"
        ],
        correct: 1
      },
      {
        q: "Why do we break big problems into smaller pieces?",
        choices: [
          "To make them easier to handle",
          "To avoid them",
          "To make them someone else’s job"
        ],
        correct: 0
      },
      {
        q: "What does asking for help mean?",
        choices: [
          "You’re weak",
          "You’re strong",
          "You’re giving up"
        ],
        correct: 1
      }
    ]
  }
];

/* ============================================================
   ENGINE
   ============================================================ */

let currentLesson = 0;
let currentQuestion = 0;

function goHome() {
  window.location.href = "../arcade/arcade.html";
}

function loadLesson(index) {
  currentLesson = index;
  currentQuestion = 0;

  const lesson = dadTalkLessons[index];

  document.getElementById("dt-lesson-title").innerHTML = lesson.title;
  document.getElementById("dt-lesson-body").innerHTML = lesson.body;

  document.getElementById("dt-lesson-card").style.display = "block";
  document.getElementById("dt-quiz-card").style.display = "none";
}

function startQuiz() {
  document.getElementById("dt-lesson-card").style.display = "none";
  document.getElementById("dt-quiz-card").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const lesson = dadTalkLessons[currentLesson];
  const q = lesson.quiz[currentQuestion];

  document.getElementById("dt-quiz-title").innerHTML = lesson.title;
  document.getElementById("dt-quiz-progress").innerHTML =
    `Question ${currentQuestion + 1} of ${lesson.quiz.length}`;

  document.getElementById("dt-quiz-prompt").innerHTML = q.q;

  document.getElementById("dt-choice-1").innerHTML = q.choices[0];
  document.getElementById("dt-choice-2").innerHTML = q.choices[1];
  document.getElementById("dt-choice-3").innerHTML = q.choices[2];

  document.getElementById("dt-choice-1").onclick = () => checkAnswer(0);
  document.getElementById("dt-choice-2").onclick = () => checkAnswer(1);
  document.getElementById("dt-choice-3").onclick = () => checkAnswer(2);
}

function checkAnswer(choice) {
  const lesson = dadTalkLessons[currentLesson];
  const q = lesson.quiz[currentQuestion];

  if (choice === q.correct) {
    currentQuestion++;

    if (currentQuestion >= lesson.quiz.length) {
      showCompletion();
    } else {
      loadQuestion();
    }
  } else {
    alert("Try again — Dad believes in you.");
  }
}

function backToLesson() {
  document.getElementById("dt-quiz-card").style.display = "none";
  document.getElementById("dt-lesson-card").style.display = "block";
}

function showCompletion() {
  document.getElementById("dt-grad-overlay").style.display = "flex";
}

function finishDadTalk() {
  window.location.href = "../arcade/arcade.html";
}
