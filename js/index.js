


// popup 탭메뉴 start
$(function () {

	$(".tab_content").hide();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function () {
			$("ul.tabs li").removeClass("active").css("color", "#666");
			//$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
			$(this).addClass("active").css("color", "#000");
			$(".tab_content").hide()
			var activeTab = $(this).attr("rel");
			$("#" + activeTab).fadeIn()
	});
});
//popup 탭메뉴 end

// popup 탭메뉴 start
// $(function () {
//
// 	$(".mymenu_select").hover(function () {
// 			$(this).addClass("active");
// 	}, function(){
// 	  $(".mymenu_select").removeClass("active");
// 	});
// });

	// $('p').hover(function() {
	//   $(this).css("color", "red");
	// }, function(){
	//   $(this).css("color", "blue");
	// });


	$(function () {
		$(".mymenu_select").click(
			function () {
				$(this).addClass("active");
			});
	});

	$(function () {
		$(".close").click(
			function(){
			  $(".mymenu_select").removeClass("active");
		});
	});
//popup 탭메뉴 end



/* gnb 웹접근성 탭키 포커스 이동 start*/
$(function(){
var gnb = $('.gnb'); // nav태그 클래스값입력
gnb.find('>ul>li>a')
  .on('mouseenter',function(e){
    e.preventDefault();
    gnb
      .find('>ul>li>.gnb_list2:visible') // 2뎁스 클래스명
      .hide()
      .parent('li')
      .removeClass('on'); // css에서 on이라는 클래스값을 입력
    $(this)
      .next('.gnb_list2:hidden') // 2뎁스 클래스명
      .show()
      .parent('li')
      .addClass('on');
  })
  .focus(function(){
    $(this).mouseover();
  })
  .end()
  .mouseleave(function(){
    gnb
      .find('>ul>li>.gnb_list2') // 2뎁스 클래스명
      .hide()
      .prev('a')
      .parent()
      .siblings()
      .removeClass('on');
  })
    .find('li').last().find('.snb-tit2').focusout(function(){ // 마지막 gnb 2차메뉴에서 마우스를 벗어나을때 사라진다.
          $(this).mouseleave();
      });
});
/* gnb 웹접근성 탭키 포커스 이동 end*/



//모달팝업 start22

;(function($) {
    $(function() {

			for (var i = 0; i <= 10; i++){

				$("#myBtn"+i).data({pop:$("#myModal"+i)});//$(선택요소).data(데이터속성에 사용된 이름)
				// html5에서는 태그에 데이터를 저장할 수 있음.
				//.data메소드를 활용해 "pop"에 ""#myModal"+i"를 만들어 저장

				$('#myBtn'+ i).on("click",function(e){//클릭하면
					e.preventDefault();
					$(this).data("pop").bPopup({//미리 만들어 놓은 "pop"를 오픈
						// follow: [false, false]
					});
					$(".default_cursor").focus();
				});
				$('.b-close0').on("click",function(){
					$('.popupfocus0').focus();
				});
				$('.b-close1').on("click",function(){
					$('.popupfocus1').focus();
				});
				$('.b-close2').on("click",function(){
					$('.popupfocus2').focus();
				});
				$('.close').on("click",function(){
					$('.mymenu_select').focus();
				});
			};
		});
})(jQuery);


// 팝업 end



//페이지 버튼 start
$(".page_num").click(function(){
	$(".page_num").removeClass("active")
	$(this).addClass("active")
});
//페이지 버튼 end

//popup_phone버튼 start
$(".phone_btn").click(function(){
	$(".phone_btn").removeClass("active")
	$(this).addClass("active")
});
//popup_phone버튼 end
