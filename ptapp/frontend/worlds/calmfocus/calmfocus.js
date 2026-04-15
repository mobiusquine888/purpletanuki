/* ---------------------------------------------------------
   Purple Tanuki – Calm & Focus World Theme
   Soft breathing circles, sparkles, gentle floating symbols
   All styles scoped to .calmfocus-world to avoid conflicts
--------------------------------------------------------- */

:root {
    --calm-blue: #6ac7ff;
    --calm-blue-light: #b0e8ff;
    --calm-blue-dark: #3a8fcc;

    --calm-bg: #f2faff;
    --calm-card-bg: #ffffff;
    --calm-shadow: rgba(0, 150, 255, 0.25);

    --radius: 18px;
    --transition: 0.25s ease;
}

/* WORLD CONTAINER */
.calmfocus-world {
    background: var(--calm-bg);
    min-height: 100vh;
    padding: 80px 20px 20px;
    font-family: "Nunito", sans-serif;
    color: #333;
}

/* HEADER */
.world-header {
    text-align: center;
    margin-bottom: 20px;
}

.world-header h1 {
    font-size: 2rem;
    color: var(--calm-blue-dark);
    text-shadow: 0 0 8px var(--calm-blue-light);
}

.world-subtitle {
    font-size: 1rem;
    color: var(--calm-blue-dark);
    opacity: 0.9;
}

/* WORLDMAP VISUAL */
.calm-worldmap {
    width: 100%;
    height: 220px;
    border-radius: var(--radius);
    background: linear-gradient(180deg, var(--calm-blue-light), var(--calm-blue));
    box-shadow: 0 4px 12px var(--calm-shadow);
    position: relative;
    overflow: hidden;
    margin-bottom: 25px;
}

/* FLOATING ANIMATION */
@keyframes calmFloat {
    0% { transform: translateY(0px); opacity: 0.7; }
    50% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(0px); opacity: 0.7; }
}

/* SYMBOL BASE STYLE */
.calm-symbol {
    position: absolute;
    font-size: 2rem;
    color: #e8faff;
    text-shadow: 0 0 12px #a8eaff;
    animation: calmFloat 4s ease-in-out infinite;
}

/* POSITIONS */
.calm-1 { top: 25px; left: 25px; animation-delay: 0s; }
.calm-2 { top: 70px; right: 30px; animation-delay: 0.4s; }
.calm-3 { bottom: 25px; left: 50%; transform: translateX(-50%); animation-delay: 0.8s; }

/* LESSON GRID */
.lesson-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}

/* LESSON TILE */
.lesson-tile {
    background: var(--calm-card-bg);
    border-radius: var(--radius);
    padding: 16px;
    box-shadow: 0 4px 10px var(--calm-shadow);
    transition: var(--transition);
    position: relative;
}

.lesson-tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px var(--calm-shadow);
}

/* TITLE */
.lesson-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--calm-blue-dark);
    margin-bottom: 6px;
}

/* DESCRIPTION */
.lesson-desc {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 12px;
}

/* FREE / PREMIUM BADGES */
.badge {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
}

.badge-free {
    background: var(--calm-blue);
}

.badge-premium {
    background: var(--calm-blue-dark);
}

/* LOCK ICON */
.lock-icon {
    font-size: 1.2rem;
    color: var(--calm-blue-dark);
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0.8;
}

/* FOOTER */
.world-footer {
    text-align: center;
    margin-top: 30px;
}

.home-btn {
    display: inline-block;
    padding: 10px 20px;
    background: var(--calm-blue);
    color: white;
    border-radius: var(--radius);
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 4px 10px var(--calm-shadow);
    transition: var(--transition);
}

.home-btn:hover {
    background: var(--calm-blue-dark);
    transform: translateY(-3px);
}
