var swiper = new Swiper(".swiper-catalog", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 2500,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        769: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
      },
});