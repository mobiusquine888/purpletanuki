/* PTapp Calm Down Lesson Logic (REFORGED) */

window.onload = function () {

    // If returning from the gate, show the ready state
    const params = new URLSearchParams(window.location.search);
    const state = params.get("state");

    if (state === "ready") {
        document.getElementById("calm-container").innerHTML = `
            <div id="ready-text">The gate is ready.<br>Return to the Arcade to use the portal.</div>
            <button id="return-btn">RETURN TO ARCADE</button>
        `;

        document.getElementById("return-btn").onclick = () => {
            window.parent.postMessage({
                action: "navigate",
                target: "/ptapp/frontend/explore/explore.html"
            }, "*");
        };

        return;
    }

    // Normal breathing sequence → redirect to gate
    setTimeout(() => {
        window.location.href = "opening-gate.html";
    }, 6000);
};
