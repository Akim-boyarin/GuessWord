/* 
    # Преобразование арабских цифр в римские и обратно.
    
    ## Обозначения основных римских цифр:
        I : 1
        V : 5
        X : 10
        L : 50
        C : 100
        D : 500
        M : 1000

    ## Алгоритм
    ### Конвертирование арабских цифр в римские:
        — Для римской записи арабского числа больше 3 используется принцип:
            Берется число в римской записи — основание следующего разряда для исходного или число того же разряда с 
            цифрой разряда 5, и приставляется основание текущего разряда. Т.е.: 
            * X,V: I;
            * C,L: X;
            * M,D: C;
        — Как записывается по-римски число, кратное какому либо основанию разряда (примеры: 10, 20, 50 — разряд 10;
            200, 400, 700 — разряд 100), с различным значением цифры разряда:
            • 0: пустая строка
            • 1 — 3: записывается как повторённое цифру разряда раз основание текущего разряда
            • 4 — 8: записывается число из данного разряда с цифрой разряда 5, к нему приставляется основание данного разряда,
                нужным образом нужное число раз, в зависимости от исходного числа
            • 9: берётся основание следующего разряда от данного, и к нему слева один раз приставляется основание текущего разряда
    
    ### Конвертирование римских цифр в арабские:
        Идея: {
            перебирать римское представление с конца, захватывать символ в текущую строку, смотреть, преобразуется или нет. 
            Закон преобразования: либо чистое, сразу, либо к римскому большому числу приставлено число уровнем разряда меньше, 
            по закону пять (для данного разряда) + спереди-сзади или база следующего разряда + спереди
        }

    
    *** Алгортим работает до числа 3999
*/
class RomanNumerals {
    constructor() {
        this.romanByArabicData = {
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M'
        };
    }

    // # Преобразование из арабской записи в римскую
    toRoman(inputNumber) {
        // ## проверка входящего числа на валидность
        if (!this.#checkInputNumber(inputNumber)) return "";

        // ## разложение числа на отдельные для конвертации
        let separatedDigitsList = this.#decomposeInputNumberToSeparated(inputNumber);

        // ## конвертация их в римские представления
        let romanPresentationsList = separatedDigitsList.map(arabicNumber => this.#convertPrimitiveArabicNumberToRoman(arabicNumber));

        // ## складывние единого числа в римском представлении
        let totalRomanPresentation = romanPresentationsList.join("");

        return totalRomanPresentation;
    }

    // Дополнительные методы
    #checkInputNumber(inputNumber) {
        let isRight = typeof inputNumber === "number" && inputNumber > 0 && inputNumber < 4000 && Number.isInteger(inputNumber);
        return isRight;
    }
    #isInInterval(currentNumber, minValue, maxValue) {
        return currentNumber >= minValue && currentNumber <= maxValue;
    }
    #decomposeInputNumberToSeparated(inputNumber) {
        let separatedNumbersList = [];
        let stringPresentationOfInputNumber = `${inputNumber}`;
        
        let maxZeroesNumber = stringPresentationOfInputNumber.length - 1;
        let currentHeadDigit = 0;
        let currentDecimalPlaceBase = 0;
        let currentSeparatedNumber = 0;

        for (let i = maxZeroesNumber; i >= 0; i--) {
            currentHeadDigit = +stringPresentationOfInputNumber[maxZeroesNumber - i];
            currentDecimalPlaceBase = 10 ** i;
            currentSeparatedNumber = currentHeadDigit * currentDecimalPlaceBase;
            separatedNumbersList.push(currentSeparatedNumber);
        }
        
        return separatedNumbersList;
    }
    #convertPrimitiveArabicNumberToRoman(numberToConvert) {
        let romanPresentationOfNumber = "";

        let stringPresentationOfNumber = `${numberToConvert}`;

        let headDigit = +stringPresentationOfNumber[0];
        let currentDecimalPlaceBase = numberToConvert / headDigit;

        if (headDigit === 0) {
            romanPresentationOfNumber = "";
        } else if (this.#isInInterval(headDigit, 1, 3)) {
            romanPresentationOfNumber = this.romanByArabicData[`${currentDecimalPlaceBase}`].repeat(headDigit);
        } else if (this.#isInInterval(headDigit, 4, 8)) {
            romanPresentationOfNumber = this.#convertNumberWithFiveComponent(headDigit, currentDecimalPlaceBase);
        } else if (headDigit === 9) {
            let nextDecimalPlaceBase = currentDecimalPlaceBase * 10;
            
            let romanCurrentDecimalPlaceBaseSymbol = this.romanByArabicData[`${currentDecimalPlaceBase}`];
            let romanNextDecimalPlaceBaseSymbol = this.romanByArabicData[`${nextDecimalPlaceBase}`];

            romanPresentationOfNumber = romanCurrentDecimalPlaceBaseSymbol + romanNextDecimalPlaceBaseSymbol;
        }

        return romanPresentationOfNumber;
    }
    #convertNumberWithFiveComponent(headDigit, currentDecimalPlaceBase) {
        let romanPresentationOfNumber = "";
        const FIVE_NUMBER = 5;

        let romanFiveNumberSymbol = this.romanByArabicData[`${FIVE_NUMBER * currentDecimalPlaceBase}`];
        let romanDecimalPlaceBaseSymbol = this.romanByArabicData[`${currentDecimalPlaceBase}`];
        
        if (headDigit < FIVE_NUMBER) {
            romanPresentationOfNumber = romanDecimalPlaceBaseSymbol + romanFiveNumberSymbol;
        } else if (headDigit === FIVE_NUMBER) {
            romanPresentationOfNumber = romanFiveNumberSymbol;
        } else if (headDigit > FIVE_NUMBER) {
            romanPresentationOfNumber = romanFiveNumberSymbol + romanDecimalPlaceBaseSymbol.repeat(headDigit - FIVE_NUMBER);
        }

        return romanPresentationOfNumber;
    }
}

let romanNumerals = new RomanNumerals();
console.log(romanNumerals.toRoman(2008));
