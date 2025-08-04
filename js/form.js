import { activateValidation, deactivateValidation } from './validation.js';
import { activateEffect, deactivateEffect } from './slider.js';
import { sendData } from './server.js';
import { showSuccessMessage, showFailMessage } from './message.js';

const imgUpload = document.querySelector('.img-upload__input');
const imgContainer = document.querySelector('.img-upload__overlay');
const closeBtn = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const formDescription = document.querySelector('.text__description');
const hashTag = document.querySelector('.text__hashtags');

const onCloseBtnClick = () => {
  hideModal();
};

const onSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onFail = () => {
  showFailMessage();
};

const onFormSubmit = (evt) => {
  const body = new FormData(evt.target);
  evt.preventDefault();
  if (activateValidation()) {
    sendData(onSuccess, onFail, body);
  } else {
    console.log('Валидация неуспешна');
  }
};

const isFocused = () => document.activeElement === formDescription || document.activeElement === hashTag;

document.addEventListener('keydown', (evt) => {
  if (isFocused()) {
    return;
  }
  if (evt.key === 'Escape') {
    hideModal();
  }
});

function hideModal() {
  form.reset();
  imgContainer.classList.add('hidden');
  closeBtn.removeEventListener('click', onCloseBtnClick);
  deactivateValidation();
  deactivateEffect();
}

function showModal() {
  imgContainer.classList.remove('hidden');
  closeBtn.addEventListener('click', onCloseBtnClick);
  form.addEventListener('submit', onFormSubmit);
  activateEffect();
}

const onImgUploadChange = () => {
  showModal();
};

const activateForm = () => imgUpload.addEventListener('change', onImgUploadChange);

export { activateForm, hideModal };
