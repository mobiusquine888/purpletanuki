let score = 0;
let timeLeft = 15;
let timerInterval = null;
let arrowInterval = null;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const arrowEl = document.getElementById("arrow");
const startBtn = document.getElementById("startBtn");

const directions = ["↑", "↓", "←", "→"];
let currentDirection = null;

startBtn.addEventListener("click", startGame);

function startGame() {
  score = 0;
  timeLeft = 15;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;

  startBtn.style.display = "none";
  arrowEl.classList.remove("hidden");

  spawnArrow();
  startTimer();

  // Enable swipe detection
  setupSwipe();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function spawnArrow() {
  arrowInterval = setInterval(() => {
    currentDirection = directions[Math.floor(Math.random() * directions.length)];
    arrowEl.textContent = currentDirection;
  }, 900);
}

function endGame() {
  clearInterval(timerInterval);
  clearInterval(arrowInterval);

  arrowEl.classList.add("hidden");
  startBtn.style.display = "block";

  alert(`Time's up! You scored ${score} points.`);
}

/* SWIPE DETECTION */
function setupSwipe() {
  let startX = 0;
  let startY = 0;

  document.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
  });

  document.addEventListener("touchend", (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    const absX = Math.abs(dx);
    const absY = Math.abs(dy);

    let swipeDir = null;

    if (absX > absY) {
      swipeDir = dx > 0 ? "→" : "←";
    } else {
      swipeDir = dy > 0 ? "↓" : "↑";
    }

    if (swipeDir === currentDirection) {
      score++;
      scoreEl.textContent = score;
    }
  });
}

