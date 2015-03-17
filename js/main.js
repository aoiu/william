function zoom(){
	var scale = $(window).width()/1080;
	$("#summary").height(1920*scale);
	//$(".swiper-container").width(1080*scale);
}

$(document).ready(function(){

	zoom();
  /*
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: false,
      effect: "fade" 
    })    
*/
});
