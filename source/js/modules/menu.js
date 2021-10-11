const footerButtons = document.querySelectorAll('.footer__button');
const footerSection = document.querySelectorAll('.footer__section');
const footerLists = document.querySelectorAll('.footer__list');

const showFooterMenuItem = (i) => {

  footerLists[i].classList.remove('close-menu');
  footerLists[i].classList.add('open-menu');
  footerButtons[i].classList.remove('footer__button--clouse');
};

const closeFooterMenuItem = (i) => {
  footerLists[i].classList.add('close-menu');
  footerLists[i].classList.remove('open-menu');
  footerButtons[i].classList.add('footer__button--clouse');
};

const closeFooterMenu = () => {
  footerLists.forEach((i) => {
    i.classList.add('close-menu');
    i.classList.remove('open-menu');
  });

  footerButtons.forEach((i) =>{
    i.classList.add('footer__button--clouse');
  });
};

const toggleFooterMenu = () => {
  if (!footerSection) {
    return;
  }
  footerButtons.forEach((item, number) =>{
    item.addEventListener('click', (evt) => {

      if (evt.target === item) {
        if (footerLists[number].classList.contains('close-menu')) {
          closeFooterMenu();
          showFooterMenuItem(number);
        } else {
          closeFooterMenuItem(number);
        }
      }
    });
  });
};

export {closeFooterMenu, toggleFooterMenu};
