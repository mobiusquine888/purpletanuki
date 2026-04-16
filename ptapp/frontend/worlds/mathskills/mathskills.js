/* -------------------------------------------------------
   Math Skills — Selector Page Logic
   Purple Tanuki World Template
------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".world-tile");

    tiles.forEach(tile => {
        tile.addEventListener("click", () => {
            const title = tile.querySelector("h3")?.textContent || "Unknown";
            console.log("Math Skills world selected:", title);

            // All tiles route to the lesson grid
            window.location.href = "mathskills-lessons.html";
        });
    });
});


