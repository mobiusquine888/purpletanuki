// ======================================================
// LOAD SETTINGS
// ======================================================

async function loadSettings() {
  try {
    // 1. Check localStorage first
    const local = localStorage.getItem("pt_parent_settings");
    if (local) {
      applySettingsToUI(JSON.parse(local));
      return;
    }

    // 2. Fallback to parent-settings.json
    const res = await fetch("parent-settings.json", { cache: "no-store" });
    const settings = await res.json();
    applySettingsToUI(settings);

  } catch (e) {
    console.error("Failed to load parent settings", e);
  }
}

// ======================================================
// APPLY SETTINGS TO UI
// ======================================================

function applySettingsToUI(s) {
  document.getElementById("gate-enabled").checked = s.gateEnabled;
  document.getElementById("gate-strictness").value = s.strictness;
  document.getElementById("gate-cooldown").value = s.cooldownMinutes;

  document.getElementById("time-daily").value = s.dailyMinutes;
  document.getElementById("time-session").value = s.sessionMinutes;

  document.getElementById("apps-blocked").value = (s.blockedApps || []).join(", ");

  document.getElementById("pin-enabled").checked = !!s.pin;
  document.getElementById("pin-code").value = s.pin || "";
}

// ======================================================
// COLLECT SETTINGS FROM UI
// ======================================================

function collectSettingsFromUI() {
  const pinEnabled = document.getElementById("pin-enabled").checked;
  const pinCode = document.getElementById("pin-code").value.trim();

  return {
    gateEnabled: document.getElementById("gate-enabled").checked,
    strictness: document.getElementById("gate-strictness").value,
    cooldownMinutes: Number(document.getElementById("gate-cooldown").value) || 0,

    dailyMinutes: Number(document.getElementById("time-daily").value) || 0,
    sessionMinutes: Number(document.getElementById("time-session").value) || 0,

    blockedApps: document
      .getElementById("apps-blocked")
      .value.split(",")
      .map(x => x.trim())
      .filter(Boolean),

    allowedApps: [],

    pin: pinEnabled ? pinCode : null
  };
}

// ======================================================
// SAVE SETTINGS
// ======================================================

function saveSettingsLocally(settings) {
  localStorage.setItem("pt_parent_settings", JSON.stringify(settings));
}

function showStatus(msg) {
  const el = document.getElementById("pc-status");
  el.textContent = msg;
  setTimeout(() => (el.textContent = ""), 2000);
}

// ======================================================
// INIT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {
  loadSettings();

  document.getElementById("pc-save").addEventListener("click", () => {
    const settings = collectSettingsFromUI();
    saveSettingsLocally(settings);
    showStatus("Settings saved.");
  });
});

