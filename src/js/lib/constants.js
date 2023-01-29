export const IS_DEV = process.env.NODE_ENV === 'development';
export const $WINDOW = $(window);
export const $DOCUMENT = $(document);
export const $BODY = $('body');

export const ACTIVE_CLASS = 'active';
export const CURRENT_CLASS = 'current';
export const BODY_LOCK_CLASS = 'body-lock';

export const TABLET_WIDTH = 990;

export const SERVER_DATE_FORMAT = 'YYYY-MM-DD';
export const FRONT_DATE_FORMAT = 'DD.MM.YYYY';

export const WINDOW_WIDTH = $WINDOW.width();
export const IS_LARGE_THEN_MOBILE = WINDOW_WIDTH >= 768;
