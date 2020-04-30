jQuery(document).ready(function() {	
// --------------------------------------------------
// custom positiion
// --------------------------------------------------
	var $doc_height = jQuery(window).innerHeight(); 
	jQuery('.full-height').css("height", $doc_height);
	var picheight = jQuery('.center-y').css("height");
	picheight = parseInt(picheight, 10);
	jQuery('.center-y').css('margin-top', (($doc_height - picheight)/2)-90);
	jQuery('.full-height').css("height",$doc_height);
	$("#scrollToOrder").click(function() {
    $('html, body').animate({scrollTop: $("#order").offset().top - 80}, 1000);
});
});	
	$(document).ready(function(){
let owl = $('.owl-carousel');
  owl.owlCarousel({
  	autoWidth: true,
  	margin: 30,
    responsive: {
      0:{
        item: 1;
      },
      900:{
        item: 3,
      },
    },
  	nav: false,
    loop:true,
  	autoplay: true,
  	autoplayTimeout: 3000,
  	autoplayHoverPause: true,
  })
});
var carouselItem = document.querySelectorAll('.js-carousel');
var popup_images = document.querySelectorAll('.popup_images');
let carous = 0;
for(let i = 0; i< carouselItem.length;i++){
  carouselItem[i].onclick = function(){
  var all = document.getElementById('all');
  var pop_up = document.getElementById('pop_up');
  let clsbtn = document.querySelector('.closebtn');
  let clsbtn2 = document.querySelector('.closebtn2');
  all.style.overflow ="hidden";
  pop_up.style.visibility = "visible";
  pop_up.style.opacity = "1";
  if(carouselItem[i].getAttribute("name") == "js_enumerate"){
    document.querySelector(".popup_form").style.display = "block";
  } else document.querySelector(".popup_form--call").style.display = "block";
  window.onclick = function(e){
  if ((e.target == pop_up) || (e.target == clsbtn) ||( e.target ==clsbtn2)){
    document.querySelector(".popup_form").style.display = "none";
    document.querySelector(".popup_form--call").style.display = "none";
    pop_up.style.visibility = "hidden";
    pop_up.style.opacity = "0";
    all.style.overflow ="visible";
  }
  // if(e.target == popup_btn_close){
  //   pop_up.style.visibility = "hidden";
  //   pop_up.style.opacity = "0";
  //   all.style.overflow ="visible";
  // }
}
  }
}