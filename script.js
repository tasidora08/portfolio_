const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      card.classList.add("show");
    }
  });
});

document.getElementById("darkToggle")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

document.getElementById("contactForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage")
      .textContent = "Üzenet sikeresen elküldve!";
});