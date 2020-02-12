function timer(){
  let deadline = '2020-02-23 22:06:35';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / 1000 / 60 / 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.querySelector(id),
      hoursSpan = document.querySelector('.hours'),
      minutesSpan = document.querySelector('.minutes'),
      secondsSpan = document.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      function zeroCheck(num) {
        if (num <= 9) {
          return '0' + num;
        }
        return num;
      }
      let t = getTimeRemaining(endtime);
      hoursSpan.textContent = zeroCheck(t.hours);
      minutesSpan.textContent = zeroCheck(t.minutes);
      secondsSpan.textContent = zeroCheck(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hoursSpan.textContent = '00';
        minutesSpan.textContent = '00';
        secondsSpan.textContent = '00';
      }
    }
  }
  setClock('#timer', deadline);
}

module.exports = timer;