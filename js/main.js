import { getPictures } from './data.js';
import { renderPictures } from './pictures.js';
import { activateForm } from './form.js';
import { receiveData } from './server.js';
import { showErrMessage } from './message.js';

// renderPictures(getPictures(25));
activateForm();
receiveData(renderPictures, showErrMessage);
