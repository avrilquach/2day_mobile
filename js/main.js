$(document).ready(function() {
	$('.lazy').lazy();
	 $('.close_mobile').click(function(e)
	 {
	 		$('.menu-mobile').toggleClass('active');
	 		$('body').toggleClass('active');
	 });
	 $('.menu-click').click(function(e)
	 {
	 		$('.menu-mobile').toggleClass('active');
	 		$('body').toggleClass('active');
	 });
	 $('.menu-mobile ul li').click(function(e){
	 		$(this).toggleClass('current');
	 });
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0
    });
	 var owl = $('#big');
		owl.owlCarousel({
		  autoplay: 2000,
		  items:1,
		  loop: true,
		  onInitialized  : counter,
		  onTranslated : counter,
		  dots: false
		});
	 function counter(event) {
	   var element   = event.target;        
	    var items     = event.item.count;   
	    var item      = event.item.index + 1;     
	  if(item > items) {
	    item = item - items
	  }
	  $('#counter').html(""+item+"/"+items)
	}
	$(".info_detailp .ctent").slice(0, 1).css("display","flex");
	$('.read-more a').click(function(e){
		var _this = $(this).parent().parent().parent().parent();
		_this.find(".ctent:hidden").slice(0, 1).css("display","flex");
		 $('html,body').animate({
            scrollTop: $(this).offset().top-(315)
        }, 1500);
	});
	$('.choose_ite a').click(function(e){
		var _this = $(this).parent();
		_this.find('.choose_ite_box').toggleClass('active');
	});
	$('.filter ul li').click(function(e){
		$('.loc-sp').toggleClass('active');
		$('body').toggleClass('active');
	});
	$('.close_locsp').click(function(e){
		$('.loc-sp').toggleClass('active');
		$('body').toggleClass('active');
	});
	$('.loc-sp ul li').click(function(e){
		$('.loc-sp ul li').removeClass('current');
		$(this).addClass('current');
	});
	$('.click').click(function(e){
		$(this).parent().find('.box').toggleClass('current');
	});
	$('.account-info .item h4').click(function(e)
	{
		$(this).parent().find('ul').toggleClass('current');
		$(this).parent().find('h4').toggleClass('current');
	});
	$('.search a').click(function(e){
		$('.form-box-search').show();
	});
	$('.form-box-search a.cancelSearch').click(function(e){
		$('.form-box-search').hide();
	});
	var banner = $('.main-banner');
	banner.owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			nav: false,
			autoplay: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeInLeft',
			smartSpeed: 200
	});
});