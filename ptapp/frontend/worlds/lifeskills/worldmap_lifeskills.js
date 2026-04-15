document.addEventListener("DOMContentLoaded", () => {
    const lessonGrid = document.getElementById("lessonGrid");
    if (!lessonGrid) return;

    const skills = [
        { id: "kindness", title: "Kindness Moments", desc: "Tiny ways to show care and empathy.", free: true },
        { id: "chores", title: "Mini Chores", desc: "Small tasks that build independence.", free: true },
        { id: "problem-solving", title: "Problem Solving", desc: "Simple steps to handle tricky moments.", free: true },
        { id: "friendship", title: "Friendship Skills", desc: "How to listen, share, and take turns.", free: true },
        { id: "confidence", title: "Confidence Boosters", desc: "Short rituals to feel brave and capable.", free: true },
        { id: "organization", title: "Tiny Organizing", desc: "Clean up, sort, and reset your space.", free: true },
        { id: "healthy-habits", title: "Healthy Habits", desc: "Small routines for a strong body and mind.", free: true },
        { id: "safety", title: "Safety Basics", desc: "Learn safe choices in everyday situations.", free: true },
        { id: "premium-life-journeys", title: "Life Journeys", desc: "Longer guided lessons for real-world growth.", free: false },
        { id: "premium-big-choices", title: "Big Choices", desc: "Learn how to make thoughtful decisions.", free: false }
    ];

    skills.forEach(skill => {
        const tile = document.createElement("article");
        tile.className = "lesson-tile";

        const titleEl = document.createElement("h3");
        titleEl.className = "lesson-title";
        titleEl.textContent = skill.title;

        const descEl = document.createElement("p");
        descEl.className = "lesson-desc";
        descEl.textContent = skill.desc;

        const badgeEl = document.createElement("div");
        badgeEl.className = `badge ${skill.free ? "badge-free" : "badge-premium"}`;
        badgeEl.textContent = skill.free ? "FREE" : "PREMIUM";

        tile.appendChild(titleEl);
        tile.appendChild(descEl);
        tile.appendChild(badgeEl);

        if (!skill.free) {
            const lockEl = document.createElement("span");
            lockEl.className = "lock-icon";
            lockEl.textContent = "🔒";
            tile.appendChild(lockEl);
        }

        tile.addEventListener("click", () => {
            console.log("Life Skill selected:", skill.id);
        });

        lessonGrid.appendChild(tile);
    });
});
