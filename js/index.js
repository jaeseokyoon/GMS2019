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

//모달팝업 start

;(function($) {
    $(function() {
				$('#myBtn0').bind('click', function(e) {
						e.preventDefault();
						$('#myModal0').bPopup({
							follow: [false, false]
						});
				});
        $('#myBtn1').bind('click', function(e) {
            e.preventDefault();
            $('#myModal1').bPopup({
              follow: [false, false]
            });
        });
				$('#defaultBtn0').bind('click', function(e) {
            e.preventDefault();
            $('#defaultModal0').bPopup({
              follow: [false, false]
            });
        });
		});
})(jQuery);
// 팝업 end

//마이메뉴 팝업 start
	$(document).ready(function(){
			// Get the modal
			 var modal = document.getElementById('myModal0');

			 // Get the button that opens the modal
			 var btn = document.getElementById("myBtn0");

			 // Get the <span> element that closes the modal
			 var span = document.getElementsByClassName("close0_1")[0];

			 // When the user clicks on the button, open the modal
			 btn.onclick = function() {
					 modal.style.display = "block";
			 }

			 // When the user clicks on <span> (x), close the modal
			 span.onclick = function() {
					 modal.style.display = "none";
			 }
			 // When the user clicks anywhere outside of the modal, close it
			 window.onclick = function(event) {
					 if (event.target == modal) {
							 modal.style.display = "none";
					 }
			 }
	});
//마이메뉴 팝업 end


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
