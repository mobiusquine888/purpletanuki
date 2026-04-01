// PTapp Profile State (REFORGED)

const PTProfileState = {
    getProfiles() {
        return JSON.parse(localStorage.getItem("pt_profiles") || "[]");
    },

    saveProfiles(profiles) {
        localStorage.setItem("pt_profiles", JSON.stringify(profiles));
    },

    addProfile(name) {
        const profiles = this.getProfiles();
        const id = Date.now().toString();

        profiles.push({ id, name });
        this.saveProfiles(profiles);
    },

    setActive(id) {
        localStorage.setItem("pt_active_profile", id);
    },

    getActive() {
        return localStorage.getItem("pt_active_profile");
    }
};
