import {validateHashtags} from './validation.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFileInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');

const cancelButton = document.querySelector('#upload-cancel');

const hashTagsText = document.querySelector('.text__hashtags');
const descriptionText = document.querySelector('.text__description');
const uploadImgSubmit = document.querySelector('.img-upload__submit');

uploadFileInput.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
});

cancelButton.addEventListener('click', () => {
    closeUploadForm();
});

uploadImgSubmit.addEventListener('submit', (evt) => {
    evt.preventDefault();

    //Валидация данных ВСТАВИТЬ

    uploadForm.submit();
});

const closeUploadForm = () => {
    console.log('Закрываем форму');
    console.log('Класс modal-open есть до удаления:', document.body.classList.contains('modal-open'));
    uploadOverlay.classList.add('hidden');
    document.body.className = document.body.className.replace('modal-open', '').trim();
    console.log('Класс modal-open удален:', !document.body.classList.contains('modal-open'));
    uploadForm.reset();
}

