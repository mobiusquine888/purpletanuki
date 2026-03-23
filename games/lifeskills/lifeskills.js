// ===============================
// LIFE SKILLS — CURRICULUM DATA
// ===============================

const lifeSkillsSubjects = {

  // 1) MONEY & EVERYDAY MATH
  money: {
    displayName: "Money & Everyday Math",
    lessons: [
      {
        id: 1,
        title: "Tipping, Tax & Total",
        lessonHtml: `
          <p>Tipping is a way to thank service workers, usually as a percentage of the bill.</p>
          <p>Sales tax is added to the price at checkout and varies by location.</p>
          <p>Estimating totals quickly helps you avoid surprises and stay within budget.</p>
        `,
        questions: [
          {
            prompt: "A common tip percentage at a restaurant is:",
            choices: ["15–20%", "1–2%", "50%"],
            correct: "15–20%"
          },
          {
            prompt: "Sales tax is:",
            choices: ["Added to the price", "Included in the menu price everywhere", "Optional"],
            correct: "Added to the price"
          },
          {
            prompt: "Estimating totals helps you:",
            choices: ["Stay on budget", "Confuse the cashier", "Avoid math"],
            correct: "Stay on budget"
          }
        ]
      },
      {
        id: 2,
        title: "Budgeting & Spending",
        lessonHtml: `
          <p>A budget is a simple plan for how you will use your money.</p>
          <p>Needs are essentials like food and housing; wants are extras like games or treats.</p>
          <p>Subscriptions can quietly drain money if you forget about them.</p>
        `,
        questions: [
          {
            prompt: "A budget is:",
            choices: ["A money plan", "A type of tax", "A bank account"],
            correct: "A money plan"
          },
          {
            prompt: "Which is usually a need?",
            choices: ["Rent", "New video game", "Fancy dessert"],
            correct: "Rent"
          },
          {
            prompt: "Subscriptions are risky because:",
            choices: ["They auto-renew", "They never cost money", "They are one-time payments"],
            correct: "They auto-renew"
          }
        ]
      },
      {
        id: 3,
        title: "Credit, Interest & Scams",
        lessonHtml: `
          <p>Credit lets you borrow money now and pay it back later, often with interest.</p>
          <p>Interest is the extra money you pay for borrowing or earn for saving.</p>
          <p>Scams try to trick you into giving away money or personal information.</p>
        `,
        questions: [
          {
            prompt: "Credit cards let you:",
            choices: ["Borrow money", "Print money", "Avoid paying bills"],
            correct: "Borrow money"
          },
          {
            prompt: "Interest is:",
            choices: ["Extra cost or earnings over time", "A type of tax", "A store discount"],
            correct: "Extra cost or earnings over time"
          },
          {
            prompt: "A scam often:",
            choices: ["Feels urgent and secret", "Comes from your school", "Uses slow mail only"],
            correct: "Feels urgent and secret"
          }
        ]
      }
    ]
  },

  // 2) ADULTING BASICS
  adulting: {
    displayName: "Adulting Basics",
    lessons: [
      {
        id: 1,
        title: "Forms, IDs & Appointments",
        lessonHtml: `
          <p>Forms collect information like your name, address, and contact details.</p>
          <p>Official IDs prove who you are, like a school ID, passport, or driver's license.</p>
          <p>Appointments reserve time with someone, like a doctor, tutor, or barber.</p>
        `,
        questions: [
          {
            prompt: "Forms are used to:",
            choices: ["Collect information", "Play games", "Store food"],
            correct: "Collect information"
          },
          {
            prompt: "An example of an ID is:",
            choices: ["Driver's license", "Receipt", "Menu"],
            correct: "Driver's license"
          },
          {
            prompt: "Appointments are important because they:",
            choices: ["Reserve time", "Guarantee free service", "Avoid all waiting"],
            correct: "Reserve time"
          }
        ]
      },
      {
        id: 2,
        title: "Communication Skills",
        lessonHtml: `
          <p>Clear communication helps you get what you need without conflict.</p>
          <p>Asking for help is a strength, not a weakness.</p>
          <p>A good apology takes responsibility and avoids excuses.</p>
        `,
        questions: [
          {
            prompt: "Good communication is:",
            choices: ["Clear and respectful", "Loud and aggressive", "Silent"],
            correct: "Clear and respectful"
          },
          {
            prompt: "Asking for help shows:",
            choices: ["Strength and awareness", "Failure", "Laziness"],
            correct: "Strength and awareness"
          },
          {
            prompt: "A strong apology:",
            choices: ["Takes responsibility", "Blames others", "Avoids the issue"],
            correct: "Takes responsibility"
          }
        ]
      },
      {
        id: 3,
        title: "Customer Service & Returns",
        lessonHtml: `
          <p>Customer service helps fix problems with products or services.</p>
          <p>Being polite and specific usually gets better results.</p>
          <p>Receipts and order numbers make returns and exchanges easier.</p>
        `,
        questions: [
          {
            prompt: "Customer service exists to:",
            choices: ["Solve problems", "Sell ads", "Grade homework"],
            correct: "Solve problems"
          },
          {
            prompt: "When asking for help, you should be:",
            choices: ["Polite and clear", "Rude and vague", "Silent"],
            correct: "Polite and clear"
          },
          {
            prompt: "Receipts are useful because they:",
            choices: ["Prove purchase", "Change prices", "Replace IDs"],
            correct: "Prove purchase"
          }
        ]
      }
    ]
  },

  // 3) HOUSEHOLD & PERSONAL CARE
  household: {
    displayName: "Household & Personal Care",
    lessons: [
      {
        id: 1,
        title: "Laundry & Cleaning",
        lessonHtml: `
          <p>Laundry involves sorting clothes, choosing settings, and using detergent correctly.</p>
          <p>Regular cleaning keeps spaces healthy and less stressful.</p>
          <p>Small daily habits prevent big messes later.</p>
        `,
        questions: [
          {
            prompt: "Sorting laundry helps:",
            choices: ["Protect clothes", "Break the machine", "Waste water"],
            correct: "Protect clothes"
          },
          {
            prompt: "Cleaning regularly makes a space:",
            choices: ["Healthier and calmer", "More chaotic", "Unusable"],
            correct: "Healthier and calmer"
          },
          {
            prompt: "Small daily habits:",
            choices: ["Prevent big messes", "Create more work", "Are pointless"],
            correct: "Prevent big messes"
          }
        ]
      },
      {
        id: 2,
        title: "Basic Repairs",
        lessonHtml: `
          <p>Basic repairs include tasks like changing a lightbulb or tightening a loose screw.</p>
          <p>Using tools safely is more important than rushing.</p>
          <p>Knowing your limits means calling an expert when needed.</p>
        `,
        questions: [
          {
            prompt: "Changing a lightbulb is an example of:",
            choices: ["A basic repair", "Major construction", "Medical work"],
            correct: "A basic repair"
          },
          {
            prompt: "When using tools, you should:",
            choices: ["Prioritize safety", "Rush to finish", "Ignore instructions"],
            correct: "Prioritize safety"
          },
          {
            prompt: "Calling an expert is smart when:",
            choices: ["The job is dangerous or complex", "You are bored", "You want to avoid learning"],
            correct: "The job is dangerous or complex"
          }
        ]
      },
      {
        id: 3,
        title: "Food & Safety",
        lessonHtml: `
          <p>Nutrition labels show calories, ingredients, and key nutrients.</p>
          <p>Leftovers should be stored in the fridge and eaten within a safe time.</p>
          <p>Food poisoning often comes from undercooked or spoiled food.</p>
        `,
        questions: [
          {
            prompt: "Nutrition labels help you:",
            choices: ["Understand what's in your food", "Decorate the package", "Avoid reading"],
            correct: "Understand what's in your food"
          },
          {
            prompt: "Leftovers should be:",
            choices: ["Refrigerated promptly", "Left out all night", "Never covered"],
            correct: "Refrigerated promptly"
          },
          {
            prompt: "Food poisoning can come from:",
            choices: ["Spoiled or undercooked food", "Reading labels", "Using plates"],
            correct: "Spoiled or undercooked food"
          }
        ]
      }
    ]
  },

  // 4) SAFETY & STREET SMARTS
  safety: {
    displayName: "Safety & Street Smarts",
    lessons: [
      {
        id: 1,
        title: "Emergencies",
        lessonHtml: `
          <p>Emergencies are serious situations where someone is in danger or needs urgent help.</p>
          <p>Calling emergency services is for real danger, not minor problems.</p>
          <p>Staying calm and giving clear information helps responders act quickly.</p>
        `,
        questions: [
          {
            prompt: "An emergency is:",
            choices: ["Serious and urgent", "Mild inconvenience", "A joke"],
            correct: "Serious and urgent"
          },
          {
            prompt: "Emergency numbers are for:",
            choices: ["Real danger", "Homework questions", "Ordering food"],
            correct: "Real danger"
          },
          {
            prompt: "In an emergency, you should:",
            choices: ["Stay as calm as possible", "Hang up quickly", "Refuse to speak"],
            correct: "Stay as calm as possible"
          }
        ]
      },
      {
        id: 2,
        title: "Social Safety",
        lessonHtml: `
          <p>Peer pressure is when others push you to do something you don't want to do.</p>
          <p>Boundaries protect your comfort, time, and safety.</p>
          <p>Bullying is repeated harm; telling a trusted adult is a strong response.</p>
        `,
        questions: [
          {
            prompt: "Peer pressure is:",
            choices: ["Being pushed to fit in", "Studying alone", "Helping a friend"],
            correct: "Being pushed to fit in"
          },
          {
            prompt: "Boundaries help you:",
            choices: ["Protect yourself", "Control everyone", "Avoid all people"],
            correct: "Protect yourself"
          },
          {
            prompt: "Bullying should be:",
            choices: ["Reported to a trusted adult", "Kept secret", "Ignored forever"],
            correct: "Reported to a trusted adult"
          }
        ]
      },
      {
        id: 3,
        title: "Online Safety",
        lessonHtml: `
          <p>Phishing tries to trick you into giving passwords or personal info.</p>
          <p>Strong passwords are long, unique, and hard to guess.</p>
          <p>Oversharing online can reveal where you live, go to school, or spend time.</p>
        `,
        questions: [
          {
            prompt: "Phishing is:",
            choices: ["A scam for information", "A sport", "A school test"],
            correct: "A scam for information"
          },
          {
            prompt: "A strong password is:",
            choices: ["Long and unique", "Short and simple", "Your name only"],
            correct: "Long and unique"
          },
          {
            prompt: "Oversharing online can:",
            choices: ["Risk your safety", "Guarantee fame", "Protect privacy"],
            correct: "Risk your safety"
          }
        ]
      }
    ]
  },

  // 5) FUTURE SKILLS & GROWTH
  future: {
    displayName: "Future Skills & Growth",
    lessons: [
      {
        id: 1,
        title: "Time & Task Management",
        lessonHtml: `
          <p>Time management means planning how you use your hours in a day.</p>
          <p>Prioritizing means doing the most important tasks first.</p>
          <p>Breaking big tasks into smaller steps makes them less overwhelming.</p>
        `,
        questions: [
          {
            prompt: "Time management is:",
            choices: ["Planning your time", "Ignoring clocks", "Avoiding all tasks"],
            correct: "Planning your time"
          },
          {
            prompt: "Prioritizing means:",
            choices: ["Doing important tasks first", "Doing random tasks", "Doing nothing"],
            correct: "Doing important tasks first"
          },
          {
            prompt: "Big tasks feel easier when:",
            choices: ["Broken into smaller steps", "Ignored completely", "Done all at once at the last minute"],
            correct: "Broken into smaller steps"
          }
        ]
      },
      {
        id: 2,
        title: "Goal Setting & Motivation",
        lessonHtml: `
          <p>Clear goals give you direction and purpose.</p>
          <p>Tracking progress helps you see how far you've come.</p>
          <p>Small rewards can keep motivation going over time.</p>
        `,
        questions: [
          {
            prompt: "Goals are:",
            choices: ["Targets you aim for", "Random wishes", "Punishments"],
            correct: "Targets you aim for"
          },
          {
            prompt: "Tracking progress helps you:",
            choices: ["See improvement", "Forget your work", "Avoid effort"],
            correct: "See improvement"
          },
          {
            prompt: "Small rewards can:",
            choices: ["Boost motivation", "Erase goals", "Replace effort"],
            correct: "Boost motivation"
          }
        ]
      },
      {
        id: 3,
        title: "Interviewing & Résumés",
        lessonHtml: `
          <p>A résumé is a short document that shows your skills, experience, and education.</p>
          <p>Interviews are conversations to see if you fit a role or opportunity.</p>
          <p>Confidence comes from preparation and practice, not perfection.</p>
        `,
        questions: [
          {
            prompt: "A résumé is:",
            choices: ["A summary of skills and experience", "A grocery list", "A contract"],
            correct: "A summary of skills and experience"
          },
          {
            prompt: "An interview is:",
            choices: ["A conversation about fit", "A written test only", "A party"],
            correct: "A conversation about fit"
          },
          {
            prompt: "Confidence in interviews comes from:",
            choices: ["Preparation and practice", "Never thinking about it", "Guessing answers"],
            correct: "Preparation and practice"
          }
        ]
      }
    ]
  }
};

