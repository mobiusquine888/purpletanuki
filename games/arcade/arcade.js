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
   FOCUS MODE TOGGLE (still works, but no longer controls YouTube)
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
   NEW: CENTERED PORTAL BAR — Parent-Controlled Behavior
   ============================================================ */

// Load parent settings
const parentSettings = JSON.parse(localStorage.getItem("pt_parent_settings")) || {
  unlockDuration: 7,
  yt: true,
  tiktok: false,
  roblox: false,
  customSiteToggle: false
};

// Elements
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

// Check if URL is allowed by parent settings
function isAllowedURL(url) {
  const allowed = [];

  if (parentSettings.yt) allowed.push("youtube.com", "youtu.be");
  if (parentSettings.tiktok) allowed.push("tiktok.com");
  if (parentSettings.roblox) allowed.push("roblox.com");

  // If parent allows custom URLs → everything is allowed
  if (parentSettings.customSiteToggle) return true;

  // Otherwise check against allowed list
  return allowed.some(domain => url.includes(domain));
}

goBtn.addEventListener("click", () => {
  const raw = urlInput.value;
  const url = normalizeUrl(raw);

  if (!url) {
    alert("Try typing a site first.");
    return;
  }

  // Check if portal is unlocked
  const unlocked = localStorage.getItem("pt_portal_unlocked") === "true";

  if (!unlocked) {
    alert("The Tanuki has sealed this portal. Complete your lesson to open it.");
    return;
  }

  // Check if URL is allowed by parent settings
  if (!isAllowedURL(url)) {
    alert("This portal is restricted by your parent or teacher.");
    return;
  }

  // Save the URL so the browser page knows what to load
  localStorage.setItem("pt_active_url", url);

  // Open the Tanuki Browser Page
  window.location.href = "/games/browser/index.html";
});


