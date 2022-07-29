const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  // Navigation arrowsslideDuplicateActiveClass
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 1
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 1
    }
  }
  
});