
// указан месяц, указан день 1 числа. Составить календарь месяца.

var month = prompt("Какой месяц?");

var isBissextile = confirm("Год високосный?");

var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

var monthDays = {
    Январь: 31,
    Февраль: 28,
    Март: 31,
    Апрель: 30,
    Май: 31,
    Июнь: 30,
    Июль: 31,
    Август: 31,
    Сентябрь: 30,
    Октябрь: 31,
    Ноябрь: 30,
    Декабрь: 31 
}

if (isBissextile) {
    monthDays["Февраль"] = 29;
}

var daysNumber;

for (var m = 0; m < months.length; m++) {
    if (month === months[m]) {
        daysNumber = monthDays[month];
    } 
}

daysNumber;

var firstDay = prompt("Какой день первого числа?");

var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

for (var d = 0; d < days.length; d++) {
    if (firstDay === days[d]) {
        for (var j = 0; j < d; j++) {
            var day = days.shift();
            days.push(day);
        }
    }
}

console.log(month + ".");

for (var i = 0; i < daysNumber; i++) {
    console.log((i + 1) + " число, " + days[i % days.length].toLowerCase());
}