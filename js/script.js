// $(".button").click(function()
// {
// 	$('#menu').toggleClass('transform-active');
// 	console.log('test');
// });
var		width = window.innerWidth + 'px';
var		height = window.innerHeight + 'px';
var		size = width + " " + height;

$("document").ready(function()
{
	setTimeout(function()
	{
		$(".opening").remove();
		$(".buttons").append("<div class=\"info\">You logged in Florian Hamel's Terminal</div>");
		$(".buttons").append("<div class=\"button cv\">> CV</div>");
		$(".buttons").append("<div class=\"button portfolio\">> Portfolio</div>");
		$(".buttons").append("<div class=\"button about\">> About</div>");
		$(".buttons").append("<div class=\"button contact\">> Contact</div>");
	}, 660);
});

$(".buttons").on("click", ".button", function()
{
	$(".transform").toggleClass("transform-active");
	$(".transform-active").css({"height": height, "width": width, "background-size": size});
	$(".hiden").toggleClass("hiden-active");
	setTimeout(function()
	{
		$(".hiden").remove();
	}, 500);
});