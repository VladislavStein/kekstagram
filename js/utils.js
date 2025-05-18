const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // меняем местами элементы
  }
  return arr;
}

const checkMaxLengthString = (str, maxLength) => str.length <= maxLength;

// const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArrayElement = (elements) => {
  let pool = [];

  const refillPool = () => {
    pool = shuffleArray([...elements]);
  };

  refillPool(); // инициализация при первом запуске

  return function getNext() {
    if (pool.length === 0) {
      refillPool(); // перезапуск, если закончились
    }
    return pool.pop(); // возвращаем последний элемент
  };
};

const setCounter = (i = 0) => () => i++;

export {getRandomInteger, checkMaxLengthString, getRandomArrayElement, setCounter};
