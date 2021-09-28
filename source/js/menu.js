const footerButtons = document.querySelectorAll('.footer__button');
const footerSection = document.querySelectorAll('.footer__section');
const footerLists = document.querySelectorAll('.footer__list');

const showFooterMenu = (i) => {

  footerLists[i].classList.remove('close-menu');
  footerLists[i].classList.add('open-menu');
};

const clouseFooterMenu = (i) => {
  footerLists[i].classList.add('close-menu');
  footerLists[i].classList.remove('open-menu');
};

const togglerFooterMenu = () => {
  if (!footerSection) {
    return;
  }

  footerLists.forEach((i) => {
    i.classList.add('close-menu');
    i.classList.remove('open-menu');
  });

  footerButtons.forEach((item, number) =>{
    item.addEventListener('click', (evt) => {

      if (evt.target === item) {
        if (footerLists[number].classList.contains('close-menu')) {
          showFooterMenu(number);
        } else {
          clouseFooterMenu(number);
        }
      }
    });
  });
};

togglerFooterMenu();

