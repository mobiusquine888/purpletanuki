// PTapp Akinator Flow Engine (REFORGED)

window.onload = function () {
    const questionText = document.getElementById("flow-question-text");
    const buttons = document.querySelectorAll(".flow-btn");

    // Example question list (replace with real engine later)
    const questions = [
        "Is your character a girl?",
        "Is your character real?",
        "Is your character from a video game?",
        "Is your character older than 20?"
    ];

    let index = 0;

    loadQuestion();

    function loadQuestion() {
        questionText.textContent = questions[index];

        // Tell Tanuki to think
        window.parent.postMessage(
            { action: "tanuki-mood", mood: "think" },
            "*"
        );
    }

    buttons.forEach(btn => {
        btn.onclick = () => {
            const answer = btn.dataset.answer;

            // Tell shell to navigate or continue
            nextQuestion(answer);
        };
    });

    function nextQuestion(answer) {
        // Tanuki reacts to answer
        window.parent.postMessage(
            { action: "tanuki-mood", mood: "soft" },
            "*"
        );

        index++;

        if (index >= questions.length) {
            // End of flow → go to reveal
            window.parent.postMessage(
                { action: "navigate", target: "/ptapp/frontend/reveal/reveal.html" },
                "*"
            );
            return;
        }

        loadQuestion();
    }
};
