var		canvas = document.querySelector("canvas");
var		ctx = canvas.getContext("2d");
var		body = document.querySelector("body");
var		width = canvas.width = body.clientWidth
var		height = canvas.height = body.clientWidth;
var		nb_stars = 50;

class	Star
{
	constructor(color, radius)
	{
		this.x = 0;
		this.y = 0;
		this.random_xy();
		this.speedX = 0;
		this.speedY = 0;
		this.random_velxy();
		this.color_arc = "rgba(255, 255, 255, 0.7)";
		// this.random_color_arc();
		this.color_lines = "rgb(255, 255, 255, ";
		this.radius = 1;
		// this.random_radius();
	}

	draw()
	{
		ctx.beginPath();
		ctx.fillStyle = this.color_arc;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
	}

	draw_lines(stars)
	{
		// this.random_color_lines();
		for (let i = 0; i < nb_stars; i++)
		{
			var len = Math.sqrt(Math.pow(this.x - stars[i].x, 2) + Math.pow(this.y - stars[i].y, 2));
			if (len < 200)
			{
				var opacity = 1 - ((1 / 201) * (len + 1));
				ctx.beginPath();
				ctx.strokeStyle = this.color_lines + opacity + ')';
				ctx.moveTo(this.x, this.y);
				ctx.lineTo(stars[i].x, stars[i].y);
				ctx.stroke();
			}
		}
	}
	
	move()
	{
		this.x += this.speedX;
		this.y += this.speedY;
	}

	check()
	{
		if (this.x + this.speedX < 0 || this.x + this.speedX > width)
			return (-1);
		if (this.y + this.speedY < 0 || this.y + this.speedY > height)
			return (-1);
		return (0);
	}

	random_xy()
	{
		var rand = Math.random();

		if (rand < 0.25)
		{
			this.x = 0;
			this.y = Math.floor(Math.random() * height);
		}
		else if (0.25 <= rand && rand < 0.5)
		{
			this.x = width;
			this.y = Math.floor(Math.random() * height);
		}
		else if (0.5 <= rand && rand < 0.75)
		{
			this.x = Math.floor(Math.random() * width);
			this.y = 0;
		}
		else
		{
			this.x = Math.floor(Math.random() * width);
			this.y = height;
		}
	}

	random_velxy()
	{
		var sign = 1;
		
		if (this.x == 0 && this.y != 0)
		{
			this.speedX = Math.floor(Math.random() * 1.2 + 1);
			if (Math.random() < 0.5)
				sign = -1;
			this.speedY = Math.floor(Math.random() * 1.2 + 1) * sign;
		}
		else if (this.x == width && this.y != 0)
		{
			this.speedX = -Math.floor(Math.random() * 1.2 + 1);
			if (Math.random() < 0.5)
				sign = -1;
			this.speedY = Math.floor(Math.random() * 1.2 + 1) * sign;	
		}
		else if (this.y == 0 && this.x != 0)
		{
			if (Math.random() < 0.5)
				sign = -1;
			this.speedX = Math.floor(Math.random() * 1.2 + 1) * sign;
			this.speedY = Math.floor(Math.random() * 1.2 + 1);	
		}
		else if (this.y == height && this.x != 0)
		{
			if (Math.random() < 0.5)
				sign = -1;
			this.speedX = Math.floor(Math.random() * 1.2 + 1) * sign;
			this.speedY = -Math.floor(Math.random() * 1.2 + 1);
		}
		else if (this.x == 0 && this.y == 0)
		{
			this.speedX = Math.floor(Math.random() * 1.2 + 1);
			this.speedY = Math.floor(Math.random() * 1.2 + 1);
		}
		else if (this.x == width && this.y == 0)
		{
			this.speedX = -Math.floor(Math.random() * 1.2 + 1);
			this.speedY = Math.floor(Math.random() * 1.2 + 1);
		}
		else if (this.y == height && this.x == 0)
		{
			this.speedX = Math.floor(Math.random() * 1.2 + 1);
			this.speedY = -Math.floor(Math.random() * 1.2 + 1);
		}
	}

	random_color_arc()
	{
		this.color_arc = 'rgba(' + Math.floor(Math.random() * 255) + ',' +
		Math.floor(Math.random() * 255) + ',' +
		Math.floor(Math.random() * 255) + ',' + '0.7)';
	}

	random_color_lines()
	{
		this.color_lines = 'rgba(' + Math.floor(Math.random() * 255) + ',' +
		Math.floor(Math.random() * 255) + ',' +
		Math.floor(Math.random() * 255) + ',';
	}

	random_radius()
	{
		this.radius = Math.floor(Math.random() * 4 + 1);
	}
}

var stars = [];
for (let i = 0; i < nb_stars; i++)
	stars.push(new Star());

var grad  = ctx.createLinearGradient(0, 0, width, height);
grad.addColorStop(0, "rgba(242, 175, 242, 1)");
// grad.addColorStop(0.5, "rgba(0, 194, 0, 0.9");
grad.addColorStop(0.7, "rgba(242, 242, 175, 1)")
function loop()
{
	width = canvas.width = window.innerWidth;
	height = canvas.height = window.innerHeight;
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, width, height);
	for (let i = 0; i < nb_stars; i++)
	{
		stars[i].draw();
		stars[i].draw_lines(stars);
		stars[i].move();
		if (stars[i].check() == -1)
		{
			stars.splice(i, 1);
			stars.push(new Star());
		}
	}
	requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

/** 
 * IDÉES
 * Faire partir les constellations depuis la position de la souris ?
 * Mettre en place l'idée ci-dessus à un autre motif
 * 
 * Slow les constellations avec un setTimeout()
 **/