// ===============================
// LIFE SKILLS — STATE & LOGIC
// ===============================

let lsCurrentSubjectKey = null;
let lsCurrentLessonIndex = 0;
let lsCurrentQuestionIndex = 0;
let lsCurrentLesson = null;
let lsCurrentQuestions = [];
let lsCompletedLessons = {}; // { subjectKey: count }

function goHome() {
  window.location.href = "../arcade/arcade.html";
}

function selectSubject(subjectKey) {
  lsCurrentSubjectKey = subjectKey;
  lsCurrentLessonIndex = 0;
  lsCurrentQuestionIndex = 0;

  document.querySelectorAll(".ls-subject-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.subject === subjectKey);
  });

  showLesson();
  updateGlobalProgress();
}

function showLesson() {
  const subject = lifeSkillsSubjects[lsCurrentSubjectKey];
  if (!subject) return;

  lsCurrentLesson = subject.lessons[lsCurrentLessonIndex];
  if (!lsCurrentLesson) return;

  document.getElementById("ls-lesson-subject-label").textContent = subject.displayName;
  document.getElementById("ls-lesson-title").textContent = lsCurrentLesson.title;
  document.getElementById("ls-lesson-body").innerHTML = lsCurrentLesson.lessonHtml;

  document.getElementById("ls-lesson-card").style.display = "block";
  document.getElementById("ls-quiz-card").style.display = "none";
}

