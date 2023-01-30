// Styles
import '../styles/styles.less';

// Icons
import './lib/icons';

// Plugins
import { changeToplineMod, mobileMenu, overlays, mainSlider } from './common';

// Common
mainSlider();
changeToplineMod();
mobileMenu();
overlays();

// UI

// Blocks

// Home

// Contacts

new Swiper('.slider', {
  // direction: 'vertical',
  // freeMode: true,
  speed: 2400,
  parallax: true,
  spaceBetween: 18,
  mousewheel: {
    enabled: true,
    sensitivity: 2.4
  }
})
