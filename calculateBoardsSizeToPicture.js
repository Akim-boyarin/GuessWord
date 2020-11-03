// Расчитать размеры досок для картины, сделанной из них. 
// Доски сделаны по принципу рвномерного увеличения к центру.

function calculateBoardsSizeToPicture(minSize, maxSize, boardsNumber) {
    let steps = Math.round(boardsNumber / 2);
    let consecutiveSizeDifference = (maxSize - minSize) / (steps - 1);

    let sizes = [];
    let currentSize;
    for (let i = 0; i < steps; i++) {
        currentSize = minSize + consecutiveSizeDifference * i;
        sizes.push(currentSize);
    }

    let secondPart = sizes.slice().reverse();
    if (boardsNumber % 2) {
        secondPart.splice(0, 1); 
    }
    sizes = sizes.concat(secondPart);

    return sizes;
}

console.log(calculateBoardsSizeToPicture(20, 40, 6));




