//  video
{
		let playBtn = document.getElementById('playBtn');
		
		let videoEl = document.getElementsByTagName('video')[0];
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

let item = document.querySelector(".testimonials__item-text");
let  showBtn= document.querySelector(".testimonials__item-read");
let  testimonial= document.querySelector(".testimonials__item-wrapper");

showBtn.addEventListener("click", function(evt){
  
  item.style.overflow = "visible"; 
  showBtn.style.display = "none"; 
  let style = testimonial.style.height;
  item.style.height = item.scrollHeight+"px";
  let testimonialBgHeight = style +parseInt(testimonial.scrollHeight);
  testimonial.style.height = testimonialBgHeight +"px";
 });


}

     // popup

 {

  let popup = document.querySelector(".popup");
  let popupOverlay = document.querySelector(".popup-overlay");
  let closeButton = document.querySelector(".popup-close");
  let openButton = document.querySelectorAll(".popupBtn");
  let userName = document.getElementById("popup-name");

  let onPopupEsc = function(evt){
    if(evt.keyCode===27){
      closePopup();
    }
  };

let openPopup = function(){
  popup.classList.remove('closed');
  popupOverlay.classList.remove("closed");
  document.addEventListener('keydown',onPopupEsc);
};

let closePopup = function(){
  popup.classList.add('closed');
  popupOverlay.classList.add("closed");
  document.removeEventListener('keydown',onPopupEsc);
}
openButton.forEach(function (button) {
  button.addEventListener("click", function() {
    openPopup();
    userName.focus();
  })
});
closeButton.addEventListener("click", function() {
  closePopup()
});
popupOverlay.addEventListener("click", function() {
  closePopup()
});
}

  