import {renderBigPicture} from './big-picture.js';

const picturesElement = document.querySelector('.pictures');
const pictureElement = document.querySelector('#picture').content.querySelector('.picture');

const onPictureClick = (picture) => (evt) => {
  evt.preventDefault();

  renderBigPicture(picture);
};

const createPicture = (picture) => {
  const element = pictureElement.cloneNode(true);
  element.querySelector('.picture__img').src = picture.url;
  element.querySelector('.picture__comments').textContent = picture.comments.length;
  element.querySelector('.picture__likes').textContent = picture.likes;
  element.addEventListener('click', onPictureClick(picture));
  return element;
};

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    fragment.append(createPicture(picture));
  });
  picturesElement.append(fragment);
};

export {renderPictures};
