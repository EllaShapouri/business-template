var navToggle = document.querySelector('.nav-toggle'),
    navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener("click",function(e) {
    e.preventDefault();
    navMenu.classList.toggle('is-active');
    navToggle.classList.toggle('is-active');
})