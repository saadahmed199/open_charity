
$(document).ready(function(){
  $('.clients').slick({
	  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 3000,
   
  });
  
   $('.blogs-slider').slick({
	  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
   
  });
  
 
  
});

	
	
	