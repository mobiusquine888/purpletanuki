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

/* -------------------------
   START GAME
------------------------- */
startBtn.addEventListener("click", startGame);

function startGame() {
  // Reset state
  score = 0;
  timeLeft = 15;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;

  // Reset UI
  startBtn.style.display = "none";
  arrowEl.classList.remove("hidden");

  // Clear any old intervals
  clearInterval(timerInterval);
  clearInterval(arrowInterval);

  spawnArrow();
  startTimer();
  setupSwipe();
}

/* -------------------------
   TIMER
------------------------- */
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

/* -------------------------
   ARROW SPAWNING
------------------------- */
function spawnArrow() {
  arrowInterval = setInterval(() => {
    currentDirection = directions[Math.floor(Math.random() * directions.length)];
    arrowEl.textContent = currentDirection;
  }, 900);
}

/* -------------------------
   END GAME
------------------------- */
function endGame() {
  clearInterval(timerInterval);
  clearInterval(arrowInterval);

  arrowEl.classList.add("hidden");
  startBtn.style.display = "block";

  alert(`Time's up! You scored ${score} points.`);
}

/* -------------------------
   SWIPE DETECTION
------------------------- */
function setupSwipe() {
  let startX = 0;
  let startY = 0;

  // Remove old listeners to prevent stacking
  document.onmousedown = null;
  document.onmouseup = null;
  document.ontouchstart = null;
  document.ontouchend = null;

  document.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    startX = t.clientX;
    startY = t.clientY;
  }, { passive: true });

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
  }, { passive: true });
}

