/* -------------------------------------------------------
   Math Skills — Lesson Grid Logic
------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const lessonGrid = document.getElementById("lessonGrid");
    if (!lessonGrid) return;

    const lessons = [
        { id: "numbersense1", title: "Meet the Glowing Numbers", description: "Explore magical number runes that float in the air.", difficulty: 1, premium: false },
        { id: "numbersense2", title: "Counting Lanterns", description: "Count softly glowing lanterns in the Tanuki forest.", difficulty: 1, premium: false },

        { id: "addition1", title: "Adding Fireflies", description: "Combine tiny firefly groups to discover new totals.", difficulty: 1, premium: false },
        { id: "addition2", title: "Rune Addition", description: "Add glowing runes to unlock a floating stone.", difficulty: 2, premium: true },

        { id: "patterns1", title: "Magic Patterns", description: "Follow repeating rune patterns across a floating bridge.", difficulty: 1, premium: false },
        { id: "patterns2", title: "Pattern Portals", description: "Complete patterns to open shimmering portals.", difficulty: 2, premium: true },

        { id: "shapes1", title: "Shape Stones", description: "Identify shapes carved into ancient Tanuki stones.", difficulty: 1, premium: false },
        { id: "shapes2", title: "Floating Shape Runes", description: "Match glowing shapes to their magical outlines.", difficulty: 2, premium: true },

        { id: "fractions1", title: "Lantern Fractions", description: "See how lanterns split into halves and quarters.", difficulty: 2, premium: false },
        { id: "fractions2", title: "Rune Slices", description: "Divide glowing rune circles into equal parts.", difficulty: 3, premium: true }
    ];

    lessons.forEach(lesson => {
        const tile = document.createElement("article");
        tile.className = "lesson-tile";

        const titleEl = document.createElement("h3");
        titleEl.textContent = lesson.title;

        const descEl = document.createElement("p");
        descEl.textContent = lesson.description;

        const badgeEl = document.createElement("div");
        badgeEl.className = lesson.premium ? "badge badge-premium" : "badge badge-free";
        badgeEl.textContent = lesson.premium ? "PREMIUM" : "FREE";

        tile.appendChild(titleEl);
        tile.appendChild(descEl);
        tile.appendChild(badgeEl);

        tile.addEventListener("click", () => {
            console.log("Lesson selected:", lesson.id);

            if (lesson.premium) {
                alert("This is a premium lesson.");
                return;
            }

            if (lesson.id === "addition1") {
                window.location.href = "../../games/adding-fireflies/index.html";
            }
        });

        lessonGrid.appendChild(tile);
    });
});
