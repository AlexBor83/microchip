const footerButtons = document.querySelectorAll('.footer__button');
const footerSection = document.querySelectorAll('.footer__section');
const footerLists = document.querySelectorAll('.footer__list');

const showFooterMenuItem = (i) => {

  footerLists[i].classList.remove('close-menu');
  footerLists[i].classList.add('open-menu');
  footerButtons[i].classList.remove('footer__button--clouse');
};

const clouseFooterMenuItem = (i) => {
  footerLists[i].classList.add('close-menu');
  footerLists[i].classList.remove('open-menu');
  footerButtons[i].classList.add('footer__button--clouse');
};

const clouseFooterMenu = () => {
  footerLists.forEach((i) => {
    i.classList.add('close-menu');
    i.classList.remove('open-menu');
  });

  footerButtons.forEach((i) =>{
    i.classList.add('footer__button--clouse');
  });
};

const togglerFooterMenu = () => {
  if (!footerSection) {
    return;
  }
  footerButtons.forEach((item, number) =>{
    item.addEventListener('click', (evt) => {

      if (evt.target === item) {
        if (footerLists[number].classList.contains('close-menu')) {
          clouseFooterMenu();
          showFooterMenuItem(number);
        } else {
          clouseFooterMenuItem(number);
        }
      }
    });
  });
};

export {clouseFooterMenu, togglerFooterMenu};
