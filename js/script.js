var		body = document.querySelector("body");
var		width = body.clientWidth;
var		height = body.clientHeight;
var		size = width + height;

// $("body").css({"height": height + "px", "width": width + "px"});

/** IDÉES
* Mettre mon nom + infos en gros au dessus du terminal
* Le terminal n'est que le menu pour naviguer
*/

/***********************************************************
* Animation and appearance of the elements of the menu
* MENU
***********************************************************/

function terminal_function()
{
	if ($(".menu2").length > 0)
	{
		$(".menu2").remove();
		$(".show").append("<div class=\"intro\">\
		<span class=\"name\">Florian Hamel</span></br>\
		<span class=\"desc\">> Freelance Python and Front End developer based in Paris</span>\
		</div>");
		$(".show").append("<div class=\"menu\">");
		$(".menu").append("<img class=\"opening\" src=\"./images/opening.gif\"></img>");
		$(".menu").append("<div class=\"buttons\"></div>");
	}
	$(document).ready(function()
	{
		$(".intro").css({"left": $(".menu").position()["left"] + "px"});
		$(".intro").toggleClass("appear-active");
		$(window).on("resize", function()
		{
			if ($(".intro").length > 0)
				$(".intro").css({"left": $(".menu").position()["left"] + "px"});
		});
		setTimeout(function()
		{
			var time = new Date();
			var time_str = "";
			time_str += ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][time.getDay()] + ' ';
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
			$(".buttons").append("<div class=\"time\"><p>Connection established: " + time_str + "</p>");
			$(".buttons").append("<div class=\"cv1 button\"><div class=\"spin\">></div><span> Resume</span></div>");
			$(".buttons").append("<div class=\"portfolio1 button\"><div class=\"spin\">></div><span> Portfolio</span></div>");
			$(".buttons").append("<div class=\"about1 button\"><div class=\"spin\">></div><span> About</span></div>");
			$(".buttons").append("<div class=\"contact1 button\"><div class=\"spin\">></div><span> Contact</span></div>");
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
		$(".intro").toggleClass("appear-active");
		$(".menu").toggleClass("extend-active");
		setTimeout(function()
		{
			$(".intro").remove();
			$(".menu").remove();
		}, 1000);

		/***********************************************************
		* Considering which of the elements have been clicked
		* GENERATE ELEMS 
		***********************************************************/
		let elem = $(this).attr("class").split(" ")[0];
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
				/**
				* I don't fucking know
				*/
			}
			if (elem == 'about1')
			{
				/**
				* A div comes from left with border on top and bot only
				* and leaves going right.
				* Dark background I presume
				*/
			}
			if (elem == 'contact1')
			{
				/**
				* Form ?
				* Linkedin, Github, Mail
				*/
			}
		}, 1010);

		/***********************************************************
		* After the page related to the element has been loaded
		* a new mini menu appears
		* DROP_MENU
		***********************************************************/
		$(".show").append("<div class=\"drop_menu drop\"></div>");
		$(".drop_menu").append("<div class=\"arrow drop\"><span class=\"drop\">></span></div>")
		$(".drop_menu").append("<div class=\"cv2 button drop\"><div class=\"spin\"><span class=\"drop\">></span></div><span class=\"drop\"> Resume</span></div>");
		$(".drop_menu").append("<div class=\"portfolio2 button drop\"><div class=\"spin\"><span class=\"drop\">></span></div><span class=\"drop\"> Portfolio</span></div>");
		$(".drop_menu").append("<div class=\"about2 button drop\"><div class=\"spin\"><span class=\"drop\">></span></div><span class=\"drop\"> About</span></div>");
		$(".drop_menu").append("<div class=\"contact2 button drop\"><div class=\"spin\"><span class=\"drop\">></span></div><span class=\"drop\"> Contact</span></div>");
		$(".drop_menu").append("<div class=\"to_menu button drop\"><div class=\"spin\"><span class=\"drop\">></span></div><span class=\"drop\"> Menu</span></div>");
		
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
			if ($(this).hasClass("button"))
			{
				$(this).toggleClass("whitenisation");
				$(this).find(".spin").toggleClass("spin-active");
			}
		});

		/***********************************************************
		* If a button on the drop menu is clicked
		* .CLICK() DROP_MENU
		***********************************************************/
		
		$(".drop_menu").on("click", ".button", function()
		{
			let elem = $(this).attr("class").split(" ")[0];
			if (elem == "to_menu")
			{
				$(".show").toggleClass("one-sec").toggleClass("hiden-active");
				setTimeout(function()
				{
					$(".show").children().remove();
					$(".show").append("<div class=\"menu2 half-sec\"></div>");
					$(".show").toggleClass("one-sec").toggleClass("hiden-active")
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