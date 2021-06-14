const slider = new Swiper('.swiper-container', {
  // Optional parameters
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBeteeen: 0,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
},
autoplay: {
    delay: 5000,
},
keyboard: {
    enabled: true,
},
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
