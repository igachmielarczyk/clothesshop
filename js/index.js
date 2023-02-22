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

// About section

const btnCircle = document.querySelector('.btn-circle');
const wrapperAbout = document.querySelector('.wrapper-grid-about');
const sAbout = document.querySelector('.s-about');


const showGrid = () => {
    wrapperAbout.classList.toggle('show');
    sAbout.classList.toggle('show');
};

btnCircle.addEventListener('click', showGrid);


// Portfolio gsap

ScrollTrigger.matchMedia({
    "(min-width: 768px)": function() {

        var tlImg = gsap.timeline({
            scrollTrigger: {
                trigger: '.s-portfolio',
                scrub: 2,
                start: "top",
                end: "6000",
                pin: true,
            }
        });
        

        tlImg.to('.i-1', .25, { opacity: 1, left: '0', top:'0', ease: Linear.easeNone,})

        .to('.i-6', .25, {opacity: 1, right: '0', bottom:'0', ease: Linear.easeNone,})

        .to('.i-2', .25, {opacity: 1, left: '35%', top:'0', ease: Linear.easeNone,})


        .to('.i-4', .25, {opacity: 1, left: '0', bottom:'0', ease: Linear.easeNone,})

        .to('.i-3', .25, {opacity: 1, right: '0', top:'0', ease: Linear.easeNone,}) 

        .to('.i-5', .25, { left: '35%', bottom:'0', ease: Linear.easeNone,})

        .to('.i-1', .25, { height: '50%', ease: Linear.easeNone,})

        .to('.i-2', .25, { height: '25%', ease: Linear.easeNone,})

        .to('.i-3', .25, { height: '50%', ease: Linear.easeNone,})

        .to('.i-4', .25, { height: '25%', ease: Linear.easeNone,})

        .to('.i-5', .25, { height: '50%', ease: Linear.easeNone,})

        .to('.i-6', .25, { height: '25%', ease: Linear.easeNone,})

        .to('.wrapper-btn.portfolio', .25, { opacity: 1, ease: Linear.easeNone,}, '-=.6')

        .to('.s-portfolio h2', .25, { opacity: 1, ease: Linear.easeNone,}, '-=.6')
    
    },

    "(max-width: 767px)": function() {
        var tlImg1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.s-portfolio',
                scrub: 2,
                start: "-100%",
                end: "70%",
            }
        });
        tlImg1.to('.s-portfolio .wrapper .img',  { stagger: .1, opacity: 1, y: 0, ease: Linear.easeNone})
    }
});