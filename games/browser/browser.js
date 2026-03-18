// ===============================
//  TANUKI BROWSER — LOGIC
// ===============================

// DOM references
const urlInput = document.getElementById("urlInput");
const goBtn = document.getElementById("goBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const browserFrame = document.getElementById("browserFrame");

// ===============================
//  DANGEROUS SITES LIST
// ===============================

const blockedSites = [
  "youtube.com",
  "m.youtube.com",
  "tiktok.com",
  "reddit.com",
  "instagram.com",
  "twitter.com",
  "x.com"
];

// ===============================
//  UNLOCK TIMER
// ===============================

function isSiteUnlocked(hostname) {
  const key = "unlock_" + hostname;
  const expires = localStorage.getItem(key);

  if (!expires) return false;

  const now = Date.now();
  return now < Number(expires);
}

function unlockSite(hostname, minutes) {
  const key = "unlock_" + hostname;
  const expires = Date.now() + minutes * 60 * 1000;
  localStorage.setItem(key, expires);
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
    const hostname = new URL(url).hostname;

    // Check if site is blocked
    if (blockedSites.some(site => hostname.includes(site))) {

      // If not unlocked → send to Gate Ritual
      if (!isSiteUnlocked(hostname)) {
        browserFrame.src = "../gate/index.html?site=" + encodeURIComponent(url);
        return;
      }
    }

    // Otherwise load normally
    browserFrame.src = url;

  } catch (e) {
    alert("Invalid URL");
  }
}

// ===============================
//  BACK / FORWARD
// ===============================

backBtn.onclick = () => browserFrame.contentWindow.history.back();
forwardBtn.onclick = () => browserFrame.contentWindow.history.forward();

// ===============================
//  GO BUTTON
// ===============================

goBtn.onclick = loadUrl;

// Press Enter to go
urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadUrl();
});

// ===============================
//  MESSAGE FROM GATE RITUAL
// ===============================

window.addEventListener("message", (event) => {
  if (event.data.type === "unlock") {
    const hostname = event.data.hostname;
    const minutes = event.data.minutes;

    unlockSite(hostname, minutes);

    // Load the site they originally wanted
    browserFrame.src = event.data.url;
  }
});
