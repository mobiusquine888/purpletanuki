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
  if (!rituals.length) return;

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

  // Slider fill ritual
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

  // Choice pills ritual
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

  // Image tap ritual (console-style)
  if (ritual.type === "image_tap") {
    const wrapper = document.createElement("div");
    wrapper.className = "ls-image-tap-wrapper";

    const img = document.createElement("img");
    img.src = ritual.image;
    img.alt = ritual.title;
    img.className = "ls-image-tap-img";
    wrapper.appendChild(img);

    (ritual.items || []).forEach(item => {
      const hotspot = document.createElement("div");
      hotspot.className = "ls-hotspot";
      hotspot.dataset.correct = item.correct ? "true" : "false";
      hotspot.style.left = item.x + "%";
      hotspot.style.top = item.y + "%";

      hotspot.addEventListener("click", () => {
        hotspot.classList.toggle("selected");
      });

      wrapper.appendChild(hotspot);
    });

    interactionAreaEl.appendChild(wrapper);
  }
}

function completeRitual() {
  const ritual = rituals[currentRitualIndex];

  // Optional correctness check for image_tap / choice_pills
  if (ritual.type === "image_tap") {
    const hotspots = Array.from(
      interactionAreaEl.querySelectorAll(".ls-hotspot")
    );
    const allCorrectSelected = hotspots.every(h => {
      const isCorrect = h.dataset.correct === "true";
      const isSelected = h.classList.contains("selected");
      return (isCorrect && isSelected) || (!isCorrect && !isSelected);
    });

    if (!allCorrectSelected) {
      tanukiMessageEl.textContent = "Try tapping the items Tanuki really needs.";
      return;
    }
  }

  if (ritual.type === "choice_pills" && ritual.correct) {
    const selected = Array.from(
      interactionAreaEl.querySelectorAll(".ls-pill.selected")
    ).map(p => p.textContent);
    const correctSet = new Set(ritual.correct);
    const selectedSet = new Set(selected);

    const allCorrect =
      correctSet.size === selectedSet.size &&
      [...correctSet].every(v => selectedSet.has(v));

    if (!allCorrect) {
      tanukiMessageEl.textContent = "Look again—what would help Tanuki most?";
      return;
    }
  }

  // Progress
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
    ritualDescEl.textContent =
      "You’ve grown your Life Tree for today. Come back tomorrow.";
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

