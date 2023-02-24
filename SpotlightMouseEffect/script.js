const span = document.querySelector(".hover-btn2");
const overlay = document.querySelector(".overlay");

window.addEventListener("mousemove", (e) => {
  //spitting out x, y location of mouse data
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  // using x and y data to change css stuff
  gsap.to(overlay, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out",
  });

  span.addEventListener("click", () => {
    overlay.classList.toggle("is-open");
  });
});