function startQuiz() {
  if (!lsCurrentLesson) return;

  lsCurrentQuestions = lsCurrentLesson.questions;
  lsCurrentQuestionIndex = 0;

  document.getElementById("ls-lesson-card").style.display = "none";
  document.getElementById("ls-quiz-card").style.display = "block";

  renderQuestion();
}

function renderQuestion() {
  const subject = lifeSkillsSubjects[lsCurrentSubjectKey];
  const q = lsCurrentQuestions[lsCurrentQuestionIndex];
  if (!q) return;

  document.getElementById("ls-quiz-subject-label").textContent = subject.displayName;
  document.getElementById("ls-quiz-title").textContent = lsCurrentLesson.title;
  document.getElementById("ls-quiz-lesson-label").textContent =
    `Lesson ${lsCurrentLesson.id} • Question ${lsCurrentQuestionIndex + 1} of ${lsCurrentQuestions.length}`;

  document.getElementById("ls-quiz-q-progress").textContent =
    `${lsCurrentQuestionIndex + 1} / ${lsCurrentQuestions.length}`;

  document.getElementById("ls-quiz-prompt").textContent = q.prompt;

  const choiceButtons = [
    document.getElementById("ls-choice-1"),
    document.getElementById("ls-choice-2"),
    document.getElementById("ls-choice-3")
  ];

  q.choices.forEach((choice, index) => {
    const btn = choiceButtons[index];
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(choice);
  });
}

