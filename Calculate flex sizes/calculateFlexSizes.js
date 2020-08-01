// вычислить итоговые размеры флекс-элементов

function calculateSizes(initialData) {
    let workData = convertData(initialData);

    let flexBasisSum = workData.reduce((sum, block) => sum + block.flexBasis, 0);
    let sizesDifference = initialData.parentSize - flexBasisSum;

    let flexSizes = !sizesDifference ? workData.map(block => block.flexBasis) :
        (sizesDifference > 0 ? calculateSizesWidthFlexGrows(sizesDifference, workData) 
            : calculateSizesWidthFlexShrinks(sizesDifference, workData));

    return flexSizes;
}

// вычисление  и отображение в удобном виде
let data = {
    parentSize: 300,
    blocks: [{
            flex: "1 0 50px",
        },
        {
            flex: "3 0 50px",
        },
    ]
}

let sizes = calculateSizes(data);

let sizesInGoodVisible = sizes.map((size, index) => {
    let sizeInGoodVisible = {};
    sizeInGoodVisible[`size-${index + 1}`] = size;
    return sizeInGoodVisible; 
});
console.log(sizesInGoodVisible);




// вспомогательные функции

// конвертирование данных в оптимальный для обработки формат
function convertData(incomingData) {
    let dataItemsNames = ["flexGrow", "flexShrink", "flexBasis"];

    let convertedData = [];
    incomingData.blocks.forEach(block => {
        let blockData = {};
        let flexData = getNumbersFromString(block.flex);
        dataItemsNames.forEach((name, nameIndex) => {
            blockData[name] = flexData[nameIndex];
        });
        convertedData.push(blockData);
    });

    return convertedData;
}

// вычисление размеров элементов при увеличивании
function calculateSizesWidthFlexGrows(freeSpace, blocksData) {
    let minimumShareOfFreeSpace = freeSpace / blocksData.reduce((sum, blockData) => sum + blockData.flexGrow, 0);

    let flexSizes = blocksData.map(blockData => +(blockData.flexBasis + minimumShareOfFreeSpace * blockData.flexGrow).toFixed(2));

    return flexSizes;
}


// вычисление размеров элементов при уменьшении
function calculateSizesWidthFlexShrinks(negativeSpace, blocksData) {
    let theSumOfDataMultiplications = blocksData.reduce((sum, blockData) => sum + blockData.flexBasis * blockData.flexShrink, 0);

    let normalizedCompressionRatios = blocksData.map(blockData => (blockData.flexBasis * blockData.flexShrink) / theSumOfDataMultiplications);

    let flexSizes = blocksData.map((blockData, index) => +(blockData.flexBasis - normalizedCompressionRatios[index] * Math.abs(negativeSpace)).toFixed(2));
    
    return flexSizes;
}



// получить все числа из строки
function getNumbersFromString(string) {
    let baseForNumbers = [];
    let necessarySigns = ".0123456789"; // "." for decimal fractions
    let delimeterSymbol = "#";

    for (let i = 0; i < string.length; i++) {
        if (necessarySigns.includes(string[i])) baseForNumbers.push(string[i]);
        if (necessarySigns.includes(string[i]) && !necessarySigns.includes(string[i + 1])) baseForNumbers.push(delimeterSymbol);
    }

    let numbers = baseForNumbers.join("").split(delimeterSymbol).filter(elem => !!elem).map(element => +element);
    return numbers;
}

