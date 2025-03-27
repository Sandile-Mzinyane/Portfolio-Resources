function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const words = ["Front-End Dev", "Back-End Dev", "Full-Stack Dev"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let typingElement = document.querySelector(".typing-text");

    if (isDeleting) {
        charIndex--; 
    } else {
        charIndex++; 
    }

    typingElement.textContent = words[wordIndex].substring(0, charIndex);

    if (!isDeleting && charIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; 
        setTimeout(typeEffect, 300);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function handleScroll() {
      fadeElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) { 
              element.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 
});

