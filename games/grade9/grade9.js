// ===============================
// GRADE 9 — CURRICULUM DATA
// ===============================

const g9Subjects = {

  // -------------------------------
  // ENGLISH LANGUAGE ARTS
  // -------------------------------
  reading: {
    displayName: "English Language Arts",
    lessons: [

      {
        id: 1,
        title: "Analyzing Complex Characters",
        lessonHtml: `
          <p>High‑school literature often features <strong>complex characters</strong> with conflicting motivations.</p>
          <p>We analyze how their choices drive the plot and reveal themes.</p>
        `,
        questions: [
          {
            prompt: "A complex character is one who:",
            choices: [
              "Has conflicting motivations",
              "Never changes",
              "Is always perfect"
            ],
            correct: "Has conflicting motivations"
          },
          {
            prompt: "Character choices often:",
            choices: ["Drive the plot", "Have no effect", "Replace the narrator"],
            correct: "Drive the plot"
          },
          {
            prompt: "Analyzing characters helps reveal:",
            choices: ["Themes", "Only settings", "Only vocabulary"],
            correct: "Themes"
          }
        ]
      },

      {
        id: 2,
        title: "Rhetorical Appeals",
        lessonHtml: `
          <p>Writers use <strong>ethos</strong> (credibility), <strong>pathos</strong> (emotion), and <strong>logos</strong> (logic) to persuade.</p>
        `,
        questions: [
          {
            prompt: "Ethos appeals to:",
            choices: ["Credibility", "Emotion", "Logic"],
            correct: "Credibility"
          },
          {
            prompt: "Pathos appeals to:",
            choices: ["Emotion", "Facts", "Statistics"],
            correct: "Emotion"
          },
          {
            prompt: "Logos appeals to:",
            choices: ["Logic and evidence", "Authority", "Fear"],
            correct: "Logic and evidence"
          }
        ]
      },

      {
        id: 3,
        title: "Writing Literary Analysis",
        lessonHtml: `
          <p>Literary analysis explains how an author uses techniques like symbolism, tone, and imagery.</p>
          <p>Claims must be supported with textual evidence.</p>
        `,
        questions: [
          {
            prompt: "Symbolism is when:",
            choices: [
              "An object represents an idea",
              "A character speaks",
              "A plot twist happens"
            ],
            correct: "An object represents an idea"
          },
          {
            prompt: "A strong analysis uses:",
            choices: ["Textual evidence", "Only opinions", "Random quotes"],
            correct: "Textual evidence"
          },
          {
            prompt: "Tone refers to:",
            choices: ["Author’s attitude", "Plot events", "Character names"],
            correct: "Author’s attitude"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // ALGEBRA & GEOMETRY
  // -------------------------------
  math: {
    displayName: "Algebra & Geometry",
    lessons: [

      {
        id: 1,
        title: "Linear Functions & Slope",
        lessonHtml: `
          <p>A linear function has a constant rate of change (slope).</p>
          <p>Slope = rise/run.</p>
        `,
        questions: [
          {
            prompt: "Slope represents:",
            choices: ["Rate of change", "Area", "Volume"],
            correct: "Rate of change"
          },
          {
            prompt: "If a line rises 4 and runs 2, slope is:",
            choices: ["2", "4", "1/2"],
            correct: "2"
          },
          {
            prompt: "A linear function has:",
            choices: ["Constant slope", "Changing slope", "No slope"],
            correct: "Constant slope"
          }
        ]
      },

      {
        id: 2,
        title: "Systems of Linear Equations",
        lessonHtml: `
          <p>Systems can be solved by graphing, substitution, or elimination.</p>
          <p>The solution is where both equations are true.</p>
        `,
        questions: [
          {
            prompt: "The solution to a system is:",
            choices: ["Intersection point", "Slope", "Y‑intercept"],
            correct: "Intersection point"
          },
          {
            prompt: "If lines are parallel:",
            choices: ["No solution", "One solution", "Infinite solutions"],
            correct: "No solution"
          },
          {
            prompt: "If lines overlap:",
            choices: ["Infinite solutions", "One solution", "No solution"],
            correct: "Infinite solutions"
          }
        ]
      },

      {
        id: 3,
        title: "Transformations",
        lessonHtml: `
          <p>Transformations include translations, rotations, reflections, and dilations.</p>
          <p>Rigid motions preserve distance and angle measure.</p>
        `,
        questions: [
          {
            prompt: "Which is a rigid motion?",
            choices: ["Rotation", "Dilation", "Stretching"],
            correct: "Rotation"
          },
          {
            prompt: "Reflections preserve:",
            choices: ["Distance", "Orientation", "Scale"],
            correct: "Distance"
          },
          {
            prompt: "Dilations change:",
            choices: ["Size", "Angle measure", "Slope"],
            correct: "Size"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // BIOLOGY & PHYSICAL SCIENCE
  // -------------------------------
  science: {
    displayName: "Biology & Physical Science",
    lessons: [

      {
        id: 1,
        title: "Cell Processes",
        lessonHtml: `
          <p>Cells perform processes like mitosis, respiration, and homeostasis.</p>
        `,
        questions: [
          {
            prompt: "Mitosis results in:",
            choices: ["Two identical cells", "Gametes", "Energy release"],
            correct: "Two identical cells"
          },
          {
            prompt: "Cellular respiration produces:",
            choices: ["ATP energy", "DNA", "Proteins"],
            correct: "ATP energy"
          },
          {
            prompt: "Homeostasis means:",
            choices: ["Maintaining internal balance", "Rapid growth", "Random change"],
            correct: "Maintaining internal balance"
          }
        ]
      },

      {
        id: 2,
        title: "Forces & Newton’s Laws",
        lessonHtml: `
          <p>Newton’s laws describe motion, inertia, and force interactions.</p>
        `,
        questions: [
          {
            prompt: "Newton’s First Law is the law of:",
            choices: ["Inertia", "Gravity", "Energy"],
            correct: "Inertia"
          },
          {
            prompt: "Force equals:",
            choices: ["Mass × acceleration", "Mass + velocity", "Energy × time"],
            correct: "Mass × acceleration"
          },
          {
            prompt: "Action–reaction pairs are described in:",
            choices: ["Newton’s Third Law", "Second Law", "First Law"],
            correct: "Newton’s Third Law"
          }
        ]
      },

      {
        id: 3,
        title: "Chemical Bonding",
        lessonHtml: `
          <p>Ionic bonds transfer electrons; covalent bonds share electrons.</p>
        `,
        questions: [
          {
            prompt: "Ionic bonds involve:",
            choices: ["Electron transfer", "Electron sharing", "No electrons"],
            correct: "Electron transfer"
          },
          {
            prompt: "Covalent bonds involve:",
            choices: ["Sharing electrons", "Losing electrons", "Gaining protons"],
            correct: "Sharing electrons"
          },
          {
            prompt: "Which is an ionic compound?",
            choices: ["NaCl", "CO₂", "H₂O₂"],
            correct: "NaCl"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // WORLD HISTORY & CIVICS
  // -------------------------------
  social: {
    displayName: "World History & Civics",
    lessons: [

      {
        id: 1,
        title: "Ancient to Medieval Civilizations",
        lessonHtml: `
          <p>Major civilizations include Mesopotamia, Egypt, Greece, Rome, and medieval Europe.</p>
        `,
        questions: [
          {
            prompt: "Rome is known for:",
            choices: ["Republican government", "Pyramids", "Gunpowder"],
            correct: "Republican government"
          },
          {
            prompt: "Greece contributed:",
            choices: ["Democracy", "Hieroglyphics", "Feudalism"],
            correct: "Democracy"
          },
          {
            prompt: "Medieval Europe used:",
            choices: ["Feudalism", "City‑states", "Caste system"],
            correct: "Feudalism"
          }
        ]
      },

      {
        id: 2,
        title: "Foundations of Democracy",
        lessonHtml: `
          <p>Democratic systems rely on rule of law, rights, and civic participation.</p>
        `,
        questions: [
          {
            prompt: "Rule of law means:",
            choices: ["Everyone follows the law", "Only leaders follow laws", "Laws change daily"],
            correct: "Everyone follows the law"
          },
          {
            prompt: "Civic participation includes:",
            choices: ["Voting", "Ignoring issues", "Avoiding news"],
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
        title: "Globalization",
        lessonHtml: `
          <p>Globalization increases connections between countries through trade, technology, and culture.</p>
        `,
        questions: [
          {
            prompt: "Globalization increases:",
            choices: ["Interconnectedness", "Isolation", "Barriers"],
            correct: "Interconnectedness"
          },
          {
            prompt: "Technology spreads through:",
            choices: ["Global networks", "Silence", "Isolation"],
            correct: "Global networks"
          },
          {
            prompt: "Trade allows countries to:",
            choices: ["Access needed resources", "Avoid cooperation", "Stop communication"],
            correct: "Access needed resources"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // LOGIC, REASONING & PROBLEM SOLVING
  // -------------------------------
  logic: {
    displayName: "Logic, Reasoning & Problem Solving",
    lessons: [

      {
        id: 1,
        title: "Formal Logic",
        lessonHtml: `
          <p>Formal logic uses statements, truth values, and valid arguments.</p>
        `,
        questions: [
          {
            prompt: "A valid argument is one where:",
            choices: ["Conclusion follows from premises", "Premises are random", "Conclusion is emotional"],
            correct: "Conclusion follows from premises"
          },
          {
            prompt: "A statement is:",
            choices: ["True or false", "A question", "A command"],
            correct: "True or false"
          },
          {
            prompt: "Logic helps evaluate:",
            choices: ["Arguments", "Weather", "Music"],
            correct: "Arguments"
          }
        ]
      },

      {
        id: 2,
        title: "Algebraic Reasoning",
        lessonHtml: `
          <p>Reasoning with variables helps solve equations and inequalities.</p>
        `,
        questions: [
          {
            prompt: "Solve: 3x − 2 = 10",
            choices: ["4", "5", "6"],
            correct: "4"
          },
          {
            prompt: "Solve: 2(x + 3) = 14",
            choices: ["4", "5", "7"],
            correct: "4"
          },
          {
            prompt: "Inequalities use symbols like:",
            choices: ["<, >", "×, ÷", "+, −"],
            correct: "<, >"
          }
        ]
      },

      {
        id: 3,
        title: "Patterns & Modeling",
        lessonHtml: `
          <p>Mathematical models represent real‑world situations using equations and graphs.</p>
        `,
        questions: [
          {
            prompt: "A model is:",
            choices: ["A representation of a situation", "A random guess", "A decoration"],
            correct: "A representation of a situation"
          },
          {
            prompt: "Graphs show:",
            choices: ["Relationships", "Only shapes", "Only text"],
            correct: "Relationships"
          },
          {
            prompt: "Equations can model:",
            choices: ["Real‑world problems", "Only art", "Only geography"],
            correct: "Real‑world problems"
          }
        ]
      }

    ]
  }

};

// ===============================
// GRADE 9 — PROGRESS STATE
// ===============================

const g9Progress = {
  reading: 0,
  math: 0,
  science: 0,
  social
