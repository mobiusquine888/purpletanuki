// calmfocus.js
// Clean, predictable, middle‑school friendly logic.
// No fancy patterns. No async traps. No layout collisions.

// ----------------------------------------------------
// Helpers
// ----------------------------------------------------

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function pickRandom(array) {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
}

// ----------------------------------------------------
// Subjects Page (subjects.html)
// ----------------------------------------------------

function setupSubjectsPage() {
  const cards = document.querySelectorAll(".cf-card");
  if (!cards || cards.length === 0) return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      if (!category) return;

      // Navigate to lesson page with category
      window.location.href = `lesson.html?category=${encodeURIComponent(category)}`;
    });
  });
}

// ----------------------------------------------------
// Lesson Page (lesson.html)
// ----------------------------------------------------

async function setupLessonPage() {
  const contentEl = document.getElementById("cf-lesson-content");
  const titleEl = document.getElementById("cf-lesson-title");
  const subtitleEl = document.getElementById("cf-lesson-subtitle");
  const nextButton = document.getElementById("cf-next-step");

  // If these don't exist, we are not on lesson.html
  if (!contentEl || !nextButton) return;

  const category = getQueryParam("category") || "breathing";

  try {
    // Load curriculum
    const curriculumRes = await fetch("curriculum.json");
    const curriculum = await curriculumRes.json();

    const ritualsForCategory = curriculum[category];
    if (!ritualsForCategory || ritualsForCategory.length === 0) {
      contentEl.innerHTML = `
        <p class="cf-step-text">No rituals found for this category yet.</p>
      `;
      return;
    }

    // Pick a ritual
    const ritualMeta = pickRandom(ritualsForCategory);
    const ritualRes = await fetch(ritualMeta.file);
    const ritual = await ritualRes.json();

    // Title + subtitle
    titleEl.textContent = ritual.title || ritualMeta.title || "Calm Ritual";
    subtitleEl.textContent =
      ritual.subtitle || "Take a tiny calm moment with Tanuki.";

    // Step progression
    let currentStepIndex = 0;

    function renderStep() {
      const step = ritual.steps[currentStepIndex];

      if (!step) {
        // Ritual complete
        contentEl.innerHTML = `
          <p class="cf-step-text">You finished this ritual. Nice work.</p>
        `;
        nextButton.textContent = "Do another ritual";
        nextButton.onclick = () => {
          window.location.href = "subjects.html";
        };
        return;
      }

      // Render step
      contentEl.innerHTML = `
        <p class="cf-step-text">${step.text}</p>
        ${step.hint ? `<p class="cf-step-hint">${step.hint}</p>` : ""}
      `;
    }

    // First step
    renderStep();

    // Next button
    nextButton.addEventListener("click", () => {
      currentStepIndex += 1;
      renderStep();
    });

  } catch (err) {
    console.error("Error loading ritual:", err);
    contentEl.innerHTML = `
      <p class="cf-step-text">Oops. Something went wrong loading this ritual.</p>
    `;
  }
}

// ----------------------------------------------------
// Init
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  setupSubjectsPage();
  setupLessonPage();
});


