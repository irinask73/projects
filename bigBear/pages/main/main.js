
const mobileMenuBtn = document.querySelector('[data-mobileMenuBtn]');
const header = document.querySelector('[data-header]');
const headerMenu = document.querySelector('[data-headerMenu]');
const menuLeft = document.querySelector('[data-menuLeft]');
const menuRight = document.querySelector('[data-menuRight]');

mobileMenuBtn.addEventListener('click', function(){
    mobileMenuBtn.classList.toggle('btn--active');
    header.classList.toggle('header__active');
    headerMenu.classList.toggle('header__menu--active');
    menuLeft.classList.toggle('header__menu-left--active');
    menuRight.classList.toggle('header__menu-right--active');
});

