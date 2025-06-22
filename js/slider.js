const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const effectsInput = document.querySelector('.effects__radio');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

effectsInput.addEventListener('checked', (evt) => {   //не работает
  if (evt.id === 'effect-chrome') {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 0.5,
      step: 0.1
    });
  }
  //дальше по логике для всех эффектов так же через evt.id или что-то подобное
});
