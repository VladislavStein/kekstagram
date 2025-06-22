import { getPictures } from './data.js';
import { renderPictures } from './pictures.js';
import { activateForm } from './form.js';

renderPictures(getPictures(25));
activateForm();


