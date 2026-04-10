// Simple fade-in
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.6s ease";

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
