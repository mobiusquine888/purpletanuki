document.addEventListener("DOMContentLoaded", () => {

  // Parent modal
  const parentBtn = document.getElementById("bk-parent-link");
  const parentModal = document.getElementById("bk-parent-modal");
  const parentClose = document.getElementById("bk-parent-close");

  parentBtn.addEventListener("click", () => {
    parentModal.style.display = "flex";
  });

  parentClose.addEventListener("click", () => {
    parentModal.style.display = "none";
  });

  // Premium modal
  const premiumModal = document.getElementById("bk-premium-modal");
  const premiumCards = document.querySelectorAll(".bk-world-premium");
  const premiumCloseFree = document.getElementById("bk-premium-see-free");
  const premiumLearn = document.getElementById("bk-premium-learn-more");

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
