var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

var symbols = ["abcdefghigklmnopqrstuvwxyz", "ABCDEFGHIGKLMNOPQRSTUVWXYZ", "0123456789"];
var randomArray = [];
var length = prompt("Введите длину строки:", 8);

for (var i = 0; i < parseInt(length, 10) ; i++) {
	randomArray.push(pickRandomWord(pickRandomWord(symbols)));
};
randomArray.join("");