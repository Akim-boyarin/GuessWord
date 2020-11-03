// получить цвет в формате RGB

function getRandomRGBColor() {
    return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
}


let colors = [];
let colorsNumber = 6;
for (let i = 0; i < colorsNumber; i++) {
    let color = getRandomRGBColor();
    colors.push(color);
}
console.log(colors);



// вспомогательные функции
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}