const grid = document.getElementById("memoryGrid");
const startBtn = document.getElementById("memoryStartBtn");
const statusText = document.getElementById("memoryStatus");

let level = 1;
let score = 0;
let best = 0;
let sequence = [];
let playerIndex = 0;
let acceptingInput = false;

// Build 3x3 grid
function buildGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("memory-cell");
        cell.dataset.index = i;
        cell.addEventListener("click", () => handlePlayerInput(i));
        grid.appendChild(cell);
    }
}

function flashCell(index) {
    const cell = grid.children[index];
    cell.classList.add("active");
    setTimeout(() => cell.classList.remove("active"), 350);
}

function playSequence() {
    acceptingInput = false;
    statusText.textContent = "Watch closely…";

    let delay = 600;
    sequence.forEach((index, i) => {
        setTimeout(() => flashCell(index), delay * (i + 1));
    });

    setTimeout(() => {
        statusText.textContent = "Your turn.";
        acceptingInput = true;
    }, delay * (sequence.length + 1));
}

function nextLevel() {
    sequence.push(Math.floor(Math.random() * 9));
    playerIndex = 0;
    playSequence();
}

function handlePlayerInput(index) {
    if (!acceptingInput) return;

    const cell = grid.children[index];

    if (index === sequence[playerIndex]) {
        cell.classList.add("correct");
        setTimeout(() => cell.classList.remove("correct"), 250);

        playerIndex++;

        if (playerIndex === sequence.length) {
            score += level * 10;
            level++;

            document.getElementById("memoryScore").textContent = score;
            document.getElementById("memoryLevel").textContent = level;

            if (score > best) {
                best = score;
                document.getElementById("memoryBest").textContent = best;
            }

            statusText.textContent = "Well done!";
            setTimeout(nextLevel, 800);
        }
    } else {
        cell.classList.add("wrong");
        setTimeout(() => cell.classList.remove("wrong"), 300);

        statusText.textContent = "Incorrect sequence.";
        acceptingInput = false;
        sequence = [];
        level = 1;
        score = 0;

        document.getElementById("memoryScore").textContent = 0;
        document.getElementById("memoryLevel").textContent = 1;

        setTimeout(() => {
            statusText.textContent = "Press Begin Ritual to try again.";
        }, 1000);
    }
}

startBtn.addEventListener("click", () => {
    sequence = [];
    level = 1;
    score = 0;

    document.getElementById("memoryScore").textContent = 0;
    document.getElementById("memoryLevel").textContent = 1;

    statusText.textContent = "Memorize the pattern…";
    nextLevel();
});

buildGrid();

