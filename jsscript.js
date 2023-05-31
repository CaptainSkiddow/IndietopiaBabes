

// function reveal() {
//     var reveals = document.querySelectorAll(".container, .containerrow3, .containerrow2, .containerrow4");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;    
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }


//   window.addEventListener("scroll", reveal);

// reveal();

 gsap.registerPlugin(ScrollTrigger)



gsap.from(".Test2", {
  duration:3,
  x: 70,
  scrub: 10, 
  markers: true,
  scrollTrigger: {
    trigger: ".Test2",
    markers: true,
    scrub: true,
    pin: true,
  }
})  

