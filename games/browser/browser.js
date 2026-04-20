const urlForm = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const browserFrame = document.getElementById("browserFrame");
const lockOverlay = document.getElementById("lockOverlay");
const startRitualBtn = document.getElementById("startRitualBtn");
const timerBar = document.getElementById("timerBar");
const timerText = document.getElementById("timerText");
const lockIcon = document.getElementById("lockIcon");

const BLOCKED_DOMAINS = ["youtube.com", "www.youtube.com", "tiktok.com", "www.tiktok.com"];
const SESSION_SECONDS = 600; // 10 minutes

let unlocked = false;
let timerId = null;
let remaining = 0;
let pendingTarget = null;

function normalizeUrl(input) {
  let value = input.trim();
  if (!value) return "";
  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    value = "https://" + value;
  }
  return value;
}

function isBlocked(url) {
  try {
    const u = new URL(url);
    return BLOCKED_DOMAINS.includes(u.hostname);
  } catch {
    return false;
  }
}

function startTimer() {
  remaining = SESSION_SECONDS;
  timerBar.hidden = false;
  updateTimerText();
  timerId = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      relockBrowser();
    } else {
      updateTimerText();
    }
  }, 1000);
}

function updateTimerText() {
  const m = String(Math.floor(remaining / 60)).padStart(2, "0");
  const s = String(remaining % 60).padStart(2, "0");
  timerText.textContent = `${m}:${s}`;
}

function relockBrowser() {
  unlocked = false;
  lockOverlay.style.display = "flex";
  lockIcon.textContent = "🔒";
  browserFrame.src = "about:blank";
  timerBar.hidden = true;
}

function unlockBrowser(targetUrl) {
  unlocked = true;
  lockOverlay.style.display = "none";
  lockIcon.textContent = "🔓";
  browserFrame.src = targetUrl || "https://www.youtube.com";
  if (timerId) clearInterval(timerId);
  startTimer();
}

urlForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const raw = urlInput.value;
  const url = normalizeUrl(raw);
  if (!url) return;

  if (isBlocked(url) && !unlocked) {
    pendingTarget = url;
    const params = new URLSearchParams({ target: url });
    window.location.href = `/games/ritual/index.html?${params.toString()}`;
    return;
  }

  browserFrame.src = url;
});

startRitualBtn.addEventListener("click", () => {
  const target = pendingTarget || "https://www.youtube.com";
  const params = new URLSearchParams({ target });
  window.location.href = `/games/ritual/index.html?${params.toString()}`;
});

(function checkUnlockFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const unlockedFlag = params.get("unlocked");
  const target = params.get("target");
  if (unlockedFlag === "1" && target) {
    unlockBrowser(target);
    urlInput.value = target;
    window.history.replaceState({}, "", "/games/browser/index.html");
  }
})();

