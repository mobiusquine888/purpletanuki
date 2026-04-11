document.addEventListener("DOMContentLoaded", () => {

  /* ===== PARENT MODAL ===== */
  const parentBtn = document.getElementById("el-parent-link");
  const parentModal = document.getElementById("el-parent-modal");
  const parentClose = document.getElementById("el-parent-close");

  parentBtn.addEventListener("click", () => {
    parentModal.style.display = "flex";
  });

  parentClose.addEventListener("click", () => {
    parentModal.style.display = "none";
  });

  /* ===== PREMIUM MODAL ===== */
  const premiumModal = document.getElementById("el-premium-modal");
  const premiumCards = document.querySelectorAll(".el-world-premium");
  const premiumCloseFree = document.getElementById("el-premium-see-free");
  const premiumLearn = document.getElementById("el-premium-learn-more");

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
