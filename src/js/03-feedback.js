import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const FEEDBACK_FORM = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onTextareaInput(e) {
  console.log(e.target.name)
  console.log({ email: email.value, message: message.value })
  const objectSave = { email: email.value, message: message.value };
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(objectSave));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

function load(key) {
  try {
    const validationsForForm = localStorage.getItem(key);
    return validationsForForm === null ? undefined : JSON.parse(validationsForForm);
  } catch (error) {
    console.error('Error: ', error.name);
  }
}

function populateTextarea() {
  const storageData = load(FEEDBACK_FORM);

  if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
  }
}
