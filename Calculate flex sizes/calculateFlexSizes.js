// calculation of sizes in flex-container 
let data = {
    parentSize: 300,
    blocks: [{
            flex: "1 0 50px"
        },
        {
            flex: "3 0 50px"
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



// basic function
function calculateSizes(initialData) {
    let dataItemsNames = ["flexGrow", "flexShrink", "flexBasis"];

    let workData = [];
    initialData.blocks.forEach(block => {
        let blockData = {};
        let flexData = getNumbersFromString(block.flex);
        dataItemsNames.forEach((name, nameIndex) => {
            blockData[name] = flexData[nameIndex];
        })
        workData.push(blockData);
    });
    

    let flexBasisesSum = workData.reduce((sum, blockData) => sum + blockData.flexBasis, 0);
    let sizesDifference = initialData.parentSize - flexBasisesSum;

    let flexSizes = !sizesDifference ? workData.map(block => block.flexBasis) :
        (sizesDifference >= 0 ? calculateSizesWidthFlexGrows(sizesDifference, workData) 
            : calculateSizesWidthFlexShrinks(sizesDifference, workData));

    return flexSizes;
}


// secondary functions

// calculation with flex-grows
function calculateSizesWidthFlexGrows(freeSpace, blocksData) {
    let minimumShareOfFreeSpace = freeSpace / blocksData.reduce((sum, blockData) => sum + blockData.flexGrow, 0);

    let flexSizes = blocksData.map(blockData => +(blockData.flexBasis + minimumShareOfFreeSpace * blockData.flexGrow).toFixed(2));

    return flexSizes;
}


// calculation with flex-shrink
function calculateSizesWidthFlexShrinks(negativeSpace, blocksData) {
    let theSumOfDataMultiplications = blocksData.reduce((sum, blockData) => sum + blockData.flexBasis * blockData.flexShrink, 0);

    let normalizedCompressionRatios = blocksData.map(blockData => (blockData.flexBasis * blockData.flexShrink) / theSumOfDataMultiplications);

    let flexSizes = blocksData.map((blockData, index) => +(blockData.flexBasis - normalizedCompressionRatios[index] * Math.abs(negativeSpace)).toFixed(2));
    
    return flexSizes;
}



// get list of number-values in string
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

