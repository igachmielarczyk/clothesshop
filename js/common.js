// Show form search

const btnSearch = document.querySelector('.btn-search');
const formSearch = document.querySelector('.wrapper-form');
const navbar = document.querySelector('.navbar');

const activeForm = () => {
    formSearch.classList.toggle('active');
    btnSearch.classList.toggle('active');
}
const activeFormRemove = () => {
    if (formSearch.classList.contains('active')) {
        formSearch.classList.remove('active');
        btnSearch.classList.remove('active');
    }   
};

btnSearch.addEventListener('click', activeForm);
window.addEventListener('resize', activeFormRemove);

// Navbar gsap

const navCta = document.querySelector('.nav-cta');
const imgHero = document.querySelector('.img-hero');
let navtl = gsap.timeline({paused: true, reversed: true,ease: Power2.easeOut});

navtl.to('.wrapper-content', 1, {height: "100vh"})
navtl.to('.hero-swiper', 1, {width: "55%"}, "-=.75")
navtl.to('.h-header', 1, {scale: .5, x:"25%"}, "-=.75")
navtl.to('.wrapper-nav-bottom.top', 1, {display: "flex"}, "-=1.25")
navtl.fromTo('.wrapper-nav-bottom.top .h2', .5, {opacity: 0, x:50,}, {opacity:1, x:0},"-=.65")
navtl.fromTo('.wrapper-nav-bottom.top .b-item', 1, {opacity: 0, x:50}, {opacity:1, x:0, stagger: .3},"-=.5")
navtl.fromTo('.wrapper-nav-bottom.top .recommended', 1, {opacity: 0, x:50}, {opacity:1, x:0, stagger: .3},"-=.75")

navCta.addEventListener('click', () => {
    navCta.classList.toggle('active');
    navtl.reversed() ? navtl.play() : navtl.reverse();
    document.body.classList.toggle('stop-scroll');
});

// Toggle navbar in scroll down the page

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarScroll = document.querySelector('.wrapper-nav-bottom.scroll');
const scrollCta = document.querySelector('.scroll-cta');

const showNav = () => {
    navbarToggler.classList.toggle('active');
    navbarCollapse.classList.toggle('show');
}

let linkTl = gsap.timeline({paused: true, reversed: true,ease: Power2.easeOut});
linkTl.fromTo('.b-content.scroll .h2', .5, {opacity: 0, x:50,}, {opacity:1, x:0})
linkTl.fromTo('.b-content.scroll .b-item', 1, {opacity: 0, x:50}, {opacity:1, x:0, stagger: .2})
linkTl.fromTo('.wrapper-nav-bottom.scroll .item-r', 1, {opacity: 0, x:50}, {opacity:1, x:0, stagger: .2}, '-=.75')

const showLinks = () => {
    navtl.paused();
    scrollCta.classList.toggle('active');
    linkTl.reversed() ? linkTl.play() : linkTl.reverse();
}

navbarToggler.addEventListener('click', showNav);
scrollCta.addEventListener('click', showLinks);

