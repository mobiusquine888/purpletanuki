// Get return URL from query string
const params = new URLSearchParams(window.location.search);
const returnURL = params.get("return");

// Where we render the questions
const lessonBox = document.getElementById("lessonBox");

// MVP: Hardcode parent setting to 3 questions
// (Later: replace with parent settings)
const QUESTION_COUNT = 3;

/* ------------------------------
   Generate a simple math question
------------------------------ */
function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  return {
    text: `What is ${a} + ${b}?`,
    answer: a + b
  };
}

/* ------------------------------
   Build question list
------------------------------ */
const questions = Array.from({ length: QUESTION_COUNT }, generateQuestion);
let index = 0;

/* ------------------------------
   Render current question
------------------------------ */
function render() {
  const q = questions[index];

  lessonBox.innerHTML = `
    <h2>Challenge ${index + 1} of ${questions.length}</h2>
    <p>${q.text}</p>
    <input id="answerInput" type="number" class="ls-input" />
    <button id="submitBtn" class="ls-btn">Submit</button>
  `;

  document.getElementById("submitBtn").onclick = () => {
    const val = Number(document.getElementById("answerInput").value);

    if (val === q.answer) {
      index++;

      // All questions complete → unlock browser
      if (index === questions.length) {
        localStorage.unlockToken = returnURL;
        window.location.href = "/games/browser/index.html";
      } else {
        render();
      }

    } else {
      alert("Try again!");
    }
  };
}

// Start the first question
render();
