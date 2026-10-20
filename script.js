const typingElement = document.getElementById("typing");
const phrases = [
  "Python Developer",
  "DSA Problem Solver",
  "AI & LLM Explorer",
  "Full Stack Developer in Progress"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const phrase = phrases[phraseIndex];

  if (!deleting) {
    typingElement.textContent = phrase.slice(0, ++charIndex);

    if (charIndex === phrase.length) {
      deleting = true;
      setTimeout(type, 1400);
      return;
    }
  } else {
    typingElement.textContent = phrase.slice(0, --charIndex);

    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 45 : 85);
}

type();

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";

  if (dark) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "☾";
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀";
  }
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
