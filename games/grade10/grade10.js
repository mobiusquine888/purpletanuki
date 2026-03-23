// ===============================
// GRADE 10 — CURRICULUM DATA
// ===============================

const g10Subjects = {

  // -------------------------------
  // ENGLISH LANGUAGE ARTS
  // -------------------------------
  reading: {
    displayName: "English Language Arts",
    lessons: [

      {
        id: 1,
        title: "Analyzing Author’s Purpose & Style",
        lessonHtml: `
          <p>Authors use diction, syntax, and tone to shape meaning.</p>
          <p>Purpose may be to inform, persuade, entertain, or express ideas.</p>
        `,
        questions: [
          {
            prompt: "Diction refers to:",
            choices: ["Word choice", "Plot structure", "Character names"],
            correct: "Word choice"
          },
          {
            prompt: "Tone is the author’s:",
            choices: ["Attitude", "Setting", "Conflict"],
            correct: "Attitude"
          },
          {
            prompt: "An author persuading readers is using a:",
            choices: ["Persuasive purpose", "Narrative purpose", "Descriptive purpose"],
            correct: "Persuasive purpose"
          }
        ]
      },

      {
        id: 2,
        title: "Symbolism & Motifs",
        lessonHtml: `
          <p>Symbols represent deeper ideas, while motifs are repeated elements that reinforce themes.</p>
        `,
        questions: [
          {
            prompt: "A symbol is:",
            choices: ["An object representing an idea", "A character", "A setting"],
            correct: "An object representing an idea"
          },
          {
            prompt: "A motif is:",
            choices: ["A repeated element", "A plot twist", "A conflict"],
            correct: "A repeated element"
          },
          {
            prompt: "Symbols and motifs help reveal:",
            choices: ["Themes", "Only characters", "Only dialogue"],
            correct: "Themes"
          }
        ]
      },

      {
        id: 3,
        title: "Argumentative Writing",
        lessonHtml: `
          <p>Strong arguments use claims, counterclaims, and evidence.</p>
          <p>Writers address opposing viewpoints to strengthen their position.</p>
        `,
        questions: [
          {
            prompt: "A counterclaim is:",
            choices: ["An opposing viewpoint", "A summary", "A metaphor"],
            correct: "An opposing viewpoint"
          },
          {
            prompt: "Arguments must include:",
            choices: ["Evidence", "Only opinions", "Only questions"],
            correct: "Evidence"
          },
          {
            prompt: "Addressing counterclaims makes writing:",
            choices: ["Stronger", "Weaker", "Confusing"],
            correct: "Stronger"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // ALGEBRA II & GEOMETRY
  // -------------------------------
  math: {
    displayName: "Algebra II & Geometry",
    lessons: [

      {
        id: 1,
        title: "Quadratic Functions",
        lessonHtml: `
          <p>Quadratics have the form <strong>y = ax² + bx + c</strong>.</p>
          <p>The vertex is the maximum or minimum point.</p>
        `,
        questions: [
          {
            prompt: "Which is a quadratic?",
            choices: ["y = 2x² + 3x", "y = 4x + 1", "y = x³"],
            correct: "y = 2x² + 3x"
          },
          {
            prompt: "The vertex is:",
            choices: ["The highest or lowest point", "The slope", "The y‑intercept"],
            correct: "The highest or lowest point"
          },
          {
            prompt: "If a > 0, the parabola opens:",
            choices: ["Upward", "Downward", "Sideways"],
            correct: "Upward"
          }
        ]
      },

      {
        id: 2,
        title: "Exponential Functions",
        lessonHtml: `
          <p>Exponential functions grow by repeated multiplication.</p>
          <p>General form: <strong>y = ab^x</strong>.</p>
        `,
        questions: [
          {
            prompt: "Exponential growth uses:",
            choices: ["Multiplication", "Subtraction", "Division"],
            correct: "Multiplication"
          },
          {
            prompt: "In y = 3(2^x), the base is:",
            choices: ["2", "3", "x"],
            correct: "2"
          },
          {
            prompt: "Exponential functions change:",
            choices: ["Rapidly", "Slowly", "Not at all"],
            correct: "Rapidly"
          }
        ]
      },

      {
        id: 3,
        title: "Trigonometry Basics",
        lessonHtml: `
          <p>Sine, cosine, and tangent relate angles to side lengths in right triangles.</p>
        `,
        questions: [
          {
            prompt: "sin(θ) =",
            choices: ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent"],
            correct: "Opposite / Hypotenuse"
          },
          {
            prompt: "cos(θ) =",
            choices: ["Adjacent / Hypotenuse", "Opposite / Hypotenuse", "Hypotenuse / Opposite"],
            correct: "Adjacent / Hypotenuse"
          },
          {
            prompt: "tan(θ) =",
            choices: ["Opposite / Adjacent", "Adjacent / Opposite", "Hypotenuse / Adjacent"],
            correct: "Opposite / Adjacent"
          }
        ]
      }

    ]
  },

  // -------------------------------
  // BIOLOGY & CHEMISTRY
  // -------------------------------
  science: {
    displayName: "Biology & Chemistry",
    lessons: [

      {
        id: 1,
        title: "DNA & Protein Synthesis",
        lessonHtml: `
          <p>DNA stores genetic information. mRNA carries instructions to ribosomes for protein synthesis.</p>
        `,
        questions: [
          {
            prompt: "DNA contains:",
            choices: ["Genetic information", "Energy", "Minerals"],
            correct: "Genetic information"
          },
          {
            prompt: "mRNA’s role is to:",
            choices: ["Carry instructions", "Break down DNA", "Store energy"],
            correct: "Carry instructions"
          },
          {
            prompt: "Proteins are built from:",
            choices: ["Amino acids", "Lipids", "Sugars"],
            correct: "Amino acids"
          }
        ]
      },

      {
        id: 2,
        title: "Chemical Reactions & Stoichiometry",
        lessonHtml: `
          <p>Balanced equations show equal atoms on both sides.</p>
          <p>Stoichiometry uses mole ratios to predict product amounts.</p>
        `,
        questions: [
          {
            prompt: "Balanced equations must have:",
            choices: ["Equal atoms on both sides", "More products", "More reactants"],
            correct: "Equal atoms on both sides"
          },
          {
            prompt: "Stoichiometry uses:",
            choices: ["Mole ratios", "Random guesses", "Only mass"],
            correct: "Mole ratios"
          },
          {
            prompt: "Chemical reactions follow:",
            choices: ["Conservation of mass", "Conservation of heat", "Conservation of space"],
            correct: "Conservation of mass"
          }
        ]
      },

      {
        id: 3,
        title: "Evolution & Natural Selection",
        lessonHtml: `
          <p>Natural selection favors traits that improve survival and reproduction.</p>
        `,
        questions: [
          {
            prompt: "Natural selection acts on:",
            choices: ["Traits", "Weather", "Gravity"],
            correct: "Traits"
          },
          {
            prompt: "Traits that improve survival are called:",
            choices: ["Adaptations", "Mutations", "Errors"],
            correct: "Adaptations"
          },
          {
            prompt: "Evolution occurs over:",
            choices: ["Many generations", "One day", "One lifetime"],
            correct: "Many generations"
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
        title: "Renaissance & Enlightenment",
        lessonHtml: `
          <p>The Renaissance revived art and learning; the Enlightenment emphasized reason and individual rights.</p>
        `,
        questions: [
          {
            prompt: "The Renaissance focused on:",
            choices: ["Art and learning", "Industrialization", "Feudalism"],
            correct: "Art and learning"
          },
          {
            prompt: "The Enlightenment emphasized:",
            choices: ["Reason", "Mythology", "Isolation"],
            correct: "Reason"
          },
          {
            prompt: "Enlightenment thinkers supported:",
            choices: ["Individual rights", "Absolute monarchy", "Censorship"],
            correct: "Individual rights"
          }
        ]
      },

      {
        id: 2,
        title: "Revolutions & Nation‑Building",
        lessonHtml: `
          <p>Revolutions in America, France, and Latin America reshaped governments and societies.</p>
        `,
        questions: [
          {
            prompt: "The American Revolution fought for:",
            choices: ["Independence", "Empire", "Feudalism"],
            correct: "Independence"
          },
          {
            prompt: "The French Revolution challenged:",
            choices: ["Monarchy", "Democracy", "Trade"],
            correct: "Monarchy"
          },
          {
            prompt: "Latin American revolutions sought:",
            choices: ["Self‑rule", "Colonial control", "Isolation"],
            correct: "Self‑rule"
          }
        ]
      },

      {
        id: 3,
        title: "Civics: Rights & Responsibilities",
        lessonHtml: `
          <p>Civic duties include voting, obeying laws, and staying informed.</p>
        `,
        questions: [
          {
            prompt: "Voting is a:",
            choices: ["Civic duty", "Punishment", "Random act"],
            correct: "Civic duty"
          },
          {
            prompt: "Citizens must:",
            choices: ["Follow laws", "Ignore laws", "Write laws"],
            correct: "Follow laws"
          },
          {
            prompt: "Staying informed helps citizens:",
            choices: ["Make decisions", "Avoid responsibility", "Ignore issues"],
            correct: "Make decisions"
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
        title: "Proof & Deductive Reasoning",
        lessonHtml: `
          <p>Deductive reasoning moves from general rules to specific conclusions.</p>
          <p>Geometric proofs use postulates, theorems, and logical steps.</p>
        `,
        questions: [
          {
            prompt: "Deductive reasoning goes from:",
            choices: ["General to specific", "Specific to general", "Random to random"],
            correct: "General to specific"
          },
          {
            prompt: "Proofs rely on:",
            choices: ["Logical steps", "Opinions", "Guesses"],
            correct: "Logical steps"
          },
          {
            prompt: "A theorem is:",
            choices: ["A proven statement", "A guess", "A question"],
            correct: "A proven statement"
          }
        ]
      },

      {
        id: 2,
        title: "Advanced Algebraic Reasoning",
        lessonHtml: `
          <p>Complex equations may require factoring, completing the square, or using the quadratic formula.</p>
        `,
        questions: [
          {
            prompt: "The quadratic formula solves:",
            choices: ["ax² + bx + c = 0", "Linear equations", "Exponential functions"],
            correct: "ax² + bx + c = 0"
          },
          {
            prompt: "Factoring rewrites expressions as:",
            choices: ["Products", "Sums", "Fractions"],
            correct: "Products"
          },
          {
            prompt: "Completing the square helps find the:",
            choices: ["Vertex", "Slope", "Intercept"],
            correct: "Vertex"
          }
        ]
      },

      {
        id: 3,
        title: "Modeling Real‑World Problems",
        lessonHtml: `
          <p>Models use equations, graphs, and functions to represent real situations.</p>
        `,
        questions: [
          {
            prompt: "A model represents:",
            choices: ["A real‑world situation", "A random idea", "A fictional story"],
            correct: "A real‑world situation"
          },
          {
