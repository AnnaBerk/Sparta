(function () {

let item = document.querySelector(".testimonials__item-text");
let  showBtn= document.querySelector(".testimonials__item-read");
//let  testimonial= document.querySelector(".testimonials__item");
let  testimonial= document.querySelector(".testimonials__item-wrapper");

showBtn.addEventListener("click", function(evt){
  item.style.overflow = "visible"; 
  showBtn.style.display = "none"; 
  item.style.height = item.scrollHeight+"px";
  let computedStyle = getComputedStyle(document.testimonial);
  let testimonialBgHeight = computedStyle+parseInt(item.scrollHeight);
  testimonial.style.height = testimonialBgHeight +"px";
 });


}());

     // popup

(function () {

  let modal = document.querySelector(".popup");
  let modalOverlay = document.querySelector(".popup-overlay");
  let closeButton = document.querySelector(".popup-close");
  let openButton = document.querySelectorAll(".popupBtn");
  
  closeButton.addEventListener("click", function() {
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  });
  
  openButton.forEach(function (button) {
  button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
  })
  });
  

}());

  