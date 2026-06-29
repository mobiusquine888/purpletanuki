// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Notify form
const notifyForm = document.getElementById('notify-form');
const notifyEmail = document.getElementById('notify-email');

if (notifyForm && notifyEmail) {
    notifyForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = notifyEmail.value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        console.log("Notify email submitted:", email);
        notifyEmail.value = "";
        alert("Thanks! You'll be notified when PurpleTanuki launches.");
    });
}

// Wiggle animation
document.addEventListener('DOMContentLoaded', () => {
    const loopImg = document.querySelector('.tanuki-loop');
    if (loopImg) {
        loopImg.addEventListener('mouseenter', () => loopImg.classList.add('wiggle'));
        loopImg.addEventListener('mouseleave', () => loopImg.classList.remove('wiggle'));
    }
});

// Dark mode toggle
const themeButton = document.createElement('button');
themeButton.className = 'theme-toggle';
themeButton.textContent = 'Dark Mode';
document.querySelector('.nav').appendChild(themeButton);

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Hamburger menu
const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.textContent = '☰';
document.querySelector('.nav').insertBefore(navToggle, navLinks);

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Fade-in scroll animations
const fadeSections = document.querySelectorAll('.section, .hero');
fadeSections.forEach(sec => sec.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

fadeSections.forEach(sec => observer.observe(sec));
