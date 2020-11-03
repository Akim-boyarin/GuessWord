// получить цвет в формате HEX

function getRandomHEXColor() {
    let color = "#";
    for (let i = 0; i < 3; i++) {
        let numberForColor = (getRandomNumber(0, 255)).toString(16);
        if (numberForColor.length < 2) {
            numberForColor = "0" + numberForColor;
        }
        color += numberForColor; 
    }

    return color;
}

let colors = [];
let colorsLength = 6; // количество цветов
for (let i = 0; i < colorsLength; i++) {
    colors.push(getRandomHEXColor());
}
console.log(colors);



// вспомогательные функции
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}