const webdevSwiper = new Swiper('.user__slider.swiper-container', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  centerSlides: true,
  mousewheel: true,
  freeMode: true,
  navigation: {
    nextEl: '.nxt--btn',
    prevEl: '.prv--btn',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    300: {
      slidesPerView: 1
    },
    450: {
      slidesPerView: 1.2
    },
    500: {
      slidesPerView: 1.3
    },
    600: {
      slidesPerView: 1.5
    },
    900: {
      slidesPerView: 1.8
    },
    1000: {
      slidesPerView: 2.1
    },
    1200: {
      slidesPerView: 2.5
    },
    1850: {
      slidesPerView: 3
    },
  }
});

//BOTTON TO TOP
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
const buttonTop = document.querySelector('.button__top');
const animateItems = document.querySelectorAll('.animate__item');

function buttonToTop() {
  let currentScrollHeight = window.pageYOffset;
  currentScrollHeight >= scrollHeight / 3 ? buttonTop.style.opacity = '1' : buttonTop.style.opacity = '0';
  buttonTop.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE и Opera
  })
};

//ANIMATION
function animateScroll() {
  let windowCenter = window.innerHeight + window.scrollY;
  animateItems.forEach(item => {
    if (windowCenter >= item.offsetTop) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    buttonToTop();
    animateScroll();
  });
});










