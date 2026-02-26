// Hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

// Dark mode
document.getElementById("darkToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Form validation
document.getElementById("contactForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage")
      .textContent = "Üzenet sikeresen elküldve!";
});