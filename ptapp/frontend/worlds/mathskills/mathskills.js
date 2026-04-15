document.addEventListener("DOMContentLoaded", () => {
    const lessonGrid = document.getElementById("lessonGrid");
    if (!lessonGrid) return;

    const lessons = [
        { id: "glowing-numbers", title: "Meet the Glowing Numbers", desc: "Explore magical number runes that float in the air.", free: true },
        { id: "counting-lanterns", title: "Counting Lanterns", desc: "Count softly glowing lanterns in the Tanuki forest.", free: true },
        { id: "adding-fireflies", title: "Adding Fireflies", desc: "Combine tiny firefly groups to discover new totals.", free: true },
        { id: "shape-runes", title: "Shape Runes", desc: "Match glowing shapes to learn early geometry.", free: true },
        { id: "pattern-paths", title: "Pattern Paths", desc: "Follow magical patterns through the forest.", free: true },
        { id: "compare-crystals", title: "Compare Crystals", desc: "Which crystal is bigger, smaller, or equal?", free: true },
        { id: "sorting-stones", title: "Sorting Stones", desc: "Sort glowing stones by size, color, or number.", free: true },
        { id: "skip-step-lights", title: "Skip-Step Lights", desc: "Jump through glowing numbers in skip-counting paths.", free: true },
        { id: "rune-addition", title: "Rune Addition", desc: "Add glowing runes to unlock a floating stone.", free: false },
        { id: "rune-challenges", title: "Rune Challenges", desc: "Solve magical puzzles to master early math.", free: false }
    ];

    lessons.forEach(lesson => {
        const tile = document.createElement("article");
        tile.className = "lesson-tile";

        const titleEl = document.createElement("h3");
        titleEl.className = "lesson-title";
        titleEl.textContent = lesson.title;

        const descEl = document.createElement("p");
        descEl.className = "lesson-desc";
        descEl.textContent = lesson.desc;

        const badgeEl = document.createElement("div");
        badgeEl.className = `badge ${lesson.free ? "badge-free" : "badge-premium"}`;
        badgeEl.textContent = lesson.free ? "FREE" : "PREMIUM";

        tile.appendChild(titleEl);
        tile.appendChild(descEl);
        tile.appendChild(badgeEl);

        if (!lesson.free) {
            const lockEl = document.createElement("span");
            lockEl.className = "lock-icon";
            lockEl.textContent = "🔒";
            tile.appendChild(lockEl);
        }

        tile.addEventListener("click", () => {
            console.log("Math lesson selected:", lesson.id);
        });

        lessonGrid.appendChild(tile);
    });
});

