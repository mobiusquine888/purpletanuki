// ===============================
// LOAD SAVED PARENT SETTINGS
// ===============================
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("pt_parent_settings")) || {};

  // Unlock duration (minutes)
  if (saved.unlockDuration) {
    document.getElementById("unlockDuration").value = saved.unlockDuration;
  }

  // Ritual difficulty
  if (saved.difficulty) {
    document.getElementById("difficulty").value = saved.difficulty;
  }

  // Allowed sites
  document.getElementById("yt").checked = saved.yt ?? true;
  document.getElementById("tiktok").checked = saved.tiktok ?? false;
  document.getElementById("roblox").checked = saved.roblox ?? false;
  document.getElementById("customSiteToggle").checked = saved.customSiteToggle ?? false;
};


// ===============================
// SAVE SETTINGS
// ===============================
document.getElementById("saveSettings").onclick = () => {

  const settings = {
    unlockDuration: Number(document.getElementById("unlockDuration").value),
    difficulty: document.getElementById("difficulty").value,

    // Allowed sites
    yt: document.getElementById("yt").checked,
    tiktok: document.getElementById("tiktok").checked,
    roblox: document.getElementById("roblox").checked,
    customSiteToggle: document.getElementById("customSiteToggle").checked
  };

  // Save to localStorage
  localStorage.setItem("pt_parent_settings", JSON.stringify(settings));

  // Feedback
  alert("Settings saved!");
};
