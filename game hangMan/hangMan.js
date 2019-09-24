var words = [
	"словарь", 
	"чашка", 
	"великолепный", 
	"мудрость", 
	"дисциплина",
	"программа",
	"макака",
	"прекрасный",
	"оладушек",
	"словарь",
	"масло",
	"звание",
	"человек",
	"время",
	"глаз",
	"случай",
	"развитие",
	"государство",
	"книга",
	"школа",
	"миллион",
	"задница",
	"бульон",
	"колобок"
];
var pickWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};
var setupAnswerArray = function (string) {
	var array = [];
	for (var i = 0; i < string.length; i++) {
		array.push("_");
	};
	return array;
};
var getAttempts = function (string) {
	letterAttemptsNumber = 8;
	return string.length * letterAttemptsNumber;
};
var showPlayerProgress = function (array, num) {
	alert (array.join(" ") + "\n\nПопыток: " + num);
};
var getGuess = function () {
	var presumptiveLetter = prompt("Введите предполагаемую букву");
	return presumptiveLetter;
};
var checkInRussianLanguage = function (string) {
	var letterString = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
	for (var i = 0; i < letterString.length; i++) {
		if (string === letterString[i]) {
			return true;
		};
	}
	return false;
};
var updateGameState = function (presumptiveLetter, string, array) {
	var check = 0;
	for (var i = 0; i < string.length; i++) {
		if (presumptiveLetter === string[i] && array[i] === "_") {
			array[i] = presumptiveLetter;
			check++;
		}
	}
	return check;
};
var showAnswerAndCongratulatePlayer = function (array, string, num) {
	if (array.join("") === string) {
		alert (array.join(" "));
		alert ("Было загадано слово - " + string + ". " + "На отгадывание понадобилось " + (string.length * 8 - num) + " попыток.");
		alert ("Слово отгадано, Вы молодец!");
	} else {
		alert ("Конец игры.");
	}
};
// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
// attempts: количество попыток угадывания
var attempts = getAttempts(word);
while (remainingLetters > 0 && attempts > 0) {
	showPlayerProgress(answerArray, attempts);
	// guess: ответ игрока
	var guess = getGuess();
	// checkRu: проверка ответа на количество букв (не более и не менее 1), а также на принадлежность русскому языку
	var checkRu = checkInRussianLanguage(guess);
	if (guess === null) {
		break;
	} else if (!checkRu) {
		alert("Пожалуйста, введите одиночную букву на русском языке");
	} else if (checkRu) {
	// correctGuesses: количество открытых букв
	var correctGuesses = updateGameState(guess, word, answerArray);
	remainingLetters -= correctGuesses;
	}
	// каждая попытка соответствует каждой угаданной букве
	if (correctGuesses > 1) {
		attempts -= correctGuesses;
	} else {
		attempts--;
	};
};
// результаты и поздравления
showAnswerAndCongratulatePlayer(answerArray, word, attempts);
