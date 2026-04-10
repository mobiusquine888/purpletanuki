document.addEventListener("DOMContentLoaded", () => {
  const local = localStorage.getItem("pt_parent_settings");
  if (!local) return;

  const settings = JSON.parse(local);

  // TIME LIMITS
  document.getElementById("pd-daily-limit").textContent =
    settings.timeLimits.dailyMinutes;

  document.getElementById("pd-session-limit").textContent =
    settings.timeLimits.sessionMinutes;

  // GATE SETTINGS
  document.getElementById("pd-gate-enabled").textContent =
    settings.gate.enabled ? "Yes" : "No";

  document.getElementById("pd-gate-strictness").textContent =
    settings.gate.strictness;

  document.getElementById("pd-gate-cooldown").textContent =
    settings.gate.cooldownMinutes;

  // BLOCKED APPS
  document.getElementById("pd-blocked-apps").textContent =
    settings.apps.blocked.join(", ");

  // DAILY TIME USED
  const dayKey = "pt_daily_time";
  const dayData = JSON.parse(localStorage.getItem(dayKey)) || {
    date: new Date().toDateString(),
    minutes: 0
  };

  document.getElementById("pd-daily-used").textContent = dayData.minutes;

  // WORLD PROGRESS (placeholder until progression engine)
  const worlds = ["calmfocus", "earlylearning", "bigkidskills", "lifeskills"];
  worlds.forEach(w => {
    const el = document.querySelector(`#pd-${w} .pd-value`);
    if (el) el.textContent = "0%";
  });
});
