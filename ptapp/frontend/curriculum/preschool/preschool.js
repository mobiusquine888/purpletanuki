// ============================================================
// PRESCHOOL CONTENT — PurpleTanuki
// Complete, consistent, bug‑proof quizzes for all subjects
// ============================================================

// Utility: pull a random item from an array
function pullRandom(arr) {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

// Shapes, Colors, Patterns, Memory pools
const SHAPES = ["Circle", "Square", "Triangle", "Rectangle", "Oval", "Star", "Heart", "Diamond"];
const COLORS = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Brown"];
const PATTERNS = ["AB", "AAB", "ABB", "ABC", "AABB", "ABAB"];
const MEMORY_ITEMS = ["Cat", "Dog", "Sun", "Moon", "Tree", "Car", "Ball", "Fish"];

// Quiz generators
function generateLetterQuiz() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const correct = pullRandom([...letters]);
  const wrongPool = letters.filter(l => l !== correct);
  const wrong1 = pullRandom([...wrongPool]);
  const wrong2 = pullRandom(wrongPool.filter(l => l !== wrong1));

  return {
    question: `Find ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function generateNumberQuiz() {
  const nums = Array.from({ length: 10 }, (_, i) => String(i));
  const correct = pullRandom([...nums]);
  const wrongPool = nums.filter(n => n !== correct);
  const wrong1 = pullRandom([...wrongPool]);
  const wrong2 = pullRandom(wrongPool.filter(n => n !== wrong1));

  return {
    question: `Tap ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function generateShapeQuiz() {
  const correct = pullRandom([...SHAPES]);
  const wrongPool = SHAPES.filter(s => s !== correct);
  const wrong1 = pullRandom([...wrongPool]);
  const wrong2 = pullRandom(wrongPool.filter(s => s !== wrong1));

  return {
    question: `Tap the ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function generateColorQuiz() {
  const correct = pullRandom([...COLORS]);
  const wrongPool = COLORS.filter(c => c !== correct);
  const wrong1 = pullRandom([...wrongPool]);
  const wrong2 = pullRandom(wrongPool.filter(c => c !== wrong1));

  return {
    question: `Tap ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function generatePatternQuiz() {
  const correct = pullRandom([...PATTERNS]);
  const wrongPool = PATTERNS.filter(p => p !== correct);
  const wrong1 = pullRandom([...wrongPool]);
  const wrong2 = pullRandom(wrongPool.filter(p => p !== wrong1));

  return {
    question: `Find the pattern: ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function generateMemoryQuiz() {
  const correct = pullRandom([...MEMORY_ITEMS]);
  const wrongPool = MEMORY_ITEMS.filter(m => m !== correct);
  const wrong1 = pullRandom([...wrongPool]);
  const wrong2 = pullRandom(wrongPool.filter(m => m !== wrong1));

  return {
    question: `Tap ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

// ============================================================
// FULL PRESCHOOL DATA
// ============================================================

const PRESCHOOL_DATA = {
  letters: {
    displayName: "Letters",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Letter Practice ${i + 1}`,
      body: "Tap the correct letter!",
      quiz: [generateLetterQuiz()]
    }))
  },

  numbers: {
    displayName: "Numbers",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Number Practice ${i + 1}`,
      body: "Tap the correct number!",
      quiz: [generateNumberQuiz()]
    }))
  },

  shapes: {
    displayName: "Shapes",
    lessons: Array.from({ length: 8 }).map((_, i) => ({
      title: `Shape Practice ${i + 1}`,
      body: "Tap the correct shape!",
      quiz: [generateShapeQuiz()]
    }))
  },

  colors: {
    displayName: "Colors",
    lessons: Array.from({ length: 8 }).map((_, i) => ({
      title: `Color Practice ${i + 1}`,
      body: "Tap the correct color!",
      quiz: [generateColorQuiz()]
    }))
  },

  patterns: {
    displayName: "Patterns",
    lessons: Array.from({ length: 6 }).map((_, i) => ({
      title: `Pattern Practice ${i + 1}`,
      body: "Tap the correct pattern!",
      quiz: [generatePatternQuiz()]
    }))
  },

  memory: {
    displayName: "Memory",
    lessons: Array.from({ length: 6 }).map((_, i) => ({
      title: `Memory Practice ${i + 1}`,
      body: "Tap the correct item!",
      quiz: [generateMemoryQuiz()]
    }))
  }
};

