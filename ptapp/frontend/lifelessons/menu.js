// PTapp Life Lessons Menu Logic (REFORGED)

window.onload = function () {
    const buttons = document.querySelectorAll(".ll-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            window.parent.postMessage({
                action: "navigate",
                target: `/ptapp/frontend/lifelessons/${target}`
            }, "*");
        });
    });
};
