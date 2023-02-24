const menu_toggle = document.querySelector(".menu_toggle");
const nav = document.querySelector(".nav");

menu_toggle.onclick = function () {
  nav.classList.toggle("active");
};