function handleAnswer(choice) {
  const q = lsCurrentQuestions[lsCurrentQuestionIndex];
  if (!q) return;

  if (choice === q.correct) {
    lsCurrentQuestionIndex++;
    if (lsCurrentQuestionIndex >= lsCurrentQuestions.length) {
      markLessonComplete();
      nextLessonOrSubject();
    } else {
      renderQuestion();
    }
  } else {
    triggerSparkles();
  }
}

function markLessonComplete() {
  if (!lsCurrentSubjectKey) return;
  if (!lsCompletedLessons[lsCurrentSubjectKey]) {
    lsCompletedLessons[lsCurrentSubjectKey] = 0;
  }
  const subject = lifeSkillsSubjects[lsCurrentSubjectKey];
  const totalLessons = subject.lessons.length;

  if (lsCompletedLessons[lsCurrentSubjectKey] < totalLessons) {
    lsCompletedLessons[lsCurrentSubjectKey]++;
  }

  const statusId = `${lsCurrentSubjectKey}-status`;
  const statusEl = document.getElementById(statusId);
  if (statusEl) {
    statusEl.textContent = `${lsCompletedLessons[lsCurrentSubjectKey]} / ${totalLessons} lessons`;
  }

  updateGlobalProgress();
}

function nextLessonOrSubject() {
  const subject = lifeSkillsSubjects[lsCurrentSubjectKey];
  if (!subject) return;

  if (lsCurrentLessonIndex < subject.lessons.length - 1) {
    lsCurrentLessonIndex++;
    document.getElementById("ls-quiz-card").style.display = "none";
    showLesson();
  } else {
    document.getElementById("ls-quiz-card").style.display = "none";
    checkAllComplete();
  }
}

