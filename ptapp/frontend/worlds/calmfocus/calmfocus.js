document.addEventListener("DOMContentLoaded", () => {

  /* ===== PARENT MODAL ===== */
  const parentBtn = document.getElementById("cf-parent-link");
  const parentModal = document.getElementById("cf-parent-modal");
  const parentClose = document.getElementById("cf-parent-close");

  parentBtn.addEventListener("click", () => {
    parentModal.style.display = "flex";
  });

  parentClose.addEventListener("click", () => {
    parentModal.style.display = "none";
  });

  /* ===== PREMIUM MODAL ===== */
  const premiumModal = document.getElementById("cf-premium-modal");
  const premiumCards = document.querySelectorAll(".cf-world-premium");
  const premiumCloseFree = document.getElementById("cf-premium-see-free");
  const premiumLearn = document.getElementById("cf-premium-learn-more");

  premiumCards.forEach(card => {
    card.addEventListener("click", () => {
      premiumModal.style.display = "flex";
    });
  });

  premiumCloseFree.addEventListener("click", () => {
    premiumModal.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  premiumLearn.addEventListener("click", () => {
    premiumModal.style.display = "none";
    window.location.href = "/parent-dashboard/index.html";
  });

});
