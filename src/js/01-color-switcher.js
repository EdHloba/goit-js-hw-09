const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let isStart = false;
let isDisabled = false;
let intervalId = null;

disableBtns();

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);

function onStartBtn() {
  if (isStart) {
    return;
  }

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  isStart = true;
  isDisabled = true;
  disableBtns();
}

function onStopBtn() {
  clearInterval(intervalId);

  isStart = false;
  isDisabled = false;

  disableBtns();
}
function disableBtns() {
  refs.startBtn.disabled = isDisabled;
  refs.stopBtn.disabled = !isDisabled;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
