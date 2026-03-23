// Load saved settings
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("pt_parent_settings")) || {};

  if (saved.unlockDuration) {
    document.getElementById("unlockDuration").value = saved.unlockDuration;
  }

  if (saved.difficulty) {
    document.getElementById("difficulty").value = saved.difficulty;
  }

  document.getElementById("yt").checked = saved.yt ?? true;
  document.getElementById("tiktok").checked = saved.tiktok ?? false;
  document.getElementById("roblox").checked = saved.roblox ?? false;
  document.getElementById("customSiteToggle").checked = saved.customSiteToggle ?? false;
};

// Save settings
document.getElementById("saveSettings").onclick = () => {
  const settings = {
    unlockDuration: document.getElementById("unlockDuration").value,
    difficulty: document.getElementById("difficulty").value,
    yt: document.getElementById("yt").checked,
    tiktok: document.getElementById("tiktok").checked,
    roblox: document.getElementById("roblox").checked,
    customSiteToggle: document.getElementById("customSiteToggle").checked
  };

  localStorage.setItem("pt_parent_settings", JSON.stringify(settings));

  alert("Settings saved!");
};
