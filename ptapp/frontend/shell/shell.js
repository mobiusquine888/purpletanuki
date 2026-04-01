// PTapp App Shell (REFORGED for Netlify + Step 20)

window.onload = function () {
    const mainFrame = document.getElementById("pt-main-frame");
    const tanukiFrame = document.getElementById("pt-tanuki-frame");

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

        // Child page requests navigation
        if (data.action === "navigate" && data.target) {
            navigate(data.target);
        }

        // Home requests engine start
        if (data.action === "engine-start") {
            startEngineFlow(data);
        }

        // Flow sends an answer to the engine
        if (data.action === "flow-answer") {
            PT_Engine.receiveAnswer(data.answer);
        }

        // Engine sends result to Reveal
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
    // SEND RESULT TO REVEAL
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
    // NAVIGATION + INTERCEPT
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

