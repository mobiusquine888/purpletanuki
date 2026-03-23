// ===============================
// AP SUBJECTS — CURRICULUM DATA
// ===============================

const apSubjects = {

  // ============================
  // STEM
  // ============================

  // ----------------------------
  // AP CALCULUS AB
  // ----------------------------
  calcAB: {
    displayName: "AP Calculus AB",
    lessons: [
      {
        id: 1,
        title: "Limits & Continuity",
        lessonHtml: `
          <p>Limits describe the value a function approaches as x approaches a point.</p>
          <p>Continuity requires no breaks, jumps, or holes in the graph.</p>
        `,
        questions: [
          { prompt: "A limit describes:", choices: ["Approaching behavior", "Exact value", "Graph color"], correct: "Approaching behavior" },
          { prompt: "A function is continuous when:", choices: ["No breaks", "It is linear", "It has no roots"], correct: "No breaks" },
          { prompt: "Limits are foundational to:", choices: ["Calculus", "Poetry", "Chemistry"], correct: "Calculus" }
        ]
      },
      {
        id: 2,
        title: "Derivatives",
        lessonHtml: `
          <p>A derivative measures instantaneous rate of change or slope at a point.</p>
        `,
        questions: [
          { prompt: "A derivative represents:", choices: ["Rate of change", "Area", "Volume"], correct: "Rate of change" },
          { prompt: "Derivative notation includes:", choices: ["f'(x)", "f#(x)", "f&(x)"], correct: "f'(x)" },
          { prompt: "Derivatives are used to find:", choices: ["Slope", "Mass", "Temperature"], correct: "Slope" }
        ]
      },
      {
        id: 3,
        title: "Applications of Derivatives",
        lessonHtml: `
          <p>Applications include optimization, motion, and related rates.</p>
        `,
        questions: [
          { prompt: "Optimization finds:", choices: ["Max/min values", "Random points", "Only intercepts"], correct: "Max/min values" },
          { prompt: "Velocity is the derivative of:", choices: ["Position", "Mass", "Area"], correct: "Position" },
          { prompt: "Related rates involve:", choices: ["Changing quantities", "Static values", "Random guesses"], correct: "Changing quantities" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP CALCULUS BC
  // ----------------------------
  calcBC: {
    displayName: "AP Calculus BC",
    lessons: [
      {
        id: 1,
        title: "Series & Convergence",
        lessonHtml: `
          <p>Series are sums of sequences; convergence tests determine if they approach a value.</p>
        `,
        questions: [
          { prompt: "A series is:", choices: ["Sum of terms", "Product of terms", "Graph"], correct: "Sum of terms" },
          { prompt: "Convergence means:", choices: ["Approaches a value", "Grows forever", "Oscillates"], correct: "Approaches a value" },
          { prompt: "Integral test checks:", choices: ["Convergence", "Derivatives", "Angles"], correct: "Convergence" }
        ]
      },
      {
        id: 2,
        title: "Parametric & Polar",
        lessonHtml: `
          <p>Parametric equations define x and y separately; polar uses r and θ.</p>
        `,
        questions: [
          { prompt: "Parametric equations define:", choices: ["x(t) and y(t)", "Only x", "Only y"], correct: "x(t) and y(t)" },
          { prompt: "Polar coordinates use:", choices: ["r and θ", "x and y", "a and b"], correct: "r and θ" },
          { prompt: "Polar graphs include:", choices: ["Roses", "Squares", "Cubes"], correct: "Roses" }
        ]
      },
      {
        id: 3,
        title: "Advanced Integration",
        lessonHtml: `
          <p>Techniques include integration by parts, partial fractions, and trig substitution.</p>
        `,
        questions: [
          { prompt: "Integration by parts uses:", choices: ["uv - ∫v du", "a²+b²", "F=ma"], correct: "uv - ∫v du" },
          { prompt: "Partial fractions decompose:", choices: ["Rational expressions", "Polynomials", "Matrices"], correct: "Rational expressions" },
          { prompt: "Trig substitution helps with:", choices: ["Roots", "Matrices", "Sequences"], correct: "Roots" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP STATISTICS
  // ----------------------------
  stats: {
    displayName: "AP Statistics",
    lessons: [
      {
        id: 1,
        title: "Data & Distributions",
        lessonHtml: `
          <p>Statistics describes patterns, variability, and distributions.</p>
        `,
        questions: [
          { prompt: "A distribution shows:", choices: ["Data spread", "Color", "Volume"], correct: "Data spread" },
          { prompt: "Mean is:", choices: ["Average", "Middle value", "Most frequent"], correct: "Average" },
          { prompt: "Median is:", choices: ["Middle value", "Average", "Mode"], correct: "Middle value" }
        ]
      },
      {
        id: 2,
        title: "Probability",
        lessonHtml: `
          <p>Probability measures likelihood of events.</p>
        `,
        questions: [
          { prompt: "Probability ranges from:", choices: ["0 to 1", "1 to 10", "-10 to 10"], correct: "0 to 1" },
          { prompt: "Independent events:", choices: ["Do not affect each other", "Always occur together", "Are impossible"], correct: "Do not affect each other" },
          { prompt: "Expected value is:", choices: ["Long-run average", "Random guess", "Maximum"], correct: "Long-run average" }
        ]
      },
      {
        id: 3,
        title: "Inference",
        lessonHtml: `
          <p>Inference uses samples to draw conclusions about populations.</p>
        `,
        questions: [
          { prompt: "A confidence interval estimates:", choices: ["Population parameter", "Sample size", "Graph"], correct: "Population parameter" },
          { prompt: "A hypothesis test evaluates:", choices: ["Claims", "Colors", "Shapes"], correct: "Claims" },
          { prompt: "p-value measures:", choices: ["Strength of evidence", "Sample size", "Mean"], correct: "Strength of evidence" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP COMPUTER SCIENCE A
  // ----------------------------
  csa: {
    displayName: "AP Computer Science A",
    lessons: [
      {
        id: 1,
        title: "Java Basics",
        lessonHtml: `
          <p>Java uses classes, methods, and objects to structure programs.</p>
        `,
        questions: [
          { prompt: "A class defines:", choices: ["Blueprint", "Loop", "Variable"], correct: "Blueprint" },
          { prompt: "An object is:", choices: ["Instance of a class", "Loop", "Comment"], correct: "Instance of a class" },
          { prompt: "A method is:", choices: ["Function", "Variable", "Loop"], correct: "Function" }
        ]
      },
      {
        id: 2,
        title: "Control Structures",
        lessonHtml: `
          <p>Conditionals and loops control program flow.</p>
        `,
        questions: [
          { prompt: "if statements:", choices: ["Branch logic", "Store data", "Draw shapes"], correct: "Branch logic" },
          { prompt: "A loop:", choices: ["Repeats code", "Deletes memory", "Stops program"], correct: "Repeats code" },
          { prompt: "Boolean expressions:", choices: ["True/false", "Numbers", "Strings"], correct: "True/false" }
        ]
      },
      {
        id: 3,
        title: "Arrays & Algorithms",
        lessonHtml: `
          <p>Arrays store lists; algorithms process data efficiently.</p>
        `,
        questions: [
          { prompt: "An array stores:", choices: ["Multiple values", "One value", "Only strings"], correct: "Multiple values" },
          { prompt: "Binary search requires:", choices: ["Sorted data", "Random data", "Strings"], correct: "Sorted data" },
          { prompt: "Sorting organizes:", choices: ["Data", "Loops", "Classes"], correct: "Data" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP COMPUTER SCIENCE PRINCIPLES
  // ----------------------------
  csp: {
    displayName: "AP Computer Science Principles",
    lessons: [
      {
        id: 1,
        title: "Computing Systems",
        lessonHtml: `
          <p>Computers process information using hardware and software layers.</p>
        `,
        questions: [
          { prompt: "Hardware is:", choices: ["Physical components", "Code", "Data"], correct: "Physical components" },
          { prompt: "Software is:", choices: ["Programs", "Wires", "Electricity"], correct: "Programs" },
          { prompt: "Binary uses:", choices: ["0s and 1s", "A–Z", "Emojis"], correct: "0s and 1s" }
        ]
      },
      {
        id: 2,
        title: "Data & the Internet",
        lessonHtml: `
          <p>The internet transfers data using protocols like TCP/IP.</p>
        `,
        questions: [
          { prompt: "TCP/IP manages:", choices: ["Data transfer", "Graphics", "Sound"], correct: "Data transfer" },
          { prompt: "Packets are:", choices: ["Chunks of data", "Programs", "Loops"], correct: "Chunks of data" },
          { prompt: "Encryption protects:", choices: ["Privacy", "Speed", "Color"], correct: "Privacy" }
        ]
      },
      {
        id: 3,
        title: "Programming Concepts",
        lessonHtml: `
          <p>Algorithms, variables, and functions form the basis of programming.</p>
        `,
        questions: [
          { prompt: "A variable stores:", choices: ["Data", "Music", "Weather"], correct: "Data" },
          { prompt: "A function:", choices: ["Reuses code", "Deletes files", "Draws shapes"], correct: "Reuses code" },
          { prompt: "Algorithms are:", choices: ["Step-by-step processes", "Random guesses", "Pictures"], correct: "Step-by-step processes" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP BIOLOGY
  // ----------------------------
  bio: {
    displayName: "AP Biology",
    lessons: [
      {
        id: 1,
        title: "Cell Structure",
        lessonHtml: `
          <p>Cells contain organelles like the nucleus, mitochondria, and ribosomes.</p>
        `,
        questions: [
          { prompt: "The nucleus stores:", choices: ["DNA", "Proteins", "Lipids"], correct: "DNA" },
          { prompt: "Mitochondria produce:", choices: ["ATP", "DNA", "Glucose"], correct: "ATP" },
          { prompt: "Ribosomes build:", choices: ["Proteins", "Lipids", "DNA"], correct: "Proteins" }
        ]
      },
      {
        id: 2,
        title: "Genetics",
        lessonHtml: `
          <p>Genes are inherited through alleles; dominant alleles mask recessive ones.</p>
        `,
        questions: [
          { prompt: "Genes carry:", choices: ["Traits", "Weather", "Sound"], correct: "Traits" },
          { prompt: "Dominant alleles:", choices: ["Mask recessive", "Are weaker", "Are random"], correct: "Mask recessive" },
          { prompt: "DNA is found in:", choices: ["Nucleus", "Cell wall", "Ribosome"], correct: "Nucleus" }
        ]
      },
      {
        id: 3,
        title: "Evolution",
        lessonHtml: `
          <p>Evolution occurs through natural selection and genetic variation.</p>
        `,
        questions: [
          { prompt: "Natural selection favors:", choices: ["Beneficial traits", "Random traits", "Weak traits"], correct: "Beneficial traits" },
          { prompt: "Evolution requires:", choices: ["Variation", "Uniformity", "Randomness"], correct: "Variation" },
          { prompt: "A population evolves when:", choices: ["Allele frequencies change", "Individuals mutate", "Weather changes"], correct: "Allele frequencies change" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP CHEMISTRY
  // ----------------------------
  chem: {
    displayName: "AP Chemistry",
    lessons: [
      {
        id: 1,
        title: "Atomic Structure",
        lessonHtml: `
          <p>Atoms contain protons, neutrons, and electrons.</p>
        `,
        questions: [
          { prompt: "Protons have:", choices: ["Positive charge", "Negative charge", "No charge"], correct: "Positive charge" },
          { prompt: "Electrons determine:", choices: ["Chemical behavior", "Mass", "Color"], correct: "Chemical behavior" },
          { prompt: "Neutrons have:", choices: ["No charge", "Positive charge", "Negative charge"], correct: "No charge" }
        ]
      },
      {
        id: 2,
        title: "Bonding",
        lessonHtml: `
          <p>Ionic bonds transfer electrons; covalent bonds share electrons.</p>
        `,
        questions: [
          { prompt: "Ionic bonds:", choices: ["Transfer electrons", "Share electrons", "Ignore electrons"], correct: "Transfer electrons" },
          { prompt: "Covalent bonds:", choices: ["Share electrons", "Transfer electrons", "Break atoms"], correct: "Share electrons" },
          { prompt: "Polarity depends on:", choices: ["Electronegativity", "Mass", "Color"], correct: "Electronegativity" }
        ]
      },
      {
        id: 3,
        title: "Chemical Reactions",
        lessonHtml: `
          <p>Reactions involve breaking and forming bonds; rates depend on temperature and concentration.</p>
        `,
        questions: [
          { prompt: "Catalysts:", choices: ["Speed reactions", "Stop reactions", "Slow reactions"], correct: "Speed reactions" },
          { prompt: "Rate increases when:", choices: ["Temperature increases", "Temperature decreases", "Reactants freeze"], correct: "Temperature increases" },
          { prompt: "Bond breaking requires:", choices: ["Energy", "No energy", "Randomness"], correct: "Energy" }
        ]
      }
    ]
  },

  // ----------------------------
  // AP PHYSICS 1
  // ----------------------------
  phys1: {
    displayName: "AP Physics 1",
    lessons: [
      {
        id: 1,
        title: "Kinematics",
        lessonHtml: `
          <p>Kinematics describes motion using position, velocity, and acceleration.</p>
        `,
        questions: [
          { prompt: "Velocity is:", choices: ["Rate of change of position", "Mass", "Force"], correct: "Rate of change of position" },
          { prompt: "Acceleration is:", choices: ["Rate of change of velocity", "Speed", "Mass"], correct: "Rate of change of velocity" },
          { prompt: "Displacement is:", choices: ["Change in position", "Speed", "Force"], correct: "Change in position" }
        ]
      },
      {
        id: 2,
        title: "Forces",
        lessonHtml: `
          <p>Newton’s laws describe how forces affect motion.</p>
        `,
        questions: [
          { prompt: "F = ma describes:", choices: ["Newton’s 2nd Law", "Gravity", "Momentum"], correct: "Newton’s 2nd Law" },
          { prompt: "Normal force acts:", choices: ["Perpendicular to surfaces", "Parallel", "Randomly"], correct: "Perpendicular to surfaces" },
          { prompt: "Friction opposes:", choices: ["Motion", "Mass", "Energy"], correct: "Motion" }
        ]
      },
      {
        id: 3,
        title: "Energy & Momentum",
        lessonHtml: `
          <p>Energy and momentum are conserved in closed systems.</p>
        `,
        questions: [
          { prompt: "Kinetic energy is:", choices: ["Energy of motion", "Stored energy", "Heat"], correct: "Energy of motion" },
          { prompt: "Momentum equals:", choices: ["mv", "ma", "m/v"], correct: "mv" },
          { prompt: "Conservation laws apply to:", choices: ["Closed systems", "Open systems only", "Random systems"], correct: "Closed systems" }
        ]
      }
    ]
  },

  // ============================
  // HUMANITIES
  // ============================

  // ----------------------------
  // AP ENGLISH LANGUAGE
  // ----------------------------
  lang: {
    displayName: "AP English Language",
    lessons: [
      {
        id: 1,
        title: "Rhetorical Analysis",
        lessonHtml: `
          <p>Rhetorical analysis examines how authors use ethos, pathos, and logos.</p>
        `,
        questions: [
          { prompt: "Ethos appeals to:", choices: ["Credibility", "Emotion", "Logic"], correct: "Credibility" },
          { prompt: "Pathos appeals to:", choices: ["Emotion", "Logic", "Authority"], correct: "Emotion" },
          { prompt: "Logos appeals to:", choices: ["Logic", "Fear", "Style"], correct: "Logic" }
        ]
      },
      {
        id: 2,
        title: "Argumentation",
        lessonHtml: `
          <p>Arguments require claims, evidence, and reasoning.</p
