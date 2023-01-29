import { $BODY, $DOCUMENT } from '../lib/constants';
import { isEscPressed } from '../lib/utils';

const SHOWN = 'shown';

export function overlays() {
  const $closeBtn = $('.js-close-overlay-btn');
  const $overlay = $('.js-overlay');

  const overlayItemClass = '.js-overlay-item';

  $DOCUMENT.on('click', '.js-show-overlay-btn', function(event) {
    event.preventDefault();

    const $t = $(this);
    const target = $t.data('overlay');

    showOverlay($(`${overlayItemClass}[data-overlay="${target}"]`));
  });

  $closeBtn.on('click', () => hideOverlay());

  $overlay.on('click', ({ target }) => {
    if ($(target).closest($(overlayItemClass)).length) {
      return null;
    }

    hideOverlay();
  });
}

export function showOverlay($target) {
  const $overlay = $('.js-overlay');
  const $overlayItem = $('.js-overlay-item');

  $overlayItem.removeClass(SHOWN);
  $overlay.addClass(SHOWN);

  if ($target) {
    $target.addClass(SHOWN);
  }

  $BODY
    .css({ maxWidth: $BODY.width() })
    .addClass('body-lock');

  $DOCUMENT.on('keyup.overlay', (event) => {
    if (isEscPressed(event)) {
      hideOverlay();
    }
  });
}

export function hideOverlay() {
  const $overlay = $('.js-overlay');
  const $overlayItem = $('.js-overlay-item');

  $overlayItem.removeClass(SHOWN);
  $overlay.removeClass(`${SHOWN} right-sidebar`);

  $BODY
    .removeAttr('style')
    .removeClass('body-lock');

  $DOCUMENT.off('keyup.overlay');
}
