const buttonOpendForm = document.querySelector('.header__button');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const buttonClosedForm = document.querySelector('.form__button--modal');
const modalLogin = modal.querySelector('.login');
// const form = modal.querySelector('form');

const closedModal = () => {
  modal.classList.remove('modal-show');
  body.classList.remove('fixed-page');
  modal.classList.add('modal-closed');
};

const openModal = () => {
  modal.classList.remove('modal-closed');
  modal.classList.add('modal-show');
  modalLogin.focus();
  body.classList.add('fixed-page');
};

const togglerModal = () => {
  if (!modal) {
    return;
  }
  buttonOpendForm.addEventListener('click', () => {
    if (modal.classList.contains('modal-closed')) {
      openModal();

      document.addEventListener('keydown', (evt) => {
        if (evt.key === ('Escape' || 'Esc')) {
          evt.preventDefault();
          closedModal();
        }
      });

      modal.addEventListener('click', (evt) => {
        if (!evt.target.closest('.form')) {
          closedModal();
        }
      });
    }
  });

  buttonClosedForm.addEventListener('click', () => {
    closedModal();
  });
};

// const sendForm = () => {
//   modal.addEventListener('submit', () => {
//     if (!form.noValidate) {

//     }
//   });
// };

export {togglerModal};
