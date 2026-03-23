// ===============================
//  TANUKI BROWSER — REFORGED
// ===============================

// DOM references
const urlInput = document.getElementById("urlInput");
const goBtn = document.getElementById("goBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const browserFrame = document.getElementById("browserFrame");

// ===============================
//  LOAD PARENT SETTINGS
// ===============================

const parentSettings = JSON.parse(localStorage.getItem("pt_parent_settings")) || {
  unlockDuration: 7
};

const UNLOCK_MINUTES = Number(parentSettings.unlockDuration || 7);

// ===============================
//  LOAD THE URL FROM ARCADE
// ===============================

const activeUrl = localStorage.getItem("pt_active_url");

if (!activeUrl) {
  alert("No site selected. Returning to Arcade.");
  window.location.href = "/games/arcade/index.html";
} else {
  urlInput.value = activeUrl;
  browserFrame.src = activeUrl;
}

// ===============================
//  URL CLEANER
// ===============================

function cleanUrl(raw) {
  let url = raw.trim();
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }
  return url;
}

// ===============================
//  LOAD URL INTO IFRAME
// ===============================

function loadUrl() {
  const raw = urlInput.value;
  const url = cleanUrl(raw);

  try {
    browserFrame.src = url;
    localStorage.setItem("pt_active_url", url);
  } catch (e) {
    alert("Invalid URL");
  }
}

goBtn.onclick = loadUrl;

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadUrl();
});

// ===============================
//  BACK / FORWARD
// ===============================

backBtn.onclick = () => browserFrame.contentWindow.history.back();
forwardBtn.onclick = () => browserFrame.contentWindow.history.forward();

// ===============================
//  7-MINUTE TIMER
// ===============================

let timeLeft = UNLOCK_MINUTES * 60; // seconds

const timer = setInterval(() => {
  timeLeft--;

  // 1-minute warning
  if (timeLeft === 60) {
    alert("The portal flickers… your time is almost up.");
  }

  // Time expired
  if (timeLeft <= 0) {
    clearInterval(timer);

    // Lock the portal again
    localStorage.removeItem("pt_portal_unlocked");

    alert("The portal closes. Return to the ritual to reopen it.");

    // Return to Gate Ritual
    window.location.href = "/games/ritual/index.html";
  }
}, 1000);

