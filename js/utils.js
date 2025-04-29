function getUniqueRandom(min, max, usedArray) {
  const availableNumbers = [];
  for (let i = min; i <= max; i++) {
    if (!usedArray.includes(i)) {
      availableNumbers.push(i);
    }
  }

  if (availableNumbers.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableNumbers.length);
  const randomNum = availableNumbers[randomIndex];

  usedArray.push(randomNum);

  return randomNum;
}

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const names = [
  'Михаил',
  'Олег',
  'Ольга',
  'Юлия',
  'Артём',
  'Степан'
];

const getRandomName = () => names[getRandomInteger(0, 5)];

function getRandomArray(quantity) {
  const uniqueIds = Array.from({ length: quantity }, (_, i) => i + 1);
  for (let i = uniqueIds.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [uniqueIds[i], uniqueIds[j]] = [uniqueIds[j], uniqueIds[i]];
  }
  return uniqueIds;
}

// const uniqueIds = getRandomArray(25);

const checkMaxLengthString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return true;
  }
  return false;
};

export {getRandomInteger};
export {getUniqueRandom};
export {getRandomName};
