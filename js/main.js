import { getPictures } from './data.js';
import { renderPictures } from './pictures.js';
import { activateForm } from './form.js';

renderPictures(getPictures(25));
activateForm();

fetch('https://25.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST'
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
