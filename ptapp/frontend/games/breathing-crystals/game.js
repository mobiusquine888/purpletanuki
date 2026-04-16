// ---------------------------------------------------------
// Breathing Crystals – Purple Tanuki
// Clean, fixed, production‑ready version
// ---------------------------------------------------------

const canvas = document.getElementById("crystalCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Breathing cycle
const cycle = {
    inhale: 2.5,
    hold: 1.0,
    exhale: 2.5,
    total() { return this.inhale + this.hold + this.exhale; }
};

let t = 0;
let focus = 0;

// Sparkles
const sparkles = [];

function addSparkle(x, y) {
    sparkles.push({
        x,
        y,
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

// Draw breathing crystal
function drawCrystal() {
    const w = canvas.width;
    const h = canvas.height;

    const cycleTime = cycle.total();
    const phase = t % cycleTime;

    let radius;

    if (phase < cycle.inhale) {
        const p = phase / cycle.inhale;
        radius = 80 + p * 80;
    } else if (phase < cycle.inhale + cycle.hold) {
        radius = 160;
    } else {
        const p = (phase - cycle.inhale - cycle.hold) / cycle.exhale;
        radius = 160 - p * 80;
    }

    const glow = radius / 160;

    ctx.save();
    ctx.translate(w / 2, h / 2);

    // Outer glow
    ctx.fillStyle = `rgba(255,255,255,${0.15 * glow})`;
    ctx.beginPath();
    ctx.arc(0, 0, radius + 40, 0, Math.PI * 2);
    ctx.fill();

    // Core
    ctx.fillStyle = `rgba(255,255,255,0.85)`;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    return { radius, glow };
}

// Focus meter
function updateFocusMeter() {
    const meter = document.getElementById("focusMeter");
    meter.style.setProperty("--focus", focus);
}

// Tap detection
canvas.addEventListener("pointerdown", () => {
    const cycleTime = cycle.total();
    const phase = t % cycleTime;

    // Perfect timing = when crystal is brightest (hold phase)
    if (phase > cycle.inhale && phase < cycle.inhale + cycle.hold) {
        focus = Math.min(1, focus + 0.1);

        // Add sparkle burst
        addSparkle(canvas.width / 2, canvas.height / 2);
    }
});

// Main loop
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCrystal();
    drawSparkles();
    updateFocusMeter();

    t += 0.016;
    requestAnimationFrame(loop);
}

loop();

