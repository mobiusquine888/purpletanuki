// PTapp Calm Down Lesson Logic (REFORGED)

window.onload = function () {
    setTimeout(() => {
        window.parent.postMessage({
            action: "navigate",
            target: "/ptapp/frontend/explore/explore.html"
        }, "*");
    }, 6000);
};
