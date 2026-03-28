// ============================================================
// PARENT PORTAL — FULL SETTINGS ENGINE (REFORGED)
// ============================================================

document.addEventListener("DOMContentLoaded", () => {

  // -----------------------------
  // ELEMENT REFERENCES
  // -----------------------------
  const gradeSelect = document.getElementById("gradeLevel");
  const subjectCheckboxes = document.querySelectorAll("[data-subject]");

  const curriculumDefault = document.getElementById("curriculumDefault");
  const curriculumCustom = document.getElementById("curriculumCustom");
  const curriculumUrlInput = document.getElementById("curriculumUrl");

  const unlockDurationSelect = document.getElementById("unlockDuration");
  const ytCheckbox = document.getElementById("yt");
  const tiktokCheckbox = document.getElementById("tiktok");
  const robloxCheckbox = document.getElementById("roblox");
  const customSiteToggle = document.getElementById("customSiteToggle");

  const difficultySelect = document.getElementById("difficulty");
  const saveButton = document.getElementById("saveSettings");


  // ============================================================
  // LOAD SETTINGS
  // ============================================================
  function loadSettings() {

    // -----------------------------
    // GRADE LEVEL
    // -----------------------------
    const storedGrade = localStorage.getItem("pt_grade");
    if (storedGrade && gradeSelect.querySelector(`option[value="${storedGrade}"]`)) {
      gradeSelect.value = storedGrade;
    }

    // -----------------------------
    // SUBJECTS (PER GRADE)
    // -----------------------------
    const grade = gradeSelect.value;
    const storedSubjectsRaw = localStorage.getItem(`pt_allowed_subjects_${grade}`);
    let storedSubjects = [];

    if (storedSubjectsRaw) {
      try {
        storedSubjects = JSON.parse(storedSubjectsRaw);
      } catch (e) {
        storedSubjects = [];
      }
    }

    subjectCheckboxes.forEach(cb => {
      const subjectKey = cb.getAttribute("data-subject");
      cb.checked = storedSubjects.includes(subjectKey);
    });

    // -----------------------------
    // CURRICULUM MODE
    // -----------------------------
    const curriculumMode = localStorage.getItem("pt_curriculum_mode") || "default";
    if (curriculumMode === "custom") {
      curriculumCustom.checked = true;
    } else {
      curriculumDefault.checked = true;
    }

    // -----------------------------
    // CUSTOM CURRICULUM URL
    // -----------------------------
    const storedCurriculumUrl = localStorage.getItem("pt_curriculum_url") || "";
    curriculumUrlInput.value = storedCurriculumUrl;

    // -----------------------------
    // UNLOCK DURATION
    // -----------------------------
    const storedDuration = localStorage.getItem("pt_unlock_duration");
    if (storedDuration && unlockDurationSelect.querySelector(`option[value="${storedDuration}"]`)) {
      unlockDurationSelect.value = storedDuration;
    }

    // -----------------------------
    // ALLOWED SITES
    // -----------------------------
    const allowedSitesRaw = localStorage.getItem("pt_allowed_sites");
    let allowedSites = [];

    if (allowedSitesRaw) {
      try {
        allowedSites = JSON.parse(allowedSitesRaw);
      } catch (e) {
        allowedSites = [];
      }
    }

    ytCheckbox.checked = allowedSites.includes("youtube");
    tiktokCheckbox.checked = allowedSites.includes("tiktok");
    robloxCheckbox.checked = allowedSites.includes("roblox");

    const customAllowed = localStorage.getItem("pt_allow_custom_sites") === "true";
    customSiteToggle.checked = customAllowed;

    // -----------------------------
    // RITUAL DIFFICULTY
    // -----------------------------
    const storedDifficulty = localStorage.getItem("pt_ritual_difficulty");
    if (storedDifficulty && difficultySelect.querySelector(`option[value="${storedDifficulty}"]`)) {
      difficultySelect.value = storedDifficulty;
    }
  }


  // ============================================================
  // SAVE SETTINGS
  // ============================================================
  function saveSettings() {

    const grade = gradeSelect.value;
    localStorage.setItem("pt_grade", grade);

    // -----------------------------
    // SUBJECTS (PER GRADE)
    // -----------------------------
    const enabledSubjects = [];
    subjectCheckboxes.forEach(cb => {
      if (cb.checked) {
        enabledSubjects.push(cb.getAttribute("data-subject"));
      }
    });

    localStorage.setItem(
      `pt_allowed_subjects_${grade}`,
      JSON.stringify(enabledSubjects)
    );

    // -----------------------------
    // CURRICULUM MODE
    // -----------------------------
    const mode = curriculumCustom.checked ? "custom" : "default";
    localStorage.setItem("pt_curriculum_mode", mode);

    // -----------------------------
    // CUSTOM CURRICULUM URL
    // -----------------------------
    const curriculumUrl = curriculumUrlInput.value.trim();
    localStorage.setItem("pt_curriculum_url", curriculumUrl);

    // -----------------------------
    // UNLOCK DURATION
    // -----------------------------
    const duration = unlockDurationSelect.value;
    localStorage.setItem("pt_unlock_duration", duration);

    // -----------------------------
    // ALLOWED SITES
    // -----------------------------
    const allowedSites = [];
    if (ytCheckbox.checked) allowedSites.push("youtube");
    if (tiktokCheckbox.checked) allowedSites.push("tiktok");
    if (robloxCheckbox.checked) allowedSites.push("roblox");

    localStorage.setItem("pt_allowed_sites", JSON.stringify(allowedSites));

    // -----------------------------
    // CUSTOM URL ACCESS
    // -----------------------------
    localStorage.setItem(
      "pt_allow_custom_sites",
      customSiteToggle.checked ? "true" : "false"
    );

    // -----------------------------
    // RITUAL DIFFICULTY
    // -----------------------------
    const difficulty = difficultySelect.value;
    localStorage.setItem("pt_ritual_difficulty", difficulty);

    // -----------------------------
    // FEEDBACK
    // -----------------------------
    saveButton.textContent = "Settings Saved ✔";
    setTimeout(() => {
      saveButton.textContent = "Save Settings";
    }, 1500);
  }


  // ============================================================
  // EVENT LISTENERS
  // ============================================================
  gradeSelect.addEventListener("change", loadSettings);
  saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    saveSettings();
  });

  // Initial load
  loadSettings();
});

