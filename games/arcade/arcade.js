// Simple placeholder state for now
const tanukiLines = [
  "I’m ready when you are. Pick a game!",
  "Every game you play feeds my magic.",
  "Study Gate boosts your XP the fastest.",
  "Short bursts are best. One game at a time.",
];

let tanukiLineIndex = 0;
const tanukiLineEl = document.getElementById("tanuki-line");
const cards = document.querySelectorAll(".arcade-card:not(.arcade-card-disabled)");

function cycleTanukiLine() {
  tanukiLineIndex = (tanukiLineIndex + 1) % tanukiLines.length;
  tanukiLineEl.textContent = tanukiLines[tanukiLineIndex];
}

setInterval(cycleTanukiLine, 8000);

// Click handlers for game cards
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const game = card.getAttribute("data-game");
    if (!game) return;

    // Map game keys to URLs
    const routes = {
      knowledge: "/games/knowledge/index.html",
      reaction: "/games/reaction/index.html",
      memory: "/games/memory/index.html",
      swipe: "/games/swipe/index.html",
    };

    const target = routes[game];
    if (!target) return;

    window.location.href = target;
  });
});

