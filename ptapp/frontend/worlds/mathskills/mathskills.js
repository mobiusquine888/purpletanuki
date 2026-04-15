/* ---------------------------------------------------------
   Purple Tanuki – Math Skills World Logic
   Loads curriculum, builds lesson tiles, handles navigation
--------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    loadMathCurriculum();
});

/* ---------------------------------------------------------
   Load curriculum.json and populate lesson grid
--------------------------------------------------------- */
function loadMathCurriculum() {
    fetch("mathskills.json")
        .then(response => response.json())
        .then(data => buildLessonGrid(data))
        .catch(err => console.error("Error loading mathskills.json:", err));
}

/* ---------------------------------------------------------
   Build lesson tiles dynamically
--------------------------------------------------------- */
function buildLessonGrid(lessons) {
    const grid = document.getElementById("lessonGrid");
    if (!grid) return;

    lessons.forEach(lesson => {
        const tile = document.createElement("div");
        tile.classList.add("lesson-tile");

        // Badge (Free or Premium)
        const badge = document.createElement("div");
        badge.classList.add("badge");
        if (lesson.premium) {
            badge.classList.add("badge-premium");
            badge.textContent = "Premium";
        } else {
            badge.classList.add("badge-free");
            badge.textContent = "Free";
        }

        // Title
        const title = document.createElement("div");
        title.classList.add("lesson-title");
        title.textContent = lesson.title;

        // Description
        const desc = document.createElement("div");
        desc.classList.add("lesson-desc");
        desc.textContent = lesson.description || "A tiny math adventure.";

        // Lock icon for premium
        let lockIcon = null;
        if (lesson.premium) {
            lockIcon = document.createElement("div");
            lockIcon.classList.add("lock-icon");
            lockIcon.textContent = "🔒";
        }

        // Click behavior
        tile.addEventListener("click", () => {
            if (lesson.premium) {
                alert("This is a Premium lesson. Unlock to continue!");
                return;
            }
            window.location.href = `lessons/${lesson.id}.html`;
        });

        // Assemble tile
        tile.appendChild(badge);
        tile.appendChild(title);
        tile.appendChild(desc);
        if (lockIcon) tile.appendChild(lockIcon);

        grid.appendChild(tile);
    });
}
