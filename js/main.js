$(document).ready(function () {
	var banner = $('.main-banner');
	banner.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInLeft',
		smartSpeed: 200
	});
	var _video = $('.main_videos');
	_video.owlCarousel({
		loop: true,
		nav: true,
		navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
		items: 1,
		autoplay: true,
		smartSpeed: 200,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	$(window).scroll(function () {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			$('.loading').hide();
			loadData();
		}
	});
	function loadData() {
		var html = '';
		for (i = 0; i < 1; i++) {
			html += "<div class='_item_'> <div class='img'><img src='img/2day/img1.jpg' alt=''></div> <div class='text'> <h4> <a href='#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ......</p><span>Bởi <strong>Amin  </strong>-  <span class='date'>1 giờ trước</span></span> </div> </div>";
		}
		$('.loadnews').append(html);
	}
	$('.lazy').lazy();
	$('.main-trending').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: true,
		autoplay: true,
		smartSpeed: 200,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	$('.main-trending .owl-dot').each(function () {
		$(this).text($(this).index() + 1);
	});
	$('.main-video').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: true,
		autoplay: true,
		smartSpeed: 200,
		margin: 30,
		nav: true,
		navText: ['<i class="arrow-left"><img src="img/2day/svg/left.svg" alt=""></i>', '<i class="arrow-right"><img src="img/2day/svg/right.svg" alt=""></i>'],

	});
	$('.lg-right .search').click(function (e) {
		$('.form-search').show();
	})
	$('.search-close').click(function (e) {
		$('.form-search').hide();
	})
	$('.info-avatar').click(function (e) {
		$('.info-open').toggleClass('active');
	})
	$(window).on('scroll', function () {
		var wtop = $(window).scrollTop();
		if (wtop > 0) {
			$('#header').addClass('sticky-header');
			$("#top").addClass('active');
		} else {
			$("#top").removeClass('active');
			$('#header').removeClass('sticky-header');
		}
	});
	$("a[href='#top']").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});
	$('.open-register').click(function (e) {
		$('.box_login_register_').show();
	});
	$('.close-register').click(function (e) {
		$('.box_login_register_').hide();
	});
	$('.menu-click').click(function(e)
	 {
	 		$('.menu-mobile').toggleClass('active');
	 });
	 
	$('.close_mobile').click(function(e)
	{
			$('.menu-mobile').toggleClass('active');
	});
	$('.menu-mobile .bg-black').click(function(e)
	{
			$('.menu-mobile').toggleClass('active');
	});
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0
});
})