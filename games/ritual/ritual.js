// ============================================================
// RITUAL CONFIG
// ============================================================

// How long the breathing ritual lasts before the gate can open (ms)
const RITUAL_DURATION = 6000; // 1 cycle; bump to 8000 for 2 cycles

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
setTimeout(() => {
  tanukiImg.style.animation = "tanuki-breathe 4s ease-in-out infinite";
}, 1500); // wait for fade-in to finish

  // After ritual duration → unlock gate
  setTimeout(() => {
    ritualReady = true;

    // ⭐ Unlock the portal for the Arcade
    localStorage.setItem("pt_portal_unlocked", "true");

    // Ready pose
// Hard cut: instantly switch to ready pose
tanukiImg.style.animation = "none"; // stop breathing
tanukiImg.src = "/games/ritual/images/tanuki_ready.png?v=1";

    // Update text
    phaseEl.textContent = "The gate is ready.";
    subtextEl.textContent = "Return to the Arcade to use the portal.";
    buttonEl.textContent = "Return to Arcade";
    buttonEl.disabled = false;

  }, RITUAL_DURATION);
}


// ============================================================
// BUTTON → RETURN TO ARCADE
// ============================================================

buttonEl.addEventListener("click", () => {
  if (!ritualReady) return;

  // Mystical fade-out
  document.body.style.transition = "opacity 0.6s ease";
  document.body.style.opacity = "0";

  setTimeout(() => {
    // ⭐ REFORGED: Go back to the Arcade Hub
    window.location.href = "/games/arcade/index.html";
  }, 600);
});


// ============================================================
// INIT
// ============================================================

startRitual();



