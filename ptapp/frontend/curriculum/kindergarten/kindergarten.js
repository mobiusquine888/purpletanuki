// ============================================================
// KINDERGARTEN CONTENT — PurpleTanuki (Hybrid)
// Uses the universal subject engine
// ============================================================

// Local utility: pull a random item from an array
function kPullRandom(arr) {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

// Pools
const K_SIGHT_WORDS = [
  "the", "and", "you", "see", "like",
  "to", "go", "we", "can", "play",
  "my", "me", "it", "is", "in"
];

const K_PHONICS_CVC = [
  "cat", "dog", "sun", "hat", "map",
  "bed", "pig", "cup", "log", "pen"
];

const K_NUMBERS = Array.from({ length: 20 }, (_, i) => String(i + 1));

const K_SHAPES = ["Circle", "Square", "Triangle", "Rectangle", "Star", "Heart"];
const K_COLORS = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];

const K_PATTERNS = ["AB", "AAB", "ABB", "ABC", "AABB", "ABAB"];

// ------------------------------------------------------------
// Quiz generators
// ------------------------------------------------------------

function kGenerateSightWordQuiz() {
  const correct = kPullRandom([...K_SIGHT_WORDS]);
  const wrongPool = K_SIGHT_WORDS.filter(w => w !== correct);
  const wrong1 = kPullRandom([...wrongPool]);
  const wrong2 = kPullRandom(wrongPool.filter(w => w !== wrong1));

  return {
    question: `Tap "${correct}"`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function kGeneratePhonicsQuiz() {
  const correct = kPullRandom([...K_PHONICS_CVC]);
  const wrongPool = K_PHONICS_CVC.filter(w => w !== correct);
  const wrong1 = kPullRandom([...wrongPool]);
  const wrong2 = kPullRandom(wrongPool.filter(w => w !== wrong1));

  return {
    question: `Tap the word: ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function kGenerateNumberQuiz() {
  const correct = kPullRandom([...K_NUMBERS]);
  const wrongPool = K_NUMBERS.filter(n => n !== correct);
  const wrong1 = kPullRandom([...wrongPool]);
  const wrong2 = kPullRandom(wrongPool.filter(n => n !== wrong1));

  return {
    question: `Tap ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function kGenerateAdditionQuiz() {
  const a = Math.floor(Math.random() * 9) + 1; // 1–9
  const b = Math.floor(Math.random() * 9) + 1;
  const correct = String(a + b);

  const wrong1 = String(a + b + 1);
  const wrong2 = String(Math.max(1, a + b - 1));

  return {
    question: `Tap ${a} + ${b}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

function kGenerateShapesColorsQuiz() {
  const useShape = Math.random() < 0.5;
  if (useShape) {
    const correct = kPullRandom([...K_SHAPES]);
    const wrongPool = K_SHAPES.filter(s => s !== correct);
    const wrong1 = kPullRandom([...wrongPool]);
    const wrong2 = kPullRandom(wrongPool.filter(s => s !== wrong1));

    return {
      question: `Tap the ${correct}`,
      choices: shuffle([correct, wrong1, wrong2]),
      correctIndex: 0
    };
  } else {
    const correct = kPullRandom([...K_COLORS]);
    const wrongPool = K_COLORS.filter(c => c !== correct);
    const wrong1 = kPullRandom([...wrongPool]);
    const wrong2 = kPullRandom(wrongPool.filter(c => c !== wrong1));

    return {
      question: `Tap ${correct}`,
      choices: shuffle([correct, wrong1, wrong2]),
      correctIndex: 0
    };
  }
}

function kGeneratePatternQuiz() {
  const correct = kPullRandom([...K_PATTERNS]);
  const wrongPool = K_PATTERNS.filter(p => p !== correct);
  const wrong1 = kPullRandom([...wrongPool]);
  const wrong2 = kPullRandom(wrongPool.filter(p => p !== wrong1));

  return {
    question: `Find the pattern: ${correct}`,
    choices: shuffle([correct, wrong1, wrong2]),
    correctIndex: 0
  };
}

// ------------------------------------------------------------
// KINDERGARTEN DATA
// ------------------------------------------------------------

const KINDERGARTEN_DATA = {
  sightWords: {
    displayName: "Sight Words",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Sight Word Practice ${i + 1}`,
      body: "Tap the sight word the Tanuki is thinking of!",
      quiz: [kGenerateSightWordQuiz()]
    }))
  },

  phonics: {
    displayName: "Phonics",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Phonics Practice ${i + 1}`,
      body: "Tap the word that matches the sound.",
      quiz: [kGeneratePhonicsQuiz()]
    }))
  },

  numbers: {
    displayName: "Numbers 1–20",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Number Practice ${i + 1}`,
      body: "Tap the correct number!",
      quiz: [kGenerateNumberQuiz()]
    }))
  },

  addition: {
    displayName: "Addition",
    lessons: Array.from({ length: 8 }).map((_, i) => ({
      title: `Addition Practice ${i + 1}`,
      body: "Tap the correct answer to the addition problem.",
      quiz: [kGenerateAdditionQuiz()]
    }))
  },

  shapesColors: {
    displayName: "Shapes & Colors",
    lessons: Array.from({ length: 8 }).map((_, i) => ({
      title: `Shapes & Colors ${i + 1}`,
      body: "Tap the correct shape or color!",
      quiz: [kGenerateShapesColorsQuiz()]
    }))
  },

  patterns: {
    displayName: "Patterns",
    lessons: Array.from({ length: 6 }).map((_, i) => ({
      title: `Pattern Practice ${i + 1}`,
      body: "Tap the pattern that matches.",
      quiz: [kGeneratePatternQuiz()]
    }))
  }
};
