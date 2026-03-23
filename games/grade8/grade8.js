// ===============================
// GRADE 8 — CURRICULUM DATA
// ===============================

const g8Subjects = {

  // -------------------------------
  // READING & WRITING
  // -------------------------------
  reading: {
    displayName: "Reading & Writing",
    lessons: [

      {
        id: 1,
        title: "Evaluating Arguments",
        lessonHtml: `
          <p>Strong arguments use logical reasoning and relevant evidence.</p>
          <p>Weak arguments rely on emotional appeals or unrelated details.</p>
        `,
        questions: [
          {
            prompt: "Which is strong evidence?",
            choices: [
              "\"A study of 2,000 students found improved scores.\"",
              "I feel this is true.",
              "Everyone knows this."
            ],
            correct: "\"A study of 2,000 students found improved scores.\""
          },
          {
            prompt: "A weak argument often uses:",
            choices: ["Emotional appeals", "Facts", "Statistics"],
            correct: "Emotional appeals"
          },
          {
            prompt: "Evaluating arguments means checking:",
            choices: [
              "Reasoning and evidence",
              "Only the title",
              "Only the length"
            ],
            correct: "Reasoning and evidence"
          }
        ]
      },

      {
        id: 2,
        title: "Analyzing Theme Across Texts",
        lessonHtml: `
          <p>Different texts can share similar themes, such as perseverance or justice.</p>
          <p>We compare how authors develop these themes.</p>
        `,
        questions: [
          {
            prompt: "A theme is:",
            choices: ["A message about life", "A character's name", "A setting detail"],
            correct: "A message about life"
          },
          {
            prompt: "Two stories about overcoming fear share the theme of:",
            choices: ["Courage", "Weather", "Friendship"],
            correct: "Courage"
          },
          {
            prompt: "Comparing themes means:",
            choices: [
              "Seeing how authors develop similar ideas",
              "Counting pages",
              "Checking spelling"
            ],
            correct: "Seeing how authors develop similar ideas"
          }
        ]
      },

      {
        id: 3,
        title: "Writing Research Summaries",
        lessonHtml: `
          <p>Research writing uses credible sources, paraphrasing, and citations.</p>
          <p>A summary includes only the most important ideas.</p>
        `,
        questions: [
          {
            prompt: "A credible source is:",
            choices: ["Reliable and accurate", "Random", "Unverified"],
            correct: "Reliable and accurate"
          },
          {
            prompt: "Paraphrasing means:",
            choices: [
              "Putting information in your own words",
              "Copying exactly",
              "Making up facts"
            ],
            correct: "Putting information in your own words"
          },
          {
            prompt: "A research summary should include:",
            choices: ["Key ideas only", "Every detail", "Personal opinions"],
            correct: "Key ideas only"
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
        title: "Linear Equations",
        lessonHtml: `
          <p>A linear equation has the form <strong>y = mx + b</strong>.</p>
          <p>m is the slope; b is the y‑intercept.</p>
        `,
        questions: [
          {
            prompt: "In y = 3x + 2, the slope is:",
            choices: ["3", "2", "x"],
            correct: "3"
          },
          {
            prompt: "The y‑intercept is:",
            choices: ["Where the line crosses the y‑axis", "The steepness", "The x‑value"],
            correct: "Where the line crosses the y‑axis"
          },
          {
            prompt: "Which is a linear equation?",
            choices: ["y = 4x − 1", "y = x²", "xy = 10"],
            correct: "y = 4x − 1"
          }
        ]
      },

      {
        id: 2,
        title: "Systems of Equations",
        lessonHtml: `
          <p>A system of equations has two or more equations with the same variables.</p>
          <p>The solution is the point where the lines intersect.</p>
        `,
        questions: [
          {
            prompt: "The solution to a system is:",
            choices: ["The intersection point", "The slope", "The y‑intercept"],
            correct: "The intersection point"
          },
          {
            prompt: "If two lines never meet, the system is:",
            choices: ["No solution", "One solution", "Infinite solutions"],
            correct: "No solution"
          },
          {
            prompt: "If two lines overlap completely:",
            choices: ["Infinite solutions", "No solution", "One solution"],
            correct: "Infinite solutions"
          }
        ]
      },

      {
        id: 3,
        title: "Pythagorean Theorem",
        lessonHtml: `
          <p>In a right triangle: <strong>a² + b² = c²</strong>.</p>
          <p>c is the hypotenuse.</p>
        `,
        questions: [
          {
            prompt: "If a = 3 and b = 4, c = ?",
            choices: ["5", "6", "7"],
            correct: "5"
          },
          {
            prompt: "The hypotenuse is:",
            choices: ["The longest side", "The shortest side", "Any side"],
            correct: "The longest side"
          },
          {
            prompt: "Which formula is correct?",
            choices: ["a² + b² = c²", "a + b = c", "ab = c"],
            correct: "a² + b² = c²"
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
        title: "Genetics & Heredity",
        lessonHtml: `
          <p>Traits are passed from parents to offspring through genes.</p>
          <p>Dominant alleles mask recessive ones.</p>
        `,
        questions: [
          {
            prompt: "Genes carry:",
            choices: ["Traits", "Weather", "Energy"],
            correct: "Traits"
          },
          {
            prompt: "A dominant allele:",
            choices: ["Masks a recessive allele", "Is always harmful", "Is random"],
            correct: "Masks a recessive allele"
          },
          {
            prompt: "Offspring inherit traits from:",
            choices: ["Parents", "Clouds", "Rocks"],
            correct: "Parents"
          }
        ]
      },

      {
        id: 2,
        title: "Chemical Reactions",
        lessonHtml: `
          <p>In a chemical reaction, atoms rearrange to form new substances.</p>
          <p>Mass is conserved.</p>
        `,
        questions: [
          {
            prompt: "Chemical reactions form:",
            choices: ["New substances", "The same substances", "Only gases"],
            correct: "New substances"
          },
          {
            prompt: "Mass in a reaction:",
            choices: ["Stays the same", "Disappears", "Doubles"],
            correct: "Stays the same"
          },
          {
            prompt: "Atoms in a reaction:",
            choices: ["Rearrange", "Vanish", "Multiply randomly"],
            correct: "Rearrange"
          }
        ]
      },

      {
        id: 3,
        title: "Earth’s History",
        lessonHtml: `
          <p>Fossils, rock layers, and radiometric dating help scientists understand Earth’s past.</p>
        `,
        questions: [
          {
            prompt: "Fossils provide evidence of:",
            choices: ["Past life", "Future weather", "Gravity"],
            correct: "Past life"
          },
          {
            prompt: "Older rock layers are found:",
            choices: ["Below younger layers", "Above younger layers", "Randomly"],
            correct: "Below younger layers"
          },
          {
            prompt: "Radiometric dating measures:",
            choices: ["Age of rocks", "Temperature", "Wind speed"],
            correct: "Age of rocks"
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
        title: "American Government",
        lessonHtml: `
          <p>The Constitution establishes federalism, separation of powers, and checks and balances.</p>
        `,
        questions: [
          {
            prompt: "Separation of powers divides government into:",
            choices: ["Three branches", "Two houses", "One leader"],
            correct: "Three branches"
          },
          {
            prompt: "Checks and balances:",
            choices: [
              "Limit each branch’s power",
              "Remove all power",
              "Only apply to states"
            ],
            correct: "Limit each branch’s power"
          },
          {
            prompt: "Federalism divides power between:",
            choices: ["National and state governments", "Two presidents", "Courts only"],
            correct: "National and state governments"
          }
        ]
      },

      {
        id: 2,
        title: "Industrialization & Reform",
        lessonHtml: `
          <p>The Industrial Revolution transformed economies with machines, factories, and urbanization.</p>
        `,
        questions: [
          {
            prompt: "Industrialization led to:",
            choices: ["Urban growth", "Fewer cities", "No factories"],
            correct: "Urban growth"
          },
          {
            prompt: "Factories increased:",
            choices: ["Production", "Farming only", "Travel time"],
            correct: "Production"
          },
          {
            prompt: "Reform movements aimed to:",
            choices: ["Improve society", "Stop trade", "End cities"],
            correct: "Improve society"
          }
        ]
      },

      {
        id: 3,
        title: "Global Interdependence",
        lessonHtml: `
          <p>Countries depend on each other for trade, resources, and technology.</p>
        `,
        questions: [
          {
            prompt: "Interdependence means:",
            choices: ["Countries rely on each other", "Countries are isolated", "Countries never trade"],
            correct: "Countries rely on each other"
          },
          {
            prompt: "Trade allows countries to:",
            choices: ["Get resources they lack", "Avoid cooperation", "Stop communication"],
            correct: "Get resources they lack"
          },
          {
            prompt: "Technology spreads through:",
            choices: ["Global connections", "Isolation", "Silence"],
            correct: "Global connections"
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
        title: "Functions & Mappings",
        lessonHtml: `
          <p>A function assigns each input exactly one output.</p>
          <p>Example: f(x) = 2x + 1.</p>
        `,
        questions: [
          {
            prompt: "A function gives:",
            choices: ["One output per input", "Many outputs", "Random results"],
            correct: "One output per input"
          },
          {
            prompt: "In f(x) = 3x, f(2) = ?",
            choices: ["6", "3", "5"],
            correct: "6"
          },
          {
            prompt: "Which is a function?",
            choices: ["Each x has one y", "Each x has many y’s", "No relationship"],
            correct: "Each x has one y"
          }
        ]
      },

      {
        id: 2,
        title: "Logical Fallacies",
        lessonHtml: `
          <p>Fallacies are errors in reasoning, such as strawman, slippery slope, or ad hominem.</p>
        `,
        questions: [
          {
            prompt: "An ad hominem attacks:",
            choices: ["A person", "The evidence", "The data"],
            correct: "A person"
          },
          {
            prompt: "A strawman fallacy:",
            choices: [
              "Misrepresents an argument",
              "Uses statistics",
              "Uses strong evidence"
            ],
            correct: "Misrepresents an argument"
          },
          {
            prompt: "Fallacies weaken:",
            choices: ["Arguments", "Math", "Maps"],
            correct: "Arguments"
          }
        ]
      },

      {
        id: 3,
        title: "Sequences & Growth",
        lessonHtml: `
          <p>Sequences can grow linearly (add) or exponentially (multiply).</p>
        `,
        questions: [
          {
            prompt: "What comes next? 5, 10, 20, 40, ?",
            choices: ["80", "45
