// PTapp Tanuki Personality Engine (REFORGED)

window.onload = function () {
    const img = document.getElementById("tanuki-img");

    // Listen for mood messages from the shell
    window.addEventListener("message", (event) => {
        const data = event.data || {};

        if (data.action === "set-mood" && data.mood) {
            setMood(data.mood);
        }
    });

    function setMood(mood) {
        // Remove old mood classes
        img.className = "";

        // Swap image
        img.src = `moods/${mood}.png`;

        // Add animation class
        img.classList.add(mood);
    }
};
