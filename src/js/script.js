// Navbar/Header
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove('navbar-fixed');
    }

};


// Mobile Nav
const bgOffcanvas = document.querySelector('.background-offcanvas');
const mobileNav = document.querySelector('.mnav');
const openBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('.btnNav');
const btnNavIcon = document.querySelector('#btnNavIcon');
const navOpenClass = 'left-0';

const bgOff = 'hidden';
function toggleNav() {
    mobileNav.classList.toggle(navOpenClass);
    bgOffcanvas.classList.toggle(bgOff);
}
openBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);

