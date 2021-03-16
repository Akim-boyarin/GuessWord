// Функции по нахождению n-ного члена последовательности Фибоначчи.
// Рассматривается базовая последовательность, т.е. только положительные члены.
// n - текущий член последовательности.

// Цикл
function getFibMember(n) {
    if (n < 1 || (n !== Math.floor(n))) return;

    let firstNum = 1;
    let secondNum = 1;

    for (let i = 2; i < n; i++) {
        let sum = firstNum + secondNum;
        
        firstNum = secondNum;
        secondNum = sum;
    }

    return secondNum;
}


// Формула Бине
function getFibMember(n) {
    if (n < 1 || (n !== Math.floor(n))) return;

    const phi = (1 + (5 ** 0.5)) / 2;

    let memberValue = ((phi ** n) - ((-phi) ** (-n)) ) / (2 * phi - 1);

    return +memberValue.toFixed(0);
}

// Рекурсия:

// 1. Базовый способ
function getFibMember(n) {
    if (n < 1 || (n !== Math.floor(n))) return;

    return (n <= 2) ? 1 : getFibMember(n - 1) + getFibMember(n - 2);
}

// 2. Выдача текущего и следующего членов за один вызов
function getFibMember(n) {
    return (n >= 1 && n === Math.floor(n)) ? getCurrentAndNextMembers(n)[0] : undefined;

    function getCurrentAndNextMembers(n) {
        if (n === 1) {
            return [1, 1];
        } else {
            let [current, next] = getCurrentAndNextMembers(n - 1);
            
            return [next, current + next];
        }
    }
}

// 3. По формуле через предыдущий член
function getFibMember(n) {
    if (n < 1 || (n !== Math.floor(n))) return;

    if (n === 1) {
        return 1;
    } else {
        let prevoiusMember = getFibMember(n - 1);
        let currentMember = ( prevoiusMember + ( ( 5 * (prevoiusMember ** 2) + 4 * ( (-1) ** (n - 1)) ) ** 0.5 ) ) / 2;
        
        return currentMember;
    }
}

