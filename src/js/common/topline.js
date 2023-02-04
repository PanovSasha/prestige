import throttle from 'lodash.throttle';

import { isEscPressed } from '../lib/utils';
import { $BODY, $DOCUMENT, $WINDOW, BODY_LOCK_CLASS } from '../lib/constants';

const MOBILE_MENU_CLASS = 'mobile-menu';
const LOGO_CLASS = 'js-topline-logo';
const CLOSE_MENU_BTN_CLASS = 'js-close-menu-btn';

const $TOPLINE_WITH_MOD = $('.js-mod-topline');
const $MOBILE_MENU = $('.js-mobile-menu');
const $LOGO = $(`.${LOGO_CLASS}`);
const $SOCIAL = $('.js-social');

const toggleToplineMod = () => {
    $TOPLINE_WITH_MOD.toggleClass('topline--white', $WINDOW.scrollTop() < 10);
};

export const changeToplineMod = () => {
    if ($TOPLINE_WITH_MOD.length) {
       console.log('huiii');
        toggleToplineMod();
        $DOCUMENT.on('scroll', throttle(toggleToplineMod, 200));
    }
};

const closeMenuBtn = (`
    <button type="button" class="${MOBILE_MENU_CLASS}__close-btn ${CLOSE_MENU_BTN_CLASS}">
      <svg class="icon">
        <use xlink:href="/assets/sprite/sprite.svg#close"></use>
      </svg>
    </button>
`);

const hideMobileMenu = () => {
    $MOBILE_MENU.removeClass(MOBILE_MENU_CLASS);
    $BODY.removeClass(BODY_LOCK_CLASS);

    $(`.${CLOSE_MENU_BTN_CLASS}`).remove();
    $(`.${LOGO_CLASS}`, $MOBILE_MENU).remove();
};

const showMobileMenu = () => {
    const logoCopy = $($LOGO).clone();
    const socialCopy = $($SOCIAL).clone();

    $(socialCopy).toggleClass(`${MOBILE_MENU_CLASS}__social footer__social`);

    $MOBILE_MENU.prepend(logoCopy);
    $MOBILE_MENU.prepend(closeMenuBtn);
    $MOBILE_MENU.append(socialCopy);
    $MOBILE_MENU.addClass(MOBILE_MENU_CLASS);
    $BODY.addClass(BODY_LOCK_CLASS);

    const $closeBtn = $(`.${CLOSE_MENU_BTN_CLASS}`);

    $closeBtn.on('click', () => hideMobileMenu());
};

export const mobileMenu = () => {
    const $btn = $('.js-mobile-menu-btn');

    $btn.on('click', () => {
        showMobileMenu();

        $DOCUMENT.on('keyup', (event) => {
            if (isEscPressed(event)) {
                hideMobileMenu();
            }
        });
    });
};
