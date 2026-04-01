// PTapp Tanuki Display System (REFORGED)

const TanukiDisplay = {
    moods: {
        idle: "/ptapp/assets/tanuki/idle.png",
        happy: "/ptapp/assets/tanuki/happy.png",
        soft: "/ptapp/assets/tanuki/soft.png",
        think: "/ptapp/assets/tanuki/think.png"
    },

    setMood(mood) {
        const img = document.getElementById("tanuki-img");
        if (!img) return;

        img.src = this.moods[mood] || this.moods.idle;
    }
};

// Listen for mood updates from any screen
window.addEventListener("message", (event) => {
    if (event.data.action === "tanuki-mood") {
        TanukiDisplay.setMood(event.data.mood);
    }
});
