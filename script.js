$(document).ready(function() {
	$(window).scroll(function() {
		console.log($(document).scrollTop());
	  if ($(document).scrollTop() > 200) {
		$(".main-head").addClass("head-bg");
		$(".mob-head").addClass("head-bg");

		
	  } else {
		$(".main-head").removeClass("head-bg");
		$(".mob-head").removeClass("head-bg");
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