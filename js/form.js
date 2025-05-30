import { activateValidation, deactivateValidation } from './validation.js';

const imgUpload = document.querySelector('.img-upload__input');
const imgContainer = document.querySelector('.img-upload__overlay');
const closeBtn = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const formDescription = document.querySelector('.text__description');
const hashTag = document.querySelector('.text__hashtags');

const onCloseBtnClick = () => {
  hideModal();
};

const onFormSubmit = () => {
  activateValidation();
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
  imgContainer.classList.add('hidden');
  closeBtn.removeEventListener('click', onCloseBtnClick);
  deactivateValidation();
}

function showModal() {
  imgContainer.classList.remove('hidden');
  closeBtn.addEventListener('click', onCloseBtnClick);
  form.addEventListener('submit', onFormSubmit);
}

const onImgUploadChange = () => {
  showModal();
};

const activateForm = () => imgUpload.addEventListener('change', onImgUploadChange);

export { activateForm };
