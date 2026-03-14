let score = 0;
let timeLeft = 15;
let timerInterval;
let spawnInterval;

const gameArea = document.getElementById("game-area");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

function startGame() {
  score = 0;
  timeLeft = 15;
  scoreEl.textContent = score;
  timerEl.textContent = timeLeft;

  startBtn.style.display = "none";

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) endGame();
  }, 1000);

  spawnInterval = setInterval(spawnStar, 600);
}

function endGame() {
  clearInterval(timerInterval);
  clearInterval(spawnInterval);

  alert(`Time's up! You scored ${score} points.`);

  startBtn.style.display = "block";
}

function spawnStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const areaRect = gameArea.getBoundingClientRect();
  const x = Math.random() * (areaRect.width - 40);
  const y = Math.random() * (areaRect.height - 40);

  star.style.left = `${x}px`;
  star.style.top = `${y}px`;

  star.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;
    star.remove();
  });

  gameArea.appendChild(star);

  setTimeout(() => star.remove(), 1200);
}

startBtn.addEventListener("click", startGame);

