// PTapp App Shell (REFORGED for Netlify + Step 20 + Curriculum Routing)

window.onload = function () {
    const mainFrame = document.getElementById("pt-main-frame");
    const tanukiFrame = document.getElementById("pt-tanuki-frame");

    // -------------------------------
    // AUDIO AUTOPLAY (NEW)
    // -------------------------------
    const audio = document.getElementById("pt-theme-audio");
    if (audio) {
        audio.volume = 0.6;
        audio.play().catch(() => {
            const resumeMusic = () => {
                audio.play().catch(() => {});
                window.removeEventListener("click", resumeMusic);
                window.removeEventListener("touchstart", resumeMusic);
            };
            window.addEventListener("click", resumeMusic);
            window.addEventListener("touchstart", resumeMusic);
        });
    }

    // -------------------------------
    // HEADER BUTTONS
    // -------------------------------
    const settingsBtn = document.getElementById("pt-shell-settings");
    if (settingsBtn) {
        settingsBtn.onclick = () => {
            navigate("../settings/settings.html");
        };
    }

    const profileBtn = document.getElementById("pt-shell-profile");
    if (profileBtn) {
        profileBtn.onclick = () => {
            navigate("../profiles/select.html");
        };
    }

    // -------------------------------
    // GLOBAL MESSAGE LISTENER
    // -------------------------------
    window.addEventListener("message", (event) => {
        const data = event.data || {};

        // -------------------------------
        // CURRICULUM ROUTING (NEW)
        // -------------------------------

        // Engine sends curriculum data → load Units page
        if (data.action === "engine-curriculum") {
            navigateWithMessage(
                "../curriculum/curriculum.html",
                {
                    action: "curriculum-load",
                    data: data.data
                }
            );
        }

        // Navigate to curriculum pages (lesson, mastery, test, reveal)
        if (data.action === "navigate" && data.target) {
            navigateWithMessage(data.target, data);
        }

        // -------------------------------
        // OLD + FLOW PROTOCOLS
        // -------------------------------

        // Home requests engine start (old protocol)
        if (data.action === "engine-start") {
            startEngineFlow(data);
        }

        // Flow requests engine start (new protocol)
        if (data.action === "engine-start-request") {
            PT_Engine.start(data.mode, data.module || null);
        }

        // Flow sends an answer to the engine
        if (data.action === "flow-answer") {
            PT_Engine.receiveAnswer(data.answer);
        }

        // Engine sends a question to Flow
        if (data.action === "engine-question") {
            if (mainFrame && mainFrame.contentWindow) {
                mainFrame.contentWindow.postMessage(
                    {
                        action: "flow-question",
                        prompt: data.prompt,
                        type: data.type,
                        options: data.options
                    },
                    "*"
                );
            }
        }

        // Engine sends result to Reveal (Akinator)
        if (data.action === "engine-result") {
            sendToReveal(data.result);
        }

        // Tanuki mood change
        if (data.action === "tanuki-mood" && data.mood) {
            sendTanukiMood(data.mood);
        }
    });

    // -------------------------------
    // ENGINE START → LOAD FLOW
    // -------------------------------
    function startEngineFlow(data) {
        navigate("../flow/flow.html");

        setTimeout(() => {
            if (mainFrame && mainFrame.contentWindow) {
                mainFrame.contentWindow.postMessage(
                    {
                        action: "flow-engine-start",
                        mode: data.mode,
                        module: data.module || null
                    },
                    "*"
                );
            }
        }, 50);
    }

    // -------------------------------
    // SEND RESULT TO REVEAL (Akinator)
    // -------------------------------
    function sendToReveal(resultText) {
        if (mainFrame && mainFrame.contentWindow) {
            mainFrame.contentWindow.postMessage(
                { action: "reveal-result", result: resultText },
                "*"
            );
        }
    }

    // -------------------------------
    // NAVIGATION HELPERS
    // -------------------------------
    function navigate(target) {
        const blocked = [
            "../parent/dashboard.html",
            "../settings/locked.html"
        ];

        if (blocked.includes(target)) {
            mainFrame.src = "../intercept/intercept.html";
            return;
        }

        mainFrame.src = target;
    }

    function navigateWithMessage(target, message) {
        navigate(target);

        setTimeout(() => {
            if (mainFrame && mainFrame.contentWindow) {
                mainFrame.contentWindow.postMessage(message, "*");
            }
        }, 50);
    }

    // -------------------------------
    // TANUKI MOOD MESSAGING
    // -------------------------------
    function sendTanukiMood(mood) {
        if (!tanukiFrame) return;

        tanukiFrame.contentWindow.postMessage(
            { action: "set-mood", mood: mood },
            "*"
        );
    }

    // -------------------------------
    // INITIAL LOAD
    // -------------------------------
    navigate("../home/home.html");
};

