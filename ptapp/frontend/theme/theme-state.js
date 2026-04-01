// PTapp Theme State (REFORGED)

const PTTheme = {
    themes: ["purple", "midnight", "forest", "sunrise"],

    get() {
        return localStorage.getItem("pt_theme") || "purple";
    },

    set(theme) {
        if (!this.themes.includes(theme)) return;
        localStorage.setItem("pt_theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    },

    apply() {
        const theme = this.get();
        document.documentElement.setAttribute("data-theme", theme);
    }
};

// Apply theme immediately
PTTheme.apply();
