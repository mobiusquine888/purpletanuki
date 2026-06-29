/* -------------------------------------------------------
   SMOOTH SCROLL
------------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});


/* -------------------------------------------------------
   NOTIFY FORM
------------------------------------------------------- */
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


/* -------------------------------------------------------
   WIGGLE ANIMATION (GIF fallback)
------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const loopImg = document.querySelector('.tanuki-loop');
    if (loopImg) {
        loopImg.addEventListener('mouseenter', () => loopImg.classList.add('wiggle'));
        loopImg.addEventListener('mouseleave', () => loopImg.classList.remove('wiggle'));
    }
});


/* -------------------------------------------------------
   DARK MODE TOGGLE (SVG icon swap)
------------------------------------------------------- */
const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeIcon.src = 'icons/sun.svg';
    } else {
        themeIcon.src = 'icons/moon.svg';
    }
});


/* -------------------------------------------------------
   MOBILE NAV (SVG hamburger + close icon)
------------------------------------------------------- */
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.getElementById('nav-menu-icon');
const closeIcon = document.getElementById('nav-close-icon');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('open');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
    navLinks.classList.remove('open');
    closeIcon.classList.add('hidden');
    menuIcon.classList.remove('hidden');
});


/* -------------------------------------------------------
   FADE-IN SCROLL ANIMATIONS
------------------------------------------------------- */
const fadeSections = document.querySelectorAll('.section, .hero');
fadeSections.forEach(sec => sec.classList.add('fade-in'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

fadeSections.forEach(sec => observer.observe(sec));


/* -------------------------------------------------------
   ANIMATION SYSTEM (Lottie → Sprite → GIF)
------------------------------------------------------- */
const lottieContainer = document.getElementById('tanuki-lottie');
const spriteContainer = document.querySelector('.tanuki-sprite');
const gifFallback = document.querySelector('.tanuki-loop');

const supportsLottie = !!window.fetch;

if (supportsLottie && lottieContainer) {
    import("https://cdn.jsdelivr.net/npm/lottie-web@latest/build/player/lottie.min.js")
        .then(lottieWeb => {
            lottieWeb.loadAnimation({
                container: lottieContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'assets/tanuki-animation.json'
            });

            // Hide fallback layers
            spriteContainer.classList.add('hidden');
            gifFallback.classList.add('hidden');
        })
        .catch(() => {
            // If Lottie fails, fallback to sprite
            lottieContainer.classList.add('hidden');
            gifFallback.classList.add('hidden');
            spriteContainer.classList.remove('hidden');
        });
} else {
    // No Lottie support → use sprite
    lottieContainer.classList.add('hidden');
    gifFallback.classList.add('hidden');
    spriteContainer.classList.remove('hidden');
}
