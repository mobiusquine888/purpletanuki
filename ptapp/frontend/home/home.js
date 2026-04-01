// PTapp Home Screen Logic (REFORGED)

window.onload = function () {
    document.getElementById("start-btn").onclick = () => {
        window.parent.postMessage({
            action: "navigate",
            target: "/ptapp/frontend/explore/explore.html"
        }, "*");
    };
};
