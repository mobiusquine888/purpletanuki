<script>
const SUBSCRIPTION_KEY = "pt_subscription_v1";

function isSubscribed() {
  const raw = localStorage.getItem(SUBSCRIPTION_KEY);
  return raw === "true";
}

function unlockPremium() {
  // In production, this is where you’d integrate Google Play Billing / Stripe, etc.
  // For now, simulate success:
  localStorage.setItem(SUBSCRIPTION_KEY, "true");
}

function showPaywall(redirectAfter = "arcade.html") {
  window.location.href = "paywall.html?redirect=" + encodeURIComponent(redirectAfter);
}
</script>
