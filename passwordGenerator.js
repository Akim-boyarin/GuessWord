let symbols = "abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ0123456789".split("");
let randomSymbols = [];
let length = 8;

for (let i = 0; i < length; i++) {
	randomSymbols.push(pickRandomSymbol(symbols));
};

let password = randomSymbols.join("");
console.log("Новый пароль: " + password);


function pickRandomSymbol(differentSymbols) {
    return differentSymbols[Math.floor(Math.random() * differentSymbols.length)];
};