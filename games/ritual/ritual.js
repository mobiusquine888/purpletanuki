// ============================================================
// RITUAL CONFIG
// ============================================================

// How long the breathing ritual lasts before the gate can open (ms)
const RITUAL_DURATION = 4000; // 1 cycle; bump to 8000 for 2 cycles

const phaseEl = document.getElementById("ritual-phase");
const subtextEl = document.getElementById("ritual-subtext");
const buttonEl = document.getElementById("ritual-button");
const tanukiImg = document.querySelector(".tanuki-orb-image");

let ritualReady = false;


// ============================================================
// START RITUAL
// ============================================================

function startRitual() {
  // Phase 1 — Breathing
  phaseEl.textContent = "Breathe with me…";
  subtextEl.innerHTML = "Inhale as the light grows.<br>Exhale as it fades.";
  buttonEl.textContent = "Opening gate…";
  buttonEl.disabled = true;

  // Tanuki breathing animation (gentle scale pulse)
  tanukiImg.style.animation = "tanuki-breathe 4s ease-in-out infinite";

  // After ritual duration → unlock gate
  setTimeout(() => {
    ritualReady = true;

    // Tanuki shifts to “ready” pose
    tanukiImg.src = "images/tanuki_ready.png?v=1";
    tanukiImg.style.animation = "tanuki-ready-pop 0.6s ease forwards";

    // Update text
    phaseEl.textContent = "The gate is ready.";
    subtextEl.textContent = "Your challenge awaits.";
    buttonEl.textContent = "Enter the gate";
    buttonEl.disabled = false;

  }, RITUAL_DURATION);
}


// ============================================================
// BUTTON → ENTER GATE
// ============================================================

buttonEl.addEventListener("click", () => {
  if (!ritualReady) return;

  // Mystical fade-out
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    // ⭐ Auto-route based on difficulty selection stored earlier
    const difficulty = localStorage.getItem("ritualDifficulty") || "easy";

    if (difficulty === "easy") {
      // Practice Mode for easy subjects
      window.location.href = "../practice/index.html";
    } else {
      // Star Catch for medium/hard or focus challenges
      window.location.href = "../reaction/index.html";
    }

  }, 600);
});


// ============================================================
// INIT
// ============================================================

startRitual();


