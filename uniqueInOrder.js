// Implement the function unique_in_order which takes as argument 
// a sequence and returns a list of items without any elements with 
// the same value next to each other and preserving the original order of elements.

function uniqueInOrder(inputSequence) {
    let currentSequence = (typeof inputSequence === "string") ? inputSequence.split("") : inputSequence.slice();
    
    let outputSequence = currentSequence.filter((element, index) => element !== currentSequence[index + 1]);
    return outputSequence;
}


console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder("ABBCcAD"));
// ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3]));
// [1,2,3]