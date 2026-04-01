// PTapp Akinator Shell Logic (REFORGED)

window.onload = function () {
    const mainFrame = document.getElementById("pt-main-frame");

    // Settings (upper left inside header)
    document.getElementById("pt-shell-settings").onclick = () => {
        navigate("/ptapp/frontend/settings/settings.html");
    };

    // Profile (upper right)
    document.getElementById("pt-shell-profile").onclick = () => {
        navigate("/ptapp/frontend/profiles/select.html");
    };

    // Listen for navigation + Tanuki mood from child frames
    window.addEventListener("message", (event) => {
        const data = event.data || {};

        if (data.action === "navigate" && data.target) {
            navigate(data.target);
        }
    });

    function navigate(target) {
        // Intercept rules still apply (from Step 8)
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
}
