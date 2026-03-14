/* ============================================================
   TANUKI LINES (unchanged)
   ============================================================ */

const tanukiLines = [
  "I’m ready when you are. Pick a game!",
  "Every game you play feeds my magic.",
  "Study Gate boosts your XP the fastest.",
  "Short bursts are best. One game at a time.",
];

let tanukiLineIndex = 0;
const tanukiLineEl = document.getElementById("tanuki-line");

function cycleTanukiLine() {
  tanukiLineIndex = (tanukiLineIndex + 1) % tanukiLines.length;
  tanukiLineEl.textContent = tanukiLines[tanukiLineIndex];
}

setInterval(cycleTanukiLine, 8000);


/* ============================================================
   FOCUS MODE TOGGLE (NEW — STEP 1)
   ============================================================ */

const focusToggle = document.getElementById("focus-toggle");

// Update the text on screen based on stored value
function updateFocusToggle() {
  const enabled = localStorage.getItem("focusModeEnabled") === "true";
  focusToggle.textContent = `Focus Mode: ${enabled ? "ON" : "OFF"}`;
}

// When the user taps the toggle, flip the value
focusToggle.addEventListener("click", () => {
  const current = localStorage.getItem("focusModeEnabled") === "true";
  localStorage.setItem("focusModeEnabled", !current);
  updateFocusToggle();
});

// Initialize on load
updateFocusToggle();


/* ============================================================
   GAME CARD CLICK HANDLERS (unchanged)
   ============================================================ */

const cards = document.querySelectorAll(".arcade-card:not(.arcade-card-disabled)");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const game = card.getAttribute("data-game");
    if (!game) return;

    const routes = {
      knowledge: "/games/knowledge/index.html",
      reaction: "/games/reaction/index.html",
      memory: "/games/memory/index.html",
      swipe: "/games/swipe/index.html",
    };

    const target = routes[game];
    if (!target) return;

    window.location.href = target;
  });
});


/* ============================================================
   YOUTUBE BUTTON (PREP FOR STEP 2)
   ============================================================ */

const youtubeBtn = document.getElementById("youtube-btn");

// For now, YouTube still opens normally.
// Step 2 will replace this with Gate Ritual logic.
youtubeBtn.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com";
});
