// Kindergarten Tutor — Independent Use + Mastery + Unlock + Difficulty + Sparkles

// Mastery goals per category
const goals = {
  letters: 12,
  sight: 10,
  numbers: 12,
  addition: 10,
  patterns: 8,
  memory: 8
};

// Progress tracking
let progress = {
  letters: 0,
  sight: 0,
  numbers: 0,
  addition: 0,
  patterns: 0,
  memory: 0
};

let currentType = null;
let difficulty = 1; // simple scalar for future tuning

const lessons = {
  // Uppercase → lowercase / sound
  letters: {
    generate() {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      const correctUpper = randomFrom(letters);
      const correctLower = correctUpper.toLowerCase();

      const wrongPool = letters
        .filter(l => l !== correctUpper)
        .map(l => l.toLowerCase());
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);

      const choices = shuffle([correctLower, wrong1, wrong2]);
      return {
        prompt: `Tap the lowercase for ${correctUpper}`,
        correct: correctLower,
        choices
      };
    }
  },

  // Simple sight words
  sight: {
    generate() {
      const words = [
        "the","and","you","see","like",
        "to","go","we","can","play"
      ];
      const correct = randomFrom(words);
      const wrongPool = words.filter(w => w !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
      return {
        prompt: "Tap the word I say",
        // For independent use, we show it visually too:
        correct,
        choices
      };
    }
  },

  // Numbers to 20
  numbers: {
    generate() {
      const pool = difficulty >= 2
        ? ["1","2","3","4","5","6","7","8","9","10",
           "11","12","13","14","15","16","17","18","19","20"]
        : ["1","2","3","4","5","6","7","8","9","10"];

      const correct = randomFrom(pool);
      const wrongPool = pool.filter(n => n !== correct);
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);
      return {
        prompt: `Tap ${correct}`,
        correct,
        choices
      };
    }
  },

  // Simple addition within 10
  addition: {
    generate() {
      const a = Math.floor(Math.random() * 6); // 0–5
      const b = Math.floor(Math.random() * 6); // 0–5
      const sum = a + b;

      const correct = String(sum);
      const wrongPool = [];
      for (let i = 0; i <= 10; i++) {
        if (i !== sum) wrongPool.push(String(i));
      }
      const wrong1 = pullRandom(wrongPool);
      const wrong2 = pullRandom(wrongPool);
      const choices = shuffle([correct, wrong1, wrong2]);

      return {
        prompt: `${a} + ${b} = ?`,
        correct,
        choices
      };
    }
  },

  // AB / AAB patterns with emojis
  patterns: {
    generate() {
      const patterns = [
        { seq: "🔴🔵🔴🔵", next: "🔴", wrongs: ["🔵","🟢"] }, // ABAB
        { seq: "🟡🟡🔵🟡🟡🔵", next: "🟡", wrongs: ["🔵","🟣"] }, // AAB AAB
        { seq: "⭐🌙⭐🌙", next: "⭐", wrongs: ["🌙","☀️"] }      // ABAB
      ];
      const pattern = randomFrom(patterns);
      const correct = pattern.next;
      const wrong1 = pattern.wrongs[0];
      const wrong2 = pattern.wrongs[1];
      const choices = shuffle([correct, wrong1, wrong2]);

      return {
        prompt: `${pattern.seq}  ?`,
        correct,
        choices
      };
    }
  },

  // Memory with 4 items
  memory: {
    generate() {
      const items = ["🐱", "🚗", "🍎", "🧸", "🌟", "🍌"];
      const shown = [];
      while (shown.length < 4) {
        const pick = randomFrom(items);
        if (!shown.includes(pick)) shown.push(pick);
      }
      const correct = randomFrom(shown);

      const distractors = items.filter(i => !shown.includes(i));
      const wrong1 = randomFrom(distractors);
      const wrong2 = randomFrom(distractors.filter(i => i !== wrong1));
      const choices = shuffle([correct, wrong1, wrong2]);

      return {
        prompt: `Remember: ${shown.join(" ")}`,
        correct,
        choices
      };
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

// HOME BUTTON
function goHome() {
  window.location.href = "../arcade.html";
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
  window.location.href = "https://www.youtube.com";
}

// Utilities
function shuffle(arr) {
  return arr
    .map(v => ({ v, sort: Math.random() * 1000 }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

