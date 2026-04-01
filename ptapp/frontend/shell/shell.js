// PTapp Akinator App Shell (REFORGED)

window.onload = function () {
    const mainFrame = document.getElementById("pt-main-frame");
    const tanukiFrame = document.getElementById("pt-tanuki-frame");

    // -------------------------------
    // HEADER BUTTONS
    // -------------------------------

    // Settings (upper left)
    const settingsBtn = document.getElementById("pt-shell-settings");
    if (settingsBtn) {
        settingsBtn.onclick = () => {
            navigate("/ptapp/frontend/settings/settings.html");
        };
    }

    // Profile (upper right)
    const profileBtn = document.getElementById("pt-shell-profile");
    if (profileBtn) {
        profileBtn.onclick = () => {
            navigate("/ptapp/frontend/profiles/select.html");
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

        // Child page requests Tanuki mood change
        if (data.action === "tanuki-mood" && data.mood) {
            sendTanukiMood(data.mood);
        }
    });

    // -------------------------------
    // NAVIGATION + INTERCEPT
    // -------------------------------
    function navigate(target) {
        const blocked = [
            "/ptapp/frontend/parent/dashboard.html",
            "/ptapp/frontend/settings/locked.html"
        ];

        if (blocked.includes(target)) {
            mainFrame.src = "/ptapp/frontend/intercept/intercept.html";
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
    navigate("/ptapp/frontend/home/home.html");
};

