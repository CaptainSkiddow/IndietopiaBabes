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


  gsap.from(".containerrow2", {
    duration: 0.1,
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".containerrow2",
      markers: true,
      end: "top 30%",
      start: "top 50%",
        //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"restart complete reverse reset"
    }
  })

  gsap.from(".containerrow3", {
    duration: 0.1,
    x: -200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".containerrow3",
      markers: true,
      end: "top 30%",
      start: "top 50%",
        //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"restart complete reverse reset"
    }
  })

  gsap.from(".containerrow4", {
    duration: 0.1,
    x: 200,
    opacity: 0,
    scrollTrigger: {
      trigger: ".containerrow4",
      markers: true,
      end: "top 30%",
      start: "top 50%",
        //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions:"restart complete reverse reset"
    }
  })



