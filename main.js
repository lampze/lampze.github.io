var MINRADIUS =7;
var MAXRADIUS =50;
var MINSPEED =-8;
var MAXSPEED =8;
var BALLNUM = 60;

var canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var context = canvas.getContext('2d');
window.onload = function() {
	drawBall(BALLNUM);
}
