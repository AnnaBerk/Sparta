let item = document.querySelector(".testimonials__item-text");
let  showBtn= document.querySelector(".testimonials__item-read");
let  testimonial= document.querySelector(".testimonials__item");

showBtn.addEventListener("click", function(evt){
  item.style.overflow = "visible"; 
 
  showBtn.style.display = "none"; 
 });
