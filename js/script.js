var		body = document.querySelector("body");
var		width = body.clientWidth;
var		height = body.clientHeight;
var		size = width + height;

$("body").css({"height": height + "px", "width": width + "px"});

/***********************************************************
 * Animation and appearance of the elements of the menu
 * MENU
***********************************************************/

function terminal_function()
{
	if ($(".menu2").length > 0)
	{
		$(".menu2").remove();
		$(".show").append("<div class=\"menu\">");
		$(".menu").append("<img class=\"opening\" src=\"./images/opening.gif\"></img>");
		$(".menu").append("<div class=\"buttons\"></div>");
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
			$(".opening").remove();
			$(".buttons").append("<div class=\"info\"><p>Connection established: " + time_str + "</p>\
			<br><br><p>HOST: Florian Hamel</p>\
			<p>I'm a freelance Python and Front End developer based in Paris</p></div>");
			$(".buttons").append("<div class=\"button cv1\"><div class=\"spin\">></div><span> Resume</span></div>");
			$(".buttons").append("<div class=\"button portfolio1\"><div class=\"spin\">></div><span> Portfolio</span></div>");
			$(".buttons").append("<div class=\"button about1\"><div class=\"spin\">></div><span> About</span></div>");
			$(".buttons").append("<div class=\"button contact1\"><div class=\"spin\">></div><span> Contact</span></div>");
		}, 500);
		setTimeout(function()
		{
			$(".buttons").toggleClass("appear-active");
			$(".button").hover(function()
			{
				$(this).find(".spin").toggleClass("spin-active");
				$(this).toggleClass("whitenisation");
			});
		}, 525);
	});

	/***********************************************************
	 * If an element is clicked
	 * .CLICK() MENU
	***********************************************************/
	$(".buttons").on("click", ".button", function()
	{
		$(".buttons").toggleClass("hiden-active");
		$(".menu").toggleClass("extend-active");
		setTimeout(function()
		{
			$(".buttons").remove();
		}, 400);
		setTimeout(function()
		{
			$(".menu").remove();
		}, 1000);

		/***********************************************************
			Considering which of the elements have been clicked
			GENERATE ELEMS 
		***********************************************************/
		var elem = $(this).attr("class").split(" ").pop();
		setTimeout(function()
		{
			if (elem == 'cv1')
			{
				let perc_img = (height - 30) / 1753;
				let	height_cv = height - 30;
				let width_cv = Math.floor(perc_img * 1240);
				$(".show").append("<embed class=\"cv_png one-sec\" src=\"./documents/florian_hamel_en.pdf#view=Fit\"></div>");
				$(".cv_png").css({"height": height_cv + "px", "width": width_cv + "px",
				"background-size": width_cv + "px" + ' ' + height_cv + "px",
				"background-image": "URL(\"./documents/florian_hamel_en.png\")"});
				setTimeout(function()
				{
					$(".cv_png").toggleClass("appear-active");
				}, 100);
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
		}, 1010);

		/***********************************************************
			After the page related to the element has been loaded
			a new mini menu appears
			DROP_MENU
		***********************************************************/
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

		/***********************************************************
		 * If the mouse is over the mini terminal
		 * a drop menu appears
		 * .HOVER() DROP_MENU
		************************************************************/
		$(".drop").hover(function()
		{
			$(".arrow").toggleClass("arrow-rotate");
			$(".drop_menu").toggleClass("drop-active");
			$(".button").toggleClass("drop-button-active");
		});

		/***********************************************************
		 * If a button on the drop menu is clicked
		 * .CLICK() DROP_MENU
		***********************************************************/
		$(".drop_menu").on("click", ".button", function()
		{
			if ($(this).attr("class").split(" ")[0] == "to_menu")
			{
				$(".show").find(".drop").toggleClass(["drop", "one-sec"]);
				$(".show").find(".one-sec").toggleClass("hiden-active");
				$(".show").find(".appear-active").toggleClass("appear-active");
				setTimeout(function()
				{
					$(".show").children().remove();
					$(".show").append("<div class=\"menu2 half-sec\"></div>");
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