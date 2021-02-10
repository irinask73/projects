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

const reviewsSwiper = new Swiper('.reviews__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: '.button--left',
        prevEl: '.button--right',
    },
});
//SECTION INFO
//slider
// Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs.swiper-container', { 
    direction: 'vertical', 
    loop: true,
    loopAdditionalSlides: 0,
    speed: 500,
    centeredSlides: true,
	slidesPerView: 3, 
	spaceBetween: 25, 
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', 
		prevEl: '.slider__prev' 
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
});

const sliderFront = new Swiper('.slider__front.swiper-container', {
    slidesPerView: 1, 
    spaceBetween: 20, 
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    loop: true,
    loopAdditionalSlides: 0,
    speed: 700,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', 
		prevEl: '.slider__prev' 
    },
    thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
});


//Questions accordion
const accordionItems = document.querySelector('.accordion__items');
const accordionButtons = accordionItems.querySelectorAll('li > div');

for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener('click', function () {
        const isTabActive = accordionButtons[i].classList.contains('active');
        for (let j = 0; j < accordionButtons.length; j++) {
            if (isTabActive === false) {
                accordionButtons[j].classList.remove('active')
            }
        }
        accordionButtons[i].classList.toggle('active');
        // if the same element has a class 'active' then on click remove the class 'active'
    });
};
