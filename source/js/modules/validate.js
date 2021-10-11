

const saveLocalStorage = () => {

  const modal = document.querySelector('.form--modal');
  const form = modal.querySelector('form');

  if (!form) {
    return;
  }
  const inputText = form.querySelector('input[type="text"]');
  const inputTel = form.querySelector('input[type="tel"]');
  const inputTextarea = form.querySelector('textarea');

  form.addEventListener('submit', () => {
    localStorage.setItem('name', inputText.value);
    localStorage.setItem('tel', inputTel.value);
    localStorage.setItem('question', inputTextarea);
  });
};

export {saveLocalStorage};
