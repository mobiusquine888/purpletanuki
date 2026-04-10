// Fade-in on load
document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.6s ease";

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// World Access Enforcement (Parent Controls)
document.addEventListener("DOMContentLoaded", () => {
  const local = localStorage.getItem("pt_parent_settings");
  if (!local) return;

  const settings = JSON.parse(local);

  const worlds = [
    { id: "world-calmfocus", key: "calmfocus" },
    { id: "world-earlylearning", key: "earlylearning" },
    { id: "world-bigkidskills", key: "bigkidskills" },
    { id: "world-lifeskills", key: "lifeskills" }
  ];

  worlds.forEach(world => {
    if (!settings.worldAccess[world.key]) {
      const el = document.getElementById(world.id);
      if (el) el.style.display = "none";
    }
  });
});

