const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = document.querySelector('.big-picture__cancel');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureLikesCount = document.querySelector('.big-picture__social .likes-count');
const bigPictureCommentsCount = document.querySelector('.social__comment-count .comments-count');
const bigPictureSocialComment = document.querySelector('.social__comment');
const socialComments = document.querySelector('.social__comments');

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  
  bigPictureCloseBtn.addEventListener('click', function() {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  });

  for (const el of pictures) {
    const pictureElement = pictureTemplate.querySelector('.picture').cloneNode(true);
    pictureElement.querySelector('.picture__img').src = el.url;
    pictureElement.querySelector('.picture__comments').textContent = el.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = el.likes;
    pictureElement.addEventListener('click', function() {
      bigPicture.classList.remove('hidden');
      document.querySelector('body').classList.add('modal-open');
      bigPictureImg.src = el.url;
      bigPictureLikesCount.textContent = el.likes;
      bigPictureCommentsCount.textContent = el.comments.length;

      // Очищаем список комментариев
      socialComments.innerHTML = '';

      // Создаем новые элементы для каждого комментария
      el.comments.forEach((element) => {
        const commentElement = bigPictureSocialComment.cloneNode(true);
        commentElement.querySelector('.social__picture').src = element.avatar;
        commentElement.querySelector('.social__text').textContent = element.message;
        socialComments.appendChild(commentElement);
      });
    });

    document.querySelector('.social__caption').textContent = el.description;
    document.querySelector('.social__comment-count').classList.add('hidden');
    fragment.append(pictureElement);
  }
  picturesContainer.append(fragment);
}

export {renderPictures};
