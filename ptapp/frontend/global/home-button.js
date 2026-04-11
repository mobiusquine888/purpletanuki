document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.createElement("button");
  homeBtn.className = "global-home-button";
  homeBtn.innerHTML = "🏠";
  homeBtn.onclick = () => window.location.href = "/arcade/arcade.html";

  document.body.appendChild(homeBtn);
});
