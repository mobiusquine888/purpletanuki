/* ============================================================
   MOM TALK — DATA
   ============================================================ */

const momTalkLessons = [
  {
    title: "Being Kind to Yourself",
    body: `
      <p>Being kind to yourself is not about ignoring your mistakes.
      It’s about talking to yourself the way a caring mom would:
      honest, gentle, and on your side.</p>

      <p>When you mess up, your inner voice can either be a bully
      or a coach. Mom Talk is about choosing the coach.</p>

      <h3>Practical Mom Advice</h3>
      <p><strong>1. Notice the voice in your head.</strong><br>
      When something goes wrong, listen to how you talk to yourself.
      Would you say those words to a friend?</p>

      <p><strong>2. Swap harsh words for helpful ones.</strong><br>
      Instead of “I’m so stupid,” try “I didn’t understand this yet,
      but I can learn it.”</p>

      <p><strong>3. Rest is not laziness.</strong><br>
      A caring mom reminds you that breaks, sleep, and fun are part
      of staying strong, not signs of weakness.</p>

      <h3>Real‑Life Examples</h3>
      <p><strong>Example 1:</strong> You forget an assignment. Instead of
      “I’m hopeless,” you say, “I missed this one. I’ll set a reminder
      so it doesn’t happen again.”</p>

      <p><strong>Example 2:</strong> You feel overwhelmed. A mom‑style
      voice says, “Let’s do one small thing first, then see how you feel.”</p>
    `,
    quiz: [
      {
        q: "What is Mom Talk mainly trying to change?",
        choices: [
          "Your grades",
          "The way you talk to yourself",
          "How much homework you get"
        ],
        correct: 1
      },
      {
        q: "Which is a kinder replacement for “I’m so stupid”?",
        choices: [
          "I’ll never get this",
          "I didn’t understand this yet, but I can learn it",
          "It’s not my fault"
        ],
        correct: 1
      },
      {
        q: "What does Mom Talk say about rest?",
        choices: [
          "Rest is laziness",
          "Rest is only for weekends",
          "Rest is part of staying strong"
        ],
        correct: 2
      }
    ]
  }
];

/* ============================================================
   ENGINE
   ============================================================ */

let mtCurrentLesson = 0;
let mtCurrentQuestion = 0;

function goHome() {
  window.location.href = "../arcade/arcade.html";
}

function loadLesson(index) {
  mtCurrentLesson = index;
  mtCurrentQuestion = 0;

  const lesson = momTalkLessons[index];

  document.getElementById("mt-lesson-title").innerHTML = lesson.title;
  document.getElementById("mt-lesson-body").innerHTML = lesson.body;

  document.getElementById("mt-lesson-card").style.display = "block";
  document.getElementById("mt-quiz-card").style.display = "none";
}

function startQuiz() {
  document.getElementById("mt-lesson-card").style.display = "none";
  document.getElementById("mt-quiz-card").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const lesson = momTalkLessons[mtCurrentLesson];
  const q = lesson.quiz[mtCurrentQuestion];

  document.getElementById("mt-quiz-title").innerHTML = lesson.title;
  document.getElementById("mt-quiz-progress").innerHTML =
    `Question ${mtCurrentQuestion + 1} of ${lesson.quiz.length}`;

  document.getElementById("mt-quiz-prompt").innerHTML = q.q;

  document.getElementById("mt-choice-1").innerHTML = q.choices[0];
  document.getElementById("mt-choice-2").innerHTML = q.choices[1];
  document.getElementById("mt-choice-3").innerHTML = q.choices[2];

  document.getElementById("mt-choice-1").onclick = () => checkAnswer(0);
  document.getElementById("mt-choice-2").onclick = () => checkAnswer(1);
  document.getElementById("mt-choice-3").onclick = () => checkAnswer(2);
}

function checkAnswer(choice) {
  const lesson = momTalkLessons[mtCurrentLesson];
  const q = lesson.quiz[mtCurrentQuestion];

  if (choice === q.correct) {
    mtCurrentQuestion++;

    if (mtCurrentQuestion >= lesson.quiz.length) {
      showCompletion();
    } else {
      loadQuestion();
    }
  } else {
    alert("Try again — talk to yourself kindly and try once more.");
  }
}

function backToLesson() {
  document.getElementById("mt-quiz-card").style.display = "none";
  document.getElementById("mt-lesson-card").style.display = "block";
}

function showCompletion() {
  document.getElementById("mt-grad-overlay").style.display = "flex";
}

function finishMomTalk() {
  window.location.href = "../arcade/arcade.html";
}
