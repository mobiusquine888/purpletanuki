// Curriculum Viewer (Middle-School Friendly)

let curriculumData = null;

// Listen for Engine sending curriculum data
window.addEventListener("message", (event) => {
    if (event.data.action === "curriculum-load") {
        curriculumData = event.data.data;
        renderUnits();
    }
});

// Render the list of units
function renderUnits() {
    const titleEl = document.getElementById("curriculum-title");
    const unitList = document.getElementById("unit-list");

    titleEl.textContent = curriculumData.grade;

    unitList.innerHTML = "";

    curriculumData.units.forEach((unit) => {
        const div = document.createElement("div");
        div.className = "unit-card";

        div.innerHTML = `
            <h2>${unit.title}</h2>
            <button class="open-unit">Open Unit</button>
        `;

        div.querySelector(".open-unit").onclick = () => {
            window.parent.postMessage(
                {
                    action: "navigate",
                    target: "/ptapp/frontend/curriculum/lesson.html",
                    unitId: unit.id
                },
                "*"
            );
        };

        unitList.appendChild(div);
    });
}
