var nav = document.querySelector('.main-nav');
var open = document.querySelector('.menu-open');
var close = document.querySelector('.close-btn');


open.addEventListener('click', function(event) {
     event.preventDefault();
     nav.classList.add('main-nav_open');
     open.classList.remove('menu-open');
});

close.addEventListener('click', function(event) {
    event.preventDefault();
    nav.classList.remove('main-nav_open');
    open.classList.add('menu-open');
});
