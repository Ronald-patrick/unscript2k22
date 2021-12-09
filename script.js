console.log(window.location.pathname);
// if (window.location.href!="")
// 	window.location.href="#"

$(document).ready(function() {
	
	$(window).scroll(function() {
		// console.log($(document).scrollTop());
	  if ($(document).scrollTop() > 50) {
		$(".main-head").addClass("head-bg");
		$(".mob-head").addClass("head-bg");
		$(".head").hide();

		
	  } else {
		$(".main-head").removeClass("head-bg");
		$(".mob-head").removeClass("head-bg");
		$(".head").show();
	  }
	});
  });


const navbtn = document.getElementById('nav-btn');
const navmenu = document.getElementsByClassName('nav-menu')[0];

navbtn.addEventListener('click',()=>{
	if (navmenu.style.display === "none") {
		navmenu.style.display = "flex";
	  } else {
		navmenu.style.display = "none";
	  }
})

const div = document.querySelector('.home-main');
const title = document.querySelector('.logoTitle');
const info = document.querySelector('.infoP');
const btn = document.querySelector('.btn-eff');

const tl = new TimelineMax();

tl.fromTo(div,1,{width:"100%"},{width:"80%",ease: Power2.easeInOut})
  .fromTo(title,1.2,{opacity:0},{opacity:1,ease: Power2.easeInOut})
  .fromTo(info,1.4,{opacity:0},{opacity:1,ease: Power2.easeInOut})
  .fromTo(btn,1.6,{opacity:0},{opacity:1,ease: Power2.easeInOut});

