// ===============================
//  GATE RITUAL — UNLOCK SYSTEM
// ===============================

// 1. Read the site the user wanted to open
const params = new URLSearchParams(window.location.search);
const targetUrl = params.get("site");

// Extract hostname for unlock key
let hostname = "";
try {
  hostname = new URL(targetUrl).hostname;
} catch (e) {
  hostname = "";
}

// ===============================
//  2. When the user completes the ritual
//     → Send unlock message back to browser
// ===============================

function completeRitual() {
  // How long the site should be unlocked (minutes)
  const unlockMinutes = 10;

  // Send message to the parent browser iframe
  window.parent.postMessage(
    {
      type: "unlock",
      hostname: hostname,
      url: targetUrl,
      minutes: unlockMinutes
    },
    "*"
  );
}

// ===============================
//  3. Hook your ritual completion button
// ===============================

document.getElementById("star-btn").addEventListener("click", () => {
  completeRitual();
});

document.getElementById("practice-btn").addEventListener("click", () => {
  completeRitual();
});

