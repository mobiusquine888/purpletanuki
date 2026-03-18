// Independent-Use Preschool Tutor

const lessons = {
  letters: {
    generate() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      const correct = letters[Math.floor(Math.random() * letters.length)];
      const choices = shuffle([correct, randomLetter(), randomLetter()]);
      return { prompt: `Find ${correct}`, correct, choices };
    }
  },

  numbers: {
    generate() {
      const n = Math.floor(Math.random() * 10) + 1;
      const correct = n.toString();
      const choices = shuffle([correct, randomNumber(), randomNumber()]);
      return { prompt: `Tap ${correct}`, correct, choices };
    }
  },

  shapes: {
    generate() {
      const shapes = ["●", "▲", "■"];
      const names = ["circle", "triangle", "square"];
      const i = Math.floor(Math.random() * shapes.length);
      const correct = shapes[i];
      const choices = shuffle([correct, randomShape(), randomShape()]);
      return { prompt: `Find the ${names[i]}`, correct, choices };
    }
  },

  colors: {
    generate() {
      const colors = ["🔴", "🟢", "🔵", "🟡"];
      const names = ["red", "green", "blue", "yellow"];
      const i = Math.floor(Math.random() * colors.length);
      const correct = colors[i];
      const choices = shuffle([correct, randomColor(), randomColor()]);
      return { prompt: `Tap ${names[i]}`, correct, choices };
    }
  },

  patterns: {
    generate() {
      const items = ["⭐", "⭐", "🔵"];
      const correct = "🔵";
      const choices = shuffle([correct, "⭐", "🔴"]);
      return { prompt: "What comes next?", correct, choices };
    }
  },

  memory: {
    generate() {
      const items = ["🐱", "🚗", "🍎"];
      const correct = items[Math.floor(Math.random() * items.length)];
      const choices = shuffle([correct, "🐶", "🌟"]);
      return { prompt: `Remember this: ${correct}`, correct, choices };
    }
  }
};

function startLesson(type) {
  currentType = type;
  document.querySelector(".category-list").style.display = "none";
  document.getElementById("lessonCard").style.display = "block";
  loadNewQuestion();
}

function loadNewQuestion() {
  const lesson = lessons[currentType].generate();

  document.getElementById("lessonPrompt").textContent = lesson.prompt;

  const ids = ["choice1", "choice2", "choice3"];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    el.textContent = lesson.choices[i];
    el.className = "choice";
    el.onclick = () => checkAnswer(el, lesson.correct);
  });
}

function checkAnswer(el, correct) {
  if (el.textContent === correct) {
    el.classList.add("correct");
    setTimeout(loadNewQuestion, 600);
  } else {
    el.classList.add("wrong");
    setTimeout(() => el.classList.remove("wrong"), 400);
  }
}

function goBack() {
  document.getElementById("lessonCard").style.display = "none";
  document.querySelector(".category-list").style.display = "flex";
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function randomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return letters[Math.floor(Math.random() * letters.length)];
}

function randomNumber() {
  return (Math.floor(Math.random() * 10) + 1).toString();
}

function randomShape() {
  return ["●", "▲", "■"][Math.floor(Math.random() * 3)];
}

function randomColor() {
  return ["🔴", "🟢", "🔵", "🟡"][Math.floor(Math.random() * 4)];
}

let currentType = null;

