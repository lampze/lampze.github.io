function getRandom (min,max,exp) {
	var num = Math.floor(Math.random()*(max-min+1)+min);
	if (num != exp) {
		return num
	} else {
		getRandom(min,max,exp);
	}
}
