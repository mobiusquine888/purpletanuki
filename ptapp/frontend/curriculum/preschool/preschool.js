// Preschool Tutor — Universal Engine Content File
// This file ONLY defines content. The engine handles all logic.

const PRESCHOOL_DATA = {
  letters: {
    displayName: "Letters",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Letter Practice ${i + 1}`,
      body: "Tap the correct letter!",
      quiz: [
        (() => {
          const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
          const correct = letters[Math.floor(Math.random() * letters.length)];
          const wrongPool = letters.filter(l => l !== correct);
          const wrong1 = pullRandom([...wrongPool]);
          const wrong2 = pullRandom([...wrongPool]);
          return {
            question: `Find ${correct}`,
            choices: shuffle([correct, wrong1, wrong2]),
            correctIndex: 0
          };
        })()
      ]
    }))
  },

  numbers: {
    displayName: "Numbers",
    lessons: Array.from({ length: 10 }).map((_, i) => ({
      title: `Number Practice ${i + 1}`,
      body: "Tap the correct number!",
      quiz: [
        (() => {
          const poolEasy = ["1","2","3","4","5","6","7","8","9","10"];
          const poolHard = ["11","12","13","14","15"];
          const pool = Math.random() > 0.5 ? poolEasy : poolEasy.concat(poolHard);

          const correct = pool[Math.floor(Math.random() * pool.length)];
          const wrongPool = pool.filter(n => n !== correct);
          const wrong1 = pullRandom([...wrongPool]);
          const wrong2 = pullRandom([...wrongPool]);
          return {
            question: `Tap ${correct}`,
            choices: shuffle([correct, wrong1, wrong2]),
            correctIndex: 0
          };
        })()
      ]
    }))
  },

  shapes: {
    displayName: "Shapes",
    lessons: Array.from({ length: 8 }).map((_, i) => ({
      title: `Shape Practice ${i + 1}`,
      body: "Tap the correct shape!",
      quiz: [
        (() => {
          const shapes = ["●", "▲", "■"];
          const names = ["circle", "triangle", "square"];
          const idx = Math.floor(Math.random() * shapes.length);
          const correct = shapes[idx];
          const wrongPool = shapes.filter(s => s !== correct);
          const wrong1 = pullRandom([...wrongPool]);
          const wrong2 = pullRandom([...wrongPool]);
          return {
            question: `Find the ${names[idx]}`,
            choices: shuffle([correct, wrong1, wrong2]),
            correctIndex: 0
          };
        })()
      ]
    }))
  },

  colors: {
    displayName: "Colors",
    lessons: Array.from({ length: 8 }).map((_, i) => ({
      title: `Color Practice ${i + 1}`,
      body: "Tap the correct color!",
      quiz: [
        (() => {
          const colors = ["🔴", "🟢", "🔵", "🟡"];
          const names = ["red", "green", "blue", "yellow"];
          const idx = Math.floor(Math.random() * colors.length);
          const correct = colors[idx];
          const wrongPool = colors.filter(c => c !== correct);
          const wrong1 = pullRandom([...wrongPool]);
          const wrong2 = pullRandom([...wrongPool]);
          return {
            question: `Tap ${names[idx]}`,
            choices: shuffle([correct, wrong1, wrong2]),
            correctIndex: 0
          };
        })()
      ]
    }))
  },

  patterns: {
    displayName: "Patterns",
    lessons: Array.from({ length: 6 }).map((_, i) => ({
      title: `Pattern Practice ${i + 1}`,
      body: "What comes next?",
      quiz: [
        {
          question: "What comes next?",
          choices: shuffle(["🔵", "⭐", "🔴"]),
          correctIndex: 0
        }
      ]
    }))
  },

  memory: {
    displayName: "Memory",
    lessons: Array.from({ length: 6 }).map((_, i) => ({
      title: `Memory Practice ${i + 1}`,
      body: "Remember the item!",
      quiz: [
        (() => {
          const items = ["🐱", "🚗", "🍎"];
          const correct = items[Math.floor(Math.random() * items.length)];
          const wrongPool = ["🐶", "🌟", "🍌", "🧸"].filter(i => i !== correct);
          const wrong1 = pullRandom([...wrongPool]);
          const wrong2 = pullRandom([...wrongPool]);
          return {
            question: `Tap the item you saw: ${correct}`,
            choices: shuffle([correct, wrong1, wrong2]),
            correctIndex: 0
          };
        })()
      ]
    }))
  }
};

// Utility functions
function shuffle(arr) {
  return arr
    .map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ v }) => v);
}

function pullRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr.splice(idx, 1)[0];
}
