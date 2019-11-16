
/* Поп ап */
function popup(){
	var all = document.getElementById('all');
	var pop_up = document.getElementById('pop_up');
	all.style.overflow ="hidden";
	pop_up.style.visibility = "visible"
}
window.onclick = function(e){
	if (e.target == pop_up){
		pop_up.style.visibility = "hidden";
		all.style.overflow ="visible";
	}
}
function popup_close(){
	var all = document.getElementById('all');
	var pop_up = document.getElementById('pop_up');
	pop_up.style.visibility = "hidden";
	all.style.overflow ="visible";
}

/* Якори покрутки */
$('a[href^="#"]').bind("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
   scrollTop: $(anchor.attr("href")).offset().top
  }, 1000);
  e.preventDefault();
 });
 /* Текст */
 function textMore(){
 	var txt = document.getElementById('txtMore');
 	var dots = document.getElementById('dotsMore');
 	var hidden = document.getElementById('hidden_moreText');
 	hidden_moreText.style.display = "block";
 	txt.style.display = "block";
 	dots.style.display = "none";
 }
 function hiden(){
 	var txt = document.getElementById('txtMore');
 	var dots = document.getElementById('dotsMore');
 	var hidden = document.getElementById('hidden_moreText');
 	hidden_moreText.style.display = "none";
 	txt.style.display = "none";
 	dots.style.display = "block";

 }