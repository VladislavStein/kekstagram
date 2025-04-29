import {getUniqueRandom} from './utils.js';
import {getRandomInteger} from './utils.js';
import {getRandomName} from './utils.js';

const usedCommentsId = [];

const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

function createComment() {
  return {
    id: getUniqueRandom(1, 30, usedCommentsId),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: `${comments[getRandomInteger(0, 7)]} ${comments[getRandomInteger(0, 7)]}`,
    name: getRandomName(),
  };
}

export {createComment};
