let currentIndex = 0;
let currentMode = "lesson"; 
let unitData = null;

async function loadJSON() {
    try {
        const response = await fetch("grade7_math.json");
        unitData = await response.json();
        startLessons();
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

function startLessons() {
    currentIndex = 0;
    currentMode = "lesson";
    renderLesson();
}

function renderLesson() {
    const lesson = unitData.units[0].lessons[currentIndex];
    const container = document.getElementById("lesson-container");

    container.innerHTML = `
        <h2>${lesson.title}</h2>
        <p>${lesson.text}</p>
        <p><strong>Example:</strong> ${lesson.example}</p>
        <p><strong>Practice:</strong> ${lesson.practice_question}</p>
        <input id="answer-input" placeholder="Your answer">
    `;
}

function renderMastery() {
    const q = unitData.units[0].masteryCheck[currentIndex];
    const container = document.getElementById("lesson-container");

    container.innerHTML = `
        <h2>Mastery Check</h2>
        <p>${q.question}</p>
        <input id="answer-input" placeholder="Your answer">
    `;
}

function renderUnitTest() {
    const q = unitData.units[0].unitTest[currentIndex];
    const container = document.getElementById("lesson-container");

    container.innerHTML = `
        <h2>Unit Test</h2>
        <p>${q.question}</p>
        <input id="answer-input" placeholder="Your answer">
    `;
}

document.getElementById("continue-btn").addEventListener("click", () => {
    const input = document.getElementById("answer-input")?.value ?? "";

    if (currentMode === "lesson") {
        currentIndex++;

        if (currentIndex >= unitData.units[0].lessons.length) {
            currentMode = "mastery";
            currentIndex = 0;
            renderMastery();
            return;
        }

        renderLesson();
        return;
    }

    if (currentMode === "mastery") {
        currentIndex++;

        if (currentIndex >= unitData.units[0].masteryCheck.length) {
            currentMode = "test";
            currentIndex = 0;
            renderUnitTest();
            return;
        }

        renderMastery();
        return;
    }

    if (currentMode === "test") {
        currentIndex++;

        if (currentIndex >= unitData.units[0].unitTest.length) {
            document.getElementById("lesson-container").innerHTML = `
                <h2>Unit Complete!</h2>
                <p>You finished Unit 1.</p>
            `;
            return;
        }

        renderUnitTest();
        return;
    }
});

loadJSON();
