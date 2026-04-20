const btn = document.getElementById("completeRitualBtn");

btn.addEventListener("click", () => {
  const params = new URLSearchParams(window.location.search);
  const target = params.get("target") || "https://www.youtube.com";

  const backParams = new URLSearchParams({
    unlocked: "1",
    target
  });

  window.location.href = `/games/browser/index.html?${backParams.toString()}`;
});
