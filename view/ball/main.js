var MINRADIUS =7;
var MAXRADIUS =50;
var MINSPEED =-10;
var MAXSPEED =10;
var BALLNUM = 100;
var MOUSERADIUS = 8;

var canvas = document.getElementById('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var context = canvas.getContext('2d');
window.onload = function() {
	drawBall(BALLNUM);
}
