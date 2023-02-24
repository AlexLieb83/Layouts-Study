gsap.registerPlugin(Flip);

// grab each link inside of nav
const links = document.querySelectorAll(".nav-item a");
// grab the active nav, which is underlined
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  // change color of link when clicked on
  link.addEventListener("click", () => {
    //keeps non active links the original color
    gsap.to(links, { color: "#252525" });
    if (document.activeElement === link) {
      // changes active link's color
      gsap.to(link, { color: "#385ae0" });
    }

    // Move underline to clicked on link
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav); //changing the link's child to be activeNav - effectively moving the underline
    // gives us the underline movement animation
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1, .5)",
    });
  });
});

//Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    //Get State
    const state = Flip.getState(cards);

    //Add active class to clicked card, add inactive to the rest
    const isCardActive = card.classList.contains("active");

    //for each card, remove State classes, NEED THIS so that we don't just keep adding all clicked cards to active.
    cards.forEach((otherCard, otherIndex) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("isInactive");
      // need this to add inactive to all of the other cards
      if (!isCardActive && index !== otherIndex) {
        otherCard.classList.add("isInactive");
      }
    });
    // If card clicked on is not active, then add class active to it
    if (!isCardActive) card.classList.add("active");

    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absolute: true,
    });
  });
});
