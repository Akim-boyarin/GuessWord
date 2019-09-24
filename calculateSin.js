console.log(calculateSin(30));

function calculateSin (arg) { // аргумент в градусах
	if (arg / 360 >= 1) {
		arg -= Math.floor(arg / 360) * 360;
	}
	var argRad = arg * Math.PI / 180;
	var sin = 0;
	var sum = 120;
	for (var i = 0; i <= sum; i++) {
		sin += (Math.pow(-1, i) * Math.pow(argRad, (2 * i + 1))) / calculateFactorial(2 * i + 1);
	}
	return sin;
}

function calculateFactorial(arg) {
	let result = 1;
	for (let i = 1; i <= arg; i++) {
		result *= i;
	}
	return result;
}