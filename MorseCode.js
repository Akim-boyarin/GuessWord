// 111 Code and decode by Morse Code

class MorseCode {
    constructor() {
        this.valuesToCode = {
            'a': ".-",
            'b': "-...",
            'c': "-.-.",
            'd': "-..",
            'e': ".",
            'f': "..-.",
            'g': "--.",
            'h': "....",
            'i': "..",
            'j': ".---",
            'k': "-.-",
            'l': ".-..",
            'm': "--",
            'n': "-.",
            'o': "---",
            'p': ".--.",
            'q': "--.-",
            'r': ".-.",
            's': "...",
            't': "-",
            'u': "..-",
            'v': "...-",
            'w': ".--",
            'x': "-..-",
            'y': "-.--",
            'z': "--..",
            'а': ".-",
            'б': "-...",
            'в': ".--",
            'г': "--.",
            'д': "-..",
            'ё': ".",
            'е': ".",
            'ж': "...-",
            'з': "--..",
            'и': "..",
            'й': ".---",
            'к': "-.-",
            'л': ".-..",
            'м': "--",
            'н': "-.",
            'о': "---",
            'п': ".--.",
            'р': ".-.",
            'с': "...",
            'т': "-",
            'у': "..-",
            'ф': "..-.",
            'х': "....",
            'ц': "-.-.",
            'ч': "---.",
            'ш': "----",
            'щ': "--.-",
            'ъ': "--.--",
            'ы': "-.--",
            'ь': "-..-",
            'э': "..-..",
            'ю': "..--",
            'я': ".-.-",
            '1': ".----",
            '2': "..---",
            '3': "...--",
            '4': "....-",
            '5': ".....",
            '6': "-....",
            '7': "--...",
            '8': "---..",
            '9': "----.",
            '0': ".....",
            '.': "......",
            ',': ".-.-.-",
            '?': "..--..",
            ':': "---...",
            ';': "-.-.-",
            '\'': ".----.",
            '(': "-.--.-",
            ')': "-.--.-",
            '=': "-...-",
            '+': ".-.-.",
            '-': "-....-",
            '/': "-..-.",
            '*': ".-..-.",
            '$': "...-..-",
        };
        this.valuesToDecode = {};

        this.#makeValuesToDecode();
    }

    #makeValuesToDecode() {
        let comboValuesList = Object.entries(this.valuesToCode);

        for (let i = 0; i < comboValuesList.length; i++) {
            let [myMessage, morseMessage] = comboValuesList[i];
            this.valuesToDecode[morseMessage] = myMessage;
        }
    }
    // code
    code(message) {
        let messageWithoutCapital = message.toLowerCase();
        let morseMessage = "";

        let wordsList = messageWithoutCapital.split(" ");
        
        for (let i = 0; i < wordsList.length; i++) {
            let morseWord = this.#convertWordToCode(wordsList[i]);
            let morseSpace = "   ";
            
            morseMessage += morseWord;
            if (i !== (wordsList.length - 1)) morseMessage += morseSpace;
        }

        return morseMessage;
    }
    #convertWordToCode(word) {
        let morseWord = "";

        for (let i = 0; i < word.length; i++) {
            let morseValue = this.valuesToCode[word[i]];
            let morseSpace = " ";

            morseWord += morseValue;
            if (i !== (word.length - 1)) morseWord += morseSpace;
        }

        return morseWord;
    }
    // decode
    decode(message) {
        let wordsSeparator = "   ";
        let usualMessage = "";

        let wordsList = message.split(wordsSeparator);

        for (let i = 0; i < wordsList.length; i++) {
            let usualWord = this.#convertWordToDecode(wordsList[i]);
            let space = " ";

            usualMessage += usualWord;
            if (i !== (wordsList.length - 1)) usualMessage += space;
        }

        return usualMessage;
    }
    #convertWordToDecode(morseWord) {
        let morseLettersSeparator = " ";
        let morseLetters = morseWord.split(morseLettersSeparator);
        let usualWord = "";

        for (let i = 0; i < morseLetters.length; i++) {
            let usualLetter = this.valuesToDecode[morseLetters[i]];
            usualWord += usualLetter;
        }

        return usualWord;
    }
}

const morseCode = new MorseCode();

let message = "сумма квадратов катетов равна квадрату гипотенузы";
console.log('message:', message);

let morseMessage = morseCode.code(message);

let returnedMessage = morseCode.decode(morseMessage);
console.log('returnedMessage:', returnedMessage);
