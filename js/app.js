$(function(){


	/*Fixed Header*/
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);
	
	$(window).on("scroll resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);

	});

	function checkScroll(){
		if (scrollPos > introH ) {
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	}

	

	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 1000);
	});



	/*navToggle*/

	$("#navToggle").on("click",function(event){
		event.preventDefault();

		nav.toggleClass("show");

	});



	/* Reviews https://kenwheeler.github.io/slick/*/
	let slider = $("#reviewsSlider");

	slider.slick({
  		infinite: false, //скролиться будет бесконечно
  		slidesToShow: 1, //сколько мы хотим показывать слайдов
  		slidesToScroll: 1, // сколько слайдов прокручивается
  		fade: true, //затемнение отзывов при прокрутке
  		arrows: false, //вспомогательные кнопки без стилизации
  		dots:true //точки
	});





});



