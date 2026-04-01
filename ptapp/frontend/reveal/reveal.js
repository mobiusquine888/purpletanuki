// PTapp Reveal Screen (REFORGED)

window.onload = function () {
    const againBtn = document.getElementById("reveal-again");

    // Go back to Home
    againBtn.onclick = () => {
        window.parent.postMessage(
            { action: "navigate", target: "/ptapp/frontend/home/home.html" },
            "*"
        );
    };

    // Make Tanuki react happily on reveal
    window.parent.postMessage(
        { action: "tanuki-mood", mood: "happy" },
        "*"
    );
};
