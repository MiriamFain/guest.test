const frame = document.querySelector('.frame');
const fullScreenBtn = document.querySelector('.fullScreenBtn');
const windowModeBtn = document.querySelector('.windowModeBtn');
const body = document.querySelector('body');
const frameWrapper = document.querySelector('.frame__wrapper');
const backdrop = document.querySelector('.videoChatBackdrop');
const openChatBtn = document.querySelector('.openChatBtn');

fullScreenBtn.addEventListener('click', enableFullScreen);
windowModeBtn.addEventListener('click', disableFullScreen);
window.addEventListener('keydown', disableFullScreen);
openChatBtn.addEventListener('click', openChat);

function enableFullScreen() {
  frameWrapper.classList.add('fullScreen');
  frame.scrollIntoView();
  body.classList.add('no-scroll');
}

function disableFullScreen(event) {
  if (event.code === 'Escape' || event.isTrusted) {
    frameWrapper.classList.remove('fullScreen');
    body.classList.remove('no-scroll');
  }
}

// function getValue(event) {
//   event.preventDefault();
//   const room = event.currentTarget.room.value;
//   frame.src = `https://imind.com/ru/r/${room}`;
//   setTimeout(showWindow, 2000);
// }

function openChat() {
  videoChatBackdrop.classList.toggle('is-hidden');
}
