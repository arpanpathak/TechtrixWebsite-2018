var animationComplete = false;
function animationCalled() {
	// $('#logoAnime').animate({top:'25%'},2000)
	animationComplete = true;
}
// function showClock(){
// 	$('.clock').toggle('slow');
// 	// $('.date').toggle('slow');
// }
$(function(){

	particlesJS.load('particles-js', 'config.json', function() {
	  console.log('callback - particles.js config loaded');
	});
	$('#svg2').on('load',(function () {
	      setTimeout(function () {
	          if (!animationComplete) {
	              animateT();
	          }
	      }, 1000 * 12
	   );
	   }) );

	var date = new Date("February 18, 2018 02:15:00"); //Month Days, Year HH:MM:SS
	var now = new Date();
	var diff = (date.getTime()/1000) - (now.getTime()/1000);

	var clock = $('.clock').FlipClock(diff,{
	    clockFace: 'DailyCounter',
	    countdown: true
	});
			   
	clock.start();  

});