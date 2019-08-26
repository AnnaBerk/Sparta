"use strict";

var item = document.querySelector(".testimonials__item-text");
var showBtn = document.querySelector(".testimonials__item-read");
//let  testimonial= document.querySelector(".testimonials__item");
var testimonial = document.querySelector(".testimonials__item-wrapper");

showBtn.addEventListener("click", function (evt) {
  item.style.overflow = "visible";
  showBtn.style.display = "none";
  item.style.height = item.scrollHeight + "px";
  var computedStyle = getComputedStyle(document.testimonial);
  var testimonialBgHeight = computedStyle + parseInt(item.scrollHeight);
  testimonial.style.height = testimonialBgHeight + "px";
});