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
const mobileNav = document.querySelector('.mnav');
const openBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('.btnNav');
const btnNavIcon = document.querySelector('#btnNavIcon');

const navOpenClass = 'left-0';
const navCloseClass = '-left-[300px]';

function toggleNav() {
    mobileNav.classList.toggle(navOpenClass);
    btnNavIcon.classList.add('hamburger-active');
}

openBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', toggleNav);

