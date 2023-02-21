new Swiper('.js-header-slider', {
  // direction: 'vertical',
  // freeMode: true,
  speed: 3000,
  parallax: true,
  loop: true,
  spaceBetween: 18,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
})

new Swiper('.js-realize-slider', {
  speed: 900,
  loop: true,
  spaceBetween: 1,
  autoplay: {
    delay: 9400,
    disableOnInteraction: false,
  },
  mousewheel: {
    enabled: false,
  },

  navigation: {
    nextEl: '.realize__slider-next-btn',
    prevEl: '.realize__slider-prev-btn',
    hideOnClick: true,
  },
})

new Swiper('.js-expo-slider', {
  speed: 900,
  loop: true,
  spaceBetween: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  mousewheel: {
    enabled: false,
  },
  effect: 'fade',
})

new Swiper('.js-clients-slider', {
  speed: 900,
  loop: true,
  pauseOnMouseEnter: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'fade',
})


let hui = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: hui
  }
});

