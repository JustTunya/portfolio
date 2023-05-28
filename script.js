$(function() {
	const timeline = gsap.timeline();
	const $wrapperDivs = $('#wrapper div');
	const $html = $('html');
	const $window = $(window);
	const centerx = $window.width() / 2;
	const centery = $window.height() / 2;
  
	$('.layer').css({ transform: 'translateY(100%)' });
  
	timeline.staggerTo('.layer:not(.layer4, .layer5, .layer6)', 2.5, {
	  y: '0%',
	  ease: Power2.easeOut
	}, 0.2)
	.to('.layer4, .layer5, .layer6', 2.5, {
	  y: '0%',
	  ease: Power2.easeOut
	}, "-=2.4")
	.eventCallback("onComplete", enableParallaxEffect)
	.play();
  
	function enableParallaxEffect() {
	  const wx = $window.width();
	  const wy = $window.height();
	  $html.mousemove(function(e) {
		const x = e.pageX - this.offsetLeft;
		const y = e.pageY - this.offsetTop;
		const newx = x - centerx;
		const newy = y - centery;
  
		$('span').text(newx + ", " + newy);
  
		$wrapperDivs.each(function() {
		  let speed = $(this).data('speed');
		  if ($(this).data('revert')) speed *= -1;
		  TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
		});
	  });
	}
});
