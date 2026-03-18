// ===============================
//  GRADE 3 TUTOR — FULL ENGINE
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
    lessons
