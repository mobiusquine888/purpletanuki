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


/* ============================================================
   NEW: URL BAR LOGIC (Fake Browser Behavior)
   ============================================================ */

const urlInput = document.getElementById("arcade-url-input");
const goBtn = document.getElementById("arcade-go-btn");

// Normalize URL (add https:// if missing)
function normalizeUrl(raw) {
  let url = raw.trim();
  if (!url) return "";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  return url;
}

goBtn.addEventListener("click", () => {
  const raw = urlInput.value;
  const url = normalizeUrl(raw);

  if (!url) {
    alert("Try typing a site first.");
    return;
  }

  const isYouTube =
    url.includes("youtube.com") || url.includes("youtu.be");

  const focusMode = localStorage.getItem("focusModeEnabled") === "true";

  // If Focus Mode is OFF → allow YouTube normally
  if (!focusMode) {
    if (isYouTube) {
      window.location.href = "https://www.youtube.com";
      return;
    } else {
      alert("Tanuki only opens YouTube for now.");
      return;
    }
  }

  // Focus Mode ON → block and redirect to Gate Ritual
  if (isYouTube) {
    alert("Tanuki says: Not yet. Let's do your learning quest first.");
    setTimeout(() => {
      window.location.href = "../gate/index.html";
    }, 800);
    return;
  }

  // Any other site → block gently
  alert("Tanuki only opens special sites after your learning quest.");
});

