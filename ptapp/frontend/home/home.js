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

    // Pre-K → Full Curriculum
    const prekBtn = document.getElementById("btn-prek");
    if (prekBtn) {
        prekBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "home-select",
                    level: "prek"
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
                    action: "home-select",
                    level: "k"
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
                    action: "home-select",
                    level: "grade7"
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
                    action: "home-select",
                    level: "lifelessons"
                },
                "*"
            );
        };
    }

    // ⭐ Calm & Focus → Gate Ritual (CACHE-BUSTED)
    const calmBtn = document.getElementById("btn-calm");
    if (calmBtn) {
        calmBtn.onclick = () => {
            window.parent.postMessage(
                {
                    action: "navigate",
                    target: "../lifelessons/opening-gate.html?v=2"
                },
                "*"
            );
        };
    }
};

