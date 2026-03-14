// ============================================================
// FALLBACK ENGINE — UNIFIED SCHEMA
// Every generator returns:
// {
//   lesson: "",
//   type: "mc" | "text" | "tf",
//   category: "subject",
//   difficulty: "easy" | "medium" | "hard" | "mixed",
//   question: "...",
//   options: [...], // only for mc
//   answer: any
// }
// ============================================================

// ------------------------------------------------------------
// CORE HELPERS
// ------------------------------------------------------------
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ============================================================
// PART 3A — MATH GENERATORS
// ============================================================

// ---------------------------
// MATH — EASY
// ---------------------------
function generateMathEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    const a = randInt(1, 10);
    const b = randInt(1, 10);
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "easy",
      question: `What is ${a} + ${b}?`,
      options: shuffleArray([a + b, a + b + 1, a + b - 1, a + b + 2]),
      answer: a + b
    };
  }

  if (pattern === 2) {
    const a = randInt(5, 15);
    const b = randInt(1, 5);
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "easy",
      question: `What is ${a} - ${b}?`,
      options: shuffleArray([a - b, a - b + 1, a - b - 1, a - b + 2]),
      answer: a - b
    };
  }

  if (pattern === 3) {
    const a = randInt(1, 20);
    const b = randInt(1, 20);
    const correct = a > b ? ">" : a < b ? "<" : "=";
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "easy",
      question: `Which symbol makes this true: ${a} __ ${b}?`,
      options: shuffleArray([">", "<", "="]),
      answer: correct
    };
  }

  const apples = randInt(2, 6);
  const more = randInt(1, 4);
  return {
    lesson: "",
    type: "text",
    category: "math",
    difficulty: "easy",
    question: `You have ${apples} apples and get ${more} more. How many apples do you have now?`,
    answer: apples + more
  };
}

// ---------------------------
// MATH — MEDIUM
// ---------------------------
function generateMathMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    const a = randInt(2, 12);
    const b = randInt(2, 12);
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "medium",
      question: `What is ${a} × ${b}?`,
      options: shuffleArray([
        a * b,
        a * b + randInt(1, 5),
        a * b - randInt(1, 5),
        a * b + randInt(6, 10)
      ]),
      answer: a * b
    };
  }

  if (pattern === 2) {
    const b = randInt(2, 12);
    const ans = randInt(2, 12);
    const a = b * ans;
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "medium",
      question: `What is ${a} ÷ ${b}?`,
      options: shuffleArray([
        ans,
        ans + randInt(1, 3),
        ans - randInt(1, 3),
        ans + randInt(4, 6)
      ]),
      answer: ans
    };
  }

  if (pattern === 3) {
    const num1 = randInt(1, 5);
    const den1 = randInt(2, 6);
    const num2 = randInt(1, 5);
    const den2 = randInt(2, 6);
    const val1 = num1 / den1;
    const val2 = num2 / den2;
    let correct;
    if (Math.abs(val1 - val2) < 0.0001) {
      correct = "=";
    } else {
      correct = val1 > val2 ? ">" : "<";
    }
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "medium",
      question: `Which symbol makes this true: ${num1}/${den1} __ ${num2}/${den2}?`,
      options: shuffleArray([">", "<", "="]),
      answer: correct
    };
  }

  const start = randInt(10, 30);
  const added = randInt(5, 15);
  const removed = randInt(1, 10);
  return {
    lesson: "",
    type: "text",
    category: "math",
    difficulty: "medium",
    question: `You start with ${start} coins, earn ${added} more, then spend ${removed}. How many coins do you have now?`,
    answer: start + added - removed
  };
}

// ---------------------------
// MATH — HARD
// ---------------------------
function generateMathHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    const a = randInt(2, 9);
    const x = randInt(1, 10);
    const b = randInt(1, 10);
    const c = a * x + b;
    return {
      lesson: "",
      type: "text",
      category: "math",
      difficulty: "hard",
      question: `Solve for x: ${a}x + ${b} = ${c}`,
      answer: String(x)
    };
  }

  if (pattern === 2) {
    const base = randInt(50, 200);
    const pct = choice([10, 20, 25, 30, 40, 50]);
    const ans = (base * pct) / 100;
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "hard",
      question: `What is ${pct}% of ${base}?`,
      options: shuffleArray([
        ans,
        ans + randInt(1, 10),
        ans - randInt(1, 10),
        ans + randInt(11, 20)
      ]),
      answer: ans
    };
  }

  if (pattern === 3) {
    const length = randInt(5, 20);
    const width = randInt(5, 20);
    const area = length * width;
    return {
      lesson: "",
      type: "mc",
      category: "math",
      difficulty: "hard",
      question: `A rectangle is ${length} units long and ${width} units wide. What is its area?`,
      options: shuffleArray([
        area,
        area + randInt(5, 15),
        area - randInt(5, 15),
        (length + width) * 2
      ]),
      answer: area
    };
  }

  const a = randInt(2, 9);
  const b = randInt(2, 9);
  const scale = randInt(2, 5);
  return {
    lesson: "",
    type: "text",
    category: "math",
    difficulty: "hard",
    question: `The ratio of red to blue marbles is ${a}:${b}. If there are ${a * scale} red marbles, how many blue marbles are there?`,
    answer: String(b * scale)
  };
}

