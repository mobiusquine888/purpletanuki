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
   FOCUS MODE TOGGLE (STEP 1)
   ============================================================ */

const focusToggle = document.getElementById("focus-toggle");

function updateFocusToggle() {
  const enabled = localStorage.getItem("focusModeEnabled") === "true";
  focusToggle.textContent = `Focus Mode: ${enabled ? "ON" : "OFF"}`;
}

focusToggle.addEventListener("click", () => {
  const current = localStorage.getItem("focusModeEnabled") === "true";
  localStorage.setItem("focusModeEnabled", !current);
  updateFocusToggle();
});

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
   YOUTUBE BUTTON — STEP 2 (Gate Ritual Redirect)
   ============================================================ */

const youtubeBtn = document.getElementById("youtube-btn");

youtubeBtn.addEventListener("click", () => {
  const focusMode = localStorage.getItem("focusModeEnabled") === "true";

  if (!focusMode) {
    // Arcade Mode → open YouTube normally
    window.location.href = "https://www.youtube.com";
    return;
  }

  // Focus Mode → send user to Gate Ritual instead
  localStorage.setItem("nextUnlockTarget", "youtube");
  window.location.href = "../gate/index.html";  // You will create this in Step 3
});
