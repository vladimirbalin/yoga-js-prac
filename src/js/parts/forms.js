function forms(){
  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...',
  };

  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    contactForm = document.querySelector('#form'),
    contactInput = contactForm.getElementsByTagName('input');

  statusMessage.classList.add('status');

  let formSender = function (formName, inputName) {
    event.preventDefault();
    formName.appendChild(statusMessage);

    let request = new XMLHttpRequest();

    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    let formData = new FormData(formName);

    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
  
    request.send(JSON.stringify(obj));

    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (let i = 0; i < inputName.length; i++) {
      inputName[i].value = "";
    }
  };

  form.addEventListener('submit', function () {
    formSender(form, input);
  });

  contactForm.addEventListener('submit', function () {
    formSender(contactForm, contactInput);
  });
}

module.exports = forms;