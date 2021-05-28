const webdevSwiper = new Swiper('.user__slider.swiper-container', {
    spaceBetween: 10,
    loop: true,
    mousewheel: true,
    navigation: {
      nextEl: '.nxt--btn',
      prevEl: '.prv--btn',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      // when window width is >= 320px
      300: {
        direction: 'vertical',
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1.2
      },
      900: {
        slidesPerView: 1.8
      },
      1000: {
        slidesPerView: 2.1
      },
      1600: {
        slidesPerView: 2.5
      },
    },
  });

  //BUTTON TO TOP
  
  
  
