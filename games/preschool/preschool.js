// Unified Preschool Tutor — Phase 1 (Option B)

const preschoolLessons = {
  letters: {
    title: "Letters",
    body: `
      <p>We’ll explore the alphabet together:</p>
      <ul>
        <li>Recognize A–Z (uppercase and lowercase)</li>
        <li>Match letters to sounds (A is for apple)</li>
        <li>Find letters at the start of words</li>
      </ul>
      <p><strong>Try this:</strong> Look around the room. Can you find something that starts with the letter B?</p>
    `
  },

  numbers: {
    title: "Numbers",
    body: `
      <p>We’ll play with counting and comparing:</p>
      <ul>
        <li>Count from 1 to 10 (and up to 20)</li>
        <li>Match groups of objects to numbers</li>
        <li>Tell which number is bigger or smaller</li>
      </ul>
      <p><strong>Try this:</strong> Put 3 toys in a line. Now add 1 more. How many are there now?</p>
    `
  },

  shapesColors: {
    title: "Shapes & Colors",
    body: `
      <p>We’ll spot shapes and colors everywhere:</p>
      <ul>
        <li>Circle, square, triangle, rectangle, star, heart</li>
        <li>Name basic colors and find them around you</li>
        <li>Sort objects by shape or color</li>
      </ul>
      <p><strong>Try this:</strong> Find something that is a circle and something that is blue. Are they the same object?</p>
    `
  },

  patterns: {
    title: "Patterns",
    body: `
      <p>We’ll build and complete simple patterns:</p>
      <ul>
        <li>AB patterns (red, blue, red, blue…)</li>
        <li>AAB patterns (cat, cat, dog…)</li>
        <li>“What comes next?” games</li>
      </ul>
      <p><strong>Try this:</strong> Clap, clap, stomp. Clap, clap, stomp. What comes next?</p>
    `
  },

  vocabulary: {
    title: "Vocabulary",
    body: `
      <p>We’ll grow word power:</p>
      <ul>
        <li>Everyday nouns (cat, ball, sun, tree)</li>
        <li>Action words (run, jump, eat, sleep)</li>
        <li>Opposites (big/small, hot/cold, fast/slow)</li>
        <li>Simple categories (animals, food, toys)</li>
      </ul>
      <p><strong>Try this:</strong> Name one animal, one food, and one toy. Can you tell which is which?</p>
    `
  },

  memory: {
    title: "Memory",
    body: `
      <p>We’ll practice remembering and matching:</p>
      <ul>
        <li>Remembering 2–3 items in order</li>
        <li>Simple matching games (pairs)</li>
        <li>Listening and recalling short sequences</li>
      </ul>
      <p><strong>Try this:</strong> Ask your grown‑up to say three things (like “apple, car, star”). Can you say them back in the same order?</p>
    `
  }
};

function openLesson(key) {
  const lesson = preschoolLessons[key];
  if (!lesson) return;

  document.querySelector(".category-list").style.display = "none";

  const card = document.getElementById("lessonCard");
  const titleEl = document.getElementById("lessonTitle");
  const bodyEl = document.getElementById("lessonBody");

  titleEl.textContent = lesson.title;
  bodyEl.innerHTML = lesson.body;

  card.style.display = "block";
}

function goBackToCategories() {
  document.getElementById("lessonCard").style.display = "none";
  document.querySelector(".category-list").style.display = "flex";
}

