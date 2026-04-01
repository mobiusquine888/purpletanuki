// Curriculum Reveal Viewer (Middle-School Friendly)

let testResults = null;

// Receive results from Test Viewer
window.addEventListener("message", (event) => {
    if (event.data.action === "reveal-load") {
        testResults = event.data.testResults;
        renderResults();
    }
});

// Render score + answers
function renderResults() {
    const scoreBox = document.getElementById("score-box");
    const container = document.getElementById("results-container");

    let correctCount = 0;

    container.innerHTML = "";

    testResults.forEach((item, index) => {
        const isCorrect =
            item.studentAnswer.trim().toLowerCase() ===
            item.correctAnswer.trim().toLowerCase();

        if (isCorrect) correctCount++;

        const div = document.createElement("div");
        div.className = "result-item";

        div.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${item.question}</p>
            <p>Your answer: ${item.studentAnswer}</p>
            <p>Correct answer: ${item.correctAnswer}</p>
            <p class="${isCorrect ? "correct" : "incorrect"}">
                ${isCorrect ? "✔ Correct" : "✘ Incorrect"}
            </p>
        `;

        container.appendChild(div);
    });

    const scorePercent = Math.round((correctCount / testResults.length) * 100);

    scoreBox.innerHTML = `
        <h2>Your Score: ${scorePercent}%</h2>
        <p>${correctCount} out of ${testResults.length} correct</p>
    `;

    // Buttons
    document.getElementById("home-btn").onclick = () => {
        window.parent.postMessage(
            {
                action: "navigate",
                target: "/ptapp/frontend/home/home.html"
            },
            "*"
        );
    };

    document.getElementById("retry-btn").onclick = () => {
        window.parent.postMessage(
            {
                action: "navigate",
                target: "/ptapp/frontend/curriculum/curriculum.html"
            },
            "*"
        );
    };
}
