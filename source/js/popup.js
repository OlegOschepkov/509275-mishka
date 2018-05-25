var navMain = document.querySelector(".header__nav");
var navToggle = document.querySelector(".header__toggle");

if (navToggle.classList.contains("header__toggle--nojs")) {
  navToggle.classList.remove("header__toggle--nojs");
};

if (navMain.classList.contains("header__nav--nojs")) {
  navMain.classList.remove("header__nav--open");
  navMain.classList.add("header__nav--closed");
  navMain.classList.remove("header__nav--nojs");
};

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header__nav--closed")) {
    navMain.classList.remove("header__nav--closed");
    navMain.classList.add("header__nav--open");
  } else {
    navMain.classList.add("header__nav--closed");
    navMain.classList.remove("header__nav--open");
  }
});



var link = document.querySelectorAll(".modal--popup");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal--close");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });
};

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show")
    }
  }
});
