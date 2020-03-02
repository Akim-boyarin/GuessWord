// вычисление синуса угла в градусах через формулу ряда

function calculateSin (arg) { // аргумент в градусах
	if (arg / 360 >= 1) {
		arg -= Math.floor(arg / 360) * 360;
	}
	let argRad = arg * Math.PI / 180; // аргумент в радианах
	let sin = 0;
	let maxIterationValue = 120;
	for (let i = 0; i <= maxIterationValue; i++) {
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

console.log(calculateSin(30));