// ---------------------------
// MATH — TRUE/FALSE
// ---------------------------
function generateMathTF() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    const a = randInt(2, 10);
    const b = randInt(2, 10);
    const correct = a + b;
    const isTrue = Math.random() < 0.5;
    const shown = isTrue ? correct : correct + randInt(1, 3);
    return {
      lesson: "",
      type: "tf",
      category: "math",
      difficulty: "mixed",
      question: `True or False: ${a} + ${b} = ${shown}`,
      answer: isTrue
    };
  }

  if (pattern === 2) {
    const a = randInt(2, 10);
    const b = randInt(2, 10);
    const correct = a * b;
    const isTrue = Math.random() < 0.5;
    const shown = isTrue ? correct : correct + randInt(1, 5);
    return {
      lesson: "",
      type: "tf",
      category: "math",
      difficulty: "mixed",
      question: `True or False: ${a} × ${b} = ${shown}`,
      answer: isTrue
    };
  }

  if (pattern === 3) {
    const fraction = choice(["1/2", "2/4", "3/6", "4/8"]);
    const isTrue = fraction === "1/2" || fraction === "2/4";
    return {
      lesson: "",
      type: "tf",
      category: "math",
      difficulty: "mixed",
      question: `True or False: ${fraction} is equal to 1/2.`,
      answer: isTrue
    };
  }

  const statement = choice([
    { text: "Zero is an even number.", val: true },
    { text: "A triangle has four sides.", val: false },
    { text: "10 is greater than 7.", val: true },
    { text: "5 × 5 = 30.", val: false }
  ]);
  return {
    lesson: "",
    type: "tf",
    category: "math",
    difficulty: "mixed",
    question: `True or False: ${statement.text}`,
    answer: statement.val
  };
}

// ============================================================
// PART 3B — BIOLOGY + SCIENCE GENERATORS
// ============================================================

// BIOLOGY — EASY
function generateBiologyEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "biology",
      difficulty: "easy",
      question: "What do plants need to make their own food?",
      options: shuffleArray(["Sunlight", "Sand", "Metal", "Plastic"]),
      answer: "Sunlight"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "biology",
      difficulty: "easy",
      question: "Which part of the plant absorbs water?",
      options: shuffleArray(["Roots", "Leaves", "Flowers", "Fruit"]),
      answer: "Roots"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "biology",
      difficulty: "easy",
      question: "What gas do humans need to breathe?",
      answer: "oxygen"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "biology",
    difficulty: "easy",
    question: "True or False: All animals need water to survive.",
    answer: true
  };
}

// BIOLOGY — MEDIUM
function generateBiologyMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "biology",
      difficulty: "medium",
      question: "What is the basic unit of life?",
      options: shuffleArray(["Cell", "Atom", "Organ", "Molecule"]),
      answer: "Cell"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "biology",
      difficulty: "medium",
      question: "Which organ pumps blood through the body?",
      options: shuffleArray(["Heart", "Liver", "Lungs", "Stomach"]),
      answer: "Heart"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "biology",
      difficulty: "medium",
      question: "What pigment in plants captures sunlight?",
      answer: "chlorophyll"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "biology",
    difficulty: "medium",
    question: "True or False: DNA is found inside the nucleus of a cell.",
    answer: true
  };
}

// BIOLOGY — HARD
function generateBiologyHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "biology",
      difficulty: "hard",
      question: "What process do plants use to convert sunlight into chemical energy?",
      answer: "photosynthesis"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "biology",
      difficulty: "hard",
      question: "Which organelle is responsible for producing ATP in eukaryotic cells?",
      options: shuffleArray(["Mitochondria", "Ribosome", "Golgi apparatus", "Nucleus"]),
      answer: "Mitochondria"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "biology",
      difficulty: "hard",
      question: "Which macromolecule are enzymes made of?",
      options: shuffleArray(["Proteins", "Lipids", "Carbohydrates", "Nucleic acids"]),
      answer: "Proteins"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "biology",
    difficulty: "hard",
    question: "True or False: Meiosis produces genetically identical daughter cells.",
    answer: false
  };
}

// BIOLOGY — TRUE/FALSE
function generateBiologyTF() {
  const statements = [
    { text: "All living things are made of cells.", val: true },
    { text: "Plants do not need carbon dioxide.", val: false },
    { text: "Humans have 46 chromosomes.", val: true },
    { text: "Bacteria are multicellular organisms.", val: false }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "biology",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// SCIENCE — EASY
function generateScienceEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "science",
      difficulty: "easy",
      question: "What force pulls objects toward Earth?",
      options: shuffleArray(["Gravity", "Electricity", "Magnetism", "Friction"]),
      answer: "Gravity"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "science",
      difficulty: "easy",
      question: "Water freezes at what temperature (°C)?",
      options: shuffleArray(["0", "10", "50", "100"]),
      answer: "0"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "science",
      difficulty: "easy",
      question: "What do we call the star at the center of our solar system?",
      answer: "sun"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "science",
    difficulty: "easy",
    question: "True or False: Sound travels faster in air than in water.",
    answer: false
  };
}

// SCIENCE — MEDIUM
function generateScienceMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "science",
      difficulty: "medium",
      question: "What state of matter has a definite volume but no definite shape?",
      options: shuffleArray(["Liquid", "Solid", "Gas", "Plasma"]),
      answer: "Liquid"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "science",
      difficulty: "medium",
      question: "Which planet is known as the Red Planet?",
      options: shuffleArray(["Mars", "Venus", "Jupiter", "Mercury"]),
      answer: "Mars"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "science",
      difficulty: "medium",
      question: "What gas do plants release during photosynthesis?",
      answer: "oxygen"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "science",
    difficulty: "medium",
    question: "True or False: Metals are good conductors of electricity.",
    answer: true
  };
}

// SCIENCE — HARD
function generateScienceHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "science",
      difficulty: "hard",
      question: "What is the chemical formula for table salt?",
      answer: "nacl"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "science",
      difficulty: "hard",
      question: "Which subatomic particle has a negative charge?",
      options: shuffleArray(["Electron", "Proton", "Neutron", "Photon"]),
      answer: "Electron"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "science",
      difficulty: "hard",
      question: "What type of energy is stored in chemical bonds?",
      options: shuffleArray(["Chemical", "Thermal", "Kinetic", "Nuclear"]),
      answer: "Chemical"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "science",
    difficulty: "hard",
    question: "True or False: Plasma is the most common state of matter in the universe.",
    answer: true
  };
}

