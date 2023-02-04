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
  speed: 3000,
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
