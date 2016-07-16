$(document).ready(function() {

	//Email grabber pop-up
	var waypoint = new Waypoint({
	  element: $('#whenIsLaunch'),
	  handler: function() {
	  	var modal = $("#email-modal");
	    modal.modal();
	    waypoint.disable();

	    //And now for fixing some weird and confusing bugs in HTML/CSS
	    modal.css({"padding-right":"", "pointer-events":"none"});
	  },
	  offset: "50%"
	})

	// Transparent Navbar when above fold
	window.onscroll = function() {
		if (document.body.scrollTop < $(window).height()*2/3){		//This is for the transparent navbar
			$("#custom-navbar.navbar-default").addClass("transparent-navbar");
		} else {
			$("#custom-navbar.navbar-default").removeClass("transparent-navbar");
		}
	}

	// Smooth anchor scrolling
	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top - 100
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
});
