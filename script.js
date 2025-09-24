// Contact form message simulation
const contactForm = document.getElementById('contactForm');
const messageStatus = document.getElementById('messageStatus');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  messageStatus.textContent = 'Sending...';
  messageStatus.style.color = '#ff9800';

  setTimeout(() => {
    messageStatus.textContent = '✅ Thanks! Your message has been received.';
    messageStatus.style.color = 'green';
    contactForm.reset();
  }, 1200);
});

// Toggle dark mode
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Typewriter effect for roles
const roles = ["Frontend Developer", "Java Enthusiast", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
const roleText = document.getElementById("roleText");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    roleText.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    roleText.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}
typeEffect();

// Project filtering
const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-filter");
    projectCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
