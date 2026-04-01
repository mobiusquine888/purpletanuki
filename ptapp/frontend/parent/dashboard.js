// PTapp Parent Dashboard Logic (REFORGED)

window.onload = function () {
    loadActivity();
    loadProgress();

    document.getElementById("switch-profile-btn").onclick = () => {
        window.parent.postMessage({
            action: "navigate",
            target: "/ptapp/frontend/profiles/select.html"
        }, "*");
    };
};

function loadActivity() {
    // MVP placeholder
    document.getElementById("activity-log").innerText =
        "Child explored Learn Mode and Life Lessons today.";
}

function loadProgress() {
    // MVP placeholder
    document.getElementById("progress-summary").innerText =
        "Math mastery: 20% • Life Lessons completed: 3";
}
