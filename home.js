$(document).ready(function() {

	var waypoint = new Waypoint({
	  element: $('#whenIsLaunch'),
	  handler: function() {
	    $("#email-modal").modal();
	    waypoint.disable();
	  },
	  offset: "50%"
	})

	window.onscroll = function() {
		if (document.body.scrollTop < $(window).height()*2/3){		//This is for the transparent navbar
			$("#custom-navbar.navbar-default").addClass("transparent-navbar");
		} else {
			$("#custom-navbar.navbar-default").removeClass("transparent-navbar");
		}
	}

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