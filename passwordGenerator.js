// генератор паролей регулируемой длины

// исходные символы для составления пароля
let symbols = "";
for (let i = 97; i <= 122; i++) {
    symbols += String.fromCodePoint(i);
}
for (let i = 48; i <= 57; i++) {
    symbols += String.fromCodePoint(i);
}

// генератор
let password = "";
let passwordLength = 8; // регулируемая длина пароля
for (let i = 0; i < passwordLength; i++) {
    let randomSymbol;
    let specialSymbolCondition = (passwordLength >= 15) ? (i === 3 || i === Math.round(passwordLength / 2) || i === (
        passwordLength - 3)) : (i === 3 || i === (passwordLength - 3));
    if (passwordLength > 6 && specialSymbolCondition && coinToss()) {
        randomSymbol = "_";
    } else {
        randomSymbol = pickRandomSymbol(symbols);
    }
    let upperSymbolCondition = (passwordLength < 8) ? coinToss() : true;
    if (!(Math.floor(Math.random() * 100) % 2) && isNaN(randomSymbol) &&
        upperSymbolCondition) {
        randomSymbol = randomSymbol.toUpperCase();
    }

    password += randomSymbol;
}

// выбор случайного элемента строки/массива
function pickRandomSymbol(differentSymbols) {
    return differentSymbols[Math.floor(Math.random() * differentSymbols.length)];
};

// "орёл/решка"
function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}

console.log(password);