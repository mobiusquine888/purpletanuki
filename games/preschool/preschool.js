// Preschool Tutor — Independent Use + Mastery + Unlock + Difficulty + Sparkles

// Mastery goals per category
const goals = {
  letters: 10,
  numbers: 10,
  shapes: 8,
  colors: 8,
  patterns: 6,
  memory: 6
};

// Progress tracking
let progress = {
  letters: 0,
  numbers: 0,
  shapes: 0,
  colors: 0,
  patterns: 0,
  memory: 0
};

let currentType = null;
let difficulty = 1; // simple scalar for future tuning

const lessons = {
  letters: {
    generate() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      const correct = randomLetter();
      const wrongPool = letters.filter(l => l !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
      return { prompt: `Find ${correct}`, correct, choices };
    }
  },

  numbers: {
    generate() {
      const pool = difficulty >= 2
        ? ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]
        : ["1","2","3","4","5","6","7","8","9","10"];

      const correct = pool[Math.floor(Math.random() * pool.length)];
      const wrongPool = pool.filter(n => n !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
      return { prompt: `Tap ${correct}`, correct, choices };
    }
  },

  shapes: {
    generate() {
      const shapes = ["●", "▲", "■"];
      const names = ["circle", "triangle", "square"];
      const i = Math.floor(Math.random() * shapes.length);
      const correct = shapes[i];
      const wrongPool = shapes.filter(s => s !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
      return { prompt: `Find the ${names[i]}`, correct, choices };
    }
  },

  colors: {
    generate() {
      const colors = ["🔴", "🟢", "🔵", "🟡"];
      const names = ["red", "green", "blue", "yellow"];
      const i = Math.floor(Math.random() * colors.length);
      const correct = colors[i];
      const wrongPool = colors.filter(c => c !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
      return { prompt: `Tap ${names[i]}`, correct, choices };
    }
  },

  patterns: {
    generate() {
      // Simple AB pattern for now
      const correct = "🔵";
      const wrong1 = "⭐";
      const wrong2 = "🔴";
      const choices = shuffle([correct, wrong1, wrong2]);
      return { prompt: "What comes next?", correct, choices };
    }
  },

  memory: {
    generate() {
      const items = ["🐱", "🚗", "🍎"];
      const correct = items[Math.floor(Math.random() * items.length)];
      const wrongPool = ["🐶", "🌟", "🍌", "🧸"].filter(i => i !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
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
    spawnSparkles();
    incrementProgress(currentType);
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

// Progress + mastery
function incrementProgress(type) {
  if (progress[type] < goals[type]) {
    progress[type]++;
  }

  updateCategoryStatus(type);
  updateProgressBar();
  maybeIncreaseDifficulty();
  checkForCompletion();
}

function updateCategoryStatus(type) {
  const id = `${type}Status`;
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = `${progress[type]} / ${goals[type]}`;
}

function updateProgressBar() {
  const totalGoal = Object.values(goals).reduce((a, b) => a + b, 0);
  const totalProgress = Object.values(progress).reduce((a, b) => a + b, 0);
  const pct = Math.round((totalProgress / totalGoal) * 100);

  const fill = document.getElementById("progressFill");
  const text = document.getElementById("progressText");
  fill.style.width = `${pct}%`;
  text.textContent = `${pct}%`;
}

function maybeIncreaseDifficulty() {
  const totalGoal = Object.values(goals).reduce((a, b) => a + b, 0);
  const totalProgress = Object.values(progress).reduce((a, b) => a + b, 0);
  const pct = totalProgress / totalGoal;

  if (pct > 0.5 && difficulty === 1) {
    difficulty = 2;
  }
}

function checkForCompletion() {
  const allDone = Object.keys(goals).every(
    key => progress[key] >= goals[key]
  );
  if (allDone) showGraduation();
}

// Graduation ritual
function showGraduation() {
  document.getElementById("gradOverlay").style.display = "flex";
}

function unlockReward() {
  // Replace with your real unlock URL
  window.location.href = "https://example.com/your-reward";
}

// Utilities
function shuffle(arr) {
  return arr
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function randomLetter() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return letters[Math.floor(Math.random() * letters.length)];
}

function randomNumber() {
  const pool = ["1","2","3","4","5","6","7","8","9","10"];
  return pool[Math.floor(Math.random() * pool.length)];
}

function pullRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr.splice(idx, 1)[0];
}

// Sparkles
function spawnSparkles() {
  const container = document.getElementById("sparklesContainer");
  const count = 6;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "sparkle";
    span.textContent = "✨";
    span.style.left = 40 + Math.random() * 20 + "%";
    span.style.top = "55%";
    container.appendChild(span);
    setTimeout(() => span.remove(), 700);
  }
}

// Initialize UI
Object.keys(progress).forEach(updateCategoryStatus);
updateProgressBar();

