let cipher = "E.-..- ..... E-..-. E.--.- R--........ ----- R------.... R........-- R--------.. ..... --... R------.... R..-------- ....- E.-..- ....-";
console.log(decodeMorseCode(cipher));

function decodeMorseCode(sourceCipher) {
    let numbersMorse = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----."];
    let numberOfCombinations = 4;
    
    let decodedCipher = sourceCipher.split(" ").map(codeElement => {
        let elList = codeElement.split("");
        if (elList.indexOf("E") === 0) {
            elList.splice(0, 1);
            
            let variableToExchange = elList[0];
            elList[0] = elList[elList.length - 1];
            elList[elList.length - 1] = variableToExchange;
            
            return elList.join("");

        } else if (elList.indexOf("R") === 0) {
            elList.splice(0, 1);
            
            for (let i = 0; i < elList.length; i++) {
                if ((i + 1) % 2 === 0) {
                    let cutElement = elList.splice(i, 1).join("");
                    elList.unshift(cutElement);
                }
            }
            elList.splice(0, (elList.length / 2));

            return elList.join("");

        } else {
            return codeElement;
        }
    });

    let decodedMorseNumbers = decodedCipher.map(codeElement => {
        for (let i = 0; i < numbersMorse.length; i++) {
            if (numbersMorse[i] === codeElement) {
                return i;
            }
        }
    });
    
    let numberOfDigits = decodedMorseNumbers.length;

    let decodedString = "";
    for (let i = 0; i < numberOfCombinations; i++) {
        let fourOfNumbers = decodedMorseNumbers.splice(0, (numberOfDigits / numberOfCombinations)).join(" ");
        decodedString += fourOfNumbers;
        if (i < (numberOfCombinations - 1)) {
            decodedString += "   ";
        }
    }

    return decodedString;
}