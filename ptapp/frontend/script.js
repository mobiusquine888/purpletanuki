// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Notify form → Google Sheets backend
const notifyForm = document.getElementById('notify-form');
const notifyEmail = document.getElementById('notify-email');

if (notifyForm && notifyEmail) {
    notifyForm.addEventListener('submit', async e => {
        e.preventDefault();
        const email = notifyEmail.value.trim();

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        await fetch("https://script.google.com/macros/s/AKfycbys0qW5EiSPdWDqxKp55nPJ_q6RbU8ddS6lkIWkB-1dQqz_zcRVJC67IUZFbvP1QSawKg/exec", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" }
        });

        notifyEmail.value = "";
        alert("Thanks! You'll be notified when PurpleTanuki launches.");
    });
}

// Wiggle animation for Tanuki loop
document.addEventListener('DOMContentLoaded', () => {
    const loopImg = document.querySelector('.tanuki-loop');
    if (loopImg) {
        loopImg.addEventListener('mouseenter', () => loopImg.classList.add('wiggle'));
        loopImg.addEventListener('mouseleave', () => loopImg.classList.remove('wiggle'));
    }
});

// Sun/Moon theme toggle (corrected for your HTML)
const themeIcon = document.getElementById('theme-icon');
if (themeIcon) {
    themeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        themeIcon.src = isDark ? 'icons/moon.svg' : 'icons/sun.svg';
    });
}

// Mobile hamburger menu (corrected to use your actual icons)
const navLinks = document.querySelector('.nav-links');
const navMenuIcon = document.getElementById('nav-menu-icon');
const navCloseIcon = document.getElementById('nav-close-icon');

if (navLinks && navMenuIcon && navCloseIcon) {
    const openNav = () => {
        navLinks.classList.add('open');
        navMenuIcon.classList.add('hidden');
        navCloseIcon.classList.remove('hidden');
    };

    const closeNav = () => {
        navLinks.classList.remove('open');
        navMenuIcon.classList.remove('hidden');
        navCloseIcon.classList.add('hidden');
    };

    navMenuIcon.addEventListener('click', openNav);
    navCloseIcon.addEventListener('click', closeNav);
}

// Fade-in scroll animations
const fadeSections = document.querySelectorAll('.section, .hero');
fadeSections.forEach(sec => sec.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

fadeSections.forEach(sec => observer.observe(sec));
