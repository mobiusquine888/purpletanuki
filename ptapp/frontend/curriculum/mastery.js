// Mastery Viewer (Middle-School Friendly)

let curriculumData = null;
let currentUnit = null;

// Receive curriculum + unit info from Shell
window.addEventListener("message", (event) => {
    if (event.data.action === "mastery-load") {
        curriculumData = event.data.data;
        currentUnit = curriculumData.units.find(u => u.id === event.data.unitId);

        renderMastery();
    }
});

// Render mastery questions
function renderMastery() {
    const container = document.getElementById("mastery-container");
    container.innerHTML = "";

    currentUnit.masteryCheck.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "mastery-question";

        div.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${q.question}</p>
            <input type="text" id="answer-${index}" placeholder="Your answer">
        `;

        container.appendChild(div);
    });

    document.getElementById("submit-btn").onclick = () => {
        submitMastery();
    };
}

// Collect answers and move to Unit Test
function submitMastery() {
    const answers = [];

    currentUnit.masteryCheck.forEach((q, index) => {
        const input = document.getElementById(`answer-${index}`);
        answers.push({
            question: q.question,
            studentAnswer: input.value,
            correctAnswer: q.answer
        });
    });

    window.parent.postMessage(
        {
            action: "navigate",
            target: "/ptapp/frontend/curriculum/test.html",
            unitId: currentUnit.id,
            masteryResults: answers
        },
        "*"
    );
}
