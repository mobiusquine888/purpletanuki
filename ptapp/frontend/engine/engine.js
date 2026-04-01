// PTapp Hybrid Question Engine (REFORGED)

const PT_Engine = {
    mode: null,          // "akinator" or "curriculum"
    moduleData: null,    // loaded JSON module
    currentIndex: 0,     // question pointer
    state: {},           // answers, traits, scoring, etc.

    async start(mode, modulePath = null) {
        this.mode = mode;
        this.currentIndex = 0;
        this.state = {};

        if (mode === "curriculum") {
            this.moduleData = await this.loadModule(modulePath);
        }

        this.sendNextQuestion();
    },

    async loadModule(path) {
        const response = await fetch(path);
        return await response.json();
    },

    sendNextQuestion() {
        if (this.mode === "akinator") {
            this.sendAkinatorQuestion();
        } else {
            this.sendCurriculumQuestion();
        }
    },

    sendAkinatorQuestion() {
        // Placeholder — will fill in during Chunk 3
        window.parent.postMessage(
            { action: "flow-question", prompt: "Is your character real?" },
            "*"
        );
    },

    sendCurriculumQuestion() {
        const q = this.moduleData.questions[this.currentIndex];

        window.parent.postMessage(
            {
                action: "flow-question",
                prompt: q.prompt,
                type: q.type,
                options: q.options || null
            },
            "*"
        );
    },

    receiveAnswer(answer) {
        if (this.mode === "akinator") {
            this.handleAkinatorAnswer(answer);
        } else {
            this.handleCurriculumAnswer(answer);
        }
    },

    handleAkinatorAnswer(answer) {
        // Placeholder — will fill in during Chunk 3
        this.finish("A mysterious character");
    },

    handleCurriculumAnswer(answer) {
        this.currentIndex++;

        if (this.currentIndex >= this.moduleData.questions.length) {
            this.finish("You completed the module!");
        } else {
            this.sendNextQuestion();
        }
    },

    finish(resultText) {
        window.parent.postMessage(
            { action: "navigate", target: "/ptapp/frontend/reveal/reveal.html" },
            "*"
        );

        window.parent.postMessage(
            { action: "engine-result", result: resultText },
            "*"
        );
    }
};
