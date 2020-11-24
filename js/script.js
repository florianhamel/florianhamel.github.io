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
	$(".extend").toggleClass("extend-active");
	$(".extend-active").css({"height": "5000px", "width": "5000px", "background-size": "5000px 5000px"});
	$(".hiden").toggleClass("hiden-active");
	setTimeout(function()
	{
		$(".hiden").remove();
	}, 400);
	setTimeout(function()
	{
		$(".extend").remove();
	}, 2000);
	var elem = $(this).attr("class").split(" ").pop();
	setTimeout(function()
	{
		if (elem == 'cv')
		{
			$(".show").append("<iframe class=\"cv_pdf\" src=\"../documents/CV_english.pdf\">");
			$(".cv_pdf").css({"height": height});

		}
	}, 1000);
});