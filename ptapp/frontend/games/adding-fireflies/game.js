const playfield = document.getElementById("playfield");
const goalValueEl = document.getElementById("goalValue");
const scoreValueEl = document.getElementById("scoreValue");
const timeValueEl = document.getElementById("timeValue");
const overlay = document.getElementById("messageOverlay");
const messageTitle = document.getElementById("messageTitle");
const finalScoreEl = document.getElementById("finalScore");
const playAgainBtn = document.getElementById("playAgainBtn");

let groups = [];
let goal = 0;
let currentSum = 0;
let score = 0;
let timeLeft = 60;
let lastSpawnTime = 0;
let spawnInterval = 1400; // ms
let lastFrameTime = 0;
let gameRunning = false;

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setGoal() {
    // Keep goals in a friendly range
    goal = randInt(5, 12);
    currentSum = 0;
    goalValueEl.textContent = goal;
}

function spawnGroup() {
    const groupSize = randInt(2, 5);
    const groupEl = document.createElement("div");
    groupEl.className = "firefly-group";

    const label = document.createElement("span");
    label.className = "firefly-count";
    label.textContent = groupSize;
    groupEl.appendChild(label);

    const pfRect = playfield.getBoundingClientRect();
    const startX = randInt(10, pfRect.width - 70);
    const startY = pfRect.height + 40; // start below

    groupEl.style.left = `${startX}px`;
    groupEl.style.top = `${startY}px`;

    const groupObj = {
        el: groupEl,
        value: groupSize,
        x: startX,
        y: startY,
        speed: randInt(35, 60), // px per second
        alive: true
    };

    groupEl.addEventListener("click", () => onGroupClick(groupObj));

    playfield.appendChild(groupEl);
    groups.push(groupObj);
}

function onGroupClick(group) {
    if (!group.alive || !gameRunning) return;

    group.alive = false;
    group.el.style.pointerEvents = "none";
    group.el.style.opacity = "0";

    currentSum += group.value;

    // Spark effect
    const rect = group.el.getBoundingClientRect();
    const pfRect = playfield.getBoundingClientRect();
    const spark = document.createElement("div");
    spark.className = "spark";
    spark.style.left = `${rect.left - pfRect.left + rect.width / 2 - 20}px`;
    spark.style.top = `${rect.top - pfRect.top + rect.height / 2 - 20}px`;
    playfield.appendChild(spark);
    setTimeout(() => spark.remove(), 400);

    if (currentSum === goal) {
        score += 10;
        scoreValueEl.textContent = score;
        // soft reward: flash background
        playfield.style.boxShadow = "0 0 30px rgba(255,230,109,0.9)";
        setTimeout(() => {
            playfield.style.boxShadow = "0 6px 20px rgba(0,0,0,0.6)";
        }, 200);
        clearGroups();
        setGoal();
    } else if (currentSum > goal) {
        // gentle penalty: reset sum, small score loss
        score = Math.max(0, score - 3);
        scoreValueEl.textContent = score;
        currentSum = 0;
        clearGroups();
        setGoal();
    }
}

function clearGroups() {
    groups.forEach(g => g.el.remove());
    groups = [];
}

function update(delta) {
    const pfRect = playfield.getBoundingClientRect();
    groups.forEach(group => {
        if (!group.alive) return;
        group.y -= group.speed * (delta / 1000);
        group.el.style.top = `${group.y}px`;
        if (group.y < -50) {
            group.alive = false;
            group.el.remove();
        }
    });
    groups = groups.filter(g => g.alive);
}

function gameLoop(timestamp) {
    if (!gameRunning) return;

    if (!lastFrameTime) lastFrameTime = timestamp;
    const delta = timestamp - lastFrameTime;
    lastFrameTime = timestamp;

    // spawn
    if (timestamp - lastSpawnTime > spawnInterval) {
        spawnGroup();
        lastSpawnTime = timestamp;
    }

    update(delta);
    requestAnimationFrame(gameLoop);
}

function startTimer() {
    timeLeft = 60;
    timeValueEl.textContent = timeLeft;
    const timer = setInterval(() => {
        if (!gameRunning) {
            clearInterval(timer);
            return;
        }
        timeLeft -= 1;
        timeValueEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function startGame() {
    overlay.classList.add("hidden");
    score = 0;
    scoreValueEl.textContent = score;
    clearGroups();
    setGoal();
    gameRunning = true;
    lastFrameTime = 0;
    lastSpawnTime = 0;
    startTimer();
    requestAnimationFrame(gameLoop);
}

function endGame() {
    gameRunning = false;
    clearGroups();
    finalScoreEl.textContent = score;
    messageTitle.textContent = "Nice work, Firefly Friend!";
    overlay.classList.remove("hidden");
}

playAgainBtn.addEventListener("click", startGame);

// Auto-start when loaded
window.addEventListener("load", () => {
    startGame();
});
