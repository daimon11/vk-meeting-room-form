const form = document.querySelector('.form');

const btnReset = document.querySelector('.form__button--type_reset');


form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newDataForm = Object.fromEntries(formData);

  console.log('newDataForm', newDataForm);
  console.log('отправил');
});


btnReset.addEventListener('click', () => {
  form.reset();
});
