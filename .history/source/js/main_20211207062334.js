// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя
var menu = 0;
$(".menubtnjs").click(function(){
	if(menu==0){
		$(".menubtnjs").addClass("openmenubtn_active");
		$(".header__mobile").css("width","100%");
		$("body").css("height","100vh");
		$("body").css("overflow","hidden");
		menu=0;
	}else{
		$(".menubtnjs").removeClass("openmenubtn_active");
		$(".header__mobile").css("width","0");
		$("body").css("height","auto");
		$("body").css("overflow","auto");
		menu=1;
	}
})
$(document).ready(function(){

	// $('input[type=tel]')
	// 	.inputmask("8 (999) 999 99 99");


	// $('.js-popup-img')
	// 	.magnificPopup({
	// 		type:'image',
	// 		closeOnContentClick: true,
	// 		fixedContentPos: true,
	// 		mainClass: 'mfp-no-margins mfp-with-zoom',
	// 		image: {
	// 			verticalFit: true
	// 		},
	// 		zoom: {
	// 			enabled: true,
	// 			duration: 300
	// 		}
	// 	});
});
