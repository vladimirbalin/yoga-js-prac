function modal(){
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close'),
    descr = document.querySelector('.description-btn');

  function getModal(sourceButton) {
    sourceButton.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      sourceButton.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        overlay.style.display = 'none';
        sourceButton.classList.remove('more-splash');
        document.body.style.overflow = '';
      }
    });

  }

  getModal(more);
  getModal(descr);

}

module.exports = modal;