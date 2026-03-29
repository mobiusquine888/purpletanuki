// -------------------------------
// EXPLORE GATE
// -------------------------------
function isExploreUnlocked() {
  try {
    return localStorage.getItem("pt_explore_unlocked") === "true";
  } catch {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!isExploreUnlocked()) {
    window.location.href = "/games/ritual/index.html";
    return;
  }

  setupSiteButtons();
  setupTimer();
});

// -------------------------------
// SAFE SITE BUTTONS
// -------------------------------
function setupSiteButtons() {
  const buttons = document.querySelectorAll("[data-site]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.site;
      openSite(url);
    });
  });

  const customBtn = document.getElementById("exploreCustomGo");
  if (customBtn) {
    customBtn.addEventListener("click", () => {
      const input = document.getElementById("exploreCustomInput");
      if (!input) return;
      const url = sanitizeUrl(input.value);
      if (url) openSite(url);
    });
  }
}

function sanitizeUrl(url) {
  if (!url) return "";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://" + url;
  }
  return url;
}

function openSite(url) {
  const iframe = document.getElementById("exploreFrame");
  if (!iframe) return;
  iframe.src = url;
}

// -------------------------------
// TIMER (OPTIONAL)
// -------------------------------
function setupTimer() {
  const timerEl = document.getElementById("exploreTimer");
  if (!timerEl) return;

  let seconds = 900; // 15 minutes

  function tick() {
    seconds--;
    if (seconds <= 0) {
      window.location.href = "/games/ritual/index.html";
      return;
    }
    timerEl.textContent = formatTime(seconds);
    setTimeout(tick, 1000);
  }

  timerEl.textContent = formatTime(seconds);
  setTimeout(tick, 1000);
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}
