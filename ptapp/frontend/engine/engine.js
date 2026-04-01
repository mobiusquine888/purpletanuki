// PTapp Hybrid Question Engine (REFORGED for Step 20)

const PT_Engine = {
    mode: null,          // "akinator" or "curriculum"
    modulePath: null,    // path to JSON module (for curriculum)
    moduleData: null,    // loaded JSON
    currentIndex: 0,     // question pointer
    state: {},           // answers, traits, scoring, etc.

    async start(mode, modulePath = null) {
        this.mode = mode;
        this.modulePath = modulePath;
        this.currentIndex = 0;
        this.state = {};

        if (mode === "curriculum" && modulePath) {
            this.moduleData = await this.loadModule(modulePath);
        }

        this.sendNextQuestion();
    },

    async loadModule(path) {
        const response = await fetch(path);
        if (!response.ok) {
            console.error("Failed to load module:", path);
            return { title: "Empty Module", questions: [] };
        }
        return await response.json();
    },

    sendNextQuestion() {
        if (this.mode === "akinator") {
            this.sendAkinatorQuestion();
        } else {
            this.sendCurriculumQuestion();
        }
    },

    // -------------------------------
    // AKINATOR MODE (placeholder)
    // -------------------------------
    sendAkinatorQuestion() {
        window.parent.postMessage(
            {
                action: "engine-question",
                prompt: "Is your character real?",
                type: "yesno"
            },
            "*"
        );
    },

    // -------------------------------
    // CURRICULUM MODE
    // -------------------------------
    sendCurriculumQuestion() {
        if (!this.moduleData || !this.moduleData.questions || this.moduleData.questions.length === 0) {
            this.finish("You completed the module!");
            return;
        }

        const q = this.moduleData.questions[this.currentIndex];

        window.parent.postMessage(
            {
                action: "engine-question",
                prompt: q.prompt,
                type: q.type,
                options: q.options || null,
                id: q.id
            },
            "*"
        );
    },

    // -------------------------------
    // ANSWER HANDLING
    // -------------------------------
    receiveAnswer(answer) {
        if (this.mode === "akinator") {
            this.handleAkinatorAnswer(answer);
        } else {
            this.handleCurriculumAnswer(answer);
        }
    },

    handleAkinatorAnswer(answer) {
        this.finish("A mysterious character");
    },

    handleCurriculumAnswer(answer) {
        this.state[this.currentIndex] = answer;

        this.currentIndex++;

        if (this.currentIndex >= this.moduleData.questions.length) {
            this.finish("You completed the module!");
        } else {
            this.sendNextQuestion();
        }
    },

    // -------------------------------
    // FINISH → SEND RESULT + NAVIGATE
    // -------------------------------
    finish(resultText) {
        // Tell Reveal what to show
        window.parent.postMessage(
            { action: "engine-result", result: resultText },
            "*"
        );

        // Navigate to Reveal (Netlify-safe)
        window.parent.postMessage(
            { action: "navigate", target: "../reveal/reveal.html" },
            "*"
        );
    }
};


