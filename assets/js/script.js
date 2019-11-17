
/* Поп ап */
function popup(){
	var all = document.getElementById('all');
	var pop_up = document.getElementById('pop_up');
	all.style.overflow ="hidden";
	pop_up.style.visibility = "visible";
	pop_up.style.opacity = "1";
	window.onclick = function(e){
	if (e.target == pop_up){
		pop_up.style.visibility = "hidden";
		pop_up.style.opacity = "0";
		all.style.overflow ="visible";
	}
	if(e.target == popup_btn_close){
		pop_up.style.visibility = "hidden";
		pop_up.style.opacity = "0";
		all.style.overflow ="visible";
	}
}
	function popup_close(){
	var all = document.getElementById('all');
	var pop_up = document.getElementById('pop_up');
	pop_up.style.visibility = "hidden";
	all.style.overflow ="visible";
}
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

 /* ПопАп селектор */
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 