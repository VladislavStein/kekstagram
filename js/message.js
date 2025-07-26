const messages = document.querySelector('#messages').content.querySelector('.messages');

const showErrMessage = (error) => {
  messages.querySelector('.img-upload__message--loading').textContent = `${error} ошибка загрузки`;
  document.body.appendChild(messages);
  setTimeout(() => {
    messages.remove();
  }, 2000);
};

export { showErrMessage };
