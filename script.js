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




