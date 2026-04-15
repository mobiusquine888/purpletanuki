// ---------------------------------------------------------
// Purple Tanuki – Calm & Focus World Logic
// Populates the Calm & Focus rituals into the lesson grid
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const lessonGrid = document.getElementById("lessonGrid");
    if (!lessonGrid) return;

    const rituals = [
        {
            id: "breathing",
            title: "Breathing Rituals",
            desc: "Slow breaths, calming shapes, gentle animations.",
            free: true
        },
        {
            id: "emotions-checkin",
            title: "Emotions Check-In",
            desc: "Tiny grounding moments for big feelings.",
            free: true
        },
        {
            id: "deep-calm-journeys",
            title: "Deep Calm Journeys",
            desc: "Longer guided rituals for deep focus and rest.",
            free: false
        }
    ];

    rituals.forEach(ritual => {
        const tile = document.createElement("article");
        tile.className = "lesson-tile";

        // Title
        const titleEl = document.createElement("h3");
        titleEl.className = "lesson-title";
        titleEl.textContent = ritual.title;

        // Description
        const descEl = document.createElement("p");
        descEl.className = "lesson-desc";
        descEl.textContent = ritual.desc;

        // Badge
        const badgeEl = document.createElement("div");
        badgeEl.className = `badge ${ritual.free ? "badge-free" : "badge-premium"}`;
        badgeEl.textContent = ritual.free ? "FREE" : "PREMIUM";

        tile.appendChild(titleEl);
        tile.appendChild(descEl);
        tile.appendChild(badgeEl);

        // Lock icon for premium
        if (!ritual.free) {
            const lockEl = document.createElement("span");
            lockEl.className = "lock-icon";
            lockEl.textContent = "🔒";
            tile.appendChild(lockEl);
        }

        // Click behavior (stub for now)
        tile.addEventListener("click", () => {
            // Later: route to specific ritual page, e.g.:
            // window.location.href = `ritual.html?id=${ritual.id}`;
            console.log("Ritual selected:", ritual.id);
        });

        lessonGrid.appendChild(tile);
    });
});

