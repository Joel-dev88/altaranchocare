/*eslint-env es6*/
const navSlide = () => {
    /*eslint-env es6*/
    const burger = document.querySelector('.burger');
    /*eslint-env es6*/
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
    

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();