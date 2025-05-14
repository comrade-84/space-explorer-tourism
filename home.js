const exploreLink = document.querySelector('.right');
exploreLink.addEventListener('click', function () {
    window.location.href = '/destination.html';
});

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.icon-close');
const navLinks = document.querySelector('.nav-links');
const home = document.querySelector('.home-content');
menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active'); 
    home.classList.add('margin');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
});
closeIcon.addEventListener('click', function() {
    navLinks.classList.remove('active'); 
    home.classList.remove('margin');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
})