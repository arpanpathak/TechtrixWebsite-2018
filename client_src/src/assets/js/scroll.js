$(function(){
	var current_page=0,last_page=0;
	// $(".fullpage .page").each(function(i){
	// 	$(this).attr('pageNo',i);
	// 	console.log($(this).attr('pageNo'));
	// 	last_page=i;
	// });
	alert($(".fullpage .page")[0]);
	var timeout;
	$(".fullpage").on('mousewheel',function(e){
		clearTimeout(timeout);  
		   timeout = setTimeout(function() {
		   	if(e.originalEvent.wheelDelta < 0) {
		   	   if(current_page==last_page) return;
		       $('.fullpage .page[pageNo='+(current_page++)+']').slideToggle('slow');
			   $('.fullpage .page[pageNo='+(current_page)+']').hide('slow');
			}
			else
			{
				if(current_page==0) return;
				$('.fullpage .page[pageNo='+(current_page--)+']').fadeOut('slow');
			   	$('.fullpage .page[pageNo='+(current_page)+']').slideToggle('slow');
			}
		console.log(current_page);
		   }, 130);
	});

});

