// PTapp Intercept Logic (REFORGED)

window.onload = function () {
    document.getElementById("intercept-ok-btn").onclick = () => {
        window.parent.postMessage({
            action: "navigate",
            target: "/ptapp/frontend/explore/explore.html"
        }, "*");
    };
};
