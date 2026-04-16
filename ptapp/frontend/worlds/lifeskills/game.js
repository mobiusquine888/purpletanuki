let rituals = [];
let affirmations = [];
let currentRitualIndex = 0;
let seeds = 0;
let sessionGoal = 3;

const ritualTitleEl = document.getElementById("ritualTitle");
const ritualDescEl = document.getElementById("ritualDescription");
const interactionAreaEl = document.getElementById("interactionArea");
const completeBtn = document.getElementById("completeRitualBtn");
const tanukiMessageEl = document.getElementById("tanukiMessage");
const seedCountEl = document.getElementById("seedCount");
const sessionGoalEl = document.getElementById("sessionGoal");

async function loadWorldConfig() {
  try {
    const res = await fetch("world.json");
    const data = await res.json();
    rituals = data.rituals || [];
    affirmations = data.affirmations || [];
    sessionGoal = data.sessionGoal || 3;
    sessionGoalEl.textContent = sessionGoal;
    currentRitualIndex = 0;
    seeds = 0;
    seedCountEl.textContent = seeds;
    showCurrentRitual();
  } catch (e) {
    ritualTitleEl.textContent = "Error loading rituals";
    ritualDescEl.textContent = "Please try again later.";
    console.error(e);
  }
}

function showCurrentRitual() {
  if (currentRitualIndex >= rituals.length) {
    currentRitualIndex = 0;
  }

  const ritual = rituals[currentRitualIndex];
  ritualTitleEl.textContent = ritual.title;
  ritualDescEl.textContent = ritual.description;
  tanukiMessageEl.textContent = "Let’s complete this ritual together.";

  renderInteraction(ritual);
}

function renderInteraction(ritual) {
  interactionAreaEl.innerHTML = "";

  if (ritual.type === "slider_fill") {
    const track = document.createElement("div");
    track.className = "ls-slider-track";

    const fill = document.createElement("div");
    fill.className = "ls-slider-fill";
    track.appendChild(fill);

    interactionAreaEl.appendChild(track);

    let progress = 0;
    track.addEventListener("click", () => {
      progress = Math.min(100, progress + 20);
      fill.style.width = progress + "%";
    });
  }

  if (ritual.type === "choice_pills") {
    const container = document.createElement("div");
    container.className = "ls-pill-options";

    ritual.options.forEach(option => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "ls-pill";
      pill.textContent = option;
      pill.addEventListener("click", () => {
        pill.classList.toggle("selected");
      });
      container.appendChild(pill);
    });

    interactionAreaEl.appendChild(container);
  }
}

function completeRitual() {
  seeds += 1;
  seedCountEl.textContent = seeds;

  const affirmation =
    affirmations[Math.floor(Math.random() * affirmations.length)] ||
    "You’re growing stronger every day.";
  tanukiMessageEl.textContent = affirmation;

  // Simple tree pulse
  const tree = document.querySelector(".ls-tree");
  if (tree) {
    tree.style.transform = "scale(1.05)";
    setTimeout(() => {
      tree.style.transform = "scale(1)";
    }, 250);
  }

  if (seeds >= sessionGoal) {
    ritualTitleEl.textContent = "Rituals Complete";
    ritualDescEl.textContent = "You’ve grown your Life Tree for today. Come back tomorrow.";
    interactionAreaEl.innerHTML = "";
    completeBtn.disabled = true;
    completeBtn.textContent = "Come Back Tomorrow";
    return;
  }

  currentRitualIndex += 1;
  showCurrentRitual();
}

completeBtn.addEventListener("click", completeRitual);

loadWorldConfig();
