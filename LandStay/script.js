const menuBtn = document.querySelector(".mobile");
const navMenu = document.querySelector(".nav-menu");

// Open and close hamburger menu on mobile devices
const mobileMenu = () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
};

// Close menu when user clicks on option
const closeMenu = () => {
  navMenu.classList.toggle("active");
};
