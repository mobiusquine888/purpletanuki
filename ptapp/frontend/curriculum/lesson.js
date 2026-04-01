// Lesson Viewer (Middle-School Friendly)

let curriculumData = null;
let currentUnit = null;
let currentLessonIndex = 0;

// Receive curriculum + unit info from Shell
window.addEventListener("message", (event) => {
    if (event.data.action === "lesson-load") {
        curriculumData = event.data.data;
        currentUnit = curriculumData.units.find(u => u.id === event.data.unitId);
        currentLessonIndex = event.data.lessonIndex || 0;

        renderLesson();
    }
});

// Render the current lesson
function renderLesson() {
    const lesson = currentUnit.lessons[currentLessonIndex];

    document.getElementById("lesson-title").textContent = lesson.title;
    document.getElementById("lesson-text").textContent = lesson.text;
    document.getElementById("lesson-example").textContent = "Example: " + lesson.example;
    document.getElementById("lesson-practice").textContent = lesson.practice_question;

    document.getElementById("continue-btn").onclick = () => {
        goToNext();
    };
}

// Move to next lesson or mastery check
function goToNext() {
    const nextIndex = currentLessonIndex + 1;

    if (nextIndex < currentUnit.lessons.length) {
        // Load next lesson
        window.parent.postMessage(
            {
                action: "navigate",
                target: "/ptapp/frontend/curriculum/lesson.html",
                unitId: currentUnit.id,
                lessonIndex: nextIndex
            },
            "*"
        );
    } else {
        // Go to mastery check
        window.parent.postMessage(
            {
                action: "navigate",
                target: "/ptapp/frontend/curriculum/mastery.html",
                unitId: currentUnit.id
            },
            "*"
        );
    }
}
