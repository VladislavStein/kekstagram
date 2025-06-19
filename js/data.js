import { getRandomArrayElement, setCounter, getRandomInteger } from './utils.js';

const DESCRIPTION = [
  'Description1',
  'Description2',
  'Description3',
  'Description4',
  'Description5',
  'Description6'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Саша',
  'Женя',
  'Иван',
  'Коля'
];

const createPictureUrl = (index) => `photos/${index}.jpg`;

const commentId = setCounter(1);
const getNextMessage = getRandomArrayElement(MESSAGES);
const getNextName = getRandomArrayElement(NAMES);

const createComment = () => {
  return {
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getNextMessage(MESSAGES),
    name: getNextName(NAMES)
  };
}

const photoId = setCounter(1);

const createPicture = () => {
  const index = photoId();
  const commentsCount = getRandomInteger(0, 20);
  const getNextDescription = getRandomArrayElement(DESCRIPTION);
  return {
    id: index,
    url: createPictureUrl(index),
    description: getNextDescription(),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: commentsCount}, createComment)
  };
};

const getPictures = (count) => Array.from({length: count}, createPicture);

export {getPictures};
