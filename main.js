var font = Array("（￣▽￣）", "(⌒▽⌒)", "(･∀･)", "(￣3￣)", "(<_<)", "(>_>)", "（￣へ￣）", "´･ᆺ･`", "(˘ω˘)", "(ㅎ.ㅎ)", "(◉３◉)", "（＝。＝）", "(ーー゛)", "(⊙﹏⊙)", "（´Д`）", "○|￣|_");
var audio = document.getElementById("main-audio");
function chang(arr) {
	setTimeout(function() {
		audio.play();
		document.getElementById("font1").innerHTML=arr[0];
	},400);
	setTimeout(function() {
		audio.play();
		document.getElementById("font2").innerHTML=arr[1];
	},800);
	setTimeout(function() {
		audio.play();
		document.getElementById("font3").innerHTML=arr[2];
	},1200);
	setTimeout(function() {
		audio.play();
		document.getElementById("font4").innerHTML=arr[3];
	},1600);
	setTimeout(function() {
		audio.play();
		document.getElementById("font5").innerHTML=arr[4];
	},2000);
	setTimeout(function() {
		document.getElementById("font1").innerHTML="·";
		document.getElementById("font2").innerHTML="·";
		document.getElementById("font3").innerHTML="·";
		document.getElementById("font4").innerHTML="·";
		document.getElementById("font5").innerHTML="·";
	},3000);
}
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
setInterval(function () {
	chang(font[getRandom(0, font.length)])
}, 4000);
