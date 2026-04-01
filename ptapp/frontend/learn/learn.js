// PTapp Learn Mode Logic (REFORGED)

window.onload = function () {
    loadQuestion();
};

function loadQuestion() {
    const question = generateQuestion();
    document.getElementById("question-text").innerText = question.text;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerText = choice;
        btn.onclick = () => checkAnswer(choice, question.answer);
        answersDiv.appendChild(btn);
    });
}

function checkAnswer(choice, correct) {
    const feedback = document.getElementById("feedback");

    if (choice === correct) {
        feedback.innerText = "Great job!";
        setTimeout(() => {
            window.parent.postMessage({ action: "navigate", target: "/ptapp/frontend/explore/explore.html" }, "*");
        }, 800);
    } else {
        feedback.innerText = "Try again!";
    }
}

function generateQuestion() {
    // Simple MVP question generator
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;

    return {
        text: `What is ${a} + ${b}?`,
        answer: (a + b).toString(),
        choices: shuffle([
            (a + b).toString(),
            (a + b + 1).toString(),
            (a + b - 1).toString()
        ])
    };
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
