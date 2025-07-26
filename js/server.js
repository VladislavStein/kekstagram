const receiveData = (onSuccess, onFail) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        console.log('NOT OK', response.status);
      }
      return response.json();
    })
    .then((data) => onSuccess(data))
    .catch((error) => onFail(error));
};

const formData = new FormData();

const sendData = () => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

export { receiveData, sendData };
