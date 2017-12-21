$(function(){
	var current_page=0,last_page=5;
	// $(".fullpage .page").each(function(i){
	// 	$(this).attr('pageno',i);
	// 	console.log($(this).attr('pageno'));
	// 	last_page=i;
	// });
	var timeout;
	$(".fullpage").on('mousewheel',function(e){
		clearTimeout(timeout);  
		   timeout = setTimeout(function() {
		   	if(e.originalEvent.wheelDelta < 0) {
		   	   if(current_page==last_page) return;
		       $('.page[pageno='+(current_page++)+']').show('slow');
			   $('.page[pageno='+(current_page)+']').hide('slow');
			}
			else
			{
				if(current_page==0) return;
				$('.page[pageno='+(current_page--)+']').show('slow');
			   	$('.page[pageno='+(current_page)+']').hide('slow');
			}
		console.log(current_page);
		   }, 150);
	});

});