function backToLesson() {
  document.getElementById("ls-quiz-card").style.display = "none";
  document.getElementById("ls-lesson-card").style.display = "block";
}

function updateGlobalProgress() {
  const subjectKeys = Object.keys(lifeSkillsSubjects);
  const totalLessons = subjectKeys.reduce(
    (sum, key) => sum + lifeSkillsSubjects[key].lessons.length,
    0
  );

  const completed = subjectKeys.reduce(
    (sum, key) => sum + (lsCompletedLessons[key] || 0),
    0
  );

  const percent = totalLessons === 0 ? 0 : Math.round((completed / totalLessons) * 100);

  const fill = document.getElementById("ls-progress-fill");
  const text = document.getElementById("ls-progress-text");
  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${percent}%`;

  if (percent === 100) {
    showCompletionOverlay();
  }
}

function triggerSparkles() {
  const sparkles = document.getElementById("ls-sparkles");
  if (!sparkles) return;
  sparkles.classList.add("active");
  setTimeout(() => sparkles.classList.remove("active"), 400);
}

function showCompletionOverlay() {
  const overlay = document.getElementById("ls-grad-overlay");
  if (overlay) overlay.style.display = "flex";
}

// Initialize default subject on load
window.addEventListener("load", () => {
  selectSubject("money");
});
