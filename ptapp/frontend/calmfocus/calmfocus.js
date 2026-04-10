// calmfocus.js
// Middle-school friendly: small, clear functions, no fancy stuff.

// Helper: get query parameter from URL (e.g., ?category=breathing)
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Helper: pick a random item from an array
function pickRandom(array) {
  if (!array || array.length === 0) return null;
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// When we are on subjects.html, wire up the category buttons
function setupSubjectsPage() {
  const cards = document.querySelectorAll(".cf-card");
  if (!cards || cards.length === 0) return; // Not on subjects page

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      if (!category) return;
      // Go to lesson.html with the chosen category
      window.location.href = `lesson.html?category=${encodeURIComponent(category)}`;
    });
  });
}

// When we are on lesson.html, load a ritual and show its steps
async function setupLessonPage() {
  const contentEl = document.getElementById("cf-lesson-content");
  const titleEl = document.getElementById("cf-lesson-title");
  const subtitleEl = document.getElementById("cf-lesson-subtitle");
  const nextButton = document.getElementById("cf-next-step");

  if (!contentEl || !nextButton) return; // Not on lesson page

  const category = getQueryParam("category") || "breathing";

  try {
    // 1. Load curriculum.json
    const curriculumRes = await fetch("curriculum.json");
    const curriculum = await curriculumRes.json();

    const ritualsForCategory = curriculum[category];
    if (!ritualsForCategory || ritualsForCategory.length === 0) {
      contentEl.textContent = "No rituals found for this category yet.";
      return;
    }

    // 2. Pick a random ritual from that category
    const ritualMeta = pickRandom(ritualsForCategory);

    // 3. Load the ritual JSON file
    const ritualRes = await fetch(ritualMeta.file);
    const ritual = await ritualRes.json();

    // 4. Set title and subtitle
    titleEl.textContent = ritual.title || ritualMeta.title || "Calm Ritual";
    if (subtitleEl) {
      subtitleEl.textContent =
        ritual.subtitle || "Take a tiny calm moment with Tanuki.";
    }

    // 5. Show steps one by one
    let currentStepIndex = 0;

    function renderStep() {
      const step = ritual.steps[currentStepIndex];
      if (!step) {
        contentEl.innerHTML = `
          <p class="cf-step-text">You finished this ritual. Nice work.</p>
        `;
        nextButton.textContent = "Do another ritual";
        nextButton.onclick = () => {
          // Go back to subjects to pick something new
          window.location.href = "subjects.html";
        };
        return;
      }

      contentEl.innerHTML = `
        <p class="cf-step-text">${step.text}</p>
        ${
          step.hint
            ? `<p class="cf-step-hint">${step.hint}</p>`
            : ""
        }
      `;
    }

    // Initial render
    renderStep();

    // Next button behavior
    nextButton.addEventListener("click", () => {
      currentStepIndex += 1;
      renderStep();
    });
  } catch (err) {
    console.error("Error loading ritual:", err);
    contentEl.textContent = "Oops. Something went wrong loading this ritual.";
  }
}

// Run setup functions depending on which page we’re on
document.addEventListener("DOMContentLoaded", () => {
  setupSubjectsPage();
  setupLessonPage();
});
