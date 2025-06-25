const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.social__comments-loader');

const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imgUpload = document.querySelector('.img-upload__preview');

let loadedCommentsCount = 0;
const visibleComments = 5;
let loadedComments = [];

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
// const radios = document.querySelectorAll('.img-upload__effects input[type="radio"]');
// radios.forEach((radio) => {
//   radio.addEventListener('change', () => {
//     // Удаляем все эффекты
//     imgUpload.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');

//     // Добавляем выбранный эффект
//     if (radio.checked) {
//       const effectClass = `effects__preview--${radio.value}`;
//       imgUpload.classList.add(effectClass);
//     }
//   });
// });
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
  commentsLoader.classList.remove('hidden');
}

const createComment = (comment) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');
  const img = document.createElement('img');
  img.classList.add('social__picture');
  const p = document.createElement('p');
  p.classList.add('social__text');

  img.src = comment.avatar;
  img.alt = comment.name;

  p.textContent = comment.message;

  li.appendChild(img);
  li.appendChild(p);

  return li;
};

const onClickLoader = () => getComments(loadedComments);

const getComments = (comments) => {
  const commentsCount = document.querySelector('.comments-count');
  const commentsList = document.querySelector('.social__comments');
  const commentsCounter = document.querySelector('.social__comment-counter');

  commentsList.innerHTML = '';
  commentsCount.textContent = comments.length;

  loadedCommentsCount += visibleComments;
  commentsCounter.textContent = Math.min(loadedCommentsCount, comments.length);
  if (comments.length <= loadedCommentsCount) {
    commentsLoader.classList.add('hidden');
  }
  comments.slice(0, loadedCommentsCount).forEach((element) => {
    commentsList.appendChild(createComment(element));
  });
};

const initCommentsLoader = () => {
  commentsLoader.addEventListener('click', onClickLoader);
};

const getPicture = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
};

const renderBigPicture = (picture) => {
  loadedCommentsCount = 0;
  loadedComments = picture.comments;
  getPicture(picture);
  getComments(loadedComments);
  showModal();
};

// Инициализация компонента
initCommentsLoader();

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    hideModal();
  }
});

export {renderBigPicture};
