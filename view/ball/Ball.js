var Ball = {
	createNew: function() {
		var ball = {
			x: getRandom(MAXRADIUS, canvas.width-MAXRADIUS),
			y: getRandom(MAXRADIUS, canvas.height-MAXRADIUS),
			vx: getRandom(MINSPEED,MAXSPEED,0),
			vy: getRandom(MINSPEED,MAXSPEED,0),
			r: getRandom(MINRADIUS, MAXRADIUS),
			color: getRandColor(),
			draw: function() {
				context.beginPath();
				context.arc(this.x,this.y,this.r,0,Math.PI*2);
				context.fillStyle = this.color;
				context.fill();
			}
		}
		return ball
	}
}
