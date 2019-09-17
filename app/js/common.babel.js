'use strict';

//  video
{
  var playBtn = document.getElementById('playBtn');

  var videoEl = document.getElementsByTagName('video')[0];
  playBtn.addEventListener('click', function () {
    if (videoEl.paused) {
      videoEl.play();
      playBtn.classList.add("visually-hidden");
    } else {
      videoEl.pause();
    }
  }, false);
}

// testimonial
{

  var item = document.querySelector(".testimonials__item-text");
  var showBtn = document.querySelector(".testimonials__item-read");
  //let  testimonial= document.querySelector(".testimonials__item");
  var testimonial = document.querySelector(".testimonials__item-wrapper");

  showBtn.addEventListener("click", function (evt) {
    item.style.overflow = "visible";
    showBtn.style.display = "none";
    var style = testimonial.style.height;
    item.style.height = item.scrollHeight + "px";
    var testimonialBgHeight = style + parseInt(testimonial.scrollHeight);
    testimonial.style.height = testimonialBgHeight + "px";
  });
}

// popup

{

  var popup = document.querySelector(".popup");
  var popupOverlay = document.querySelector(".popup-overlay");
  var closeButton = document.querySelector(".popup-close");
  var openButton = document.querySelectorAll(".popupBtn");
  var userName = document.getElementById("popup-name");

  var onPopupEsc = function onPopupEsc(evt) {
    if (evt.keyCode === 27) {
      closePopup();
    }
  };

  var openPopup = function openPopup() {
    popup.classList.remove('closed');
    popupOverlay.classList.remove("closed");
    document.addEventListener('keydown', onPopupEsc);
  };

  var closePopup = function closePopup() {
    popup.classList.add('closed');
    popupOverlay.classList.add("closed");
    document.removeEventListener('keydown', onPopupEsc);
  };
  openButton.forEach(function (button) {
    button.addEventListener("click", function () {
      openPopup();
      userName.focus();
    });
  });
  closeButton.addEventListener("click", function () {
    closePopup();
  });
  popupOverlay.addEventListener("click", function () {
    closePopup();
  });
}