// Styles
import '../styles/styles.less';

// Icons
import './lib/icons';

// Plugins


import { changeToplineMod, createCustomCursors, goBackButton, initTabs, mobileMenu, overlays } from './common';

import {
  addAssetsLogos,
  contactFormValidate,
  datePicker,
  search,
  withTabs
} from './blocks';

import { selects, period } from './ui';

import {
    materials,
    materialsPass,
    ourValuesSlider,
    partnersSlider,
    profitsSliders,
    withUsSlider,
} from './pages';

// Common
changeToplineMod();
mobileMenu();
createCustomCursors();
initTabs();
overlays();
goBackButton();

// UI
selects();
period();

// Blocks
addAssetsLogos();
search();
withTabs();

// Home
profitsSliders();
partnersSlider();

// Press-center-pages
datePicker();
materials();
materialsPass();

// Career
ourValuesSlider();
withUsSlider();

// Contacts
contactFormValidate();

