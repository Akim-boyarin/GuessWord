// Универсальный код речей
// Источник: https://tehtab.ru/Guide/Engineers/OfficeLifeStandardsEng/UniversalCode/

function getSpeechByUniversalCode(sentencesNumber) {
    let notWorkCondition = typeof sentencesNumber !== "number" ||
        sentencesNumber !== Math.floor(sentencesNumber) ||
        sentencesNumber < 1;
    if (notWorkCondition) return ""; 

    let speechComponents = [
        [
            "Товарищи!",
            "С другой стороны,",
            "Равным образом,",
            "Не следует, однако, забывать, что",
            "Таким образом,",
            "Повседневная практика показывает, что",
            "Уважаемые коллеги!",
            "Позвольте Вам напомнить, что",
            "Также как",
            "В целом, конечно,",
        ],
        [
            "реализация намеченных плановых заданий", // , а также ...... 
            "рамки и место обучения кадров",
            "постоянный количественный рост и сфера нашей активности",
            "сложившаяся структура организации",
            "новая модель организационной деятельности",
            "дальнейшее развитие различных форм деятельности",
            "перспективное планирование",
            "оптимизация основных целей",
            "экономическая повестка сегоднящнего дня",
            "внедрение современных подходов",
        ],
        [
            "играет важную роль в формировании", 
            "требует от нас анализа",
            "требует определения и уточнения",
            "способствует подготовке и реализации",
            "обеспечивает широкому кругу (специалистов) участие в формировании",
            "позволяет выполнить важные задания по разработке",
            "не дает нам иного выбора, кроме определения",
            "вынуждает нас объективно потребовать",
            "играет определяющее значение для",
            "выявляет срочную потребность",
        ],
        [
            "существенных финансовых и административных условий.", // , что приводит к .....
            "дальнейших направлений развития.",
            "системы массового участия.",
            "позиций, занимаемых участниками в отношении поставленных задач.",
            "новых предложений.",
            "направлений прогрессивного развития.",
            "стандартных подходов.",
            "нестандартных решений.",
            "экономических и неэкономических факторов и перспектив.",
            "инновационных методов управления процессами.",
        ],
    ];

    // генерация четырёхзначных строковых кодов
    let sentencesCodes = [];
    for (let i = 0; i < sentencesNumber; i++) {
        let code;
        if (!i) { // Сделать начало речи всегда с компонента "Товарищи!"
            do {
                code = generateStringCode();
            } while (+code[0]);
        } else {
            let previousCode = sentencesCodes[i - 1];
            let prePreviousCode = (i >= 2) ? sentencesCodes[i - 2] : previousCode;
            do {
                code = generateStringCode();
            } while (isTautology(code, previousCode, 2) || isTautology(code, prePreviousCode, 3));
        }
        
        sentencesCodes.push(code);
    }

    // преобразование каждого строкового кода в предложение
    let speechSenteces = sentencesCodes.map(code => getSentence(code, speechComponents));
    
    let speech = speechSenteces.join(" ");
    
    return speech;
}


// Вспомогательные функции

// Генерация строкового кода
function generateStringCode() {
    let stringCode = `${Math.floor(Math.random() * 9999)}`;
    while (stringCode.length < 4) {
        stringCode = "0" + stringCode;
    }

    return stringCode;
}

// Условие тавтологии
function isTautology(code, previousCode, step) {
    let notWorkCondition = (typeof code !== "string" || typeof previousCode !== "string") || 
        (isNaN(code) || isNaN(previousCode)) || 
        (code.length !== 4 || previousCode.length !== 4);
    if (notWorkCondition) {
        return true;  // приравнять к тавтологии
    }

    let condtionValue = false;
    for (let i = 0; i < code.length; i++) {
        condtionValue = condtionValue || (Math.abs(+code[i] - +previousCode[i]) < step);
        if (condtionValue) return true;
    }


    return condtionValue;
}

// Генерация предложения из кода
function getSentence(code, speechComponents) {
    let sentenceComponents = [];

    for (let i = 0; i < code.length; i++) {
        let component = speechComponents[i][+code[i]];

        let previousComponent = (i > 0) ? sentenceComponents[i - 1] : undefined;
        if (!(i - 1) && previousComponent.slice(-1) === "!") {
            // сделать первый символ верхнего регистра, т.к. первый компонент предложения оканчивается восклицательным знаком
            component = makeFirstSymbolToUpperCase(component);
        }
        if (i == 2 && previousComponent.includes(" и ")) {
            // сформировать множественное число для сказуемого, т.к. в предыдущем компоненте больше одного подлежащего.
            let partsOfComponent = component.split(" ");
            let verb = partsOfComponent.find(part => part.includes("ет"));
            let verbPosition = partsOfComponent.indexOf(verb);

            // сделать глаголу множественное число, заменив "ет" на "ют"
            let partPosition = verb.indexOf("ет");
            let pluralVerb = verb.slice(0, partPosition) + "ют";

            partsOfComponent.splice(verbPosition, 1, pluralVerb);
            component = partsOfComponent.join(" ");
        }
        sentenceComponents.push(component);
    }

    let sentence = sentenceComponents.join(" ");

    return sentence;
}

// Сделать первый символ в верхнем регистре
function makeFirstSymbolToUpperCase(string) {
    if (typeof string !== "string") return null;

    let firstSymbol = string[0];

    return firstSymbol.toUpperCase() + string.slice(1);
}


console.log(getSpeechByUniversalCode(10));