window.onload = () => {
  const gateBtn = document.getElementById('gate-btn');

  // Enable the button after 3 seconds
  setTimeout(() => {
    gateBtn.classList.add('ready');
    gateBtn.textContent = "ENTER THE GATE";
  }, 3000);

  // When tapped, go to Gate Ready screen
  gateBtn.addEventListener('click', () => {
    window.location.href = "calm.html?state=ready";
  });
};

