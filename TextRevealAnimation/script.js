const myText = new SplitType("#my-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  // this effects the speed of the reveal, higher num = slower
  duration: 0.5,
});
