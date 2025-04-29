import {getUniqueRandom} from './utils.js';
import {getRandomInteger} from './utils.js';
import {createComment} from './create-comment.js';

const usedNumbersId = [];
const usedNumbersUrl = [];

const createDescriptionPhoto = () => ({
  id: getUniqueRandom(1, 25, usedNumbersId),
  url: `photos/${getUniqueRandom(1, 25, usedNumbersUrl)}.jpg`,
  description: 'Рандомное описание фото',
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: 2}, createComment),
});

export {createDescriptionPhoto};
