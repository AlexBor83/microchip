import MoveTo from './vendor/move-to.js';

const move = new MoveTo({
  duration: 1000,
  easing: 'easeOutQuart',
});

const initInnerLinks = () => {
  const triggers = document.querySelectorAll('.js-trigger-link');

  if (triggers.length) {
    triggers.forEach((trigger) => {
      move.registerTrigger(trigger);
      document.activeElement.blur();
    });
  }
};

export {initInnerLinks};
