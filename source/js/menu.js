const footerButtons = document.querySelectorAll('.footer__button');
const footerSection = document.querySelectorAll('.footer__section');
const footerLists = document.querySelectorAll('.footer__list');

const showFooterMenu = (i) => {

  footerLists[i].classList.remove('close-menu');
  footerLists[i].classList.add('open-menu');
  footerButtons[i].classList.remove('footer__button--clouse');
};

const clouseFooterMenu = (i) => {
  footerLists[i].classList.add('close-menu');
  footerLists[i].classList.remove('open-menu');
  footerButtons[i].classList.add('footer__button--clouse');
};

const togglerFooterMenu = () => {
  if (!footerSection) {
    return;
  }

  footerLists.forEach((i) => {
    i.classList.add('close-menu');
    i.classList.remove('open-menu');
  });

  footerButtons.forEach((i) =>{
    i.classList.add('footer__button--clouse');
  });

  footerButtons.forEach((item, number) =>{
    item.addEventListener('click', (evt) => {
      if (evt.target === item) {
        if (footerLists[number].classList.contains('close-menu')) {
          showFooterMenu(number);

        } else {
          clouseFooterMenu(number);
          item[number].classList.remove('footer__button--clouse');
        }
      }
    });
  });
};

// Не понял как сделать если одна вкладка раскрыта, при клике на вторую, первая вкладка - зарывается, вторая вкладка раскрывается

togglerFooterMenu();