// SCIENCE — TRUE/FALSE
function generateScienceTF() {
  const statements = [
    { text: "Light travels faster than sound.", val: true },
    { text: "Humans can breathe in space without a suit.", val: false },
    { text: "Earth revolves around the Sun.", val: true },
    { text: "All metals are magnetic.", val: false }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "science",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// ============================================================
// PART 3C — HISTORY + GEOGRAPHY GENERATORS
// ============================================================

// HISTORY — EASY
function generateHistoryEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "history",
      difficulty: "easy",
      question: "Who was the first President of the United States?",
      options: shuffleArray(["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"]),
      answer: "George Washington"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "history",
      difficulty: "easy",
      question: "Which ancient civilization built the pyramids?",
      options: shuffleArray(["Egyptians", "Romans", "Greeks", "Chinese"]),
      answer: "Egyptians"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "history",
      difficulty: "easy",
      question: "What large wall in China was built for protection?",
      answer: "great wall of china"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "history",
    difficulty: "easy",
    question: "True or False: The Roman Empire came before the Middle Ages.",
    answer: true
  };
}

// HISTORY — MEDIUM
function generateHistoryMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "history",
      difficulty: "medium",
      question: "In which year did the American Civil War begin?",
      options: shuffleArray(["1861", "1776", "1812", "1914"]),
      answer: "1861"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "history",
      difficulty: "medium",
      question: "Which empire was ruled by Genghis Khan?",
      options: shuffleArray(["Mongol Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"]),
      answer: "Mongol Empire"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "history",
      difficulty: "medium",
      question: "What ship famously sank in 1912?",
      answer: "titanic"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "history",
    difficulty: "medium",
    question: "True or False: The Renaissance began in Italy.",
    answer: true
  };
}

// HISTORY — HARD
function generateHistoryHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "history",
      difficulty: "hard",
      question: "What was the name of the trade route connecting China and the Mediterranean?",
      answer: "silk road"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "history",
      difficulty: "hard",
      question: "Which treaty ended World War I?",
      options: shuffleArray(["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of Vienna"]),
      answer: "Treaty of Versailles"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "history",
      difficulty: "hard",
      question: "Who was the leader of the Soviet Union during World War II?",
      options: shuffleArray(["Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev", "Leon Trotsky"]),
      answer: "Joseph Stalin"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "history",
    difficulty: "hard",
    question: "True or False: The Byzantine Empire fell in 1453.",
    answer: true
  };
}

// HISTORY — TRUE/FALSE
function generateHistoryTF() {
  const statements = [
    { text: "The Declaration of Independence was signed in 1776.", val: true },
    { text: "The Aztecs lived in ancient Egypt.", val: false },
    { text: "The Middle Ages came after the fall of Rome.", val: true },
    { text: "Napoleon was a king of England.", val: false }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "history",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// HISTORY — MIXED (UNIFIED)
function generateHistoryMixed() {
  const q = choice([
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      answer: "George Washington"
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1918", "1963"],
      answer: "1945"
    },
    {
      question: "The ancient city of Rome is located in which modern country?",
      options: ["Italy", "Greece", "France", "Spain"],
      answer: "Italy"
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "history",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// GEOGRAPHY — EASY
function generateGeographyEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "geography",
      difficulty: "easy",
      question: "Which is the largest ocean on Earth?",
      options: shuffleArray(["Pacific", "Atlantic", "Indian", "Arctic"]),
      answer: "Pacific"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "geography",
      difficulty: "easy",
      question: "Which continent is Egypt located on?",
      options: shuffleArray(["Africa", "Asia", "Europe", "South America"]),
      answer: "Africa"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "geography",
      difficulty: "easy",
      question: "What is the capital of France?",
      answer: "paris"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "geography",
    difficulty: "easy",
    question: "True or False: Australia is both a country and a continent.",
    answer: true
  };
}

// GEOGRAPHY — MEDIUM
function generateGeographyMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "geography",
      difficulty: "medium",
      question: "Which river is the longest in the world?",
      options: shuffleArray(["Nile", "Amazon", "Yangtze", "Mississippi"]),
      answer: "Nile"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "geography",
      difficulty: "medium",
      question: "Mount Everest is part of which mountain range?",
      options: shuffleArray(["Himalayas", "Andes", "Rockies", "Alps"]),
      answer: "Himalayas"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "geography",
      difficulty: "medium",
      question: "What is the largest desert in the world?",
      answer: "sahara"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "geography",
    difficulty: "medium",
    question: "True or False: The equator passes through South America.",
    answer: true
  };
}

// GEOGRAPHY — HARD
function generateGeographyHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "geography",
      difficulty: "hard",
      question: "What is the capital city of Mongolia?",
      answer: "ulaanbaatar"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "geography",
      difficulty: "hard",
      question: "Which country has the most natural lakes?",
      options: shuffleArray(["Canada", "Russia", "Brazil", "United States"]),
      answer: "Canada"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "geography",
      difficulty: "hard",
      question: "Which African country was formerly known as Abyssinia?",
      options: shuffleArray(["Ethiopia", "Sudan", "Somalia", "Eritrea"]),
      answer: "Ethiopia"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "geography",
    difficulty: "hard",
    question: "True or False: The Danube River flows through more countries than any other river in the world.",
    answer: true
  };
}

