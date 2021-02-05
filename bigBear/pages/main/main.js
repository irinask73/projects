//header menu start
const mobileMenuBtn = document.querySelector('[data-mobileMenuBtn]');
const header = document.querySelector('[data-header]');
const headerMenu = document.querySelector('[data-headerMenu]');
const menuLeft = document.querySelector('[data-menuLeft]');
const menuRight = document.querySelector('[data-menuRight]');

mobileMenuBtn.addEventListener('click', function () {
    mobileMenuBtn.classList.toggle('active');
    header.classList.toggle('active');
    headerMenu.classList.toggle('active');
    menuLeft.classList.toggle('active');
    menuRight.classList.toggle('active');
});
//header menu end

//initial swiper
const bigBearSwiper = new Swiper('.bigBear__slider', {
    loop: true,
    //navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //margin betwen slider
    spaceBetween: 10,
    grabCursor: true,
});

const swiper = new Swiper('.slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    scrollbar: {
        dragSize: 110,
        hide: false,
    },
});

const reviewsSwiper = new Swiper('.reviews__slider',{
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button--left',
        prevEl: '.button--right',
    },
})

