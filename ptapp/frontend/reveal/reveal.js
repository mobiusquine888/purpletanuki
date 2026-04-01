// PTapp Reveal Screen (REFORGED for Step 20)

window.onload = function () {
    const resultBox = document.getElementById("reveal-result");
    const againBtn = document.getElementById("reveal-again");

    // Play Again → back to Home
    if (againBtn) {
        againBtn.onclick = () => {
            window.parent.postMessage(
                { action: "navigate", target: "/ptapp/frontend/home/home.html" },
                "*"
            );
        };
    }

    // Tanuki happy on reveal
    window.parent.postMessage(
        { action: "tanuki-mood", mood: "happy" },
        "*"
    );
};

// Receive result text from engine via shell
window.addEventListener("message", (event) => {
    const data = event.data || {};

    if (data.action === "reveal-result") {
        const resultBox = document.getElementById("reveal-result");
        if (resultBox) {
            resultBox.textContent = data.result;
        }
    }
});

