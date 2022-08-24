const frame = document.querySelector('.frame');
const fullScreenBtn = document.querySelector('.fullScreenBtn');
const windowModeBtn = document.querySelector('.windowModeBtn');
const body = document.querySelector('body');
const frameWrapper = document.querySelector('.frame__wrapper');
const backdrop = document.querySelector('.videoChatBackdrop');
const openChatBtn = document.querySelector('.openChatBtn');
const closeChatBtn = document.querySelector('.closeChatBtn');

fullScreenBtn.addEventListener('click', enableFullScreen);
windowModeBtn.addEventListener('click', disableFullScreen);
window.addEventListener('keydown', disableFullScreen);
openChatBtn.addEventListener('click', openChat);
closeChatBtn.addEventListener('click', closeChat);

function enableFullScreen() {
  frameWrapper.classList.add('fullScreen');
  // frame.scrollIntoView();
}

function disableFullScreen(event) {
  if (event.code === 'Escape' || event.isTrusted) {
    frameWrapper.classList.remove('fullScreen');
  }
}

function openChat() {
  backdrop.classList.remove('is-hidden');
  body.classList.add('no-scroll');
}

function closeChat() {
  backdrop.classList.add('is-hidden');
  body.classList.remove('no-scroll');
  frameWrapper.innerHTML = frameWrapper.innerHTML;
}
