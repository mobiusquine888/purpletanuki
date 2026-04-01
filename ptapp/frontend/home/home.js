// PTapp Home Logic (REFORGED for Step 20 + New Curriculum Architecture)

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

    // Pre-K → Full Curriculum (Unit 1 ready, Units 2–10 scaffolded)
    const prekBtn = document.getElementById("btn-prek");
    if (prekBtn) {
        prekBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/preschool_curriculum.json"
                },
                "*"
            );
        };
    }

    // Kindergarten → Full Curriculum
    const kinderBtn = document.getElementById("btn-kindergarten");
    if (kinderBtn) {
        kinderBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/kindergarten_curriculum.json"
                },
                "*"
            );
        };
    }

    // Grade 7 Math → Full Curriculum
    const grade7Btn = document.getElementById("btn-grade7");
    if (grade7Btn) {
        grade7Btn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/grade7_curriculum.json"
                },
                "*"
            );
        };
    }

    // Life Lessons → Full Curriculum
    const lifeBtn = document.getElementById("btn-lifelessons");
    if (lifeBtn) {
        lifeBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "engine-start",
                    mode: "curriculum",
                    module: "/ptapp/modules/lifeskills_curriculum.json"
                },
                "*"
            );
        };
    }
};

