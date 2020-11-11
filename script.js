var		canvas = document.querySelector('canvas');
var		ctx = canvas.getContext('2d');
var		width = canvas.width = window.innerWidth;
var		height = canvas.height = window.innerHeight;
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
		this.color = 'rgba(255, 255, 255, 0.7)';
		this.random_color();
		this.radius = 1;
		// this.random_radius();
	}

	draw()
	{
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
	}

	draw_lines(stars)
	{
		for (let i = 0; i < nb_stars; i++)
		{
			var len = Math.sqrt(Math.pow(this.x - stars[i].x, 2) + Math.pow(this.y - stars[i].y, 2));
			if (len < 200)
			{
				ctx.beginPath();
				var opacity = 0.3 - ((0.3 / 201) * (len + 1));
				ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
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
			this.speedX = Math.floor(Math.random() * 3 + 1);
			if (Math.random() < 0.5)
				sign = -1;
			this.speedY = Math.floor(Math.random() * 3 + 1) * sign;
		}
		else if (this.x == width && this.y != 0)
		{
			this.speedX = -Math.floor(Math.random() * 3 + 1);
			if (Math.random() < 0.5)
				sign = -1;
			this.speedY = Math.floor(Math.random() * 3 + 1) * sign;	
		}
		else if (this.y == 0 && this.x != 0)
		{
			if (Math.random() < 0.5)
				sign = -1;
			this.speedX = Math.floor(Math.random() * 3 + 1) * sign;
			this.speedY = Math.floor(Math.random() * 3 + 1);	
		}
		else if (this.y == height && this.x != 0)
		{
			if (Math.random() < 0.5)
				sign = -1;
			this.speedX = Math.floor(Math.random() * 3 + 1) * sign;
			this.speedY = -Math.floor(Math.random() * 3 + 1);
		}
		else if (this.x == 0 && this.y == 0)
		{
			this.speedX = Math.floor(Math.random() * 3 + 1);
			this.speedY = Math.floor(Math.random() * 3 + 1);
		}
		else if (this.x == width && this.y == 0)
		{
			this.speedX = -Math.floor(Math.random() * 3 + 1);
			this.speedY = Math.floor(Math.random() * 3 + 1);
		}
		else if (this.y == height && this.x == 0)
		{
			this.speedX = Math.floor(Math.random() * 3 + 1);
			this.speedY = -Math.floor(Math.random() * 3 + 1);
		}
	}

	random_color()
	{
		this.color = 'rgba(' + Math.floor(Math.random() * 255) + ',' +
		Math.floor(Math.random() * 255) + ',' +
		Math.floor(Math.random() * 255) + ',' +
		(Math.random() * (1 - 0.2) + 0.2) + ')';
	}

	random_radius()
	{
		this.radius = Math.floor(Math.random() * 4 + 1);
	}
}

var stars = [];
for (let i = 0; i < nb_stars; i++)
	stars.push(new Star());

function loop()
{
	width = canvas.width = window.innerWidth - 20;
	height = canvas.height = window.innerHeight - 20;
	ctx.fillStyle = 'rgb(42, 42, 42)';
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