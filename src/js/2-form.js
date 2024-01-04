import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const input = form.querySelector('input');
input.classList.add('input');

const textarea = form.querySelector('textarea');
textarea.classList.add('textarea');

const btn = form.querySelector('button');
btn.classList.add('submitbatton');

const label = form.querySelector('label');
label.classList.add('labelname');

const initialMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (initialMessage) {
  textarea.value = initialMessage.message.trim();
  input.value = initialMessage.email.trim();
  btn.disabled = !(input.value && textarea.value);
}

form.addEventListener(
  'input',
  throttle(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ email: input.value, message: textarea.value })
    );
    btn.disabled = !(input.value && textarea.value);
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  let email = input.value.trim();
  let message = textarea.value.trim();

  if (email !== '' && message !== '') {
    console.log({ email, message });
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    alert('Будь ласка, заповніть всі поля форми.');
  }

  //   console.log({ email: input.value, message: textarea.value });
  //   form.reset();
  //   localStorage.removeItem(STORAGE_KEY);
  btn.disabled = true;
});
