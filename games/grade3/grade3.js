// ===============================
//  GRADE 3 TUTOR — FULL ENGINE
//  CHUNK 1: CURRICULUM DATA
// ===============================

// SUBJECT + LESSON DATA (2 lessons per subject)
const g3Subjects = {

  // ============================
  // LITERACY
  // ============================

  readingComprehension: {
    label: "Reading Comprehension",
    group: "Literacy",
    lessons: [
      {
        id: "rc1",
        title: "Main Idea & Key Details",
        body: `
          <p>The <strong>main idea</strong> is what the text is mostly about.</p>
          <p><strong>Key details</strong> support the main idea by giving facts or examples.</p>
          <ul>
            <li>Look at the title.</li>
            <li>Check repeated ideas.</li>
            <li>Look at the first and last sentences.</li>
          </ul>
        `,
        quiz: [
          {
            q: "The main idea tells:",
            options: [
              "A random detail",
              "What the text is mostly about",
              "Only the last sentence",
              "Only the characters"
            ],
            answer: 1
          },
          {
            q: "Key details:",
            options: [
              "Are unrelated facts",
              "Support the main idea",
              "Change the topic",
              "Are always pictures"
            ],
            answer: 1
          },
          {
            q: "A good clue for the main idea is:",
            options: [
              "The title",
              "The page number",
              "The author’s name",
              "The font size"
            ],
            answer: 0
          }
        ]
      },
      {
        id: "rc2",
        title: "Cause & Effect",
        body: `
          <p>A <strong>cause</strong> is why something happens.</p>
          <p>An <strong>effect</strong> is what happens because of it.</p>
          <p>Look for clue words like <em>because, so, since, as a result</em>.</p>
        `,
        quiz: [
          {
            q: "A cause is:",
            options: [
              "What happens",
              "Why something happens",
              "A random event",
              "The ending only"
            ],
            answer: 1
          },
          {
            q: "An effect is:",
            options: [
              "The reason",
              "The result",
              "The title",
              "The setting"
            ],
            answer: 1
          },
          {
            q: "Which clue word shows cause/effect?",
            options: ["because", "and", "but", "the"],
            answer: 0
          }
        ]
      }
    ]
  },

  vocabulary: {
    label: "Vocabulary",
    group: "Literacy",
    lessons: [
      {
        id: "v1",
        title: "Prefixes & Suffixes",
        body: `
          <p><strong>Prefixes</strong> come before a word and change its meaning.</p>
          <p><strong>Suffixes</strong> come after a word and change how it is used.</p>
          <ul>
            <li>un- = not</li>
            <li>re- = again</li>
            <li>-ful = full of</li>
            <li>-less = without</li>
          </ul>
        `,
        quiz: [
          {
            q: "The prefix 'un-' means:",
            options: ["again", "not", "before", "small"],
            answer: 1
          },
          {
            q: "The suffix '-ful' means:",
            options: ["without", "full of", "tiny", "fast"],
            answer: 1
          },
          {
            q: "The prefix 're-' means:",
            options: ["not", "again", "under", "over"],
            answer: 1
          }
        ]
      },
      {
        id: "v2",
        title: "Context Clues",
        body: `
          <p>Context clues help you figure out the meaning of new words.</p>
          <p>Look at the words and sentences around the unknown word.</p>
        `,
        quiz: [
          {
            q: "Context clues are:",
            options: [
              "Pictures only",
              "Hints in the sentence",
              "The table of contents",
              "The glossary"
            ],
            answer: 1
          },
          {
            q: "Context clues help you:",
            options: [
              "Skip the word",
              "Guess the spelling",
              "Understand the meaning",
              "Count sentences"
            ],
            answer: 2
          },
          {
            q: "If a sentence says 'The frigid air was very cold,' 'frigid' means:",
            options: ["hot", "cold", "loud", "bright"],
            answer: 1
          }
        ]
      }
    ]
  },

  spelling: {
    label: "Spelling",
    group: "Literacy",
    lessons: [
      {
        id: "s1",
        title: "Multi‑Syllable Words",
        body: `
          <p>Words can have more than one syllable.</p>
          <p>Break words into parts to spell them correctly.</p>
        `,
        quiz: [
          {
            q: "A syllable is:",
            options: [
              "A punctuation mark",
              "A beat in a word",
              "A type of sentence",
              "A prefix"
            ],
            answer: 1
          },
          {
            q: "How many syllables in 'remember'?",
            options: ["1", "2", "3", "4"],
            answer: 2
          },
          {
            q: "Breaking a word into syllables helps you:",
            options: [
              "Read faster",
              "Spell correctly",
              "Skip words",
              "Change meaning"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "s2",
        title: "Suffix Spelling Rules",
        body: `
          <p>When adding a suffix, sometimes the spelling changes.</p>
          <ul>
            <li>Drop the silent e: make → making</li>
            <li>Double the consonant: run → running</li>
          </ul>
        `,
        quiz: [
          {
            q: "Make + ing becomes:",
            options: ["makeing", "making", "makking", "make"],
            answer: 1
          },
          {
            q: "Run + ing becomes:",
            options: ["runing", "running", "runnning", "run"],
            answer: 1
          },
          {
            q: "We double the consonant when:",
            options: [
              "The word ends in 'e'",
              "The vowel is long",
              "The vowel is short",
              "The word is plural"
            ],
            answer: 2
          }
        ]
      }
    ]
  },

  writing: {
    label: "Writing",
    group: "Literacy",
    lessons: [
      {
        id: "w1",
        title: "Paragraph Writing",
        body: `
          <p>A paragraph has a <strong>topic sentence</strong>, <strong>details</strong>, and a <strong>closing sentence</strong>.</p>
        `,
        quiz: [
          {
            q: "A topic sentence tells:",
            options: [
              "A random detail",
              "The main idea",
              "The ending",
              "The title"
            ],
            answer: 1
          },
          {
            q: "A paragraph should end with:",
            options: [
              "A closing sentence",
              "A new topic",
              "A question",
              "A picture"
            ],
            answer: 0
          },
          {
            q: "Details should:",
            options: [
              "Support the topic",
              "Change the subject",
              "Be unrelated",
              "Be random"
            ],
            answer: 0
          }
        ]
      },
      {
        id: "w2",
        title: "Narrative Writing",
        body: `
          <p>A narrative tells a story with characters, setting, problem, and solution.</p>
        `,
        quiz: [
          {
            q: "A narrative is:",
            options: [
              "A list",
              "A story",
              "A recipe",
              "A diagram"
            ],
            answer: 1
          },
          {
            q: "The setting tells:",
            options: ["Who", "Where and when", "Why", "How"],
            answer: 1
          },
          {
            q: "A solution is:",
            options: [
              "The problem",
              "How the problem is fixed",
              "The title",
              "The characters"
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  grammar: {
    label: "Grammar",
    group: "Literacy",
    lessons: [
      {
        id: "g1",
        title: "Parts of Speech",
        body: `
          <p><strong>Nouns</strong> name people, places, or things.</p>
          <p><strong>Verbs</strong> show action.</p>
          <p><strong>Adjectives</strong> describe nouns.</p>
        `,
        quiz: [
          {
            q: "Which is a noun?",
            options: ["run", "happy", "cat", "quickly"],
            answer: 2
          },
          {
            q: "Which is a verb?",
            options: ["tree", "jump", "book", "pencil"],
            answer: 1
          },
          {
            q: "Which is an adjective?",
            options: ["blue", "run", "cat", "eat"],
            answer: 0
          }
        ]
      },
      {
        id: "g2",
        title: "Compound Sentences",
        body: `
          <p>A compound sentence joins two ideas using <strong>and, but, or</strong>.</p>
        `,
        quiz: [
          {
            q: "Which word can join two sentences?",
            options: ["and", "cat", "jump", "blue"],
            answer: 0
          },
          {
            q: "A compound sentence has:",
            options: [
              "One idea",
              "Two ideas joined together",
              "Only adjectives",
              "Only nouns"
            ],
            answer: 1
          },
          {
            q: "Which is a compound sentence?",
            options: [
              "The dog ran.",
              "The dog ran and the cat hid.",
              "Running fast.",
              "Because it rained."
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  // ============================
  // MATH
  // ============================

  multiplication: {
    label: "Multiplication",
    group: "Math",
    lessons: [
      {
        id: "m1",
        title: "Multiplication as Equal Groups",
        body: `
          <p>Multiplication is repeated addition.</p>
          <p>3 groups of 4 = 3 × 4 = 12</p>
        `,
        quiz: [
          {
            q: "3 groups of 5 equals:",
            options: ["8", "10", "15", "20"],
            answer: 2
          },
          {
            q: "Multiplication is:",
            options: [
              "Random guessing",
              "Repeated addition",
              "Division",
              "Subtraction"
            ],
            answer: 1
          },
          {
            q: "4 × 2 =",
            options: ["6", "8", "10", "12"],
            answer: 1
          }
        ]
      },
      {
        id: "m2",
        title: "Multiplication Facts",
        body: `
          <p>Knowing multiplication facts helps you solve problems quickly.</p>
        `,
        quiz: [
          {
            q: "6 × 3 =",
            options: ["9", "12", "15", "18"],
            answer: 3
          },
          {
            q: "7 × 4 =",
            options: ["21", "24", "28", "32"],
            answer: 2
          },
          {
            q: "5 × 5 =",
            options: ["20", "25", "30", "35"],
            answer: 1
          }
        ]
      }
    ]
  },

  division: {
    label: "Division",
    group: "Math",
    lessons: [
      {
        id: "d1",
        title: "Division as Sharing",
        body: `
          <p>Division splits a number into equal groups.</p>
          <p>12 ÷ 3 = 4</p>
        `,
        quiz: [
          {
            q: "12 ÷ 3 =",
            options: ["2", "3", "4", "6"],
            answer: 2
          },
          {
            q: "Division means:",
            options: [
              "Making groups equal",
              "Adding groups",
              "Multiplying groups",
              "Guessing"
            ],
            answer: 0
          },
          {
            q: "15 ÷ 5 =",
            options: ["2", "3", "4", "5"],
            answer: 1
          }
        ]
      },
      {
        id: "d2",
        title: "Division Facts",
        body: `
          <p>Division is the opposite of multiplication.</p>
        `,
        quiz: [
          {
            q: "If 4 × 3 = 12, then 12 ÷ 3 =",
            options: ["2", "3", "4", "6"],
            answer: 2
          },
          {
            q: "If 5 × 2 = 10, then 10 ÷ 5 =",
            options: ["1", "2", "3", "4"],
            answer: 1
          },
          {
            q: "If 9 × 3 = 27, then 27 ÷ 9 =",
            options: ["2", "3", "4", "5"],
            answer: 1
          }
        ]
      }
    ]
  },

  fractions: {
    label: "Fractions",
    group: "Math",
    lessons: [
      {
        id: "f1",
        title: "Unit Fractions",
        body: `
          <p>A unit fraction has a numerator of 1.</p>
          <p>Examples: 1/2, 1/3, 1/4</p>
        `,
        quiz: [
          {
            q: "A unit fraction has:",
            options: ["1 on top", "1 on bottom", "No numbers", "A decimal"],
            answer: 0
          },
          {
            q: "1/4 means:",
            options: [
              "4 equal parts",
              "1 out of 4 parts",
              "4 out of 1 part",
              "4 wholes"
            ],
            answer: 1
          },
          {
            q: "Which is a unit fraction?",
            options: ["2/3", "3/4", "1/5", "5/5"],
            answer: 2
          }
        ]
      },
      {
        id: "f2",
        title: "Equivalent Fractions",
        body: `
          <p>Equivalent fractions name the same amount.</p>
          <p>Example: 1/2 = 2/4</p>
        `,
        quiz: [
          {
            q: "1/2 is equal to:",
            options: ["1/4", "2/4", "3/4", "4/4"],
            answer: 1
          },
          {
            q: "Equivalent fractions:",
            options: [
              "Look different but mean the same",
              "Are always bigger",
              "Are always smaller",
              "Are decimals"
            ],
            answer: 0
          },
          {
            q: "Which pair is equivalent?",
            options: ["1/3 & 2/3", "1/2 & 3/6", "1/4 & 1/2", "2/3 & 4/3"],
            answer: 1
          }
        ]
      }
    ]
  },

  measurement: {
    label: "Measurement",
    group: "Math",
    lessons: [
      {
        id: "me1",
        title: "Time to the Minute",
        body: `
          <p>The minute hand shows minutes. Each number is 5 minutes.</p>
        `,
        quiz: [
          {
            q: "If the minute hand is on the 4, it is:",
            options: ["4 minutes", "10 minutes", "20 minutes", "25 minutes"],
            answer: 2
          },
          {
            q: "There are how many minutes in an hour?",
            options: ["30", "45", "60", "90"],
            answer: 2
          },
          {
            q: "If the minute hand moves from 3 to 6, how many minutes passed?",
            options: ["10", "15", "20", "30"],
            answer: 3
          }
        ]
      },
      {
        id: "me2",
        title: "Area & Perimeter",
        body: `
          <p><strong>Perimeter</strong> is the distance around a shape.</p>
          <p><strong>Area</strong> is the space inside a shape.</p>
        `,
        quiz: [
          {
            q: "Perimeter measures:",
            options: ["Inside", "Outside", "Volume", "Weight"],
            answer: 1
          },
          {
            q: "Area measures:",
            options: ["Inside space", "Outside edge", "Temperature", "Speed"],
            answer: 0
          },
          {
            q: "A rectangle 3 by 4 has area:",
            options: ["7", "12", "14", "24"],
            answer: 1
          }
        ]
      }
    ]
  },

  geometry: {
    label: "Geometry",
    group: "Math",
    lessons: [
      {
        id: "geo1",
        title: "Quadrilaterals",
        body: `
          <p>A <strong>quadrilateral</strong> is a shape with 4 sides.</p>
          <p>Squares and rectangles are quadrilaterals.</p>
        `,
        quiz: [
          {
            q: "A quadrilateral has:",
            options: ["3 sides", "4 sides", "5 sides", "6 sides"],
            answer: 1
          },
          {
            q: "Which is a quadrilateral?",
            options: ["Triangle", "Square", "Circle", "Pentagon"],
            answer: 1
          },
          {
            q: "Rectangles are:",
            options: [
              "Not quadrilaterals",
              "Quadrilaterals",
              "Circles",
              "Triangles"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "geo2",
        title: "Lines & Angles",
        body: `
          <p>A <strong>right angle</strong> is a square corner.</p>
          <p>Lines can be parallel, intersecting, or perpendicular.</p>
        `,
        quiz: [
          {
            q: "A right angle looks like:",
            options: [
              "A sharp point",
              "A straight line",
              "A square corner",
              "A circle"
            ],
            answer: 2
          },
          {
            q: "Parallel lines:",
            options: [
              "Cross each other",
              "Never meet",
              "Form circles",
              "Are always vertical"
            ],
            answer: 1
          },
          {
            q: "Perpendicular lines:",
            options: [
              "Never meet",
              "Meet and form right angles",
              "Are curved",
              "Are dotted"
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  // ============================
  // SCIENCE
  // ============================

  lifeScience: {
    label: "Life Science",
    group: "Science",
    lessons: [
      {
        id: "ls1",
        title: "Life Cycles",
        body: `
          <p>Living things go through a <strong>life cycle</strong>.</p>
          <p>Many animals change as they grow, like a caterpillar becoming a butterfly.</p>
        `,
        quiz: [
          {
            q: "A life cycle shows:",
            options: [
              "Weather patterns",
              "How a living thing grows and changes",
              "Rock types",
              "Planet orbits"
            ],
            answer: 1
          },
          {
            q: "A butterfly starts as a:",
            options: ["Frog", "Seed", "Caterpillar", "Rock"],
            answer: 2
          },
          {
            q: "Which is part of a plant’s life cycle?",
            options: ["Melting", "Evaporation", "Germination", "Freezing"],
            answer: 2
          }
        ]
      },
      {
        id: "ls2",
        title: "Habitats",
        body: `
          <p>A <strong>habitat</strong> is the place where an animal or plant lives.</p>
          <p>Habitats provide food, water, shelter, and space.</p>
        `,
        quiz: [
          {
            q: "A habitat is:",
            options: [
              "A kind of weather",
              "A place where living things live",
              "A type of rock",
              "A kind of machine"
            ],
            answer: 1
          },
          {
            q: "Habitats must provide:",
            options: [
              "Food and water",
              "Only toys",
              "Only sunlight",
              "Only air"
            ],
            answer: 0
          },
          {
            q: "A desert is:",
            options: [
              "Cold and icy",
              "Very wet",
              "Dry with little rain",
              "Underwater"
            ],
            answer: 2
          }
        ]
      }
    ]
  },

  physicalScience: {
    label: "Physical Science",
    group: "Science",
    lessons: [
      {
        id: "ps1",
        title: "States of Matter",
        body: `
          <p>Matter is anything that has mass and takes up space.</p>
          <p>The three main states are <strong>solid</strong>, <strong>liquid</strong>, and <strong>gas</strong>.</p>
        `,
        quiz: [
          {
            q: "Matter is:",
            options: [
              "Only air",
              "Anything that has mass and takes up space",
              "Only water",
              "Only solids"
            ],
            answer: 1
          },
          {
            q: "Water as ice is a:",
            options: ["Solid", "Liquid", "Gas", "Sound"],
            answer: 0
          },
          {
            q: "Water vapor is:",
            options: ["Solid", "Liquid", "Gas", "Rock"],
            answer: 2
          }
        ]
      },
      {
        id: "ps2",
        title: "Forces & Motion",
        body: `
          <p>A <strong>force</strong> is a push or a pull.</p>
          <p>Forces can change an object’s speed or direction.</p>
        `,
        quiz: [
          {
            q: "A force is:",
            options: [
              "A color",
              "A push or a pull",
              "A sound",
              "A shape"
            ],
            answer: 1
          },
          {
            q: "Forces can change:",
            options: [
              "An object’s speed or direction",
              "The weather",
              "The time of day",
              "The calendar"
            ],
            answer: 0
          },
          {
            q: "Which is a force?",
            options: ["Thinking", "Sleeping", "Pushing a box", "Smelling"],
            answer: 2
          }
        ]
      }
    ]
  },

  earthScience: {
    label: "Earth Science",
    group: "Science",
    lessons: [
      {
        id: "es1",
        title: "Weather & Climate",
        body: `
          <p><strong>Weather</strong> is what the air is like today.</p>
          <p><strong>Climate</strong> is the usual weather in a place over a long time.</p>
        `,
        quiz: [
          {
            q: "Weather describes:",
            options: [
              "The usual pattern over many years",
              "What the air is like right now",
              "Only temperature",
              "Only clouds"
            ],
            answer: 1
          },
          {
            q: "Climate describes:",
            options: [
              "Today’s rain",
              "Tomorrow’s forecast",
              "Usual weather over many years",
              "Only wind"
            ],
            answer: 2
          },
          {
            q: "A place with hot, rainy weather most of the year has a:",
            options: ["Desert climate", "Polar climate", "Tropical climate", "Mountain climate"],
            answer: 2
          }
        ]
      },
      {
        id: "es2",
        title: "Earth’s Resources",
        body: `
          <p><strong>Natural resources</strong> are things we use from Earth, like water, soil, and trees.</p>
          <p>Some resources can be renewed, and some cannot.</p>
        `,
        quiz: [
          {
            q: "Which is a natural resource?",
            options: ["Plastic toy", "Water", "Computer", "Car"],
            answer: 1
          },
          {
            q: "Trees can be:",
            options: ["Natural resources", "Planets", "Machines", "Rocks"],
            answer: 0
          },
          {
            q: "Which resource cannot be replaced quickly?",
            options: ["Sunlight", "Wind", "Coal", "Rain"],
            answer: 2
          }
        ]
      }
    ]
  },

  // ============================
  // SOCIAL STUDIES
  // ============================

  communities: {
    label: "Communities",
    group: "Social Studies",
    lessons: [
      {
        id: "c1",
        title: "Types of Communities",
        body: `
          <p>There are <strong>urban</strong>, <strong>suburban</strong>, and <strong>rural</strong> communities.</p>
          <p>Each type has different buildings, jobs, and ways of living.</p>
        `,
        quiz: [
          {
            q: "An urban community is:",
            options: [
              "In the countryside",
              "A small town",
              "A big city",
              "A farm"
            ],
            answer: 2
          },
          {
            q: "A rural community usually has:",
            options: [
              "Skyscrapers",
              "Farms and open land",
              "Subways",
              "Crowded streets"
            ],
            answer: 1
          },
          {
            q: "A suburban community is:",
            options: [
              "In the ocean",
              "Near a city with houses and schools",
              "On a mountain top",
              "Only farms"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "c2",
        title: "Community Helpers",
        body: `
          <p>Community helpers are people whose jobs keep us safe and healthy.</p>
          <p>Examples include firefighters, doctors, teachers, and police officers.</p>
        `,
        quiz: [
          {
            q: "Which is a community helper?",
            options: ["Firefighter", "Dragon", "Robot", "Cartoon character"],
            answer: 0
          },
          {
            q: "Teachers help by:",
            options: [
              "Fixing cars",
              "Growing crops",
              "Helping students learn",
              "Putting out fires"
            ],
            answer: 2
          },
          {
            q: "Doctors help the community by:",
            options: [
              "Building roads",
              "Caring for people’s health",
              "Delivering mail",
              "Teaching math"
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  geography: {
    label: "Geography",
    group: "Social Studies",
    lessons: [
      {
        id: "geoSS1",
        title: "Maps & Globes",
        body: `
          <p>A <strong>map</strong> is a flat drawing of a place.</p>
          <p>A <strong>globe</strong> is a model of Earth.</p>
        `,
        quiz: [
          {
            q: "A map is:",
            options: [
              "A flat drawing of a place",
              "A 3D model of Earth",
              "A kind of weather",
              "A type of plant"
            ],
            answer: 0
          },
          {
            q: "A globe is:",
            options: [
              "A flat picture",
              "A model of Earth",
              "A kind of rock",
              "A type of animal"
            ],
            answer: 1
          },
          {
            q: "Which tool shows directions like north, south, east, and west?",
            options: ["Ruler", "Compass rose", "Thermometer", "Clock"],
            answer: 1
          }
        ]
      },
      {
        id: "geoSS2",
        title: "Landforms",
        body: `
          <p><strong>Landforms</strong> are shapes on Earth’s surface, like mountains, valleys, and plains.</p>
        `,
        quiz: [
          {
            q: "Which is a landform?",
            options: ["Mountain", "Airplane", "Pencil", "Computer"],
            answer: 0
          },
          {
            q: "A valley is:",
            options: [
              "A tall, steep landform",
              "A low area between hills or mountains",
              "A large body of water",
              "A flat, high area"
            ],
            answer: 1
          },
          {
            q: "Plains are:",
            options: [
              "Flat areas of land",
              "Very tall mountains",
              "Deep oceans",
              "Underground caves"
            ],
            answer: 0
          }
        ]
      }
    ]
  }

}; // END g3Subjects
// ===============================
//  CHUNK 2: RENDERING ENGINE
// ===============================

// DOM references
const g3SubjectList = document.getElementById("g3-subject-list");
const g3LessonCard = document.getElementById("g3-lesson-card");
const g3LessonTitle = document.getElementById("g3-lesson-title");
const g3LessonBody = document.getElementById("g3-lesson-body");
const g3StartQuizBtn = document.getElementById("g3-start-quiz-btn");

const g3QuizCard = document.getElementById("g3-quiz-card");
const g3QuizTitle = document.getElementById("g3-quiz-title");
const g3QuizBody = document.getElementById("g3-quiz-body");

const g3ProgressFill = document.getElementById("g3-progress-fill");
const g3ProgressPercent = document.getElementById("g3-progress-percent");

// Internal state
let g3CurrentSubject = null;
let g3CurrentLesson = null;
let g3CurrentQuiz = null;

// ===============================
//  SIDEBAR RENDERING
// ===============================

function renderSubjectList() {
  g3SubjectList.innerHTML = "";

  Object.entries(g3Subjects).forEach(([key, subject]) => {
    const completed = getLessonCompletionCount(key);
    const total = subject.lessons.length;

    const btn = document.createElement("button");
    btn.className = "g3-subject-btn";
    btn.innerHTML = `
      <span>${subject.label}</span>
      <span class="g3-subject-meta">${completed}/${total}</span>
    `;

    btn.onclick = () => selectSubject(key);

    g3SubjectList.appendChild(btn);
  });
}

function selectSubject(subjectKey) {
  g3CurrentSubject = subjectKey;
  g3CurrentLesson = null;

  // highlight active button
  [...g3SubjectList.children].forEach(btn => btn.classList.remove("active"));
  const idx = Object.keys(g3Subjects).indexOf(subjectKey);
  g3SubjectList.children[idx].classList.add("active");

  renderLessonList();
}

// ===============================
//  LESSON LIST + LESSON RENDERING
// ===============================

function renderLessonList() {
  const subject = g3Subjects[g3CurrentSubject];
  g3LessonTitle.textContent = subject.label;
  g3LessonBody.innerHTML = `
    <p>Select a lesson below:</p>
    <ul>
      ${subject.lessons
        .map(
          (lesson, i) => `
        <li style="margin-bottom:6px;">
          <button class="g3-secondary-btn" onclick="openLesson(${i})">
            ${lesson.title}
          </button>
        </li>
      `
        )
        .join("")}
    </ul>
  `;

  g3StartQuizBtn.style.display = "none";
  g3QuizCard.style.display = "none";
  g3LessonCard.style.display = "block";
}

function openLesson(index) {
  const subject = g3Subjects[g3CurrentSubject];
  const lesson = subject.lessons[index];

  g3CurrentLesson = index;
  g3CurrentQuiz = lesson.quiz;

  g3LessonTitle.textContent = lesson.title;
  g3LessonBody.innerHTML = lesson.body;

  g3StartQuizBtn.style.display = "inline-flex";
  g3QuizCard.style.display = "none";
  g3LessonCard.style.display = "block";
}

// ===============================
//  QUIZ RENDERING
// ===============================

function startQuiz() {
  const subject = g3Subjects[g3CurrentSubject];
  const lesson = subject.lessons[g3CurrentLesson];

  g3QuizTitle.textContent = `${lesson.title} — Quiz`;

  g3QuizBody.innerHTML = lesson.quiz
    .map(
      (q, i) => `
      <div class="g3-quiz-question">
        <div class="g3-quiz-question-title">${i + 1}. ${q.q}</div>
        <div class="g3-quiz-options">
          ${q.options
            .map(
              (opt, j) => `
            <label class="g3-quiz-option">
              <input type="radio" name="q${i}" value="${j}">
              ${opt}
            </label>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  g3LessonCard.style.display = "none";
  g3QuizCard.style.display = "block";
}

function backToLesson() {
  g3QuizCard.style.display = "none";
  g3LessonCard.style.display = "block";
}

// ===============================
//  QUIZ SUBMISSION
// ===============================

function submitQuiz() {
  const lesson = g3Subjects[g3CurrentSubject].lessons[g3CurrentLesson];
  const quiz = lesson.quiz;

  let correct = 0;

  quiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && Number(selected.value) === q.answer) {
      correct++;
    }
  });

  if (correct === quiz.length) {
    markLessonComplete(g3CurrentSubject, g3CurrentLesson);
    triggerSparkles();
    updateProgressUI();
    alert("Perfect! Lesson complete.");
  } else {
    alert("Keep trying! You can do it.");
  }
}
// ===============================
//  CHUNK 3: PROGRESS + SPARKLES + GRADUATION
// ===============================

// ===============================
//  PROGRESS TRACKING
// ===============================

function getStoredProgress() {
  const raw = localStorage.getItem("g3Progress");
  return raw ? JSON.parse(raw) : {};
}

function saveProgress(data) {
  localStorage.setItem("g3Progress", JSON.stringify(data));
}

function markLessonComplete(subjectKey, lessonIndex) {
  const progress = getStoredProgress();

  if (!progress[subjectKey]) {
    progress[subjectKey] = {};
  }

  progress[subjectKey][lessonIndex] = true;
  saveProgress(progress);

  checkForGraduation();
}

function getLessonCompletionCount(subjectKey) {
  const progress = getStoredProgress();
  const subject = g3Subjects[subjectKey];

  if (!progress[subjectKey]) return 0;

  return Object.values(progress[subjectKey]).filter(Boolean).length;
}

function getTotalCompletionPercent() {
  const progress = getStoredProgress();
  let completed = 0;
  let total = 0;

  Object.entries(g3Subjects).forEach(([key, subject]) => {
    subject.lessons.forEach((_, i) => {
      total++;
      if (progress[key] && progress[key][i]) {
        completed++;
      }
    });
  });

  return Math.round((completed / total) * 100);
}

function updateProgressUI() {
  const percent = getTotalCompletionPercent();
  g3ProgressFill.style.width = percent + "%";
  g3ProgressPercent.textContent = percent + "%";
}

// ===============================
//  SPARKLES
// ===============================

function triggerSparkles() {
  const layer = document.querySelector(".g3-sparkles-layer");
  if (!layer) return;

  for (let i = 0; i < 12; i++) {
    const s = document.createElement("div");
    s.className = "g3-sparkle";
    s.textContent = "✨";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    layer.appendChild(s);

    setTimeout(() => s.remove(), 700);
  }
}

// ===============================
//  GRADUATION MODAL
// ===============================

function checkForGraduation() {
  const percent = getTotalCompletionPercent();
  if (percent === 100) {
    showGraduationModal();
  }
}

function showGraduationModal() {
  const overlay = document.getElementById("g3-grad-overlay");
  const modal = document.getElementById("g3-grad-modal");

  if (!overlay || !modal) return;

  overlay.style.display = "flex";
}

function closeGraduationModal() {
  const overlay = document.getElementById("g3-grad-overlay");
  if (overlay) overlay.style.display = "none";
}

// ===============================
//  GATE UNLOCK → YOUTUBE
// ===============================

const g3GateBtn = document.getElementById("youtube-btn");
if (g3GateBtn) {
  g3GateBtn.onclick = () => {
    const percent = getTotalCompletionPercent();
    if (percent === 100) {
      window.location.href = "https://www.youtube.com";
    } else {
      alert("Finish all Grade 3 lessons to unlock the Gate!");
    }
  };
}

// ===============================
//  HOME NAVIGATION
// ===============================

const g3HomeBtn = document.getElementById("g3-home-btn");
if (g3HomeBtn) {
  g3HomeBtn.onclick = () => {
    window.location.href = "../arcade/index.html";
  };
}

// ===============================
//  INITIALIZATION
// ===============================

function initGrade3() {
  renderSubjectList();
  updateProgressUI();
}

initGrade3();

