window.onload = () => {
  const gateImg = document.getElementById('gate-img');
  const gateBtn = document.getElementById('gate-btn');

  // Fade in the gate image
  setTimeout(() => {
    gateImg.style.opacity = "1";
  }, 200);

  // After 3 seconds, enable the button
  setTimeout(() => {
    gateBtn.classList.add('ready');
    gateBtn.textContent = "ENTER THE GATE";
  }, 3000);

  // When tapped, go to Gate Ready screen
  gateBtn.addEventListener('click', () => {
    window.location.href = "calm.html?state=ready";
  });
};
