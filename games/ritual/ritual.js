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

    // Ready pose
    tanukiImg.src = "/games/ritual/images/tanuki_ready.png?v=1";
    tanukiImg.style.animation = "tanuki-ready-pop 0.6s ease forwards";

    // Update text
    phaseEl.textContent = "The gate is ready.";
    subtextEl.textContent = "You may browse now.";
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
    // ⭐ REFORGED: Go to the Browser World
    window.location.href = "/games/browser/index.html";
  }, 600);
});


// ============================================================
// INIT
// ============================================================

startRitual();




