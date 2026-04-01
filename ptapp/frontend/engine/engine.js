// PTapp Hybrid Question Engine (REFORGED for Step 20 + Curriculum Mode)

const PT_Engine = {
    mode: null,
    modulePath: null,
    curriculum: null,
    currentUnit: null,
    currentLessonIndex: 0,

    // ---------------------------------------------
    // ENGINE START
    // ---------------------------------------------
    async start(mode, modulePath = null) {
        this.mode = mode;

        if (mode === "curriculum") {
            await this.loadCurriculum(modulePath);
            return;
        }

        // Akinator fallback
        this.sendAkinatorQuestion();
    },

    // ---------------------------------------------
    // LOAD CURRICULUM JSON
    // ---------------------------------------------
    async loadCurriculum(path) {
        try {
            const response = await fetch(path);
            this.curriculum = await response.json();

            // Send curriculum to Shell → Units page
            window.parent.postMessage(
                {
                    action: "engine-curriculum",
                    data: this.curriculum
                },
                "*"
            );

        } catch (err) {
            console.error("Failed to load curriculum:", err);
        }
    },

    // ---------------------------------------------
    // UNIT SELECTION
    // ---------------------------------------------
    loadUnit(unitId) {
        this.currentUnit = this.curriculum.units.find(u => u.id === unitId);
        this.currentLessonIndex = 0;
        this.sendLesson();
    },

    // ---------------------------------------------
    // LESSON HANDLING
    // ---------------------------------------------
    sendLesson() {
        window.parent.postMessage(
            {
                action: "lesson-load",
                data: this.curriculum,
                unitId: this.currentUnit.id,
                lessonIndex: this.currentLessonIndex
            },
            "*"
        );
    },

    nextLesson() {
        this.currentLessonIndex++;

        if (this.currentLessonIndex < this.currentUnit.lessons.length) {
            this.sendLesson();
        } else {
            this.sendMastery();
        }
    },

    // ---------------------------------------------
    // MASTERY CHECK
    // ---------------------------------------------
    sendMastery() {
        window.parent.postMessage(
            {
                action: "mastery-load",
                data: this.curriculum,
                unitId: this.currentUnit.id
            },
            "*"
        );
    },

    // ---------------------------------------------
    // UNIT TEST
    // ---------------------------------------------
    sendTest() {
        window.parent.postMessage(
            {
                action: "test-load",
                data: this.curriculum,
                unitId: this.currentUnit.id
            },
            "*"
        );
    },

    // ---------------------------------------------
    // CURRICULUM REVEAL
    // ---------------------------------------------
    sendCurriculumReveal(results) {
        window.parent.postMessage(
            {
                action: "reveal-load",
                testResults: results
            },
            "*"
        );
    },

    // ---------------------------------------------
    // AKINATOR MODE (unchanged placeholder)
    // ---------------------------------------------
    sendAkinatorQuestion() {
        window.parent.postMessage(
            {
                action: "engine-question",
                prompt: "Is your character real?",
                type: "yesno"
            },
            "*"
        );
    }
};


