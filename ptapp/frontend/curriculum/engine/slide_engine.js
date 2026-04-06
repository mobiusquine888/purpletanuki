let slides = [];
let currentIndex = 0;

async function loadUnit() {
  try {
    const url = window.PTAPP_UNIT_JSON;
    const res = await fetch(url);
    const data = await res.json();

    slides = data.slides || [];
    document.getElementById("unit-title").innerText = data.unitTitle || "PTapp";
    document.getElementById("unit-subtitle").innerText = data.unitId || "";

    renderSlide();
    updateProgress();
  } catch (e) {
    console.error("Failed to load unit", e);
    document.getElementById("slide-container").innerHTML =
      "<p>Unable to load this adventure.</p>";
  }
}

function renderSlide() {
  const container = document.getElementById("slide-container");
  const slide = slides[currentIndex];
  if (!slide) {
    container.innerHTML = "<p>End of adventure.</p>";
    return;
  }

  switch (slide.type) {
    case "teach":
    case "example":
      container.innerHTML = renderTeachSlide(slide);
      break;
    case "question":
      container.innerHTML = renderQuestionSlide(slide);
      break;
    case "feedback":
      container.innerHTML = renderFeedbackSlide(slide);
      break;
    case "mastery":
      container.innerHTML = renderMasterySlide(slide);
      break;
    default:
      container.innerHTML = "<p>Unknown slide type.</p>";
  }
}

function renderTeachSlide(slide) {
  return `
    <div>
      ${slide.image ? `<img src="${slide.image}" class="pt-slide-image" />` : ""}
      <div class="pt-slide-title">${slide.title || ""}</div>
      <div class="pt-slide-body">${slide.body || ""}</div>
      <div class="pt-btn-row">
        <button class="pt-big-btn" onclick="nextSlide()">Next →</button>
      </div>
    </div>
  `;
}

function renderQuestionSlide(slide) {
  if (slide.mode === "yesno") {
    return `
      <div>
        <div class="pt-slide-title">${slide.prompt || ""}</div>
        <div class="pt-btn-row">
          <button class="pt-big-btn" onclick="checkAnswer('yes')">Yes</button>
          <button class="pt-big-btn" onclick="checkAnswer('no')">No</button>
        </div>
      </div>
    `;
  }

  // default: choices
  const choicesHtml = (slide.choices || [])
    .map(
      (c) => `
      <button class="pt-choice-btn" onclick="checkAnswer('${c.value}')">
        ${c.label}
      </button>
    `
    )
    .join("");

  return `
    <div>
      <div class="pt-slide-title">${slide.prompt || ""}</div>
      <div class="pt-btn-row">
        ${choicesHtml}
      </div>
    </div>
  `;
}

function renderFeedbackSlide(slide) {
  return `
    <div>
      <div class="pt-gentle-text">${slide.message || "You’re learning."}</div>
      <div class="pt-btn-row">
        <button class="pt-big-btn" onclick="nextSlide()">Continue →</button>
      </div>
    </div>
  `;
}

function renderMasterySlide(slide) {
  return `
    <div>
      <div class="pt-slide-title">${slide.title || "You did it!"}</div>
      <div class="pt-slide-body">${slide.message || ""}</div>
      <div class="pt-btn-row">
        ${
          slide.nextTarget
            ? `<button class="pt-big-btn" onclick="goTo('${slide.nextTarget}')">
                 ${slide.nextLabel || "Next Adventure →"}
               </button>`
            : `<button class="pt-big-btn" onclick="goHome()">Home</button>`
        }
      </div>
    </div>
  `;
}

function checkAnswer(value) {
  const slide = slides[currentIndex];
  const correct = slide.answer;

  if (value === correct) {
    // gentle success
    nextSlide();
  } else {
    // gentle feedback slide if defined, else stay
    if (slide.feedback && slide.feedback.incorrect) {
      const container = document.getElementById("slide-container");
      container.innerHTML = `
        <div>
          <div class="pt-gentle-text">${slide.feedback.incorrect}</div>
          <div class="pt-btn-row">
            <button class="pt-big-btn" onclick="renderSlide()">Try again</button>
          </div>
        </div>
      `;
    } else {
      alert("Let’s try that again.");
    }
  }
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateProgress();
    renderSlide();
  } else {
    updateProgress();
  }
}

function updateProgress() {
  const pct = slides.length
    ? Math.floor(((currentIndex + 1) / slides.length) * 100)
    : 0;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-text").innerText = pct + "%";
}

function goHome() {
  window.location.href = "/home.html";
}

function goTo(path) {
  window.location.href = path;
}

loadUnit();
