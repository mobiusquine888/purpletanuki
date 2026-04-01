// Unit Test Viewer (Middle-School Friendly)

let curriculumData = null;
let currentUnit = null;

// Receive curriculum + unit info from Shell
window.addEventListener("message", (event) => {
    if (event.data.action === "test-load") {
        curriculumData = event.data.data;
        currentUnit = curriculumData.units.find(u => u.id === event.data.unitId);

        renderTest();
    }
});

// Render test questions
function renderTest() {
    const container = document.getElementById("test-container");
    container.innerHTML = "";

    currentUnit.unitTest.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "test-question";

        div.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${q.question}</p>
            <input type="text" id="test-answer-${index}" placeholder="Your answer">
        `;

        container.appendChild(div);
    });

    document.getElementById("submit-test-btn").onclick = () => {
        submitTest();
    };
}

// Collect answers and send to Reveal
function submitTest() {
    const results = [];

    currentUnit.unitTest.forEach((q, index) => {
        const input = document.getElementById(`test-answer-${index}`);
        results.push({
            question: q.question,
            studentAnswer: input.value,
            correctAnswer: q.answer
        });
    });

    window.parent.postMessage(
        {
            action: "navigate",
            target: "/ptapp/frontend/reveal/reveal.html",
            testResults: results
        },
        "*"
    );
}
