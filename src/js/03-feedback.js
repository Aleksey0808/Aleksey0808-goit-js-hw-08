import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form [name="email"]'),
  message: document.querySelector('.feedback-form [name="message"]'),
};

const SUBMITTING_FORM = "feedback-form-state";

refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

refs.form.addEventListener('input', e => {
  const saveObject = {email: e.target.value, message: e.target.value};
  console.log(e.target.name);
  console.log(e.target.value);
  localStorage.setItem(SUBMITTING_FORM, JSON.stringify(saveObject))
});

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(SUBMITTING_FORM);
}

// function onTextareaInput(evt) {

//   const message = evt.target.value;

//   localStorage.setItem(SUBMITTING_FORM, message);
// }

function populateTextarea() {
  const savedMessage = localStorage.getItem(SUBMITTING_FORM);

  if (savedMessage) {
    refs.email.value = savedMessage;
  }
}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
