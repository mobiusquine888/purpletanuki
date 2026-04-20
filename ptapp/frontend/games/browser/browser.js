const urlForm = document.getElementById("urlForm");
const urlInput = document.getElementById("urlInput");
const browserFrame = document.getElementById("browserFrame");
const lockOverlay = document.getElementById("lockOverlay");
const startLessonBtn = document.getElementById("startLessonBtn");
const timerBar = document.getElementById("timerBar");
const timerText = document.getElementById("timerText");
const lockIcon = document.getElementById("lockIcon");

const SESSION_SECONDS = 60; // MVP: 1 minute unlock window

let timerId = null;
let remaining = 0;

/* ------------------------------
   Normalize URL
------------------------------ */
function normalizeUrl(input) {
  let value = input.trim();
  if (!value) return "";
  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    value = "https://" + value;
  }
  return value;
}

/* ------------------------------
   Start Timer
------------------------------ */
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

/* ------------------------------
   Relock Browser
------------------------------ */
function relockBrowser() {
  lockOverlay.style.display = "flex";
  lockIcon.textContent = "🔒";
  browserFrame.src = "about:blank";
  timerBar.hidden = true;
  localStorage.removeItem("unlockToken");
}

/* ------------------------------
   Unlock Browser
------------------------------ */
function unlockBrowser(targetUrl) {
  lockOverlay.style.display = "none";
  lockIcon.textContent = "🔓";
  browserFrame.src = targetUrl;
  startTimer();
}

/* ------------------------------
   URL Form Submit
------------------------------ */
urlForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const raw = urlInput.value;
  const url = normalizeUrl(raw);
  if (!url) return;

  // If token matches → unlock
  if (localStorage.unlockToken === url) {
    unlockBrowser(url);
    return;
  }

  // Otherwise → go to micro-lesson
  window.location.href = `/games/lesson/index.html?return=${encodeURIComponent(url)}`;
});

/* ------------------------------
   Begin Challenge Button
------------------------------ */
startLessonBtn.addEventListener("click", () => {
  const raw = urlInput.value;
  const url = normalizeUrl(raw) || "https://www.youtube.com";
  window.location.href = `/games/lesson/index.html?return=${encodeURIComponent(url)}`;
});

/* ------------------------------
   Check for Unlock Token on Load
------------------------------ */
(function checkUnlock() {
  const token = localStorage.unlockToken;
  if (!token) return;

  // Auto-load the unlocked URL
  urlInput.value = token;
  unlockBrowser(token);
})();