// GEOGRAPHY — TRUE/FALSE
function generateGeographyTF() {
  const statements = [
    { text: "Russia is the largest country in the world by land area.", val: true },
    { text: "The Amazon River flows through India.", val: false },
    { text: "Africa has more countries than any other continent.", val: true },
    { text: "Greenland is a continent.", val: false }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "geography",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// GEOGRAPHY — MIXED (UNIFIED)
function generateGeographyMixed() {
  const q = choice([
    {
      question: "What is the largest continent by land area?",
      options: ["Asia", "Africa", "North America", "Europe"],
      answer: "Asia"
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      answer: "Nile"
    },
    {
      question: "Which country is both a continent and a country?",
      options: ["Australia", "Greenland", "India", "Brazil"],
      answer: "Australia"
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "geography",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// ============================================================
// PART 3D — LANGUAGE + PRESCHOOL GENERATORS
// ============================================================

// LANGUAGE — EASY
function generateLanguageEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "language",
      difficulty: "easy",
      question: "Which word is a noun?",
      options: shuffleArray(["Dog", "Run", "Quickly", "Blue"]),
      answer: "Dog"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "language",
      difficulty: "easy",
      question: "Which word is a verb?",
      options: shuffleArray(["Jump", "Green", "Happiness", "Tall"]),
      answer: "Jump"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "language",
      difficulty: "easy",
      question: "What punctuation mark ends a question?",
      answer: "?"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "language",
    difficulty: "easy",
    question: "True or False: A sentence must start with a capital letter.",
    answer: true
  };
}

// LANGUAGE — MEDIUM
function generateLanguageMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "language",
      difficulty: "medium",
      question: "Which sentence uses correct grammar?",
      options: shuffleArray([
        "She and I went to the store.",
        "Me and her went to the store.",
        "Her and me went to the store.",
        "I and she went store."
      ]),
      answer: "She and I went to the store."
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "language",
      difficulty: "medium",
      question: "Which word is a synonym for 'happy'?",
      options: shuffleArray(["Joyful", "Angry", "Tired", "Silent"]),
      answer: "Joyful"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "language",
      difficulty: "medium",
      question: "What is the past tense of 'run'?",
      answer: "ran"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "language",
    difficulty: "medium",
    question: "True or False: An adjective describes a noun.",
    answer: true
  };
}

// LANGUAGE — HARD
function generateLanguageHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "language",
      difficulty: "hard",
      question: "What is the term for a word that has the opposite meaning of another word?",
      answer: "antonym"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "language",
      difficulty: "hard",
      question: "Which sentence uses the subjunctive mood?",
      options: shuffleArray([
        "If I were taller, I would play basketball.",
        "I am taller than my brother.",
        "She will be taller next year.",
        "They are tall enough to ride."
      ]),
      answer: "If I were taller, I would play basketball."
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "language",
      difficulty: "hard",
      question: "Which of these is an example of a metaphor?",
      options: shuffleArray([
        "Time is a thief.",
        "He ran like the wind.",
        "She is as brave as a lion.",
        "The dog barked loudly."
      ]),
      answer: "Time is a thief."
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "language",
    difficulty: "hard",
    question: "True or False: A gerund is a verb form ending in -ing that functions as a noun.",
    answer: true
  };
}

// LANGUAGE — TRUE/FALSE
function generateLanguageTF() {
  const statements = [
    { text: "A pronoun replaces a noun.", val: true },
    { text: "Adverbs describe nouns.", val: false },
    { text: "‘Their’ shows possession.", val: true },
    { text: "‘Its’ always means ‘it is’.", val: false }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "language",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// ELA / LANGUAGE — MIXED (UNIFIED)
function generateELAMixed() {
  const q = choice([
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "She and I are going to the store.",
        "Her and me is going to the store.",
        "She and me are going to the store.",
        "Her and I is going to the store."
      ],
      answer: "She and I are going to the store."
    },
    {
      question: "Which word is a synonym for 'happy'?",
      options: ["Joyful", "Angry", "Tired", "Confused"],
      answer: "Joyful"
    },
    {
      question: "Which sentence uses the correct form of 'their/there/they're'?",
      options: [
        "They're going to bring their books over there.",
        "There going to bring they're books over their.",
        "Their going to bring there books over they're.",
        "They're going to bring there books over their."
      ],
      answer: "They're going to bring their books over there."
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "language",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// PRESCHOOL — EASY
function generatePreschoolEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "preschool",
      difficulty: "easy",
      question: "What color is the sky on a clear day?",
      options: shuffleArray(["Blue", "Green", "Red", "Purple"]),
      answer: "Blue"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "preschool",
      difficulty: "easy",
      question: "Which shape has three sides?",
      options: shuffleArray(["Triangle", "Circle", "Square", "Oval"]),
      answer: "Triangle"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "preschool",
      difficulty: "easy",
      question: "What sound does a cat make?",
      answer: "meow"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "preschool",
    difficulty: "easy",
    question: "True or False: A square has four sides.",
    answer: true
  };
}

// PRESCHOOL — MEDIUM
function generatePreschoolMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "preschool",
      difficulty: "medium",
      question: "Which animal is the largest?",
      options: shuffleArray(["Elephant", "Dog", "Cat", "Rabbit"]),
      answer: "Elephant"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "preschool",
      difficulty: "medium",
      question: "Which of these is a fruit?",
      options: shuffleArray(["Apple", "Carrot", "Broccoli", "Potato"]),
      answer: "Apple"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "preschool",
      difficulty: "medium",
      question: "What number comes after 7?",
      answer: "8"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "preschool",
    difficulty: "medium",
    question: "True or False: A circle has no corners.",
    answer: true
  };
}

// PRESCHOOL — HARD
function generatePreschoolHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "preschool",
      difficulty: "hard",
      question: "Spell the word 'dog'.",
      answer: "dog"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "preschool",
      difficulty: "hard",
      question: "Which of these is the smallest number?",
      options: shuffleArray(["1", "5", "9", "7"]),
      answer: "1"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "preschool",
      difficulty: "hard",
      question: "Which shape has the most sides?",
      options: shuffleArray(["Hexagon", "Triangle", "Square", "Pentagon"]),
      answer: "Hexagon"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "preschool",
    difficulty: "hard",
    question: "True or False: The letter 'A' is a vowel.",
    answer: true
  };
}

