// Heihgt container s-login

let hLog = document.querySelector('.s-login');
let hFooter = document.querySelector('.s-footer').clientHeight;

const setHeightLog = () => {
    if (window.innerWidth > 576 ) {
        let heightVh = window.innerHeight;
        let newHeight = (heightVh - hFooter -1 ) + 'px';
        hLog.style.height = newHeight;
    }

};

window.addEventListener('load', setHeightLog);
window.addEventListener('resize', setHeightLog);