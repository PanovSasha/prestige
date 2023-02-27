new Swiper('.js-header-slider', {
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
    delay: 6800,
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
  speed: 800,
  loop: true,
  spaceBetween: 1,
  pauseOnMouseEnter: false,
  autoplay: {
    delay: 1700,
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


let thumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 'auto',
});

new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbs,
  }
});


