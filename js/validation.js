import { checkMaxLengthString } from './utils.js';

const form = document.querySelector('.img-upload__form');
const formDescription = document.querySelector('.text__description');

const validateText = (str) => {
  checkMaxLengthString(str, 140);
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__wrapper',
  errorTextParent: 'img-upload__wrapper',
  errorTextClass: 'img-upload__error'
});

const activateValidation = () => {
  pristine.validate();
};

const deactivateValidation = () => {
  pristine.reset();
};

pristine.addValidator(formDescription, validateText, 'Длина строки не может быть больше 140 символов');

export { activateValidation, deactivateValidation };
