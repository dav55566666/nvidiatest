// Для добавления функционала используем классы с префиксом js, стилизовать по этим классам нельзя
var menu = 0;
$(".menubtnjs").click(function(){
	$(".menubtnjs").toggleClass("openmenubtn_active");
	if($(".menubtnjs").hasClass("openmenubtn_active")){
		$(".menubtnjs").addClass("openmenubtn_active");
		$(".header__mobile").css("width","100%");
		$("body").css("height","100vh");
		$("body").css("overflow","hidden");
	}else{
		$(".menubtnjs").removeClass("openmenubtn_active");
		$(".header__mobile").css("width","0");
		$("body").css("height","auto");
		$("body").css("overflow","auto");
	}
})
$(".clousbtnjs")
$(".callbackmodal_js")
$(".paybtn_js").click(function(event){
	$(".callbackmodal_js").css("display","flex")
	event.stopPropagation();
	$(".clousbtnjs, body").click(function(){
		$(".callbackmodal_js").hide()
	})
})
$(".callbackcont_js").click(function(event){
	event.stopPropagation();
})
