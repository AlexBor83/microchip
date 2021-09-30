import {initPhoneMask} from './phone-mask.js';
console.log('Validate');

const forms = document.querySelectorAll('form');
const inputs = document.querySelectorAll('input');
const inputTels = document.querySelectorAll('input[name=tel]');
const inputCheckboxes = document.querySelectorAll('input[name=data]');

const validateTel = () =>{
  inputTels.forEach((i) => {
    i.addEventListener('input', function (evt) {
      initPhoneMask()
    });
  });
};

const formValidate = () => {
  let flag = true;

  inputs.forEach((input) => {
    input.classList.remove('form__error')

    if (!input.value) {
      input.classList.add('form__error')
      flag = false;
    }
  });

  return flag;
}

//formValidate();
console.log(formValidate())


const initFormValidate = () => {

  forms.forEach((form, number) =>{
    if (!form) {
      return;
    }

  form.noValidate = true;
    validateTel();

    forms[number].addEventListener('submit', (evt) =>{
      evt.preventDefault();
      console.log(formValidate())


      if (formValidate()) {
        setTimeout( () => {
          evt.target.reset();
        }, 500);
      }
    })
  })
};

initFormValidate();
