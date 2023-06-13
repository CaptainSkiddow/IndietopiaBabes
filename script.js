//Parallax hero

var scene = document.getElementById("parallax_hero");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true,
  hoverOnly: true,
  clipRelativeInput: true,
  limitX: 30,
  limitY: 45,
});

//Scrolltrigger zoom in

gsap.registerPlugin(ScrollTrigger);

gsap.to(".zoom_out img", {
  scale: 20,
  opacity: 0,
  stager: 1,
  rotate: 10,
  duration: 5,
  scrollTrigger: {
    trigger: ".zoom_out",
    pin: true,
    scrub: 1,
    markers: true,
    preventOverlaps: true,
  },
});

//Scrolltrigger delay

let delSections = document.querySelectorAll(".delayed-section");

delSections.forEach((section) => {
  let imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true,
  });

  let progressTo = gsap.quickTo(imageAnim, "progress", {
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
  });

  gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none",
    scrollTrigger: {
      scrub: true,
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => progressTo(self.progress),
      markers: true,
    },
  });
});

//
