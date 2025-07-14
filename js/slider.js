const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsInput = document.querySelector('.effects__radio');
const effectLevel = document.querySelector('.effect-level');
const effectsList = document.querySelector('.effects__list');
const imageElement = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

// sliderElement.noUiSlider.on('update', () => {
//   valueElement.value = sliderElement.noUiSlider.get();
// });

const applyFilter = (value, effect) => {
  const filters = {
    'chrome': `grayscale(${value})`,
    'sepia': `sepia(${value})`,
    'marvin': `invert(${value}%)`,
    'phobos': `blur(${value}px)`,
    'heat': `brightness(${value})`
  };
  return filters[effect];
};

const applyEffect = () => {
  const position = sliderElement.noUiSlider.get();
  const effect = form.effect.value;
  imageElement.style.filter = applyFilter(position, effect);
};

sliderElement.noUiSlider.on('update', applyEffect);

const onEffectsListChange = (evt) => {
  const effect = evt.target.value;
  let minValue = 0;
  let maxValue = 1;
  let stepValue = 0.1;

  switch (effect) {
    case 'marvin':
      maxValue = 100;
      stepValue = 1;
      break;
    case 'phobos':
      maxValue = 3;
      break;
    case 'heat':
      minValue = 1;
      maxValue = 3;
      break;
  }
  sliderElement.noUiSlider.updateOptions({
    range: { min: minValue, max: maxValue },
    step: stepValue
  });

  imageElement.className = '';
  imageElement.style.filter = '';

  sliderElement.noUiSlider.set(maxValue);

  if (effect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
    imageElement.classList.add(`effects__preview--${effect}`);
  }
};

const activateEffect = () => {
  effectLevel.classList.add('hidden');
  effectsList.addEventListener('change', onEffectsListChange);
};

const deactivateEffect = () => {
  imageElement.removeAttribute('style');
  imageElement.removeAttribute('class');
  effectsList.removeEventListener('change', onEffectsListChange);
};

// effectsInput.addEventListener('checked', (evt) => {   //не работает
//   if (evt.id === 'effect-chrome') {
//     sliderElement.noUiSlider.updateOptions({
//       range: {
//         min: 0,
//         max: 1
//       },
//       start: 0.5,
//       step: 0.1
//     });
//   }
//   //дальше по логике для всех эффектов так же через evt.id или что-то подобное
// });

export { activateEffect, deactivateEffect };
