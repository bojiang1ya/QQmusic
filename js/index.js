$(function(){
		// 轮播
	  var mySwiper1 = new Swiper ('#playlist .swiper-container', {
	    direction: 'horizontal', 
	   	slidesPerView: 5,
	    spaceBetween: 30,
	    slidesPerGroup: 5,
	    loop: true,
	    loopFillGroupWithBlank: true,
	   // 如果需要分页器
	    pagination: {
	      el: '#playlist .swiper-pagination',
	      clickable :true
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '#playlist .swiper-button-next',
	      prevEl: '#playlist .swiper-button-prev',
	    },
	  }) 

	  var mySwiper4 = new Swiper ('#newSong .swiper-container', {
	    // direction: 'horizontal', 
      slidesPerView: 3,
      slidesPerColumn: 3,
      spaceBetween: 30,
      slidesPerColumnFill : 'row',
	   // 如果需要分页器
	    pagination: {
	      el: '#newSong .swiper-pagination',
	      clickable :true
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '#newSong .swiper-button-next',
	      prevEl: '#newSong .swiper-button-prev',
	    },
	  }) 

	  var mySwiper2 = new Swiper ('#splendid .swiper-container', {
	    direction: 'horizontal', 
	   	slidesPerView: 2,
	    spaceBetween: 30,
	    slidesPerGroup: 2,
	    speed:600,
	    loop: true,
	    loopFillGroupWithBlank: true,
	   // 如果需要分页器
	    pagination: {
	      el: '#splendid .swiper-pagination',
	      clickable :true
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '#splendid .swiper-button-next',
	      prevEl: '#splendid .swiper-button-prev',
	    },
	  }) 

	  var mySwiper3 = new Swiper ('#mv .swiper-container', {
	    // direction: 'horizontal', 
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 30,
      slidesPerColumnFill : 'row',
	   // 如果需要分页器
	    pagination: {
	      el: '#mv .swiper-pagination',
	      clickable :true
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '#mv .swiper-button-next',
	      prevEl: '#mv .swiper-button-prev',
	    },
	  }) 
  


	function footerlocal(){
		const $bodyWidth = $(document).height()
		const $screenWidth = $(window).height()	
		// console.log($bodyWidth)
		// console.log($screenWidth)
		

		if($bodyWidth<=$screenWidth){
			$('footer').css({
				"position":"absolute",
				"left":"0px",
				"right":"0px",
				"bottom":"0px",
			})
		}else{
			$('footer').css({
				"position":"static"
			})
		}
	}

	$(window).ready(function() {
		footerlocal()
	});
	$(window).resize(function() {
		footerlocal()
	});

})