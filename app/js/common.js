let item = document.querySelector(".item__text");
let  showBtn= document.querySelector(".item-read");

showBtn.addEventListener("click", function(evt){
  item.style.overflow = "visible"; 
  showBtn.style.display = "none"; 
 });
