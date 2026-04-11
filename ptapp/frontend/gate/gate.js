// ptapp/frontend/gate/gate.js

const PARENT_SETTINGS_PATH = "/controls/parent-settings.json";
const GATE_STATE_KEY = "pt_gate_state_v1";

async function loadParentSettings() {
  try {
    const res = await fetch(PARENT_SETTINGS_PATH, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load parent settings");
    return await res.json();
  } catch (e) {
    console.warn("Parent settings load failed, using defaults", e);
    return {
      gateEnabled: false,
      strictness: "medium",
      cooldownMinutes: 5,
      dailyMinutes: 60,
      sessionMinutes: 20,
      blockedApps: [],
      allowedApps: [],
      pin: null
    };
  }
}

function loadGateState() {
  try {
    const raw = localStorage.getItem(GATE_STATE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveGateState(state) {
  localStorage.setItem(GATE_STATE_KEY, JSON.stringify(state));
}

function nowMs() {
  return Date.now();
}

function isWithinCooldown(state) {
  if (!state.cooldownUntil) return false;
  return nowMs() < state.cooldownUntil;
}

function recordUsage(state, settings) {
  const now = nowMs();
  const todayKey = new Date().toDateString();

  if (state.lastDay !== todayKey) {
    state.lastDay = todayKey;
    state.usedTodayMs = 0;
  }

  const sessionStart = state.sessionStart || now;
  const elapsed = now - sessionStart;

  state.usedTodayMs = (state.usedTodayMs || 0) + elapsed;
  state.sessionStart = now;

  const dailyLimitMs = (settings.dailyMinutes || 60) * 60 * 1000;
  const sessionLimitMs = (settings.sessionMinutes || 20) * 60 * 1000;

  const overDaily = state.usedTodayMs >= dailyLimitMs;
  const overSession = elapsed >= sessionLimitMs;

  return { state, overDaily, overSession };
}

function startCooldown(state, settings) {
  const minutes = settings.cooldownMinutes || 5;
  state.cooldownUntil = nowMs() + minutes * 60 * 1000;
  return state;
}

/**
 * decideGateAction(url: string) -> { action, reason, redirectTarget }
 * action: "allow" | "block" | "ritual"
 */
export async function decideGateAction(url) {
  const settings = await loadParentSettings();
  const state = loadGateState();

  if (!settings.gateEnabled) {
    return { action: "allow", reason: "gate_disabled" };
  }

  const blocked = (settings.blockedApps || []).some(pattern =>
    url.includes(pattern)
  );
  const allowed = (settings.allowedApps || []).some(pattern =>
    url.includes(pattern)
  );

  if (!blocked && allowed) {
    return { action: "allow", reason: "explicit_allow" };
  }

  if (!blocked && !allowed) {
    // default: allow if not explicitly blocked
    return { action: "allow", reason: "not_blocked" };
  }

  // At this point, it's blocked content
  if (isWithinCooldown(state)) {
    return {
      action: "block",
      reason: "cooldown_active",
      redirectTarget: "/gate/ritual_ready.html"
    };
  }

  const usage = recordUsage(state, settings);
  saveGateState(usage.state);

  if (usage.overDaily || usage.overSession) {
    const updated = startCooldown(usage.state, settings);
    saveGateState(updated);
    return {
      action: "block",
      reason: "limit_reached",
      redirectTarget: "/gate/ritual_ready.html"
    };
  }

  // Trigger ritual chain
  usage.state.lastBlockedUrl = url;
  saveGateState(usage.state);

  return {
    action: "ritual",
    reason: "blocked_app",
    redirectTarget: "/gate/ritual_breathing.html"
  };
}

export function getLastBlockedUrl() {
  const state = loadGateState();
  return state.lastBlockedUrl || null;
}

export function clearLastBlockedUrl() {
  const state = loadGateState();
  delete state.lastBlockedUrl;
  saveGateState(state);
}
