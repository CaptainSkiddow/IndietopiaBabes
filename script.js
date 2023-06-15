
// Module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies,
Mouse = Matter.Mouse,
MouseConstraint = Matter.MouseConstraint;

// Create an engine
var engine = Engine.create();

// Get window dimensions
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Create a renderer
var render = Render.create({
element: document.getElementById("matter-container"),
engine: engine,
options: {
    width: windowWidth,
    height: windowHeight,
    wireframes: false,
    background: 'transparent'
}
});

// Adjust the renderer dimensions on window resize
window.addEventListener("resize", function() {
windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

Render.setSize(render, windowWidth, windowHeight);
Render.setPixelRatio(render, window.devicePixelRatio);
});

// Define the paths to your SVG images
var svgImages = [
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png',
'lp.png',
'lp1.png',
'lp2.png',
'lp3.png'


];

// Create an array to store the boxes
var boxes = [];

// Create boxes with SVG images
for (var i = 0; i < svgImages.length; i++) {
var posX = Math.random() * (windowWidth - 100) + 50;
var posY = Math.random() * (windowHeight - 100) + 50;

var box = Bodies.rectangle(
    posX,
    posY,
    80,
    80,
    {
        render: {
            sprite: {
                texture: svgImages[i],
                xScale: 0.1,
                yScale: 0.1
            }
        }
    }
);

boxes.push(box);
}

var ground = Bodies.rectangle(windowWidth / 2, windowHeight - 30, windowWidth, 60, { isStatic: true });

// Add the boxes and ground to the world
World.add(engine.world, [...boxes, ground]);

// Make the boxes draggable
for (var i = 0; i < boxes.length; i++) {
boxes[i].isStatic = false;
}

// Enable mouse dragging
var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
mouse: mouse
});

mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

World.add(engine.world, mouseConstraint);

// Start the engine
Engine.run(engine);

// Start the renderer
Render.run(render);

// Function to open modal box
function openModalBox(imagePath) {
    // Replace this with your modal box code or function
    console.log("Opening modal box for image:", imagePath);
    // Implement your modal box behavior here
}

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