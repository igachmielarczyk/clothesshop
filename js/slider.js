var swiper = new Swiper(".hero-swiper", {
    effect: "fade",
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 2500,
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});