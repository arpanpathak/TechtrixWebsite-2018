var animationComplete = false;
function animationCalled() {
	animationComplete = true;
}
function showClock(){
	$('.clock').fadeIn('slow');
}
$(function(){
	particlesJS.load('particles-js', 'config.json', function() {
	  console.log('callback - particles.js config loaded');
	});
	$('svg').on('load',(function () {
	      setTimeout(function () {
	          if (!animationComplete) {
	              animateT();
	          }
	      }, 1000 * 12
	   );
	   }) );

	var date = new Date("March 5, 2018 02:15:00"); //Month Days, Year HH:MM:SS
	var now = new Date();
	var diff = (date.getTime()/1000) - (now.getTime()/1000);

	var clock = $('.clock').FlipClock(diff,{
	    clockFace: 'DailyCounter',
	    countdown: true
	});
			   
	clock.start();   
});