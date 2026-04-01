// PTapp Akinator Home Logic (REFORGED)

window.onload = function () {

    // Challenge Me → Akinator question flow (Step 16)
    document.getElementById("pt-home-challenge-btn").onclick = () => {
        window.parent.postMessage({
            action: "navigate",
            target: "/ptapp/frontend/akinator/flow.html"
        }, "*");
    };

    // Freemium entry points
    const entries = document.querySelectorAll(".pt-entry-btn");
    entries.forEach(btn => {
        btn.onclick = () => {
            const target = btn.getAttribute("data-target");
            window.parent.postMessage({
                action: "navigate",
                target
            }, "*");
        };
    });
};
