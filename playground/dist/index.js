"use strict";
/*
  Class Fields In TypeScript
  - score & numLives in previous chapter

*/
class Player {
    constructor(first, last) {
        // (***)
        this.score = 0;
        this.numLives = 10;
        this.first = first;
        this.last = last;
    }
}
const elton = new Player('Elton', 'Steele');
console.log(elton);
// (***)
elton.score = 1000;
