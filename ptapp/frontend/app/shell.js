// PTapp App Shell Logic (REFORGED)

window.onload = function () {
    const content = document.getElementById("pt-content");
    const footerButtons = document.querySelectorAll("#pt-footer button");
    const backBtn = document.getElementById("back-btn");
    const profileBtn = document.getElementById("profile-btn");

    // Footer navigation
    footerButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            loadPage(target);
        });
    });

    // Back button
    backBtn.addEventListener("click", () => {
        history.back();
    });

    // Profile button
    profileBtn.addEventListener("click", () => {
        loadPage("/ptapp/frontend/profiles/select.html");
    });

    // Default load
    loadPage("/ptapp/frontend/explore/explore.html");

    function loadPage(path) {
        content.innerHTML = `<iframe src="${path}" class="pt-frame"></iframe>`;
    }
};
