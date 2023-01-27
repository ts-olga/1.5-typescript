const start = document.getElementById('start-btn');
const plus = document.getElementById('plus-min');
const minus = document.getElementById('minus-min');
const time = document.getElementById('time');
const text = document.getElementById('text');

plus.addEventListener('click', () => {
  const currentTime = +time.innerHTML;
  if (!(currentTime > 59)) {
    time.innerHTML = String(currentTime + 1);
  }
});

minus.addEventListener('click', () => {
  const currentTime = +time.innerHTML;
  if (!(currentTime <= 1) {
    time.innerHTML = String(currentTime - 1);
  }
});

start.addEventListener('click', () => {
  manageButtons();

  let timeLeft = moment.duration(time.innerHTML * 60 * 1000 - 1000);
  const interval = setInterval(() => {
    time.innerHTML = moment(moment.duration(timeLeft).asMilliseconds()).format(
      'mm:ss'
    );
    timeLeft -= 1000;
    if (time.innerHTML === '00:00') {
      manageButtons();
      clearInterval(interval);
      time.innerHTML = '0';
    }
  }, 1000);
});

function manageButtons() {
  start.classList.toggle('hidden');
  plus.classList.toggle('hidden');
  minus.classList.toggle('hidden');
  text.innerHTML = start.classList.contains('hidden')
    ? 'Осталось'
    : 'Укажите время в минутах';
}
