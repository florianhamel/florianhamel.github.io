// $(".button").click(function()
// {
// 	$('#menu').toggleClass('transform-active');
// 	console.log('test');
// });
var		width = window.innerWidth + 'px';
var		height = window.innerHeight + 'px';
var		size = width + " " + height

$(".button").click(function() {
	$(".transform").toggleClass("transform-active");
	$(".transform-active").css({"height": height, "width": width, "background-size": size});
	$(".hiden").toggleClass("hiden-active")
  });