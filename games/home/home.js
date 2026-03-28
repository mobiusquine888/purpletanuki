console.log("Home JS loaded!");

// ===============================
// XP STORAGE + RETRIEVAL SYSTEM
// ===============================

const DEFAULT_LEVEL = 1;
const DEFAULT_TOTAL_XP = 0;
const DEFAULT_TODAY_XP = 0;
const DAILY_GOAL = 20;

function loadXPData() {
    const level = parseInt(localStorage.getItem("pt_xp_level")) || DEFAULT_LEVEL;
    const totalXP = parseInt(localStorage.getItem("pt_xp_total")) || DEFAULT_TOTAL_XP;
    const todayXP = parseInt(localStorage.getItem("pt_xp_today")) || DEFAULT_TODAY_XP;
    const lastDate = localStorage.getItem("pt_xp_last_date");

    return { level, totalXP, todayXP, lastDate };
}

function saveXPData({ level, totalXP, todayXP }) {
    localStorage.setItem("pt_xp_level", level);
    localStorage.setItem("pt_xp_total", totalXP);
    localStorage.setItem("pt_xp_today", todayXP);
    localStorage.setItem("pt_xp_last_date", new Date().toDateString());
}

function resetDailyIfNeeded(data) {
    const today = new Date().toDateString();

    if (data.lastDate !== today) {
        data.todayXP = 0;
        data.lastDate = today;
        saveXPData(data);
    }

    return data;
}

function updateXPUI(data) {
    const levelEl = document.getElementById("tanuki-level");
    const fillEl = document.getElementById("tanuki-xp-fill");
    const goalEl = document.getElementById("tanuki-daily-goal");

    levelEl.textContent = `Level ${data.level}`;

    const percent = Math.min((data.todayXP / DAILY_GOAL) * 100, 100);
    fillEl.style.width = percent + "%";

    goalEl.textContent = `${data.todayXP} / ${DAILY_GOAL} XP today`;
}

window.addEventListener("load", () => {
    let data = loadXPData();
    data = resetDailyIfNeeded(data);
    updateXPUI(data);
});
