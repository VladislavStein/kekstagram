import { hideModal } from './form.js';

const messages = document.querySelector('#messages').content.querySelector('.messages');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const okButton = successMessage.querySelector('.success__button');
const failMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = failMessage.querySelector('.error__button');

const onSuccessMessageClick = () => hideSuccessMessage();
const onErrorMessageClick = () => hideFailMessage();

const showErrMessage = (error) => {
  messages.querySelector('.img-upload__message--loading').textContent = `${error} ошибка загрузки`;
  document.body.appendChild(messages);
  setTimeout(() => {
    messages.remove();
  }, 2000);
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  okButton.addEventListener('click', onSuccessMessageClick);
};

const showFailMessage = () => {
  document.body.appendChild(failMessage);
  errorButton.addEventListener('click', onErrorMessageClick);
};

function hideSuccessMessage() {
  successMessage.remove();
}

function hideFailMessage() {
  failMessage.remove();
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    hideModal();
  }
});

export { showErrMessage, showSuccessMessage, showFailMessage };
