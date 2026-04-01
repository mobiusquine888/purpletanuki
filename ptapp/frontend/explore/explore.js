// PTapp Explore Mode Logic (REFORGED)

window.onload = function () {
    const buttons = document.querySelectorAll(".explore-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            window.parent.postMessage({ action: "navigate", target }, "*");
        });
    });

    // Simple greeting for MVP
    document.getElementById("tanuki-greeting").innerText = "What would you like to explore today?";
};
