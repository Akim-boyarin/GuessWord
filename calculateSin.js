// вычисление синуса угла в градусах

function calculateSin(angle) {
	// преобразовать в аналогичное значение угла, меньшее 360
	if ((angle / 360) >= 1) {
		angle -= Math.floor(angle / 360) * 360;
	}

	// преобразование вычисляемого угла по формулам приведения и определение способа вычисления
	let calculationDataAndParams = determineTheCalculationMethod(angle);

	// перевод вычисляемого значения угла в радианы
	calculationDataAndParams.angleValue = calculationDataAndParams.angleValue * Math.PI / 180;

	let sin = 0;
	let maxIterationValue = 120;
	for (let i = 0; i <= maxIterationValue; i++) {
		if (calculationDataAndParams.isSin) {
			// вычисление по ряду синуса
			sin += ((-1) ** i ) * calculationDataAndParams.angleValue ** (2 * i + 1) / getFactorial(2 * i + 1);
		} else {
			// вычисление по ряду косинуса
			sin += ((-1) ** i) * calculationDataAndParams.angleValue ** (2 * i) / getFactorial(2 * i);
		}
	}

	if (!calculationDataAndParams.isPositiveSign) sin *= -1;

	return sin;
}

// вспомогательные функции

function determineTheCalculationMethod(angle) {
	let data = {};

	if (angle >= 270) {
		data.angleValue = angle - 270;
		data.isSin = false;
		data.isPositiveSign = false;
	} else if (angle >= 180) {
		data.angleValue = angle - 180;
		data.isSin = true;
		data.isPositiveSign = false;
	} else if (angle >= 90) {
		data.angleValue = angle - 90;
		data.isSin = false;
		data.isPositiveSign = true;
	} else {
		data.angleValue = angle;
		data.isSin = true;
		data.isPositiveSign = true;
	}

	return data;
}


function getFactorial(arg) {
	let result = 1;

	for (let i = 1; i <= arg; i++) {
		result *= i;
	}

	return result;
}

