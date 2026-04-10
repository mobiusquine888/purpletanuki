function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function setupSubjectsPage() {
  const cards = document.querySelectorAll(".el-card");
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const category = card.getAttribute("data-category");
      window.location.href = `lesson.html?category=${category}`;
    });
  });
}

async function setupLessonPage() {
  const contentEl = document.getElementById("cf-lesson-content");
  const titleEl = document.getElementById("cf-lesson-title");
  const subtitleEl = document.getElementById("cf-lesson-subtitle");
  const nextButton = document.getElementById("cf-next-step");

  if (!contentEl) return;

  const category = getQueryParam("category");

  const curriculum = await (await fetch("curriculum.json")).json();
  const lessons = curriculum[category];
  const lessonMeta = pickRandom(lessons);
  const lesson = await (await fetch(lessonMeta.file)).json();

  titleEl.textContent = lesson.title;
  subtitleEl.textContent = lesson.subtitle || "";

  let index = 0;

  function renderStep() {
    const step = lesson.steps[index];
    if (!step) {
      contentEl.innerHTML = `<p class="cf-step-text">Great job! You finished this lesson.</p>`;
      nextButton.textContent = "Try another";
      nextButton.onclick = () => window.location.href = "subjects.html";
      return;
    }

    contentEl.innerHTML = `
      <p class="cf-step-text">${step.text}</p>
      ${step.hint ? `<p class="cf-step-hint">${step.hint}</p>` : ""}
    `;
  }

  renderStep();

  nextButton.addEventListener("click", () => {
    index++;
    renderStep();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupSubjectsPage();
  setupLessonPage();
});
