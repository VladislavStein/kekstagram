import {createDescriptionPhoto} from './create-description-photo.js';
import {renderPictures} from './create-mini-photos.js';
import './form.js';
import './validation.js';

const photoList = Array.from({ length: 25 }, createDescriptionPhoto);
// console.log(JSON.stringify(photoList, null, 2));

renderPictures(photoList);


