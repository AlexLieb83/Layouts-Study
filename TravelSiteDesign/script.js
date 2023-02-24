let menuToggle = document.querySelector(".menuToggle");
let nav = document.querySelector(".nav");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
};
