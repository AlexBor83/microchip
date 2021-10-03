const modal = document.querySelector('.form--modal');
const form = modal.querySelector('form');
const inputText = form.querySelector('input[type="text"]');
const inputTel = form.querySelector('input[type="tel"]');
const inputTextarea = form.querySelector('textarea');

const saveLocalStorage = () => {
  if (!form) {
    return;
  }

  form.addEventListener('submit', () => {
    localStorage.setItem('name', inputText.value);
    localStorage.setItem('tel', inputTel.value);
    localStorage.setItem('question', inputTextarea);
  });
};

const loadLocalStorage = () => {
  inputText.value = localStorage.getItem('name');
  inputTel.value = localStorage.getItem('tel');
  inputTextarea.value = localStorage.getItem('question');
};

export {saveLocalStorage, loadLocalStorage};
