const startBtn = document.getElementById('start-btn');
const plusBtn = document.getElementById('plus-min');
const minusBtn = document.getElementById('minus-min');
const time = document.getElementById('time');
const text = document.getElementById('text');

plusBtn.addEventListener('click', () => {
  const currentTime = +time.innerHTML;
  if (!(currentTime > 59)) {
    time.innerHTML = currentTime + 1;
  }
});

minusBtn.addEventListener('click', () => {
  const currentTime = +time.innerHTML;
  if (!(currentTime <= 1)) {
    time.innerHTML = currentTime - 1;
  }
});

startBtn.addEventListener('click', () => {
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
  startBtn.classList.toggle('hidden');
  plusBtn.classList.toggle('hidden');
  minusBtn.classList.toggle('hidden');
  text.innerHTML = startBtn.classList.contains('hidden')
    ? 'Осталось'
    : 'Укажите время в минутах';
}
