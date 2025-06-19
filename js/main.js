import { getPictures } from './data.js';
import { renderPictures } from './pictures.js';
import { activateForm } from './form.js';

renderPictures(getPictures(25));
activateForm();

const sliderElement = document.querySelector('.effect-level__slider');
noUiSlider.create(sliderElement, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});
