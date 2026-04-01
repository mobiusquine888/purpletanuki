// PTapp Theme Modal Logic (REFORGED)

window.onload = function () {

    // Theme selection
    const buttons = document.querySelectorAll(".theme-btn");
    buttons.forEach(btn => {
        btn.onclick = () => {
            const theme = btn.getAttribute("data-theme");

            window.parent.postMessage({
                action: "set-theme",
                theme
            }, "*");
        };
    });

    // Close modal
    document.getElementById("theme-close-btn").onclick = () => {
        window.parent.postMessage({
            action: "close-theme-modal"
        }, "*");
    };
};
