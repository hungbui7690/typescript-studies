/*
  Union Types SOLUTION
  
*/
//////////////////////////////////////
// PART 1
//////////////////////////////////////
// Create a variable called highScore that can be a number OR a boolean
var highScore = 9;
//////////////////////////////////////
// PART 2
//////////////////////////////////////
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [1, 2, 3];
stuff = ['nick', 'joe'];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
//////////////////////////////////////
// PART 6
//////////////////////////////////////
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var greet = function (name) {
    if (typeof name === 'string')
        console.log("Hello, ".concat(name));
    else {
        name.forEach(function (n) {
            console.log("Hello, ".concat(n));
        });
    }
};
greet('joe');
greet(['nick', 'john']);
