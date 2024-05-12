const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".comparisonSection",
    start: "top top+=200",
    end: "bottom+=1000 top+=200",
    scrub: true,
    // markers: true,
    pin: true,
  },
  defaults: { ease: "none" },
});
tl.fromTo(".afterImage", { xPercent: 100, x: 0 }, { xPercent: 0 }, 0)
  .fromTo(".afterImage img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
  .fromTo(".thirdImage", { xPercent: 100, x: 0 }, { xPercent: 0 }, 1)
  .fromTo(".thirdImage img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 1);
