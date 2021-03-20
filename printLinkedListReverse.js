/* 
    Задача - вывести элементы связного списока в обратном порядке.
    Реализовать:
    1) Через рекурсию
    2) Через цикл
*/


/*
    Общая логика реализации:
    Взять стек и поместить в него элементы связного списка в ходе прямого прохода по данному списку,
    затем доставать и отображать.
*/

// Связный список. 
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null,
                }
            }
        }
    }
};

// Рекурсия

// Моя реализация, изначально
function printListElementsInReverse(linkedList) {
    let elementsStack = [];

    // Код заполнения стека, рекурсия
    function pushIntoStack(currentList) {
        if (currentList !== null) {
            elementsStack.push(currentList);
            pushIntoStack(currentList.next);
        }
    }
    
    
    pushIntoStack(linkedList);

    // вынуть элементы из стека и отобразить
    while (elementsStack.length > 0) {
        let lastElement = elementsStack.pop();
        console.log(lastElement);
    }

}


// Сейчас я вижу что для реализации той же идеи 
// можно использовать стек контекстов вызова:
function printListElementsInReverse(linkedList) {
    if (linkedList.next !== null) {
        printListElementsInReverse(linkedList.next);
    }

    console.log(linkedList);
}



// Цикл

// Реализация 
function printListElementsInReverse(linkedList) {
    let elementsStack = [];

    // Заполнение стека
    let currentElement = linkedList;

    while (currentElement !== null) {
        elementsStack.push(currentElement);

        currentElement = currentElement.next;
    }


    while (elementsStack.length > 0) {
        let lastElement = elementsStack.pop();
        console.log(lastElement);
    }
}


/*
    В этом коде я впервые стал использовать структуры данных (связный список, стек) как категории 
    мышления при построении логики кода. Собственно, этим и делюсь :)

    В голове в ходе написания кода были четко разделены:
    1) концепции структур данных  
    2) синтаксис.

    В частности, было: "здесь нужен стек - помещать, затем доставать." 
    А реализован он в массиве, массив воспринимается как часть синтаксического 
    инструментария.

    Написание кода подобным образом используется?

    И интересно, как бы ты решил подобное. Видишь более оптимальные способы?
*/
