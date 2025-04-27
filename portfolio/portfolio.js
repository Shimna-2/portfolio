/// script.js

document.querySelectorAll("header ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Animate progress bars when visible
const progressBars = document.querySelectorAll(".progress-bar div");

function animateProgressBars() {
  progressBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    bar.style.width = value;
  });
}

function handleScroll() {
  const skillsSection = document.getElementById("skills");
  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (sectionPosition < screenPosition) {
    animateProgressBars();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("DOMContentLoaded", handleScroll);
