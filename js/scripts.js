$('#hamburger').click(function(){ 

	$('header nav, #hamburger').toggleClass('open');
    });	


$('.slider').slick({

	autoplay: true,
	autoplayspeed: 10000,
	dots:true,
	dotsClass: 'myDots',
	prevArrow: '<div class="slick-prev"> &#60 </div>',
	nextArrow: '<div class="slick-next"> &#62 </div>',
});

$(document).ready(function() {
    var offset = 100;
    var duration = 1000;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.scrolltop').fadeIn(duration);
        } else {
            $('.scrolltop').fadeOut(duration);
        }
    });
    
    $('.scrolltop').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

if($(".home-page").length){


$("#projects").click(  function(event){
    console.log("test");
   event.preventDefault();
  $('html, body').animate({
    scrollTop: $('#overlay').offset().top
  }, 2000);
  
} );
   
}


