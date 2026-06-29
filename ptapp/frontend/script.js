// Smooth Scroll for CTA Button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Email Form Validation + Submission Placeholder
const notifyForm = document.querySelector('#notify form');
notifyForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = notifyForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Placeholder: Replace with your email service
    console.log("Email submitted:", email);

    // Visual confirmation
    emailInput.value = "";
    alert("Thanks! You'll be notified when PurpleTanuki launches.");
});

// Basic Email Validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Micro-interactions
document.addEventListener("DOMContentLoaded", () => {
    const tanukiLoop = document.querySelector('.tanuki-loop');
    if (tanukiLoop) {
        tanukiLoop.addEventListener('mouseenter', () => {
            tanukiLoop.classList.add('wiggle');
        });
        tanukiLoop.addEventListener('mouseleave', () => {
            tanukiLoop.classList.remove('wiggle');
        });
    }
});
