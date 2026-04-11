// earlylearning_worldmap.js
// Simple, predictable, emotionally safe world map logic.

document.addEventListener("DOMContentLoaded", () => {
  setupFreeWorlds();
  setupPremiumWorlds();
  setupParentLayer();
});

// -----------------------------
// Free worlds navigation
// -----------------------------

function setupFreeWorlds() {
  const freeCards = document.querySelectorAll(".el-world-free");
  if (!freeCards || freeCards.length === 0) return;

  freeCards.forEach((card) => {
    card.addEventListener("click", () => {
      const world = card.getAttribute("data-world");
      if (!world) return;

      // Adjust these paths to match your actual Preschool/Kindergarten entry points
      if (world === "preschool") {
        window.location.href = "preschool.html";
      } else if (world === "kindergarten") {
        window.location.href = "kindergarten.html";
      }
    });
  });
}

// -----------------------------
// Premium worlds (soft paywall modal)
// -----------------------------

function setupPremiumWorlds() {
  const premiumCards = document.querySelectorAll(".el-world-premium");
  if (!premiumCards || premiumCards.length === 0) return;

  const premiumModal = document.getElementById("el-premium-modal");
  const seeFreeBtn = document.getElementById("el-premium-see-free");
  const learnMoreBtn = document.getElementById("el-premium-learn-more");

  premiumCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (!premiumModal) return;
      premiumModal.classList.add("el-modal-open");
    });
  });

  if (seeFreeBtn) {
    seeFreeBtn.addEventListener("click", () => {
      if (premiumModal) premiumModal.classList.remove("el-modal-open");
      // Scroll to free worlds
      const freeSection = document.querySelector(".el-worlds-free");
      if (freeSection) {
        freeSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      // Hook this into your premium info / paywall screen
      // For now, just close the modal.
      if (premiumModal) premiumModal.classList.remove("el-modal-open");
      // Example: window.location.href = "premium_info.html";
    });
  }

  // Close modal when tapping backdrop
  if (premiumModal) {
    premiumModal.addEventListener("click", (e) => {
      if (e.target === premiumModal) {
        premiumModal.classList.remove("el-modal-open");
      }
    });
  }
}

// -----------------------------
// Parent layer modal
// -----------------------------

function setupParentLayer() {
  const parentLink = document.getElementById("el-parent-link");
  const parentModal = document.getElementById("el-parent-modal");
  const parentClose = document.getElementById("el-parent-close");

  if (!parentLink || !parentModal || !parentClose) return;

  parentLink.addEventListener("click", () => {
    parentModal.classList.add("el-modal-open");
  });

  parentClose.addEventListener("click", () => {
    parentModal.classList.remove("el-modal-open");
  });

  parentModal.addEventListener("click", (e) => {
    if (e.target === parentModal) {
      parentModal.classList.remove("el-modal-open");
    }
  });
}