// PRESCHOOL — TRUE/FALSE
function generatePreschoolTF() {
  const statements = [
    { text: "A cow says 'moo'.", val: true },
    { text: "The number 10 is smaller than 3.", val: false },
    { text: "Red and blue make purple.", val: true },
    { text: "A circle has corners.", val: false }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "preschool",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// PRESCHOOL — MIXED (UNIFIED)
function generatePreschoolMixed() {
  const q = choice([
    {
      question: "Which of these is a color?",
      options: ["Blue", "Dog", "Car", "Chair"],
      answer: "Blue"
    },
    {
      question: "How many sides does a triangle have?",
      options: ["3", "4", "5", "6"],
      answer: "3"
    },
    {
      question: "Which animal says 'meow'?",
      options: ["Cat", "Dog", "Cow", "Sheep"],
      answer: "Cat"
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "preschool",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// ============================================================
// PART 3E — LOGIC + GENERAL GENERATORS
// ============================================================

// LOGIC — EASY
function generateLogicEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "logic",
      difficulty: "easy",
      question: "If a bird has 2 wings, how many wings do 3 birds have?",
      options: shuffleArray(["6", "4", "3", "8"]),
      answer: "6"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "logic",
      difficulty: "easy",
      question: "Which shape comes next: Circle, Square, Circle, Square, ___?",
      options: shuffleArray(["Circle", "Triangle", "Square", "Oval"]),
      answer: "Circle"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "logic",
      difficulty: "easy",
      question: "What number comes next: 2, 4, 6, 8, __?",
      answer: "10"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "logic",
    difficulty: "easy",
    question: "True or False: All squares are rectangles.",
    answer: true
  };
}

// LOGIC — MEDIUM
function generateLogicMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "logic",
      difficulty: "medium",
      question: "If all cats are animals, and Luna is a cat, what is Luna?",
      options: shuffleArray(["An animal", "A plant", "A mineral", "A robot"]),
      answer: "An animal"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "logic",
      difficulty: "medium",
      question: "Which number does NOT belong: 3, 6, 9, 12, 14?",
      options: shuffleArray(["14", "12", "3", "6"]),
      answer: "14"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "logic",
      difficulty: "medium",
      question: "What is the missing letter: A, C, E, G, __?",
      answer: "I"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "logic",
    difficulty: "medium",
    question: "True or False: If A > B and B > C, then A > C.",
    answer: true
  };
}

// LOGIC — HARD
function generateLogicHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "logic",
      difficulty: "hard",
      question: "If today is two days before Friday, what day is it?",
      answer: "wednesday"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "logic",
      difficulty: "hard",
      question: "Which statement must be true? If it rains, the ground gets wet.",
      options: shuffleArray([
        "If the ground is wet, it might have rained.",
        "If it rains, the ground stays dry.",
        "If the ground is dry, it rained.",
        "If it rains, the ground freezes."
      ]),
      answer: "If the ground is wet, it might have rained."
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "logic",
      difficulty: "hard",
      question: "Which number completes the pattern: 1, 4, 9, 16, __?",
      options: shuffleArray(["25", "20", "30", "18"]),
      answer: "25"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "logic",
    difficulty: "hard",
    question: "True or False: A contradiction can be true.",
    answer: false
  };
}

