
/*popup 탭메뉴 start*/
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
/*popup 탭메뉴 end*/

/*모달팝업 start*/
/*마이메뉴 팝업 start*/
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
/*마이메뉴 팝업 end*/

/*업무조직정보 팝업 start*/
$(document).ready(function(){
		// Get the modal
		 var modal = document.getElementById('myModal1');

		 // Get the button that opens the modal
		 var btn = document.getElementById("myBtn1");

		 // Get the <span> element that closes the modal
		 var span = document.getElementsByClassName("close1")[0];
		 var span1 = document.getElementsByClassName("close1_1")[0];

		 // When the user clicks on the button, open the modal
		 btn.onclick = function() {
				 modal.style.display = "block";
		 }

		 // When the user clicks on <span> (x), close the modal
		 span.onclick = function() {
				 modal.style.display = "none";
		 }
		 span1.onclick = function() {
				 modal.style.display = "none";
		 }

		 // When the user clicks anywhere outside of the modal, close it
		 window.onclick = function(event) {
				 if (event.target == modal) {
						 modal.style.display = "none";
				 }
		 }
});
/*업무조직정보 팝업 end*/

/*페이지 버튼 start*/
$(".page_num").click(function(){
	$(".page_num").removeClass("active")
	$(this).addClass("active")
});
/*페이지 버튼 end*/

/*popup_phone버튼 start*/
$(".phone_btn").click(function(){
	$(".phone_btn").removeClass("active")
	$(this).addClass("active")
});
/*popup_phone버튼 end*/
