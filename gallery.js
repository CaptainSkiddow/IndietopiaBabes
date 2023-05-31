gsap.registerPlugin(ScrollTrigger)


gsap.from(".container", {
    duration: 0.1,
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".container",
      markers: true,
      end: "top 30%",
      start: "top 50%",
        //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"restart complete reverse reset"
    }
  })



