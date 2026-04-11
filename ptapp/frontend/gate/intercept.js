// ptapp/frontend/gate/intercept.js
import { decideGateAction } from "./gate.js";

async function interceptNavigation(targetUrl) {
  const decision = await decideGateAction(targetUrl);

  if (decision.action === "allow") {
    window.location.href = targetUrl;
    return;
  }

  if (decision.action === "ritual" || decision.action === "block") {
    window.location.href = decision.redirectTarget;
    return;
  }
}

// Example: call this from native bridge or buttons
window.ptGateIntercept = interceptNavigation;
