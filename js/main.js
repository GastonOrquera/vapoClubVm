
let hamburger = document.querySelector('.hamburger');

let nav = document.querySelector('nav');

let navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', function () {

    nav.classList.toggle('active');
    hamburger.classList.toggle('active');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

});

ScrollReveal().reveal('.scroll-revealImg', {
    origin: 'left',
    distance: '4px',
    duration: 1000,
    transition: 'cubic-bezier(0.5,0,0,1)',
    interval: 200
});

ScrollReveal().reveal('.scroll-revealTitles', {
    origin: 'bottom',
    distance: '10px',
    duration: 1000,
    transition: 'cubic-bezier(0.5,0,0,1)',
    interval: 200
});

