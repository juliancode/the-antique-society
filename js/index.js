// Parallax effect, if statement to ensure only animate when in viewport, translate3d and rounding for performance.

$( window ).scroll(function() {
	if ( $( window ).scrollTop() < $( window ).height()) {
		$( '.content' ).css("transform", "translate3d(0px, " + Math.round($( window ).scrollTop() / -1.5) + "px, 0px)");
		$( '.hero-text' ).css("transform", "translate3d(0px, " + Math.round($( window ).scrollTop() / -4) + "px, 0px)");
		$( '.hero' ).css("transform", "translate3d(0px, " + Math.round($( window ).scrollTop() / 2) + "px, 0px)");
	} else {
		// Do nothing if parallax area is out of viewport.
		return
	}
});

// 2d solution might be useful later for browsers which might not support translate3d

// $( window ).scroll(function() {
// 	if ( $( window ).scrollTop() < $( window ).height()) {
// 		$( '.content' ).css("transform", "translate(0px, " + Math.round($( window ).scrollTop() / -1.5) + "px)");
// 		$( '.hero-text' ).css("transform", "translate(0px, " + Math.round($( window ).scrollTop() / 10) + "px)");
// 		$( '.hero' ).css("transform", "translate(0px, " + Math.round($( window ).scrollTop() / 2) + "px)");
// 		console.log("transform", "translate(0px, " + Math.round($( window ).scrollTop() / 2) + "px)");
// 	} else {
// 		// Do nothing if parallax area is out of viewport.
// 		return
// 	}
// });


// Burger menu code

$( ".menu" ).click(function() {
	$( "nav h1").removeClass("show").addClass("hide");
	$(".menu").removeClass("show").addClass("hide");
	$( "nav ul").removeClass("hide").addClass("show");
	$( "nav" ).removeClass("normal-height").addClass("full-height");
	$(".close").removeClass("hide").addClass("show");
});

$( ".close" ).click(function() {
	$( "nav h1" ).removeClass("hide").addClass("show");
	$(".menu").removeClass("hide").addClass("show");
	$( "nav ul").removeClass("show").addClass("hide");
	$( "nav" ).removeClass("full-height").addClass("normal-height");
	$(".close").removeClass("show").addClass("hide");
});

// Some fixes for the media queries when resetting with menu open etc..

window.onresize = function(e) {
	if ($(window).width() > 960) {
		$( "nav h1" ).removeClass("hide");
		$(".menu").removeClass("show");
		$(".close").removeClass("show");	
		$("nav").removeClass("full-height").addClass("normal-height");
		$("nav ul").removeClass("show").addClass("hide");
	}
	else {
		$(".menu").addClass("show");
	}
};
 
