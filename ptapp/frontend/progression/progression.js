<script>
// Simple progression engine using localStorage + progression.json

let PROGRESSION_CONFIG = null;
const PROGRESSION_KEY = "pt_progression_v1";
const SUBSCRIPTION_KEY = "pt_subscription_v1";

// Load config (inline or via fetch)
async function loadProgressionConfig() {
  if (PROGRESSION_CONFIG) return PROGRESSION_CONFIG;
  // If you serve progression.json statically, you can use fetch:
  // const res = await fetch("progression/progression.json");
  // PROGRESSION_CONFIG = await res.json();
  // return PROGRESSION_CONFIG;

  // For now, embed a minimal copy (keeps it simple while you wire things up)
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
    state[grade][subject] = {
      completedLessons: 0
    };
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

// Tile states: "locked", "preview", "unlocked", "completed"
function getTileState(grade, subject) {
  const config = PROGRESSION_CONFIG[grade][subject];
  const progress = getSubjectProgress(grade, subject);
  const completed = progress.completedLessons || 0;

  // If no subscription and no lessons completed yet:
  if (!isSubscribed()) {
    if (completed === 0) {
      // First lesson is free preview
      return "preview";
    } else if (completed >= 1 && completed < config.lessons) {
      // Completed preview, rest are locked
      return "locked";
    }
  }

  // If subscribed or all free content done:
  if (completed === 0) return "unlocked";
  if (completed >= config.lessons) return "completed";
  return "unlocked";
}

// For lesson navigation
function getNextLessonIndex(grade, subject) {
  const config = PROGRESSION_CONFIG[grade][subject];
  const progress = getSubjectProgress(grade, subject);
  const completed = progress.completedLessons || 0;

  // If not subscribed and completed >= freeLessons, block
  if (!isSubscribed() && completed >= config.freeLessons) {
    return null; // signal paywall
  }

  if (completed >= config.lessons) {
    return config.lessons - 1; // last lesson
  }
  return completed; // next lesson index
}
</script>
