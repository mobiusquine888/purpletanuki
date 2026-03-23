// ===============================
// GRADE 6 — CURRICULUM DATA
// ===============================

const g6Subjects = {

  // -------------------------------
  // READING & WRITING
  // -------------------------------
  reading: {
    displayName: "Reading & Writing",
    lessons: [

      {
        id: 1,
        title: "Citing Textual Evidence",
        lessonHtml: `
          <p>Good readers support their ideas with <strong>textual evidence</strong>.</p>
          <p>This means quoting or paraphrasing details from the text.</p>
          <p>Example: “The author states that Maya practiced every day, showing her determination.”</p>
        `,
        questions: [
          {
            prompt: "What is textual evidence?",
            choices: [
              "Details from the text that support your answer",
              "Your personal opinion",
              "A random sentence"
            ],
            correct: "Details from the text that support your answer"
          },
          {
            prompt: "Which is textual evidence?",
            choices: [
              "\"He checked the map twice before leaving.\"",
              "I think he was careful.",
              "Maps are useful."
            ],
            correct: "\"He checked the map twice before leaving.\""
          },
          {
            prompt: "Why do we use evidence?",
            choices: [
              "To support our ideas",
              "To make the story longer",
              "To confuse the reader"
            ],
            correct: "To support our ideas"
          }
        ]
      },

      {
        id: 2,
        title: "Analyzing Point of View",
        lessonHtml: `
          <p><strong>Point of view</strong> is the perspective from which a story is told.</p>
          <p>First person uses “I.” Third person uses “he,” “she,” or “they.”</p>
        `,
        questions: [
          {
            prompt: "Which sentence is first person?",
            choices: [
              "I walked to the store.",
              "She walked to the store.",
              "They walked to the store."
            ],
            correct: "I walked to the store."
          },
          {
            prompt: "Which is third person?",
            choices: [
              "He opened the door.",
              "I opened the door.",
              "We opened the door."
            ],
            correct: "He opened the door."
          },
          {
            prompt: "Point of view means:",
            choices: [
              "Who is telling the story",
              "Where the story takes place",
              "How long the story is"
            ],
            correct: "Who is telling the story"
          }
        ]
      },

      {
        id: 3,
        title: "Writing Arguments",
        lessonHtml: `
          <p><strong>Argument writing</strong> uses claims, reasons, and evidence.</p>
          <p>A <strong>claim</strong> is your main point. <strong>Reasons</strong> explain why. <strong>Evidence</strong> supports it.</p>
        `,
        questions: [
          {
            prompt: "Which is a claim?",
            choices: [
              "School lunches should be healthier.",
              "Lunch is at noon.",
              "Some students bring snacks."
            ],
            correct: "School lunches should be healthier."
          },
          {
            prompt: "Which is evidence?",
            choices: [
              "\"Studies show healthier lunches improve focus.\"",
              "I like healthy food.",
              "Lunch is important."
            ],
            correct: "\"Studies show healthier lunches improve focus.\""
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
        title: "Ratios & Unit Rates",
        lessonHtml: `
          <p>A <strong>ratio</strong> compares two quantities.</p>
          <p>A <strong>unit rate</strong> is a rate with a denominator of 1.</p>
          <p>Example: 150 miles in 3 hours → 50 miles per hour.</p>
        `,
        questions: [
          {
            prompt: "What is the unit rate for 12 apples for $6?",
            choices: ["$0.50 per apple", "$2 per apple", "$6 per apple"],
            correct: "$0.50 per apple"
          },
          {
            prompt: "A ratio compares:",
            choices: ["Two quantities", "Only shapes", "Only decimals"],
            correct: "Two quantities"
          },
          {
            prompt: "If 8 notebooks cost $16, the unit rate is:",
            choices: ["$2 each", "$4 each", "$1 each"],
            correct: "$2 each"
          }
        ]
      },

      {
        id: 2,
        title: "Expressions & Variables",
        lessonHtml: `
          <p>A <strong>variable</strong> is a letter that represents a number.</p>
          <p>An <strong>expression</strong> is a math phrase without an equals sign.</p>
        `,
        questions: [
          {
            prompt: "Which is an expression?",
            choices: ["3x + 5", "3x = 5", "x > 5"],
            correct: "3x + 5"
          },
          {
            prompt: "In 4n, n is the:",
            choices: ["Variable", "Answer", "Exponent"],
            correct: "Variable"
          },
          {
            prompt: "Which expression means “5 more than a number x”?",
            choices: ["x + 5", "5x", "x − 5"],
            correct: "x + 5"
          }
        ]
      },

      {
        id: 3,
        title: "Area of Triangles",
        lessonHtml: `
          <p>The area of a triangle is:</p>
          <p><strong>Area = 1/2 × base × height</strong></p>
        `,
        questions: [
          {
            prompt: "A triangle has base 10 and height 6. Area?",
            choices: ["30", "60", "16"],
            correct: "30"
          },
          {
            prompt: "Area formula is:",
            choices: [
              "1/2 × base × height",
              "base × height",
              "base + height"
            ],
            correct: "1/2 × base × height"
          },
          {
            prompt: "If base doubles, area:",
            choices: ["Doubles", "Stays the same", "Is cut in half"],
            correct: "Doubles"
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
        title: "Cells & Organisms",
        lessonHtml: `
          <p>All living things are made of <strong>cells</strong>.</p>
          <p>Cells form tissues, tissues form organs, and organs form systems.</p>
        `,
        questions: [
          {
            prompt: "Cells are the:",
            choices: ["Basic unit of life", "Largest part of Earth", "Same as atoms"],
            correct: "Basic unit of life"
          },
          {
            prompt: "Organs working together form:",
            choices: ["Organ systems", "Atoms", "Ecosystems"],
            correct: "Organ systems"
          },
          {
            prompt: "Which is made of cells?",
            choices: ["A leaf", "A rock", "Light"],
            correct: "A leaf"
          }
        ]
      },

      {
        id: 2,
        title: "Energy Transfer",
        lessonHtml: `
          <p>Energy moves through ecosystems in food chains and food webs.</p>
          <p>Producers → consumers → decomposers.</p>
        `,
        questions: [
          {
            prompt: "Which is a producer?",
            choices: ["Plant", "Wolf", "Mushroom"],
            correct: "Plant"
          },
          {
            prompt: "Which is a decomposer?",
            choices: ["Fungus", "Rabbit", "Hawk"],
            correct: "Fungus"
          },
          {
            prompt: "Energy in most ecosystems starts with:",
            choices: ["The sun", "The moon", "Wind"],
            correct: "The sun"
          }
        ]
      },

      {
        id: 3,
        title: "Earth’s Weather Patterns",
        lessonHtml: `
          <p>Weather is influenced by temperature, air pressure, humidity, and wind.</p>
          <p>Climate describes long‑term patterns in a region.</p>
        `,
        questions: [
          {
            prompt: "Weather describes:",
            choices: ["Daily conditions", "Long‑term patterns", "Only temperature"],
            correct: "Daily conditions"
          },
          {
            prompt: "Climate describes:",
            choices: ["Long‑term patterns", "Today’s forecast", "Only rainfall"],
            correct: "Long‑term patterns"
          },
          {
            prompt: "Which affects weather?",
            choices: ["Air pressure", "Moon phases", "Soil color"],
            correct: "Air pressure"
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
        title: "Ancient Civilizations",
        lessonHtml: `
          <p>Ancient civilizations like Egypt, Mesopotamia, China, and Greece developed writing, laws, and governments.</p>
        `,
        questions: [
          {
            prompt: "Which civilization built pyramids?",
            choices: ["Egypt", "Greece", "China"],
            correct: "Egypt"
          },
          {
            prompt: "Mesopotamia is known for:",
            choices: ["The first writing system", "The Great Wall", "Democracy"],
            correct: "The first writing system"
          },
          {
            prompt: "Ancient Greece is known for:",
            choices: ["Democracy", "Pyramids", "Cuneiform"],
            correct: "Democracy"
          }
        ]
      },

      {
        id: 2,
        title: "Economics & Trade",
        lessonHtml: `
          <p>Economics studies how people use resources.</p>
          <p>Trade happens when people exchange goods or services.</p>
        `,
        questions: [
          {
            prompt: "Trade is:",
            choices: ["Exchanging goods", "Growing plants", "Voting"],
            correct: "Exchanging goods"
          },
          {
            prompt: "A resource is:",
            choices: ["Something useful", "A holiday", "A law"],
            correct: "Something useful"
          },
          {
            prompt: "Money is used to:",
            choices: ["Buy goods", "Grow plants", "Predict weather"],
            correct: "Buy goods"
          }
        ]
      },

      {
        id: 3,
        title: "Geography & Maps",
        lessonHtml: `
          <p>Maps show physical features, political boundaries, and climate zones.</p>
        `,
        questions: [
          {
            prompt: "A physical map shows:",
            choices: ["Mountains and rivers", "Population", "Trade routes"],
            correct: "Mountains and rivers"
          },
          {
            prompt: "A political map shows:",
            choices: ["Countries and borders", "Weather", "Elevation"],
            correct: "Countries and borders"
          },
          {
            prompt: "Climate maps show:",
            choices: ["Temperature and rainfall", "Roads", "Capitals"],
            correct: "Temperature and rainfall"
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
        title: "Algebraic Thinking",
        lessonHtml: `
          <p>We can solve equations by doing the same operation to both sides.</p>
          <p>Example: x + 4 = 10 → x = 6.</p>
        `,
        questions: [
          {
            prompt: "Solve: x + 5 = 12",
            choices: ["7", "5", "17"],
            correct: "7"
          },
          {
            prompt: "Solve: 3x = 15",
            choices: ["5", "3", "12"],
            correct: "5"
          },
          {
            prompt: "Solve: x − 9 = 1",
            choices: ["10", "8", "9"],
            correct: "10"
          }
        ]
      },

      {
        id: 2,
        title: "Logic Statements",
        lessonHtml: `
          <p>Logical statements can be true or false based on definitions and facts.</p>
        `,
        questions: [
          {
            prompt: "All prime numbers are odd.",
            choices: ["False", "True
