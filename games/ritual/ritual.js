// How long the breathing ritual lasts before the gate can open (ms)
const RITUAL_DURATION = 4000; // 1 full breathe cycle; bump to 8000 for 2 cycles

const phaseEl = document.getElementById("ritual-phase");
const subtextEl = document.getElementById("ritual-subtext");
const buttonEl = document.getElementById("ritual-button");

let ritualComplete = false;

function startRitual() {
  // Phase 1: breathing
  phaseEl.textContent = "Breathe with me…";
  subtextEl.textContent = "Inhale as the light grows. Exhale as it fades.";
  buttonEl.textContent = "Opening gate…";
  buttonEl.disabled = true;

  setTimeout(() => {
    ritualComplete = true;
    phaseEl.textContent = "The gate is ready.";
    subtextEl.textContent = "Tap to enter the Tanuki Arcade.";
    buttonEl.textContent = "Open the gate";
    buttonEl.disabled = false;
  }, RITUAL_DURATION);
}

buttonEl.addEventListener("click", () => {
  if (!ritualComplete) return;

  // Simple fade-out transition, then go to Arcade Hub
  document.body.style.transition = "opacity 0.5s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    // TODO: update this URL to your real Arcade Hub
    window.location.href = "/games/index.html";
  }, 500);
});

startRitual();

