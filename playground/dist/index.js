/*
  Target Option
  - pic
  - farmstand.ts
    > here we write an arrow function, and in .js file, we see arrow function and const keyword as well > this is because:
        "target": "es2016"

/////////////////////////////////////

  Strict Option
  - default = true
  
  - set strict = false
      "strict": false
      "noImplicitAny": true
    > check code below

*/
const norma = {
    breed: 'Silk',
    eggsPerWeek: 4,
    name: 'Norma',
    age: 2,
};
// err
function doThing(thing) {
    console.log(thing);
}
