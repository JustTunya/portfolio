$(document).ready(function() {
	let timeline = gsap.timeline();
  
	$('.layer').css({ 'transform': 'translateY(100%)' });
  
	timeline.staggerTo('.layer:not(.layer4, .layer5, .layer6)', 2.5, {
	  y: '0%',
	  ease: Power2.easeOut
	}, 0.2);
  
	timeline.to('.layer4, .layer5, .layer6', 2.5, {
	  y: '0%',
	  ease: Power2.easeOut
	}, "-=2.4");
  
	timeline.eventCallback("onComplete", function() {
	  enableParallaxEffect();
	});
  
	timeline.play();
});  
  
function enableParallaxEffect() {
	$('html').mousemove(function(e) {
	  var wx = $(window).width();
	  var wy = $(window).height();
  
	  var x = e.pageX - this.offsetLeft;
	  var y = e.pageY - this.offsetTop;
  
	  var centerx = wx / 2;
	  var centery = wy / 2;
  
	  var newx = x - centerx;
	  var newy = y - centery;
  
	  $('span').text(newx + ", " + newy);
  
	  $('#wrapper div').each(function() {
		var speed = $(this).attr('data-speed');
		if ($(this).attr('data-revert')) speed *= -1;
		TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
	  });
	});
}
  
  