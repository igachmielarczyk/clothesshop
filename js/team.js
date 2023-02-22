let panels1 = gsap.utils.toArray('.i-1 .panel');
console.log(panels1);

let scrollTween1 = gsap.to(panels1, {
    xPercent: -100 * (panels1.length  ),
    ease: "none",
    scrollTrigger: {
      trigger: ".t-item.i-1",
      pin: true,
      scrub: 1,
      start: "15% 15%",
      end: "+=3000",
    }
});

// info
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".i-1 .panel.info",
      containerAnimation: scrollTween1,
      start: "left left",
      end: "right right",
      scrub: true,
    }
  })
  .to(".i-1 .info-wrap", { xPercent: 100, ease: "none" })
  .to(".i-1 .info-panel_photo", { scale: 1.3,  }, 0)
  .fromTo(
    ".i-1 .info-content.is-2",
    {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
    },
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "none" },
    0
  )

// photo
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".i-1 .panel.photo",
      containerAnimation: scrollTween1,
      start: "left left",
      end: "right right",
      scrub: true,
    }
  })

  .fromTo(".i-1 .panel.photo", { scale: 1.6 }, { scale: 1 }, 0);



// stagger photos
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".i-1 .panel.gallery",
      containerAnimation: scrollTween1,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .from(".stagger-img", { x: "100vw", stagger: { each: 0.05 } })
  .to(".stagger-img", { scale: 0.5, stagger: { each: 0.05 } });


// Panel 2 

let panels2 = gsap.utils.toArray('.i-2 .panel');
console.log(panels1);

let scrollTween2 = gsap.to(panels2, {
    xPercent: -100 * (panels2.length -1 ),
    ease: "none",
    scrollTrigger: {
    trigger: ".t-item.i-2",
    pin: true,
    scrub: 1,
    start: "15% 15%",
    end: "+=4000",
    }
});
// info
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".i-2 .panel.info",
      containerAnimation: scrollTween2,
      start: "left left",
      end: "right left",
      scrub: true,
    }
  })

  .fromTo(".info-bg",{ opacity: 0.2, scale:1.3}, {opacity:1, scale:1})

// photo
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".i-2 .panel.photo",
      containerAnimation: scrollTween2,
      start: "left right",
      end: "right left",
      scrub: true,
    }
  })

  .fromTo(".i-2 .panel.photo .img-team", { scale: 1.6 }, { scale: 1 });


// stagger photos
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".i-2 .panel.gallery",
      containerAnimation: scrollTween2,
      start: "left right",
      end: "right left",
      scrub: true
    }
  })
  .fromTo(".stagger-img2", { scale: 0.5, stagger: { each: 0.05 } }, {scale:1.2});

