document.querySelector(".frame");
const e = document.querySelector(".fullScreenBtn"),
  n = document.querySelector(".windowModeBtn"),
  t = document.querySelector("body"),
  c = document.querySelector(".frame__wrapper"),
  o = document.querySelector(".videoChatBackdrop"),
  d = document.querySelector(".openChatBtn"),
  r = document.querySelector(".closeChatBtn");
function s(e) {
  ("Escape" === e.code || e.isTrusted) && c.classList.remove("fullScreen");
}
e.addEventListener("click", function () {
  c.classList.add("fullScreen");
}),
  n.addEventListener("click", s),
  window.addEventListener("keydown", s),
  d.addEventListener("click", function () {
    o.classList.remove("is-hidden"), t.classList.add("no-scroll");
  }),
  r.addEventListener("click", function () {
    o.classList.add("is-hidden"),
      t.classList.remove("no-scroll"),
      (c.innerHTML = c.innerHTML);
  });
//# sourceMappingURL=page2.104d04de.js.map
