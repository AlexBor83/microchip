const buttonOpendForm = document.querySelector('.header__button');
const modal = document.querySelector('.form--modal');
const body = document.querySelector('body');
const buttonClosedForm = document.querySelector('.form__button--modal');

const closedModal = () => {
  modal.classList.remove('form--modal-show');
  body.classList.remove('fixed-page');
  modal.classList.add('form--modal-closed');
};

const openModal = () => {
  modal.classList.remove('form--modal-closed');
  modal.classList.add('form--modal-show');
  body.classList.add('fixed-page');
};

const togglerModal = () => {
  if (!modal) {
    return;
  }

  buttonOpendForm.addEventListener('click', () => {
    if (modal.classList.contains('form--modal-closed')) {
      openModal();

      document.addEventListener('keydown', (evt) => {
        if (evt.key === ('Escape' || 'Esc')) {
          evt.preventDefault();
          closedModal();
        }
      });

      //Не понял как сделать чтоб модалка закрывалась по клику на пустое место

      // window.addEventListener('click', (evt) => {

      //   if (evt.target == modal) {
      //     console.log(3);
      //   }

      //   console.log(5);

      // })
    }
  });

  buttonClosedForm.addEventListener('click', () => {
    closedModal();
  });
};

togglerModal();
