let card1 = document.querySelector(".card-1");
let reverse = document.querySelector(".left");

let t1 = gsap.timeline({ paused: true, reversed: true });

card1.addEventListener("click", (e) => {
  event.stopPropagation();
  t1.play();
});

reverse.addEventListener("click", (e) => {
  event.stopPropagation();
  t1.reverse();
});

t1.to(".card-1", {
  ease: Power1.easeInOut,
  height: 600,
  width: 1000,
  top: 0,
  left: 0,
  margin: 0,
  duration: 0.5,
});

t1.to(
  ".card-2",
  {
    ease: Power1.easeInOut,
    duration: 0.5,
    x: 500,
  },
  0.1
);

t1.to(
  ".card-1 h3",
  {
    ease: Power1.easeInOut,
    duration: 0.5,
    fontSize: 24,
    margin: "3.2rem",
    y: -250,
  },
  0.1
);

t1.to(
  ".card-1 p",
  {
    ease: Power1.easeInOut,
    duration: 0.5,
    padding: 24,
    fontSize: 15,
    marginLeft: 8,
    y: -580,
  },
  0.2
);

t1.to(".card-1 button", {
  ease: "elastic.out(1, .9)",
  duration: 0.5,
  bottom: "6rem",
  marginLeft: 8,
});

t1.to(".left", {
  ease: "elastic.out(1, .9)",
  duration: 0.5,
  top: "2.4rem",
  left: "2.4rem",
});

// CARD2

let card2 = document.querySelector(".card-2");
let rev = document.querySelector(".left");

let t2 = gsap.timeline({ paused: true, reversed: true });

card2.addEventListener("click", (e) => {
  event.stopPropagation();
  t2.play();
});

rev.addEventListener("click", (e) => {
  event.stopPropagation();
  t2.rev();
});

t2.to(".card-2", {
  ease: Power1.easeInOut,
  height: 600,
  width: 1000,
  top: 0,
  left: 0,
  margin: 0,
  duration: 0.5,
});

t2.to(
  ".card-1",
  {
    ease: Power1.easeInOut,
    duration: 0.5,
    x: 500,
  },
  0.1
);

t2.to(
  ".card-2 h3",
  {
    ease: Power1.easeInOut,
    duration: 0.5,
    fontSize: 24,
    margin: "3.2rem",
    y: -250,
  },
  0.1
);

t2.to(
  ".card-2 p",
  {
    ease: Power1.easeInOut,
    duration: 0.5,
    padding: 24,
    fontSize: 15,
    marginLeft: 8,
    y: -580,
  },
  0.2
);

t2.to(".card-2 button", {
  ease: "elastic.out(1, .9)",
  duration: 0.5,
  bottom: "6rem",
  marginLeft: 8,
});

t2.to(".left", {
  ease: "elastic.out(1, .9)",
  duration: 0.5,
  top: "2.4rem",
  left: "2.4rem",
});
