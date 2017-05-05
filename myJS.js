 function rotateLogo(){
	  var img = document.getElementById("logo");
	  img.style.transform = "rotateY(720deg)";
	  display("i1",4000);
	  display("i2",5000);
	  display("i3",6000);
	  display("date",7000);
	  display("register",8000);
};

function display(id, dur){
	setTimeout(function(){
		document.getElementById(id).style.opacity = '1';
		document.getElementById(id).style.visibility = 'visible';
	},dur);
}

var main = function(){
	$('#logobox-l').click( function(e){
		e.preventDefault();
		var target= $('#logobox');
		$('html, body').stop().animate({
		   scrollTop: target.offset().top-30
		}, 1000);

	});

	$('#tracks-l').click( function(e){
		e.preventDefault();
		var target= $('#tracks');
		$('html, body').stop().animate({
		   scrollTop: target.offset().top-30
		}, 1000);
		$('tracks-l').style.class='active';
	});

	$('#rules-l').click( function(e){
		e.preventDefault();
		var target= $('#rules');
		$('html, body').stop().animate({
		   scrollTop: target.offset().top-30
		}, 1000);
	});

	$('#contact-l').click( function(e){
		e.preventDefault();
		var target= $('#contact');
		$('html, body').stop().animate({
		   scrollTop: target.offset().top-30
		}, 1000);
	});

	$('#about-l').click( function(e){
		e.preventDefault();
		var target= $('#about-us');
		$('html, body').stop().animate({
		   scrollTop: target.offset().top-45
		}, 1000);
	});
}
$(document).ready(main);