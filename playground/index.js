/*
  Array Types SOLUTION

*/
/////////////////////////////////////
// PART 1
/////////////////////////////////////
// Create an empty array of numbers called "ages":
var age = [];
/////////////////////////////////////
// PART 2
/////////////////////////////////////
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var product = { name: 'coffee mug', price: 11.5 };
/////////////////////////////////////
// PART 4
/////////////////////////////////////
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (products) {
    return products.reduce(function (acc, cur) {
        return (acc += cur.price);
    }, 0);
};
var productsList = [
    { name: 'coffee mug', price: 11.5 },
    { name: 'tea', price: 9.99 },
];
var total = getTotal(productsList);
console.log(total);
