// PTapp App Shell (REFORGED for Netlify + Audio + Curriculum Routing)

// -----------------------------------------
// GLOBAL AUDIO TAP-TO-START + FADE-IN
// -----------------------------------------
(function () {
    const audio = document.getElementById("pt-theme-audio");
    if (!audio) return;

    // Start silent for fade‑in
    audio.volume = 0;

    function fadeInAudio() {
        let v = 0;
        const target = 0.6;
        const step = 0.02;

        const fade = setInterval(() => {
            v += step;
            if (v >= target) {
                v = target;
                clearInterval(fade);
            }
            audio.volume = v;
        }, 50);
    }

    function startAudio() {
        audio.play().then(() => {
            fadeInAudio();
        }).catch(() => {});
    }

    // Try autoplay immediately (desktop-friendly)
    audio.play().then(() => {
        fadeInAudio();
    }).catch(() => {
        // If blocked (mobile/WebView), wait for first user gesture
        const resume = () => {
            startAudio();
            window.removeEventListener("click", resume);
            window.removeEventListener("touchstart", resume);
        };

        window.addEventListener("click", resume, { once: true });
        window.addEventListener("touchstart", resume, { once: true });
    });
})();

// -----------------------------------------
// MUTE BUTTON LOGIC (Step 3)
// -----------------------------------------
window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("pt-theme-audio");
    const btn = document.getElementById("pt-mute-btn");
    const icon = document.getElementById("pt-mute-icon");

    if (!audio || !btn || !icon) return;

    let muted = false;

    btn.onclick = () => {
        muted = !muted;

        if (muted) {
            audio.muted = true;
            icon.src = "/shell/icons/volume-off.png";
        } else {
            audio.muted = false;
            icon.src = "/shell/icons/volume-on.png";
        }
    };
});

// -----------------------------------------
// MAIN SHELL BOOTSTRAP
// -----------------------------------------
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

        // USER GESTURE FORWARDED FROM IFRAME
        if (data.action === "user-gesture") {
            const audio = document.getElementById("pt-theme-audio");
            if (audio && audio.paused) {
                audio.play().catch(() => {});
            }
        }

        // CURRICULUM ROUTING
        if (data.action === "engine-curriculum") {
            navigateWithMessage(
                "../curriculum/curriculum.html",
                {
                    action: "curriculum-load",
                    data: data.data
                }
            );
        }

        if (data.action === "navigate" && data.target) {
            navigateWithMessage(data.target, data);
        }

        // OLD + FLOW PROTOCOLS
        if (data.action === "engine-start") {
            startEngineFlow(data);
        }

        if (data.action === "engine-start-request") {
            PT_Engine.start(data.mode, data.module || null);
        }

        if (data.action === "flow-answer") {
            PT_Engine.receiveAnswer(data.answer);
        }

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

        if (data.action === "engine-result") {
            sendToReveal(data.result);
        }

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
            if (mainFrame) {
                mainFrame.src = "../intercept/intercept.html";
            }
            return;
        }

        if (mainFrame) {
            mainFrame.src = target;
        }
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
        if (!tanukiFrame || !tanukiFrame.contentWindow) return;

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



