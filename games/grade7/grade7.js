// ===============================
// GRADE 7 — CURRICULUM DATA
// ===============================

const g7Subjects = {

  // -------------------------------
  // READING & WRITING
  // -------------------------------
  reading: {
    displayName: "Reading & Writing",
    lessons: [

      {
        id: 1,
        title: "Analyzing Arguments",
        lessonHtml: `
          <p>Arguments include a <strong>claim</strong>, <strong>reasons</strong>, and <strong>evidence</strong>.</p>
          <p>Strong evidence includes facts, statistics, and expert quotes.</p>
        `,
        questions: [
          {
            prompt: "Which is a claim?",
            choices: [
              "Schools should start later.",
              "School starts at 8 AM.",
              "Students walk to school."
            ],
            correct: "Schools should start later."
          },
          {
            prompt: "Which is strong evidence?",
            choices: [
              "\"Studies show later start times improve focus.\"",
              "I think mornings are hard.",
              "Students like sleeping in."
            ],
            correct: "\"Studies show later start times improve focus.\""
          },
          {
            prompt: "Arguments need:",
            choices: [
              "Claim, reasons, evidence",
              "Only opinions",
              "Only questions"
            ],
            correct: "Claim, reasons, evidence"
          }
        ]
      },

      {
        id: 2,
        title: "Central Idea & Summary",
        lessonHtml: `
          <p>The <strong>central idea</strong> is the most important point in a nonfiction text.</p>
          <p>A <strong>summary</strong> includes only key ideas, not opinions.</p>
        `,
        questions: [
          {
            prompt: "A summary should include:",
            choices: [
              "Key ideas only",
              "Every detail",
              "Your opinion"
            ],
            correct: "Key ideas only"
          },
          {
            prompt: "Which is a central idea?",
            choices: [
              "Climate change affects weather patterns.",
              "Weather is interesting.",
              "I like warm days."
            ],
            correct: "Climate change affects weather patterns."
          },
          {
            prompt: "A summary should be:",
            choices: [
              "Short and objective",
              "Long and detailed",
              "Funny and personal"
            ],
            correct: "Short and objective"
          }
        ]
      },

      {
        id: 3,
        title: "Writing Informational Texts",
        lessonHtml: `
          <p>Informational writing explains a topic using facts, definitions, and examples.</p>
          <p>Good writing uses clear structure and transitions.</p>
        `,
        questions: [
          {
            prompt: "Informational writing should be:",
            choices: [
              "Factual and clear",
              "Opinion‑based",
              "Random and emotional"
            ],
            correct: "Factual and clear"
          },
          {
            prompt: "Which is a transition word?",
            choices: ["However", "Pizza", "Fast"],
            correct: "However"
          },
          {
            prompt: "Informational writing includes:",
            choices: [
              "Facts and examples",
              "Only jokes",
              "Only dialogue"
            ],
            correct: "Facts and examples"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // MATH
  // -------------------------------
  math: {
    displayName: "Math",
    lessons: [

      {
        id: 1,
        title: "Proportional Relationships",
        lessonHtml: `
          <p>A <strong>proportional relationship</strong> has a constant ratio between two quantities.</p>
          <p>Example: If 3 hours → 150 miles, then 1 hour → 50 miles.</p>
        `,
        questions: [
          {
            prompt: "If 4 notebooks cost $12, what is the unit rate?",
            choices: ["$3 each", "$4 each", "$2 each"],
            correct: "$3 each"
          },
          {
            prompt: "A proportional relationship has:",
            choices: [
              "A constant ratio",
              "Random values",
              "No pattern"
            ],
            correct: "A constant ratio"
          },
          {
            prompt: "If 10 apples cost $5, cost per apple?",
            choices: ["$0.50", "$1", "$2"],
            correct: "$0.50"
          }
        ]
      },

      {
        id: 2,
        title: "Solving Equations",
        lessonHtml: `
          <p>To solve an equation, do the <strong>inverse operation</strong> to isolate the variable.</p>
          <p>Example: x − 7 = 12 → x = 19.</p>
        `,
        questions: [
          {
            prompt: "Solve: x + 9 = 20",
            choices: ["11", "29", "9"],
            correct: "11"
          },
          {
            prompt: "Solve: 5x = 30",
            choices: ["6", "5", "25"],
            correct: "6"
          },
          {
            prompt: "Solve: x − 4 = 3",
            choices: ["7", "1", "4"],
            correct: "7"
          }
        ]
      },

      {
        id: 3,
        title: "Area of Circles",
        lessonHtml: `
          <p>The area of a circle is:</p>
          <p><strong>A = πr²</strong></p>
        `,
        questions: [
          {
            prompt: "Circle with radius 3: area?",
            choices: ["9π", "6π", "3π"],
            correct: "9π"
          },
          {
            prompt: "Formula for area of a circle?",
            choices: ["πr²", "2πr", "r²"],
            correct: "πr²"
          },
          {
            prompt: "If radius doubles, area:",
            choices: ["Quadruples", "Doubles", "Stays same"],
            correct: "Quadruples"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // SCIENCE
  // -------------------------------
  science: {
    displayName: "Science",
    lessons: [

      {
        id: 1,
        title: "Cells & Body Systems",
        lessonHtml: `
          <p>Cells form tissues, tissues form organs, and organs form systems.</p>
          <p>Systems work together to keep the body functioning.</p>
        `,
        questions: [
          {
            prompt: "Cells form:",
            choices: ["Tissues", "Planets", "Ecosystems"],
            correct: "Tissues"
          },
          {
            prompt: "Organs working together form:",
            choices: ["Systems", "Atoms", "Clouds"],
            correct: "Systems"
          },
          {
            prompt: "Which is a body system?",
            choices: ["Digestive system", "Rock cycle", "Water cycle"],
            correct: "Digestive system"
          }
        ]
      },

      {
        id: 2,
        title: "Forces & Motion",
        lessonHtml: `
          <p>Motion is affected by forces like gravity and friction.</p>
          <p>Newton’s laws describe how forces change motion.</p>
        `,
        questions: [
          {
            prompt: "Which force pulls objects downward?",
            choices: ["Gravity", "Friction", "Magnetism"],
            correct: "Gravity"
          },
          {
            prompt: "Friction:",
            choices: [
              "Slows motion",
              "Speeds motion",
              "Has no effect"
            ],
            correct: "Slows motion"
          },
          {
            prompt: "Newton’s laws describe:",
            choices: ["Motion", "Weather", "Cells"],
            correct: "Motion"
          }
        ]
      },

      {
        id: 3,
        title: "Earth’s Resources",
        lessonHtml: `
          <p>Natural resources include renewable (solar, wind) and nonrenewable (coal, oil) materials.</p>
        `,
        questions: [
          {
            prompt: "Which is renewable?",
            choices: ["Solar energy", "Coal", "Oil"],
            correct: "Solar energy"
          },
          {
            prompt: "Which is nonrenewable?",
            choices: ["Oil", "Wind", "Sunlight"],
            correct: "Oil"
          },
          {
            prompt: "Resources are materials that:",
            choices: ["Humans use", "Only animals use", "Are imaginary"],
            correct: "Humans use"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // SOCIAL STUDIES
  // -------------------------------
  social: {
    displayName: "Social Studies",
    lessons: [

      {
        id: 1,
        title: "Medieval Civilizations",
        lessonHtml: `
          <p>Medieval societies included feudal Europe, Islamic empires, and dynasties in China.</p>
        `,
        questions: [
          {
            prompt: "Feudal Europe was based on:",
            choices: ["Lords and vassals", "Democracy", "City‑states"],
            correct: "Lords and vassals"
          },
          {
            prompt: "Islamic empires were known for advances in:",
            choices: ["Math and science", "Pyramids", "Feudalism"],
            correct: "Math and science"
          },
          {
            prompt: "China’s dynasties developed:",
            choices: ["Paper and printing", "Cuneiform", "Democracy"],
            correct: "Paper and printing"
          }
        ]
      },

      {
        id: 2,
        title: "Government & Citizenship",
        lessonHtml: `
          <p>Governments create laws, protect rights, and maintain order.</p>
          <p>Citizens participate by voting and staying informed.</p>
        `,
        questions: [
          {
            prompt: "Governments create:",
            choices: ["Laws", "Mountains", "Weather"],
            correct: "Laws"
          },
          {
            prompt: "Citizens participate by:",
            choices: ["Voting", "Ignoring issues", "Breaking laws"],
            correct: "Voting"
          },
          {
            prompt: "Rights include:",
            choices: ["Freedom of speech", "Unlimited power", "Ignoring laws"],
            correct: "Freedom of speech"
          }
        ]
      },

      {
        id: 3,
        title: "Geography & Human Movement",
        lessonHtml: `
          <p>People migrate for economic, political, and environmental reasons.</p>
        `,
        questions: [
          {
            prompt: "Migration means:",
            choices: ["Moving to a new place", "Staying forever", "Changing language"],
            correct: "Moving to a new place"
          },
          {
            prompt: "Which is a reason people migrate?",
            choices: ["Jobs", "Magic", "Randomness"],
            correct: "Jobs"
          },
          {
            prompt: "Environmental migration happens because of:",
            choices: ["Natural disasters", "Sports", "Fashion"],
            correct: "Natural disasters"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // LOGIC & PATTERNS
  // -------------------------------
  logic: {
    displayName: "Logic & Patterns",
    lessons: [

      {
        id: 1,
        title: "Solving Multi‑Step Equations",
        lessonHtml: `
          <p>To solve multi‑step equations, undo operations in reverse order.</p>
          <p>Example: 3x + 4 = 19 → 3x = 15 → x = 5.</p>
        `,
        questions: [
          {
            prompt: "Solve: 2x + 6 = 20",
            choices: ["7", "8", "6"],
            correct: "7"
          },
          {
            prompt: "Solve: 4x − 3 = 13",
            choices: ["4", "5", "3"],
            correct: "4"
          },
          {
            prompt: "Solve: 5x + 10 = 35",
            choices: ["5", "4", "6"],
            correct: "5"
          }
        ]
      },

      {
        id: 2,
        title: "Truth Values",
        lessonHtml: `
          <p>Logical statements can be true or false based on definitions and facts.</p>
        `,
        questions: [
          {
            prompt: "All squares are rectangles.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          },
          {
            prompt: "All rectangles are squares.",
            choices: ["False", "True", "Not sure"],
            correct: "False"
          },
          {
            prompt: "Prime numbers have exactly two factors.",
            choices: ["True", "False", "Not sure"],
            correct: "True"
          }
        ]
      },

      {
        id: 3,
        title: "Patterns & Sequences",
        lessonHtml: `
          <p>Sequences follow rules like adding, subtracting, or multiplying.</p>
        `,
        questions: [
          {
            prompt: "What comes next? 2, 6, 18, 54, ?",
