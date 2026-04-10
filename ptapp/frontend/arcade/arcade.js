// Fade-in on load
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.6s ease";

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Apply progression state to each world block
function applyWorld(id, key) {
  const el = document.getElementById(id);
  if (!el) return;

  const state = PT_Progression.getWorldState(key);

  if (state === "locked") {
    el.classList.add("locked");

    // Intercept click
    el.addEventListener("click", (e) => {
      e.preventDefault();
      PT_Paywall.open();
    });
  }
}

// Apply progression to all worlds
applyWorld("world-calmfocus", "calmfocus");
applyWorld("world-earlylearning", "earlylearning");
applyWorld("world-bigkidskills", "bigkidskills");
applyWorld("world-lifelessons", "lifelessons");

