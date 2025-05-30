import { checkMaxLengthString } from './utils.js';

const form = document.querySelector('.img-upload__form');
const formDescription = document.querySelector('.text__description');
const hashTag = document.querySelector('.text__hashtags');

const re = /^#[A-Za-zА-Яа-яЁё0-9]+$/;

const validateText = (str) => checkMaxLengthString(str, 140);

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

const getHashTags = (str) => str.toLowerCase().split(' ');

const checkHashTagsSymbols = (value) => !hashTag || getHashTags(value).every((el) => re.test(el));
pristine.addValidator(hashTag, checkHashTagsSymbols, 'Хэш-тег начинается с символа # (решётка)');

const checkLength = (value) => getHashTags(value).every((el) => el.length <= 20);
pristine.addValidator(hashTag, checkLength, 'Длина хэш-тега не должна превышать 20 символов');

const checkMaxHashTags = (value) => getHashTags(value).length <= 5;
pristine.addValidator(hashTag, checkMaxHashTags, 'Количество хэш-тегов не может быть больше 5');

const checkUniqueHashTag = (value) => {
  const hashTags = getHashTags(value);
  const uniqueHashTags = new Set(hashTags);

  return hashTags.length === uniqueHashTags.size;
};
pristine.addValidator(hashTag, checkUniqueHashTag, 'Хэш-теги должны быть уникальны');

export { activateValidation, deactivateValidation };
