/* ============================================================
   TANUKI LINES (unchanged)
   ============================================================ */

const tanukiLines = [
  "I’m ready when you are. Pick a game!",
  "Every game you play feeds my magic.",
  "Study Gate boosts your XP the fastest.",
  "Short bursts are best. One game at a time."
];

let tanukiLineIndex = 0;
const tanukiLineEl = document.getElementById("tanuki-line");

function cycleTanukiLine() {
  tanukiLineIndex = (tanukiLineIndex + 1) % tanukiLines.length;
  tanukiLineEl.textContent = tanukiLines[tanukiLineIndex];
}

setInterval(cycleTanukiLine, 8000);


/* ============================================================
   FOCUS MODE TOGGLE
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
   YOUTUBE BUTTON — Gate Ritual Redirect
   ============================================================ */

const youtubeBtn = document.getElementById("youtube-btn");

youtubeBtn.addEventListener("click", () => {
  const focusMode = localStorage.getItem("focusModeEnabled") === "true";

  if (!focusMode) {
    // Arcade Mode → open YouTube normally
    window.location.href = "https://www.youtube.com";
    return;
  }

  // Focus Mode → redirect to Gate Ritual
  window.location.href = "../gate/index.html";
});
