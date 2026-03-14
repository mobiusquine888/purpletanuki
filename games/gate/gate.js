// Read what the user wanted to unlock
const target = localStorage.getItem("nextUnlockTarget");

// When they finish the challenge, we will send them back to this target
// (handled in Step 4)

document.getElementById("star-btn").addEventListener("click", () => {
  window.location.href = "../reaction/index.html";
});

document.getElementById("practice-btn").addEventListener("click", () => {
  window.location.href = "../practice/index.html";
});

