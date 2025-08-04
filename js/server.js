const receiveData = (onSuccess, onFail) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch((error) => onFail(error));
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body: body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      onSuccess();
    })
    .catch((error) => onFail(error));
};

export { receiveData, sendData };
