const canvas = document.getElementById("crystalCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let t = 0;
let focus = 0;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);

// Breathing cycle parameters
const cycle = {
    inhale: 2.5,
    hold: 1.0,
    exhale: 2.5,
    total() { return this.inhale + this.hold + this.exhale; }
};

// Sparkles
const sparkles = [];

function addSparkle(x, y) {
    sparkles.push({
        x, y,
        size: Math.random() * 4 + 2,
        alpha: 1,
        dy: -0.5 - Math.random()
    });
}

function drawSparkles() {
    for (let s of sparkles) {
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.dy;
        s.alpha -= 0.01;
    }
}

// Main breathing animation
function drawCrystal() {
    const w = canvas.width;
    const h = canvas.height;

    const cycleTime = cycle.total();
    const phase = t % cycleTime;

    let radius;

    if (phase < cycle.inhale) {
        // inhale
        const p = phase / cycle.inhale;
        radius = 80 + p * 80;
    } else if (phase < cycle.inhale + cycle.hold) {
        // hold
        radius = 160;
    } else {
        // exhale
        const p = (phase - cycle.inhale - cycle.hold) / cycle.exhale;
        radius = 160 - p * 80;
    }

    // Glow
    const glow = radius / 160;

    ctx.save();
    ctx.translate(w / 2, h / 2);

    // Outer glow
    ctx.fillStyle = `rgba(255,255,255,${0.15 * glow})`;
    ctx.beginPath();
    ctx.arc(0, 0, radius + 40, 0, Math.PI * 2);
    ctx.fill();

    // Crystal core
    ctx.fillStyle = `rgba(255,255,255,${0.8})`;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    return { radius, glow };
}

function updateFocusMeter() {
    const meter = document.getElementById("focusMeter");
    meter.style.setProperty("--focus", focus);
    meter.querySelector("::after");
    meter.style.setProperty("--focus", focus);
    meter.children[0];
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);
    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.setProperty("--focus", focus);

    meter.style.set
