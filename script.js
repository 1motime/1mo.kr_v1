$(document).ready(function(){
	$("#navBtnContainer ul.sub").hide();
	$("#navBtnContainer ul.menu li").click(function(){
		$("ul",this).slideToggle("fast");
	});
});

$('selector').loupe({
  width: 200, // width of magnifier
  height: 150, // height of magnifier
  loupe: 'loupe' // css class for magnifier
});




function animate() {
  document.getElementById("mainText").style.width = "100%";
}


// alert IE
var agent = navigator.userAgent.toLowerCase();

 

if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
alert("인터넷 익스플로러 환경은 지원하지 않습니다. 크롬, 사파리, 파이어폭스 등 모던 브라우저를 이용해주세요.");
}

