let button = document.querySelectorAll('.collapse__btn');
let menu   = document.querySelectorAll('.nav__collapse__menu');
for(let i = 0; i < menu.length; i++){
	button[i].onclick = function(){
			if(menu[i].style.height != "initial"){
				for(let i2 = 0; i2 < menu.length; i2++){
					if((menu[i2].style.height == "initial") && (i2 != i)){
						menu[i2].style.height = "0"
					};
				};
				menu[i].style.height = "initial";
			} else{
			menu[i].style.height = "0";
			}
			window.onclick = function(event){
			let navBarr		= document.querySelector('.navbar');
			let userX = event.clientX;
			let userY = event.clientY;
			let elemX = button[i].getBoundingClientRect().x + 8;
			let elemY = button[i].getBoundingClientRect().y;
			let elemWidth = button[i].getBoundingClientRect().width - 8;
			let elemHeight = button[i].getBoundingClientRect().height;
				if((userX < elemX) || (userX > elemX+elemWidth) || (userY < elemY) || (userY > elemY+elemHeight)){
				menu[i].style.height = "0";
				};
			};	
	};

};

/* Scrolling */
$('a[href^="#"]').bind("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
   scrollTop: $(anchor.attr("href")).offset().top
  }, 1000);
  e.preventDefault();
 });

/* burger menu */

let burger_btn = document.querySelector('.burgerMenu__link');
burger_btn.onclick = function(){
	let lines = document.querySelector('.burgerMenu--line');
	let navCollapse = document.querySelector('.nav__collapse');
	let navList		= document.querySelector('.nav__collapse__list');
	let navContact 	= document.querySelector('.nav__contacts');
	if (navContact.style.display == "") {
	lines.classList.add("burgerMenu--rotate");
	navCollapse.classList.add("collapse__active");
	navContact.style.display  = "block";
} else {
	lines.classList.remove("burgerMenu--rotate");
	navContact.style.display  = "";
	navCollapse.classList.remove("collapse__active");
}
}	
// popup

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
