// PTapp Profile Select Logic (REFORGED)

window.onload = function () {
    renderProfiles();

    document.getElementById("add-profile-btn").onclick = () => {
        const name = prompt("Enter a name:");
        if (!name) return;

        PTProfileState.addProfile(name);
        renderProfiles();
    };
};

function renderProfiles() {
    const list = document.getElementById("profile-list");
    list.innerHTML = "";

    const profiles = PTProfileState.getProfiles();

    profiles.forEach(profile => {
        const btn = document.createElement("button");
        btn.className = "profile-btn";
        btn.innerText = profile.name;

        btn.onclick = () => {
            PTProfileState.setActive(profile.id);
            window.parent.postMessage({
                action: "navigate",
                target: "/ptapp/frontend/explore/explore.html"
            }, "*");
        };

        list.appendChild(btn);
    });
}
