"use strict";
/*
  Writing Another Generic Function
  - input [1,4,7] > return random number
  - input [true, false, true] > return random boolean
  - input [{}, {}, {}] <Cat> > return random Cat

*/
function getRandomElement(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
const num = getRandomElement([1, 2, 3]);
console.log(num);
const str = getRandomElement(['a', 'b', 'c']);
console.log(str);
const cats = [
    { name: 'bic', age: 5 },
    { name: 'miu', age: 2 },
    { name: 'bu', age: 1 },
];
const cat = getRandomElement(cats);
console.log(cat);
