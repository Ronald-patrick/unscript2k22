$(document).ready(function() {
	$(window).scroll(function() {
		console.log($(document).scrollTop());
	  if ($(document).scrollTop() > 200) {
		$(".main-head").addClass("head-bg");
	  } else {
		$(".main-head").removeClass("head-bg");
	  }
	});
  });