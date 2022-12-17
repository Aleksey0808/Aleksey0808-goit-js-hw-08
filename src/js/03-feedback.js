import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const FEEDBACK_FORM = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

let objectSave = {};

function onTextareaInput(e) {
  objectSave[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(objectSave));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(objectSave);
  form.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

function load(key) {
  try {
    const validationsForForm = localStorage.getItem(key);
    return validationsForForm === null
      ? undefined
      : JSON.parse(validationsForForm);
  } catch (error) {
    console.error('Error: ', error.name);
  }
}

function populateTextarea() {
  const storageData = load(FEEDBACK_FORM);

  if (storageData) {
    Object.entries(storageData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
