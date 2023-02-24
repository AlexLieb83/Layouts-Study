const cards = document.querySelectorAll(".img");

let tl = new gsap.timeline({
  scrollTrigger: {
    trigger: ".work",
    start: "top bottom",
    end: "+=700",
    scrub: 1,
  },
});

cards.forEach((img) => {
  let rotation = Math.floor(Math.random() * 40) - 20;
  positionX = Math.floor(Math.random() * 300) - 150;
  positionY = Math.floor(Math.random() * 300) - 150;

  tl.from(
    img,
    {
      rotation: rotation,
      x: positionX,
      y: positionY,
    },
    "-=1"
  );
  tl.to(
    img,
    {
      backgroundSize: "100%",
    },
    0.2
  );
});
