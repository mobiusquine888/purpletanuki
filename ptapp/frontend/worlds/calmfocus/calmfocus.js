/* -------------------------------------------------------
   Calm & Focus — Selector Page Logic
------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Calm & Focus selector JS loaded.");

    const tiles = document.querySelectorAll(".world-tile");

    tiles.forEach(tile => {
        tile.addEventListener("click", () => {
            const title = tile.querySelector("h3")?.textContent || "Unknown Ritual";
            console.log("Calm & Focus world selected:", title);

            // All tiles route to the ritual grid
            window.location.href = "calmfocus-lessons.html";
        });
    });
});

