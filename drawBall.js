function drawBall(num) {
	var onMouse = 0;


	var ball = new Array(num);
	for (var i=0; i<num; i++) {
		ball[i] = Ball.createNew();
	}


	function move(obj) {
		context.clearRect(0,0,canvas.width,canvas.height)
		for (var i=0; i<obj.length; i++) {
			obj[i].draw();
			if (obj[i].x + obj[i].r > canvas.width && obj[i].vx > 0) {
				obj[i].vx *= -1
			} else if (obj[i].x -obj[i].r < 0 && obj[i].vx < 0) {
				obj[i].vx *= -1;
			}
			if (obj[i].y + obj[i].r > canvas.height && obj[i].vy > 0) {
				obj[i].vy *= -1
			} else if (obj[i].y -obj[i].r < 0 && obj[i].vy < 0) {
				obj[i].vy *= -1;
			}
			obj[i].x+=obj[i].vx;
			obj[i].y+=obj[i].vy;
		}


		function mouse() {
			for (var i=0; i<obj.length; i++) {
				obj[i].color = getRandColor();
				if (getRandom(0, 1) === 1 && obj[i].r > MOUSERADIUS) {
					obj[i].r -= MOUSERADIUS;
				} else {
					if (obj[i].r >= MAXRADIUS) {
						obj[i].r -= MOUSERADIUS;
					} else {
						obj[i].r += MOUSERADIUS;
					}
				}
			}
		}


		canvas.onmousedown = function() {
			onMouse = 1;
		}
		canvas.onmouseup = function() {
			onMouse = 0;
		}
		if (onMouse === 1) {
			mouse();
		}


		requestAnimationFrame(move.bind(this, obj));
	}
	move(ball);
}
