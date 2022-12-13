
import throttle from "lodash.throttle";

const refs = {
    formEl: document.querySelector(".feedback-form"),
    inputEl: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
    buttonEl: document.querySelector(".feedback-form button"),
  };
  
const SUBMITTING_FORM = 'feedback-form-state';

refs.formEl.addEventListener("submit", onFormSubmit);
refs.inputEl.addEventListener("input", throttle(onTextareaInput, 500));
refs.textarea.addEventListener("input", throttle(onTextarea, 500));
// refs.buttonEl.addEventListener();

populateTextarea();

populateInput();


function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('Отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(SUBMITTING_FORM);
}


function onTextareaInput(evt) {
    console.log(evt.target.value)
    
    const message = evt.target.value;
  
    localStorage.setItem(SUBMITTING_FORM, message);
  }

  function onTextarea(evt) {
    console.log(evt.target.value)
    
    const message = evt.target.value;
  
    localStorage.setItem(SUBMITTING_FORM, message);
  }


  function populateTextarea() {
    const savedMessage = localStorage.getItem(SUBMITTING_FORM);
  
    if (savedMessage) {
      refs.inputEl.value = savedMessage;
    }
  }

  function populateInput() {
    const savedMessage = localStorage.getItem(SUBMITTING_FORM);
  
    if (savedMessage) {
      refs.inputEl.value = savedMessage;
    }
  }


