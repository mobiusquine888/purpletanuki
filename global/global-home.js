/* ============================
   UNIVERSAL HOME BUTTON — JS
   ============================ */

(function () {
  // Prevent duplicate injection
  if (document.getElementById("global-home-btn")) return;

  // Create the button
  const btn = document.createElement("a");
  btn.id = "global-home-btn";
  btn.className = "global-home-btn";
  btn.textContent = "Home";
  btn.href = "/index.html";

  // Inject into DOM
  document.body.appendChild(btn);
})();
