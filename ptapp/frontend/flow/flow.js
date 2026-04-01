// PTapp Flow Logic (REFORGED for Step 20)

window.addEventListener("message", (event) => {
    const data = event.data || {};

    // Engine tells Flow to start
    if (data.action === "flow-engine-start") {
        PT_Engine.start(data.mode, data.module);
    }

    // Engine sends a question to render
    if (data.action === "flow-question") {
        renderQuestion(data);
    }
});

// Render a question from the engine
function renderQuestion(q) {
    const container = document.getElementById("flow-question-container");
    container.innerHTML = "";

    // Prompt
    const promptEl = document.createElement("div");
    promptEl.className = "flow-prompt";
    promptEl.textContent = q.prompt;
    container.appendChild(promptEl);

    // Tanuki thinks
    window.parent.postMessage(
        { action: "tanuki-mood", mood: "thinking" },
        "*"
    );

    // Render based on type
    if (q.type === "yesno") {
        renderYesNo(container);
    } else if (q.type === "choice") {
        renderChoices(container, q.options);
    }
}

// Yes/No buttons
function renderYesNo(container) {
    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes";
    yesBtn.className = "flow-btn";
    yesBtn.onclick = () => sendAnswer("yes");

    const noBtn = document.createElement("button");
    noBtn.textContent = "No";
    noBtn.className = "flow-btn";
    noBtn.onclick = () => sendAnswer("no");

    container.appendChild(yesBtn);
    container.appendChild(noBtn);
}

// Multiple choice buttons
function renderChoices(container, options) {
    options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.className = "flow-btn";
        btn.onclick = () => sendAnswer(opt);
        container.appendChild(btn);
    });
}

// Send answer back to engine
function sendAnswer(answer) {
    window.parent.postMessage(
        { action: "flow-answer", answer: answer },
        "*"
    );
}

