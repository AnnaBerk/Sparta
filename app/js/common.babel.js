"use strict";

var item = document.querySelector(".item__text");
var showBtn = document.querySelector(".item-read");
var testimonial = document.querySelector(".testimonials__item");

showBtn.addEventListener("click", function (evt) {
  item.style.overflow = "visible";

  showBtn.style.display = "none";
});