// LOGIC — TRUE/FALSE
function generateLogicTF() {
  const statements = [
    { text: "If two statements are both true, their AND is true.", val: true },
    { text: "All even numbers are divisible by 3.", val: false },
    { text: "A triangle can have two right angles.", val: false },
    { text: "If A = B and B = C, then A = C.", val: true }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "logic",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// LOGIC — MIXED (UNIFIED)
function generateLogicMixed() {
  const q = choice([
    {
      question: "All cats are mammals. All mammals are animals. Therefore, all cats are animals. This is an example of:",
      options: ["Deductive reasoning", "Inductive reasoning", "Circular reasoning", "False analogy"],
      answer: "Deductive reasoning"
    },
    {
      question: "What comes next in the sequence: 2, 4, 8, 16, ...?",
      options: ["32", "20", "24", "18"],
      answer: "32"
    },
    {
      question: "If today is Wednesday, what day will it be in 10 days?",
      options: ["Saturday", "Friday", "Sunday", "Monday"],
      answer: "Saturday"
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "logic",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// GENERAL — EASY
function generateGeneralEasy() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "general",
      difficulty: "easy",
      question: "How many days are in a week?",
      options: shuffleArray(["7", "5", "10", "6"]),
      answer: "7"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "general",
      difficulty: "easy",
      question: "Which animal barks?",
      options: shuffleArray(["Dog", "Cat", "Cow", "Sheep"]),
      answer: "Dog"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "general",
      difficulty: "easy",
      question: "What planet do we live on?",
      answer: "earth"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "general",
    difficulty: "easy",
    question: "True or False: The sun rises in the east.",
    answer: true
  };
}

// GENERAL — MEDIUM
function generateGeneralMedium() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "mc",
      category: "general",
      difficulty: "medium",
      question: "Which of these is a mammal?",
      options: shuffleArray(["Dolphin", "Shark", "Tuna", "Octopus"]),
      answer: "Dolphin"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "general",
      difficulty: "medium",
      question: "Which country invented pizza?",
      options: shuffleArray(["Italy", "Japan", "Brazil", "India"]),
      answer: "Italy"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "text",
      category: "general",
      difficulty: "medium",
      question: "What gas do humans exhale?",
      answer: "carbon dioxide"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "general",
    difficulty: "medium",
    question: "True or False: The Pacific Ocean is the largest ocean.",
    answer: true
  };
}

// GENERAL — HARD
function generateGeneralHard() {
  const pattern = randInt(1, 4);

  if (pattern === 1) {
    return {
      lesson: "",
      type: "text",
      category: "general",
      difficulty: "hard",
      question: "What is the longest river in the world?",
      answer: "nile"
    };
  }

  if (pattern === 2) {
    return {
      lesson: "",
      type: "mc",
      category: "general",
      difficulty: "hard",
      question: "Which element has the chemical symbol 'Fe'?",
      options: shuffleArray(["Iron", "Fluorine", "Francium", "Lead"]),
      answer: "Iron"
    };
  }

  if (pattern === 3) {
    return {
      lesson: "",
      type: "mc",
      category: "general",
      difficulty: "hard",
      question: "Which scientist proposed the three laws of motion?",
      options: shuffleArray(["Newton", "Einstein", "Tesla", "Curie"]),
      answer: "Newton"
    };
  }

  return {
    lesson: "",
    type: "tf",
    category: "general",
    difficulty: "hard",
    question: "True or False: The Great Barrier Reef is located off the coast of Australia.",
    answer: true
  };
}

// GENERAL — TRUE/FALSE
function generateGeneralTF() {
  const statements = [
    { text: "Water boils at 100°C.", val: true },
    { text: "The human body has 300 bones.", val: false },
    { text: "Lightning is hotter than the surface of the sun.", val: true },
    { text: "Mount Everest is the tallest mountain on Earth.", val: true }
  ];

  const pick = choice(statements);
  return {
    lesson: "",
    type: "tf",
    category: "general",
    difficulty: "mixed",
    question: `True or False: ${pick.text}`,
    answer: pick.val
  };
}

// GENERAL — MIXED (UNIFIED)
function generateGeneralKnowledgeMixed() {
  const q = choice([
    {
      question: "How many days are there in a leap year?",
      options: ["366", "365", "364", "360"],
      answer: "366"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      answer: "Mars"
    },
    {
      question: "Which instrument has black and white keys?",
      options: ["Piano", "Drum", "Violin", "Flute"],
      answer: "Piano"
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "general",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// ============================================================
// ADVANCED SUBJECTS — ALGEBRA → CHEMISTRY (UNIFIED)
// ============================================================

// ALGEBRA
function generateAlgebraEasy() {
  const a = randInt(2, 9);
  const x = randInt(1, 10);
  const b = randInt(1, 10);
  const c = a * x + b;

  return {
    lesson: "",
    type: "text",
    category: "algebra",
    difficulty: "easy",
    question: `Solve for x: ${a}x + ${b} = ${c}`,
    answer: String(x)
  };
}

function generateAlgebraMedium() {
  const a = randInt(2, 9);
  const x = randInt(-5, 5);
  const b = randInt(-5, 5);
  const c = a * x - b;

  return {
    lesson: "",
    type: "text",
    category: "algebra",
    difficulty: "medium",
    question: `Solve for x: ${a}x - (${b}) = ${c}`,
    answer: String(x)
  };
}

function generateAlgebraHard() {
  const p = randInt(-4, 4);
  const q = randInt(-4, 4);
  if (p === 0 && q === 0) return generateAlgebraHard();

  const r1 = -p;
  const r2 = -q;

  return {
    lesson: "",
    type: "mc",
    category: "algebra",
    difficulty: "hard",
    question: `Solve: (x ${p >= 0 ? "+ " + p : "- " + Math.abs(p)})` +
              `(x ${q >= 0 ? "+ " + q : "- " + Math.abs(q)}) = 0`,
    options: shuffleArray([
      `x = ${r1}, x = ${r2}`,
      `x = ${r1}, x = ${-r2}`,
      `x = ${-r1}, x = ${r2}`,
      `x = ${r1 + 1}, x = ${r2 - 1}`
    ]),
    answer: `x = ${r1}, x = ${r2}`
  };
}

function generateAlgebraTF() {
  const a = randInt(2, 10);
  const b = randInt(2, 10);
  const correct = a + b;
  const isTrue = Math.random() < 0.5;
  const shown = isTrue ? correct : correct + randInt(1, 3);

  return {
    lesson: "",
    type: "tf",
    category: "algebra",
    difficulty: "mixed",
    question: `True or False: ${a} + ${b} = ${shown}`,
    answer: isTrue
  };
}

// GEOMETRY
function generateGeometryEasy() {
  const w = randInt(2, 10);
  const h = randInt(2, 10);
  const area = w * h;

  return {
    lesson: "",
    type: "mc",
    category: "geometry",
    difficulty: "easy",
    question: `A rectangle is ${w} by ${h}. What is its area?`,
    options: shuffleArray([area, area + w, area - h, area + 2]),
    answer: area
  };
}

function generateGeometryMedium() {
  const triples = [
    [3, 4, 5],
    [5, 12, 13],
    [6, 8, 10],
    [8, 15, 17]
  ];
  const [a, b, c] = choice(triples);

  return {
    lesson: "",
    type: "mc",
    category: "geometry",
    difficulty: "medium",
    question: `A right triangle has legs ${a} and ${b}. What is the hypotenuse?`,
    options: shuffleArray([c, c - 1, c + 1, a + b]),
    answer: c
  };
}

function generateGeometryHard() {
  const r = randInt(2, 10);
  const pi = 3.14;
  const area = +(pi * r * r).toFixed(2);

  return {
    lesson: "",
    type: "mc",
    category: "geometry",
    difficulty: "hard",
    question: `Find the area of a circle with radius ${r}. (Use π ≈ 3.14)`,
    options: shuffleArray([
      area,
      +(pi * (r + 1) * (r + 1)).toFixed(2),
      +(pi * (r - 1) * (r - 1)).toFixed(2),
      +(2 * pi * r).toFixed(2)
    ]),
    answer: area
  };
}

function generateGeometryTF() {
  const isTrue = Math.random() < 0.5;
  const shown = isTrue ? 180 : randInt(150, 210);

  return {
    lesson: "",
    type: "tf",
    category: "geometry",
    difficulty: "mixed",
    question: `True or False: The angles of a triangle sum to ${shown}°`,
    answer: isTrue
  };
}

// TRIGONOMETRY
function generateTrigEasy() {
  return {
    lesson: "",
    type: "mc",
    category: "trig",
    difficulty: "easy",
    question: "Which ratio represents sin(θ)?",
    options: shuffleArray([
      "opposite/hypotenuse",
      "adjacent/hypotenuse",
      "opposite/adjacent",
      "hypotenuse/opposite"
    ]),
    answer: "opposite/hypotenuse"
  };
}

function generateTrigMedium() {
  const angle = choice([30, 45, 60]);
  const func = choice(["sin", "cos", "tan"]);

  const table = {
    sin: { 30: "1/2", 45: "√2/2", 60: "√3/2" },
    cos: { 30: "√3/2", 45: "√2/2", 60: "1/2" },
    tan: { 30: "√3/3", 45: "1", 60: "√3" }
  };

  const correct = table[func][angle];

  return {
    lesson: "",
    type: "mc",
    category: "trig",
    difficulty: "medium",
    question: `What is ${func}(${angle}°)?`,
    options: shuffleArray([
      correct,
      ...Object.values(table[func]).filter(v => v !== correct)
    ]),
    answer: correct
  };
}

function generateTrigTF() {
  const isTrue = Math.random() < 0.5;
  const shown = isTrue ? "1" : "√3/2";

  return {
    lesson: "",
    type: "tf",
    category: "trig",
    difficulty: "mixed",
    question: `True or False: tan(45°) = ${shown}`,
    answer: isTrue
  };
}

// CALCULUS
function generateCalculusEasy() {
  const n = randInt(2, 5);
  const c = randInt(1, 5);

  return {
    lesson: "",
    type: "mc",
    category: "calculus",
    difficulty: "easy",
    question: `Find the derivative of f(x) = ${c}x^${n}.`,
    options: shuffleArray([
      `${c * n}x^${n - 1}`,
      `${c}x^${n - 1}`,
      `${c * n}x^${n}`,
      `${c * (n - 1)}x^${n - 2}`
    ]),
    answer: `${c * n}x^${n - 1}`
  };
}

function generateCalculusMedium() {
  const n = randInt(1, 4);
  const c = randInt(1, 5);
  const newPow = n + 1;
  const coeff = c / newPow;

  return {
    lesson: "",
    type: "mc",
    category: "calculus",
    difficulty: "medium",
    question: `Find ∫ ${c}x^${n} dx`,
    options: shuffleArray([
      `${coeff}x^${newPow} + C`,
      `${c}x^${newPow} + C`,
      `${c * newPow}x^${newPow} + C`,
      `${coeff}x^${n} + C`
    ]),
    answer: `${coeff}x^${newPow} + C`
  };
}

function generateCalculusTF() {
  const isTrue = Math.random() < 0.5;

  return {
    lesson: "",
    type: "tf",
    category: "calculus",
    difficulty: "mixed",
    question: `True or False: d/dx (x^2) = ${isTrue ? "2x" : "x^2"}`,
    answer: isTrue
  };
}

// PHYSICS
function generatePhysicsEasy() {
  const m = randInt(2, 10);
  const a = randInt(1, 9);
  const F = m * a;

  return {
    lesson: "",
    type: "mc",
    category: "physics",
    difficulty: "easy",
    question: `A ${m} kg object accelerates at ${a} m/s². What is the net force?`,
    options: shuffleArray([F, F + m, F - a, F + 2]),
    answer: F
  };
}

function generatePhysicsMedium() {
  const m = randInt(2, 10);
  const v = randInt(2, 10);
  const KE = Math.round(0.5 * m * v * v);

  return {
    lesson: "",
    type: "mc",
    category: "physics",
    difficulty: "medium",
    question: `What is the kinetic energy of a ${m} kg object moving at ${v} m/s?`,
    options: shuffleArray([KE, KE + 5, KE - 5, KE + 10]),
    answer: KE
  };
}

function generatePhysicsTF() {
  return {
    lesson: "",
    type: "tf",
    category: "physics",
    difficulty: "mixed",
    question: "True or False: Force = mass × acceleration.",
    answer: true
  };
}

// CHEMISTRY
function generateChemistryEasy() {
  return {
    lesson: "",
    type: "mc",
    category: "chemistry",
    difficulty: "easy",
    question: "What is the chemical symbol for water?",
    options: shuffleArray(["H2O", "O2", "CO2", "NaCl"]),
    answer: "H2O"
  };
}

function generateChemistryMedium() {
  return {
    lesson: "",
    type: "mc",
    category: "chemistry",
    difficulty: "medium",
    question: "Which bond involves sharing electrons?",
    options: shuffleArray([
      "Covalent bond",
      "Ionic bond",
      "Metallic bond",
      "Hydrogen bond"
    ]),
    answer: "Covalent bond"
  };
}

function generateChemistryTF() {
  return {
    lesson: "",
    type: "tf",
    category: "chemistry",
    difficulty: "mixed",
    question: "True or False: Sodium's chemical symbol is Na.",
    answer: true
  };
}

// ============================================================
// COMPUTER SCIENCE (MIXED) — UNIFIED
// ============================================================
function generateCSMixed() {
  const q = choice([
    {
      question: "In programming, what does 'loop' mean?",
      options: [
        "Repeating a set of instructions",
        "Storing a single value",
        "Stopping the program",
        "Translating code into another language"
      ],
      answer: "Repeating a set of instructions"
    },
    {
      question: "In most languages, which symbol is commonly used for equality comparison?",
      options: ["==", "=", "=>", "<>"],
      answer: "=="
    },
    {
      question: "What does 'bug' mean in programming?",
      options: [
        "An error or flaw in the code",
        "A type of computer virus",
        "A hardware component",
        "A backup file"
      ],
      answer: "An error or flaw in the code"
    }
  ]);

  return {
    lesson: "",
    type: "mc",
    category: "cs",
    difficulty: "mixed",
    question: q.question,
    options: shuffleArray(q.options),
    answer: q.answer
  };
}

// ============================================================
// PART 3F — MERGED FALLBACK ROUTER
// ============================================================
function fallbackGenerate(subject, difficulty) {
  const d = (difficulty || "mixed").toLowerCase();
  const s = (subject || "").toLowerCase();

  // Math
  if (s === "math") {
    if (d === "easy") return generateMathEasy();
    if (d === "medium") return generateMathMedium();
    if (d === "hard") return generateMathHard();
    return generateMathTF();
  }

  // Algebra
  if (s === "algebra") {
    if (d === "easy") return generateAlgebraEasy();
    if (d === "medium") return generateAlgebraMedium();
    if (d === "hard") return generateAlgebraHard();
    return generateAlgebraTF();
  }

  // Geometry
  if (s === "geometry") {
    if (d === "easy") return generateGeometryEasy();
    if (d === "medium") return generateGeometryMedium();
    if (d === "hard") return generateGeometryHard();
    return generateGeometryTF();
  }

  // Trigonometry
  if (s === "trig" || s === "trigonometry") {
    if (d === "easy") return generateTrigEasy();
    if (d === "medium") return generateTrigMedium();
    return generateTrigTF();
  }

  // Calculus
  if (s === "calculus") {
    if (d === "easy") return generateCalculusEasy();
    if (d === "medium") return generateCalculusMedium();
    return generateCalculusTF();
  }

  // Physics
  if (s === "physics") {
    if (d === "easy") return generatePhysicsEasy();
    if (d === "medium") return generatePhysicsMedium();
    return generatePhysicsTF();
  }

  // Chemistry
  if (s === "chemistry") {
    if (d === "easy") return generateChemistryEasy();
    if (d === "medium") return generateChemistryMedium();
    return generateChemistryTF();
  }

  // Biology
  if (s === "biology") {
    if (d === "easy") return generateBiologyEasy();
    if (d === "medium") return generateBiologyMedium();
    if (d === "hard") return generateBiologyHard();
    return generateBiologyTF();
  }

  // Science
  if (s === "science") {
    if (d === "easy") return generateScienceEasy();
    if (d === "medium") return generateScienceMedium();
    if (d === "hard") return generateScienceHard();
    return generateScienceTF();
  }

  // History
  if (s === "history") {
    if (d === "easy") return generateHistoryEasy();
    if (d === "medium") return generateHistoryMedium();
    if (d === "hard") return generateHistoryHard();
    return generateHistoryMixed();
  }

  // Geography
  if (s === "geography") {
    if (d === "easy") return generateGeographyEasy();
    if (d === "medium") return generateGeographyMedium();
    if (d === "hard") return generateGeographyHard();
    return generateGeographyMixed();
  }

  // Language / ELA
  if (s === "language" || s === "ela" || s === "english") {
    if (d === "easy") return generateLanguageEasy();
    if (d === "medium") return generateLanguageMedium();
    if (d === "hard") return generateLanguageHard();
    return generateELAMixed();
  }

  // Preschool
  if (s === "preschool") {
    if (d === "easy") return generatePreschoolEasy();
    if (d === "medium") return generatePreschoolMedium();
    if (d === "hard") return generatePreschoolHard();
    return generatePreschoolMixed();
  }

  // Logic
  if (s === "logic") {
    if (d === "easy") return generateLogicEasy();
    if (d === "medium") return generateLogicMedium();
    if (d === "hard") return generateLogicHard();
    return generateLogicMixed();
  }

  // General Knowledge
  if (s === "general") {
    if (d === "easy") return generateGeneralEasy();
    if (d === "medium") return generateGeneralMedium();
    if (d === "hard") return generateGeneralHard();
    return generateGeneralKnowledgeMixed();
  }

  // Computer Science
  if (s === "cs" || s === "computer science") {
    return generateCSMixed();
  }

  // Default fallback
  return generateGeneralKnowledgeMixed();
}

// ============================================================
// EXPORT — MAKE REMOTE FALLBACK AVAILABLE TO THE APP
// ============================================================
window.remoteFallback = {
  // Math
  generateMathEasy,
  generateMathMedium,
  generateMathHard,
  generateMathTF,

  // Algebra
  generateAlgebraEasy,
  generateAlgebraMedium,
  generateAlgebraHard,
  generateAlgebraTF,

  // Geometry
  generateGeometryEasy,
  generateGeometryMedium,
  generateGeometryHard,
  generateGeometryTF,

  // Trigonometry
  generateTrigEasy,
  generateTrigMedium,
  generateTrigTF,

  // Calculus
  generateCalculusEasy,
  generateCalculusMedium,
  generateCalculusTF,

  // Physics
  generatePhysicsEasy,
  generatePhysicsMedium,
  generatePhysicsTF,

  // Chemistry
  generateChemistryEasy,
  generateChemistryMedium,
  generateChemistryTF,

  // Biology
  generateBiologyEasy,
  generateBiologyMedium,
  generateBiologyHard,
  generateBiologyTF,

  // Science
  generateScienceEasy,
  generateScienceMedium,
  generateScienceHard,
  generateScienceTF,

  // History
  generateHistoryEasy,
  generateHistoryMedium,
  generateHistoryHard,
  generateHistoryTF,
  generateHistoryMixed,

  // Geography
  generateGeographyEasy,
  generateGeographyMedium,
  generateGeographyHard,
  generateGeographyTF,
  generateGeographyMixed,

  // Language / ELA
  generateLanguageEasy,
  generateLanguageMedium,
  generateLanguageHard,
  generateLanguageTF,
  generateELAMixed,

  // Preschool
  generatePreschoolEasy,
  generatePreschoolMedium,
  generatePreschoolHard,
  generatePreschoolTF,
  generatePreschoolMixed,

  // Logic
  generateLogicEasy,
  generateLogicMedium,
  generateLogicHard,
  generateLogicTF,
  generateLogicMixed,

  // General Knowledge
  generateGeneralEasy,
  generateGeneralMedium,
  generateGeneralHard,
  generateGeneralTF,
  generateGeneralKnowledgeMixed,

  // Computer Science
  generateCSMixed,

  // Master Router
  fallbackGenerate
};
