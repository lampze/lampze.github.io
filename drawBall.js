function drawBall(num) {
	var ball = new Array(num);
	for (var i=0; i<num; i++) {
		ball[i] = Ball.createNew();
	}
	function move(obj) {
		context.clearRect(0,0,canvas.width,canvas.height)
		for (var i=0; i<obj.length; i++) {
			obj[i].draw();
			if (obj[i].x+obj[i].r > canvas.width || obj[i].x-obj[i].r < 0) {
				obj[i].vx=-obj[i].vx;
			}
			if (obj[i].y+obj[i].r > canvas.height || obj[i].y-obj[i].r < 0) {
				obj[i].vy=-obj[i].vy;
			}
			obj[i].x+=obj[i].vx;
			obj[i].y+=obj[i].vy;
		}
		requestAnimationFrame(move.bind(this, obj));
	}
	move(ball);
}
