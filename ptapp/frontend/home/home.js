// PTapp Home Logic (REFORGED for Step 20)

window.onload = function () {

    // Challenge Me → Akinator mode
    const challengeBtn = document.getElementById("btn-challenge");
    if (challengeBtn) {
        challengeBtn.onclick = () => {
            window.parent.postMessage(
                { action: "engine-start", mode: "akinator" },
                "*"
            );
        };
    }

    // Pre-K → Curriculum module
    const prekBtn = document.getElementById("btn-prek");
    if (prekBtn) {
        prekBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/preschool.json"
                },
                "*"
            );
        };
    }

    // Kindergarten → Curriculum module
    const kinderBtn = document.getElementById("btn-kindergarten");
    if (kinderBtn) {
        kinderBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/kindergarten.json"
                },
                "*"
            );
        };
    }

    // Grade 7 Math → Curriculum module
    const grade7Btn = document.getElementById("btn-grade7");
    if (grade7Btn) {
        grade7Btn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/grade7_math.json"
                },
                "*"
            );
        };
    }

    // Life Lessons → Curriculum module
    const lifeBtn = document.getElementById("btn-lifelessons");
    if (lifeBtn) {
        lifeBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/lifelessons.json"
                },
                "*"
            );
        };
    }
};

