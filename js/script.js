var		body = document.querySelector("body");
var		width = body.clientWidth + 'px';
var		height = body.clientHeight + 'px';
var		size = width + " " + height;
/*
	Animation and appearance of the elements of the menu
*/
function terminal_function()
{
	if ($(".menu2").length > 0)
	{
		$(".menu2").remove();
		$(".show").append("<div class=\"menu extend\">");
		$(".menu").append("<img class=\"opening\" src=\"./images/opening.gif\"></img>");
		$(".menu").append("<div class=\"buttons hiden\"></div>");
	}
	$("document").ready(function()
	{
		setTimeout(function()
		{

			var time = new Date();
			var time_str = "";
			time_str += ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][time.getDay() - 1] + ' ';
			time_str += ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][time.getMonth()] + ' ';
			time_str += time.getDate() + ' ';
			if (time.getHours() / 10 >= 1)
				time_str += time.getHours() + ':';
			else
				time_str += '0' + time.getHours() + ':';
			if (time.getMinutes() / 10 >= 1)
				time_str += time.getMinutes() + ':';
			else
				time_str += '0' + time.getMinutes() + ':';
			if (time.getSeconds() / 10 >= 1)
				time_str += time.getSeconds();
			else
				time_str += '0' + time.getSeconds();
			console.log(time_str);
			$(".opening").remove();
			$(".buttons").append("<div class=\"info\"><p>Connection established: " + time_str + "</p>\
			<br><p>~ Florian Hamel</p>\
			<p>I'm a freelance Python and Front End developer based in Paris</p></div>");
			$(".buttons").append("<div class=\"button cv1\">> CV</div>");
			$(".buttons").append("<div class=\"button portfolio1\">> Portfolio</div>");
			$(".buttons").append("<div class=\"button about1\">> About</div>");
			$(".buttons").append("<div class=\"button contact1\">> Contact</div>");
		}, 642);
	});

	/*
		If an element is clicked
	*/
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
		/*
			Considering which of the elements have been clicked
		*/
		var elem = $(this).attr("class").split(" ").pop();
		setTimeout(function()
		{
			if (elem == 'cv1')
			{
				$(".show").append("<iframe class=\"cv_pdf appear\" src=\"./documents/florian_hamel_en.pdf?#view=FitV\" frameborder=\"0\"></iframe>");
				$(".cv_pdf").css({"height": height});
				$(".cv_pdf").on("load", function(){
					$(".appear").toggleClass("appear-active");
				});
			}
			if (elem == 'portfolio1')
			{
				/*
				I don't fucking know
				*/
			}
			if (elem == 'about1')
			{
				/*
				A div comes from left with border on top and bot only
				and leaves going right.
				Dark background I presume
				*/
			}
			if (elem == 'contact1')
			{
				/*
				Form ?
				Linkedin, Github, Mail redirection
				*/
			}
		}, 1000);
		/*
			After the page related to the element has been loaded
			a new mini menu appears
		*/
		$(".show").append("<div class=\"drop_menu drop\"></div>");
		$(".drop_menu").append("<div class=\"arrow drop\"><span class=\"drop\">></span></div>")
		$(".drop_menu").append("<div class=\"cv2 button drop\"><span class=\"drop\">> CV</span></div>");
		$(".drop_menu").append("<div class=\"portfolio2 button drop\"><span class=\"drop\">> Portfolio</span></div>");
		$(".drop_menu").append("<div class=\"about2 button drop\"><span class=\"drop\">> About</span></div>");
		$(".drop_menu").append("<div class=\"contact2 button drop\"><span class=\"drop\">> Contact</span></div>");
		$(".drop_menu").append("<div class=\"to_menu button drop\"><span class=\"drop\">> Menu</span></div>");
		
		setTimeout(function()
		{
			$(".drop_menu").toggleClass("down-active");
		}, 1000);
		/*
		If the mouse is over the mini terminal a drop menu appears
		*/
		$(".drop").hover(function()
		{
			$(".arrow").toggleClass("arrow-rotate");
			$(".drop_menu").toggleClass("drop-active");
			$(".button").toggleClass("drop-button-active");
		});
		$(".drop_menu").on("click", ".button", function()
		{
			if ($(this).attr("class").split(" ")[0] == "to_menu")
			{
				$(".show").find(".drop").toggleClass(["drop", "hiden"]);
				$(".show").find(".hiden").toggleClass("hiden-active");
				$(".show").find(".appear-active").toggleClass("appear-active");
				setTimeout(function()
				{
					$(".show").children().remove();
					$(".show").append("<div class=\"menu2 reduce\"></div>");
				}, 1000);
				setTimeout(function()
				{
					$(".menu2").toggleClass("reduce-active");
				}, 1100);
				setTimeout(function()
				{
					terminal_function();
				}, 1600);
			}
		});
	});
}
terminal_function();