// alert IE
var agent = navigator.userAgent.toLowerCase();
if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
alert("인터넷 익스플로러는 지원하지 않습니다. 크롬, 사파리, 파이어폭스 등 모던 브라우저를 사용해주세요.");
}

(function(w, d, a){
	w.__beusablerumclient__ = {
		load : function(src){
			var b = d.createElement("script");
			b.src = src; b.async=true; b.type = "text/javascript";
			d.getElementsByTagName("head")[0].appendChild(b);
		}
	};w.__beusablerumclient__.load(a);
})(window, document, '//rum.beusable.net/script/b180416e142544u804/59bc7bb806');



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




