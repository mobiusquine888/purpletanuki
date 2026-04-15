// ---------------------------------------------------------
// Purple Tanuki – Calm & Focus World Logic (10 Rituals)
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
            id: "body-scan",
            title: "Mini Body Scan",
            desc: "Notice your toes, legs, belly, chest, and face.",
            free: true
        },
        {
            id: "color-breath",
            title: "Color Breathing",
            desc: "Breathe in soft colors, breathe out heavy ones.",
            free: true
        },
        {
            id: "calm-shapes",
            title: "Calm Shapes",
            desc: "Trace slow-moving shapes to settle your mind.",
            free: true
        },
        {
            id: "sound-bubbles",
            title: "Sound Bubbles",
            desc: "Pop gentle sound bubbles to reset your focus.",
            free: true
        },
        {
            id: "gratitude-seeds",
            title: "Gratitude Seeds",
            desc: "Plant tiny thoughts of gratitude and watch them grow.",
            free: true
        },
        {
            id: "focus-lantern",
            title: "Focus Lantern",
            desc: "Follow a drifting lantern to practice attention.",
            free: true
        },
        {
            id: "deep-calm-journeys",
            title: "Deep Calm Journeys",
            desc: "Longer guided rituals for deep focus and rest.",
            free: false
        },
        {
            id: "sleep-waves",
            title: "Sleep Waves",
            desc: "Soft waves and slow rhythms for bedtime calm.",
            free: false
        }
    ];

    rituals.forEach(ritual => {
        const tile = document.createElement("article");
        tile.className = "lesson-tile";

        const titleEl = document.createElement("h3");
        titleEl.className = "lesson-title";
        titleEl.textContent = ritual.title;

        const descEl = document.createElement("p");
        descEl.className = "lesson-desc";
        descEl.textContent = ritual.desc;

        const badgeEl = document.createElement("div");
        badgeEl.className = `badge ${ritual.free ? "badge-free" : "badge-premium"}`;
        badgeEl.textContent = ritual.free ? "FREE" : "PREMIUM";

        tile.appendChild(titleEl);
        tile.appendChild(descEl);
        tile.appendChild(badgeEl);

        if—
