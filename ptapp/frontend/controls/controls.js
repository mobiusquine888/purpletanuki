async function loadSettings() {
  try {
    const local = localStorage.getItem("pt_parent_settings");
    if (local) {
      applySettingsToUI(JSON.parse(local));
      return;
    }

    const res = await fetch("data/parent-settings.json");
    const settings = await res.json();
    applySettingsToUI(settings);
  } catch (e) {
    console.error("Failed to load parent settings", e);
  }
}

function applySettingsToUI(s) {
  document.getElementById("world-calmfocus").checked = s.worldAccess.calmfocus;
  document.getElementById("world-earlylearning").checked = s.worldAccess.earlylearning;
  document.getElementById("world-bigkidskills").checked = s.worldAccess.bigkidskills;
  document.getElementById("world-lifeskills").checked = s.worldAccess.lifeskills;

  document.getElementById("gate-enabled").checked = s.gate.enabled;
  document.getElementById("gate-strictness").value = s.gate.strictness;
  document.getElementById("gate-cooldown").value = s.gate.cooldownMinutes;

  document.getElementById("time-daily").value = s.timeLimits.dailyMinutes;
  document.getElementById("time-session").value = s.timeLimits.sessionMinutes;

  document.getElementById("apps-blocked").value = s.apps.blocked.join(", ");

  document.getElementById("pin-enabled").checked = s.pin.enabled;
  document.getElementById("pin-code").value = s.pin.code;
}

function collectSettingsFromUI() {
  return {
    worldAccess: {
      calmfocus: document.getElementById("world-calmfocus").checked,
      earlylearning: document.getElementById("world-earlylearning").checked,
      bigkidskills: document.getElementById("world-bigkidskills").checked,
      lifeskills: document.getElementById("world-lifeskills").checked
    },
    gate: {
      enabled: document.getElementById("gate-enabled").checked,
      strictness: document.getElementById("gate-strictness").value,
      cooldownMinutes: Number(document.getElementById("gate-cooldown").value) || 0,
      requireChallengeBeforeDoomscroll: true
    },
    timeLimits: {
      dailyMinutes: Number(document.getElementById("time-daily").value) || 0,
      sessionMinutes: Number(document.getElementById("time-session").value) || 0
    },
    apps: {
      blocked: document
        .getElementById("apps-blocked")
        .value.split(",")
        .map(x => x.trim())
        .filter(Boolean),
      allowed: []
    },
    pin: {
      enabled: document.getElementById("pin-enabled").checked,
      code: document.getElementById("pin-code").value || ""
    }
  };
}

function saveSettingsLocally(settings) {
  localStorage.setItem("pt_parent_settings", JSON.stringify(settings));
}

function showStatus(msg) {
  const el = document.getElementById("pc-status");
  el.textContent = msg;
  setTimeout(() => (el.textContent = ""), 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  loadSettings();

  document.getElementById("pc-save").addEventListener("click", () => {
    const settings = collectSettingsFromUI();
    saveSettingsLocally(settings);
    showStatus("Settings saved.");
  });
});
