// GRADE 2 TUTOR — FULL SPECTRUM

// SUBJECT + LESSON DATA
const g2Subjects = {
  // LITERACY
  readingComprehension: {
    label: "Reading Comprehension",
    group: "Literacy",
    lessons: [
      {
        id: "rc1",
        title: "Finding the Main Idea",
        body: `
          <p>Every story or paragraph has a main idea — the most important thing it is about.</p>
          <p>To find the main idea, ask: <strong>What is this mostly about?</strong></p>
          <ul>
            <li>Look at the title.</li>
            <li>Look for words that repeat.</li>
            <li>Check the first and last sentence.</li>
          </ul>
        `,
        quiz: [
          {
            q: "What is the main idea of a story?",
            options: [
              "The funniest sentence",
              "The most important thing it is about",
              "The longest word",
              "The last detail mentioned"
            ],
            answer: 1
          },
          {
            q: "Which can help you find the main idea?",
            options: [
              "Only the pictures",
              "Only the last sentence",
              "The title and repeated words",
              "Counting the sentences"
            ],
            answer: 2
          },
          {
            q: "If a paragraph talks about dogs playing fetch, what is it mostly about?",
            options: [
              "Cats sleeping",
              "Dogs playing",
              "Birds flying",
              "Fish swimming"
            ],
            answer: 1
          }
        ]
      },
      {
        id: "rc2",
        title: "Details that Support the Main Idea",
        body: `
          <p>Supporting details give more information about the main idea.</p>
          <p>They answer questions like: <em>who, what, when, where, why, how</em>.</p>
        `,
        quiz: [
          {
            q: "What do supporting details do?",
            options: [
              "Change the main idea",
              "Give more information about the main idea",
              "Hide the main idea",
              "Tell a different story"
            ],
            answer: 1
          },
          {
            q: "Which is a supporting detail for 'Dogs need exercise'?",
            options: [
              "Dogs are animals.",
              "Dogs can be different colors.",
              "Dogs should go on walks every day.",
              "Dogs sometimes bark."
            ],
            answer: 2
          },
          {
            q: "Supporting details often answer:",
            options: [
              "Only 'when'",
              "Only 'why'",
              "Who, what, when, where, why, how",
              "Only 'how'"
            ],
            answer: 2
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
        title: "Using Context Clues",
        body: `
          <p>Context clues are hints in the sentence that help you figure out what a word means.</p>
          <p>Look at the words around the new word to guess its meaning.</p>
        `,
        quiz: [
          {
            q: "What are context clues?",
            options: [
              "Pictures in a book",
              "Hints in the sentence around a word",
              "The title of the story",
              "The page number"
            ],
            answer: 1
          },
          {
            q: "Context clues help you:",
            options: [
              "Skip hard words",
              "Guess how to spell a word",
              "Figure out what a word means",
              "Count the words"
            ],
            answer: 2
          },
          {
            q: "If a sentence says, 'The arid desert was very dry,' 'arid' most likely means:",
            options: [
              "Wet",
              "Cold",
              "Dry",
              "Loud"
            ],
            answer: 2
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
        title: "Long and Short Vowels",
        body: `
          <p>Short vowels make a quick sound, like in <em>cat</em>, <em>bed</em>, <em>sit</em>, <em>top</em>, <em>cup</em>.</p>
          <p>Long vowels say their name, like in <em>cake</em>, <em>seed</em>, <em>bike</em>, <em>rope</em>, <em>cube</em>.</p>
        `,
        quiz: [
          {
            q: "Which word has a long 'a' sound?",
            options: ["cat", "cap", "cake", "can"],
            answer: 2
          },
          {
            q: "Which word has a short 'i' sound?",
            options: ["bike", "time", "sit", "side"],
            answer: 2
          },
          {
            q: "Long vowels usually:",
            options: [
              "Say their name",
              "Are silent",
              "Disappear",
              "Sound like 'uh'"
            ],
            answer: 0
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
        title: "Writing a Complete Sentence",
        body: `
          <p>A complete sentence has a <strong>subject</strong> (who or what) and a <strong>predicate</strong> (what they do).</p>
          <p>It begins with a capital letter and ends with punctuation.</p>
        `,
        quiz: [
          {
            q: "Which is a complete sentence?",
            options: [
              "Running fast.",
              "The dog ran.",
              "Because it was raining.",
              "In the park."
            ],
            answer: 1
          },
          {
            q: "A sentence should start with:",
            options: [
              "A lowercase letter",
              "A number",
              "A capital letter",
              "A question mark"
            ],
            answer: 2
          },
          {
            q: "The subject of a sentence tells:",
            options: [
              "Where it happens",
              "Who or what the sentence is about",
              "How loud to read",
              "What time it is"
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
        title: "Nouns and Verbs",
        body: `
          <p><strong>Nouns</strong> name people, places, things, or ideas.</p>
          <p><strong>Verbs</strong> tell what someone or something does.</p>
        `,
        quiz: [
          {
            q: "Which word is a noun?",
            options: ["run", "happy", "cat", "quickly"],
            answer: 2
          },
          {
            q: "Which word is a verb?",
            options: ["tree", "jump", "book", "pencil"],
            answer: 1
          },
          {
            q: "In 'The bird sings', which word is the verb?",
            options: ["The", "bird", "sings", "none"],
            answer: 2
          }
        ]
      }
    ]
  },

  phonics: {
    label: "Advanced Phonics",
    group: "Literacy",
    lessons: [
      {
        id: "p1",
        title: "R-Controlled Vowels",
        body: `
          <p>When a vowel is followed by the letter <strong>r</strong>, the sound changes.</p>
          <p>Examples: <em>car, her, bird, corn, turn</em>.</p>
        `,
        quiz: [
          {
            q: "Which word has an r-controlled vowel?",
            options: ["cat", "her", "rope", "cube"],
            answer: 1
          },
          {
            q: "In 'bird', which letters make the r-controlled sound?",
            options: ["bi", "ir", "rd", "bd"],
            answer: 1
          },
          {
            q: "R-controlled vowels sound:",
            options: [
              "Exactly like short vowels",
              "Exactly like long vowels",
              "Different because of the 'r'",
              "Silent"
            ],
            answer: 2
          }
        ]
      }
    ]
  },

  // MATH
  additionSubtraction: {
    label: "Addition & Subtraction to 1000",
    group: "Math",
    lessons: [
      {
        id: "m1",
        title: "Adding with Regrouping",
        body: `
          <p>When the sum in a place value is 10 or more, you regroup (carry) to the next place.</p>
          <p>Example: 47 + 38 → add ones (7 + 8 = 15), write 5, carry 1 to the tens.</p>
        `,
        quiz: [
          {
            q: "47 + 38 = ?",
            options: ["75", "76", "85", "95"],
            answer: 2
          },
          {
            q: "When you regroup, you:",
            options: [
              "Erase numbers",
              "Move 10 ones into the tens place",
              "Move tens into ones",
              "Skip the problem"
            ],
            answer: 1
          },
          {
            q: "35 + 27 = ?",
            options: ["52", "62", "72", "42"],
            answer: 1
          }
        ]
      }
    ]
  },

  placeValue: {
    label: "Place Value",
    group: "Math",
    lessons: [
      {
        id: "pv1",
        title: "Hundreds, Tens, and Ones",
        body: `
          <p>Each digit in a number has a place value.</p>
          <p>Example: In 482, 4 is hundreds, 8 is tens, 2 is ones.</p>
        `,
        quiz: [
          {
            q: "In 394, what is the value of 3?",
            options: ["3", "30", "300", "3000"],
            answer: 2
          },
          {
            q: "In 582, which digit is in the tens place?",
            options: ["5", "8", "2", "none"],
            answer: 1
          },
          {
            q: "In 709, the 9 is in the:",
            options: ["hundreds place", "tens place", "ones place", "thousands place"],
            answer: 2
          }
        ]
      }
    ]
  },

  time: {
    label: "Time",
    group: "Math",
    lessons: [
      {
        id: "t1",
        title: "Reading Clocks to 5 Minutes",
        body: `
          <p>The short hand shows the hour. The long hand shows the minutes.</p>
          <p>Each number on the clock is 5 minutes.</p>
        `,
        quiz: [
          {
            q: "If the minute hand points to the 3, how many minutes is that?",
            options: ["3", "10", "15", "20"],
            answer: 2
          },
          {
            q: "If the hour hand is between 2 and 3, it is:",
            options: ["Exactly 2", "Exactly 3", "Between 2 and 3", "Midnight"],
            answer: 2
          },
          {
            q: "There are how many minutes in one hour?",
            options: ["30", "45", "60", "90"],
            answer: 2
          }
        ]
      }
    ]
  },

  money: {
    label: "Money",
    group: "Math",
    lessons: [
      {
        id: "mo1",
        title: "Counting Coins",
        body: `
          <p>Know the values: penny = 1¢, nickel = 5¢, dime = 10¢, quarter = 25¢.</p>
          <p>Add the values to find the total amount.</p>
        `,
        quiz: [
          {
            q: "A dime is worth:",
            options: ["1¢", "5¢", "10¢", "25¢"],
            answer: 2
          },
          {
            q: "Two quarters are worth:",
            options: ["25¢", "35¢", "40¢", "50¢"],
            answer: 3
          },
          {
            q: "One quarter and one dime =",
            options: ["30¢", "35¢", "40¢", "45¢"],
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
        title: "Inches and Centimeters",
        body: `
          <p>We measure length using units like inches and centimeters.</p>
          <p>Use a ruler and line up the object with zero.</p>
        `,
        quiz: [
          {
            q: "What tool do you use to measure length?",
            options: ["Clock", "Ruler", "Thermometer", "Scale"],
            answer: 1
          },
          {
            q: "Centimeters are usually used in:",
            options: ["U.S. only", "Metric system", "Time", "Money"],
            answer: 1
          },
          {
            q: "If a pencil is 10 cm long, that means:",
            options: [
              "It weighs 10 grams",
              "It is 10 units of length",
              "It costs 10 cents",
              "It is 10 minutes long"
            ],
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
        title: "2D Shapes",
        body: `
          <p>Common 2D shapes: triangle, square, rectangle, circle, hexagon.</p>
          <p>We can count sides and corners (vertices).</p>
        `,
        quiz: [
          {
            q: "How many sides does a triangle have?",
            options: ["2", "3", "4", "5"],
            answer: 1
          },
          {
            q: "A square has:",
            options: [
              "4 equal sides",
              "3 equal sides",
              "No sides",
              "2 equal sides"
            ],
            answer: 0
          },
          {
            q: "A circle has:",
            options: ["No corners", "3 corners", "4 corners", "6 corners"],
            answer: 0
          }
        ]
      }
    ]
  },

  wordProblems: {
    label: "Word Problems",
    group: "Math",
    lessons: [
      {
        id: "wp1",
        title: "Choosing the Operation",
        body: `
          <p>In word problems, look for clue words.</p>
          <ul>
            <li><strong>Altogether, in all, total</strong> → add</li>
            <li><strong>Left, fewer, difference</strong> → subtract</li>
          </ul>
        `,
        quiz: [
          {
            q: "Which clue word suggests addition?",
            options: ["left", "fewer", "difference", "altogether"],
            answer: 3
          },
          {
            q: "Which clue word suggests subtraction?",
            options: ["total", "sum", "in all", "left"],
            answer: 3
          },
          {
            q: "If a problem says 'How many in all?', you should:",
            options: ["Subtract", "Add", "Multiply", "Guess"],
            answer: 1
          }
        ]
      }
    ]
  },

  // SCIENCE
  lifeScience: {
    label: "Life Science",
    group: "Science",
    lessons: [
      {
        id: "ls1",
        title: "Basic Needs of Living Things",
        body: `
          <p>All living things need food, water, air, and shelter.</p>
          <p>Plants and animals meet these needs in different ways.</p>
        `,
        quiz: [
          {
            q: "Which is a basic need of living things?",
            options: ["Toys", "Food", "Television", "Money"],
            answer: 1
          },
          {
            q: "Plants get food by:",
            options: ["Hunting", "Photosynthesis using sunlight", "Sleeping", "Running"],
            answer: 1
          },
          {
            q: "Animals need shelter to:",
            options: [
              "Watch TV",
              "Stay safe and protected",
              "Grow money",
              "Make noise"
            ],
            answer: 1
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
        title: "Weather and Seasons",
        body: `
          <p>Weather is what the air is like outside right now.</p>
          <p>Seasons change during the year: spring, summer, fall, winter.</p>
        `,
        quiz: [
          {
            q: "Which is a season?",
            options: ["Rain", "Snow", "Summer", "Cloudy"],
            answer: 2
          },
          {
            q: "Weather describes:",
            options: [
              "What the sky and air are like now",
              "Only the temperature",
              "Only the wind",
              "Only the clouds"
            ],
            answer: 0
          },
          {
            q: "Winter is usually:",
            options: ["Hot", "Cold", "Rainy only", "Windless"],
            answer: 1
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
        title: "Solids, Liquids, and Gases",
        body: `
          <p>Matter is anything that takes up space.</p>
          <p>Solids keep their shape, liquids flow and take the shape of their container, gases spread out.</p>
        `,
        quiz: [
          {
            q: "Water in an ice cube is a:",
            options: ["Solid", "Liquid", "Gas", "None"],
            answer: 0
          },
          {
            q: "Water in a cup is a:",
            options: ["Solid", "Liquid", "Gas", "Rock"],
            answer: 1
          },
          {
            q: "Air is a:",
            options: ["Solid", "Liquid", "Gas", "Plant"],
            answer: 2
          }
        ]
      }
    ]
  },

  simpleExperiments: {
    label: "Simple Experiments",
    group: "Science",
    lessons: [
      {
        id: "se1",
        title: "The Scientific Method",
        body: `
          <p>Scientists ask questions, make a guess (hypothesis), test it, and see what happens.</p>
          <p>They observe carefully and record results.</p>
        `,
        quiz: [
          {
            q: "A hypothesis is:",
            options: [
              "A wild guess with no reason",
              "A careful guess you can test",
              "The final answer",
              "A type of experiment"
            ],
            answer: 1
          },
          {
            q: "Scientists record results so they can:",
            options: [
              "Forget them",
              "Share and compare",
              "Hide them",
              "Erase them"
            ],
            answer: 1
          },
          {
            q: "Which is part of the scientific method?",
            options: ["Guess and stop", "Ask, test, observe", "Only observe", "Only guess"],
            answer: 1
          }
        ]
      }
    ]
  },

  // SOCIAL STUDIES
  communities: {
    label: "Communities",
    group: "Social Studies",
    lessons: [
      {
        id: "c1",
        title: "Types of Communities",
        body: `
          <p>There are urban (city), suburban, and rural (country) communities.</p>
          <p>Each has different buildings, jobs, and ways of living.</p>
        `,
        quiz: [
          {
            q: "A city is also called:",
            options: ["Rural", "Urban", "Suburban", "Country"],
            answer: 1
          },
          {
            q: "Rural areas usually have:",
            options: ["Tall buildings", "Lots of farms and open land", "Subways", "Skyscrapers"],
            answer: 1
          },
          {
            q: "Suburban areas are:",
            options: [
              "In the middle, between city and country",
              "Only farms",
              "Only skyscrapers",
              "Only forests"
            ],
            answer: 0
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
        id: "geo2",
        title: "Landforms",
        body: `
          <p>Landforms include mountains, hills, plains, valleys, and plateaus.</p>
          <p>They shape how people live and travel.</p>
        `,
        quiz: [
          {
            q: "A very tall landform with steep sides is a:",
            options: ["Plain", "Valley", "Mountain", "River"],
            answer: 2
          },
          {
            q: "Flat land with few trees is called:",
            options: ["Plain", "Hill", "Mountain", "Valley"],
            answer: 0
          },
          {
            q: "A low area between hills or mountains is a:",
            options: ["Plain", "Valley", "Plateau", "Ocean"],
            answer: 1
          }
        ]
      }
    ]
  },

  mapsGlobes: {
    label: "Maps & Globes",
    group: "Social Studies",
    lessons: [
      {
        id: "mg1",
        title: "Reading Simple Maps",
        body: `
          <p>Maps show where places are. A map key explains symbols.</p>
          <p>A compass rose shows directions: north, south, east, west.</p>
        `,
        quiz: [
          {
            q: "A map key tells you:",
            options: [
              "How to draw",
              "What the symbols mean",
              "What time it is",
              "How tall you are"
            ],
            answer: 1
          },
          {
            q: "The compass rose shows:",
            options: ["Colors", "Animals", "Directions", "Numbers"],
            answer: 2
          },
          {
            q: "North is usually at the:",
            options: ["Bottom of the map", "Top of the map", "Left side", "Right side"],
            answer: 1
          }
        ]
      }
    ]
  },

  historyBasics: {
    label: "History Basics",
    group: "Social Studies",
    lessons: [
      {
        id: "hb1",
        title: "Past and Present",
        body: `
          <p>History is the story of what happened in the past.</p>
          <p>We compare past and present to see how life has changed.</p>
        `,
        quiz: [
          {
            q: "History is the story of:",
            options: ["The future", "The past", "Only today", "Only tomorrow"],
            answer: 1
          },
          {
            q: "Which is from the past?",
            options: ["Dinosaurs", "Your lunch today", "Tomorrow's homework", "Next week"],
            answer: 0
          },
          {
            q: "We study history to:",
            options: [
              "Only memorize dates",
              "Understand how life has changed",
              "Forget the past",
              "Skip learning"
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  civics: {
    label: "Civics",
    group: "Social Studies",
    lessons: [
      {
        id: "cv1",
        title: "Rules and Responsibilities",
        body: `
          <p>Rules help keep people safe and fair.</p>
          <p>Citizens have responsibilities, like following rules and helping others.</p>
        `,
        quiz: [
          {
            q: "Rules are important because they:",
            options: [
              "Make life boring",
              "Keep people safe and fair",
              "Stop all fun",
              "Only help adults"
            ],
            answer: 1
          },
          {
            q: "A responsibility is something you:",
            options: ["Ignore", "Must do or should do", "Never do", "Guess"],
            answer: 1
          },
          {
            q: "Which is a responsibility at school?",
            options: [
              "Breaking rules",
              "Listening to the teacher",
              "Running in the hall",
              "Taking others' things"
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  // LOGIC & THINKING
  patterns: {
    label: "Patterns",
    group: "Logic & Thinking",
    lessons: [
      {
        id: "pat1",
        title: "Finding Patterns",
        body: `
          <p>Patterns repeat in a certain order.</p>
          <p>Look for what repeats to find what comes next.</p>
        `,
        quiz: [
          {
            q: "In the pattern: red, blue, red, blue, what comes next?",
            options: ["red", "blue", "green", "yellow"],
            answer: 0
          },
          {
            q: "Patterns are:",
            options: [
              "Random",
              "Repeating orders",
              "Always numbers",
              "Always colors"
            ],
            answer: 1
          },
          {
            q: "In 2, 4, 6, 8, the pattern is:",
            options: ["+1", "+2", "+3", "+4"],
            answer: 1
          }
        ]
      }
    ]
  },

  sequences: {
    label: "Sequences",
    group: "Logic & Thinking",
    lessons: [
      {
        id: "seq1",
        title: "Order of Events",
        body: `
          <p>Sequences tell what happens first, next, then, and last.</p>
          <p>We can use words like first, next, then, finally.</p>
        `,
        quiz: [
          {
            q: "Which comes first when making a sandwich?",
            options: [
              "Eat it",
              "Put it on a plate",
              "Put bread on the table",
              "Throw it away"
            ],
            answer: 2
          },
          {
            q: "Sequence means:",
            options: [
              "Random order",
              "The order things happen",
              "Only the last step",
              "Only the first step"
            ],
            answer: 1
          },
          {
            q: "Which word shows something happens at the end?",
            options: ["First", "Next", "Then", "Finally"],
            answer: 3
          }
        ]
      }
    ]
  },

  deductiveReasoning: {
    label: "Deductive Reasoning",
    group: "Logic & Thinking",
    lessons: [
      {
        id: "dr1",
        title: "Using Clues to Decide",
        body: `
          <p>Deductive reasoning means using clues to figure out the answer.</p>
          <p>We look at all the facts and choose what makes sense.</p>
        `,
        quiz: [
          {
            q: "If you see wet ground and dark clouds, you can guess:",
            options: [
              "It snowed",
              "It rained",
              "It was sunny",
              "It was windy only"
            ],
            answer: 1
          },
          {
            q: "Deductive reasoning uses:",
            options: ["Random guesses", "Only feelings", "Clues and facts", "Only pictures"],
            answer: 2
          },
          {
            q: "If all dogs bark and Max is a dog, then Max can:",
            options: ["Fly", "Swim", "Bark", "Drive"],
            answer: 2
          }
        ]
      }
    ]
  },

  puzzles: {
    label: "Puzzles",
    group: "Logic & Thinking",
    lessons: [
      {
        id: "pz1",
        title: "Solving Word and Number Puzzles",
        body: `
          <p>Puzzles make you think carefully and try different ideas.</p>
          <p>Look for patterns, clues, and what is missing.</p>
        `,
        quiz: [
          {
            q: "Puzzles help you:",
            options: [
              "Stop thinking",
              "Practice careful thinking",
              "Avoid learning",
              "Only guess"
            ],
            answer: 1
          },
          {
            q: "When solving a puzzle, you should:",
            options: [
              "Give up quickly",
              "Never check your work",
              "Look for patterns and clues",
              "Ignore the directions"
            ],
            answer: 2
          },
          {
            q: "If a number puzzle goes 5, 10, 15, __, the next number is:",
            options: ["16", "18", "20", "25"],
            answer: 2
          }
        ]
      }
    ]
  },

  // BONUS SUBJECTS
  handwriting: {
    label: "Handwriting",
    group: "Bonus",
    lessons: [
      {
        id: "hw1",
        title: "Neat Printing",
        body: `
          <p>Good handwriting uses even spacing, straight lines, and clear letters.</p>
          <p>Write slowly and carefully to make your writing easy to read.</p>
        `,
        quiz: [
          {
            q: "Good handwriting should be:",
            options: ["Messy", "Crowded", "Clear and neat", "Tiny and unreadable"],
            answer: 2
          },
          {
            q: "To write neatly, you should:",
            options: [
              "Rush",
              "Write slowly and carefully",
              "Skip lines",
              "Close your eyes"
            ],
            answer: 1
          },
          {
            q: "Even spacing means:",
            options: [
              "Letters are all touching",
              "Random spaces",
              "Spaces are about the same size",
              "No spaces at all"
            ],
            answer: 2
          }
        ]
      }
    ]
  },

  creativeWriting: {
    label: "Creative Writing",
    group: "Bonus",
    lessons: [
      {
        id: "cw1",
        title: "Writing a Short Story",
        body: `
          <p>A story has characters, a setting, a problem, and a solution.</p>
          <p>Think: Who is in the story? Where are they? What goes wrong? How is it fixed?</p>
        `,
        quiz: [
          {
            q: "Which is part of a story?",
            options: ["Characters", "Math facts", "Only questions", "Only lists"],
            answer: 0
          },
          {
            q: "The setting tells:",
            options: ["Who", "Where and when", "Why only", "How only"],
            answer: 1
          },
          {
            q: "A solution is:",
            options: [
              "The problem",
              "How the problem is fixed",
              "The first sentence",
              "The title"
            ],
            answer: 1
          }
        ]
      }
    ]
  },

  healthSafety: {
    label: "Health & Safety",
    group: "Bonus",
    lessons: [
      {
        id: "hs1",
        title: "Healthy Habits",
        body: `
          <p>Healthy habits include eating good foods, sleeping enough, and moving your body.</p>
          <p>Washing hands helps stop germs from spreading.</p>
        `,
        quiz: [
          {
            q: "Which is a healthy habit?",
            options: [
              "Never sleeping",
              "Eating only candy",
              "Washing hands before eating",
              "Never moving"
            ],
            answer: 2
          },
          {
            q: "Exercise helps your body:",
            options: ["Get weaker", "Stay strong and healthy", "Stop growing", "Sleep less"],
            answer: 1
          },
          {
            q: "Germs can be reduced by:",
            options: ["Sharing drinks", "Not washing hands", "Washing hands with soap and water", "Coughing on others"],
            answer: 2
          }
        ]
      }
    ]
  },

  artConcepts: {
    label: "Art Concepts",
    group: "Bonus",
    lessons: [
      {
        id: "ac1",
        title: "Color and Shape",
        body: `
          <p>Artists use color and shape to create feelings and ideas.</p>
          <p>Warm colors (red, orange, yellow) feel energetic. Cool colors (blue, green, purple) feel calm.</p>
        `,
        quiz: [
          {
            q: "Which is a warm color?",
            options: ["Blue", "Green", "Red", "Purple"],
            answer: 2
          },
          {
            q: "Which is a cool color?",
            options: ["Orange", "Yellow", "Blue", "Red"],
            answer: 2
          },
          {
            q: "Shapes can be:",
            options: ["Only circles", "Only squares", "Many kinds, like circles and triangles", "Only lines"],
            answer: 2
          }
        ]
      }
    ]
  },

  musicBasics: {
    label: "Music Basics",
    group: "Bonus",
    lessons: [
      {
        id: "mb1",
        title: "Beat and Rhythm",
        body: `
          <p>The beat is the steady pulse of the music.</p>
          <p>Rhythm is how long or short sounds are over the beat.</p>
        `,
        quiz: [
          {
            q: "The beat is:",
            options: [
              "Random sounds",
              "The steady pulse of the music",
              "Only the words",
              "Only the loud parts"
            ],
            answer: 1
          },
          {
            q: "Rhythm is:",
            options: [
              "How long or short sounds are",
              "Only the beat",
              "Only the singer",
              "Only the instruments"
            ],
            answer: 0
          },
          {
            q: "Clapping along with a song usually follows the:",
            options: ["Beat", "Lyrics only", "Random noise", "Silence"],
            answer: 0
          }
        ]
      }
    ]
  }
};

// PROGRESS STATE
let g2CurrentSubjectKey = null;
let g2CurrentLessonIndex = 0;
let g2InQuiz = false;

let g2Progress = {}; // subjectKey -> completedLessons count

function loadG2Progress() {
  try {
    const raw = localStorage.getItem("g2Progress");
    if (raw) g2Progress = JSON.parse(raw);
  } catch (e) {
    g2Progress = {};
  }
}

function saveG2Progress() {
  localStorage.setItem("g2Progress", JSON.stringify(g2Progress));
}

// NAVIGATION
function goHome() {
  window.location.href = "../arcade/arcade.html";
}

// INITIAL RENDER
document.addEventListener("DOMContentLoaded", () => {
  loadG2Progress();
  renderSubjectList();
  updateOverallProgress();
});

// SUBJECT LIST
function renderSubjectList() {
  const container = document.getElementById("g2-subject-list");
  container.innerHTML = "";

  const entries = Object.entries(g2Subjects);

  entries.forEach(([key, subject]) => {
    const completed = g2Progress[key] || 0;
    const total = subject.lessons.length;
    const btn = document.createElement("button");
    btn.className = "g2-subject-btn";
    btn.onclick = () => selectSubject(key);

    const leftSpan = document.createElement("span");
    leftSpan.textContent = subject.label;

    const rightSpan = document.createElement("span");
    rightSpan.className = "g2-subject-meta";
    rightSpan.textContent = `${completed}/${total}`;

    btn.appendChild(leftSpan);
    btn.appendChild(rightSpan);

    if (key === g2CurrentSubjectKey) {
      btn.classList.add("active");
    }

    container.appendChild(btn);
  });
}

function selectSubject(key) {
  g2CurrentSubjectKey = key;
  g2CurrentLessonIndex = 0;
  g2InQuiz = false;
  renderSubjectList();
  renderCurrentLesson();
}

// LESSON RENDERING
function renderCurrentLesson() {
  const subject = g2Subjects[g2CurrentSubjectKey];
  const lesson = subject.lessons[g2CurrentLessonIndex];

  const titleEl = document.getElementById("g2-lesson-title");
  const bodyEl = document.getElementById("g2-lesson-body");
  const quizBtn = document.getElementById("g2-start-quiz-btn");
  const quizCard = document.getElementById("g2-quiz-card");

  if (!subject || !lesson) {
    titleEl.textContent = "Choose a subject to begin";
    bodyEl.innerHTML = "<p>Select a subject on the left to see lessons.</p>";
    quizBtn.style.display = "none";
    quizCard.style.display = "none";
    return;
  }

  titleEl.textContent = `${subject.label} — ${lesson.title}`;
  bodyEl.innerHTML = lesson.body;
  quizBtn.style.display = "inline-flex";
  quizCard.style.display = "none";
  g2InQuiz = false;
}

// QUIZ FLOW
function startQuiz() {
  const subject = g2Subjects[g2CurrentSubjectKey];
  if (!subject) return;
  const lesson = subject.lessons[g2CurrentLessonIndex];
  if (!lesson || !lesson.quiz) return;

  g2InQuiz = true;

  const quizCard = document.getElementById("g2-quiz-card");
  const quizBody = document.getElementById("g2-quiz-body");
  const quizTitle = document.getElementById("g2-quiz-title");

  quizTitle.textContent = `Quiz — ${lesson.title}`;
  quizBody.innerHTML = "";

  lesson.quiz.forEach((item, index) => {
    const qDiv = document.createElement("div");
    qDiv.className = "g2-quiz-question";

    const qTitle = document.createElement("div");
    qTitle.className = "g2-quiz-question-title";
    qTitle.textContent = `${index + 1}. ${item.q}`;
    qDiv.appendChild(qTitle);

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "g2-quiz-options";

    item.options.forEach((opt, optIndex) => {
      const label = document.createElement("label");
      label.className = "g2-quiz-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `g2-q-${index}`;
      input.value = optIndex;

      const span = document.createElement("span");
      span.textContent = opt;

      label.appendChild(input);
      label.appendChild(span);
      optionsDiv.appendChild(label);
    });

    qDiv.appendChild(optionsDiv);
    quizBody.appendChild(qDiv);
  });

  quizCard.style.display = "block";
}

function backToLesson() {
  g2InQuiz = false;
  document.getElementById("g2-quiz-card").style.display = "none";
}

function submitQuiz() {
  const subject = g2Subjects[g2CurrentSubjectKey];
  if (!subject) return;
  const lesson = subject.lessons[g2CurrentLessonIndex];
  if (!lesson || !lesson.quiz) return;

  let correct = 0;

  lesson.quiz.forEach((item, index) => {
    const selected = document.querySelector(`input[name="g2-q-${index}"]:checked`);
    if (!selected) return;
    const chosen = parseInt(selected.value, 10);
    if (chosen === item.answer) correct++;
  });

  const total = lesson.quiz.length;
  const passed = correct === total || correct >= Math.ceil(total * 0.67);

  if (passed) {
    markLessonComplete(g2CurrentSubjectKey, g2CurrentLessonIndex);
    alert(`Great job! You got ${correct}/${total} correct. Lesson complete.`);
    spawnSparkles();
    document.getElementById("g2-quiz-card").style.display = "none";
    g2InQuiz = false;
    goToNextLessonOrStay();
  } else {
    alert(`You got ${correct}/${total}. Try the lesson again and retake the quiz.`);
  }
}

function markLessonComplete(subjectKey, lessonIndex) {
  const subject = g2Subjects[subjectKey];
  if (!subject) return;

  const completed = g2Progress[subjectKey] || 0;
  const total = subject.lessons.length;

  if (completed < total && lessonIndex === completed) {
    g2Progress[subjectKey] = completed + 1;
    saveG2Progress();
    renderSubjectList();
    updateOverallProgress();
    maybeShowGraduation();
  }
}

function goToNextLessonOrStay() {
  const subject = g2Subjects[g2CurrentSubjectKey];
  if (!subject) return;

  const completed = g2Progress[g2CurrentSubjectKey] || 0;
  if (completed < subject.lessons.length) {
    g2CurrentLessonIndex = completed;
    renderCurrentLesson();
  } else {
    renderCurrentLesson();
  }
}

// OVERALL PROGRESS
function updateOverallProgress() {
  const subjectKeys = Object.keys(g2Subjects);
  let totalLessons = 0;
  let completedLessons = 0;

  subjectKeys.forEach(key => {
    const subject = g2Subjects[key];
    totalLessons += subject.lessons.length;
    completedLessons += g2Progress[key] || 0;
  });

  const percent = totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);
  const fill = document.getElementById("g2-progress-fill");
  const label = document.getElementById("g2-progress-percent");

  fill.style.width = `${percent}%`;
  label.textContent = `${percent}%`;
}

function maybeShowGraduation() {
  const subjectKeys = Object.keys(g2Subjects);
  const allDone = subjectKeys.every(key => {
    const subject = g2Subjects[key];
    return (g2Progress[key] || 0) >= subject.lessons.length;
  });

  if (allDone) {
    document.getElementById("g2-grad-overlay").style.display = "flex";
  }
}

function closeGraduation() {
  document.getElementById("g2-grad-overlay").style.display = "none";
}

function unlockGrade2Reward() {
  // Placeholder: swap later for a real Tanuki ritual or next world
  window.location.href = "https://www.youtube.com";
}

// UTILITIES
function spawnSparkles() {
  const container = document.getElementById("g2-sparkles");
  const count = 7;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = "g2-sparkle";
    span.textContent = "✨";
    span.style.left = 40 + Math.random() * 20 + "%";
    span.style.top = 55 + Math.random() * 10 + "%";
    container.appendChild(span);
    setTimeout(() => span.remove(), 700);
  }
}
