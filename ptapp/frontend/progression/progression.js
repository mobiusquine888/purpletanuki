// ======================================================
//  PROGRESSION ENGINE (your original logic, preserved)
// ======================================================

let PROGRESSION_CONFIG = null;
const PROGRESSION_KEY = "pt_progression_v1";
const SUBSCRIPTION_KEY = "pt_subscription_v1";
const STREAK_KEY = "pt_streak_v1";
const LAST_PLAY_KEY = "pt_last_play_v1";

const PARENT_SETTINGS_KEY = "pt_parent_settings"; // localStorage rulebook

// Load config (inline or via fetch)
async function loadProgressionConfig() {
  if (PROGRESSION_CONFIG) return PROGRESSION_CONFIG;

  PROGRESSION_CONFIG = {
    preschool: {
      math: { displayName: "Preschool Math", lessons: 10, freeLessons: 1 },
      reading: { displayName: "Preschool Reading", lessons: 10, freeLessons: 1 }
    },
    grade1: {
      math: { displayName: "Grade 1 Math", lessons: 15, freeLessons: 1 }
    }
  };

  return PROGRESSION_CONFIG;
}

function loadProgressState() {
  const raw = localStorage.getItem(PROGRESSION_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveProgressState(state) {
  localStorage.setItem(PROGRESSION_KEY, JSON.stringify(state));
}

function getSubjectProgress(grade, subject) {
  const state = loadProgressState();
  if (!state[grade]) state[grade] = {};
  if (!state[grade][subject]) {
    state[grade][subject] = { completedLessons: 0 };
    saveProgressState(state);
  }
  return state[grade][subject];
}

function markLessonComplete(grade, subject, lessonIndex) {
  const config = PROGRESSION_CONFIG[grade][subject];
  const state = loadProgressState();
  if (!state[grade]) state[grade] = {};
  if (!state[grade][subject]) {
    state[grade][subject] = { completedLessons: 0 };
  }

  const current = state[grade][subject].completedLessons || 0;
  const completed = Math.max(current, lessonIndex + 1);
  state[grade][subject].completedLessons = Math.min(completed, config.lessons);

  saveProgressState(state);
}

function isSubscribed() {
  const raw = localStorage.getItem(SUBSCRIPTION_KEY);
  return raw === "true";
}

function getTileState(grade, subject) {
  const config = PROGRESSION_CONFIG[grade][subject];
  const progress = getSubjectProgress(grade, subject);
  const completed = progress.completedLessons || 0;

  if (!isSubscribed()) {
    if (completed === 0) return "preview";
    if (completed >= 1 && completed < config.lessons) return "locked";
  }

  if (completed === 0) return "unlocked";
  if (completed >= config.lessons) return "completed";
  return "unlocked";
}

function getNextLessonIndex(grade, subject) {
  const config = PROGRESSION_CONFIG[grade][subject];
  const progress = getSubjectProgress(grade, subject);
  const completed = progress.completedLessons || 0;

  if (!isSubscribed() && completed >= config.freeLessons) {
    return null; // paywall
  }

  if (completed >= config.lessons) {
    return config.lessons - 1;
  }
  return completed;
}

// ======================================================
//  OPTION C ADDITIONS — UI + STREAK + WORLD AGGREGATION
// ======================================================

// Compute world-level completion %
function computeWorldCompletion(worldKey) {
  const state = loadProgressState();
  const world = PROGRESSION_CONFIG[worldKey];
  if (!world) return 0;

  let totalLessons = 0;
  let completedLessons = 0;

  for (const subject in world) {
    const cfg = world[subject];
    totalLessons += cfg.lessons;

    const prog = state[worldKey]?.[subject]?.completedLessons || 0;
    completedLessons += Math.min(prog, cfg.lessons);
  }

  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}

// Update progress rings in the UI
function updateProgressRings() {
  const worlds = ["calmfocus", "earlylearning", "bigkidskills", "lifeskills"];

  worlds.forEach(world => {
    const el = document.getElementById(`ring-${world}`);
    if (!el) return;

    const map = {
      calmfocus: "preschool",
      earlylearning: "preschool",
      bigkidskills: "grade1",
      lifeskills: "grade1"
    };

    const configKey = map[world];
    const pct = computeWorldCompletion(configKey);
    el.textContent = pct + "%";

    if (pct >= 100) {
      el.classList.add("complete");
    }
  });
}

// ======================================================
//  WORLD GATING (NEW)
// ======================================================

function loadParentSettings() {
  const raw = localStorage.getItem(PARENT_SETTINGS_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function applyWorldGating() {
  const settings = loadParentSettings();
  if (!settings) return; // no gating applied

  // If you later add worldAccess back to Parent Controls, wire it here.
  // For now, worlds are always visible unless you choose to gate them.

  // Example gating logic (disabled by default):
  // if (!settings.worldAccess?.calmfocus) {
  //   document.getElementById("world-calmfocus-card")?.classList.add("locked");
  // }
}

// ======================================================
//  STREAK SYSTEM
// ======================================================

function updateStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem(LAST_PLAY_KEY);
  let streak = parseInt(localStorage.getItem(STREAK_KEY) || "0");

  if (!last) {
    streak = 1;
  } else {
    const lastDate = new Date(last);
    const diff = (new Date(today) - lastDate) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak += 1;
    else if (diff > 1) streak = 1;
  }

  localStorage.setItem(STREAK_KEY, streak);
  localStorage.setItem(LAST_PLAY_KEY, today);

  const el = document.getElementById("streak-count");
  if (el) el.textContent = streak;
}

// ======================================================
//  CONTINUE LEARNING
// ======================================================

function continueLearning() {
  const grade = "preschool";
  const subject = "math";

  const next = getNextLessonIndex(grade, subject);

  if (next === null) {
    window.location.href = "/progression/paywall.html?redirect=/progression/index.html";
    return;
  }

  window.location.href = `/lesson.html?grade=${grade}&subject=${subject}&lesson=${next}`;
}

// ======================================================
//  INIT
// ======================================================

document.addEventListener("DOMContentLoaded", async () => {
  await loadProgressionConfig();
  updateProgressRings();
  updateStreak();
  applyWorldGating();
});

