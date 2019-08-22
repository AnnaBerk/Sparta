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
