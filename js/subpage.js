// Hearts like

const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active')
        }  
    })
})

// Slider catalog

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

var swiper = new Swiper(".swiper-product", {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    allowTouchMove: true,
    speed: 2500,
    pagination: {
        el: ".swiper-pagination.product",
        clickable: true,
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
});