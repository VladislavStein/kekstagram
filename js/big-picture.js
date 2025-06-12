const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.big-picture__cancel');

const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imgUpload = document.querySelector('.img-upload__preview');

//Scale
const onScaleBigger = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  if (currentValue < 100) {
    scaleValue.value = `${currentValue + 25}%`;
    imgUpload.style.transform = `scale(${currentValue + 25}%)`;
  }
};

const onScaleSmaller = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  if (currentValue > 25) {
    scaleValue.value = `${currentValue - 25}%`;
    imgUpload.style.transform = `scale(${currentValue - 25}%)`;
  }
};

scaleBigger.addEventListener('click', onScaleBigger);
scaleSmaller.addEventListener('click', onScaleSmaller);
//

//Effects
const radios = document.querySelectorAll('.img-upload__effects input[type="radio"]');
radios.forEach((radio) => {
  radio.addEventListener('change', () => {
    // Удаляем все эффекты
    imgUpload.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
    
    // Добавляем выбранный эффект
    if (radio.checked) {
      const effectClass = `effects__preview--${radio.value}`;
      imgUpload.classList.add(effectClass);
    }
  });
});
//

const onCloseBtnClick = () => {
  hideModal();
};

const showModal = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  closeBtn.addEventListener('click', onCloseBtnClick);
};

function hideModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}

const getComments = (picture) => {
  const commentsCount = document.querySelector('.comments-count');
  const commentsList = document.querySelector('.social__comments');
  const commentsLoader = document.querySelector('.social__comments-loader');

  commentsList.innerHTML = '';
  commentsLoader.classList.add('hidden');
  commentsCount.textContent = picture.comments.length;

  picture.comments.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('social__comment');
    const img = document.createElement('img');
    img.classList.add('social__picture');
    const p = document.createElement('p');
    p.classList.add('social__text');

    img.src = element.avatar;
    img.alt = element.name;

    p.textContent = element.message;

    li.appendChild(img);
    li.appendChild(p);

    commentsList.appendChild(li);
  });
};

const getPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
};

const renderBigPicture = (picture) => {
  getPicture(picture);
  getComments(picture);
  showModal();
};

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    hideModal();
  }
});

export {renderBigPicture};
