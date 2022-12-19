const navSlide = () => {
  const buger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  buger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
    });
    //burger animation
    buger.classList.toggle("toggle");
  });
};

navSlide();
