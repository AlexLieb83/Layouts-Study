let gallery = document.querySelector("ul");
let wrapper = document.querySelector(".gallery");
let moveValue = 0;

let dragging = false;
let mouseLocation;
let galleryLocation;

// ease out function
const easeOutQuad = (t) => {
  return t * (2 - t);
};

let moveGallery = () => {
  moveValue = easeOutQuad(window.scrollY * 0.003);
  gallery.style.transform = `rotateZ(-5deg) translateX(${moveValue}%)`;

  requestAnimationFrame(moveGallery);
};

requestAnimationFrame(moveGallery);

const dragStart = (e) => {
  dragging = true;
  mouseLocation = e.pageX;
  galleryLocation = wrapper.scrollLeft;
};

const dragActive = (e) => {
  if (!dragging) return;

  let offset = e.pageX - mouseLocation;
  wrapper.scrollLeft = galleryLocation - offset;
};

const dragStop = (e) => {
  dragging = false;
  mouseLocation = e.pageX;
  galleryLocation = wrapper.scrollLeft;
};

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragActive);
gallery.addEventListener("mouseup", dragStop);
